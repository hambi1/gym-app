import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Carousel0({ image1src, trainer1Name, imgAlt, starts }) {
  return (
    <Carousel.Item>
      <img
        className="d-block w-50 rounded-pill mx-auto"
        src={image1src}
        alt={imgAlt}
      />
      <Carousel.Caption>
        <h5>{trainer1Name} (مربی رسمی)</h5>
        <p>
          <ul className="list-inline">

            <li className="list-inline-item text-warning mx-5">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="list-inline-item text-warning mx-5">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="list-inline-item text-warning mx-5">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="list-inline-item text-warning mx-5">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="list-inline-item text-warning mx-5">
              <FontAwesomeIcon icon={faStar} />
            </li>
          </ul>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default Carousel0;
