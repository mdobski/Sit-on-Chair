document.addEventListener('DOMContentLoaded', function() {
    
    var navElements = document.querySelectorAll('header nav>ul>li');
    
    for (var i = 0; i < navElements.length; i++) {
        
        navElements[i].addEventListener('mouseover', function() {
            var sublist = this.querySelector('div');
            if (sublist != null) {
                
                this.children[1].style.display = 'block';
            }
        })
        
        navElements[i].addEventListener('mouseout', function() {
            var sublist = this.querySelector('div');
            if (sublist != null) {
                
                this.children[1].style.display = 'none';
            }
        })
    }
    
    var gallery = document.querySelectorAll('#gallery .container>div');
    
    for (var i = 0; i < gallery.length; i++) {
        gallery[i].addEventListener('mouseover', function() {
            var describtion = this.querySelector('div');
            if (describtion != null) {
                
                this.firstElementChild.style.display = 'none';
            }
        })
        
        gallery[i].addEventListener('mouseout', function() {
            var describtion = this.querySelector('div');
            if (describtion != null) {
                
                this.firstElementChild.style.display = 'block';
            }
        })
    }
    
    
    
    var next = document.querySelector('.arrow-right');
    var prev = document.querySelector('.arrow-left');
    var slides = document.querySelectorAll('.image-img');
    var index = 0;
    
    slides[0].style.display = 'block';
    
    next.addEventListener('click', function() {
        slides[index].style.display = 'none';
        index++;
        if (index > slides.length-1) {
            index = 0;
        }
        slides[index].style.display= 'block';
    })
    
    prev.addEventListener('click', function() {
        slides[index].style.display = 'none';
        index--;
        if (index < 0) {
            index = slides.length-1;
        }
        slides[index].style.display = 'block';
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})