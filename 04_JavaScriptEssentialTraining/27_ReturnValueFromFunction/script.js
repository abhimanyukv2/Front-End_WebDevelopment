
const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
}

const tipCalculator = (sum, percentage, locale, currency) => {
    // let sum = 29.95;
    // let percentage = 18;
    let tip = sum*(percentage/100);
    let total = sum + tip;
    console.log(`
        Sum before tip: ${formatter(locale, currency, sum)}
        Tip percentage: ${percentage}%
        Tip:            ${formatter(locale, currency, tip.toFixed(2))}
        Total:          ${formatter(locale, currency, total.toFixed(2))}
    `);
};

tipCalculator(29.95, 18, "in-In", "INR")