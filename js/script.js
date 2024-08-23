$(document).ready(function(){
    // 언어토글
    $(".lang > a").on("click" , function(e){
        e.preventDefault();
        $(".county").toggle()
    });
});