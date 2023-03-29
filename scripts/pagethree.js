function pagethree() {
	$.getJSON('json/data.json').done(function (d) {
		var newHTML = getTemplate('pagethree', d);
		loadingEnd($('.content'), newHTML);
	});
}