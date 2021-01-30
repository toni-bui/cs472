$(function() {
	const API_HOST = 'https://jsonplaceholder.typicode.com';
	let postForm = $('#post_form');
	let postList = $('#post_list');
	let postTpl = $($('#post_tpl').html());
	let commentTpl = $($('#comment_tpl').html());
	$('a', postTpl).click((e) => {
		e.preventDefault();
		let self = $(e.target);
		let req = {postId: self.attr('data-id')};
		let commentList = $('ul', self.parent());
		if (commentList.is(':visible')) {
			commentList.hide();
			self.text('Show comments');
		} else {
			commentList.show();
			self.text('Hide comments');
		}
		if (commentList.html() == '') {
			$.get(`${API_HOST}/comments`, req)
				.fail(() => alert('Cannot get data'))
				.done((data) => {
					data.forEach((item) => {
						console.log(item)
						let clone = $(commentTpl).clone();
						$('strong', clone).text(item.name);
						$('span', clone).text(item.email);
						$('div', clone).text(item.body);
						commentList.append(clone);
					});
				});
		}

		return false;
	});
	postForm.submit((e) => {
		e.preventDefault();
		postList.html('');
		$.get(`${API_HOST}/posts`, postForm.serialize())
			.fail(() => alert('Cannot get data'))
			.done((data) => {
				data.forEach((item) => {
					let clone = $(postTpl).clone(true);
					$('h3', clone).text(item.title);
					$('a', clone).attr('data-id', item.id);
					$('div', clone).text(item.body);
					postList.append(clone);
				});
			});
		return false;
	});
});
