'use strict';

var getChatTemplate = _.template($('.chat-row').text());
$.getJSON('https://api.github.com/users/Charlie610790/repos?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47').done(function(chats){
    renderChats(chats);
});

function renderChats (chats){
    chats.forEach(function(chat){

        var rendered = getChatTemplate(chat);

        $('.chat-box').append(rendered);
    });
}