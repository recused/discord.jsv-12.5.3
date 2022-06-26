const Discord = require("discord.js")

module.exports = {
   
    name: "moonystatus",
    aliases: ["moonystatus"],
    run: async (client, message, args, guild) => {
        message.delete()
        if(!message.guild.owner.id.includes(message.author.id)) {
            const embed1 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<a:err_shine:838541524974305290> | Apenas o ${message.guild.owner} tem permissão de utilizar este comando!**`)
            .setFooter(`Comando requisitado por: ${message.author.username}`)
            message.channel.send(embed1).then(msg => msg.delete({ timeout: 5000 }))
        }
   

    if (!args[0]) {
        const embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`** <a:err_shine:838541524974305290> | ${message.author.username} falta o status**`)
        message.channel.send(embed2).then(msg => msg.delete({ timeout: 5000 }))
    }


    const name = args.join(" ");
    client.user.setActivity(name);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**<:lapiss:887629612232884234> | ${message.author} o meu status foi definido para:**\n**<:lapiss:887629612232884234> | ${name}**`)
    message.channel.send(embed).then(embed => embed.delete({ timeout: 5000 }))
}
}