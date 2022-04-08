/* ---------------------------------------------------------------------------------------------------------------------

You run a hovercraft factory. Your factory makes ten hovercrafts in a month. 
Given the number of customers you got that month, did you make a profit? It costs you 2,000,000 to build a hovercraft, 
and you are selling them for 3,000,000. You also pay 1,000,000 each month for insurance.

Task: 
Determine whether or not you made a profit based on how many of the ten hovercrafts you were able to sell that month.
 
Input Format: 
An integer that represents the sales that you made that month.

Output Format: 
A string that says 'Profit', 'Loss', or 'Broke Even'.

Sample Input: 
5

Sample Output: 
Loss

Explanation: 
If you only sold 5 hovercrafts, you spent 21,000,000 to operate but only made 15,000,000.

--------------------------------------------------------------------------------------------------------------------- */

const inSur = 1000000;             //Insurance
const buildCharge = 2000000;        //The amount to build an Hovercraft
const sellingPrice = 3000000;       //Selling Price
const craftsPerMonth = 10;          //Hovercrafts that are built in a month
const minSellingUnits = 7;           //Minimum to be sold to attain Breakeven, post insurance


hoverCraft = (saleUnit) => {
    //Using Ternary Operator
    // (saleUnit >= craftsPerMonth) ? console.log(`Hurray, we are not in loss, we sold ${saleUnit} this month`) : console.log(`That's bad, we are in loss, we sold only ${saleUnit} this month`);
    if (saleUnit > minSellingUnits){
        calcProfit = ((saleUnit - minSellingUnits) * sellingPrice) - inSur;
        console.log(`Hurray, we are in Profit, we sold ${saleUnit} this month for a profit of ${calcProfit} `);
    } else if(saleUnit < minSellingUnits){
        calcTotalSelling = ((saleUnit * sellingPrice) - inSur);
        calcLoss = (buildCharge * craftsPerMonth) - calcTotalSelling;
        console.log(`That's bad, we are in loss, we sold only ${saleUnit} this month for a loss of ${calcLoss} `)
    } else if(saleUnit == minSellingUnits){
        calcTotalSelling = (saleUnit * sellingPrice) - inSur;
        console.log(`Thank God, we are not in loss, we sold ${saleUnit} this month and made breakeven of ${calcTotalSelling} `)
    }
}

hoverCraft(10);
hoverCraft(7);
hoverCraft(2);

/* OUTPUT */
/* 
Hurray, we are in Profit, we sold 10 this month for a profit of 8000000 
Thank God, we are not in loss, we sold 7 this month and made breakeven of 20000000 
That's bad, we are in loss, we sold only 2 this month for a loss of 15000000 
*/
