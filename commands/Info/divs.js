const { MessageEmbed } = require("discord.js");


module.exports = {
            name: "divs",
            aliases: ['divs'],
        		run: async (client, message, args, guild) => {
            message.delete()

        const member = message.mentions.members.first() || message.member;

        const invites = await message.guild.fetchInvites()
        let i = 0;
        const userInv = invites.filter(u => u.inviter && u.inviter.id === member.user.id)

        if (userInv.size <= 0) {
            return message.send(`> <a:err_shine:838541524974305290> ${member} Você não tem invites`)
        }
        const invitecodes = userInv.map(x => x.code).join('\n')

        userInv.forEach(inv2 => {
            i += inv2.uses
        });

        const embed = new MessageEmbed()
            .setAuthor(member.user.tag, message.guild.iconURL({ dynamic: true }))
            .addField("<:aaa_defesa_cde:863072919441506325> **Usuários convidados**", i)
            .addField("<:addinvite:879646856924258344> **Códigos dos invites**", invitecodes)
            .setColor("32ce32")
            .setTimestamp()
        message.channel.send(embed).then(embed => embed.delete({ timeout: 20000 }))
    }
}