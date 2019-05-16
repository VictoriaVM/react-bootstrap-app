import React, { Component } from 'react';
import styles from './../../css/componentStyles/photoPosts.css';

class PhotoTagged extends Component {
    state = {
        hoverClass: 'isNotHovered',
        popupVisible: false,
        buttonType: 'follow'
    };
    onHover = () => {
        this.setState({ hoverClass: 'isHovered' });
    };
    outHover = () => {
        this.setState({ hoverClass: 'isNotHovered' });
    };
    updateData = () => {
        if (this.state.button === 'follow') {
            this.setState({ buttonType: 'notFollow' });
        } else {
            this.setState({ buttonType: 'follow' });
        }
    };
    updateDataTwo = () => {
        if (this.state.popupVisible === false) {
            this.setState({ popupVisible: true });
        } else {
            this.setState({ popupVisible: false });
        }
    };
    render () {
        return <div
            className={styles.photo}
            onMouseOver={this.onHover}
            onMouseOut={this.outHover}
            onClick={() => {
                this.updateDataTwo(this.state.popupVisible);
            }}
        >
            <div className={this.state.popupVisible === false ? styles.b_popup_hidden : styles.b_popup}>
                <div className={styles.closeIcon} onClick={() => {
                    this.updateDataTwo(this.state.popupVisible);
                }}>
                    <span>
                        <img src="https://png.pngtree.com/svg/20161106/ee8df8289e.png" style={{ width: 20, height: 20 }}/>
                    </span>
                </div>
                <div className={styles.b_popup_content}>
                    <div className={'photo_post_container'}>
                        <img
                            // eslint-disable-next-line react/prop-types
                            src={this.props.url}
                            style={{ width: 598, height: 598 }}
                        />
                    </div>
                    <div className={styles.info_container}>
                        <div className={styles.avatar_post}>
                            <span>
                                <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg"/>
                            </span>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.top}>
                                <h1 className={styles.profileName_post}>leonardodicaprio</h1>
                                <span className={styles.verified}><img
                                    src="https://png.icons8.com/ios/1600/007AFF/verified-account"/></span>
                                <a
                                    className={styles.post_dots}
                                >
                                    <span>.</span>
                                </a>
                                <a
                                    className={this.state.buttonType === 'follow' ? styles.subscribe_btn : styles.unsubscribe_btn}
                                    onClick={() => {
                                        this.updateData(this.state.buttonType);
                                    }}
                                >
                                    {this.state.buttonType === 'notFollow' ? 'Подписки' : 'Подписаться'}
                                </a>
                                <a
                                    className={styles.post_dots}
                                >
                                    <span>...</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={this.state.hoverClass === 'isNotHovered' ? styles.photo_hover_none : styles.photo_hover}>
                <div className={styles.hover_stats}>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/14/14136.png"
                            style={{ width: 16, height: 16 }}
                        />
                    </div>
                    <span>
                        {/* eslint-disable-next-line react/prop-types */}
                        {this.props.likes}
                    </span>
                </div>
                <div className={styles.hover_stats}>
                    <div>
                        <img
                            src="http://www.iconarchive.com/download/i89259/icons8/ios7/Very-Basic-Speech-Bubble-Filled.ico"
                            style={{ width: 16, height: 16 }}
                        />
                    </div>
                    <span>
                        {/* eslint-disable-next-line react/prop-types */}
                        {this.props.comments.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className={styles.photo_container}>
                <img
                    // eslint-disable-next-line react/prop-types
                    src={this.props.url}
                    style={{ width: 293, height: 293 }}/>
            </div>
        </div>;
    }
}

export default PhotoTagged;
