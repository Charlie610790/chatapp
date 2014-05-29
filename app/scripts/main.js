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