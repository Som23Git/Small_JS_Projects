//LinkedLists are similar to Array but are typically efficient in different operations compared to Array.
//Now, we are going to create a Constructor to Create a LinkedList

//A LinkedList will have the below elements,
// 1. Node
// 2. Head
// 3. Tail
// 4. Length

//The Node can be further broke down two key:value pair or you can call as Variables - into 1. Value 2. Next 
/* 

example for a node

Node: {
    value: 4,
    next: null
}

example of a proper linkedlist object,

        {
head -> head:{
            value: 7,
            next: {
                value: 10,
                next: {
                    value:23,
tail ->             tail: {
                        value: 100,
tail.next               next: null
                    }
                }
            }

        }
    }

If you take a look at the above linkedlist, the heading is pointing to the 
first Node and the tail is pointing to next of the first last element.

*/

//Let's Create a Constructor for NODE now

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Now, let's Create a Constructor for the LinkedList, and use the Node in the LinkedList Constructor 
//so we can call the Node Class whenever the LinkedList is growing in length or add a new element

//We are assuming to create only One NODE in the LinkedList so we can set the head and tail to the same Node.

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
};

//To test,

let addLinkedList = new LinkedList(4);

/* OUTPUT of addLinkedList */

/* 

addLinkedList
LinkedList {head: Node, tail: Node, length: 1}
head: Node {value: 4, next: null}
length: 1
tail: Node {value: 4, next: null}
[[Prototype]]: Object

If you see both the head and tail is pointing to the same Node i.e. value and next.

*/

/* ------------------------------------------------------------------------------------------------------------------------ 
In addition to the LinkedList Constructor, let us add the push() method for the LinkedList to add new Nodes to the list.
Using the same code again here,
------------------------------------------------------------------------------------------------------------------------ */


//Step 1 Create a Node Class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Step 2 Create a LinkedList Class with the Node Constructor
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Step 3 Add the push() method within the LinkedList Class so we can add more Nodes in the List
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;        //The reason why we returning "this", because it will return the LinkedList Class completely.
    }
};

//To test,

let addLinkedList1 = new LinkedList(5);
addLinkedList.push(12);

/* OUTPUT for LinkedList with push() method or addLinkedList1
/* 

LinkedList {head: Node, tail: Node, length: 2}
head: Node {value: 5, next: Node}
length: 2
tail: Node {value: 12, next: null}

*/

/* ------------------------------------------------------------------------------------------------------------------------ 
In addition to the LinkedList Constructor and push() method, let us add the pop() method to remove the Nodes from the last
of the LinkedList

Points to Understand in pop(), unlike push(), this had got 3 scenario or edge cases.

1. Where the LinkedList got null elements i.e. there are NO elements in the List
2. Where the LinkedList got only one element i.e. the both head and tail are pointing to that element.
3. Where the LinkedList got multiple elements and we should remove the last in the list i.e. the head and tail are pointing 
to different elements or NODES.

Let's reuse the same code until push() method and append the pop() method code,
------------------------------------------------------------------------------------------------------------------------ */

//Step 1 Create a Node Class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Step 2 Create a LinkedList Class with the Node Constructor
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Step 3 Add the push() method within the LinkedList Class so we can add more Nodes in the List
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
    //Scenario 1 where there is no values/elements in the List
    if(!this.head) return undefined;     
    
    //Scenario 3 where there are multiple values/elements in the List
    let temp = this.head;
    let pre = this.head;

    //This while loop, will increment the temp and pre variable until the temp.next === null, i.e. the last element
    //Post that, the pre - will be assigned to the tail.
    while(temp.next !== null){
        pre = temp;
        temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //Scenario 2 where there is only one value/element in the List
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    
    console.log(this);
    return temp;
    }
};

//To test,

let addLinkedList2 = new LinkedList(5);
addLinkedList2.push(12);
addLinkedList2.push(242);
addLinkedList2.push(99);
addLinkedList2.pop();

/* addLinkedList2 OUTPUT with pop */

/* 

Below is the LinkedList when all the 4 values are added, i.e. 5->12->242->99->null

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 99, next: null}

console.log(this) --> prints the below LinkedList eliminating the value 99

LinkedList {head: Node, tail: Node, length: 3}
head: Node {value: 5, next: Node}
length: 3
tail: Node {value: 242, next: null}

return temp -> returns the below removed value from the list

Node {value: 99, next: null}

*/

/* ------------------------------------------------------------------------------------------------------------------------ 
In addition to the LinkedList Constructor, push() method, and pop() method, let us add the unshift() method to add new Nodes in
the LinkedList

NOTE: unshift(value) method is adding the NODE in the Zeroth Index of the List with a value.

Points to Understand in unshift(), this had got only 2 straight scenarios,

1. Where the LinkedList got null elements i.e. there are NO elements in the List
2. Where the LinkedList got multiple elements and we should add the Node in the first of the list.

Let's reuse the same code until pop() method and append the unshift() method code,
------------------------------------------------------------------------------------------------------------------------ */

