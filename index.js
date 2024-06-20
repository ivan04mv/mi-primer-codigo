document.getElementById('presionar').addEventListener("click", function () {
    var numero1 = document.getElementById('id_numero1').value;
    var numero2 = document.getElementById('id_numero2').value;

    var suma = parseInt(numero1) + parseInt(numero2);
    
    alert('El resultado de la suma es: ' + suma);
});