import React, {useState,useEffect} from 'react';
import SearchHeader from '../Components/SearchHeader/SearchHeader';
import HomeBody from '../Components/HomeBody/HomeBody';

export const SearchContext = React.createContext();
export const ShowNavContext = React.createContext();
export const SelectedVideoContext = React.createContext();

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showNav, setShowNav] = useState(true);
    const [selectedVideoId, setSelectedVideoId] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        if(windowWidth<700) setShowNav(false);
    },[windowWidth])

    useEffect(()=>{
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },[]);

    return (
      <React.Fragment>
       <ShowNavContext.Provider value={{showNav:showNav,setShowNav:setShowNav}}>
          <SearchContext.Provider value={{searchTerm:searchTerm, setSearchTerm:setSearchTerm}}>
            <SelectedVideoContext.Provider value={{selectedVideoId:selectedVideoId,setSelectedVideoId:setSelectedVideoId}}>
              <SearchHeader />
              <HomeBody />
            </SelectedVideoContext.Provider>
          </SearchContext.Provider>
        </ShowNavContext.Provider>
      </React.Fragment>
    )
};

export default Home;