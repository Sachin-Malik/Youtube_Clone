
import React from 'react';
import { formatNumber } from '../../Utils/formatHelper';
import download from '../../assets/icons/download.png';
import like from '../../assets/icons/like.png';
import share from '../../assets/icons/share.png';
import { uploadedTime } from '../../Utils/dateTimeHelper';

const MainVideoInfo = ({selectedVideo}) => {
    return (
        <div className="selectedVideoInfo">
        <p className='videoTitle'>{selectedVideo?.snippet?.title||'Loading...'}</p>
        <div className='videoStats' style={{}}>
        
        <div  style={{display:'flex'}}>
                <img 
                    style={{width:'40px', marginRight:'15px', height:'40px', borderRadius:'50%', backgroundColor:'lightgray'}} 
                    src={'https://robohash.org/RQH.png?set=set3'} alt='Channel Image' 
                />
                <div style={{marginRight:'30px'}}>
                    <div className='channelTitle'>{selectedVideo?.snippet?.channelTitle||'Loading...'}</div>
                    <div style={{fontSize:'12px'}}>{formatNumber(selectedVideo?.statistics?.viewCount)} subscribers</div>
                </div>
                <button className='subscribeButton'>Subscribe</button>
        </div>

        <div className='text-end p-0' style={{ display:'flex', justifyContent:'flex-end'}}>
                <button className='otherButton'> 
                    <img src={like}  className='otherButton-icon d-none d-sm-block'/> 
                    <div>{formatNumber(selectedVideo?.statistics?.likeCount)}</div>
                    <img src={like} className='otherButton-icon d-none d-sm-block dislike'/>
                </button>
                <button className='otherButton'>
                    <img src={share} className=' d-none d-sm-block otherButton-icon'/>
                    Share
                </button>
                <button className='otherButton'>
                <img src={download} className='otherButton-icon d-none d-sm-block'/>
                    Download
                </button>
        </div>

        </div>
        <div style={{height:'1px',background:'lightgray',marginTop:'15px'}}></div>
        <div className='videoDescription'>
            <div style={{display:'flex',fontSize:'16px',fontWeight:'500'}}>
                <div style={{marginRight:'10px'}}>{formatNumber(selectedVideo?.statistics?.viewCount)}</div>
                <div>{uploadedTime(selectedVideo?.snippet?.publishedAt)}</div>
            </div>
            <p>{selectedVideo?.snippet?.localized?.description}</p>
        </div>
    </div>
    )
}
export default MainVideoInfo;