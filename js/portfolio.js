var syntaxes = ["puts", "echo", "printf", "content:", "console.log", "print", "System.out.print", "document.write"];
var i = 0;
function switchText() {
$("code kbd").animate({'opacity': 0}, 1500, function () {
    $(this).text(syntaxes[i%=syntaxes.length]);
}).animate({'opacity': 1}, 1500, function() {
    i++;
    switchText();
});};
switchText();