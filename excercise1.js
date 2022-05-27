let res = [];
let res2 = [];

function fluxMonitor(value) {
    let temp = value;
    if (temp.includes('aba')) {
        res.push('1');
        temp = temp.replace('aba', '-');
    }
    if (temp.includes('aaa')) {
        res.push('0');
        temp = temp.replace('aaa', '-');
        fluxMonitor(temp);
    }
}
function fluxMonitor2(value) {
    let temp = value;
    if (temp.includes('aaa')) {
        res2.push('0');
        temp = temp.replace('aaa', '-');
    }
    if (temp.includes('aba')) {
        res2.push('1');
        temp = temp.replace('aba', '-');
        fluxMonitor2(temp);
    }
}


fluxMonitor('aababaaabaaa');
document.getElementById("result").innerHTML = `aababaaabaaa outputs: ${res.toString()}`;
fluxMonitor2('aaababaaaabbababa');
document.getElementById("result2").innerHTML = `aaababaaaabbababa outputs: ${res2.toString()}`;