export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUYM = "medium",
  HARD = "hard",
}
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const enddpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(enddpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
