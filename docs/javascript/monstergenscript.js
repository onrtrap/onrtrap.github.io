var img = new Image();
      
function generateMonster(){ 
    var monsterNames = ["Slime", "Goblin", "Dragon", "Skeleton"];
    var monsterName = monsterNames[Math.floor(Math.random() * monsterNames.length)];
    var monsterDesc = "This [CreatureName] is from the [Region] Region.  It's strongest point is in its [Stat]."

    if(monsterName == "Skeleton"){
    img.src= 'docs/assets/images/skele.png';
}
    else if(monsterName == "Slime"){
    img.src= 'docs/assets/images/slime.png';
}
else if(monsterName == "Goblin"){
    img.src= 'docs/assets/images/goblin.png';
}
else if(monsterName == "Dragon"){
    img.src= 'docs/assets/images/dragon.png';
}

const icyBlue = {
    r: 102,
    g: 255,
    b: 255
};

const grassyGreen = {
    r: 102,
    g: 255,
    b: 51
};

const hotPink = {
    r: 255,
    g: 102,
    b: 153
};

const hardRed = {
    r: 255,
    g: 51,
    b: 0
};

const cavernPurple = {
    r: 0,
    g: 102,
    b: 153
};

const midnightBlue = {
    r: 0,
    g: 0,
    b: 153
};

const forestGreen = {
    r: 0,
    g: 153,
    b: 38
};

const monsterGreen = {
    r: 0,
    g: 153,
    b: 77
};

const palePink = {
    r: 255,
    g: 153,
    b: 204
};

const brightYellow = {
    r: 255,
    g: 255,
    b: 0
};


var colorArray = [];

colorArray.push(icyBlue);
colorArray.push(grassyGreen);
colorArray.push(hotPink);
colorArray.push(hardRed);
colorArray.push(cavernPurple);
colorArray.push(midnightBlue);
colorArray.push(palePink);
colorArray.push(monsterGreen);
colorArray.push(forestGreen);
colorArray.push(brightYellow);

let colorPrim = colorArray[Math.floor(Math.random() * colorArray.length)]

let colorSec = colorArray[Math.floor(Math.random() * colorArray.length)]


img.onload = function() {
    drawImage(this);

    randomizeColors(colorPrim.r, colorPrim.g, colorPrim.b, colorSec.r, colorSec.g, colorSec.b);
};

    
    var statArray = [];

    var monsterHP = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterHP);
    var monsterSTR = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterSTR);
    var monsterDEF = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterDEF);
    var monsterINT = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterINT);
    var monsterWILL = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterWILL);
    var monsterSPD = Math.floor(Math.random() * 100) + 1;
    statArray.push(monsterSPD);
    
   
    monsterDesc = randomizeDesc(monsterDesc, monsterName, statArray, colorPrim.r, colorPrim.g, colorPrim.b);
    
    var monsterDiv = document.getElementById("monster");
    monsterDiv.innerHTML = "<h2>" + monsterName + "</h2>"
        + "<p>HP: " + monsterHP + "</p>"
        + "<p>STR: " + monsterSTR + "</p>"
        + "<p>DEF: " + monsterDEF + "</p>"
        + "<p>INT: " + monsterINT + "</p>"
        + "<p>WILL: " + monsterWILL + "</p>"
        + "<p>SPD: " + monsterSPD + "</p>"
        + "<p> " + monsterDesc + "</p>";
}

