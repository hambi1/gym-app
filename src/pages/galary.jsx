import GlaryCards from "../components/glaryCards";
import Onvan from "../components/onvan";
import gallery1 from "../dist/images/gallery1.jpg";
import gallery2 from "../dist/images/gallery2.jpg";
import gallery3 from "../dist/images/gallery3.jpg";
import gallery4 from "../dist/images/gallery4.jpg";
import gallery5 from "../dist/images/gallery5.jpg";
import gallery6 from "../dist/images/gallery6.jpg";
import gallery7 from "../dist/images/gallery7.jpg";
import gallery8 from "../dist/images/gallery8.jpg";
import gallery9 from "../dist/images/gallery9.jpg";
import gallery10 from "../dist/images/gallery10.jpg";
import gallery11 from "../dist/images/gallery11.jpg";
import gallery12 from "../dist/images/gallery12.jpg";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Glary = (props) => {
  const params = new URL(document.location.href).searchParams;
  //   console.log(params.get("username")); // arman
  //   console.log(params.get("uid")); // 1200
  //   const [queryParameters] = useSearchParams();
  const [users, setUsers] = useState([
    { src: gallery1, cat: 1 },
    { src: gallery2, cat: 2 },
    { src: gallery3, cat: 3 },
    { src: gallery4, cat: 1 },
    { src: gallery5, cat: 1 },
    { src: gallery6, cat: 2 },
    { src: gallery7, cat: 1 },
    { src: gallery8, cat: 3 },
    { src: gallery9, cat: 2 },
    { src: gallery10, cat: 1 },
    { src: gallery11, cat: 3 },
    { src: gallery12, cat: 2 },
  ]);
  const [filter, setFilter] = useState(users);
  const [cat, setCat] = useState(users);

  return (
    <section className="py-5 my-5">
      <div className="container-fluid">
        {/* title */}
        <div className="row text-center mb-5 justify-content-center">
          <Onvan
            hText="گالری"
            pText="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است"
            textColor="muted"
          />
        </div>
        {/* end of title */}
        <ul dir="rtl" className="list-inline text-center my-5">
          <NavLink onClick={handeleReset}>
            <li
              data-filter="all"
              className="list-inline-item gallery-list-item "
            >
              همه <span className="text-muted mx-3">/</span>
            </li>
          </NavLink>
          <NavLink onClick={searchHandler} cat="1" to="?cat=1">
            <li
              data-filter="cat1"
              className="list-inline-item gallery-list-item  "
            >
              دسته یک <span className="text-muted mx-3">/</span>
            </li>
          </NavLink>
          <NavLink onClick={searchHandler} cat="2" to="?cat=2">
            <li
              data-filter="cat2"
              className="list-inline-item gallery-list-item "
            >
              دسته دو <span className="text-muted mx-3">/</span>
            </li>
          </NavLink>
          <NavLink onClick={searchHandler} cat="3" to="?cat=3">
            <li
              data-filter="cat3"
              className="list-inline-item gallery-list-item "
            >
              دسته سه
            </li>
          </NavLink>
        </ul>
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center">
            {filter.map((e) => (
              <GlaryCards imgSrc={e.src} cat={e.cat} />
            ))}
            {/* <GlaryCards imgSrc={gallery1} cat="" />
            <GlaryCards imgSrc={gallery2} cat="" />
            <GlaryCards imgSrc={gallery3} cat="" />
            <GlaryCards imgSrc={gallery4} cat="" />
            <GlaryCards imgSrc={gallery5} cat="" />
            <GlaryCards imgSrc={gallery6} cat="" />
            <GlaryCards imgSrc={gallery7} cat="" />
            <GlaryCards imgSrc={gallery8} cat="" />
            <GlaryCards imgSrc={gallery9} cat="" />
            <GlaryCards imgSrc={gallery10} cat="" />
            <GlaryCards imgSrc={gallery11} cat="" />
            <GlaryCards imgSrc={gallery12} cat="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
  function searchHandler(element) {
    setUsers(users);
    const catByElement = element.currentTarget.attributes.cat.value;
    const category = params.get("cat");
    let catedUsers = [...users];
    let filtered = catedUsers.filter((er) => er.cat == catByElement);
    setFilter(filtered);
    // console.log(element.currentTarget.attributes.cat.value);
  }
  function handeleReset() {
    setFilter(users);
  }
};

export default Glary;
