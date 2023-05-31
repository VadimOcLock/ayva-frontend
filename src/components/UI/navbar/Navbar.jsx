import React from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={classes.navMenu}>
            <Link to="/SubTitle" className={classes.link}>Подписка</Link>
            <Link to="/main" className={classes.link}>Инструменты</Link>
            <Link to="/faq" className={classes.link}>Вопросы</Link>
            <Link to="/login" className={classes.link}>Вход</Link>
            <Link to="/registration" className={classes.link}>Регистрация</Link>
        </nav>
    );
};

export default Navbar;