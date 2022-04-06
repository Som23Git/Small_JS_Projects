/*  ---------------------------------------------------------------------------------------------------------------------

You are cheering on your favorite team. After each play, if your team got over 10 yards further down the field, 
you stand up and give your friend a high five. If they don't move forward by at least a yard you stay quiet and say 'shh', 
and if they move forward 10 yards or less, you say 'Ra!' for every yard that they moved forward in that play.

Task 
Given the number of yards that your team moved forward, output either 'High Five' (for over 10), 'shh' (for <1), 
or a string that has a 'Ra!' for every yard that they gained.

Input Format 
An integer value that represents the number of yards gained or lost by your team.

Output Format 
A string of the appropriate cheer. 

Sample Input 
3

Sample Output
Ra!Ra!Ra!

Explanation
If your team gains 3 yards you would cheer 'Ra!' three times for that play.

--------------------------------------------------------------------------------------------------------------------- */

cheerCreator = (x) => {
    if(x > 10){
        console.log(`Hurray, take a "High Five", the team had moved ${x} yards`);
    }
    else if(x<=10 && x > 1){
        let text = "RA!"
        console.log(`Let's Cheer the team - ${text.repeat(x)} the team had moved ${x} yards`);
    }else{
        console.log(`That's bad, "SHHHH" the team had moved only ${x} yard`);
    }
}

cheerCreator(3);
cheerCreator(12);
cheerCreator(1);
cheerCreator(0.2);
cheerCreator(7);

/* OUTPUT */
/* 

Let's Cheer the team - RA!RA!RA! the team had moved 3 yards
Hurray, take a "High Five", the team had moved 12 yards
That's bad, "SHHHH" the team had moved only 1 yards
That's bad, "SHHHH" the team had moved only 0.2 yards
Let's Cheer the team - RA!RA!RA!RA!RA!RA!RA! the team had moved 7 yards

*/

