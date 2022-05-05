import React from "react";
import "./meaning.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row">
        <section>
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  className="pics"
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt=""
                    width="150px"
                  />
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else return null;
}
