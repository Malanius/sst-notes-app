import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/Api";
import { Storage } from "./stacks/Storage";

export default {
  config(_input) {
    return {
      name: "sst-notes-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(Storage).stack(ApiStack);
  },
} satisfies SSTConfig;
