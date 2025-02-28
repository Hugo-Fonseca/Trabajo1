
import "./app.scss";

const page = document.getElementById('page');
//Crear un elemento llamado cuadrado
const cuadrado = (classCss) => {
    const div = document.createElement('div');
    div.classList.add('cuadrado');
    for(let item of classCss){
        div.classList.add(item);
    }
    return div;
};

const listaCuadrados = () => {
    const div = document.createElement("div");
    div.classList.add('listaCuadrados');
    for(let i = 0; i <= 15; i++){
        div.appendChild(cuadrado([]));
    }
    return div;
};

const grid = ()=>{
    const div = document.createElement('div');
    div.classList.add("grid");
    for (let i = 0; i <= 15; i++) {
        const c = cuadrado([]);
        c.id = "cua-"+i;
        div.appendChild(c);
    }
    return div;
};

page.appendChild(cuadrado(['absolute']));
page.appendChild(cuadrado(['fixed']));
page.appendChild(cuadrado(['stiky']));
page.appendChild(listaCuadrados());
page.appendChild(grid());