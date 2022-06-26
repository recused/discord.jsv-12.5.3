const Discord = require("discord.js")
const db = require('quick.db');
module.exports = {
        name: 'ban',
				aliases: ['banir'],
        run: async (bot, message, args, guild) => {
            message.delete()
            
            var banimentos = db.get(`bans${message.author.id}`)
  if(banimentos == null) banimentos = 0;
let chx = db.get(`config_ban_${message.guild.id}`);
var list = [
  'https://tenor.com/view/ban-button-keyboard-press-the-ban-button-gif-16387934',
  'https://tenor.com/view/llamaban-syntheticllama-ban-llama-gif-21044290',
  'https://cdn.discordapp.com/attachments/806749828943970315/885699875763806268/3e4ede0b187bd7f74f5e70b8b3e1f82c.gif',
  'https://cdn.discordapp.com/attachments/806749828943970315/885699876179050579/42dd884acd74ab8c3755e17cebc5c1d2.gif',
  'https://cdn.discordapp.com/attachments/806749828943970315/884095668271071282/464eb391587310f036b67bd273672dbc.gif',
  'https://cdn.discordapp.com/attachments/806749828943970315/884095556782280794/f162da802b9221d2a45f0c8ab066242a.gif',

'https://media.discordapp.net/attachments/806749828943970315/849186352453255188/33d5c5359f6298b6c7386d920d73c217.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];

  let user = message.mentions.users.first() || bot.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) {
      const embederro = new Discord.MessageEmbed()
      .setColor("000000")
      .setDescription(`${message.author}, Mencione alguém para banir ou use um id válido.`)
      return message.channel.send(embederro).then(embederro => embederro.delete({ timeout: 15000 }))
    }
    if (membro === message.member) {
      const embederro2 = new Discord.MessageEmbed()
    .setColor("000000")
    .setDescription(`${message.author}, Não tem permissão para usar este comando.`)
    return message.channel.send(embederro2).then(embederro2 => embederro2.delete({ timeout: 15000 }))
  }
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Motivo inválido.**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas você não tem permissão para isso.**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas você não tem permissão para isso.**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas eu não tenho permissão para isso.**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))

  // comando criado por yasuke/ recused

  const embedreacao = new Discord.MessageEmbed()
  .setTitle("<a:ajudaamarela:874314284040085524> Sistema de Punições - Moony:tm:")
  .setColor("ffff00")
  .setFooter(`Comando requisitado por ${message.author.tag}`, message.guild.iconURL({dynamic : true}))
  .setDescription(`<:setaamarela:874314219259052042> ${message.author.tag} Deseja realmente banir este user? ${membro} \`(${membro.id})\` \n Se sim reaja a esta mensagem com o emoji <a:certo_shine:838541503194071041>`)
  .addFields({
                name: "<:motivo:832211492652711936> Motivo Inserido:",
                value: `**• ${motivo} ** `
  })
  message.channel.send(embedreacao).then(embedreacao => { embedreacao.delete({ timeout: 5000 }); embedreacao.react("838541503194071041")

        let filtro = (reaction, usuario) => reaction.emoji.id = "838541503194071041" && usuario.id === message.author.id;
        let coletor = embedreacao.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embedpunicao = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
                .setFooter(`• ${message.author.username} já baniu ${banimentos} users`, message.author.displayAvatarURL({format: 'png'}))
                .setImage(rand)
                .setColor("ff0000")
                .addFields(
                  {
                    name: "**<:aaa_defesa_cde:863072919441506325> Autor do Comando:**",
                    value: `<:setashinevermelha:842467104846118912> **Tag:** \`${message.author.tag}\`\n<:setashinevermelha:842467104846118912> **Id:** \`${message.author.id}\``,
                    inline: false, 
                  },
                  {
                    name: "**<:autor:857588040318582794> Vítima de Punição:**",
                    value:`<:setashinevermelha:842467104846118912> **Tag:** \`${user.tag}\`\n <:setashinevermelha:842467104846118912> **Id:** \`${user.id}\``,
                    inline: false, 
                  },

                  {
                    name:"**<:motivo:832211492652711936> Motivo:**",
                    value: `**• ${motivo}**`,
                    inline: false, 
                  }

                )
                message.channel.send(embedpunicao).then(embedpunicao => embedpunicao.delete({ timeout: 10000 }))
                bot.channels.cache.get(chx).send(embedpunicao)
            }
            db.add(`bans${message.author.id}`, 1)
            membro.ban();
            
            let dm = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL({format: "png"}))
            .setTitle(`** Sistema de Punição - Moony:tm:**`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .addFields({
          name: "<a:wordlexpired:874360724170878986> Servidor:",
          value: `**• ** \`${message.guild.name}\``
        },
        {
          name: ":bust_in_silhouette: Autor do Comando:",
          value: `**Tag:** \`${message.author.tag}\``,
          inline: false, 
        },
        {
          name:"🔹 Motivo:",
          value: ` ** ${motivo}**`,
          inline: false, 
        }
        .setColor("ff0000")
        .setTimestamp()
        .setFooter(`${message.author.username} já baniu ${banimentos} users`))
        membro.send(dm)
        })
    })
}
} 