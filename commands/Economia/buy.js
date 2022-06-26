const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
        
    name: "daily",
    aliases: ["dep"],
    run: async (client, message, args, guild) => {
        message.delete()

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new new Discord.MessageEmbed()
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
       .setColor("#1dff22")
       .setDescription(`> Você precisa de T$3500 para comprar um Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#1dff22")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**<a:certo_shine:838541503194071041> | Bronze VIP comprado!**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2).then(Embed2 => Embed2.delete({timeout: 5000}))
    } else if(args[0] == 'nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor("#1dff22")
        .setDescription(`**<a:certo_shine:838541503194071041> | Você precisa de T$600 para comprar um Tênis da Nike**`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        
.setColor("#1dff22")
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**<a:certo_shine:838541503194071041> | Tênis da Nike comprados com sucesso**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3).then(Embed3 => Embed3.delete({timeout: 5000}))
    } else if(args[0] == 'carro') {
        let Embed2 = new Discord.MessageEmbed()
        
.setColor("#1dff22")
        .setDescription(`** <a:certo_shine:838541503194071041> | Você precisa de T$1000 para comprar um carro!**`);

        if (author < 1000) return message.channel.send(Embed2)
       
        db.fetch(`carro_${message.guild.id}_${user.id}`)
        db.add(`carro_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor("#1dff22")
        .setDescription(`** <a:certo_shine:838541503194071041> | Carro comprado com sucesso!**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3).then(Embed3 => Embed3.delete({timeout: 5000}))
    } else if(args[0] == 'mansão') {
        let Embed2 = new Discord.MessageEmbed()
        
.setColor("#1dff22")
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`** <a:certo_shine:838541503194071041> | Você precisa de T$2000 para comprar uma Mansão**`);

        if (author < 2000) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setColor("#1dff22")
        .setDescription(`**<a:certo_shine:838541503194071041> | Mansão comprada com sucesso!**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed3).then(Embed3 => Embed3.delete({timeout: 5000}))
    } else {
        let embed3 = new Discord.MessageEmbed()
        
.setColor("#1dff22")
        .setDescription('**<a:certo_shine:838541503194071041> | Diga um item para comprar! Se tiver dúvidas de quais itens existem, digite `t!store` para ver a loja!**')
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed3).then(embed3 => embed3.delete({timeout: 5000}))
    }

}
  
}