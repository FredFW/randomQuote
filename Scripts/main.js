function aj(){

  
var xhttp;

  
if (window.XMLHttpRequest)
    {
xhttp = new XMLHttpRequest();
  
}
else{

    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  
  }


  xhttp.onreadystatechange = function (){

    if (xhttp.readyState == 4 && xhttp.status == 200){

      document.getElementById("demo").innerHTML = xhttp.responseText;

    }
};

  
  xhttp.open("GET","test.txt?t=" + Math.random(),true);

  xhttp.send();

}



function parseQuote(response)
{

  document.getElementById("quote").innerHTML = response.quoteText;

}




function getQuote(){

  var xhttp;


  if (window.XMLHttpRequest){

    xhttp = new XMLHttpRequest();
  
  }

  else{

    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  
  }

  
  xhttp.onreadystatechange = function (){

  if (xhttp.readyState == 4 && xhttp.status == 200){

    document.getElementById("quoteText").innerHTML = xhttp.responseText;

  }
  
  };

  
  xhttp.open("GET","http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote",true);

  xhttp.send();


}