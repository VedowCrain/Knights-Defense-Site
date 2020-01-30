var imgNums = [...Array(29).keys()].slice(1);

console.log("gen");

function imgGen() {
  var flipbook = document.getElementById("flipbook");
  imgNums.forEach(num => {
    var element = document.createElement("div");
    element.style.background = `url(./assets/knight_Defense/kd_Doc_${num}.jpg)`;
    element.style.backgroundSize = "cover";
    element.className = "page";
    flipbook.appendChild(element);
  });
}

imgGen();
