/*global jQuery, Handlebars */

(function ($, hbs) {

    var $status = $("#status"),
        $branchList = $("#branchList"),
        template = hbs.templates['option.hbs'],
        empty = { branches: [{target:"", pattern: ""}] };

    function saveOptions() {
	var options,
	    branches = [];

	$("#branchList li").each(function(){
	    var $this = $(this),
	        targetVal = $this.find("input[name='target']").val(),
	        patternVal = $this.find("input[name='pattern']").val();
	    branches.push({target: targetVal, pattern: patternVal});
	});


	if (branches.length === 0){
	    options = empty;
	}
	else {
	    options = {'branches': branches};
	}

	chrome.storage.sync.set(options, function() {
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
