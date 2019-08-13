$(document).ready(function(){
  $("#cat").click(function(){
    $("ul#catList").prepend("<li>I'm the best</li>");
    $("ul#dogList").prepend("<li>You're a drama queen</li>");
    removeText();
  });
    $("#dog").click(function(){
    $("ul#dogList").prepend("<li>My owner loves me the most</li>");
    $("ul#catList").prepend("<li>No way, you slobber too much.</li>");
    removeText();
  });

  $("h1").click(function(){
    $(".row").after("<img src=\"img/mouse.jpg\" alt=\"A photo of a mouse lifting weights.\" id=\"mouse\">");
    $("#mouse").click(function(){
      $(this).remove();
    });
  });
});



























function removeText(){
  $("ul#catList").children("li").first().click(function(){
    $(this).remove();
  });
  $("ul#dogList").children("li").first().click(function(){
    $(this).remove();
  });
};
