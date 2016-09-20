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
    
    
    
    var arrows = document.querySelectorAll('.list_arrow');
    
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('visible');
            
            
        })
    }
    
//    var options = document.querySelectorAll('.list_panel li');
//    var title = document.querySelector('.title');
//    var color = document.querySelector('.color');
//    var material = document.querySelector('.pattern');
//    var transport = document.querySelector('.transport');
//            
//    for (var i = 0; i < options.length; i++) {
//        if (i < 3) {
//            options[i].addEventListener('click', function() {
//                title.innerText = this.innerText;
//                this.parentElement.classList.toggle('visible');
//                var titleValue = document.querySelector('.title_value');
//                if (i < 1) {
//                    titleValue.innerText = 200;
//                } else if (i < 2) {
//                    titleValue.innerText = 220;
//                } else {
//                    titleValue.innerText = 235;
//                }
//            })
//        } else if (i < 6) {
//            options[i].addEventListener('click', function() {
//                color.innerText = this.innerText;
//                this.parentElement.classList.toggle('visible');
//            })
//        } else {
//            options[i].addEventListener('click', function() {
//                material.innerText = this.innerText;
//                this.parentElement.classList.toggle('visible');
//            })
//        }
//    }
    
    // Calculator
    
    
    var dropDownList = document.querySelectorAll('.drop_down_list');
    var listLabel = document.querySelectorAll('.list_label');
    var order = document.querySelectorAll('.panel_left *');
    var orderValue = document.querySelectorAll('.panel_right *');
    var li = document.querySelectorAll('.list_panel>li');
    var input = document.querySelector('[id="transport"]');
    var sum = document.querySelector('.sum strong');

    function priceCalculate(){
        var price = 0;
        for(var i=0; i<orderValue.length;i++){
            var item = orderValue[i].innerText;
            if(item == ""){
                console.log("item === NaN");
            }else{
               price+=parseInt(item);
            };
            
        };
        sum.innerText = price + " zł";
        return price;
    };
    
          
    for(var i =0; i < dropDownList.length; i++){
        
        dropDownList[i].addEventListener('click', function(){
            this.querySelector('.list_panel').classList.toggle('visible');
        });
        
        dropDownList[i].addEventListener('mouseleave', function(){
            this.querySelector('.list_panel').classList.remove('visible');
        });
        
    };
     
    
    for(var i =0; i < li.length; i++){
        if(i<3){
            li[i].addEventListener('click', function(){
                listLabel[0].innerText = this.innerText;
                order[0].innerText = "Chair " + this.innerText;
                switch(this.innerText){
                    case "Clair":
                        orderValue[0].innerText = 299;
                        break;
                    case "Margarita":
                        orderValue[0].innerText = 369;
                        break;
                    case "Selena":
                        orderValue[0].innerText = 429;
                        break;
                    default:
                        orderValue[0].innerText = "";     
                }
                priceCalculate();
            });
        } else if (i<6) {
            li[i].addEventListener('click', function(){
                listLabel[1].innerText = this.innerText;
                order[1].innerText = this.innerText;
                switch(this.innerText){
                    case "Czerwony":
                        orderValue[1].innerText = 100;
                        break;
                    case "Czarny":
                        orderValue[1].innerText = 0;
                        break;
                    case "Pomarańczowy":
                        orderValue[1].innerText = 100;
                        break;
                    default:
                        orderValue[1].innerText = "";     
                }
                priceCalculate();
            });
        } else {
            li[i].addEventListener('click', function(){
                listLabel[2].innerText = this.innerText;
                order[2].innerText = this.innerText;
                switch(this.innerText){
                    case "Tkanina":
                        orderValue[2].innerText = 0;
                        break;
                    case "Skóra":
                        orderValue[2].innerText = 200;
                        break;
                    default:
                        orderValue[2].innerText = "";     
                }
                priceCalculate();
            });
        }
    };
    
    
    input.addEventListener('change',function(){
        if(input.checked === true){
            order[3].innerText = "Transport";
            orderValue[3].innerText = 80;
        } else {
            order[3].innerText = "";
            orderValue[3].innerText = "";
        }
        priceCalculate();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})