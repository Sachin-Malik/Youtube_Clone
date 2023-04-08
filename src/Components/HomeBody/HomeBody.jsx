import ContentBody from '../ContentBody/ContentBody';
import SideNav from '../SideNav/sideNav';
import './style.css'
import {useContext} from 'react';
import { ShowNavContext } from '../../Screens/Home';
const HomeBody = () => {

    const {showNav} = useContext(ShowNavContext);
    return (
        <div className="main__body">
           <div style={{width:showNav?'15%':0}}>
                <SideNav />
           </div>
           <div className='contentBody' style={{width:showNav?'85%':'100%', height:'90vh', overflowY:'auto', paddingLeft:'10px'}}>
               <ContentBody /> 
           </div>
        </div>
    )
}

export default HomeBody;