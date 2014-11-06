(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.1.0/ceylon.collection-1.1.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
m$1.$addmod$(ex$,'ceylon.collection/1.1.0');
function partition($5,$6,$$$mptypes){
    var $7=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$partition});
    var $8=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$partition});
    var $a;for(var $9=$5.iterator();($a=$9.next())!==m$1.getFinished();){
        if($6($a)){
            $7.add($a);
        }else {
            $8.add($a);
        }
    }
    return m$1.tpl$([$7.sequence(),$8.sequence()],{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:$$$mptypes.Element$partition}},{t:'u',l:[$$$mptypes.Element$partition,{t:m$1.Sequential,a:{Element$Sequential:$$$mptypes.Element$partition}}]}]});
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}},{$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$partition'}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition:$m:selecting$1pd776')];}}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
function ArrayList($b,$c,$d,$$targs$$,arrayList$){
    $init$ArrayList();
    if(arrayList$===undefined)arrayList$=new ArrayList.$$;
    m$1.set_type_args(arrayList$,$$targs$$);
    if($b===undefined){$b=(0);}
    arrayList$.$b_=$b;
    if($c===undefined){$c=m$1.Float(1.5);}
    arrayList$.$c_=$c;
    if($d===undefined){$d=m$1.getEmpty();}
    arrayList$.$d_=$d;
    MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
    Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
    Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
    arrayList$.$prop$get$b={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};}};
    arrayList$.$prop$get$b.get=function(){return $b};
    arrayList$.$prop$get$c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};}};
    arrayList$.$prop$get$c.get=function(){return $c};
    arrayList$.$prop$get$d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},$cont:ArrayList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','ArrayList','$at','elements$thp018']};}};
    arrayList$.$prop$get$d.get=function(){return $d};
    m$1.asrt$(((arrayList$.$b>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (34:11-34:32)",'33:4-34:33','ArrayList.ceylon');
    m$1.asrt$(((arrayList$.$b<=m$1.getRuntime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (37:11-37:51)",'36:4-37:52','ArrayList.ceylon');
    m$1.asrt$(((arrayList$.$c.compare(m$1.Float(1.0))!==m$1.getSmaller())),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (40:11-40:31)",'39:4-40:32','ArrayList.ceylon');
    arrayList$.$e_=m$1.$_Array(arrayList$.$d,{Element$Array:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}});
    arrayList$.$prop$get$e={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','array$i32poi']};}};
    arrayList$.$prop$get$e.get=function(){return $e};
    arrayList$.$f_=arrayList$.$e.size;
    arrayList$.$prop$get$f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','length$u7by4j']};}};
    arrayList$.$prop$get$f.get=function(){return $f};
    m$1.atr$(arrayList$,'size',function(){
        return arrayList$.$f;
    },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
    if((arrayList$.$f<arrayList$.$b)){
        var $g=arrayList$.$h(arrayList$.$b);
        $prop$get$g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,d:['ceylon.collection','ArrayList','$at','newArray$k8tsh']};}};
        $prop$get$g.get=function(){return $g};
        arrayList$.$e.copyTo($g,0,0,arrayList$.$f);
        arrayList$.$e=$g;
    }
    arrayList$.$prop$getCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};}};
    arrayList$.$prop$getCapacity.get=function(){return capacity};
    arrayList$.measure=function($i,$j){
        return arrayList$.span(($k=measureToSpan($i,$j).sequence(),$k.$_get(0)),$k.$_get(1));
    };
    arrayList$.deleteMeasure=function($l,$m){
        return arrayList$.deleteSpan(($n=measureToSpan($l,$m).sequence(),$n.$_get(0)),$n.$_get(1));
    };
    arrayList$.spanFrom=function($o){
        return ($p=(($o>=arrayList$.$f)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($p)?$p:arrayList$.span($o,arrayList$.$f.minus(1)));
    };
    var $p;
    arrayList$.spanTo=function($q){
        return ($r=(($q<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($r)?$r:arrayList$.span(0,$q));
    };
    var $r;
    m$1.atr$(arrayList$,'lastIndex',function(){
        return ((arrayList$.$f>=1)?arrayList$.$f.minus(1):null);
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
    arrayList$.equals=function($s){
        return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(this,$s);
    };
    m$1.atr$(arrayList$,'hash',function(){
        return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
    },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
    arrayList$.clone=function(){
        return ArrayList(arrayList$.size,arrayList$.$c,arrayList$,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
    };
    arrayList$.$_push=function($t){
        return arrayList$.add($t);
    };
    arrayList$.$_pop=function(){
        return arrayList$.deleteLast();
    };
    m$1.atr$(arrayList$,'top',function(){
        return arrayList$.last;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
    arrayList$.offer=function($u){
        return arrayList$.add($u);
    };
    arrayList$.accept=function(){
        return arrayList$.deleteFirst();
    };
    m$1.atr$(arrayList$,'back',function(){
        return arrayList$.last;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
    m$1.atr$(arrayList$,'front',function(){
        return arrayList$.first;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
    return arrayList$;
}
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
    if(ArrayList.$$===undefined){
        m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
        (function(arrayList$){
            m$1.atr$(arrayList$,'$b',function(){return this.$b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
            m$1.atr$(arrayList$,'$c',function(){return this.$c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
            m$1.atr$(arrayList$,'$d',function(){return this.$d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},$cont:ArrayList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','ArrayList','$at','elements$thp018']};});
            arrayList$.$h=function($v){
                var arrayList$=this;
                return m$1.arrayOfSize($v,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}});
            };
            arrayList$.$h.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
            m$1.atr$(arrayList$,'$e',function(){return this.$e_;},function($w){return this.$e_=$w;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
            m$1.atr$(arrayList$,'$f',function(){return this.$f_;},function($x){return this.$f_=$x;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
            m$1.atr$(arrayList$,'size',function(){
                var arrayList$=this;
                return arrayList$.$f;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
            arrayList$.$y=function($z){
                var arrayList$=this;
                var $10=arrayList$.$f.plus($z);
                var $11=m$1.getRuntime().maxArraySize;
                if(($10>$11)){
                    throw m$1.wrapexc(m$1.OverflowException(),'61:12-61:37','ceylon/collection/ArrayList.ceylon');
                }
                if(($10>arrayList$.$e.size)){
                    var $12=$10.times(arrayList$.$c).integer;
                    var $13=($14=((($12<$10)||($12>$11))?$11:null),m$1.nn$($14)?$14:$12);
                    var $14;
                    var $15=arrayList$.$h($13);
                    arrayList$.$e.copyTo($15);
                    arrayList$.$e=$15;
                }
            };arrayList$.$y.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
            arrayList$.add=function($16){
                var arrayList$=this;
                arrayList$.$y(1);
                arrayList$.$e.set(($17=arrayList$.$f,arrayList$.$f=$17.successor,$17),$16);
                var $17;
            };arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
            arrayList$.addAll=function($18){
                var arrayList$=this;
                arrayList$.$y($18.size);
                var $1a;for(var $19=$18.iterator();($1a=$19.next())!==m$1.getFinished();){
                    arrayList$.$e.set(($1b=arrayList$.$f,arrayList$.$f=$1b.successor,$1b),$1a);
                    var $1b;
                }
            };arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
            arrayList$.clear=function(){
                var arrayList$=this;
                arrayList$.$f=(0);
                arrayList$.$e=arrayList$.$h(arrayList$.$b);
            };arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
            m$1.atr$(arrayList$,'capacity',function(){
                var arrayList$=this;
                return arrayList$.$e.size;
            },function($1c){
                var arrayList$=this;
                m$1.asrt$((($1c>=arrayList$.size)),"capacity must be at least as large as list size: \'capacity >= size\' at ArrayList.ceylon (99:15-99:32)",'98:8-99:33','ArrayList.ceylon');
                m$1.asrt$((($1c<=m$1.getRuntime().maxArraySize)),"capacity too large: \'capacity <= runtime.maxArraySize\' at ArrayList.ceylon (101:15-101:48)",'100:8-101:49','ArrayList.ceylon');
                var $1d=arrayList$.$h($1c);
                $prop$get$1d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:{setter:arrayList$.$prop$getCapacity.set},d:['ceylon.collection','ArrayList','$at','capacity','$set','$at','resized$igciy5']};}};
                $prop$get$1d.get=function(){return $1d};
                arrayList$.$e.copyTo($1d,0,0,arrayList$.$f);
                arrayList$.$e=$1d;
            },function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
            arrayList$.getFromFirst=function($1e){
                var arrayList$=this;
                if(($1f=$1e,$1f.compare((0))!==m$1.getSmaller()&&$1f.compare(arrayList$.$f)===m$1.getSmaller())){
                    return arrayList$.$e.getFromFirst($1e);
                }else {
                    return null;
                }
            };arrayList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','getFromFirst']};};
            arrayList$.contains=function($1g){
                var arrayList$=this;
                var $1i;for(var $1h=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($1i=$1h.next())!==m$1.getFinished();){
                    var $1j;
                    if(m$1.nn$(($1j=arrayList$.$e.getFromFirst($1i)))){
                        if($1j.equals($1g)){
                            return true;
                        }
                    }
                }
                if(m$1.getFinished()===$1i){
                    return false;
                }
            };arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
            arrayList$.iterator=function(){
                var arrayList$=this;
                function $1k($$targs$$){
                    var $1k$=new $1k.$$;$1k$.outer$=arrayList$;
                    $1k$.$$targs$$=$$targs$$;
                    m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$1k$);
                    $1k$.$1l_=(0);
                    $1k$.$prop$get$1l={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1k,pa:1024,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','index$ciz003']};}};
                    $1k$.$prop$get$1l.get=function(){return $1l};
                    $1k$.$1m_=arrayList$.$e.iterator();
                    $1k$.$prop$get$1m={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:$1k,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','arrayIterator$wkszna']};}};
                    $1k$.$prop$get$1m.get=function(){return $1m};
                    return $1k$;
                };$1k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:arrayList$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4']};};
                function $init$$1k(){
                    if($1k.$$===undefined){
                        m$1.initTypeProto($1k,'ceylon.collection::ArrayList.iterator',m$1.Basic,m$1.Iterator);
                        (function($1k$){
                            m$1.atr$($1k$,'$1l',function(){return this.$1l_;},function($1n){return this.$1l_=$1n;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1k,pa:1024,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','index$ciz003']};});
                            m$1.atr$($1k$,'$1m',function(){return this.$1m_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:$1k,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','arrayIterator$wkszna']};});
                            $1k$.next=function(){
                                var $1k$=this;
                                if((($1o=$1k$.$1l,$1k$.$1l=$1o.successor,$1o)<arrayList$.$f)){
                                    var $1p;
                                    if(m$1.nn$(($1p=$1k$.$1m.next()))){
                                        return $1p;
                                    }else {
                                        var $1q;
                                        m$1.asrt$((m$1.is$(($1q=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (139:31-139:47)",'139:24-139:48','ArrayList.ceylon');
                                        return $1q;
                                    }
                                }else {
                                    return m$1.getFinished();
                                }
                                var $1o;
                            };$1k$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1k,pa:3,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$m','next']};};
                        })($1k.$$.prototype);
                    }
                    return $1k;
                }
                $init$$1k();
                var $1r;
                function get$1r(){
                    if($1r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'iterator\' before it was set"),'130:8-147:8','ArrayList.ceylon');
                    if($1r===undefined){$1r=m$1.INIT$;$1r=$init$$1k()({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList});$1r.$crtmm$=get$1r.$crtmm$;}
                    return $1r;
                }
                get$1r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1k},$cont:arrayList$.iterator,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb3']};};
                $prop$get$1r={get:get$1r,$crtmm$:get$1r.$crtmm$};
                get$1k=get$1r;$prop$get$1k=get$1r;
                return get$1r();
            };arrayList$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','iterator']};};
            arrayList$.insert=function($1s,$1t){
                var arrayList$=this;
                m$1.asrt$((($1u=$1s,$1u.compare((0))!==m$1.getSmaller()&&$1u.compare(arrayList$.$f)!==m$1.getLarger())),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (154:15-154:36)",'152:8-154:37','ArrayList.ceylon');
                arrayList$.$y(1);
                if(($1s<arrayList$.$f)){
                    arrayList$.$e.copyTo(arrayList$.$e,$1s,$1s.plus(1),arrayList$.$f.minus($1s));
                }
                ($1v=arrayList$.$f,arrayList$.$f=$1v.successor,$1v);
                var $1v;
                arrayList$.$e.set($1s,$1t);
            };arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
            arrayList$.$_delete=function($1w){
                var arrayList$=this;
                if(($1x=$1w,$1x.compare((0))!==m$1.getSmaller()&&$1x.compare(arrayList$.$f)===m$1.getSmaller())){
                    var $1y=arrayList$.$e.$_get($1w);
                    arrayList$.$e.copyTo(arrayList$.$e,$1w.plus(1),$1w,arrayList$.$f.minus($1w).minus(1));
                    ($1z=arrayList$.$f,arrayList$.$f=$1z.predecessor,$1z);
                    var $1z;
                    arrayList$.$e.set(arrayList$.$f,null);
                    return $1y;
                }else {
                    return null;
                }
            };arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
            arrayList$.remove=function($20){
                var arrayList$=this;
                var $21=(0);
                function set$21($22){return $21=$22;};
                var $23=(0);
                function set$23($24){return $23=$24;};
                while(($21<arrayList$.$f)){
                    var $25;
                    if(m$1.nn$(($25=arrayList$.$e.$_get(($26=$21,$21=$26.successor,$26))))){
                        if((!$25.equals($20))){
                            arrayList$.$e.set(($27=$23,$23=$27.successor,$27),$25);
                            var $27;
                        }
                    }else {
                        arrayList$.$e.set(($28=$23,$23=$28.successor,$28),null);
                        var $28;
                    }
                    var $26;
                }
                arrayList$.$f=$23;
                while(($23<$21)){
                    arrayList$.$e.set(($29=$23,$23=$29.successor,$29),null);
                    var $29;
                }
            };arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
            arrayList$.removeAll=function($2a){
                var arrayList$=this;
                var $2b=(0);
                function set$2b($2c){return $2b=$2c;};
                var $2d=(0);
                function set$2d($2e){return $2d=$2e;};
                while(($2b<arrayList$.$f)){
                    var $2f;
                    if(m$1.nn$(($2f=arrayList$.$e.$_get(($2g=$2b,$2b=$2g.successor,$2g))))){
                        if(!$2a.contains($2f)){
                            arrayList$.$e.set(($2h=$2d,$2d=$2h.successor,$2h),$2f);
                            var $2h;
                        }
                    }else {
                        arrayList$.$e.set(($2i=$2d,$2d=$2i.successor,$2i),null);
                        var $2i;
                    }
                    var $2g;
                }
                arrayList$.$f=$2d;
                while(($2d<$2b)){
                    arrayList$.$e.set(($2j=$2d,$2d=$2j.successor,$2j),null);
                    var $2j;
                }
            };arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
            arrayList$.removeFirst=function($2k){
                var arrayList$=this;
                var $2l;
                if(m$1.nn$(($2l=arrayList$.firstOccurrence($2k)))){
                    arrayList$.$_delete($2l);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
            arrayList$.removeLast=function($2m){
                var arrayList$=this;
                var $2n;
                if(m$1.nn$(($2n=arrayList$.lastOccurrence($2m)))){
                    arrayList$.$_delete($2n);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
            arrayList$.prune=function(){
                var arrayList$=this;
                var $2o=(0);
                function set$2o($2p){return $2o=$2p;};
                var $2q=(0);
                function set$2q($2r){return $2q=$2r;};
                while(($2o<arrayList$.$f)){
                    var $2s;
                    if(m$1.nn$(($2s=arrayList$.$e.$_get(($2t=$2o,$2o=$2t.successor,$2t))))){
                        arrayList$.$e.set(($2u=$2q,$2q=$2u.successor,$2u),$2s);
                        var $2u;
                    }
                    var $2t;
                }
                arrayList$.$f=$2q;
                while(($2q<$2o)){
                    arrayList$.$e.set(($2v=$2q,$2q=$2v.successor,$2v),null);
                    var $2v;
                }
            };arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
            arrayList$.$_replace=function($2w,$2x){
                var arrayList$=this;
                var $2y=(0);
                function set$2y($2z){return $2y=$2z;};
                while(($2y<arrayList$.$f)){
                    var $30;
                    if(m$1.nn$(($30=arrayList$.$e.$_get($2y)))&&$30.equals($2w)){
                        arrayList$.$e.set($2y,$2x);
                    }
                    ($31=$2y,$2y=$31.successor,$31);
                    var $31;
                }
            };arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
            arrayList$.replaceFirst=function($32,$33){
                var arrayList$=this;
                var $34;
                if(m$1.nn$(($34=arrayList$.firstOccurrence($32)))){
                    arrayList$.set($34,$33);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
            arrayList$.replaceLast=function($35,$36){
                var arrayList$=this;
                var $37;
                if(m$1.nn$(($37=arrayList$.lastOccurrence($35)))){
                    arrayList$.set($37,$36);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
            arrayList$.infill=function($38){
                var arrayList$=this;
                var $39=(0);
                function set$39($3a){return $39=$3a;};
                while(($39<arrayList$.$f)){
                    if(!m$1.nn$(arrayList$.$e.$_get($39))){
                        arrayList$.$e.set($39,$38);
                    }
                    ($3b=$39,$39=$3b.successor,$3b);
                    var $3b;
                }
            };arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
            m$1.atr$(arrayList$,'first',function(){
                var arrayList$=this;
                if((arrayList$.$f>0)){
                    return arrayList$.$e.$_get(0);
                }else {
                    return null;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});arrayList$.set=function($3c,$3d){
                var arrayList$=this;
                m$1.asrt$((($3e=$3c,$3e.compare((0))!==m$1.getSmaller()&&$3e.compare(arrayList$.$f)===m$1.getSmaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at ArrayList.ceylon (303:15-303:31)",'301:8-303:32','ArrayList.ceylon');
                arrayList$.$e.set($3c,$3d);
            };arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
            arrayList$.span=function($3f,$3g){
                var arrayList$=this;
                var $3h=spanToMeasure($3f,$3g,arrayList$.$f);
                var $3i=$3h.$_get(0);
                var $3j=$3h.$_get(1);
                var $3k=$3h.$_get(2);
                var $3l=($3m=$3j,$3n=arrayList$.$c,$3o=arrayList$.skip($3i).take($3j),ArrayList($3m,$3n,$3o,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
                var $3m,$3n,$3o;
                return ($3p=($3k?$3l.reversed:null),m$1.nn$($3p)?$3p:$3l);
                var $3p;
            };arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
            arrayList$.deleteSpan=function($3q,$3r){
                var arrayList$=this;
                var $3s=spanToMeasure($3q,$3r,arrayList$.$f);
                var $3t=$3s.$_get(0);
                var $3u=$3s.$_get(1);
                if((($3t<arrayList$.$f)&&($3u>0))){
                    var $3v=$3t.plus($3u);
                    arrayList$.$e.copyTo(arrayList$.$e,$3v,$3t,arrayList$.$f.minus($3v));
                    var $3w=arrayList$.$f.minus($3u);
                    function set$3w($3x){return $3w=$3x;};
                    while(($3w<arrayList$.$f)){
                        arrayList$.$e.set(($3y=$3w,$3w=$3y.successor,$3y),null);
                        var $3y;
                    }
                    (arrayList$.$f=arrayList$.$f.minus($3u));
                }
            };arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
            arrayList$.measure=function($i,$j){
                var arrayList$=this;
                return arrayList$.span(($3z=measureToSpan($i,$j).sequence(),$3z.$_get(0)),$3z.$_get(1));
            };arrayList$.deleteMeasure=function($l,$m){
                var arrayList$=this;
                return arrayList$.deleteSpan(($40=measureToSpan($l,$m).sequence(),$40.$_get(0)),$40.$_get(1));
            };arrayList$.truncate=function($41){
                var arrayList$=this;
                m$1.asrt$((($41>=0)),"Assertion failed: \'size >= 0\' at ArrayList.ceylon (343:15-343:25)",'343:8-343:26','ArrayList.ceylon');
                if(($41<arrayList$.$f)){
                    var $42=$41;
                    function set$42($43){return $42=$43;};
                    while(($42<arrayList$.$f)){
                        arrayList$.$e.set(($44=$42,$42=$44.successor,$44),null);
                        var $44;
                    }
                    arrayList$.$f=$41;
                }
            };arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
            arrayList$.spanFrom=function($o){
                var arrayList$=this;
                return ($45=(($o>=arrayList$.$f)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($45)?$45:arrayList$.span($o,arrayList$.$f.minus(1)));
            };arrayList$.spanTo=function($q){
                var arrayList$=this;
                return ($46=(($q<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($46)?$46:arrayList$.span(0,$q));
            };m$1.atr$(arrayList$,'lastIndex',function(){
                var arrayList$=this;
                return ((arrayList$.$f>=1)?arrayList$.$f.minus(1):null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
            arrayList$.equals=function($s){
                var arrayList$=this;
                return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(this,$s);
            };m$1.atr$(arrayList$,'hash',function(){
                var arrayList$=this;
                return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
            arrayList$.clone=function(){
                var arrayList$=this;
                return ArrayList(arrayList$.size,arrayList$.$c,arrayList$,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
            };arrayList$.$_push=function($t){
                var arrayList$=this;
                return arrayList$.add($t);
            };arrayList$.$_pop=function(){
                var arrayList$=this;
                return arrayList$.deleteLast();
            };m$1.atr$(arrayList$,'top',function(){
                var arrayList$=this;
                return arrayList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
            arrayList$.offer=function($u){
                var arrayList$=this;
                return arrayList$.add($u);
            };arrayList$.accept=function(){
                var arrayList$=this;
                return arrayList$.deleteFirst();
            };m$1.atr$(arrayList$,'back',function(){
                var arrayList$=this;
                return arrayList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
            m$1.atr$(arrayList$,'front',function(){
                var arrayList$=this;
                return arrayList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
            arrayList$.sortInPlace=function($47){
                var arrayList$=this;
                arrayList$.$e.sortInPlace(m$1.$JsCallable((function($48,$49){
                    var $4a,$4b;
                    if(m$1.nn$(($4a=$48))&&m$1.nn$(($4b=$49))){
                        return $47($4a,$4b);
                    }else {
                        if((m$1.nn$($48)&&!m$1.nn$($49))){
                            return m$1.getSmaller();
                        }else {
                            if((m$1.nn$($49)&&!m$1.nn$($48))){
                                return m$1.getLarger();
                            }else {
                                return m$1.getEqual();
                            }
                        }
                    }
                }),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]},{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}]}}));
            };arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace:$m:comparing$6r94m6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
        })(ArrayList.$$.prototype);
    }
    return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;
$init$ArrayList();
var $45,$46;
function UnmodifiableList($4c,$$targs$$,unmodifiableList$){
    $init$UnmodifiableList();
    if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
    m$1.set_type_args(unmodifiableList$,$$targs$$);
    unmodifiableList$.$4c_=$4c;
    m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
    return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
function $init$UnmodifiableList(){
    if(UnmodifiableList.$$===undefined){
        m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
        (function(unmodifiableList$){
            unmodifiableList$.getFromFirst=function($4d){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.getFromFirst($4d);
            };m$1.atr$(unmodifiableList$,'size',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
            m$1.atr$(unmodifiableList$,'lastIndex',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.lastIndex;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
            m$1.atr$(unmodifiableList$,'first',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
            m$1.atr$(unmodifiableList$,'rest',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.rest;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
            unmodifiableList$.iterator=function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.iterator();
            };m$1.atr$(unmodifiableList$,'reversed',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.reversed;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
            unmodifiableList$.measure=function($4e,$4f){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.measure($4e,$4f);
            };unmodifiableList$.span=function($4g,$4h){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.span($4g,$4h);
            };unmodifiableList$.spanFrom=function($4i){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.spanFrom($4i);
            };unmodifiableList$.spanTo=function($4j){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.spanTo($4j);
            };unmodifiableList$.equals=function($4k){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.equals($4k);
            };m$1.atr$(unmodifiableList$,'hash',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$4c.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
            unmodifiableList$.clone=function(){
                var unmodifiableList$=this;
                return UnmodifiableList(unmodifiableList$.$4c.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
            };m$1.atr$(unmodifiableList$,'$4c',function(){return this.$4c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
        })(UnmodifiableList.$$.prototype);
    }
    return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;
$init$UnmodifiableList();
function unmodifiableList($4l,$$$mptypes){
    return UnmodifiableList($4l,{Element$UnmodifiableList:$$$mptypes.Element$unmodifiableList});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function HashSet($4m,$4n,$4o,$$targs$$,hashSet$){
    $init$HashSet();
    if(hashSet$===undefined)hashSet$=new HashSet.$$;
    m$1.set_type_args(hashSet$,$$targs$$);
    if($4m===undefined){$4m=getLinked();}
    hashSet$.$4m_=$4m;
    if($4n===undefined){$4n=Hashtable();}
    hashSet$.$4n_=$4n;
    if($4o===undefined){$4o=m$1.getEmpty();}
    hashSet$.$4o_=$4o;
    MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
    hashSet$.$prop$get$4m={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};}};
    hashSet$.$prop$get$4m.get=function(){return $4m};
    hashSet$.$prop$get$4o={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};}};
    hashSet$.$prop$get$4o.get=function(){return $4o};
    hashSet$.$prop$get$4n={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};}};
    hashSet$.$prop$get$4n.get=function(){return $4n};
    hashSet$.$4p_=elementStore(hashSet$.$4n.initialCapacity,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
    hashSet$.$prop$get$4p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};}};
    hashSet$.$prop$get$4p.get=function(){return $4p};
    hashSet$.$4q_=(0);
    hashSet$.$prop$get$4q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};}};
    hashSet$.$prop$get$4q.get=function(){return $4q};
    hashSet$.$4r_=null;
    hashSet$.$prop$get$4r={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};}};
    hashSet$.$prop$get$4r.get=function(){return $4r};
    hashSet$.$4s_=null;
    hashSet$.$prop$get$4s={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};}};
    hashSet$.$prop$get$4s.get=function(){return $4s};
    var $4u;for(var $4t=hashSet$.$4o.iterator();($4u=$4t.next())!==m$1.getFinished();){
        if(hashSet$.$4v(hashSet$.$4p,$4u)){
            ($4w=hashSet$.$4q,hashSet$.$4q=$4w.successor,$4w);
            var $4w;
        }
    }
    hashSet$.$4x();
    return hashSet$;
}
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(["Stéphane Épardaud","Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
    if(HashSet.$$===undefined){
        m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
        (function(hashSet$){
            m$1.atr$(hashSet$,'$4m',function(){return this.$4m_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
            m$1.atr$(hashSet$,'$4o',function(){return this.$4o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
            m$1.atr$(hashSet$,'$4n',function(){return this.$4n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
            m$1.atr$(hashSet$,'$4p',function(){return this.$4p_;},function($4y){return this.$4p_=$4y;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
            m$1.atr$(hashSet$,'$4q',function(){return this.$4q_;},function($4z){return this.$4q_=$4z;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
            m$1.atr$(hashSet$,'$4r',function(){return this.$4r_;},function($50){return this.$4r_=$50;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
            m$1.atr$(hashSet$,'$4s',function(){return this.$4s_;},function($51){return this.$4s_=$51;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
            hashSet$.$52=function($53,$54){
                var hashSet$=this;
                return $53.hash.remainder($54.size).magnitude;
            };
            hashSet$.$52.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
            hashSet$.$55=function($56,$57){
                var hashSet$=this;
                if(hashSet$.$4m.equals(getLinked())){
                    var $58=LinkedCell($56,$57,hashSet$.$4s,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
                    var $59;
                    if(m$1.nn$(($59=hashSet$.$4s))){
                        ($59.next=$58);
                    }
                    hashSet$.$4s=$58;
                    if(!m$1.nn$(hashSet$.$4r)){
                        hashSet$.$4r=$58;
                    }
                    return $58;
                }else {
                    return Cell($56,$57,{Element$Cell:hashSet$.$$targs$$.Element$HashSet});
                }
            };hashSet$.$55.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
            hashSet$.$5a=function($5b){
                var hashSet$=this;
                if(hashSet$.$4m.equals(getLinked())){
                    var $5c;
                    m$1.asrt$((m$1.is$(($5c=$5b),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}})),"Assertion failed: \'is LinkedCell<Element> cell\' at HashSet.ceylon (89:19-89:47)",'89:12-89:48','HashSet.ceylon');
                    var $5d;
                    if(m$1.nn$(($5d=$5c.previous))){
                        ($5d.next=$5c.next);
                    }else {
                        hashSet$.$4r=$5c.next;
                    }
                    var $5e;
                    if(m$1.nn$(($5e=$5c.next))){
                        ($5e.previous=$5c.previous);
                    }else {
                        hashSet$.$4s=$5c.previous;
                    }
                }
            };hashSet$.$5a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
            hashSet$.$4v=function($5f,$5g){
                var hashSet$=this;
                var $5h=hashSet$.$52($5g,$5f);
                var $5i=$5f.$_get($5h);
                function set$5i($5j){return $5i=$5j;};
                var $5k;
                while(m$1.nn$(($5k=$5i))){
                    if($5k.element.equals($5g)){
                        ($5k.element=$5g);
                        return false;
                    }
                    $5i=$5k.rest;
                }
                $5f.set($5h,hashSet$.$55($5g,$5f.$_get($5h)));
                return true;
            };hashSet$.$4v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
            hashSet$.$4x=function(){
                var hashSet$=this;
                if(hashSet$.$4n.rehash(hashSet$.$4q,hashSet$.$4p.size)){
                    var $5l=elementStore(hashSet$.$4n.capacity(hashSet$.$4q),{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
                    var $5m=(0);
                    function set$5m($5n){return $5m=$5n;};
                    while(($5m<hashSet$.$4p.size)){
                        var $5o=hashSet$.$4p.$_get($5m);
                        function set$5o($5p){return $5o=$5p;};
                        var $5q;
                        while(m$1.nn$(($5q=$5o))){
                            $5o=$5q.rest;
                            var $5r=hashSet$.$52($5q.element,$5l);
                            var $5s=$5l.$_get($5r);
                            function set$5s($5t){return $5s=$5t;};
                            var $5u;
                            while(m$1.nn$(($5u=($5v=$5s,m$1.nn$($5v)?$5v.rest:null)))){
                                $5s=$5u;
                            }
                            var $5v;
                            ($5q.rest=$5s);
                            $5l.set($5r,$5q);
                        }
                        ($5w=$5m,$5m=$5w.successor,$5w);
                        var $5w;
                    }
                    hashSet$.$4p=$5l;
                }
            };hashSet$.$4x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
            hashSet$.add=function($5x){
                var hashSet$=this;
                if(hashSet$.$4v(hashSet$.$4p,$5x)){
                    ($5y=hashSet$.$4q,hashSet$.$4q=$5y.successor,$5y);
                    var $5y;
                    hashSet$.$4x();
                    return true;
                }
                return false;
            };hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
            hashSet$.addAll=function($5z){
                var hashSet$=this;
                var $60=false;
                function set$60($61){return $60=$61;};
                var $63;for(var $62=$5z.iterator();($63=$62.next())!==m$1.getFinished();){
                    if(hashSet$.$4v(hashSet$.$4p,$63)){
                        ($64=hashSet$.$4q,hashSet$.$4q=$64.successor,$64);
                        var $64;
                        $60=true;
                    }
                }
                if($60){
                    hashSet$.$4x();
                }
                return $60;
            };hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
            hashSet$.remove=function($65){
                var hashSet$=this;
                var $66=false;
                function set$66($67){return $66=$67;};
                var $68=hashSet$.$52($65,hashSet$.$4p);
                var $69;
                while(m$1.nn$(($69=hashSet$.$4p.$_get($68)))&&$69.element.equals($65)){
                    hashSet$.$4p.set($68,$69.rest);
                    hashSet$.$5a($69);
                    ($6a=hashSet$.$4q,hashSet$.$4q=$6a.predecessor,$6a);
                    var $6a;
                    $66=true;
                }
                var $6b=hashSet$.$4p.$_get($68);
                function set$6b($6c){return $6b=$6c;};
                var $6d;
                while(m$1.nn$(($6d=$6b))){
                    var $6e=$6d.rest;
                    var $6f;
                    if(m$1.nn$(($6f=$6e))&&$6f.element.equals($65)){
                        ($6d.rest=$6f.rest);
                        hashSet$.$5a($6d);
                        ($6g=hashSet$.$4q,hashSet$.$4q=$6g.predecessor,$6g);
                        var $6g;
                        $66=true;
                    }else {
                        $6b=$6e;
                    }
                }
                return $66;
            };hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
            hashSet$.clear=function(){
                var hashSet$=this;
                var $6h=(0);
                function set$6h($6i){return $6h=$6i;};
                while(($6h<hashSet$.$4p.size)){
                    hashSet$.$4p.set(($6j=$6h,$6h=$6j.successor,$6j),null);
                    var $6j;
                }
                hashSet$.$4q=(0);
                hashSet$.$4r=null;
                hashSet$.$4s=null;
            };hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
            m$1.atr$(hashSet$,'size',function(){
                var hashSet$=this;
                return hashSet$.$4q;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
            hashSet$.iterator=function(){
                var hashSet$=this;
                return ($6k=(hashSet$.$4m.equals(getLinked())?LinkedCellIterator(hashSet$.$4r,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($6k)?$6k:StoreIterator(hashSet$.$4p,{Element$StoreIterator:hashSet$.$$targs$$.Element$HashSet}));
            };hashSet$.count=function($6l){
                var hashSet$=this;
                var $6m=(0);
                function set$6m($6n){return $6m=$6n;};
                var $6o=(0);
                function set$6o($6p){return $6o=$6p;};
                while(($6o<hashSet$.$4p.size)){
                    var $6q=hashSet$.$4p.$_get($6o);
                    function set$6q($6r){return $6q=$6r;};
                    var $6s;
                    while(m$1.nn$(($6s=$6q))){
                        if($6l($6s.element)){
                            ($6t=$6m,$6m=$6t.successor,$6t);
                            var $6t;
                        }
                        $6q=$6s.rest;
                    }
                    ($6u=$6o,$6o=$6u.successor,$6u);
                    var $6u;
                }
                return $6m;
            };hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
            m$1.atr$(hashSet$,'hash',function(){
                var hashSet$=this;
                var $6v=(0);
                function set$6v($6w){return $6v=$6w;};
                $prop$get$6v={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashSet$.$prop$getHash,pa:1024,d:['ceylon.collection','HashSet','$at','hash','$at','index$cchzr1']};}};
                $prop$get$6v.get=function(){return $6v};
                $prop$get$6v.set=set$6v;
                if(set$6v.$crtmm$===undefined)set$6v.$crtmm$=$prop$get$6v.$crtmm$;
                var $6x=(0);
                function set$6x($6y){return $6x=$6y;};
                $prop$get$6x={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashSet$.$prop$getHash,pa:1024,d:['ceylon.collection','HashSet','$at','hash','$at','hash$eqglqx']};}};
                $prop$get$6x.get=function(){return $6x};
                $prop$get$6x.set=set$6x;
                if(set$6x.$crtmm$===undefined)set$6x.$crtmm$=$prop$get$6x.$crtmm$;
                while(($6v<hashSet$.$4p.size)){
                    var $6z=hashSet$.$4p.$_get($6v);
                    function set$6z($70){return $6z=$70;};
                    $prop$get$6z={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]},$cont:hashSet$.$prop$getHash,pa:1027,d:['ceylon.collection','HashSet','$at','hash','$at','bucket$wk08dy']};}};
                    $prop$get$6z.get=function(){return $6z};
                    $prop$get$6z.set=set$6z;
                    if(set$6z.$crtmm$===undefined)set$6z.$crtmm$=$prop$get$6z.$crtmm$;
                    var $71;
                    while(m$1.nn$(($71=$6z))){
                        ($6x=$6x.plus($71.element.hash));
                        $6z=$71.rest;
                    }
                    ($72=$6v,$6v=$72.successor,$72);
                    var $72;
                }
                return $6x;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($73){
                var hashSet$=this;
                var $74;
                if(m$1.is$(($74=$73),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&((hashSet$.size).valueOf()==($74.size).valueOf())){
                    var $75=(0);
                    function set$75($76){return $75=$76;};
                    while(($75<hashSet$.$4p.size)){
                        var $77=hashSet$.$4p.$_get($75);
                        function set$77($78){return $77=$78;};
                        var $79;
                        while(m$1.nn$(($79=$77))){
                            if(!$74.contains($79.element)){
                                return false;
                            }
                            $77=$79.rest;
                        }
                        ($7a=$75,$75=$7a.successor,$7a);
                        var $7a;
                    }
                    return true;
                }
                return false;
            };hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
            hashSet$.clone=function(){
                var hashSet$=this;
                var $7b=HashSet(hashSet$.$4m,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
                if(hashSet$.$4m.equals(getUnlinked())){
                    ($7b.$4q=hashSet$.$4q);
                    ($7b.$4p=elementStore(hashSet$.$4p.size,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet}));
                    var $7c=(0);
                    function set$7c($7d){return $7c=$7d;};
                    while(($7c<hashSet$.$4p.size)){
                        var $7e;
                        if(m$1.nn$(($7e=hashSet$.$4p.$_get($7c)))){
                            $7b.$4p.set($7c,$7e.clone());
                        }
                        ($7f=$7c,$7c=$7f.successor,$7f);
                        var $7f;
                    }
                }else {
                    var $7h;for(var $7g=hashSet$.iterator();($7h=$7g.next())!==m$1.getFinished();){
                        $7b.add($7h);
                    }
                }
                return $7b;
            };hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
            hashSet$.contains=function($7i){
                var hashSet$=this;
                if(hashSet$.empty){
                    return false;
                }else {
                    var $7j=hashSet$.$52($7i,hashSet$.$4p);
                    var $7k=hashSet$.$4p.$_get($7j);
                    function set$7k($7l){return $7k=$7l;};
                    var $7m;
                    while(m$1.nn$(($7m=$7k))){
                        if($7m.element.equals($7i)){
                            return true;
                        }
                        $7k=$7m.rest;
                    }
                    return false;
                }
            };hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
            hashSet$.complement=function($7n,$$$mptypes){
                var hashSet$=this;
                var $7o=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
                var $7q;for(var $7p=hashSet$.iterator();($7q=$7p.next())!==m$1.getFinished();){
                    if(!$7n.contains($7q)){
                        $7o.add($7q);
                    }
                }
                return $7o;
            };hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
            hashSet$.exclusiveUnion=function($7r,$$$mptypes){
                var hashSet$=this;
                var $7s=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$exclusiveUnion]}});
                var $7u;for(var $7t=hashSet$.iterator();($7u=$7t.next())!==m$1.getFinished();){
                    if(!$7r.contains($7u)){
                        $7s.add($7u);
                    }
                }
                var $7w;for(var $7v=$7r.iterator();($7w=$7v.next())!==m$1.getFinished();){
                    if(!hashSet$.contains($7w)){
                        $7s.add($7w);
                    }
                }
                return $7s;
            };hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
            hashSet$.intersection=function($7x,$$$mptypes){
                var hashSet$=this;
                var $7y=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'i',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$intersection]}});
                var $80;for(var $7z=hashSet$.iterator();($80=$7z.next())!==m$1.getFinished();){
                    var $81;
                    if($7x.contains($80)&&m$1.is$(($81=$80),$$$mptypes.Other$intersection)){
                        $7y.add($81);
                    }
                }
                return $7y;
            };hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
            hashSet$.union=function($82,$$$mptypes){
                var hashSet$=this;
                var $83=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$union]}});
                $83.addAll(hashSet$);
                $83.addAll($82);
                return $83;
            };hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
            m$1.atr$(hashSet$,'first',function(){
                var hashSet$=this;
                if(hashSet$.$4m.equals(getLinked())){
                    return ($84=hashSet$.$4r,m$1.nn$($84)?$84.element:null);
                    var $84;
                }else {
                    return ($85=hashSet$.$4p.coalesced.first,m$1.nn$($85)?$85.element:null);
                    var $85;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});m$1.atr$(hashSet$,'last',function(){
                var hashSet$=this;
                if(hashSet$.$4m.equals(getLinked())){
                    return ($86=hashSet$.$4s,m$1.nn$($86)?$86.element:null);
                    var $86;
                }else {
                    var $87=hashSet$.$4p.coalesced.last;
                    function set$87($88){return $87=$88;};
                    $prop$get$87={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]},$cont:hashSet$.$prop$getLast,pa:1027,d:['ceylon.collection','HashSet','$at','last','$at','bucket$t0cods']};}};
                    $prop$get$87.get=function(){return $87};
                    $prop$get$87.set=set$87;
                    if(set$87.$crtmm$===undefined)set$87.$crtmm$=$prop$get$87.$crtmm$;
                    var $89;
                    while(m$1.nn$(($89=($8a=$87,m$1.nn$($8a)?$8a.rest:null)))){
                        $87=$89;
                    }
                    var $8a;
                    return ($8b=$87,m$1.nn$($8b)?$8b.element:null);
                    var $8b;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});
        })(HashSet.$$.prototype);
    }
    return HashSet;
}
ex$.$init$HashSet=$init$HashSet;
$init$HashSet();
var $6k;
function HashMap($8c,$8d,$8e,$$targs$$,hashMap$){
    $init$HashMap();
    if(hashMap$===undefined)hashMap$=new HashMap.$$;
    m$1.set_type_args(hashMap$,$$targs$$);
    if($8c===undefined){$8c=getLinked();}
    hashMap$.$8c_=$8c;
    if($8d===undefined){$8d=Hashtable();}
    hashMap$.$8d_=$8d;
    if($8e===undefined){$8e=m$1.getEmpty();}
    hashMap$.$8e_=$8e;
    MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
    hashMap$.$prop$get$8c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};}};
    hashMap$.$prop$get$8c.get=function(){return $8c};
    hashMap$.$prop$get$8e={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};}};
    hashMap$.$prop$get$8e.get=function(){return $8e};
    hashMap$.$prop$get$8d={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};}};
    hashMap$.$prop$get$8d.get=function(){return $8d};
    hashMap$.$8f_=entryStore(hashMap$.$8d.initialCapacity,{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap});
    hashMap$.$prop$get$8f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};}};
    hashMap$.$prop$get$8f.get=function(){return $8f};
    hashMap$.$8g_=(0);
    hashMap$.$prop$get$8g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};}};
    hashMap$.$prop$get$8g.get=function(){return $8g};
    hashMap$.$8h_=null;
    hashMap$.$prop$get$8h={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};}};
    hashMap$.$prop$get$8h.get=function(){return $8h};
    hashMap$.$8i_=null;
    hashMap$.$prop$get$8i={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};}};
    hashMap$.$prop$get$8i.get=function(){return $8i};
    var $8k;for(var $8j=hashMap$.$8e.iterator();($8k=$8j.next())!==m$1.getFinished();){
        if(hashMap$.$8l(hashMap$.$8f,$8k)){
            ($8m=hashMap$.$8g,hashMap$.$8g=$8m.successor,$8m);
            var $8m;
        }
    }
    hashMap$.$8n();
    return hashMap$;
}
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
    if(HashMap.$$===undefined){
        m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
        (function(hashMap$){
            m$1.atr$(hashMap$,'$8c',function(){return this.$8c_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
            m$1.atr$(hashMap$,'$8e',function(){return this.$8e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
            m$1.atr$(hashMap$,'$8d',function(){return this.$8d_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
            m$1.atr$(hashMap$,'$8f',function(){return this.$8f_;},function($8o){return this.$8f_=$8o;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
            m$1.atr$(hashMap$,'$8g',function(){return this.$8g_;},function($8p){return this.$8g_=$8p;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
            m$1.atr$(hashMap$,'$8h',function(){return this.$8h_;},function($8q){return this.$8h_=$8q;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
            m$1.atr$(hashMap$,'$8i',function(){return this.$8i_;},function($8r){return this.$8i_=$8r;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
            hashMap$.$8s=function($8t,$8u){
                var hashMap$=this;
                return $8t.hash.remainder($8u.size).magnitude;
            };
            hashMap$.$8s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
            hashMap$.$8v=function($8w,$8x){
                var hashMap$=this;
                if(hashMap$.$8c.equals(getLinked())){
                    var $8y=LinkedCell($8w,$8x,hashMap$.$8i,{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}});
                    var $8z;
                    if(m$1.nn$(($8z=hashMap$.$8i))){
                        ($8z.next=$8y);
                    }
                    hashMap$.$8i=$8y;
                    if(!m$1.nn$(hashMap$.$8h)){
                        hashMap$.$8h=$8y;
                    }
                    return $8y;
                }else {
                    return Cell($8w,$8x,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}});
                }
            };hashMap$.$8v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
            hashMap$.$90=function($91){
                var hashMap$=this;
                if(hashMap$.$8c.equals(getLinked())){
                    var $92;
                    m$1.asrt$((m$1.is$(($92=$91),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}})),"Assertion failed: \'is LinkedCell<Key->Item> cell\' at HashMap.ceylon (90:19-90:49)",'90:12-90:50','HashMap.ceylon');
                    var $93;
                    if(m$1.nn$(($93=$92.previous))){
                        ($93.next=$92.next);
                    }else {
                        hashMap$.$8h=$92.next;
                    }
                    var $94;
                    if(m$1.nn$(($94=$92.next))){
                        ($94.previous=$92.previous);
                    }else {
                        hashMap$.$8i=$92.previous;
                    }
                }
            };hashMap$.$90.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
            hashMap$.$8l=function($95,$96){
                var hashMap$=this;
                var $97=hashMap$.$8s($96.key,$95);
                var $98=$95.$_get($97);
                function set$98($99){return $98=$99;};
                var $9a;
                while(m$1.nn$(($9a=$98))){
                    if($9a.element.key.equals($96.key)){
                        ($9a.element=$96);
                        return false;
                    }
                    $98=$9a.rest;
                }
                $95.set($97,hashMap$.$8v($96,$95.$_get($97)));
                return true;
            };hashMap$.$8l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
            hashMap$.$8n=function(){
                var hashMap$=this;
                if(hashMap$.$8d.rehash(hashMap$.$8g,hashMap$.$8f.size)){
                    var $9b=entryStore(hashMap$.$8d.capacity(hashMap$.$8g),{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap});
                    var $9c=(0);
                    function set$9c($9d){return $9c=$9d;};
                    while(($9c<hashMap$.$8f.size)){
                        var $9e=hashMap$.$8f.$_get($9c);
                        function set$9e($9f){return $9e=$9f;};
                        var $9g;
                        while(m$1.nn$(($9g=$9e))){
                            $9e=$9g.rest;
                            var $9h=hashMap$.$8s($9g.element.key,$9b);
                            var $9i=$9b.$_get($9h);
                            ($9g.rest=$9i);
                            $9b.set($9h,$9g);
                        }
                        ($9j=$9c,$9c=$9j.successor,$9j);
                        var $9j;
                    }
                    hashMap$.$8f=$9b;
                }
            };hashMap$.$8n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
            hashMap$.put=function($9k,$9l){
                var hashMap$=this;
                var $9m=hashMap$.$8s($9k,hashMap$.$8f);
                var $9n=m$1.Entry($9k,$9l,{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap});
                var $9o=hashMap$.$8f.$_get($9m);
                function set$9o($9p){return $9o=$9p;};
                var $9q;
                while(m$1.nn$(($9q=$9o))){
                    if($9q.element.key.equals($9k)){
                        var $9r=$9q.element.item;
                        ($9q.element=$9n);
                        return $9r;
                    }
                    $9o=$9q.rest;
                }
                hashMap$.$8f.set($9m,hashMap$.$8v($9n,hashMap$.$8f.$_get($9m)));
                ($9s=hashMap$.$8g,hashMap$.$8g=$9s.successor,$9s);
                var $9s;
                hashMap$.$8n();
                return null;
            };hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
            hashMap$.replaceEntry=function($9t,$9u,$9v){
                var hashMap$=this;
                var $9w=hashMap$.$8s($9t,hashMap$.$8f);
                var $9x=hashMap$.$8f.$_get($9w);
                function set$9x($9y){return $9x=$9y;};
                var $9z;
                while(m$1.nn$(($9z=$9x))){
                    if($9z.element.key.equals($9t)){
                        var $a0;
                        if(m$1.nn$(($a0=$9z.element.item))&&$a0.equals($9u)){
                            ($9z.element=m$1.Entry($9t,$9v,{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}));
                            return true;
                        }else {
                            return false;
                        }
                    }
                    $9x=$9z.rest;
                }
                return false;
            };hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
            hashMap$.putAll=function($a1){
                var hashMap$=this;
                var $a3;for(var $a2=$a1.iterator();($a3=$a2.next())!==m$1.getFinished();){
                    if(hashMap$.$8l(hashMap$.$8f,$a3)){
                        ($a4=hashMap$.$8g,hashMap$.$8g=$a4.successor,$a4);
                        var $a4;
                    }
                }
                hashMap$.$8n();
            };hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
            hashMap$.remove=function($a5){
                var hashMap$=this;
                var $a6=hashMap$.$8s($a5,hashMap$.$8f);
                var $a7;
                while(m$1.nn$(($a7=hashMap$.$8f.$_get($a6)))&&$a7.element.key.equals($a5)){
                    hashMap$.$8f.set($a6,$a7.rest);
                    hashMap$.$90($a7);
                    ($a8=hashMap$.$8g,hashMap$.$8g=$a8.predecessor,$a8);
                    var $a8;
                    return $a7.element.item;
                }
                var $a9=hashMap$.$8f.$_get($a6);
                function set$a9($aa){return $a9=$aa;};
                var $ab;
                while(m$1.nn$(($ab=$a9))){
                    var $ac=$ab.rest;
                    var $ad;
                    if(m$1.nn$(($ad=$ac))&&$ad.element.key.equals($a5)){
                        ($ab.rest=$ad.rest);
                        hashMap$.$90($ab);
                        ($ae=hashMap$.$8g,hashMap$.$8g=$ae.predecessor,$ae);
                        var $ae;
                        return $ad.element.item;
                    }else {
                        $a9=$ac;
                    }
                }
                return null;
            };hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
            hashMap$.removeEntry=function($af,$ag){
                var hashMap$=this;
                var $ah=hashMap$.$8s($af,hashMap$.$8f);
                var $ai;
                while(m$1.nn$(($ai=hashMap$.$8f.$_get($ah)))&&$ai.element.key.equals($af)){
                    var $aj;
                    if(m$1.nn$(($aj=$ai.element.item))&&$aj.equals($ag)){
                        hashMap$.$8f.set($ah,$ai.rest);
                        ($ak=hashMap$.$8g,hashMap$.$8g=$ak.predecessor,$ak);
                        var $ak;
                        return true;
                    }else {
                        return false;
                    }
                }
                var $al=hashMap$.$8f.$_get($ah);
                function set$al($am){return $al=$am;};
                var $an;
                while(m$1.nn$(($an=$al))){
                    var $ao=$an.rest;
                    var $ap;
                    if(m$1.nn$(($ap=$ao))&&$ap.element.key.equals($af)){
                        var $aq;
                        if(m$1.nn$(($aq=$ap.element.item))&&$aq.equals($ag)){
                            ($an.rest=$ap.rest);
                            hashMap$.$90($an);
                            ($ar=hashMap$.$8g,hashMap$.$8g=$ar.predecessor,$ar);
                            var $ar;
                            return true;
                        }else {
                            return false;
                        }
                    }else {
                        $al=$ao;
                    }
                }
                return false;
            };hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
            hashMap$.clear=function(){
                var hashMap$=this;
                var $as=(0);
                function set$as($at){return $as=$at;};
                while(($as<hashMap$.$8f.size)){
                    hashMap$.$8f.set(($au=$as,$as=$au.successor,$au),null);
                    var $au;
                }
                hashMap$.$8g=(0);
                hashMap$.$8h=null;
                hashMap$.$8i=null;
            };hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
            m$1.atr$(hashMap$,'size',function(){
                var hashMap$=this;
                return hashMap$.$8g;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
            hashMap$.$_get=function($av){
                var hashMap$=this;
                if(hashMap$.empty){
                    return null;
                }
                var $aw=hashMap$.$8s($av,hashMap$.$8f);
                var $ax=hashMap$.$8f.$_get($aw);
                function set$ax($ay){return $ax=$ay;};
                var $az;
                while(m$1.nn$(($az=$ax))){
                    if($az.element.key.equals($av)){
                        return $az.element.item;
                    }
                    $ax=$az.rest;
                }
                return null;
            };hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
            m$1.atr$(hashMap$,'first',function(){
                var hashMap$=this;
                if(hashMap$.$8c.equals(getLinked())){
                    return ($b0=hashMap$.$8h,m$1.nn$($b0)?$b0.element:null);
                    var $b0;
                }else {
                    return ($b1=hashMap$.$8f.$_get(0),m$1.nn$($b1)?$b1.element:null);
                    var $b1;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});hashMap$.iterator=function(){
                var hashMap$=this;
                return ($b2=(hashMap$.$8c.equals(getLinked())?LinkedCellIterator(hashMap$.$8h,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}):null),m$1.nn$($b2)?$b2:StoreIterator(hashMap$.$8f,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}));
            };hashMap$.count=function($b3){
                var hashMap$=this;
                var $b4=(0);
                function set$b4($b5){return $b4=$b5;};
                var $b6=(0);
                function set$b6($b7){return $b6=$b7;};
                while(($b4<hashMap$.$8f.size)){
                    var $b8=hashMap$.$8f.$_get($b4);
                    function set$b8($b9){return $b8=$b9;};
                    var $ba;
                    while(m$1.nn$(($ba=$b8))){
                        if($b3($ba.element)){
                            ($bb=$b6,$b6=$bb.successor,$bb);
                            var $bb;
                        }
                        $b8=$ba.rest;
                    }
                    ($bc=$b4,$b4=$bc.successor,$bc);
                    var $bc;
                }
                return $b6;
            };hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
            m$1.atr$(hashMap$,'hash',function(){
                var hashMap$=this;
                var $bd=(0);
                function set$bd($be){return $bd=$be;};
                $prop$get$bd={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashMap$.$prop$getHash,pa:1024,d:['ceylon.collection','HashMap','$at','hash','$at','index$ua0xrb']};}};
                $prop$get$bd.get=function(){return $bd};
                $prop$get$bd.set=set$bd;
                if(set$bd.$crtmm$===undefined)set$bd.$crtmm$=$prop$get$bd.$crtmm$;
                var $bf=(0);
                function set$bf($bg){return $bf=$bg;};
                $prop$get$bf={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashMap$.$prop$getHash,pa:1024,d:['ceylon.collection','HashMap','$at','hash','$at','hash$wnzjr7']};}};
                $prop$get$bf.get=function(){return $bf};
                $prop$get$bf.set=set$bf;
                if(set$bf.$crtmm$===undefined)set$bf.$crtmm$=$prop$get$bf.$crtmm$;
                while(($bd<hashMap$.$8f.size)){
                    var $bh=hashMap$.$8f.$_get($bd);
                    function set$bh($bi){return $bh=$bi;};
                    $prop$get$bh={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:hashMap$.$prop$getHash,pa:1027,d:['ceylon.collection','HashMap','$at','hash','$at','bucket$k6f2to']};}};
                    $prop$get$bh.get=function(){return $bh};
                    $prop$get$bh.set=set$bh;
                    if(set$bh.$crtmm$===undefined)set$bh.$crtmm$=$prop$get$bh.$crtmm$;
                    var $bj;
                    while(m$1.nn$(($bj=$bh))){
                        ($bf=$bf.plus($bj.element.hash));
                        $bh=$bj.rest;
                    }
                    ($bk=$bd,$bd=$bk.successor,$bk);
                    var $bk;
                }
                return $bf;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($bl){
                var hashMap$=this;
                var $bm;
                if(m$1.is$(($bm=$bl),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&((hashMap$.size).valueOf()==($bm.size).valueOf())){
                    var $bn=(0);
                    function set$bn($bo){return $bn=$bo;};
                    while(($bn<hashMap$.$8f.size)){
                        var $bp=hashMap$.$8f.$_get($bn);
                        function set$bp($bq){return $bp=$bq;};
                        var $br;
                        while(m$1.nn$(($br=$bp))){
                            var $bs=$bm.$_get($br.element.key);
                            var $bt;
                            if(m$1.nn$(($bt=$br.element.item))){
                                var $bu;
                                if(m$1.nn$(($bu=$bs))){
                                    if((!$bu.equals($bt))){
                                        return false;
                                    }
                                }else {
                                    return false;
                                }
                            }else {
                                if(m$1.nn$($bs)){
                                    return false;
                                }
                            }
                            $bp=$br.rest;
                        }
                        ($bv=$bn,$bn=$bv.successor,$bv);
                        var $bv;
                    }
                    return true;
                }
                return false;
            };hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
            hashMap$.clone=function(){
                var hashMap$=this;
                var $bw=HashMap(hashMap$.$8c,undefined,undefined,{Key$HashMap:hashMap$.$$targs$$.Key$HashMap,Item$HashMap:hashMap$.$$targs$$.Item$HashMap});
                if(hashMap$.$8c.equals(getUnlinked())){
                    ($bw.$8g=hashMap$.$8g);
                    ($bw.$8f=entryStore(hashMap$.$8f.size,{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap}));
                    var $bx=(0);
                    function set$bx($by){return $bx=$by;};
                    while(($bx<hashMap$.$8f.size)){
                        var $bz;
                        if(m$1.nn$(($bz=hashMap$.$8f.$_get($bx)))){
                            $bw.$8f.set($bx,$bz.clone());
                        }
                        ($c0=$bx,$bx=$c0.successor,$c0);
                        var $c0;
                    }
                }else {
                    var $c2;for(var $c1=hashMap$.iterator();($c2=$c1.next())!==m$1.getFinished();){
                        $bw.put($c2.key,$c2.item);
                    }
                }
                return $bw;
            };hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
            hashMap$.defines=function($c3){
                var hashMap$=this;
                if(hashMap$.empty){
                    return false;
                }else {
                    var $c4=hashMap$.$8s($c3,hashMap$.$8f);
                    var $c5=hashMap$.$8f.$_get($c4);
                    function set$c5($c6){return $c5=$c6;};
                    var $c7;
                    while(m$1.nn$(($c7=$c5))){
                        if($c7.element.key.equals($c3)){
                            return true;
                        }
                        $c5=$c7.rest;
                    }
                    return false;
                }
            };hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
            hashMap$.contains=function($c8){
                var hashMap$=this;
                if(hashMap$.empty){
                    return false;
                }else {
                    var $c9;
                    if(m$1.is$(($c9=$c8),{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_Object},Item$Entry:{t:m$1.Anything}}})){
                        var $ca=$c9.key;
                        var $cb=hashMap$.$8s($ca,hashMap$.$8f);
                        var $cc=hashMap$.$8f.$_get($cb);
                        function set$cc($cd){return $cc=$cd;};
                        var $ce;
                        while(m$1.nn$(($ce=$cc))){
                            if($ce.element.key.equals($ca)){
                                var $cf;
                                if(m$1.nn$(($cf=$ce.element.item))){
                                    var $cg;
                                    if(m$1.nn$(($cg=$c9.item))){
                                        return $cf.equals($cg);
                                    }else {
                                        return false;
                                    }
                                }else {
                                    return !m$1.nn$($c9.item);
                                }
                            }
                            $cc=$ce.rest;
                        }
                        return false;
                    }else {
                        return false;
                    }
                }
            };hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
        })(HashMap.$$.prototype);
    }
    return HashMap;
}
ex$.$init$HashMap=$init$HashMap;
$init$HashMap();
var $b2;
function LinkedList($ch,$$targs$$,linkedList$){
    $init$LinkedList();
    if(linkedList$===undefined)linkedList$=new LinkedList.$$;
    m$1.set_type_args(linkedList$,$$targs$$);
    if($ch===undefined){$ch=m$1.getEmpty();}
    linkedList$.$ch_=$ch;
    MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
    Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
    Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
    linkedList$.$prop$get$ch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},$cont:LinkedList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','LinkedList','$at','elements$59t65o']};}};
    linkedList$.$prop$get$ch.get=function(){return $ch};
    linkedList$.$ci_=null;
    linkedList$.$prop$get$ci={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};}};
    linkedList$.$prop$get$ci.get=function(){return $ci};
    linkedList$.$cj_=null;
    linkedList$.$prop$get$cj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};}};
    linkedList$.$prop$get$cj.get=function(){return $cj};
    linkedList$.$ck_=(0);
    linkedList$.$prop$get$ck={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};}};
    linkedList$.$prop$get$ck.get=function(){return $ck};
    var $cm;for(var $cl=linkedList$.$ch.iterator();($cm=$cl.next())!==m$1.getFinished();){
        linkedList$.$cn($cm);
    }
    return linkedList$;
}
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
    if(LinkedList.$$===undefined){
        m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
        (function(linkedList$){
            m$1.atr$(linkedList$,'$ch',function(){return this.$ch_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},$cont:LinkedList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','LinkedList','$at','elements$59t65o']};});
            m$1.atr$(linkedList$,'$ci',function(){return this.$ci_;},function($co){return this.$ci_=$co;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
            m$1.atr$(linkedList$,'$cj',function(){return this.$cj_;},function($cp){return this.$cj_=$cp;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
            m$1.atr$(linkedList$,'$ck',function(){return this.$ck_;},function($cq){return this.$ck_=$cq;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
            linkedList$.$cn=function($cr){
                var linkedList$=this;
                var $cs=Cell($cr,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
                var $ct;
                if(m$1.nn$(($ct=linkedList$.$cj))){
                    ($ct.rest=$cs);
                    (linkedList$.$cj=$cs);
                }else {
                    linkedList$.$cj=(linkedList$.$ci=$cs);
                }
                ($cu=linkedList$.$ck,linkedList$.$ck=$cu.successor,$cu);
                var $cu;
            };linkedList$.$cn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
            linkedList$.set=function($cv,$cw){
                var linkedList$=this;
                m$1.asrt$((($cx=$cv,$cx.compare((0))!==m$1.getSmaller()&&$cx.compare(linkedList$.$ck)===m$1.getSmaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at LinkedList.ceylon (48:15-48:31)",'46:8-48:32','LinkedList.ceylon');
                var $cy=linkedList$.$ci;
                function set$cy($cz){return $cy=$cz;};
                var $d0=(0);
                function set$d0($d1){return $d0=$d1;};
                var $d2;
                while(m$1.nn$(($d2=$cy))){
                    if(((($d3=$d0,$d0=$d3.successor,$d3)).valueOf()==($cv).valueOf())){
                        ($d2.element=$cw);
                        return;
                    }
                    var $d3;
                    $cy=$d2.rest;
                }
            };linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
            linkedList$.insert=function($d4,$d5){
                var linkedList$=this;
                m$1.asrt$((($d6=$d4,$d6.compare((0))!==m$1.getSmaller()&&$d6.compare(linkedList$.$ck)!==m$1.getLarger())),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (63:15-63:32)",'61:8-63:33','LinkedList.ceylon');
                if((($d4).valueOf()==(linkedList$.$ck).valueOf())){
                    linkedList$.add($d5);
                }else {
                    if((($d4).valueOf()==(0).valueOf())){
                        linkedList$.$ci=Cell($d5,linkedList$.$ci,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
                        ($d7=linkedList$.$ck,linkedList$.$ck=$d7.successor,$d7);
                        var $d7;
                    }else {
                        var $d8=linkedList$.$ci;
                        function set$d8($d9){return $d8=$d9;};
                        var $da=(0);
                        function set$da($db){return $da=$db;};
                        var $dc;
                        while(m$1.nn$(($dc=$d8))){
                            var $dd=$dc.rest;
                            if(((($da=$da.successor)).valueOf()==($d4).valueOf())){
                                ($dc.rest=Cell($d5,$dd,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
                                ($de=linkedList$.$ck,linkedList$.$ck=$de.successor,$de);
                                var $de;
                                return;
                            }
                            $d8=$dd;
                        }
                        m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (91:23-91:29)",'91:16-91:30','LinkedList.ceylon');
                    }
                }
            };linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
            linkedList$.add=function($df){
                var linkedList$=this;
                linkedList$.$cn($df);
            };linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
            linkedList$.addAll=function($dg){
                var linkedList$=this;
                var $di;for(var $dh=$dg.iterator();($di=$dh.next())!==m$1.getFinished();){
                    linkedList$.add($di);
                }
            };linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
            linkedList$.$_delete=function($dj){
                var linkedList$=this;
                if((($dj).valueOf()==(0).valueOf())){
                    var $dk;
                    if(m$1.nn$(($dk=linkedList$.$ci))){
                        var $dl;
                        if(m$1.nn$(($dl=$dk.rest))){
                            linkedList$.$ci=$dl;
                        }else {
                            linkedList$.$ci=(linkedList$.$cj=null);
                        }
                        ($dm=linkedList$.$ck,linkedList$.$ck=$dm.predecessor,$dm);
                        var $dm;
                        return $dk.element;
                    }else {
                        return null;
                    }
                }else {
                    if(($dn=$dj,$dn.compare((0))===m$1.getLarger()&&$dn.compare(linkedList$.$ck)===m$1.getSmaller())){
                        var $do=linkedList$.$ci;
                        function set$do($dp){return $do=$dp;};
                        var $dq=(0);
                        function set$dq($dr){return $dq=$dr;};
                        var $ds;
                        while(m$1.nn$(($ds=$do))){
                            var $dt=$ds.rest;
                            if(((($dq=$dq.successor)).valueOf()==($dj).valueOf())){
                                var $du;
                                if(m$1.nn$(($du=($dv=$dt,m$1.nn$($dv)?$dv.rest:null)))){
                                    ($ds.rest=$du);
                                }else {
                                    linkedList$.$cj=$ds;
                                    ($ds.rest=null);
                                }
                                var $dv;
                                ($dw=linkedList$.$ck,linkedList$.$ck=$dw.predecessor,$dw);
                                var $dw;
                                return ($dx=$dt,m$1.nn$($dx)?$dx.element:null);
                                var $dx;
                            }else {
                                $do=$dt;
                            }
                        }
                        m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (142:19-142:25)",'142:12-142:26','LinkedList.ceylon');
                    }else {
                        return null;
                    }
                }
            };linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
            linkedList$.remove=function($dy){
                var linkedList$=this;
                var $dz,$e0;
                while(m$1.nn$(($dz=linkedList$.$ci))&&m$1.nn$(($e0=$dz.element))&&$e0.equals($dy)){
                    var $e1;
                    if(m$1.nn$(($e1=$dz.rest))){
                        linkedList$.$ci=$e1;
                    }else {
                        linkedList$.$ci=(linkedList$.$cj=null);
                    }
                    ($e2=linkedList$.$ck,linkedList$.$ck=$e2.predecessor,$e2);
                    var $e2;
                }
                var $e3=linkedList$.$ci;
                function set$e3($e4){return $e3=$e4;};
                var $e5;
                while(m$1.nn$(($e5=$e3))){
                    var $e6=$e5.rest;
                    var $e7,$e8;
                    if(m$1.nn$(($e7=$e6))&&m$1.nn$(($e8=$e7.element))&&$e8.equals($dy)){
                        var $e9;
                        if(m$1.nn$(($e9=$e7.rest))){
                            ($e5.rest=$e9);
                        }else {
                            ($e5.rest=(linkedList$.$cj=null));
                        }
                        ($ea=linkedList$.$ck,linkedList$.$ck=$ea.predecessor,$ea);
                        var $ea;
                    }else {
                        $e3=$e6;
                    }
                }
            };linkedList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','remove']};};
            linkedList$.removeAll=function($eb){
                var linkedList$=this;
                var $ec,$ed;
                while(m$1.nn$(($ec=linkedList$.$ci))&&m$1.nn$(($ed=$ec.element))&&$eb.contains($ed)){
                    var $ee;
                    if(m$1.nn$(($ee=$ec.rest))){
                        linkedList$.$ci=$ee;
                    }else {
                        linkedList$.$ci=(linkedList$.$cj=null);
                    }
                    ($ef=linkedList$.$ck,linkedList$.$ck=$ef.predecessor,$ef);
                    var $ef;
                }
                var $eg=linkedList$.$ci;
                function set$eg($eh){return $eg=$eh;};
                var $ei;
                while(m$1.nn$(($ei=$eg))){
                    var $ej=$ei.rest;
                    var $ek,$el;
                    if(m$1.nn$(($ek=$ej))&&m$1.nn$(($el=$ek.element))&&$eb.contains($el)){
                        var $em;
                        if(m$1.nn$(($em=$ek.rest))){
                            ($ei.rest=$em);
                        }else {
                            ($ei.rest=(linkedList$.$cj=null));
                        }
                        ($en=linkedList$.$ck,linkedList$.$ck=$en.predecessor,$en);
                        var $en;
                    }else {
                        $eg=$ej;
                    }
                }
            };linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
            linkedList$.removeFirst=function($eo){
                var linkedList$=this;
                var $ep,$eq;
                if(m$1.nn$(($ep=linkedList$.$ci))&&m$1.nn$(($eq=$ep.element))&&$eq.equals($eo)){
                    var $er;
                    if(m$1.nn$(($er=$ep.rest))){
                        linkedList$.$ci=$er;
                    }else {
                        linkedList$.$ci=(linkedList$.$cj=null);
                    }
                    ($es=linkedList$.$ck,linkedList$.$ck=$es.predecessor,$es);
                    var $es;
                    return true;
                }
                var $et=linkedList$.$ci;
                function set$et($eu){return $et=$eu;};
                var $ev;
                while(m$1.nn$(($ev=$et))){
                    var $ew=$ev.rest;
                    var $ex,$ey;
                    if(m$1.nn$(($ex=$ew))&&m$1.nn$(($ey=$ex.element))&&$ey.equals($eo)){
                        var $ez;
                        if(m$1.nn$(($ez=$ex.rest))){
                            ($ev.rest=$ez);
                        }else {
                            ($ev.rest=(linkedList$.$cj=null));
                        }
                        ($f0=linkedList$.$ck,linkedList$.$ck=$f0.predecessor,$f0);
                        var $f0;
                        return true;
                    }
                    $et=$ew;
                }
                return false;
            };linkedList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeFirst']};};
            linkedList$.removeLast=function($f1){
                var linkedList$=this;
                var $f2=null;
                function set$f2($f3){return $f2=$f3;};
                var $f4,$f5;
                while(m$1.nn$(($f4=linkedList$.$ci))&&m$1.nn$(($f5=$f4.element))&&$f5.equals($f1)){
                    var $f6;
                    if(m$1.nn$(($f6=$f4.rest))){
                        $f2=$f4;
                    }else {
                        linkedList$.$ci=(linkedList$.$cj=null);
                        ($f7=linkedList$.$ck,linkedList$.$ck=$f7.predecessor,$f7);
                        var $f7;
                        return true;
                    }
                }
                var $f8=linkedList$.$ci;
                function set$f8($f9){return $f8=$f9;};
                var $fa;
                while(m$1.nn$(($fa=$f8))){
                    var $fb=$fa.rest;
                    var $fc,$fd;
                    if(m$1.nn$(($fc=$fb))&&m$1.nn$(($fd=$fc.element))&&$fd.equals($f1)){
                        var $fe;
                        if(m$1.nn$(($fe=$fc.rest))){
                            $f2=$fa;
                        }else {
                            ($fa.rest=(linkedList$.$cj=null));
                            ($ff=linkedList$.$ck,linkedList$.$ck=$ff.predecessor,$ff);
                            var $ff;
                            return true;
                        }
                    }else {
                        $f8=$fb;
                    }
                }
                var $fg;
                if(m$1.nn$(($fg=$f2))){
                    var $fh;
                    m$1.asrt$((m$1.nn$(($fh=linkedList$.$ci))),"Assertion failed: \'exists cell=head\' at LinkedList.ceylon (280:19-280:36)",'280:12-280:37','LinkedList.ceylon');
                    if(($fg===$fh)){
                        linkedList$.$ci=$fg.rest;
                    }else {
                        var $fi;
                        m$1.asrt$((m$1.nn$(($fi=($fj=$fg.rest,m$1.nn$($fj)?$fj.rest:null)))),"Assertion failed: \'exists more = last.rest?.rest\' at LinkedList.ceylon (285:23-285:53)",'285:16-285:54','LinkedList.ceylon');
                        var $fj;
                        ($fh.rest=$fi);
                    }
                    ($fk=linkedList$.$ck,linkedList$.$ck=$fk.predecessor,$fk);
                    var $fk;
                    return true;
                }else {
                    return false;
                }
            };linkedList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeLast']};};
            linkedList$.prune=function(){
                var linkedList$=this;
                var $fl;
                while(m$1.nn$(($fl=linkedList$.$ci))&&!m$1.nn$($fl.element)){
                    var $fm;
                    if(m$1.nn$(($fm=$fl.rest))){
                        linkedList$.$ci=$fm;
                    }else {
                        linkedList$.$ci=(linkedList$.$cj=null);
                    }
                    ($fn=linkedList$.$ck,linkedList$.$ck=$fn.predecessor,$fn);
                    var $fn;
                }
                var $fo=linkedList$.$ci;
                function set$fo($fp){return $fo=$fp;};
                var $fq;
                while(m$1.nn$(($fq=$fo))){
                    var $fr=$fq.rest;
                    var $fs;
                    if(m$1.nn$(($fs=$fr))&&!m$1.nn$($fs.element)){
                        var $ft;
                        if(m$1.nn$(($ft=$fs.rest))){
                            ($fq.rest=$ft);
                        }else {
                            ($fq.rest=(linkedList$.$cj=null));
                        }
                        ($fu=linkedList$.$ck,linkedList$.$ck=$fu.predecessor,$fu);
                        var $fu;
                    }else {
                        $fo=$fr;
                    }
                }
            };linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
            linkedList$.$_replace=function($fv,$fw){
                var linkedList$=this;
                var $fx=linkedList$.$ci;
                function set$fx($fy){return $fx=$fy;};
                var $fz;
                while(m$1.nn$(($fz=$fx))){
                    var $g0;
                    if(m$1.nn$(($g0=$fz.element))&&$g0.equals($fv)){
                        ($fz.element=$fw);
                    }
                    $fx=$fz.rest;
                }
            };linkedList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replace']};};
            linkedList$.replaceFirst=function($g1,$g2){
                var linkedList$=this;
                var $g3=linkedList$.$ci;
                function set$g3($g4){return $g3=$g4;};
                var $g5;
                while(m$1.nn$(($g5=$g3))){
                    var $g6;
                    if(m$1.nn$(($g6=$g5.element))&&$g6.equals($g1)){
                        ($g5.element=$g2);
                        return true;
                    }
                    $g3=$g5.rest;
                }
                return false;
            };linkedList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceFirst']};};
            linkedList$.replaceLast=function($g7,$g8){
                var linkedList$=this;
                var $g9=null;
                function set$g9($ga){return $g9=$ga;};
                var $gb=linkedList$.$ci;
                function set$gb($gc){return $gb=$gc;};
                var $gd;
                while(m$1.nn$(($gd=$gb))){
                    var $ge;
                    if(m$1.nn$(($ge=$gd.element))&&$ge.equals($g7)){
                        $g9=$gd;
                    }
                    $gb=$gd.rest;
                }
                var $gf;
                if(m$1.nn$(($gf=$g9))){
                    ($gf.element=$g8);
                    return true;
                }else {
                    return false;
                }
            };linkedList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceLast']};};
            linkedList$.infill=function($gg){
                var linkedList$=this;
                var $gh=linkedList$.$ci;
                function set$gh($gi){return $gh=$gi;};
                var $gj;
                while(m$1.nn$(($gj=$gh))){
                    if(!m$1.nn$($gj.element)){
                        ($gj.element=$gg);
                    }
                    $gh=$gj.rest;
                }
            };linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
            linkedList$.clear=function(){
                var linkedList$=this;
                linkedList$.$ck=(0);
                linkedList$.$ci=(linkedList$.$cj=null);
            };linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
            linkedList$.getFromFirst=function($gk){
                var linkedList$=this;
                var $gl=linkedList$.$ci;
                function set$gl($gm){return $gl=$gm;};
                var $gn=(0);
                function set$gn($go){return $gn=$go;};
                var $gp;
                while(m$1.nn$(($gp=$gl))){
                    if(((($gq=$gn,$gn=$gq.successor,$gq)).valueOf()==($gk).valueOf())){
                        return $gp.element;
                    }
                    var $gq;
                    $gl=$gp.rest;
                }
                return null;
            };linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
            linkedList$.spanFrom=function($gr){
                var linkedList$=this;
                var $gs=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                var $gt=linkedList$.$ci;
                function set$gt($gu){return $gt=$gu;};
                var $gv=(0);
                function set$gv($gw){return $gv=$gw;};
                var $gx;
                while(m$1.nn$(($gx=$gt))){
                    if(($gv>=$gr)){
                        $gs.add($gx.element);
                    }
                    ($gy=$gv,$gv=$gy.successor,$gy);
                    var $gy;
                    $gt=$gx.rest;
                }
                return $gs;
            };linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
            linkedList$.spanTo=function($gz){
                var linkedList$=this;
                var $h0=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                var $h1=linkedList$.$ci;
                function set$h1($h2){return $h1=$h2;};
                var $h3=(0);
                function set$h3($h4){return $h3=$h4;};
                var $h5;
                while(m$1.nn$(($h5=$h1))){
                    if(($h3>$gz)){
                        break;
                    }
                    $h0.add($h5.element);
                    ($h6=$h3,$h3=$h6.successor,$h6);
                    var $h6;
                    $h1=$h5.rest;
                }
                return $h0;
            };linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
            linkedList$.span=function($h7,$h8){
                var linkedList$=this;
                var $h9=spanToMeasure($h7,$h8,linkedList$.$ck);
                var $ha=$h9.$_get(0);
                var $hb=$h9.$_get(1);
                var $hc=$h9.$_get(2);
                var $hd=LinkedList(linkedList$.skip($ha).take($hb),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                return ($he=($hc?$hd.reversed:null),m$1.nn$($he)?$he:$hd);
                var $he;
            };linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
            linkedList$.deleteSpan=function($hf,$hg){
                var linkedList$=this;
                var $hh=spanToMeasure($hf,$hg,linkedList$.$ck);
                var $hi=$hh.$_get(0);
                var $hj=$hh.$_get(1);
                if((($hi<linkedList$.$ck)&&($hj>0))){
                    var $hk=($hi>0);
                    var $hl=linkedList$.$hm($hi.minus(1),linkedList$.$ci);
                    var $hn=$hj.plus(($ho=($hk?1:null),m$1.nn$($ho)?$ho:(0)));
                    var $ho;
                    var $hp=linkedList$.$hm($hn,($hq=$hl,m$1.nn$($hq)?$hq:linkedList$.$ci));
                    var $hq;
                    if(!$hk){
                        linkedList$.$ci=($hr=$hl,m$1.nn$($hr)?$hr:$hp);
                        var $hr;
                    }
                    var $hs;
                    if(m$1.nn$(($hs=$hl))){
                        ($hs.rest=$hp);
                    }
                    if(($hj>=linkedList$.$ck)){
                        linkedList$.$cj=null;
                    }
                    (linkedList$.$ck=linkedList$.$ck.minus($hj));
                }
            };linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
            linkedList$.$hm=function($ht,$hu){
                var linkedList$=this;
                if(($ht<0)){
                    return null;
                }
                var $hv=$hu;
                function set$hv($hw){return $hv=$hw;};
                var $hx;
                if(m$1.nn$(($hx=$hu))&&($ht>0)){
                    var $hz=(1),$hy=$ht,$i0=$hz.compare($hy),$i1=$i0===m$1.getSmaller()?'successor':'predecessor';for(var $i2=m$1.eorl$($i0);$i2($hy,$hz);$hz=$hz[$i1]){
                        $hv=($i3=$hv,m$1.nn$($i3)?$i3.rest:null);
                        var $i3;
                    }
                }
                return $hv;
            };linkedList$.$hm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
            linkedList$.measure=function($i4,$i5){
                var linkedList$=this;
                return linkedList$.span(($i6=measureToSpan($i4,$i5).sequence(),$i6.$_get(0)),$i6.$_get(1));
            };linkedList$.deleteMeasure=function($i7,$i8){
                var linkedList$=this;
                return linkedList$.deleteSpan(($i9=measureToSpan($i7,$i8).sequence(),$i9.$_get(0)),$i9.$_get(1));
            };linkedList$.defines=function($ia){
                var linkedList$=this;
                return (($ia>=0)&&($ia<linkedList$.$ck));
            };linkedList$.contains=function($ib){
                var linkedList$=this;
                var $ic=linkedList$.$ci;
                function set$ic($id){return $ic=$id;};
                var $ie;
                while(m$1.nn$(($ie=$ic))){
                    var $if;
                    if(m$1.nn$(($if=$ie.element))){
                        if($if.equals($ib)){
                            return true;
                        }
                    }
                    $ic=$ie.rest;
                }
                return false;
            };linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
            m$1.atr$(linkedList$,'size',function(){
                var linkedList$=this;
                return linkedList$.$ck;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
            linkedList$.count=function($ig){
                var linkedList$=this;
                var $ih=linkedList$.$ci;
                function set$ih($ii){return $ih=$ii;};
                var $ij=(0);
                function set$ij($ik){return $ij=$ik;};
                var $il;
                while(m$1.nn$(($il=$ih))){
                    if($ig($il.element)){
                        ($im=$ij,$ij=$im.successor,$im);
                        var $im;
                    }
                    $ih=$il.rest;
                }
                return $ij;
            };linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
            m$1.atr$(linkedList$,'lastIndex',function(){
                var linkedList$=this;
                return (!linkedList$.empty?linkedList$.$ck.minus(1):null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
            linkedList$.iterator=function(){
                var linkedList$=this;
                return CellIterator(linkedList$.$ci,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});
            };linkedList$.clone=function(){
                var linkedList$=this;
                var $in=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                ($in.$ci=($io=linkedList$.$ci,m$1.JsCallable($io,m$1.nn$($io)?$io.clone:null))());
                var $io;
                ($in.$cj=($ip=linkedList$.$cj,m$1.JsCallable($ip,m$1.nn$($ip)?$ip.clone:null))());
                var $ip;
                ($in.$ck=linkedList$.size);
                return $in;
            };linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
            m$1.atr$(linkedList$,'hash',function(){
                var linkedList$=this;
                var $iq=(17);
                function set$iq($ir){return $iq=$ir;};
                $prop$get$iq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:linkedList$.$prop$getHash,pa:1027,d:['ceylon.collection','LinkedList','$at','hash','$at','hash$ywj17o']};}};
                $prop$get$iq.get=function(){return $iq};
                $prop$get$iq.set=set$iq;
                if(set$iq.$crtmm$===undefined)set$iq.$crtmm$=$prop$get$iq.$crtmm$;
                var $is=linkedList$.$ci;
                function set$is($it){return $is=$it;};
                $prop$get$is={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:linkedList$.$prop$getHash,pa:1027,d:['ceylon.collection','LinkedList','$at','hash','$at','iter$z1rk4i']};}};
                $prop$get$is.get=function(){return $is};
                $prop$get$is.set=set$is;
                if(set$is.$crtmm$===undefined)set$is.$crtmm$=$prop$get$is.$crtmm$;
                var $iu;
                while(m$1.nn$(($iu=$is))){
                    var $iv;
                    if(m$1.nn$(($iv=$iu.element))){
                        $iq=$iq.times(31).plus($iv.hash);
                    }else {
                        $iq=$iq.times(31);
                    }
                    $is=$iu.rest;
                }
                return $iq;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($iw){
                var linkedList$=this;
                var $ix;
                if(m$1.is$(($ix=$iw),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&((linkedList$.$ck).valueOf()==($ix.size).valueOf())){
                    var $iy=linkedList$.$ci;
                    function set$iy($iz){return $iy=$iz;};
                    var $j0=$ix.iterator();
                    function set$j0($j1){return $j0=$j1;};
                    var $j2;
                    while(m$1.nn$(($j2=$iy))){
                        var $j3;
                        if(!m$1.is$(($j3=$j0.next()),{t:m$1.Finished})){
                            var $j4=$j2.element;
                            var $j5;
                            if(m$1.nn$(($j5=$j3))){
                                var $j6;
                                if(m$1.nn$(($j6=$j4))&&$j6.equals($j5)){
                                    $iy=$j2.rest;
                                }else {
                                    return false;
                                }
                            }else {
                                var $j7;
                                if(m$1.nn$(($j7=$j4))){
                                    return false;
                                }else {
                                    $iy=$j2.rest;
                                }
                            }
                        }else {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            };linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
            linkedList$.truncate=function($j8){
                var linkedList$=this;
                m$1.asrt$((($j8>=0)),"Assertion failed: \'size>=0\' at LinkedList.ceylon (595:15-595:23)",'595:8-595:24','LinkedList.ceylon');
                if((($j8).valueOf()==(0).valueOf())){
                    linkedList$.$ci=(linkedList$.$cj=null);
                    linkedList$.$ck=(0);
                }else {
                    var $j9=(0);
                    function set$j9($ja){return $j9=$ja;};
                    var $jb=linkedList$.$ci;
                    function set$jb($jc){return $jb=$jc;};
                    var $jd;
                    while((($j9=$j9.successor)<$j8)&&m$1.nn$(($jd=$jb))){
                        $jb=$jd.rest;
                    }
                    var $je;
                    if(m$1.nn$(($je=$jb))){
                        ($je.rest=null);
                        linkedList$.$cj=$je;
                        linkedList$.$ck=$j8;
                    }
                }
            };linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
            linkedList$.firstIndexWhere=function($jf){
                var linkedList$=this;
                var $jg=(0);
                function set$jg($jh){return $jg=$jh;};
                var $jj;for(var $ji=linkedList$.iterator();($jj=$ji.next())!==m$1.getFinished();){
                    var $jk;
                    if(m$1.nn$(($jk=$jj))&&$jf($jk)){
                        return $jg;
                    }
                    ($jl=$jg,$jg=$jl.successor,$jl);
                    var $jl;
                }
                return null;
            };linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
            linkedList$.lastIndexWhere=function($jm){
                var linkedList$=this;
                var $jn=(0);
                function set$jn($jo){return $jn=$jo;};
                var $jp=null;
                function set$jp($jq){return $jp=$jq;};
                var $js;for(var $jr=linkedList$.iterator();($js=$jr.next())!==m$1.getFinished();){
                    var $jt;
                    if(m$1.nn$(($jt=$js))&&$jm($jt)){
                        $jp=$jn;
                    }
                    ($ju=$jn,$jn=$ju.successor,$ju);
                    var $ju;
                }
                return $jp;
            };linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy.")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
            linkedList$.collect=function($jv,$$$mptypes){
                var linkedList$=this;
                return m$1.tpl$([],undefined,m$1.for$(function(){
                    var $jw=linkedList$.iterator(),$jx=m$1.getFinished();
                    var n$jx=function(){return $jx=$jw.next();}
                    n$jx();
                    return function(){
                        if($jx!==m$1.getFinished()){
                            var $jy=$jx;
                            var $jz=$jv($jy);
                            n$jx();
                            return $jz;
                        }
                        return m$1.getFinished();
                    }
                },{Absent$Iterable:{t:m$1.Null},Element$Iterable:$$$mptypes.Result$collect}));
            };
            linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Result$collect'}},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:'Result$collect',an:function(){return[m$1.doc("The transformation applied to the elements.")];}}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
            m$1.atr$(linkedList$,'first',function(){
                var linkedList$=this;
                return ($k0=linkedList$.$ci,m$1.nn$($k0)?$k0.element:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
            m$1.atr$(linkedList$,'last',function(){
                var linkedList$=this;
                return ($k1=linkedList$.$cj,m$1.nn$($k1)?$k1.element:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
            linkedList$.$_push=function($k2){
                var linkedList$=this;
                return linkedList$.insert(0,$k2);
            };linkedList$.$_pop=function(){
                var linkedList$=this;
                return linkedList$.deleteFirst();
            };m$1.atr$(linkedList$,'top',function(){
                var linkedList$=this;
                return linkedList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
            linkedList$.offer=function($k3){
                var linkedList$=this;
                return linkedList$.add($k3);
            };linkedList$.accept=function(){
                var linkedList$=this;
                return linkedList$.deleteFirst();
            };m$1.atr$(linkedList$,'back',function(){
                var linkedList$=this;
                return linkedList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
            m$1.atr$(linkedList$,'front',function(){
                var linkedList$=this;
                return linkedList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
            linkedList$.sequence=function(){
                var linkedList$=this;
                return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();
            };
            linkedList$.sequence.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','sequence']};};
        })(LinkedList.$$.prototype);
    }
    return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
var $k0,$k1;
function invert($k4,$$$mptypes){
    var $k5=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$$$mptypes.Key$invert}}});
    var $k7;for(var $k6=$k4.iterator();($k7=$k6.next())!==m$1.getFinished();){
        var $k8=$k7.key,$k9=$k7.item;
        var $ka;
        if(m$1.nn$(($ka=$k5.$_get($k9)))){
            $ka.add($k8);
        }else {
            var $kb=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Key$invert});
            $kb.add($k8);
            $k5.put($k9,$kb);
        }
    }
    function $kc($kd,$ke){
        var $kf;
        m$1.asrt$((m$1.is$(($kf=$ke.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Key$invert}})),"Assertion failed: \'is [Key+] result = sa.sequence()\' at invert.ceylon (21:14-21:47)",'21:8-21:48','invert.ceylon');
        return $kf;
    };$kc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}},ps:[{nm:'item',mt:'prm',$t:'Item$invert'},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Key$invert'}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
    return $k5.mapItems(m$1.JsCallable(0,$kc),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Key$invert}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function UnmodifiableSet($kg,$$targs$$,unmodifiableSet$){
    $init$UnmodifiableSet();
    if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
    m$1.set_type_args(unmodifiableSet$,$$targs$$);
    unmodifiableSet$.$kg_=$kg;
    m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
    return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
function $init$UnmodifiableSet(){
    if(UnmodifiableSet.$$===undefined){
        m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
        (function(unmodifiableSet$){
            unmodifiableSet$.iterator=function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.iterator();
            };m$1.atr$(unmodifiableSet$,'size',function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
            unmodifiableSet$.contains=function($kh){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.contains($kh);
            };unmodifiableSet$.complement=function($ki,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.complement($ki,{Other$complement:$$$mptypes.Other$complement});
            };
            unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
            unmodifiableSet$.exclusiveUnion=function($kj,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.exclusiveUnion($kj,{Other$exclusiveUnion:$$$mptypes.Other$exclusiveUnion});
            };
            unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
            unmodifiableSet$.intersection=function($kk,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.intersection($kk,{Other$intersection:$$$mptypes.Other$intersection});
            };
            unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
            unmodifiableSet$.union=function($kl,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.union($kl,{Other$union:$$$mptypes.Other$union});
            };
            unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
            unmodifiableSet$.superset=function($km){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.superset($km);
            };unmodifiableSet$.subset=function($kn){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.subset($kn);
            };unmodifiableSet$.equals=function($ko){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.equals($ko);
            };m$1.atr$(unmodifiableSet$,'hash',function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$kg.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
            unmodifiableSet$.clone=function(){
                var unmodifiableSet$=this;
                return UnmodifiableSet(unmodifiableSet$.$kg.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
            };m$1.atr$(unmodifiableSet$,'$kg',function(){return this.$kg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
        })(UnmodifiableSet.$$.prototype);
    }
    return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;
$init$UnmodifiableSet();
function unmodifiableSet($kp,$$$mptypes){
    return UnmodifiableSet($kp,{Element$UnmodifiableSet:$$$mptypes.Element$unmodifiableSet});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
function SortedSet($$targs$$,sortedSet$){
    m$1.Set({Element$Set:$$targs$$.Element$SortedSet},sortedSet$);
    m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Element$Ranged:$$targs$$.Element$SortedSet,Index$Ranged:$$targs$$.Element$SortedSet},sortedSet$);
    m$1.set_type_args(sortedSet$,$$targs$$,SortedSet);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Element$Ranged:'Element$SortedSet',Index$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
    if(SortedSet.$$===undefined){
        m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
        (function(sortedSet$){
            sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};
        })(SortedSet.$$.prototype);
    }
    return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;
$init$SortedSet();
function group($kq,$kr,$$$mptypes){
    var $ks=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$$$mptypes.Element$group}}});
    var $ku;for(var $kt=$kq.iterator();($ku=$kt.next())!==m$1.getFinished();){
        var $kv=$kr($ku);
        var $kw;
        if(m$1.nn$(($kw=$ks.$_get($kv)))){
            $kw.add($ku);
        }else {
            var $kx=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$group});
            $kx.add($ku);
            $ks.put($kv,$kx);
        }
    }
    function $ky($kz,$l0){
        var $l1;
        m$1.asrt$((m$1.is$(($l1=$l0.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Element$group}})),"Assertion failed: \'is [Element+] result = list.sequence()\' at group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
        return $l1;
    };$ky.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}},ps:[{nm:'group',mt:'prm',$t:'Group$group'},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$group'}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
    return $ks.mapItems(m$1.JsCallable(0,$ky),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Element$group}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$group'}}},{nm:'grouping',mt:'prm',$pt:'f',$t:'Group$group',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group:$m:grouping$h95l9c')];}}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
ex$.$mod$ans$=function(){return[m$1.doc("Library providing general-purpose mutable lists, sets, and \nmaps.\n\nThe following interfaces define abstract mutable collection \ntypes:\n\n- [[MutableList]] is a mutable [[List]],\n- [[MutableSet]] is a mutable [[Set]], and\n- [[MutableMap]] is a mutable [[Map]].\n\nThese interfaces define abstract sorted collection types:\n\n- [[SortedSet]] is a sorted [[Set]], and\n- [[SortedMap]] is a sorted [[Map]].\n\nIn addition, dedicated [[Stack]] and [[Queue]] interfaces \nare defined, representing specialized kinds of lists.\n\nThese concrete implementations are provided:\n\n- [[ArrayList]] is a `MutableList` implemented using an\n  [[Array]].\n- [[LinkedList]] is a `MutableList` implemented using a\n  singly-linked list.\n- [[PriorityQueue]] is a `Queue` implemented using an\n  [[Array]] where the front of the queue is the smallest element\n- [[HashSet]] is a mutable hash set implemented using an \n  [[Array]] of singly-linked lists.\n- [[HashMap]] is a mutable hash map implemented using an \n  [[Array]] of singly-linked lists of [[Entry]]s.\n- [[TreeSet]] is a mutable `SortedSet` implemented using a \n  red/black binary tree.\n- [[TreeMap]] is a mutable `SortedMap` implemented using a \n  red/black binary tree.\n\nThe functions [[unmodifiableList]], [[unmodifiableSet]],\nand [[unmodifiableMap]] may be used to hide these mutable \nlist, set, and map implementations from clients.\n\n[[SingletonMap]] and [[SingletonSet]] are immutable \ncollections with exactly one element.\n\nFinally, [[IdentitySet]] and [[IdentityMap]] are mutable\ncollections based on [[identity|Identifiable]] instead of \nvalue equality."),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String})),m$1.license("Apache Software License")];};
function MutableMap($$targs$$,mutableMap$){
    m$1.Map({Key$Map:$$targs$$.Key$MutableMap,Item$Map:$$targs$$.Item$MutableMap},mutableMap$);
    MapMutator({Item$MapMutator:$$targs$$.Item$MutableMap,Key$MapMutator:$$targs$$.Key$MutableMap},mutableMap$);
    m$1.set_type_args(mutableMap$,$$targs$$,MutableMap);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}]},Item$MutableMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Item$MapMutator:'Item$MutableMap',Key$MapMutator:'Key$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)].rt$({t:m$1.ClassDeclaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
    if(MutableMap.$$===undefined){
        m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',$init$MapMutator(),m$1.Map);
        (function(mutableMap$){
            mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};
        })(MutableMap.$$.prototype);
    }
    return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
    m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}},mapMutator$);
    m$1.set_type_args(mapMutator$,$$targs$$,MapMutator);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}]},Item$MapMutator:{dv:'in'}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
    if(MapMutator.$$===undefined){
        m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.Map);
        (function(mapMutator$){
            mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($l2){
                var mapMutator$=this;
                var $l4;for(var $l3=$l2.iterator();($l4=$l3.next())!==m$1.getFinished();){
                    var $l5=$l4.key,$l6=$l4.item;
                    mapMutator$.put($l5,$l6);
                }
            };mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$MapMutator',Item$Entry:'Item$MapMutator'}}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
            mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($l7,$l8){
                var mapMutator$=this;
                var $l9;
                if(m$1.nn$(($l9=mapMutator$.$_get($l7)))&&$l9.equals($l8)){
                    mapMutator$.remove($l7);
                    return true;
                }else {
                    return false;
                }
            };mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The item currently associated with the given [[key]]")];}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
            mapMutator$.replaceEntry=function($la,$lb,$lc){
                var mapMutator$=this;
                var $ld;
                if(m$1.nn$(($ld=mapMutator$.$_get($la)))&&$ld.equals($lb)){
                    mapMutator$.put($la,$lb);
                    return true;
                }else {
                    return false;
                }
            };mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The item currently associated with the given [[key]]")];}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator',an:function(){return[m$1.doc("The new item to associate with the given [[key]]")];}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
            mapMutator$.removeAll=function($le){
                var mapMutator$=this;
                var $lg;for(var $lf=$le.iterator();($lg=$lf.next())!==m$1.getFinished();){
                    mapMutator$.remove($lg);
                }
            };mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$MapMutator'}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
            mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};
        })(MapMutator.$$.prototype);
    }
    return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;
$init$MapMutator();
function SingletonSet(element,$$targs$$,singletonSet$){
    $init$SingletonSet();
    if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
    m$1.set_type_args(singletonSet$,$$targs$$);
    singletonSet$.element_=element;
    m$1.Set({Element$Set:$$targs$$.Element$SingletonSet},singletonSet$);
    return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Singleton)].rt$({t:m$1.ClassDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
ex$.SingletonSet=SingletonSet;
function $init$SingletonSet(){
    if(SingletonSet.$$===undefined){
        m$1.initTypeProto(SingletonSet,'ceylon.collection::SingletonSet',m$1.Basic,m$1.Set);
        (function(singletonSet$){
            singletonSet$.clone=function(){
                var singletonSet$=this;
                return singletonSet$;
            };singletonSet$.contains=function($lh){
                var singletonSet$=this;
                return singletonSet$.element.equals($lh);
            };singletonSet$.complement=function($li,$$$mptypes){
                var singletonSet$=this;
                return ($lj=($li.contains(singletonSet$.element)?m$1.getEmptySet():null),m$1.nn$($lj)?$lj:singletonSet$);
            };
            singletonSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:SingletonSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','complement']};};
            singletonSet$.intersection=function($lk,$$$mptypes){
                var singletonSet$=this;
                var $ll;
                if(m$1.is$(($ll=singletonSet$.element),$$$mptypes.Other$intersection)&&$lk.contains($ll)){
                    return SingletonSet($ll,{Element$SingletonSet:{t:'i',l:[singletonSet$.$$targs$$.Element$SingletonSet,$$$mptypes.Other$intersection]}});
                }else {
                    return m$1.getEmptySet();
                }
            };singletonSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$SingletonSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:SingletonSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','intersection']};};
            singletonSet$.union=function($lm,$$$mptypes){
                var singletonSet$=this;
                var $ln=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[singletonSet$.$$targs$$.Element$SingletonSet,$$$mptypes.Other$union]}});
                $ln.addAll($lm);
                $ln.add(singletonSet$.element);
                return UnmodifiableSet($ln,{Element$UnmodifiableSet:{t:'u',l:[singletonSet$.$$targs$$.Element$SingletonSet,$$$mptypes.Other$union]}});
            };singletonSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:SingletonSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','union']};};
            singletonSet$.exclusiveUnion=function($lo,$$$mptypes){
                var singletonSet$=this;
                var $lp=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[singletonSet$.$$targs$$.Element$SingletonSet,$$$mptypes.Other$exclusiveUnion]}});
                $lp.addAll($lo);
                if($lo.contains(singletonSet$.element)){
                    $lp.remove(singletonSet$.element);
                }else {
                    $lp.add(singletonSet$.element);
                }
                return UnmodifiableSet($lp,{Element$UnmodifiableSet:{t:'u',l:[singletonSet$.$$targs$$.Element$SingletonSet,$$$mptypes.Other$exclusiveUnion]}});
            };singletonSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:SingletonSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','exclusiveUnion']};};
            singletonSet$.iterator=function(){
                var singletonSet$=this;
                return m$1.Singleton(singletonSet$.element,{Element$Singleton:singletonSet$.$$targs$$.Element$SingletonSet}).iterator();
            };singletonSet$.equals=function($lq){
                var singletonSet$=this;
                return singletonSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(this,$lq);
            };m$1.atr$(singletonSet$,'hash',function(){
                var singletonSet$=this;
                return m$1.attrGetter(singletonSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$at','hash']};});
            m$1.atr$(singletonSet$,'element',function(){return this.element_;},undefined,function(){return{mod:$CCMM$,$t:'Element$SingletonSet',$cont:SingletonSet,pa:1,d:['ceylon.collection','SingletonSet','$at','element']};});
        })(SingletonSet.$$.prototype);
    }
    return SingletonSet;
}
ex$.$init$SingletonSet=$init$SingletonSet;
$init$SingletonSet();
var $lj;
function Stability(stability$){
    $init$Stability();
    if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.collection::Stability"),'?','?')
    return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
    if(Stability.$$===undefined){
        m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
    }
    return Stability;
}
ex$.$init$Stability=$init$Stability;
$init$Stability();
function $lr(){
    var unlinked$=new $lr.$$;Stability(unlinked$);
    return unlinked$;
};$lr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},pa:1,d:['ceylon.collection','unlinked']};};
function $init$getUnlinked(){
    if($lr.$$===undefined){
        m$1.initTypeProto($lr,'ceylon.collection::unlinked',$init$Stability());
    }
    return $lr;
}
ex$.$init$getUnlinked=$init$getUnlinked;
$init$getUnlinked();
var $ls;
function getUnlinked(){
    if($ls===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
    if($ls===undefined){$ls=m$1.INIT$;$ls=$init$getUnlinked()();$ls.$crtmm$=getUnlinked.$crtmm$;}
    return $ls;
}
ex$.getUnlinked=getUnlinked;
getUnlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$lr},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked={get:getUnlinked,$crtmm$:getUnlinked.$crtmm$};
getUnlinked=getUnlinked;$prop$getUnlinked=getUnlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $lt(){
    var linked$=new $lt.$$;Stability(linked$);
    return linked$;
};$lt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},pa:1,d:['ceylon.collection','linked']};};
function $init$getLinked(){
    if($lt.$$===undefined){
        m$1.initTypeProto($lt,'ceylon.collection::linked',$init$Stability());
    }
    return $lt;
}
ex$.$init$getLinked=$init$getLinked;
$init$getLinked();
var $lu;
function getLinked(){
    if($lu===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
    if($lu===undefined){$lu=m$1.INIT$;$lu=$init$getLinked()();$lu.$crtmm$=getLinked.$crtmm$;}
    return $lu;
}
ex$.getLinked=getLinked;
getLinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$lt},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked={get:getLinked,$crtmm$:getLinked.$crtmm$};
getLinked=getLinked;$prop$getLinked=getLinked;
ex$.$prop$getLinked=$prop$getLinked;
function MutableList($$targs$$,mutableList$){
    m$1.List({Element$List:$$targs$$.Element$MutableList},mutableList$);
    ListMutator({Element$ListMutator:$$targs$$.Element$MutableList},mutableList$);
    m$1.set_type_args(mutableList$,$$targs$$,MutableList);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)].rt$({t:m$1.ClassDeclaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
    if(MutableList.$$===undefined){
        m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',$init$ListMutator(),m$1.List);
        (function(mutableList$){
            mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){
                var mutableList$=this;
                return mutableList$.$_delete(0);
            };
            mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
            mutableList$.deleteLast=function(){
                var mutableList$=this;
                return mutableList$.$_delete(mutableList$.size.minus(1));
            };
            mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
            mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};
        })(MutableList.$$.prototype);
    }
    return MutableList;
}
ex$.$init$MutableList=$init$MutableList;
$init$MutableList();
function ListMutator($$targs$$,listMutator$){
    m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
    m$1.set_type_args(listMutator$,$$targs$$,ListMutator);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in'}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
    if(ListMutator.$$===undefined){
        m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.List);
        (function(listMutator$){
            listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};}};listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}},an:function(){return[m$1.doc("The non-null values to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};}};listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};}};listMutator$.deleteFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};}};listMutator$.deleteLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};}};listMutator$.deleteSpan={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};}};listMutator$.deleteMeasure={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};}};listMutator$.truncate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws("AssertionError","if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};}};
        })(ListMutator.$$.prototype);
    }
    return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;
$init$ListMutator();
function measureToSpan($lv,$lw){
    return ($lx=(($lw<=0)?m$1.tpl$([(-1),(-1)],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}):null),m$1.nn$($lx)?$lx:m$1.tpl$([$lv,$lv.plus($lw).minus(1)],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}));
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
var $lx;
function spanToMeasure($ly,$lz,$m0){
    if(((($m0).valueOf()==(0).valueOf())||(($ly<0)&&($lz<0)))){
        return m$1.tpl$([0,0,false],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]});
    }
    var $m1=($ly>$lz);
    var $m2=largest(0,($m3=($m1?$lz:null),m$1.nn$($m3)?$m3:$ly));
    var $m3;
    var $m4=smallest($m0.minus(1),($m5=($m1?$ly:null),m$1.nn$($m5)?$m5:$lz));
    var $m5;
    return m$1.tpl$([$m2,(1).plus($m4).minus($m2),$m1],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]});
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}},{$t:{t:m$1.$_Boolean}}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($m6,$m7){
    return ($m8=(($m6>$m7)?$m6:null),m$1.nn$($m8)?$m8:$m7);
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
var $m8;
function smallest($m9,$ma){
    return ($mb=(($m9<$ma)?$m9:null),m$1.nn$($mb)?$mb:$ma);
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
var $mb;
function Cell(element,rest,$$targs$$,cell$){
    $init$Cell();
    if(cell$===undefined)cell$=new Cell.$$;
    m$1.set_type_args(cell$,$$targs$$);
    cell$.element_=element;
    cell$.rest_=rest;
    cell$.$prop$getElement={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};}};
    cell$.$prop$getElement.get=function(){return element};
    cell$.$prop$getRest={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};}};
    cell$.$prop$getRest.get=function(){return rest};
    return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
function $init$Cell(){
    if(Cell.$$===undefined){
        m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
        (function(cell$){
            m$1.atr$(cell$,'element',function(){return this.element_;},function($mc){return this.element_=$mc;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
            m$1.atr$(cell$,'rest',function(){return this.rest_;},function($md){return this.rest_=$md;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
            cell$.clone=function(){
                var cell$=this;
                return Cell(cell$.element,($me=cell$.rest,m$1.JsCallable($me,m$1.nn$($me)?$me.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});
            };
            cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
        })(Cell.$$.prototype);
    }
    return Cell;
}
ex$.$init$Cell=$init$Cell;
$init$Cell();
var $me;
function CellIterator($mf,$$targs$$,cellIterator$){
    $init$CellIterator();
    if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
    m$1.set_type_args(cellIterator$,$$targs$$);
    cellIterator$.$mf_=$mf;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator},cellIterator$);
    cellIterator$.$prop$get$mf={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};}};
    cellIterator$.$prop$get$mf.get=function(){return $mf};
    return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if(CellIterator.$$===undefined){
        m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
        (function(cellIterator$){
            m$1.atr$(cellIterator$,'$mf',function(){return this.$mf_;},function($mg){return this.$mf_=$mg;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
            cellIterator$.next=function(){
                var cellIterator$=this;
                var $mh;
                if(m$1.nn$(($mh=cellIterator$.$mf))){
                    (cellIterator$.$mf=$mh.rest);
                    return $mh.element;
                }
                return m$1.getFinished();
            };cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
        })(CellIterator.$$.prototype);
    }
    return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function TreeMap($mi,$mj,$$targs$$,treeMap$){
    $init$TreeMap();
    if(treeMap$===undefined)treeMap$=new TreeMap.$$;
    m$1.set_type_args(treeMap$,$$targs$$);
    treeMap$.$mi_=$mi;
    if($mj===undefined){$mj=m$1.getEmpty();}
    treeMap$.$mj_=$mj;
    MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
    SortedMap({Item$SortedMap:$$targs$$.Item$TreeMap,Key$SortedMap:$$targs$$.Key$TreeMap},treeMap$);
    m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$TreeMap,Item$Entry:$$targs$$.Item$TreeMap}},Index$Ranged:$$targs$$.Key$TreeMap},treeMap$);
    treeMap$.$mi=$mi;
    treeMap$.$prop$get$mj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};}};
    treeMap$.$prop$get$mj.get=function(){return $mj};
    treeMap$.$mk_=null;
    treeMap$.$prop$get$mk={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};}};
    treeMap$.$prop$get$mk.get=function(){return $mk};
    var $mm;for(var $ml=treeMap$.$mj.iterator();($mm=$ml.next())!==m$1.getFinished();){
        var $mn=$mm.key,$mo=$mm.item;
        treeMap$.put($mn,$mo);
    }
    treeMap$.$mp_=treeMap$.$mq();
    return treeMap$;
}
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Item$SortedMap:'Item$TreeMap',Key$SortedMap:'Key$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see([m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)].rt$({t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
    if(TreeMap.$$===undefined){
        m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
        (function(treeMap$){
            m$1.atr$(treeMap$,'$mj',function(){return this.$mj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
            function Node$TreeMap(key,item,red,$mr$){
                $init$Node$TreeMap();
                if($mr$===undefined)$mr$=new this.Node$TreeMap.$$;
                $mr$.outer$=this;
                $mr$.key_=key;
                $mr$.item_=item;
                $mr$.red_=red;
                $mr$.$prop$getKey={$crtmm$:function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};}};
                $mr$.$prop$getKey.get=function(){return key};
                $mr$.$prop$getItem={$crtmm$:function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};}};
                $mr$.$prop$getItem.get=function(){return item};
                $mr$.$ms_=null;
                $mr$.$prop$getLeft={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};}};
                $mr$.$prop$getLeft.get=function(){return left};
                $mr$.$mt_=null;
                $mr$.$prop$getRight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};}};
                $mr$.$prop$getRight.get=function(){return right};
                $mr$.$mu_=null;
                $mr$.$prop$getParent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};}};
                $mr$.$prop$getParent.get=function(){return parent};
                $mr$.$prop$getRed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};}};
                $mr$.$prop$getRed.get=function(){return red};
                $mr$.$prop$getGrandparent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};}};
                $mr$.$prop$getGrandparent.get=function(){return grandparent};
                $mr$.$prop$getUncle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};}};
                $mr$.$prop$getUncle.get=function(){return uncle};
                return $mr$;
            }
            Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap',pa:1025},{nm:'item',mt:'prm',$t:'Item$TreeMap',pa:1025},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean},pa:1025}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
            function $init$Node$TreeMap(){
                if(Node$TreeMap.$$===undefined){
                    m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
                    TreeMap.Node$TreeMap=Node$TreeMap;
                    (function($mr$){
                        m$1.atr$($mr$,'key',function(){return this.key_;},function($mv){return this.key_=$mv;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
                        m$1.atr$($mr$,'item',function(){return this.item_;},function($mw){return this.item_=$mw;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
                        m$1.atr$($mr$,'left',function(){return this.$ms_;},function($mx){return this.$ms_=$mx;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
                        m$1.atr$($mr$,'right',function(){return this.$mt_;},function($my){return this.$mt_=$my;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
                        m$1.atr$($mr$,'parent',function(){return this.$mu_;},function($mz){return this.$mu_=$mz;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
                        m$1.atr$($mr$,'red',function(){return this.red_;},function($n0){return this.red_=$n0;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
                        m$1.atr$($mr$,'onLeft',function(){
                            var $mr$=this;
                            var $n1;
                            if(m$1.nn$(($n1=($n2=$mr$.parent,m$1.nn$($n2)?$n2.left:null)))){
                                return $mr$.equals($n1);
                            }else {
                                return false;
                            }
                            var $n2;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});m$1.atr$($mr$,'onRight',function(){
                            var $mr$=this;
                            var $n3;
                            if(m$1.nn$(($n3=($n4=$mr$.parent,m$1.nn$($n4)?$n4.right:null)))){
                                return $mr$.equals($n3);
                            }else {
                                return false;
                            }
                            var $n4;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});m$1.atr$($mr$,'grandparent',function(){
                            var $mr$=this;
                            return ($n5=$mr$.parent,m$1.nn$($n5)?$n5.parent:null);
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
                        m$1.atr$($mr$,'sibling',function(){
                            var $mr$=this;
                            var $n6;
                            if(m$1.nn$(($n6=$mr$.parent))){
                                if($mr$.onLeft){
                                    return $n6.right;
                                }else {
                                    if($mr$.onRight){
                                        return $n6.left;
                                    }else {
                                        m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (57:27-57:33)",'57:20-57:34','TreeMap.ceylon');
                                    }
                                }
                            }else {
                                return null;
                            }
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($mr$,'uncle',function(){
                            var $mr$=this;
                            return ($n7=$mr$.parent,m$1.nn$($n7)?$n7.sibling:null);
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
                        m$1.atr$($mr$,'rightmostChild',function(){
                            var $mr$=this;
                            var $n8=$mr$;
                            function set$n8($n9){return $n8=$n9;};
                            $prop$get$n8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:$mr$.$prop$getRightmostChild,pa:1027,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild','$at','rightmost$31dipc']};}};
                            $prop$get$n8.get=function(){return $n8};
                            $prop$get$n8.set=set$n8;
                            if(set$n8.$crtmm$===undefined)set$n8.$crtmm$=$prop$get$n8.$crtmm$;
                            var $na;
                            while(m$1.nn$(($na=$n8.right))){
                                $n8=$na;
                            }
                            return $n8;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($mr$,'leftmostChild',function(){
                            var $mr$=this;
                            var $nb=$mr$;
                            function set$nb($nc){return $nb=$nc;};
                            $prop$get$nb={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:$mr$.$prop$getLeftmostChild,pa:1027,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild','$at','leftmost$2f9iww']};}};
                            $prop$get$nb.get=function(){return $nb};
                            $prop$get$nb.set=set$nb;
                            if(set$nb.$crtmm$===undefined)set$nb.$crtmm$=$prop$get$nb.$crtmm$;
                            var $nd;
                            while(m$1.nn$(($nd=$nb.left))){
                                $nb=$nd;
                            }
                            return $nb;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($mr$,'string',function(){
                            var $mr$=this;
                            var $ne=m$1.StringBuilder();
                            $prop$get$ne={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.StringBuilder},$cont:$mr$.$prop$getString,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string','$at','stringBuilder$kitzdj']};}};
                            $prop$get$ne.get=function(){return $ne};
                            var $nf;
                            if(m$1.nn$(($nf=$mr$.left))){
                                $ne.append($nf.string).append(", ");
                            }
                            $ne.append($mr$.key.string).append("->").append(($ng=($nh=$mr$.item,m$1.nn$($nh)?$nh.string:null),m$1.nn$($ng)?$ng:"<null>"));
                            var $ng,$nh;
                            var $ni;
                            if(m$1.nn$(($ni=$mr$.right))){
                                $ne.append(", ").append($ni.string);
                            }
                            return $ne.string;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});$mr$.clone=function($nj){
                            var $mr$=this;
                            var $nk=$nj.Node$TreeMap($mr$.key,$mr$.item,$mr$.red);
                            var $nl;
                            if(m$1.nn$(($nl=$mr$.left))){
                                var $nm=$nl.clone($nj);
                                ($nk.left=$nm);
                                ($nm.parent=$nk);
                            }
                            var $nn;
                            if(m$1.nn$(($nn=$mr$.right))){
                                var $no=$nn.clone($nj);
                                ($nk.right=$no);
                                ($no.parent=$nk);
                            }
                            return $nk;
                        };$mr$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},ps:[{nm:'clonedMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$m','clone']};};
                        m$1.atr$($mr$,'size',function(){
                            var $mr$=this;
                            var $np=(1);
                            function set$np($nq){return $np=$nq;};
                            $prop$get$np={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$mr$.$prop$getSize,pa:1024,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size','$at','size$vkmi5i']};}};
                            $prop$get$np.get=function(){return $np};
                            $prop$get$np.set=set$np;
                            if(set$np.$crtmm$===undefined)set$np.$crtmm$=$prop$get$np.$crtmm$;
                            var $nr;
                            if(m$1.nn$(($nr=$mr$.left))){
                                ($np=$np.plus($nr.size));
                            }
                            var $ns;
                            if(m$1.nn$(($ns=$mr$.right))){
                                ($np=$np.plus($ns.size));
                            }
                            return $np;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});
                    })(Node$TreeMap.$$.prototype);
                }
                return Node$TreeMap;
            }
            treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;
            $init$Node$TreeMap();
            treeMap$.Node$TreeMap=Node$TreeMap;
            treeMap$.$nt=function($nu){
                var treeMap$=this;
                var $nv;
                if(m$1.nn$(($nv=$nu))){
                    return $nv.red;
                }else {
                    return false;
                }
            };treeMap$.$nt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
            m$1.atr$(treeMap$,'$mk',function(){return this.$mk_;},function($nw){return this.$mk_=$nw;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
            treeMap$.$nx=function($ny){
                var treeMap$=this;
                var $nz=treeMap$.$mk;
                function set$nz($o0){return $nz=$o0;};
                var $o1;
                while(m$1.nn$(($o1=$nz))){
                    var $o2=treeMap$.$mi($ny,$o1.key);
                    if($o2===m$1.getEqual()) {
                        return $o1;
                    }else if($o2===m$1.getSmaller()) {
                        $nz=$o1.left;
                    }else if($o2===m$1.getLarger()) {
                        $nz=$o1.right;
                    }
                }
                return $nz;
            };treeMap$.$nx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
            treeMap$.$o3=function($o4){
                var treeMap$=this;
                var $o5=treeMap$.$mk;
                function set$o5($o6){return $o5=$o6;};
                var $o7;
                while(m$1.nn$(($o7=$o5))){
                    var $o8=treeMap$.$mi($o4,$o7.key);
                    if($o8===m$1.getEqual()) {
                        return $o7;
                    }else if($o8===m$1.getSmaller()) {
                        if(!m$1.nn$($o7.left)){
                            var $o9=$o7;
                            function set$o9($oa){return $o9=$oa;};
                            var $ob;
                            while(m$1.nn$(($ob=$o9.parent))&&$o9.onLeft){
                                $o9=$ob;
                            }
                            return $o9.parent;
                        }
                        $o5=$o7.left;
                    }else if($o8===m$1.getLarger()) {
                        if(!m$1.nn$($o7.right)){
                            return $o7;
                        }
                        $o5=$o7.right;
                    }
                }
                return $o5;
            };treeMap$.$o3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
            treeMap$.$oc=function($od){
                var treeMap$=this;
                var $oe=treeMap$.$mk;
                function set$oe($of){return $oe=$of;};
                var $og;
                while(m$1.nn$(($og=$oe))){
                    var $oh=treeMap$.$mi($od,$og.key);
                    if($oh===m$1.getEqual()) {
                        return $og;
                    }else if($oh===m$1.getSmaller()) {
                        if(!m$1.nn$($og.left)){
                            return $og;
                        }
                        $oe=$og.left;
                    }else if($oh===m$1.getLarger()) {
                        if(!m$1.nn$($og.right)){
                            var $oi=$og;
                            function set$oi($oj){return $oi=$oj;};
                            var $ok;
                            while(m$1.nn$(($ok=$oi.parent))&&$oi.onRight){
                                $oi=$ok;
                            }
                            return $oi.parent;
                        }
                        $oe=$og.right;
                    }
                }
                return $oe;
            };treeMap$.$oc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
            treeMap$.$ol=function($om,$on){
                var treeMap$=this;
                var $oo;
                if(m$1.nn$(($oo=$om.parent))){
                    if($om.onLeft){
                        ($oo.left=$on);
                    }else {
                        if($om.onRight){
                            ($oo.right=$on);
                        }else {
                            m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (222:23-222:29)",'222:16-222:30','TreeMap.ceylon');
                        }
                    }
                }else {
                    treeMap$.$mk=$on;
                }
                var $op;
                if(m$1.nn$(($op=$on))){
                    ($op.parent=$om.parent);
                }
            };treeMap$.$ol.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
            treeMap$.$oq=function($or,$os){
                var treeMap$=this;
                ($or.left=$os);
                var $ot;
                if(m$1.nn$(($ot=$os))){
                    ($ot.parent=$or);
                }
            };treeMap$.$oq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
            treeMap$.$ou=function($ov,$ow){
                var treeMap$=this;
                ($ov.right=$ow);
                var $ox;
                if(m$1.nn$(($ox=$ow))){
                    ($ox.parent=$ov);
                }
            };treeMap$.$ou.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
            treeMap$.$oy=function($oz){
                var treeMap$=this;
                var $p0;
                m$1.asrt$((m$1.nn$(($p0=$oz.right))),"Assertion failed: \'exists right = node.right\' at TreeMap.ceylon (248:15-248:41)",'248:8-248:42','TreeMap.ceylon');
                treeMap$.$ol($oz,$p0);
                var $p1=$p0.left;
                treeMap$.$ou($oz,$p1);
                treeMap$.$oq($p0,$oz);
            };treeMap$.$oy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
            treeMap$.$p2=function($p3){
                var treeMap$=this;
                var $p4;
                m$1.asrt$((m$1.nn$(($p4=$p3.left))),"Assertion failed: \'exists left = node.left\' at TreeMap.ceylon (256:15-256:39)",'256:8-256:40','TreeMap.ceylon');
                var $p5=$p4.right;
                treeMap$.$ol($p3,$p4);
                treeMap$.$oq($p3,$p5);
                treeMap$.$ou($p4,$p3);
            };treeMap$.$p2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
            treeMap$.$p6=function($p7){
                var treeMap$=this;
                var $p8;
                if(m$1.nn$(($p8=$p7.parent))){
                    if(treeMap$.$nt($p8)){
                        var $p9;
                        if(m$1.nn$(($p9=$p7.uncle))&&treeMap$.$nt($p9)){
                            ($p8.red=false);
                            ($p9.red=false);
                            var $pa;
                            m$1.asrt$((m$1.nn$(($pa=$p7.grandparent))),"Assertion failed: \'exists grandparent=newNode.grandparent\' at TreeMap.ceylon (273:27-273:66)",'273:20-273:67','TreeMap.ceylon');
                            ($pa.red=true);
                            treeMap$.$p6($pa);
                        }else {
                            var $pb;
                            if(($p7.onRight&&$p8.onLeft)){
                                treeMap$.$oy($p8);
                                var $pc;
                                m$1.asrt$((m$1.nn$(($pc=$p7.left))),"Assertion failed: \'exists nl=newNode.left\' at TreeMap.ceylon (282:31-282:54)",'282:24-282:55','TreeMap.ceylon');
                                $pb=$pc;
                            }else {
                                if(($p7.onLeft&&$p8.onRight)){
                                    treeMap$.$p2($p8);
                                    var $pd;
                                    m$1.asrt$((m$1.nn$(($pd=$p7.right))),"Assertion failed: \'exists nr=newNode.right\' at TreeMap.ceylon (287:31-287:55)",'287:24-287:56','TreeMap.ceylon');
                                    $pb=$pd;
                                }else {
                                    $pb=$p7;
                                }
                            }
                            var $pe;
                            m$1.asrt$((m$1.nn$(($pe=$pb.parent))),"Assertion failed: \'exists adjustedParent=adjustedNode.parent\' at TreeMap.ceylon (294:27-294:69)",'294:20-294:70','TreeMap.ceylon');
                            ($pe.red=false);
                            var $pf;
                            m$1.asrt$((m$1.nn$(($pf=$pb.grandparent))),"Assertion failed: \'exists grandparent=adjustedNode.grandparent\' at TreeMap.ceylon (296:27-296:71)",'296:20-296:72','TreeMap.ceylon');
                            ($pf.red=true);
                            if(($pb.onLeft&&$pe.onLeft)){
                                treeMap$.$p2($pf);
                            }else {
                                if(($pb.onRight&&$pe.onRight)){
                                    treeMap$.$oy($pf);
                                }else {
                                    m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (305:31-305:37)",'305:24-305:38','TreeMap.ceylon');
                                }
                            }
                        }
                    }
                }else {
                    ($p7.red=false);
                }
            };treeMap$.$p6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
            treeMap$.put=function($pg,$ph){
                var treeMap$=this;
                var $pi=treeMap$.Node$TreeMap($pg,$ph,true);
                var $pj;
                if(m$1.nn$(($pj=treeMap$.$mk))){
                    var $pk=$pj;
                    function set$pk($pl){return $pk=$pl;};
                    while(true){
                        var $pm=treeMap$.$mi($pg,$pk.key);
                        if($pm===m$1.getLarger()) {
                            var $pn;
                            if(m$1.nn$(($pn=$pk.right))){
                                $pk=$pn;
                            }else {
                                ($pk.right=$pi);
                                break;
                            }
                        }else if($pm===m$1.getSmaller()) {
                            var $po;
                            if(m$1.nn$(($po=$pk.left))){
                                $pk=$po;
                            }else {
                                ($pk.left=$pi);
                                break;
                            }
                        }else if($pm===m$1.getEqual()) {
                            var $pp=$pk.item;
                            ($pk.item=$ph);
                            return $pp;
                        }
                    }
                    ($pi.parent=$pk);
                }else {
                    treeMap$.$mk=$pi;
                }
                treeMap$.$p6($pi);
                return null;
            };treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
            function $mq(){
                var $mq$=new this.$mq.$$;$mq$.outer$=this;
                return $mq$;
            };$mq.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1e')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
            function $init$removeCases(){
                if($mq.$$===undefined){
                    m$1.initTypeProto($mq,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
                    TreeMap.$mq=$mq;
                    (function($mq$){
                        $mq$.$pq=function($pr){
                            var $mq$=this;
                            var $ps;
                            if(m$1.nn$(($ps=$pr.left))){
                                m$1.asrt$((!m$1.nn$($pr.right)),"Assertion failed: \'!node.right exists\' at TreeMap.ceylon (366:23-366:42)",'366:16-366:43','TreeMap.ceylon');
                                return $ps;
                            }else {
                                var $pt;
                                if(m$1.nn$(($pt=$pr.right))){
                                    m$1.asrt$((!m$1.nn$($pr.left)),"Assertion failed: \'!node.left exists\' at TreeMap.ceylon (370:23-370:41)",'370:16-370:42','TreeMap.ceylon');
                                    return $pt;
                                }else {
                                    return null;
                                }
                            }
                        };$mq$.$pq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.Node$TreeMap},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
                        $mq$.removeNodeWithAtMostOneChild=function($pu){
                            var $mq$=this;
                            var $pv=$mq$.$pq($pu);
                            if(!$pu.red&&$mq$.outer$.$nt($pv)){
                                var $pw;
                                m$1.asrt$((m$1.nn$(($pw=$pv))),"Assertion failed: \'exists child\' at TreeMap.ceylon (381:22-381:35)",'381:16-381:36','TreeMap.ceylon');
                                ($pw.red=false);
                            }else {
                                if(!$pu.red){
                                    $mq$.$px($pu,$pu.sibling);
                                }
                            }
                            $mq$.outer$.$ol($pu,$pv);
                        };$mq$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$mq,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
                        $mq$.$px=function($py,$pz){
                            var $mq$=this;
                            var $q0;
                            if(m$1.nn$(($q0=$mq$.outer$.$mk))&&!($q0===$py)){
                                $mq$.$q1($py,$pz);
                            }
                        };$mq$.$px.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
                        $mq$.$q1=function($q2,$q3){
                            var $mq$=this;
                            var $q4;
                            m$1.asrt$((m$1.nn$(($q4=$q2.parent))),"Assertion failed: \'exists p = node.parent\' at TreeMap.ceylon (397:18-397:41)",'397:12-397:42','TreeMap.ceylon');
                            var $q5;
                            if(m$1.nn$(($q5=$q3))&&$q5.red){
                                ($q4.red=true);
                                ($q5.red=false);
                                if($q2.onLeft){
                                    $mq$.outer$.$oy($q4);
                                }else {
                                    $mq$.outer$.$p2($q4);
                                }
                            }
                            var $q6;
                            m$1.asrt$((m$1.nn$(($q6=$q2.parent))),"Assertion failed: \'exists newParent = node.parent\' at TreeMap.ceylon (407:18-407:49)",'407:12-407:50','TreeMap.ceylon');
                            $mq$.$q7($q2,$q6,$q2.sibling);
                        };$mq$.$q1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
                        $mq$.$q7=function($q8,$q9,$qa){
                            var $mq$=this;
                            var $qb;
                            m$1.asrt$((m$1.nn$(($qb=$qa))),"Assertion failed: \'exists s\' at TreeMap.ceylon (412:18-412:27)",'412:12-412:28','TreeMap.ceylon');
                            var $qc=$mq$.outer$.$nt($qb.left);
                            var $qd=$mq$.outer$.$nt($qb.right);
                            if(!$qb.red&&!$q9.red&&!$qc&&!$qd){
                                ($qb.red=true);
                                $mq$.$px($q9,$q9.sibling);
                            }else {
                                $mq$.$qe($q8,$q9,$qb,$qc,$qd);
                            }
                        };$mq$.$q7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
                        $mq$.$qe=function($qf,$qg,$qh,$qi,$qj){
                            var $mq$=this;
                            if(!$qh.red&&$qg.red&&!$qi&&!$qj){
                                ($qh.red=true);
                                ($qg.red=false);
                            }else {
                                $mq$.$qk($qf,$qg,$qh,$qi,$qj);
                            }
                        };$mq$.$qe.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
                        $mq$.$qk=function($ql,$qm,$qn,$qo,$qp){
                            var $mq$=this;
                            if(!$qn.red&&$qo&&!$qp&&$ql.onLeft){
                                ($qn.red=true);
                                var $qq;
                                m$1.asrt$((m$1.nn$(($qq=$qn.left))),"Assertion failed: \'exists sl = s.left\' at TreeMap.ceylon (435:23-435:42)",'435:16-435:43','TreeMap.ceylon');
                                ($qq.red=false);
                                $mq$.outer$.$p2($qn);
                            }else {
                                if(!$qn.red&&!$qo&&$qp&&$ql.onRight){
                                    ($qn.red=true);
                                    var $qr;
                                    m$1.asrt$((m$1.nn$(($qr=$qn.right))),"Assertion failed: \'exists sr = s.right\' at TreeMap.ceylon (440:23-440:43)",'440:16-440:44','TreeMap.ceylon');
                                    ($qr.red=false);
                                    $mq$.outer$.$oy($qn);
                                }
                            }
                            var $qs,$qt;
                            m$1.asrt$((m$1.nn$(($qs=$ql.parent))&&m$1.nn$(($qt=$ql.sibling))),"Assertion failed: \'exists newParent = node.parent, exists newS = node.sibling\' at TreeMap.ceylon (444:18-444:77)",'444:12-444:78','TreeMap.ceylon');
                            $mq$.$qu($ql,$qs,$qt);
                        };$mq$.$qk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
                        $mq$.$qu=function($qv,$qw,$qx){
                            var $mq$=this;
                            ($qx.red=$qw.red);
                            ($qw.red=false);
                            var $qy;
                            if($qv.onLeft&&m$1.nn$(($qy=$qx.right))){
                                ($qy.red=false);
                                $mq$.outer$.$oy($qw);
                            }else {
                                var $qz;
                                if(m$1.nn$(($qz=$qx.left))){
                                    ($qz.red=false);
                                    $mq$.outer$.$p2($qw);
                                }
                            }
                        };$mq$.$qu.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$mq,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
                    })($mq.$$.prototype);
                }
                return $mq;
            }
            treeMap$.$init$removeCases=$init$removeCases;
            $init$removeCases();
            m$1.atr$(treeMap$,'$mp',function(){return this.$mp_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$mq},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
            treeMap$.$mq=$mq;treeMap$.$mq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$mq},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
            treeMap$.remove=function($r0){
                var treeMap$=this;
                var $r1;
                if(m$1.nn$(($r1=treeMap$.$nx($r0)))){
                    var $r2;
                    var $r3,$r4;
                    if(m$1.nn$(($r3=$r1.left))&&m$1.nn$(($r4=$r1.right))){
                        $r2=$r3.rightmostChild;
                        ($r1.key=$r2.key);
                        ($r1.item=$r2.item);
                    }else {
                        $r2=$r1;
                    }
                    treeMap$.$mp.removeNodeWithAtMostOneChild($r2);
                    return $r1.item;
                }else {
                    return null;
                }
            };treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
            treeMap$.removeEntry=function($r5,$r6){
                var treeMap$=this;
                var $r7,$r8;
                if(m$1.nn$(($r7=treeMap$.$nx($r5)))&&m$1.nn$(($r8=$r7.item))&&$r8.equals($r6)){
                    var $r9;
                    var $ra,$rb;
                    if(m$1.nn$(($ra=$r7.left))&&m$1.nn$(($rb=$r7.right))){
                        $r9=$ra.rightmostChild;
                        ($r7.key=$r9.key);
                        ($r7.item=$r9.item);
                    }else {
                        $r9=$r7;
                    }
                    treeMap$.$mp.removeNodeWithAtMostOneChild($r9);
                    return true;
                }else {
                    return false;
                }
            };treeMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','removeEntry']};};
            treeMap$.replaceEntry=function($rc,$rd,$re){
                var treeMap$=this;
                var $rf;
                if(m$1.nn$(($rf=treeMap$.$mk))){
                    var $rg=$rf;
                    function set$rg($rh){return $rg=$rh;};
                    while(true){
                        var $ri=treeMap$.$mi($rc,$rg.key);
                        if($ri===m$1.getLarger()) {
                            var $rj;
                            if(m$1.nn$(($rj=$rg.right))){
                                $rg=$rj;
                            }else {
                                break;
                            }
                        }else if($ri===m$1.getSmaller()) {
                            var $rk;
                            if(m$1.nn$(($rk=$rg.left))){
                                $rg=$rk;
                            }else {
                                break;
                            }
                        }else if($ri===m$1.getEqual()) {
                            var $rl;
                            if(m$1.nn$(($rl=$rg.item))&&$rl.equals($rd)){
                                ($rg.item=$re);
                                return true;
                            }else {
                                return false;
                            }
                        }
                    }
                }
                return false;
            };treeMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','replaceEntry']};};
            treeMap$.higherEntries=function($rm){
                var treeMap$=this;
                function $rn($$targs$$){
                    var $rn$=new $rn.$$;$rn$.outer$=treeMap$;
                    $rn$.$$targs$$=$$targs$$;
                    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}},$rn$);
                    return $rn$;
                };$rn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:treeMap$.higherEntries,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$m','higherEntries','$o','iterable$3nr49a']};};
                function $init$$rn(){
                    if($rn.$$===undefined){
                        m$1.initTypeProto($rn,'ceylon.collection::TreeMap.iterable',m$1.Basic,m$1.Iterable);
                        (function($rn$){
                            $rn$.iterator=function(){
                                var $rn$=this;
                                return treeMap$.NodeIterator$TreeMap(treeMap$.$oc($rm));
                            };
                        })($rn.$$.prototype);
                    }
                    return $rn;
                }
                $init$$rn();
                var $ro;
                function get$ro(){
                    if($ro===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'iterable\' before it was set"),'539:8-541:8','TreeMap.ceylon');
                    if($ro===undefined){$ro=m$1.INIT$;$ro=$init$$rn()({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}});$ro.$crtmm$=get$ro.$crtmm$;}
                    return $ro;
                }
                get$ro.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$rn},$cont:treeMap$.higherEntries,d:['ceylon.collection','TreeMap','$m','higherEntries','$o','iterable$3nr49b']};};
                $prop$get$ro={get:get$ro,$crtmm$:get$ro.$crtmm$};
                get$rn=get$ro;$prop$get$rn=get$ro;
                return get$ro();
            };treeMap$.higherEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','higherEntries']};};
            treeMap$.lowerEntries=function($rp){
                var treeMap$=this;
                function $rq($$targs$$){
                    var $rq$=new $rq.$$;$rq$.outer$=treeMap$;
                    $rq$.$$targs$$=$$targs$$;
                    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}},$rq$);
                    return $rq$;
                };$rq.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:treeMap$.lowerEntries,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$m','lowerEntries','$o','iterable$y21z9o']};};
                function $init$$rq(){
                    if($rq.$$===undefined){
                        m$1.initTypeProto($rq,'ceylon.collection::TreeMap.iterable',m$1.Basic,m$1.Iterable);
                        (function($rq$){
                            $rq$.iterator=function(){
                                var $rq$=this;
                                return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$o3($rp));
                            };
                        })($rq.$$.prototype);
                    }
                    return $rq;
                }
                $init$$rq();
                var $rr;
                function get$rr(){
                    if($rr===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'iterable\' before it was set"),'546:8-548:8','TreeMap.ceylon');
                    if($rr===undefined){$rr=m$1.INIT$;$rr=$init$$rq()({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}});$rr.$crtmm$=get$rr.$crtmm$;}
                    return $rr;
                }
                get$rr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$rq},$cont:treeMap$.lowerEntries,d:['ceylon.collection','TreeMap','$m','lowerEntries','$o','iterable$y21z9p']};};
                $prop$get$rr={get:get$rr,$crtmm$:get$rr.$crtmm$};
                get$rq=get$rr;$prop$get$rq=get$rr;
                return get$rr();
            };treeMap$.lowerEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','lowerEntries']};};
            function NodeIterator$TreeMap($rs,$rt$){
                $init$NodeIterator$TreeMap();
                if($rt$===undefined)$rt$=new this.NodeIterator$TreeMap.$$;
                $rt$.outer$=this;
                $rt$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$rt$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$rt$.outer$.$$targs$$.Item$TreeMap}}};
                if($rs===undefined){$rs=($ru=$rt$.outer$.$mk,m$1.nn$($ru)?$ru.leftmostChild:null);}
                $rt$.$rs_=$rs;
                m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$rt$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$rt$.outer$.$$targs$$.Item$TreeMap}}},$rt$);
                $rt$.$prop$get$rs={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};}};
                $rt$.$prop$get$rs.get=function(){return $rs};
                return $rt$;
            }
            NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
            function $init$NodeIterator$TreeMap(){
                if(NodeIterator$TreeMap.$$===undefined){
                    m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
                    TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
                    (function($rt$){
                        m$1.atr$($rt$,'$rs',function(){return this.$rs_;},function($rv){return this.$rs_=$rv;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
                        $rt$.next=function(){
                            var $rt$=this;
                            var $rw;
                            var $rx;
                            if(m$1.nn$(($rx=$rt$.$rs))){
                                $rw=m$1.Entry($rx.key,$rx.item,{Key$Entry:$rt$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$rt$.outer$.$$targs$$.Item$TreeMap});
                            }else {
                                $rw=m$1.getFinished();
                            }
                            var $ry,$rz;
                            if(m$1.nn$(($ry=$rt$.$rs))&&m$1.nn$(($rz=$ry.right))){
                                $rt$.$rs=$rz;
                                var $s0;
                                while(m$1.nn$(($s0=($s1=$rt$.$rs,m$1.nn$($s1)?$s1.left:null)))){
                                    $rt$.$rs=$s0;
                                }
                                var $s1;
                            }else {
                                var $s2;
                                if(m$1.nn$(($s2=$rt$.$rs))){
                                    var $s3=$s2;
                                    function set$s3($s4){return $s3=$s4;};
                                    var $s5;
                                    while(m$1.nn$(($s5=$s3.parent))&&$s3.onRight){
                                        $s3=$s5;
                                    }
                                    $rt$.$rs=$s3.parent;
                                }else {
                                    $rt$.$rs=null;
                                }
                            }
                            return $rw;
                        };$rt$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
                    })(NodeIterator$TreeMap.$$.prototype);
                }
                return NodeIterator$TreeMap;
            }
            treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;
            $init$NodeIterator$TreeMap();
            treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
            function ReverseNodeIterator$TreeMap($s6,$s7$){
                $init$ReverseNodeIterator$TreeMap();
                if($s7$===undefined)$s7$=new this.ReverseNodeIterator$TreeMap.$$;
                $s7$.outer$=this;
                $s7$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$s7$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$s7$.outer$.$$targs$$.Item$TreeMap}}};
                if($s6===undefined){$s6=($s8=$s7$.outer$.$mk,m$1.nn$($s8)?$s8.rightmostChild:null);}
                $s7$.$s6_=$s6;
                m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$s7$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$s7$.outer$.$$targs$$.Item$TreeMap}}},$s7$);
                $s7$.$prop$get$s6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};}};
                $s7$.$prop$get$s6.get=function(){return $s6};
                return $s7$;
            }
            ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
            function $init$ReverseNodeIterator$TreeMap(){
                if(ReverseNodeIterator$TreeMap.$$===undefined){
                    m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
                    TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
                    (function($s7$){
                        m$1.atr$($s7$,'$s6',function(){return this.$s6_;},function($s9){return this.$s6_=$s9;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
                        $s7$.next=function(){
                            var $s7$=this;
                            var $sa;
                            var $sb;
                            if(m$1.nn$(($sb=$s7$.$s6))){
                                $sa=m$1.Entry($sb.key,$sb.item,{Key$Entry:$s7$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$s7$.outer$.$$targs$$.Item$TreeMap});
                            }else {
                                $sa=m$1.getFinished();
                            }
                            var $sc,$sd;
                            if(m$1.nn$(($sc=$s7$.$s6))&&m$1.nn$(($sd=$sc.left))){
                                $s7$.$s6=$sd;
                                var $se;
                                while(m$1.nn$(($se=($sf=$s7$.$s6,m$1.nn$($sf)?$sf.right:null)))){
                                    $s7$.$s6=$se;
                                }
                                var $sf;
                            }else {
                                var $sg;
                                if(m$1.nn$(($sg=$s7$.$s6))){
                                    $s7$.$s6=$sg.parent;
                                    var $sh=$sg;
                                    function set$sh($si){return $sh=$si;};
                                    var $sj;
                                    while(m$1.nn$(($sj=$s7$.$s6))&&$sh.onLeft){
                                        $sh=$sj;
                                        $s7$.$s6=$sj.parent;
                                    }
                                }else {
                                    $s7$.$s6=null;
                                }
                            }
                            return $sa;
                        };$s7$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
                    })(ReverseNodeIterator$TreeMap.$$.prototype);
                }
                return ReverseNodeIterator$TreeMap;
            }
            treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;
            $init$ReverseNodeIterator$TreeMap();
            treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
            treeMap$.iterator=function(){
                var treeMap$=this;
                return treeMap$.NodeIterator$TreeMap();
            };
            treeMap$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','iterator']};};
            treeMap$.clone=function(){
                var treeMap$=this;
                var $sk=TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$mi),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),undefined,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
                ($sk.$mk=($sl=treeMap$.$mk,m$1.JsCallable($sl,m$1.nn$($sl)?$sl.clone:null))($sk));
                var $sl;
                return $sk;
            };treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
            treeMap$.$_get=function($sm){
                var treeMap$=this;
                var $sn;
                if(m$1.is$(($sn=$sm),treeMap$.$$targs$$.Key$TreeMap)){
                    return ($so=treeMap$.$nx($sn),m$1.nn$($so)?$so.item:null);
                    var $so;
                }else {
                    return null;
                }
            };treeMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','get']};};
            treeMap$.defines=function($sp){
                var treeMap$=this;
                var $sq;
                if(m$1.is$(($sq=$sp),treeMap$.$$targs$$.Key$TreeMap)){
                    return m$1.nn$(treeMap$.$nx($sq));
                }else {
                    return false;
                }
            };treeMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','defines']};};
            treeMap$.contains=function($sr){
                var treeMap$=this;
                var $ss,$st;
                if(m$1.is$(($ss=$sr),{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}})&&m$1.nn$(($st=treeMap$.$nx($ss.key)))){
                    var $su;
                    if(m$1.nn$(($su=$st.item))){
                        var $sv;
                        if(m$1.nn$(($sv=$ss.item))){
                            return $sv.equals($su);
                        }else {
                            return false;
                        }
                    }else {
                        return !m$1.nn$($ss.item);
                    }
                }else {
                    return false;
                }
            };treeMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','contains']};};
            treeMap$.clear=function(){
                var treeMap$=this;
                return (treeMap$.$mk=null);
            };m$1.atr$(treeMap$,'size',function(){
                var treeMap$=this;
                return ($sw=($sx=treeMap$.$mk,m$1.nn$($sx)?$sx.size:null),m$1.nn$($sw)?$sw:(0));
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
            m$1.atr$(treeMap$,'string',function(){
                var treeMap$=this;
                var $sy;
                if(m$1.nn$(($sy=treeMap$.$mk))){
                    return "{ ".plus($sy.string).plus(" }");
                }else {
                    return "{}";
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});treeMap$.equals=function($sz){
                var treeMap$=this;
                return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(this,$sz);
            };m$1.atr$(treeMap$,'hash',function(){
                var treeMap$=this;
                return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
            treeMap$.assertInvariants=function(){
                var treeMap$=this;
                treeMap$.$t0();
                treeMap$.$t1();
                treeMap$.$t2();
            };treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
            treeMap$.$t0=function(){
                var treeMap$=this;
                m$1.asrt$((!treeMap$.$nt(treeMap$.$mk)),"Assertion failed: \'!isRed(root)\' at TreeMap.ceylon (688:15-688:28)",'688:8-688:29','TreeMap.ceylon');
            };treeMap$.$t0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
            treeMap$.$t1$defs$node=function($t3){var treeMap$=this;
            return treeMap$.$mk;};
            treeMap$.$t1=function($t3){
                var treeMap$=this;
                if($t3===undefined){$t3=treeMap$.$t1$defs$node($t3);}
                var $t4;
                if(m$1.nn$(($t4=$t3))){
                    if(treeMap$.$nt($t4)){
                        m$1.asrt$((!treeMap$.$nt($t4.left)),"Assertion failed: \'!isRed(node.left)\' at TreeMap.ceylon (694:23-694:41)",'694:16-694:42','TreeMap.ceylon');
                        m$1.asrt$((!treeMap$.$nt($t4.right)),"Assertion failed: \'!isRed(node.right)\' at TreeMap.ceylon (695:23-695:42)",'695:16-695:43','TreeMap.ceylon');
                        m$1.asrt$((!treeMap$.$nt($t4.parent)),"Assertion failed: \'!isRed(node.parent)\' at TreeMap.ceylon (696:23-696:43)",'696:16-696:44','TreeMap.ceylon');
                    }
                    treeMap$.$t1($t4.left);
                    treeMap$.$t1($t4.right);
                }
            };treeMap$.$t1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
            treeMap$.$t2$defs$node=function($t5,$t6,$t7){var treeMap$=this;
            return treeMap$.$mk;};
            treeMap$.$t2$defs$blackCount=function($t5,$t6,$t7){return 0;};
            treeMap$.$t2$defs$pathBlackCount=function($t5,$t6,$t7){return null;};
            treeMap$.$t2=function($t5,$t6,$t7){
                var treeMap$=this;
                if($t5===undefined){$t5=treeMap$.$t2$defs$node($t5,$t6,$t7);}
                if($t6===undefined){$t6=treeMap$.$t2$defs$blackCount($t5,$t6,$t7);}
                if($t7===undefined){$t7=treeMap$.$t2$defs$pathBlackCount($t5,$t6,$t7);}
                var $t5=$t5;
                var $t6=$t6;
                function set$t6($t8){return $t6=$t8;};
                var $t7=$t7;
                function set$t7($t9){return $t7=$t9;};
                if(!treeMap$.$nt($t5)){
                    ($ta=$t6,$t6=$ta.successor,$ta);
                    var $ta;
                }
                var $tb;
                if(m$1.nn$(($tb=$t5))){
                    $t7=treeMap$.$t2($tb.left,$t6,$t7);
                    $t7=treeMap$.$t2($tb.right,$t6,$t7);
                    return $t7;
                }else {
                    var $tc;
                    if(m$1.nn$(($tc=$t7))){
                        m$1.asrt$(((($t6).valueOf()==($tc).valueOf())),"Assertion failed: \'blackCount == count\' at TreeMap.ceylon (720:23-720:43)",'720:16-720:44','TreeMap.ceylon');
                    }else {
                        $t7=$t6;
                    }
                    return $t7;
                }
            };treeMap$.$t2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1024},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1027}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
            m$1.atr$(treeMap$,'first',function(){
                var treeMap$=this;
                var $td;
                if(m$1.nn$(($td=($te=treeMap$.$mk,m$1.nn$($te)?$te.leftmostChild:null)))){
                    return m$1.Entry($td.key,$td.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap});
                }
                var $te;
                return null;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});m$1.atr$(treeMap$,'last',function(){
                var treeMap$=this;
                var $tf;
                if(m$1.nn$(($tf=($tg=treeMap$.$mk,m$1.nn$($tg)?$tg.rightmostChild:null)))){
                    return m$1.Entry($tf.key,$tf.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap});
                }
                var $tg;
                return null;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});treeMap$.measure=function($th,$ti){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$mi),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.higherEntries($th).take($ti),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.span=function($tj,$tk){
                var treeMap$=this;
                var $tl;
                if(treeMap$.$mi($tj,$tk).equals(m$1.getLarger())){
                    $tl=treeMap$.lowerEntries($tj).takeWhile(m$1.$JsCallable((function($tm){
                        return (!treeMap$.$mi($tm.key,$tk).equals(m$1.getSmaller()));
                    }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}}));
                }else {
                    $tl=treeMap$.higherEntries($tj).takeWhile(m$1.$JsCallable((function($tn){
                        return (!treeMap$.$mi($tn.key,$tk).equals(m$1.getLarger()));
                    }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}}));
                }
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$mi),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),$tl,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'from',mt:'prm',$t:'Key$TreeMap'},{nm:'to',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','span']};};
            treeMap$.spanFrom=function($to){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$mi),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.higherEntries($to),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.spanTo=function($tp){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$mi),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.takeWhile(m$1.$JsCallable((function($tq){
                    return (!treeMap$.$mi($tq.key,$tp).equals(m$1.getLarger()));
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}})),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };
        })(TreeMap.$$.prototype);
    }
    return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;
