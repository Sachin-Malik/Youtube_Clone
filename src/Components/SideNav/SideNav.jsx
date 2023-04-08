import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavItemGroup from './SideNavItemGroup';
import {sideNavItems2, sideNavItems, subsciptions, more} from '../../MockData/SideNavData'

const SideNav = () => {
    return (
        <div className='sideNavContainer' style={{height:window.innerHeight*0.9}}>
            <SideNavItemGroup items={sideNavItems} seperator />
            <SideNavItemGroup items={sideNavItems2} seperator />
            <SideNavItemGroup heading='Subscriptions' items={subsciptions} seperator/>
            <SideNavItemGroup heading='Explore' items={more} seperator/>
            <div className='d-none'>
                <div style={{fontWeight:'500', marginBottom:'20px'}}>
                    About Press Copyright Contact Us Creators Advertise Developers
                </div>
                <div style={{fontWeight:'500', marginBottom:'20px'}}>
                    Terms Privacy How youtube works Test new features
                </div>
                <p style={{color:'gray'}}>@2023 Google LLC</p>
            </div>
        </div>
    )
}

export default SideNav;