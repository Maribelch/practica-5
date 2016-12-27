
function parrotTrouble(){
    var hora = parseInt(document.getElementById("hora").value);
    var habla_loro = document.getElementById("habla_loro").value;  
    if (0<=hora && hora<=23){
        console.log("fb");
        if ((hora<7 && habla_loro=="1")||(hora>20 && habla_loro=="1")){
            document.getElementById("resultado").innerHTML="Estamos en problemas: 1"   ;
        }else{
            document.getElementById("resultado").innerHTML="No estamos en problemas: 0";
        } 
    }else{
        console.log("fb");
        document.getElementById("resultado").innerHTML="<i class='alert alert-danger'>Ingrese valores del 0 al 23 por favor</i>";
    }
    
}