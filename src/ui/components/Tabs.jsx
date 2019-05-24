import React, { Component } from 'react';
import styles from './../../css/componentStyles/tabs.css';
import classNames from 'classnames';
import PhotoPosts from './PhotoPosts';

const photoPostsData = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg',
        likes: 324654,
        comments: 1612,
        days_ago: 1 },
    { url: 'https://www.tourisme-lorraine.fr/wp-content/uploads/2016/02/88-tendon-cascade-de-tendon-gilles-pecqueur-600x600.jpg',
        likes: 412467,
        comments: 1814,
        days_ago: 2 },
    { url: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
        likes: 550587,
        comments: 1935,
        days_ago: 3 },
    { url: 'https://cdn.pixabay.com/photo/2018/08/18/18/50/sunset-3615276_960_720.jpg',
        likes: 716765,
        comments: 1812,
        days_ago: 5 },
    { url: 'https://cdn.ebaumsworld.com/2017/12/26/101234/85541658/85541221.jpg',
        likes: 868056,
        comments: 1890,
        days_ago: 7 },
    { url: 'https://farm2.staticflickr.com/1581/25150808173_1e705702ba_o.jpg',
        likes: 916354,
        comments: 1945,
        days_ago: 8 },
    { url: 'https://www.thephoblographer.com/wp-content/uploads/2015/10/061.jpg',
        likes: 1085047,
        comments: 1989,
        days_ago: 9 },
    { url: 'https://www.print-services.com/files/products_images/10000011237/10000011237.jpg',
        likes: 1578463,
        comments: 1934,
        days_ago: 12 },
    { url: 'https://www.north-island.com/wp-content/uploads/2017/01/Spa-Hill-square-1024x1024.jpg',
        likes: 1907657,
        comments: 1982,
        days_ago: 15 }
];

const photoTaggedData = [
    { url: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/07/1024x1024/square-1455985302-12716587-1689541831330267-58905427-n.jpg?resize=480:*',
        likes: 66,
        comments: 15,
        days_ago: 1 },
    { url: 'https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg',
        likes: 115,
        comments: 32,
        days_ago: 3 },
    { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-leonardo-dicaprio-square-jpg-2e17e931.jpg?resize=480:*',
        likes: 34,
        comments: 10,
        days_ago: 3 },
    { url: 'https://cdn.shopify.com/s/files/1/0151/0741/products/78bfa4631c55c8efcd8325e35ce35263_1024x1024.jpeg?v=1500531583',
        likes: 78,
        comments: 45,
        days_ago: 3 },
    { url: 'https://pixel.nymag.com/imgs/daily/vulture/2014/12/09/09-leonardo-dicaprio.w700.h700.jpg',
        likes: 17,
        comments: 5,
        days_ago: 4 },
    { url: 'https://hips.hearstapps.com/cos.h-cdn.co/assets/16/08/1024x1024/square-1456419768-leonardo-dicaprio-oscar-time-out-quote.png?resize=480:*',
        likes: 98,
        comments: 67,
        days_ago: 4 },
    { url: 'https://assets.vogue.com/photos/5876eb7e8a28e998768819e0/master/pass/square-leonardo-dicaprio-clinton-foundation.jpg',
        likes: 345,
        comments: 99,
        days_ago: 5 },
    { url: 'https://assets.afcdn.com/story/20160225/-869161_w767h767c1cx513cy249.jpg',
        likes: 156,
        comments: 45,
        days_ago: 6 },
    { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-dicaprio-square-jpg-9a969657.jpg?resize=480:*',
        likes: 49,
        comments: 12,
        days_ago: 7 }
];

class Tabs extends Component {
    state = {
        activeTabName: 'tab1'
    };

    handleTabClick = (tabName) => () => {
        this.setState({
            activeTabName: tabName
        });
    };

    render () {
        const { activeTabName } = this.state;
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
                        />)}
                </div>
                : <div className={styles.photo_row}>
                    {photoTaggedData.map((photoTaggedData, i) =>
                        <PhotoPosts
                            key={i}
                            url={photoTaggedData.url}
                            likes={photoTaggedData.likes}
                            comments={photoTaggedData.comments}
                            days_ago={photoTaggedData.days_ago}
                        />)}
                </div>}
        </div>;
    }
}

export default Tabs;
