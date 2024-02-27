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
  allQuestions.reverse();
  return (
    <main className="h-full flex flex-col justify-end relative">
      <div className="overflow-y-auto h-full pt-2 px-4 mb-24 pb-4 [overflow-anchor:none] flex flex-col-reverse ">
        {allQuestions.map((question) => (
          <div
            key={question.id}
            className={`${urbanist.className} p-2 my-2 border w-max border-gray-400 rounded-xl shadow-l max-w-full`}
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
        className="flex flex-row items-center my-4 border-2 rounded-full border-gray-800  shadow-xl absolute bg-white [width:97.8%] [margin-left:1.2%]"
      >
        <textarea
          className="p-4 w-full focus:outline-none overflow-auto rounded-full"
          id="title"
          name="title"
          placeholder="Start typing..."
        />
        <button
          type="submit"
          title="send"
          className="bg-orange-400 aspect-square rounded-full mx-4 hover:bg-orange-500 w-12 h-12 grid"
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
