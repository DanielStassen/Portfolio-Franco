let spanTexts = document.getElementsByTagName("span");


    window.onload = function(){
        
        for(spanTexts of spanTexts){
            spanTexts.classList.add("active");
        }
    }

const parentContainer = document.querySelector('.readMoreContainer')

    parentContainer.addEventListener('click', event=>{

        const current = event.target;

        const isReadMoreBtn = current.className.includes('readMoreBtn');

        if(!isReadMoreBtn) return;

        const currentText = event.target.parentNode.querySelector('.readMoreText');

        currentText.classList.toggle('readMoreText--show');

        current.textContent = current.textContent.includes('More about me') ? "Less about me." : "More about me..."
    })