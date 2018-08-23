$(document).ready(function(){
    // to search after clicked
    $("#search").click(function(){
        // needs search input
        var searchInput= $("#input").val();
        // api needed
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchInput +"&format=json&callback=?";
        
    })
})