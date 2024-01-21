// Entry point for the application
import { db } from "@/db";
import { questions } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { Urbanist } from "next/font/google";
import Image from "next/image";

import ForwardIcon from "@/icons/icon-ios-arrow-right.svg";

const urbanist = Urbanist({ subsets: ["latin"], display: "swap" });

// This is a react server component, it has access to DB
export default async function Home() {
  const allQuestions = await db.query.questions.findMany();
  return (
    <main className="h-full flex flex-col justify-end">
      <div>
        {allQuestions.map((question) => (
          <div
            key={question.id}
            className={`${urbanist.className} p-2 m-2 border w-max border-gray-400 rounded-xl shadow-l`}
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
        className="flex flex-row items-center my-4 border-2 rounded-full border-gray-800 p-4 mx-2 shadow-xl"
      >
        <textarea
          className="p-1 w-full focus:outline-none overflow-auto"
          id="title"
          name="title"
          placeholder="Start typing..."
        />
        <button
          title="send"
          className="bg-orange-400 text-white aspect-square rounded-full mx-2 hover:bg-orange-500 w-12 h-12 grid"
        >
          <Image
            alt="send icon"
            src={ForwardIcon}
            className="place-self-center"
          />
        </button>
      </form>
    </main>
  );
}
