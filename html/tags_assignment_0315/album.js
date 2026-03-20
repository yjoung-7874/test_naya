document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();
	const no = Number(e.target.album.value);
	switch (no) {
		case 1:
			document.getElementById('demo').innerHTML = 'Taylor Swift';
			break;
		case 2:
			document.getElementById('demo').innerHTML = 'Fearless';
			break;
		case 3:
			document.getElementById('demo').innerHTML = 'Speak Now';
			break;
		case 4:
			document.getElementById('demo').innerHTML = 'Red';
			break;
		case 5:
			document.getElementById('demo').innerHTML = '1989';
			break;
		case 6:
			document.getElementById('demo').innerHTML = 'reputation';
			break;
		case 7:
			document.getElementById('demo').innerHTML = 'Lover';
			break;
		case 8:
			document.getElementById('demo').innerHTML = 'folklore';
			break;
		case 9:
			document.getElementById('demo').innerHTML = 'evermore';
			break;
		case 10:
			document.getElementById('demo').innerHTML = 'Midnights';
			break;
		case 11:
			document.getElementById('demo').innerHTML = 'The Tortured Poets Department';
			break;
		case 12:
			document.getElementById('demo').innerHTML = 'The Life of a Showgirl';
			break;
		default:
			document.getElementById('demo').innerHTML = 'Invalid input.';
			break;
	}
});
