function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function Chinafy(){
	document.getElementById("Response").value = "Loading..."
	const Input = document.getElementById("Message").value
	const Flag = document.getElementById("FlagBox").value
	const Language = document.getElementById("LanguageBox").value
	console.log(Input)
	const URL = "https://china-propaganda-server.plainenglish.repl.co/translate"
	console.log(URL)

	$.get(
    URL,
    {text: encodeURIComponent(Input), flag: Flag, language: Language},
    function(data) {
			document.getElementById("Response").value = decodeURI(data)
    }
);
}

function Music() {
	var audio = new Audio('china.mp3');
	audio.play();
}