
import '../styles/Tags.css';
import {tags} from '../MockData/tagsData';



const Tags = ({setSearchTerm}) => {
    return <div className='tagContainer'>
      {
        tags.map((item)=>{
          return(
            <span onClick={()=>{setSearchTerm(item.value)}} className='tag'>
                {item.name}
            </span>
          )  
        })
      }
    </div>
}

export default Tags;