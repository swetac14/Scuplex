var blocks = new Array(100);
var finalBlocks = new Array(100);
var divblock;
var blocksData;
var gameMainBlock = document.getElementById("gameMainBlock");

init();

function init() {
    createBlockObject();
    displayBlocks();
    addImageTemplate();
}

function createBlockObject() {
    for (var count = 100; count > 0; count--) {
        var bgColor = count % 2 !== 0 ? "aquamarine" : "pink";
        blocksData = new Blocks(count, "blocks-sl", count, bgColor);
        blocks[count] = blocksData;
    }
    blocks = blocks.reverse();
    for (var row = 1; row <= 10; row++) {
        var order = row % 2 !== 0 ? blocks.splice(0, 10) : blocks.splice(0, 10).reverse();
        finalBlocks.push(order);
    }
}


function displayBlocks() {
    for (var x = 100; x < 110; x++) {
        for (var y = 0; y < 10; y++) {
            divblock = document.createElement("div");
            divblock.id = finalBlocks[x][y].id;
            divblock.className = finalBlocks[x][y].className;
            divblock.innerText = finalBlocks[x][y].innerText;
            divblock.style.backgroundColor = finalBlocks[x][y].bgColor;
            gameMainBlock.append(divblock);
        }
    }
}

function addImageTemplate() {
    var img = document.createElement("img");
    img.src = "Images/Snakes Template.png";
    img.className = "image";
    var targetDiv = document.getElementById("100");
    targetDiv.appendChild(img);
}




