

function Effects(el){
    this.element = el
}


function Mapa(config){
    this.coords = config
}
Effects.prototype.stickyMenu= function(){
    this.element.addEventListener('scroll', ()=>{
        let offY = window.pageYOffset
        if(offY>= 560){
            menu.classList.add('fixed')
        }else{
            menu.classList.remove('fixed')
        }
    })
}

Effects.prototype.slides = async function(){
    
    let count = 1

    setInterval(() => {
        count++

        if(count > 8){
            count=1
        }

        let listClass = this.element.classList
        if(listClass.length>1){
            this.element.classList.remove(listClass[1])
            this.element.classList.add('slide'+count)
        }else{
            this.element.classList.add('slide'+count)

        }
       
      
        console.log(count);
    }, 2000);

}

var a = new Array().length
Effects.prototype.clip = async function(){
    setTimeout(()=>   this.element.classList.add('clip-active'), 3000)
 
}

Mapa.prototype.insertMap = async function(){
    let map = await new google.maps.Map(document.getElementById('map'), {
        center: this.coords,
        //mapTypeId: 'satellite',
        zoom: 8
    });
    let marker = await new google.maps.Marker({
        position: this.coords,
        map: map,
        title: 'Hello World!'
      });
}

let menu = document.querySelector('#menu')
let home = document.querySelector('.home')
let efect = new Effects(window)
let homepage = new Effects(home)
efect.stickyMenu()
homepage.slides()

let map = new Mapa({lat: -33.4889868, lng: -70.6002032})
map.insertMap()
//clip.clip()

