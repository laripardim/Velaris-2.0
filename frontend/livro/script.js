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
    // fetch("http://localhost:7000/usuario",)
    // .then(response=>{console.log(response)})
    // .then(resp=>{})

     let body = {
         nome: document.querySelector("#nome").value,
         email:document.querySelector("#email").value,
         senha:document.querySelector("#senha").value
     }

     let settings = {
         "method": "POST",
         "headers": { 
             "Content-Type": "application/json" 
         },
         "body": JSON.stringify(body)
     }

    // let response = await fetch("http://localhost:7000/usuario", settings);
    // let json = await response.json();

    // console.log(json);
    fetch(
            "http://localhost:7000/usuario"
          , settings
      )
      .then(response => {
        
        console.log(response);
      })
      .catch(err => {
        
        console.error(err);
      });
      
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
