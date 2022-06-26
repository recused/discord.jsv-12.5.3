const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        
        name: "trabalhar",
        aliases: ["work"],
        run: async (client, message, args, guild) => {
            message.delete()
    
    
    let author = await db.fetch(`work_${message.guild.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setAuthor("Economia  • Trabalho", message.author.displayAvatarURL({dynamic: true}))
        .setColor("#df4141")
        .setDescription(`> <a:err_shine:838541524974305290> ${message.author} Você já trabalhou hoje descanse até **${time}**`);
        
        message.channel.send(`${message.author}`, timeEmbed).then(msg => msg.delete({ timeout: 2000 }))
    } else {

        let replies = ['Programador','Construtor','Agricultor','Garoto(a) de Programa','Garçom','Mecanico','Cozinheiro',
                      'Vendedor','Barqueiro','Youtuber','Padeiro', 'Vendedor de bots', 'Traficante', 'Policial', 'Pedreiro']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 5000) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setAuthor("Economia  • Trabalho", message.author.displayAvatarURL({dynamic: true}))
        .setColor("#1dff22")
        .setDescription(`<a:certo_shine:838541503194071041> | ${message.author} trabalhou como **${replies[result]}** e recebeu **R$${amount} reais.**`)
        .setTimestamp();

        message.channel.send(embed1).then(msg => msg.delete({ timeout: 2000 }))
        
        db.add(`money_${message.guild.id}`, amount)
        db.set(`work_${message.guild.id}`, Date.now())
    };
}
}