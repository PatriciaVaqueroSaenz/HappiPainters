import React, { useState } from "react";

function Share(props) {
  return (
    <section
      className="
      collapsable-share
      js-collapsable js-collapsable-share"
    >
      <button
        onClick={props.handleShare}
        className="collapsable-share__button js-button-create"
      >
        <i className="far fa-address-card" aria-hidden="true"></i>
        <span className="collapsable-share__button--text">crear tarjeta</span>
      </button>
      {props.url !== "" ? (
        <div className="collapsable-share__twitter js-sectionCreated">
          <h3 className="collapsable-share__twitter--title">
            Tu tarjeta ha sido creada
          </h3>

          <a
            href={props.url}
            className="collapsable-share__twitter--link js-link-create"
            target="_blank"
          >
            Haz click aquí para ver tu tarjeta
          </a>

          <a
            href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=Conoce%20mi%20tarjeta%20de%20presentación:%20${props.url}&hashtags=openToWork,frontend`}
            target="_blank"
            rel="noreferrer"
            className="collapsable-share__twitter--button js-twitter-button"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>Compartir en
            twitter
          </a>
        </div>
      ) : (
        ""
      )}

      {props.error !== "" ? (
        <div className="collapsable-share__twitter js-sectionCreatedError">
          <h3 className="collapsable-share__twitter--title">{props.error}</h3>
          <p className="collapsable-share__twitter--link js-message-error"></p>
        </div>
      ) : null}
    </section>
  );
}

export default Share;
