import faq from "../data/faq";

export const getAIResponse = (query) => {
  const q = query.toLowerCase();

  const match = faq.find((item) =>
    item.question.toLowerCase().includes(q)
  );

  return match
    ? match.answer
    : "I'm designed to help with LambdaSyncCode features.";
};