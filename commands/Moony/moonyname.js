const Discord = require("discord.js")

module.exports = {
   
    name: "moonyusername",
    aliases: ["moonyname"],
    run: async (client, message, args, guild) => {
        message.delete()
        if(!message.guild.owner.id.includes(message.author.id)) {
            const embed1 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<a:err_shine:838541524974305290> | Apenas o ${message.guild.owner} tem permissão de utilizar este comando!**`)
            .setFooter(`Comando requisitado por: ${message.author.username}`)
            message.channel.send(embed1).then(msg => msg.delete({ timeout: 5000 }))
        }

    if (!args[0]) { const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`** <a:err_shine:838541524974305290> | ${message.author.username} falta o nome **`)
    message.channel.send(embed2).then(msg => msg.delete({ timeout: 5000 }))}


    const name = args.join(" ");
    client.user.setUsername(name);
    const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`<:checkrosa:874325041272205374> ${message.author.tag} meu novo nome ficou perfeito ^^`)
    message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }))
}
}