// Entry point for the application
import { db } from "@/db";
import { questions } from "@/db/schema";
import { revalidatePath } from "next/cache";


// This is a react server component, it has access to DB
export default async function Home() {
  const allQuestions = await db.query.questions.findMany();
  return (
    <main className="">
      {allQuestions.map((question) => (
        <div key={question.id}>{question.prompt}</div>
      ))}

      <form
        // this is a server action
        action={async (formData: FormData) => {
          "use server";
          const title = formData.get("title") as string;
          await db.insert(questions).values({
            prompt: title,
          });
          revalidatePath("/");
        }}
      >
        <label htmlFor="title">Title</label>
        <input className="text-black" id="title" name="title" />
        <button>Submit</button>
      </form>
    </main>
  );
}
