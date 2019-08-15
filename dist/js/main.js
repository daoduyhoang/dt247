document.addEventListener('DOMContentLoaded',function(){
   var btn = document.querySelectorAll('.btn-slide');
   var slide = document.querySelectorAll('.slide-all');
    for(var i=0;i<btn.length;i++){
        btn[i].addEventListener('click',function(){
            for(var i=0;i<btn.length;i++){
                btn[i].classList.remove('active-carousel');
            }
            this.classList.add('active-carousel');
            var activeBtn = this;
            var ps = 0;
            for(ps=0; activeBtn = activeBtn.previousElementSibling;ps++ ){
                console.log(ps);
            }
            for(var i=0;i<slide.length;i++){
                slide[i].classList.remove('active-op');
                slide[ps].classList.add('active-op');
            }
        })
    }
    var hum = document.querySelectorAll('.humberger');
    var menu = document.querySelectorAll('.menu');
    var temp = 0;
    hum[0].addEventListener('click',function(){
        menu[0].classList.toggle('none-menu');
        menu[0].classList.toggle('block-menu');
    })
})


