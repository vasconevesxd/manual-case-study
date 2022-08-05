import { useState,useEffect  } from "react";
import Link from "next/link";
import Quiz from "../../components/elements/Quiz";
import Messages from "../../components/elements/Messages";
import Error from "../../components/elements/Error";

export const getStaticProps = async () => {
  let apiLink = "https://manual-case-study.herokuapp.com/questionnaires/6-part.json";
  let linkName = apiLink.split("/").pop().split(".")[0];
  try {
    const res = await fetch(apiLink);
    const data = await res.json();

    data.questions.map((items) => {
      items.options.map((item) => {
        if(item.display.match(/<img/) !== null){
          item['type'] = 'image'; 
        }
      })
     });

    return {
      props: { quizzes: data.questions, linkName },
    };
  } catch (error){
    return {
      props: {  notFound: true },
    };
  }
};

const Quizzes = ({ notFound,quizzes,linkName }) => {
  
  if (notFound) { 
    return <Error />
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [result, setResult] = useState(false);

  const handlePrevious = () => {
    let prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
    localStorage.setItem("currentQuestion", JSON.stringify(prevQues));
  };

  const handleNext = () => {
    let nextQues = currentQuestion + 1;

    if (selectedOptions[currentQuestion]) {

      let answerReject =  quizzes[currentQuestion].options[selectedOptions[selectedOptions.length - 1].answerByUser]?.isRejection;
      let answers = selectedOptions;

      answers[currentQuestion].isRejected = answerReject;
      setSelectedOptions([...answers]); 

      if (nextQues == quizzes.length) {
        setResult(true);
      }
    }
    nextQues < quizzes.length && setCurrentQuestion(nextQues);
    localStorage.setItem("currentQuestion", JSON.stringify(nextQues));
  };

  const handleAnswerOption = (answer) => {
    
    let answers = selectedOptions;

    answers[currentQuestion] = {answerByUser: answer};
    setSelectedOptions([...answers]); 

  };

  useEffect(() => {
    if(selectedOptions.length !== 0){
      localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    }
    if(selectedOptions[currentQuestion - 1]?.isRejected === true ||
      result === true){
        localStorage.removeItem("currentQuestion");
        localStorage.removeItem("selectedOptions");
        localStorage.removeItem("linkPoint");
      }
  }, [selectedOptions,result]);

  useEffect(() => { 
    let linkPoint = localStorage.getItem('linkPoint'); 
    if(linkPoint === undefined){ 
      let convertLink = JSON.parse(linkPoint);
      if(convertLink === linkName){
        let selected = JSON.parse(localStorage.getItem('selectedOptions'));
        let current = localStorage.getItem('currentQuestion'); 
        if (selected) {
          setSelectedOptions(selected);
        }
        if(current){
          let convert = JSON.parse(current);
          setCurrentQuestion(convert);
        }
      }else{
        localStorage.removeItem("currentQuestion");
        localStorage.removeItem("selectedOptions");
        localStorage.removeItem("linkPoint");
      }
    }else{
      localStorage.setItem("linkPoint", JSON.stringify(linkName));
    }
    
  }, []);

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
