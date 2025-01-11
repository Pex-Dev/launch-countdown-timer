document.addEventListener('DOMContentLoaded',() =>{
    let days = 8;
    let hours = 23;
    let minutes = 55;
    let seconds = 41;
      
    const cardDays = document.querySelector('#days');
    const cardHours = document.querySelector('#hours');
    const cardMinutes = document.querySelector('#minutes');
    const cardSeconds = document.querySelector('#seconds');
    

    const updateCounter = () =>{
        const oldMinutes = minutes;
        const oldHours = hours;
        const oldDays = days;

        seconds--;
        
        if(seconds<=0){seconds=59; minutes--;}
        if(minutes<=0){minutes=59; hours--;}
        if(hours<=0){hours=23; days--;}
        if(days<=0){seconds = 0; minutes = 0; hours = 0; clearInterval(interval);}

        setNumber(cardSeconds,seconds);
        
        if(oldMinutes!=minutes){
            setNumber(cardMinutes,minutes);
        }
        if(oldHours!=hours){
            setNumber(cardHours,hours,23);
        }
        if(oldDays!=days){
            setNumber(cardDays,days);
        }
    }

    const setNumber = (card,number,maxVal = 59) =>{
        const topNumber = card.querySelector('.countdown__card-top').querySelector('.countdown__card-top-number');
        const bottomNumber = card.querySelector('.countdown__card-bottom').querySelector('.countdown__card-bottom-number');
        const layer = card.querySelector('.countdown__card-layer');
        const layerTop = layer.querySelector('.countdown__card-layer-top');
        const layerTopNumber = layerTop.querySelector('.countdown__card-layer-top-number')
        const layerBottom = layer.querySelector('.countdown__card-layer-bottom');
        const layerBottomNumber = layerBottom.querySelector('.countdown__card-layer-bottom-number')

        //Show layer with old number
        layer.classList.remove('countdown__card-layer--hidden');      
           
        setTimeout(() => {     
            //Set old number to top of layer
            layerTopNumber.textContent = number==maxVal? '0'+1 : (number+1)<10? '0'+(number+1) : number+1;        
            //Add transition to top of layer        
            layerTop.classList.add('countdown__card-layer-top-flip');            
            topNumber.textContent = number<10? '0'+number : number;
        }, 10);
        setTimeout(() => {
            layerBottomNumber.textContent = number<10? '0'+number : number;
            layerBottom.classList.add('countdown__card-layer-bottom-flip'); 
        }, 200);
        setTimeout(() => {
            bottomNumber.textContent = number<10? '0'+number : number; 
            layerBottom.classList.remove('countdown__card-layer-bottom-flip');   
            layerTop.classList.remove('countdown__card-layer-top-flip'); 
            layer.classList.add('countdown__card-layer--hidden');
        }, 400);   
    }

    const interval = setInterval(updateCounter,1000);
})