import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import admin from './login';
export function LoginPage() 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            admin.value = true;
        } else {
        alert("Hibás felhasználónév vagy jelszó");
        }
    }
    const logout = () => {
        admin.value = false;
    }
    return (
        <div className='card m-5 p-2 text-center justify-content-center w-50'>
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label htmlFor="exampleInputusername1" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputusername1"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Bejelentkezés</button>     
                </form>
            </div>
    )
}