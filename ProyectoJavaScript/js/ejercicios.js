
/*EJERCICIOS JAVA INTERNET*/

let gifts = ["tv", "calcetines", "toys"];

function wrapping(gifts) {
  const wrappedGifts = gifts.map(gifts => {
    const wrappedGifts = `*${`*`.repeat(gifts.length + 2)}*\n*${gifts}\n*${`*`.repeat(gifts.length + 2)}`;
    return wrappedGifts
  })

  return wrappedGifts;
}

const envueltos = wrapping(gifts);

envueltos.forEach(gift => {
  console.log(gift);
});

console.log(envueltos)


/****EN ESPAÑOL* */

let regalos = ["calcetines", "play", "ordenador"];

function envolver(regalos){
  const regalosEnvueltos = regalos.map(regalos => {
    const regalosEnvueltos = `${"*".repeat(regalos.length +2)}\n*${regalos}*\n${"*".repeat(regalos.length +2)}`
    return regalosEnvueltos
  })

  return regalosEnvueltos;
}

const envueltos1 = envolver(regalos);

console.log(envueltos1)