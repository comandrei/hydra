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

    function restoreOptions() {

	chrome.storage.sync.get(empty, function(items) {
	    // Use a default

	    if (items.branches.length === 0) {
		items = empty;
	    }
	    $branchList.html(template(items));
	});
    }

    function addAnother(){
	$branchList.append(template(empty));
    }

    document.addEventListener('DOMContentLoaded', restoreOptions);

    $("#addAnother").on('click', addAnother);

    $("#save").on('click', saveOptions);

}(jQuery, Handlebars));
