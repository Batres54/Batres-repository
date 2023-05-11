const botonPokiamon = document.getElementById('boton-pokiamon')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionElegirPokiamon = document.getElementById("seleccionar-pokiamon") 
const seccionMensajes = document.getElementById("resultado")
const spanPokiamonJugador = document.getElementById("pokiamon-jugador")
const spanPokiamonPC = document.getElementById("pokiamon-PC")
const spanVidasJugador = document.getElementById("vidas-pokiamon-jugador")
const spanVidasPC = document.getElementById("vidas-pokiamon-PC")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas") 
const contenedorAtaques = document.getElementById('contenedor-ataques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let pokiamons = []
let pokiamonsEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionPokiamons
let inputHydrome 
let inputCapifren 
let inputPirocosa
let inputLangostino 
let inputAlgearidus 
let inputCactua  
let pokiamonJugador
let jugadorObjeto
let ataquesPokiamon
let ataquesPokiamonEnemigo
let botonFaiah = document.getElementById('boton-faiah')
let botonWotah = document.getElementById('boton-wotah')
let botonPlent = document.getElementById('boton-plent')
let botones = []
let iAtaqueJugador
let iAtaquePc
let victoriasJugador = 0
let victoriasPC = 0
let mensajePJ = document.getElementById("ataque-pj")
let mensajePC= document.getElementById("ataque-pc")
let ataqueAleatorioPokiamonPC
let pc
let pokiamonPC

let lienzo = mapa.getContext('2d')
let intervalo 
let mapaBackground =  new Image()
mapaBackground.src = './assets/mokemap.png'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaxMapa = 720

if(anchoDelMapa > anchoMaxMapa){
    anchoDelMapa = anchoMaxMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 3 / 4

mapa.width = anchoDelMapa 
mapa.height = alturaQueBuscamos    

class Pokiamon {
    constructor(nombre, foto, vida, tipo1, tipo2, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo1 = tipo1
        this.tipo2 = tipo2
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarPokiamon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )    
    }
}

let Hydrome = new Pokiamon('Hydrome', './assets/320.png', 3,'💧','💧' , './assets/wailmer.png')
let Capifren = new Pokiamon('Capifren', './assets/406.png', 3,'🌱','🌱','./assets/budew.png')
let Pirocosa = new Pokiamon('Pirocosa', './assets/851.png', 3,'🔥','🔥','./assets/centiskorch.png')
let Langostino = new Pokiamon('Langostino','./assets/342.png' , 3,'💧','🔥','./assets/crawdaunt.png')
let Algearidus = new Pokiamon('Algearidus', './assets/270.png', 3,'💧','🌱','./assets/lotad.png')
let Cactua = new Pokiamon('Cactua', './assets/331.png', 3 ,'🔥','🌱','./assets/cacnea.png')

const Hydrome_Ataques=[    {nombre : '💧', id: 'boton-wotah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '🌱', id: 'boton-plent'}
]
const Capifren_Ataques = [    {nombre : '🌱', id: 'boton-plent'},
{nombre : '🌱', id: 'boton-plent'},
{nombre : '🌱', id: 'boton-plent'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '💧', id: 'boton-wotah'}
]
const Pirocosa_Ataques = [    {nombre : '🔥', id: 'boton-faiah'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '🌱', id: 'boton-plent'}
]
const Langostino_Ataques = [    {nombre : '🔥', id: 'boton-faiah'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '🌱', id: 'boton-plent'}
]
const Algearidus_Ataques = [    {nombre : '🌱', id: 'boton-plent'},
{nombre : '🌱', id: 'boton-plent'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '💧', id: 'boton-wotah'},
{nombre : '🔥', id: 'boton-faiah'}
]
const Cactua_Ataques = [    {nombre : '🔥', id: 'boton-faiah'},
{nombre : '🔥', id: 'boton-faiah'},
{nombre : '🌱', id: 'boton-plent'},
{nombre : '🌱', id: 'boton-plent'},
{nombre : '💧', id: 'boton-wotah'}
]

pokiamons.push(Hydrome, Capifren, Pirocosa, Langostino, Algearidus, Cactua)
Hydrome.ataques.push(...Hydrome_Ataques)
Capifren.ataques.push(...Capifren_Ataques)
Pirocosa.ataques.push(...Pirocosa_Ataques)
Langostino.ataques.push(...Langostino_Ataques)
Algearidus.ataques.push(...Algearidus_Ataques)
Cactua.ataques.push(...Cactua_Ataques)

function iniciarJuego(){
    
    pokiamons.forEach((pokiamon) => {
        opcionPokiamons = `
        <input type="radio" name="pokiamon" id=${pokiamon.nombre} /> 
        <label class="tarjeta-de-pokiamon" for=${pokiamon.nombre}>
            <p id="pokiamon-nombre">${pokiamon.nombre}</p>
            <img src=${pokiamon.foto} alt=${pokiamon.nombre}>
            <div id="info-tipos">
            <p>Tipos de tu Pokiamon</p>
            <div id="tipos">
                <p>${pokiamon.tipo1}</p> <p>${pokiamon.tipo2}</p>
            </div>
        </div>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionPokiamons

        inputHydrome = document.getElementById("Hydrome")
        inputCapifren = document.getElementById("Capifren")
        inputPirocosa = document.getElementById("Pirocosa")
        inputLangostino = document.getElementById("Langostino")
        inputAlgearidus = document.getElementById("Algearidus")
        inputCactua = document.getElementById("Cactua") 
    })
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    botonPokiamon.addEventListener('click', seleccionarPokiamonPJ)
    botonReiniciar.addEventListener('click', reiniciar)

    unirseAlJuego()
}

function unirseAlJuego(){
   fetch('http://192.168.1.135:8080/unirse')
        .then(function(res) {
            if (res.ok){
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarPokiamonPJ(){ 
    if (inputHydrome.checked){
        spanPokiamonJugador.innerHTML = inputHydrome.id
        pokiamonJugador = inputHydrome.id
    } else if (inputCapifren.checked){
        spanPokiamonJugador.innerHTML = inputCapifren.id
        pokiamonJugador = inputCapifren.id
    } else if (inputPirocosa.checked){
        spanPokiamonJugador.innerHTML = inputPirocosa.id
        pokiamonJugador = inputPirocosa.id
    } else if (inputLangostino.checked){
        spanPokiamonJugador.innerHTML = inputLangostino.id
        pokiamonJugador = inputLangostino.id
    } else if (inputAlgearidus.checked){
        spanPokiamonJugador.innerHTML = inputAlgearidus.id
        pokiamonJugador = inputAlgearidus.id
    } else if (inputCactua.checked){
        spanPokiamonJugador.innerHTML = inputCactua.id
        pokiamonJugador = inputCactua.id
    } else{
        alert('Elige algun pokiamon')
        return
    }
    sectionVerMapa.style.display = 'flex'
    sectionElegirPokiamon.style.display = 'none'
    seleccionarPokiamon(pokiamonJugador)
    extraerAtaques(pokiamonJugador)
    iniciarMapa()
}

function seleccionarPokiamon(pokiamonJugador){
    fetch(`http://192.168.1.135:8080/pokiamon/${jugadorId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pokiamon: pokiamonJugador
        })
    })
}

