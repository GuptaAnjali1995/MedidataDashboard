

$(document).ready(function(){
    $(".droppable").each(function(index, elem){
      $(elem).droppable({ 
        accept: ".draggable",
        drop: function( event, ui ) { 
          $(ui.draggable[0]).appendTo(event.target);
        }
      });
    });
    $(".draggable").each(function(index, elem){
      $(elem).draggable({
        classes: {
          "ui-draggable-dragging": "active"
        },
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
      });
    });
    $(".droppable1").each(function(index, elem){
      $(elem).droppable({ 
        accept: ".draggable1",
        drop: function( event, ui ) { 
          $(ui.draggable[0]).appendTo(event.target);
        }
      });
    });
    $(".draggable1").each(function(index, elem){
      $(elem).draggable({
        classes: {
          "ui-draggable-dragging": "active"
        },
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
      });
    });
    
  });

  

  
  //button js

  
