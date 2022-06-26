const Discord = require("discord.js");
const { parse } = require("twemoji");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
    
        name: "addemoji",
        aliases: ['addemoji'],
        run: async (bot, message, args, guild) => {
            message.delete()


 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm).then(msg => msg.delete({timeout: 5000}))
  }
    
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`** <a:err_shine:838541524974305290> |  Você não pode utilizar este comando!**`).then(msg => msg.delete({timeout: 5000}))
    }
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(` ** <a:err_shine:838541524974305290> | ${message.author} Por favor, me envie o emoji.**`).then(msg => msg.delete({timeout: 5000}))

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setColor(`RANDOM`)
        .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setDescription(
          `<a:certo_shine:838541503194071041> O Emoji foi adicionado!\n\n> Nome : ${name || `${customemoji.name}`}\n\n > Visualização : [Clique aqui](${Link})\n\n`
        );

      return message.channel.send(Added).then(msg => msg.delete({timeout: 5000}))
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`** <a:err_shine:838541524974305290> | ${message.author} Por favor, envie um emoji valido.**`).then(msg => msg.delete({timeout: 5000}))
      message.channel.send(
        `** <a:err_shine:838541524974305290> | Você pode usar o emoji normal sem adicionar no servidor!**`
      ).then(msg => msg.delete({timeout: 5000}))
    }
  }
}