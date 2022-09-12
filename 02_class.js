class Uno {
    constructor() {
        this.a = null;
        this.b = null;
    }
    // crea metodos para consultar y editar las propiedades
    editarUno(a, b) {
        this.a = a;
        this.b = b;
    }
    consultarUno() {
        return { Dato1: this.a, Dato2: this.b }
    }
}

class Dos {
    constructor(dato1, dato2) {
        this.c = dato1;
        this.d = dato2;
    }

    asignarDos(dato1, dato2) {
        this.c = dato1;
        this.d = dato2;
    }
    
    consultarDos() {
        return { Dato3: this.c, Dato4: this.d }
    }
}

export { Uno }
export { Dos }

