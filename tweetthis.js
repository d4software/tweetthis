/*!
 * Tweetthis.js
 * https://github.com/d4software/tweetthisjs
 * MIT Licence
 */

$(document).ready (function(){
  $("div.tweetthis").each(function(i, e) {
    var text = $(e).text();

    if (text.length > 116) {
      text = text.slice(0, 113) + "...";
    }
    text = text + " " + window.location;
    text = encodeURIComponent(text);
    
    var newHtml = $("<a class='btn btn-tweetthis' target='_blank'></a>")
    .attr('href', "https://twitter.com/intent/tweet?text=" + text)
    .html("<span class='fa fa-twitter'></span> Tweet This");

    $(e).append(newHtml);
  });
});
