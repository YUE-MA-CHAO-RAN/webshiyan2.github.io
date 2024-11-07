class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      alert("正在提取线索，请等待一秒")
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
        console.log("在古老的图书馆里找到了第一个线索...守卫出现！")
        alert("在古老的图书馆里找到了第一个线索...守卫出现！")
        shouweiShow = 1;
        drawshouwei();
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中间...");
        console.log("解码成功!宝藏在一座古老的神庙中间...")
        alert("解码成功!宝藏在一座古老的神庙中间...")
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      alert("正在跟寺庙守卫战斗！")
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          console.log("糟糕!被神庙守卫打败了!")
          reject("糟糕!被神庙守卫打败了!");
          return
        }
        resolve("箱子就在寺庙正中间");
        console.log("打败守卫后，他交代：箱子就在寺庙正中间！")
        alert("打败守卫后，他交代：箱子就在寺庙正中间！")
        shouweiShow = 0;
        xiangziShow = 1;
        drawTreasure();
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      alert("正在解题中")
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.7) {
          resolve("谜题解决了! 箱子可以打开了...");
          console.log("谜题解决了! 箱子可以打开了...")
          alert("谜题解决了! 箱子可以打开了...")
          resolve("恭喜!你找到了传说中的宝藏!");
          console.log("恭喜!你找到了传说中的宝藏!")
          alert("恭喜!你找到了传说中的宝藏!");
        } else {
          reject("谜题太难了，无法解决...");
          alert("谜题太难了，无法解决...再试一次？")
        }

      }, 1000);
    });
  }

  static solvePuzzle(box) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.7) {
          resolve("谜题解决了! 箱子可以打开了...");
          console.log("谜题解决了! 箱子可以打开了...")
          alert("谜题解决了! 箱子可以打开了...")
        } else {
          reject("谜题太难了，无法解决...");

        }
      }, 1500);
    });
  }
}

async function findTreasureWithAsyncAwait() {
  try {
    const initialClue = await TreasureMap.getInitialClue();
    console.log(initialClue);

    const location = await TreasureMap.decodeAncientScript(initialClue);
    console.log(location);

    const box = await TreasureMap.searchTemple(location);
    console.log(box);

    const puzzleSolved = await TreasureMap.solvePuzzle(box);
    console.log(puzzleSolved);

    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
    alert(treasure); 
  } catch (error) {
    console.error("任务失败:", error);
    alert("任务失败: " + error);
  }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const treasureMap = new Image();
treasureMap.src = './map.png'; 
treasureMap.onload = function () {
  drawMap();

};

function drawMap() {
  ctx.drawImage(treasureMap, 0, 0, canvas.width, canvas.height);
}

const markerPosition = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50
};

function drawMarker() {
  ctx.fillStyle = 'red';
  ctx.fillRect(markerPosition.x - markerPosition.size / 2, markerPosition.y - markerPosition.size / 2, markerPosition.size, markerPosition.size);
}


function isMarkerClicked(x, y) {
  return (
    x >= markerPosition.x - markerPosition.size / 2 &&
    x <= markerPosition.x + markerPosition.size / 2 &&
    y >= markerPosition.y - markerPosition.size / 2 &&
    y <= markerPosition.y + markerPosition.size / 2
  );
}
// -------------线索模块---------------

const xiansuoPosition = {
  x: canvas.width / 3,
  y: canvas.height / 3,
  size: 50
};
const xiansuoImage = new Image();
xiansuoImage.src = './xiansuo.png'; 
xiansuoImage.onload = function () {
  drawMap(); // 当宝藏图片加载完成后，重新绘制地图和宝藏
};

function drawxiansuo() {
  ctx.drawImage(xiansuoImage, xiansuoPosition.x - xiansuoPosition.size / 2, xiansuoPosition.y - xiansuoPosition.size / 2, xiansuoPosition.size, xiansuoPosition.size);
}
function xiansuo(x, y) {
  return (
    x >= xiansuoPosition.x - xiansuoPosition.size / 2 &&
    x <= xiansuoPosition.x + xiansuoPosition.size / 2 &&
    y >= xiansuoPosition.y - xiansuoPosition.size / 2 &&
    y <= xiansuoPosition.y + xiansuoPosition.size / 2
  );
}
//----------------------------
// -------------守卫模块---------------
let shouweiShow = 0;
const shouweiPosition = {
  x: canvas.width * 2 / 3,
  y: canvas.height * 2 / 3,
  size: 80
};
const shouweiImage = new Image();
shouweiImage.src = './shouwei.png'; 
shouweiImage.onload = function () {
  drawMap(); 
};
// Draw the treasure on the canvas
function drawshouwei() {
  if (shouweiShow === 1) {
    ctx.drawImage(shouweiImage, shouweiPosition.x - shouweiPosition.size / 2, shouweiPosition.y - shouweiPosition.size / 2, shouweiPosition.size, shouweiPosition.size);
  }
}
function shouwei(x, y) {
  return (
    x >= shouweiPosition.x - shouweiPosition.size / 2 &&
    x <= shouweiPosition.x + shouweiPosition.size / 2 &&
    y >= shouweiPosition.y - shouweiPosition.size / 2 &&
    y <= shouweiPosition.y + shouweiPosition.size / 2
  );
}
//----------------------------
let xiangziShow = 0;
const treasureImage = new Image();
treasureImage.src = './xiangzi.jpg'; 
treasureImage.onload = function () {
  drawMap(); 
};

function drawTreasure() {
  if (xiangziShow===1) {
    ctx.drawImage(treasureImage, markerPosition.x - markerPosition.size / 2, markerPosition.y - markerPosition.size / 2, markerPosition.size, markerPosition.size);
  }
}


const characterPosition = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50 
};

// Character image
const characterImage = new Image();
characterImage.src = './renwu.jpg'; 


function drawCharacter() {
  ctx.drawImage(characterImage, characterPosition.x - characterPosition.size / 2, characterPosition.y - characterPosition.size / 2, characterPosition.size, characterPosition.size);
}


canvas.addEventListener('click', function (event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

 
  characterPosition.x = clickX;
  characterPosition.y = clickY;


  drawMap();
  drawTreasure();
  drawCharacter(); // 重新绘制人物在新的位置
  drawxiansuo();
  drawshouwei();
  if (isMarkerClicked(clickX, clickY)) {
    TreasureMap.openTreasureBox();
  }
  if (xiansuo(clickX, clickY)) {

    TreasureMap.getInitialClue();

  }
  if (shouwei(clickX, clickY)) {

    TreasureMap.searchTemple();

  }
});



// Initial draw
drawMap();
drawTreasure();
drawCharacter();
drawxiansuo();
drawshouwei();
      
      
      





