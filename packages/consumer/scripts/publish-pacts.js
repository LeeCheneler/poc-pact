const path = require("path");
const { Publisher } = require("@pact-foundation/pact");
const packageJson = require("../package.json");

const pactBrokerUrl = "http://localhost:9292";
const pactsDirectory = path.resolve(process.cwd(), "pact/pacts");

const publisher = new Publisher({
  pactBroker: pactBrokerUrl,
  pactFilesOrDirs: [pactsDirectory],
  consumerVersion: packageJson.version,
});

publisher.publishPacts();
