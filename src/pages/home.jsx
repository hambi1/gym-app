import { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        className="row justify-content-center header align-content-center"
        style={{ height: window.innerHeight, width: window.innerWidth }}
      >
        <div className="text-light pl-5 col-6 text-uppercase justify-content-center font-weight-bold text-left">
          <h1 className="display-1 banner-heading">oxygen gym</h1>
          <p className="h1 mt-3 banner-par">
            <p className="mr-4">
              <p>no gain</p>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
