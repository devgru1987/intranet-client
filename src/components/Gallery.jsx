/* https://www.npmjs.com/package/react-image-gallery */ 

import Navigation from "./Navigation"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
 {
   original: "https://picsum.photos/id/1018/1000/600/",
   thumbnail: "https://picsum.photos/id/1018/250/150/",
 },
 {
   original: "https://picsum.photos/id/1015/1000/600/",
   thumbnail: "https://picsum.photos/id/1015/250/150/",
 },
 {
   original: "https://picsum.photos/id/1019/1000/600/",
   thumbnail: "https://picsum.photos/id/1019/250/150/",
 },
];


const Gallery = () => {

  return (
    <div>
       <section className="main-navigation">
       <Navigation />
       </section>

       <section>
       <ImageGallery items={images} />
       </section>
    </div>
  )
}

export default Gallery