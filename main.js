function myFunction() {
  var x, text;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  x = document.getElementById("myEmail").value;

  if (x == "" ) {
    text = "Whoops! It looks like you forgot to add your email";
  }
  else if (x.match(mailformat)) {
    text = " See you soon!";
  }
  else
  {
   text = "Please provide a valid email address";
  document.form1.email.focus();
  } 
  document.getElementById("demo").innerHTML = text;
}