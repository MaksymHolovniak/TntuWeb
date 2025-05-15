/*Приклад 2*/
function checkSymbol(kc) {
    // Символ “0” має код 48, символ “9” – 57
    if (kc < 48 || kc > 57) {
        return false;
    }
    return true;
}

/*Приклад 3 */

function showCustomMenu(sign, x, y) {
    var cm = document.getElementById("custom-menu");
    if (sign) {
        cm.style.display = 'block';
        cm.style.left = x + 'px';
        cm.style.top = y + 'px';
    } else {
        cm.style.display = 'none';
    }
}

function doAction(actionType) {
    let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    switch (actionType) {
        case "copy":
            navigator.clipboard.writeText(document.body.innerText);
            break;

        case "close":
            window.close();
            break;

        case "fontIncrease":
            document.body.style.fontSize = "20px";
            break;

        case 'fontDecrease':
            document.body.style.fontSize = (currentSize -2) + 'px';
            break;
        case "changeBkg":
            document.body.style.backgroundColor =
                document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
            break;
    }
    showCustomMenu(false, 0, 0);
}