import './Home.css'
import Card from '../../components/card/Card'
import { DoorOpen, NotebookTabs, PackagePlus, Section } from 'lucide-react'

function Home() {

    const features = [
        {title:'Cadastre',icon:PackagePlus,description:'Adicione novos produtos'},
        {title:'Gerenciar',icon:NotebookTabs,description:'Edite ou Exclua algum de seus produtos'},
        {title:'Sair',icon:DoorOpen,description:'Nos veremos novamente'}
    ]
    return (
        <>
          
            <div className='main'>
                <h1>Gerenciador de Produtos da Join</h1>
                <section className="grid grid-template-columns-1">
                {features.map((feature)=>{
                    return (
                        <Card title={feature.title} icon={feature.icon} description={feature.description}/>
                    )
                })}
                </section>
            </div>
        </>
    )
}

export default Home