import React from "react";
import Reset from "./Reset";
import defaultAvatar from "../../images/card-pic.jpg";

function Preview(props) {
  const namePreview = props.name === "" ? "Nombre Apellido" : props.name;
  const jobPreview = props.job === "" ? "Front-end developer" : props.job;
  const photo = props.photo === '' ? defaultAvatar : props.photo;

  return (
    <section className="preview">
      <div className="preview__container">
        <Reset handleReset={props.handleReset} />

        <section
          className={`preview__card palcol${props.palette} pal${props.palette}`}
        >
          <div className="preview__card-data">
            <h2 className="preview__card-data--name js-name">{namePreview}</h2>
            <h3 className="preview__card-data--jobTitle js-jobTitle">
              {jobPreview}
            </h3>
          </div>
          <div
            className="preview__card-image js__profile-image"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
          <div className="preview__card-socials">
            <a
              className="preview__card-socials--items js-buttonTel"
              href={`tel:${props.phone}`}
              target="_blank"
              title="telephone"
            >
              <span className="fas fa-mobile-alt"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonEm"
              href={`mailto:${props.email}`}
              target="_blank"
              title="email"
            >
              <span className="far fa-envelope"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonLink"
              href={`https://www.linkedin.com/in/${props.linkedin}`}
              target="_blank"
              title="linkedin"
            >
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonGit"
              href={`https://github.com/${props.github}`}
              target="_blank"
              title="github"
            >
              <span className="fab fa-github-alt"></span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Preview;
