function pagetwo() {
	$.getJSON('json/data.json').done(function (d) {
		var newHTML = getTemplate('pagetwo', d);
		loadingEnd($('.content'), newHTML);
	});
}