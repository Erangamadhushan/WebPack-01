$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("#overviewSummary").click(() => {
        $("#overviewPanel").slideToggle("slow");
    });
     
});