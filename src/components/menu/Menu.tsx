import React from 'react';
import {Link} from "react-router-dom";
import  styles from "./Menu.module.css";

const Menu = () => {
    return (
        <div>

            <ul className={styles.menu}>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/users'>users</Link>
                </li>
                <li>
                    <Link to='/posts'>posts</Link>
                </li>
                <li>
                    <Link to='/comments'>comments</Link>
                </li>
                <li>
                    <Link to='/products'>products</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;