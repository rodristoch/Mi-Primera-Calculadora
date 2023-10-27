function tabla() {
    console.log("Tabla de multiplicar");
    for (let Multiplicado = 1; Multiplicado <=5; Multiplicado++){
        console.log("----------------------");
        for (let Multiplicador = 1; Multiplicador <=10; Multiplicador++){
            console.log(Multiplicado + " * " + Multiplicador + " = " + Multiplicado*Multiplicador);
        }
    }
}

tabla();


