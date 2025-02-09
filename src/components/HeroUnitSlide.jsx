import React, { useState } from 'react';



const HeroUnitSlide = ({image, title, body}) => {
  const [showMore, setShowMore] = useState(body.length > 100); 
  const displayedText = !showMore ? body : body.slice(0, 100);
  const toggleContent = (bool) => { setShowMore(!showMore) }

  return (
    <div className="relative-position max-height">
      <img src={image} alt="hero unit content" />
      <div className="absolute-position position-obj full-height-100 percentage-width-50 flex-column  padding-md-top white-text padding-lr-md-50">
        <h1 className="white-text capitalize bold-fonts font-sz-md margin-btm-10">{title}</h1>
        <p className="font-sz-small margin-btm-md ">{displayedText}</p>
        <div>
         {showMore && <button className="common-btn white-text bold-fonts" onClick={() => toggleContent()}>Show More</button>}
         {displayedText.length > 100 && <button className="common-btn white-text bold-fonts" onClick={() => toggleContent()}>Show Less</button>}
        </div>
      </div>
    </div>
 )
}

export default HeroUnitSlide