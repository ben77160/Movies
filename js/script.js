var movielist = $("#movielist");

for(var i=0; i<movies.length; i++) {
	movielist.append('<a class="text-center bd-highlight p-4 col-4 item" href="detail.html?id='+i+'"><div class=""><img src="'+ movies[i].image +'" alt=""><h2>'+ movies[i].title +'</h2><h3>De Paul King</h3></div></a>');
}