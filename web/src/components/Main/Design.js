import React from "react";
import Palette from "./Palette";

function Design(props) {
  return (
    <section className="collapsable-design js-collapsable js-collapsable-design">
      <div className="collapsable-design__colors">
        <h3 className="collapsable-design__colors--title">colores</h3>
        <div clas="collapsable-design__colors--palettes">
          <Palette
            handleInput={props.handleInput}
            id="palette1"
            paletteClass="palette-1"
            value="1"
            labelClass="label1"
            palette={props.palette}
            checked={props.palette === "1"}
          />
          <Palette
            handleInput={props.handleInput}
            id="palette2"
            paletteClass="palette-2"
            value="2"
            labelClass="label2"
            palette={props.palette}
            checked={props.palette === "2"}
          />
          <Palette
            handleInput={props.handleInput}
            id="palette3"
            paletteClass="palette-3"
            value="3"
            labelClass="label3"
            palette={props.palette}
            checked={props.palette === "3"}
          />
        </div>
      </div>
    </section>
  );
}

export default Design;
