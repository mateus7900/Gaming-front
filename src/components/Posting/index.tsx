import { TextField } from "@mui/material";
import "./styles.scss";
import React, { useState } from "react";
import Button from "../Atoms/Button";
import useUser from "../../context/UserContext";
import { insertPost } from "../../services/PostServices";
import { useNavigate } from "react-router-dom";

export default function Posting() {
  const [post, setPost] = useState<string>("");

  const { user } = useUser();
  const navigate = useNavigate()

  const handleChangePostingValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPost(event.target.value);
  };

  const handleInsertPost = async () => {
    await insertPost(post, user.username);
    window.alert("Você acabou de postar algo!");
    setPost('');
    navigate("/home");
  }

  return (
    <div className="text-area">
      <TextField
        multiline
        className="content-field"
        placeholder="No que você está pensando?"
        value={post}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangePostingValue(e)
        }
        rows={4}
      />
      <Button text="POSTAR" onClick={handleInsertPost} />
    </div>
  );
}
