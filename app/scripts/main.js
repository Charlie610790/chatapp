'use strict';
//sets the var getChatTemplate to add the template named chat-row and append in from the following url
var getChatTemplate = _.template($('.chat-row').text());
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/cchat').done(function(chats){
//run function renderChats listed below on the argument of chats
    renderChats(chats);
});

function renderChats (chats){
//
    chats.forEach(function(chat){
//gets the chattemplate and sets it as the var redered
        var rendered = getChatTemplate(chat);
//append the chat box window and puts the pulled data in the window
        $('.chat-box').append(rendered);
    });
}
//reset button that clears the chat window
$('.reset').click(function() {
	$('.input').val('');
	$('.chat-box').empty();
});

// $('.submit').click(function() {
// 	$('.input').val('');
// 	$('.chat-box').empty();
// });



//action that happens when the submit button is clicked
$('.submitButton').click(function() {
//takse the input value of the message field and assigns it to the var message
    var message = $('.input').val();
//takes the value of the message field and clears it
    $('.input').val('');
//takes the time and sets it at the var time
    var time = Date.now();
//takes Charlie610790 and sets it as the var user
    var user = 'Charlie610790';
//creates a new instance of the constructor POST passing the three assigned variables
    var outgoing = new Post(user, message, time);
});

function Post (user,message,time) {
    this.user = user || '';
    this.message = message || '';
    this.time = time || '';
    this.meta = 'Just Jonesn';
}
//sends the data outgoing has to the server
    // updateChat(outgoing);

function updateChat () {
    $.post('/collections/charliechat',{user: + this.user , message: + this.message, time : this.time, meta: this.meta});
}
