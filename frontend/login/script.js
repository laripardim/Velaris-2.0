//var btnSignin = document.querySelector("#signin");
//var btnSignup = document.querySelector("#signup");

//var body = document.querySelector("body");


/*
btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js"; 
});
*/
/*

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
*/
//document.querySelector("#signin").onclick = ()=>cadastro();


async function cadastro(){
    fetch("http//localhost:7000/usuario",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: document.querySelector("#nome").value,
            email:document.querySelector("#email").value,
            senha:document.querySelector("#senha").value,
        })
    })
    .then(Response=>{console.log(Response)})
    .then(resp=>{console.log (resp)})
}


// document.querySelector("#login").onclick = ()=>login();

// function login(){
//     let json=JSON.stringify({ 
//         email:document.querySelector("#email-login").value,
//         senha:document.querySelector("#senha-login").value,
//     })
//     console.log(json)
//     fetch("http://localhost:7000/login",{
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           method: "POST",
//           body: json
//     })
//     .then(Response=>{console.log(Response)})
//     .then(resp=>{console.log(resp)})
// }
