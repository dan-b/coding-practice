/*
 Suppose we could access yesterday's stock prices as an array, where:

 The indices are the time in minutes past trade opening time, which was 9:30am local time.
 The values are the price in dollars of Apple stock at that time.
 So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

 Write an efficient function that takes stockPricesYesterday and returns the best profit I
 could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

 For example:

 var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

 getMaxProfit(stockPricesYesterday);
 // returns 6 (buying for $5 and selling for $11)
 */

function getMaxProfit (prices) {
    var j=prices.length-1;
    for (var i=0; i<prices.length; i++) {
        for (j; j>i; j--) {
            if ((prices[i].val<prices[j].val) && (prices[i].index<prices[j].index)) {
                return {
                    buy: prices[i],
                    sell: prices[j]
                }
            }
        }
    }
}

function sortPrices (prices) {
    prices.sort(function (a, b) {
        if (a.val < b.val)
            return -1;
        if (a.val > b.val)
            return 1;
        return 0;
    })
    return prices;
}

function formatArray (arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push({
            val: arr[i],
            index: i
        });
    }
    return newArr;
}

var pricesRaw = [10, 7, 5, 8, 11, 9];
var formattedPrices = formatArray(pricesRaw);
var sortedPrices = sortPrices(formattedPrices);
var maxProfit = getMaxProfit(sortedPrices);
console.log("end");