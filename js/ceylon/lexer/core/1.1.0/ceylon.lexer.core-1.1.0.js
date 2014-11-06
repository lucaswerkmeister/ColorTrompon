(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/lexer/core/1.1.0/ceylon.lexer.core-1.1.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'ceylon.lexer.core/1.1.0');
var m$2=require('ceylon/collection/1.1.0/ceylon.collection-1.1.0');
m$1.$addmod$(m$2,'ceylon.collection/1.1.0');
function CharacterStream(characterStream$){
    CharacterSource(characterStream$);
    characterStream$.peek$defs$n=function($3){return 0;};
    characterStream$.consume$defs$count=function($4){return 1;};
}
CharacterStream.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:CharacterSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CharacterStream')];},d:['ceylon.lexer.core','CharacterStream']};};
ex$.CharacterStream=CharacterStream;
function $init$CharacterStream(){
    if(CharacterStream.$$===undefined){
        m$1.initTypeProtoI(CharacterStream,'ceylon.lexer.core::CharacterStream',$init$CharacterSource());
        (function(characterStream$){
            characterStream$.peek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:CharacterStream,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CharacterStream:$m:peek')];},d:['ceylon.lexer.core','CharacterStream','$m','peek']};}};characterStream$.consume={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:CharacterStream,pa:5,an:function(){return[m$1.doc("Consume [[count]] characters.")];},d:['ceylon.lexer.core','CharacterStream','$m','consume']};}};characterStream$.nextCharacter=function(){
                var characterStream$=this;
                var $5=characterStream$.peek();
                characterStream$.consume();
                return $5;
            };characterStream$.nextCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:CharacterStream,pa:11,d:['ceylon.lexer.core','CharacterStream','$m','nextCharacter']};};
        })(CharacterStream.$$.prototype);
    }
    return CharacterStream;
}
ex$.$init$CharacterStream=$init$CharacterStream;
$init$CharacterStream();
function TokenType(string,tokenType$){
    $init$TokenType();
    if(tokenType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::TokenType"),'?','?')
    tokenType$.string_=string;
    tokenType$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TokenType,pa:3,d:['ceylon.lexer.core','TokenType','$at','string']};}};
    tokenType$.$prop$getString.get=function(){return string};
    return tokenType$;
}
TokenType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String},pa:3}],of:[{t:IgnoredType},{t:IdentifierType},{t:LiteralType},{t:KeywordType},{t:SymbolType},{t:ErrorType}],pa:257,d:['ceylon.lexer.core','TokenType']};};
ex$.TokenType=TokenType;
function $init$TokenType(){
    if(TokenType.$$===undefined){
        m$1.initTypeProto(TokenType,'ceylon.lexer.core::TokenType',m$1.Basic);
        (function(tokenType$){
            m$1.atr$(tokenType$,'string',function(){return this.string_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TokenType,pa:3,d:['ceylon.lexer.core','TokenType','$at','string']};});
        })(TokenType.$$.prototype);
    }
    return TokenType;
}
ex$.$init$TokenType=$init$TokenType;
$init$TokenType();
function IgnoredType($6,ignoredType$){
    $init$IgnoredType();
    if(ignoredType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::IgnoredType"),'?','?')
    ignoredType$.$6_=$6;
    TokenType(ignoredType$.$6,ignoredType$);
    return ignoredType$;
}
IgnoredType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getWhitespace,$prop$getLineComment,$prop$getMultiComment],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:IgnoredType')];},d:['ceylon.lexer.core','IgnoredType']};};
ex$.IgnoredType=IgnoredType;
function $init$IgnoredType(){
    if(IgnoredType.$$===undefined){
        m$1.initTypeProto(IgnoredType,'ceylon.lexer.core::IgnoredType',$init$TokenType());
        (function(ignoredType$){
            m$1.atr$(ignoredType$,'$6',function(){return this.$6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:IgnoredType,d:['ceylon.lexer.core','IgnoredType','$at','string$2f0pje']};});
        })(IgnoredType.$$.prototype);
    }
    return IgnoredType;
}
ex$.$init$IgnoredType=$init$IgnoredType;
$init$IgnoredType();
function $7(){
    var whitespace$=new $7.$$;IgnoredType("whitespace",whitespace$);
    return whitespace$;
};$7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IgnoredType},pa:1,an:function(){return[m$1.doc("Whitespace.")];},d:['ceylon.lexer.core','whitespace']};};
function $init$getWhitespace(){
    if($7.$$===undefined){
        m$1.initTypeProto($7,'ceylon.lexer.core::whitespace',$init$IgnoredType());
    }
    return $7;
}
ex$.$init$getWhitespace=$init$getWhitespace;
$init$getWhitespace();
var $8;
function getWhitespace(){
    if($8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'whitespace\' before it was set"),'11:0-12:60','TokenType.ceylon');
    if($8===undefined){$8=m$1.INIT$;$8=$init$getWhitespace()();$8.$crtmm$=getWhitespace.$crtmm$;}
    return $8;
}
ex$.getWhitespace=getWhitespace;
getWhitespace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$7},pa:1,an:function(){return[m$1.doc("Whitespace.")];},d:['ceylon.lexer.core','whitespace']};};
$prop$getWhitespace={get:getWhitespace,$crtmm$:getWhitespace.$crtmm$};
getWhitespace=getWhitespace;$prop$getWhitespace=getWhitespace;
ex$.$prop$getWhitespace=$prop$getWhitespace;
function $9(){
    var lineComment$=new $9.$$;IgnoredType("lineComment",lineComment$);
    return lineComment$;
};$9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IgnoredType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:lineComment')];},d:['ceylon.lexer.core','lineComment']};};
function $init$getLineComment(){
    if($9.$$===undefined){
        m$1.initTypeProto($9,'ceylon.lexer.core::lineComment',$init$IgnoredType());
    }
    return $9;
}
ex$.$init$getLineComment=$init$getLineComment;
$init$getLineComment();
var $a;
function getLineComment(){
    if($a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lineComment\' before it was set"),'14:0-18:62','TokenType.ceylon');
    if($a===undefined){$a=m$1.INIT$;$a=$init$getLineComment()();$a.$crtmm$=getLineComment.$crtmm$;}
    return $a;
}
ex$.getLineComment=getLineComment;
getLineComment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$9},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:lineComment')];},d:['ceylon.lexer.core','lineComment']};};
$prop$getLineComment={get:getLineComment,$crtmm$:getLineComment.$crtmm$};
getLineComment=getLineComment;$prop$getLineComment=getLineComment;
ex$.$prop$getLineComment=$prop$getLineComment;
function $b(){
    var multiComment$=new $b.$$;IgnoredType("multiComment",multiComment$);
    return multiComment$;
};$b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IgnoredType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:multiComment')];},d:['ceylon.lexer.core','multiComment']};};
function $init$getMultiComment(){
    if($b.$$===undefined){
        m$1.initTypeProto($b,'ceylon.lexer.core::multiComment',$init$IgnoredType());
    }
    return $b;
}
ex$.$init$getMultiComment=$init$getMultiComment;
$init$getMultiComment();
var $c;
function getMultiComment(){
    if($c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'multiComment\' before it was set"),'20:0-29:64','TokenType.ceylon');
    if($c===undefined){$c=m$1.INIT$;$c=$init$getMultiComment()();$c.$crtmm$=getMultiComment.$crtmm$;}
    return $c;
}
ex$.getMultiComment=getMultiComment;
getMultiComment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$b},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:multiComment')];},d:['ceylon.lexer.core','multiComment']};};
$prop$getMultiComment={get:getMultiComment,$crtmm$:getMultiComment.$crtmm$};
getMultiComment=getMultiComment;$prop$getMultiComment=getMultiComment;
ex$.$prop$getMultiComment=$prop$getMultiComment;
function IdentifierType($d,identifierType$){
    $init$IdentifierType();
    if(identifierType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::IdentifierType"),'?','?')
    identifierType$.$d_=$d;
    TokenType(identifierType$.$d,identifierType$);
    return identifierType$;
}
IdentifierType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getLidentifier,$prop$getUidentifier],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:IdentifierType')];},d:['ceylon.lexer.core','IdentifierType']};};
ex$.IdentifierType=IdentifierType;
function $init$IdentifierType(){
    if(IdentifierType.$$===undefined){
        m$1.initTypeProto(IdentifierType,'ceylon.lexer.core::IdentifierType',$init$TokenType());
        (function(identifierType$){
            m$1.atr$(identifierType$,'$d',function(){return this.$d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:IdentifierType,d:['ceylon.lexer.core','IdentifierType','$at','string$1atccb']};});
        })(IdentifierType.$$.prototype);
    }
    return IdentifierType;
}
ex$.$init$IdentifierType=$init$IdentifierType;
$init$IdentifierType();
function $e(){
    var lidentifier$=new $e.$$;IdentifierType("lidentifier",lidentifier$);
    return lidentifier$;
};$e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IdentifierType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:lidentifier')];},d:['ceylon.lexer.core','lidentifier']};};
function $init$getLidentifier(){
    if($e.$$===undefined){
        m$1.initTypeProto($e,'ceylon.lexer.core::lidentifier',$init$IdentifierType());
    }
    return $e;
}
ex$.$init$getLidentifier=$init$getLidentifier;
$init$getLidentifier();
var $f;
function getLidentifier(){
    if($f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lidentifier\' before it was set"),'39:0-43:65','TokenType.ceylon');
    if($f===undefined){$f=m$1.INIT$;$f=$init$getLidentifier()();$f.$crtmm$=getLidentifier.$crtmm$;}
    return $f;
}
ex$.getLidentifier=getLidentifier;
getLidentifier.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$e},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:lidentifier')];},d:['ceylon.lexer.core','lidentifier']};};
$prop$getLidentifier={get:getLidentifier,$crtmm$:getLidentifier.$crtmm$};
getLidentifier=getLidentifier;$prop$getLidentifier=getLidentifier;
ex$.$prop$getLidentifier=$prop$getLidentifier;
function $g(){
    var uidentifier$=new $g.$$;IdentifierType("uidentifier",uidentifier$);
    return uidentifier$;
};$g.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IdentifierType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:uidentifier')];},d:['ceylon.lexer.core','uidentifier']};};
function $init$getUidentifier(){
    if($g.$$===undefined){
        m$1.initTypeProto($g,'ceylon.lexer.core::uidentifier',$init$IdentifierType());
    }
    return $g;
}
ex$.$init$getUidentifier=$init$getUidentifier;
$init$getUidentifier();
var $h;
function getUidentifier(){
    if($h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'uidentifier\' before it was set"),'45:0-49:65','TokenType.ceylon');
    if($h===undefined){$h=m$1.INIT$;$h=$init$getUidentifier()();$h.$crtmm$=getUidentifier.$crtmm$;}
    return $h;
}
ex$.getUidentifier=getUidentifier;
getUidentifier.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$g},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:uidentifier')];},d:['ceylon.lexer.core','uidentifier']};};
$prop$getUidentifier={get:getUidentifier,$crtmm$:getUidentifier.$crtmm$};
getUidentifier=getUidentifier;$prop$getUidentifier=getUidentifier;
ex$.$prop$getUidentifier=$prop$getUidentifier;
function LiteralType($i,literalType$){
    $init$LiteralType();
    if(literalType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::LiteralType"),'?','?')
    literalType$.$i_=$i;
    TokenType(literalType$.$i,literalType$);
    return literalType$;
}
LiteralType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getCharacterLiteral,{t:StringLiteralType},{t:NumericLiteralType}],pa:257,an:function(){return[m$1.doc("A literal value token.")];},d:['ceylon.lexer.core','LiteralType']};};
ex$.LiteralType=LiteralType;
function $init$LiteralType(){
    if(LiteralType.$$===undefined){
        m$1.initTypeProto(LiteralType,'ceylon.lexer.core::LiteralType',$init$TokenType());
        (function(literalType$){
            m$1.atr$(literalType$,'$i',function(){return this.$i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:LiteralType,d:['ceylon.lexer.core','LiteralType','$at','string$8l5gzp']};});
        })(LiteralType.$$.prototype);
    }
    return LiteralType;
}
ex$.$init$LiteralType=$init$LiteralType;
$init$LiteralType();
function StringLiteralType($j,stringLiteralType$){
    $init$StringLiteralType();
    if(stringLiteralType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::StringLiteralType"),'?','?')
    stringLiteralType$.$j_=$j;
    LiteralType(stringLiteralType$.$j,stringLiteralType$);
    return stringLiteralType$;
}
StringLiteralType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LiteralType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getStringLiteral,$prop$getVerbatimStringLiteral,$prop$getStringStart,$prop$getStringMid,$prop$getStringEnd],pa:257,d:['ceylon.lexer.core','StringLiteralType']};};
ex$.StringLiteralType=StringLiteralType;
function $init$StringLiteralType(){
    if(StringLiteralType.$$===undefined){
        m$1.initTypeProto(StringLiteralType,'ceylon.lexer.core::StringLiteralType',$init$LiteralType());
        (function(stringLiteralType$){
            m$1.atr$(stringLiteralType$,'$j',function(){return this.$j_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringLiteralType,d:['ceylon.lexer.core','StringLiteralType','$at','string$mhtsbm']};});
        })(StringLiteralType.$$.prototype);
    }
    return StringLiteralType;
}
ex$.$init$StringLiteralType=$init$StringLiteralType;
$init$StringLiteralType();
function $k(){
    var stringLiteral$=new $k.$$;StringLiteralType("stringLiteral",stringLiteral$);
    return stringLiteral$;
};$k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StringLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringLiteral')];},d:['ceylon.lexer.core','stringLiteral']};};
function $init$getStringLiteral(){
    if($k.$$===undefined){
        m$1.initTypeProto($k,'ceylon.lexer.core::stringLiteral',$init$StringLiteralType());
    }
    return $k;
}
ex$.$init$getStringLiteral=$init$getStringLiteral;
$init$getStringLiteral();
var $l;
function getStringLiteral(){
    if($l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'stringLiteral\' before it was set"),'60:0-64:72','TokenType.ceylon');
    if($l===undefined){$l=m$1.INIT$;$l=$init$getStringLiteral()();$l.$crtmm$=getStringLiteral.$crtmm$;}
    return $l;
}
ex$.getStringLiteral=getStringLiteral;
getStringLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$k},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringLiteral')];},d:['ceylon.lexer.core','stringLiteral']};};
$prop$getStringLiteral={get:getStringLiteral,$crtmm$:getStringLiteral.$crtmm$};
getStringLiteral=getStringLiteral;$prop$getStringLiteral=getStringLiteral;
ex$.$prop$getStringLiteral=$prop$getStringLiteral;
function $m(){
    var verbatimStringLiteral$=new $m.$$;StringLiteralType("verbatimStringLiteral",verbatimStringLiteral$);
    return verbatimStringLiteral$;
};$m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StringLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:verbatimStringLiteral')];},d:['ceylon.lexer.core','verbatimStringLiteral']};};
function $init$getVerbatimStringLiteral(){
    if($m.$$===undefined){
        m$1.initTypeProto($m,'ceylon.lexer.core::verbatimStringLiteral',$init$StringLiteralType());
    }
    return $m;
}
ex$.$init$getVerbatimStringLiteral=$init$getVerbatimStringLiteral;
$init$getVerbatimStringLiteral();
var $n;
function getVerbatimStringLiteral(){
    if($n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'verbatimStringLiteral\' before it was set"),'66:0-69:88','TokenType.ceylon');
    if($n===undefined){$n=m$1.INIT$;$n=$init$getVerbatimStringLiteral()();$n.$crtmm$=getVerbatimStringLiteral.$crtmm$;}
    return $n;
}
ex$.getVerbatimStringLiteral=getVerbatimStringLiteral;
getVerbatimStringLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$m},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:verbatimStringLiteral')];},d:['ceylon.lexer.core','verbatimStringLiteral']};};
$prop$getVerbatimStringLiteral={get:getVerbatimStringLiteral,$crtmm$:getVerbatimStringLiteral.$crtmm$};
getVerbatimStringLiteral=getVerbatimStringLiteral;$prop$getVerbatimStringLiteral=getVerbatimStringLiteral;
ex$.$prop$getVerbatimStringLiteral=$prop$getVerbatimStringLiteral;
function $o(){
    var stringStart$=new $o.$$;StringLiteralType("stringStart",stringStart$);
    return stringStart$;
};$o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StringLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringStart')];},d:['ceylon.lexer.core','stringStart']};};
function $init$getStringStart(){
    if($o.$$===undefined){
        m$1.initTypeProto($o,'ceylon.lexer.core::stringStart',$init$StringLiteralType());
    }
    return $o;
}
ex$.$init$getStringStart=$init$getStringStart;
$init$getStringStart();
var $p;
function getStringStart(){
    if($p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'stringStart\' before it was set"),'71:0-75:68','TokenType.ceylon');
    if($p===undefined){$p=m$1.INIT$;$p=$init$getStringStart()();$p.$crtmm$=getStringStart.$crtmm$;}
    return $p;
}
ex$.getStringStart=getStringStart;
getStringStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$o},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringStart')];},d:['ceylon.lexer.core','stringStart']};};
$prop$getStringStart={get:getStringStart,$crtmm$:getStringStart.$crtmm$};
getStringStart=getStringStart;$prop$getStringStart=getStringStart;
ex$.$prop$getStringStart=$prop$getStringStart;
function $q(){
    var stringMid$=new $q.$$;StringLiteralType("stringMid",stringMid$);
    return stringMid$;
};$q.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StringLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringMid')];},d:['ceylon.lexer.core','stringMid']};};
function $init$getStringMid(){
    if($q.$$===undefined){
        m$1.initTypeProto($q,'ceylon.lexer.core::stringMid',$init$StringLiteralType());
    }
    return $q;
}
ex$.$init$getStringMid=$init$getStringMid;
$init$getStringMid();
var $r;
function getStringMid(){
    if($r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'stringMid\' before it was set"),'77:0-81:64','TokenType.ceylon');
    if($r===undefined){$r=m$1.INIT$;$r=$init$getStringMid()();$r.$crtmm$=getStringMid.$crtmm$;}
    return $r;
}
ex$.getStringMid=getStringMid;
getStringMid.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$q},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringMid')];},d:['ceylon.lexer.core','stringMid']};};
$prop$getStringMid={get:getStringMid,$crtmm$:getStringMid.$crtmm$};
getStringMid=getStringMid;$prop$getStringMid=getStringMid;
ex$.$prop$getStringMid=$prop$getStringMid;
function $s(){
    var stringEnd$=new $s.$$;StringLiteralType("stringEnd",stringEnd$);
    return stringEnd$;
};$s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StringLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringEnd')];},d:['ceylon.lexer.core','stringEnd']};};
function $init$getStringEnd(){
    if($s.$$===undefined){
        m$1.initTypeProto($s,'ceylon.lexer.core::stringEnd',$init$StringLiteralType());
    }
    return $s;
}
ex$.$init$getStringEnd=$init$getStringEnd;
$init$getStringEnd();
var $t;
function getStringEnd(){
    if($t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'stringEnd\' before it was set"),'83:0-87:64','TokenType.ceylon');
    if($t===undefined){$t=m$1.INIT$;$t=$init$getStringEnd()();$t.$crtmm$=getStringEnd.$crtmm$;}
    return $t;
}
ex$.getStringEnd=getStringEnd;
getStringEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$s},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:stringEnd')];},d:['ceylon.lexer.core','stringEnd']};};
$prop$getStringEnd={get:getStringEnd,$crtmm$:getStringEnd.$crtmm$};
getStringEnd=getStringEnd;$prop$getStringEnd=getStringEnd;
ex$.$prop$getStringEnd=$prop$getStringEnd;
function $u(){
    var characterLiteral$=new $u.$$;LiteralType("characterLiteral",characterLiteral$);
    return characterLiteral$;
};$u.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:characterLiteral')];},d:['ceylon.lexer.core','characterLiteral']};};
function $init$getCharacterLiteral(){
    if($u.$$===undefined){
        m$1.initTypeProto($u,'ceylon.lexer.core::characterLiteral',$init$LiteralType());
    }
    return $u;
}
ex$.$init$getCharacterLiteral=$init$getCharacterLiteral;
$init$getCharacterLiteral();
var $v;
function getCharacterLiteral(){
    if($v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'characterLiteral\' before it was set"),'89:0-93:72','TokenType.ceylon');
    if($v===undefined){$v=m$1.INIT$;$v=$init$getCharacterLiteral()();$v.$crtmm$=getCharacterLiteral.$crtmm$;}
    return $v;
}
ex$.getCharacterLiteral=getCharacterLiteral;
getCharacterLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$u},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:characterLiteral')];},d:['ceylon.lexer.core','characterLiteral']};};
$prop$getCharacterLiteral={get:getCharacterLiteral,$crtmm$:getCharacterLiteral.$crtmm$};
getCharacterLiteral=getCharacterLiteral;$prop$getCharacterLiteral=getCharacterLiteral;
ex$.$prop$getCharacterLiteral=$prop$getCharacterLiteral;
function NumericLiteralType($w,numericLiteralType$){
    $init$NumericLiteralType();
    if(numericLiteralType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::NumericLiteralType"),'?','?')
    numericLiteralType$.$w_=$w;
    LiteralType(numericLiteralType$.$w,numericLiteralType$);
    return numericLiteralType$;
}
NumericLiteralType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LiteralType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getFloatLiteral,{t:IntegerLiteralType}],pa:257,an:function(){return[m$1.doc("A numeric literal.")];},d:['ceylon.lexer.core','NumericLiteralType']};};
ex$.NumericLiteralType=NumericLiteralType;
function $init$NumericLiteralType(){
    if(NumericLiteralType.$$===undefined){
        m$1.initTypeProto(NumericLiteralType,'ceylon.lexer.core::NumericLiteralType',$init$LiteralType());
        (function(numericLiteralType$){
            m$1.atr$(numericLiteralType$,'$w',function(){return this.$w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:NumericLiteralType,d:['ceylon.lexer.core','NumericLiteralType','$at','string$vt2pa2']};});
        })(NumericLiteralType.$$.prototype);
    }
    return NumericLiteralType;
}
ex$.$init$NumericLiteralType=$init$NumericLiteralType;
$init$NumericLiteralType();
function IntegerLiteralType($x,integerLiteralType$){
    $init$IntegerLiteralType();
    if(integerLiteralType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::IntegerLiteralType"),'?','?')
    integerLiteralType$.$x_=$x;
    NumericLiteralType(integerLiteralType$.$x,integerLiteralType$);
    return integerLiteralType$;
}
IntegerLiteralType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NumericLiteralType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getDecimalLiteral,$prop$getHexLiteral,$prop$getBinaryLiteral],pa:257,an:function(){return[m$1.doc("An integer literal.")];},d:['ceylon.lexer.core','IntegerLiteralType']};};
ex$.IntegerLiteralType=IntegerLiteralType;
function $init$IntegerLiteralType(){
    if(IntegerLiteralType.$$===undefined){
        m$1.initTypeProto(IntegerLiteralType,'ceylon.lexer.core::IntegerLiteralType',$init$NumericLiteralType());
        (function(integerLiteralType$){
            m$1.atr$(integerLiteralType$,'$x',function(){return this.$x_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:IntegerLiteralType,d:['ceylon.lexer.core','IntegerLiteralType','$at','string$pe7xjn']};});
        })(IntegerLiteralType.$$.prototype);
    }
    return IntegerLiteralType;
}
ex$.$init$IntegerLiteralType=$init$IntegerLiteralType;
$init$IntegerLiteralType();
function $y(){
    var decimalLiteral$=new $y.$$;IntegerLiteralType("decimalLiteral",decimalLiteral$);
    return decimalLiteral$;
};$y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IntegerLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:decimalLiteral')];},d:['ceylon.lexer.core','decimalLiteral']};};
function $init$getDecimalLiteral(){
    if($y.$$===undefined){
        m$1.initTypeProto($y,'ceylon.lexer.core::decimalLiteral',$init$IntegerLiteralType());
    }
    return $y;
}
ex$.$init$getDecimalLiteral=$init$getDecimalLiteral;
$init$getDecimalLiteral();
var $z;
function getDecimalLiteral(){
    if($z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'decimalLiteral\' before it was set"),'105:0-109:75','TokenType.ceylon');
    if($z===undefined){$z=m$1.INIT$;$z=$init$getDecimalLiteral()();$z.$crtmm$=getDecimalLiteral.$crtmm$;}
    return $z;
}
ex$.getDecimalLiteral=getDecimalLiteral;
getDecimalLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$y},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:decimalLiteral')];},d:['ceylon.lexer.core','decimalLiteral']};};
$prop$getDecimalLiteral={get:getDecimalLiteral,$crtmm$:getDecimalLiteral.$crtmm$};
getDecimalLiteral=getDecimalLiteral;$prop$getDecimalLiteral=getDecimalLiteral;
ex$.$prop$getDecimalLiteral=$prop$getDecimalLiteral;
function $10(){
    var hexLiteral$=new $10.$$;IntegerLiteralType("hexLiteral",hexLiteral$);
    return hexLiteral$;
};$10.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IntegerLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:hexLiteral')];},d:['ceylon.lexer.core','hexLiteral']};};
function $init$getHexLiteral(){
    if($10.$$===undefined){
        m$1.initTypeProto($10,'ceylon.lexer.core::hexLiteral',$init$IntegerLiteralType());
    }
    return $10;
}
ex$.$init$getHexLiteral=$init$getHexLiteral;
$init$getHexLiteral();
var $11;
function getHexLiteral(){
    if($11===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hexLiteral\' before it was set"),'111:0-114:67','TokenType.ceylon');
    if($11===undefined){$11=m$1.INIT$;$11=$init$getHexLiteral()();$11.$crtmm$=getHexLiteral.$crtmm$;}
    return $11;
}
ex$.getHexLiteral=getHexLiteral;
getHexLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$10},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:hexLiteral')];},d:['ceylon.lexer.core','hexLiteral']};};
$prop$getHexLiteral={get:getHexLiteral,$crtmm$:getHexLiteral.$crtmm$};
getHexLiteral=getHexLiteral;$prop$getHexLiteral=getHexLiteral;
ex$.$prop$getHexLiteral=$prop$getHexLiteral;
function $12(){
    var binaryLiteral$=new $12.$$;IntegerLiteralType("binaryLiteral",binaryLiteral$);
    return binaryLiteral$;
};$12.$crtmm$=function(){return{mod:$CCMM$,'super':{t:IntegerLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:binaryLiteral')];},d:['ceylon.lexer.core','binaryLiteral']};};
function $init$getBinaryLiteral(){
    if($12.$$===undefined){
        m$1.initTypeProto($12,'ceylon.lexer.core::binaryLiteral',$init$IntegerLiteralType());
    }
    return $12;
}
ex$.$init$getBinaryLiteral=$init$getBinaryLiteral;
$init$getBinaryLiteral();
var $13;
function getBinaryLiteral(){
    if($13===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'binaryLiteral\' before it was set"),'116:0-119:73','TokenType.ceylon');
    if($13===undefined){$13=m$1.INIT$;$13=$init$getBinaryLiteral()();$13.$crtmm$=getBinaryLiteral.$crtmm$;}
    return $13;
}
ex$.getBinaryLiteral=getBinaryLiteral;
getBinaryLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$12},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:binaryLiteral')];},d:['ceylon.lexer.core','binaryLiteral']};};
$prop$getBinaryLiteral={get:getBinaryLiteral,$crtmm$:getBinaryLiteral.$crtmm$};
getBinaryLiteral=getBinaryLiteral;$prop$getBinaryLiteral=getBinaryLiteral;
ex$.$prop$getBinaryLiteral=$prop$getBinaryLiteral;
function $14(){
    var floatLiteral$=new $14.$$;NumericLiteralType("floatLiteral",floatLiteral$);
    return floatLiteral$;
};$14.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NumericLiteralType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:floatLiteral')];},d:['ceylon.lexer.core','floatLiteral']};};
function $init$getFloatLiteral(){
    if($14.$$===undefined){
        m$1.initTypeProto($14,'ceylon.lexer.core::floatLiteral',$init$NumericLiteralType());
    }
    return $14;
}
ex$.$init$getFloatLiteral=$init$getFloatLiteral;
$init$getFloatLiteral();
var $15;
function getFloatLiteral(){
    if($15===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'floatLiteral\' before it was set"),'121:0-126:71','TokenType.ceylon');
    if($15===undefined){$15=m$1.INIT$;$15=$init$getFloatLiteral()();$15.$crtmm$=getFloatLiteral.$crtmm$;}
    return $15;
}
ex$.getFloatLiteral=getFloatLiteral;
getFloatLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$14},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:floatLiteral')];},d:['ceylon.lexer.core','floatLiteral']};};
$prop$getFloatLiteral={get:getFloatLiteral,$crtmm$:getFloatLiteral.$crtmm$};
getFloatLiteral=getFloatLiteral;$prop$getFloatLiteral=getFloatLiteral;
ex$.$prop$getFloatLiteral=$prop$getFloatLiteral;
function KeywordType($16,keywordType$){
    $init$KeywordType();
    if(keywordType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::KeywordType"),'?','?')
    keywordType$.$16_=$16;
    TokenType(keywordType$.$16,keywordType$);
    return keywordType$;
}
KeywordType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getAssemblyKw,$prop$getModuleKw,$prop$getPackageKw,$prop$getImportKw,$prop$getAliasKw,$prop$getClassKw,$prop$getInterfaceKw,$prop$getObjectKw,$prop$getGivenKw,$prop$getValueKw,$prop$getAssignKw,$prop$getVoidKw,$prop$getFunctionKw,$prop$getNewKw,$prop$getOfKw,$prop$getExtendsKw,$prop$getSatisfiesKw,$prop$getAbstractsKw,$prop$getInKw,$prop$getOutKw,$prop$getReturnKw,$prop$getBreakKw,$prop$getContinueKw,$prop$getThrowKw,$prop$getAssertKw,$prop$getDynamicKw,$prop$getIfKw,$prop$getElseKw,$prop$getSwitchKw,$prop$getCaseKw,$prop$getForKw,$prop$getWhileKw,$prop$getTryKw,$prop$getCatchKw,$prop$getFinallyKw,$prop$getThenKw,$prop$getLetKw,$prop$getThisKw,$prop$getOuterKw,$prop$getSuperKw,$prop$getIsKw,$prop$getExistsKw,$prop$getNonemptyKw],pa:257,an:function(){return[m$1.doc("A keyword.")];},d:['ceylon.lexer.core','KeywordType']};};
ex$.KeywordType=KeywordType;
function $init$KeywordType(){
    if(KeywordType.$$===undefined){
        m$1.initTypeProto(KeywordType,'ceylon.lexer.core::KeywordType',$init$TokenType());
        (function(keywordType$){
            m$1.atr$(keywordType$,'$16',function(){return this.$16_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:KeywordType,d:['ceylon.lexer.core','KeywordType','$at','string$ddhj97']};});
        })(KeywordType.$$.prototype);
    }
    return KeywordType;
}
ex$.$init$KeywordType=$init$KeywordType;
$init$KeywordType();
function $17(){
    var assemblyKw$=new $17.$$;KeywordType("assemblyKw",assemblyKw$);
    return assemblyKw$;
};$17.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`assembly`’ keyword.")];},d:['ceylon.lexer.core','assemblyKw']};};
function $init$getAssemblyKw(){
    if($17.$$===undefined){
        m$1.initTypeProto($17,'ceylon.lexer.core::assemblyKw',$init$KeywordType());
    }
    return $17;
}
ex$.$init$getAssemblyKw=$init$getAssemblyKw;
$init$getAssemblyKw();
var $18;
function getAssemblyKw(){
    if($18===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'assemblyKw\' before it was set"),'139:0-140:60','TokenType.ceylon');
    if($18===undefined){$18=m$1.INIT$;$18=$init$getAssemblyKw()();$18.$crtmm$=getAssemblyKw.$crtmm$;}
    return $18;
}
ex$.getAssemblyKw=getAssemblyKw;
getAssemblyKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$17},pa:1,an:function(){return[m$1.doc("The ‘`assembly`’ keyword.")];},d:['ceylon.lexer.core','assemblyKw']};};
$prop$getAssemblyKw={get:getAssemblyKw,$crtmm$:getAssemblyKw.$crtmm$};
getAssemblyKw=getAssemblyKw;$prop$getAssemblyKw=getAssemblyKw;
ex$.$prop$getAssemblyKw=$prop$getAssemblyKw;
function $19(){
    var moduleKw$=new $19.$$;KeywordType("moduleKw",moduleKw$);
    return moduleKw$;
};$19.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`module`’ keyword.")];},d:['ceylon.lexer.core','moduleKw']};};
function $init$getModuleKw(){
    if($19.$$===undefined){
        m$1.initTypeProto($19,'ceylon.lexer.core::moduleKw',$init$KeywordType());
    }
    return $19;
}
ex$.$init$getModuleKw=$init$getModuleKw;
$init$getModuleKw();
var $1a;
function getModuleKw(){
    if($1a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'moduleKw\' before it was set"),'142:0-143:56','TokenType.ceylon');
    if($1a===undefined){$1a=m$1.INIT$;$1a=$init$getModuleKw()();$1a.$crtmm$=getModuleKw.$crtmm$;}
    return $1a;
}
ex$.getModuleKw=getModuleKw;
getModuleKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$19},pa:1,an:function(){return[m$1.doc("The ‘`module`’ keyword.")];},d:['ceylon.lexer.core','moduleKw']};};
$prop$getModuleKw={get:getModuleKw,$crtmm$:getModuleKw.$crtmm$};
getModuleKw=getModuleKw;$prop$getModuleKw=getModuleKw;
ex$.$prop$getModuleKw=$prop$getModuleKw;
function $1b(){
    var packageKw$=new $1b.$$;KeywordType("packageKw",packageKw$);
    return packageKw$;
};$1b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`package`’ keyword.")];},d:['ceylon.lexer.core','packageKw']};};
function $init$getPackageKw(){
    if($1b.$$===undefined){
        m$1.initTypeProto($1b,'ceylon.lexer.core::packageKw',$init$KeywordType());
    }
    return $1b;
}
ex$.$init$getPackageKw=$init$getPackageKw;
$init$getPackageKw();
var $1c;
function getPackageKw(){
    if($1c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'packageKw\' before it was set"),'145:0-146:58','TokenType.ceylon');
    if($1c===undefined){$1c=m$1.INIT$;$1c=$init$getPackageKw()();$1c.$crtmm$=getPackageKw.$crtmm$;}
    return $1c;
}
ex$.getPackageKw=getPackageKw;
getPackageKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1b},pa:1,an:function(){return[m$1.doc("The ‘`package`’ keyword.")];},d:['ceylon.lexer.core','packageKw']};};
$prop$getPackageKw={get:getPackageKw,$crtmm$:getPackageKw.$crtmm$};
getPackageKw=getPackageKw;$prop$getPackageKw=getPackageKw;
ex$.$prop$getPackageKw=$prop$getPackageKw;
function $1d(){
    var importKw$=new $1d.$$;KeywordType("importKw",importKw$);
    return importKw$;
};$1d.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`import`’ keyword.")];},d:['ceylon.lexer.core','importKw']};};
function $init$getImportKw(){
    if($1d.$$===undefined){
        m$1.initTypeProto($1d,'ceylon.lexer.core::importKw',$init$KeywordType());
    }
    return $1d;
}
ex$.$init$getImportKw=$init$getImportKw;
$init$getImportKw();
var $1e;
function getImportKw(){
    if($1e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'importKw\' before it was set"),'148:0-149:56','TokenType.ceylon');
    if($1e===undefined){$1e=m$1.INIT$;$1e=$init$getImportKw()();$1e.$crtmm$=getImportKw.$crtmm$;}
    return $1e;
}
ex$.getImportKw=getImportKw;
getImportKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1d},pa:1,an:function(){return[m$1.doc("The ‘`import`’ keyword.")];},d:['ceylon.lexer.core','importKw']};};
$prop$getImportKw={get:getImportKw,$crtmm$:getImportKw.$crtmm$};
getImportKw=getImportKw;$prop$getImportKw=getImportKw;
ex$.$prop$getImportKw=$prop$getImportKw;
function $1f(){
    var aliasKw$=new $1f.$$;KeywordType("aliasKw",aliasKw$);
    return aliasKw$;
};$1f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`alias`’ keyword.")];},d:['ceylon.lexer.core','aliasKw']};};
function $init$getAliasKw(){
    if($1f.$$===undefined){
        m$1.initTypeProto($1f,'ceylon.lexer.core::aliasKw',$init$KeywordType());
    }
    return $1f;
}
ex$.$init$getAliasKw=$init$getAliasKw;
$init$getAliasKw();
var $1g;
function getAliasKw(){
    if($1g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'aliasKw\' before it was set"),'151:0-152:54','TokenType.ceylon');
    if($1g===undefined){$1g=m$1.INIT$;$1g=$init$getAliasKw()();$1g.$crtmm$=getAliasKw.$crtmm$;}
    return $1g;
}
ex$.getAliasKw=getAliasKw;
getAliasKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1f},pa:1,an:function(){return[m$1.doc("The ‘`alias`’ keyword.")];},d:['ceylon.lexer.core','aliasKw']};};
$prop$getAliasKw={get:getAliasKw,$crtmm$:getAliasKw.$crtmm$};
getAliasKw=getAliasKw;$prop$getAliasKw=getAliasKw;
ex$.$prop$getAliasKw=$prop$getAliasKw;
function $1h(){
    var classKw$=new $1h.$$;KeywordType("classKw",classKw$);
    return classKw$;
};$1h.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`class`’ keyword.")];},d:['ceylon.lexer.core','classKw']};};
function $init$getClassKw(){
    if($1h.$$===undefined){
        m$1.initTypeProto($1h,'ceylon.lexer.core::classKw',$init$KeywordType());
    }
    return $1h;
}
ex$.$init$getClassKw=$init$getClassKw;
$init$getClassKw();
var $1i;
function getClassKw(){
    if($1i===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'classKw\' before it was set"),'154:0-155:54','TokenType.ceylon');
    if($1i===undefined){$1i=m$1.INIT$;$1i=$init$getClassKw()();$1i.$crtmm$=getClassKw.$crtmm$;}
    return $1i;
}
ex$.getClassKw=getClassKw;
getClassKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1h},pa:1,an:function(){return[m$1.doc("The ‘`class`’ keyword.")];},d:['ceylon.lexer.core','classKw']};};
$prop$getClassKw={get:getClassKw,$crtmm$:getClassKw.$crtmm$};
getClassKw=getClassKw;$prop$getClassKw=getClassKw;
ex$.$prop$getClassKw=$prop$getClassKw;
function $1j(){
    var interfaceKw$=new $1j.$$;KeywordType("interfaceKw",interfaceKw$);
    return interfaceKw$;
};$1j.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`interface`’ keyword.")];},d:['ceylon.lexer.core','interfaceKw']};};
function $init$getInterfaceKw(){
    if($1j.$$===undefined){
        m$1.initTypeProto($1j,'ceylon.lexer.core::interfaceKw',$init$KeywordType());
    }
    return $1j;
}
ex$.$init$getInterfaceKw=$init$getInterfaceKw;
$init$getInterfaceKw();
var $1k;
function getInterfaceKw(){
    if($1k===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'interfaceKw\' before it was set"),'157:0-158:62','TokenType.ceylon');
    if($1k===undefined){$1k=m$1.INIT$;$1k=$init$getInterfaceKw()();$1k.$crtmm$=getInterfaceKw.$crtmm$;}
    return $1k;
}
ex$.getInterfaceKw=getInterfaceKw;
getInterfaceKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1j},pa:1,an:function(){return[m$1.doc("The ‘`interface`’ keyword.")];},d:['ceylon.lexer.core','interfaceKw']};};
$prop$getInterfaceKw={get:getInterfaceKw,$crtmm$:getInterfaceKw.$crtmm$};
getInterfaceKw=getInterfaceKw;$prop$getInterfaceKw=getInterfaceKw;
ex$.$prop$getInterfaceKw=$prop$getInterfaceKw;
function $1l(){
    var objectKw$=new $1l.$$;KeywordType("objectKw",objectKw$);
    return objectKw$;
};$1l.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`object`’ keyword.")];},d:['ceylon.lexer.core','objectKw']};};
function $init$getObjectKw(){
    if($1l.$$===undefined){
        m$1.initTypeProto($1l,'ceylon.lexer.core::objectKw',$init$KeywordType());
    }
    return $1l;
}
ex$.$init$getObjectKw=$init$getObjectKw;
$init$getObjectKw();
var $1m;
function getObjectKw(){
    if($1m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'objectKw\' before it was set"),'160:0-161:56','TokenType.ceylon');
    if($1m===undefined){$1m=m$1.INIT$;$1m=$init$getObjectKw()();$1m.$crtmm$=getObjectKw.$crtmm$;}
    return $1m;
}
ex$.getObjectKw=getObjectKw;
getObjectKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1l},pa:1,an:function(){return[m$1.doc("The ‘`object`’ keyword.")];},d:['ceylon.lexer.core','objectKw']};};
$prop$getObjectKw={get:getObjectKw,$crtmm$:getObjectKw.$crtmm$};
getObjectKw=getObjectKw;$prop$getObjectKw=getObjectKw;
ex$.$prop$getObjectKw=$prop$getObjectKw;
function $1n(){
    var givenKw$=new $1n.$$;KeywordType("givenKw",givenKw$);
    return givenKw$;
};$1n.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`given`’ keyword.")];},d:['ceylon.lexer.core','givenKw']};};
function $init$getGivenKw(){
    if($1n.$$===undefined){
        m$1.initTypeProto($1n,'ceylon.lexer.core::givenKw',$init$KeywordType());
    }
    return $1n;
}
ex$.$init$getGivenKw=$init$getGivenKw;
$init$getGivenKw();
var $1o;
function getGivenKw(){
    if($1o===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'givenKw\' before it was set"),'163:0-164:54','TokenType.ceylon');
    if($1o===undefined){$1o=m$1.INIT$;$1o=$init$getGivenKw()();$1o.$crtmm$=getGivenKw.$crtmm$;}
    return $1o;
}
ex$.getGivenKw=getGivenKw;
getGivenKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1n},pa:1,an:function(){return[m$1.doc("The ‘`given`’ keyword.")];},d:['ceylon.lexer.core','givenKw']};};
$prop$getGivenKw={get:getGivenKw,$crtmm$:getGivenKw.$crtmm$};
getGivenKw=getGivenKw;$prop$getGivenKw=getGivenKw;
ex$.$prop$getGivenKw=$prop$getGivenKw;
function $1p(){
    var valueKw$=new $1p.$$;KeywordType("valueKw",valueKw$);
    return valueKw$;
};$1p.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`value`’ keyword.")];},d:['ceylon.lexer.core','valueKw']};};
function $init$getValueKw(){
    if($1p.$$===undefined){
        m$1.initTypeProto($1p,'ceylon.lexer.core::valueKw',$init$KeywordType());
    }
    return $1p;
}
ex$.$init$getValueKw=$init$getValueKw;
$init$getValueKw();
var $1q;
function getValueKw(){
    if($1q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'valueKw\' before it was set"),'166:0-167:54','TokenType.ceylon');
    if($1q===undefined){$1q=m$1.INIT$;$1q=$init$getValueKw()();$1q.$crtmm$=getValueKw.$crtmm$;}
    return $1q;
}
ex$.getValueKw=getValueKw;
getValueKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1p},pa:1,an:function(){return[m$1.doc("The ‘`value`’ keyword.")];},d:['ceylon.lexer.core','valueKw']};};
$prop$getValueKw={get:getValueKw,$crtmm$:getValueKw.$crtmm$};
getValueKw=getValueKw;$prop$getValueKw=getValueKw;
ex$.$prop$getValueKw=$prop$getValueKw;
function $1r(){
    var assignKw$=new $1r.$$;KeywordType("assignKw",assignKw$);
    return assignKw$;
};$1r.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`assign`’ keyword.")];},d:['ceylon.lexer.core','assignKw']};};
function $init$getAssignKw(){
    if($1r.$$===undefined){
        m$1.initTypeProto($1r,'ceylon.lexer.core::assignKw',$init$KeywordType());
    }
    return $1r;
}
ex$.$init$getAssignKw=$init$getAssignKw;
$init$getAssignKw();
var $1s;
function getAssignKw(){
    if($1s===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'assignKw\' before it was set"),'169:0-170:56','TokenType.ceylon');
    if($1s===undefined){$1s=m$1.INIT$;$1s=$init$getAssignKw()();$1s.$crtmm$=getAssignKw.$crtmm$;}
    return $1s;
}
ex$.getAssignKw=getAssignKw;
getAssignKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1r},pa:1,an:function(){return[m$1.doc("The ‘`assign`’ keyword.")];},d:['ceylon.lexer.core','assignKw']};};
$prop$getAssignKw={get:getAssignKw,$crtmm$:getAssignKw.$crtmm$};
getAssignKw=getAssignKw;$prop$getAssignKw=getAssignKw;
ex$.$prop$getAssignKw=$prop$getAssignKw;
function $1t(){
    var voidKw$=new $1t.$$;KeywordType("voidKw",voidKw$);
    return voidKw$;
};$1t.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`void`’ keyword.")];},d:['ceylon.lexer.core','voidKw']};};
function $init$getVoidKw(){
    if($1t.$$===undefined){
        m$1.initTypeProto($1t,'ceylon.lexer.core::voidKw',$init$KeywordType());
    }
    return $1t;
}
ex$.$init$getVoidKw=$init$getVoidKw;
$init$getVoidKw();
var $1u;
function getVoidKw(){
    if($1u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'voidKw\' before it was set"),'172:0-173:52','TokenType.ceylon');
    if($1u===undefined){$1u=m$1.INIT$;$1u=$init$getVoidKw()();$1u.$crtmm$=getVoidKw.$crtmm$;}
    return $1u;
}
ex$.getVoidKw=getVoidKw;
getVoidKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1t},pa:1,an:function(){return[m$1.doc("The ‘`void`’ keyword.")];},d:['ceylon.lexer.core','voidKw']};};
$prop$getVoidKw={get:getVoidKw,$crtmm$:getVoidKw.$crtmm$};
getVoidKw=getVoidKw;$prop$getVoidKw=getVoidKw;
ex$.$prop$getVoidKw=$prop$getVoidKw;
function $1v(){
    var functionKw$=new $1v.$$;KeywordType("functionKw",functionKw$);
    return functionKw$;
};$1v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`function`’ keyword.")];},d:['ceylon.lexer.core','functionKw']};};
function $init$getFunctionKw(){
    if($1v.$$===undefined){
        m$1.initTypeProto($1v,'ceylon.lexer.core::functionKw',$init$KeywordType());
    }
    return $1v;
}
ex$.$init$getFunctionKw=$init$getFunctionKw;
$init$getFunctionKw();
var $1w;
function getFunctionKw(){
    if($1w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'functionKw\' before it was set"),'175:0-176:60','TokenType.ceylon');
    if($1w===undefined){$1w=m$1.INIT$;$1w=$init$getFunctionKw()();$1w.$crtmm$=getFunctionKw.$crtmm$;}
    return $1w;
}
ex$.getFunctionKw=getFunctionKw;
getFunctionKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1v},pa:1,an:function(){return[m$1.doc("The ‘`function`’ keyword.")];},d:['ceylon.lexer.core','functionKw']};};
$prop$getFunctionKw={get:getFunctionKw,$crtmm$:getFunctionKw.$crtmm$};
getFunctionKw=getFunctionKw;$prop$getFunctionKw=getFunctionKw;
ex$.$prop$getFunctionKw=$prop$getFunctionKw;
function $1x(){
    var newKw$=new $1x.$$;KeywordType("newKw",newKw$);
    return newKw$;
};$1x.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`new`’ keyword.")];},d:['ceylon.lexer.core','newKw']};};
function $init$getNewKw(){
    if($1x.$$===undefined){
        m$1.initTypeProto($1x,'ceylon.lexer.core::newKw',$init$KeywordType());
    }
    return $1x;
}
ex$.$init$getNewKw=$init$getNewKw;
$init$getNewKw();
var $1y;
function getNewKw(){
    if($1y===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'newKw\' before it was set"),'178:0-179:50','TokenType.ceylon');
    if($1y===undefined){$1y=m$1.INIT$;$1y=$init$getNewKw()();$1y.$crtmm$=getNewKw.$crtmm$;}
    return $1y;
}
ex$.getNewKw=getNewKw;
getNewKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1x},pa:1,an:function(){return[m$1.doc("The ‘`new`’ keyword.")];},d:['ceylon.lexer.core','newKw']};};
$prop$getNewKw={get:getNewKw,$crtmm$:getNewKw.$crtmm$};
getNewKw=getNewKw;$prop$getNewKw=getNewKw;
ex$.$prop$getNewKw=$prop$getNewKw;
function $1z(){
    var ofKw$=new $1z.$$;KeywordType("ofKw",ofKw$);
    return ofKw$;
};$1z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`of`’ keyword.")];},d:['ceylon.lexer.core','ofKw']};};
function $init$getOfKw(){
    if($1z.$$===undefined){
        m$1.initTypeProto($1z,'ceylon.lexer.core::ofKw',$init$KeywordType());
    }
    return $1z;
}
ex$.$init$getOfKw=$init$getOfKw;
$init$getOfKw();
var $20;
function getOfKw(){
    if($20===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ofKw\' before it was set"),'181:0-182:48','TokenType.ceylon');
    if($20===undefined){$20=m$1.INIT$;$20=$init$getOfKw()();$20.$crtmm$=getOfKw.$crtmm$;}
    return $20;
}
ex$.getOfKw=getOfKw;
getOfKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1z},pa:1,an:function(){return[m$1.doc("The ‘`of`’ keyword.")];},d:['ceylon.lexer.core','ofKw']};};
$prop$getOfKw={get:getOfKw,$crtmm$:getOfKw.$crtmm$};
getOfKw=getOfKw;$prop$getOfKw=getOfKw;
ex$.$prop$getOfKw=$prop$getOfKw;
function $21(){
    var extendsKw$=new $21.$$;KeywordType("extendsKw",extendsKw$);
    return extendsKw$;
};$21.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`extends`’ keyword.")];},d:['ceylon.lexer.core','extendsKw']};};
function $init$getExtendsKw(){
    if($21.$$===undefined){
        m$1.initTypeProto($21,'ceylon.lexer.core::extendsKw',$init$KeywordType());
    }
    return $21;
}
ex$.$init$getExtendsKw=$init$getExtendsKw;
$init$getExtendsKw();
var $22;
function getExtendsKw(){
    if($22===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'extendsKw\' before it was set"),'184:0-185:58','TokenType.ceylon');
    if($22===undefined){$22=m$1.INIT$;$22=$init$getExtendsKw()();$22.$crtmm$=getExtendsKw.$crtmm$;}
    return $22;
}
ex$.getExtendsKw=getExtendsKw;
getExtendsKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$21},pa:1,an:function(){return[m$1.doc("The ‘`extends`’ keyword.")];},d:['ceylon.lexer.core','extendsKw']};};
$prop$getExtendsKw={get:getExtendsKw,$crtmm$:getExtendsKw.$crtmm$};
getExtendsKw=getExtendsKw;$prop$getExtendsKw=getExtendsKw;
ex$.$prop$getExtendsKw=$prop$getExtendsKw;
function $23(){
    var satisfiesKw$=new $23.$$;KeywordType("satisfiesKw",satisfiesKw$);
    return satisfiesKw$;
};$23.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`satisfies`’ keyword.")];},d:['ceylon.lexer.core','satisfiesKw']};};
function $init$getSatisfiesKw(){
    if($23.$$===undefined){
        m$1.initTypeProto($23,'ceylon.lexer.core::satisfiesKw',$init$KeywordType());
    }
    return $23;
}
ex$.$init$getSatisfiesKw=$init$getSatisfiesKw;
$init$getSatisfiesKw();
var $24;
function getSatisfiesKw(){
    if($24===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'satisfiesKw\' before it was set"),'187:0-188:62','TokenType.ceylon');
    if($24===undefined){$24=m$1.INIT$;$24=$init$getSatisfiesKw()();$24.$crtmm$=getSatisfiesKw.$crtmm$;}
    return $24;
}
ex$.getSatisfiesKw=getSatisfiesKw;
getSatisfiesKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$23},pa:1,an:function(){return[m$1.doc("The ‘`satisfies`’ keyword.")];},d:['ceylon.lexer.core','satisfiesKw']};};
$prop$getSatisfiesKw={get:getSatisfiesKw,$crtmm$:getSatisfiesKw.$crtmm$};
getSatisfiesKw=getSatisfiesKw;$prop$getSatisfiesKw=getSatisfiesKw;
ex$.$prop$getSatisfiesKw=$prop$getSatisfiesKw;
function $25(){
    var abstractsKw$=new $25.$$;KeywordType("abstractsKw",abstractsKw$);
    return abstractsKw$;
};$25.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`abstracts`’ keyword.")];},d:['ceylon.lexer.core','abstractsKw']};};
function $init$getAbstractsKw(){
    if($25.$$===undefined){
        m$1.initTypeProto($25,'ceylon.lexer.core::abstractsKw',$init$KeywordType());
    }
    return $25;
}
ex$.$init$getAbstractsKw=$init$getAbstractsKw;
$init$getAbstractsKw();
var $26;
function getAbstractsKw(){
    if($26===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'abstractsKw\' before it was set"),'190:0-191:62','TokenType.ceylon');
    if($26===undefined){$26=m$1.INIT$;$26=$init$getAbstractsKw()();$26.$crtmm$=getAbstractsKw.$crtmm$;}
    return $26;
}
ex$.getAbstractsKw=getAbstractsKw;
getAbstractsKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$25},pa:1,an:function(){return[m$1.doc("The ‘`abstracts`’ keyword.")];},d:['ceylon.lexer.core','abstractsKw']};};
$prop$getAbstractsKw={get:getAbstractsKw,$crtmm$:getAbstractsKw.$crtmm$};
getAbstractsKw=getAbstractsKw;$prop$getAbstractsKw=getAbstractsKw;
ex$.$prop$getAbstractsKw=$prop$getAbstractsKw;
function $27(){
    var inKw$=new $27.$$;KeywordType("inKw",inKw$);
    return inKw$;
};$27.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`in`’ keyword.")];},d:['ceylon.lexer.core','inKw']};};
function $init$getInKw(){
    if($27.$$===undefined){
        m$1.initTypeProto($27,'ceylon.lexer.core::inKw',$init$KeywordType());
    }
    return $27;
}
ex$.$init$getInKw=$init$getInKw;
$init$getInKw();
var $28;
function getInKw(){
    if($28===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'inKw\' before it was set"),'193:0-194:48','TokenType.ceylon');
    if($28===undefined){$28=m$1.INIT$;$28=$init$getInKw()();$28.$crtmm$=getInKw.$crtmm$;}
    return $28;
}
ex$.getInKw=getInKw;
getInKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$27},pa:1,an:function(){return[m$1.doc("The ‘`in`’ keyword.")];},d:['ceylon.lexer.core','inKw']};};
$prop$getInKw={get:getInKw,$crtmm$:getInKw.$crtmm$};
getInKw=getInKw;$prop$getInKw=getInKw;
ex$.$prop$getInKw=$prop$getInKw;
function $29(){
    var outKw$=new $29.$$;KeywordType("outKw",outKw$);
    return outKw$;
};$29.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`out`’ keyword.")];},d:['ceylon.lexer.core','outKw']};};
function $init$getOutKw(){
    if($29.$$===undefined){
        m$1.initTypeProto($29,'ceylon.lexer.core::outKw',$init$KeywordType());
    }
    return $29;
}
ex$.$init$getOutKw=$init$getOutKw;
$init$getOutKw();
var $2a;
function getOutKw(){
    if($2a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'outKw\' before it was set"),'196:0-197:50','TokenType.ceylon');
    if($2a===undefined){$2a=m$1.INIT$;$2a=$init$getOutKw()();$2a.$crtmm$=getOutKw.$crtmm$;}
    return $2a;
}
ex$.getOutKw=getOutKw;
getOutKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$29},pa:1,an:function(){return[m$1.doc("The ‘`out`’ keyword.")];},d:['ceylon.lexer.core','outKw']};};
$prop$getOutKw={get:getOutKw,$crtmm$:getOutKw.$crtmm$};
getOutKw=getOutKw;$prop$getOutKw=getOutKw;
ex$.$prop$getOutKw=$prop$getOutKw;
function $2b(){
    var returnKw$=new $2b.$$;KeywordType("returnKw",returnKw$);
    return returnKw$;
};$2b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`return`’ keyword.")];},d:['ceylon.lexer.core','returnKw']};};
function $init$getReturnKw(){
    if($2b.$$===undefined){
        m$1.initTypeProto($2b,'ceylon.lexer.core::returnKw',$init$KeywordType());
    }
    return $2b;
}
ex$.$init$getReturnKw=$init$getReturnKw;
$init$getReturnKw();
var $2c;
function getReturnKw(){
    if($2c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'returnKw\' before it was set"),'199:0-200:56','TokenType.ceylon');
    if($2c===undefined){$2c=m$1.INIT$;$2c=$init$getReturnKw()();$2c.$crtmm$=getReturnKw.$crtmm$;}
    return $2c;
}
ex$.getReturnKw=getReturnKw;
getReturnKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2b},pa:1,an:function(){return[m$1.doc("The ‘`return`’ keyword.")];},d:['ceylon.lexer.core','returnKw']};};
$prop$getReturnKw={get:getReturnKw,$crtmm$:getReturnKw.$crtmm$};
getReturnKw=getReturnKw;$prop$getReturnKw=getReturnKw;
ex$.$prop$getReturnKw=$prop$getReturnKw;
function $2d(){
    var breakKw$=new $2d.$$;KeywordType("breakKw",breakKw$);
    return breakKw$;
};$2d.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`break`’ keyword.")];},d:['ceylon.lexer.core','breakKw']};};
function $init$getBreakKw(){
    if($2d.$$===undefined){
        m$1.initTypeProto($2d,'ceylon.lexer.core::breakKw',$init$KeywordType());
    }
    return $2d;
}
ex$.$init$getBreakKw=$init$getBreakKw;
$init$getBreakKw();
var $2e;
function getBreakKw(){
    if($2e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'breakKw\' before it was set"),'202:0-203:54','TokenType.ceylon');
    if($2e===undefined){$2e=m$1.INIT$;$2e=$init$getBreakKw()();$2e.$crtmm$=getBreakKw.$crtmm$;}
    return $2e;
}
ex$.getBreakKw=getBreakKw;
getBreakKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2d},pa:1,an:function(){return[m$1.doc("The ‘`break`’ keyword.")];},d:['ceylon.lexer.core','breakKw']};};
$prop$getBreakKw={get:getBreakKw,$crtmm$:getBreakKw.$crtmm$};
getBreakKw=getBreakKw;$prop$getBreakKw=getBreakKw;
ex$.$prop$getBreakKw=$prop$getBreakKw;
function $2f(){
    var continueKw$=new $2f.$$;KeywordType("continueKw",continueKw$);
    return continueKw$;
};$2f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`continue`’ keyword.")];},d:['ceylon.lexer.core','continueKw']};};
function $init$getContinueKw(){
    if($2f.$$===undefined){
        m$1.initTypeProto($2f,'ceylon.lexer.core::continueKw',$init$KeywordType());
    }
    return $2f;
}
ex$.$init$getContinueKw=$init$getContinueKw;
$init$getContinueKw();
var $2g;
function getContinueKw(){
    if($2g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'continueKw\' before it was set"),'205:0-206:60','TokenType.ceylon');
    if($2g===undefined){$2g=m$1.INIT$;$2g=$init$getContinueKw()();$2g.$crtmm$=getContinueKw.$crtmm$;}
    return $2g;
}
ex$.getContinueKw=getContinueKw;
getContinueKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2f},pa:1,an:function(){return[m$1.doc("The ‘`continue`’ keyword.")];},d:['ceylon.lexer.core','continueKw']};};
$prop$getContinueKw={get:getContinueKw,$crtmm$:getContinueKw.$crtmm$};
getContinueKw=getContinueKw;$prop$getContinueKw=getContinueKw;
ex$.$prop$getContinueKw=$prop$getContinueKw;
function $2h(){
    var throwKw$=new $2h.$$;KeywordType("throwKw",throwKw$);
    return throwKw$;
};$2h.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`throw`’ keyword.")];},d:['ceylon.lexer.core','throwKw']};};
function $init$getThrowKw(){
    if($2h.$$===undefined){
        m$1.initTypeProto($2h,'ceylon.lexer.core::throwKw',$init$KeywordType());
    }
    return $2h;
}
ex$.$init$getThrowKw=$init$getThrowKw;
$init$getThrowKw();
var $2i;
function getThrowKw(){
    if($2i===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'throwKw\' before it was set"),'208:0-209:54','TokenType.ceylon');
    if($2i===undefined){$2i=m$1.INIT$;$2i=$init$getThrowKw()();$2i.$crtmm$=getThrowKw.$crtmm$;}
    return $2i;
}
ex$.getThrowKw=getThrowKw;
getThrowKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2h},pa:1,an:function(){return[m$1.doc("The ‘`throw`’ keyword.")];},d:['ceylon.lexer.core','throwKw']};};
$prop$getThrowKw={get:getThrowKw,$crtmm$:getThrowKw.$crtmm$};
getThrowKw=getThrowKw;$prop$getThrowKw=getThrowKw;
ex$.$prop$getThrowKw=$prop$getThrowKw;
function $2j(){
    var assertKw$=new $2j.$$;KeywordType("assertKw",assertKw$);
    return assertKw$;
};$2j.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`assert`’ keyword.")];},d:['ceylon.lexer.core','assertKw']};};
function $init$getAssertKw(){
    if($2j.$$===undefined){
        m$1.initTypeProto($2j,'ceylon.lexer.core::assertKw',$init$KeywordType());
    }
    return $2j;
}
ex$.$init$getAssertKw=$init$getAssertKw;
$init$getAssertKw();
var $2k;
function getAssertKw(){
    if($2k===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'assertKw\' before it was set"),'211:0-212:56','TokenType.ceylon');
    if($2k===undefined){$2k=m$1.INIT$;$2k=$init$getAssertKw()();$2k.$crtmm$=getAssertKw.$crtmm$;}
    return $2k;
}
ex$.getAssertKw=getAssertKw;
getAssertKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2j},pa:1,an:function(){return[m$1.doc("The ‘`assert`’ keyword.")];},d:['ceylon.lexer.core','assertKw']};};
$prop$getAssertKw={get:getAssertKw,$crtmm$:getAssertKw.$crtmm$};
getAssertKw=getAssertKw;$prop$getAssertKw=getAssertKw;
ex$.$prop$getAssertKw=$prop$getAssertKw;
function $2l(){
    var dynamicKw$=new $2l.$$;KeywordType("dynamicKw",dynamicKw$);
    return dynamicKw$;
};$2l.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`dynamic`’ keyword.")];},d:['ceylon.lexer.core','dynamicKw']};};
function $init$getDynamicKw(){
    if($2l.$$===undefined){
        m$1.initTypeProto($2l,'ceylon.lexer.core::dynamicKw',$init$KeywordType());
    }
    return $2l;
}
ex$.$init$getDynamicKw=$init$getDynamicKw;
$init$getDynamicKw();
var $2m;
function getDynamicKw(){
    if($2m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'dynamicKw\' before it was set"),'214:0-215:58','TokenType.ceylon');
    if($2m===undefined){$2m=m$1.INIT$;$2m=$init$getDynamicKw()();$2m.$crtmm$=getDynamicKw.$crtmm$;}
    return $2m;
}
ex$.getDynamicKw=getDynamicKw;
getDynamicKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2l},pa:1,an:function(){return[m$1.doc("The ‘`dynamic`’ keyword.")];},d:['ceylon.lexer.core','dynamicKw']};};
$prop$getDynamicKw={get:getDynamicKw,$crtmm$:getDynamicKw.$crtmm$};
getDynamicKw=getDynamicKw;$prop$getDynamicKw=getDynamicKw;
ex$.$prop$getDynamicKw=$prop$getDynamicKw;
function $2n(){
    var ifKw$=new $2n.$$;KeywordType("ifKw",ifKw$);
    return ifKw$;
};$2n.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`if`’ keyword.")];},d:['ceylon.lexer.core','ifKw']};};
function $init$getIfKw(){
    if($2n.$$===undefined){
        m$1.initTypeProto($2n,'ceylon.lexer.core::ifKw',$init$KeywordType());
    }
    return $2n;
}
ex$.$init$getIfKw=$init$getIfKw;
$init$getIfKw();
var $2o;
function getIfKw(){
    if($2o===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ifKw\' before it was set"),'217:0-218:48','TokenType.ceylon');
    if($2o===undefined){$2o=m$1.INIT$;$2o=$init$getIfKw()();$2o.$crtmm$=getIfKw.$crtmm$;}
    return $2o;
}
ex$.getIfKw=getIfKw;
getIfKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2n},pa:1,an:function(){return[m$1.doc("The ‘`if`’ keyword.")];},d:['ceylon.lexer.core','ifKw']};};
$prop$getIfKw={get:getIfKw,$crtmm$:getIfKw.$crtmm$};
getIfKw=getIfKw;$prop$getIfKw=getIfKw;
ex$.$prop$getIfKw=$prop$getIfKw;
function $2p(){
    var elseKw$=new $2p.$$;KeywordType("elseKw",elseKw$);
    return elseKw$;
};$2p.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`else`’ keyword.")];},d:['ceylon.lexer.core','elseKw']};};
function $init$getElseKw(){
    if($2p.$$===undefined){
        m$1.initTypeProto($2p,'ceylon.lexer.core::elseKw',$init$KeywordType());
    }
    return $2p;
}
ex$.$init$getElseKw=$init$getElseKw;
$init$getElseKw();
var $2q;
function getElseKw(){
    if($2q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'elseKw\' before it was set"),'220:0-221:52','TokenType.ceylon');
    if($2q===undefined){$2q=m$1.INIT$;$2q=$init$getElseKw()();$2q.$crtmm$=getElseKw.$crtmm$;}
    return $2q;
}
ex$.getElseKw=getElseKw;
getElseKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2p},pa:1,an:function(){return[m$1.doc("The ‘`else`’ keyword.")];},d:['ceylon.lexer.core','elseKw']};};
$prop$getElseKw={get:getElseKw,$crtmm$:getElseKw.$crtmm$};
getElseKw=getElseKw;$prop$getElseKw=getElseKw;
ex$.$prop$getElseKw=$prop$getElseKw;
function $2r(){
    var switchKw$=new $2r.$$;KeywordType("switchKw",switchKw$);
    return switchKw$;
};$2r.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`switch`’ keyword.")];},d:['ceylon.lexer.core','switchKw']};};
function $init$getSwitchKw(){
    if($2r.$$===undefined){
        m$1.initTypeProto($2r,'ceylon.lexer.core::switchKw',$init$KeywordType());
    }
    return $2r;
}
ex$.$init$getSwitchKw=$init$getSwitchKw;
$init$getSwitchKw();
var $2s;
function getSwitchKw(){
    if($2s===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'switchKw\' before it was set"),'223:0-224:56','TokenType.ceylon');
    if($2s===undefined){$2s=m$1.INIT$;$2s=$init$getSwitchKw()();$2s.$crtmm$=getSwitchKw.$crtmm$;}
    return $2s;
}
ex$.getSwitchKw=getSwitchKw;
getSwitchKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2r},pa:1,an:function(){return[m$1.doc("The ‘`switch`’ keyword.")];},d:['ceylon.lexer.core','switchKw']};};
$prop$getSwitchKw={get:getSwitchKw,$crtmm$:getSwitchKw.$crtmm$};
getSwitchKw=getSwitchKw;$prop$getSwitchKw=getSwitchKw;
ex$.$prop$getSwitchKw=$prop$getSwitchKw;
function $2t(){
    var caseKw$=new $2t.$$;KeywordType("caseKw",caseKw$);
    return caseKw$;
};$2t.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`case`’ keyword.")];},d:['ceylon.lexer.core','caseKw']};};
function $init$getCaseKw(){
    if($2t.$$===undefined){
        m$1.initTypeProto($2t,'ceylon.lexer.core::caseKw',$init$KeywordType());
    }
    return $2t;
}
ex$.$init$getCaseKw=$init$getCaseKw;
$init$getCaseKw();
var $2u;
function getCaseKw(){
    if($2u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'caseKw\' before it was set"),'226:0-227:52','TokenType.ceylon');
    if($2u===undefined){$2u=m$1.INIT$;$2u=$init$getCaseKw()();$2u.$crtmm$=getCaseKw.$crtmm$;}
    return $2u;
}
ex$.getCaseKw=getCaseKw;
getCaseKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2t},pa:1,an:function(){return[m$1.doc("The ‘`case`’ keyword.")];},d:['ceylon.lexer.core','caseKw']};};
$prop$getCaseKw={get:getCaseKw,$crtmm$:getCaseKw.$crtmm$};
getCaseKw=getCaseKw;$prop$getCaseKw=getCaseKw;
ex$.$prop$getCaseKw=$prop$getCaseKw;
function $2v(){
    var forKw$=new $2v.$$;KeywordType("forKw",forKw$);
    return forKw$;
};$2v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`for`’ keyword.")];},d:['ceylon.lexer.core','forKw']};};
function $init$getForKw(){
    if($2v.$$===undefined){
        m$1.initTypeProto($2v,'ceylon.lexer.core::forKw',$init$KeywordType());
    }
    return $2v;
}
ex$.$init$getForKw=$init$getForKw;
$init$getForKw();
var $2w;
function getForKw(){
    if($2w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'forKw\' before it was set"),'229:0-230:50','TokenType.ceylon');
    if($2w===undefined){$2w=m$1.INIT$;$2w=$init$getForKw()();$2w.$crtmm$=getForKw.$crtmm$;}
    return $2w;
}
ex$.getForKw=getForKw;
getForKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2v},pa:1,an:function(){return[m$1.doc("The ‘`for`’ keyword.")];},d:['ceylon.lexer.core','forKw']};};
$prop$getForKw={get:getForKw,$crtmm$:getForKw.$crtmm$};
getForKw=getForKw;$prop$getForKw=getForKw;
ex$.$prop$getForKw=$prop$getForKw;
function $2x(){
    var whileKw$=new $2x.$$;KeywordType("whileKw",whileKw$);
    return whileKw$;
};$2x.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`while`’ keyword.")];},d:['ceylon.lexer.core','whileKw']};};
function $init$getWhileKw(){
    if($2x.$$===undefined){
        m$1.initTypeProto($2x,'ceylon.lexer.core::whileKw',$init$KeywordType());
    }
    return $2x;
}
ex$.$init$getWhileKw=$init$getWhileKw;
$init$getWhileKw();
var $2y;
function getWhileKw(){
    if($2y===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'whileKw\' before it was set"),'232:0-233:54','TokenType.ceylon');
    if($2y===undefined){$2y=m$1.INIT$;$2y=$init$getWhileKw()();$2y.$crtmm$=getWhileKw.$crtmm$;}
    return $2y;
}
ex$.getWhileKw=getWhileKw;
getWhileKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2x},pa:1,an:function(){return[m$1.doc("The ‘`while`’ keyword.")];},d:['ceylon.lexer.core','whileKw']};};
$prop$getWhileKw={get:getWhileKw,$crtmm$:getWhileKw.$crtmm$};
getWhileKw=getWhileKw;$prop$getWhileKw=getWhileKw;
ex$.$prop$getWhileKw=$prop$getWhileKw;
function $2z(){
    var tryKw$=new $2z.$$;KeywordType("tryKw",tryKw$);
    return tryKw$;
};$2z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`try`’ keyword.")];},d:['ceylon.lexer.core','tryKw']};};
function $init$getTryKw(){
    if($2z.$$===undefined){
        m$1.initTypeProto($2z,'ceylon.lexer.core::tryKw',$init$KeywordType());
    }
    return $2z;
}
ex$.$init$getTryKw=$init$getTryKw;
$init$getTryKw();
var $30;
function getTryKw(){
    if($30===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tryKw\' before it was set"),'235:0-236:50','TokenType.ceylon');
    if($30===undefined){$30=m$1.INIT$;$30=$init$getTryKw()();$30.$crtmm$=getTryKw.$crtmm$;}
    return $30;
}
ex$.getTryKw=getTryKw;
getTryKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2z},pa:1,an:function(){return[m$1.doc("The ‘`try`’ keyword.")];},d:['ceylon.lexer.core','tryKw']};};
$prop$getTryKw={get:getTryKw,$crtmm$:getTryKw.$crtmm$};
getTryKw=getTryKw;$prop$getTryKw=getTryKw;
ex$.$prop$getTryKw=$prop$getTryKw;
function $31(){
    var catchKw$=new $31.$$;KeywordType("catchKw",catchKw$);
    return catchKw$;
};$31.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`catch`’ keyword.")];},d:['ceylon.lexer.core','catchKw']};};
function $init$getCatchKw(){
    if($31.$$===undefined){
        m$1.initTypeProto($31,'ceylon.lexer.core::catchKw',$init$KeywordType());
    }
    return $31;
}
ex$.$init$getCatchKw=$init$getCatchKw;
$init$getCatchKw();
var $32;
function getCatchKw(){
    if($32===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'catchKw\' before it was set"),'238:0-239:54','TokenType.ceylon');
    if($32===undefined){$32=m$1.INIT$;$32=$init$getCatchKw()();$32.$crtmm$=getCatchKw.$crtmm$;}
    return $32;
}
ex$.getCatchKw=getCatchKw;
getCatchKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$31},pa:1,an:function(){return[m$1.doc("The ‘`catch`’ keyword.")];},d:['ceylon.lexer.core','catchKw']};};
$prop$getCatchKw={get:getCatchKw,$crtmm$:getCatchKw.$crtmm$};
getCatchKw=getCatchKw;$prop$getCatchKw=getCatchKw;
ex$.$prop$getCatchKw=$prop$getCatchKw;
function $33(){
    var finallyKw$=new $33.$$;KeywordType("finallyKw",finallyKw$);
    return finallyKw$;
};$33.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`finally`’ keyword.")];},d:['ceylon.lexer.core','finallyKw']};};
function $init$getFinallyKw(){
    if($33.$$===undefined){
        m$1.initTypeProto($33,'ceylon.lexer.core::finallyKw',$init$KeywordType());
    }
    return $33;
}
ex$.$init$getFinallyKw=$init$getFinallyKw;
$init$getFinallyKw();
var $34;
function getFinallyKw(){
    if($34===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'finallyKw\' before it was set"),'241:0-242:58','TokenType.ceylon');
    if($34===undefined){$34=m$1.INIT$;$34=$init$getFinallyKw()();$34.$crtmm$=getFinallyKw.$crtmm$;}
    return $34;
}
ex$.getFinallyKw=getFinallyKw;
getFinallyKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$33},pa:1,an:function(){return[m$1.doc("The ‘`finally`’ keyword.")];},d:['ceylon.lexer.core','finallyKw']};};
$prop$getFinallyKw={get:getFinallyKw,$crtmm$:getFinallyKw.$crtmm$};
getFinallyKw=getFinallyKw;$prop$getFinallyKw=getFinallyKw;
ex$.$prop$getFinallyKw=$prop$getFinallyKw;
function $35(){
    var thenKw$=new $35.$$;KeywordType("thenKw",thenKw$);
    return thenKw$;
};$35.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`then`’ keyword.")];},d:['ceylon.lexer.core','thenKw']};};
function $init$getThenKw(){
    if($35.$$===undefined){
        m$1.initTypeProto($35,'ceylon.lexer.core::thenKw',$init$KeywordType());
    }
    return $35;
}
ex$.$init$getThenKw=$init$getThenKw;
$init$getThenKw();
var $36;
function getThenKw(){
    if($36===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'thenKw\' before it was set"),'244:0-245:52','TokenType.ceylon');
    if($36===undefined){$36=m$1.INIT$;$36=$init$getThenKw()();$36.$crtmm$=getThenKw.$crtmm$;}
    return $36;
}
ex$.getThenKw=getThenKw;
getThenKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$35},pa:1,an:function(){return[m$1.doc("The ‘`then`’ keyword.")];},d:['ceylon.lexer.core','thenKw']};};
$prop$getThenKw={get:getThenKw,$crtmm$:getThenKw.$crtmm$};
getThenKw=getThenKw;$prop$getThenKw=getThenKw;
ex$.$prop$getThenKw=$prop$getThenKw;
function $37(){
    var letKw$=new $37.$$;KeywordType("letKw",letKw$);
    return letKw$;
};$37.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`let`’ keyword.")];},d:['ceylon.lexer.core','letKw']};};
function $init$getLetKw(){
    if($37.$$===undefined){
        m$1.initTypeProto($37,'ceylon.lexer.core::letKw',$init$KeywordType());
    }
    return $37;
}
ex$.$init$getLetKw=$init$getLetKw;
$init$getLetKw();
var $38;
function getLetKw(){
    if($38===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'letKw\' before it was set"),'247:0-248:50','TokenType.ceylon');
    if($38===undefined){$38=m$1.INIT$;$38=$init$getLetKw()();$38.$crtmm$=getLetKw.$crtmm$;}
    return $38;
}
ex$.getLetKw=getLetKw;
getLetKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$37},pa:1,an:function(){return[m$1.doc("The ‘`let`’ keyword.")];},d:['ceylon.lexer.core','letKw']};};
$prop$getLetKw={get:getLetKw,$crtmm$:getLetKw.$crtmm$};
getLetKw=getLetKw;$prop$getLetKw=getLetKw;
ex$.$prop$getLetKw=$prop$getLetKw;
function $39(){
    var thisKw$=new $39.$$;KeywordType("thisKw",thisKw$);
    return thisKw$;
};$39.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`this`’ keyword.")];},d:['ceylon.lexer.core','thisKw']};};
function $init$getThisKw(){
    if($39.$$===undefined){
        m$1.initTypeProto($39,'ceylon.lexer.core::thisKw',$init$KeywordType());
    }
    return $39;
}
ex$.$init$getThisKw=$init$getThisKw;
$init$getThisKw();
var $3a;
function getThisKw(){
    if($3a===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'thisKw\' before it was set"),'250:0-251:52','TokenType.ceylon');
    if($3a===undefined){$3a=m$1.INIT$;$3a=$init$getThisKw()();$3a.$crtmm$=getThisKw.$crtmm$;}
    return $3a;
}
ex$.getThisKw=getThisKw;
getThisKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$39},pa:1,an:function(){return[m$1.doc("The ‘`this`’ keyword.")];},d:['ceylon.lexer.core','thisKw']};};
$prop$getThisKw={get:getThisKw,$crtmm$:getThisKw.$crtmm$};
getThisKw=getThisKw;$prop$getThisKw=getThisKw;
ex$.$prop$getThisKw=$prop$getThisKw;
function $3b(){
    var outerKw$=new $3b.$$;KeywordType("outerKw",outerKw$);
    return outerKw$;
};$3b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`outer`’ keyword.")];},d:['ceylon.lexer.core','outerKw']};};
function $init$getOuterKw(){
    if($3b.$$===undefined){
        m$1.initTypeProto($3b,'ceylon.lexer.core::outerKw',$init$KeywordType());
    }
    return $3b;
}
ex$.$init$getOuterKw=$init$getOuterKw;
$init$getOuterKw();
var $3c;
function getOuterKw(){
    if($3c===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'outerKw\' before it was set"),'253:0-254:54','TokenType.ceylon');
    if($3c===undefined){$3c=m$1.INIT$;$3c=$init$getOuterKw()();$3c.$crtmm$=getOuterKw.$crtmm$;}
    return $3c;
}
ex$.getOuterKw=getOuterKw;
getOuterKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3b},pa:1,an:function(){return[m$1.doc("The ‘`outer`’ keyword.")];},d:['ceylon.lexer.core','outerKw']};};
$prop$getOuterKw={get:getOuterKw,$crtmm$:getOuterKw.$crtmm$};
getOuterKw=getOuterKw;$prop$getOuterKw=getOuterKw;
ex$.$prop$getOuterKw=$prop$getOuterKw;
function $3d(){
    var superKw$=new $3d.$$;KeywordType("superKw",superKw$);
    return superKw$;
};$3d.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`super`’ keyword.")];},d:['ceylon.lexer.core','superKw']};};
function $init$getSuperKw(){
    if($3d.$$===undefined){
        m$1.initTypeProto($3d,'ceylon.lexer.core::superKw',$init$KeywordType());
    }
    return $3d;
}
ex$.$init$getSuperKw=$init$getSuperKw;
$init$getSuperKw();
var $3e;
function getSuperKw(){
    if($3e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'superKw\' before it was set"),'256:0-257:54','TokenType.ceylon');
    if($3e===undefined){$3e=m$1.INIT$;$3e=$init$getSuperKw()();$3e.$crtmm$=getSuperKw.$crtmm$;}
    return $3e;
}
ex$.getSuperKw=getSuperKw;
getSuperKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3d},pa:1,an:function(){return[m$1.doc("The ‘`super`’ keyword.")];},d:['ceylon.lexer.core','superKw']};};
$prop$getSuperKw={get:getSuperKw,$crtmm$:getSuperKw.$crtmm$};
getSuperKw=getSuperKw;$prop$getSuperKw=getSuperKw;
ex$.$prop$getSuperKw=$prop$getSuperKw;
function $3f(){
    var isKw$=new $3f.$$;KeywordType("isKw",isKw$);
    return isKw$;
};$3f.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`is`’ keyword.")];},d:['ceylon.lexer.core','isKw']};};
function $init$getIsKw(){
    if($3f.$$===undefined){
        m$1.initTypeProto($3f,'ceylon.lexer.core::isKw',$init$KeywordType());
    }
    return $3f;
}
ex$.$init$getIsKw=$init$getIsKw;
$init$getIsKw();
var $3g;
function getIsKw(){
    if($3g===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'isKw\' before it was set"),'259:0-260:48','TokenType.ceylon');
    if($3g===undefined){$3g=m$1.INIT$;$3g=$init$getIsKw()();$3g.$crtmm$=getIsKw.$crtmm$;}
    return $3g;
}
ex$.getIsKw=getIsKw;
getIsKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3f},pa:1,an:function(){return[m$1.doc("The ‘`is`’ keyword.")];},d:['ceylon.lexer.core','isKw']};};
$prop$getIsKw={get:getIsKw,$crtmm$:getIsKw.$crtmm$};
getIsKw=getIsKw;$prop$getIsKw=getIsKw;
ex$.$prop$getIsKw=$prop$getIsKw;
function $3h(){
    var existsKw$=new $3h.$$;KeywordType("existsKw",existsKw$);
    return existsKw$;
};$3h.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`exists`’ keyword.")];},d:['ceylon.lexer.core','existsKw']};};
function $init$getExistsKw(){
    if($3h.$$===undefined){
        m$1.initTypeProto($3h,'ceylon.lexer.core::existsKw',$init$KeywordType());
    }
    return $3h;
}
ex$.$init$getExistsKw=$init$getExistsKw;
$init$getExistsKw();
var $3i;
function getExistsKw(){
    if($3i===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'existsKw\' before it was set"),'262:0-263:56','TokenType.ceylon');
    if($3i===undefined){$3i=m$1.INIT$;$3i=$init$getExistsKw()();$3i.$crtmm$=getExistsKw.$crtmm$;}
    return $3i;
}
ex$.getExistsKw=getExistsKw;
getExistsKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3h},pa:1,an:function(){return[m$1.doc("The ‘`exists`’ keyword.")];},d:['ceylon.lexer.core','existsKw']};};
$prop$getExistsKw={get:getExistsKw,$crtmm$:getExistsKw.$crtmm$};
getExistsKw=getExistsKw;$prop$getExistsKw=getExistsKw;
ex$.$prop$getExistsKw=$prop$getExistsKw;
function $3j(){
    var nonemptyKw$=new $3j.$$;KeywordType("nonemptyKw",nonemptyKw$);
    return nonemptyKw$;
};$3j.$crtmm$=function(){return{mod:$CCMM$,'super':{t:KeywordType},pa:1,an:function(){return[m$1.doc("The ‘`nonempty`’ keyword.")];},d:['ceylon.lexer.core','nonemptyKw']};};
function $init$getNonemptyKw(){
    if($3j.$$===undefined){
        m$1.initTypeProto($3j,'ceylon.lexer.core::nonemptyKw',$init$KeywordType());
    }
    return $3j;
}
ex$.$init$getNonemptyKw=$init$getNonemptyKw;
$init$getNonemptyKw();
var $3k;
function getNonemptyKw(){
    if($3k===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'nonemptyKw\' before it was set"),'265:0-266:60','TokenType.ceylon');
    if($3k===undefined){$3k=m$1.INIT$;$3k=$init$getNonemptyKw()();$3k.$crtmm$=getNonemptyKw.$crtmm$;}
    return $3k;
}
ex$.getNonemptyKw=getNonemptyKw;
getNonemptyKw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3j},pa:1,an:function(){return[m$1.doc("The ‘`nonempty`’ keyword.")];},d:['ceylon.lexer.core','nonemptyKw']};};
$prop$getNonemptyKw={get:getNonemptyKw,$crtmm$:getNonemptyKw.$crtmm$};
getNonemptyKw=getNonemptyKw;$prop$getNonemptyKw=getNonemptyKw;
ex$.$prop$getNonemptyKw=$prop$getNonemptyKw;
function SymbolType($3l,symbolType$){
    $init$SymbolType();
    if(symbolType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::SymbolType"),'?','?')
    symbolType$.$3l_=$3l;
    TokenType(symbolType$.$3l,symbolType$);
    return symbolType$;
}
SymbolType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getComma,$prop$getSemicolon,$prop$getEllipsis,$prop$getLbrace,$prop$getRbrace,$prop$getLparen,$prop$getRparen,$prop$getLbracket,$prop$getRbracket,$prop$getBacktick,$prop$getQuestionMark,$prop$getMemberOp,$prop$getSafeMemberOp,$prop$getSpreadMemberOp,$prop$getSpecify,$prop$getCompute,$prop$getSumOp,$prop$getDifferenceOp,$prop$getProductOp,$prop$getQuotientOp,$prop$getRemainderOp,$prop$getPowerOp,$prop$getScaleOp,$prop$getIncrementOp,$prop$getDecrementOp,$prop$getSpanOp,$prop$getMeasureOp,$prop$getEntryOp,$prop$getNotOp,$prop$getAndOp,$prop$getOrOp,$prop$getComplementOp,$prop$getIntersectionOp,$prop$getUnionOp,$prop$getIdenticalOp,$prop$getEqualOp,$prop$getNotEqualOp,$prop$getSmallerOp,$prop$getLargerOp,$prop$getSmallAsOp,$prop$getLargeAsOp,$prop$getCompareOp,$prop$getAddAssignOp,$prop$getSubtractAssignOp,$prop$getMultiplyAssignOp,$prop$getDivideAssignOp,$prop$getRemainderAssignOp,$prop$getAndAssignOp,$prop$getOrAssignOp,$prop$getComplementAssignOp,$prop$getIntersectAssignOp,$prop$getUnionAssignOp],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:SymbolType')];},d:['ceylon.lexer.core','SymbolType']};};
ex$.SymbolType=SymbolType;
function $init$SymbolType(){
    if(SymbolType.$$===undefined){
        m$1.initTypeProto(SymbolType,'ceylon.lexer.core::SymbolType',$init$TokenType());
        (function(symbolType$){
            m$1.atr$(symbolType$,'$3l',function(){return this.$3l_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:SymbolType,d:['ceylon.lexer.core','SymbolType','$at','string$g17ucs']};});
        })(SymbolType.$$.prototype);
    }
    return SymbolType;
}
ex$.$init$SymbolType=$init$SymbolType;
$init$SymbolType();
function $3m(){
    var comma$=new $3m.$$;SymbolType("comma",comma$);
    return comma$;
};$3m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A comma: ‘`,`’")];},d:['ceylon.lexer.core','comma']};};
function $init$getComma(){
    if($3m.$$===undefined){
        m$1.initTypeProto($3m,'ceylon.lexer.core::comma',$init$SymbolType());
    }
    return $3m;
}
ex$.$init$getComma=$init$getComma;
$init$getComma();
var $3n;
function getComma(){
    if($3n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'comma\' before it was set"),'279:0-280:49','TokenType.ceylon');
    if($3n===undefined){$3n=m$1.INIT$;$3n=$init$getComma()();$3n.$crtmm$=getComma.$crtmm$;}
    return $3n;
}
ex$.getComma=getComma;
getComma.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3m},pa:1,an:function(){return[m$1.doc("A comma: ‘`,`’")];},d:['ceylon.lexer.core','comma']};};
$prop$getComma={get:getComma,$crtmm$:getComma.$crtmm$};
getComma=getComma;$prop$getComma=getComma;
ex$.$prop$getComma=$prop$getComma;
function $3o(){
    var semicolon$=new $3o.$$;SymbolType("semicolon",semicolon$);
    return semicolon$;
};$3o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A semicolon: ‘`;`’")];},d:['ceylon.lexer.core','semicolon']};};
function $init$getSemicolon(){
    if($3o.$$===undefined){
        m$1.initTypeProto($3o,'ceylon.lexer.core::semicolon',$init$SymbolType());
    }
    return $3o;
}
ex$.$init$getSemicolon=$init$getSemicolon;
$init$getSemicolon();
var $3p;
function getSemicolon(){
    if($3p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'semicolon\' before it was set"),'282:0-283:57','TokenType.ceylon');
    if($3p===undefined){$3p=m$1.INIT$;$3p=$init$getSemicolon()();$3p.$crtmm$=getSemicolon.$crtmm$;}
    return $3p;
}
ex$.getSemicolon=getSemicolon;
getSemicolon.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3o},pa:1,an:function(){return[m$1.doc("A semicolon: ‘`;`’")];},d:['ceylon.lexer.core','semicolon']};};
$prop$getSemicolon={get:getSemicolon,$crtmm$:getSemicolon.$crtmm$};
getSemicolon=getSemicolon;$prop$getSemicolon=getSemicolon;
ex$.$prop$getSemicolon=$prop$getSemicolon;
function $3q(){
    var ellipsis$=new $3q.$$;SymbolType("ellipsis",ellipsis$);
    return ellipsis$;
};$3q.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An ellipsis: ‘`...`’")];},d:['ceylon.lexer.core','ellipsis']};};
function $init$getEllipsis(){
    if($3q.$$===undefined){
        m$1.initTypeProto($3q,'ceylon.lexer.core::ellipsis',$init$SymbolType());
    }
    return $3q;
}
ex$.$init$getEllipsis=$init$getEllipsis;
$init$getEllipsis();
var $3r;
function getEllipsis(){
    if($3r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'ellipsis\' before it was set"),'285:0-286:55','TokenType.ceylon');
    if($3r===undefined){$3r=m$1.INIT$;$3r=$init$getEllipsis()();$3r.$crtmm$=getEllipsis.$crtmm$;}
    return $3r;
}
ex$.getEllipsis=getEllipsis;
getEllipsis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3q},pa:1,an:function(){return[m$1.doc("An ellipsis: ‘`...`’")];},d:['ceylon.lexer.core','ellipsis']};};
$prop$getEllipsis={get:getEllipsis,$crtmm$:getEllipsis.$crtmm$};
getEllipsis=getEllipsis;$prop$getEllipsis=getEllipsis;
ex$.$prop$getEllipsis=$prop$getEllipsis;
function $3s(){
    var lbrace$=new $3s.$$;SymbolType("lbrace",lbrace$);
    return lbrace$;
};$3s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A left brace: ‘`{`’")];},d:['ceylon.lexer.core','lbrace']};};
function $init$getLbrace(){
    if($3s.$$===undefined){
        m$1.initTypeProto($3s,'ceylon.lexer.core::lbrace',$init$SymbolType());
    }
    return $3s;
}
ex$.$init$getLbrace=$init$getLbrace;
$init$getLbrace();
var $3t;
function getLbrace(){
    if($3t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lbrace\' before it was set"),'288:0-289:51','TokenType.ceylon');
    if($3t===undefined){$3t=m$1.INIT$;$3t=$init$getLbrace()();$3t.$crtmm$=getLbrace.$crtmm$;}
    return $3t;
}
ex$.getLbrace=getLbrace;
getLbrace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3s},pa:1,an:function(){return[m$1.doc("A left brace: ‘`{`’")];},d:['ceylon.lexer.core','lbrace']};};
$prop$getLbrace={get:getLbrace,$crtmm$:getLbrace.$crtmm$};
getLbrace=getLbrace;$prop$getLbrace=getLbrace;
ex$.$prop$getLbrace=$prop$getLbrace;
function $3u(){
    var rbrace$=new $3u.$$;SymbolType("rbrace",rbrace$);
    return rbrace$;
};$3u.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A right brace: ‘`}`’")];},d:['ceylon.lexer.core','rbrace']};};
function $init$getRbrace(){
    if($3u.$$===undefined){
        m$1.initTypeProto($3u,'ceylon.lexer.core::rbrace',$init$SymbolType());
    }
    return $3u;
}
ex$.$init$getRbrace=$init$getRbrace;
$init$getRbrace();
var $3v;
function getRbrace(){
    if($3v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rbrace\' before it was set"),'291:0-292:51','TokenType.ceylon');
    if($3v===undefined){$3v=m$1.INIT$;$3v=$init$getRbrace()();$3v.$crtmm$=getRbrace.$crtmm$;}
    return $3v;
}
ex$.getRbrace=getRbrace;
getRbrace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3u},pa:1,an:function(){return[m$1.doc("A right brace: ‘`}`’")];},d:['ceylon.lexer.core','rbrace']};};
$prop$getRbrace={get:getRbrace,$crtmm$:getRbrace.$crtmm$};
getRbrace=getRbrace;$prop$getRbrace=getRbrace;
ex$.$prop$getRbrace=$prop$getRbrace;
function $3w(){
    var lparen$=new $3w.$$;SymbolType("lparen",lparen$);
    return lparen$;
};$3w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A left parenthesis: ‘`(`’")];},d:['ceylon.lexer.core','lparen']};};
function $init$getLparen(){
    if($3w.$$===undefined){
        m$1.initTypeProto($3w,'ceylon.lexer.core::lparen',$init$SymbolType());
    }
    return $3w;
}
ex$.$init$getLparen=$init$getLparen;
$init$getLparen();
var $3x;
function getLparen(){
    if($3x===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lparen\' before it was set"),'294:0-295:51','TokenType.ceylon');
    if($3x===undefined){$3x=m$1.INIT$;$3x=$init$getLparen()();$3x.$crtmm$=getLparen.$crtmm$;}
    return $3x;
}
ex$.getLparen=getLparen;
getLparen.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3w},pa:1,an:function(){return[m$1.doc("A left parenthesis: ‘`(`’")];},d:['ceylon.lexer.core','lparen']};};
$prop$getLparen={get:getLparen,$crtmm$:getLparen.$crtmm$};
getLparen=getLparen;$prop$getLparen=getLparen;
ex$.$prop$getLparen=$prop$getLparen;
function $3y(){
    var rparen$=new $3y.$$;SymbolType("rparen",rparen$);
    return rparen$;
};$3y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A right parenthesis: ‘`)`’")];},d:['ceylon.lexer.core','rparen']};};
function $init$getRparen(){
    if($3y.$$===undefined){
        m$1.initTypeProto($3y,'ceylon.lexer.core::rparen',$init$SymbolType());
    }
    return $3y;
}
ex$.$init$getRparen=$init$getRparen;
$init$getRparen();
var $3z;
function getRparen(){
    if($3z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rparen\' before it was set"),'297:0-298:51','TokenType.ceylon');
    if($3z===undefined){$3z=m$1.INIT$;$3z=$init$getRparen()();$3z.$crtmm$=getRparen.$crtmm$;}
    return $3z;
}
ex$.getRparen=getRparen;
getRparen.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3y},pa:1,an:function(){return[m$1.doc("A right parenthesis: ‘`)`’")];},d:['ceylon.lexer.core','rparen']};};
$prop$getRparen={get:getRparen,$crtmm$:getRparen.$crtmm$};
getRparen=getRparen;$prop$getRparen=getRparen;
ex$.$prop$getRparen=$prop$getRparen;
function $40(){
    var lbracket$=new $40.$$;SymbolType("lbracket",lbracket$);
    return lbracket$;
};$40.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A left bracket: ‘`[`’")];},d:['ceylon.lexer.core','lbracket']};};
function $init$getLbracket(){
    if($40.$$===undefined){
        m$1.initTypeProto($40,'ceylon.lexer.core::lbracket',$init$SymbolType());
    }
    return $40;
}
ex$.$init$getLbracket=$init$getLbracket;
$init$getLbracket();
var $41;
function getLbracket(){
    if($41===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lbracket\' before it was set"),'300:0-301:55','TokenType.ceylon');
    if($41===undefined){$41=m$1.INIT$;$41=$init$getLbracket()();$41.$crtmm$=getLbracket.$crtmm$;}
    return $41;
}
ex$.getLbracket=getLbracket;
getLbracket.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$40},pa:1,an:function(){return[m$1.doc("A left bracket: ‘`[`’")];},d:['ceylon.lexer.core','lbracket']};};
$prop$getLbracket={get:getLbracket,$crtmm$:getLbracket.$crtmm$};
getLbracket=getLbracket;$prop$getLbracket=getLbracket;
ex$.$prop$getLbracket=$prop$getLbracket;
function $42(){
    var rbracket$=new $42.$$;SymbolType("rbracket",rbracket$);
    return rbracket$;
};$42.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A right bracket: ‘`]`’")];},d:['ceylon.lexer.core','rbracket']};};
function $init$getRbracket(){
    if($42.$$===undefined){
        m$1.initTypeProto($42,'ceylon.lexer.core::rbracket',$init$SymbolType());
    }
    return $42;
}
ex$.$init$getRbracket=$init$getRbracket;
$init$getRbracket();
var $43;
function getRbracket(){
    if($43===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'rbracket\' before it was set"),'303:0-304:55','TokenType.ceylon');
    if($43===undefined){$43=m$1.INIT$;$43=$init$getRbracket()();$43.$crtmm$=getRbracket.$crtmm$;}
    return $43;
}
ex$.getRbracket=getRbracket;
getRbracket.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$42},pa:1,an:function(){return[m$1.doc("A right bracket: ‘`]`’")];},d:['ceylon.lexer.core','rbracket']};};
$prop$getRbracket={get:getRbracket,$crtmm$:getRbracket.$crtmm$};
getRbracket=getRbracket;$prop$getRbracket=getRbracket;
ex$.$prop$getRbracket=$prop$getRbracket;
function $44(){
    var backtick$=new $44.$$;SymbolType("backtick",backtick$);
    return backtick$;
};$44.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A backtick: ‘`` ` ``’")];},d:['ceylon.lexer.core','backtick']};};
function $init$getBacktick(){
    if($44.$$===undefined){
        m$1.initTypeProto($44,'ceylon.lexer.core::backtick',$init$SymbolType());
    }
    return $44;
}
ex$.$init$getBacktick=$init$getBacktick;
$init$getBacktick();
var $45;
function getBacktick(){
    if($45===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'backtick\' before it was set"),'306:0-307:55','TokenType.ceylon');
    if($45===undefined){$45=m$1.INIT$;$45=$init$getBacktick()();$45.$crtmm$=getBacktick.$crtmm$;}
    return $45;
}
ex$.getBacktick=getBacktick;
getBacktick.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$44},pa:1,an:function(){return[m$1.doc("A backtick: ‘`` ` ``’")];},d:['ceylon.lexer.core','backtick']};};
$prop$getBacktick={get:getBacktick,$crtmm$:getBacktick.$crtmm$};
getBacktick=getBacktick;$prop$getBacktick=getBacktick;
ex$.$prop$getBacktick=$prop$getBacktick;
function $46(){
    var questionMark$=new $46.$$;SymbolType("optional",questionMark$);
    return questionMark$;
};$46.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A question mark: ‘`?`’")];},d:['ceylon.lexer.core','questionMark']};};
function $init$getQuestionMark(){
    if($46.$$===undefined){
        m$1.initTypeProto($46,'ceylon.lexer.core::questionMark',$init$SymbolType());
    }
    return $46;
}
ex$.$init$getQuestionMark=$init$getQuestionMark;
$init$getQuestionMark();
var $47;
function getQuestionMark(){
    if($47===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'questionMark\' before it was set"),'309:0-310:59','TokenType.ceylon');
    if($47===undefined){$47=m$1.INIT$;$47=$init$getQuestionMark()();$47.$crtmm$=getQuestionMark.$crtmm$;}
    return $47;
}
ex$.getQuestionMark=getQuestionMark;
getQuestionMark.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$46},pa:1,an:function(){return[m$1.doc("A question mark: ‘`?`’")];},d:['ceylon.lexer.core','questionMark']};};
$prop$getQuestionMark={get:getQuestionMark,$crtmm$:getQuestionMark.$crtmm$};
getQuestionMark=getQuestionMark;$prop$getQuestionMark=getQuestionMark;
ex$.$prop$getQuestionMark=$prop$getQuestionMark;
function $48(){
    var memberOp$=new $48.$$;SymbolType("memberOp",memberOp$);
    return memberOp$;
};$48.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A member operator: ‘`.`’")];},d:['ceylon.lexer.core','memberOp']};};
function $init$getMemberOp(){
    if($48.$$===undefined){
        m$1.initTypeProto($48,'ceylon.lexer.core::memberOp',$init$SymbolType());
    }
    return $48;
}
ex$.$init$getMemberOp=$init$getMemberOp;
$init$getMemberOp();
var $49;
function getMemberOp(){
    if($49===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'memberOp\' before it was set"),'312:0-313:55','TokenType.ceylon');
    if($49===undefined){$49=m$1.INIT$;$49=$init$getMemberOp()();$49.$crtmm$=getMemberOp.$crtmm$;}
    return $49;
}
ex$.getMemberOp=getMemberOp;
getMemberOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$48},pa:1,an:function(){return[m$1.doc("A member operator: ‘`.`’")];},d:['ceylon.lexer.core','memberOp']};};
$prop$getMemberOp={get:getMemberOp,$crtmm$:getMemberOp.$crtmm$};
getMemberOp=getMemberOp;$prop$getMemberOp=getMemberOp;
ex$.$prop$getMemberOp=$prop$getMemberOp;
function $4a(){
    var safeMemberOp$=new $4a.$$;SymbolType("safeMemberOp",safeMemberOp$);
    return safeMemberOp$;
};$4a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A safe member operator: ‘`?.`’")];},d:['ceylon.lexer.core','safeMemberOp']};};
function $init$getSafeMemberOp(){
    if($4a.$$===undefined){
        m$1.initTypeProto($4a,'ceylon.lexer.core::safeMemberOp',$init$SymbolType());
    }
    return $4a;
}
ex$.$init$getSafeMemberOp=$init$getSafeMemberOp;
$init$getSafeMemberOp();
var $4b;
function getSafeMemberOp(){
    if($4b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'safeMemberOp\' before it was set"),'315:0-316:63','TokenType.ceylon');
    if($4b===undefined){$4b=m$1.INIT$;$4b=$init$getSafeMemberOp()();$4b.$crtmm$=getSafeMemberOp.$crtmm$;}
    return $4b;
}
ex$.getSafeMemberOp=getSafeMemberOp;
getSafeMemberOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4a},pa:1,an:function(){return[m$1.doc("A safe member operator: ‘`?.`’")];},d:['ceylon.lexer.core','safeMemberOp']};};
$prop$getSafeMemberOp={get:getSafeMemberOp,$crtmm$:getSafeMemberOp.$crtmm$};
getSafeMemberOp=getSafeMemberOp;$prop$getSafeMemberOp=getSafeMemberOp;
ex$.$prop$getSafeMemberOp=$prop$getSafeMemberOp;
function $4c(){
    var spreadMemberOp$=new $4c.$$;SymbolType("spreadMemberOp",spreadMemberOp$);
    return spreadMemberOp$;
};$4c.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A spread member operator: ‘`*.`’")];},d:['ceylon.lexer.core','spreadMemberOp']};};
function $init$getSpreadMemberOp(){
    if($4c.$$===undefined){
        m$1.initTypeProto($4c,'ceylon.lexer.core::spreadMemberOp',$init$SymbolType());
    }
    return $4c;
}
ex$.$init$getSpreadMemberOp=$init$getSpreadMemberOp;
$init$getSpreadMemberOp();
var $4d;
function getSpreadMemberOp(){
    if($4d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'spreadMemberOp\' before it was set"),'318:0-319:67','TokenType.ceylon');
    if($4d===undefined){$4d=m$1.INIT$;$4d=$init$getSpreadMemberOp()();$4d.$crtmm$=getSpreadMemberOp.$crtmm$;}
    return $4d;
}
ex$.getSpreadMemberOp=getSpreadMemberOp;
getSpreadMemberOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4c},pa:1,an:function(){return[m$1.doc("A spread member operator: ‘`*.`’")];},d:['ceylon.lexer.core','spreadMemberOp']};};
$prop$getSpreadMemberOp={get:getSpreadMemberOp,$crtmm$:getSpreadMemberOp.$crtmm$};
getSpreadMemberOp=getSpreadMemberOp;$prop$getSpreadMemberOp=getSpreadMemberOp;
ex$.$prop$getSpreadMemberOp=$prop$getSpreadMemberOp;
function $4e(){
    var specify$=new $4e.$$;SymbolType("specify",specify$);
    return specify$;
};$4e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:specify')];},d:['ceylon.lexer.core','specify']};};
function $init$getSpecify(){
    if($4e.$$===undefined){
        m$1.initTypeProto($4e,'ceylon.lexer.core::specify',$init$SymbolType());
    }
    return $4e;
}
ex$.$init$getSpecify=$init$getSpecify;
$init$getSpecify();
var $4f;
function getSpecify(){
    if($4f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'specify\' before it was set"),'321:0-322:53','TokenType.ceylon');
    if($4f===undefined){$4f=m$1.INIT$;$4f=$init$getSpecify()();$4f.$crtmm$=getSpecify.$crtmm$;}
    return $4f;
}
ex$.getSpecify=getSpecify;
getSpecify.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4e},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:specify')];},d:['ceylon.lexer.core','specify']};};
$prop$getSpecify={get:getSpecify,$crtmm$:getSpecify.$crtmm$};
getSpecify=getSpecify;$prop$getSpecify=getSpecify;
ex$.$prop$getSpecify=$prop$getSpecify;
function $4g(){
    var compute$=new $4g.$$;SymbolType("compute",compute$);
    return compute$;
};$4g.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:compute')];},d:['ceylon.lexer.core','compute']};};
function $init$getCompute(){
    if($4g.$$===undefined){
        m$1.initTypeProto($4g,'ceylon.lexer.core::compute',$init$SymbolType());
    }
    return $4g;
}
ex$.$init$getCompute=$init$getCompute;
$init$getCompute();
var $4h;
function getCompute(){
    if($4h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'compute\' before it was set"),'324:0-325:53','TokenType.ceylon');
    if($4h===undefined){$4h=m$1.INIT$;$4h=$init$getCompute()();$4h.$crtmm$=getCompute.$crtmm$;}
    return $4h;
}
ex$.getCompute=getCompute;
getCompute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4g},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:compute')];},d:['ceylon.lexer.core','compute']};};
$prop$getCompute={get:getCompute,$crtmm$:getCompute.$crtmm$};
getCompute=getCompute;$prop$getCompute=getCompute;
ex$.$prop$getCompute=$prop$getCompute;
function $4i(){
    var sumOp$=new $4i.$$;SymbolType("sumOp",sumOp$);
    return sumOp$;
};$4i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A sum operator: ‘`+`’")];},d:['ceylon.lexer.core','sumOp']};};
function $init$getSumOp(){
    if($4i.$$===undefined){
        m$1.initTypeProto($4i,'ceylon.lexer.core::sumOp',$init$SymbolType());
    }
    return $4i;
}
ex$.$init$getSumOp=$init$getSumOp;
$init$getSumOp();
var $4j;
function getSumOp(){
    if($4j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'sumOp\' before it was set"),'327:0-328:49','TokenType.ceylon');
    if($4j===undefined){$4j=m$1.INIT$;$4j=$init$getSumOp()();$4j.$crtmm$=getSumOp.$crtmm$;}
    return $4j;
}
ex$.getSumOp=getSumOp;
getSumOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4i},pa:1,an:function(){return[m$1.doc("A sum operator: ‘`+`’")];},d:['ceylon.lexer.core','sumOp']};};
$prop$getSumOp={get:getSumOp,$crtmm$:getSumOp.$crtmm$};
getSumOp=getSumOp;$prop$getSumOp=getSumOp;
ex$.$prop$getSumOp=$prop$getSumOp;
function $4k(){
    var differenceOp$=new $4k.$$;SymbolType("differenceOp",differenceOp$);
    return differenceOp$;
};$4k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A difference operator: ‘`-`’")];},d:['ceylon.lexer.core','differenceOp']};};
function $init$getDifferenceOp(){
    if($4k.$$===undefined){
        m$1.initTypeProto($4k,'ceylon.lexer.core::differenceOp',$init$SymbolType());
    }
    return $4k;
}
ex$.$init$getDifferenceOp=$init$getDifferenceOp;
$init$getDifferenceOp();
var $4l;
function getDifferenceOp(){
    if($4l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'differenceOp\' before it was set"),'330:0-331:63','TokenType.ceylon');
    if($4l===undefined){$4l=m$1.INIT$;$4l=$init$getDifferenceOp()();$4l.$crtmm$=getDifferenceOp.$crtmm$;}
    return $4l;
}
ex$.getDifferenceOp=getDifferenceOp;
getDifferenceOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4k},pa:1,an:function(){return[m$1.doc("A difference operator: ‘`-`’")];},d:['ceylon.lexer.core','differenceOp']};};
$prop$getDifferenceOp={get:getDifferenceOp,$crtmm$:getDifferenceOp.$crtmm$};
getDifferenceOp=getDifferenceOp;$prop$getDifferenceOp=getDifferenceOp;
ex$.$prop$getDifferenceOp=$prop$getDifferenceOp;
function $4m(){
    var productOp$=new $4m.$$;SymbolType("productOp",productOp$);
    return productOp$;
};$4m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:productOp')];},d:['ceylon.lexer.core','productOp']};};
function $init$getProductOp(){
    if($4m.$$===undefined){
        m$1.initTypeProto($4m,'ceylon.lexer.core::productOp',$init$SymbolType());
    }
    return $4m;
}
ex$.$init$getProductOp=$init$getProductOp;
$init$getProductOp();
var $4n;
function getProductOp(){
    if($4n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'productOp\' before it was set"),'333:0-334:57','TokenType.ceylon');
    if($4n===undefined){$4n=m$1.INIT$;$4n=$init$getProductOp()();$4n.$crtmm$=getProductOp.$crtmm$;}
    return $4n;
}
ex$.getProductOp=getProductOp;
getProductOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4m},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:productOp')];},d:['ceylon.lexer.core','productOp']};};
$prop$getProductOp={get:getProductOp,$crtmm$:getProductOp.$crtmm$};
getProductOp=getProductOp;$prop$getProductOp=getProductOp;
ex$.$prop$getProductOp=$prop$getProductOp;
function $4o(){
    var quotientOp$=new $4o.$$;SymbolType("quotientOp",quotientOp$);
    return quotientOp$;
};$4o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A quotient operator: ‘`/`’")];},d:['ceylon.lexer.core','quotientOp']};};
function $init$getQuotientOp(){
    if($4o.$$===undefined){
        m$1.initTypeProto($4o,'ceylon.lexer.core::quotientOp',$init$SymbolType());
    }
    return $4o;
}
ex$.$init$getQuotientOp=$init$getQuotientOp;
$init$getQuotientOp();
var $4p;
function getQuotientOp(){
    if($4p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'quotientOp\' before it was set"),'336:0-337:59','TokenType.ceylon');
    if($4p===undefined){$4p=m$1.INIT$;$4p=$init$getQuotientOp()();$4p.$crtmm$=getQuotientOp.$crtmm$;}
    return $4p;
}
ex$.getQuotientOp=getQuotientOp;
getQuotientOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4o},pa:1,an:function(){return[m$1.doc("A quotient operator: ‘`/`’")];},d:['ceylon.lexer.core','quotientOp']};};
$prop$getQuotientOp={get:getQuotientOp,$crtmm$:getQuotientOp.$crtmm$};
getQuotientOp=getQuotientOp;$prop$getQuotientOp=getQuotientOp;
ex$.$prop$getQuotientOp=$prop$getQuotientOp;
function $4q(){
    var remainderOp$=new $4q.$$;SymbolType("remainderOp",remainderOp$);
    return remainderOp$;
};$4q.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A remainder operator: ‘`%`’")];},d:['ceylon.lexer.core','remainderOp']};};
function $init$getRemainderOp(){
    if($4q.$$===undefined){
        m$1.initTypeProto($4q,'ceylon.lexer.core::remainderOp',$init$SymbolType());
    }
    return $4q;
}
ex$.$init$getRemainderOp=$init$getRemainderOp;
$init$getRemainderOp();
var $4r;
function getRemainderOp(){
    if($4r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'remainderOp\' before it was set"),'339:0-340:61','TokenType.ceylon');
    if($4r===undefined){$4r=m$1.INIT$;$4r=$init$getRemainderOp()();$4r.$crtmm$=getRemainderOp.$crtmm$;}
    return $4r;
}
ex$.getRemainderOp=getRemainderOp;
getRemainderOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4q},pa:1,an:function(){return[m$1.doc("A remainder operator: ‘`%`’")];},d:['ceylon.lexer.core','remainderOp']};};
$prop$getRemainderOp={get:getRemainderOp,$crtmm$:getRemainderOp.$crtmm$};
getRemainderOp=getRemainderOp;$prop$getRemainderOp=getRemainderOp;
ex$.$prop$getRemainderOp=$prop$getRemainderOp;
function $4s(){
    var powerOp$=new $4s.$$;SymbolType("powerOp",powerOp$);
    return powerOp$;
};$4s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A power operator: ‘`^`’")];},d:['ceylon.lexer.core','powerOp']};};
function $init$getPowerOp(){
    if($4s.$$===undefined){
        m$1.initTypeProto($4s,'ceylon.lexer.core::powerOp',$init$SymbolType());
    }
    return $4s;
}
ex$.$init$getPowerOp=$init$getPowerOp;
$init$getPowerOp();
var $4t;
function getPowerOp(){
    if($4t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'powerOp\' before it was set"),'342:0-343:53','TokenType.ceylon');
    if($4t===undefined){$4t=m$1.INIT$;$4t=$init$getPowerOp()();$4t.$crtmm$=getPowerOp.$crtmm$;}
    return $4t;
}
ex$.getPowerOp=getPowerOp;
getPowerOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4s},pa:1,an:function(){return[m$1.doc("A power operator: ‘`^`’")];},d:['ceylon.lexer.core','powerOp']};};
$prop$getPowerOp={get:getPowerOp,$crtmm$:getPowerOp.$crtmm$};
getPowerOp=getPowerOp;$prop$getPowerOp=getPowerOp;
ex$.$prop$getPowerOp=$prop$getPowerOp;
function $4u(){
    var scaleOp$=new $4u.$$;SymbolType("scaleOp",scaleOp$);
    return scaleOp$;
};$4u.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A scale operator: ‘`**`’")];},d:['ceylon.lexer.core','scaleOp']};};
function $init$getScaleOp(){
    if($4u.$$===undefined){
        m$1.initTypeProto($4u,'ceylon.lexer.core::scaleOp',$init$SymbolType());
    }
    return $4u;
}
ex$.$init$getScaleOp=$init$getScaleOp;
$init$getScaleOp();
var $4v;
function getScaleOp(){
    if($4v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'scaleOp\' before it was set"),'345:0-346:53','TokenType.ceylon');
    if($4v===undefined){$4v=m$1.INIT$;$4v=$init$getScaleOp()();$4v.$crtmm$=getScaleOp.$crtmm$;}
    return $4v;
}
ex$.getScaleOp=getScaleOp;
getScaleOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4u},pa:1,an:function(){return[m$1.doc("A scale operator: ‘`**`’")];},d:['ceylon.lexer.core','scaleOp']};};
$prop$getScaleOp={get:getScaleOp,$crtmm$:getScaleOp.$crtmm$};
getScaleOp=getScaleOp;$prop$getScaleOp=getScaleOp;
ex$.$prop$getScaleOp=$prop$getScaleOp;
function $4w(){
    var incrementOp$=new $4w.$$;SymbolType("incrementOp",incrementOp$);
    return incrementOp$;
};$4w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An increment operator: ‘`++`’")];},d:['ceylon.lexer.core','incrementOp']};};
function $init$getIncrementOp(){
    if($4w.$$===undefined){
        m$1.initTypeProto($4w,'ceylon.lexer.core::incrementOp',$init$SymbolType());
    }
    return $4w;
}
ex$.$init$getIncrementOp=$init$getIncrementOp;
$init$getIncrementOp();
var $4x;
function getIncrementOp(){
    if($4x===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'incrementOp\' before it was set"),'348:0-349:61','TokenType.ceylon');
    if($4x===undefined){$4x=m$1.INIT$;$4x=$init$getIncrementOp()();$4x.$crtmm$=getIncrementOp.$crtmm$;}
    return $4x;
}
ex$.getIncrementOp=getIncrementOp;
getIncrementOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4w},pa:1,an:function(){return[m$1.doc("An increment operator: ‘`++`’")];},d:['ceylon.lexer.core','incrementOp']};};
$prop$getIncrementOp={get:getIncrementOp,$crtmm$:getIncrementOp.$crtmm$};
getIncrementOp=getIncrementOp;$prop$getIncrementOp=getIncrementOp;
ex$.$prop$getIncrementOp=$prop$getIncrementOp;
function $4y(){
    var decrementOp$=new $4y.$$;SymbolType("decrementOp",decrementOp$);
    return decrementOp$;
};$4y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A decrement operator: ‘`--`’")];},d:['ceylon.lexer.core','decrementOp']};};
function $init$getDecrementOp(){
    if($4y.$$===undefined){
        m$1.initTypeProto($4y,'ceylon.lexer.core::decrementOp',$init$SymbolType());
    }
    return $4y;
}
ex$.$init$getDecrementOp=$init$getDecrementOp;
$init$getDecrementOp();
var $4z;
function getDecrementOp(){
    if($4z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'decrementOp\' before it was set"),'351:0-352:61','TokenType.ceylon');
    if($4z===undefined){$4z=m$1.INIT$;$4z=$init$getDecrementOp()();$4z.$crtmm$=getDecrementOp.$crtmm$;}
    return $4z;
}
ex$.getDecrementOp=getDecrementOp;
getDecrementOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$4y},pa:1,an:function(){return[m$1.doc("A decrement operator: ‘`--`’")];},d:['ceylon.lexer.core','decrementOp']};};
$prop$getDecrementOp={get:getDecrementOp,$crtmm$:getDecrementOp.$crtmm$};
getDecrementOp=getDecrementOp;$prop$getDecrementOp=getDecrementOp;
ex$.$prop$getDecrementOp=$prop$getDecrementOp;
function $50(){
    var spanOp$=new $50.$$;SymbolType("spanOp",spanOp$);
    return spanOp$;
};$50.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A span operator: ‘`..`’")];},d:['ceylon.lexer.core','spanOp']};};
function $init$getSpanOp(){
    if($50.$$===undefined){
        m$1.initTypeProto($50,'ceylon.lexer.core::spanOp',$init$SymbolType());
    }
    return $50;
}
ex$.$init$getSpanOp=$init$getSpanOp;
$init$getSpanOp();
var $51;
function getSpanOp(){
    if($51===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'spanOp\' before it was set"),'354:0-355:51','TokenType.ceylon');
    if($51===undefined){$51=m$1.INIT$;$51=$init$getSpanOp()();$51.$crtmm$=getSpanOp.$crtmm$;}
    return $51;
}
ex$.getSpanOp=getSpanOp;
getSpanOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$50},pa:1,an:function(){return[m$1.doc("A span operator: ‘`..`’")];},d:['ceylon.lexer.core','spanOp']};};
$prop$getSpanOp={get:getSpanOp,$crtmm$:getSpanOp.$crtmm$};
getSpanOp=getSpanOp;$prop$getSpanOp=getSpanOp;
ex$.$prop$getSpanOp=$prop$getSpanOp;
function $52(){
    var measureOp$=new $52.$$;SymbolType("measureOp",measureOp$);
    return measureOp$;
};$52.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A measure operator: ‘`:`’")];},d:['ceylon.lexer.core','measureOp']};};
function $init$getMeasureOp(){
    if($52.$$===undefined){
        m$1.initTypeProto($52,'ceylon.lexer.core::measureOp',$init$SymbolType());
    }
    return $52;
}
ex$.$init$getMeasureOp=$init$getMeasureOp;
$init$getMeasureOp();
var $53;
function getMeasureOp(){
    if($53===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'measureOp\' before it was set"),'357:0-358:57','TokenType.ceylon');
    if($53===undefined){$53=m$1.INIT$;$53=$init$getMeasureOp()();$53.$crtmm$=getMeasureOp.$crtmm$;}
    return $53;
}
ex$.getMeasureOp=getMeasureOp;
getMeasureOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$52},pa:1,an:function(){return[m$1.doc("A measure operator: ‘`:`’")];},d:['ceylon.lexer.core','measureOp']};};
$prop$getMeasureOp={get:getMeasureOp,$crtmm$:getMeasureOp.$crtmm$};
getMeasureOp=getMeasureOp;$prop$getMeasureOp=getMeasureOp;
ex$.$prop$getMeasureOp=$prop$getMeasureOp;
function $54(){
    var entryOp$=new $54.$$;SymbolType("entryOp",entryOp$);
    return entryOp$;
};$54.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An entry operator: ‘`->`’")];},d:['ceylon.lexer.core','entryOp']};};
function $init$getEntryOp(){
    if($54.$$===undefined){
        m$1.initTypeProto($54,'ceylon.lexer.core::entryOp',$init$SymbolType());
    }
    return $54;
}
ex$.$init$getEntryOp=$init$getEntryOp;
$init$getEntryOp();
var $55;
function getEntryOp(){
    if($55===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'entryOp\' before it was set"),'360:0-361:53','TokenType.ceylon');
    if($55===undefined){$55=m$1.INIT$;$55=$init$getEntryOp()();$55.$crtmm$=getEntryOp.$crtmm$;}
    return $55;
}
ex$.getEntryOp=getEntryOp;
getEntryOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$54},pa:1,an:function(){return[m$1.doc("An entry operator: ‘`->`’")];},d:['ceylon.lexer.core','entryOp']};};
$prop$getEntryOp={get:getEntryOp,$crtmm$:getEntryOp.$crtmm$};
getEntryOp=getEntryOp;$prop$getEntryOp=getEntryOp;
ex$.$prop$getEntryOp=$prop$getEntryOp;
function $56(){
    var notOp$=new $56.$$;SymbolType("notOp",notOp$);
    return notOp$;
};$56.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A not operator: ‘`!`’")];},d:['ceylon.lexer.core','notOp']};};
function $init$getNotOp(){
    if($56.$$===undefined){
        m$1.initTypeProto($56,'ceylon.lexer.core::notOp',$init$SymbolType());
    }
    return $56;
}
ex$.$init$getNotOp=$init$getNotOp;
$init$getNotOp();
var $57;
function getNotOp(){
    if($57===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'notOp\' before it was set"),'363:0-364:49','TokenType.ceylon');
    if($57===undefined){$57=m$1.INIT$;$57=$init$getNotOp()();$57.$crtmm$=getNotOp.$crtmm$;}
    return $57;
}
ex$.getNotOp=getNotOp;
getNotOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$56},pa:1,an:function(){return[m$1.doc("A not operator: ‘`!`’")];},d:['ceylon.lexer.core','notOp']};};
$prop$getNotOp={get:getNotOp,$crtmm$:getNotOp.$crtmm$};
getNotOp=getNotOp;$prop$getNotOp=getNotOp;
ex$.$prop$getNotOp=$prop$getNotOp;
function $58(){
    var andOp$=new $58.$$;SymbolType("andOp",andOp$);
    return andOp$;
};$58.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An and operator: ‘`&&`’")];},d:['ceylon.lexer.core','andOp']};};
function $init$getAndOp(){
    if($58.$$===undefined){
        m$1.initTypeProto($58,'ceylon.lexer.core::andOp',$init$SymbolType());
    }
    return $58;
}
ex$.$init$getAndOp=$init$getAndOp;
$init$getAndOp();
var $59;
function getAndOp(){
    if($59===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'andOp\' before it was set"),'366:0-367:49','TokenType.ceylon');
    if($59===undefined){$59=m$1.INIT$;$59=$init$getAndOp()();$59.$crtmm$=getAndOp.$crtmm$;}
    return $59;
}
ex$.getAndOp=getAndOp;
getAndOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$58},pa:1,an:function(){return[m$1.doc("An and operator: ‘`&&`’")];},d:['ceylon.lexer.core','andOp']};};
$prop$getAndOp={get:getAndOp,$crtmm$:getAndOp.$crtmm$};
getAndOp=getAndOp;$prop$getAndOp=getAndOp;
ex$.$prop$getAndOp=$prop$getAndOp;
function $5a(){
    var orOp$=new $5a.$$;SymbolType("orOp",orOp$);
    return orOp$;
};$5a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An or operator: ‘`||`’")];},d:['ceylon.lexer.core','orOp']};};
function $init$getOrOp(){
    if($5a.$$===undefined){
        m$1.initTypeProto($5a,'ceylon.lexer.core::orOp',$init$SymbolType());
    }
    return $5a;
}
ex$.$init$getOrOp=$init$getOrOp;
$init$getOrOp();
var $5b;
function getOrOp(){
    if($5b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'orOp\' before it was set"),'369:0-370:47','TokenType.ceylon');
    if($5b===undefined){$5b=m$1.INIT$;$5b=$init$getOrOp()();$5b.$crtmm$=getOrOp.$crtmm$;}
    return $5b;
}
ex$.getOrOp=getOrOp;
getOrOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5a},pa:1,an:function(){return[m$1.doc("An or operator: ‘`||`’")];},d:['ceylon.lexer.core','orOp']};};
$prop$getOrOp={get:getOrOp,$crtmm$:getOrOp.$crtmm$};
getOrOp=getOrOp;$prop$getOrOp=getOrOp;
ex$.$prop$getOrOp=$prop$getOrOp;
function $5c(){
    var complementOp$=new $5c.$$;SymbolType("complementOp",complementOp$);
    return complementOp$;
};$5c.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A complement operator: ‘`~`’")];},d:['ceylon.lexer.core','complementOp']};};
function $init$getComplementOp(){
    if($5c.$$===undefined){
        m$1.initTypeProto($5c,'ceylon.lexer.core::complementOp',$init$SymbolType());
    }
    return $5c;
}
ex$.$init$getComplementOp=$init$getComplementOp;
$init$getComplementOp();
var $5d;
function getComplementOp(){
    if($5d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'complementOp\' before it was set"),'372:0-373:63','TokenType.ceylon');
    if($5d===undefined){$5d=m$1.INIT$;$5d=$init$getComplementOp()();$5d.$crtmm$=getComplementOp.$crtmm$;}
    return $5d;
}
ex$.getComplementOp=getComplementOp;
getComplementOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5c},pa:1,an:function(){return[m$1.doc("A complement operator: ‘`~`’")];},d:['ceylon.lexer.core','complementOp']};};
$prop$getComplementOp={get:getComplementOp,$crtmm$:getComplementOp.$crtmm$};
getComplementOp=getComplementOp;$prop$getComplementOp=getComplementOp;
ex$.$prop$getComplementOp=$prop$getComplementOp;
function $5e(){
    var intersectionOp$=new $5e.$$;SymbolType("intersectionOp",intersectionOp$);
    return intersectionOp$;
};$5e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An intersection operator: ‘`&`’")];},d:['ceylon.lexer.core','intersectionOp']};};
function $init$getIntersectionOp(){
    if($5e.$$===undefined){
        m$1.initTypeProto($5e,'ceylon.lexer.core::intersectionOp',$init$SymbolType());
    }
    return $5e;
}
ex$.$init$getIntersectionOp=$init$getIntersectionOp;
$init$getIntersectionOp();
var $5f;
function getIntersectionOp(){
    if($5f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'intersectionOp\' before it was set"),'375:0-376:67','TokenType.ceylon');
    if($5f===undefined){$5f=m$1.INIT$;$5f=$init$getIntersectionOp()();$5f.$crtmm$=getIntersectionOp.$crtmm$;}
    return $5f;
}
ex$.getIntersectionOp=getIntersectionOp;
getIntersectionOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5e},pa:1,an:function(){return[m$1.doc("An intersection operator: ‘`&`’")];},d:['ceylon.lexer.core','intersectionOp']};};
$prop$getIntersectionOp={get:getIntersectionOp,$crtmm$:getIntersectionOp.$crtmm$};
getIntersectionOp=getIntersectionOp;$prop$getIntersectionOp=getIntersectionOp;
ex$.$prop$getIntersectionOp=$prop$getIntersectionOp;
function $5g(){
    var unionOp$=new $5g.$$;SymbolType("unionOp",unionOp$);
    return unionOp$;
};$5g.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A union operator: ‘`|`’")];},d:['ceylon.lexer.core','unionOp']};};
function $init$getUnionOp(){
    if($5g.$$===undefined){
        m$1.initTypeProto($5g,'ceylon.lexer.core::unionOp',$init$SymbolType());
    }
    return $5g;
}
ex$.$init$getUnionOp=$init$getUnionOp;
$init$getUnionOp();
var $5h;
function getUnionOp(){
    if($5h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unionOp\' before it was set"),'378:0-379:53','TokenType.ceylon');
    if($5h===undefined){$5h=m$1.INIT$;$5h=$init$getUnionOp()();$5h.$crtmm$=getUnionOp.$crtmm$;}
    return $5h;
}
ex$.getUnionOp=getUnionOp;
getUnionOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5g},pa:1,an:function(){return[m$1.doc("A union operator: ‘`|`’")];},d:['ceylon.lexer.core','unionOp']};};
$prop$getUnionOp={get:getUnionOp,$crtmm$:getUnionOp.$crtmm$};
getUnionOp=getUnionOp;$prop$getUnionOp=getUnionOp;
ex$.$prop$getUnionOp=$prop$getUnionOp;
function $5i(){
    var identicalOp$=new $5i.$$;SymbolType("identicalOp",identicalOp$);
    return identicalOp$;
};$5i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:identicalOp')];},d:['ceylon.lexer.core','identicalOp']};};
function $init$getIdenticalOp(){
    if($5i.$$===undefined){
        m$1.initTypeProto($5i,'ceylon.lexer.core::identicalOp',$init$SymbolType());
    }
    return $5i;
}
ex$.$init$getIdenticalOp=$init$getIdenticalOp;
$init$getIdenticalOp();
var $5j;
function getIdenticalOp(){
    if($5j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'identicalOp\' before it was set"),'381:0-382:61','TokenType.ceylon');
    if($5j===undefined){$5j=m$1.INIT$;$5j=$init$getIdenticalOp()();$5j.$crtmm$=getIdenticalOp.$crtmm$;}
    return $5j;
}
ex$.getIdenticalOp=getIdenticalOp;
getIdenticalOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5i},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:identicalOp')];},d:['ceylon.lexer.core','identicalOp']};};
$prop$getIdenticalOp={get:getIdenticalOp,$crtmm$:getIdenticalOp.$crtmm$};
getIdenticalOp=getIdenticalOp;$prop$getIdenticalOp=getIdenticalOp;
ex$.$prop$getIdenticalOp=$prop$getIdenticalOp;
function $5k(){
    var equalOp$=new $5k.$$;SymbolType("equalOp",equalOp$);
    return equalOp$;
};$5k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:equalOp')];},d:['ceylon.lexer.core','equalOp']};};
function $init$getEqualOp(){
    if($5k.$$===undefined){
        m$1.initTypeProto($5k,'ceylon.lexer.core::equalOp',$init$SymbolType());
    }
    return $5k;
}
ex$.$init$getEqualOp=$init$getEqualOp;
$init$getEqualOp();
var $5l;
function getEqualOp(){
    if($5l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'equalOp\' before it was set"),'384:0-385:53','TokenType.ceylon');
    if($5l===undefined){$5l=m$1.INIT$;$5l=$init$getEqualOp()();$5l.$crtmm$=getEqualOp.$crtmm$;}
    return $5l;
}
ex$.getEqualOp=getEqualOp;
getEqualOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5k},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:equalOp')];},d:['ceylon.lexer.core','equalOp']};};
$prop$getEqualOp={get:getEqualOp,$crtmm$:getEqualOp.$crtmm$};
getEqualOp=getEqualOp;$prop$getEqualOp=getEqualOp;
ex$.$prop$getEqualOp=$prop$getEqualOp;
function $5m(){
    var notEqualOp$=new $5m.$$;SymbolType("notEqualOp",notEqualOp$);
    return notEqualOp$;
};$5m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:notEqualOp')];},d:['ceylon.lexer.core','notEqualOp']};};
function $init$getNotEqualOp(){
    if($5m.$$===undefined){
        m$1.initTypeProto($5m,'ceylon.lexer.core::notEqualOp',$init$SymbolType());
    }
    return $5m;
}
ex$.$init$getNotEqualOp=$init$getNotEqualOp;
$init$getNotEqualOp();
var $5n;
function getNotEqualOp(){
    if($5n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'notEqualOp\' before it was set"),'387:0-388:59','TokenType.ceylon');
    if($5n===undefined){$5n=m$1.INIT$;$5n=$init$getNotEqualOp()();$5n.$crtmm$=getNotEqualOp.$crtmm$;}
    return $5n;
}
ex$.getNotEqualOp=getNotEqualOp;
getNotEqualOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5m},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:notEqualOp')];},d:['ceylon.lexer.core','notEqualOp']};};
$prop$getNotEqualOp={get:getNotEqualOp,$crtmm$:getNotEqualOp.$crtmm$};
getNotEqualOp=getNotEqualOp;$prop$getNotEqualOp=getNotEqualOp;
ex$.$prop$getNotEqualOp=$prop$getNotEqualOp;
function $5o(){
    var smallerOp$=new $5o.$$;SymbolType("smallerOp",smallerOp$);
    return smallerOp$;
};$5o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A smaller-as operator: ‘`<`’")];},d:['ceylon.lexer.core','smallerOp']};};
function $init$getSmallerOp(){
    if($5o.$$===undefined){
        m$1.initTypeProto($5o,'ceylon.lexer.core::smallerOp',$init$SymbolType());
    }
    return $5o;
}
ex$.$init$getSmallerOp=$init$getSmallerOp;
$init$getSmallerOp();
var $5p;
function getSmallerOp(){
    if($5p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'smallerOp\' before it was set"),'390:0-391:57','TokenType.ceylon');
    if($5p===undefined){$5p=m$1.INIT$;$5p=$init$getSmallerOp()();$5p.$crtmm$=getSmallerOp.$crtmm$;}
    return $5p;
}
ex$.getSmallerOp=getSmallerOp;
getSmallerOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5o},pa:1,an:function(){return[m$1.doc("A smaller-as operator: ‘`<`’")];},d:['ceylon.lexer.core','smallerOp']};};
$prop$getSmallerOp={get:getSmallerOp,$crtmm$:getSmallerOp.$crtmm$};
getSmallerOp=getSmallerOp;$prop$getSmallerOp=getSmallerOp;
ex$.$prop$getSmallerOp=$prop$getSmallerOp;
function $5q(){
    var largerOp$=new $5q.$$;SymbolType("largerOp",largerOp$);
    return largerOp$;
};$5q.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A larger-as operator: ‘`>`’")];},d:['ceylon.lexer.core','largerOp']};};
function $init$getLargerOp(){
    if($5q.$$===undefined){
        m$1.initTypeProto($5q,'ceylon.lexer.core::largerOp',$init$SymbolType());
    }
    return $5q;
}
ex$.$init$getLargerOp=$init$getLargerOp;
$init$getLargerOp();
var $5r;
function getLargerOp(){
    if($5r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'largerOp\' before it was set"),'393:0-394:55','TokenType.ceylon');
    if($5r===undefined){$5r=m$1.INIT$;$5r=$init$getLargerOp()();$5r.$crtmm$=getLargerOp.$crtmm$;}
    return $5r;
}
ex$.getLargerOp=getLargerOp;
getLargerOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5q},pa:1,an:function(){return[m$1.doc("A larger-as operator: ‘`>`’")];},d:['ceylon.lexer.core','largerOp']};};
$prop$getLargerOp={get:getLargerOp,$crtmm$:getLargerOp.$crtmm$};
getLargerOp=getLargerOp;$prop$getLargerOp=getLargerOp;
ex$.$prop$getLargerOp=$prop$getLargerOp;
function $5s(){
    var smallAsOp$=new $5s.$$;SymbolType("smallAsOp",smallAsOp$);
    return smallAsOp$;
};$5s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:smallAsOp')];},d:['ceylon.lexer.core','smallAsOp']};};
function $init$getSmallAsOp(){
    if($5s.$$===undefined){
        m$1.initTypeProto($5s,'ceylon.lexer.core::smallAsOp',$init$SymbolType());
    }
    return $5s;
}
ex$.$init$getSmallAsOp=$init$getSmallAsOp;
$init$getSmallAsOp();
var $5t;
function getSmallAsOp(){
    if($5t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'smallAsOp\' before it was set"),'396:0-397:57','TokenType.ceylon');
    if($5t===undefined){$5t=m$1.INIT$;$5t=$init$getSmallAsOp()();$5t.$crtmm$=getSmallAsOp.$crtmm$;}
    return $5t;
}
ex$.getSmallAsOp=getSmallAsOp;
getSmallAsOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5s},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:smallAsOp')];},d:['ceylon.lexer.core','smallAsOp']};};
$prop$getSmallAsOp={get:getSmallAsOp,$crtmm$:getSmallAsOp.$crtmm$};
getSmallAsOp=getSmallAsOp;$prop$getSmallAsOp=getSmallAsOp;
ex$.$prop$getSmallAsOp=$prop$getSmallAsOp;
function $5u(){
    var largeAsOp$=new $5u.$$;SymbolType(">=",largeAsOp$);
    return largeAsOp$;
};$5u.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:largeAsOp')];},d:['ceylon.lexer.core','largeAsOp']};};
function $init$getLargeAsOp(){
    if($5u.$$===undefined){
        m$1.initTypeProto($5u,'ceylon.lexer.core::largeAsOp',$init$SymbolType());
    }
    return $5u;
}
ex$.$init$getLargeAsOp=$init$getLargeAsOp;
$init$getLargeAsOp();
var $5v;
function getLargeAsOp(){
    if($5v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'largeAsOp\' before it was set"),'399:0-400:50','TokenType.ceylon');
    if($5v===undefined){$5v=m$1.INIT$;$5v=$init$getLargeAsOp()();$5v.$crtmm$=getLargeAsOp.$crtmm$;}
    return $5v;
}
ex$.getLargeAsOp=getLargeAsOp;
getLargeAsOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5u},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:largeAsOp')];},d:['ceylon.lexer.core','largeAsOp']};};
$prop$getLargeAsOp={get:getLargeAsOp,$crtmm$:getLargeAsOp.$crtmm$};
getLargeAsOp=getLargeAsOp;$prop$getLargeAsOp=getLargeAsOp;
ex$.$prop$getLargeAsOp=$prop$getLargeAsOp;
function $5w(){
    var compareOp$=new $5w.$$;SymbolType("compareOp",compareOp$);
    return compareOp$;
};$5w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A compare operator: ‘`<=>`’")];},d:['ceylon.lexer.core','compareOp']};};
function $init$getCompareOp(){
    if($5w.$$===undefined){
        m$1.initTypeProto($5w,'ceylon.lexer.core::compareOp',$init$SymbolType());
    }
    return $5w;
}
ex$.$init$getCompareOp=$init$getCompareOp;
$init$getCompareOp();
var $5x;
function getCompareOp(){
    if($5x===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'compareOp\' before it was set"),'402:0-403:57','TokenType.ceylon');
    if($5x===undefined){$5x=m$1.INIT$;$5x=$init$getCompareOp()();$5x.$crtmm$=getCompareOp.$crtmm$;}
    return $5x;
}
ex$.getCompareOp=getCompareOp;
getCompareOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5w},pa:1,an:function(){return[m$1.doc("A compare operator: ‘`<=>`’")];},d:['ceylon.lexer.core','compareOp']};};
$prop$getCompareOp={get:getCompareOp,$crtmm$:getCompareOp.$crtmm$};
getCompareOp=getCompareOp;$prop$getCompareOp=getCompareOp;
ex$.$prop$getCompareOp=$prop$getCompareOp;
function $5y(){
    var addAssignOp$=new $5y.$$;SymbolType("addAssignOp",addAssignOp$);
    return addAssignOp$;
};$5y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An add-assign operator: ‘`+=`’")];},d:['ceylon.lexer.core','addAssignOp']};};
function $init$getAddAssignOp(){
    if($5y.$$===undefined){
        m$1.initTypeProto($5y,'ceylon.lexer.core::addAssignOp',$init$SymbolType());
    }
    return $5y;
}
ex$.$init$getAddAssignOp=$init$getAddAssignOp;
$init$getAddAssignOp();
var $5z;
function getAddAssignOp(){
    if($5z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'addAssignOp\' before it was set"),'405:0-406:61','TokenType.ceylon');
    if($5z===undefined){$5z=m$1.INIT$;$5z=$init$getAddAssignOp()();$5z.$crtmm$=getAddAssignOp.$crtmm$;}
    return $5z;
}
ex$.getAddAssignOp=getAddAssignOp;
getAddAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$5y},pa:1,an:function(){return[m$1.doc("An add-assign operator: ‘`+=`’")];},d:['ceylon.lexer.core','addAssignOp']};};
$prop$getAddAssignOp={get:getAddAssignOp,$crtmm$:getAddAssignOp.$crtmm$};
getAddAssignOp=getAddAssignOp;$prop$getAddAssignOp=getAddAssignOp;
ex$.$prop$getAddAssignOp=$prop$getAddAssignOp;
function $60(){
    var subtractAssignOp$=new $60.$$;SymbolType("subtractAssignOp",subtractAssignOp$);
    return subtractAssignOp$;
};$60.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A subtract-assign operator: ‘`-=`’")];},d:['ceylon.lexer.core','subtractAssignOp']};};
function $init$getSubtractAssignOp(){
    if($60.$$===undefined){
        m$1.initTypeProto($60,'ceylon.lexer.core::subtractAssignOp',$init$SymbolType());
    }
    return $60;
}
ex$.$init$getSubtractAssignOp=$init$getSubtractAssignOp;
$init$getSubtractAssignOp();
var $61;
function getSubtractAssignOp(){
    if($61===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'subtractAssignOp\' before it was set"),'408:0-409:71','TokenType.ceylon');
    if($61===undefined){$61=m$1.INIT$;$61=$init$getSubtractAssignOp()();$61.$crtmm$=getSubtractAssignOp.$crtmm$;}
    return $61;
}
ex$.getSubtractAssignOp=getSubtractAssignOp;
getSubtractAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$60},pa:1,an:function(){return[m$1.doc("A subtract-assign operator: ‘`-=`’")];},d:['ceylon.lexer.core','subtractAssignOp']};};
$prop$getSubtractAssignOp={get:getSubtractAssignOp,$crtmm$:getSubtractAssignOp.$crtmm$};
getSubtractAssignOp=getSubtractAssignOp;$prop$getSubtractAssignOp=getSubtractAssignOp;
ex$.$prop$getSubtractAssignOp=$prop$getSubtractAssignOp;
function $62(){
    var multiplyAssignOp$=new $62.$$;SymbolType("multiplyAssignOp",multiplyAssignOp$);
    return multiplyAssignOp$;
};$62.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A multiply-assign operator: ‘`*=`’")];},d:['ceylon.lexer.core','multiplyAssignOp']};};
function $init$getMultiplyAssignOp(){
    if($62.$$===undefined){
        m$1.initTypeProto($62,'ceylon.lexer.core::multiplyAssignOp',$init$SymbolType());
    }
    return $62;
}
ex$.$init$getMultiplyAssignOp=$init$getMultiplyAssignOp;
$init$getMultiplyAssignOp();
var $63;
function getMultiplyAssignOp(){
    if($63===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'multiplyAssignOp\' before it was set"),'411:0-412:71','TokenType.ceylon');
    if($63===undefined){$63=m$1.INIT$;$63=$init$getMultiplyAssignOp()();$63.$crtmm$=getMultiplyAssignOp.$crtmm$;}
    return $63;
}
ex$.getMultiplyAssignOp=getMultiplyAssignOp;
getMultiplyAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$62},pa:1,an:function(){return[m$1.doc("A multiply-assign operator: ‘`*=`’")];},d:['ceylon.lexer.core','multiplyAssignOp']};};
$prop$getMultiplyAssignOp={get:getMultiplyAssignOp,$crtmm$:getMultiplyAssignOp.$crtmm$};
getMultiplyAssignOp=getMultiplyAssignOp;$prop$getMultiplyAssignOp=getMultiplyAssignOp;
ex$.$prop$getMultiplyAssignOp=$prop$getMultiplyAssignOp;
function $64(){
    var divideAssignOp$=new $64.$$;SymbolType("divideAssignOp",divideAssignOp$);
    return divideAssignOp$;
};$64.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A divide-assign operator: ‘`/=`’")];},d:['ceylon.lexer.core','divideAssignOp']};};
function $init$getDivideAssignOp(){
    if($64.$$===undefined){
        m$1.initTypeProto($64,'ceylon.lexer.core::divideAssignOp',$init$SymbolType());
    }
    return $64;
}
ex$.$init$getDivideAssignOp=$init$getDivideAssignOp;
$init$getDivideAssignOp();
var $65;
function getDivideAssignOp(){
    if($65===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'divideAssignOp\' before it was set"),'414:0-415:67','TokenType.ceylon');
    if($65===undefined){$65=m$1.INIT$;$65=$init$getDivideAssignOp()();$65.$crtmm$=getDivideAssignOp.$crtmm$;}
    return $65;
}
ex$.getDivideAssignOp=getDivideAssignOp;
getDivideAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$64},pa:1,an:function(){return[m$1.doc("A divide-assign operator: ‘`/=`’")];},d:['ceylon.lexer.core','divideAssignOp']};};
$prop$getDivideAssignOp={get:getDivideAssignOp,$crtmm$:getDivideAssignOp.$crtmm$};
getDivideAssignOp=getDivideAssignOp;$prop$getDivideAssignOp=getDivideAssignOp;
ex$.$prop$getDivideAssignOp=$prop$getDivideAssignOp;
function $66(){
    var remainderAssignOp$=new $66.$$;SymbolType("remainderAssignOp",remainderAssignOp$);
    return remainderAssignOp$;
};$66.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A remainder-assign operator: ‘`%=`’")];},d:['ceylon.lexer.core','remainderAssignOp']};};
function $init$getRemainderAssignOp(){
    if($66.$$===undefined){
        m$1.initTypeProto($66,'ceylon.lexer.core::remainderAssignOp',$init$SymbolType());
    }
    return $66;
}
ex$.$init$getRemainderAssignOp=$init$getRemainderAssignOp;
$init$getRemainderAssignOp();
var $67;
function getRemainderAssignOp(){
    if($67===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'remainderAssignOp\' before it was set"),'417:0-418:73','TokenType.ceylon');
    if($67===undefined){$67=m$1.INIT$;$67=$init$getRemainderAssignOp()();$67.$crtmm$=getRemainderAssignOp.$crtmm$;}
    return $67;
}
ex$.getRemainderAssignOp=getRemainderAssignOp;
getRemainderAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$66},pa:1,an:function(){return[m$1.doc("A remainder-assign operator: ‘`%=`’")];},d:['ceylon.lexer.core','remainderAssignOp']};};
$prop$getRemainderAssignOp={get:getRemainderAssignOp,$crtmm$:getRemainderAssignOp.$crtmm$};
getRemainderAssignOp=getRemainderAssignOp;$prop$getRemainderAssignOp=getRemainderAssignOp;
ex$.$prop$getRemainderAssignOp=$prop$getRemainderAssignOp;
function $68(){
    var andAssignOp$=new $68.$$;SymbolType("andAssignOp",andAssignOp$);
    return andAssignOp$;
};$68.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An and-assign operator: ‘`&&=`’")];},d:['ceylon.lexer.core','andAssignOp']};};
function $init$getAndAssignOp(){
    if($68.$$===undefined){
        m$1.initTypeProto($68,'ceylon.lexer.core::andAssignOp',$init$SymbolType());
    }
    return $68;
}
ex$.$init$getAndAssignOp=$init$getAndAssignOp;
$init$getAndAssignOp();
var $69;
function getAndAssignOp(){
    if($69===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'andAssignOp\' before it was set"),'420:0-421:61','TokenType.ceylon');
    if($69===undefined){$69=m$1.INIT$;$69=$init$getAndAssignOp()();$69.$crtmm$=getAndAssignOp.$crtmm$;}
    return $69;
}
ex$.getAndAssignOp=getAndAssignOp;
getAndAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$68},pa:1,an:function(){return[m$1.doc("An and-assign operator: ‘`&&=`’")];},d:['ceylon.lexer.core','andAssignOp']};};
$prop$getAndAssignOp={get:getAndAssignOp,$crtmm$:getAndAssignOp.$crtmm$};
getAndAssignOp=getAndAssignOp;$prop$getAndAssignOp=getAndAssignOp;
ex$.$prop$getAndAssignOp=$prop$getAndAssignOp;
function $6a(){
    var orAssignOp$=new $6a.$$;SymbolType("orAssignOp",orAssignOp$);
    return orAssignOp$;
};$6a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An or-assign operator: ‘`||=`’")];},d:['ceylon.lexer.core','orAssignOp']};};
function $init$getOrAssignOp(){
    if($6a.$$===undefined){
        m$1.initTypeProto($6a,'ceylon.lexer.core::orAssignOp',$init$SymbolType());
    }
    return $6a;
}
ex$.$init$getOrAssignOp=$init$getOrAssignOp;
$init$getOrAssignOp();
var $6b;
function getOrAssignOp(){
    if($6b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'orAssignOp\' before it was set"),'423:0-424:59','TokenType.ceylon');
    if($6b===undefined){$6b=m$1.INIT$;$6b=$init$getOrAssignOp()();$6b.$crtmm$=getOrAssignOp.$crtmm$;}
    return $6b;
}
ex$.getOrAssignOp=getOrAssignOp;
getOrAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6a},pa:1,an:function(){return[m$1.doc("An or-assign operator: ‘`||=`’")];},d:['ceylon.lexer.core','orAssignOp']};};
$prop$getOrAssignOp={get:getOrAssignOp,$crtmm$:getOrAssignOp.$crtmm$};
getOrAssignOp=getOrAssignOp;$prop$getOrAssignOp=getOrAssignOp;
ex$.$prop$getOrAssignOp=$prop$getOrAssignOp;
function $6c(){
    var complementAssignOp$=new $6c.$$;SymbolType("complementAssignOp",complementAssignOp$);
    return complementAssignOp$;
};$6c.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A complement-assign operator: ‘`~=`’")];},d:['ceylon.lexer.core','complementAssignOp']};};
function $init$getComplementAssignOp(){
    if($6c.$$===undefined){
        m$1.initTypeProto($6c,'ceylon.lexer.core::complementAssignOp',$init$SymbolType());
    }
    return $6c;
}
ex$.$init$getComplementAssignOp=$init$getComplementAssignOp;
$init$getComplementAssignOp();
var $6d;
function getComplementAssignOp(){
    if($6d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'complementAssignOp\' before it was set"),'426:0-427:75','TokenType.ceylon');
    if($6d===undefined){$6d=m$1.INIT$;$6d=$init$getComplementAssignOp()();$6d.$crtmm$=getComplementAssignOp.$crtmm$;}
    return $6d;
}
ex$.getComplementAssignOp=getComplementAssignOp;
getComplementAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6c},pa:1,an:function(){return[m$1.doc("A complement-assign operator: ‘`~=`’")];},d:['ceylon.lexer.core','complementAssignOp']};};
$prop$getComplementAssignOp={get:getComplementAssignOp,$crtmm$:getComplementAssignOp.$crtmm$};
getComplementAssignOp=getComplementAssignOp;$prop$getComplementAssignOp=getComplementAssignOp;
ex$.$prop$getComplementAssignOp=$prop$getComplementAssignOp;
function $6e(){
    var intersectAssignOp$=new $6e.$$;SymbolType("intersectAssignOp",intersectAssignOp$);
    return intersectAssignOp$;
};$6e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("An intersect-assign operator: ‘`&=`’")];},d:['ceylon.lexer.core','intersectAssignOp']};};
function $init$getIntersectAssignOp(){
    if($6e.$$===undefined){
        m$1.initTypeProto($6e,'ceylon.lexer.core::intersectAssignOp',$init$SymbolType());
    }
    return $6e;
}
ex$.$init$getIntersectAssignOp=$init$getIntersectAssignOp;
$init$getIntersectAssignOp();
var $6f;
function getIntersectAssignOp(){
    if($6f===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'intersectAssignOp\' before it was set"),'429:0-430:73','TokenType.ceylon');
    if($6f===undefined){$6f=m$1.INIT$;$6f=$init$getIntersectAssignOp()();$6f.$crtmm$=getIntersectAssignOp.$crtmm$;}
    return $6f;
}
ex$.getIntersectAssignOp=getIntersectAssignOp;
getIntersectAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6e},pa:1,an:function(){return[m$1.doc("An intersect-assign operator: ‘`&=`’")];},d:['ceylon.lexer.core','intersectAssignOp']};};
$prop$getIntersectAssignOp={get:getIntersectAssignOp,$crtmm$:getIntersectAssignOp.$crtmm$};
getIntersectAssignOp=getIntersectAssignOp;$prop$getIntersectAssignOp=getIntersectAssignOp;
ex$.$prop$getIntersectAssignOp=$prop$getIntersectAssignOp;
function $6g(){
    var unionAssignOp$=new $6g.$$;SymbolType("unionAssignOp",unionAssignOp$);
    return unionAssignOp$;
};$6g.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SymbolType},pa:1,an:function(){return[m$1.doc("A union-assign operator: ‘`|=`’")];},d:['ceylon.lexer.core','unionAssignOp']};};
function $init$getUnionAssignOp(){
    if($6g.$$===undefined){
        m$1.initTypeProto($6g,'ceylon.lexer.core::unionAssignOp',$init$SymbolType());
    }
    return $6g;
}
ex$.$init$getUnionAssignOp=$init$getUnionAssignOp;
$init$getUnionAssignOp();
var $6h;
function getUnionAssignOp(){
    if($6h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unionAssignOp\' before it was set"),'432:0-433:65','TokenType.ceylon');
    if($6h===undefined){$6h=m$1.INIT$;$6h=$init$getUnionAssignOp()();$6h.$crtmm$=getUnionAssignOp.$crtmm$;}
    return $6h;
}
ex$.getUnionAssignOp=getUnionAssignOp;
getUnionAssignOp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6g},pa:1,an:function(){return[m$1.doc("A union-assign operator: ‘`|=`’")];},d:['ceylon.lexer.core','unionAssignOp']};};
$prop$getUnionAssignOp={get:getUnionAssignOp,$crtmm$:getUnionAssignOp.$crtmm$};
getUnionAssignOp=getUnionAssignOp;$prop$getUnionAssignOp=getUnionAssignOp;
ex$.$prop$getUnionAssignOp=$prop$getUnionAssignOp;
function ErrorType($6i,errorType$){
    $init$ErrorType();
    if(errorType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::ErrorType"),'?','?')
    errorType$.$6i_=$6i;
    TokenType(errorType$.$6i,errorType$);
    return errorType$;
}
ErrorType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[{t:UnknownType},{t:OpenType}],pa:257,an:function(){return[m$1.doc("An erroneous token.")];},d:['ceylon.lexer.core','ErrorType']};};
ex$.ErrorType=ErrorType;
function $init$ErrorType(){
    if(ErrorType.$$===undefined){
        m$1.initTypeProto(ErrorType,'ceylon.lexer.core::ErrorType',$init$TokenType());
        (function(errorType$){
            m$1.atr$(errorType$,'$6i',function(){return this.$6i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ErrorType,d:['ceylon.lexer.core','ErrorType','$at','string$45jqxo']};});
        })(ErrorType.$$.prototype);
    }
    return ErrorType;
}
ex$.$init$ErrorType=$init$ErrorType;
$init$ErrorType();
function UnknownType($6j,unknownType$){
    $init$UnknownType();
    if(unknownType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::UnknownType"),'?','?')
    unknownType$.$6j_=$6j;
    ErrorType(unknownType$.$6j,unknownType$);
    return unknownType$;
}
UnknownType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ErrorType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getUnknownCharacter,$prop$getUnknownEscape],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:UnknownType')];},d:['ceylon.lexer.core','UnknownType']};};
ex$.UnknownType=UnknownType;
function $init$UnknownType(){
    if(UnknownType.$$===undefined){
        m$1.initTypeProto(UnknownType,'ceylon.lexer.core::UnknownType',$init$ErrorType());
        (function(unknownType$){
            m$1.atr$(unknownType$,'$6j',function(){return this.$6j_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:UnknownType,d:['ceylon.lexer.core','UnknownType','$at','string$yy668i']};});
        })(UnknownType.$$.prototype);
    }
    return UnknownType;
}
ex$.$init$UnknownType=$init$UnknownType;
$init$UnknownType();
function $6k(){
    var unknownCharacter$=new $6k.$$;UnknownType("unknownCharacter",unknownCharacter$);
    return unknownCharacter$;
};$6k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnknownType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:unknownCharacter')];},d:['ceylon.lexer.core','unknownCharacter']};};
function $init$getUnknownCharacter(){
    if($6k.$$===undefined){
        m$1.initTypeProto($6k,'ceylon.lexer.core::unknownCharacter',$init$UnknownType());
    }
    return $6k;
}
ex$.$init$getUnknownCharacter=$init$getUnknownCharacter;
$init$getUnknownCharacter();
var $6l;
function getUnknownCharacter(){
    if($6l===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unknownCharacter\' before it was set"),'446:0-447:72','TokenType.ceylon');
    if($6l===undefined){$6l=m$1.INIT$;$6l=$init$getUnknownCharacter()();$6l.$crtmm$=getUnknownCharacter.$crtmm$;}
    return $6l;
}
ex$.getUnknownCharacter=getUnknownCharacter;
getUnknownCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6k},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:unknownCharacter')];},d:['ceylon.lexer.core','unknownCharacter']};};
$prop$getUnknownCharacter={get:getUnknownCharacter,$crtmm$:getUnknownCharacter.$crtmm$};
getUnknownCharacter=getUnknownCharacter;$prop$getUnknownCharacter=getUnknownCharacter;
ex$.$prop$getUnknownCharacter=$prop$getUnknownCharacter;
function $6m(){
    var unknownEscape$=new $6m.$$;UnknownType("unknownEscape",unknownEscape$);
    return unknownEscape$;
};$6m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnknownType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:unknownEscape')];},d:['ceylon.lexer.core','unknownEscape']};};
function $init$getUnknownEscape(){
    if($6m.$$===undefined){
        m$1.initTypeProto($6m,'ceylon.lexer.core::unknownEscape',$init$UnknownType());
    }
    return $6m;
}
ex$.$init$getUnknownEscape=$init$getUnknownEscape;
$init$getUnknownEscape();
var $6n;
function getUnknownEscape(){
    if($6n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unknownEscape\' before it was set"),'449:0-450:66','TokenType.ceylon');
    if($6n===undefined){$6n=m$1.INIT$;$6n=$init$getUnknownEscape()();$6n.$crtmm$=getUnknownEscape.$crtmm$;}
    return $6n;
}
ex$.getUnknownEscape=getUnknownEscape;
getUnknownEscape.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6m},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:unknownEscape')];},d:['ceylon.lexer.core','unknownEscape']};};
$prop$getUnknownEscape={get:getUnknownEscape,$crtmm$:getUnknownEscape.$crtmm$};
getUnknownEscape=getUnknownEscape;$prop$getUnknownEscape=getUnknownEscape;
ex$.$prop$getUnknownEscape=$prop$getUnknownEscape;
function OpenType($6o,openType$){
    $init$OpenType();
    if(openType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.lexer.core::OpenType"),'?','?')
    openType$.$6o_=$6o;
    ErrorType(openType$.$6o,openType$);
    return openType$;
}
OpenType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ErrorType},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],of:[$prop$getOpenStringLiteral,$prop$getOpenStringPart,$prop$getOpenVerbatimStringLiteral,$prop$getOpenCharacterLiteral,$prop$getOpenMultiComment],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:OpenType')];},d:['ceylon.lexer.core','OpenType']};};
ex$.OpenType=OpenType;
function $init$OpenType(){
    if(OpenType.$$===undefined){
        m$1.initTypeProto(OpenType,'ceylon.lexer.core::OpenType',$init$ErrorType());
        (function(openType$){
            m$1.atr$(openType$,'$6o',function(){return this.$6o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OpenType,d:['ceylon.lexer.core','OpenType','$at','string$frg2su']};});
        })(OpenType.$$.prototype);
    }
    return OpenType;
}
ex$.$init$OpenType=$init$OpenType;
$init$OpenType();
function $6p(){
    var openStringLiteral$=new $6p.$$;OpenType("openStringLiteral",openStringLiteral$);
    return openStringLiteral$;
};$6p.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OpenType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:openStringLiteral')];},d:['ceylon.lexer.core','openStringLiteral']};};
function $init$getOpenStringLiteral(){
    if($6p.$$===undefined){
        m$1.initTypeProto($6p,'ceylon.lexer.core::openStringLiteral',$init$OpenType());
    }
    return $6p;
}
ex$.$init$getOpenStringLiteral=$init$getOpenStringLiteral;
$init$getOpenStringLiteral();
var $6q;
function getOpenStringLiteral(){
    if($6q===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'openStringLiteral\' before it was set"),'457:0-458:71','TokenType.ceylon');
    if($6q===undefined){$6q=m$1.INIT$;$6q=$init$getOpenStringLiteral()();$6q.$crtmm$=getOpenStringLiteral.$crtmm$;}
    return $6q;
}
ex$.getOpenStringLiteral=getOpenStringLiteral;
getOpenStringLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6p},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:openStringLiteral')];},d:['ceylon.lexer.core','openStringLiteral']};};
$prop$getOpenStringLiteral={get:getOpenStringLiteral,$crtmm$:getOpenStringLiteral.$crtmm$};
getOpenStringLiteral=getOpenStringLiteral;$prop$getOpenStringLiteral=getOpenStringLiteral;
ex$.$prop$getOpenStringLiteral=$prop$getOpenStringLiteral;
function $6r(){
    var openStringPart$=new $6r.$$;OpenType("openStringPart",openStringPart$);
    return openStringPart$;
};$6r.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OpenType},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:openStringPart')];},d:['ceylon.lexer.core','openStringPart']};};
function $init$getOpenStringPart(){
    if($6r.$$===undefined){
        m$1.initTypeProto($6r,'ceylon.lexer.core::openStringPart',$init$OpenType());
    }
    return $6r;
}
ex$.$init$getOpenStringPart=$init$getOpenStringPart;
$init$getOpenStringPart();
var $6s;
function getOpenStringPart(){
    if($6s===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'openStringPart\' before it was set"),'460:0-461:65','TokenType.ceylon');
    if($6s===undefined){$6s=m$1.INIT$;$6s=$init$getOpenStringPart()();$6s.$crtmm$=getOpenStringPart.$crtmm$;}
    return $6s;
}
ex$.getOpenStringPart=getOpenStringPart;
getOpenStringPart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6r},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:openStringPart')];},d:['ceylon.lexer.core','openStringPart']};};
$prop$getOpenStringPart={get:getOpenStringPart,$crtmm$:getOpenStringPart.$crtmm$};
getOpenStringPart=getOpenStringPart;$prop$getOpenStringPart=getOpenStringPart;
ex$.$prop$getOpenStringPart=$prop$getOpenStringPart;
function $6t(){
    var openVerbatimStringLiteral$=new $6t.$$;OpenType("openVerbatimStringLiteral",openVerbatimStringLiteral$);
    return openVerbatimStringLiteral$;
};$6t.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OpenType},pa:1,an:function(){return[m$1.doc("An unterminated [[verbatimStringLiteral]].")];},d:['ceylon.lexer.core','openVerbatimStringLiteral']};};
function $init$getOpenVerbatimStringLiteral(){
    if($6t.$$===undefined){
        m$1.initTypeProto($6t,'ceylon.lexer.core::openVerbatimStringLiteral',$init$OpenType());
    }
    return $6t;
}
ex$.$init$getOpenVerbatimStringLiteral=$init$getOpenVerbatimStringLiteral;
$init$getOpenVerbatimStringLiteral();
var $6u;
function getOpenVerbatimStringLiteral(){
    if($6u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'openVerbatimStringLiteral\' before it was set"),'463:0-464:87','TokenType.ceylon');
    if($6u===undefined){$6u=m$1.INIT$;$6u=$init$getOpenVerbatimStringLiteral()();$6u.$crtmm$=getOpenVerbatimStringLiteral.$crtmm$;}
    return $6u;
}
ex$.getOpenVerbatimStringLiteral=getOpenVerbatimStringLiteral;
getOpenVerbatimStringLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6t},pa:1,an:function(){return[m$1.doc("An unterminated [[verbatimStringLiteral]].")];},d:['ceylon.lexer.core','openVerbatimStringLiteral']};};
$prop$getOpenVerbatimStringLiteral={get:getOpenVerbatimStringLiteral,$crtmm$:getOpenVerbatimStringLiteral.$crtmm$};
getOpenVerbatimStringLiteral=getOpenVerbatimStringLiteral;$prop$getOpenVerbatimStringLiteral=getOpenVerbatimStringLiteral;
ex$.$prop$getOpenVerbatimStringLiteral=$prop$getOpenVerbatimStringLiteral;
function $6v(){
    var openCharacterLiteral$=new $6v.$$;OpenType("openCharacterLiteral",openCharacterLiteral$);
    return openCharacterLiteral$;
};$6v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OpenType},pa:1,an:function(){return[m$1.doc("An unterminated [[characterLiteral]].")];},d:['ceylon.lexer.core','openCharacterLiteral']};};
function $init$getOpenCharacterLiteral(){
    if($6v.$$===undefined){
        m$1.initTypeProto($6v,'ceylon.lexer.core::openCharacterLiteral',$init$OpenType());
    }
    return $6v;
}
ex$.$init$getOpenCharacterLiteral=$init$getOpenCharacterLiteral;
$init$getOpenCharacterLiteral();
var $6w;
function getOpenCharacterLiteral(){
    if($6w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'openCharacterLiteral\' before it was set"),'466:0-467:77','TokenType.ceylon');
    if($6w===undefined){$6w=m$1.INIT$;$6w=$init$getOpenCharacterLiteral()();$6w.$crtmm$=getOpenCharacterLiteral.$crtmm$;}
    return $6w;
}
ex$.getOpenCharacterLiteral=getOpenCharacterLiteral;
getOpenCharacterLiteral.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6v},pa:1,an:function(){return[m$1.doc("An unterminated [[characterLiteral]].")];},d:['ceylon.lexer.core','openCharacterLiteral']};};
$prop$getOpenCharacterLiteral={get:getOpenCharacterLiteral,$crtmm$:getOpenCharacterLiteral.$crtmm$};
getOpenCharacterLiteral=getOpenCharacterLiteral;$prop$getOpenCharacterLiteral=getOpenCharacterLiteral;
ex$.$prop$getOpenCharacterLiteral=$prop$getOpenCharacterLiteral;
function $6x(){
    var openMultiComment$=new $6x.$$;OpenType("openMultiComment",openMultiComment$);
    return openMultiComment$;
};$6x.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OpenType},pa:1,an:function(){return[m$1.doc("An unterminated [[multiComment]].")];},d:['ceylon.lexer.core','openMultiComment']};};
function $init$getOpenMultiComment(){
    if($6x.$$===undefined){
        m$1.initTypeProto($6x,'ceylon.lexer.core::openMultiComment',$init$OpenType());
    }
    return $6x;
}
ex$.$init$getOpenMultiComment=$init$getOpenMultiComment;
$init$getOpenMultiComment();
var $6y;
function getOpenMultiComment(){
    if($6y===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'openMultiComment\' before it was set"),'469:0-470:69','TokenType.ceylon');
    if($6y===undefined){$6y=m$1.INIT$;$6y=$init$getOpenMultiComment()();$6y.$crtmm$=getOpenMultiComment.$crtmm$;}
    return $6y;
}
ex$.getOpenMultiComment=getOpenMultiComment;
getOpenMultiComment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6x},pa:1,an:function(){return[m$1.doc("An unterminated [[multiComment]].")];},d:['ceylon.lexer.core','openMultiComment']};};
$prop$getOpenMultiComment={get:getOpenMultiComment,$crtmm$:getOpenMultiComment.$crtmm$};
getOpenMultiComment=getOpenMultiComment;$prop$getOpenMultiComment=getOpenMultiComment;
ex$.$prop$getOpenMultiComment=$prop$getOpenMultiComment;
function CharacterSourceStream($6z,characterSourceStream$){
    $init$CharacterSourceStream();
    if(characterSourceStream$===undefined)characterSourceStream$=new CharacterSourceStream.$$;
    characterSourceStream$.$6z_=$6z;
    CharacterStream(characterSourceStream$);
    characterSourceStream$.$70_=m$2.LinkedList(undefined,{Element$LinkedList:{t:m$1.Character}});
    characterSourceStream$.$prop$get$70={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:{t:m$1.Character}}},$cont:CharacterSourceStream,d:['ceylon.lexer.core','CharacterSourceStream','$at','characters$au111d']};}};
    characterSourceStream$.$prop$get$70.get=function(){return $70};
    return characterSourceStream$;
}
CharacterSourceStream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'source',mt:'prm',$t:{t:CharacterSource}}],sts:[{t:CharacterStream}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CharacterSourceStream')];},d:['ceylon.lexer.core','CharacterSourceStream']};};
ex$.CharacterSourceStream=CharacterSourceStream;
function $init$CharacterSourceStream(){
    if(CharacterSourceStream.$$===undefined){
        m$1.initTypeProto(CharacterSourceStream,'ceylon.lexer.core::CharacterSourceStream',m$1.Basic,$init$CharacterStream());
        (function(characterSourceStream$){
            m$1.atr$(characterSourceStream$,'$70',function(){return this.$70_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.LinkedList,a:{Element$LinkedList:{t:m$1.Character}}},$cont:CharacterSourceStream,d:['ceylon.lexer.core','CharacterSourceStream','$at','characters$au111d']};});
            characterSourceStream$.$71=function($72){
                var characterSourceStream$=this;
                while(($72>characterSourceStream$.$70.size)){
                    characterSourceStream$.$70.add(characterSourceStream$.$6z.nextCharacter());
                }
            };characterSourceStream$.$71.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterSourceStream,d:['ceylon.lexer.core','CharacterSourceStream','$m','fill$8s55u8']};};
            characterSourceStream$.peek=function($73){
                var characterSourceStream$=this;
                if($73===undefined){$73=characterSourceStream$.peek$defs$n($73);}
                characterSourceStream$.$71($73.plus(1));
                var $74;
                m$1.asrt$((m$1.nn$(($74=characterSourceStream$.$70.$_get($73)))),"Assertion failed: \'exists ret = characters[n]\' at CharacterSourceStream.ceylon (20:15-20:42)",'20:8-20:43','CharacterSourceStream.ceylon');
                return $74;
            };characterSourceStream$.peek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:CharacterSourceStream,pa:3,d:['ceylon.lexer.core','CharacterSourceStream','$m','peek']};};
            characterSourceStream$.consume=function($75){
                var characterSourceStream$=this;
                if($75===undefined){$75=characterSourceStream$.consume$defs$count($75);}
                characterSourceStream$.$70.deleteMeasure(0,$75);
            };characterSourceStream$.consume.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:CharacterSourceStream,pa:3,d:['ceylon.lexer.core','CharacterSourceStream','$m','consume']};};
            m$1.atr$(characterSourceStream$,'$6z',function(){return this.$6z_;},undefined,function(){return{mod:$CCMM$,$t:{t:CharacterSource},$cont:CharacterSourceStream,d:['ceylon.lexer.core','CharacterSourceStream','$at','source$8cuio8']};});
        })(CharacterSourceStream.$$.prototype);
    }
    return CharacterSourceStream;
}
ex$.$init$CharacterSourceStream=$init$CharacterSourceStream;
$init$CharacterSourceStream();
function TokenStream(tokenStream$){
    TokenSource(tokenStream$);
    tokenStream$.peek$defs$n=function($76){return 0;};
    tokenStream$.consume$defs$count=function($77){return 1;};
}
TokenStream.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:TokenSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream')];},d:['ceylon.lexer.core','TokenStream']};};
ex$.TokenStream=TokenStream;
function $init$TokenStream(){
    if(TokenStream.$$===undefined){
        m$1.initTypeProtoI(TokenStream,'ceylon.lexer.core::TokenStream',$init$TokenSource());
        (function(tokenStream$){
            function Marker$TokenStream(marker$TokenStream$){
                $init$Marker$TokenStream();
                if(marker$TokenStream$===undefined)marker$TokenStream$=new this.Marker$TokenStream.$$;
                marker$TokenStream$.outer$=this;
                m$1.Destroyable(marker$TokenStream$);
                return marker$TokenStream$;
            }
            Marker$TokenStream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],$cont:TokenStream,sts:[{t:m$1.Destroyable}],pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream:$c:Marker')];},d:['ceylon.lexer.core','TokenStream','$c','Marker']};};
            function $init$Marker$TokenStream(){
                if(Marker$TokenStream.$$===undefined){
                    m$1.initTypeProto(Marker$TokenStream,'ceylon.lexer.core::TokenStream.Marker',m$1.Basic,m$1.Destroyable);
                    TokenStream.Marker$TokenStream=Marker$TokenStream;
                    (function(marker$TokenStream$){
                        marker$TokenStream$.$prop$getIndex={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:tokenStream$.Marker$TokenStream,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream:$c:Marker:$at:index')];},d:['ceylon.lexer.core','TokenStream','$c','Marker','$at','index']};}};
                        marker$TokenStream$.destroy={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'error',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:tokenStream$.Marker$TokenStream,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream:$c:Marker:$m:destroy')];},d:['ceylon.lexer.core','TokenStream','$c','Marker','$m','destroy']};}};
                    })(Marker$TokenStream.$$.prototype);
                }
                return Marker$TokenStream;
            }
            tokenStream$.$init$Marker$TokenStream=$init$Marker$TokenStream;
            $init$Marker$TokenStream();
            tokenStream$.Marker$TokenStream=Marker$TokenStream;
            tokenStream$.peek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TokenStream,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream:$m:peek')];},d:['ceylon.lexer.core','TokenStream','$m','peek']};}};tokenStream$.consume={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TokenStream,pa:5,an:function(){return[m$1.doc("Consume [[count]] tokens.")];},d:['ceylon.lexer.core','TokenStream','$m','consume']};}};tokenStream$.nextToken=function(){
                var tokenStream$=this;
                var $78=tokenStream$.peek();
                tokenStream$.consume();
                return $78;
            };tokenStream$.nextToken.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:TokenStream,pa:11,d:['ceylon.lexer.core','TokenStream','$m','nextToken']};};
            tokenStream$.seek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:TokenStream,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenStream:$m:seek')];},d:['ceylon.lexer.core','TokenStream','$m','seek']};}};
        })(TokenStream.$$.prototype);
    }
    return TokenStream;
}
ex$.$init$TokenStream=$init$TokenStream;
$init$TokenStream();
ex$.$mod$ans$=function(){return[m$1.doc("A lexer for the Ceylon programming language.\n\n# Usage\n\n[[String]] → [[TokenStream]]:\n\n    TokenStream tokens\n            = TokenSourceStream( // adds lookahead and seeking capabilities to the stream\n        CeylonLexer( // does the lexing\n            StringCharacterStream( // yields characters from the string\n                string)));\n\n[[String]] → [[TokenStream]], filtering whitespace and comments:\n\n    TokenStream tokens\n            = TokenSourceStream( // adds lookahead and seeking capabilities to the stream\n        NonIgnoredTokenSource( // filters out ignored tokens (whitespace, comments)\n            CeylonLexer( // does the lexing\n                StringCharacterStream( // yields characters from the string\n                    string))));")];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.1.0':[]
};};
function NonIgnoredTokenSource($79,nonIgnoredTokenSource$){
    $init$NonIgnoredTokenSource();
    if(nonIgnoredTokenSource$===undefined)nonIgnoredTokenSource$=new NonIgnoredTokenSource.$$;
    nonIgnoredTokenSource$.$79_=$79;
    TokenSource(nonIgnoredTokenSource$);
    nonIgnoredTokenSource$.$prop$get$79={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:NonIgnoredTokenSource,an:function(){return[m$1.doc("The underlying [[TokenSource]].")];},d:['ceylon.lexer.core','NonIgnoredTokenSource','$at','source$jb869h']};}};
    nonIgnoredTokenSource$.$prop$get$79.get=function(){return $79};
    return nonIgnoredTokenSource$;
}
NonIgnoredTokenSource.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'source',mt:'prm',$t:{t:TokenSource},an:function(){return[m$1.doc("The underlying [[TokenSource]].")];}}],sts:[{t:TokenSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:NonIgnoredTokenSource')];},d:['ceylon.lexer.core','NonIgnoredTokenSource']};};
ex$.NonIgnoredTokenSource=NonIgnoredTokenSource;
function $init$NonIgnoredTokenSource(){
    if(NonIgnoredTokenSource.$$===undefined){
        m$1.initTypeProto(NonIgnoredTokenSource,'ceylon.lexer.core::NonIgnoredTokenSource',m$1.Basic,$init$TokenSource());
        (function(nonIgnoredTokenSource$){
            m$1.atr$(nonIgnoredTokenSource$,'$79',function(){return this.$79_;},undefined,function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:NonIgnoredTokenSource,an:function(){return[m$1.doc("The underlying [[TokenSource]].")];},d:['ceylon.lexer.core','NonIgnoredTokenSource','$at','source$jb869h']};});
            nonIgnoredTokenSource$.nextToken=function(){
                var nonIgnoredTokenSource$=this;
                var $7a;
                if(m$1.nn$(($7a=nonIgnoredTokenSource$.$79.nextToken()))){
                    var $7b=$7a;
                    function set$7b($7c){return $7b=$7c;};
                    while(m$1.is$($7b.type,{t:IgnoredType})){
                        var $7d;
                        if(m$1.nn$(($7d=nonIgnoredTokenSource$.$79.nextToken()))){
                            $7b=$7d;
                        }else {
                            return null;
                        }
                    }
                    return $7b;
                }else {
                    return null;
                }
            };nonIgnoredTokenSource$.nextToken.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:NonIgnoredTokenSource,pa:3,d:['ceylon.lexer.core','NonIgnoredTokenSource','$m','nextToken']};};
        })(NonIgnoredTokenSource.$$.prototype);
    }
    return NonIgnoredTokenSource;
}
ex$.$init$NonIgnoredTokenSource=$init$NonIgnoredTokenSource;
$init$NonIgnoredTokenSource();
function TokenSource(tokenSource$){
    m$1.Iterator({Element$Iterator:{t:Token}},tokenSource$);
}
TokenSource.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:Token}}}],pa:1,an:function(){return[m$1.doc("A stream of tokens.")];},d:['ceylon.lexer.core','TokenSource']};};
ex$.TokenSource=TokenSource;
function $init$TokenSource(){
    if(TokenSource.$$===undefined){
        m$1.initTypeProtoI(TokenSource,'ceylon.lexer.core::TokenSource',m$1.Iterator);
        (function(tokenSource$){
            tokenSource$.nextToken={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:TokenSource,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenSource:$m:nextToken')];},d:['ceylon.lexer.core','TokenSource','$m','nextToken']};}};tokenSource$.next=function(){
                var tokenSource$=this;
                return ($7e=tokenSource$.nextToken(),m$1.nn$($7e)?$7e:m$1.getFinished());
            };
            tokenSource$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Token},{t:m$1.Finished}]},ps:[],$cont:TokenSource,pa:3,d:['ceylon.lexer.core','TokenSource','$m','next']};};
        })(TokenSource.$$.prototype);
    }
    return TokenSource;
}
ex$.$init$TokenSource=$init$TokenSource;
$init$TokenSource();
var $7e;
function Token(type,text,token$){
    $init$Token();
    if(token$===undefined)token$=new Token.$$;
    token$.type_=type;
    token$.text_=text;
    token$.$prop$getType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TokenType},$cont:Token,pa:1,d:['ceylon.lexer.core','Token','$at','type']};}};
    token$.$prop$getType.get=function(){return type};
    token$.$prop$getText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Token,pa:1,d:['ceylon.lexer.core','Token','$at','text']};}};
    token$.$prop$getText.get=function(){return text};
    token$.$prop$getHash={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Token,pa:3,d:['ceylon.lexer.core','Token','$at','hash']};}};
    token$.$prop$getHash.get=function(){return hash};
    return token$;
}
Token.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:TokenType},pa:1},{nm:'text',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:Token')];},d:['ceylon.lexer.core','Token']};};
ex$.Token=Token;
function $init$Token(){
    if(Token.$$===undefined){
        m$1.initTypeProto(Token,'ceylon.lexer.core::Token',m$1.Basic);
        (function(token$){
            m$1.atr$(token$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:TokenType},$cont:Token,pa:1,d:['ceylon.lexer.core','Token','$at','type']};});
            m$1.atr$(token$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Token,pa:1,d:['ceylon.lexer.core','Token','$at','text']};});
            m$1.atr$(token$,'string',function(){
                var token$=this;
                var $7f;
                $prop$get$7f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:token$.$prop$getString,pa:3,d:['ceylon.lexer.core','Token','$at','string','$at','verbatimQuoteText$oqipkx']};}};
                $prop$get$7f.get=function(){return $7f};
                if((token$.type.equals(getLidentifier())||token$.type.equals(getUidentifier()))){
                    $7f=token$.text.startsWith("\\");
                }else {
                    $7f=false;
                }
                var $7g=($7h=($7f?"\"\"\"":null),m$1.nn$($7h)?$7h:"\"");
                $prop$get$7g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:token$.$prop$getString,d:['ceylon.lexer.core','Token','$at','string','$at','quotes$vz8qjf']};}};
                $prop$get$7g.get=function(){return $7g};
                var $7h;
                return "Token(".plus(token$.type.string).plus(", ").plus($7g).plus("").plus(token$.text).plus("").plus($7g).plus(")");
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Token,pa:3,d:['ceylon.lexer.core','Token','$at','string']};});token$.equals=function($7i){
                var token$=this;
                var $7j;
                if(m$1.is$(($7j=$7i),{t:Token})){
                    return (token$.type.equals($7j.type)&&token$.text.equals($7j.text));
                }else {
                    return false;
                }
            };token$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Token,pa:3,d:['ceylon.lexer.core','Token','$m','equals']};};
            m$1.atr$(token$,'hash',function(){
                var token$=this;
                return (31).times(token$.type.hash.plus((31).times(token$.text.hash)));
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Token,pa:3,d:['ceylon.lexer.core','Token','$at','hash']};});
        })(Token.$$.prototype);
    }
    return Token;
}
ex$.$init$Token=$init$Token;
$init$Token();
function IterableTokenSource($7k,iterableTokenSource$){
    $init$IterableTokenSource();
    if(iterableTokenSource$===undefined)iterableTokenSource$=new IterableTokenSource.$$;
    iterableTokenSource$.$7k_=$7k;
    TokenSource(iterableTokenSource$);
    iterableTokenSource$.$7l_=iterableTokenSource$.$7k.iterator();
    iterableTokenSource$.$prop$get$7l={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Token}}},$cont:IterableTokenSource,d:['ceylon.lexer.core','IterableTokenSource','$at','it$w2gal6']};}};
    iterableTokenSource$.$prop$get$7l.get=function(){return $7l};
    return iterableTokenSource$;
}
IterableTokenSource.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'tokens',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Token}}}}],sts:[{t:TokenSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:IterableTokenSource')];},d:['ceylon.lexer.core','IterableTokenSource']};};
ex$.IterableTokenSource=IterableTokenSource;
function $init$IterableTokenSource(){
    if(IterableTokenSource.$$===undefined){
        m$1.initTypeProto(IterableTokenSource,'ceylon.lexer.core::IterableTokenSource',m$1.Basic,$init$TokenSource());
        (function(iterableTokenSource$){
            m$1.atr$(iterableTokenSource$,'$7l',function(){return this.$7l_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Token}}},$cont:IterableTokenSource,d:['ceylon.lexer.core','IterableTokenSource','$at','it$w2gal6']};});
            iterableTokenSource$.nextToken=function(){
                var iterableTokenSource$=this;
                var $7m=iterableTokenSource$.$7l.next();
                var $7n=$7m;
                if(m$1.is$($7m,{t:Token})) {
                    return $7n;
                }else if($7n===m$1.getFinished()) {
                    return null;
                }
            };iterableTokenSource$.nextToken.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:IterableTokenSource,pa:3,d:['ceylon.lexer.core','IterableTokenSource','$m','nextToken']};};
            m$1.atr$(iterableTokenSource$,'$7k',function(){return this.$7k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Token}}},$cont:IterableTokenSource,d:['ceylon.lexer.core','IterableTokenSource','$at','tokens$czkjcz']};});
        })(IterableTokenSource.$$.prototype);
    }
    return IterableTokenSource;
}
ex$.$init$IterableTokenSource=$init$IterableTokenSource;
$init$IterableTokenSource();
function FilteringTokenSource($7o,$7p,filteringTokenSource$){
    $init$FilteringTokenSource();
    if(filteringTokenSource$===undefined)filteringTokenSource$=new FilteringTokenSource.$$;
    filteringTokenSource$.$7o_=$7o;
    filteringTokenSource$.$7p_=$7p;
    TokenSource(filteringTokenSource$);
    filteringTokenSource$.$prop$get$7o={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:FilteringTokenSource,an:function(){return[m$1.doc("The underlying [[TokenSource]].")];},d:['ceylon.lexer.core','FilteringTokenSource','$at','source$8akjhe']};}};
    filteringTokenSource$.$prop$get$7o.get=function(){return $7o};
    filteringTokenSource$.$7p=$7p;
    return filteringTokenSource$;
}
FilteringTokenSource.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'source',mt:'prm',$t:{t:TokenSource},an:function(){return[m$1.doc("The underlying [[TokenSource]].")];}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:FilteringTokenSource:$m:selecting$mezqmn')];}}],sts:[{t:TokenSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:FilteringTokenSource')];},d:['ceylon.lexer.core','FilteringTokenSource']};};
ex$.FilteringTokenSource=FilteringTokenSource;
function $init$FilteringTokenSource(){
    if(FilteringTokenSource.$$===undefined){
        m$1.initTypeProto(FilteringTokenSource,'ceylon.lexer.core::FilteringTokenSource',m$1.Basic,$init$TokenSource());
        (function(filteringTokenSource$){
            m$1.atr$(filteringTokenSource$,'$7o',function(){return this.$7o_;},undefined,function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:FilteringTokenSource,an:function(){return[m$1.doc("The underlying [[TokenSource]].")];},d:['ceylon.lexer.core','FilteringTokenSource','$at','source$8akjhe']};});
            filteringTokenSource$.nextToken=function(){
                var filteringTokenSource$=this;
                var $7q;
                if(m$1.nn$(($7q=filteringTokenSource$.$7o.nextToken()))){
                    var $7r=$7q;
                    function set$7r($7s){return $7r=$7s;};
                    while(!filteringTokenSource$.$7p($7r)){
                        var $7t;
                        if(m$1.nn$(($7t=filteringTokenSource$.$7o.nextToken()))){
                            $7r=$7t;
                        }else {
                            return null;
                        }
                    }
                    return $7r;
                }else {
                    return null;
                }
            };filteringTokenSource$.nextToken.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:FilteringTokenSource,pa:3,d:['ceylon.lexer.core','FilteringTokenSource','$m','nextToken']};};
        })(FilteringTokenSource.$$.prototype);
    }
    return FilteringTokenSource;
}
ex$.$init$FilteringTokenSource=$init$FilteringTokenSource;
$init$FilteringTokenSource();
function CharacterSource(characterSource$){
}
CharacterSource.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CharacterSource')];},d:['ceylon.lexer.core','CharacterSource']};};
ex$.CharacterSource=CharacterSource;
function $init$CharacterSource(){
    if(CharacterSource.$$===undefined){
        m$1.initTypeProtoI(CharacterSource,'ceylon.lexer.core::CharacterSource');
        (function(characterSource$){
            characterSource$.nextCharacter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:CharacterSource,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CharacterSource:$m:nextCharacter')];},d:['ceylon.lexer.core','CharacterSource','$m','nextCharacter']};}};
        })(CharacterSource.$$.prototype);
    }
    return CharacterSource;
}
ex$.$init$CharacterSource=$init$CharacterSource;
$init$CharacterSource();
ex$.$pkg$ans$ceylon$lexer$core=function(){return[m$1.shared()];};
function TokenSourceStream($7u,tokenSourceStream$){
    $init$TokenSourceStream();
    if(tokenSourceStream$===undefined)tokenSourceStream$=new TokenSourceStream.$$;
    tokenSourceStream$.$7u_=$7u;
    TokenStream(tokenSourceStream$);
    tokenSourceStream$.$7v_=(0);
    tokenSourceStream$.$prop$get$7v={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TokenSourceStream,pa:1024,d:['ceylon.lexer.core','TokenSourceStream','$at','index$y9uak7']};}};
    tokenSourceStream$.$prop$get$7v.get=function(){return $7v};
    tokenSourceStream$.$7w_=LazySequence(tokenSourceStream$.$7u,{Element$LazySequence:{t:Token}});
    tokenSourceStream$.$prop$get$7w={$crtmm$:function(){return{mod:$CCMM$,$t:{t:LazySequence,a:{Element$LazySequence:{t:Token}}},$cont:TokenSourceStream,d:['ceylon.lexer.core','TokenSourceStream','$at','tokens$gitv29']};}};
    tokenSourceStream$.$prop$get$7w.get=function(){return $7w};
    return tokenSourceStream$;
}
TokenSourceStream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'source',mt:'prm',$t:{t:TokenSource}}],sts:[{t:TokenStream}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenSourceStream')];},d:['ceylon.lexer.core','TokenSourceStream']};};
ex$.TokenSourceStream=TokenSourceStream;
function $init$TokenSourceStream(){
    if(TokenSourceStream.$$===undefined){
        m$1.initTypeProto(TokenSourceStream,'ceylon.lexer.core::TokenSourceStream',m$1.Basic,$init$TokenStream());
        (function(tokenSourceStream$){
            m$1.atr$(tokenSourceStream$,'$7v',function(){return this.$7v_;},function($7x){return this.$7v_=$7x;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TokenSourceStream,pa:1024,d:['ceylon.lexer.core','TokenSourceStream','$at','index$y9uak7']};});
            m$1.atr$(tokenSourceStream$,'$7w',function(){return this.$7w_;},undefined,function(){return{mod:$CCMM$,$t:{t:LazySequence,a:{Element$LazySequence:{t:Token}}},$cont:TokenSourceStream,d:['ceylon.lexer.core','TokenSourceStream','$at','tokens$gitv29']};});
            function Marker$TokenStream(marker$TokenStream$){
                $init$Marker$TokenStream();
                if(marker$TokenStream$===undefined)marker$TokenStream$=new this.Marker$TokenStream.$$;
                marker$TokenStream$.outer$=this;
                marker$TokenStream$.outer$.getT$all()['ceylon.lexer.core::TokenStream'].$$.prototype.Marker$TokenStream.call(this,marker$TokenStream$);
                marker$TokenStream$.$7y_=marker$TokenStream$.outer$.$7v;
                marker$TokenStream$.$prop$getIndex={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:tokenSourceStream$.Marker$TokenStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$c','Marker','$at','index']};}};
                marker$TokenStream$.$prop$getIndex.get=function(){return index};
                return marker$TokenStream$;
            }
            Marker$TokenStream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TokenStream.Marker$TokenStream},ps:[],$cont:TokenSourceStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$c','Marker']};};
            function $init$Marker$TokenStream(){
                if(Marker$TokenStream.$$===undefined){
                    m$1.initTypeProto(Marker$TokenStream,'ceylon.lexer.core::TokenSourceStream.Marker',tokenSourceStream$.getT$all()['ceylon.lexer.core::TokenStream'].$$.prototype.Marker$TokenStream);
                    TokenSourceStream.Marker$TokenStream=Marker$TokenStream;
                    (function(marker$TokenStream$){
                        m$1.atr$(marker$TokenStream$,'index',function(){return this.$7y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:tokenSourceStream$.Marker$TokenStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$c','Marker','$at','index']};});
                        marker$TokenStream$.destroy=function($7z){
                        };marker$TokenStream$.destroy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'error',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],$cont:tokenSourceStream$.Marker$TokenStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$c','Marker','$m','destroy']};};
                    })(Marker$TokenStream.$$.prototype);
                }
                return Marker$TokenStream;
            }
            tokenSourceStream$.$init$Marker$TokenStream=$init$Marker$TokenStream;
            $init$Marker$TokenStream();
            tokenSourceStream$.Marker$TokenStream=Marker$TokenStream;
            tokenSourceStream$.consume=function($80){
                var tokenSourceStream$=this;
                if($80===undefined){$80=tokenSourceStream$.consume$defs$count($80);}
                return (tokenSourceStream$.$7v=tokenSourceStream$.$7v.plus($80));
            };
            tokenSourceStream$.consume.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TokenSourceStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$m','consume']};};
            tokenSourceStream$.peek=function($81){
                var tokenSourceStream$=this;
                if($81===undefined){$81=tokenSourceStream$.peek$defs$n($81);}
                return tokenSourceStream$.$7w.getFromFirst(tokenSourceStream$.$7v.plus($81));
            };
            tokenSourceStream$.peek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TokenSourceStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$m','peek']};};
            tokenSourceStream$.seek=function($82){
                var tokenSourceStream$=this;
                return (tokenSourceStream$.$7v=$82);
            };
            tokenSourceStream$.seek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:TokenSourceStream,pa:3,d:['ceylon.lexer.core','TokenSourceStream','$m','seek']};};
            m$1.atr$(tokenSourceStream$,'$7u',function(){return this.$7u_;},undefined,function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:TokenSourceStream,d:['ceylon.lexer.core','TokenSourceStream','$at','source$iesey0']};});
        })(TokenSourceStream.$$.prototype);
    }
    return TokenSourceStream;
}
ex$.$init$TokenSourceStream=$init$TokenSourceStream;
$init$TokenSourceStream();
function LazySequence($83,$$targs$$,lazySequence$){
    $init$LazySequence();
    if(lazySequence$===undefined)lazySequence$=new LazySequence.$$;
    m$1.set_type_args(lazySequence$,$$targs$$);
    lazySequence$.$83_=$83;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$LazySequence},lazySequence$);
    lazySequence$.$84_=m$2.ArrayList(undefined,undefined,undefined,{Element$ArrayList:lazySequence$.$$targs$$.Element$LazySequence});
    lazySequence$.$prop$get$84={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.MutableList,a:{Element$MutableList:'Element$LazySequence'}},$cont:LazySequence,d:['ceylon.lexer.core','LazySequence','$at','buffer$rxvnnm']};}};
    lazySequence$.$prop$get$84.get=function(){return $84};
    return lazySequence$;
}
LazySequence.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$LazySequence'}}}],tp:{Element$LazySequence:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LazySequence'}}],d:['ceylon.lexer.core','LazySequence']};};
function $init$LazySequence(){
    if(LazySequence.$$===undefined){
        m$1.initTypeProto(LazySequence,'ceylon.lexer.core::LazySequence',m$1.Basic,m$1.Iterable);
        (function(lazySequence$){
            m$1.atr$(lazySequence$,'$84',function(){return this.$84_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2.MutableList,a:{Element$MutableList:'Element$LazySequence'}},$cont:LazySequence,d:['ceylon.lexer.core','LazySequence','$at','buffer$rxvnnm']};});
            lazySequence$.iterator=function(){
                var lazySequence$=this;
                function $85($$targs$$){
                    var $85$=new $85.$$;$85$.outer$=lazySequence$;
                    $85$.$$targs$$=$$targs$$;
                    m$1.Iterator({Element$Iterator:lazySequence$.$$targs$$.Element$LazySequence},$85$);
                    $85$.$86_=(0);
                    $85$.$prop$get$86={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$85,pa:1024,d:['ceylon.lexer.core','LazySequence','$m','iterator','$o','it$yh8p52','$at','index$308g1f']};}};
                    $85$.$prop$get$86.get=function(){return $86};
                    return $85$;
                };$85.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:lazySequence$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LazySequence'}}],d:['ceylon.lexer.core','LazySequence','$m','iterator','$o','it$yh8p52']};};
                function $init$$85(){
                    if($85.$$===undefined){
                        m$1.initTypeProto($85,'ceylon.lexer.core::LazySequence.it',m$1.Basic,m$1.Iterator);
                        (function($85$){
                            m$1.atr$($85$,'$86',function(){return this.$86_;},function($87){return this.$86_=$87;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$85,pa:1024,d:['ceylon.lexer.core','LazySequence','$m','iterator','$o','it$yh8p52','$at','index$308g1f']};});
                            $85$.next=function(){
                                var $85$=this;
                                var $88;
                                if(m$1.nn$(($88=lazySequence$.$84.$_get(($89=$85$.$86,$85$.$86=$89.successor,$89))))){
                                    return $88;
                                }else {
                                    var $8a;
                                    if(m$1.is$(($8a=lazySequence$.$83.next()),lazySequence$.$$targs$$.Element$LazySequence)){
                                        lazySequence$.$84.add($8a);
                                        return $8a;
                                    }else {
                                        return m$1.getFinished();
                                    }
                                }
                                var $89;
                            };$85$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LazySequence',{t:m$1.Finished}]},ps:[],$cont:$85,pa:3,d:['ceylon.lexer.core','LazySequence','$m','iterator','$o','it$yh8p52','$m','next']};};
                        })($85.$$.prototype);
                    }
                    return $85;
                }
                $init$$85();
                var $8b;
                function get$8b(){
                    if($8b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'38:8-52:8','TokenSourceStream.ceylon');
                    if($8b===undefined){$8b=m$1.INIT$;$8b=$init$$85()({Element$Iterator:lazySequence$.$$targs$$.Element$LazySequence});$8b.$crtmm$=get$8b.$crtmm$;}
                    return $8b;
                }
                get$8b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$85},$cont:lazySequence$.iterator,d:['ceylon.lexer.core','LazySequence','$m','iterator','$o','it$yh8p53']};};
                $prop$get$8b={get:get$8b,$crtmm$:get$8b.$crtmm$};
                get$85=get$8b;$prop$get$85=get$8b;
                return get$8b();
            };lazySequence$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$LazySequence'}},ps:[],$cont:LazySequence,pa:3,d:['ceylon.lexer.core','LazySequence','$m','iterator']};};
            m$1.atr$(lazySequence$,'$83',function(){return this.$83_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$LazySequence'}},$cont:LazySequence,d:['ceylon.lexer.core','LazySequence','$at','elements$ffbx99']};});
        })(LazySequence.$$.prototype);
    }
    return LazySequence;
}
ex$.$init$LazySequence=$init$LazySequence;
$init$LazySequence();
function IterableCharacterSource($8c,iterableCharacterSource$){
    $init$IterableCharacterSource();
    if(iterableCharacterSource$===undefined)iterableCharacterSource$=new IterableCharacterSource.$$;
    iterableCharacterSource$.$8c_=$8c;
    CharacterSource(iterableCharacterSource$);
    iterableCharacterSource$.$8d_=iterableCharacterSource$.$8c.iterator();
    iterableCharacterSource$.$prop$get$8d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Character}}},$cont:IterableCharacterSource,d:['ceylon.lexer.core','IterableCharacterSource','$at','it$lz0xee']};}};
    iterableCharacterSource$.$prop$get$8d.get=function(){return $8d};
    return iterableCharacterSource$;
}
IterableCharacterSource.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'characters',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}}}],sts:[{t:CharacterSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:IterableCharacterSource')];},d:['ceylon.lexer.core','IterableCharacterSource']};};
ex$.IterableCharacterSource=IterableCharacterSource;
function $init$IterableCharacterSource(){
    if(IterableCharacterSource.$$===undefined){
        m$1.initTypeProto(IterableCharacterSource,'ceylon.lexer.core::IterableCharacterSource',m$1.Basic,$init$CharacterSource());
        (function(iterableCharacterSource$){
            m$1.atr$(iterableCharacterSource$,'$8d',function(){return this.$8d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Character}}},$cont:IterableCharacterSource,d:['ceylon.lexer.core','IterableCharacterSource','$at','it$lz0xee']};});
            iterableCharacterSource$.nextCharacter=function(){
                var iterableCharacterSource$=this;
                var $8e=iterableCharacterSource$.$8d.next();
                var $8f=$8e;
                if(m$1.is$($8e,{t:m$1.Character})) {
                    return $8f;
                }else if($8f===m$1.getFinished()) {
                    return m$1.Character(145,true);
                }
            };iterableCharacterSource$.nextCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[],$cont:IterableCharacterSource,pa:3,d:['ceylon.lexer.core','IterableCharacterSource','$m','nextCharacter']};};
            m$1.atr$(iterableCharacterSource$,'$8c',function(){return this.$8c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Character}}},$cont:IterableCharacterSource,d:['ceylon.lexer.core','IterableCharacterSource','$at','characters$jz2l19']};});
        })(IterableCharacterSource.$$.prototype);
    }
    return IterableCharacterSource;
}
ex$.$init$IterableCharacterSource=$init$IterableCharacterSource;
$init$IterableCharacterSource();
function TokenSourceIterable($8g,tokenSourceIterable$){
    $init$TokenSourceIterable();
    if(tokenSourceIterable$===undefined)tokenSourceIterable$=new TokenSourceIterable.$$;
    tokenSourceIterable$.$$targs$$={Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Token}};
    tokenSourceIterable$.$8g_=$8g;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Token}},tokenSourceIterable$);
    tokenSourceIterable$.$8h_=tokenSourceIterable$.$8g;
    tokenSourceIterable$.$prop$get$8h={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TokenSource}]},$cont:TokenSourceIterable,pa:1027,d:['ceylon.lexer.core','TokenSourceIterable','$at','src$a4uldx']};}};
    tokenSourceIterable$.$prop$get$8h.get=function(){return $8h};
    return tokenSourceIterable$;
}
TokenSourceIterable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'source',mt:'prm',$t:{t:TokenSource}}],sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Token}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenSourceIterable')];},d:['ceylon.lexer.core','TokenSourceIterable']};};
ex$.TokenSourceIterable=TokenSourceIterable;
function $init$TokenSourceIterable(){
    if(TokenSourceIterable.$$===undefined){
        m$1.initTypeProto(TokenSourceIterable,'ceylon.lexer.core::TokenSourceIterable',m$1.Basic,m$1.Iterable);
        (function(tokenSourceIterable$){
            m$1.atr$(tokenSourceIterable$,'$8h',function(){return this.$8h_;},function($8i){return this.$8h_=$8i;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TokenSource}]},$cont:TokenSourceIterable,pa:1027,d:['ceylon.lexer.core','TokenSourceIterable','$at','src$a4uldx']};});
            tokenSourceIterable$.iterator=function(){
                var tokenSourceIterable$=this;
                var $8j;
                if(m$1.nn$(($8j=tokenSourceIterable$.$8h))){
                    tokenSourceIterable$.$8h=null;
                    return $8j;
                }else {
                    throw m$1.wrapexc(m$1.AssertionError("May not be iterated several times!"),'26:12-26:70','ceylon/lexer/core/TokenSourceIterable.ceylon');
                }
            };tokenSourceIterable$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Token}}},ps:[],$cont:TokenSourceIterable,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:TokenSourceIterable:$m:iterator'),m$1.$_throws(m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.AssertionError),"When called more than once.")];},d:['ceylon.lexer.core','TokenSourceIterable','$m','iterator']};};
            m$1.atr$(tokenSourceIterable$,'$8g',function(){return this.$8g_;},undefined,function(){return{mod:$CCMM$,$t:{t:TokenSource},$cont:TokenSourceIterable,d:['ceylon.lexer.core','TokenSourceIterable','$at','source$4js57e']};});
        })(TokenSourceIterable.$$.prototype);
    }
    return TokenSourceIterable;
}
ex$.$init$TokenSourceIterable=$init$TokenSourceIterable;
$init$TokenSourceIterable();
function StringCharacterStream(string,stringCharacterStream$){
    $init$StringCharacterStream();
    if(stringCharacterStream$===undefined)stringCharacterStream$=new StringCharacterStream.$$;
    stringCharacterStream$.string_=string;
    CharacterStream(stringCharacterStream$);
    stringCharacterStream$.$8k_=stringCharacterStream$.string.sequence();
    stringCharacterStream$.$prop$get$8k={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:StringCharacterStream,d:['ceylon.lexer.core','StringCharacterStream','$at','characters$5md7yr']};}};
    stringCharacterStream$.$prop$get$8k.get=function(){return $8k};
    stringCharacterStream$.$8l_=(0);
    stringCharacterStream$.$prop$get$8l={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringCharacterStream,pa:1024,d:['ceylon.lexer.core','StringCharacterStream','$at','index$6grf7f']};}};
    stringCharacterStream$.$prop$get$8l.get=function(){return $8l};
    return stringCharacterStream$;
}
StringCharacterStream.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String},pa:3}],sts:[{t:CharacterStream}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:StringCharacterStream')];},d:['ceylon.lexer.core','StringCharacterStream']};};
ex$.StringCharacterStream=StringCharacterStream;
function $init$StringCharacterStream(){
    if(StringCharacterStream.$$===undefined){
        m$1.initTypeProto(StringCharacterStream,'ceylon.lexer.core::StringCharacterStream',m$1.Basic,$init$CharacterStream());
        (function(stringCharacterStream$){
            m$1.atr$(stringCharacterStream$,'$8k',function(){return this.$8k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Character}}},$cont:StringCharacterStream,d:['ceylon.lexer.core','StringCharacterStream','$at','characters$5md7yr']};});
            m$1.atr$(stringCharacterStream$,'$8l',function(){return this.$8l_;},function($8m){return this.$8l_=$8m;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringCharacterStream,pa:1024,d:['ceylon.lexer.core','StringCharacterStream','$at','index$6grf7f']};});
            stringCharacterStream$.peek=function($8n){
                var stringCharacterStream$=this;
                if($8n===undefined){$8n=stringCharacterStream$.peek$defs$n($8n);}
                m$1.asrt$((($8n>=0)),"Cannot peek backwards: \'n >= 0\' at StringCharacterStream.ceylon (10:15-10:22)",'9:8-10:23','StringCharacterStream.ceylon');
                return ($8o=stringCharacterStream$.$8k.getFromFirst($8n.plus(stringCharacterStream$.$8l)),m$1.nn$($8o)?$8o:m$1.Character(145,true));
                var $8o;
            };stringCharacterStream$.peek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Character},ps:[{nm:'n',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:StringCharacterStream,pa:3,d:['ceylon.lexer.core','StringCharacterStream','$m','peek']};};
            stringCharacterStream$.consume=function($8p){
                var stringCharacterStream$=this;
                if($8p===undefined){$8p=stringCharacterStream$.consume$defs$count($8p);}
                m$1.asrt$((($8p>0)),"Count must be positive: \'count > 0\' at StringCharacterStream.ceylon (16:15-16:25)",'15:8-16:26','StringCharacterStream.ceylon');
                (stringCharacterStream$.$8l=stringCharacterStream$.$8l.plus($8p));
            };stringCharacterStream$.consume.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'count',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:StringCharacterStream,pa:3,d:['ceylon.lexer.core','StringCharacterStream','$m','consume']};};
            m$1.atr$(stringCharacterStream$,'string',function(){return this.string_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringCharacterStream,pa:3,d:['ceylon.lexer.core','StringCharacterStream','$at','string']};});
        })(StringCharacterStream.$$.prototype);
    }
    return StringCharacterStream;
}
ex$.$init$StringCharacterStream=$init$StringCharacterStream;
$init$StringCharacterStream();
function CeylonLexer($8q,ceylonLexer$){
    $init$CeylonLexer();
    if(ceylonLexer$===undefined)ceylonLexer$=new CeylonLexer.$$;
    ceylonLexer$.$8q_=$8q;
    TokenSource(ceylonLexer$);
    ceylonLexer$.$8r_=m$1.Character(145,true);
    ceylonLexer$.$prop$get$8r={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Character},$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$at','terminator$a5hs9k']};}};
    ceylonLexer$.$prop$get$8r.get=function(){return $8r};
    return ceylonLexer$;
}
CeylonLexer.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'characters',mt:'prm',$t:{t:CharacterStream}}],sts:[{t:TokenSource}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CeylonLexer')];},d:['ceylon.lexer.core','CeylonLexer']};};
ex$.CeylonLexer=CeylonLexer;
function $init$CeylonLexer(){
    if(CeylonLexer.$$===undefined){
        m$1.initTypeProto(CeylonLexer,'ceylon.lexer.core::CeylonLexer',m$1.Basic,$init$TokenSource());
        (function(ceylonLexer$){
            m$1.atr$(ceylonLexer$,'$8r',function(){return this.$8r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Character},$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$at','terminator$a5hs9k']};});
            ceylonLexer$.nextToken=function(){
                var ceylonLexer$=this;
                while((!ceylonLexer$.$8q.peek().equals(ceylonLexer$.$8r))){
                    var $8s;
                    function set$8s($8t){return $8s=$8t;};
                    var $8u=($8s=ceylonLexer$.$8q.peek());
                    if($8u.equals(m$1.Character(47,true))) {
                        var $8v=ceylonLexer$.$8q.peek(1);
                        if($8v.equals(m$1.Character(47,true))) {
                            ceylonLexer$.$8q.consume(2);
                            var $8w=m$1.StringBuilder();
                            $8w.append("//");
                            while(((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(10,true)))&&(!$8s.equals(ceylonLexer$.$8r)))){
                                ceylonLexer$.$8q.consume();
                                $8w.appendCharacter($8s);
                            }
                            return ceylonLexer$.$8x(getLineComment(),$8w.string);
                        }else if($8v.equals(m$1.Character(42,true))) {
                            ceylonLexer$.$8q.consume(2);
                            var $8y=m$1.StringBuilder();
                            $8y.append("/*");
                            var $8z=(1);
                            function set$8z($90){return $8z=$90;};
                            while(!($8z==0)){
                                $8s=ceylonLexer$.$8q.peek();
                                if(($8s.equals(m$1.Character(47,true))&&ceylonLexer$.$8q.peek(1).equals(m$1.Character(42,true)))){
                                    ($91=$8z,$8z=$91.successor,$91);
                                    var $91;
                                    $8y.append("/*");
                                    ceylonLexer$.$8q.consume(2);
                                    continue;
                                }else {
                                    if(($8s.equals(m$1.Character(42,true))&&ceylonLexer$.$8q.peek(1).equals(m$1.Character(47,true)))){
                                        ($92=$8z,$8z=$92.predecessor,$92);
                                        var $92;
                                        $8y.append("*/");
                                        ceylonLexer$.$8q.consume(2);
                                        continue;
                                    }else {
                                        if($8s.equals(ceylonLexer$.$8r)){
                                            return ceylonLexer$.$8x(getOpenMultiComment(),$8y.string);
                                        }else {
                                            $8y.appendCharacter($8s);
                                            ceylonLexer$.$8q.consume();
                                        }
                                    }
                                }
                            }
                            return ceylonLexer$.$8x(getMultiComment(),$8y.string);
                        }else if($8v.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getDivideAssignOp(),"/=");
                        }else {
                            return ceylonLexer$.$93(getQuotientOp(),m$1.Character(47,true));
                        }
                    }else if($8u.equals(m$1.Character(35,true))) {
                        if(($8s=ceylonLexer$.$8q.peek(1)).equals(m$1.Character(33,true))){
                            ceylonLexer$.$8q.consume(2);
                            var $94=m$1.StringBuilder();
                            $94.append("#!");
                            while(((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(10,true)))&&(!$8s.equals(ceylonLexer$.$8r)))){
                                ceylonLexer$.$8q.consume();
                                $94.appendCharacter($8s);
                            }
                            return ceylonLexer$.$8x(getLineComment(),$94.string);
                        }else {
                            ceylonLexer$.$8q.consume(1);
                            var $95=m$1.StringBuilder();
                            $95.appendCharacter(m$1.Character(35,true));
                            while((((($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(95,true))||($96=$8s,$96.compare(m$1.Character(48,true))!==m$1.getSmaller()&&$96.compare(m$1.Character(57,true))!==m$1.getLarger()))||($97=$8s,$97.compare(m$1.Character(65,true))!==m$1.getSmaller()&&$97.compare(m$1.Character(70,true))!==m$1.getLarger()))||($98=$8s,$98.compare(m$1.Character(97,true))!==m$1.getSmaller()&&$98.compare(m$1.Character(102,true))!==m$1.getLarger()))){
                                ceylonLexer$.$8q.consume();
                                $95.appendCharacter($8s);
                            }
                            return ceylonLexer$.$8x(getHexLiteral(),$95.string);
                        }
                    }else if($8u.equals(m$1.Character(36,true))) {
                        ceylonLexer$.$8q.consume(1);
                        var $99=m$1.StringBuilder();
                        $99.appendCharacter(m$1.Character(36,true));
                        while(((($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(48,true))||$8s.equals(m$1.Character(49,true)))||$8s.equals(m$1.Character(95,true)))){
                            ceylonLexer$.$8q.consume();
                            $99.appendCharacter($8s);
                        }
                        return ceylonLexer$.$8x(getBinaryLiteral(),$99.string);
                    }else if($8u.equals(m$1.Character(92,true))) {
                        var $9a=($8s=ceylonLexer$.$8q.peek(1));
                        if($9a.equals(m$1.Character(105,true))) {
                            ceylonLexer$.$8q.consume(2);
                            var $9b=m$1.StringBuilder();
                            $9b.append("\\i");
                            while(ceylonLexer$.$9c(($8s=ceylonLexer$.$8q.peek()))){
                                $9b.appendCharacter($8s);
                                ceylonLexer$.$8q.consume();
                            }
                            return ceylonLexer$.$8x(getLidentifier(),$9b.string);
                        }else if($9a.equals(m$1.Character(73,true))) {
                            ceylonLexer$.$8q.consume(2);
                            var $9d=m$1.StringBuilder();
                            $9d.append("\\I");
                            while(ceylonLexer$.$9c(($8s=ceylonLexer$.$8q.peek()))){
                                $9d.appendCharacter($8s);
                                ceylonLexer$.$8q.consume();
                            }
                            return ceylonLexer$.$8x(getUidentifier(),$9d.string);
                        }else {
                            ceylonLexer$.$8q.consume();
                            return ceylonLexer$.$8x(getUnknownEscape(),"\\");
                        }
                    }else if($8u.equals(m$1.Character(34,true))) {
                        if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(34,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(34,true)))){
                            ceylonLexer$.$8q.consume(3);
                            var $9e=m$1.StringBuilder();
                            $9e.append("\"\"\"");
                            while((((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(34,true)))||(!ceylonLexer$.$8q.peek(1).equals(m$1.Character(34,true))))||(!ceylonLexer$.$8q.peek(2).equals(m$1.Character(34,true))))){
                                if($8s.equals(ceylonLexer$.$8r)){
                                    break;
                                }
                                $9e.appendCharacter($8s);
                                ceylonLexer$.$8q.consume();
                            }
                            if($8s.equals(ceylonLexer$.$8r)){
                                return ceylonLexer$.$8x(getOpenVerbatimStringLiteral(),$9e.string);
                            }else {
                                if(ceylonLexer$.$8q.peek(3).equals(m$1.Character(34,true))){
                                    $9e.appendCharacter(m$1.Character(34,true));
                                    ceylonLexer$.$8q.consume();
                                    if(ceylonLexer$.$8q.peek(3).equals(m$1.Character(34,true))){
                                        $9e.appendCharacter(m$1.Character(34,true));
                                        ceylonLexer$.$8q.consume();
                                    }
                                }
                                ceylonLexer$.$8q.consume(3);
                                $9e.append("\"\"\"");
                                return ceylonLexer$.$8x(getVerbatimStringLiteral(),$9e.string);
                            }
                        }else {
                            ceylonLexer$.$8q.consume();
                            var $9f=m$1.StringBuilder();
                            $9f.appendCharacter(m$1.Character(34,true));
                            while(((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(34,true)))&&((!$8s.equals(m$1.Character(96,true)))||(!ceylonLexer$.$8q.peek(1).equals(m$1.Character(96,true)))))){
                                if($8s.equals(ceylonLexer$.$8r)){
                                    break;
                                }
                                $9f.appendCharacter($8s);
                                ceylonLexer$.$8q.consume();
                                if($8s.equals(m$1.Character(92,true))){
                                    $9f.appendCharacter(ceylonLexer$.$8q.peek());
                                    ceylonLexer$.$8q.consume();
                                }
                            }
                            if($8s.equals(ceylonLexer$.$8r)){
                                return ceylonLexer$.$8x(getOpenStringLiteral(),$9f.string);
                            }else {
                                if($8s.equals(m$1.Character(34,true))){
                                    $9f.appendCharacter(m$1.Character(34,true));
                                    ceylonLexer$.$8q.consume();
                                    return ceylonLexer$.$8x(getStringLiteral(),$9f.string);
                                }else {
                                    $9f.append("``");
                                    ceylonLexer$.$8q.consume(2);
                                    return ceylonLexer$.$8x(getStringStart(),$9f.string);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(96,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(96,true))){
                            ceylonLexer$.$8q.consume(2);
                            var $9g=m$1.StringBuilder();
                            $9g.append("``");
                            while(((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(34,true)))&&((!$8s.equals(m$1.Character(96,true)))||(!ceylonLexer$.$8q.peek(1).equals(m$1.Character(96,true)))))){
                                if($8s.equals(ceylonLexer$.$8r)){
                                    break;
                                }
                                $9g.appendCharacter($8s);
                                ceylonLexer$.$8q.consume();
                                if($8s.equals(m$1.Character(92,true))){
                                    $9g.appendCharacter(ceylonLexer$.$8q.peek());
                                    ceylonLexer$.$8q.consume();
                                }
                            }
                            if($8s.equals(ceylonLexer$.$8r)){
                                return ceylonLexer$.$8x(getOpenStringPart(),$9g.string);
                            }else {
                                if($8s.equals(m$1.Character(34,true))){
                                    $9g.appendCharacter(m$1.Character(34,true));
                                    ceylonLexer$.$8q.consume();
                                    return ceylonLexer$.$8x(getStringEnd(),$9g.string);
                                }else {
                                    $9g.append("``");
                                    ceylonLexer$.$8q.consume(2);
                                    return ceylonLexer$.$8x(getStringMid(),$9g.string);
                                }
                            }
                        }else {
                            return ceylonLexer$.$93(getBacktick(),m$1.Character(96,true));
                        }
                    }else if($8u.equals(m$1.Character(39,true))) {
                        ceylonLexer$.$8q.consume();
                        var $9h=m$1.StringBuilder();
                        $9h.appendCharacter(m$1.Character(39,true));
                        while((!($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(39,true)))){
                            if($8s.equals(ceylonLexer$.$8r)){
                                break;
                            }
                            $9h.appendCharacter($8s);
                            ceylonLexer$.$8q.consume();
                            if($8s.equals(m$1.Character(92,true))){
                                $9h.appendCharacter(ceylonLexer$.$8q.peek());
                                ceylonLexer$.$8q.consume();
                            }
                        }
                        if($8s.equals(ceylonLexer$.$8r)){
                            return ceylonLexer$.$8x(getOpenCharacterLiteral(),$9h.string);
                        }else {
                            $9h.appendCharacter(m$1.Character(39,true));
                            ceylonLexer$.$8q.consume();
                            return ceylonLexer$.$8x(getCharacterLiteral(),$9h.string);
                        }
                    }else if($8u.equals(m$1.Character(48,true)) || $8u.equals(m$1.Character(49,true)) || $8u.equals(m$1.Character(50,true)) || $8u.equals(m$1.Character(51,true)) || $8u.equals(m$1.Character(52,true)) || $8u.equals(m$1.Character(53,true)) || $8u.equals(m$1.Character(54,true)) || $8u.equals(m$1.Character(55,true)) || $8u.equals(m$1.Character(56,true)) || $8u.equals(m$1.Character(57,true))) {
                        ceylonLexer$.$8q.consume();
                        var $9i=m$1.StringBuilder();
                        $9i.appendCharacter($8s);
                        while((($9j=($8s=ceylonLexer$.$8q.peek()),$9j.compare(m$1.Character(48,true))!==m$1.getSmaller()&&$9j.compare(m$1.Character(57,true))!==m$1.getLarger())||$8s.equals(m$1.Character(95,true)))){
                            $9i.appendCharacter($8s);
                            ceylonLexer$.$8q.consume();
                        }
                        var $9k=($8s=ceylonLexer$.$8q.peek());
                        if($9k.equals(m$1.Character(46,true))) {
                            if((($9l=ceylonLexer$.$8q.peek(1),$9l.compare(m$1.Character(48,true))!==m$1.getSmaller()&&$9l.compare(m$1.Character(57,true))!==m$1.getLarger())||$8s.equals(m$1.Character(95,true)))){
                                $9i.appendCharacter(m$1.Character(46,true));
                                ceylonLexer$.$8q.consume();
                                while((($9m=($8s=ceylonLexer$.$8q.peek()),$9m.compare(m$1.Character(48,true))!==m$1.getSmaller()&&$9m.compare(m$1.Character(57,true))!==m$1.getLarger())||$8s.equals(m$1.Character(95,true)))){
                                    $9i.appendCharacter($8s);
                                    ceylonLexer$.$8q.consume();
                                }
                                var $9n=($8s=ceylonLexer$.$8q.peek());
                                if($9n.equals(m$1.Character(69,true)) || $9n.equals(m$1.Character(101,true))) {
                                    $9i.appendCharacter($8s);
                                    ceylonLexer$.$8q.consume();
                                    if((($8s=ceylonLexer$.$8q.peek()).equals(m$1.Character(45,true))||$8s.equals(m$1.Character(43,true)))){
                                        $9i.appendCharacter($8s);
                                        ceylonLexer$.$8q.consume();
                                    }
                                    while((($9o=($8s=ceylonLexer$.$8q.peek()),$9o.compare(m$1.Character(48,true))!==m$1.getSmaller()&&$9o.compare(m$1.Character(57,true))!==m$1.getLarger())||$8s.equals(m$1.Character(95,true)))){
                                        $9i.appendCharacter($8s);
                                        ceylonLexer$.$8q.consume();
                                    }
                                    return ceylonLexer$.$8x(getFloatLiteral(),$9i.string);
                                }else if($9n.equals(m$1.Character(107,true)) || $9n.equals(m$1.Character(77,true)) || $9n.equals(m$1.Character(71,true)) || $9n.equals(m$1.Character(84,true)) || $9n.equals(m$1.Character(80,true)) || $9n.equals(m$1.Character(109,true)) || $9n.equals(m$1.Character(117,true)) || $9n.equals(m$1.Character(110,true)) || $9n.equals(m$1.Character(112,true)) || $9n.equals(m$1.Character(102,true))) {
                                    $9i.appendCharacter($8s);
                                    ceylonLexer$.$8q.consume();
                                    return ceylonLexer$.$8x(getFloatLiteral(),$9i.string);
                                }else {
                                    return ceylonLexer$.$8x(getFloatLiteral(),$9i.string);
                                }
                            }else {
                                return ceylonLexer$.$8x(getDecimalLiteral(),$9i.string);
                            }
                        }else if($9k.equals(m$1.Character(107,true)) || $9k.equals(m$1.Character(77,true)) || $9k.equals(m$1.Character(71,true)) || $9k.equals(m$1.Character(84,true)) || $9k.equals(m$1.Character(80,true))) {
                            $9i.appendCharacter($8s);
                            ceylonLexer$.$8q.consume();
                            return ceylonLexer$.$8x(getDecimalLiteral(),$9i.string);
                        }else if($9k.equals(m$1.Character(109,true)) || $9k.equals(m$1.Character(117,true)) || $9k.equals(m$1.Character(110,true)) || $9k.equals(m$1.Character(112,true)) || $9k.equals(m$1.Character(102,true))) {
                            $9i.appendCharacter($8s);
                            ceylonLexer$.$8q.consume();
                            return ceylonLexer$.$8x(getFloatLiteral(),$9i.string);
                        }else {
                            return ceylonLexer$.$8x(getDecimalLiteral(),$9i.string);
                        }
                    }else if($8u.equals(m$1.Character(97,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(108,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getAliasKw(),"alias");
                        }else {
                            if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(115,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(115,true)))){
                                if(ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true))){
                                    if(((((ceylonLexer$.$8q.peek(4).equals(m$1.Character(109,true))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(98,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(121,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(8)))){
                                        ceylonLexer$.$8q.consume(8);
                                        return ceylonLexer$.$8x(getAssemblyKw(),"assembly");
                                    }else {
                                        if(((ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(116,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                                            ceylonLexer$.$8q.consume(6);
                                            return ceylonLexer$.$8x(getAssertKw(),"assert");
                                        }else {
                                            return ceylonLexer$.$9p($8s);
                                        }
                                    }
                                }else {
                                    if((((ceylonLexer$.$8q.peek(3).equals(m$1.Character(105,true))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(103,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(110,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                                        ceylonLexer$.$8q.consume(6);
                                        return ceylonLexer$.$8x(getAssignKw(),"assign");
                                    }else {
                                        return ceylonLexer$.$9p($8s);
                                    }
                                }
                            }else {
                                if(((((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(98,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(115,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(8).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(9)))){
                                    ceylonLexer$.$8q.consume(9);
                                    return ceylonLexer$.$8x(getAbstractsKw(),"abstracts");
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(98,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(114,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(107,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getBreakKw(),"break");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(99,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(108,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(115,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getClassKw(),"class");
                        }else {
                            if((((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(111,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(117,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(8)))){
                                ceylonLexer$.$8q.consume(8);
                                return ceylonLexer$.$8x(getContinueKw(),"continue");
                            }else {
                                if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(97,true))){
                                    if(((ceylonLexer$.$8q.peek(2).equals(m$1.Character(115,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(4)))){
                                        ceylonLexer$.$8q.consume(4);
                                        return ceylonLexer$.$8x(getCaseKw(),"case");
                                    }else {
                                        if((((ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(104,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                                            ceylonLexer$.$8q.consume(5);
                                            return ceylonLexer$.$8x(getCatchKw(),"catch");
                                        }else {
                                            return ceylonLexer$.$9p($8s);
                                        }
                                    }
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(100,true))) {
                        if(((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(121,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(109,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(99,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(7)))){
                            ceylonLexer$.$8q.consume(7);
                            return ceylonLexer$.$8x(getDynamicKw(),"dynamic");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(101,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(120,true))){
                            if((((((ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(100,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(7)))){
                                ceylonLexer$.$8q.consume(7);
                                return ceylonLexer$.$8x(getExtendsKw(),"extends");
                            }else {
                                if(((((ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(115,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                                    ceylonLexer$.$8q.consume(6);
                                    return ceylonLexer$.$8x(getExistsKw(),"exists");
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }else {
                            if((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(108,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(115,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(4)))){
                                ceylonLexer$.$8q.consume(4);
                                return ceylonLexer$.$8x(getElseKw(),"else");
                            }else {
                                return ceylonLexer$.$9p($8s);
                            }
                        }
                    }else if($8u.equals(m$1.Character(102,true))) {
                        if((((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(117,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(111,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(110,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(8)))){
                            ceylonLexer$.$8q.consume(8);
                            return ceylonLexer$.$8x(getFunctionKw(),"function");
                        }else {
                            if(((ceylonLexer$.$8q.peek(1).equals(m$1.Character(111,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(114,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(3)))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getForKw(),"for");
                            }else {
                                if(((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(105,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(121,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(7)))){
                                    ceylonLexer$.$8q.consume(7);
                                    return ceylonLexer$.$8x(getFinallyKw(),"finally");
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(103,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(105,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(118,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(110,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getGivenKw(),"given");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(105,true))) {
                        if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(102,true))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(2)))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getIfKw(),"if");
                        }else {
                            if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(115,true))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(2)))){
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getIsKw(),"is");
                            }else {
                                if((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(109,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(112,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(111,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(116,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                                    ceylonLexer$.$8q.consume(6);
                                    return ceylonLexer$.$8x(getImportKw(),"import");
                                }else {
                                    if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(110,true))){
                                        if((((((((ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(102,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(8).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(9)))){
                                            ceylonLexer$.$8q.consume(9);
                                            return ceylonLexer$.$8x(getInterfaceKw(),"interface");
                                        }else {
                                            if(!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(2))){
                                                ceylonLexer$.$8q.consume(2);
                                                return ceylonLexer$.$8x(getInKw(),"in");
                                            }else {
                                                return ceylonLexer$.$9p($8s);
                                            }
                                        }
                                    }else {
                                        return ceylonLexer$.$9p($8s);
                                    }
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(109,true))) {
                        if((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(111,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(100,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(117,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                            ceylonLexer$.$8q.consume(6);
                            return ceylonLexer$.$8x(getModuleKw(),"module");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(110,true))) {
                        if(((ceylonLexer$.$8q.peek(1).equals(m$1.Character(101,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(119,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(3)))){
                            ceylonLexer$.$8q.consume(3);
                            return ceylonLexer$.$8x(getNewKw(),"new");
                        }else {
                            if((((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(111,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(110,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(109,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(112,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(121,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(8)))){
                                ceylonLexer$.$8q.consume(8);
                                return ceylonLexer$.$8x(getNonemptyKw(),"nonempty");
                            }else {
                                return ceylonLexer$.$9p($8s);
                            }
                        }
                    }else if($8u.equals(m$1.Character(108,true))) {
                        if(((ceylonLexer$.$8q.peek(1).equals(m$1.Character(101,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(3)))){
                            ceylonLexer$.$8q.consume(3);
                            return ceylonLexer$.$8x(getLetKw(),"let");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(111,true))) {
                        if((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(98,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(106,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(116,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                            ceylonLexer$.$8q.consume(6);
                            return ceylonLexer$.$8x(getObjectKw(),"object");
                        }else {
                            if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(102,true))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(2)))){
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getOfKw(),"of");
                            }else {
                                if((ceylonLexer$.$8q.peek(1).equals(m$1.Character(117,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true)))){
                                    if(!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(3))){
                                        ceylonLexer$.$8q.consume(3);
                                        return ceylonLexer$.$8x(getOutKw(),"out");
                                    }else {
                                        if(((ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                                            ceylonLexer$.$8q.consume(5);
                                            return ceylonLexer$.$8x(getOuterKw(),"outer");
                                        }else {
                                            return ceylonLexer$.$9p($8s);
                                        }
                                    }
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(112,true))) {
                        if(((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(97,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(107,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(97,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(103,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(7)))){
                            ceylonLexer$.$8q.consume(7);
                            return ceylonLexer$.$8x(getPackageKw(),"package");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(114,true))) {
                        if((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(101,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(117,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(110,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                            ceylonLexer$.$8q.consume(6);
                            return ceylonLexer$.$8x(getReturnKw(),"return");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(115,true))) {
                        if(((((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(97,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(115,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(102,true)))&&ceylonLexer$.$8q.peek(6).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(7).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(8).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(9)))){
                            ceylonLexer$.$8q.consume(9);
                            return ceylonLexer$.$8x(getSatisfiesKw(),"satisfies");
                        }else {
                            if((((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(119,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(116,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(99,true)))&&ceylonLexer$.$8q.peek(5).equals(m$1.Character(104,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(6)))){
                                ceylonLexer$.$8q.consume(6);
                                return ceylonLexer$.$8x(getSwitchKw(),"switch");
                            }else {
                                if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(117,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(112,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(101,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(114,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                                    ceylonLexer$.$8q.consume(5);
                                    return ceylonLexer$.$8x(getSuperKw(),"super");
                                }else {
                                    return ceylonLexer$.$9p($8s);
                                }
                            }
                        }
                    }else if($8u.equals(m$1.Character(116,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(104,true))){
                            if((((ceylonLexer$.$8q.peek(2).equals(m$1.Character(114,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(111,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(119,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                                ceylonLexer$.$8q.consume(5);
                                return ceylonLexer$.$8x(getThrowKw(),"throw");
                            }else {
                                if(((ceylonLexer$.$8q.peek(2).equals(m$1.Character(101,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(110,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(4)))){
                                    ceylonLexer$.$8q.consume(4);
                                    return ceylonLexer$.$8x(getThenKw(),"then");
                                }else {
                                    if(((ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(115,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(4)))){
                                        ceylonLexer$.$8q.consume(4);
                                        return ceylonLexer$.$8x(getThisKw(),"this");
                                    }else {
                                        return ceylonLexer$.$9p($8s);
                                    }
                                }
                            }
                        }else {
                            if(((ceylonLexer$.$8q.peek(1).equals(m$1.Character(114,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(121,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(3)))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getTryKw(),"try");
                            }else {
                                return ceylonLexer$.$9p($8s);
                            }
                        }
                    }else if($8u.equals(m$1.Character(118,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(97,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(117,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getValueKw(),"value");
                        }else {
                            if((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(111,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(100,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(4)))){
                                ceylonLexer$.$8q.consume(4);
                                return ceylonLexer$.$8x(getVoidKw(),"void");
                            }else {
                                return ceylonLexer$.$9p($8s);
                            }
                        }
                    }else if($8u.equals(m$1.Character(119,true))) {
                        if(((((ceylonLexer$.$8q.peek(1).equals(m$1.Character(104,true))&&ceylonLexer$.$8q.peek(2).equals(m$1.Character(105,true)))&&ceylonLexer$.$8q.peek(3).equals(m$1.Character(108,true)))&&ceylonLexer$.$8q.peek(4).equals(m$1.Character(101,true)))&&!ceylonLexer$.$9c(ceylonLexer$.$8q.peek(5)))){
                            ceylonLexer$.$8q.consume(5);
                            return ceylonLexer$.$8x(getWhileKw(),"while");
                        }else {
                            return ceylonLexer$.$9p($8s);
                        }
                    }else if($8u.equals(m$1.Character(44,true))) {
                        return ceylonLexer$.$93(getComma(),m$1.Character(44,true));
                    }else if($8u.equals(m$1.Character(59,true))) {
                        return ceylonLexer$.$93(getSemicolon(),m$1.Character(59,true));
                    }else if($8u.equals(m$1.Character(123,true))) {
                        return ceylonLexer$.$93(getLbrace(),m$1.Character(123,true));
                    }else if($8u.equals(m$1.Character(125,true))) {
                        return ceylonLexer$.$93(getRbrace(),m$1.Character(125,true));
                    }else if($8u.equals(m$1.Character(40,true))) {
                        return ceylonLexer$.$93(getLparen(),m$1.Character(40,true));
                    }else if($8u.equals(m$1.Character(41,true))) {
                        return ceylonLexer$.$93(getRparen(),m$1.Character(41,true));
                    }else if($8u.equals(m$1.Character(91,true))) {
                        return ceylonLexer$.$93(getLbracket(),m$1.Character(91,true));
                    }else if($8u.equals(m$1.Character(93,true))) {
                        return ceylonLexer$.$93(getRbracket(),m$1.Character(93,true));
                    }else if($8u.equals(m$1.Character(58,true))) {
                        return ceylonLexer$.$93(getMeasureOp(),m$1.Character(58,true));
                    }else if($8u.equals(m$1.Character(46,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(46,true))){
                            if(ceylonLexer$.$8q.peek(2).equals(m$1.Character(46,true))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getEllipsis(),"...");
                            }else {
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getSpanOp(),"..");
                            }
                        }else {
                            return ceylonLexer$.$93(getMemberOp(),m$1.Character(46,true));
                        }
                    }else if($8u.equals(m$1.Character(63,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(46,true))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getSafeMemberOp(),"?.");
                        }else {
                            return ceylonLexer$.$93(getQuestionMark(),m$1.Character(63,true));
                        }
                    }else if($8u.equals(m$1.Character(42,true))) {
                        var $9q=ceylonLexer$.$8q.peek(1);
                        if($9q.equals(m$1.Character(46,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getSpreadMemberOp(),"*.");
                        }else if($9q.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getMultiplyAssignOp(),"*=");
                        }else if($9q.equals(m$1.Character(42,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getScaleOp(),"**");
                        }else {
                            return ceylonLexer$.$93(getProductOp(),m$1.Character(42,true));
                        }
                    }else if($8u.equals(m$1.Character(61,true))) {
                        var $9r=ceylonLexer$.$8q.peek(1);
                        if($9r.equals(m$1.Character(62,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getCompute(),"=>");
                        }else if($9r.equals(m$1.Character(61,true))) {
                            if(ceylonLexer$.$8q.peek(2).equals(m$1.Character(61,true))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getIdenticalOp(),"===");
                            }else {
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getEqualOp(),"==");
                            }
                        }else {
                            return ceylonLexer$.$93(getSpecify(),m$1.Character(61,true));
                        }
                    }else if($8u.equals(m$1.Character(43,true))) {
                        var $9s=ceylonLexer$.$8q.peek(1);
                        if($9s.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getAddAssignOp(),"+=");
                        }else if($9s.equals(m$1.Character(43,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getIncrementOp(),"++");
                        }else {
                            return ceylonLexer$.$93(getSumOp(),m$1.Character(43,true));
                        }
                    }else if($8u.equals(m$1.Character(45,true))) {
                        var $9t=ceylonLexer$.$8q.peek(1);
                        if($9t.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getSubtractAssignOp(),"-=");
                        }else if($9t.equals(m$1.Character(45,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getDecrementOp(),"--");
                        }else if($9t.equals(m$1.Character(62,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getEntryOp(),"->");
                        }else {
                            return ceylonLexer$.$93(getDifferenceOp(),m$1.Character(45,true));
                        }
                    }else if($8u.equals(m$1.Character(37,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(61,true))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getRemainderAssignOp(),"%=");
                        }else {
                            return ceylonLexer$.$93(getRemainderOp(),m$1.Character(37,true));
                        }
                    }else if($8u.equals(m$1.Character(94,true))) {
                        return ceylonLexer$.$93(getPowerOp(),m$1.Character(94,true));
                    }else if($8u.equals(m$1.Character(33,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(61,true))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getNotEqualOp(),"!=");
                        }else {
                            return ceylonLexer$.$93(getNotOp(),m$1.Character(33,true));
                        }
                    }else if($8u.equals(m$1.Character(38,true))) {
                        var $9u=ceylonLexer$.$8q.peek(1);
                        if($9u.equals(m$1.Character(38,true))) {
                            if(ceylonLexer$.$8q.peek(2).equals(m$1.Character(61,true))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getAndAssignOp(),"&&=");
                            }else {
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getAndOp(),"&&");
                            }
                        }else if($9u.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getIntersectAssignOp(),"&=");
                        }else {
                            return ceylonLexer$.$93(getIntersectionOp(),m$1.Character(38,true));
                        }
                    }else if($8u.equals(m$1.Character(124,true))) {
                        var $9v=ceylonLexer$.$8q.peek(1);
                        if($9v.equals(m$1.Character(124,true))) {
                            if(ceylonLexer$.$8q.peek(2).equals(m$1.Character(61,true))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getOrAssignOp(),"||=");
                            }else {
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getOrOp(),"||");
                            }
                        }else if($9v.equals(m$1.Character(61,true))) {
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getUnionAssignOp(),"|=");
                        }else {
                            return ceylonLexer$.$93(getUnionOp(),m$1.Character(124,true));
                        }
                    }else if($8u.equals(m$1.Character(126,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(61,true))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getComplementAssignOp(),"~=");
                        }else {
                            return ceylonLexer$.$93(getComplementOp(),m$1.Character(126,true));
                        }
                    }else if($8u.equals(m$1.Character(60,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(61,true))){
                            if(ceylonLexer$.$8q.peek(2).equals(m$1.Character(62,true))){
                                ceylonLexer$.$8q.consume(3);
                                return ceylonLexer$.$8x(getCompareOp(),"<=>");
                            }else {
                                ceylonLexer$.$8q.consume(2);
                                return ceylonLexer$.$8x(getSmallAsOp(),"<=");
                            }
                        }else {
                            return ceylonLexer$.$93(getSmallerOp(),m$1.Character(60,true));
                        }
                    }else if($8u.equals(m$1.Character(62,true))) {
                        if(ceylonLexer$.$8q.peek(1).equals(m$1.Character(61,true))){
                            ceylonLexer$.$8q.consume(2);
                            return ceylonLexer$.$8x(getLargeAsOp(),">=");
                        }else {
                            return ceylonLexer$.$93(getLargerOp(),m$1.Character(62,true));
                        }
                    }else {
                        if(ceylonLexer$.$9w($8s)){
                            return ceylonLexer$.$9p($8s);
                        }else {
                            if($8s.whitespace){
                                ceylonLexer$.$8q.consume();
                                var $9x=m$1.StringBuilder();
                                $9x.appendCharacter($8s);
                                while(($8s=ceylonLexer$.$8q.peek()).whitespace){
                                    $9x.appendCharacter($8s);
                                    ceylonLexer$.$8q.consume();
                                }
                                return ceylonLexer$.$8x(getWhitespace(),$9x.string);
                            }else {
                                ceylonLexer$.$8q.consume();
                                return ceylonLexer$.$8x(getUnknownCharacter(),$8s.string);
                            }
                        }
                    }
                }
                return null;
            };ceylonLexer$.nextToken.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Token}]},ps:[],$cont:CeylonLexer,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CeylonLexer:$m:nextToken')];},d:['ceylon.lexer.core','CeylonLexer','$m','nextToken']};};
            ceylonLexer$.$9p=function($9y){
                var ceylonLexer$=this;
                ceylonLexer$.$8q.consume();
                var $9z=m$1.StringBuilder();
                $9z.appendCharacter($9y);
                var $a0=$9y.lowercase;
                var $a1;
                function set$a1($a2){return $a1=$a2;};
                while(ceylonLexer$.$9c(($a1=ceylonLexer$.$8q.peek()))){
                    $9z.appendCharacter($a1);
                    ceylonLexer$.$8q.consume();
                }
                return ceylonLexer$.$8x(($a3=($a0?getLidentifier():null),m$1.nn$($a3)?$a3:getUidentifier()),$9z.string);
                var $a3;
            };ceylonLexer$.$9p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Token},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Character}}],$cont:CeylonLexer,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CeylonLexer:$m:identifier$bxp7kq')];},d:['ceylon.lexer.core','CeylonLexer','$m','identifier$bxp7kq']};};
            ceylonLexer$.$93=function($a4,$a5){
                var ceylonLexer$=this;
                ceylonLexer$.$8q.consume();
                return ceylonLexer$.$8x($a4,$a5.string);
            };ceylonLexer$.$93.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Token},ps:[{nm:'type',mt:'prm',$t:{t:TokenType}},{nm:'text',mt:'prm',$t:{t:m$1.Character}}],$cont:CeylonLexer,an:function(){return[m$1.doc$($CCMM$,'ceylon.lexer.core:CeylonLexer:$m:charToken$743s9o')];},d:['ceylon.lexer.core','CeylonLexer','$m','charToken$743s9o']};};
            ceylonLexer$.$8x=function($a6,$a7){
                var ceylonLexer$=this;
                return Token($a6,$a7);
            };
            ceylonLexer$.$8x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Token},ps:[{nm:'type',mt:'prm',$t:{t:TokenType}},{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$m','token$j6uw6i']};};
            ceylonLexer$.$9w=function($a8){
                var ceylonLexer$=this;
                return ($a8.letter||$a8.equals(m$1.Character(95,true)));
            };
            ceylonLexer$.$9w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'character',mt:'prm',$t:{t:m$1.Character}}],$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$m','isIdentifierStart$fb28c0']};};
            ceylonLexer$.$9c=function($a9){
                var ceylonLexer$=this;
                return (($a9.letter||$a9.digit)||$a9.equals(m$1.Character(95,true)));
            };
            ceylonLexer$.$9c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'character',mt:'prm',$t:{t:m$1.Character}}],$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$m','isIdentifierPart$e9nunj']};};
            m$1.atr$(ceylonLexer$,'$8q',function(){return this.$8q_;},undefined,function(){return{mod:$CCMM$,$t:{t:CharacterStream},$cont:CeylonLexer,d:['ceylon.lexer.core','CeylonLexer','$at','characters$lzv03']};});
        })(CeylonLexer.$$.prototype);
    }
    return CeylonLexer;
}
ex$.$init$CeylonLexer=$init$CeylonLexer;
$init$CeylonLexer();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
