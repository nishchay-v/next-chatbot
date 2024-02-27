// Without a defined matcher, this one line applies next-auth middleware to all routes in the project
export { default } from "next-auth/middleware";

// Applies next-auth to the specified matching routes
export const config = { matcher: "/chats" };
