function clickBtn() {
    let disc = document.getElementById("disc");
    disc.style.display = "none";
    let hideId1 = document.getElementById("hideX1");
    hideId1.style.display = "none";
    let hideId2 = document.getElementById("hideX2");
    hideId2.style.display = "none";
    dataIn();
}


function dataIn() {

    let aInput = document.querySelector("input[name='a']");
    let aNum = parseInt(aInput.value);

    let bInput = document.querySelector("input[name='b']");
    let bNum = parseInt(bInput.value);

    let cInput = document.querySelector("input[name='c']");
    let cNum = parseInt(cInput.value);

    checkInput(aNum, bNum, cNum);
}

function checkInput(aNum, bNum, cNum) {

    if (aNum == 0) {
        alert("Ha a=0, akkor ez nem másodfokú egyenlet!");
    } else {
        calcDisc(aNum, bNum, cNum);
    }
}

function calcDisc(aNum, bNum, cNum) {
    let showDisc = document.querySelector("span.show-disc");
    let discRim = (bNum * bNum - 4 * aNum * cNum);

    if (discRim < 0) {
        let disc = document.getElementById("disc");
        disc.style.display = "block";
        let hideId1 = document.getElementById("hideX1");
        hideId1.style.display = "none";
        let hideId2 = document.getElementById("hideX2");
        hideId2.style.display = "none";
        discRim = discRim + ": Diszkrimináns negatív, a valós számok halmazában nincs megoldás!";
        showDisc.innerHTML = discRim;
    } else {
        discRim = discRim;
        let disc = document.getElementById("disc");
        disc.style.display = "block";
        showDisc.innerHTML = discRim;
        total(aNum, bNum, discRim);
    }
}

function total(aNum, bNum, discRim) {
    let showXOne = document.querySelector("span.show-x1")
    let xOne = ((-1 * bNum + Math.sqrt(discRim)) / (2 * aNum));
    let hideId1 = document.getElementById("hideX1");
    hideId1.style.display = "block";
    showXOne.innerHTML = xOne;

    let showXTwo = document.querySelector("span.show-x2")
    let xTwo = ((-1 * bNum - Math.sqrt(discRim)) / (2 * aNum));
    let hideId2 = document.getElementById("hideX2");
    hideId2.style.display = "block";
    showXTwo.innerHTML = xTwo;
}