// function aj(){

//   var xhttp;

//   if (window.XMLHttpRequest){
//     xhttp = new XMLHttpRequest();
//   }
//   else{
//     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   xhttp.onreadystatechange = function (){
//     if (xhttp.readyState == 4 && xhttp.status == 200){
//       document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
//   };

//   xhttp.open("GET","test.txt?t=" + Math.random(),true);
//   xhttp.send();

// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// function parseQuote(response){
// 			document.getElementById("quoteText").innerHTML = response.quoteText + " -- " + response.quoteAuthor;
// }

// function parseQuote1(response){
// 			document.getElementById("quoteText3").innerHTML = response.quoteText + "--" + response.quoteAuthor;
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getQuote(){
  
//   $.ajax({
//     url: "http://api.forismatic.com/api/1.0/",
//     data: {
//       method: "getQuote",
//       lang: "en",
//       format: "jsonp"
//     },
//     dataType: "jsonp",
//     jsonp: "jsonp",
//     jsonpCallback: "parseQuote"
//   });
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getQuote2(){
//   $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(d){
//     document.getElementById("quoteText2").innerHTML = d.quoteText + "--" + d.quoteAuthor;
//   });
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getQuote3(){
//   var script = document.createElement("SCRIPT");
//   document.body.appendChild(script);
//   script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote1";
//   document.body.removeChild(script);
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

function getQuote(){
  document.body.style.backgroundColor = "orange";
  document.body.style.opacity = "0.2";
  
  var xhttp;

  if (window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
  }
  else{
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhttp.onreadystatechange = function (){
    if (xhttp.readyState == 4 && xhttp.status == 200){
      parseQuote(xhttp.responseText);
    }
  };

  xhttp.open("GET","https://cors.now.sh/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",true);
  xhttp.send();
}

function parseQuote(response){
  
  document.body.style.backgroundColor = "lightgreen";

  console.log(response);
  response = response.replace(/\\'/g,"'");
  response = response.replace(/"/g,'\\"');
  response = response.replace('\\"quoteText\\"\:\\"','"quoteText":"');
  response = response.replace('\\", \\"quoteAuthor\\":\\"','", "quoteAuthor":"');
  response = response.replace('\\", \\"senderName\\"\:\\"','", "senderName":"');
  response = response.replace('\\", \\"senderLink\\"\:\\"','", "senderLink":"');
  response = response.replace('\\", \\"quoteLink\\"\:\\"','", "quoteLink":"');
  response = response.replace('\\"}','"}');
  
  response = JSON.parse(response);
  console.log(response.quoteText);
  
  if(response.quoteAuthor === ""){
    response.quoteAuthor = "Anonymous";
  }
  
  document.getElementById("quoteText").innerHTML = response.quoteText;
  document.getElementById("quoteAuthor").innerHTML = response.quoteAuthor;
  document.getElementById("twitterBtn").href= "https://twitter.com/intent/tweet?text=" + response.quoteText + " -- " + response.quoteAuthor;
	
  setTimeout(function(){document.body.style.backgroundColor = "lightblue";}, 2000);
  setTimeout(function(){document.body.style.opacity = "1";}, 2000);
}
