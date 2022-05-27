const verifyFileName = function (xs) {

    const c = {}, t = (x, n) => x + "(" + n + ")";

    return xs.map(function (x) {
        var n = c[x] || 0;

        c[x] = n + 1;

        if (!n)
            return x;

        while (c[t(x, n)])
            n++;

        c[t(x, n)] = 1;
        return t(x, n);
    });

};;

document.getElementById("resultArray").innerHTML = ` ["txt", "txt", "image", "txt(1)", "txt"] outputs: ${verifyFileName(["txt", "txt", "image", "txt(1)", "txt"])}`;
document.getElementById("resultArray2").innerHTML = ` ["file","file","file(1)","file(3)","file(2)","file(2)"] outputs: ${verifyFileName(["file", "file", "file(1)", "file(3)", "file(2)", "file(2)"])}`;
document.getElementById("resultArray3").innerHTML = ` ["b(1)","b(6)","b","b","b","b","b","b","b","b","b","b"] outputs: ${verifyFileName(["b(1)", "b(6)", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])}`;