import { Component } from "react";
import imgB1 from "../dist/images/b1.jpg";
import imgB2 from "../dist/images/b2.jpg";
import imgB3 from "../dist/images/b3.jpg";
import ServicesCard from "../components/servisesCard";
import Onvan from "../components/onvan";

class Services extends Component {
  state = {};
  render() {
    return (
      <section className="bg-secondary py-4 mt-5">
        <div className="container-fluid">
          <div className="row text-center mb-5 justify-content-center">
            <Onvan
              hText="خدمات"
              pText="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است"
              textColor="white"
            />
          </div>

          <div className="row">
            <ServicesCard
              imgSrc={imgB1}
              classN="moveFromLeft"
              hText="برنامه تمرینی"
            />
            <ServicesCard
              imgSrc={imgB2}
              classN="moveFromBottom"
              hText="رژیم غذایی"
            />
            <ServicesCard
              imgSrc={imgB3}
              classN="moveFromRight"
              hText="مربی شخصی"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
