"use strict";

/*
  NOT a general purpose escaper! Only valid when *content* of a tag, not within an attribute.
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
