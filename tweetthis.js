/*!
 * Tweetthis.js
 * https://github.com/d4software/tweetthisjs
 * MIT Licence
 */

var genTweetLink = function(text){
  var html = '<a href="https://twitter.com/intent/tweet?text='
  .concat(text)
  .concat('" class="btn btn-tweetthis" target="_blank">')
  .concat('<span class="fa fa-twitter"></span> Tweet This</a>')

  return html
}


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

      var tweets = document.querySelectorAll("div.tweetthis");

      for(var t = 0; t < tweets.length; t++){

        var text = tweets[t].textContent;
        if (text.length > 116) {
            text = text.slice(0, 113) + "...";
        }
        text = text + " " + window.location;
        text = encodeURIComponent(text);

        var newHtml = genTweetLink(text)

        tweets[t].innerHTML += newHtml

      }
    }
}