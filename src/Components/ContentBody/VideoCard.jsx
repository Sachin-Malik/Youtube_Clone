import {uploadedTime} from '../../Utils/dateTimeHelper';
import {channelImageUrl} from '../../MockData/channelsPics';





const VideoCard = ({video,index, videoSelection}) => {

    const videoSize = {
        height:window.innerWidth<500?200:200,
        width:window.innerWidth<500?window.innerWidth-40:350,
    }

    return (
        <div className="videoCard" onClick={()=>{videoSelection(video)}} >
            <img src={video.snippet.thumbnails.high.url} style={{...videoSize, borderRadius:'15px', objectFit:'cover'}}  />
            <div class='video__info' style={{width:videoSize.width}}>
                <div style={{marginTop:'12px', marginRight:'15px'}}>
                    <img 
                    style={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'lightgray'}} 
                    src={channelImageUrl[index]} alt='Channel Image' />
                </div>
                <div>
                <div class='video__title'>{video.snippet.title}</div>
                <div style={{fontSize:'12px'}}>
                    <span style={{marginRight:'5px'}} >{video.snippet.channelTitle}</span> •
                    <span style={{marginLeft:'5px'}}>{uploadedTime(video.snippet.publishTime)}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;