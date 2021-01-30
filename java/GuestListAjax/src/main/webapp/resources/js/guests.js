$(function() {
	$('#send').click(updateGuests);
});

function updateGuests() {
	$.ajax('guest.ajax', {
		type: 'post',
		cache: false,
		data: {
			first: $('#first').val(),
			last: $('#last').val()
		}
	}).done(displayGuests);
}

function displayGuests(data) {
	$('#guestList').html('');
	for (let i in data) {
		let g = data[i];
		$('#guestList').append(`<li>${g.first}, ${g.last}</li>`);
	}
}
