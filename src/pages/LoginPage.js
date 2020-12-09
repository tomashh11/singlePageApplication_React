import React from "react"
import "../styles/LoginPage.css";

const LoginPage = () => {
    return(
        <div>
            <label>Podaj login <input type="text"/> </label>
            <label className="second">Podaj hasło <input type="password"/> </label>
            <button>Zaloguj</button>
        </div>
    )
};

export default LoginPage;