import { SSTConfig } from "sst";
import { Storage } from "./stacks/Storage";

export default {
  config(_input) {
    return {
      name: "sst-notes-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(Storage);
  },
} satisfies SSTConfig;
