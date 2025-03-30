
import { ReactNode } from 'react';
import './CardSection.css'


function CardSection({children}:{ children: ReactNode; }){
    return(
        <div className='card-section'>
            {children}
        </div>
    )
}


export default CardSection