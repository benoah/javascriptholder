//document.querySelector(); // nothing did happend
//document.querySelectorAll(); // nothing did happend


document.querySelector("h1"); // this will select the first h1 element on the page

document.querySelector(".heading2");// this will select the first element on the page that has a class of
//   .heading2


// this will select the first element on the page that has an id of accordion.
 document.querySelector("#accordion");

 /* answer 
 <div id = "accordion">
     <ul>
         <li>orange</li>
        <li> kiwi</li>
        <li> apple</li>
        <li>banana</li>
     </ul>*/

     document.querySelectorAll("li");

     /*
     NodeList(7) [li, li, li, li, li, li, li]
length: 7
0: li
1: li
2: li
3: li
4: li
5: li
6: li
__proto__: NodeList
length: (...)
item: ƒ item()
entries: ƒ entries()
forEach: ƒ forEach()
keys: ƒ keys()
values: ƒ values()
constructor: ƒ NodeList()
Symbol(Symbol.toStringTag): "NodeList"
Symbol(Symbol.iterator): ƒ values()
get length: ƒ length()
__proto__: Object

*/


console.dir(document.querySelector("h1"));

/*
h1 

align: ""
title: ""
lang: ""

*/

const heading2 = document.querySelector("h2");
console.dir(heading2);


// Because the h2 element has a class, we can select it by its class.

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);


// Let's select the ul by its id:

const list = document.querySelector("#list");
console.dir(list);


//We can see that if we select "li" using querySelector:

const listItem = document.querySelector("li");
console.dir(listItem);



// To select all the li elements, use querySelectorAll:
const listItems = document.querySelectorAll("li");
console.dir(listItems);

// NodeList(7)


/* Although this is not an array, 
we can loop over the NodeList using brackets to get each item. 
The syntax looks the same as looping over an array: */

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i]);
}

/* 
This will log each li element object.

We can log any property on the li object using dot notation.

Let's use a for loop to log the innerText value of each li:
*/

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i].innerText);
}

// Dog
// Cat
// Donkey

/*
style
Let's select the h1 element and change its color property on its style object:
*/

const heading1 = document.querySelector("h1")
heading1.style.color = "purple";


// If you inspect the h1 element you will see an inline style has been added:

//  innerText Let's use innerText to change the h1 element's text value:

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";




const allTheListItems = document.querySelectorAll("li");


//Let's update the text value of all the lis.

// We need to use querySelectorAll because we want to select more than one element:

// loop through all the li elements and change their innerText value
for(let i =0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = i + " changed";
}

"6 changed"


/* innerHTML
We can also use innerHTML to change the h1's value:*/

const pageHeading = document.querySelector("h1");
pageHeading.innerHTML = "Updated using innerHTML";


/* If we wanted to add an li to the ul element, 
we could do that by joining the existing innerHTML string value of the ul
 with a new string value containing the li: */
 // select the ul
const list = document.querySelector("ul");

// get the existing HTML inside the ul element and assign it to a variable
const existingHTML = list.innerHTML;

// create the new li HTML
const newHTML = "<li>New item at the end</li>"


// set the ul's new HTML to the existing HTML plus the new HTML 
list.innerHTML = existingHTML + newHTML;

/* 
A new li element containing the text New item at the end will be added to the end of the list.

We could do that with fewer lines of code:


this is not working ask manny 

*/

const list = document.querySelector("ul");

list.innerHTML = list.innerHTML + "<li>New item at the end</li>";



/*
If we wanted to put the new item at the beginning of the list we can reverse the order of the two strings:
*/

const list = document.querySelector("ul");

list.innerHTML = "<li>New item at the beginning</li>" + list.innerHTML;

/* 
A new li element containing the text New item at the beginning will be added as the first item in the list.
We can add a class to the new element inside the string:
*/
const list = document.querySelector("ul");

const newHTML = `<li class="red">
                    New item at the end
                </li>`;

                list.innerHTML = list.innerHTML + newHTML;
    
          /*      "
        <li>Dog</li>
        <li>Cat</li>
        <li>Donkey</li>
    <li class="red">
    New item at the end
                </li>"*/

/*
When we are adding the HTML string to the end of the existing HTML string, 
we can use the shorthand += operator:
*/ 

list.innerHTML += newHTML;


/*
The += operator adds the new string to the existing string, so is the same as:
*/ 
list.innerHTML = list.innerHTML + newHTML;


/*
If we used the assignment operator = on its own like this:
*/ 
list.innerHTML = newHTML;


/*

The existing HTML string would be replaced by newHTML and that's all the list would contain.
*/

// <ul>
   // <li class="red">
    //    New item at the end
    //</li>
//</ul>



