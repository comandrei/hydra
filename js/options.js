/*global jQuery, Handlebars */

(function ($, hbs) {

    var $status = $("#status"),
        $branchList = $("#branchList"),
        template = hbs.templates['option.hbs'],
        empty = { branches: [{target:"", pattern: ""}] };

    function saveOptions() {
	var branches = empty;
	chrome.storage.sync.set(branches, function() {
	    $status.html('Options saved');
	    setTimeout(function() {
		$status.empty();
	    }, 750);
	});
    }

    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restoreOptions() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get(empty, function(items) {
	    $branchList.html(template(items));
	});
    }
    document.addEventListener('DOMContentLoaded', restoreOptions);
    $("#save").on('click', saveOptions);
}(jQuery, Handlebars));
