const SocialArticle = ({title, desc, image}) => {

 return (
  <article className="relative-width border-radius-5 border-kaki">
    <div className="padding-allsides-10">
     <h4 className="khaki-text capitalize">{title}</h4>
     <p>{desc}</p>
     <div className="">
      <img src={image} alt="article image" className="full-space" />    
     </div>
    </div>
  </article>
 )

}

export default SocialArticle