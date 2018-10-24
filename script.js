const orange = "#fbc02d";

document.getElementById("t0").style.color = orange;
document.getElementById("t0").style.textDecoration = "underline";

let slider = document.getElementById("slider");
slider.oninput = function () {
    const chars = ["ABCD", "EFGH", "IJKL", "MNOP", "QRST", "UVWX", "YZ≪⎵"];
    let i = this.value;
    if (document.getElementById("b0").style.color === "white") {
        document.getElementById("b1").innerHTML = chars[i][0].toLowerCase();
        document.getElementById("b2").innerHTML = chars[i][1].toLowerCase();
        document.getElementById("b3").innerHTML = chars[i][2].toLowerCase();
        document.getElementById("b4").innerHTML = chars[i][3].toLowerCase();
    } else {
        document.getElementById("b1").innerHTML = chars[i][0];
        document.getElementById("b2").innerHTML = chars[i][1];
        document.getElementById("b3").innerHTML = chars[i][2];
        document.getElementById("b4").innerHTML = chars[i][3];
        if (document.getElementById("b3").innerHTML == "≪") {
            document.getElementById("b3").innerHTML = "↵";
        }
    }
    for(let j = 0; j <= 6; j++){
        if (j == i) {
            document.getElementById("t"+j.toString()).style.color = orange;
            document.getElementById("t"+j.toString()).style.textDecoration = "underline";
        } else {
            document.getElementById("t"+j.toString()).style.color = "white";
            document.getElementById("t"+j.toString()).style.textDecoration = "none";
        }
    }
}

function change_char(id) {
    let cap = document.getElementById(id);
    if (cap.style.color === "white") {
        document.getElementById("b1").innerHTML = document.getElementById("b1").innerHTML.toUpperCase();
        document.getElementById("b2").innerHTML = document.getElementById("b2").innerHTML.toUpperCase();
        document.getElementById("b3").innerHTML = document.getElementById("b3").innerHTML.toUpperCase();
        document.getElementById("b4").innerHTML = document.getElementById("b4").innerHTML.toUpperCase();
        if (document.getElementById("b3").innerHTML == "≪") {
            document.getElementById("b3").innerHTML = "↵";
        }
        cap.style.color = orange;
    } else {
        document.getElementById("b1").innerHTML = document.getElementById("b1").innerHTML.toLowerCase();
        document.getElementById("b2").innerHTML = document.getElementById("b2").innerHTML.toLowerCase();
        document.getElementById("b3").innerHTML = document.getElementById("b3").innerHTML.toLowerCase();
        document.getElementById("b4").innerHTML = document.getElementById("b4").innerHTML.toLowerCase();
        if (document.getElementById("b3").innerHTML == "↵") {
            document.getElementById("b3").innerHTML = "≪";
        }
        cap.style.color = "white";
    }
}

function insert_char(id) {
    let char = document.getElementById(id).innerHTML;
    if (char === "≪") {
        let str = document.getElementById("textarea").value.slice(0, -1);
        document.getElementById("textarea").value = str;
    } else if (char === "↵") {
        document.getElementById("textarea").value += "\n";
    } else if (char === "⎵") {
        document.getElementById("textarea").value += "_";
    } else {
        document.getElementById("textarea").value += char;
    }
}