import FeedbackItem from "./FeedbackItem";
import type { Feedback } from "../data/FeedbackData";

function FeedbackList({
  feedback,
  handleDelete,
}: {
  feedback: Feedback[];
  handleDelete: (id: number) => void;
}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
