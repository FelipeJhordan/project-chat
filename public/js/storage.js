
function saveName(nome) {  
    let savedName = getName(name) != false ? console.log("Nome já existe") : localStorage.setItem('author',nome);
}

function getName(nome){
    author = localStorage.getItem("author") 
    if(author !== null) {
        if (author ==  nome) {
            return author;
        }
    } 
    return false;
}