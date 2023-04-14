

var botones=["7","8","9", "+","4","5","6", "-", "1","2","3", "*", "0",".","=", "/" ];

//estamos creando los botones
   

function renderizarGUI(){

    
    document.body.style.display="flex";
    document.body.style.flexDirection="column";
    document.body.style.minHeight="100vh";
    document.body.style.backgroundColor="#D5DBDB  ";
    document.body.style.backgroundImage = "url('imagenes/imagen.jpg')";

    const cabeza=document.createElement("header");
    cabeza.style.backgroundColor="#8FBC8F";
    //cabeza.style.textAling="center";      
    cabeza.style.padding="1em 0";
    document.body.appendChild(cabeza)

    
    const h2=document.createElement("h2");
    const textTitulo1=document.createTextNode("Calculadora");
    
    h2.style.textAlign = "center";
    cabeza.appendChild(h2);
    h2.appendChild(textTitulo1); 

  
    const divCalculadora=document.createElement("div");
    divCalculadora.setAttribute("id", "calculadora");  
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:65%; margin:0 auto;");

    divCalculadora.style.background="#F5B7B1 ";    
    
    document.body.appendChild(divCalculadora);

    const divPantalla=document.createElement("div")
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);
    
    
    //pantalla: input
    const inputPantalla=document.createElement("input");
    inputPantalla.setAttribute("id", "pantalla");
    inputPantalla.setAttribute("type", "text");
    inputPantalla.setAttribute("value", "0");
    inputPantalla.setAttribute('disable', 'true');
    inputPantalla.setAttribute("class", "form-control text-rigth");

    divPantalla.appendChild(inputPantalla);
    //agregue a la division de la pantalla un input



    //div Botones
    const divBotones=document.createElement("div");
    divBotones.setAttribute("id", "botones");
    
    divCalculadora.appendChild(divBotones);

    for(let i=0; i<botones.length;i++){
            //creamos filas
            if(i%4==0){
                const divFila=document.createElement("div");
                divFila.setAttribute("class", "row");
                divBotones.appendChild(divFila);//agregamos la fila a la division de botones
            }

        //creo un boton
        let boton=document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);//llamele boton 1...[i]
        boton.setAttribute("class", "btn btn-success col-3 border-white")
        
        boton.innerHTML=botones[i]
        divBotones.appendChild(boton);

   
       
        boton.addEventListener("click", function(){
            procesarEvento(boton);
        });

       
    }
   
    const footer=document.createElement('footer');
    const p=document.createElement("p");
    const textFooter=document.createTextNode('Hecho por Laura Alejandra Mendoza Prieto');    
    p.style.textAlign ="center";    
    p.style.color ="#FFFFFF";
    footer.style.background="#7F8C8D  "
    footer.style.padding="1em 0";
    
    footer.style.marginTop="auto";
    
   // footer.style.width="100%";
      


    footer.appendChild(p);
    p.appendChild(textFooter);   

    document.body.appendChild(footer); 


    const botonBorrar = document.createElement("button");
    botonBorrar.setAttribute("id", "botonBorrar");
    botonBorrar.setAttribute("class", "btn btn-secondary col-12 border-white");
    //"class", "btn btn-outline-primary col-3 border-white"
   
    botonBorrar.innerHTML = `AC`;
    divCalculadora.appendChild(botonBorrar);
  
    botonBorrar.addEventListener("click", () => {
      pantalla.value = "0";
    });
  }


function procesarEvento(boton){

    let miPantalla= document.getElementById("pantalla");

    if(miPantalla.value=="0"){
        miPantalla.value="";
    }
    if(boton.innerHTML != "="){
        miPantalla.value+=boton.innerHTML;
    }
    
    else{
       //Evaluar la expresión con math.js
       try{
       let resultado=math.evaluate(miPantalla.value);
       miPantalla.value=resultado;

       }catch(error){
            alert("Accion no Permitida");
       }
       
    }

/*function procesarEvento(boton){
    let miPantalla=document.getElementById("pantalla");

    if(miPantalla.value=="0"){
        miPantalla.value="";
        
    }
if(boton.innerHTML != "="){
    miPantalla.value+=boton.innerHTML;

}
if(boton.innerHTML=="AC"){
    miPantalla.value="";
    return
}

       

       
else{
    try {
        let resultado=Math.evaluate(miPantalla.value);
        miPantalla.value=resultado;
    
} catch (error) {
   
    
}




}*/



}















   
    
    



renderizarGUI();

