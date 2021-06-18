<?php
global $allowedmacros;
array_push($allowedmacros,"js_value","js_setCookie","js_getCookie");

function js_value($qid,$partnr = 0) {
    if ($stuanswers[$qid][$partnr] === null) {
        return "not set";
    }
    return urldecode($stuanswers[$qid][$partnr]);
}

function js_setCookie($key,$val) {
    $valencoded=urlencode($val);
    return "<script>console.log('Setting ',$valencoded);document.cookie=\"$key =$valencoded\"</script>";
}

function js_getCookie($qid,$key,$partnr=0) {
    $partnrS = sprintf("%'.02d",$partnr);
    
    $script="<script>
    console.log(document.cookie);
    function getCookieValue(a) {
        const b = document.cookie.match('(^|;)\\\\s*' + a + '\\\\s*=\\\\s*([^;]+)');
        return b ? b.pop() : '';
     }
     var c=getCookieValue('$key');
     console.log('Setting in $partnrS');
     $('#qn".$qid."0".$partnrS."').val(c);
     </script>";
     return $script;
}
?>