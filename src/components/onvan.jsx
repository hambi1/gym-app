import { Component } from "react";

class Onvan extends Component {
  state = {
    hText: this.props.hText,
    pText: this.props.pText,
    textColor: this.props.textColor,
  };
  render() {
    return (
      <div className="col-xl-6 col-lg-8 col-md-10 moveFromTop">
        <h1 className={`text-${this.state.textColor}`}>{this.state.hText}</h1>
        <div className={`text-${this.state.textColor} underline my-5 `}></div>
        <p className={`text-${this.state.textColor} lh-2 h5 `}>
          {this.state.pText}
        </p>
      </div>
    );
  }
}

export default Onvan;
