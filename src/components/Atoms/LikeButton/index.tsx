import "./styles.scss";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

interface LikeButtonProps {
  likes: number;
  onClick: () => void;
}

export default function LikeButton({ likes, onClick }: LikeButtonProps) {
  return (
    <div className="like">
      <button className="like-button" onClick={onClick}>
        <FavoriteBorderIcon />
      </button>
      <Typography>{likes}</Typography>
    </div>
  );
}
