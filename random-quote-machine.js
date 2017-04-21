$("button").on("click", function(){updateQuote()});

var quote;
var author;

function updateQuote(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
   
    quote = json.quoteText
    if(quote.includes(".  ")){
      quote = quote.substring(0, quote.length - 2)}
    else if(quote.charAt(quote.length - 1) === " "){
      quote = quote.substring(0, quote.length - 1)};
   
  $("#quoteP").html("\"" + quote + "\"");
 $("#authorP").html(json.quoteAuthor);
    
    author = json.quoteAuthor;
 });
};

$(".twitterSh").on("click", function(){
  window.open( "https://twitter.com/intent/tweet?text=" + quote + " - " + author);
})
