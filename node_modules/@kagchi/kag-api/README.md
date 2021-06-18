## Installation

To Use Api Install Package First
```bash
npm install @kagchi/kag-api
```

<details>
<summary>Changelog</summary>
<br>
  Changelog V1.5.5
  <ul>
  <li>Fixed Brainly Search</li></ul>
</details>

## Usage
### Random Wikihow
```javascript
const kagApi = require("@kagchi/kag-api")
(async() => {
const wikihow = await kagApi.wikihow()
 console.log(wikihow)
})()
```
### Coinflip
```js
const kagApi = require("@kagchi/kag-api")
(async() => {
const coinflip = await kagApi.coin()
console.log(coinflip)
})()
```
### Random Users
```js
const kagApi = require("@kagchi/kag-api")
(async() => {
const users = await kagApi.user()
console.log(users)
})()
```
## Usage For Discord.js
  
### Random Wikihow
```js
const { MessageEmbed } = require("discord.js")
const kagApi = require("@kagchi/kag-api")
const wikihow = await kagApi.wikihow()
const embed = new MessageEmbed()
.setTitle(wikihow.title)
.setImage(wikihow.url)
msg.channel.send(embed)
```
### Coinflip
```js
const KagApi = require("@kagchi/kag-api")
const coinflip = await kagApi.coin()
msg.channel.send(`${coinflip.coin_image}`)
//coinflip.coin_image => get coin image
//coinflip.coin => Tail/Head
```
### Random Users
```js
const KagApi = require("@kagchi/kag-api")
const users = await kagApi.user()
msg.channel.send(`${users.name}`)
//api.surname => Get Surname
//api.addres => Get Address
//api.phone => Get Phone Number
//api.email => Get Email
//api.city => Get City
```
### Memes
```js
const KagApi = require("@kagchi/kag-api")
const meme = await kagApi.memes()
msg.channel.send(`http://imgur.com/${meme.hash}.jpg`) //send imgur image
//api.dankmemes()
//api.indonesia()
//api.coronamemes()
```

