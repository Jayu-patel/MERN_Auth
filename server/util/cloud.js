// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2
const fs = require('node:fs')
          
cloudinary.config({ 
  cloud_name: 'Your_cloud_name', 
  api_key: 'Your_api_key', 
  api_secret: 'Your_secret_key' 
});

const uploadOnCloud = async (filePath) => {
    try{
        if(!filePath) return null

        const res = await cloudinary.uploader.upload(filePath,{
            resource_type: 'auto',
        })
        return res
    }
    catch(error){
        fs.unlink(filePath)
        return null
    }
}

module.exports =  uploadOnCloud