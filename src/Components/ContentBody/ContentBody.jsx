import Tags from '../Tags';
import './style.css'
import {useState, useEffect, useContext} from 'react';
import youtube from '../../APIs/youtube';
import VideoGallery from './VideoGallery';
import intialVideos from '../../MockData/videos';
import MainVideo from '../MainVideo';
import { SelectedVideoContext, ShowNavContext, SearchContext } from '../../Screens/Home';



const ContentBody = () => {

  const {searchTerm,setSearchTerm} = useContext(SearchContext);
  const {setShowNav} = useContext(ShowNavContext);
  const {selectedVideoId,setSelectedVideoId} = useContext(SelectedVideoContext);
  
  const getIntialPage = (videos) => {
    const result = []; 
    for(let i=0;i<9;i++){
        result.push(videos[Math.floor((Math.random()*1000))%videos.length]);
     }
     return result;
  }

  const getData = async (query) => {
    const response =  await youtube.get("/search", {
     params: {
       q: query,
       part: "snippet",
       maxResults: 9,
       type: "video",
       key: KEY,
     },
   });
   setVideos(response.data.items);
   console.log(response.data.items);
   const previousSearches = localStorage.getItem("previousSearches");
   localStorage.setItem("previousSearches",`${searchTerm},${previousSearches}`);
 }
  
  const handleVideoSelection = (video) => {
    setSelectedVideoId(video.id.videoId);
    getData(video.snippet.channelTitle);
    setShowNav(false);
  }
  //  const KEY = "AIzaSyClwBeCRqtf_kuTy5cvDVX6GjwwPXf1d-s";
   const KEY = "AIzaSyBd7-r5GUU7NNxbLBmcajK3S490LwYvdcs";
   const [videos, setVideos] = useState(getIntialPage(intialVideos));
   
   useEffect(()=>{
    if(searchTerm!=='') getData(searchTerm);
   },[searchTerm]);
   

    return (
      <>
      {
      selectedVideoId==='' ? (<div>
        <Tags setSearchTerm={setSearchTerm}/>
        <VideoGallery 
          videoSelection={handleVideoSelection} 
          videos={videos}
        />
      </div>
      ) :  (  
          <MainVideo 
            selectedVideoID={selectedVideoId} 
            suggestionVideos={videos}
            videoSelection={handleVideoSelection}
          />
      )
      }
      </>
    )
}
export default ContentBody;