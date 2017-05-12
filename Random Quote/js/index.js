$(document).ready(function() {
	// run random qoute function on document load so that each document load has a random quote.

	
	// random quote function which randomly selects a quote.
		function randomize() {
// array of quotes
				var array1 = ['"Hidup adalah perjuangan"', '"yang kita hadapi"', '"dan tetap semangat..."', '" Dan tersenyumlah."', '"biarlah hidup ini untuk maju kedepannya "', '"karena kebahagian itu sederhana"', '".lakukan lah yang terbaik"','“jadi jamgan lah sia-siakan.” ']
   //array of authors in correlation to quotes ie quote one is by author one
				var array2 = ['-Vicha', '-Sri', '-Lisa', '-Ririn', '-Riska', '-Crismoni', '-josep','-Vina']
				
				// random number equation.
				var randomnumber = Math.floor(Math.random() * 8)
				//takes random number and selects quote from array1.
				$(".quote").text(array1[randomnumber]);
			//takes same random number and selects the quotes author that mactches.
				$(".2").text(array2[randomnumber]);
			//adds author and quote to twitter for tweet.
				$(".tweet").attr('href', "https://twitter.com/intent/tweet?text=" + array1[randomnumber] + " - " + array2[randomnumber]);

		}
	
//runs random quote function on button click
		$("#activate").on("click",function(){
				randomize();
		});

});