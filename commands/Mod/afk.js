const Discord = require("discord.js");

const db = require("quick.db");

module.exports = {
       
            name: "afk",
            aliases: ['afk'],
        run: async (bot, message, args, guild) => {
          let reason = args.join(' ');
          const AFKPrefix = '[AFK]';

          if(!reason) reason = 'Sem motivo pra afk!';

          try {
            await db.set(`afk-${message.author.id}+${message.guild.id}`, reason);
            message.channel.send('Afk setado com sucesso')

          } catch (err) {
            console.log(err)
            message.channel.send('Não foi possivél setar o AFK.').then(msg => msg.delete({timeout: 1000}))
          }

          try {
            await message.member.setNickname(AFKPrefix + message.member.user.username)
          } catch (err) {
            message.channel.send(`Não consegui setar o teu AFK devido a: \`${err}\``)
          }
        }
}