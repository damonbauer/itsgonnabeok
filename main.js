(function() {
	var $moreButton = document.getElementById('more');
	var $theThing = document.getElementById('theThing');
	var prevContent = '';
	var otherThings = [
		'You are alive at the same time as Beyonce',
		'Coffee tastes amazing',
		'Those embarrassing childhood photos are in a drawer somewhere and not on Facebook',
		'You have 100% control of your attitude',
		'There is so much to be curious about',
		'Acknowledge a bad day but don’t dwell there',
		'Life isn’t a map but a compass',
		'No one else has it figured out either',
		'We have each other',
		'It’s amazing what you can do, if you just bother',
		'People are overwhelmingly good',
		'You can do anything, but it’s up to you',
		'Hug someone',
		'It’s always nice to high five someone',
		'You get to stay in touch with people you love. That’s the whole point.',
		'A road trip and a good playlist solves all problems',
		'Knowing when something is a nice memory rather than an ongoing reality',
		'When it doubt, just have food delivered to your house'
	];

	pickAThing();

	$moreButton.addEventListener('click', function() {
		$theThing.classList.add('is-hidden');

		setTimeout(function() {
			pickAThing();
			$theThing.classList.remove('is-hidden');
		}, 250);
	});

	function pickAThing() {
		var curContent = $theThing.textContent;

		while(curContent === $theThing.textContent || prevContent === $theThing.textContent) {
			$theThing.textContent = otherThings[Math.floor(Math.random() * otherThings.length)];
		}

		prevContent = curContent;
	}
}());