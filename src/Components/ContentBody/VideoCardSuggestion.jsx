import React from 'react';
import { uploadedTime } from '../../Utils/dateTimeHelper';
const VideoCardSuggestion = ({video, videoSelection}) => {

    const videoStyle = {
        width:window.innerWidth<700?window.innerWidth-40:'250px',
        height:window.innerWidth<700?'150px':'130px',
    }

   
    return (
        <div onClick={()=>{videoSelection(video)}} className='videoSuggestionCard'>
            <div className='text-center align-self-center '>
                <img 
                    src={video.snippet.thumbnails.medium.url} 
                    style={{ ...videoStyle, borderRadius:'15px', objectFit:'cover'}}  
                />
            </div>
            <div className='ml-0 ml-md-2' style={{ padding:'10px',paddingBottom:'0px'}}>
                <div className='videoSuggestionCard-title'>{video.snippet.title}</div>
                <div style={{marginTop:'5px'}} className='videoSuggestionCard-text'>
                    <span style={{marginRight:'5px'}} >{video.snippet.channelTitle}</span> •
                    <span style={{marginLeft:'5px'}}>{uploadedTime(video.snippet.publishTime)}</span>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCardSuggestion;