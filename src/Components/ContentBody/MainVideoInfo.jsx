
import React from 'react';
import { formatNumber } from '../../Utils/formatHelper';
import download from '../../assets/icons/download.png';
import like from '../../assets/icons/like.png';
import share from '../../assets/icons/share.png';
import { uploadedTime } from '../../Utils/dateTimeHelper';

const MainVideoInfo = ({selectedVideo}) => {
    return (
        <div className="selectedVideoInfo">
        <h4>{selectedVideo?.snippet?.title||'Loading...'}</h4>
        <div style={{display:'flex', marginTop:'15px'}}>
        
        <div className='container p-0'>
        <div className='row'>
            <div className='col-12 col-md-5' style={{display:'flex'}}>
                <img 
                    style={{width:'50px', marginRight:'15px', height:'50px', borderRadius:'50%', backgroundColor:'lightgray'}} 
                    src={'https://robohash.org/RQH.png?set=set3'} alt='Channel Image' 
                />
                <div style={{marginRight:'30px'}}>
                    <div className='videoTitle'>{selectedVideo?.snippet?.channelTitle||'Loading...'}</div>
                    <div>{formatNumber(selectedVideo?.statistics?.viewCount)} subscribers</div>
                </div>
                <button className='subscribeButton'>Subscribe</button>
            </div>

            <div className='col-12 col-md-7 text-end p-0 px-2 px-md-5' style={{marginLeft:'auto',}}>
                <button className='otherButton'> 
                    <img src={like} className='otherButton-icon d-none d-sm-inline'/>{formatNumber(selectedVideo?.statistics?.likeCount)} 
                </button>
                <button className='otherButton'>
                    <img src={share} className=' d-none d-sm-inline otherButton-icon'/>
                    Share
                </button>
                <button className='otherButton'>
                <img src={download} className='otherButton-icon d-none d-sm-inline'/>
                    Download
                </button>
            </div>
        </div>
        </div>

        </div>
        <div style={{height:'1px',background:'lightgray',marginTop:'15px'}}></div>
        <div className='videoDescription'>
            <div style={{display:'flex'}}>
                <h5 style={{marginRight:'10px'}}>{formatNumber(selectedVideo?.statistics?.viewCount)}</h5>
                <h5>{uploadedTime(selectedVideo?.snippet?.publishedAt)}</h5>
            </div>
            <p>{selectedVideo?.snippet?.localized?.description}</p>
        </div>
    </div>
    )
}
export default MainVideoInfo;