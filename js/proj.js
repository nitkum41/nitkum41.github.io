var trows = document.querySelectorAll("td")


for(var i=0;i<trows.length;i++)
  {
    trows[i].style.color = 'red';
  }


function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}


function changeHeaderColor(){
  for(var i=0;i<trows.length;i++)
    {
      colorInput = getRandomColor()
      trows[i].style.color = colorInput;
    }

}


setInterval("changeHeaderColor()",500);
