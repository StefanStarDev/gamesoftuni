let field = [];

function setup() {
    createCanvas(600, 600);
    background(255, 201, 147);
    createGame()
    fillSquares();
}

function draw() {
    checkIfWon();
for(let square of field){
    square.show()
}
}
function createGame() {
    let id = 1;
    let xOff = 100;
    let yOff = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let col = null;
            if (i >= 1 && i <= 2 && j >= 1 && j <= 2) {
                col = createVector(214, 113, 96)
            } else {
                col = createVector(115, 138, 239)
            }
            let square = new Square(xOff, yOff, col, id);
            id++
            field.push(square);
            xOff += 100

        }
        yOff += 100;
        xOff = 100
    }

}
function fillSquares (){
    for(let square of field){
        if(square.id === 1){
            square.mainValue = 1;
            square.mainValue = 2;
        }else if(square.id === 2){
            square.mainValue = 1;
            square.secondaryValue = 4
        }else if(square.id === 3){
            square.mainValue = 2;
            square.secondaryValue = 3
        }else if(square.id === 4){
            square.mainValue = 3;
            square.secondaryValue = 4
        }else if(square.id === 5){
            square.mainValue = 2;
            square.secondaryValue = 3
        }else if(square.id === 6){
            square.mainValue = 4;
           
        }else if(square.id === 7){
            square.mainValue = 2;
            
        }else if(square.id === 8){
            square.mainValue = 1;
            square.secondaryValue = 4
        }else if(square.id === 9){
            square.mainValue = 2;
            square.secondaryValue = 1
        }else if(square.id === 10){
            square.mainValue = 2;
            
        }else if(square.id === 11){
            square.mainValue = 4;
            
        }else if(square.id === 12){
            square.mainValue = 1;
            square.secondaryValue = 3
        }else if(square.id === 13){
            square.mainValue = 4;
            square.secondaryValue = 3
        }else if(square.id === 14){
            square.mainValue = 4;
            square.secondaryValue = 3
        }else if(square.id === 15){
            square.mainValue = 2;
            square.secondaryValue = 1
        }else if(square.id === 16){
            square.mainValue = 1;
            square.secondaryValue = 2
        }
    }
}

function mouseClicked(){
    for(let square of field){
        if(mouseX >= square.pos.x && mouseX <= square.pos.x + square.w && mouseY >= square.pos.y && mouseY <= square.pos.y + square.w){
            if(square.mainValue && square.secondaryValue){
                let temp = square.mainValue;
                square.mainValue = square.secondaryValue
                square.secondaryValue = temp;
            }
        }
    }
}

function checkIfWon(){
    
    let rightQesses = 0
    for(let square of field){
        if(square.id === 1){
            if(square.mainValue == 2){
                rightQesses++
            }
        }else if(square.id === 2){
            if(square.mainValue == 1){
                rightQesses++
            }
        }else if(square.id === 3){
            if(square.mainValue == 3){
                rightQesses++
            }
        }else if(square.id === 4){
            if(square.mainValue == 4){
                rightQesses++
            }
        }else if(square.id === 5){
            if(square.mainValue == 3){
                rightQesses++
            }
        }else if(square.id === 8){
            if(square.mainValue == 1){
                rightQesses++
            }
        }else if(square.id === 9){
            if(square.mainValue == 1){
                rightQesses++
            }
        }else if(square.id === 12){
            if(square.mainValue == 3){
                rightQesses++
            }
        }else if(square.id === 13){
            if(square.mainValue == 4){
                rightQesses++
            }
        }else if(square.id === 14){
            if(square.mainValue == 3){
                rightQesses++
            }
        }else if(square.id === 15){
            if(square.mainValue == 1){
                rightQesses++
            }
        }else if(square.id === 16){
            if(square.mainValue == 2){
                rightQesses++
            }
        }
        if(rightQesses === 12){
            fillSquares(255);
            textSize(50);
            text(`You won!`,200,50);
            noLoop();
        }
    }
}