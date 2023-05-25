// actions/index.js
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});
