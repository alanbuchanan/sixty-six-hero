module.exports = {
	players: [
		'Gordon Banks',
		'George Cohen',
		'Jack Charlton',
		'Bobby Moore',
		'Ray Wilson',
		'Nobby Stiles',
		'Alan Ball',
		'Bobby Charlton',
		'Martin Peters',
		'Geoff Hurst',
		'Roger Hunt'
	],
	get: function(){
		return this.players[Math.floor(Math.random() * this.players.length)]
	}
}