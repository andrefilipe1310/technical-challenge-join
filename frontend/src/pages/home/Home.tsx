import './Home.css';
import Card from '../../components/card/Card';
import { NotebookTabs, PackagePlus } from 'lucide-react';

function Home() {
    const features = [
        { title: 'Cadastre', icon: PackagePlus, description: 'Adicione novos produtos', link: 'add-product' },
        { title: 'Gerenciar', icon: NotebookTabs, description: 'Edite ou Exclua algum de seus produtos', link: 'product-management' },
    ];

    return (
        <div className='main'>
            <h1>Gerenciador de Produtos da Join</h1>
            <section className="row">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        link={feature.link}
                        title={feature.title}
                        icon={feature.icon}
                        description={feature.description}
                    />
                ))}
            </section>
        </div>
    );
}

export default Home;
