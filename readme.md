# Desafio da Join
## Descrição
O desafio proposto foi um crud de produtos usando React + Spring boot + h2, nesse projeto utilizei a identidade visual da Join juntamente com sua brandPersona para cria um gerenciador de produtos, também fiz uma integração com cloudinary para o armazenamento das imagens dos produtos, gerei uma imagem docker
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
- Importe para dentro do postman o arquivo [inovamed.postman_collection.json](https://github.com/andrefilipe1310/technical-challenge-join/blob/main/backend/join.postman_collection.json)
### Notas Importantes

- Deixe as portas 5173 e 8080 do seu computador livres para o uso dessa aplicação

### Imagens da aplicação

