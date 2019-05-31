import { SET_PHOTO_TAGGED } from '../types/types';

const setPhotoTagged = payload => ({
    type: SET_PHOTO_TAGGED,
    payload
});

export default setPhotoTagged;
