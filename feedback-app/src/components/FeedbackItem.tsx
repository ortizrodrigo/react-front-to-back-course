import Card from "./shared/Card";
import type { Feedback } from "../data/FeedbackData";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({
  item,
  handleDelete,
}: {
  item: Feedback;
  handleDelete: (id: number) => void;
}) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
