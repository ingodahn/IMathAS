var noMathRender=!1;!function(){var r,w,m,g,p,t,c={translateOnLoad:!1,mathcolor:"",displaystyle:!0,showasciiformulaonhover:!0,decimalsign:".",AMdelimiter1:"`",AMescape1:"\\\\`",AMusedelimiter2:!1,AMdelimiter2:"$",AMescape2:"\\\\\\$",AMdelimiter2regexp:"\\$",AMdocumentId:"wikitext",doubleblankmathdelimiter:!1},y=0,x=1,s=2,M=3,h=4,N=5,d=6,f=7,v=8,q=9,b=10,e={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:x},u={input:"root",tag:"mroot",output:"root",tex:null,ttype:s},n={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:s},o={input:"/",tag:"mfrac",output:"/",tex:null,ttype:M},a={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:s},l={input:"_",tag:"msub",output:"_",tex:null,ttype:M},i={input:"^",tag:"msup",output:"^",tex:null,ttype:M},A={input:"text",tag:"mtext",output:"text",tex:null,ttype:b},C={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:b},E={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:b},T=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:y},{input:"beta",tag:"mi",output:"β",tex:null,ttype:y},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:y},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:y},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:y},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:y},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:y},{input:"eta",tag:"mi",output:"η",tex:null,ttype:y},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:y},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:y},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:y},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:y},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:y},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:y},{input:"lamda",tag:"mi",output:"lambda",tex:null,ttype:v},{input:"Lamda",tag:"mi",output:"Lambda",tex:null,ttype:v},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:y},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:y},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:y},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:y},{input:"phi",tag:"mi",output:"φ",tex:null,ttype:y},{input:"varphi",tag:"mi",output:"ϕ",tex:null,ttype:y},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:y},{input:"pi",tag:"mi",output:"π",tex:null,ttype:y},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:y},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:y},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:y},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:y},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:y},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:y},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:y},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:y},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:y},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:y},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:y},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:y},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:y},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:y},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:y},{input:"**",tag:"mo",output:"∗",tex:"ast",ttype:y},{input:"***",tag:"mo",output:"⋆",tex:"star",ttype:y},{input:"//",tag:"mo",output:"/",tex:"/",ttype:y,val:!0,notexcopy:!0},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:y},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:y},{input:"xx",tag:"mo",output:"×",tex:"times",ttype:y},{input:"|><",tag:"mo",output:"⋉",tex:"ltimes",ttype:y},{input:"><|",tag:"mo",output:"⋊",tex:"rtimes",ttype:y},{input:"|><|",tag:"mo",output:"⋈",tex:"bowtie",ttype:y},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:y},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:v},{input:"@",tag:"mo",output:"∘",tex:"circ",ttype:y},{input:"o+",tag:"mo",output:"⊕",tex:"oplus",ttype:y},{input:"ox",tag:"mo",output:"⊗",tex:"otimes",ttype:y},{input:"o.",tag:"mo",output:"⊙",tex:"odot",ttype:y},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:f},{input:"prod",tag:"mo",output:"∏",tex:null,ttype:f},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:y},{input:"^^^",tag:"mo",output:"⋀",tex:"bigwedge",ttype:f},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:y},{input:"vvv",tag:"mo",output:"⋁",tex:"bigvee",ttype:f},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:y},{input:"nnn",tag:"mo",output:"⋂",tex:"bigcap",ttype:f},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:y},{input:"uuu",tag:"mo",output:"⋃",tex:"bigcup",ttype:f},{input:"overset",tag:"mover",output:"stackrel",tex:null,ttype:s},{input:"underset",tag:"munder",output:"stackrel",tex:null,ttype:s},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:y},{input:":=",tag:"mo",output:":=",tex:null,ttype:y},{input:"lt",tag:"mo",output:"<",tex:null,ttype:y},{input:"gt",tag:"mo",output:">",tex:null,ttype:y},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:y},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:y},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:y},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:y},{input:"-<",tag:"mo",output:"≺",tex:"prec",ttype:y},{input:"-lt",tag:"mo",output:"≺",tex:null,ttype:y},{input:">-",tag:"mo",output:"≻",tex:"succ",ttype:y},{input:"-<=",tag:"mo",output:"⪯",tex:"preceq",ttype:y},{input:">-=",tag:"mo",output:"⪰",tex:"succeq",ttype:y},{input:"in",tag:"mo",output:"∈",tex:null,ttype:y},{input:"!in",tag:"mo",output:"∉",tex:"notin",ttype:y},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:y},{input:"sup",tag:"mo",output:"⊃",tex:"supset",ttype:y},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:y},{input:"supe",tag:"mo",output:"⊇",tex:"supseteq",ttype:y},{input:"-=",tag:"mo",output:"≡",tex:"equiv",ttype:y},{input:"~=",tag:"mo",output:"≅",tex:"stackrel{\\sim}{=}",notexcopy:!0,ttype:y},{input:"cong",tag:"mo",output:"~=",tex:null,ttype:v},{input:"~~",tag:"mo",output:"≈",tex:"approx",ttype:y},{input:"~",tag:"mo",output:"~",tex:"sim",ttype:y},{input:"prop",tag:"mo",output:"∝",tex:"propto",ttype:y},{input:"and",tag:"mtext",output:"and",tex:null,ttype:d},{input:"or",tag:"mtext",output:"or",tex:null,ttype:d},{input:"not",tag:"mo",output:"¬",tex:"neg",ttype:y},{input:"=>",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:y},{input:"implies",tag:"mo",output:"=>",tex:null,ttype:v},{input:"if",tag:"mo",output:"if",tex:null,ttype:d},{input:"<=>",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:y},{input:"iff",tag:"mo",output:"<=>",tex:null,ttype:v},{input:"AA",tag:"mo",output:"∀",tex:"forall",ttype:y},{input:"EE",tag:"mo",output:"∃",tex:"exists",ttype:y},{input:"_|_",tag:"mo",output:"⊥",tex:"bot",ttype:y},{input:"TT",tag:"mo",output:"⊤",tex:"top",ttype:y},{input:"|--",tag:"mo",output:"⊢",tex:"vdash",ttype:y},{input:"|==",tag:"mo",output:"⊨",tex:"models",ttype:y},{input:"(",tag:"mo",output:"(",tex:null,ttype:h,val:!0},{input:")",tag:"mo",output:")",tex:null,ttype:N,val:!0},{input:"[",tag:"mo",output:"[",tex:null,ttype:h,val:!0},{input:"]",tag:"mo",output:"]",tex:null,ttype:N,val:!0},{input:"left(",tag:"mo",output:"(",tex:"(",notexcopy:!0,ttype:h,val:!0},{input:"right)",tag:"mo",output:")",tex:")",notexcopy:!0,ttype:N,val:!0},{input:"left[",tag:"mo",output:"[",tex:"[",notexcopy:!0,ttype:h,val:!0},{input:"right]",tag:"mo",output:"]",tex:"]",notexcopy:!0,ttype:N,val:!0},{input:"{",tag:"mo",output:"{",tex:"lbrace",ttype:h},{input:"}",tag:"mo",output:"}",tex:"rbrace",ttype:N},{input:"|",tag:"mo",output:"|",tex:null,ttype:q,val:!0},{input:"|:",tag:"mo",output:"|",tex:"|",ttype:h,notexcopy:!0,val:!0},{input:":|",tag:"mo",output:"|",tex:"|",ttype:N,notexcopy:!0,val:!0},{input:":|:",tag:"mo",output:"|",tex:"|",ttype:y,notexcopy:!0,val:!0},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:N},{input:"<<",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:">>",tag:"mo",output:"〉",tex:"rangle",ttype:N},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:h,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:N,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:y},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:v},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:v},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:v},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:v},{input:"oint",tag:"mo",output:"∮",tex:null,ttype:y},{input:"del",tag:"mo",output:"∂",tex:"partial",ttype:y},{input:"grad",tag:"mo",output:"∇",tex:"nabla",ttype:y},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:y},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:y},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:y},{input:"aleph",tag:"mo",output:"ℵ",tex:null,ttype:y},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:y},{input:":.",tag:"mo",output:"∴",tex:"therefore",ttype:y},{input:":'",tag:"mo",output:"∵",tex:"because",ttype:y},{input:"/_",tag:"mo",output:"∠",tex:"angle",ttype:y},{input:"/_\\",tag:"mo",output:"△",tex:"triangle",ttype:y},{input:"^prime",tag:"mi",output:"'",tex:null,ttype:v},{input:"^\\prime",tag:"mi",output:"'",tex:null,ttype:v},{input:"prime",tag:"mi",output:"'",tex:null,ttype:v},{input:"\\ ",tag:"mo",output:" ",tex:null,ttype:y,val:!0},{input:"frown",tag:"mo",output:"⌢",tex:null,ttype:y},{input:"%",tag:"mo",output:"%",tex:"%",ttype:y,notexcopy:!0},{input:"quad",tag:"mo",output:"  ",tex:null,ttype:y},{input:"qquad",tag:"mo",output:"    ",tex:null,ttype:y},{input:"cdots",tag:"mo",output:"⋯",tex:null,ttype:y},{input:"vdots",tag:"mo",output:"⋮",tex:null,ttype:y},{input:"ddots",tag:"mo",output:"⋱",tex:null,ttype:y},{input:"diamond",tag:"mo",output:"⋄",tex:null,ttype:y},{input:"square",tag:"mo",output:"□",tex:"boxempty",ttype:y},{input:"|__",tag:"mo",output:"⌊",tex:"lfloor",ttype:y},{input:"__|",tag:"mo",output:"⌋",tex:"rfloor",ttype:y},{input:"|~",tag:"mo",output:"⌈",tex:"lceil",ttype:y},{input:"lceiling",tag:"mo",output:"|~",tex:null,ttype:v},{input:"~|",tag:"mo",output:"⌉",tex:"rceil",ttype:y},{input:"rceiling",tag:"mo",output:"~|",tex:null,ttype:v},{input:"CC",tag:"mo",output:"ℂ",tex:"mathbb{C}",ttype:y,notexcopy:!0},{input:"NN",tag:"mo",output:"ℕ",tex:"mathbb{N}",ttype:y,notexcopy:!0},{input:"QQ",tag:"mo",output:"ℚ",tex:"mathbb{Q}",ttype:y,notexcopy:!0},{input:"RR",tag:"mo",output:"ℝ",tex:"mathbb{R}",ttype:y,notexcopy:!0},{input:"ZZ",tag:"mo",output:"ℤ",tex:"mathbb{Z}",ttype:y,notexcopy:!0},{input:"f",tag:"mi",output:"f",tex:null,ttype:x,func:!0,val:!0},{input:"g",tag:"mi",output:"g",tex:null,ttype:x,func:!0,val:!0},{input:"''",tag:"mo",output:"''",tex:null,val:!0},{input:"'''",tag:"mo",output:"'''",tex:null,val:!0},{input:"''''",tag:"mo",output:"''''",tex:null,val:!0},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:f},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:f},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:x,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:x,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:x,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:x,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:x,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:x,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:x,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:x,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:x,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:x,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:x,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:x,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:x,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:x,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:x,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:x,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:x,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:x,notexcopy:!0,rewriteleftright:["|","|"]},{input:"norm",tag:"mo",output:"norm",tex:null,ttype:x,notexcopy:!0,rewriteleftright:["\\|","\\|"]},{input:"floor",tag:"mo",output:"floor",tex:null,ttype:x,notexcopy:!0,rewriteleftright:["\\lfloor","\\rfloor"]},{input:"ceil",tag:"mo",output:"ceil",tex:null,ttype:x,notexcopy:!0,rewriteleftright:["\\lceil","\\rceil"]},{input:"Sin",tag:"mo",output:"Sin",tex:null,ttype:x,func:!0},{input:"Cos",tag:"mo",output:"Cos",tex:null,ttype:x,func:!0},{input:"Tan",tag:"mo",output:"Tan",tex:null,ttype:x,func:!0},{input:"Arcsin",tag:"mo",output:"Arcsin",tex:null,ttype:x,func:!0},{input:"Arccos",tag:"mo",output:"Arccos",tex:null,ttype:x,func:!0},{input:"Arctan",tag:"mo",output:"Arctan",tex:null,ttype:x,func:!0},{input:"Sinh",tag:"mo",output:"Sinh",tex:null,ttype:x,func:!0},{input:"Cosh",tag:"mo",output:"Cosh",tex:null,ttype:x,func:!0},{input:"Tanh",tag:"mo",output:"Tanh",tex:null,ttype:x,func:!0},{input:"Cot",tag:"mo",output:"Cot",tex:null,ttype:x,func:!0},{input:"Sec",tag:"mo",output:"Sec",tex:null,ttype:x,func:!0},{input:"Csc",tag:"mo",output:"Csc",tex:null,ttype:x,func:!0},{input:"Log",tag:"mo",output:"Log",tex:null,ttype:x,func:!0},{input:"Ln",tag:"mo",output:"Ln",tex:null,ttype:x,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:x,notexcopy:!0,rewriteleftright:["|","|"]},{input:"det",tag:"mo",output:"det",tex:null,ttype:x,func:!0},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:x,func:!0},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:y},{input:"mod",tag:"mo",output:"mod",tex:"text{mod}",ttype:y,notexcopy:!0},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:x,func:!0},{input:"lcm",tag:"mo",output:"lcm",tex:"text{lcm}",ttype:x,func:!0,notexcopy:!0},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:y},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:y},{input:"min",tag:"mo",output:"min",tex:null,ttype:f},{input:"max",tag:"mo",output:"max",tex:null,ttype:f},{input:"uarr",tag:"mo",output:"↑",tex:"uparrow",ttype:y},{input:"darr",tag:"mo",output:"↓",tex:"downarrow",ttype:y},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:y},{input:"->",tag:"mo",output:"→",tex:"to",ttype:y},{input:">->",tag:"mo",output:"↣",tex:"rightarrowtail",ttype:y},{input:"->>",tag:"mo",output:"↠",tex:"twoheadrightarrow",ttype:y},{input:">->>",tag:"mo",output:"⤖",tex:"twoheadrightarrowtail",ttype:y},{input:"|->",tag:"mo",output:"↦",tex:"mapsto",ttype:y},{input:"larr",tag:"mo",output:"←",tex:"leftarrow",ttype:y},{input:"harr",tag:"mo",output:"↔",tex:"leftrightarrow",ttype:y},{input:"rArr",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:y},{input:"lArr",tag:"mo",output:"⇐",tex:"Leftarrow",ttype:y},{input:"hArr",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:y},e,u,n,o,a,l,i,{input:"cancel",tag:"menclose",output:"cancel",tex:null,ttype:x},{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:x},{input:"hat",tag:"mover",output:"^",tex:null,ttype:x,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:x,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:x,acc:!0},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:x,acc:!0},{input:"dot",tag:"mover",output:".",tex:null,ttype:x,acc:!0},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:x,acc:!0},{input:"overarc",tag:"mover",output:"⏜",tex:"stackrel{\\frown}",notexcopy:!0,ttype:x,acc:!0},{input:"overparen",tag:"mover",output:"⏜",tex:"stackrel{\\frown}",notexcopy:!0,ttype:x,acc:!0},{input:"ul",tag:"munder",output:"̲",tex:"underline",ttype:x,acc:!0},{input:"ubrace",tag:"munder",output:"⏟",tex:"underbrace",ttype:x,acc:!0},{input:"obrace",tag:"mover",output:"⏞",tex:"overbrace",ttype:x,acc:!0},A,C,E,{input:"color",tag:"mstyle",ttype:s},{input:"bb",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"bb",tex:"mathbf",ttype:x,notexcopy:!0},{input:"mathbf",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"mathbf",tex:null,ttype:x},{input:"sf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"sf",tex:"mathsf",ttype:x,notexcopy:!0},{input:"mathsf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"mathsf",tex:null,ttype:x},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:"mathbb",ttype:x,notexcopy:!0},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:x},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:"mathcal",ttype:x,notexcopy:!0},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:x},{input:"tt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"tt",tex:"mathtt",ttype:x,notexcopy:!0},{input:"mathtt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"mathtt",tex:null,ttype:x},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:"mathfrak",ttype:x,notexcopy:!0},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:x}];function k(t,e){return t.input>e.input?1:-1}function L(){var t;for(T.sort(k),t=0;t<T.length;t++)r[t]=T[t].input}function _(t,e){var u,p;for(u="\\"==t.charAt(e)&&"\\"!=t.charAt(e+1)&&" "!=t.charAt(e+1)?t.slice(e+1):t.slice(e),p=0;p<u.length&&u.charCodeAt(p)<=32;p+=1);return u.slice(p)}function R(t,e,u){var p,n,o;if(0==u){for(u=-1,p=t.length;u+1<p;)t[n=u+p>>1]<e?u=n:p=n;return p}for(o=u;o<t.length&&t[o]<e;o++);return o}function O(t){var e,u,p,n,o,a=0,l="",i=!0;for(n=1;n<=t.length&&i;n++)u=t.slice(0,n),(a=R(r,u,a))<r.length&&t.slice(0,r[a].length)==r[a]&&(n=(l=r[e=a]).length),i=a<r.length&&t.slice(0,r[a].length)>=r[a];if(m=g,""!=l)return g=T[e].ttype,T[e];if(g=y,a=1,"$"==(u=t.slice(0,1))&&1<t.length&&t.slice(1,2).match(/[a-zA-Z]/)){for(;a<=t.length&&t.slice(a,a+1).match(/[a-zA-Z0-9_]/);)a++;return"-"==(u=t.slice(0,a))&&m==M?(g=M,{input:u,tag:"mo",output:u,ttype:x,func:!0,val:!0}):{input:u,tag:"mo",output:u,ttype:y,val:!0}}for(o=!0;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;if(u==c.decimalsign&&"0"<=(u=t.slice(a,a+1))&&u<="9")for(o=!1,a++;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;return p=o&&1<a||2<a?(u=t.slice(0,a-1),"mn"):(a=2,((u=t.slice(0,1))<"A"||"Z"<u)&&(u<"a"||"z"<u)?"mo":"mi"),"-"==u&&m==M?(g=M,{input:u,tag:p,output:u,ttype:x,func:!0,val:!0}):{input:u,tag:p,output:u,ttype:y,val:!0}}function S(t){var e,u;return"{"==t.charAt(0)&&"}"==t.charAt(t.length-1)&&(u=0,"\\left"==(e=t.substr(1,5))?"("==(e=t.charAt(6))||"["==e||"{"==e?u=7:"\\lbrace"==(e=t.substr(6,7))&&(u=13):"("!=(e=t.charAt(1))&&"["!=e||(u=2),0<u&&("\\right)}"==(e=t.substr(t.length-8))||"\\right]}"==e||"\\right.}"==e?t=(t="{"+t.substr(u)).substr(0,t.length-8)+"}":"\\rbrace}"==e&&(t=(t="{"+t.substr(u)).substr(0,t.length-14)+"}"))),t}function z(t){return pre="boolean"==typeof t.val&&t.val?"":"\\",null==t.tex?pre+t.input:pre+t.tex}function Z(t){var e,u,p,n,o,a,l,i="";if(null==(e=O(t=_(t,0)))||e.ttype==N&&0<w)return[null,t];switch(e.ttype==v&&(e=O(t=e.output+_(t,e.input.length))),e.ttype){case f:case y:return t=_(t,e.input.length),"\\"==(o=z(e)).charAt(0)||"mo"==e.tag?[o,t]:["{"+o+"}",t];case h:return w++,u=I(t=_(t,e.input.length),!0),w--,"\\right"==u[a=0].substr(0,6)&&(")"==(n=u[0].charAt(6))||"]"==n||"}"==n?a=6:"."==n?a=7:"\\rbrace"==(n=u[0].substr(6,7))&&(a=13)),[0<a?(u[0]=u[0].substr(a),"boolean"==typeof e.invisible&&e.invisible?"{"+u[0]+"}":"{"+z(e)+u[0]+"}"):"boolean"==typeof e.invisible&&e.invisible?"{\\left."+u[0]+"}":"{\\left"+z(e)+u[0]+"}",u[1]];case b:return e!=E&&(t=_(t,e.input.length)),-1==(p="{"==t.charAt(0)?t.indexOf("}"):"("==t.charAt(0)?t.indexOf(")"):"["==t.charAt(0)?t.indexOf("]"):e==E?t.slice(1).indexOf('"')+1:0)&&(p=t.length)," "==(n=t.slice(1,p)).charAt(0)&&(i="\\ "),i+="\\text{"+n+"}"," "==n.charAt(n.length-1)&&(i+="\\ "),[i,t=_(t,p+1)];case x:return null==(u=Z(t=_(t,e.input.length)))[0]?["{"+z(e)+"}",t]:"boolean"==typeof e.func&&e.func?"^"==(n=t.charAt(0))||"_"==n||"/"==n||"|"==n||","==n||1==e.input.length&&e.input.match(/\w/)&&"("!=n?["{"+z(e)+"}",t]:["{"+z(e)+"{"+u[0]+"}}",u[1]]:(u[0]=S(u[0]),"sqrt"==e.input?["\\sqrt{"+u[0]+"}",u[1]]:"cancel"==e.input?["\\cancel{"+u[0]+"}",u[1]]:void 0!==e.rewriteleftright?["{\\left"+e.rewriteleftright[0]+u[0]+"\\right"+e.rewriteleftright[1]+"}",u[1]]:"boolean"==typeof e.acc&&e.acc?[z(e)+"{"+u[0]+"}",u[1]]:["{"+z(e)+"{"+u[0]+"}}",u[1]]);case s:return null==(u=Z(t=_(t,e.input.length)))[0]?["{"+z(e)+"}",t]:(u[0]=S(u[0]),null==(l=Z(u[1]))[0]?["{"+z(e)+"}",t]:(l[0]=S(l[0]),[i="color"==e.input?"{\\color{"+u[0].replace(/[\{\}]/g,"")+"}"+l[0]+"}":"root"==e.input?"{\\sqrt["+u[0]+"]{"+l[0]+"}}":"{"+z(e)+"{"+u[0]+"}{"+l[0]+"}}",l[1]]));case M:return t=_(t,e.input.length),[e.output,t];case d:return t=_(t,e.input.length),["{\\quad\\text{"+e.input+"}\\quad}",t];case q:return w++,u=I(t=_(t,e.input.length),!1),w--,n="","|"==(n=u[0].charAt(u[0].length-1))&&","!==t.charAt(0)?["{\\left|"+u[0]+"}",u[1]]:["{\\mid}",t];default:return t=_(t,e.input.length),["{"+z(e)+"}",t]}}function $(t){var e,u,p,n,o,a;return u=O(t=_(t,0)),n=(o=Z(t))[0],(e=O(t=o[1])).ttype==M&&"/"!=e.input&&(null==(o=Z(t=_(t,e.input.length)))[0]?o[0]="{}":o[0]=S(o[0]),t=o[1],"_"==e.input?"^"==(p=O(t)).input?((a=Z(t=_(t,p.input.length)))[0]=S(a[0]),t=a[1],n="{"+n,n+="_{"+o[0]+"}",n+="^{"+a[0]+"}",n+="}"):n+="_{"+o[0]+"}":n=n+"^{"+o[0]+"}",void 0!==u.func&&u.func&&(p=O(t)).ttype!=M&&p.ttype!=N&&(1<u.input.length||p.ttype==h)&&(n="{"+n+(o=$(t))[0]+"}",t=o[1])),[n,t]}function I(t,e){for(var u,p,n,o,a,l,i,r,m,g,c,y,x,s,h,d,f,v,b="",A=!1;p=(n=$(t=_(t,0)))[0],(u=O(t=n[1])).ttype==M&&"/"==u.input?(null==(n=$(t=_(t,u.input.length)))[0]?n[0]="{}":n[0]=S(n[0]),t=n[1],p="\\frac{"+(p=S(p))+"}",b+=p+="{"+n[0]+"}",u=O(t)):null!=p&&(b+=p),(u.ttype!=N&&(u.ttype!=q||e)||0==w)&&null!=u&&""!=u.output;);if(u.ttype==N||u.ttype==q){if(2<(a=b.length)&&"{"==b.charAt(0)&&0<b.indexOf(",")&&(")"==(l=b.charAt(a-2))||"]"==l)&&("("==(i=b.charAt(6))&&")"==l&&"}"!=u.output||"["==i&&"]"==l)){for(r="",(m=new Array).push(0),g=!0,(y=[])[c=0]=[0],s=x=0,h="",o=1;o<a-1;o++)b.charAt(o)==i&&c++,b.charAt(o)==l&&0==--c&&","==b.charAt(o+2)&&"{"==b.charAt(o+3)&&(m.push(o+2),y[x=o+2]=[o+2]),"["!=b.charAt(o)&&"("!=b.charAt(o)&&"{"!=b.charAt(o)||s++,"]"!=b.charAt(o)&&")"!=b.charAt(o)&&"}"!=b.charAt(o)||s--,","==b.charAt(o)&&1==s&&y[x].push(o),s<0&&(x==o+1?o++:g=!1);if(m.push(a),d=-1,0==c&&0<m.length&&g)for(o=0;o<m.length-1;o++){if(0<o&&(r+="\\\\"),0==o)if(1==y[m[o]].length)f=[b.substr(m[o]+7,m[o+1]-m[o]-15)];else{for(f=[b.substring(m[o]+7,y[m[o]][1])],v=2;v<y[m[o]].length;v++)f.push(b.substring(y[m[o]][v-1]+1,y[m[o]][v]));f.push(b.substring(y[m[o]][y[m[o]].length-1]+1,m[o+1]-8))}else if(1==y[m[o]].length)f=[b.substr(m[o]+8,m[o+1]-m[o]-16)];else{for(f=[b.substring(m[o]+8,y[m[o]][1])],v=2;v<y[m[o]].length;v++)f.push(b.substring(y[m[o]][v-1]+1,y[m[o]][v]));f.push(b.substring(y[m[o]][y[m[o]].length-1]+1,m[o+1]-8))}for(v=f.length-1;0<=v;v--)"{\\mid}"==f[v]?(0==o&&(h="|"+h),f.splice(v,1)):0==o&&(h="c"+h);0<d&&f.length!=d?g=!1:-1==d&&(d=f.length),r+=f.join("&")}r="\\begin{array}{"+h+"} "+r+"\\end{array}",g&&(b=r)}t=_(t,u.input.length),A=("boolean"==typeof u.invisible&&u.invisible?b+="\\right.":b+=p="\\right"+z(u),!0)}return 0<w&&!A&&(b+="\\right."),[b,t]}function P(t){return w=0,null==(t=(t=(t=t.replace(/(&nbsp;|\u00a0|&#160;)/g,"")).replace(/&gt;/g,">")).replace(/&lt;/g,"<")).match(/\S/)?"":I(t.replace(/^\s+/g,""),!1)[0]}function B(t){var e,u,p;return null==(t=(t=(t=t.replace(/(&nbsp;|\u00a0|&#160;)/g,"")).replace(/&gt;/g,">")).replace(/&lt;/g,"<")).match(/\S/)?document.createTextNode(" "):(e=P(t),"undefined"!=typeof mathbg&&"dark"==mathbg&&(e="\\reverse "+e),""!=c.mathcolor&&(e="\\"+c.mathcolor+e),e=(e=c.displaystyle?"\\displaystyle"+e:"\\textstyle"+e).replace(/\$/g,"\\$"),u=document.createElement("img"),e=("function"==typeof encodeURIComponent?encodeURIComponent:escape)(e),u.src=AMTcgiloc+"?"+e,u.style.verticalAlign="middle",c.showasciiformulaonhover&&u.setAttribute("title",t.replace(/\s+/g," ")),(p=document.createElement("span")).appendChild(u),p)}function Q(t,e){var u,p,n,o,a,l;if(0==t.childNodes.length){if(8==t.nodeType&&!e||"form"==t.parentNode.nodeName||"FORM"==t.parentNode.nodeName||"textarea"==t.parentNode.nodeName||"TEXTAREA"==t.parentNode.nodeName||"pre"==t.parentNode.nodeName||"PRE"==t.parentNode.nodeName)return 0;if(null!=(p=t.nodeValue)){for(p=p.replace(/\r\n\r\n/g,"\n\n"),c.doubleblankmathdelimiter&&(p=(p=(p=p.replace(/\x20\x20\./g," "+c.AMdelimiter1+".")).replace(/\x20\x20,/g," "+c.AMdelimiter1+",")).replace(/\x20\x20/g," "+c.AMdelimiter1+" ")),p=(p=p.replace(/\x20+/g," ")).replace(/\s*\r\n/g," "),u=!1,c.AMusedelimiter2&&(p=p.replace(new RegExp(c.AMescape2,"g"),function(t){return u=!0,"AMescape2"})),p=p.replace(new RegExp(c.AMescape1,"g"),function(t){return u=!0,"AMescape1"}),c.AMusedelimiter2&&(p=p.replace(new RegExp(c.AMdelimiter2regexp,"g"),c.AMdelimiter1)),n=p.split(c.AMdelimiter1),a=0;a<n.length;a++)c.AMusedelimiter2?n[a]=n[a].replace(/AMescape2/g,c.AMdelimiter2).replace(/AMescape1/g,c.AMdelimiter1):n[a]=n[a].replace(/AMescape1/g,c.AMdelimiter1);if(1<n.length||u)return l=(o=function(t,e){var u,p,n,o=document.createDocumentFragment(),a=!1;for(u=0;u<t.length;u++){if(a)o.appendChild(B(t[u]));else for(p=e?t[u].split("\n\n"):[t[u]],o.appendChild(document.createElement("span").appendChild(document.createTextNode(p[0]))),n=1;n<p.length;n++)o.appendChild(document.createElement("p")),o.appendChild(document.createElement("span").appendChild(document.createTextNode(p[n])));a=!a}return o}(n,8==t.nodeType)).childNodes.length,t.parentNode.replaceChild(o,t),l-1}}else if("math"!=t.nodeName)for(a=0;a<t.childNodes.length;a++)a+=Q(t.childNodes[a],e);return 0}function X(t,e,u){var p,n,o;if(null!=u)for(p=document.getElementsByTagName("span"),o=0;o<p.length;o++)"AM"==p[o].className&&Q(p[o],e);else{try{n=t.innerHTML}catch(t){}null!=n&&-1==n.indexOf(c.AMdelimiter1)||Q(t,e)}}function D(t){var e,u;p||(p=!0,e=document.getElementsByTagName("body")[0],X(null!=(u=document.getElementById(c.AMdocumentId))?u:e,!1,t))}function F(){c.translateOnLoad&&D()}p=!(r=[]),function(){var t,e=T.length;for(t=0;t<e;t++)!T[t].tex||"boolean"==typeof T[t].notexcopy&&T[t].notexcopy||T.push({input:T[t].tex,tag:T[t].tag,output:T[t].output,ttype:T[t].ttype,acc:T[t].acc||!1});L()}(),window.translate=D,window.AMTconfig=c,window.AMprocessNode=X,window.AMparseMath=B,window.AMTparseMath=B,window.AMTparseAMtoTeX=P,void 0!==window.addEventListener?window.addEventListener("load",F,!1):void 0!==document.addEventListener?document.addEventListener("load",F,!1):void 0!==window.attachEvent?window.attachEvent("onload",F):"function"==typeof window.onload?(t=onload,window.onload=function(){t(),F()}):window.onload=F}();
