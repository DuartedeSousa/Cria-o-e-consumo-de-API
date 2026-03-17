### Explorador de Jogos com API ###

🟢 Este projeto apresenta uma conexão entre back-end e front-end a partir de duas máquinas, acessando uma API local de jogos dos gêneros:

➡️ Ação 🧨;

➡️ Terror 👻;

➡️ Survival 🪓;

➡️ Multiplayer 🤜🤛;

➡️ Indie 🗻;

➡️ RPG ⚔️.

================================================================

## Requisitos e Instalações ##

🟢 Durante a criação do projeto, houve a necessidade da instalação de alguns pacotes de dados para a funcionalidade do JSON sendo eles:

➡️ npm install;

➡️ npm install cors express.

🟢 O que permitiu que o projeto utilizasse das funcionalidades do cors e express, que foram transferidos para variáveis (ademais outras constantes).

================================================================

## Funcionalidade do Backend ##

🟢 O backend deste projeto tem a função de criar funções e rotas que coletem as imagens da API local que, com a ajuda de arquivos JSON, permitem que o servidor envie imagens aleatórias de sua API, ademais permitindo a busca de um gênero de imagem (jogos), funcionando das seguintes formas:

➡️ Possibilidades da 1° rota:
1. Quando o usuário clicar na imagem do frontend, a função *sortear* do servidor vai ser chamada, realizando a escolha aleatória de uma nova imagem;
2. Quando o usuário clicar no botão *🎰 Jogo Aleatório*, ocorrerá a chamada de uma função (*sortear*) que realizará uma escolha aleatória de imagem (assim como o tópico acima);

➡️ Possibilidades da 2° rota:
3. Quando o usuário digitar um gênero de algum jogo no input do frontend e clicar na tecla *enter*, será enviado um url com o item solicitado para o servidor, que identificará a solicitação em sua segunda rota e logo enviará uma resposta com uma imagem aleatória do gênero de jogo solicitado;
4. Caso o usuário ao invés de clicar na tecla *enter* utilizar o botão explorar, obterá o mesmo resultado.

# Nota:
‼️*a funcionalidade da segunda rota não permite uma exploração com o campo de buscas vazio, ativando um "alert" que pede que o usuário digite um gênero válido*

🟢 Dentre os gêneros válidos, o usuário pode utilizar:

➡️ acao;

➡️ terror;

➡️ survival;

➡️ multiplayer;

➡️ indie;

➡️ rpg.

# Nota:
‼️*O servidor não suporta carácteres em UTF-8 até o momento*

================================================================

## Estrutura do Backend ##

🟢 Pastas e arquivos:

➡️ Pasta data: possuí as pastas com gêneros (acao, indie, etc.), que por sua vez contêm as imagens, possuindo quatro cada gênero. Ademais o aquivo generos.json, que estrutura uma espécie de listagem dos arquivos dessas pastas de forma organizada, assim dando origem a API local;

➡️ Pasta node_modules; Arquivos package-lock.json e package.json: São resultado das instalações citadas anteriormente, tratando-se de requisitos para a funcionalidade da API;

➡️ Arquivo server.js: É aquele que é responsável pela funcionalidade citada no tópico anterior (*Funcionalidade do Backend*);

➡️ Arquivo ReadMe.md: É responsável por esta documentação.

##############################################################

🟢 Servidor (server.js):

1. Requisições: O servidor cria variáveis constantes que recebem os requerimentos que foram necessários para a produção do mesmo:

➡️ express = recebe o requerimento express (adquirido com o npm install cors express);

➡️ cors = recebe o requerimento cors (adquirido com o npm install cors express);

➡️ fs = recebe o requerimento fs (importa o módulo de arquivos do Node);

➡️ path = recebe o requerimento path (caminho);

➡️ jogos = recebe o requerimento do caminho até o arquivo JSON ("./data/generos.json").

2. Outras variáveis:

➡️ app = recebe a função express();

➡️ PORT = recebe a porta desejada para a utilização do site enquanto "estiver no ar".

# Nota:
‼️*Em seguida o servidor utiliza a função express (app) para habilitar o uso do cors na aplicação*
--------------------------------------------------------------

3. Arquivos estáticos:

