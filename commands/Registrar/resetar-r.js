const Discord = require("discord.js")
const db = require("quick.db")


module.exports = {
        
         name: "resetar-r",
        run: async (client, message, args, guild) => {
            message.delete()


            let user = message.author

            let member = message.mentions.members.first() || await message.guild.members.cache.get(args[0]) //menção
let registros = await db.delete(`qtdReg_${message.guild.id}-${message.author}`) || 0; //ver qnts tem

const embed = new Discord.MessageEmbed()
.setAuthor("Sistema  • Resetar Registro", message.author.displayAvatarURL({dynamic: true}))
.setDescription(`
                 **Registros: ${registros}**`)
.setColor("#df4141")
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
.setTimestamp();
user.send(`${message.author}`, embed).then(msg => msg.delete({ timeout: 20000 }))
        }
}