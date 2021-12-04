$(function() {
    $("#button").click(function() {
        retVal = true;
        if ($("#Nome").value.trim().length < 3) {
            retVal = false;
            $("#NomeError").show();
        } 
        else {
            $("#NomeError").hide();
        }
    })
});