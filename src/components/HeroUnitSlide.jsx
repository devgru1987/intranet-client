const HeroUnitSlide = ({image, title, body}) => (
  <div className="relative-position max-height">
    <img src={image} alt="hero unit content" />
    <div className="absolute-position position-obj full-height-100 percentage-width-50 flex-column  padding-md-top white-text padding-lr-md-50">
      <h1 className="white-text capitalize bold-fonts font-sz-md margin-btm-10">{title}</h1>
      <p className="font-sz-small margin-btm-md ">{body}</p>
      <div>
        <button className="common-btn white-text bold-fonts ">Know More</button>
        {/* <button>Other Members</button> */}
      </div>
    </div>
  </div>
)

export default HeroUnitSlide