import React, { Component } from 'react';
import styles from './../../css/train.css';

class Buttons extends Component {
    render () {
        return <div className={styles.buttons}>
            <button
                className={styles.enter_btn}
                onClick={this.onBtnClickHandler}
                ref='enter_button'
            >
                Войти
            </button>
            <a
                className={styles.register_btn}
                onClick={this.onBtnClickHandler}
                ref='register_button'
            >
                Зарегистрироваться
            </a>
        </div>;
    }
}

export default Buttons;
