document.getElementById("Q1").addEventListener("click", function () {
  let z = document.getElementById("E1");
  let y = document.getElementById("Q1");
  let x = document.getElementById("A1");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Q2").addEventListener("click", function () {
  let z = document.getElementById("E2");
  let y = document.getElementById("Q2");
  let x = document.getElementById("A2");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Q3").addEventListener("click", function () {
  let z = document.getElementById("E3");
  let y = document.getElementById("Q3");
  let x = document.getElementById("A3");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Q4").addEventListener("click", function () {
  let z = document.getElementById("E4");
  let y = document.getElementById("Q4");
  let x = document.getElementById("A4");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Q5").addEventListener("click", function () {
  let z = document.getElementById("E5");
  let y = document.getElementById("Q5");
  let x = document.getElementById("A5");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

document.getElementById("Q6").addEventListener("click", function () {
  let z = document.getElementById("E6");
  let y = document.getElementById("Q6");
  let x = document.getElementById("A6");
  if (x.style.height === "0px") {
    x.style.height = "auto";
    x.style.opacity = "1";
    x.style.padding = "23px";
    x.style.marginBottom = "8px";
    x.style.color = "#ffffff";
    x.style.zIndex = "2";
    y.style.marginBottom = "1px";
    z.style.transform = "rotate(45deg)";
  } else {
    x.style.height = "0px";
    x.style.opacity = "0";
    x.style.padding = "0px";
    x.style.marginBottom = "0px";
    x.style.color = "transparent";
    x.style.zIndex = "-2";
    y.style.marginBottom = "8px";
    z.style.transform = "rotate(0deg)";
  }
});

window.onload = function() {
    function simulateLeftClick(element) {
        var event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }
    var elementsToClick = [
        document.getElementById('Q1'),
        document.getElementById('Q2'),
        document.getElementById('Q3'),
        document.getElementById('Q4'),
        document.getElementById('Q5'),
        document.getElementById('Q6'),
    ];
    elementsToClick.forEach(function(element) {
        simulateLeftClick(element);
    });
};