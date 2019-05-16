import React, { Component } from 'react';
import PhotoPosts from './PhotoPosts';
import styles from '../../css/componentStyles/tab.css';

const photoPostsData = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg',
        likes: 724,
        comments: 1612 },
    { url: 'https://www.tourisme-lorraine.fr/wp-content/uploads/2016/02/88-tendon-cascade-de-tendon-gilles-pecqueur-600x600.jpg',
        likes: 1124,
        comments: 1814 },
    { url: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
        likes: 1505,
        comments: 1935 },
    { url: 'https://cdn.pixabay.com/photo/2018/08/18/18/50/sunset-3615276_960_720.jpg',
        likes: 1616,
        comments: 1812 },
    { url: 'https://cdn.ebaumsworld.com/2017/12/26/101234/85541658/85541221.jpg',
        likes: 1680,
        comments: 1890 },
    { url: 'https://farm2.staticflickr.com/1581/25150808173_1e705702ba_o.jpg',
        likes: 1816,
        comments: 1945 },
    { url: 'https://www.thephoblographer.com/wp-content/uploads/2015/10/061.jpg',
        likes: 1850,
        comments: 1989 },
    { url: 'https://www.print-services.com/files/products_images/10000011237/10000011237.jpg',
        likes: 1978,
        comments: 1934 },
    { url: 'https://www.north-island.com/wp-content/uploads/2017/01/Spa-Hill-square-1024x1024.jpg',
        likes: 2007,
        comments: 1982 }
];

class TabFirst extends Component {
    render () {
        return (
            <div>
                <div className={styles.photo_row}>
                    { photoPostsData.map((photoPostData, i) =>
                        <PhotoPosts key={i} url={photoPostData.url} likes={photoPostData.likes} comments={photoPostData.comments} />) }
                </div>
            </div>
        );
    }
}

export default TabFirst;
