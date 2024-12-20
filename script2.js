function search_animal() {
    var input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    var x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }else {
            x[i].style.display="list-item";                 
        }
    }
}
