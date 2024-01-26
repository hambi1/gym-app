import React, { useRef } from "react";
import Onvan from "../components/onvan";
import AwardCards from "../components/awardCArds";
import { faAward, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import imgA from "../dist/images/awardimg.png";
import useScrollSpy from "react-use-scrollspy";
const Award = () => {
  const sectionRefs = [useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <section className="p-5 mt-5 awards">
      <div className="container-fluid">
        {/* title */}
        <div className="row text-center mb-5 justify-content-center">
          <Onvan
            textColor="white"
            hText="افتخارات"
            pText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است"
          />
        </div>
        {/* end of title */}
        <div className="row my-5 justify-content-center">
          <AwardCards
            faKey={faTrophy}
            iconColor="warning mt-lg-5"
            classN="moveFromLeft"
            hText="قهرمانی"
            pText=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز"
          />
          <AwardCards
            faKey={faMedal}
            iconColor="success"
            classN="moveFromBottom"
            hText="مدال ها"
            pText=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز"
          />
          <AwardCards
            faKey={faAward}
            iconColor="danger mt-lg-5"
            hText="برگزیده کیفی"
            classN="moveFromRight"
            pText=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز"
          />
        </div>
        <div className="container mt-3">
          <div className="row">
            <div
              ref={sectionRefs[0]}
              className={`col-lg-6 text-white text-center text-lg-right ${
                activeSection === 0 ? "fromLeft" : "award-text"
              }`}
            >
              <h1 className="mb-4">با کیفیت ترین تجهیزات</h1>
              <p className="lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={imgA}
                alt=""
                ref={sectionRefs[1]}
                className={`img-fluid ${
                  activeSection === 0 ? "fromRight" : "award-text"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
