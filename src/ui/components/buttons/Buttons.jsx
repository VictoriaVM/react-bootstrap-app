import React, { Component } from 'react';
import styles from './buttons.css';

class Buttons extends Component {
    render () {
        return <div className={styles.buttons}>
            <button
                className={styles.enter_btn}
                ref='enter_button'
            >
                Войти
            </button>
            <a
                className={styles.register_btn}
                ref='register_button'
            >
                Зарегистрироваться
            </a>
        </div>;
    }
}

export default Buttons;
