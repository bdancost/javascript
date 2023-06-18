function carregar() {
const msg = document.getElementById('msg')
const img = document.getElementById('imagem')
const data = new Date()
const hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    else if (hora >= 12 && hora < 18) {
        else 
    }
}
}