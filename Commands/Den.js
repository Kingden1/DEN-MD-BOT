"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "denking", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Yes you called me whats up Ok anyway support me by following my account on Instagram 🙏 \n\n ' + "║❒ 𝙒𝘼GROUP https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
    let d = '                                     ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://instagram.com/denden_kibet9107?igshid=ZHp0eXhsbHU5NHV3';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/dec033e457813cd2ff2e3.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *DEN-MD-BOT-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *DEN-MD-BOT-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
