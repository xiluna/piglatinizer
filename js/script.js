$( "document" ).ready(function() {
$("#button").click(function() {
    var text = $(".input").val();
    var semiPigLatin = text.split()

    $(".output").append(text + "ay");
});
});
