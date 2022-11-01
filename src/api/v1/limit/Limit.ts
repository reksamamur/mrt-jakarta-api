import expressLimit from "express-rate-limit";
import { Error } from "../../template";

const windowMs = 10 * 60 * 1000;
const max = 20;
const statusCode = 429;

const message = JSON.stringify(
  Error(429, "Too many requests, please try again later")
);

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
  message: JSON.parse(message),
  statusCode: statusCode,
  standardHeaders: true,
  legacyHeaders: false,
});
