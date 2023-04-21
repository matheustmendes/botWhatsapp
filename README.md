# Aplicação de integração do bot de resposta de WhatsApp com o 'Chat GPT'

Esta aplicação utiliza as APIs do Venom e do OpenAI para criar um bot de resposta de WhatsApp que é alimentado pelo modelo GPT 3.5 Turbo da OpenAI. O objetivo é permitir que o bot responda a perguntas e comentários enviados por usuários do WhatsApp com respostas naturais e relevantes.

## Tecnologias utilizadas

- API Venom
- API OpenAI
- Dotenv
- Javascript
- Node.JS

## Configuração

Antes de executar a aplicação, é necessário configurar as chaves de API da Venom e da OpenAI. Para isso, crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

> PHONE_NUMBER=<numero_telefone_bot>
> 
> OPENAI_API_KEY=<sua_chave_de_api_do_openai>


Certifique-se de substituir `<numero_telefone_bot>` e `<sua_chave_de_api_do_openai>` pelas suas próprias chaves de API.

## Instalação

Para instalar as dependências da aplicação, execute o seguinte comando no terminal:

>npm install


## Uso

Para iniciar a aplicação, execute o seguinte comando no terminal:

> node index.js


Isso abrirá uma interface no console onde você terá que logar o whatsapp que você deseja rodar o bot através de um QR Code Scan.

![alt text](img/venom.png)



## Contribuindo

Sinta-se à vontade para contribuir para este projeto abrindo uma issue ou enviando um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
