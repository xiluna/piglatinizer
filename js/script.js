$( "document" ).ready(function() {
$("#button").click(function() {
    let pigLatin = $(".input").val();
    console.log(pigLatin, 'piglatin');
    let vowel = pigLatin.match(/[aeiou]/);
    console.log(vowel, 'vowel')
    let vowelIndex = pigLatin.indexOf(vowel);
    console.log(vowelIndex, 'vindex');
    
    if (vowelIndex > 0) {
        const latinized = pigLatin.slice(vowelIndex) + pigLatin.slice(0, vowelIndex) + 'ay';
        $('.output').text(latinized);
    } else {
        $('.output').text(pigLatin + 'way');
    }
});
});
