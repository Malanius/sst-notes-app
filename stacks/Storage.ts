import { Bucket, StackContext, Table } from "sst/constructs";

export function Storage({ stack }: StackContext) {
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  const bucket = new Bucket(stack, "Uploads");

  return {
    bucket,
    table,
  };
}