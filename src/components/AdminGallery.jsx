//https://www.npmjs.com/package/react-upload-gallery
import RUG from 'react-upload-gallery'
import 'react-upload-gallery/dist/style.css'


const AdminGallery = () => {

  return (
   
    <RUG
    action="/api/upload" // upload route
    source={response => response.source} /> // response image source
  )


}

export default AdminGallery