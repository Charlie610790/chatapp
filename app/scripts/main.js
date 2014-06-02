'use strict';

//reset button that clears the chat window
$('.reset').click(function() {
	$('.input').val('');
	// $('.chat-box').empty();
});

//setting variables for the entire JS
var user = 'Blue Horseshoe';
var timeRightNow = Date.now();
// var getChatTemplate = _.template($('.chat-row').text());

var getChatTemplate = _.template($('.chat-row').text());
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chats){
//run function renderChats listed below on the argument of chats
    renderChats(chats);
});

function renderChats (chats){
    chats.forEach(function(chat){
        if (chat.hasOwnProperty('user') && chat.hasOwnProperty('message') && chat.hasOwnProperty('time')) {
    //gets the chattemplate and sets it as the var redered
            var rendered = getChatTemplate(chat);
    //append the chat box window and puts the pulled data in the window
            $('.chat-box').append(rendered);

        }
    });
}
// //function just to run the set interval
// function justForSet (chats) {
//     var getChatTemplate = _.template($('.chat-row').text());
//     $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/cchat3').done(function(chats){
// //run function renderChats listed below on the argument of chats
//     renderChats(chats);
// });
// }

// setInterval(justForSet, 2000);

//action that happens when the submit button is clicked
$('.submitButton').click(function() {
    //takse the input value of the message field and assigns it to the var message
    var message = $('.input').val();
    //takes the value of the message field and clears it
    $('.input').val('');
    //takes the time and sets it at the var time
    var time = timeRightNow;
    //creates a new instance of the constructor POST passing the three assigned variables
    var outgoingPost = new Post(user, message, time);

    updateChat(outgoingPost);

});

//creates the constructor Post and carries through the variables listed in the parameters and inserts them as argurments
function Post (user,message,time) {
    this.user = user || '';
    this.message = message || '';
    this.time = time || '';
    this.meta = 'Just Jonesn';
}

//Function that takes whatever arguments is passed and runs it with the JSON post to the URL listed beleo
function updateChat(chatStuff) {
    $.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', chatStuff);
    setInterval(justForSet, 500);
}