$init$TreeMap();
var $n5,$n7,$ru,$s8,$sw,$sx;
function naturalOrderTreeMap($tr,$$$mptypes){
    return TreeMap(m$1.$JsCallable((function($ts,$tt){
        return $ts.compare($tt);
    }),[{nm:'x',mt:'prm',$t:'Key$naturalOrderTreeMap'},{nm:'y',mt:'prm',$t:'Key$naturalOrderTreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[$$$mptypes.Key$naturalOrderTreeMap,$$$mptypes.Key$naturalOrderTreeMap]}}),$tr,{Item$TreeMap:$$$mptypes.Item$naturalOrderTreeMap,Key$TreeMap:$$$mptypes.Key$naturalOrderTreeMap});
};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$naturalOrderTreeMap',Item$Entry:'Item$naturalOrderTreeMap'}}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function LinkedCell($tu,$tv,previous,$$targs$$,linkedCell$){
    $init$LinkedCell();
    if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
    m$1.set_type_args(linkedCell$,$$targs$$);
    linkedCell$.$tu_=$tu;
    linkedCell$.$tv_=$tv;
    linkedCell$.previous_=previous;
    Cell(linkedCell$.$tu,linkedCell$.$tv,{Element$Cell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
    linkedCell$.$tw_=null;
    linkedCell$.$prop$getNext={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};}};
    linkedCell$.$prop$getNext.get=function(){return next};
    linkedCell$.$prop$getPrevious={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};}};
    linkedCell$.$prop$getPrevious.get=function(){return previous};
    return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Cell,a:{Element$Cell:'Element$LinkedCell'}},ps:[{nm:'car',mt:'prm',$t:'Element$LinkedCell'},{nm:'cdr',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
function $init$LinkedCell(){
    if(LinkedCell.$$===undefined){
        m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$Cell());
        (function(linkedCell$){
            m$1.atr$(linkedCell$,'next',function(){return this.$tw_;},function($tx){return this.$tw_=$tx;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
            m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($ty){return this.previous_=$ty;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
            m$1.atr$(linkedCell$,'$tu',function(){return this.$tu_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','car$c10yed']};});
            m$1.atr$(linkedCell$,'$tv',function(){return this.$tv_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','cdr$c13omy']};});
        })(LinkedCell.$$.prototype);
    }
    return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;
$init$LinkedCell();
function LinkedCellIterator($tz,$$targs$$,linkedCellIterator$){
    $init$LinkedCellIterator();
    if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
    m$1.set_type_args(linkedCellIterator$,$$targs$$);
    linkedCellIterator$.$tz_=$tz;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator},linkedCellIterator$);
    linkedCellIterator$.$prop$get$tz={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};}};
    linkedCellIterator$.$prop$get$tz.get=function(){return $tz};
    return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
function $init$LinkedCellIterator(){
    if(LinkedCellIterator.$$===undefined){
        m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
        (function(linkedCellIterator$){
            m$1.atr$(linkedCellIterator$,'$tz',function(){return this.$tz_;},function($u0){return this.$tz_=$u0;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
            linkedCellIterator$.next=function(){
                var linkedCellIterator$=this;
                var $u1;
                if(m$1.nn$(($u1=linkedCellIterator$.$tz))){
                    (linkedCellIterator$.$tz=$u1.next);
                    return $u1.element;
                }
                return m$1.getFinished();
            };linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
        })(LinkedCellIterator.$$.prototype);
    }
    return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;
$init$LinkedCellIterator();
function frequencies($u2,$$$mptypes){
    var $u3=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Element$frequencies,Item$HashMap:{t:Counter}});
    var $u5;for(var $u4=$u2.iterator();($u5=$u4.next())!==m$1.getFinished();){
        var $u6;
        if(m$1.nn$(($u6=$u3.$_get($u5)))){
            ($u7=$u6,$u8=$u7.count,$u7.count=$u8.successor,$u8);
            var $u7,$u8;
        }else {
            $u3.put($u5,Counter(1));
        }
    }
    return $u3.mapItems(m$1.$JsCallable((function($u9,$ua){
        return $ua.count;
    }),[{nm:'e',mt:'prm',$t:'Element$frequencies'},{nm:'c',mt:'prm',$t:{t:Counter}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[$$$mptypes.Element$frequencies,{t:Counter}]}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$frequencies'}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
    $init$Counter();
    if(counter$===undefined)counter$=new Counter.$$;
    counter$.count_=count;
    counter$.$prop$getCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};}};
    counter$.$prop$getCount.get=function(){return count};
    return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
function $init$Counter(){
    if(Counter.$$===undefined){
        m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
        (function(counter$){
            m$1.atr$(counter$,'count',function(){return this.count_;},function($ub){return this.count_=$ub;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
        })(Counter.$$.prototype);
    }
    return Counter;
}
ex$.$init$Counter=$init$Counter;
$init$Counter();
function SortedMap($$targs$$,sortedMap$){
    m$1.Map({Key$Map:$$targs$$.Key$SortedMap,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
    m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:$$targs$$.Item$SortedMap,Key$SortedMap:$$targs$$.Key$SortedMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$SortedMap,Item$Entry:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap},sortedMap$);
    m$1.set_type_args(sortedMap$,$$targs$$,SortedMap);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:'Item$SortedMap',Key$SortedMap:'Key$SortedMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
    if(SortedMap.$$===undefined){
        m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
        (function(sortedMap$){
            sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};
        })(SortedMap.$$.prototype);
    }
    return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;
$init$SortedMap();
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
    $init$Hashtable();
    if(hashtable$===undefined)hashtable$=new Hashtable.$$;
    if(initialCapacity===undefined){initialCapacity=(16);}
    hashtable$.initialCapacity_=initialCapacity;
    if(loadFactor===undefined){loadFactor=m$1.Float(0.75);}
    hashtable$.loadFactor_=loadFactor;
    if(growthFactor===undefined){growthFactor=m$1.Float(2.0);}
    hashtable$.growthFactor_=growthFactor;
    hashtable$.$prop$getInitialCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};}};
    hashtable$.$prop$getInitialCapacity.get=function(){return initialCapacity};
    hashtable$.$prop$getLoadFactor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};}};
    hashtable$.$prop$getLoadFactor.get=function(){return loadFactor};
    hashtable$.$prop$getGrowthFactor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};}};
    hashtable$.$prop$getGrowthFactor.get=function(){return growthFactor};
    m$1.asrt$(((hashtable$.initialCapacity>=0)),"initial capacity cannot be negative: \'initialCapacity>=0\' at Hashtable.ceylon (32:11-32:30)",'31:4-32:31','Hashtable.ceylon');
    m$1.asrt$(((hashtable$.initialCapacity<=m$1.getRuntime().maxArraySize)),"initial capacity too large: \'initialCapacity<=runtime.maxArraySize\' at Hashtable.ceylon (35:11-35:49)",'34:4-35:50','Hashtable.ceylon');
    m$1.asrt$((hashtable$.loadFactor.compare(m$1.Float(0.0)).equals(m$1.getLarger())),"load factor must be positive: \'loadFactor>0.0\' at Hashtable.ceylon (38:11-38:26)",'37:4-38:27','Hashtable.ceylon');
    m$1.asrt$(((hashtable$.growthFactor.compare(m$1.Float(1.0))!==m$1.getSmaller())),"growth factor must be at least 1.0: \'growthFactor>=1.0\' at Hashtable.ceylon (41:11-41:29)",'40:4-41:30','Hashtable.ceylon');
    return hashtable$;
}
Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
    if(Hashtable.$$===undefined){
        m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
        (function(hashtable$){
            m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
            m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
            m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
            hashtable$.rehash=function($uc,$ud){
                var hashtable$=this;
                return (($uc>$ud.times(hashtable$.loadFactor).integer)&&(hashtable$.capacity($uc)>$ud));
            };
            hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
            hashtable$.capacity=function($ue){
                var hashtable$=this;
                var $uf=m$1.getRuntime().maxArraySize;
                var $ug=$ue.times(hashtable$.growthFactor).integer;
                return ($uh=(($ug>$uf)?$uf:null),m$1.nn$($uh)?$uh:$ug);
                var $uh;
            };hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
        })(Hashtable.$$.prototype);
    }
    return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;
$init$Hashtable();
function Stack($$targs$$,stack$){
    m$1.set_type_args(stack$,$$targs$$,Stack);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)].rt$({t:'u',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}]}))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
    if(Stack.$$===undefined){
        m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
        (function(stack$){
            stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
        })(Stack.$$.prototype);
    }
    return Stack;
}
ex$.$init$Stack=$init$Stack;
$init$Stack();
function MutableSet($$targs$$,mutableSet$){
    m$1.Set({Element$Set:$$targs$$.Element$MutableSet},mutableSet$);
    SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet},mutableSet$);
    m$1.set_type_args(mutableSet$,$$targs$$,MutableSet);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String})),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)].rt$({t:m$1.ClassDeclaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
    if(MutableSet.$$===undefined){
        m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',$init$SetMutator(),m$1.Set);
        (function(mutableSet$){
            mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};
        })(MutableSet.$$.prototype);
    }
    return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
    m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
    m$1.set_type_args(setMutator$,$$targs$$,SetMutator);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
    if(SetMutator.$$===undefined){
        m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
        (function(setMutator$){
            setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($ui){
                var setMutator$=this;
                var $uj=false;
                function set$uj($uk){return $uj=$uk;};
                var $um;for(var $ul=$ui.iterator();($um=$ul.next())!==m$1.getFinished();){
                    if(setMutator$.add($um)){
                        $uj=true;
                    }
                }
                return $uj;
            };setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
            setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($un){
                var setMutator$=this;
                var $uo=false;
                function set$uo($up){return $uo=$up;};
                var $ur;for(var $uq=$un.iterator();($ur=$uq.next())!==m$1.getFinished();){
                    if(setMutator$.remove($ur)){
                        $uo=true;
                    }
                }
                return $uo;
            };setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
            setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};
        })(SetMutator.$$.prototype);
    }
    return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;
