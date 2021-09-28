import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./getQuestions";
import { GlobalStyle, Wrapper } from "./App.styles";
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const total_questions = 10;

  console.log(fetchQuizQuestions(total_questions, Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const Questions = await fetchQuizQuestions(
      total_questions,
      Difficulty.EASY
    );

    setQuestions(Questions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prevScore) => prevScore + 1);
      }
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prevAnswers) => [...prevAnswers, answerObject]);
    }
  };
  const nextQuestion = () => {
    const next = number + 1;
    if (next === total_questions) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz App</h1>
        {gameOver || userAnswers.length === total_questions ? (
          <button onClick={startTrivia} className="start">
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {loading ? <p>Loading Questions...</p> : null}

        {!loading && !gameOver ? (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={total_questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!loading &&
        !gameOver &&
        userAnswers.length === number + 1 &&
        number !== total_questions - 1 ? (
          <button onClick={nextQuestion} className="next">
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
