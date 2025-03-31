
import { ReactNode } from 'react';
import './CardSection.css'


function CardSection({children}:{ children: ReactNode; }){
    // card vazio com estilização padão do design
    return(
        <div className='card-section'>
            {children}
        </div>
    )
}


export default CardSection