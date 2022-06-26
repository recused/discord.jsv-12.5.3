const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")


module.exports = {
        
        name: "daily",
        run: async (client, message, args, guild) => {
            message.delete()

            let amount = Math.floor(Math.random() * 1500 + 500);
            let timeout = 86400000;

            let daily = db.fetch(`daily_${message.author.id}`);
            if(daily !== ms && timeout - (Date.now() - daily) > 0) {
              let time = ms(timeout - (Date.now() - daily));

              let esperar = new Discord.MessageEmbed()
              .setAuthor("Economia  • Daily", message.author.displayAvatarURL({dynamic: true}))
              .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
              .setDescription(`** <a:err_shine:838541524974305290> | ${message.author} você ja coletou todos seus daily hoje espere até ${time}**`)
              .setColor("#FF0000")
              message.channel.send(esperar).then(msg => msg.delete({ timeout: 20000 }))
            } else {
              let receber = new Discord.MessageEmbed()
              .setAuthor("Economia  • Daily", message.author.displayAvatarURL({dynamic: true}))
              .setColor("#1dff22")
              .setDescription(`**<a:certo_shine:838541503194071041> | Você recebeu ${amount}R$ com sucesso**`)
              .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
              message.channel.send(receber).then(msg => msg.delete({ timeout: 20000 }))
              db.add(`money_${message.author.id}`, amount)
              db.set(`daily_${message.author.id}`, Date.now())
            }
        }
} 