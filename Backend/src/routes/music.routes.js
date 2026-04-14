const express= require('express');
const musicController = require('../controller/music.controller')
const authMiddleware= require('../middleware/auth.middleware');
const multer= require('multer');


const upload= multer({
    storage:multer.memoryStorage()
})


const router= express.Router();

router.post("/upload",authMiddleware.authArtist, upload.fields([{ name: 'file', maxCount: 1 },
                                                  { name: 'image', maxCount: 1 }]),musicController.createMusic)
router.post("/album", authMiddleware.authArtist, musicController.createAlbum)

router.get("/", musicController.getAllMusic)
router.get("/album",authMiddleware.authUser, musicController.getAllAlbum)
router.get("/album/:albumId",authMiddleware.authUser, musicController.getAlbumById)



module.exports=router;