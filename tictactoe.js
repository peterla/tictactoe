$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  function checkForWinner(playerClass) {

    // Construct array of player's moves
    var moves = [];
    $(playerClass).each(function(index) {
      // Extract the number from each <td> element with class 'x' and append it to the moves array for X player
      xMoves.push(parseInt($(this).attr('class').split(' ')[0]));
    });

    for (var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];
      var matching = 0;

      // Check if xPlayer has a winning combo
      for (var j = 0; j < combo.length; j++) {
        if (xMoves.includes(combo[j])) {
          matching++;
        }
      }

      if (matching === 3) {
        // We have a winner!
        alert(playerClass + " is the winner!");
      }
    }
  }

  $('td').on('click', function() {

    if (turn % 2 === 0) {
      $(this).html('X').addClass('x');
    } else {
      $(this).html('O').addClass('o');
    }

    // Unbind 'click' event hander
    $(this).off('click');

    checkForWinner('.x');
    checkForWinner('.o');

    turn++;
  });

})
