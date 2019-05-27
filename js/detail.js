var url = window.location.href;
var index = url.split("=")[1];

console.log(index);


$(".details-movie-title span").text(movies[index].title);
$("img").attr("src", movies[index].image);
$("img").attr("alt", movies[index].title);

$("p.description").text(movies[index].resume);
$("p.description").append(`<br><a data-toggle="modal" data-target="#myModal" href="#">
	Voir la bande Annonce</a>`);

$("p.genre").text(movies[index].genre);

for(var i=0; i<movies[index].actors.length; i++) {
	$("p.actors-list").text(movies[index].actors[i]+" ");
}



$("p.director").text(movies[index].director);

$("h4.duration").text(movies[index].duration + " mn");

$("h4.date").text(movies[index].date);