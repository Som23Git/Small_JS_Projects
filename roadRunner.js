/*

Medium Level - 03 Problem Solving

A coyote is chasing a roadrunner and they start out 50 feet apart. If you know how fast they are both traveling, 
and how far the roadrunner is from safety, determine whether or not the coyote is able to catch the roadrunner. 
Both animals and the roadrunner's safe place are on a straight line.

Task: 
Determine whether or not the roadrunner made it to safety.

Input Format: 
Three integer values, the first value represents the distance the roadrunner is from safety, 
then the roadrunner's speed (feet/second) and then the coyote's speed (feet/second).

Output Format: 
A string that says 'Meep Meep' if the roadrunner made it, or 'Yum' if the coyote caught up to the roadrunner.

Sample Input: 
10 
5 
20

Sample Output: 
Meep Meep

Explanation: 
The roadrunner is safe because it took them 2 seconds to get to safety while the coyote only got 30 feet closer 
to the roadrunner in that same amount of time.

*/

roadRunner1 = (x,y,z) => {
    var a = x;
    var b = y;
    var c = z;
    var k = a + 50;
    var qR = (a/b);
    var qC = (k/c);
    if (qR < qC){
        console.log(`Meep Meep - I reached the safety in ${qR} Secs`);
    } else {
        console.log(`Yum - I got you ${qC} Secs`);
    }
}

roadRunner1(10,5,20);
roadRunner1(20,5,20);

roadRunner2 = (x,y,z) => {
    var a = x;
    var b = y;
    var c = z;
    var r = 0;
    var q = 0;
    var k = a + 50;
    for(var i = 0; r <= a, q <= k; i++){
        r = b*i;
        console.log(r);
        q = c*i;
        console.log(q);
        if(r == q & r,q != 0){
           console.log(`Yum - I got you in ${i} Secs`);
           break;
        }
    }   
    console.log(`Meep Meep - I reached the safety in ${i} Secs`); 
}

roadRunner2(20,5,20);
roadRunner2(10,5,20);