let slideIndex = 1;
show(slideIndex);

function DivMod(n)
{
  show(slideIndex += n);

}

function show(n)
{
  let x = document.getElementsByClassName("slideshow");
  if(n > x.length)
  {
    slideIndex = 1;
  }
  if(n<1)
  {
    slideIndex = x.length;
  }
  for(let i=0; i<x.length; i++)
  {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
