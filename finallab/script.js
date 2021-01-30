$(function() {
	const API_HOST = 'https://jsonplaceholder.typicode.com';
	let postForm = $('#post_form');
	let postList = $('#post_list');
	let postTpl = $($('#post_tpl').html());
	let commentTpl = $($('#comment_tpl').html());
	function loadPost(filter) {
		$.get(`${API_HOST}/posts`, filter)
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
	}
	function loadComment(filter, callback) {
		$.get(`${API_HOST}/comments`, filter)
			.fail(() => alert('Cannot get data'))
			.done(callback);
	}
	$('a', postTpl).click((e) => {
		e.preventDefault();
		let self = $(e.target);
		let commentList = $('ul', self.parent());
		if (commentList.is(':visible')) {
			commentList.hide();
			self.text('Show comments');
		} else {
			commentList.show();
			self.text('Hide comments');
		}
		if (commentList.html() == '') {
			loadComment({postId: self.attr('data-id')}, (data) => {
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
		document.location.hash = e.target.userId.value;
		return false;
	});
	function subscribeHashChange() {
		if (window.location.hash) {
			try {
				id = parseInt(window.location.hash.substring(1));
				postList.html('');
				loadPost({userId:id});
			} catch(ex) {
				console.log(ex)
			}
		}
	}
	$(window).on('hashchange', subscribeHashChange);
	subscribeHashChange();
});
