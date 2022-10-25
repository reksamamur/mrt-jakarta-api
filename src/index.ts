import api from "./api";

async () => {
  try {
    api;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
