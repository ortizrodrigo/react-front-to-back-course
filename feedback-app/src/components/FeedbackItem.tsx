import Card from "./shared/Card";
import type { Feedback } from "../data/FeedbackData";

function FeedbackItem({ item }: { item: Feedback }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
