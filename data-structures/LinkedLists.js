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

