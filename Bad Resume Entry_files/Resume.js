let needhelpBut = document.getElementById("needhelp")
let BrgImg = document.getElementById("ad1")

needhelpBut.addEventListener('click', event => {
    //let fn = document.getElementById("first-name");
    //fn.value = "";
    ar = document.querySelectorAll(".troll");

    ar.forEach((input) => {
        input.value = "";
    });

    BrgImg.style.visibility = "visible"
});


let subBut = document.getElementById("fake-submit")
let realSubBut = document.getElementById("submit")

subBut.addEventListener('click', event => {
    //let fn = document.getElementById("first-name");
    //fn.value = "";
    ar = document.querySelectorAll(".troll");

    ar.forEach((input) => {
        input.value = "";
    });

    subBut.style.visibility = "hidden"
    realSubBut.style.visibility = "visible"
});


let enterEmpty = true;
let pp0 = ['0', '1', 'a', 'b', 'c'];
let pp1 = ['2', 'd', 'e', 'f'];
let pp2 = ['3', 'g', 'h', 'i'];
let pp3 = ['4', 'j', 'k', 'l'];
let pp4 = ['5', 'm', 'n', 'o'];
let pp5 = ['6', 'p', 'q', 'r'];
let pp6 = ['7', 's', 't', 'u', 'v'];
let pp7 = ['8', '9', 'w', 'x', 'y', 'z'];
let ppArr = [pp0, pp1, pp2, pp3, pp4, pp5, pp6, pp7];
let prevPP = -1;
let prevPPVal = -1;

function incrementButton(arrNum) {
    let swap = false;
    if (prevPP === -1) {
        prevPP = arrNum;
        swap = true;
        prevPPVal = 0;
    }
    else if (prevPP !== arrNum) {
        document.getElementById("description").value += ppArr[prevPP][prevPPVal];
        prevPPVal = 0;
        swap = true;
    }
    prevPP = arrNum;
    if (ppArr[arrNum][ppArr[arrNum].length - 1] == ppArr[arrNum][prevPPVal]) {
        prevPPVal = 0;
    }
    else if(swap === false) {
        prevPPVal += 1;
    }
}

document.getElementById("b1").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(0);
    document.getElementById("b1").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b2").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(1);
    document.getElementById("b2").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b3").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(2);
    document.getElementById("b3").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b4").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(3);
    document.getElementById("b4").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b5").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(4);
    document.getElementById("b5").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b6").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(5);
    document.getElementById("b6").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b7").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(6);
    document.getElementById("b7").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b8").addEventListener("click", event => {
    enterEmpty = false;
    incrementButton(7);
    document.getElementById("b8").innerHTML = ppArr[prevPP][prevPPVal];
});
document.getElementById("b9").addEventListener("click", event => {
    if (enterEmpty) {
        document.getElementById("description").value += ' ';
    }
    else {
        document.getElementById("description").value += ppArr[prevPP][prevPPVal];
    }
    prevPP = -1;
    prevPPVal = -1;
    enterEmpty = true;
});

function preventFocus(event) {
    event.preventDefault();
    if (event.relatedTarget) {
      // Revert focus back to previous blurring element
      event.relatedTarget.focus();
    } else {
      // No previous focus target, blur instead
      event.currentTarget.blur();
    }
  }

document.getElementById("description").addEventListener('focus', preventFocus);
document.getElementById("description").setAttribute('tabindex', '-1');
