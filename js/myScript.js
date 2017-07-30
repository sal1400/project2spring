/*global $ */

$(document).ready(function() {
    $(".jumbotron").click(function(){
        $(".jumbotron").toggle("fade", 3000).fadeIn();
        
    });
    
});


$(document).ready(function() {
    $(".thumbnail").click(function(){
        $(".thumbnail").effect('explode', {pieces:18}, 5000);
      
    });
    
});

$(document).ready(function() {
    function show_modal() {
        $('#myModal').modal('show');
    }
    window.setTimeout(show_modal, 500);
});