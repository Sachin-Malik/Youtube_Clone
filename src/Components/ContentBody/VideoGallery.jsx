import VideoCard from './VideoCard';


const VideoGallery = ({videos,videoSelection}) => {
    return (
        <div className='videoGallery'>
            {
                videos.map((video, index)=>{
                    return (
                        <VideoCard  video={video} index={index} videoSelection={videoSelection}/>
                    )
                })
            }
        </div>
    )
}

export default VideoGallery;