const container = document.querySelector('.hero');
const arrow = document.querySelector('.arrow');
let index = 0;

arrow.addEventListener('click', ()=>{

    if(index == 0){
        index++;
        extend(0);
        changeArrow(0);

    }else if(index == 1){
        index--;
        extend(1);
        changeArrow(1);  

    }
});


function extend(element){
    if(element == 0){
        container.style.height = "60rem";

    }else if(element == 1){
        container.style.height = "40rem";
    }

}

function changeArrow(element){
    if(element == 0){
        arrow.style.marginTop = "20rem";
        arrow.classList.add('active');

    }else if(element == 1){
        arrow.style.marginTop = "0rem";
        arrow.classList.remove('active');
    }

}