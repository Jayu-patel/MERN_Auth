const multer = require('multer')


const storage = multer.diskStorage({
    destination: (res,file,cb)=>{
        cb(null, './uploads/temp')
    },
    filename: (res,file,cb)=>{
        const name = Date.now()+"_"+file.originalname
        cb(null, name)
    }
})

const upload = multer({storage})
module.exports = upload