"use client";
import { Typography } from "@mui/material";
import { useState } from "react";
import "./styles.scss";
import ProfileAvatar from "../Avatar";
import LikeButton from "../Atoms/LikeButton";
import { Post } from "../../types/Post";
import { likePost } from "../../services/PostServices";

interface PostProps {
  post: Post;
  authorName: string;
  username: string;
}

export default function PostItem({ post, authorName, username }: PostProps) {
  const [postLikes, setPostLikes] = useState<number>(post.likes);
  const postDate = new Date(post.createdAt).toLocaleDateString("pt-BR");

  const handleLikeClick = async (username: string, postId: string) => {
    const result = await likePost(username, postId);
    if (result) {
      setPostLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="post">
      <div className="post-title">
        <div className="title-left-side">
          <ProfileAvatar name={username.toUpperCase()} />
          <div className="post-title-name">
            <Typography className="authorname">{authorName}</Typography>
            <Typography className="username">@{post.authorName}</Typography>
          </div>
        </div>
        <div className="post-date">
          <Typography>{postDate}</Typography>
        </div>
      </div>

      <Typography>{post.content}</Typography>
      <div className="stats">
        <LikeButton likes={postLikes} onClick={() => handleLikeClick(username, post.postId)} />
      </div>
    </div>
  );
}