//Step 1 Create a Node Class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Step 2 Create a LinkedList Class with the Node Constructor
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Step 3 Add the push() method within the LinkedList Class so we can add more Nodes in the List
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
    //Scenario 1 where there is no values/elements in the List
    if(!this.head) return undefined;     
    
    //Scenario 3 where there are multiple values/elements in the List
    let temp = this.head;
    let pre = this.head;

    //This while loop, will increment the temp and pre variable until the temp.next === null, i.e. the last element
    //Post that, the pre - will be assigned to the tail.
    while(temp.next !== null){
        pre = temp;
        temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //Scenario 2 where there is only one value/element in the List
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    
    console.log(this);
    return temp;
    }

    unshift(value){
        //Create a new Node because we would need to insert the Node in the Zeroth Index of the List
        const newNode = new Node(value);

        //Scenario 1 where there is No Nodes in the List
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        //Scenario 2 where there are Nodes in the List
        }else{
            newNode.next = this.head; //Still the newNode is not a part of LinkedList so, we cannot use this.newNode.next which will throw an error
            this.head = newNode;
        }
        this.length++;
        return this;
    }
};

//To test,

let addLinkedList3 = new LinkedList(5);
addLinkedList3.push(12);
addLinkedList3.push(242);
addLinkedList3.push(99);
addLinkedList3.unshift(23);     //Adds Node in the first/Zeroth position in the List.

/* addLinkedList3 OUTPUT with unshift() method */
/*

Before unshift() method, the LinkedList was, 

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 99, next: null}

Post calling unshift(23) method, the head got updated

LinkedList {head: Node, tail: Node, length: 5}
head: Node {value: 23, next: Node}
length: 5
tail: Node {value: 99, next: null}

*/

/* ------------------------------------------------------------------------------------------------------------------------ 
In addition to the LinkedList Constructor, push() method, pop(), unshift() method let us add the shift() method to remove
new Nodes from the LinkedList

NOTE: shift() method is removing the NODE from the Zeroth Index of the List.

Points to Understand in shift(), this had got only 3 scenarios similar to pop() method

1. Where the LinkedList got null elements i.e. there are NO elements in the List
2. Where the LinkedList got only one element i.e. the both head and tail are pointing to that element.
3. Where the LinkedList got multiple elements and we should remove the last in the list i.e. the head and tail are pointing 
to different elements or NODES.

Let's reuse the same code until unshift() method and append the shift() method code,
------------------------------------------------------------------------------------------------------------------------ */

//Step 1 Create a Node Class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Step 2 Create a LinkedList Class with the Node Constructor
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Step 3 Add the push() method within the LinkedList Class so we can add more Nodes in the List
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
    //Scenario 1 where there is no values/elements in the List
    if(!this.head) return undefined;     
    
    //Scenario 3 where there are multiple values/elements in the List
    let temp = this.head;
    let pre = this.head;

    //This while loop, will increment the temp and pre variable until the temp.next === null, i.e. the last element
    //Post that, the pre - will be assigned to the tail.
    while(temp.next !== null){
        pre = temp;
        temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //Scenario 2 where there is only one value/element in the List
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    
    console.log(this);
    return temp;
    }

    unshift(value){
        //Create a new Node because we would need to insert the Node in the Zeroth Index of the List
        const newNode = new Node(value);

        //Scenario 1 where there is No Nodes in the List
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        //Scenario 2 where there are Nodes in the List
        }else{
            newNode.next = this.head; //Still the newNode is not a part of LinkedList so, we cannot use this.newNode.next which will throw an error
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){

        //Scenario 1 where there is no values/elements in the List
        if(!this.head) return undefined;

        //Scenario 3 where there are multiple values/elements in the List
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        //Scenario 2 where there is only one value/element in the List
        if(this.length === 0){
            this.tail = null;
        }
        console.log(this);
        return temp;        
    }
};

//To test,

let addLinkedList4 = new LinkedList(5);
addLinkedList4.push(12);
addLinkedList4.push(242);
addLinkedList4.push(99);
addLinkedList4.shift();     //Removes Node in the first/Zeroth position in the List.

/* addLinkedList4 OUTPUT with shift() method */
/*

Before shift() method, the LinkedList was, 

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 99, next: null}

console.log -> Post calling shift() method, the head got updated

LinkedList {head: Node, tail: Node, length: 3}
head: Node {value: 12, next: Node}
length: 3
tail: Node {value: 99, next: null}

return this -> Removed the value 5

Node {value: 5, next: null}
next: null
value: 5

*/

