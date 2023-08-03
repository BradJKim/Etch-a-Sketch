const container = document.getElementById("container");
const gridLengthText = document.querySelector('#gridLengthText');
const gridBtn = document.querySelector('#gridBtn');

container.style.cssText = 'width: 360px; height: 360px; margin: auto; display: grid; border: 1px solid blue;'

fillGrid(16);
gridLengthText.textContent = `16 x 16`

gridBtn.addEventListener('change', () => {
    let roundedValue = Math.floor(gridBtn.value);
    resetGrid();
    fillGrid(roundedValue);
    gridLengthText.textContent = `${roundedValue} x ${roundedValue}`
});

function changeColor(){
    
}

function fillGrid(number){
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`; container.style.gridTemplateRows = `repeat(${number}, 1fr)`

    for(let i=0; i<number*number; i++){
        const div1 = document.createElement('div');
        div1.style.cssText = "user-select: none;";
        div1.addEventListener('mouseover', () => {        
            div1.style.cssText += "background: black";
        });
        container.appendChild(div1);
    }  
}

function resetGrid(){
    let containers = container.querySelectorAll('div')
    containers.forEach(div =>{
        div.style.cssText = "user-select: none; ";
    })
}