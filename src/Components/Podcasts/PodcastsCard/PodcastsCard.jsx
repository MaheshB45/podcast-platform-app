import { Link } from "react-router-dom";
import "./PodcastsCard.css";

// eslint-disable-next-line react/prop-types
const PodcastsCard = ({ id, title, displayImg }) => {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="podcast-card">
        <img className="display-img-podcast" src={displayImg} />
        <p className="title-podcast">{title}</p>
      </div>
    </Link>
  );
};

export default PodcastsCard;
