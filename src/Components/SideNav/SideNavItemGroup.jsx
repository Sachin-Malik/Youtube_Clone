import './style.css'

const SideNavItemGroup = ({heading=null,items,seperator=false}) => {
    return <div>
        {heading && (<p className='d-none d-md-block sideNavHeader'>{heading}</p>)}
        {
            items.map((item)=>{
                return <div className='itemWrapper'>
                    <img style={{height:'20px', width:'20px'}} src={item.icon} alt={item.altText} />
                    <span className='d-none d-md-block' style={{marginLeft:'20px',letterSpacing:'0px'}}>{item.name}</span>
                </div>
            })
        }
        { seperator && <div style={{height:'1px', background:'lightgrey', margin:'20px 0px'}}></div>}
    </div>
}

export default SideNavItemGroup;