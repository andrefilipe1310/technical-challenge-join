import './Card.css'
import{ LucideProps} from 'lucide-react';
function Card({ title,description,icon:Icon  }: { title: string;description:string; icon: React.ComponentType<LucideProps> }){
    return(
        <div className='card'>
            <span><Icon color="#38f05d"/></span>
            <h3 className='title'>{title}</h3>
            <p>{description}</p>
        </div>

        
    )
}


export default Card