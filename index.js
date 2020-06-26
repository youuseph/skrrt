const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  bot.user.setActivity(`jebać kBS (celowo z małej)`)
  console.log(`Siema! ${bot.user.username} Jest Online !!`)});

bot.on('message', (message) => {

  if (message.content == 'historia kreona') {
    message.channel.send("Historia Kreona");
    message.channel.send("Świat 66 - ROZBJURKA");
    message.channel.send("Świat 84 - ROZBJURKA");
    message.channel.send("Świat 100 - ROZBJURKA");
    message.channel.send("Świat 122 - ROZBJURKA");
    message.channel.send("Świat 124 - ROZBJURKA");
    message.channel.send("Swiat 130 - ROZBJURKA");
    message.channel.send("Świat 136 - ROZBJURKA");
    message.channel.send("Świat 142 - ROZBJURKA");
    message.channel.send("Świat 151 - ROZBJURKA (przez kbs(celowo z małej litery)");
  }

  if(message.content == 'kreon') {
    message.channel.send("CHUJ")
    message.channel.send("JEBIE OFFEM");
    
  }
  if(message.content == 'stary kreona') {
    message.channel.send("Ma sharingana JEBANY");
    
  }
  
  if(message.content == 'veni') {
    message.channel.send("dzban");
    message.channel.send("https://i1.jbzd.com.pl/contents/2020/06/pv2BSTtQnHn4ajFVW7Cpw6kjAHyxfnDl.mp4");
  }

  if(message.content == 'semu') {
    message.channel.send("pizda");
  }
  if(message.content == 'youuseph') {
    message.channel.send("kutas");
  }
  if(message.content == 'korki') {
    message.channel.send("wiadro");
  }
  if(message.content == 'Witajus') {
    message.channel.send("Koleżanka rumunów");
    message.channel.send("Laska veniego");
    message.channel.send("Rób gałę");
    message.channel.send("Poka cyce");

  }
   if(message.content == 'Kinia') {
    message.channel.send("Koleżanka rumunów");
    message.channel.send("Laska veniego");
    message.channel.send("Rób gałę");
    message.channel.send("Poka cyce");

  }
   if(message.content == 'kbs') {
    message.channel.send("jebać kBS(celowo z małej)");
  }
   if(message.content == 'imperium') {
    message.channel.send("jebać imperium");
  }
   if(message.content == 'urban') {
    message.channel.send("weteran kociego zadka");
  }
    if(message.content == 'ping') {
    message.channel.send("pong");
  }

});

bot.login('NzIyMjEzNzY2OTM4MjMwODQ0.Xuf0JQ.l2HhfVaW98F_lB6-kSNSzd7wB_0');



