"use strict";

/*
  NOT a general purpose escaper! Only valid when *content* of a tag, not within an attribute.
 */
function escape(code) {
    return code
        .replace("&", "&amp;", "g")
        .replace("<", "&lt;", "g")
        .replace(">", "&gt;", "g");
}

function lowlight(lang, lexer, code) {
    var ret = "";
    var lex = lexer.CeylonLexer(lexer.StringCharacterStream(code));
    var cur;
    while ((cur = lex.nextToken()) != null) {
        ret += "<span class=\"";
        ret += cur.type.string;
        ret += "\">";
        ret += escape(cur.text);
        ret += "</span>";
    }
    return ret;
}
