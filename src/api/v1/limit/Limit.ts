import expressLimit from "express-rate-limit";

const windowMs = 10 * 60 * 1000;
const max = 10;
const message =
  "You have reached maximum retries. Please try again after 30 minutes";
const statusCode = 429;

/**
 * Limiter API Request
 * 
 * windowMs: The time frame for which requests are checked/remembered.
 * 
 * max: Maximum number of connections to allow during window.
 */
export const Limiter = expressLimit({
  windowMs: windowMs,
  max: max,
  message: message,
  statusCode: statusCode,
  standardHeaders: true,
  legacyHeaders: false,
});
