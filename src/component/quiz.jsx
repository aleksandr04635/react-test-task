import { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function Quiz({ questions }) {
  console.log("questions", questions);
  const [number, setNumber] = useState(1);
  console.log("number", number);
  const [givenAnswers, setGivenAnswers] = useState(
    questions.map((question, i) => "none")
  );
  console.log("givenAnswers", givenAnswers);

  const [selectedOptions, setSelectedOptions] = useState(
    questions.map((question, i) => null)
  );
  console.log("selectedOptions", selectedOptions);

  const [finished, setFinished] = useState(false);

  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  console.log("numberOfCorrectAnswers", numberOfCorrectAnswers);

  const next = function () {
    if (givenAnswers[number - 1] !== "none") {
      if (number < questions.length) {
        setNumber(number + 1);
      } else {
        setFinished(true);
      }
    }
  };

  const giveAnswer = function (i) {
    //console.log("ans given, i", i);
    //console.log("ans given", questions[number - 1].answers[i].isCorrect);
    if (givenAnswers[number - 1] == "none") {
      const newAnswers = givenAnswers.map((ans, j) =>
        j == number - 1
          ? questions[number - 1].answers[i].isCorrect == true
            ? "true"
            : "false"
          : givenAnswers[j]
      );
      setGivenAnswers(newAnswers);
      if (questions[number - 1].answers[i].isCorrect == true) {
        setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
      }
      const newOptions = selectedOptions.map((opt, j) =>
        j == number - 1 ? i : selectedOptions[j]
      );
      setSelectedOptions(newOptions);
    }
    /*  if (number < questions.length) {
      setNumber(number + 1);
    } else {
      setFinished(true);
    } */
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[600px] bg-bg-green mx-auto p-2">
        <div className=" bg-white mx-auto rounded-lg overflow-hidden p-5">
          {finished == false ? (
            <>
              <p className="text-bg-green pb-2">
                Question {number} of {questions.length}
              </p>
              <hr />
              <h3 className=" py-2">{questions[number - 1].question}</h3>
              {questions[number - 1].answers.map((answer, i) => (
                <div
                  key={i}
                  onClick={() => giveAnswer(i)}
                  className={
                    " mx-auto my-1 rounded-md py-2 px-4 w-full" +
                    (selectedOptions[number - 1] !== i
                      ? " bg-bg-gray-neytral "
                      : givenAnswers[number - 1] == "true"
                      ? " bg-bg-green-positive "
                      : " bg-bg-red-negative ") +
                    (givenAnswers[number - 1] == "none"
                      ? " cursor-pointer "
                      : " cursor-not-allowed ")
                  }
                >
                  {answer.text}
                </div>
              ))}
              <button
                className={
                  "  py-2 px-5 text-white rounded-md my-3" +
                  (givenAnswers[number - 1] !== "none"
                    ? " bg-bg-green cursor-pointer "
                    : " bg-bg-green/30 cursor-not-allowed ")
                }
                onClick={next}
              >
                Next
              </button>
            </>
          ) : (
            <p>
              {`Finished. ${numberOfCorrectAnswers} answers out of
            ${questions.length} were correct.`}
            </p>
          )}
          {givenAnswers.length > 1 && (
            <div className="flex flex-row gap-2 mt-2">
              {givenAnswers.map((answer, i) => (
                <div
                  key={i}
                  className={
                    " h-8 w-8 rounded-full flex items-center justify-center" +
                    (givenAnswers[i] == "true"
                      ? " bg-bg-green-positive "
                      : givenAnswers[i] == "false"
                      ? " bg-bg-red-negative "
                      : " bg-bg-gray-neytral ")
                  }
                >
                  {givenAnswers[i] == "true" ? (
                    <TiTickOutline className="h-6 w-6 text-white" />
                  ) : givenAnswers[i] == "false" ? (
                    <FaXmark className="h-5 w-5 text-white" />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
