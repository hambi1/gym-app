const GlaryCards = ({ cat, imgSrc }) => {
  return (
    <div className={`filter ${cat} p-1`}>
      <img width="400" height="230" src={imgSrc} alt=""></img>
    </div>
  );
};

export default GlaryCards;
