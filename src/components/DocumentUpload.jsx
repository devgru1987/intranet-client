// import { useUpload } from 'react-filezone'; --unistalled 

//https://www.npmjs.com/package/react-dropzone-uploader
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const DocumentUpload = () => {
  const getUploadParams = () => {
    return { url: 'http://localhost:5173/admin/policies' }
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

 const handleSubmit = (files, allFiles) => {
   console.log(files.map(f => f.meta))
   allFiles.forEach(f => f.remove())
 }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  )
}

export default DocumentUpload
