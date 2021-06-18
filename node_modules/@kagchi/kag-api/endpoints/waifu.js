const axios = require("axios")

 async function nezuko() {
   const data = await axios.get("https://kagchi-api.glitch.me/waifu/nezuko").then(res => res.data.url)
  return data;
}
 async function random() {
   const data = await axios.get("https://nekos.life/api/v2/img/waifu").then(res => res.data.url)
  return data;
}
 async function bunnygirl() { 
   const data = await axios.get("https://kagchi-api.glitch.me/waifu/bunny").then(res => res.data.url)
  return data;
}
 async function megumin() {
   const data = await axios.get("https://kagchi-api.glitch.me/waifu/megumin").then(res => res.data.url)
  return data;
}
 async function zerotwo() {
   const data = await axios.get("https://nezumiyuiz.glitch.me/api/zerotwo").then(res => res.data.url)
  return data;
}

 async function rem() {
   const data = await axios.get("https://nezumiyuiz.glitch.me/api/rem").then(res => res.data.url)
  return data;
}

 async function hayasaka() {
   const data = await axios.get("https://nezumiyuiz.glitch.me/api/hayasaka").then(res => res.data.url)
  return data;
}

 async function chika() {
   const data = await axios.get("https://nezumiyuiz.glitch.me/api/chika").then(res => res.data.url)
  return data;
}
module.exports = { nezuko, random, bunnygirl, megumin, zerotwo, hayasaka, chika, rem };
