let sum = 0;

function getTotalFromString(str) {
    if (isNaN(str)) {
        if (str.match(/\d+/g) != null) {
            let numbers = str.match(/\d+/g).map(Number);
            for (const number of numbers) {
                sum += number
            }
        }
        return sum;
    } else {
        return str;
    }
}

document.getElementById("resultSum").innerHTML = `32 Pencils, 15 Pens, 2 notebooks outputs: ${getTotalFromString('32 Pencils, 15 Pens, 2 notebooks')}`;
sum = 0;
document.getElementById("resultSum2").innerHTML = `Nothing outputs: ${getTotalFromString('Nothing')}`;
sum = 0;
document.getElementById("resultSum3").innerHTML = `23567 outputs: ${getTotalFromString('23567')}`;
sum = 0;
document.getElementById("resultSum4").innerHTML = `adafgrgrgr56, adfddf2 outputs: ${getTotalFromString('adafgrgrgr56, adfddf2')}`;