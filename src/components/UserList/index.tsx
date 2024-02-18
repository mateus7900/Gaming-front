"use client";
import { useEffect, useState } from "react";

import "./styles.scss";
import { Typography } from "@mui/material";
import ProfileAvatar from "../Avatar";
import IconButton from "../Atoms/IconButton";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { getExplore } from "../../services/UserService";

interface UserListProps {
  username: string;
}

export default function UserList({ username }: UserListProps) {
  const [users, setUsers] = useState<User[]>();

  const navigate = useNavigate();

  useEffect(() => {
    getExplore(username)
      .then(data => setUsers(data))
      .catch(err => console.error(err))
  }, [username])

  const handleButtonClick = (username: string) => {
    navigate("/user?id=" + username);
  };

  return (
    <div className="user-items">
      <div className="explore-title">
        <Typography className="title-typo">
          Encontre novos amigos aqui!
        </Typography>
      </div>
      <div className="user-content">
        {users &&
          users.map((item) => (
            <div className="user-item" key={JSON.stringify(item)}>
              <div className="left-side">
                <ProfileAvatar name={item.username} />
                <div className="user-item-names">
                  <Typography className="user-item-name">
                    {item.firstName} {item.lastName}
                  </Typography>
                  <Typography className="user-item-username">
                    @{item.username}
                  </Typography>
                </div>
              </div>
              <div className="right-side">
                <IconButton onClick={() => handleButtonClick(item.username)}>
                  <ExpandLessIcon />
                </IconButton>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
