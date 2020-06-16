import { pactWith } from "jest-pact";
import { Matchers } from "@pact-foundation/pact";
import { fetchTodos } from "../main";

const pactOptions = {
  consumer: "consumer",
  provider: "provider",
  port: 1234,
};
const baseUrl = `http://localhost:${pactOptions.port}`;

pactWith(pactOptions, (provider) => {
  describe("example pact consumer tests", () => {
    beforeAll(async () => {
      provider.addInteraction({
        state: "i have a list of todos",
        uponReceiving: "a request for todos",
        withRequest: {
          method: "GET",
          path: "/api/todos",
          headers: { Accept: "application/json" },
        },
        willRespondWith: {
          status: 200,
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: Matchers.eachLike({
            id: Matchers.integer(),
            name: Matchers.string(),
            due: Matchers.iso8601DateTimeWithMillis(),
            tasks: Matchers.eachLike({
              id: Matchers.integer(),
              name: Matchers.string(),
              done: Matchers.boolean(),
            }),
          }),
        },
      });
    });

    it("should fetch todos", async () => {
      await fetchTodos({ baseUrl });
    });
  });
});
