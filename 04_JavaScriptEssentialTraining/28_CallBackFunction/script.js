// USing a callback function

// Helpper function to too format currancy number. Used by tip calculator.
const formatter = (locale='in-IN', currency='INR', value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
};

// callback recieve finalTip object, create and output it:
const printHTML = (finalTip) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
        <tr>
            <td>Sum before tip:</td>
            <td>${finalTip.sum}</td>
        </tr>
        <tr>
            <td>Tip percentage:</td>
            <td>${finalTip.percentage}</td>
        </tr>
        <tr>
            <td>Tip:</td>
            <td>${finalTip.tip}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>${finalTip.total}</td>
        </tr>
    `;
    document.querySelector("main").append(tipTable);
};

// Create finalTip object with all the data. send it to tipCalculator
const tipCalculator = (sum, percentage, locale, currency, callback) => {
    let tip = sum*(percentage/100);
    let total = sum + tip;

    const finalTip = {
        sum: formatter(locale, currency, sum),
        percentage: percentage + '%',
        tip: formatter(locale, currency, tip),
        total: formatter(locale, currency, total), 
    };
    callback(finalTip)
};

tipCalculator(29.95, 18, 'in-IN', 'INR', printHTML);