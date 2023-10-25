export const onError = (error: unknown) => {
  let message = "";

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = JSON.stringify(error);
  }

  alert(message);
};