/* ------------------------------------------------------------------------------------------------------------------------ 
In addition to the LinkedList Constructor, push(), pop(), unshift(), and shift() method, let us add the get(index) and 
set(index, value) method to get the Node from the Index and the replace/update the value in the specific Index

NOTE-1: get(index) method is will directly iterate through the LinkedList and fetch the Node from the Index
NOTE-2: set(index,value) method is will replace/update the value of the specific Node that the get() method returns.

There are NO specific or edge cases except, we should keep in mind that the LinkedList Index cannot be less than 0 or more 
than the length of the List.

Let's reuse the same code until shift() method and append the get() and set() method
------------------------------------------------------------------------------------------------------------------------ */

//Step 1 Create a Node Class
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Step 2 Create a LinkedList Class with the Node Constructor
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Step 3 Add the push() method within the LinkedList Class so we can add more Nodes in the List
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
    //Scenario 1 where there is no values/elements in the List
    if(!this.head) return undefined;     
    
    //Scenario 3 where there are multiple values/elements in the List
    let temp = this.head;
    let pre = this.head;

    //This while loop, will increment the temp and pre variable until the temp.next === null, i.e. the last element
    //Post that, the pre - will be assigned to the tail.
    while(temp.next !== null){
        pre = temp;
        temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //Scenario 2 where there is only one value/element in the List
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    
    console.log(this);
    return temp;
    }

    unshift(value){
        //Create a new Node because we would need to insert the Node in the Zeroth Index of the List
        const newNode = new Node(value);

        //Scenario 1 where there is No Nodes in the List
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        //Scenario 2 where there are Nodes in the List
        }else{
            newNode.next = this.head; //Still the newNode is not a part of LinkedList so, we cannot use this.newNode.next which will throw an error
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){

        //Scenario 1 where there is no values/elements in the List
        if(!this.head) return undefined;

        //Scenario 3 where there are multiple values/elements in the List
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        //Scenario 2 where there is only one value/element in the List
        if(this.length === 0){
            this.tail = null;
        }
        console.log(this);
        return temp;        
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        console.log(this);
        return temp;
    }

    set(index,value){
        //The reason why we use the below statement of using get(index) method is to stop creating an another set of code
        //To execute the same set of operation so we can call get() method using "this" keyword as it is under the same Constructor Class
        let temp = this.get(index);

        //As there are two possibilities from get() method -> 1. It returns Undefined or 2. It returns the Node
        //If the value of temp is true i.e. if it pointing to any Node then, the if will be executed.
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    /* ------------------------------------------------------------------------------------------------------------------------ 
    In addition to the get(index) and set(index, value) method, let us add insert(value,index) and remove(index) 

    NOTE-1: insert(value,index) method is will directly iterate through the LinkedList and fetch the Node from the Index
    NOTE-2: remove(index) method is will remove the value of the specific Node from the LinkedList

    There are NO specific or edge cases except, we should keep in mind that the LinkedList Index cannot be less than 0 or more 
    than the length of the List.
    And, we can re-use the other methods in the same code for efficient reusability
    ------------------------------------------------------------------------------------------------------------------------ */


    insert(index, value) {
        //Scenario 1
        if(index < 0 || index > this.length) return false
        //Scenario 2
        if(index === this.length) return this.push(value)
        //Scenario 3
        if(index === 0) return this.unshift(value)

        //Scenario 4
        
        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        //Scenario 1
        if(index < 0 || index >= this.length) return undefined
        //Scenario 2
        if(index === 0) return this.shift()
        //Scenario 3
        if(index === this.length - 1) return this.pop()

        //Scenario 4

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

};

//To test,

let addLinkedList5 = new LinkedList(5);
addLinkedList5.push(12);
addLinkedList5.push(242);
addLinkedList5.push(99);
addLinkedList5.get(3);     //It gets the Node which is in the Index of 3
addLinkedList5.set(3,29);
addLinkedList5.insert(2,149);
addLinkedList.remove(3);

/* addLinkedList5 OUTPUT with get() method */
/*

Using console.log -> We got the complete LinkedList before returning the Node of the Index

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 99, next: null}

return this -> Returned the Node of the Index that we passed in the argument or parameter.

Node {value: 99, next: null}

** The returned value from the get() method was assigned to temp variable in the set() method **

Before using the set() method, the tail or the Index 3 was having the value 99

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 99, next: null}

Post using the set() method, the tail or the Index 3 is replaced by the value 29

LinkedList {head: Node, tail: Node, length: 4}
head: Node {value: 5, next: Node}
length: 4
tail: Node {value: 29, next: null}

*/