$init$SetMutator();
function IdentitySet($us,$ut,$$targs$$,identitySet$){
    $init$IdentitySet();
    if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
    m$1.set_type_args(identitySet$,$$targs$$);
    if($us===undefined){$us=Hashtable();}
    identitySet$.$us_=$us;
    if($ut===undefined){$ut=m$1.getEmpty();}
    identitySet$.$ut_=$ut;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$IdentitySet},identitySet$);
    m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet},identitySet$);
    identitySet$.$prop$get$ut={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};}};
    identitySet$.$prop$get$ut.get=function(){return $ut};
    identitySet$.$prop$get$us={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};}};
    identitySet$.$prop$get$us.get=function(){return $us};
    identitySet$.$uu_=elementStore(identitySet$.$us.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
    identitySet$.$prop$get$uu={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};}};
    identitySet$.$prop$get$uu.get=function(){return $uu};
    identitySet$.$uv_=(0);
    identitySet$.$prop$get$uv={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};}};
    identitySet$.$prop$get$uv.get=function(){return $uv};
    var $ux;for(var $uw=identitySet$.$ut.iterator();($ux=$uw.next())!==m$1.getFinished();){
        if(identitySet$.$uy(identitySet$.$uu,$ux)){
            ($uz=identitySet$.$uv,identitySet$.$uv=$uz.successor,$uz);
            var $uz;
        }
    }
    identitySet$.$v0();
    return identitySet$;
}
IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
    if(IdentitySet.$$===undefined){
        m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
        (function(identitySet$){
            m$1.atr$(identitySet$,'$ut',function(){return this.$ut_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
            m$1.atr$(identitySet$,'$us',function(){return this.$us_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
            m$1.atr$(identitySet$,'$uu',function(){return this.$uu_;},function($v1){return this.$uu_=$v1;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
            m$1.atr$(identitySet$,'$uv',function(){return this.$uv_;},function($v2){return this.$uv_=$v2;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
            identitySet$.$v3=function($v4,$v5){
                var identitySet$=this;
                return m$1.identityHash($v4).remainder($v5.size).magnitude;
            };
            identitySet$.$v3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
            identitySet$.$uy=function($v6,$v7){
                var identitySet$=this;
                var $v8=identitySet$.$v3($v7,$v6);
                var $v9=$v6.$_get($v8);
                function set$v9($va){return $v9=$va;};
                var $vb;
                while(m$1.nn$(($vb=$v9))){
                    if(($vb.element===$v7)){
                        ($vb.element=$v7);
                        return false;
                    }
                    $v9=$vb.rest;
                }
                $v6.set($v8,Cell($v7,$v6.$_get($v8),{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}));
                return true;
            };identitySet$.$uy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
            identitySet$.$v0=function(){
                var identitySet$=this;
                if(identitySet$.$us.rehash(identitySet$.$uv,identitySet$.$uu.size)){
                    var $vc=elementStore(identitySet$.$us.capacity(identitySet$.$uv),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
                    var $vd=(0);
                    function set$vd($ve){return $vd=$ve;};
                    while(($vd<identitySet$.$uu.size)){
                        var $vf=identitySet$.$uu.$_get($vd);
                        function set$vf($vg){return $vf=$vg;};
                        var $vh;
                        while(m$1.nn$(($vh=$vf))){
                            $vf=$vh.rest;
                            var $vi=identitySet$.$v3($vh.element,$vc);
                            var $vj=$vc.$_get($vi);
                            function set$vj($vk){return $vj=$vk;};
                            var $vl;
                            while(m$1.nn$(($vl=($vm=$vj,m$1.nn$($vm)?$vm.rest:null)))){
                                $vj=$vl;
                            }
                            var $vm;
                            ($vh.rest=$vj);
                            $vc.set($vi,$vh);
                        }
                        ($vn=$vd,$vd=$vn.successor,$vn);
                        var $vn;
                    }
                    identitySet$.$uu=$vc;
                }
            };identitySet$.$v0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
            identitySet$.add=function($vo){
                var identitySet$=this;
                if(identitySet$.$uy(identitySet$.$uu,$vo)){
                    ($vp=identitySet$.$uv,identitySet$.$uv=$vp.successor,$vp);
                    var $vp;
                    identitySet$.$v0();
                    return true;
                }
                return false;
            };identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
            identitySet$.addAll=function($vq){
                var identitySet$=this;
                var $vr=false;
                function set$vr($vs){return $vr=$vs;};
                var $vu;for(var $vt=$vq.iterator();($vu=$vt.next())!==m$1.getFinished();){
                    ($vr=$vr||identitySet$.add($vu));
                }
                if($vr){
                    identitySet$.$v0();
                }
                return $vr;
            };identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
            identitySet$.remove=function($vv){
                var identitySet$=this;
                var $vw=false;
                function set$vw($vx){return $vw=$vx;};
                var $vy=identitySet$.$v3($vv,identitySet$.$uu);
                var $vz;
                while(m$1.nn$(($vz=identitySet$.$uu.$_get($vy)))&&$vz.element.equals($vv)){
                    identitySet$.$uu.set($vy,$vz.rest);
                    ($w0=identitySet$.$uv,identitySet$.$uv=$w0.predecessor,$w0);
                    var $w0;
                    $vw=true;
                }
                var $w1=identitySet$.$uu.$_get($vy);
                function set$w1($w2){return $w1=$w2;};
                var $w3;
                while(m$1.nn$(($w3=$w1))){
                    var $w4=$w3.rest;
                    var $w5;
                    if(m$1.nn$(($w5=$w4))&&$w5.element.equals($vv)){
                        ($w3.rest=$w5.rest);
                        ($w6=identitySet$.$uv,identitySet$.$uv=$w6.predecessor,$w6);
                        var $w6;
                        $vw=true;
                    }else {
                        $w1=$w4;
                    }
                }
                return $vw;
            };identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
            identitySet$.removeAll=function($w7){
                var identitySet$=this;
                var $w8=false;
                function set$w8($w9){return $w8=$w9;};
                var $wb;for(var $wa=$w7.iterator();($wb=$wa.next())!==m$1.getFinished();){
                    if(identitySet$.remove($wb)){
                        $w8=true;
                    }
                }
                return $w8;
            };identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
            identitySet$.clear=function(){
                var identitySet$=this;
                var $wc=(0);
                function set$wc($wd){return $wc=$wd;};
                while(($wc<identitySet$.$uu.size)){
                    identitySet$.$uu.set(($we=$wc,$wc=$we.successor,$we),null);
                    var $we;
                }
                identitySet$.$uv=(0);
            };identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
            m$1.atr$(identitySet$,'size',function(){
                var identitySet$=this;
                return identitySet$.$uv;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
            identitySet$.iterator=function(){
                var identitySet$=this;
                return StoreIterator(identitySet$.$uu,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
            };identitySet$.count=function($wf){
                var identitySet$=this;
                var $wg=(0);
                function set$wg($wh){return $wg=$wh;};
                var $wi=(0);
                function set$wi($wj){return $wi=$wj;};
                while(($wi<identitySet$.$uu.size)){
                    var $wk=identitySet$.$uu.$_get($wi);
                    function set$wk($wl){return $wk=$wl;};
                    var $wm;
                    while(m$1.nn$(($wm=$wk))){
                        if($wf($wm.element)){
                            ($wn=$wg,$wg=$wn.successor,$wn);
                            var $wn;
                        }
                        $wk=$wm.rest;
                    }
                    ($wo=$wi,$wi=$wo.successor,$wo);
                    var $wo;
                }
                return $wg;
            };identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
            m$1.atr$(identitySet$,'hash',function(){
                var identitySet$=this;
                var $wp=(0);
                function set$wp($wq){return $wp=$wq;};
                $prop$get$wp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identitySet$.$prop$getHash,pa:1024,d:['ceylon.collection','IdentitySet','$at','hash','$at','index$1kfbbh']};}};
                $prop$get$wp.get=function(){return $wp};
                $prop$get$wp.set=set$wp;
                if(set$wp.$crtmm$===undefined)set$wp.$crtmm$=$prop$get$wp.$crtmm$;
                var $wr=(17);
                function set$wr($ws){return $wr=$ws;};
                $prop$get$wr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identitySet$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentitySet','$at','hash','$at','hash$3ydxbd']};}};
                $prop$get$wr.get=function(){return $wr};
                $prop$get$wr.set=set$wr;
                if(set$wr.$crtmm$===undefined)set$wr.$crtmm$=$prop$get$wr.$crtmm$;
                while(($wp<identitySet$.$uu.size)){
                    var $wt=identitySet$.$uu.$_get($wp);
                    function set$wt($wu){return $wt=$wu;};
                    $prop$get$wt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentitySet','$at','hash','$at','bucket$hhul3u']};}};
                    $prop$get$wt.get=function(){return $wt};
                    $prop$get$wt.set=set$wt;
                    if(set$wt.$crtmm$===undefined)set$wt.$crtmm$=$prop$get$wt.$crtmm$;
                    var $wv;
                    while(m$1.nn$(($wv=$wt))){
                        $wr=$wr.times(31).plus(m$1.identityHash($wv));
                        $wt=$wv.rest;
                    }
                    ($ww=$wp,$wp=$ww.successor,$ww);
                    var $ww;
                }
                return $wr;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($wx){
                var identitySet$=this;
                var $wy;
                if(m$1.is$(($wy=$wx),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&((identitySet$.size).valueOf()==($wy.size).valueOf())){
                    var $wz=(0);
                    function set$wz($x0){return $wz=$x0;};
                    while(($wz<identitySet$.$uu.size)){
                        var $x1=identitySet$.$uu.$_get($wz);
                        function set$x1($x2){return $x1=$x2;};
                        var $x3;
                        while(m$1.nn$(($x3=$x1))){
                            if(!$wy.contains($x3.element)){
                                return false;
                            }
                            $x1=$x3.rest;
                        }
                        ($x4=$wz,$wz=$x4.successor,$x4);
                        var $x4;
                    }
                    return true;
                }
                return false;
            };identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
            identitySet$.clone=function(){
                var identitySet$=this;
                var $x5=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
                ($x5.$uv=identitySet$.$uv);
                ($x5.$uu=elementStore(identitySet$.$uu.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
                var $x6=(0);
                function set$x6($x7){return $x6=$x7;};
                while(($x6<identitySet$.$uu.size)){
                    var $x8;
                    if(m$1.nn$(($x8=identitySet$.$uu.$_get($x6)))){
                        $x5.$uu.set($x6,$x8.clone());
                    }
                    ($x9=$x6,$x6=$x9.successor,$x9);
                    var $x9;
                }
                return $x5;
            };identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
            identitySet$.contains=function($xa){
                var identitySet$=this;
                var $xb;
                if(m$1.is$(($xb=$xa),{t:m$1.Identifiable})){
                    var $xc=(0);
                    function set$xc($xd){return $xc=$xd;};
                    while(($xc<identitySet$.$uu.size)){
                        var $xe=identitySet$.$uu.$_get($xc);
                        function set$xe($xf){return $xe=$xf;};
                        var $xg;
                        while(m$1.nn$(($xg=$xe))){
                            if(($xg.element===$xb)){
                                return true;
                            }
                            $xe=$xg.rest;
                        }
                        ($xh=$xc,$xc=$xh.successor,$xh);
                        var $xh;
                    }
                }
                return false;
            };identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
            identitySet$.superset=function($xi,$$$mptypes){
                var identitySet$=this;
                var $xk;for(var $xj=$xi.iterator();($xk=$xj.next())!==m$1.getFinished();){
                    if(!identitySet$.contains($xk)){
                        return false;
                    }
                }
                if(m$1.getFinished()===$xk){
                    return true;
                }
            };identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
            identitySet$.subset=function($xl,$$$mptypes){
                var identitySet$=this;
                var $xn;for(var $xm=identitySet$.iterator();($xn=$xm.next())!==m$1.getFinished();){
                    if(!$xl.contains($xn)){
                        return false;
                    }
                }
                if(m$1.getFinished()===$xn){
                    return true;
                }
            };identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
            identitySet$.complement=function($xo,$$$mptypes){
                var identitySet$=this;
                var $xp=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
                var $xr;for(var $xq=identitySet$.iterator();($xr=$xq.next())!==m$1.getFinished();){
                    if(!$xo.contains($xr)){
                        $xp.add($xr);
                    }
                }
                return $xp;
            };identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
            identitySet$.exclusiveUnion=function($xs,$$$mptypes){
                var identitySet$=this;
                var $xt=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'u',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$exclusiveUnion]}});
                var $xv;for(var $xu=identitySet$.iterator();($xv=$xu.next())!==m$1.getFinished();){
                    if(!$xs.contains($xv)){
                        $xt.add($xv);
                    }
                }
                var $xx;for(var $xw=$xs.iterator();($xx=$xw.next())!==m$1.getFinished();){
                    if(!identitySet$.contains($xx)){
                        $xt.add($xx);
                    }
                }
                return $xt;
            };identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
            identitySet$.intersection=function($xy,$$$mptypes){
                var identitySet$=this;
                var $xz=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'i',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$intersection]}});
                var $y1;for(var $y0=identitySet$.iterator();($y1=$y0.next())!==m$1.getFinished();){
                    var $y2;
                    if($xy.contains($y1)&&m$1.is$(($y2=$y1),$$$mptypes.Other$intersection)){
                        $xz.add($y2);
                    }
                }
                return $xz;
            };identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
            identitySet$.union=function($y3,$$$mptypes){
                var identitySet$=this;
                var $y4=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'u',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$union]}});
                $y4.addAll(identitySet$);
                $y4.addAll($y3);
                return $y4;
            };identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
        })(IdentitySet.$$.prototype);
    }
    return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;
$init$IdentitySet();
function StoreIterator($y5,$$targs$$,storeIterator$){
    $init$StoreIterator();
    if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
    m$1.set_type_args(storeIterator$,$$targs$$);
    storeIterator$.$y5_=$y5;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator},storeIterator$);
    storeIterator$.$y6_=(0);
    storeIterator$.$prop$get$y6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};}};
    storeIterator$.$prop$get$y6.get=function(){return $y6};
    storeIterator$.$y7_=storeIterator$.$y5.$_get(storeIterator$.$y6);
    storeIterator$.$prop$get$y7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};}};
    storeIterator$.$prop$get$y7.get=function(){return $y7};
    return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
