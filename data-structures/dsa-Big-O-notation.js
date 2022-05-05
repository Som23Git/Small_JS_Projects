//Big-O notation
//Here, let's see about the basic understanding of O(n) using the basic for loop function.

function logItems(n){
    for(let i=0; i<n;i++){
        console.log(i);
    }
};

logItems(9);

/* OUTPUT */

/* 

0
1
2
3
4
5
6
7
8

*/

console.log("---------NEXT------------");

//Drop Constants - Big O -> O(2n) - To understand this, let's consider the same above example

function dropConstants(n){
    //for loop 1
    for(let i=0; i<n;i++){
        console.log(i);
    }

    //for loop 2
    for(let j=0; j<n;j++){
        console.log(j);
    }
};

dropConstants(3);

/* dropConstants OUTPUT */

/* 

0
1
2
0
1
2

*/

//conclusion -> As you see there are 2 for loops i.e n + n = 2n, we drop the 2 i.e. Constant and we notify it as O(n) only.

console.log("---------NEXT------------");

//Now, let's look what is O(n^2) and how it works. Let's consider the same for loop function.


function logItemsPower(n){
    //for loop 1
    for(let i=0; i<n;i++){
        //for loop 2
        for(let j=0; j<n;j++){
            console.log(i,j);
        };
    };
};

logItemsPower(3);

/* logItemsPower OUTPUT */
/* 

0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2

*/

// This applies same to additional for loops too -> In the above case, it is n * n -> n^2
// but, let's consider n * n * n -> n^3 i.e. nesting three for loops within function.


function logItemsPowerK(n){
    //for loop 1
    for(let i=0; i<n;i++){
        //for loop 2
        for(let j=0; j<n;j++){
            //for loop 3
            for(let k=0; k<n;k++){
                console.log(i,j,k);
            };
        };
    };
};

logItemsPowerK(2);


/* logItemsPowerK OUTPUT */
/* 

0 0 0
0 0 1
0 1 0
0 1 1
1 0 0
1 0 1
1 1 0
1 1 1

*/

//conclusion -> As you see there are 3 or 'n' nested for loops i.e n * n * ... * n = n^n, 
//in the above logItemsPowerK example, it is 3 for loops so as per mathematics it is O(n^3)
//But we can consider it as O(n^2) and we can consider the same whatever the n value might be, 
//it does not matter.

console.log("---------NEXT------------");

//Drop NON-Dominants - Big O -> O(n^2 + n) - To understand this, let's consider the same 
//nested for loop with a separate for loop.

function dropNonDominants(n){
    // --- This is O(n^2) ---
    //for loop 1
    for(let i=0; i<n;i++){
        //for loop 2
        for(let j=0; j<n;j++){
            console.log(i,j);
        };
    };

    // --- This is O(n) ---
    //for loop 3
    for(let k=0; k<n;k++){
        console.log(k);
    }
};

dropNonDominants(3);

/* dropNonDominants OUTPUT */

/* 

0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
0
1
2

*/

//conclusion -> As you see there are O(n^2) and O(n) within the same function then it will be derived 
//as O(n^2) + O(n) -> O(n^2 + n) -> Finally, we can eliminate the Non-Dominant Value i.e. 'n' from the derivative
//as it is negligible so the notation will be O(n^2).

console.log("---------NEXT------------");

//O(1) -> This is the very efficient notation compared to all the above Big-O notation,
//Let's consider the function with a return

function addItems(n){
    return n + n;
}

addItems(2);

/* addItems OUTPUT */

/*

4

*/

//Conclusion -> The function will return 2 + 2 -> 4 but the number of operations is just '1' 
//even mathematically it is O(2) reduced to O(1) because of the number of operations.

console.log("---------NEXT------------");

//Lastly, there is O(log n) -> very efficient when we are working with sorting arrays and a big set of data.
//It is just a divide and conquer rule for the arrays that would reduce the number of iterations or operations exponentially.