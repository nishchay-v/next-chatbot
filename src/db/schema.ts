import { pgTable, serial, text } from "drizzle-orm/pg-core";

// This is the schema for the database. It is used by the drizzle-orm library to generate the database tables.
export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  prompt: text("prompt").notNull(),
});

export type Question = typeof questions.$inferSelect;
