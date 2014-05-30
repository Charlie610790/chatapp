/* global describe, it */

(function () {
    'use strict';

    describe('Checking that the post has the properties for username, message, time, and meta.', function () {
            
            var user = 'Charlie610790';
    		var message = 'This is the message.';
            var time = '12:00pm';
            var messageInstance = new Post(user,message,time);

            it('Should test to make sure that the slideshow function has the property for array.', function () {
                    
                expect(messageInstance.user).to.eql('Charlie610790');
            });

            it('Should test to make sure that the slideshow function has the property for interval.', function () {
              
                expect(messageInstance.message).to.eql('This is the message.');

            });

            it('Should test to make sure that the slideshow function has the property for delay.', function () {
				
				expect(messageInstance.time).to.eql('12:00pm');  

			});

        });

})();

