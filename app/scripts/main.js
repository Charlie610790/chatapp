'use strict';

var getChatTemplate = _.template($('.chat-row').text());
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/charliechat').done(function(chats){
    renderChats(chats);
});

function renderChats (chats){
    chats.forEach(function(chat){

        var rendered = getChatTemplate(chat);

        $('.chat-box').append(rendered);
    });
}

function Post () {
    this.user = 'Username';
    this.comment = "COMMENT HERE";
    this.time = "TIME HERE"
}

$('.reset').click(function() {
	$('.input').val('');
	$('.input-how-many-dice').val('');
	$('.chat-box').empty();
});
