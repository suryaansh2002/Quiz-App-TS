import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNum,
  totalQuestions,
  callback,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNum}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />

    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          userClicked={userAnswer?.answer === answer}
          correct={userAnswer?.correctAnswer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);
export default QuestionCard;
