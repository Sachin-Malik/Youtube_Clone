import '../../styles/searchHeader.css'
import menu from '../../assets/icons/menu.png';
import notification from '../../assets/icons/notification.png'
import trend from '../../assets/more/trend.png';
import history from '../../assets/icons/history.png'
import avatar from '../../assets/icons/avatar.png';
import youtube from '../../assets/icons/youtube.png';
import search from '../../assets/icons/search.png';
import createVideo from '../../assets/icons/createVideo.png'
import {useState, useRef, useContext} from 'react';

import { SelectedVideoContext, ShowNavContext, SearchContext } from '../../Screens/Home';



const SearchHeader = () => {
    let storageSearches = localStorage.getItem('previousSearches');

    const previousSearches = [];
    if(storageSearches && typeof(storageSearches)==='string'){
        storageSearches=storageSearches.split(',')
        storageSearches = storageSearches.splice(0,10);
        localStorage.setItem('previousSearches',storageSearches.join(','));
        storageSearches.forEach((item)=>{
            if(item!=='null' && item!=='')
            previousSearches.push({name:item,type:history})
        })
    // localStorage.removeItem('previousSearches');

    }

    let trendingSearches = [
        {name:'React Latest Features',type:trend},
        {name: 'What is Vite ?',type:trend},
        {name: 'Learn Nuxt.JS',type:trend},
        {name: 'Access Camera API for React-Native',type:trend},
        {name: 'GraphQL Intergration with React Project',type:trend} 
    ];
    trendingSearches = [...previousSearches,...trendingSearches].splice(0,10);

    const {setShowNav} = useContext(ShowNavContext);
    const {searchTerm, setSearchTerm} = useContext(SearchContext);
    const {setSelectedVideoId} = useContext(SelectedVideoContext);

    const [inputValue, setInputValue] = useState(searchTerm);
    const [showPreviousSearch, setShowPreviousSearch] = useState(false);
    const previous = useRef(null);

    const handleIputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handlePreviousSearchClicked = (previousSearch) => {
        setInputValue(previousSearch);
        setSearchTerm(previousSearch);
        setSelectedVideoId('');
    }

    const handleSearchSubmit = (event=undefined) => {
        console.log('here');
        if(event) event.preventDefault();
        if(inputValue==='') alert(`Search Term Can't be empty`);
        else setSearchTerm(inputValue);
        setShowPreviousSearch(false);
        setSelectedVideoId('');
    }

    const handleInputBlur = () => {
        setTimeout(() => {
            if (!previous.current.contains(document.activeElement)) {
                setShowPreviousSearch(false);
            }
          }, 300);
    }

    const handleHomeClick = () => {
        if(window.innerWidth>700)
        setShowNav(true);
        setSelectedVideoId('');
    }
    

    const handleSideNavToggle = () => {
        setShowNav((prevValue)=>{
            return !prevValue;
        })
    }

    return   (
    <div className="search__header">
        <div className="search__header-left col-4 col-md-3">
            <img onClick={handleSideNavToggle} className='menuIcon' src={menu} alt='Get Menu'/>
            <div onClick={()=>{handleHomeClick()}} style={{display:'flex', cursor:'pointer'}}>
                <img style={{height:'40px', width:'40px', marginRight:'5px'}} src={youtube} alt='YouTube Logo'/>
                <span className='d-none d-md-block search_header-youtubeText'>YouTube</span>
            </div>
        </div>
        <div className="search__header-middle col-9 col-md-5">
            <div className='search__header-inputWrapper'>
                <form onSubmit={(e)=>{handleSearchSubmit(e)}} style={{width:'100%'}}>
                    <input onBlur={()=>handleInputBlur()} onFocus={()=>{setShowPreviousSearch(true)}}  spellCheck='false' value={inputValue} onChange={(e)=>{handleIputChange(e)}} class="search__header-input" placeholder='Search' type='text' />
                </form>
                <img onClick={handleSearchSubmit} className='search__header-searchIcon' src={search} />
            </div>
            <div className='previousSearchContainer' ref={previous} style={{display:showPreviousSearch?'block':'none'}}>
               {
                trendingSearches.map((item)=>{
                    return (
                        <div onClick={()=>handlePreviousSearchClicked(item.name)} className='previousSearchSingle'>
                            <img  className='search__header-searchIcon' style={{marginRight:'20px'}} src={item.type} alt="Mic Icon" />
                            <p>{item.name}</p>
                        </div>
                    )
                })
               }
            </div>
            {/* <img  className='search__header-icon' style={{marginLeft:'30px'}} src={mic} alt="Mic Icon" /> */}
        </div>
        <div className="search__header-right pl-auto col-4 d-none d-md-flex">
            <img className='search__header-icon header-icon-margin' src={createVideo} alt="Notification Icon" />
            <img className='search__header-icon header-icon-margin' src={notification} alt="Notification Icon" />
            <a href='https://drive.google.com/file/d/1c-SVtbVIIuAHp85GuRwVg21uXizmcC-V/view?usp=share_link' target='_blank'>
                <img className='search__header-icon header-icon-margin' src={avatar} alt="Your Profile Pic" />
            </a>
        </div>

    </div> 
    )
}

export default SearchHeader;