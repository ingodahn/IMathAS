var MQeditor=function(h){var p={layoutstyle:"auto",layout:[]},f={},r=!1,y=null,l=null,q=null,g=MathQuill.getInterface(MathQuill.getInterface.MAX);function i(){try{return window.self!==window.top}catch(t){return!0}}function n(n,t,e){var a,o,s,r,l,i,d,c,m,u;if("string"==typeof n&&(n=document.getElementById(n)),a="boolean"==typeof t?t:"hidden"!=n.type,o=n.id,!0===a){if(s=h(n).attr("type","hidden").val(),p.hasOwnProperty("toMQ")&&(s=p.toMQ(s,o)),0==(r=h("#mqinput-"+o)).length){if(l=h("<span/>",{id:"mqinput-"+o,class:"mathquill-math-field",text:s}),null!==(i=n.className.match(/(ansred|ansyel|ansgrn|ansorg)/))&&l.addClass(i[0]),d=n.hasAttribute("size")?3<n.size?n.size/1.8:n.size:10,l.css("min-width",d+"em"),l.insertAfter(n),c={handlers:{edit:w,enter:v}},p.hasOwnProperty("getLayoutstyle")?p.curlayoutstyle=p.getLayoutstyle():"auto"==p.layoutstyle?p.curlayoutstyle=C():p.curlayoutstyle=p.layoutstyle,"OSK"==p.curlayoutstyle&&(c.substituteTextarea=function(){var t=document.createElement("span");return t.setAttribute("tabindex",0),t},c.keyboardPassthrough=!0),c.autoOperatorNames=c.autoParenOperators="ln log abs exp sin cos tan arcsin arccos arctan sec csc cot arcsec arccsc arccot sinh cosh sech csch tanh coth arcsinh arccosh arctanh",""!=(m=n.getAttribute("data-mq-vars")||""))for(m=""==m?[]:m.split(/,/),u=0;u<m.length;u++)1<m[u].length&&m[u].match(/^[a-zA-Z]+$/)&&(c.autoOperatorNames+=" "+m[u]);n.disabled?(r=g.StaticMath(l[0]),l.addClass("disabled")):(r=g.MathField(l[0],c).config(f),b(l),h(n).on("change.mqed",function(t,e){if(!e){var a=n.value;p.hasOwnProperty("toMQ")&&(a=p.toMQ(a)),r.latex(a)}}))}else r.show(),r=g(r[0]).latex(s);!0!==e&&r.focus()}else h(n).attr("type","text").off("change.mqed"),!0!==e&&h(n).focus(),h("#mqinput-"+o).hide()}function b(t){h(t).find(".mq-textarea > *").on("focus.mqeditor",e).on("blur.mqeditor",function(){l=setTimeout(a,100),p.hasOwnProperty("onBlur")&&p.onBlur()}),h(t).on("click.mqeditor",function(t){var e=h(t.target).closest("label");if(0<e.length)return"undefined"!==e.attr("for")&&h("#"+e.attr("for")).prop("checked",!0),t.stopPropagation(),!1})}function e(t){var a,e,n,o,s;clearTimeout(l),a=h(t.target).closest(".mathquill-math-field"),!1===r&&(h("body").append(h("<div/>",{id:"mqeditor",class:"mqeditor"})),h("#mqeditor").on("mousedown touchstart",function(t){t.preventDefault()}),r=!0),e=p.curlayoutstyle,p.hasOwnProperty("getLayoutstyle")?p.curlayoutstyle=p.getLayoutstyle():"auto"==p.layoutstyle?p.curlayoutstyle=C():p.curlayoutstyle=p.layoutstyle,"OSK"===p.curlayoutstyle?(i()?h("#mqeditor").addClass("iframeosk").removeClass("fixedbottom"):h("#mqeditor").addClass("fixedbottom").removeClass("iframeosk"),document.getElementById("mqe-fb-spacer")||((n=document.createElement("div")).style.height="200px",n.id="mqe-fb-spacer",h("body").append(n))):h("#mqeditor").removeClass("fixedbottom iframeosk"),o=!1,null!==y&&a[0]==y.el()&&e===p.curlayoutstyle||(o=!0,null!==y&&h("#"+y.el().id.substring(8)).trigger("change",!0),p.hasOwnProperty("getLayout")&&(p.layout=p.getLayout(a[0],p.curlayoutstyle)),h("#mqeditor").empty().show(),p.layout.tabs?function(t,e,a){var n,o,s,r,l,i,d=document.createElement("div");d.className="mqed-row mqed-tabrow";n=document.createElement("div"),r=0;t.appendChild(d),t.appendChild(n);for(l=0;l<e.tabs.length;l++)if(!0===e.tabs[l].enabled)for(r++,k(d,e.tabs[l],a+"-"+l),(s=document.createElement("div")).className="mqed-row mqed-tabpanel",s.id=a+"-"+l+"-tabpanel",n.appendChild(s),i=0;i<e.tabs[l].tabcontent.length;i++)(o=e.tabs[l].tabcontent[i]).hasOwnProperty("flow")&&0==o.contents.length||(o.hasOwnProperty("flow")?u(s,o,a+"-"+l+"-"+i):k(s,o,a+"-"+l+"-"+i));1<r?h(t).find(".mqed-tab").first().addClass("mqed-activetab"):h(d).hide()}(document.getElementById("mqeditor"),p.layout,"mqeditor"):u(document.getElementById("mqeditor"),p.layout,"mqeditor"),h("#mqeditor .mqed-btn.rend").each(function(){g.StaticMath(this,{mouseEvents:!1})}),0<h("#mqeditor .mqed-tabrow").length&&(h("#mqeditor .mqed-tabpanel").hide().first().show(),(s=h("#mqeditor .mqed-tabrow + div")).css("height",s.height()))),"OSK"!==p.curlayoutstyle||i()?h("#mqeditor").show():h("#mqeditor").slideDown(50,function(){var t=h("#mqeditor").height()+5,e=h(window).height()-(a.offset().top+a.outerHeight()-h(window).scrollTop());e<t&&h(window).scrollTop(h(window).scrollTop()+(t-e))}),d(a),y=g.MathField(a[0]),h("#"+a[0].id.substring(8)).triggerHandler("focus"),p.hasOwnProperty("onShow")&&p.onShow(a[0],p.curlayoutstyle,o),h(document).trigger("mqeditor:show")}function a(t){h(document).trigger("mqeditor:hide"),"OSK"!==p.curlayoutstyle||i()?h("#mqeditor").hide():h("#mqeditor").slideUp(50),h("#"+y.el().id.substring(8)).trigger("change",!0),y=null}function d(t){var e,a,n,o,s;"under"==p.curlayoutstyle||i()?(a=(e=h(t).closest(".mathquill-math-field")).offset(),n=e.outerHeight(),o=a.left,document.getElementById("mqeditor")&&o+(s=document.getElementById("mqeditor").offsetWidth)>document.documentElement.clientWidth&&(o=document.documentElement.clientWidth-s-5),i()?h("#mqeditor").css("top",a.top+n+3).css("left",0):h("#mqeditor").css("top",a.top+n+3).css("left",o)):h("#mqeditor").css("top","auto").css("left",0)}function w(t){var e,a=t.el();d(a),p.hasOwnProperty("onResize")&&p.onResize(a,p.curlayoutstyle),a.id.match(/mqinput/)&&(e=t.latex(),p.hasOwnProperty("fromMQ")&&(e=p.fromMQ(e,a.id)),h("#"+a.id.substring(8)).val(e).trigger("input"),""!=e&&h("#"+a.id.substring(8)).siblings("input[id^=qs][value=spec]").prop("checked",!0),p.hasOwnProperty("onEdit")&&p.onEdit(a.id,e))}function v(t){p.hasOwnProperty("onEnter")&&p.onEnter(t.el().id)}function C(){var t=document.documentElement.clientWidth;return navigator.userAgent.match(/Android/)||navigator.userAgent.match(/iPhone/)||navigator.userAgent.match(/iPad/)||t<500?"OSK":"under"}function u(t,e,a){var n,o,s,r,l,i,d=e.flow,c=100;for(e.hasOwnProperty("s")&&"row"==d&&(c=e.s),n=document.createElement("div"),e.hasOwnProperty("s")&&(n.style.flexGrow=e.s),e.hasOwnProperty("class")&&(n.className=e.class),e.hasOwnProperty("tabpanel")&&(n.id=e.tabpanel.id,n.style.display=e.tabpanel.hidden?"none":""),(o=document.createElement("div")).className="mqed-"+d,i=l=s=0;i<e.contents.length;i++)(r=e.contents[i]).hasOwnProperty("flow")&&0==r.contents.length||(c<s+(l=r.hasOwnProperty("s")?r.s:1)&&(n.appendChild(o),s=0,(o=document.createElement("div")).className="mqed-"+d),r.hasOwnProperty("flow")?u(o,r,a+"-"+i):k(o,r,a+"-"+i),s+=l);n.appendChild(o),t.appendChild(n)}function k(t,e,a){var n,o,s,r,l,i,d=document.createElement("div");(d.className="mqed-btn-cont",e.s&&(d.style.flexGrow=e.s),e.contid&&(d.id=e.contid),e.contclass&&h(d).addClass(e.contclass),t.appendChild(d),e.l||e.b||e.p)&&((n=document.createElement("span")).tabIndex=0,e.l?(e.op?(n.className="mqed-btn mq-math-mode",n.innerHTML='<span class="mq-root-block"><var class="mq-operator-name">'+e.l.substring(1)+"</var></span>"):e.pr?(n.className="mqed-btn mq-math-mode",n.innerHTML='<span class="mq-root-block">'+e.pr+"</span>"):e.l.match(/\\left(.)\\right(.)/)?(r=e.l.match(/\\left(.)\\right(.)/),n.className="mqed-btn mq-math-mode",n.innerHTML='<span class="mq-non-leaf"><span class="mq-scaled mq-paren" style="transform: scale(1, 1.2);">'+r[1]+'</span><span class="mq-non-leaf mq-empty"></span><span class="mq-scaled mq-paren" style="transform: scale(1, 1.2);">'+r[2]+"</span></span>"):(n.className="mqed-btn rend",n.innerText=e.l),o="c",s=e.l.substring(1)):e.b?(e.r?(n.className="mqed-btn rend",n.innerHTML=e.b):(n.className="mqed-btn mq-math-mode",e.v?n.innerHTML='<span class="mq-root-block"><var>'+e.b+"</var></span>":n.innerHTML='<span class="mq-root-block"><span>'+e.b+"</span></span>"),o="t",((s=e.b).match(/^\d$/)||"."==s)&&h(n).addClass("mqed-digitkey")):(n.className="mqed-btn",n.innerHTML=e.p,o="t",s=e.p),e.c&&("shift"==(o=e.c)?h(n).addClass("mqed-shift"):"k"==o&&h(n).addClass("mqed-navkey")),e.sm&&(n.style.fontSize=100-10*e.sm+"%"),e.w&&(s=e.w),e.tabcontent&&(h(n).addClass("mqed-tab"),o="showtabpanel",s=a+"-tabpanel"),h(n).data("cmdtype",o).data("cmdval",s),h(n).on("click mousedown touchstart keydown",(l=o,i=s,function(t){!function t(e,a,n){var o,s,r,l,i,d,c,u;if(("mousedown"!=e.type||"Backspace"===n)&&!("click"==e.type&&"Backspace"===n||"keydown"==e.type&&"Enter"!==e.key))if("touchstart"==e.type&&(e.preventDefault(),h(e.currentTarget).addClass("mactive")),"t"==a)n.match(/^[a-zA-Z]$/)&&h(e.target).closest(".mqed-tabpanel").find(".mqed-shift").hasClass("active")&&(n=n.toUpperCase()),y.typedText(n);else if("c"==a)y.cmd(n);else if("l"==a)y.latex(n);else if("w"==a){if(y.write(n),m=n.match(/bmatrix}(.*?)(\\\\|\\end{bm)/))for(o=m[1].split(/&/).length,s=0;s<o;s++)y.keystroke("Left")}else"k"==a?(y.keystroke(n),"Backspace"===n&&(q=setTimeout(function(){t(e,a,n)},null===q?600:70))):"m"==a?y.matrixCmd(n):"f"==a?(r=y.getSelection())?(y.write(n+"\\left("+r+"\\right)"),y.keystroke("Left")):n.match(/{}$/)?y.typedText(n.replace(/{}$/,"")):y.write(n):"sf"==a?((r=y.getSelection())?y.write(n+"{"+r+"}"):y.cmd(n),y.keystroke("Left")):"i"==a?((r=y.getSelection())||(r=""),"string"==typeof n?(l=n.charAt(0),i=n.charAt(1),y.write("\\left"+l+r+"\\right"+i)):y.write(n[0]+r+n[1]),""==r&&y.keystroke("Left")):"showtabpanel"==a?((d=h(e.target).closest(".mqed-btn")).closest(".mqeditor").find(".mqed-tabpanel").hide(),d.closest(".mqeditor").find(".mqed-btn.mqed-activetab").removeClass("mqed-activetab"),h("#"+n).show(),d.addClass("mqed-activetab"),p.hasOwnProperty("onTab")&&p.onTab(d[0],p.curlayoutstyle,n)):"shift"==a&&(d=h(e.target).closest(".mqed-btn"),c=h(e.target).closest(".mqed-tabpanel"),(u=!d.hasClass("active"))?d.addClass("active"):d.removeClass("active"),c.find(".mqed-btn").each(function(t,e){var a=e.textContent;a.match(/^[a-zA-Z]$/)&&(e.textContent=u?e.textContent.toUpperCase():e.textContent.toLowerCase())}))}(t,l,i)})).on("touchend",function(t){setTimeout(function(){h(t.currentTarget).removeClass("mactive")},50)}).on("touchend mouseup",function(){clearTimeout(q),q=null}),d.appendChild(n))}return{setConfig:function(t){for(var e in t)p[e]=t[e]},setMQconfig:function(t){f=t},toggleMQ:n,toggleMQAll:function(t,e){var a=e||null;h(t).each(function(t,e){n(e,a,!0)})},attachEditor:b,getLayoutstyle:C,resetEditor:function(){clearTimeout(l),h("#mqeditor").hide(),y=null}}}(jQuery);
