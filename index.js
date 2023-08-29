const container = document.querySelector('.container')

function chooseSize() {
    let size = prompt("Please choose grid size")

    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        let row = container.appendChild(document.createElement('div'))
            row.style.cssText = 'display: flex; justify-content: space-between; align-items: stretch;  flex-grow: 1;'
        for (let i = 0; i < size; i++) {
            
            let div = document.createElement('div')
            div.classList.add('pixel')
            div.style.cssText = 'width: 6.25%; flex: 1;'
            
    
            row.appendChild(div)
        }
    }

    pixels = document.querySelectorAll('.pixel')

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
        pixel.classList.add('active');
    });
})

}

// let cols = 16
// let rows = 16;






