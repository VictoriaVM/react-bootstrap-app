import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Tabs.css';
import classNames from 'classnames';
import PhotoPosts from '../PhotoPosts/PhotoPosts';
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
        const { photoPostsData, photoTaggedData } = this.props;
        const newPointsPosts = [...photoPostsData];
        const newPointsTagged = [...photoTaggedData];
        if (newPointsPosts[i].isClicked === false) {
            newPointsPosts[i].likes = newPointsPosts[i].likes + 1;
            newPointsPosts[i].isClicked = true;
        } else if (newPointsPosts[i].isClicked === true) {
            newPointsPosts[i].likes = newPointsPosts[i].likes - 1;
            newPointsPosts[i].isClicked = false;
        }
        this.props.setPhotoPosts(newPointsPosts);
        if (newPointsTagged[i].isClicked === false) {
            newPointsTagged[i].likes = newPointsTagged[i].likes + 1;
            newPointsTagged[i].isClicked = true;
        } else if (newPointsTagged[i].isClicked === true) {
            newPointsTagged[i].likes = newPointsTagged[i].likes - 1;
            newPointsTagged[i].isClicked = false;
        }
        this.props.setPhotoTagged(newPointsTagged);
    };

    handleComment = i => () => {
        const { photoPostsData, photoTaggedData } = this.props;
        const newPointsPosts = [...photoPostsData];
        const newPointsTagged = [...photoTaggedData];
        let val = document.getElementById('elem1').value;
        if (newPointsTagged[i].isCommented === false) {
            newPointsTagged[i].userComments.commentText = val;
            newPointsTagged[i].comments = newPointsTagged[i].comments + 1;
            newPointsTagged[i].isCommented = true;
            this.props.setPhotoTagged(newPointsTagged);
        }
        if (newPointsPosts[i].isCommented === false) {
            newPointsPosts[i].userComments.commentText = val;
            newPointsPosts[i].comments = newPointsPosts[i].comments + 1;
            newPointsPosts[i].isCommented = true;
            this.props.setPhotoPosts(newPointsPosts);
        }
    };

    render () {
        const { activeTabName } = this.state;
        const { photoPostsData, photoTaggedData } = this.props;
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
                            isClicked={photoPostData.isClicked}
                            buttonType={this.props.buttonType}
                            handleLikeClick = {this.handleLikeClick(i)}
                            handleSubscribeClick = {this.props.handleSubscribeClick}
                            avatarImage = {'https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg'}
                            profileName = {'leonardodicaprio'}
                            verifiedImage = {true}
                            userComments ={photoPostData.userComments}
                            handleComment={this.handleComment(i)}
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
                            isClicked={photoTagData.isClicked}
                            buttonType={this.props.buttonType}
                            handleLikeClick = {this.handleLikeClick(i)}
                            handleSubscribeClick = {this.props.handleSubscribeClick}
                            avatarImage = {'https://androidapkcloud.com/wp-content/uploads/2017/09/Square-PhotoWithout.png'}
                            profileName={'leonardosuperfan'}
                            verifiedImage = {false}
                            userComments ={photoTagData.userComments}
                            handleComment={this.handleComment(i)}
                        />)}
                </div>}
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
