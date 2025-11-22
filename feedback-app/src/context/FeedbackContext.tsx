import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Feedback } from "../data/FeedbackData";

export interface FeedbackContextType {
  feedback: Feedback[];
}

export type FeedbackProviderProps = {
  children: ReactNode;
};

export const FeedbackContext = createContext<FeedbackContextType | null>(null);

function FeedbackProvider({ children }: FeedbackProviderProps) {
  const [feedback, setFeedback] = useState<Feedback[]>([
    { id: "1", text: "This is from context", rating: 10 },
  ]);

  return <FeedbackContext.Provider value={{ feedback }}>{children}</FeedbackContext.Provider>;
}

export default FeedbackProvider;
