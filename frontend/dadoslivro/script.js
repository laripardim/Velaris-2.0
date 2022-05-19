var paramsBusca = new URLSearchParams(location.search);

async function loadCards() {
    fetch("http://localhost:7000/livro/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let card = document.querySelectorAll('.card');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                document.getElementById("card_img").src = item.capa;
                nome_livro[index] = item.nome_livro;
                let titulo = document.querySelector(".quadrado2").querySelectorAll("h2")
                let genero = document.querySelector(".quadrado2").querySelectorAll("h4")
                titulo[0].innerHTML = item.titulo
                titulo[1].innerHTML = item.genero
                genero[0].innerHTML = item.sinopse
                comentario[0].innerHTML = item.comentario
            })
        })
}

async function loadComentarios() {
    fetch("http://localhost:7000/comentario/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let comentario = document.querySelectorAll('.comentario');
            data.forEach((item, index) => {
                let titulo = document.querySelector(".comentario").querySelectorAll("h3")
                let comentario = document.querySelector(".comentario").querySelectorAll("span")
                
                //#region[BUSCA DO USUÁRIO]
                    fetch("http://localhost:7000/usuario/"+item.id_usuario)
                    .then(resp => {
                        return resp.json()
                    })
                    .then(data => {
                        data.forEach((item, index) => {
                            titulo[0].innerHTML = item.nome;
                        })
                    })
                //#endregion

                comentario[0].innerHTML = item.comentario;
            })
        })
}

function generateCards(data) {

    localStorage.setItem('ex1', JSON.stringify);
    imgCard = JSON.parse(localStorage.getItem('userdata'));

    livro.innerHTML = userdata;
}

function init() {
    loadCards();
    loadComentarios();
}

function showModal() {
    document.getElementById("modalTextoLivro").style.display = "block";
}

function closeModal() {
    document.getElementById("modalTextoLivro").style.display = "none";
}

(init) ();

// function load() {
//     carregarDados();
// }

// function carregarDados() {

// }