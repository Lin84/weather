$(document).ready(function(){
// -------------------------------------------------------------------------------------------------
	var a="";
	var lon="";
	var lat="";
	var icon="";

	$.getJSON("http://ipinfo.io", function(data){
		console.log(data);
		$("#location").html(data.city+", "+data.country);		
		a=data.loc.split(",");
		// console.log(a);
		lat=a[0];
		lon=a[1];
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=3ad6860aa3f5818ab626ba277de18c2a",function(dat){
			console.log(dat);
			$("#tempa").html(Math.floor(dat.main.temp-273)+"&#x2103;");
			
			$(".btn").on("click",function(){
				$(this).attr("id","hovno");
				var el = document.getElementById("hovno");
				if (el.firstChild.data == "|C") 
				{
				el.firstChild.data = "|F";
				$("#tempa").html(Math.floor(dat.main.temp-273)+"&#x2103;");
				}
				else 
				{
				el.firstChild.data = "|C";
				$("#tempa").html(Math.floor(dat.main.temp*9/5-459)+"&#8457;");
				}
				$(this).removeAttr("id");
			})
			
			$("#weather").html(dat.weather[0].description);
			// $("#weather-icon").append("<img src='"+"http://openweathermap.org/img/w/"+dat.weather[0].icon+".png'>");
			icon=dat.weather[0].icon;
			/* comeback to add: changing background based on weather cod*/
			cod=dat.cod;
			// console.log(cod);
			icon="11n";
			// console.log(icon);

			if(icon=="01d" || icon=="01n"){
				$("body").addClass("clear-sky")
				$("#weather-icon").append("<img src='./img/32.png'>")
			}
			else if(icon=="02d" || icon=="02n"){
				$("body").addClass("few-clouds")
				$("#weather-icon").append("<img src='./img/34.png'>")
			}
			else if(icon=="03d" || icon=="03n"){
				$("body").addClass("scattered-clouds")
				$("#weather-icon").append("<img src='./img/30.png'>")
			}
			else if(icon=="04d" || icon=="04n"){
				$("body").addClass("broken-cloud")
				$("#weather-icon").append("<img src='./img/28.png'>")
			}
			else if(icon=="09d" || icon=="09n" || icon=="10d" || icon=="10n"){
				$("body").addClass("rain")
				$("#weather-icon").append("<img src='./img/10.png'>")
			}
			else if(icon=="11d"|| icon=="11n"){
				$("body").addClass("thunderstorm")
				$("#weather-icon").append("<img src='./img/1.png'>")
			}
			else if(icon=="13d"|| icon=="13n"){
				$("body").addClass("snow")
				$("#weather-icon").append("<img src='./img/18.png'>")
			}
			else if(icon=="50d"|| icon=="50n"){
				$("body").addClass("mist")
				$("#weather-icon").append("<img src='./img/21.png'>")
			}
		});
	});



// -------------------------------------------------------------------------------------------------
});