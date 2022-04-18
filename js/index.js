let menu = document.querySelector('.fa-bars');
let links = document.querySelector('.links');

menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     links.classList.toggle('active');
}

links.onclick = () =>{
     menu.classList.remove('fa-times');
     links.classList.remove('active');
}

let dropdown = document.querySelector('.drop-down');
let dropDownBtn = document.querySelector('.services-link');

dropDownBtn.onclick = () => {
     dropdown.classList.toggle('active');
}
dropdown.onclick = () => {
     dropdown.classList.remove('active');
}