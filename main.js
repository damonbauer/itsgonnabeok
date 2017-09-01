
(function() {
	var $moreButton = document.getElementById('more');
	var $theThing = document.getElementById('theThing');
	var prevContent = '';
	var otherThings = [
		'Ethereum is going up',
		'Carbs',
		'Brown Bean Water'
	];

	pickAThing();

	$moreButton.addEventListener('click', pickAThing);

	function pickAThing() {
		var curContent = $theThing.textContent;

		while(curContent === $theThing.textContent || prevContent === $theThing.textContent) {
			$theThing.textContent = otherThings[Math.floor(Math.random() * otherThings.length)];
		}

		prevContent = curContent;
	}
}());