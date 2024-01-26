const ServicesCard = ({ imgSrc, hText, classN }) => {
  return (
    <div className="col-lg-4 col-sm-6 my-5">
      <div className={`card border-0 card-shadow ${classN}`}>
        <img src={imgSrc} alt="" className="card-img"></img>
        <div className="card-img-overlay">
          <h5 className="text-white heading p-2 ">{hText}</h5>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
