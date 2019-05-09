import React, { Component } from 'react';
import styles from './../../css/train.css';

class Form extends Component {
    state = {
        crossButton: 'hidden',
        glassIcon: 'center',
        formState: 'standard'
    };
    onFormClickHandler = () => {
        this.setState({ crossButton: 'visible', glassIcon: 'left', formState: 'changed' });
    };
    outFormClickHandler = () => {
        this.setState({ crossButton: 'hidden', glassIcon: 'center', formState: 'standard' });
    };
    render () {
        return <div className={this.state.formState === 'standard' ? styles.form : styles.form_change} id='form'>
            <form className='add cf' onFocus={this.onFormClickHandler} onBlur={this.outFormClickHandler}>
                <div className={this.state.glassIcon === 'center' ? styles.glass : styles.glass_change} role="button" tabIndex="0" id='glass'>
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
                <div className={this.state.crossButton === 'hidden' ? styles.cross_change : styles.cross} id='cross'>
                    <span className={styles.cross_icon}>
                        <img className={styles.CrossIcon} src="https://www.freeiconspng.com/uploads/close-button-png-27.png"/>
                    </span>
                </div>
            </form>
        </div>;
    }
}

export default Form;
