var t = prompt("What would you like to force type?");
var e = Array.prototype.slice.call(document.querySelectorAll("input[type=text],textarea"));

e.forEach(function(e) {
    e.addEventListener("keypress", function(e) {
        var i = typeof e.which === "number" ? e.which : e.keyCode;

        if (i && i > 31) {
            var n = this.selectionStart;
            var a = this.selectionEnd;

            // Fix the multiplication in the index calculation
            this.value = this.value.slice(0, n) + t[n % t.length] + this.value.slice(a);
            this.selectionStart = this.selectionEnd = n + 1;
        }

        e.preventDefault();
    });
});
