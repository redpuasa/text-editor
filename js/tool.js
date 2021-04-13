//clear function for textarea / container
function clearContent(){
    document.getElementById("title").value =" ";
    document.getElementById("content").innerHTML =" ";
    alert("Text Cleared");
}

//toolbar execution
var editor  = document.getElementById("content"),
    codeEditor  = document.getElementById("contentEditor"),
    editButtons = document.querySelectorAll("[data-edit]");

[].forEach.call(editButtons, function(el){
  el.addEventListener("click", edit, false);
});

function edit(event) {
  event.preventDefault();
  var data = this.dataset.edit.split(":"),
      cmd  = data[0], // Command
      par  = data[1]; // Additional param

  if(cmd === "foreColor" || cmd === "backColor"){
    par = this.value;

  /*}else if(cmd === "insertImage"){
    par = prompt("Image URL:");*/
    
  }else if(cmd === "createLink"){
    par = prompt("Link URL:");

  }else if(cmd === "hiliteColor"){
    par = "#e68a00";

  }else if(cmd==="toggleMode"){
    editor.classList.toggle("showContentEditor");
    if( editor.classList.contains("showContentEditor")){
      codeEditor.value = editor.innerHTML;
    } else {
      editor.innerHTML = codeEditor.value;
    }
    return;
  }
  document.execCommand(cmd, false, par);
}

//E-mail Function current return blank page
function sendEmail(){
  var email = document.getElementById("mail").value;
  var subject = document.getElementById("title").innerHTML;
  var body = document.getElementById("content").innerHTML;

  if(email.trim() === " "){
    alert("Please enter E-mail Address");
  }else{
  document.write('<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '">' + '<'+'/a>');
    alert("E-mail Send");
  }
}
