const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../config.json');
const ms = require("ms");

module.exports = {
    
  name:"roleta",
    aliases: ["roul"],
  run: async (client, message, args, guild) => {
     message.delete()   

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FF0000")
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription(`**> <a:err_shine:838541524974305290> | Especifique uma quantidade para sortear | ${config.prefix}roleta <cor> <quantidade>**`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FF0000")
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription(`**> <a:err_shine:838541524974305290> | Você está apostando mais do que você tem**`);

let colorbad =  new Discord.MessageEmbed()
.setColor("#FF0000")
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription(`**> <a:err_shine:838541524974305290> | Específique uma cor | Vermelho [1.5x] Preto [2x] Verde [15x]**`);


    if (!colour)  return message.channel.send(colorbad).then(msg => msg.delete({timeout: 5000}))
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp).then(msg => msg.delete({timeout: 5000}))
    if (money > moneydb) return message.channel.send(moneymore).then(msg => msg.delete({timeout: 5000}))
    
    if (colour == "b" || colour.includes("preto")) colour = 0;
    else if (colour == "r" || colour.includes("vermelho")) colour = 1;
    else if (colour == "g" || colour.includes("verde")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#008000")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`** 🟢 | Você ganhou ${money} coins\n\nMultiplicador: 15x**`);
        message.channel.send(moneyEmbed1).then(msg => msg.delete({timeout: 5000}))
        console.log(`${message.author.tag} Ganhou ${money} no verde`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`** 🔴 | Você ganhou ${money} coins\n\nMultiplicador: 1,5x**`);
        message.channel.send(moneyEmbed2).then(msg => msg.delete({timeout: 5000}))
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**⚫ | Você ganhou ${money} coins\n\nMultiplicador: 2x**`);
        message.channel.send(moneyEmbed3).then(msg => msg.delete({timeout: 5000}))
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**❌ | Você ${money} coins\n\nMultiplicador: 0x**`);
        message.channel.send(moneyEmbed4).then(msg => msg.delete({timeout: 5000}))
    }
}}

  
  