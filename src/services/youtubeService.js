import { storageService } from "@/services/storageService.js";
const axios = require('axios');
const KEY = 'videos'

'use strict'

export const youtubeService = {
    query
}
const YOUTUBE_API_KEY = 'AIzaSyA5ryD2yzJilnFYZrQLYddtGjSiTXZu3Sg';
const numOfVideos = 5;

async function query(videoTitle = '') {
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${numOfVideos}&q=${videoTitle}&key=${YOUTUBE_API_KEY}`;
    let res = await axios.get(URL);
    storageService.saveToStorage(KEY, res.data.items)
    return res.data.items;
}
// function getVideosId(){
//     var prm = axios.get(URL);
//     return prm.then(res => {
//         var videos = res.data.items;
//         return videos.map(video => {
//             return video.id.videoId
//         })       
//     })
// }