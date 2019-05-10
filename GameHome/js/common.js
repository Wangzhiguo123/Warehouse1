var $a = sessionStorage.choose
$(document).ready(function news_r(){
    console.log($a)
    if ($a==1 || $a==undefined){
        $(".one").val("1");
        $(".a").show();
        $(".b").hide();
    }else{
        $(".one").val("2");
        $(".a").hide();
        $(".b").show();
    }
});
$(".one").change(function new_s() {
    console.log(111)
    $(".one").val();
    var options=$(".one option:selected");
    options.val();
    if(options.val()==2){
        sessionStorage.choose='2'
        $(".a").hide()
        $(".b").show()
    }else{
        sessionStorage.choose='1'
        $(".b").hide()
        $(".a").show()
    }
})