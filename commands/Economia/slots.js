const slotItems = ["🍇", "🍉", "🍊", "🍎", "🍌", "🍓", "🍒"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name:"slots",
    aliases: ["sl"],
   run: async (client, message, args, guild) => {
       message.delete()   

    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`> <a:err_shine:838541524974305290> Você está apostando mais do que você tem`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`> <a:err_shine:838541524974305290> Specifique uma quantidade`);

    if (!money) return message.channel.send(moneyhelp).then(msg => msg.delete({ timeout: 20000 }))
    if (money > moneydb) return message.channel.send(moneymore).then(msg => msg.delete({ timeout: 20000 }))

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`** <a:V_CifraoTKF:887644427479289856> | ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}**\n\n**Você ganhou R$${money}**`)
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setColor("#020202")
        message.channel.send(slotsEmbed1).then(msg => msg.delete({ timeout: 20000 }))

        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nVocê perdeu R$${money}`)
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setColor("RANDOM")
        message.channel.send(slotsEmbed).then(msg => msg.delete({ timeout: 20000 }))
    }
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
  
  