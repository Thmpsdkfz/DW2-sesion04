class Slider{
    constructor(
        id,
        lista_elementos,
        navegador,
        estilo_navegador,
        paginador,
        estilo_paginador,
        tiempo_animacion,
        estilo_animacion,
        auto,
    ){
        this.id = id;
        this.lista_elementos = lista_elementos;
        this.navegador = navegador;
        this.estilo_navegador = estilo_navegador
        this.paginador = paginador;
        this.estilo_paginador = estilo_paginador;
        this.tiempo_animacion = tiempo_animacion;
        this.estilo_animacion = estilo_animacion;
        this.auto = auto;

        this.imageIdx = 0;

        this.setUpActions();
    }

    setUpActions(){
        console.log('Setup is on the way');
        this.setSliderDimentions();
        this.setSliderNav();
        this.setSliderImages();
        this.setSliderEvents();
    }

    setSliderDimentions(){
        let sliderCanvas = document.querySelector(`#${this.id}`);
        //TAREA2: guardar ancho y alto
        console.log(sliderCanvas);
    }

    setSliderNav(){
        //document.createElement
        //appendChild

        if(this.lista_elementos.length > 1){
            //colocar flechas de navegación
            document.querySelector(`#${this.id} .slider-nav`).style.display = 'block';
        }
        //TAREA1: dinamizar el tamaño del contenedor

    }

    setSliderImages(){
        console.log('qty: ', this.lista_elementos);

        this.lista_elementos.forEach( (Image) => { //bucle para leer imagen x imagen
            let currentImage = document.createElement("IMG");
            currentImage.setAttribute("src", Image);
            currentImage.setAttribute("width", "780");
            currentImage.setAttribute("height", "500");
            document.querySelector(`#${this.id} .slider-inner`).appendChild(currentImage);
        });
    }

    setSliderEvents(){
        //definir click en boton izquierdo
        //TAREA3: ESTABLECER CLICK  AL BOTON IZQUIERDO
        document.querySelector(`#${this.id} .slider-nav-prev`).addEventListener('click', () => {
            document.querySelector(`#${this.id} .slider-inner`).setAttribute('style', `left: -${(this.imageIdx -= 1) * 780}px`);
        });
        
        //definir click en boton derecho
        document.querySelector(`#${this.id} .slider-nav-next`).addEventListener('click', () => {
            console.log('HIT NEXT!!!!');
            //mover el contenedor - indice / width
            document.querySelector(`#${this.id} .slider-inner`).setAttribute('style', `left: -${(this.imageIdx += 1) * 780}px`);
            //TAREA4: validar el final de las imagenes

        });

    }

    //TAREA5: HACERLO AUTOMATICO SI FUERA EXPLICITO.
    //TAREA6: ESTABLECER EL PAGINADOR INFERIOR.
    //TAREA7: ESTABLECER EL CLICK A CADA BOTONCITO DEL PAGINADOR.

    getImprimirInfo(){
        console.log(this.lista_elementos, 
                    this.navegador, 
                    this.estilo_navegador,
                    this.paginador, 
                    this.estilo_paginador, 
                    this.tiempo_animacion,
                    this.estilo_animacion, 
                    this.auto)
    }
}

let sliderPrincipal = new Slider('slider-principal', ['img/ww2_01.jpg', 'img/ww2_02.jpg', 'img/ww2_03.jpeg'], true, 'square', true, 'square', 0.5, 'linear', false);
// let sliderSecundario = new Slider([], false, '', false, '', 0.5, 'linear', true);
// sliderPrincipal.getImprimirInfo();