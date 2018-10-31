/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

  function generate_table() {
  var tblBody = $("#playerTable");
  // creating all cells
  for (var i = 0; i < playerArr.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
    for (var j = 0; j < 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(String(playerArr[i].Name));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    for (var j = 1; j < 2; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(String(playerArr[i].FPPG));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    for (var j = 2; j < 3; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(String(playerArr[i].Salary));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.append(row);
  }
}

$(document).ready(function(){
  generate_table();
  console.log("before\n", window.localStorage);
  var i=0;
  $(".add-text-btn").on("click", function(){
  i++;
  console.log(i);
  if(i<=1 && $('.player').text() === ""){
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

  }else if(i<=2 && $('.player2').text() === ""){
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

  }else if(i<=3 && $('.player3').text() === ""){
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

  }else if(i<=4 && $('.player4').text() === ""){
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

  } else if(i<=5 && $('.player5').text() === ""){
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
    i=4;
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

  $(".clear-entries-btn").on("click", function(){
    localStorage.clear();
    $(".player").empty();
    $(".player-fppg").empty();
    $(".player-salary").empty();
    $(".player2").empty();
    $(".player-fppg2").empty();
    $(".player-salary2").empty();
    $(".player3").empty();
    $(".player-fppg3").empty();
    $(".player-salary3").empty();
    $(".player4").empty();
    $(".player-fppg4").empty();
    $(".player-salary4").empty();
    $(".player5").empty();
    $(".player-fppg5").empty();
    $(".player-salary5").empty();
    $('#theKey').val('');
    $('#theKey2').val('');
    $('#theKey3').val('');

    i=0;

      data[0] = data[0].slice(0,3);
      data[1] = data[1].slice(0,3);
      data[2] = data[2].slice(0,3);
      data[3] = data[3].slice(0,3);
      console.log(data);

      setTimeout(function () {
          chart.load(
          {
            // unload: true,
            columns: data
        }
        )
        }, 1000);
        console.log(data);
  });

  $('#row1').on("click", function(){
    var playerObj = JSON.parse(localStorage.getItem('player1'));
    var name = playerObj.name;
    var points = playerObj.fppg;
    var price = playerObj.salary;
    //alert(name);
    $('#theKey').val(name);
    $('#theKey2').val(points);
    $('#theKey3').val(price);
    localStorage.removeItem('player1');
    $(".player").empty();
    $(".player-fppg").empty();
    $(".player-salary").empty();
    i=0;
  });

  $('#row2').on("click", function(){
    var playerObj = JSON.parse(localStorage.getItem('player2'));
    var name = playerObj.name;
    var points = playerObj.fppg;
    var price = playerObj.salary;
    //alert(name);
    $('#theKey').val(name);
    $('#theKey2').val(points);
    $('#theKey3').val(price);
    localStorage.removeItem('player2');
    $(".player2").empty();
    $(".player-fppg2").empty();
    $(".player-salary2").empty();
    i=1;
  });

  $('#row3').on("click", function(){
    var playerObj = JSON.parse(localStorage.getItem('player3'));
    var name = playerObj.name;
    var points = playerObj.fppg;
    var price = playerObj.salary;
    //alert(name);
    $('#theKey').val(name);
    $('#theKey2').val(points);
    $('#theKey3').val(price);
    localStorage.removeItem('player3');
    $(".player3").empty();
    $(".player-fppg3").empty();
    $(".player-salary3").empty();
    i=2;
  });

  $('#row4').on("click", function(){
    var playerObj = JSON.parse(localStorage.getItem('player4'));
    var name = playerObj.name;
    var points = playerObj.fppg;
    var price = playerObj.salary;
    //alert(name);
    $('#theKey').val(name);
    $('#theKey2').val(points);
    $('#theKey3').val(price);
    localStorage.removeItem('player4');
    $(".player4").empty();
    $(".player-fppg4").empty();
    $(".player-salary4").empty();
    i=3;
  });

  $('#row5').on("click", function(){
    var playerObj = JSON.parse(localStorage.getItem('player5'));
    var name = playerObj.name;
    var points = playerObj.fppg;
    var price = playerObj.salary;
    //alert(name);
    $('#theKey').val(name);
    $('#theKey2').val(points);
    $('#theKey3').val(price);
    localStorage.removeItem('player5');
    $(".player5").empty();
    $(".player-fppg5").empty();
    $(".player-salary5").empty();
    i=4;
  });
});

      // [
      //       ['x', 'Auston Matthews', 'Mitch Marner',],
      //       ['salary', 7000, 6800],
      //       ['average fantasy points', 6, 4.8],
      //       ['dollar per fantasy point', 1166, 1416]
      //      ];