function $init$StoreIterator(){
    if(StoreIterator.$$===undefined){
        m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
        (function(storeIterator$){
            m$1.atr$(storeIterator$,'$y6',function(){return this.$y6_;},function($y8){return this.$y6_=$y8;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
            m$1.atr$(storeIterator$,'$y7',function(){return this.$y7_;},function($y9){return this.$y7_=$y9;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
            storeIterator$.next=function(){
                var storeIterator$=this;
                if(!m$1.nn$(storeIterator$.$y7)){
                    while(((storeIterator$.$y6=storeIterator$.$y6.successor)<storeIterator$.$y5.size)){
                        storeIterator$.$y7=storeIterator$.$y5.$_get(storeIterator$.$y6);
                        if(m$1.nn$(storeIterator$.$y7)){
                            break;
                        }
                    }
                }
                var $ya;
                if(m$1.nn$(($ya=storeIterator$.$y7))){
                    var $yb=$ya.element;
                    (storeIterator$.$y7=$ya.rest);
                    return $yb;
                }
                return m$1.getFinished();
            };storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
            m$1.atr$(storeIterator$,'$y5',function(){return this.$y5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
        })(StoreIterator.$$.prototype);
    }
    return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;
$init$StoreIterator();
function TreeSet($yc,$yd,$$targs$$,treeSet$){
    $init$TreeSet();
    if(treeSet$===undefined)treeSet$=new TreeSet.$$;
    m$1.set_type_args(treeSet$,$$targs$$);
    treeSet$.$yc_=$yc;
    if($yd===undefined){$yd=m$1.getEmpty();}
    treeSet$.$yd_=$yd;
    MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
    SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
    m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Element$Ranged:$$targs$$.Element$TreeSet,Index$Ranged:$$targs$$.Element$TreeSet},treeSet$);
    treeSet$.$yc=$yc;
    treeSet$.$prop$get$yd={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},$cont:TreeSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','TreeSet','$at','elements$py9pun']};}};
    treeSet$.$prop$get$yd.get=function(){return $yd};
    treeSet$.$ye_=treeSet$.$yf();
    treeSet$.$yg_=TreeMap(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.$yd.$_map(m$1.$JsCallable((function($yh){
        return m$1.Entry($yh,treeSet$.$ye,{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}});
    }),[{nm:'e',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}),{Result$map:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}}}),{Item$TreeMap:{t:m$1.Basic},Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet});
    treeSet$.$prop$get$yg={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:{t:m$1.Basic}}},$cont:TreeSet,pa:1024,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};}};
    treeSet$.$prop$get$yg.get=function(){return $yg};
    return treeSet$;
}
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Element$Ranged:'Element$TreeSet',Index$Ranged:'Element$TreeSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see([m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)].rt$({t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
    if(TreeSet.$$===undefined){
        m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
        (function(treeSet$){
            m$1.atr$(treeSet$,'$yd',function(){return this.$yd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},$cont:TreeSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','TreeSet','$at','elements$py9pun']};});
            function $yf(){
                var $yf$=new this.$yf.$$;$yf$.outer$=this;
                return $yf$;
            };$yf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj24']};};
            function $init$present(){
                if($yf.$$===undefined){
                    m$1.initTypeProto($yf,'ceylon.collection::TreeSet.present',m$1.Basic);
                    TreeSet.$yf=$yf;
                }
                return $yf;
            }
            treeSet$.$init$present=$init$present;
            $init$present();
            m$1.atr$(treeSet$,'$ye',function(){return this.$ye_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeSet.$yf},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj23']};});
            treeSet$.$yf=$yf;treeSet$.$yf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet.$yf},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj23']};};
            m$1.atr$(treeSet$,'$yg',function(){return this.$yg_;},function($yi){return this.$yg_=$yi;},function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:{t:m$1.Basic}}},$cont:TreeSet,pa:1024,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
            treeSet$.contains=function($yj){
                var treeSet$=this;
                return treeSet$.$yg.defines($yj);
            };treeSet$.add=function($yk){
                var treeSet$=this;
                return !m$1.nn$(treeSet$.$yg.put($yk,treeSet$.$ye));
            };treeSet$.remove=function($yl){
                var treeSet$=this;
                return m$1.nn$(treeSet$.$yg.remove($yl));
            };treeSet$.clear=function(){
                var treeSet$=this;
                return treeSet$.$yg.clear();
            };treeSet$.clone=function(){
                var treeSet$=this;
                var $ym=TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),undefined,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
                ($ym.$yg=treeSet$.$yg.clone());
                return $ym;
            };treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
            treeSet$.complement=function($yn,$$$mptypes){
                var treeSet$=this;
                var $yo=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
                var $yq;for(var $yp=treeSet$.iterator();($yq=$yp.next())!==m$1.getFinished();){
                    if(!$yn.contains($yq)){
                        $yo.add($yq);
                    }
                }
                return $yo;
            };treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
            treeSet$.exclusiveUnion=function($yr,$$$mptypes){
                var treeSet$=this;
                var $ys=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$exclusiveUnion]}});
                var $yu;for(var $yt=treeSet$.iterator();($yu=$yt.next())!==m$1.getFinished();){
                    if(!$yr.contains($yu)){
                        $ys.add($yu);
                    }
                }
                var $yw;for(var $yv=$yr.iterator();($yw=$yv.next())!==m$1.getFinished();){
                    if(!treeSet$.contains($yw)){
                        $ys.add($yw);
                    }
                }
                return $ys;
            };treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
            treeSet$.intersection=function($yx,$$$mptypes){
                var treeSet$=this;
                var $yy=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'i',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$intersection]}});
                var $z0;for(var $yz=treeSet$.iterator();($z0=$yz.next())!==m$1.getFinished();){
                    var $z1;
                    if($yx.contains($z0)&&m$1.is$(($z1=$z0),$$$mptypes.Other$intersection)){
                        $yy.add($z1);
                    }
                }
                return $yy;
            };treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
            treeSet$.union=function($z2,$$$mptypes){
                var treeSet$=this;
                var $z3=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$union]}});
                $z3.addAll(treeSet$);
                $z3.addAll($z2);
                return $z3;
            };treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
            treeSet$.iterator=function(){
                var treeSet$=this;
                return treeSet$.$yg.$_map(m$1.$JsCallable((function($z4){
                    return $z4.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.$_Object}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.$_Object}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet}).iterator();
            };m$1.atr$(treeSet$,'first',function(){
                var treeSet$=this;
                return ($z5=treeSet$.$yg.first,m$1.nn$($z5)?$z5.key:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
            m$1.atr$(treeSet$,'last',function(){
                var treeSet$=this;
                return ($z6=treeSet$.$yg.last,m$1.nn$($z6)?$z6.key:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
            treeSet$.higherElements=function($z7){
                var treeSet$=this;
                return treeSet$.$yg.higherEntries($z7).$_map(m$1.$JsCallable((function($z8){
                    return $z8.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.Basic}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.lowerElements=function($z9){
                var treeSet$=this;
                return treeSet$.$yg.lowerEntries($z9).$_map(m$1.$JsCallable((function($za){
                    return $za.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.Basic}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.measure=function($zb,$zc){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.higherElements($zb).take($zc),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.span=function($zd,$ze){
                var treeSet$=this;
                var $zf;
                if(treeSet$.$yc($zd,$ze).equals(m$1.getLarger())){
                    $zf=treeSet$.lowerElements($zd).takeWhile(m$1.$JsCallable((function($zg){
                        return (!treeSet$.$yc($zg,$ze).equals(m$1.getSmaller()));
                    }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}));
                }else {
                    $zf=treeSet$.higherElements($zd).takeWhile(m$1.$JsCallable((function($zh){
                        return (!treeSet$.$yc($zh,$ze).equals(m$1.getLarger()));
                    }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}));
                }
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),$zf,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$TreeSet'},{nm:'to',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','span']};};
            treeSet$.spanFrom=function($zi){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.higherElements($zi),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.spanTo=function($zj){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$yc),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.takeWhile(m$1.$JsCallable((function($zk){
                    return (!treeSet$.$yc($zk,$zj).equals(m$1.getLarger()));
                }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.equals=function($zl){
                var treeSet$=this;
                return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(this,$zl);
            };m$1.atr$(treeSet$,'hash',function(){
                var treeSet$=this;
                return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
        })(TreeSet.$$.prototype);
    }
    return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;
$init$TreeSet();
var $z5,$z6;
function naturalOrderTreeSet($zm,$$$mptypes){
    return TreeSet(m$1.$JsCallable((function($zn,$zo){
        return $zn.compare($zo);
    }),[{nm:'x',mt:'prm',$t:'Element$naturalOrderTreeSet'},{nm:'y',mt:'prm',$t:'Element$naturalOrderTreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[$$$mptypes.Element$naturalOrderTreeSet,$$$mptypes.Element$naturalOrderTreeSet]}}),$zm,{Element$TreeSet:$$$mptypes.Element$naturalOrderTreeSet});
};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$naturalOrderTreeSet'}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
function entryStore($zp,$$$mptypes){
    return m$1.arrayOfSize($zp,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:$$$mptypes.Key$entryStore,Item$Entry:$$$mptypes.Item$entryStore}}}}]}});
};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$entryStore',Item$Entry:'Item$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
function elementStore($zq,$$$mptypes){
    return m$1.arrayOfSize($zq,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:$$$mptypes.Element$elementStore}}]}});
};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
function PriorityQueue($zr,$zs,$zt,$zu,$$targs$$,priorityQueue$){
    $init$PriorityQueue();
    if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
    m$1.set_type_args(priorityQueue$,$$targs$$);
    priorityQueue$.$zr_=$zr;
    if($zs===undefined){$zs=(0);}
    priorityQueue$.$zs_=$zs;
    if($zt===undefined){$zt=m$1.Float(1.5);}
    priorityQueue$.$zt_=$zt;
    if($zu===undefined){$zu=m$1.getEmpty();}
    priorityQueue$.$zu_=$zu;
    m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue},priorityQueue$);
    Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
    priorityQueue$.$prop$get$zs={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};}};
    priorityQueue$.$prop$get$zs.get=function(){return $zs};
    priorityQueue$.$prop$get$zt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};}};
    priorityQueue$.$prop$get$zt.get=function(){return $zt};
    priorityQueue$.$zr=$zr;
    priorityQueue$.$prop$get$zu={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};}};
    priorityQueue$.$prop$get$zu.get=function(){return $zu};
    priorityQueue$.$prop$get$zv={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};}};
    priorityQueue$.$prop$get$zv.get=function(){return $zv};
    priorityQueue$.$prop$get$zw={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};}};
    priorityQueue$.$prop$get$zw.get=function(){return $zw};
    if(priorityQueue$.$zx(priorityQueue$.$zu)){
        priorityQueue$.$zw=priorityQueue$.$zu.size;
        priorityQueue$.$zv=priorityQueue$.$zy(($zz=((priorityQueue$.$zw>priorityQueue$.$zs)?priorityQueue$.$zw:null),m$1.nn$($zz)?$zz:priorityQueue$.$zs));
        var $zz;
    }else {
        priorityQueue$.$zw=(0);
        priorityQueue$.$zv=priorityQueue$.$zy(priorityQueue$.$zs);
    }
    priorityQueue$.$100();
    priorityQueue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};}};
    priorityQueue$.$prop$getFront.get=function(){return front};
    priorityQueue$.$prop$getLast={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};}};
    priorityQueue$.$prop$getLast.get=function(){return last};
    priorityQueue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};}};
    priorityQueue$.$prop$getBack.get=function(){return back};
    return priorityQueue$;
}
PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(["Loic Rouchon"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
    if(PriorityQueue.$$===undefined){
        m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
        (function(priorityQueue$){
            m$1.atr$(priorityQueue$,'$zs',function(){return this.$zs_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
            m$1.atr$(priorityQueue$,'$zt',function(){return this.$zt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
            m$1.atr$(priorityQueue$,'$zu',function(){return this.$zu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
            priorityQueue$.$zy=function($101){
                var priorityQueue$=this;
                return m$1.arrayOfSize($101,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue]}});
            };
            priorityQueue$.$zy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
            priorityQueue$.$zx=function($102){
                var priorityQueue$=this;
                return m$1.is$($102,{t:'u',l:[{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue}}]});
            };
            priorityQueue$.$zx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
            m$1.atr$(priorityQueue$,'$zv',function(){return this.$zv_;},function($103){return this.$zv_=$103;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
            m$1.atr$(priorityQueue$,'$zw',function(){return this.$zw_;},function($104){return this.$zw_=$104;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
            priorityQueue$.$105=function($106){
                var priorityQueue$=this;
                var $107=priorityQueue$.$zw.plus($106);
                var $108=m$1.getRuntime().maxArraySize;
                if(($107>$108)){
                    throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
                }
                if(($107>priorityQueue$.$zv.size)){
                    var $109=$107.times(priorityQueue$.$zt).integer;
                    var $10a=($10b=((($109<$107)||($109>$108))?$108:null),m$1.nn$($10b)?$10b:$109);
                    var $10b;
                    var $10c=priorityQueue$.$zy($10a);
                    priorityQueue$.$zv.copyTo($10c);
                    priorityQueue$.$zv=$10c;
                }
            };priorityQueue$.$105.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
            priorityQueue$.$10d=function($10e){
                var priorityQueue$=this;
                priorityQueue$.$105(1);
                priorityQueue$.$zv.set(priorityQueue$.$zw,$10e);
                ($10f=priorityQueue$.$zw,priorityQueue$.$zw=$10f.successor,$10f);
                var $10f;
            };priorityQueue$.$10d.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
            priorityQueue$.$10g=function($10h){
                var priorityQueue$=this;
                return $10h.plus(1).divided(2).minus(1);
            };
            priorityQueue$.$10g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
            priorityQueue$.$10i=function($10j){
                var priorityQueue$=this;
                return $10j.times(2).plus(1);
            };
            priorityQueue$.$10i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
            priorityQueue$.$10k=function($10l){
                var priorityQueue$=this;
                return $10l.times(2).plus(2);
            };
            priorityQueue$.$10k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
            priorityQueue$.$10m=function($10n){
                var priorityQueue$=this;
                var $10o;
                m$1.asrt$((m$1.nn$(($10o=priorityQueue$.$zv.$_get($10n)))),"Assertion failed: \'exists element = array[index]\' at PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
                return $10o;
            };priorityQueue$.$10m.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
            priorityQueue$.$10p=function($10q,$10r){
                var priorityQueue$=this;
                return priorityQueue$.$zr(priorityQueue$.$10m($10q),priorityQueue$.$10m($10r));
            };
            priorityQueue$.$10p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
            priorityQueue$.$10s=function($10t,$10u){
                var priorityQueue$=this;
                var $10v=priorityQueue$.$zv.$_get($10t);
                priorityQueue$.$zv.set($10t,priorityQueue$.$zv.$_get($10u));
                priorityQueue$.$zv.set($10u,$10v);
            };priorityQueue$.$10s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
            priorityQueue$.$10w=function($10x){
                var priorityQueue$=this;
                if((($10x).valueOf()==(0).valueOf())){
                    return;
                }
                var $10y=priorityQueue$.$10g($10x);
                if(priorityQueue$.$10p($10x,$10y).equals(m$1.getSmaller())){
                    priorityQueue$.$10s($10x,$10y);
                    priorityQueue$.$10w($10y);
                }
            };priorityQueue$.$10w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
            priorityQueue$.$10z=function($110){
                var priorityQueue$=this;
                var $111=priorityQueue$.$10i($110);
                if(($111>=priorityQueue$.$zw)){
                    return null;
                }
                var $112=priorityQueue$.$10k($110);
                if(($112>=priorityQueue$.$zw)){
                    return $111;
                }
                var $113=priorityQueue$.$10p($111,$112);
                if($113.equals(m$1.getSmaller())){
                    return $111;
                }
                return $112;
            };priorityQueue$.$10z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
            priorityQueue$.$114=function($115){
                var priorityQueue$=this;
                var $116;
                if(m$1.nn$(($116=priorityQueue$.$10z($115)))&&priorityQueue$.$10p($116,$115).equals(m$1.getSmaller())){
                    priorityQueue$.$10s($115,$116);
                    priorityQueue$.$114($116);
                }
            };priorityQueue$.$114.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
            priorityQueue$.$100=function(){
                var priorityQueue$=this;
                if(priorityQueue$.$zx(priorityQueue$.$zu)){
                    var $117=(0);
                    function set$117($118){return $117=$118;};
                    var $11a;for(var $119=priorityQueue$.$zu.iterator();($11a=$119.next())!==m$1.getFinished();){
                        priorityQueue$.$zv.set(($11b=$117,$117=$11b.successor,$11b),$11a);
                        var $11b;
                    }
                }else {
                    var $11d;for(var $11c=priorityQueue$.$zu.iterator();($11d=$11c.next())!==m$1.getFinished();){
                        priorityQueue$.$10d($11d);
                    }
                }
                if((priorityQueue$.$zw>0)){
                    var $11f=priorityQueue$.$10g(priorityQueue$.$zw.minus(1)),$11e=(0),$11g=$11f.compare($11e),$11h=$11g===m$1.getSmaller()?'successor':'predecessor';for(var $11i=m$1.eorl$($11g);$11i($11e,$11f);$11f=$11f[$11h]){
                        priorityQueue$.$114($11f);
                    }
                }
            };priorityQueue$.$100.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
            m$1.atr$(priorityQueue$,'size',function(){
                var priorityQueue$=this;
                return priorityQueue$.$zw;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
            m$1.atr$(priorityQueue$,'front',function(){
                var priorityQueue$=this;
                return priorityQueue$.$zv.$_get(0);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
            m$1.atr$(priorityQueue$,'last',function(){
                var priorityQueue$=this;
                return priorityQueue$.$zv.$_get(priorityQueue$.$zw.minus(1));
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
            m$1.atr$(priorityQueue$,'back',function(){
                var priorityQueue$=this;
                return priorityQueue$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
            priorityQueue$.offer=function($11j){
                var priorityQueue$=this;
                priorityQueue$.$10d($11j);
                priorityQueue$.$10w(priorityQueue$.$zw.minus(1));
            };priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
            priorityQueue$.accept=function(){
                var priorityQueue$=this;
                var $11k=priorityQueue$.front;
                if((priorityQueue$.$zw>0)){
                    priorityQueue$.$zv.set(0,priorityQueue$.last);
                    priorityQueue$.$zv.set((priorityQueue$.$zw=priorityQueue$.$zw.predecessor),null);
                    priorityQueue$.$114(0);
                }
                return $11k;
            };priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
            priorityQueue$.iterator=function(){
                var priorityQueue$=this;
                if((priorityQueue$.$zw>0)){
                    var $11l=false;
                    var $11n=false;
                    var $11m=(function(){
                        function $11o($$targs$$){
                            var $11o$=new $11o.$$;$11o$.outer$=priorityQueue$;
                            $11o$.$$targs$$=$$targs$$;
                            m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue},$11o$);
                            $11o$.$11p_=(0);
                            $11o$.$prop$get$11p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$11o,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
                            $11o$.$prop$get$11p.get=function(){return $11p};
                            return $11o$;
                        };$11o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
                        function $init$$11o(){
                            if($11o.$$===undefined){
                                m$1.initTypeProto($11o,'ceylon.collection::PriorityQueue.it',m$1.Basic,m$1.Iterator);
                                (function($11o$){
                                    m$1.atr$($11o$,'$11p',function(){return this.$11p_;},function($11q){return this.$11p_=$11q;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$11o,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
                                    $11o$.next=function(){
                                        var $11o$=this;
                                        var $11r=priorityQueue$.$zv.$_get($11o$.$11p);
                                        var $11s;
                                        if(m$1.nn$(($11s=$11r))){
                                            ($11t=$11o$.$11p,$11o$.$11p=$11t.successor,$11t);
                                            var $11t;
                                            return $11s;
                                        }
                                        m$1.asrt$(((($11o$.$11p).valueOf()==(priorityQueue$.$zw).valueOf())),"Assertion failed: \'index == length\' at PriorityQueue.ceylon (208:26-208:42)",'208:20-208:43','PriorityQueue.ceylon');
                                        return m$1.getFinished();
                                    };$11o$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$11o,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
                                })($11o.$$.prototype);
                            }
                            return $11o;
                        }
                        $init$$11o();
                        var $11u;
                        function get$11u(){
                            if($11u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'200:12-212:12','PriorityQueue.ceylon');
                            if($11u===undefined){$11u=m$1.INIT$;$11u=$init$$11o()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue});$11u.$crtmm$=get$11u.$crtmm$;}
                            return $11u;
                        }
                        get$11u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$11o},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
                        $prop$get$11u={get:get$11u,$crtmm$:get$11u.$crtmm$};
                        get$11o=get$11u;$prop$get$11o=get$11u;
                        return get$11u();
                    }());if($11m!==undefined){return $11m;}
                }
                else {
                    return m$1.getEmptyIterator();
                }
            };priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
            priorityQueue$.clone=function(){
                var priorityQueue$=this;
                var $11v=($11w=m$1.JsCallable(priorityQueue$,priorityQueue$.$zr),$11x=priorityQueue$.$zw,$11y=priorityQueue$.$zt,PriorityQueue($11w,$11x,$11y,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
                var $11w,$11x,$11y;
                ($11v.$zw=priorityQueue$.$zw);
                ($11v.$zv=priorityQueue$.$zv.clone());
                return $11v;
            };priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
        })(PriorityQueue.$$.prototype);
    }
    return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;
$init$PriorityQueue();
function SingletonMap(entry,$$targs$$,singletonMap$){
    $init$SingletonMap();
    if(singletonMap$===undefined)singletonMap$=new SingletonMap.$$;
    m$1.set_type_args(singletonMap$,$$targs$$);
    singletonMap$.entry_=entry;
    m$1.Map({Key$Map:$$targs$$.Key$SingletonMap,Item$Map:$$targs$$.Item$SingletonMap},singletonMap$);
    return singletonMap$;
}
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.OpenClass$jsint(m$1.fmp$('ceylon.language','1.1.0','$'),m$1.Singleton)].rt$({t:m$1.ClassDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
ex$.SingletonMap=SingletonMap;
function $init$SingletonMap(){
    if(SingletonMap.$$===undefined){
        m$1.initTypeProto(SingletonMap,'ceylon.collection::SingletonMap',m$1.Basic,m$1.Map);
        (function(singletonMap$){
            singletonMap$.clone=function(){
                var singletonMap$=this;
                return singletonMap$;
            };singletonMap$.defines=function($11z){
                var singletonMap$=this;
                return singletonMap$.entry.key.equals($11z);
            };singletonMap$.$_get=function($120){
                var singletonMap$=this;
                if(singletonMap$.entry.key.equals($120)){
                    return singletonMap$.entry.item;
                }else {
                    return null;
                }
            };singletonMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$SingletonMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','get']};};
            singletonMap$.contains=function($121){
                var singletonMap$=this;
                return singletonMap$.entry.equals($121);
            };singletonMap$.iterator=function(){
                var singletonMap$=this;
                return m$1.Singleton(singletonMap$.entry,{Element$Singleton:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap}}}).iterator();
            };singletonMap$.equals=function($122){
                var singletonMap$=this;
                return singletonMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(this,$122);
            };m$1.atr$(singletonMap$,'hash',function(){
                var singletonMap$=this;
                return m$1.attrGetter(singletonMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$at','hash']};});
            m$1.atr$(singletonMap$,'entry',function(){return this.entry_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},$cont:SingletonMap,pa:1,d:['ceylon.collection','SingletonMap','$at','entry']};});
        })(SingletonMap.$$.prototype);
    }
    return SingletonMap;
}
ex$.$init$SingletonMap=$init$SingletonMap;
$init$SingletonMap();
function Queue($$targs$$,queue$){
    m$1.set_type_args(queue$,$$targs$$,Queue);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)].rt$({t:'u',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}]}))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
    if(Queue.$$===undefined){
        m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
        (function(queue$){
            queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
            queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
        })(Queue.$$.prototype);
    }
    return Queue;
}
ex$.$init$Queue=$init$Queue;
$init$Queue();
function IdentityMap($123,$124,$$targs$$,identityMap$){
    $init$IdentityMap();
    if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
    m$1.set_type_args(identityMap$,$$targs$$);
    if($123===undefined){$123=Hashtable();}
    identityMap$.$123_=$123;
    if($124===undefined){$124=m$1.getEmpty();}
    identityMap$.$124_=$124;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap,Item$Entry:$$targs$$.Item$IdentityMap}}},identityMap$);
    m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap,Item$Entry:$$targs$$.Item$IdentityMap}}},identityMap$);
    m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap,Key$Correspondence:$$targs$$.Key$IdentityMap},identityMap$);
    identityMap$.$prop$get$124={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};}};
    identityMap$.$prop$get$124.get=function(){return $124};
    identityMap$.$prop$get$123={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};}};
    identityMap$.$prop$get$123.get=function(){return $123};
    identityMap$.$125_=entryStore(identityMap$.$123.initialCapacity,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
    identityMap$.$prop$get$125={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};}};
    identityMap$.$prop$get$125.get=function(){return $125};
    identityMap$.$126_=(0);
    identityMap$.$prop$get$126={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};}};
    identityMap$.$prop$get$126.get=function(){return $126};
    var $128;for(var $127=identityMap$.$124.iterator();($128=$127.next())!==m$1.getFinished();){
        if(identityMap$.$129(identityMap$.$125,$128)){
            ($12a=identityMap$.$126,identityMap$.$126=$12a.successor,$12a);
            var $12a;
        }
    }
    identityMap$.$12b();
    return identityMap$;
}
IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
    if(IdentityMap.$$===undefined){
        m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
        (function(identityMap$){
            m$1.atr$(identityMap$,'$124',function(){return this.$124_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
            m$1.atr$(identityMap$,'$123',function(){return this.$123_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
            m$1.atr$(identityMap$,'$125',function(){return this.$125_;},function($12c){return this.$125_=$12c;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
            m$1.atr$(identityMap$,'$126',function(){return this.$126_;},function($12d){return this.$126_=$12d;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
            identityMap$.$12e=function($12f,$12g){
                var identityMap$=this;
                return m$1.identityHash($12f).remainder($12g.size).magnitude;
            };
            identityMap$.$12e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
            identityMap$.$129=function($12h,$12i){
                var identityMap$=this;
                var $12j=identityMap$.$12e($12i.key,$12h);
                var $12k=$12h.$_get($12j);
                function set$12k($12l){return $12k=$12l;};
                var $12m;
                while(m$1.nn$(($12m=$12k))){
                    if(($12m.element.key===$12i.key)){
                        ($12m.element=$12i);
                        return false;
                    }
                    $12k=$12m.rest;
                }
                $12h.set($12j,Cell($12i,$12h.$_get($12j),{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}));
                return true;
            };identityMap$.$129.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
            identityMap$.$12b=function(){
                var identityMap$=this;
                if(identityMap$.$123.rehash(identityMap$.$126,identityMap$.$125.size)){
                    var $12n=entryStore(identityMap$.$123.capacity(identityMap$.$126),{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
                    var $12o=(0);
                    function set$12o($12p){return $12o=$12p;};
                    while(($12o<identityMap$.$125.size)){
                        var $12q=identityMap$.$125.$_get($12o);
                        function set$12q($12r){return $12q=$12r;};
                        var $12s;
                        while(m$1.nn$(($12s=$12q))){
                            $12q=$12s.rest;
                            var $12t=identityMap$.$12e($12s.element.key,$12n);
                            var $12u=$12n.$_get($12t);
                            function set$12u($12v){return $12u=$12v;};
                            var $12w;
                            while(m$1.nn$(($12w=($12x=$12u,m$1.nn$($12x)?$12x.rest:null)))){
                                $12u=$12w;
                            }
                            var $12x;
                            ($12s.rest=$12u);
                            $12n.set($12t,$12s);
                        }
                        ($12y=$12o,$12o=$12y.successor,$12y);
                        var $12y;
                    }
                    identityMap$.$125=$12n;
                }
            };identityMap$.$12b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
            identityMap$.put=function($12z,$130){
                var identityMap$=this;
                var $131=identityMap$.$12e($12z,identityMap$.$125);
                var $132=m$1.Entry($12z,$130,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap});
                var $133=identityMap$.$125.$_get($131);
                function set$133($134){return $133=$134;};
                var $135;
                while(m$1.nn$(($135=$133))){
                    if(($135.element.key===$12z)){
                        var $136=$135.element.item;
                        ($135.element=$132);
                        return $136;
                    }
                    $133=$135.rest;
                }
                identityMap$.$125.set($131,Cell($132,identityMap$.$125.$_get($131),{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}));
                ($137=identityMap$.$126,identityMap$.$126=$137.successor,$137);
                var $137;
                identityMap$.$12b();
                return null;
            };identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
            identityMap$.putAll=function($138){
                var identityMap$=this;
                var $13a;for(var $139=$138.iterator();($13a=$139.next())!==m$1.getFinished();){
                    if(identityMap$.$129(identityMap$.$125,$13a)){
                        ($13b=identityMap$.$126,identityMap$.$126=$13b.successor,$13b);
                        var $13b;
                    }
                }
                identityMap$.$12b();
            };identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
            identityMap$.replaceEntry=function($13c,$13d,$13e){
                var identityMap$=this;
                var $13f=identityMap$.$12e($13c,identityMap$.$125);
                var $13g=identityMap$.$125.$_get($13f);
                function set$13g($13h){return $13g=$13h;};
                var $13i;
                while(m$1.nn$(($13i=$13g))){
                    if(($13i.element.key===$13c)){
                        var $13j;
                        if(m$1.nn$(($13j=$13i.element.item))&&$13j.equals($13d)){
                            ($13i.element=m$1.Entry($13c,$13e,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}));
                            return true;
                        }else {
                            return false;
                        }
                    }
                    $13g=$13i.rest;
                }
                return false;
            };identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
            identityMap$.remove=function($13k){
                var identityMap$=this;
                var $13l=identityMap$.$12e($13k,identityMap$.$125);
                var $13m;
                while(m$1.nn$(($13m=identityMap$.$125.$_get($13l)))&&$13m.element.key.equals($13k)){
                    identityMap$.$125.set($13l,$13m.rest);
                    ($13n=identityMap$.$126,identityMap$.$126=$13n.predecessor,$13n);
                    var $13n;
                    return $13m.element.item;
                }
                var $13o=identityMap$.$125.$_get($13l);
                function set$13o($13p){return $13o=$13p;};
                var $13q;
                while(m$1.nn$(($13q=$13o))){
                    var $13r=$13q.rest;
                    var $13s;
                    if(m$1.nn$(($13s=$13r))&&$13s.element.key.equals($13k)){
                        ($13q.rest=$13s.rest);
                        ($13t=identityMap$.$126,identityMap$.$126=$13t.predecessor,$13t);
                        var $13t;
                        return $13s.element.item;
                    }else {
                        $13o=$13r;
                    }
                }
                return null;
            };identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
            identityMap$.removeAll=function($13u){
                var identityMap$=this;
                var $13w;for(var $13v=$13u.iterator();($13w=$13v.next())!==m$1.getFinished();){
                    identityMap$.remove($13w);
                }
            };identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$IdentityMap'}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
            identityMap$.removeEntry=function($13x,$13y){
                var identityMap$=this;
                var $13z=identityMap$.$12e($13x,identityMap$.$125);
                var $140;
                while(m$1.nn$(($140=identityMap$.$125.$_get($13z)))&&$140.element.key.equals($13x)){
                    var $141;
                    if(m$1.nn$(($141=$140.element.item))&&$141.equals($13y)){
                        identityMap$.$125.set($13z,$140.rest);
                        ($142=identityMap$.$126,identityMap$.$126=$142.predecessor,$142);
                        var $142;
                        return true;
                    }else {
                        return false;
                    }
                }
                var $143=identityMap$.$125.$_get($13z);
                function set$143($144){return $143=$144;};
                var $145;
                while(m$1.nn$(($145=$143))){
                    var $146=$145.rest;
                    var $147;
                    if(m$1.nn$(($147=$146))&&$147.element.key.equals($13x)){
                        var $148;
                        if(m$1.nn$(($148=$147.element.item))&&$148.equals($13y)){
                            ($145.rest=$147.rest);
                            ($149=identityMap$.$126,identityMap$.$126=$149.predecessor,$149);
                            var $149;
                            return true;
                        }else {
                            return false;
                        }
                    }else {
                        $143=$146;
                    }
                }
                return false;
            };identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
            identityMap$.clear=function(){
                var identityMap$=this;
                var $14a=(0);
                function set$14a($14b){return $14a=$14b;};
                while(($14a<identityMap$.$125.size)){
                    identityMap$.$125.set(($14c=$14a,$14a=$14c.successor,$14c),null);
                    var $14c;
                }
                identityMap$.$126=(0);
            };identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
            m$1.atr$(identityMap$,'size',function(){
                var identityMap$=this;
                return identityMap$.$126;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
            identityMap$.$_get=function($14d){
                var identityMap$=this;
                if(identityMap$.empty){
                    return null;
                }
                var $14e=identityMap$.$12e($14d,identityMap$.$125);
                var $14f=identityMap$.$125.$_get($14e);
                function set$14f($14g){return $14f=$14g;};
                var $14h;
                while(m$1.nn$(($14h=$14f))){
                    if(($14h.element.key===$14d)){
                        return $14h.element.item;
                    }
                    $14f=$14h.rest;
                }
                return null;
            };identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
            identityMap$.iterator=function(){
                var identityMap$=this;
                return StoreIterator(identityMap$.$125,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}});
            };identityMap$.count=function($14i){
                var identityMap$=this;
                var $14j=(0);
                function set$14j($14k){return $14j=$14k;};
                var $14l=(0);
                function set$14l($14m){return $14l=$14m;};
                while(($14j<identityMap$.$125.size)){
                    var $14n=identityMap$.$125.$_get($14j);
                    function set$14n($14o){return $14n=$14o;};
                    var $14p;
                    while(m$1.nn$(($14p=$14n))){
                        if($14i($14p.element)){
                            ($14q=$14l,$14l=$14q.successor,$14q);
                            var $14q;
                        }
                        $14n=$14p.rest;
                    }
                    ($14r=$14j,$14j=$14r.successor,$14r);
                    var $14r;
                }
                return $14l;
            };identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
            m$1.atr$(identityMap$,'hash',function(){
                var identityMap$=this;
                var $14s=(0);
                function set$14s($14t){return $14s=$14t;};
                $prop$get$14s={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identityMap$.$prop$getHash,pa:1024,d:['ceylon.collection','IdentityMap','$at','hash','$at','index$jhy9br']};}};
                $prop$get$14s.get=function(){return $14s};
                $prop$get$14s.set=set$14s;
                if(set$14s.$crtmm$===undefined)set$14s.$crtmm$=$prop$get$14s.$crtmm$;
                var $14u=(17);
                function set$14u($14v){return $14u=$14v;};
                $prop$get$14u={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identityMap$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentityMap','$at','hash','$at','hash$lvwvbn']};}};
                $prop$get$14u.get=function(){return $14u};
                $prop$get$14u.set=set$14u;
                if(set$14u.$crtmm$===undefined)set$14u.$crtmm$=$prop$get$14u.$crtmm$;
                while(($14s<identityMap$.$125.size)){
                    var $14w=identityMap$.$125.$_get($14s);
                    function set$14w($14x){return $14w=$14x;};
                    $prop$get$14w={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]},$cont:identityMap$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentityMap','$at','hash','$at','bucket$tvfqo4']};}};
                    $prop$get$14w.get=function(){return $14w};
                    $prop$get$14w.set=set$14w;
                    if(set$14w.$crtmm$===undefined)set$14w.$crtmm$=$prop$get$14w.$crtmm$;
                    var $14y;
                    while(m$1.nn$(($14y=$14w))){
                        $14u=$14u.times(31).plus(m$1.identityHash($14y.element.key)).times(31);
                        var $14z;
                        if(m$1.nn$(($14z=$14y.element.item))){
                            ($14u=$14u.plus($14z.hash));
                        }
                        $14w=$14y.rest;
                    }
                    ($150=$14s,$14s=$150.successor,$150);
                    var $150;
                }
                return $14u;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($151){
                var identityMap$=this;
                var $152;
                if(m$1.is$(($152=$151),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&((identityMap$.size).valueOf()==($152.size).valueOf())){
                    var $153=(0);
                    function set$153($154){return $153=$154;};
                    while(($153<identityMap$.$125.size)){
                        var $155=identityMap$.$125.$_get($153);
                        function set$155($156){return $155=$156;};
                        var $157;
                        while(m$1.nn$(($157=$155))){
                            var $158=$152.$_get($157.element.key);
                            var $159;
                            if(m$1.nn$(($159=$157.element.item))){
                                var $15a;
                                if(m$1.nn$(($15a=$158))){
                                    if((!$15a.equals($159))){
                                        return false;
                                    }
                                }else {
                                    return false;
                                }
                            }else {
                                if(m$1.nn$($158)){
                                    return false;
                                }
                            }
                            $155=$157.rest;
                        }
                        ($15b=$153,$153=$15b.successor,$15b);
                        var $15b;
                    }
                    return true;
                }
                return false;
            };identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
            identityMap$.clone=function(){
                var identityMap$=this;
                var $15c=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
                ($15c.$126=identityMap$.$126);
                ($15c.$125=entryStore(identityMap$.$125.size,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap}));
                var $15d=(0);
                function set$15d($15e){return $15d=$15e;};
                while(($15d<identityMap$.$125.size)){
                    var $15f;
                    if(m$1.nn$(($15f=identityMap$.$125.$_get($15d)))){
                        $15c.$125.set($15d,$15f.clone());
                    }
                    ($15g=$15d,$15d=$15g.successor,$15g);
                    var $15g;
                }
                return $15c;
            };identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
            identityMap$.defines=function($15h){
                var identityMap$=this;
                var $15i=(0);
                function set$15i($15j){return $15i=$15j;};
                while(($15i<identityMap$.$125.size)){
                    var $15k=identityMap$.$125.$_get($15i);
                    function set$15k($15l){return $15k=$15l;};
                    var $15m;
                    while(m$1.nn$(($15m=$15k))){
                        if($15m.element.key.equals($15h)){
                            return true;
                        }
                        $15k=$15m.rest;
                    }
                    ($15n=$15i,$15i=$15n.successor,$15n);
                    var $15n;
                }
                return false;
            };identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
            identityMap$.contains=function($15o){
                var identityMap$=this;
                var $15p=(0);
                function set$15p($15q){return $15p=$15q;};
                while(($15p<identityMap$.$125.size)){
                    var $15r=identityMap$.$125.$_get($15p);
                    function set$15r($15s){return $15r=$15s;};
                    var $15t;
                    while(m$1.nn$(($15t=$15r))){
                        var $15u;
                        if(m$1.nn$(($15u=$15t.element.item))&&$15u.equals($15o)){
                            return true;
                        }
                        $15r=$15t.rest;
                    }
                    ($15v=$15p,$15p=$15v.successor,$15v);
                    var $15v;
                }
                return false;
            };identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
        })(IdentityMap.$$.prototype);
    }
    return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;
$init$IdentityMap();
function UnmodifiableMap($15w,$$targs$$,unmodifiableMap$){
    $init$UnmodifiableMap();
    if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
    m$1.set_type_args(unmodifiableMap$,$$targs$$);
    unmodifiableMap$.$15w_=$15w;
    m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
    var items=unmodifiableMap$.$15w.items;
    m$1.atr$(unmodifiableMap$,'items',function(){return items;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
    return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
function $init$UnmodifiableMap(){
    if(UnmodifiableMap.$$===undefined){
        m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
        (function(unmodifiableMap$){
            unmodifiableMap$.$_get=function($15x){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.$_get($15x);
            };unmodifiableMap$.defines=function($15y){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.defines($15y);
            };unmodifiableMap$.iterator=function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.iterator();
            };m$1.atr$(unmodifiableMap$,'size',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
            m$1.atr$(unmodifiableMap$,'keys',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.keys;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
            delete unmodifiableMap$.items;
            unmodifiableMap$.equals=function($15z){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.equals($15z);
            };m$1.atr$(unmodifiableMap$,'hash',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$15w.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
            unmodifiableMap$.clone=function(){
                var unmodifiableMap$=this;
                return UnmodifiableMap(unmodifiableMap$.$15w.clone(),{Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap});
            };m$1.atr$(unmodifiableMap$,'$15w',function(){return this.$15w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
        })(UnmodifiableMap.$$.prototype);
    }
    return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;
$init$UnmodifiableMap();
function unmodifiableMap($160,$$$mptypes){
    return UnmodifiableMap($160,{Key$UnmodifiableMap:$$$mptypes.Key$unmodifiableMap,Item$UnmodifiableMap:$$$mptypes.Item$unmodifiableMap});
};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
