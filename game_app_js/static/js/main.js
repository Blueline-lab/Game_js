//Gamenu lvl1 14.10.2021 c.b



//canvas setup
var canevas = document.querySelector('canvas')
canevas.style.position = "absolute"
canevas.style.border = "solid 10px black"
canevas.style.top = "120px"
canevas.style.right = "120px"
canevas.style.width = "448px"
canevas.style.height = "448px"
var ctx = canevas.getContext('2d');




//Map loader
var tileAtlas = new Image()
tileAtlas.src = "/static/styles/images/garden.png"

function drawtil(){
  for (var c = 0; c < map.cols; c++) {
    for (var r = 0; r < map.rows; r++) {
      var tile = map.getTile(c, r);
      let tilex = tile[0]
      let tiley = tile[1]
      if (tilex !== 0) { // 0 => empty tile
        ctx.drawImage(
          tileAtlas, // image
          (tilex - 1) * map.tsize, // source x
          (tiley - 1) * map.tsize, // source y
          map.tsize, // source width
          map.tsize, // source height
          c * map.tsize, // target x
          r * map.tsize, // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }
}

var map = {
    cols: 14,
    rows: 14,
    tsize: 32,
    tiles: [
      [14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],[14, 13],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      [14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],[14, 14],
      
    
    ],
    getTile: function(col, row) {
      return this.tiles[row * map.cols + col]
    }
  };
var robot = new Image()
robot.src = "/static/styles/images/robotball1.png"


var garden = new Image()
garden.src = "/static/styles/images/garden.png"

var object1 = new Image()
object1.src = "/static/styles/images/Objects.png"




//Personnage loader and effects
var image_url = "/static/styles/images/Character.png"
var char = new Image()
char.src = image_url
var img = 1
var width = 448
var height = 448
var dynamic = true
var interval = Function()


var man = {"char": char, "sx" :0, "sy":0, "sw" :32, "sh": 32, "dx" : 100, "dy": 100, "dw": 32, "dh": 32}
var man1 = {"char": char, "sx" :32, "sy":0, "sw" :32, "sh": 32, "dx" : 100, "dy": 100, "dw": 32, "dh": 32}
var man2 = {"char": char, "sx" :64, "sy":0, "sw" :32, "sh": 32, "dx" : 100, "dy": 100, "dw": 32, "dh": 32}
var man3 = {"char": char, "sx" :96, "sy":0, "sw" :32, "sh": 32, "dx" : 100, "dy": 100, "dw": 32, "dh": 32}

var x_position = man["dx"]
var y_position = man["dy"]
function s(image, sx, sw, sh, dx, dy, dw, dh){
  switch (img) {
    case 1:
      ctx.drawImage(image, sx, man["sy"], sw, sh, dx, dy, dw, dh)
      img = 2
      man["sy"] = 32
      break

    case 2:
      ctx.drawImage(image, sx, man["sy"], sw, sh, dx, dy, dw, dh)
      img = 3
      man["sy"] = 64
      break

    case 3:
      ctx.drawImage(image, sx, man["sy"], sw, sh, dx, dy, dw, dh)
      img = 1
      man["sy"] = 96
      break
    
    case 4:
      ctx.drawImage(image, sx, man["sy"], sw, sh, dx, dy, dw, dh)
      img = 1
      man["sy"] = 128
      break
  }
}





//Moving personnage after keys events
function first(){
  ctx.drawImage(man["char"], 0, 0, 32, 32, x_position, y_position, 32, 32)
  ctx.drawImage(robot, 0, 0, 400, 500, 30, 20, 48, 48)
  ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
  ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
  ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
  
}

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if (nomTouche == "ArrowDown") {
    console.log(y_position)
    if(y_position < 120){
      y_position += 5;}
      ctx.clearRect(x_position, y_position, 32, 32)
      drawtil()
      ctx.drawImage(robot, 0, 0, 400, 500, 30, 20, 48, 48)
      ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
      ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
      ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
      s(man["char"], man["sx"], man["sw"], man["sh"], x_position, y_position, man["dw"], man["dh"])
      }
  })


document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if (nomTouche == "ArrowUp") {
    console.log(y_position)
    if(y_position > 10){
      y_position -= 5}
      ctx.clearRect(x_position, y_position, 32, 32)
      drawtil()
      ctx.drawImage(robot, 0, 0, 400, 500, 30, 20, 48, 48)
      ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
      ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
      ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
      s(man1["char"], man1["sx"], man1["sw"], man1["sh"], x_position, y_position, man1["dw"], man1["dh"])
  }
})

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if (nomTouche == "ArrowRight") {
    console.log(x_position)
    if(x_position < 275){
      x_position += 5}
      ctx.clearRect(x_position, y_position, 32, 32)
      drawtil()
      ctx.drawImage(robot, 0, 0, 400, 500, 30, 20, 48, 48)
      ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
      ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
      ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
      s(man2["char"], man2["sx"], man2["sw"], man2["sh"], x_position, y_position, man2["dw"], man2["dh"])
  }
})

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if (nomTouche == "ArrowLeft") {
    console.log(x_position)
    if(x_position > 0){
      x_position -= 5}
        ctx.clearRect(x_position, y_position, 32, 32)
        drawtil()
        ctx.drawImage(robot, 0, 0, 400, 500, 30, 20, 48, 48)
        ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
        ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
        ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
        s(man3["char"], man3["sx"], man3["sw"], man3["sh"], x_position, y_position, man3["dw"], man3["dh"])
        }
  
})

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if(nomTouche == "e"){
    if (y_position == 10 && x_position == 140 || x_position == 145 || x_position == 150 || x_position == 155){
      ctx.clearRect(x_position, y_position, 32, 32)
      drawtil()
      ctx.drawImage(robot, 0, 0, 400, 500, 40, 20, 48, 48)
      ctx.drawImage(garden, 995, 450, 48, 45, 250, 20, 25, 25)
      ctx.drawImage(garden, 995, 418, 48, 45, 250, 4, 25, 25)
      ctx.drawImage(object1, 32, 200, 32, 45, 150, 12, 32, 25)
      s(man1["char"], man1["sx"], man1["sw"], man1["sh"], x_position, y_position, man1["dw"], man1["dh"])
      window.open("http://127.0.0.1:5000/bot")

      
      
    
  }}
  })
  
  

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;
  if (nomTouche == "Enter") {
    drawtil()
    first();
  }
})