function drawImage(img) {
    var canvas = document.getElementById('monsterCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
}

function randomizeDesc(desc, monsterName, statArray, randomColorRPrim, randomColorGPrim, randomColorBPrim){
    var monsterDesc = "This [CreatureName] is from the [Region] Region.  It's strongest point is in its [Stat]."
    if(monsterName == "Skeleton"){
         desc = desc.replace("[CreatureName]", "Skeleton");
    }
        else if(monsterName == "Slime"){
        desc = desc.replace("[CreatureName]", "Slime");
    }
    else if(monsterName == "Goblin"){
        desc = desc.replace("[CreatureName]", "Goblin");
    }
    else if(monsterName == "Dragon"){
        desc = desc.replace("[CreatureName]", "Dragon");
    }


if((randomColorRPrim >= 153 && randomColorGPrim >= 153) || (randomColorRPrim >= 153 && randomColorBPrim >= 153) || (randomColorGPrim >= 153 && randomColorBPrim >= 153)){
    //Light yellows and oranges
    if(randomColorRPrim >= randomColorGPrim && randomColorGPrim >= randomColorBPrim){
        desc = desc.replace("[Region]", "Desert");
    }
    //Light greens
    else if(randomColorGPrim >= randomColorRPrim && randomColorRPrim >= randomColorBPrim || randomColorBPrim <= randomColorRPrim){
        desc = desc.replace("[Region]", "Grasslands")
    }
    //Light blues and purples
    else if(randomColorBPrim >= randomColorGPrim && randomColorGPrim >= 153 || randomColorRPrim >= 153){
        desc = desc.replace("[Region]", "Ice");
    }
    else{
        desc = desc.replace("[Region]", "Unknown")
    }
}
else{
    //Muted blues and purples
    if(randomColorBPrim >= randomColorGPrim && randomColorGPrim >= randomColorRPrim){
        desc = desc.replace("[Region]", "Cave");
    }
    //Deep blues and purples
    else if(randomColorBPrim >= randomColorRPrim && randomColorRPrim >= randomColorGPrim){
        desc = desc.replace("[Region]", "Ocean");
    }
    //Somewhere around brown to muted purple
    else if(randomColorRPrim >= randomColorBPrim && randomColorBPrim >= randomColorGPrim){
        desc = desc.replace("[Region]", "Dark");
    }
    //Browns and dark reds/oranges
    else if(randomColorRPrim >= randomColorGPrim && randomColorGPrim >= randomColorBPrim){
        desc = desc.replace("[Region]", "Plateau");
    }
    //Browns and dark greens/yellows
    else if(randomColorGPrim >= randomColorRPrim && randomColorRPrim >= randomColorBPrim){
        desc = desc.replace("[Region]", "Mountainous");
    }
    //Greys, pale greens, pale browns
    else if(randomColorGPrim >= randomColorBPrim && randomColorBPrim >= randomColorRPrim){
        desc = desc.replace("[Region]", "Wasteland");
    }
    else{
        desc = desc.replace("[Region]", "Unknown")
    }
}
    var max = 0;
    var place = 0;

    console.log(statArray);

    for(var i = 0; i < statArray.length; i++){
        
        if(max < statArray[i]){
            max = statArray[i];
            place = i;
            console.log(i);
        }
    }

    switch(place){
        case 0:
            desc = desc.replace("[Stat]", "Vitality");
            break;
        case 1:
            desc = desc.replace("[Stat]", "Strength");
            break;
        case 2:
            desc = desc.replace("[Stat]", "Defense");
            break;
        case 3:
            desc = desc.replace("[Stat]", "Intellect");
            break;
        case 4:
            desc = desc.replace("[Stat]", "Willpower");
            break;
        case 5:
            desc = desc.replace("[Stat]", "Speed");
            break;

    }

   return desc;
}

function randomizeColors(randomColorRPrim, randomColorGPrim, randomColorBPrim, randomColorRSec, randomColorGSec, randomColorBSec) {
    var canvas = document.getElementById('monsterCanvas');
    var ctx = canvas.getContext('2d', {willReadFrequently: true});
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
   
    for (var i = 0; i < data.length; i += 4) {
        if(data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255){
        data[i] = randomColorRPrim;     // red
        data[i + 1] = randomColorGPrim; // green
        data[i + 2] = randomColorBPrim; // blue
        }
        else if(data[i] == 255 && data[i + 1] == 31 && data[i + 2] == 0){
        data[i] = randomColorRSec;     // red
        data[i + 1] = randomColorGSec; // green
        data[i + 2] = randomColorBSec; // blue
        }
    }
        ctx.putImageData(imageData, 0, 0);
    }
