var MQ,myMQeditor=function(b){var o={tabs:[{p:"Basic",enabled:!0,tabcontent:[{flow:"row",s:2,contents:[{l:"\\left(\\right)",c:"i",w:"()",pr:'<span class="mq-non-leaf"><span class="mq-scaled mq-paren" style="transform: scale(1, 1.2);">(</span><span class="mq-non-leaf mq-empty"></span><span class="mq-scaled mq-paren" style="transform: scale(1, 1.2);">)</span></span>'},{l:"x^{}",c:"t",w:"^",nb:1,pr:'<var>x</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup mq-empty"></span></span>'},{l:"\\pi",nb:1,pr:'<span class="mq-nonSymbola">π</span>'},{l:"\\sqrt{}",c:"c",w:"sqrt",nb:1,pr:'<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix" style="transform: scale(1, 0.955556);">√</span><span class="mq-non-leaf mq-sqrt-stem mq-empty"></span></span>'},{l:"\\infty",pr:"<span>∞</span>"},{l:"\\sqrt[n]{}",c:"c",w:"nthroot",nb:1,pr:'<sup class="mq-nthroot mq-non-leaf"><var>n</var></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled" style="transform: scale(1, 0.955556);">√</span><span class="mq-sqrt-stem mq-non-leaf mq-empty"></span></span>'},{p:"DNE",sm:2},{l:"\\left|\\right|",c:"i",w:"||"}]},{s:.1},{flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{l:"\\frac{}{}",c:"t",w:"/",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator mq-empty"></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{b:"4"},{b:"5"},{b:"6"},{b:"*"},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},{b:"."},{s:1},{b:"+"}]},{s:.1},{flow:"row",s:2,contents:[{s:.5},{b:"&uarr;",c:"k",w:"Up"},{s:.5},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"},{s:.5},{b:"&darr;",c:"k",w:"Down"},{s:.5},{b:"&#x232B;",s:2,c:"k",w:"Backspace"}]}]},{p:"Funcs",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\log",c:"f",op:1},{l:"\\ln",c:"f",op:1},{l:"\\log_{}",c:"f",pr:'<var class="mq-operator-name">log</var><span class="mq-supsub mq-non-leaf"><span class="mq-sub mq-empty"></span></span>'},{l:"e^{}",c:"t",w:"e^",pr:'<var>e</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup mq-empty"></span></span>'}]}]},{p:"Trig",enabled:!1,tabcontent:[{flow:"row",s:6,contents:[{l:"\\sin",c:"f",op:1},{l:"\\cos",c:"f",op:1},{l:"\\tan",c:"f",op:1},{l:"\\sec",c:"f",op:1},{l:"\\csc",c:"f",op:1},{l:"\\cot",c:"f",op:1},{l:"\\sin^{-1}",c:"f",pr:'<var class="mq-operator-name">sin</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\cos^{-1}",c:"f",pr:'<var class="mq-operator-name">cos</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\tan^{-1}",c:"f",pr:'<var class="mq-operator-name">tan</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\sinh",c:"f",op:1},{l:"\\cosh",c:"f",op:1},{l:"\\tanh",c:"f",op:1},{l:"\\pi",nb:1,pr:'<span class="mq-nonSymbola">π</span>'},{s:1},{s:4}]}]},{p:"Inequality",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\lt",pr:'<span class="mq-binary-operator">&lt;</span>'},{l:"\\gt",pr:'<span class="mq-binary-operator">&gt;</span>'},{l:"\\le",pr:'<span class="mq-binary-operator">&le;</span>'},{l:"\\ge",pr:'<span class="mq-binary-operator">&ge;</span>'},{p:"or",c:"w",w:"\\text{ or }"},{p:"DNE",sm:2},{p:"all reals",c:"w",w:"\\text{all reals}",s:2}]}]},{p:"Interval",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left[\\right]",c:"i",w:"[]"},{l:"\\left(\\right]",c:"i",w:"(]"},{l:"\\left[\\right)",c:"i",w:"[)"},{l:"\\infty",pr:"<span>∞</span>"},{l:"-\\infty",c:"w",w:"-\\infty",pr:"<span>−∞</span>"},{l:"\\cup",pr:'<span class="mq-binary-operator">∪</span>'},{s:1}]}]},{p:"Matrix",sm:1,enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{p:"2×2",c:"w",w:"\\begin{bmatrix}&\\\\&\\end{bmatrix}"},{p:"2×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\end{bmatrix}"},{p:"3×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}"},{p:"3×4",c:"w",w:"\\begin{bmatrix}&&&\\\\&&&\\\\&&&\\end{bmatrix}"},{p:"+Col",c:"m",w:"addColumn"},{p:"-Col",c:"m",w:"deleteColumn"},{p:"+Row",c:"m",w:"addRow"},{p:"-Row",c:"m",w:"deleteRow"}]}]},{p:"=<%",enabled:!0,tabcontent:[{flow:"row",s:5,contents:[{p:"[",s:.5},{p:"]",s:.5},{p:"{",s:.5},{p:"}",s:.5},{p:"(",s:.5},{p:")",s:.5},{l:"\\left\\langle\\right\\rangle",c:"i",w:["\\left\\langle","\\right\\rangle"]},{l:"\\left|\\right|",c:"i",w:"||"},{p:"="},{l:"\\lt",pr:'<span class="mq-binary-operator">&lt;</span>'},{l:"\\gt",pr:'<span class="mq-binary-operator">&gt;</span>'},{l:"\\le",pr:'<span class="mq-binary-operator">&le;</span>'},{l:"\\ge",pr:'<span class="mq-binary-operator">&ge;</span>'},{p:"%"},{p:","},{p:"*"},{p:"!"},{p:"?"}]}]},{p:"ABC",enabled:!0,tabcontent:[{flow:"row",s:10,contents:[{p:"q"},{p:"w"},{p:"e"},{p:"r"},{p:"t"},{p:"y"},{p:"u"},{p:"i"},{p:"o"},{p:"p"},{s:.5},{p:"a"},{p:"s"},{p:"d"},{p:"f"},{p:"g"},{p:"h"},{p:"j"},{p:"k"},{p:"l"},{s:.5},{b:"&#8679;",c:"shift",s:1.5},{p:"z"},{p:"x"},{p:"c"},{p:"v"},{p:"b"},{p:"n"},{p:"m"},{b:"&#x232B;",c:"k",w:"Backspace",s:1.5},{p:"%"},{p:","},{p:"Space",s:5,c:"t",w:" "},{p:"."},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"}]}]}]},m={tabs:[{p:"Basic",enabled:!0,tabcontent:[{flow:"row",s:5,contents:[{l:"\\frac{}{}",c:"t",w:"/",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator mq-empty"></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{l:"x^{}",c:"t",w:"^",nb:1,pr:'<var>x</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup mq-empty"></span></span>'},{l:"x_{}",c:"t",w:"_",nb:1,pr:'<var>x</var><span class="mq-supsub mq-non-leaf"><span class="mq-sub mq-empty"></span></span>'},{l:"\\sqrt{}",c:"c",w:"sqrt",nb:1,pr:'<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix" style="transform: scale(1, 0.955556);">√</span><span class="mq-non-leaf mq-sqrt-stem mq-empty"></span></span>'},{l:"\\sqrt[n]{}",c:"c",w:"nthroot",nb:1,pr:'<sup class="mq-nthroot mq-non-leaf"><var>n</var></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled" style="transform: scale(1, 0.955556);">√</span><span class="mq-sqrt-stem mq-non-leaf mq-empty"></span></span>'},{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left|\\right|",c:"i",w:"||"},{l:"\\pi",nb:1,pr:'<span class="mq-nonSymbola">π</span>'},{l:"\\infty",pr:"<span>∞</span>"},{p:"DNE",sm:2}]},{s:.1},{flow:"row",s:2,contents:[{b:"&uarr;",c:"k",w:"Up"},{b:"&darr;",c:"k",w:"Down"},{b:"&larr;",c:"k",w:"Left"},{b:"&rarr;",c:"k",w:"Right"},{b:"&#x232B;",s:2,c:"k",w:"Backspace"}]}]},{p:"Funcs",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\log",c:"f",op:1},{l:"\\ln",c:"f",op:1},{l:"\\log_{}",c:"f",pr:'<var class="mq-operator-name">log</var><span class="mq-supsub mq-non-leaf"><span class="mq-sub mq-empty"></span></span>'},{l:"e^{}",c:"t",w:"e^",pr:'<var>e</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup mq-empty"></span></span>'}]}]},{p:"Trig",enabled:!1,tabcontent:[{flow:"row",s:6,contents:[{l:"\\sin",c:"f",op:1},{l:"\\cos",c:"f",op:1},{l:"\\tan",c:"f",op:1},{l:"\\sec",c:"f",op:1},{l:"\\csc",c:"f",op:1},{l:"\\cot",c:"f",op:1},{l:"\\sin^{-1}",c:"f",pr:'<var class="mq-operator-name">sin</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\cos^{-1}",c:"f",pr:'<var class="mq-operator-name">cos</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\tan^{-1}",c:"f",pr:'<var class="mq-operator-name">tan</var><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">−1</span></span>'},{l:"\\sinh",c:"f",op:1},{l:"\\cosh",c:"f",op:1},{l:"\\tanh",c:"f",op:1},{l:"\\pi",nb:1,pr:'<span class="mq-nonSymbola">π</span>'},{s:1},{s:4}]}]},{p:"Inequality",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\lt",pr:'<span class="mq-binary-operator">&lt;</span>'},{l:"\\gt",pr:'<span class="mq-binary-operator">&gt;</span>'},{l:"\\le",pr:'<span class="mq-binary-operator">&le;</span>'},{l:"\\ge",pr:'<span class="mq-binary-operator">&ge;</span>'},{p:"or",c:"w",w:"\\text{ or }"},{p:"DNE",sm:2},{p:"all reals",c:"w",w:"\\text{all reals}",s:2}]}]},{p:"Interval",enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{l:"\\left(\\right)",c:"i",w:"()"},{l:"\\left[\\right]",c:"i",w:"[]"},{l:"\\left(\\right]",c:"i",w:"(]"},{l:"\\left[\\right)",c:"i",w:"[)"},{l:"\\infty",pr:"<span>∞</span>"},{l:"-\\infty",c:"w",w:"-\\infty",pr:"<span>−∞</span>"},{l:"\\cup",pr:'<span class="mq-binary-operator">∪</span>'},{s:1}]}]},{p:"Matrix",sm:1,enabled:!1,tabcontent:[{flow:"row",s:4,contents:[{p:"2×2",c:"w",w:"\\begin{bmatrix}&\\\\&\\end{bmatrix}"},{p:"2×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\end{bmatrix}"},{p:"3×3",c:"w",w:"\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}"},{p:"3×4",c:"w",w:"\\begin{bmatrix}&&&\\\\&&&\\\\&&&\\end{bmatrix}"},{p:"+Col",c:"m",w:"addColumn"},{p:"-Col",c:"m",w:"deleteColumn"},{p:"+Row",c:"m",w:"addRow"},{p:"-Row",c:"m",w:"deleteRow"}]}]}]};return{getLayout:function(a,s){var n,t,e,p,l=a.id.substring(8),r=b("#"+l),c=r.attr("data-mq-vars")||"";return c=""==c?[]:c.split(/,/),t=(n=r.attr("data-mq")).split(/,/)[0],e=[],"OSK"===s?(e=b.extend(!0,[],o),n.match(/\bdecimal/)&&"numfunc"!=t?(e.tabs[0].tabcontent[0].s=1,e.tabs[0].tabcontent[0].contents=[{l:"\\infty",pr:"<span>∞</span>"},{p:"DNE",sm:2}],e.tabs[0].tabcontent[2]={flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{s:1},{b:"4"},{b:"5"},{b:"6"},{s:1},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},{b:"."},n.match(/(list|set)/)?{b:","}:{s:1},"calcntuple"===t&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]}):n.match(/(fraction|mixednumber|fracordec)/)&&"numfunc"!=t?(e.tabs[0].tabcontent[0].s=1,e.tabs[0].tabcontent[0].contents=[{l:"\\frac{n}{}",c:"t",w:"/",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator"><var>n</var></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{l:"\\frac{}{}",c:"c",w:"\\frac",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator mq-empty"></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{l:"\\infty",pr:"<span>∞</span>"},{p:"DNE",sm:2}],e.tabs[0].tabcontent[2]={flow:"row",s:4,contents:[{b:"7"},{b:"8"},{b:"9"},{s:1},{b:"4"},{b:"5"},{b:"6"},{s:1},{b:"1"},{b:"2"},{b:"3"},{b:"-"},{b:"0"},n.match(/fracordec/)?{b:"."}:{s:1},n.match(/(list|set)/)?{b:","}:{s:1},"calcntuple"===t&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]}):(n.match(/(list|set)/)||t.match(/(interval|string|ntuple)/)?e.tabs[0].tabcontent[2].contents[14]={b:","}:n.match(/equation/)&&(e.tabs[0].tabcontent[2].contents[14]={b:"="}),n.match(/nodecimal/)&&(e.tabs[0].tabcontent[2].contents[13]={s:1}))):(e=b.extend(!0,[],m),n.match(/\bdecimal/)?(e.tabs[0].tabcontent[0].s=3,e.tabs[0].tabcontent[0].contents=[{l:"\\infty",pr:"<span>∞</span>"},{p:"DNE",sm:2},"calcntuple"===t&&!n.match(/vector/)||n.match(/point/)?{l:"\\left(\\right)",c:"t",w:"("}:{s:1}]):n.match(/(fraction|mixednumber|fracordec)/)&&(e.tabs[0].tabcontent[0].s=4,e.tabs[0].tabcontent[0].contents=[{l:"\\frac{n}{}",c:"t",w:"/",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator"><var>n</var></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{l:"\\frac{}{}",c:"c",w:"\\frac",pr:'<span class="mq-fraction mq-non-leaf"><span class="mq-numerator mq-empty"></span><span class="mq-denominator mq-empty"></span><span style="display:inline-block;width:0">&#8203;</span></span>'},{l:"\\infty",pr:"<span>∞</span>"},{p:"DNE",sm:2}],("calcntuple"===t&&!n.match(/vector/)||n.match(/point/))&&e.tabs[0].tabcontent[0].contents.push({l:"\\left(\\right)",c:"t",w:"("},{s:3})),"numfunc"==t&&n.match(/inequality/)&&(e.tabs[3].enabled=!0,e.tabs[3].tabcontent[0].contents.splice(4,3))),n.match(/(fraction|mixednumber|fracordec|\bdecimal)/)||(e.tabs[1].enabled=!0,n.match(/notrig/)||(e.tabs[2].enabled=!0,n.match(/allowdegrees/)&&(e.tabs[2].tabcontent[0].contents[13]={l:"\\degree"}))),t.match(/interval/)?n.match(/inequality/)?e.tabs[3].enabled=!0:e.tabs[4].enabled=!0:t.match(/matrix/)&&!n.match(/matrixsized/)?e.tabs[5].enabled=!0:n.match(/set/)?e.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{l:"\\lbrace{\\rbrace}",c:"i",w:["\\left\\{","\\right\\}"]}]},{s:.1}):t.match(/complex/)?e.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{b:"i",v:1}]},{s:.1}):n.match(/vector/)&&e.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:[{l:"\\left\\langle\\right\\rangle",c:"i",w:["\\left\\langle","\\right\\rangle"]}]},{s:.1}),0<c.length&&("basic"==(p=function(a,s){var n,t,e,p,l;for(n=1,t=[],e="OSK"==s?4:2,p=0;p<a.length;p++)a[p]=a[p].replace(/alpha|beta|chi|delta|epsilon|gamma|varphi|phi|psi|sigma|rho|theta|lambda|mu|nu|omega|tau/i,"\\$&"),"\\"!=a[p].charAt(0)&&a[p].length>n&&(n=a[p].length),a[p]=a[p].replace(/_(\w{2,})/,"_{$1}"),1==a[p].length?t.push({b:a[p],c:"w",v:1}):t.push({b:a[p],c:"w",r:1});return l=Math.min(8,Math.max(4,Math.ceil(a.length/4))),a.length%l!=0&&t.push({s:l-a.length%l}),{format:a.length<=e&&n<4?"basic":"tab",btns:t,perrow:l}}(c,s)).format?e.tabs[0].tabcontent.unshift({flow:"row",s:1,contents:p.btns},{s:.1}):e.tabs.splice(1,0,{p:"Vars",enabled:!0,tabcontent:[{flow:"row",s:p.perrow,contents:p.btns}]})),e},onShow:function(a,s,n){var t,e,p,l,r,c,o,m,i;n&&"under"===s?(t=a.id.substring(8),(e=b("#"+t))[0].hasAttribute("data-tip")&&(l=(p=b("#mqeditor .mqed-tabpanel").first()).children("div").last().position().left-12,r=e.attr("data-tip"),c=document.createElement("div"),b(c).html(r),e[0].hasAttribute("aria-describedby")&&(o=e[0].getAttribute("aria-describedby"),document.getElementById(o).textContent!=r&&(m=b("<a>",{href:"#",text:_("[more..]")}).on("click",function(a){return a.preventDefault(),b(a.target).parent().html(b("#"+o).html()),!1}),b(c).append(" ").append(m))),p.parent().css("height","auto").append(b("<div>",{width:l,class:"mqed-tipholder"}).append(c)))):n&&"OSK"===s&&(t=a.id.substring(8),(e=b("#"+t))[0].hasAttribute("data-tip")&&(i=t.substr(2).split(/-/)[0],reshrinkeh(a.id),showehdd(a.id,e[0].getAttribute("data-tip"),i)))},onBlur:function(){hideeh()},onResize:function(a,s){"OSK"===s&&updateehpos()},onTab:function(a,s,n){"under"===s&&(n.match(/mqeditor-0-tabpanel/)?b(".mqed-tipholder").show():b(".mqed-tipholder").hide())}}}(jQuery);MQeditor.setConfig({getLayout:myMQeditor.getLayout,onShow:myMQeditor.onShow,onBlur:myMQeditor.onBlur,onResize:myMQeditor.onResize,onTab:myMQeditor.onTab,toMQ:AMtoMQ,fromMQ:MQtoAM,onEdit:imathasAssess.syntaxCheckMQ,onEnter:imathasAssess.handleMQenter}),(MQ=MathQuill.getInterface(MathQuill.getInterface.MAX)).config({spaceBehavesLikeTab:!0,leftRightIntoCmdGoes:"up",supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"=<>",charsThatBreakOutOfSupSubVar:"+-(",charsThatBreakOutOfSupSubOp:"+-(",restrictMismatchedBrackets:!0,autoCommands:"pi theta root sqrt ^oo degree",autoParenOperators:!0,addCommands:{oo:["VanillaSymbol","\\infty ","&infin;"]}});
