//Requisições:

const express = require("express");
//================================
const cors = require("cors");
//================================
const fs = require("fs");
//================================
const path = require("path");
//================================
const jogos = require("./data/generos.json");
//================================
const app = express();
//================================
const PORT = 3000;
//================================
app.use(cors());


//#################################################
//Arquivos estáticos
//#################################################


app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos")
    )
);


//#################################################
//Função auxiliar
//#################################################


function sortear(array){
    const i = Math.floor(Math.random() * array.length);

    return array[i];
}


//#################################################
//Rotas
//#################################################


app.get("/api/jogos/aleatorio", (req, res) => {

    const todasAsImagens = Object.values(jogos).flat();

    const item = sortear(todasAsImagens);

    res.json({
        status: "sucess",

        message: `http://localhost:${PORT}/fotos/${item}` //alterar depois pelo IP da minha máquina (no senai)

    });
});

//======================================================
app.get("api/jogos/:genero", (req, res) => {

    const genero = req.params.genero.toLowerCase();

    if (!jogo[genero]){
        res.status(404).json({
            status: "error",

            message: `Gênero "${genero}" não encontrado`
        });

        return;
    }
    const item = sortear(jogos[genero]);

    res.json({
        status: "sucess",

        message: `http://localhost:${PORT}/fotos/${item}` //alterar depois pelo IP da minha máquina (no senai)
    });
});


//#################################################
//Inicia o servidor
//#################################################
app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`); //alterar depois pelo IP da minha máquina (no senai)
    console.log(`Coloque as imagens manualmente em: data/fotos/`)
})