"use client";
import "./styles.scss";

import ReplyIcon from "@mui/icons-material/Reply";
import { Typography } from "@mui/material";

interface ReplyButtonProps {
  replies: number;
  action: () => void
}

export default function ReplyButton({
  replies, action
}: ReplyButtonProps){
  return (
    <div className="reply">
      <button className="reply-button" onClick={action}>
        <ReplyIcon />
      </button>
      <Typography>{replies}</Typography>
    </div>
  );
}