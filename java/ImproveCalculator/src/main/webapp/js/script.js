$(document).ready(function () {
	$("#calculator").submit(function (ev) {
		ev.preventDefault();
		var m = $(this);
		$.post(m.attr("action"), m.serialize(), function(res) {
			var rs = res.split('|');
			$("#plus").val(rs[0]);
			$("#subtract").val(rs[1]);
			$("#multiply").val(rs[2]);
			$("#divide").val(rs[3]);
		});
		return false;
	});
});
