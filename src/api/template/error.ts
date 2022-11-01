export const Error = (code: number, message: string) => {
  return {
    status: "error",
    code: code,
    message: message,
  };
};
