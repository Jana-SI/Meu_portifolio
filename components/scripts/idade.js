function getAge(dateString) {

    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

var idade = document.getElementById('idade') // pega a div

var resultado = getAge("1993/05/20");
idade.innerHTML = resultado;
