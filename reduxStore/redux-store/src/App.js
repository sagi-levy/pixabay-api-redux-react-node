// App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosSuccess } from "./store/actions";
import { fetchPhotos } from "./api";

const App = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("food");
  const photos = useSelector((state) => state.photos);

  useEffect(() => {
    fetchPhotos(category)
      .then((data) => {
        dispatch(fetchPhotosSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  const handlePrevClick = () => {
    setIndex(index - 9);
  };

  const handleNextClick = () => {
    setIndex(index + 9);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center">
          {" "}
          <button className="m-auto btn btn-success" onClick={handlePrevClick}>
            Prev
          </button>
          <select
            value={category}
            className=" form-control m-4"
            onInput={(e) => setCategory(e.target.value)}
          >
            Select Type
            <option value={"animals"}>animals</option>
            <option value={"food"}>food</option>
            <option value={"planes"}>planes</option>
            <option value={"work"}>work</option>
          </select>{" "}
          <button className="m-auto btn btn-primary" onClick={handleNextClick}>
            Next
          </button>
        </div>

        <div className="row grid">
          {photos
            .sort(function (a, b) {
              return a.views - b.views;
            })
            .slice(index, index + 9)
            .map((photo) => (
              <div
                key={photo.id}
                className="col-4 photo d-flex justify-content-center"
              >
                <img
                  onClick={() => handleImageClick(photo)}
                  style={{ maxWidth: 120, margin: "auto" }}
                  src={photo.largeImageURL}
                  alt={photo.title}
                />
              </div>
            ))}
        </div>
      </div>
      <hr className="p-5"></hr>
      {selectedImage && (
        <div className="image-details row justify-content-center">
          <img
            style={{ maxWidth: 200 }}
            src={selectedImage.largeImageURL}
            alt={selectedImage.name}
          />
          <p className="text-center">views: {selectedImage.views}</p>
          <p className="text-center">downloads: {selectedImage.downloads}</p>
          <p className="text-center">comments: {selectedImage.comments}</p>
        </div>
      )}
    </>
  );
};

export default App;
