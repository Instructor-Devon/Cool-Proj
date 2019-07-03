$("button").click(function(){
    $(this).html("I was clicked!");
    var timer = setInterval(function(){
        var time = $("#timer").html()
        $("#timer").html(time - 1);
        if(time == 1){
        }
        clearInterval(timer);
    }, 1000)
})

