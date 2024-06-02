"use client";
import { questions } from "@/data/question";
import { Quest } from "@/components/Quest";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { ProgressBar } from "@/components/ProgressBar";
export default function Home() {
  const [currentQuest, setCurrentQuest] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  const nextQuest = () => {
    if (userAnswer[currentQuest] === undefined) {
      alert("Please, choose one option!");
    } else {
      setCurrentQuest((prevQuest) => (prevQuest + 1) % questions.length);
    }
  };

  const backQuest = () => {
    setCurrentQuest(
      (prevQuest) => (prevQuest - 1 + questions.length) % questions.length
    );
  };

  const handleAnswer = (answer: number) => {
    setUserAnswer((prevAnswers) => {
      const updateAnswers = [...prevAnswers];
      updateAnswers[currentQuest] = answer;
      return updateAnswers;
    });
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <main>
      <ProgressBar currentValue={currentQuest} maxValue={questions.length} />
      <Quest
        count={currentQuest + 1}
        question={questions[currentQuest]}
        onBack={backQuest}
        onNext={nextQuest}
        userClickOption={userAnswer[currentQuest]}
        onAnswer={handleAnswer}
        showBackBtn={currentQuest > 0}
        openModal={toggleModal}
        showCompleteBtn={currentQuest === questions.length - 1}
      />

      {showModal && (
        <Modal
          onClose={toggleModal}
          userOptions={userAnswer}
          questions={questions}
        />
      )}
    </main>
  );
}
