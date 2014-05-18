'use strict';

chessApp.factory('Piece',function(){
  function Piece(coord,color){    
    this.x = coord.x;
    this.y = coord.y;
    this.color = color;
  }

  Piece.prototype.move = function(newCoord){
    this.x = newCoord.x;
    this.y = newCoord.y;
  }

  Piece.WHITE = 'white';
  Piece.BLACK = 'black';

  return Piece;
});


chessApp.directive('piece', function() {
  return {    
    restrict: 'AE',    
    link: function(scope, element, attr) {
      var piece  = scope.cell.piece;      
      if(typeof piece !== "undefined"){      
        element.html(piece.getUnicodeChar());        
        element.prop('pieceObj',piece);
        element.draggable({
          containment: "#chess_board",
          revert:"invalid",
          cursor: "pointer"
        });      
      }
    }
  }
});