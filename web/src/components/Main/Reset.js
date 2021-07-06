import React from "react";

const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <button
      onClick={handleReset}
      type="reset"
      className="preview__reset js-reset"
    >
      <span className="far fa-trash-alt"></span>
      <span> Reset</span>
    </button>
  );
};
export default Reset;
