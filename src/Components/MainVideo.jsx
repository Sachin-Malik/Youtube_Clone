
import './videoDetail.css'
import axios from 'axios';

import {useState, useEffect} from 'react';
import VideoCardSuggestion from './ContentBody/VideoCardSuggestion';
import MainVideoInfo from './ContentBody/MainVideoInfo';
const baseURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics";
const KEY = "AIzaSyBd7-r5GUU7NNxbLBmcajK3S490LwYvdcs";


const MainVideo = ({selectedVideoID, suggestionVideos, videoSelection}) => {

    const videoStyle = {
        height:window.innerWidth<700?'300px':window.innerHeight*0.65
    }
    const [selectedVideo, setSelectedVideo] = useState('');
    const [showAlert, setShowAlert] = useState(true);

    useEffect(()=>{
      const getVideoDetail = async() => {
        if(selectedVideoID==='') return;
        const response = await axios.get(`${baseURL}&id=${selectedVideoID}&key=${KEY}`)
        setSelectedVideo(response.data.items[0]);
      }
      getVideoDetail(selectedVideoID);
    },[selectedVideoID])


    return (
        <div className='videoAndSuggestionWrapper' style={{ display:'flex'}}>
            <div className='mainVideoPlayer' style={{paddingLeft:'2%'}}>

                <div className='col-12 text-center alert py-2' style={{display:showAlert?'flex':'none'}}>
                    <p style={{margin:'0px'}}>Some Channels might have disabled their content to run in Embeded Mode. If Video Doesn't load Please try a different channel.</p>
                    <button onClick={()=>setShowAlert(false)} className='closeAlertButton'>X</button>
                </div>
                <iframe title="video player " 
                    style={{borderRadius:'10px',width:'100%',...videoStyle}} 
                    src={`https://www.youtube.com/embed/${selectedVideoID}`}
                />
                <MainVideoInfo selectedVideo={selectedVideo}/>
            </div>

            <div className='suggestionListWrapper'>
               {
                suggestionVideos.map((video)=>{
                    return (
                       <VideoCardSuggestion
                            video={video}
                            videoSelection={videoSelection}
                        />
                    )
                })
               }
            
            </div>
        </div>
    )
}

export default MainVideo
