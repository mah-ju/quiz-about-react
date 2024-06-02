import { Question } from "@/types/Question";
import { SquareX } from "lucide-react";
type Props = {
  onClose: () => void;
  userOptions: number[];
  questions: Question[];
};

export const Modal = ({ onClose, userOptions, questions }: Props) => {
  const countMatches = (questions: Question[], userOptions: number[]) => {
    let matches = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].options[userOptions[i]].isCorrect) {
        matches++;
      }
    }

    return matches;
  };

  const numMatches = countMatches(questions, userOptions);

  const getMessage = () => {
    if (numMatches >= 8) {
      return "Congratulations!😀";
    } else if (numMatches < 8 && numMatches >= 6) {
      return "Good!😊";
    } else {
      return "Keep studing!😉";
    }
  };

  return (
    <div
      onClick={onClose}
      className="w-full h-full fixed top-0 flex justify-center items-center bg-black/90"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-8 border-purple-300/40  relative w-[90%] md:w-[50%] rounded-md pb-10"
      >
        <SquareX
          size={28}
          onClick={onClose}
          className="absolute right-0 m-3 cursor-pointer"
        />
        <h1 className=" text-4xl md:mx-2 text-center mt-10 font-medium">
          You finished the React Quiz!!
        </h1>

        <p className="md:text-xl text-lg text-center font-bold mt-6 bg-lime-100 mx-16 md:mx-20 py-4 rounded-md">
          Correct Answers: {numMatches}
        </p>
        <p className="text-3xl text-center text-sky-300 font-bold mt-8">
          {getMessage()}
        </p>
      </div>
    </div>
  );
};
