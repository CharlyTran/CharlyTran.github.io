var xmlhttp = new XMLHttpRequest();
var xmlhttp1 = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

xmlhttp1.open("GET", "http://bitcoin.mubiz.com/info", true);
xmlhttp1.send();