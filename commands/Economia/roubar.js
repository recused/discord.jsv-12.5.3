const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
    
  name:"rob",
  aliases: [""],
  run: async (client, message, args, guild) => {
     message.delete()   

let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`**> <a:err_shine:838541524974305290> | Você já robou alguém\n\nTente novamente em ${time.minutes}m ${time.seconds}s**`);
    message.channel.send(timeEmbed).then(msg => msg.delete({timeout: 5000}))
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> | Você precisa de 200 coins para roubar alguém**`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed).then(msg => msg.delete({timeout: 5000}))

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> | ${user.user.username} não tem nada para tu roubar**`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2).then(msg => msg.delete({timeout: 5000}))
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setDescription(`**<a:certo_shine:838541503194071041> | Você roubou o ${user} e ganhou ${random} R$**`)
.setColor("RANDOM")
message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}}

