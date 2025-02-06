import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const WiseWords = () => {

 const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

return (
  <div className=" margin-btm-10 purple-text ">
   <h1 className="uppercase text-align-cntr level-1-headings">Food for thought</h1>
    <Carousel responsive={responsive} arrows={false} showDots={true} infinite={true} autoPlay={true} rtl={true}>
      <div className="slide flex-column flex-cntr-vtcl-align justify-center torquise-bg ">
        <p>"Start where you are. Use what you have. Do what you can"</p>
        <p> Arthur Ashe – </p>
      </div>
      <div className="slide flex-column flex-cntr-vtcl-align justify-center torquise-bg ">
       <p> "Alone we can do so little. Together we can do so much"</p>
       <p>Helen Keller – </p>
      </div>
      <div className="slide flex-column flex-cntr-vtcl-align justify-center torquise-bg ">
        <p>"A dream doesn’t become reality through magic; it takes sweat, determination and hard work"</p>
        <p> Colin Powell – </p>
      </div>
      <div className="slide flex-column flex-cntr-vtcl-align justify-center torquise-bg ">
       <p>"Once you have commitment, you need the discipline and hard work to get you there"</p>
       <p> Haile Gebrselassie – </p>
      </div>
    </Carousel>
  </div>
)

}

export default WiseWords