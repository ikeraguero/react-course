import { useState } from "react";
import Options from "./Options";
import NextButton from "./NextButton";

function Question({ question, dispatch, answer, hasAnswered }) {
  return (
    <>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        hasAnswered={hasAnswered}
        answer={answer}
      />
    </>
  );
}

export default Question;
