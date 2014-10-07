(function () {
    var empty = { branches: [] };

    function findPullRequestLinks() {
	var links = document.getElementsByTagName("a");
	return links;
    }
    function handleBranches(items){
	console.log(items.branches);
    }

    function init(){
	console.log("Content Script");
	chrome.storage.sync.get(empty, handleBranches);
    }

    init();
}());