➡️ Permite que tudo que estiver na pasta data/fotos pode ser acessado pela URL /fotos.
--------------------------------------------------------------

4. Função auxiliar:

➡️ Esta função receberá um array e retorna um item aleatório dele para o usuário.
--------------------------------------------------------------

5. Rotas:

➡️ 1° rota: Aqui há a coleta de todas as imagens, que são tranformadas em um único array e depois são sorteadas, para que a escolhida seja enviada para o cliente em formato JSON;

➡️ 2° rota: Há a coleta do url como parâmetro, que contêm o gênero que o usuário busca. Logo após, o servidor verifica se o gênero solicitado está presente no JSON, onde caso haja, ele sorteará uma imagem e enviará para o cliente dentro do gênero buscado, todavia, caso o gênero não exista no JSON, uma mensagem de erro será enviada.
--------------------------------------------------------------

6. Iniciando o Servidor:

➡️ Aqui será iniciado o servidor express, também enviando uma mensagem para o console.

================================================================
## Frontend ##

🟢 O frontend no projeto é a aparência dele que com o html sendo o esqueleto, o css que cria a aparência, podemos modificar a aparência do projeto para o jeito que quisemos e o javascript que permiti criar páginas da web interativas e dinâmicas. onde cada um funciona da seguinte forma:

1. No HTML o <head> configura a página e conecta o CSS e o JavaScript (com defer, para rodar depois do carregamento). No <body>, os pontos mais importantes são os elementos com id, como a imagem (gamImage), o nome (breedName), o botão de jogo aleatório (randomBtn) e a busca (breedInput e searchBtn), pois são eles que o JavaScript usa para interagir com o usuário e atualizar o conteúdo dinamicamente.

2. No JAVASCRIPT o getElementById pega os elementos que estão no HTML e o querySelector o usamos poque ele é uma classe. Fazemos o endereço base da nossa API local (const API = "http://10.106.208.17:3000/api/jogos"), temos função assíncrona que busca um jogo na API (async function buscarjogo(url),recebe uma URL como parâmetro), função que busca um jogo aleatório(function jogoAleatorio()), função que busca jogo por gênero(function buscarPorgenero()), addEventListener realiza um evento quando e feito uma ação, jogoAleatorio() assim que a página abre já busca um jogo aleatório.

3. No CSS * seleciona TODOS os elementos da página usado normalmente para resetar estilos padrão do navegador, , enquanto o body se destaca por aplicar o fundo em degradê e usar Flexbox para centralizar todo o conteúdo. A .container funciona como o principal bloco da interface, com estilo de “card”, e a .gen-area organiza a exibição da imagem com centralização e suporte a elementos sobrepostos, como o nome exibido sobre a imagem. Além disso, .controls e .search utilizam Flexbox para alinhar botões e campo de entrada, enquanto os estilos de button e input garantem uma aparência uniforme. Por fim, a classe .loading melhora a experiência do usuário ao indicar quando há carregamento, bloqueando interações e exibindo uma mensagem na tela.

================================================================
## Como Acessar ##

🟢 Como ativar o backend:

➡️ No VS Code Studio da máquina que contêm o servidor utilize o comando (Ctrl + ') para acessar o local que os comendos devem ser executados, alterando o modo "powershell" para "command prompt" (presente no canto superior direito da aba). Após isso, use o seguinte comando para ativar o servidor: node server.js

Assim o servidor estará ativo em: http://10.106.208.17:3000
--------------------------------------------------------------

🟢 Como ativar o frontend:

➡️ Para ativar o frontend, abra o VS Code Studio na máquina que possuí o frontend e acesse o arquivo "index.html", em seguida clique na opção "Go Live" no canto inferior. Assim você será redirecionado para o site hospedado localmente. 

Porém só funcionará apenas na máquina com o frontend, mas para acessar de maneira pública, utilize o este link: https://m-arquesdev2608.github.io/Explorador_de_jogos/

Ademais, ligue o servidor e permita a solicitação do navegador de "Buscar e se conectar a qualquer dispositivo na sua rede local" para que a conexão entre backend e frontend ocorra devidamente. 

================================================================
## Créditos ##
- H. Duarte de Sousa (Backend);
- Arthur Marques Duarte Silve (Frontend).