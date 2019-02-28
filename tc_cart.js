"use strict";
// stricco mode
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Christian Gregorio
    Date:   2.27.18
   
   Filename: tc_cart.js
	
*/

// get the total cost of your cart
var orderTotal = 0
// cartHTML variable listed to create a shopping cart to show our contents
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>"
// create a for loop to display the items
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    // create a variable which records the cost by the quantity of the item
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
// apply cartHTML to the page
document.getElementById("cart").innerHTML = cartHTML;