const button = document.querySelectorAll('.box')
const body = document.querySelector('body')
button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id==='box1'){
            body.style.backgroundColor='#F3B95F'
        }
        else if(color.target.id==='box2'){
            body.style.backgroundColor='#37B5B6'
        }
        else if(color.target.id==='box3'){
            body.style.backgroundColor='#50623A'
        }
        else if(color.target.id==='box4'){
            body.style.backgroundColor='#E6A4B4'
        }
        else {
            body.style.backgroundColor='#D24545'
        }
    })
})
