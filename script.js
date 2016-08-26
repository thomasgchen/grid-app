$(document).ready(function() {

  var dimension = 16;
  make_grid(dimension);
  trail();

  $("#black_button").click(function(){
    var num_boxes = prompt("How many boxes on each side?");
    if(num_boxes === null)
      return;
    else {
      $(".grid_item").remove();
      dimension = $("#container").height()/num_boxes;

      make_grid(num_boxes);

      $(".grid_item").height(dimension);
      $(".grid_item").width(dimension);

      trail();
    }
  });

  $("#random_button").click(function(){
    var num_boxes = prompt("How many boxes on each side?");
    if(num_boxes === null)
      return;
    else {
      $(".grid_item").remove();
      dimension = $("#container").height()/num_boxes;

      make_grid(num_boxes);

      $(".grid_item").height(dimension);
      $(".grid_item").width(dimension);

      random_trail();
    }
  });

  $("#increment_button").click(function(){
    var num_boxes = prompt("How many boxes on each side?");
    if(num_boxes === null)
      return;
    else {
      $(".grid_item").remove();
      dimension = $("#container").height()/num_boxes;

      make_grid(num_boxes);

      $(".grid_item").height(dimension);
      $(".grid_item").width(dimension);

      increment_trail();
    }
  });

  $("#leave_button").click(function(){
    var num_boxes = prompt("How many boxes on each side?");
    if(num_boxes === null)
      return;
    else {
      $(".grid_item").remove();
      dimension = $("#container").height()/num_boxes;

      make_grid(num_boxes);

      $(".grid_item").height(dimension);
      $(".grid_item").width(dimension);

      leave_trail();
    }
  });
});

function make_grid(num) {
  for(var i = 0; i < num; i++)
    for(var j = 0; j < num; j++)
      $("#container").append("<div class='grid_item'></div>");
}

function trail() {
  $(".grid_item").mouseenter(function() {
    $(this).css("background-color", "black");
  });
}

function random_trail() {
  $(".grid_item").mouseenter(function() {
    $(this).css("background-color", "#"+Math.floor(Math.random()*16777215).toString(16));
  });
}

function increment_trail() {
  $(".grid_item").css({"background-color": "black", "opacity": 0.3});
  $(".grid_item").mouseenter(function() {
    $(this).css("opacity", "+=0.07");
  });
}

function leave_trail() {
  $(".grid_item").mouseenter(function() {
    $(this).css({"background-color": "black", "transition-duration": "0s"});
  });
  $(".grid_item").mouseleave(function() {
    $(this).css({"background-color": "#B0B0B0", "transition-duration": "1s"});
  });
}