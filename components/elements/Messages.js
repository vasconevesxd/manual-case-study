const Messages = ({state}) => {
    return (
        <>
        <div className="quizzes__content">
          <div className="quizzes__message">
            {state === 'success' ? (
                <h3>
                “Great news! We have the perfect treatment for your hair loss.
                Proceed to
                <a href={"/"}>
                    <h3>www.manual.co</h3>
                </a>
                , and prepare to say hello to your new hair!
                </h3>
            ):null}
            {state === 'failure' ? (
            <h3>
                  Unfortunately, we are unable to prescribe this medication for
                  you. This is because finasteride can alter the PSA levels,
                  which maybe used to monitor for cancer. You should discuss
                  this further with your GP or specialist if you would still
                  like this medication.
                </h3>
            ):null}
          </div>
        </div>  
        </>
    )
}

export default Messages
