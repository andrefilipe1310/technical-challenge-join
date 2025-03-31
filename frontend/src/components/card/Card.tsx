import { Link  } from 'react-router-dom';
import './Card.css'
import{ LucideProps} from 'lucide-react';
function Card({ link,title,description,icon:Icon  }: {link:string;  title: string;description:string; icon: React.ComponentType<LucideProps> }){
    
    
    return(
        <Link to={`/${link}`}>
        <div className='card' >
            <span><Icon color="#38f05d"/></span>
            <h3 className='title'>{title}</h3>
            <p>{description}</p>
        </div>
        </Link>
        
    )
}


export default Card