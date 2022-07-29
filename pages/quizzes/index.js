import { useState } from "react";
import Link from "next/link";
import Quiz from "../../components/elements/Quiz"
import Messages from "../../components/elements/Messages"

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
    );
    
    const data = await res.json();

    return {
      props: { quizzes: data.questions },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
};

const Quizzes = ({ quizzes }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [result, setResult] = useState(false);

  const handlePrevious = () => {
    let prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    let nextQues = currentQuestion + 1;
    if (selectedOptions[currentQuestion]) {
      setSelectedOptions([
        (selectedOptions[currentQuestion].isRejected =
          quizzes[currentQuestion].options[
            selectedOptions[selectedOptions.length - 1].answerByUser
          ].isRejection),
      ]);
      setSelectedOptions([...selectedOptions]);
      if (nextQues == quizzes.length) {
        setResult(true);
      }
    }
    nextQues < quizzes.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = {
        answerByUser: answer,
      }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  return (
    <section className="quizzes">
      {result ? (
        <Messages state={'success'}/>
      ) : (
        <div>
          {selectedOptions[currentQuestion - 1]?.isRejected !== true ? (
            <div className="quizzes__header">
              <h1 className="quizzes__header-number">
                Question {currentQuestion + 1} of {quizzes.length + 1}
              </h1>
              <h3 className="quizzes__header-question">
                {quizzes[currentQuestion].question}
              </h3>
            </div>
          ) : null}

          {selectedOptions[currentQuestion - 1]?.isRejected !== true ? (
            <Quiz 
            quizzes={quizzes}
            currentQuestion={currentQuestion}
            selectedOptions={selectedOptions}
            handleAnswerOption={handleAnswerOption}
            />
          ) : (
            <Messages state={'failure'}/>
 
          )}
        </div>
      )}
      {selectedOptions[currentQuestion - 1]?.isRejected === true ||
      result === true ? (
        <div className="quizzes__footer">
          <Link href={"/"}>
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      ) : (
        <div className="quizzes__footer">
          {currentQuestion !== 0 ? (
            <button className="btn btn-secondary" onClick={handlePrevious}>
              Back
            </button>
          ) : null}
          <button
            className="btn btn-primary"
            disabled={selectedOptions.length === 0}
            onClick={handleNext}
          >
            Continue
          </button>
        </div>
      )}
    </section>
  );
};

export default Quizzes;
