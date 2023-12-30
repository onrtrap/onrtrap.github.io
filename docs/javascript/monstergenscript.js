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

var randomColorRPrim = Math.random() * 255;
var randomColorGPrim = Math.random() * 255;
var randomColorBPrim = Math.random() * 255;

if(randomColorRPrim <= 30 && randomColorGPrim <= 30 && randomColorBPrim <= 30)
{
    randomColorRPrim += 140;
    randomColorGPrim += 140;
    randomColorBPrim += 140;
}
else{
if(randomColorRPrim <= 10)
randomColorRPrim += 40;
else if(randomColorRPrim >= 220)
randomColorRPrim -= 30;

if(randomColorGPrim <= 10)
randomColorGPrim += 40;
else if(randomColorGPrim >= 220)
randomColorRPrim -= 30;

if(randomColorBPrim <= 10)
randomColorBPrim += 40;
else if(randomColorGPrim >= 220)
randomColorRPrim -= 30;
}

var randomColorRSec = Math.random() * 255;
var randomColorGSec = Math.random() * 255;
var randomColorBSec = Math.random() * 255;

if(randomColorRSec <= 30 && randomColorGSec <= 30 && randomColorBSec <= 30)
{
    randomColorRSec += 30;
    randomColorGSec += 30;
    randomColorBSec += 30;
}
else{
if(randomColorRSec <= 10)
randomColorRSec += 20;
//else if(randomColorRSec >= 220)
//randomColorRSec -= 40;

if(randomColorGSec <= 10)
randomColorGSec += 20;
//else if(randomColorGSec >= 220)
//randomColorRSec -= 40;

if(randomColorBSec <= 10)
randomColorBSec += 20;
//else if(randomColorGSec >= 220)
//randomColorRSec -= 40;
//}

console.log("R: " + randomColorRPrim + " G: " + randomColorBPrim + " B: " + randomColorGPrim)

img.onload = function() {
    drawImage(this);

    randomizeColors(randomColorRPrim, randomColorGPrim, randomColorBPrim, randomColorRSec, randomColorGSec, randomColorBSec);
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
    
   
    monsterDesc = randomizeDesc(monsterDesc, monsterName, statArray, randomColorRPrim, randomColorGPrim, randomColorBPrim);
    
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


if(randomColorRPrim >= 153 || randomColorGPrim >= 153 || randomColorBPrim >= 153){
    if(randomColorRPrim > randomColorGPrim && randomColorGPrim >= randomColorBPrim){
        desc = desc.replace("[Region]", "Desert");
    }
    else if(randomColorGPrim > randomColorRPrim && randomColorRPrim >= randomColorBPrim || randomColorBPrim <= randomColorRPrim){
        desc = desc.replace("[Region]", "Grasslands")
    }
    else if(randomColorBPrim >= randomColorGPrim && randomColorGPrim >= 153 || randomColorRPrim >= 153){
        desc = desc.replace("[Region]", "Ice");
    }
    else{
        desc = desc.replace("[Region]", "Unknown")
    }
}
else{
    desc = desc.replace("[Region]", "Unknown");
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
}