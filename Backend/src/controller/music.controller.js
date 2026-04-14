const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');

const {uploadFile}= require('../service/storage.service')
const jwt= require('jsonwebtoken');


async function createMusic(req,res){

    const {title}= req.body;
    const audioFile= req.files['file']? req.files['file'][0] : null;
    const imageFile= req.files['image']? req.files['image'][0] : null;

    if (!audioFile||!imageFile) return res.status(400).json({ message: "No music file provided" });

    const audioResult= await uploadFile(audioFile.buffer.toString('base64'))
    const imageResult= await uploadFile(imageFile.buffer.toString('base64'))

    const music= await musicModel.create({
        uri:audioResult.url,
        image:imageResult.url,
        title,
        artist:req.user.id || req.user._id,
    })

    res.status(201).json({
        message:"music create",
        music:{
         id:music._id,
         uri:music.uri,
         title:music.title,
         artist:music.artist
        }
    })
    
}

async function createAlbum(req,res){
  
 const {title, music}= req.body;

 const album=await albumModel.create({
    title,
    music:music,
    artist:req.user._id
 })

 res.status(201).json({
    message:"album created",
    album:{
        id:album._id,
        title:album.title,
        music:album.music,
        artist:album.artist
    }
 })



 

}

async function getAllMusic(req,res){
    const music= await musicModel.find()
    res.status(200).json({
        message:"music fetched successfully",
        music:music
    })
}

async function getAllAlbum(req,res){
    const album= await albumModel
    .find()
    .limit(20)
    .select("title artist").populate("artist","username email")
    res.status(200).json({
        message:"album fetched successfully",
        album:album
    })
}

async function getAlbumById(req,res){

    const albumId = req.params.albumId;
    const album= await albumModel.findById(req.params.albumId).populate("artist","username email")
    
    res.status(200).json({
        message:"album fetched successfully",
        album:album
    })
}


module.exports={createMusic, createAlbum , getAllMusic, getAllAlbum,getAlbumById};