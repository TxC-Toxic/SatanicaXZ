const request = require("axios");
const { author, version } = require("./package.json");
let loli = require("./endpoints/loli.js");
let anime = require("./endpoints/anime.js");
let waifu = require("./endpoints/waifu.js");
let brainly = require("./endpoints/brainly/index.js");

  async function wikihow() {
    const data = request.get(
      "https://kagchi-api.glitch.me/wikihow"
    ).then(res => res.data);
    return data;
  };
  async function coin() {
    const data = request.get(
      "https://kagchi-api.glitch.me/coin"
    ).then(x => x.data);
    return data;
  };
  async function user() {
    const data = request.get(
      "https://kagchi-api.glitch.me/users"
    ).then(x => x.data);
    return data.users[0];
  };
  async function memeindo() {
    const data = request.get(
      "https://kagchi-api.glitch.me/meme/indonesia"
    ).then(x => x.data);
    return data;
  };
  async function memes() {
    const data = request.get(
      "https://kagchi-api.glitch.me/meme/memes"
    ).then(x => x.data);
    return data;
  };
  async function dankmemes() {
    const data = request.get(
      "https://kagchi-api.glitch.me/meme/dankmemes"
    ).then(x => x.data);
    return data;
  };
  async function coronamemes() {
    const data = request.get(
      "https://kagchi-api.glitch.me/meme/coronamemes"
    ).then(x => x.data);
    return data;
  };

   async function subreddit(reddit) {
     if (!reddit) throw Error('Please enter subreddit');
      const data = request.get("https://kagchi-api.glitch.me/subreddit/" + reddit).then(res => res.data)
    return data;
  };
module.exports = { wikihow, coin, memeindo, memes, dankmemes, coronamemes, subreddit, author, version ,loli, anime, waifu, brainly }
