const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name : 'tempmute',
    aliases: ["mute"],
    /**
     * @param {Message} message
     */
    run : async(bot, message, args) => {
    message.delete().catch(() => null)

      let chx = db.get(`config_ban_${message.guild.id}`);
      if(chx === null) {
          const embederro1 = new Discord.MessageEmbed()
          .setDescription(`**:zap: ${message.author.tag} Configure o comando de logs usando ${config.prefix}setlog.**`)
          .setColor("RANDOM")
          .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
          return message.channel.send(embederro1).then(msg => msg.delete({timeout: 5000}))
        }

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Falta permissão para usar esse comando**",
    color: "RANDOM",
    setFooter: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]

        if(!Member) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Membro inválido.**",
    color: "RANDOM",
    setFooter: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))

        if(!time) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Por favor informe um tempo válido.**",
    color: "RANDOM",
    setFooter: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')

        if(!role) {
            try {
                message.channel.send('Cargo mutado não encontrado, criando cargo...')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Cargo muted criado com sucesso.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Já se encontra mutado.**",
    color: "RANDOM",
    setFooter: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))

        await Member.roles.add(role2)
      {
          const embederro1 = new Discord.MessageEmbed()
          .addField(`**🔨 Autor do Comando:**`, `\`${message.author.username}\``)
          .addField(`**:bust_in_silhouette: Usuário Mutado:**`, `\`${Member.displayName}\``)
          .addField(`**📋 Tempo:**`, `\`${time}\``)
          .setColor("RANDOM")
          .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
           message.channel.send(embederro1).then(msg => msg.delete({timeout: 5000}))
           bot.channels.cache.get(chx).send(embederro1)
        }

        setTimeout(async () => {
            await Member.roles.remove(role2)
            {
          const embederro77 = new Discord.MessageEmbed()
          .setDescription(`**> | <a:mute:832201287038795787> ${Member.displayName} agora esta desmutado.**`)
          .setColor("#FF0000")
          .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
           message.channel.send(embederro77).then(msg => msg.delete({timeout: 5000}))
            bot.channels.cache.get(chx).send(embederro77)
        }
        }, ms(time))
    }
}