var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function deleteit(m){
  m.parentNode.removeChild(m);
  console.log('done');
  findElement(document.body)
}


setInterval(function(){findElement(document.body)},250)



function findElement(element){
  if(element.hasChildNodes()){
    element.childNodes.forEach(findElement)
  }else if (element.nodeType === Text.TEXT_NODE) {
    if(element.textContent == "Continue to Simply Wall St"){
      deleteit(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
    }
  }

}
