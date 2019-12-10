

$(".showDate").text(moment().format("MMM Do"))
//$(".showDate").text(moment().format("h"))



var date = localStorage.getItem("date")
var box1 = localStorage.getItem("box1")
var box2 = localStorage.getItem("box2")
var box3 = localStorage.getItem("box3")
var box4 = localStorage.getItem("box4")
var box5 = localStorage.getItem("box5")
var box6 = localStorage.getItem("box6")
var box7 = localStorage.getItem("box7")
var box8 = localStorage.getItem("box8")
var box9 = localStorage.getItem("box9")
var dateGet = localStorage.getItem("date")

$("#description1").val(box1)
$("#description2").val(box2)
$("#description3").val(box3)
$("#description4").val(box4)
$("#description5").val(box5)
$("#description6").val(box6)
$("#description7").val(box7)
$("#description8").val(box8)
$("#description9").val(box9)

var theDate = moment().format("D")
var storeDate = localStorage.setItem("date", theDate)

//function to get rid of localstorage each day
$(document).ready(function(){

    if (theDate === localStorage.getItem("date")) {
        
    } else {
        localStorage.clear()
    }
})

//if functions to display the current hours ToDo
    $(document).ready(function(){
        if (moment().format('HH') == 09) {
            $(".displayTodo").text($("#description1").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 10) {
            $(".displayTodo").text($("#description2").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 11) {
            $(".displayTodo").text($("#description3").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 12) {
            $(".displayTodo").text($("#description4").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 13) {
            $(".displayTodo").text($("#description5").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 14) {
            $(".displayTodo").text($("#description6").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 15) {
            $(".displayTodo").text($("#description7").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 16) {
            $(".displayTodo").text($("#description8").val())
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 17) {
            $(".displayTodo").text($("#description9").val())
        }
    })


    $(document).ready(function(){
        if (moment().format('HH') >= 18 || moment().format('HH') <= 08 ) {
            $(".displayTodo").text("Go home and relax!!!!")
        }
    })

//adds todos on the hours 9am-5pm
    $(document).ready(function(){
        $("#save1").click(function(){
        $("#modal-container1 ").hide(500);
        $("#am9").css("display", "inline")
        localStorage.setItem("box1", $.trim($("#description1").val()))
        });
        $("#am9").click(function(){
        $("#modal-container1").show(500);
        $("#am9").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save2").click(function(){
        $("#modal-container2").hide(500);
        $("#am10").css("display", "inline")
        localStorage.setItem("box2", $.trim($("#description2").val()))
        
        });
        $("#am10").click(function(){
        $("#modal-container2").show(500);
        $("#am10").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save3").click(function(){
        $("#modal-container3").hide(500);
        $("#am11").css("display", "inline")
        localStorage.setItem("box3", $.trim($("#description3").val()))
        });
        $("#am11").click(function(){
        $("#modal-container3").show(500);
        $("#am11").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save4").click(function(){
        $("#modal-container4").hide(500);
        $("#pm12").css("display", "inline")
        localStorage.setItem("box4", $.trim($("#description4").val()))
        });
        $("#pm12").click(function(){
        $("#modal-container4").show(500);
        $("#pm12").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save5").click(function(){
        $("#modal-container5").hide(500);
        $("#pm1").css("display", "inline")
        localStorage.setItem("box5", $.trim($("#description5").val()))
        });
        $("#pm1").click(function(){
        $("#modal-container5").show(500);
        $("#pm1").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save6").click(function(){
        $("#modal-container6").hide(500);
        $("#pm2").css("display", "inline")
        localStorage.setItem("box6", $.trim($("#description6").val()))
        });
        $("#pm2").click(function(){
        $("#modal-container6").show(500);
        $("#pm2").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save7").click(function(){
        $("#modal-container7").hide(500);
        $("#pm3").css("display", "inline")
        localStorage.setItem("box7", $.trim($("#description7").val()))
        });
        $("#pm3").click(function(){
        $("#modal-container7").show(500);
        $("#pm3").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save8").click(function(){
        $("#modal-container8").hide(500);
        $("#pm4").css("display", "inline")
        localStorage.setItem("box8", $.trim($("#description8").val()))
        });
        $("#pm4").click(function(){
        $("#modal-container8").show(500);
        $("#pm4").css("display", "none")
        });
    });

    $(document).ready(function(){
        $("#save9").click(function(){
        $("#modal-container9").hide(500);
        $("#pm5").css("display", "inline")
        localStorage.setItem("box9", $.trim($("#description9").val()))
        });
        $("#pm5").click(function(){
        $("#modal-container9").show(500);
        $("#pm5").css("display", "none")
        });
    });