function extraerAtaques(pokiamonJugador){
    let ataques
    for (let i = 0; i < pokiamons.length; i++) {
        if (pokiamonJugador === pokiamons[i].nombre) {
            ataques = pokiamons[i].ataques
        }        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach(ataque => {
        ataquesPokiamon = `
        <button class="boton-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokiamon
    })
    botonFaiah = document.getElementById('boton-faiah')
    botonWotah = document.getElementById('boton-wotah')
    botonPlent = document.getElementById('boton-plent')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (event) => {
            if (event.target.textContent === '🔥') {
                ataqueJugador.push('🔥')
                boton.disabled = true
            } else if (event.target.textContent === '💧'){
                ataqueJugador.push('💧')
                boton.disabled = true
            } else {
                ataqueJugador.push('🌱')
                boton.disabled = true
            }
            if (ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    fetch(`http://192.168.1.135:8080/pokiamon/${jugadorId}/ataques`,{ 
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.1.135:8080/pokiamon/${enemigoId}/ataques`)
        .then(function (res){
            if(res.ok){
                res.json()
                    .then(function ({ ataques }) {
                        if(ataques.length === 5){
                            ataqueEnemigo = ataques
                            confrontacion()
                        }
                    })
            }
        })
}

function seleccionarPokiamonPC(enemigo){
    spanPokiamonPC.innerHTML = enemigo.nombre
    ataquesPokiamonEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioPC(){
    ataqueAleatorioPokiamonPC = aleatorio(0, ataquesPokiamonEnemigo.length -1)
        if (ataquesPokiamonEnemigo[ataqueAleatorioPokiamonPC].nombre === '🔥'){
            ataqueEnemigo.push('🔥')
        } else if (ataquesPokiamonEnemigo[ataqueAleatorioPokiamonPC].nombre === '💧'){
            ataqueEnemigo.push('💧')
        } else if (ataquesPokiamonEnemigo[ataqueAleatorioPokiamonPC].nombre === '🌱'){
            ataqueEnemigo.push('🌱')
        }
        ataqueEnemigo.splice(ataqueAleatorioPokiamonPC, 1)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5){
        confrontacion()
    }
}

function iAmbosParticipantes(jugador, enemigo){
    iAtaqueJugador = ataqueJugador[jugador]
    iAtaquePc = ataqueEnemigo[enemigo]
}

function confrontacion(){
    clearInterval(intervalo)
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            iAmbosParticipantes(i, i)
            crearMensaje("Empataron.")
            spanVidasPC.innerHTML = victoriasPC
            spanVidasJugador.innerHTML = victoriasJugador
        }  else if (ataqueJugador[i] === '🔥' && ataqueEnemigo[i] === '🌱'){
            iAmbosParticipantes(i, i)
            crearMensaje("Ganaste.")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
            spanVidasPC.innerHTML = victoriasPC
        } else if (ataqueJugador[i] === '💧' && ataqueEnemigo[i] === '🔥'){
            iAmbosParticipantes(i, i)
            crearMensaje("Ganaste.")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
            spanVidasPC.innerHTML = victoriasPC
        } else if (ataqueJugador[i] === '🌱' && ataqueEnemigo[i] === '💧'){
            iAmbosParticipantes(i, i)
            crearMensaje("Ganaste.")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
            spanVidasPC.innerHTML = victoriasPC
        } else {
            iAmbosParticipantes(i, i)
            crearMensaje("Perdiste.")
            victoriasPC ++
            spanVidasPC.innerHTML = victoriasPC
            spanVidasJugador.innerHTML = victoriasJugador
        }
    }
    revisarVictorias()
}

function revisarVictorias(){
    if(victoriasJugador < victoriasPC){
        crearMensajeResolucion("Perdiste, tu pokiamon no puede seguir luchando.")
    } else if(victoriasJugador > victoriasPC){
        crearMensajeResolucion("Ganaste, tu enemigo no puede seguir luchando.")
    } else if(victoriasJugador === victoriasPC){
        crearMensajeResolucion("Emaptaron, tu y tu enemigo no puede seguir luchando.")
    }
}

function crearMensaje(mensaje){
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaquePc = document.createElement('p')
    seccionMensajes.innerHTML = mensaje
    nuevoAtaqueJugador.innerHTML = iAtaqueJugador 
    nuevoAtaquePc.innerHTML = iAtaquePc
    mensajePJ.appendChild(nuevoAtaqueJugador)
    mensajePC.appendChild(nuevoAtaquePc)
}

function crearMensajeResolucion(mensajeFinal){
    seccionMensajes.innerHTML = mensajeFinal
    sectionReiniciar.style.display = 'flex'
}

function reiniciar(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas(){
    jugadorObjeto.x = jugadorObjeto.x + jugadorObjeto.velocidadX
    jugadorObjeto.y = jugadorObjeto.y + jugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    jugadorObjeto.pintarPokiamon()
    
    enviarPosicion(jugadorObjeto.x, jugadorObjeto.y)
    
    pokiamonsEnemigos.forEach(function(pokiamon){
            pokiamon.pintarPokiamon()
            revisarColision(pokiamon)
    })
}

function enviarPosicion(x, y){
    fetch(`http://192.168.1.135:8080/pokiamon/${jugadorId}/posicion`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if(res.ok){
            res.json()
                .then(function ({enemigos}){
                    console.log(enemigos)
                    pokiamonsEnemigos = enemigos.map(function (enemigo){
                        let pokiamonEnemigo = null
                        const pokiamonNombre = enemigo.pokiamon.nombre || ''
                        if (pokiamonNombre === 'Hydrome'){
                            pokiamonEnemigo = new Pokiamon('Hydrome', './assets/320.png', 3,'💧','💧' , './assets/wailmer.png', enemigo.id)
                        } else if (pokiamonNombre === 'Capifren'){
                            pokiamonEnemigo = new Pokiamon('Capifren', './assets/406.png', 3,'🌱','🌱','./assets/budew.png', enemigo.id)
                        } else if (pokiamonNombre === 'Pirocosa'){
                            pokiamonEnemigo = new Pokiamon('Pirocosa', './assets/851.png', 3,'🔥','🔥','./assets/centiskorch.png', enemigo.id)                            
                        } else if (pokiamonNombre === 'Langostino'){
                            pokiamonEnemigo = new Pokiamon('Langostino','./assets/342.png' , 3,'💧','🔥','./assets/crawdaunt.png', enemigo.id)
                        } else if (pokiamonNombre === 'Algearidus'){
                            pokiamonEnemigo = new Pokiamon('Algearidus', './assets/270.png', 3,'💧','🌱','./assets/lotad.png', enemigo.id)
                        } else if (pokiamonNombre === 'Cactua'){                            
                            pokiamonEnemigo = new Pokiamon('Cactua', './assets/331.png', 3 ,'🔥','🌱','./assets/cacnea.png', enemigo.id)
                        }
                        pokiamonEnemigo.x = enemigo.x
                        pokiamonEnemigo.y = enemigo.y
                        return pokiamonEnemigo
                    })
                })
        }
    })
}

