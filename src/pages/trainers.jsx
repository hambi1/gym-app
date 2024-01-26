import { Carousel } from "react-bootstrap";
import Onvan from "../components/onvan";
import image1 from "../dist/images/p1.jpg";
import image2 from "../dist/images/p2.jpg";
import image3 from "../dist/images/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Trainers = () => {
  return (
    //  trainers
    <section className="container-fluid trainers p-5">
      <div>
        {/* title   */}
        <div className="container-fluid mx-auto text-center row justify-content-center">
          <Onvan
            hText="مربی ها"
            pText="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است"
            textColor="white"
          />
        </div>
        <div className="row justify-content-center">
          <div className="text-center col-md-8 col-lg-6">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-pill mx-auto"
                  src={image1}
                  alt="First slide"
                  starts={5}
                />
                <Carousel.Caption>
                  <h5 className="bg-white w-50 rounded-pill mx-auto">
                    هستی امیدی (مربی رسمی)
                  </h5>
                  <p>
                    <ul className="list-inline mx-auto">
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                    </ul>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-pill mx-auto"
                  src={image2}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 className="bg-white w-50 rounded-pill mx-auto">
                    مهدی کاظمی(مربی رسمی)
                  </h5>
                  <p>
                    <ul className="list-inline mx-auto">
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                    </ul>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-pill mx-auto"
                  src={image3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 className="bg-white w-50 rounded-pill mx-auto">
                    علی حاتمی (مربی رسمی)
                  </h5>
                  <p>
                    <ul className="list-inline mx-auto">
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item text-warning mx-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                    </ul>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
