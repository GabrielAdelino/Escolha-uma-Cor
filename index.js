
const colors = ['Red', 'blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// Nio click
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] //Colocando cor background
    color.textContent = colors[randomColor]
})

//Gerando on números randomicos
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}

