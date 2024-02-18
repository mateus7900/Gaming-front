'use client';
import React, { useState } from "react";
import "./styles.scss";
import { TextField } from "@mui/material";
import Button from "../Atoms/Button";
import useUser from "../../context/UserContext";
import { login } from "../../services/UserService";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';

export default function LoginCard() {

    const navigate = useNavigate()

    const { setUser, setLogged } = useUser();

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleClickButton() {
        try{
            const data: User = await login(userName, password)
            setUser(data);
            setLogged(true);
            navigate("/home")
        } catch (err) {
            console.error(err);
        }
    }

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserName(event.target.value as string);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return <div className="card">
        <img src={Logo} className="image"/>
        {/* <Image src={Logo} alt="Gaming" className="image"/> */}
        <TextField label="Username" variant="outlined" onChange={
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChangeUsername(event)
        }/>
        <TextField label="Password" variant="outlined" type="password" onChange={
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChangePassword(event)
        }/>
        <Button text="LOGIN" onClick={handleClickButton} className="button" />
        <Button text="REGISTRE-SE" onClick={handleRegister} className="button" />
    </div>
}