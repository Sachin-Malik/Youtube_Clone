import React from 'react';
import { uploadedTime } from '../../Utils/dateTimeHelper';
const VideoCardSuggestion = ({video, videoSelection}) => {

    const videoStyle = {
        width:window.innerWidth<700?window.innerWidth-40:'250px',
    }

   
    return (
        <div onClick={()=>{videoSelection(video)}} className='videoSuggestionCard p-0 pr-md-5'>
            <div className='text-center align-self-center '>
                <img 
                    src={video.snippet.thumbnails.medium.url} 
                    style={{height:'130px', ...videoStyle, borderRadius:'15px', objectFit:'cover'}}  
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