const Quiz = ({quizzes,currentQuestion,selectedOptions,handleAnswerOption}) => {
    return (
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
              name={`${quiz.value.toString()}-${index}`}
              value={index}
              onChange={(e) => handleAnswerOption(index)}
              checked={
                index === selectedOptions[currentQuestion]?.answerByUser
              }
            />
            {quiz.type == 'image' ? (
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
    )
}

export default Quiz
