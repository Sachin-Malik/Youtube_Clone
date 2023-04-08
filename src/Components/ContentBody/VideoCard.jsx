import {uploadedTime} from '../../Utils/dateTimeHelper';
import {channelImageUrl} from '../../MockData/channelsPics';





const VideoCard = ({video,index, videoSelection}) => {

    const videoSize = {
        height:window.innerWidth<500?200:270,
        width:window.innerWidth<500?window.innerWidth-40:450,
    }

    return (
        <div className="videoCard" onClick={()=>{videoSelection(video)}} >
            <img src={video.snippet.thumbnails.medium.url} style={{...videoSize, borderRadius:'15px', objectFit:'cover'}}  />
            <div class='video__info' style={{width:videoSize.width}}>
                <div style={{marginTop:'22px', marginRight:'15px'}}>
                    <img 
                    style={{width:'50px', height:'50px', borderRadius:'50%', backgroundColor:'lightgray'}} 
                    src={channelImageUrl[index]} alt='Channel Image' />
                </div>
                <div>
                <div class='video__title'>{video.snippet.title}</div>
                <div>
                    <span style={{marginRight:'5px'}} >{video.snippet.channelTitle}</span> •
                    <span style={{marginLeft:'5px'}}>{uploadedTime(video.snippet.publishTime)}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;