# sixty-six-hero
NodeJS npm module that returns a random ['66 hero](https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_Final).

## Usage

```js
var sixtySixHero = require('sixty-six-hero');

var hero = sixtySixHero.get(); // 'Bobby Charlton'
var allPlayers = sixtySixHero.players; // Array of all players in order of position
```