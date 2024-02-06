import React,{useState} from 'react'

function NotFound() {
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   // Get the selected file from the input
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Create a FormData object to send the file
  //   const formData = new FormData();
  //   formData.append('image', selectedFile);

  //   try {
  //     // Make a POST request to the server to upload the file
  //     const response = await fetch('http://localhost:8080/api/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       // File uploaded successfully
  //       console.log('File uploaded!');
  //     } else {
  //       // Handle upload failure
  //       console.error('Upload failed.');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };
  return (
    <div className='w-full h-[100vh] grid place-items-center'>
        <h1 className='text-[3rem] font-bold'>Error 404 page not found</h1>
        {/* <div>

          <div>
            <h2>Upload an Image</h2>
            <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="im">SELECT YOUR IMAGE</label>
              </div>
              <input type="file" onChange={handleFileChange} accept="image/*" id='im'/>
              <button type="submit">Upload</button>
            </form>
          </div>

        </div> */}
    </div>
  )
}

export default NotFound