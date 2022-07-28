import { useState } from 'react';
export const getStaticProps = async() => {
    const res = await fetch('https://manual-case-study.herokuapp.com/questionnaires/972423.json');
    const data = await res.json();
    return {
        props:{ quizzes: data.questions}
    }
}

const Quizzes = ({quizzes}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
      };
      
      const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < quizzes.length && setCurrentQuestion(nextQues);
      };

      const handleAnswerOption = (answer) => {
        setSelectedOptions([
          (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
      };

      const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < quizzes.length; i++) {
            quizzes[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      };


    return (
        <div>
            <div>
                <h3>
                    Question {currentQuestion + 1} of {quizzes.length}
                </h3>
                <div >
                    {quizzes[currentQuestion].question}
                </div>
            </div>
            {quizzes[currentQuestion].options.map((answer, index) => (
                <div
                key={index}
                onClick={(e) => handleAnswerOption(answer.answer)}
                >
                <input
                    type="radio"
                    name={answer.answer}
                    value={answer.answer}
                    onChange={(e) => handleAnswerOption(answer.answer)}
                    checked={
                    answer.answer === selectedOptions[currentQuestion]?.answerByUser
                    }
                /> 
                <div dangerouslySetInnerHTML={{__html: (answer.display)}} />
                <p>{answer.value}</p>
                </div>
            ))}

            <button
                onClick={handlePrevious}
            >
                Previous
            </button>
            <button
                onClick={handleNext}
            >
                Next
            </button>   

            <button
                onClick={
                    currentQuestion + 1 === quizzes.length ? handleSubmitButton : handleNext
                }
            >
            {currentQuestion + 1 === quizzes.length ? "Submit" : "Next"}
            </button>      

        </div>
    )
}

export default Quizzes;
