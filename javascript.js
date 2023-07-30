const container = document.getElementById("container");

fillGrid(16);



function fillGrid(number){
    let divsRow = null;
    let divsCol = null;

    container.style.cssText = "display: flex; justify-content: center;";

    for(let i=0; i<number;i++){
        divsRow = document.createElement('div');
        divsRow.setAttribute("id", "divsRow");
        divsRow.style.cssText = "width: 16px; height: 16px;";
        
        for(let i=0; i<number;i++){
            divsCol = document.createElement('div');
            divsCol.style.cssText = "width: 16px; height: 16px; border: 1px solid black;";
            divsRow.appendChild(divsCol);
        }

        container.appendChild(divsRow);
    }
}
