/*global jQuery */
(function ($) {
    var empty = { branches: [] };

    function rewriteLink(element, branches){
	var $element = $(element),
	    href = $element.attr('href').split("/"),
	    targetBranchPosition = (href.length - 1),
	    targetVal = href[targetBranchPosition],
	    currentBranch,
	    regex,
	    i;

	for(i=0; i< branches.length; i++){
	    currentBranch = branches[i];
	    regex = RegExp(currentBranch.pattern);
	    if (regex.test(targetVal)) {
		href[targetBranchPosition] = currentBranch.target + "..." + targetVal;
	    }
	}

	//Write back
	$element.attr('href', href.join("/"));
    }

    function handleBranches(items){

	function handleLink(index, element){
	    return rewriteLink(element, items.branches);
	}
	$(".recently-pushed-branch-actions a").each(handleLink);
    }

    function init(){
	//This call is async, items is only populated in the callback
	chrome.storage.sync.get(empty, handleBranches);
    }

    init();
}(jQuery));
