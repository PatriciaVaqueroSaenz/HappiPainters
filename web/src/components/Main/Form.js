import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(props) {
  return (
    <form className="collapsable js-data">
      <Collapsable title="Diseña" icon="far fa-object-ungroup">
        <Design handleInput={props.handleInput} palette={props.palette} />
      </Collapsable>
      <div className="border"></div>
      <Collapsable title="Rellena" icon="far fa-keyboard">
        <Fill
          updateAvatar={props.updateAvatar}
          handleInput={props.handleInput}
          name={props.name}
          job={props.job}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          photo={props.photo}
        />
      </Collapsable>
      <div className="border"></div>
      <Collapsable title="Comparte" icon="fas fa-share-alt">
        <Share
          url={props.url}
          error={props.error}
          handleShare={props.handleShare}
        />
      </Collapsable>
      <div className="border"></div>
    </form>
  );
}

export default Form;
