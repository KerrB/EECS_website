document.addEventListener("DOMContentLoaded", () =>
{
    let pw1 = document.querySelector("#pw1");
    let pw2 = document.querySelector("#pw2");


  document.querySelector("#validate").addEventListener("click", (e)=>
  {
    //TODO: figure out why it skips checking length and is always true for the second if statement
    if(pw1.length < 8)
    {
      alert("Password must be 8 or more characters!");
    }
    else if(pw1!=pw2)
    {
      alert("Password does not match!");
    }
  });


});
