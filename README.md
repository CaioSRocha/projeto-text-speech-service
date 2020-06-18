# Text Speech Project

O objeto deste projeto é realizar a conversão de textos para áudio, ou seja, o usuário será capaz de inserir um texto na página da aplicação web e criar um arquivo de áudio reproduzível com o mesmo conteúdo.

## Pré Requisitos

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [NodeJS](https://nodejs.org/pt-br/download/package-manager/)
* Criação de uma [conta IBM Cloud](https://www.ibm.com/cloud/watson-text-to-speech)
* Instalação do [MySQL](https://www.mysql.com/)

É importante ter o Git em sua máquina para clonar este projeto.

Ao criar sua conta na IBM Cloud, será necessário ativar o serviço [Text to Speech](https://cloud.ibm.com/apidocs/text-to-speech) e obter o token que será utilizado nas requisições enviadas pela aplicação.


## Configuração do Ambiente

Clone este repositório com o comando abaixo:

```
$ git clone git@github.com:CaioSRocha/projeto-text-speech-service.git
```

Agora navegue até o diretório do projeto e carregue as dependências do projeto:

```
$ cd projeto-text-speech-service
$ npm install
```

## Arquivos de Configuração

Precisamos editar os arquivos de conexão com o banco e o arquivo de configuração do token, que será utilizado para consumir o serviço.

Faça a edição do arquivo config/config.json, insira as credenciais utilizadas na configuração do seu ambiente MySQL.

Este mesmo arquivo contém as três versões de ambientes development, test e production. Estamos usando apenas a configuração de desenvolvimento em nosso ambiente, edite apenas este bloco:

```
"development": {
"username": "seu_usuario",
"password": "sua_senha",
"database": "nome_do_seu_banco",
"host": "nome_do_servidor",
"dialect": "mysql",
"operatorAliases": false
}
```

Agora, configure o token fornecido para o serviço Text to Speech, faça a edição do arquivo .env, na raíz do projeto:

```
IBM_APIKEY=seu_token_aqui
```

# Criação do Banco de Dados

Após configuração da conexão com o banco, precisamos criar a tabela onde os comentários serão registrados, execute o comando abaixo no diretório do projeto:

```
$ npx sequelize-cli db:migrate
```

# Iniciando Aplicação

Para iniciar a aplicação, execute o comando abaixo ainda no diretório do projeto:

```
$ nodemon server.js
```

Para criar seus áudios, acesso a página [http://localhost:3000/coments](http://localhost:3000/coments).

Após inserir algum texto, pressione o botão "Salvar" e aguarde até que o serviço processe o áudio.
