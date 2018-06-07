( function() {


	
	jQuery(document).ready( function() {

		var clickCount = 0;
		
		jQuery(".tictactoe-board-col").click(function(){
			clickCount++
		    var boxNumber = jQuery(this).attr("data-box-number");
		    if (clickCount % 2 == 1) {
		    	jQuery(this).append('<span class="play1"></span>');
		    	jQuery('.player-1').append('<div>Benson select ' + boxNumber + '</div>');
		    	jQuery(this).attr('data-box-value','1');
		    }else{
		    	jQuery(this).append('<span class="play2"></span>');
		    	jQuery('.player-2').append('<div>Aldrin select ' + boxNumber + '</div>');
		    	jQuery(this).attr('data-box-value','2');
		    }

		    var	box1 = jQuery('.tbc-col-1').attr('data-box-value');
		    var	box2 = jQuery('.tbc-col-2').attr('data-box-value');
		    var	box3 = jQuery('.tbc-col-3').attr('data-box-value');
		    var	box4 = jQuery('.tbc-col-4').attr('data-box-value');
		    var	box5 = jQuery('.tbc-col-5').attr('data-box-value');
		    var	box6 = jQuery('.tbc-col-6').attr('data-box-value');
		    var	box7 = jQuery('.tbc-col-7').attr('data-box-value');
		    var	box8 = jQuery('.tbc-col-8').attr('data-box-value');
		    var	box9 = jQuery('.tbc-col-9').attr('data-box-value');

		    var row1 = box1 + box2 + box3;
		    var row2 = box4 + box5 + box6;
		    var row3 = box7 + box8 + box9;
		    var col1 = box1 + box4 + box7;
		    var col2 = box2 + box5 + box8;
		    var col3 = box3 + box6 + box9;
		    var diag1 = box1 + box5 + box9;
		    var diag2 = box3 + box5 + box7;

		    var forDraw = jQuery('.tictactoe-board-col:empty').length;

		    if (row1 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    	
		    }
		    else if (row2 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (row3 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    }

		    else if (row1 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (row2 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (row3 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }

		    //column
		    else if (col1 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    	
		    }
		    else if (col2 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (col3 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    }

		    else if (col1 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (col2 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (col3 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }

		    //diagonbal

		    else if (diag1 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    	
		    }
		    else if (diag2 == '111') {
		    	setInterval(function(){ alert('Benson wins');
		    	window.location.reload();  }, 500);
		    }

		    else if (diag1 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    	
		    }
		    else if (diag2 == '222') {
		    	setInterval(function(){ alert('Aldrin wins');
		    	window.location.reload();  }, 500);
		    }
		    else if (forDraw == 0) {
		    	setInterval(function(){ alert('draw');window.location.reload();}, 500);
		    }

		});




		
	});
	



})();