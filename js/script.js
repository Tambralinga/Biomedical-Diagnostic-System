/* Author:

*/

$(window).load(function() {
    $('#searchText').focus();
});

function openLink(url) {
  console.log(url);
  if(!localStorage.searchHistory) localStorage.searchHistory = "[]";
  var searchHistory = JSON.parse(localStorage.searchHistory);
  searchHistory.push({'text': $("#searchFor").val(), 'link': url});
  localStorage.searchHistory = JSON.stringify(searchHistory);
  console.log(searchHistory);
}

function reopenLink(text) {
  $("#searchFor").val(text);
}
