import type { NextAuthOptions, RequestInternal } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(
        credentials,
        req: Pick<RequestInternal, "headers" | "body" | "query" | "method">
      ) {
        // TODO: get user from db to verify credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: "1",
          name: "neon",
          email: "test@auth.com",
          password: "nextauth",
        };
        return credentials?.username === user.name &&
          credentials?.password === user.password
          ? user
          : null;
      },
    }),
  ],
};
