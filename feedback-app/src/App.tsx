import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackData from "./data/FeedbackData";
import type { Feedback } from "./data/FeedbackData";
import FeedbackProvider from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newRawFeedback: { rating: number; text: string }) => {
    const newFeedback: Feedback = { id: uuidv4(), ...newRawFeedback };
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      <AboutIconLink />
    </FeedbackProvider>
  );
}

export default App;
