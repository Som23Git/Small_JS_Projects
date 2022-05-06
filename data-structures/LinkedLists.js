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

example of a proper linkedlist,

Head -> head:{
            value: 7,
            next: {
                value: 10,
                next: {
                    value:23,
Tail ->             tail: {
                        value: 100,
                        next: null
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

//In addition to the LinkedList Constructor, let us add the push() method for the LinkedList to add new Nodes to the list.
//Using the same code again here,


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