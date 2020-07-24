import React, { useEffect, useRef } from "react";

const ViewImages = (props) => {
  const imageView = useRef(null);
  useEffect(() => {
    if (imageView.current) {
      imageView.current.scrollTop = 0;
    }
  }, [props.images]);
  return (
    <>
      {props.images.length > 0 ? (
        <div className="scroll-view" ref={imageView}>
          {props.images.map((image, index) => (
            <div className="maxHeight-80vh">
              <img
                className="fit-image"
                width="100%"
                height="100%"
                src={image}
                alt={`pic-${index}`}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ViewImages;
