// Entry point for the application
import { db } from "@/db";
import { questions } from "@/db/schema";
import { revalidatePath } from "next/cache";

// This is a react server component, it has access to DB
export default async function Home() {
  const allQuestions = await db.query.questions.findMany();
  return (
    <main className="w-full h-screen bg-slate-200 flex flex-col items-center overscroll-contain">
      <div className="justify-center space-y-4 overscroll-contain container">
        {allQuestions.map((question) => (
          <div
            key={question.id}
            className="w-full max-w-md p-4 bg-white rounded shadow-md"
          >
            {question.prompt}
          </div>
        ))}
      </div>

      <form
        action={async (formData: FormData) => {
          "use server";
          const title = formData.get("title") as string;
          await db.insert(questions).values({
            prompt: title,
          });
          revalidatePath("/");
        }}
        className="w-full max-w-md p-4 bg-white rounded shadow-md"
      >
        <div className="flex flex-col space-y-2">
          <input
            className="text-black border border-gray-300 rounded p-2 w-full"
            id="title"
            name="title"
          />
          <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
