import { Api, StackContext, use } from "sst/constructs";
import { Storage } from "./Storage";

export function ApiStack({ stack }: StackContext) {
  const { table } = use(Storage);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}
