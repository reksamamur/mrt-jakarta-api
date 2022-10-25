export const Success = (data: any, code: number, message: string) => {
  return {
    status: "success",
    code: code,
    data: data,
    message: message,
  };
};
