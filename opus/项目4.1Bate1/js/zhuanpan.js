window.onload = function() {
        var turn = $("#turn");
        var turnW = turn.width();
        var turnH = turn.height();

        var poin = $("#poin");
        var poinW = poin.width();
        var poinH = poin.height();
    var w=(turnW - poinW) / 2;
    var h=(turnH - poinH) / 2;
     //  poin.offset({left: (turnW - poinW) / 2, top: (turnH - poinH) / 2});
   


        var d = Math.random()*2000;
        poin.click(function () {
            d+= 2000;
            turn.css("transform", "rotate("+d+"deg)");
            $("#integral").html(function(){
                return parseInt(Math.random()*1000)
            })
        })
    }
