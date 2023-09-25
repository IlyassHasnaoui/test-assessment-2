///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, food) => acc + food.price, 0);
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
const taxAmount = cartTotal * tax;   
const finalPrice = cartTotal + taxAmount - couponValue;
return finalPrice;
}

//Putting the function in use given the numbers below
const cartTotal = 26.97;
const couponValue = 5;
const tax = 0.06;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The properties I will use would be the name of the customer, their order, their phone number and their address.
----------------------------------------------------------------------------------------------------------------------------
The name property will store the customer's full name. The data type will be a string because store textual information.
The order property will store an array of objects representing the items the customer has added to their cart. The data type will be an array of object becasue it is suitable for storing multiple items.
The phone number property will store the customer's contact number. The data type will be a string because the phone number will have numbers therefore we need to put them inside quotation marks to maintain the original format.
the address property will store the customer's physical address. The data type will be a string because the address, just like the phone number will have numbers and words, therefore we need to put them inside quotation marks to maintain the original format.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {

    name: "Ilyass Hasnaoui",
    address: "252 Kennedy drive, Malden MA 02148",
    phoneNumber: "875-318-5091",
    orderItems: [

        {
            name: "Cheeseburger",
            quantity: 1,
            price: 12.50
        },
        {
            name: "Pepsi",
            quantity: 1,
            price: 3.99   
        },
        {
            name: "Tiramisu",
            quantity: 1,
            price: 6.99   
        },
    ]
}

console.log(customer)