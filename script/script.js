

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

var storeDate = setTimeout(function(){
    localStorage.setItem("date", theDate)
  }, 2000)

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
           $("#body1").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 09) {
            $("#am9").css("width", "250px")
            $("#am9").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body1").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#am9").css("width", "250px")
            $("#am9").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body1").css("background-color", "rgba(7, 51, 66, 0.4)")
            
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 10) {
            $(".displayTodo").text($("#description2").val())
            $("#am10").css("width", "300px")
            $("#body2").css("background-color", "rgba(20, 145, 185, 0.37)")
        }else if (moment().format('HH') < 10) {
            $("#am10").css("width", "250px")
            $("#am10").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body2").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#am10").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#am10").css("width", "250px")
            $("#body2").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
        
    })

    $(document).ready(function(){
        if (moment().format('HH') == 11) {
            $(".displayTodo").text($("#description3").val())
            $("#am11").css("width", "300px")
            $("#body3").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 11) {
            $("#am11").css("width", "250px")
            $("#am11").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body3").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#am11").css("width", "250px")
            $("#am11").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body3").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 12) {
            $(".displayTodo").text($("#description4").val())
            $("#pm12").css("width", "300px")
            $("#body4").css("background-color", "rgba(20, 145, 185, 0.37)")
            
            
        } else if (moment().format('HH') < 12) {
            $("#pm12").css("width", "250px")
            $("#pm12").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body4").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm12").css("width", "250px")
            $("#pm12").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body4").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 13) {
            $(".displayTodo").text($("#description5").val())
            $("#pm1").css("width", "300px")
            $("#body5").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 13) {
            $("#pm1").css("width", "250px")
            $("#pm1").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body5").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm1").css("width", "250px")
            $("#pm1").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body5").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 14) {
            $(".displayTodo").text($("#description6").val())
            $("#pm2").css("width", "300px")
            $("#body6").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 14) {
            $("#pm2").css("width", "250px")
            $("#pm2").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body6").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm2").css("width", "250px")
            $("#pm2").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body6").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 15) {
            $(".displayTodo").text($("#description7").val())
            $("#pm3").css("width", "300px")
            $("#body7").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 15) {
            $("#pm3").css("width", "250px")
            $("#pm3").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body7").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm3").css("width", "250px")
            $("#pm3").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body7").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 16) {
            $(".displayTodo").text($("#description8").val())
            $("#pm4").css("width", "300px")
            $("#body8").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 16) {
            $("#pm4").css("width", "250px")
            $("#pm4").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body8").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm4").css("width", "250px")
            $("#pm4").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body8").css("background-color", "rgba(7, 51, 66, 0.4)")
        }
    })

    $(document).ready(function(){
        if (moment().format('HH') == 17) {
            $(".displayTodo").text($("#description9").val())
            $("#pm5").css("width", "300px")
            $("#body9").css("background-color", "rgba(20, 145, 185, 0.37)")
        } else if (moment().format('HH') < 17) {
            $("#pm5").css("width", "250px")
            $("#pm5").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body9").css("background-color", "rgba(20, 145, 185, 0.2)")
            $("#body9").css("background-color", "rgba(20, 145, 185, 0.2)")
        } else {
            $("#pm5").css("width", "250px")
            $("#pm5").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body9").css("background-color", "rgba(7, 51, 66, 0.4)")
            $("#body9").css("background-color", "rgba(7, 51, 66, 0.4)")
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

    var data = null;

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var num = Math.floor((Math.random() * 1643) + 1);
      i = num
      var quote = document.querySelector(".quote")
      var author = document.querySelector(".author")

      quote.textContent = data[i].text 
      author.textContent = "-" + data[i].author
    });