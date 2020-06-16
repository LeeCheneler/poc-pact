const { Verifier } = require("@pact-foundation/pact");

describe("verifying provider", () => {
  it("should verify contracts", async () => {
    let opts = {
      providerBaseUrl: "http://localhost:3000",
      pactBrokerUrl: "http://localhost:9292/",
      provider: "provider",
      publishVerificationResult: true,
      providerVersion: "1.0.0",
    };

    await new Verifier().verifyProvider(opts);
    console.log("Pacts successfully verified!");
  });
});
