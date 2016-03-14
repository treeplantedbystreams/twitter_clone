$(document).ready(function(){
    document.getElementById().document.eventListener() 
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	
    function postData() {
		//This function should create a post request using jquery. When posted it should:
		//	1) Add tweets to the 'database'
        $.ajax({
	url: 'http://localhost:3000/messages',
	type: 'PUSH',
	success: function(response) {
        $('database').append$('tweet');
        
			//2) After posted prepend message to list of messages and clear input box */
	}
    });
    }

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
$.ajax({
	url: 'http://localhost:3000/messages',
	type: 'GET',
}).then(function(success) {
   console.log('Got the messages');
   console.log(success); 
});

		// Code to execute once we receive a response
  $.get( "http://localhost:3000/", function( data ) {
  $( "Tweets" )=[]
    
		// 'response' is our response data, in JSON format
    },
	error: function(errors) {
		// Handle errors with the request
	}
});	
}
	/*Calls function once page loaded to display tweets to page*/
	getData();
});