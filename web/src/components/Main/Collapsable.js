import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClickCollapsable = this.handleClickCollapsable.bind(this);
  }

  handleClickCollapsable() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const openClassName = this.state.isOpen ? " " : "collapsable-hidden";

    const openArrow = this.state.isOpen ? "rotate" : "";

    return (
      <div>
        <div
          onClick={this.handleClickCollapsable}
          className="collapsable__header js-collapsable-header"
        >
          <i className={this.props.icon}></i>
          <h2 className="collapsable__header--title">{this.props.title}</h2>
          <i className={`fas fa-chevron-down js-arrow ${openArrow}`}></i>
        </div>
        <div className={`collapsable-design ${openClassName}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapsable;
