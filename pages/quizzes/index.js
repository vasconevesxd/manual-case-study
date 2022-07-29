import { useState } from "react";
import Link from "next/link";

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
      console.log(error);
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
        <div className="quizzes__content">
          <div className="quizzes__message">
            <h3>
              “Great news! We have the perfect treatment for your hair loss.
              Proceed to
              <a href={"/"}>
                <h3>www.manual.co</h3>
              </a>
              , and prepare to say hello to your new hair!
            </h3>
          </div>
        </div>
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
            <div
              className={`quizzes__content ${
                currentQuestion == 0 ? "grid-3" : "grid-2"
              }`}
            >
              {quizzes[currentQuestion].options.map((quiz, index) => (
                <div
                  className="quizzes__content-input"
                  key={index}
                  onClick={(e) => handleAnswerOption(index)}
                >
                  <input
                    type="radio"
                    name={quiz.value.toString()}
                    value={quiz.value.toString()}
                    onChange={(e) => handleAnswerOption(index)}
                    checked={
                      index === selectedOptions[currentQuestion]?.answerByUser
                    }
                  />
                  {currentQuestion == 0 ? (
                    <div className="quizzes__content-info">
                      <div
                        className="quizzes__content-image"
                        dangerouslySetInnerHTML={{ __html: quiz.display }}
                      />
                      <p>{quiz.value}</p>
                    </div>
                  ) : (
                    <div className="quizzes__content-info">
                      <p>{quiz.display}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="quizzes__content">
              <div className="quizzes__message">
                <h3>
                  Unfortunately, we are unable to prescribe this medication for
                  you. This is because finasteride can alter the PSA levels,
                  which maybe used to monitor for cancer. You should discuss
                  this further with your GP or specialist if you would still
                  like this medication.
                </h3>
              </div>
            </div>
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
