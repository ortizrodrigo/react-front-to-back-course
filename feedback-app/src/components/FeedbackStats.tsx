import type { Feedback } from "../data/FeedbackData";

function FeedbackStats({ feedback }: { feedback: Feedback[] }) {
  let average =
    feedback.reduce((total, item) => {
      return total + item.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? "0" : average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
}

export default FeedbackStats;
