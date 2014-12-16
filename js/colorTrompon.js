"use strict";

require.config({
    baseUrl: 'js'
});
var lang;
var lexer;
require(['ceylon/language/1.1.0/ceylon.language-1.1.0', 'ceylon/lexer/core/1.1.0/ceylon.lexer.core-1.1.0'], function(la, le) { lang = la; lexer = le; });

/*
  NOT a general purpose escaper! Use at your own risk.
  (Fine for our use because everything happens in the client –
  if people want to break that, not our problem :) )
 */
function escape(code) {
    return code
        .replace("&", "&amp;", "g")
        .replace("<", "&lt;", "g")
        .replace(">", "&gt;", "g")
        .replace("\"", "&quot;", "g")
        .replace("\'", "&apos;", "g");
}

function colorTrompon(lang, lexer, code) {
    var ret = "";
    var lex = lexer.CeylonLexer(lexer.StringCharacterStream(code));
    var cur;
    while ((cur = lex.nextToken()) != null) {
        if (cur.type.string == "whitespace") {
            /* 
               don’t put whitespace in a span –
               this way, styles can use CSS selectors
               based on the immediately previous node
               without worrying about whitespace
             */
            ret += cur.text;
        } else {
            ret += "<span class=\"";
            for (var type in cur.type.__proto__.getT$all()) {
                if (type === undefined) break;
                ret += type.replace(/.*:/, "");
                if (type == "ceylon.lexer.core::TokenType") break;
                ret += " ";
            }
            var escaped = escape(cur.text);
            ret += "\" content=\"";
            ret += escaped;
            ret += "\">";
            ret += escaped;
            ret += "</span>";
        }
    }
    return ret;
}

function onSubmit() {
    var codeInput = document.getElementById('code');
    var code = codeInput.value;
    codeInput.disabled = true;
    var highlitElem = document.getElementById('highlit');
    var highlit = colorTrompon(lang, lexer, code);
    highlitElem.innerHTML = highlit;
    var highlitGroup = document.getElementById('highlitGroup');
    highlitGroup.classList.remove('hidden');
    codeInput.disabled = false;
}

function updateCss() {
    var styleInput = document.getElementById('style');
    var style = styleInput.value;
    var styleLink = document.getElementById('styleLink');
    styleLink.href = "css/" + style + ".css";
}
