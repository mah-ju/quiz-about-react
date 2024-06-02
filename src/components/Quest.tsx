import { Question } from "@/types/Question";
import { useEffect, useState } from "react";
import {
  SquareChevronRight,
  SquareChevronLeft,
  SquareCheck,
} from "lucide-react";
type Props = {
  count: number;
  question: Question;
  onNext: () => void;
  onBack: () => void;
  userClickOption: number;
  onAnswer: (answer: number) => void;
  showBackBtn: boolean;
  openModal: () => void;
  showCompleteBtn: boolean;
};
export const Quest = ({
  count,
  question,
  onNext,
  onBack,
  userClickOption,
  onAnswer,
  showBackBtn,
  openModal,
  showCompleteBtn,
}: Props) => {
  const letters = ["A", "B", "C", "D", "E"];

  const [selectAnswer, setSelectAnswer] = useState<number | null>(null);

  useEffect(() => {
    setSelectAnswer(userClickOption);
  }, [userClickOption]);

  const getSelectClass = (key: number) => {
    if (selectAnswer !== null && selectAnswer === key) {
      return "bg-sky-300";
    }
  };

  const displayUserOption = () => {
    return selectAnswer !== undefined
      ? `Option: ${letters[userClickOption]}`
      : "";
  };

  return (
    <div className="flex flex-col items-center mt-1">
      <div
        className="border-8 w-[90%] md:w-[60%] flex justify-center
       border-purple-300/40 py-3 md:py-4 mx-5 mt-2 md:mt-4 rounded-lg"
      >
        <h1 className="text-3xl  md:text-5xl text-center font-medium">
          Quiz about React.js
        </h1>
      </div>

      <div
        className="bg-purple-300/40 py-4
       mt-2 rounded-lg w-[90%] md:w-[60%]"
      >
        <p className="text-xl font-medium text-center mx-4 lg:text-2xl">
          {count}. {question.question}
        </p>
        <ul className="text-lg mx-6 mt-4 space-y-2 font-medium">
          {question.options.map((item, key) => (
            <li
              key={key}
              onClick={() => {
                onAnswer(key);
              }}
              className={`border bg-lime-100 hover:bg-sky-200
               border-black p-1 cursor-pointer ${getSelectClass(key)}`}
            >
              <span className="font-bold">{letters[key]}.</span> {item.text}
            </li>
          ))}
        </ul>

        {selectAnswer !== null && (
          <p className="text-center text-lg mt-1 font-medium">
            {displayUserOption()}
          </p>
        )}

        <div className="flex justify-center mt-3 space-x-8">
          {showBackBtn && (
            <SquareChevronLeft
              onClick={onBack}
              className="cursor-pointer"
              size={32}
            />
          )}

          {showCompleteBtn ? (
            <SquareCheck
              onClick={openModal}
              className="cursor-pointer"
              size={32}
            />
          ) : (
            <SquareChevronRight
              onClick={onNext}
              className="cursor-pointer"
              size={32}
            />
          )}
        </div>
      </div>
    </div>
  );
};
