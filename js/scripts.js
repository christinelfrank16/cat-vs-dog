$(document).ready(function(){
  var data = {
    phrase: "",
    response: ""
  }

  $("#cat").click(function(){
    catPhrase(data);
    $("ul#catList").prepend(`<li>${data.phrase}</li>`);
    $("ul#dogList").prepend(`<li>${data.response}</li>`);
    removeText();
  });
  $("#dog").click(function(){
    dogPhrase(data);
    $("ul#dogList").prepend(`<li>${data.phrase}</li>`);
    $("ul#catList").prepend(`<li>${data.response}</li>`);
    removeText();
  });

  $("h1").click(function(){
    $(".row").after("<img src=\"img/mouse.jpg\" alt=\"A photo of a mouse lifting weights.\" id=\"mouse\">");
    $("#mouse").click(function(){
      $(this).remove();
    });
  });
});











function catPhrase(dataHolder){
  var number = Math.floor((Math.random() * 4) +1);
  var phrase = "";
  var response = "";
  switch (number) {
    case 1:
      phrase = "You shed too much.";
      response = "At least I don't smell.";
      break;
    case 2:
      phrase = "Go chase your tail.";
      response = "Good idea!";
      break;
    case 3:
      phrase = "Ugh, do you have fleas?";
      response = "Not my responsibility.";
      break;
    case 4:
      phrase = "You're disgusting. When was the last time you cleaned yourself?";
      response = "I ran through a puddle yesterday...";
  };
  dataHolder.phrase = phrase;
  dataHolder.response = response;
};


function dogPhrase(dataHolder){
  var number = Math.floor((Math.random() * 4) +1);
  var phrase = "";
  var response = "";
  switch (number) {
    case 1:
      phrase = "You look uptight";
      response = "I'm not uptight. I'm alert!";
      break;
    case 2:
      phrase = "Why do you lick yourself so much?";
      response = "So I don't smell like you.";
      break;
    case 3:
      phrase = "Your ears are big.";
      response = "Look in the mirror.";
      break;
    case 4:
      phrase = "You have litter in your paw. Gross.";
      response = "Yeah and I just walked across your bed...";
  };
  dataHolder.phrase = phrase;
  dataHolder.response = response;
};











function removeText(){
  $("ul#catList").children("li").first().click(function(){
    $(this).remove();
  });
  $("ul#dogList").children("li").first().click(function(){
    $(this).remove();
  });
};
