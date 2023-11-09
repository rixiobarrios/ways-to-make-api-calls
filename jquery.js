// jQuery API Call Example
//If you’re using the jQuery library, you can use its AJAX methods to make API calls. It simplifies the process and provides additional features like JSONP support.

// JQuery has many methods to handle asynchronous HTTP requests. In order to use jQuery, we need to include the source file of jQuery. The $.ajax() method is used to make the HTTP request.

// Note: To use jQuery in Node.js, you need to install it using npm and then require it in your file. However, jQuery is primarily a DOM manipulation library, and Node.js doesn't have a DOM. Therefore, you can't use jQuery in the same way you would in a browser environment.

// Install jQuery with npm install jquery

// Require jquery
const $ = require('jquery');

$.ajax({
    url: 'https://rapidapi.com/guides/api/rest',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        // Do something with the data
        console.log(data);
    },
    error: function (error) {
        // Handle the error
        console.log(error);
    },
});

// $.post(
//     'https://ticketsoko.nouveta.co.ke/api/index.php',
//     {
//         TransactionType: 'getEvents',
//     },
//     function (data, status) {
//         var info = JSON.parse(data);
//         for (var i = 0; i < info.data.length; i++) {
//             ticketSales[i] = info.data[i].totalTicketsSalesAmount;
//             events[i] = info.data[i].Events.events_name;
//             console.log(events[i]);
//         }
//     }
// );

// $(document).ready(function () {
//     $.ajax({
//         url: 'https://rapidapi.com/guides/api/rest',
//         type: 'GET',
//         success: function (result) {
//             console.log(result);
//         },
//         error: function (error) {
//             console.log(error);
//         },
//     });
// });
