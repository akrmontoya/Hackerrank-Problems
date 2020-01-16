module.exports.vowelsAndConsonants = (s) => {
	let vowels = [];
	let consonants = [];
	for(let letter of s){
		if(letter === 'a' || letter === 'e' || letter === 'i'
			|| letter === 'o' || letter === 'u' ) {
			vowels.push(letter);
		} else {
			consonants.push(letter);
		}
	}

	for(let letter of vowels){
		console.log(letter);
	}

	for(let letter of consonants){
		console.log(letter);
	}
}
