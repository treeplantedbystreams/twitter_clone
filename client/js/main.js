$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	
    function postData() {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
            dfgfd
			2) After posted prepend message to list of messages and clear input box */
	}

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
$.ajax({
	url: 'get_tweets.php',
	type: 'GET',
	success: function(response) {

		// Code to execute once we receive a response
        console.log("hello, can you hear me")
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