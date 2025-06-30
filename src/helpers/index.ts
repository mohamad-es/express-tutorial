import crypto = require("crypto");

export const random = () => crypto.randomBytes(128).toString("base64");
