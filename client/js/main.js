$(document).ready(function(){
/*Using document ready runs code only after the DOM is
 ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready *
    // function postData() {
		//This function should create a post request using jquery. When posted it should:
		//	1) Add tweets to the 'database'

  //2) After posted prepend message to list of messages and clear input box */
	
var tweetWords = $('.tweet-box').val();
postData(tweetWords, $('.user').val());
        	
var tweets = []
$('tweet-button').click(function(){
    if(!tweetWorks()){
        alert('missing something');
        return;
    }
});
postData=function(tweet,text){
    var tweet={};
    tweet.text = text;
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/messages',
        data:(JSON.stringify)(tweet)
     }).done(function(data){
            addTweet();
            clearTweet();
        });
function getData(){
   $.ajax({
   type:"GET",
   url:'http://localhost:3000/messages',
    }).done(function(data){
            data=data.split('\n');     
                if (text.length){
                var tweet=JSON.parse.text;
                $(tweet).prepend("<div class='row tweets'></div>");                         
    }
})
      var addTweet=function(tweet){
            var divTweet=$(tweets);
            divTweets.prepend(createdivTweet(tweet));
    };       
function tweetWorks(){
    if ($(tweet.text).value()=== ''){
        return false;
    }
        return true
    }
}
getData()

