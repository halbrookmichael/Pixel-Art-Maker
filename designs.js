// variable declaration
const grid = $('#pixelCanvas'); // select canvas

let colorPick = $('#colorPicker'), // Select color input
 	dynHeight = $('#inputHeight'), // select grid height
 	dynWidth = $('#inputWidth');  // select grid width

// grid creation 
function makeGrid() {
	let rows = dynHeight.val(), // get height value
		cols = dynWidth.val(); // get width value

	if(rows > 100 || cols > 100) {
		alert('That grid will be a little too BIG!');
	} else {
		grid.find('tbody').remove(); 

		grid.append('<tbody></tbody>'); // create table body 

		// Grid creation 
		for(x = 0;x < rows;x ++) {
			grid.append('<tr>'); // create rows based on inputed value
		}
		
		for(y = 0;y < cols;y ++) {
			grid.find('tr').append('<td></td>'); // create cells based on inputed value and append to rows
		}
	}
	colorCell();
}

// when submit clicked add grid
$('input[type="submit"]').on('click', function(e) {
	e.preventDefault();
	makeGrid();
});

function colorCell() {
	let isDown = false;

	$('td').on('mousemove', function() {
		if(isDown) {
			let color = colorPick.val();
			$(this).css('backgroundColor', color);
		}
	});

	$('td').on('mousedown', function() {
		isDown = true; //
	});

	$('td').on('mouseup', function() {
		isDown = false;
	});

	$('td').on('dblclick', function() {
		$(this).css('backgroundColor', 'white'); // when double clicked return double clicked cell to white (delete color)
	});
}




