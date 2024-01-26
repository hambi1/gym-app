import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Onvan from "../components/onvan";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import PCards from "../components/plansCards";

const Plans = () => {
  return (
    <>
      {" "}
      <div className="mt-5 container-fluid mx-auto text-center row justify-content-center">
        <Onvan
          hText="پلن ها"
          pText="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است"
          textColor="black"
        />
      </div>
      <div className="row">
        <PCards
          cardName="پلن ماهانه"
          takhfif="۲۰"
          array={["مربی تمرین", "مربی تغذیه", "سالن هوازی", "سالن آبی"]}
          classN="moveFromLeft"
        />
        <PCards
          cardName="پلن شش ماهه"
          takhfif="۲۰"
          array={["مربی تمرین", "مربی تغذیه", "سالن هوازی", "سالن آبی"]}
          classN="moveFromBottom"
        />
        <PCards
          cardName="پلن سالانه"
          takhfif="۲۰"
          array={["مربی تمرین", "مربی تغذیه", "سالن هوازی", "سالن آبی"]}
          classN="moveFromRight"
        />
      </div>
    </>
  );
};

export default Plans;
