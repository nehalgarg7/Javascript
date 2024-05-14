// Store with items and prices in USD
const itemPricesInUSD = {
    item1: 20,
    item2: 30,
    item3: 15,
    // Add more items and prices as needed
};

// Exchange rate
const exchangeRateUSDToINR = 80;

// Convert prices to INR using the map function
const itemPricesInINR = Object.fromEntries(
    Object.entries(itemPricesInUSD).map(([item, priceInUSD]) => {
        const priceInINR = priceInUSD * exchangeRateUSDToINR;
        return [item, priceInINR];
    })
);

// Display the converted prices
console.log("Prices in INR:", itemPricesInINR);
