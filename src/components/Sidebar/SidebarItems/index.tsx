import Content from "./NavItems";

import './styles.scss';
import { Typography } from "@mui/material";
import IconButton from "../../Atoms/IconButton";
import { useNavigate } from "react-router-dom";

export default function SidebarItems() {

    const navigate = useNavigate()

    const handleOnClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
            {Content.map(item => (
                <div className="sidebar-item" key={item.name}>
                    <IconButton onClick={() => handleOnClick(item.path)}>
                        {item.icon}
                    </IconButton>
                    <Typography>{item.name}</Typography>
                </div>
            ))}
        </>
    )
}
