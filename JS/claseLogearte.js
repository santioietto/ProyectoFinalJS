class Logearte {
    constructor(user, pass, mail) {
        this.user = user;
        this.pass = pass;
        this.mail = mail;
    }

    datosusuario() {

        return "-" + this.user + "<br>" + this.mail;
    }

    getUser() {
        return this.user;
    }

    getMail() {
        return this.mail;
    }
}

// Creo nuevo array vacio para utilizarlo como base de datos del login
let usuario = new Array();

usuario.push(new Logearte("Santi", "santi111", "s@gmail.com"));
usuario.push(new Logearte("Agus", "agus222", "agus@gmail.com"));
usuario.push(new Logearte("Octi", "octi333", "octim@gmail.com"));