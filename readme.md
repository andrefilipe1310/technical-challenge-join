# Desafio da Join
## Descrição
Este projeto é um CRUD de produtos desenvolvido com React no frontend e Spring Boot + H2 no backend. Para aprimorar a experiência, utilizei a identidade visual e a brand persona da Join, criando um gerenciador de produtos intuitivo e alinhado à marca.

Além disso, implementei a integração com o Cloudinary para o armazenamento eficiente das imagens dos produtos e finalizei o projeto com a geração de uma imagem Docker, facilitando a implantação e portabilidade.

Para os testes unitarios foi usado JUnit e Mockito nas classes FindAllProductService, CreateProductService e FindByIdProductService do backend
## Tecnologias utilizadas
- **Java 17**: A linguagem de programação utilizada para desenvolver a lógica de backend da aplicação.
- **Spring Boot 3**: Framework para construção de aplicações Java, utilizado para criar a API RESTful do projeto.
- **React**: Biblioteca JavaScript utilizada para construir a interface do usuário (front-end), proporcionando uma experiência interativa e dinâmica.
- **Docker**:  software de código aberto usado para implantar o aplicativo dentro de containers virtuais

## Como Instalar
### Pré-requisitos
- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Node.js](https://nodejs.org/) 
- [Docker (opcional)](https://www.docker.com/get-started/)
### Passo a Passo
 **Maneira 1:**
1. **Clone o repositório**
Abra seu terminal e execute o seguinte comando para clonar o repositório:

 ```bash
git clone https://github.com/andrefilipe1310/technical-challenge-join.git
```
 ```bash
cd frontend
```
2. **Executar o Backend**
- Navegue até a pasta do backend e execute o seguinte comando :
```bash
mvn spring-boot:run
```
3. **Acessar a Aplicação**
- Abra seu navegador e acesse http://localhost:5173 para ver a aplicação em funcionamento.
- também pode ser acionado no intellij através do botão "run" na classe TechnicalChallengeApplication
4. **Acessar as rotas da aplicação (swagger)**
- Abra seu navegador e acesse http://localhost:8080/swagger-ui/index.html

5. **Acessar as rotas da aplicação (postman)**
- Importe para dentro do postman o arquivo [join.postman_collection.json](https://github.com/andrefilipe1310/technical-challenge-join/blob/main/backend/join.postman_collection.json)

**Maneira 2 (usando o docker compose):**
1. Na raiz do projeto producto o arquivo docker-compose.yml
2. Execute o seguinte comando:
```bash
docker-compose up --build
```
3. O frontend está disponivel em http://localhost:5173 e o backend em http://localhost:8080
### Notas Importantes
- Deixe as portas 5173 e 8080 do seu computador livres para o uso dessa aplicação


