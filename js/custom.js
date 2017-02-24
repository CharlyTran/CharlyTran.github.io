function fonctionRequeteApi(url,elementTD)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) {
			var myObj = this.responseText;
			var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
			document.getElementById("demo").innerHTML = jsonPretty;
			}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function homePageLoading() {
    url = 'https://api.blockcypher.com/v1/btc/main';
    elementID = 'demo';
    fonctionRequeteApi(url, elementID);

    url1 = 'http://bitcoin.mubiz.com/info';
    elementID = 'demo1';
    fonctionRequeteApi(url1, elementID);

    url2 = 'http://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'demo2';
    fonctionRequeteApi(url2, elementID);

    url3 = 'http://bitcoin.mubiz.com/peerinfo';
    elementID = 'demo2';
    fonctionRequeteApi(url3, elementID);

    url4 = 'http://bitcoin.mubiz.com/mininginfo';
    elementID = 'demo2';
    fonctionRequeteApi(url4, elementID);
}