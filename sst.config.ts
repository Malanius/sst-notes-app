import { SSTConfig } from "sst";
import { API } from "./stacks/Api";

export default {
  config(_input) {
    return {
      name: "sst-notes-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
