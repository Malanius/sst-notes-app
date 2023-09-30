import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/Api";
import { AuthStack } from "./stacks/Auth";
import { FrontendStack } from "./stacks/Frontend";
import { Storage } from "./stacks/Storage";

export default {
  config(_input) {
    return {
      name: "sst-notes-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(Storage).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
  },
} satisfies SSTConfig;
