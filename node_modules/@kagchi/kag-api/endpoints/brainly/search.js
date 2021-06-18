const axios = require("axios");

async function id(query) {
    if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/id/' + query)
  return data;
}

async function pl(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pl/' + query)
  return data;
}

async function pt(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pt/' + query)
  return data;
}

async function us(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/us/' + query)
  return data;
}

async function info() {
    const data = {
     id: "indonesia",
     pt: "portuguese",
     pl: "poland",
     us: "united states",
    }
    return data;
}

module.exports = { id, pl, pt ,us, info}
