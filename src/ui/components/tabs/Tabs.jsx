import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './tabs.css';
import classNames from 'classnames';
import PhotoPosts from '../photoPosts/PhotoPosts';
import setPhotoPosts from '../../../actions/setPhotoPosts';
import setPhotoTagged from '../../../actions/setPhotoTagged';
import PropTypes from 'prop-types';

const mapStateToProps = ({ application }) => {
    return {
        photoPostsData: application.photoPostsData,
        photoTaggedData: application.photoTaggedData
    };
};
const mapDispatchToProps = (dispatch) => ({
    setPhotoPosts: (payload) => dispatch(setPhotoPosts(payload)),
    setPhotoTagged: (payload) => dispatch(setPhotoTagged(payload))
});
class Tabs extends Component {
    state = {
        activeTabName: 'tab1'
    };
    static propTypes = {
        photoPostsData: PropTypes.array,
        photoTaggedData: PropTypes.array,
        setPhotoPosts: PropTypes.func.isRequired,
        setPhotoTagged: PropTypes.func.isRequired,
        buttonType: PropTypes.string.isRequired,
        handleSubscribeClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        photoPostsData: [],
        photoTaggedData: []
    };

    handleTabClick = (tabName) => () => {
        this.setState({
            activeTabName: tabName
        });
    };
    handleLikeClick = i => () => {
        const { photoPostsData } = this.props;
        const { photoTaggedData } = this.props;
        const newPointsPosts = [...photoPostsData];
        const newPointsTagged = [...photoTaggedData];
        if (newPointsPosts[i].isClicked === false) {
            newPointsPosts[i].likes = newPointsPosts[i].likes + 1;
            newPointsPosts[i].isClicked = true;
            newPointsPosts[i].heartType = 'red';
        } else if (newPointsPosts[i].isClicked === true) {
            newPointsPosts[i].likes = newPointsPosts[i].likes - 1;
            newPointsPosts[i].isClicked = false;
            newPointsPosts[i].heartType = 'white';
        }
        this.props.setPhotoPosts(newPointsPosts);
        if (newPointsTagged[i].isClicked === false) {
            newPointsTagged[i].likes = newPointsTagged[i].likes + 1;
            newPointsTagged[i].isClicked = true;
            newPointsTagged[i].heartType = 'red';
        } else if (newPointsTagged[i].isClicked === true) {
            newPointsTagged[i].likes = newPointsTagged[i].likes - 1;
            newPointsTagged[i].isClicked = false;
            newPointsTagged[i].heartType = 'white';
        }
        this.props.setPhotoTagged(newPointsTagged);
    };

    render () {
        const { activeTabName } = this.state;
        const { photoPostsData } = this.props;
        const { photoTaggedData } = this.props;
        return <div>
            <div className={styles.tabs}>
                <div className={classNames({ [styles.active]: activeTabName === 'tab1' })}
                    onClick={this.handleTabClick('tab1')}>
                    <div><img className={styles.tab_one_icon} src="http://cdn.onlinewebfonts.com/svg/img_33853.png"/>
                    </div>
                    <span>публикации</span>
                </div>
                <div className={classNames(styles.marg, { [styles.active]: activeTabName === 'tab2' })}
                    onClick={this.handleTabClick('tab2')}>
                    <div><img className={styles.tab_two_icon} src="http://cdn.onlinewebfonts.com/svg/img_266351.png"/>
                    </div>
                    <span>отметки</span>
                </div>
            </div>
            {activeTabName === 'tab1'
                ? <div className={styles.photo_row}>
                    {photoPostsData.map((photoPostData, i) =>
                        <PhotoPosts
                            key={i}
                            url={photoPostData.url}
                            likes={photoPostData.likes}
                            comments={photoPostData.comments}
                            days_ago={photoPostData.days_ago}
                            heartType={photoPostData.heartType}
                            buttonType={this.props.buttonType}
                            handleLikeClick = {this.handleLikeClick(i)}
                            handleSubscribeClick = {this.props.handleSubscribeClick}
                        />)}
                </div>
                : <div className={styles.photo_row}>
                    {photoTaggedData.map((photoTagData, i) =>
                        <PhotoPosts
                            key={i}
                            url={photoTagData.url}
                            likes={photoTagData.likes}
                            comments={photoTagData.comments}
                            days_ago={photoTagData.days_ago}
                            heartType={photoTagData.heartType}
                            buttonType={this.props.buttonType}
                            handleLikeClick = {this.handleLikeClick(i)}
                            handleSubscribeClick = {this.props.handleSubscribeClick}
                        />)}
                </div>}
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
