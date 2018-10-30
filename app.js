/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value

$("#gdRows td").each(function() {
        var cellText = $(this).text();
        if ($.trim(cellText) == '') {
            $(this).css('background-color', 'cyan');
        }
    });

 */
var i=0;

$(document).ready(function(){
  console.log("before\n", window.localStorage);

  // add event listener
  $(".add-text-btn").on("click", function(){
   i++;
   console.log(i);
   if(i<=1){
    //when change to an object need to json stringify - in order to store in local storage
    //when retrieve need to json.parse to change back to an obj
    // var curKeyValue = "theKey"; // change to dynamic key?
    var name = $('#theKey').val();
    var points = $('#theKey2').val();
    var price = $('#theKey3').val();
    var player1;
    var player = {
      name: name,// reading from <input>
      fppg: points,
      salary: price,
      }
    localStorage.setItem('player1', JSON.stringify(player));
    $(".player").append(name);
    $(".player-fppg").append(points);
    $(".player-salary").append(price);
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');

  } else if(i<=2){
      var name = $('#theKey').val();
      var points = $('#theKey2').val();
      var price = $('#theKey3').val();
      var player2;
      var player = {
        name: name,// reading from <input>
        fppg: points,
        salary: price,
        }
    localStorage.setItem('player2', JSON.stringify(player));
    $(".player2").append(name);
    $(".player-fppg2").append(points);
    $(".player-salary2").append(price);
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');

  } else if(i<=3){
      var name = $('#theKey').val();
      var points = $('#theKey2').val();
      var price = $('#theKey3').val();
      var player3;
      var player = {
        name: name,// reading from <input>
        fppg: points,
        salary: price,
        }
    localStorage.setItem('player3', JSON.stringify(player));
    $(".player3").append(name);
    $(".player-fppg3").append(points);
    $(".player-salary3").append(price);
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');

  } else if(i<=4){
    var name = $('#theKey').val();
    var points = $('#theKey2').val();
    var price = $('#theKey3').val();
    var player4;
    var player = {
      name: name,// reading from <input>
      fppg: points,
      salary: price,
      }
    localStorage.setItem('player4', JSON.stringify(player));
    $(".player4").append(name);
    $(".player-fppg4").append(points);
    $(".player-salary4").append(price);
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');
    console.log(i);

  } else if(i<=5){
    var name = $('#theKey').val();
    var points = $('#theKey2').val();
    var price = $('#theKey3').val();
    var player5;
    var player = {
      name: name,// reading from <input>
      fppg: points,
      salary: price,
      }
    localStorage.setItem('player5', JSON.stringify(player));
    $(".player5").append(name);
    $(".player-fppg5").append(points);
    $(".player-salary5").append(price);
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');
  }
  });
  $(".clear-cache-btn").on("click", function(){
    localStorage.removeItem('player1');
    $(".player").empty();
    $(".player-fppg").empty();
    $(".player-salary").empty();
    i=0;
  });
  $(".second-clear-cache-btn").on("click", function(){
    localStorage.removeItem('player2');
    $(".player2").empty();
    $(".player-fppg2").empty();
    $(".player-salary2").empty();
    i=1;
  });
  $(".third-clear-cache-btn").on("click", function(){
    localStorage.removeItem('player3');
    $(".player3").empty();
    $(".player-fppg3").empty();
    $(".player-salary3").empty();
    i=2;
  });
  $(".fourth-clear-cache-btn").on("click", function(){
    localStorage.removeItem('player4');
    $(".player4").empty();
    $(".player-fppg4").empty();
    $(".player-salary4").empty();
    i=3;
  });
  $(".fifth-clear-cache-btn").on("click", function(){
    localStorage.removeItem('player5');
    $(".player5").empty();
    $(".player-fppg5").empty();
    $(".player-salary5").empty();
    i=3;
  });
  $(".compare-btn").on("click", function(){
    var name = $('#theKey').val();
    var points = $('#theKey2').val();
    var price = $('#theKey3').val();
    var player = {
      name: name,// reading from <input>
      fppg: points,
      salary: price,
      }
      data[0].push(name);
      data[1].push(Number(points));
      data[2].push(Number(price));
      data[3].push(Number(price)/Number(points));
      console.log(data);
      setTimeout(function () {
          chart.load(
          {
            unload: true,
            columns: data
        }
        )
        }, 1000);
        console.log(data);
   });
});




      // [
      //       ['x', 'Auston Matthews', 'Mitch Marner',],
      //       ['salary', 7000, 6800],
      //       ['average fantasy points', 6, 4.8],
      //       ['dollar per fantasy point', 1166, 1416]
      //      ];
