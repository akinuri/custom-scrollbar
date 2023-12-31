function addRangeTicks(range) {
    let min = parseFloat(range.min);
    let max = parseFloat(range.max);
    let step = parseFloat(range.step);
    if (range.dataset.listStep) {
        step = parseFloat(range.dataset.listStep);
    }
    let precision = getPrecision(step);
    let tickValues = [];
    for (let tickValue = min; tickValue <= max + step/2; tickValue += step) {
        tickValues.push(toPrecision(tickValue, precision));
    }
    if (tickValues.length == 0) {
        return;
    }
    let datalist = document.createElement("datalist");
    datalist.id = "range-ticks-" + genRandomString();
    for (let tickValue of tickValues) {
        let option = document.createElement("option");
        option.value = tickValue;
        datalist.append(option);
    }
    range.after(datalist);
    range.setAttribute("list", datalist.id);
}

function getPrecision(number) {
    return number.toString().split(".")[1]?.length || 0;
}

function toPrecision(number, precision) {
    return parseFloat(number.toFixed(precision));
}

function genRandomString(length = 10) {
    let randomStr = parseInt(Math.random().toString().slice(2)).toString(36);
    while (randomStr.length < length) {
        randomStr += genRandomString();
    }
    randomStr = randomStr.slice(-length);
    return randomStr;
}