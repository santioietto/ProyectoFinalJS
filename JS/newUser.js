const crearUsuario = document.querySelector("#CrearUsuario");
crearUsuario.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.getItem("usuarios")) {
        let item = localStorage.getItem("usuarios")
        item = JSON.parse(item)
        usuario = []
        item.forEach(e => {
            usuario.push(e)
        });
    } else {
        localStorage.setItem("usuarios", "")
    }

    let new_user = document.querySelector("#login").value;
    let new_pass = document.querySelector("#password").value;
    let new_mail = document.querySelector("#mail").value;
    let check = true;
    usuario.forEach(e => {
        if (new_user === e.user) {
            check = false
        }
    })
    if (new_user === "" || new_pass === "" || new_mail === "") {
        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            gravity: "bottom",
            position: "center",

        }).showToast();

    } else if (check == false) {
        Toastify({
            text: "Usuario ya existe",
            duration: 3000,
            gravity: "bottom",
            position: "center",

        }).showToast();
    } else {
        usuario.push(new Logearte(new_user, new_pass, new_mail));
        storageUsuario();
        import("./redirect.js").then(module => {
            module.redirectLogin()
        })
    }


})


