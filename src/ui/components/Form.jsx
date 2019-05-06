import React, { Component } from 'react';
import styles from './../../css/train.css';

class Form extends Component {
    onFormClickHandler (e) {
        e.preventDefault();
        document.getElementById('cross').classList.add(styles.cross);
        document.getElementById('cross').classList.remove(styles.cross_change);
        document.getElementById('glass').classList.add(styles.glass_change);
        document.getElementById('glass').classList.remove(styles.glass);
        document.getElementById('form').classList.add(styles.form_change);
    };
    outFormClickHandler (e) {
        e.preventDefault();
        document.getElementById('cross').classList.remove(styles.cross);
        document.getElementById('cross').classList.add(styles.cross_change);
        document.getElementById('glass').classList.remove(styles.glass_change);
        document.getElementById('glass').classList.add(styles.glass);
        document.getElementById('form').classList.remove(styles.form_change);
    };
    render () {
        return <div className={styles.form} id='form'>
            <form className='add cf' onFocus={this.onFormClickHandler} onBlur={this.outFormClickHandler}>
                <div className={styles.glass} role="button" tabIndex="0" id='glass'>
                    <span className={styles.SearchIcon}>
                        <img className={styles.SearchIcon} src="https://pngimage.net/wp-content/uploads/2018/06/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BB%D1%83%D0%BF%D0%B0-png-8.png"/>
                    </span>
                </div>
                <input
                    className='add__btn'
                    type='text'
                    placeholder='Поиск'
                    ref='search'
                />
                <div className={styles.cross_change} id='cross'>
                    <span className={styles.cross_icon}>
                        <img className={styles.CrossIcon} src="https://www.freeiconspng.com/uploads/close-button-png-27.png"/>
                    </span>
                </div>
            </form>
        </div>;
    }
}

export default Form;
