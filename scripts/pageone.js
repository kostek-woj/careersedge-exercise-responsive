function pageone() {
	$.getJSON('json/data.json').done(function (d) {
		var newHTML = getTemplate('pageone', d);
		loadingEnd($('.content'), newHTML);
	});
}