import {
    SET_MEDIA_INFO,
    SET_POINTS,
    SET_PHOTO_POSTS,
    SET_PHOTO_TAGGED,
    SET_USER
} from '../types/types';

const initialState = {
    media: {
        width: 0,
        height: 0
    },
    points: [],
    user: {
        buttonType: 'follow',
        subscriptions: 31,
        followersCount: 95,
        posts: 978
    },
    photoPostsData: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg',
            likes: 324654,
            comments: 1612,
            days_ago: 1,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.tourisme-lorraine.fr/wp-content/uploads/2016/02/88-tendon-cascade-de-tendon-gilles-pecqueur-600x600.jpg',
            likes: 412467,
            comments: 1814,
            days_ago: 2,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg',
            likes: 550587,
            comments: 1935,
            days_ago: 3,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://cdn.pixabay.com/photo/2018/08/18/18/50/sunset-3615276_960_720.jpg',
            likes: 716765,
            comments: 1812,
            days_ago: 5,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://cdn.ebaumsworld.com/2017/12/26/101234/85541658/85541221.jpg',
            likes: 868056,
            comments: 1890,
            days_ago: 7,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://farm2.staticflickr.com/1581/25150808173_1e705702ba_o.jpg',
            likes: 916354,
            comments: 1945,
            days_ago: 8,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.thephoblographer.com/wp-content/uploads/2015/10/061.jpg',
            likes: 1085047,
            comments: 1989,
            days_ago: 9,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.print-services.com/files/products_images/10000011237/10000011237.jpg',
            likes: 1578463,
            comments: 1934,
            days_ago: 12,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.north-island.com/wp-content/uploads/2017/01/Spa-Hill-square-1024x1024.jpg',
            likes: 1907657,
            comments: 1982,
            days_ago: 15,
            isClicked: false,
            heartType: 'white'
        }
    ],
    photoTaggedData: [
        { url: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/07/1024x1024/square-1455985302-12716587-1689541831330267-58905427-n.jpg?resize=480:*',
            likes: 66,
            comments: 15,
            days_ago: 1,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg',
            likes: 115,
            comments: 32,
            days_ago: 3,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-leonardo-dicaprio-square-jpg-2e17e931.jpg?resize=480:*',
            likes: 34,
            comments: 10,
            days_ago: 3,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://cdn.shopify.com/s/files/1/0151/0741/products/78bfa4631c55c8efcd8325e35ce35263_1024x1024.jpeg?v=1500531583',
            likes: 78,
            comments: 45,
            days_ago: 3,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://pixel.nymag.com/imgs/daily/vulture/2014/12/09/09-leonardo-dicaprio.w700.h700.jpg',
            likes: 17,
            comments: 5,
            days_ago: 4,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://hips.hearstapps.com/cos.h-cdn.co/assets/16/08/1024x1024/square-1456419768-leonardo-dicaprio-oscar-time-out-quote.png?resize=480:*',
            likes: 98,
            comments: 67,
            days_ago: 4,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://assets.vogue.com/photos/5876eb7e8a28e998768819e0/master/pass/square-leonardo-dicaprio-clinton-foundation.jpg',
            likes: 345,
            comments: 99,
            days_ago: 5,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://assets.afcdn.com/story/20160225/-869161_w767h767c1cx513cy249.jpg',
            likes: 156,
            comments: 45,
            days_ago: 6,
            isClicked: false,
            heartType: 'white'
        },
        { url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/15/37/original/original-dicaprio-square-jpg-9a969657.jpg?resize=480:*',
            likes: 49,
            comments: 12,
            days_ago: 7,
            isClicked: false,
            heartType: 'white'
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_MEDIA_INFO:
        return { ...state, media: action.payload };
    case SET_POINTS:
        return { ...state, points: action.payload };
    case SET_PHOTO_POSTS:
        return { ...state, photoPostsData: action.payload };
    case SET_PHOTO_TAGGED:
        return { ...state, photoTaggedData: action.payload };
    case SET_USER:
        return { ...state, user: action.payload };
    default:
        return state;
    }
}
