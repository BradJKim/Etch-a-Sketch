const container = document.getElementById("container");

container.style.cssText = 'width: 360px; height: 360px; margin: auto; display: grid; grid-template-columns: repeat(8, auto); grid-template-rows: repeat(8, auto)'

fillGrid(8);



function fillGrid(number){
    container.style.cssText = `width: 360px; height: 360px; margin: auto; display: grid; grid-template-columns: repeat(${number}, auto); grid-template-rows: repeat(${number}, auto)`

    for(let i=0; i<number*number; i++){
        const div1 = document.createElement('div');
        div1.style.cssText = "height: auto; border: 1px solid black;";
        div1.addEventListener('mouseover', () => {        
            div1.style.cssText += "background: black";
        });
        container.appendChild(div1);
    }  
}

function resetGrid(){
    let containers = container.querySelectorAll('div')
    containers.forEach(div =>{
        div.style.cssText = "height: auto; border: 1px solid black; background: none;";
    })
}