function moverAbajo(){
    jugadorObjeto.velocidadY = 5
}

function moverArriba(){
    jugadorObjeto.velocidadY = -5
}

function moverDerecha(){
    jugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    jugadorObjeto.velocidadX = -5
}

function detenerMovimiento(){
    jugadorObjeto.velocidadX = 0
    jugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        default:
            break
    }
}

function iniciarMapa(){
    jugadorObjeto = obtenerObjetoJugador(pokiamonJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoJugador(){
    for (let i = 0; i < pokiamons.length; i++) {
        if(pokiamonJugador === pokiamons[i].nombre){
            return pokiamons[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemgio = enemigo.x

    const arribaMascota = jugadorObjeto.y
    const abajoMascota = jugadorObjeto.y + jugadorObjeto.alto
    const derechaMascota = jugadorObjeto.x + jugadorObjeto.ancho
    const izquierdaMascota = jugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemgio ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    } 
    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarPokiamonPC(enemigo)
    revisarTipo(enemigo)
}

function revisarTipo(enemigo){
    if (pokiamonJugador.tipo1 === enemigo.tipo1){
        spanVidasPC.innerHTML = victoriasPC
        spanVidasJugador.innerHTML = victoriasJugador
    } else if(pokiamonJugador.tipo1 === '🔥' && enemigo.tipo1 === '🌱'){
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else if (pokiamonJugador.tipo1 === '💧' && enemigo.tipo1 === '🔥'){
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else if (pokiamonJugador.tipo1 === '🌱' && enemigo.tipo1 === '💧'){    
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else{
        victoriasPC ++
        spanVidasPC.innerHTML = victoriasPC
        spanVidasJugador.innerHTML = victoriasJugador
    }

    if (pokiamonJugador.tipo2 === enemigo.tipo2){
        spanVidasPC.innerHTML = victoriasPC
        spanVidasJugador.innerHTML = victoriasJugador
    } else if(pokiamonJugador.tipo2 === '🔥' && enemigo.tipo2 === '🌱'){
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else if (pokiamonJugador.tipo2 === '💧' && enemigo.tipo2 === '🔥'){
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else if (pokiamonJugador.tipo2 === '🌱' && enemigo.tipo2 === '💧'){
        victoriasJugador ++
        spanVidasJugador.innerHTML = victoriasJugador
        spanVidasPC.innerHTML = victoriasPC
    } else{
        victoriasPC ++
        spanVidasPC.innerHTML = victoriasPC
        spanVidasJugador.innerHTML = victoriasJugador
    }
}

window.addEventListener('load', iniciarJuego) 