import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const getGoogleRedirectUrl = () => {
  const backendUrl = (process.env.BACKEND_URL || "http://localhost:8000").trim().replace(/\/+$/, "");
  const redirectPath = (process.env.GOOGLE_REDIRECT_URL || "/api/v1/auth/google/callback").trim();

  if (isProduction && backendUrl.includes("localhost")) {
    throw new Error("BACKEND_URL must be your deployed backend URL in production");
  }

  return new URL(redirectPath, backendUrl).toString();
};

const googleRedirectURL = getGoogleRedirectUrl();

console.log("Google OAuth2 Client initialized with redirect URL:", googleRedirectURL);


export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  googleRedirectURL
);

export const scopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
];