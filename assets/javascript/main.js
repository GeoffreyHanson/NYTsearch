$("#submit").on("click", function(){

let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
let term = "";
url += '?' + $.param({
    'api-key': "f0c117eabc5d499ba350932dc9c100fd",
    'q': "harry",

})

let term = "?q="

let beginDate = "?begin_date="
let endDate = "?end_date="

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  for(let i = 0; i<  result.response.docs.length; i++){
    let article = $(`<button>`)
    article.addClass(`btn btn-primary btn-lg btn-block`)
    article.html(result.response.docs[i].headline.main)
    $(`#articles`).append(article);
    console.log(result.response.docs[i].web_url)
    console.log(result.response.docs[i].headline.main);
    console.log(result.response.docs[i].snippet);
    console.log("--------------------------")
  }

}).fail(function(err) {
  throw err;
});

})
