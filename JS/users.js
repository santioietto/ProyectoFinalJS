


const ingresar = document.querySelector("#Ingresar");

ingresar.addEventListener("click", (e) => {
    e.preventDefault();

    validarUser().then(valido => {
        if (valido) {
            import("./redirect.js").then(module => {
                module.redirectShoppingCart()
            })
        } else {
            Toastify({
                text: "Usuario y/o contraseña inválido",
                duration: 2000,
                gravity: "bottom",
                position: "center",
            }).showToast();
            document.querySelector("#login").value = "";
            document.querySelector("#password").value = "";
        }
    });
});







function validarUser() {
    if (localStorage.getItem("usuarios")) {
        let datosUser = localStorage.getItem("usuarios")
        datosUser = JSON.parse(datosUser)
        usuario = []
        datosUser.forEach(e => {
            usuario.push(e)
        })
    }
    return new Promise(resolve => {

        let user = document.querySelector("#login").value;
        let pass = document.querySelector("#password").value;

        if (user.trim === "" || pass.trim === "") {
            resolve(false);

        }
        for (let i = 0; i < usuario.length; i++) {
            if (user === usuario[i].user && pass === usuario[i].pass) {
                resolve(true)
                return;
            }
        }
        
        resolve(false);
    })

}


function storageUsuario() {
    let storageUsuario = JSON.stringify(usuario)
    localStorage.setItem("usuarios", storageUsuario)
}
