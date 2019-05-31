import React, { Component } from 'react';
import styles from './main.css';
import Header from '../header/Header.jsx';
import Tabs from '../tabs/Tabs.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setUser from '../../../actions/setUser';

const mapStateToProps = ({ application }) => {
    return {
        user: application.user
    };
};
const mapDispatchToProps = (dispatch) => ({
    setUser: (payload) => dispatch(setUser(payload))
});

class Main extends Component {
    static defaultProps = {
        user: {}
    };
    static propTypes = {
        user: PropTypes.object,
        setUser: PropTypes.func.isRequired
    };

    handleSubscribeClick = () => {
        const { user } = this.props;
        const newUser = { ...user };
        if (newUser.buttonType === 'follow') {
            newUser.followersCount = newUser.followersCount + 1;
            newUser.buttonType = 'notFollow';
        } else if (newUser.buttonType === 'notFollow') {
            newUser.followersCount = newUser.followersCount - 1;
            newUser.buttonType = 'follow';
        }
        this.props.setUser(newUser);
    };

    render () {
        const { user } = this.props;
        return <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.main_content}>
                    <Header
                        buttonType={user.buttonType}
                        followersCount={user.followersCount}
                        subscriptions={user.subscriptions}
                        posts={user.posts}
                        handleSubscribeClick={this.handleSubscribeClick}
                    />
                    <Tabs
                        buttonType={user.buttonType}
                        followersCount={user.followersCount}
                        handleSubscribeClick={this.handleSubscribeClick}
                    />
                </div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
