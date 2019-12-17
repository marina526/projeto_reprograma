#ORGANIZADOR FINANCEIRO
O projeto de finalização do curso de Bootcamp da turma de Backend do reprograma tem como objetivo obter organização financeira, uma vez que o usuário insere os valores financeiros de entrada da sua conta, gastos realizados e futuros, trazendo o valor atual que possui e previsões futuras.

##PRÉ-REQUISITOS
Instalar o Visual Studio Code ou outro programa de editor de código-fonte:
    <a>https://code.visualstudio.com/</a>
Instalar Github, tendo o seguinte passo-a-passo: 
    <a>https://medium.com/reprogramabr/git-e-github-por-onde-come%C3%A7ar-ca88a783c223</a>
Instalar o Node.js: 
    <a>https://nodejs.org/en/</a>
Instalar o MONGODB: 
    <a>mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.1-signed.msi/download</a>

##PASSO-A-PASSO
Ao criar uma pasta no repositório no GitHub, clone para seu servidor:
´´´git clone (link do repositório) ´´´

Em seguida, inicie as instalações

-npm init -y;
-npm install express mongoose;
-npm install nodemon;
-npm install body-parser;

Ao obter o arquivo package.json, insira "app.js"(ou index.js ou o nome que achar melhor) no lugar de "server.js" na opção "main";

-.gitignore com node_modules / .env
-Rode o app.js na porta 3000;
-Crie o app.js com o express, exportando o app;
-Rode o servidor com o comando "node app.js" no terminal e em seguida acesse "localhost:3000/" no Postman

###PROPRIEDADES
Para inserir uma transação, é disponibilizado os seguintes campos:
-Valor: informar o valor da transação;
-Data: data que ocorreu ou ocorrerá a transação;
-Descrição: uma prévia informando sobre a transação a critério do usuário;
-Tipo: Entrada ou Saída;
-Destinatário: informar para onde vai o valor, quando é decidido que o valor sairá da conta;
-Remetente: informar de quem recebeu o valor, quando é decididdo que o valor entrará na conta;
-Grupo: informar o grupo(da forma que achar melhor) que se encaixa a transação realizada.

###ENDPOINTS

ROTA PRINCIPAL: <a>https://localhost:3000/transacao

POST(add): '' - cria uma transação com as propriedades solicitadas;
GET(getAll): '' - Apresentar todas as transações;
GET(total): '/total' - Apresentar o valor total restante após a inserção de todos as transações desejadas;
GET(getById): '/:id' - Apresenta apenas a transação do id solicitado;
PATCH(update): '/:id' - Modifica a propriedade que desejar;
DELETE(remove): '/:id' - Deleta  a transação solicitada;

##ATUALIZAÇÕES FUTURAS
-Apresentar o extrato;
-Filtros por data;
-Calendário com previsões dos valores;
-Login e senha;
-Cadastro;
-Criação com os agrupamentos de temas dados por cada transação contendo filtro;


