export const NotFound = (code: number, message: string) => {
  return {
    status: "not-found",
    code: code,
    message: message,
  };
};
