import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AwardCards = ({ pText, hText, faKey, iconColor , classN }) => {
  return (
    <div className={`col-md-6 col-lg-4  text-center p-5 ${classN}`}>
      {/* <FontAwesomeIcon icon={["fas", "fa-medal"]} /> */}
      <div className={`text-${iconColor}`}>
        <FontAwesomeIcon icon={faKey} size="6x" />
      </div>
      {/* <i className="text-danger"></i> */}
      <h1 className="text-white mb-3">{hText}</h1>
      <p className="text-white lh-1">{pText}</p>
    </div>
  );
};

export default AwardCards;
