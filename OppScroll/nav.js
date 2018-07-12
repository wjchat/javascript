let navItems = document.getElementsByTagName('img');

function navAnimation(clicked, direction){
    for(let each of navItems){
        if(each.classList.contains('currentNav')){
            each.classList.remove('currentNav');
            each.classList.add('dormantNav');
            each.style.transform = "rotate(0deg)"; 
        }
    }
    setTimeout(function(){
        clicked.classList.remove('dormantNav');
        clicked.classList.add('currentNav');
        if(direction === 'up'){
            clicked.style.transform = "rotate(360deg)"; 
        }else{
            clicked.style.transform = "rotate(-360deg)"; 
        }
    }, 50)    
}
