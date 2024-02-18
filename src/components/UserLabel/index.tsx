import "./styles.scss";
import ProfileAvatar from "../Avatar";
import { Typography } from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "../Atoms/IconButton";
import useUser from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function UserLabel() {
  const { user } = useUser();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/user?id=" + (user?.username as string));
  };

  return (
    <div className="user-label">
      <div className="left">
        <ProfileAvatar name={user?.username as string} />
        <Typography>@{user?.username}</Typography>
      </div>
      <IconButton onClick={handleButtonClick}>
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
}
