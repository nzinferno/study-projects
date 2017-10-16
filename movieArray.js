var movies = [
        {
			title: "In Bruges",
			rating: "5 stars",
			hasWatched: true
        }, 
        {
        	title: "Frozen",
			rating: "4.5 stars",
			hasWatched: false
        },
        {
        	title: "Mad Max Fury Road",
			rating: "5 stars",
			hasWatched: true
        },
        {
        	title: "Les Miserables",
			rating: "3.5 stars",
			hasWatched: false
        }
];


for (var i = 0 ; i >= movies.length; i++) {
	if (movies[i].hasWatched = true) {
	console.log ("You have seen " + movies[i].title + " - " + movies[i].rating);
} else {
	console.log ("You have not seen " + movies[i].title + " - " + movies[i].rating);
}


movies.forEach(function(movie) {
	var result = "You have ";
	if(movie.hasWatched){
		result+= "watched ";
	} else {
		result+= "not watched ";
	}
	result += movie.title + " - ";
	result += movie.rating;
	console.log(result)
})