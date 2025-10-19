import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import type { Feedback } from "../data/FeedbackData";

function FeedbackForm({
  handleAdd,
}: {
  handleAdd: (newFeedback: { rating: number; text: string }) => void;
}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setText(input); // schedules a state update for text, but it is not immediate

    const isTooShort = input.trim().length < 10;
    setBtnDisabled(isTooShort);
    setMessage(input === "" || isTooShort ? "Text must be at least 10 characters" : "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        rating, // shorthand for rating: rating
        text, // shorthand for text: text
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
