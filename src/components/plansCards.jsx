import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PCards = ({ takhfif, cardName, array, classN }) => {
  return (
    <div class={`col-lg-4 text-center ${classN}`} dir="rtl">
      <div class="card card-1 text-light py-4 my-4 border-0 mx-auto">
        <div class="card-body">
          <h4 class="mb-5">{cardName}</h4>
          <h1>
            {takhfif} <FontAwesomeIcon icon={faPercent} />
          </h1>
          <ul class="list-unstyled">
            {array.map((item) => (
              <li class="py-3 card-list-item">{item}</li>
            ))}
          </ul>
          <button class="btn btn-primary membership-card-button text-light">
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCards;
