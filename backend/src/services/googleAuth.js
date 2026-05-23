import { google } from "googleapis";
import dotenv from "dotenv";
import { log } from "node:console";
dotenv.config();


const googleRedirectURL = process.env.FRONTEND_URL + process.env.GOOGLE_REDIRECT_URL;

console.log("Google OAuth2 Client initialized with redirect URL:", googleRedirectURL);


export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  googleRedirectURL
);

console.log("Google OAuth2 Client initialized with redirect URL:", googleRedirectURL);

export const scopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
];