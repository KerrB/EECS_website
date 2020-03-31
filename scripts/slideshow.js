let slideIndex = 1;

show(slideIndex)

function changeSlide(n)
{
  show(slideIndex += n);
  console.log("here");

}


function show(n)
{
  if(n > 5)
  {
    slideIndex = 1;
  }
  if(n<1)
  {
    slideIndex = 5;
  }

  let img = document.getElementById("img" + n);
  let tempImg;
  for(let i = 1; i<6; i++)
  {
    tempImg = document.getElementById("img" + i);
    tempImg.style.visibility = 'hidden';
  }
  img.style.visibility = 'visible';

  img.width = 1000;
  img.height = 500;

}
