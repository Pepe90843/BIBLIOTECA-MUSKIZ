function votacion(){
    alert("Introduce [1] si quieres drama coreano, [2]para teoría política, [3] para narrativa fantastica o [4] para teatro juvenil");
    let votacion=prompt("Vota aquí");
    while(votacion>4 || votacion<1){
        votacion=prompt("Introduce [1] si quieres drama coreano, [2]para teoría política, [3] para narrativa fantastica o [4] para teatro juvenil");
    }
    switch(votacion){
        case "1":
            alert("Votaste drama coreano");
        break;
        case "2":
            alert("Votaste teoría política");
        break;
        case "3":
            alert("Votaste narrativa fantástica");
        break;
        case "4":
            alert("Votaste teatro juvenil");
        break;
        default:
            alert("Error");
    }
    alert("Gracias por votar, siga disfrutando de la biblioteca");
}

function votacionNoti(){
    const numerito=document.querySelector(".numerito");
    if(numerito.style.display == "none"){
        alert("No hay notificaciones");
    }else{
        alert("Introduce [1] si quieres drama coreano, [2]para teoría política, [3] para narrativa fantastica o [4] para teatro juvenil");
        let votacion=prompt("Vota aquí");
        while(votacion>4 || votacion<1){
            votacion=prompt("Introduce [1] si quieres drama coreano, [2]para teoría política, [3] para narrativa fantastica o [4] para teatro juvenil");
        }
        switch(votacion){
            case "1":
                alert("Votaste drama coreano");
            break;
            case "2":
                alert("Votaste teoría política");
            break;
            case "3":
                alert("Votaste narrativa fantástica");
            break;
            case "4":
                alert("Votaste teatro juvenil");
            break;
            default:
                alert("Error");
        }
        alert("Gracias por votar, siga disfrutando de la biblioteca");
        numerito.style.display = "none";
    }
}

function p(){
    alert("En construcción");
}

function colorCentimo(){
    const body = document.querySelector("body");
    const fondo = ['imagenes/Título.png'];
    if(body.style.backgroundColor=="white"){
        body.style.backgroundColor="rgb(83, 81, 81)";
        body.style.backgroundImage="none";
    }else{
        body.style.backgroundColor="white";
        body.style.backgroundImage=`url(${fondo})`;
    }
}

function juego(){
    
}


