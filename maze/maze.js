$(function() {
	let start = false;
	let flag = false;
	const catchLose = function() {
		start ? lose() : null
	}
	const checkWin = function() {
		if (start) flag ? win() : lose()
	}
	function lose() {
		start = false;
		$('.boundary').addClass('lose')
		$('#status').text('YOU LOSE!')
	}
	function win() {
		start = false;
		$('.boundary').addClass('win')
		$('#status').text('YOU WIN!')
	}
	$('#start').click(function() {
		if (start) return;
		flag = true
		start = true
		$('.boundary').removeClass('lose').removeClass('win')
		$('#status').text('Moving mouse...')
	});
	$('.boundary').mouseenter(catchLose);
	$('#maze').mouseleave(catchLose);
	$('#end').mouseenter(checkWin);
});
