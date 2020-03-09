document.addEventListener("DOMContentLoaded", () =>
{
    let pw1 = document.querySelector("#pw1");
    let pw2 = document.querySelector("#pw2");


  document.querySelector("#validate").addEventListener("click", (e)=>
  {
    if((pw1.value).length < 8)
    {
      alert("Password must be 8 or more characters!");
    }
    else if((pw1.value)!=(pw2.value))
    {
      alert("Password does not match!");
    }
    else
    {
      alert("Success!");
    }
  });


});
