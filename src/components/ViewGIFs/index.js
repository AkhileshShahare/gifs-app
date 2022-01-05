import React from "react";


const ViewGIFs = ({ data: { data } = {}}) => {
    return (
      <div className="container">
        <div className="row">
          {data &&
            data.map(({ images: { downsized: { url } = {} } = {} }) => (
              <div className="col-4 md-2">
                <img
                  src={url}
                  className="rounded mx-auto d-block"
                  alt="gifs"
                  style={{ width: "290px", height: "193px" }}
                />
              </div>
            ))}
        </div>
      </div>
    );
};

export default ViewGIFs