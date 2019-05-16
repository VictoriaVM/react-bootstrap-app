import React, { Component } from 'react';
import PhotoTagged from './PhotoTagged.jsx';
import styles from '../../css/componentStyles/tab.css';

const photoTaggedData = [
    { url: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/07/1024x1024/square-1455985302-12716587-1689541831330267-58905427-n.jpg?resize=480:*',
        likes: 66,
        comments: 15 },
    { url: 'https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg',
        likes: 115,
        comments: 32 },
    { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-leonardo-dicaprio-square-jpg-2e17e931.jpg?resize=480:*',
        likes: 34,
        comments: 10 },
    { url: 'https://cdn.shopify.com/s/files/1/0151/0741/products/78bfa4631c55c8efcd8325e35ce35263_1024x1024.jpeg?v=1500531583',
        likes: 78,
        comments: 45 },
    { url: 'https://ae01.alicdn.com/kf/HTB1t4FIXsnrK1RjSspkq6yuvXXaK/100-Diamond-Painting-Cross-Stitch-Leonardo-DiCaprio-5D-Needlework-Mosaic-Full-Square-Round-Drill-Icon-Diamond.jpg',
        likes: 17,
        comments: 5 },
    { url: 'https://hips.hearstapps.com/cos.h-cdn.co/assets/16/08/1024x1024/square-1456419768-leonardo-dicaprio-oscar-time-out-quote.png?resize=480:*',
        likes: 98,
        comments: 67 },
    { url: 'https://assets.vogue.com/photos/5876eb7e8a28e998768819e0/master/pass/square-leonardo-dicaprio-clinton-foundation.jpg',
        likes: 345,
        comments: 99 },
    { url: 'https://assets.afcdn.com/story/20160225/-869161_w767h767c1cx513cy249.jpg',
        likes: 156,
        comments: 45 },
    { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-dicaprio-square-jpg-9a969657.jpg?resize=480:*',
        likes: 49,
        comments: 12 }
];

class TabSecond extends Component {
    render () {
        return (
            <div>
                <div className={styles.photo_row}>
                    { photoTaggedData.map((photoTagData, i) =>
                        <PhotoTagged key={i} url={photoTagData.url} likes={photoTagData.likes} comments={photoTagData.comments} />) }
                </div>
            </div>
        );
    }
}
export default TabSecond;
