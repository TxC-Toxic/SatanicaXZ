const axios = require("axios");

async function kawaii() {
  const data = await axios.get("https://api.lolis.life/kawaii").then(res => res.data.url)
 return data;
}

async function random() {
  const data = await axios.get("https://api.lolis.life/random?nsfw=false").then(res => res.data.url)
 return data;
}

async function neko() {
  const data = await axios.get("https://api.lolis.life/neko").then(res => res.data.url)
 return data;
}

async function pat() {
   const data = await axios.get("https://api.lolis.life/pat").then(res => res.data.url)
  return data;
}
async function kaede() {
   const data = await axios.get("https://nezumiyuiz.glitch.me/api/kaede").then(res => res.data.url)
  return data;
} 
module.exports = { kawaii, random, neko, pat, kaede }
