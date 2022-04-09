/* 

You sell souvenir kaleidoscopes at a gift shop, and if a customer buys more than one, they get a 10% discount on all of them!
Given the total number of kaleidoscopes that a customer buys, let them know what their total will be. Tax is 7%. 
All of your kaleidoscopes cost the same amount, 5.00.

Task: 
Take the number of kaleidoscopes that a customer buys and output their total cost including tax and any discounts.

Input Format: 
An integer value that represents the number of kaleidoscopes that a customer orders.

Output Format: 
A number that represents the total purchase price to two decimal places.

Sample Input: 
4

Sample Output: 
19.26

Explanation: 
A purchase of 4 kaleidoscopes would give the customer a 10% discount, then with tax the total is 19.26.

*/

function outerScope() {
    const kaleidoRate = 5;
    const goodsTax = 0.07;
    let stdDiscount = 0.10;
    return function kaleidoScope(purchaseUnits){
        if(purchaseUnits > 1){
            let totalPrice = (kaleidoRate * purchaseUnits);
            stdDiscount = (kaleidoRate * purchaseUnits) * stdDiscount;
            totalPrice = ((totalPrice - stdDiscount) * goodsTax) + (totalPrice - stdDiscount);
            console.log(`The total price including the discount will be ${totalPrice}`);
        }else{
            totalPrice = ((kaleidoRate * purchaseUnits) * goodsTax) + (kaleidoRate * purchaseUnits);
            console.log(`The total price including the without discount will be ${totalPrice}`);
        }
    }
}

outerScope()(4);
outerScope()(1);
outerScope()(7);
outerScope()(9);
outerScope()(2);

/* OUTPUT */
/* 

The total price including the discount will be 19.26
The total price including the without discount will be 5.35
The total price including the discount will be 33.705
The total price including the discount will be 43.335
The total price including the discount will be 9.63

*/



