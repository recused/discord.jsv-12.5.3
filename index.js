const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const fs = require("fs");
const { Collection, Client } = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Client(); //Criação de um novo Client
const config = require("./config.json"); 
const Discord = require("discord.js")
const db = require('quick.db')
 
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./main/${x}`)(client));


client.on("message", async message => {
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
    if (regex.exec(message.content)) {
      if(message.member.hasPermission("MANAGE_GUILD")) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        await message.channel.bulkDelete({ timeout: 1000 }); message.delete()
      const embed1 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTimestamp(true)
        .setFooter(`• ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setDescription(`** > <a:err_shine:838541524974305290> | Não são permitidos convites de outros servidores**`)
      return message.channel.send(embed1).then(embed1 => embed1.delete({ timeout: 5000 }))
    }
  });
  client.on("guildMemberAdd", (member) => {
    let ferinha_autorole = db.get(`autorole_${member.guild.id}`);
    if (!ferinha_autorole === null) return;
    member.roles.add(ferinha_autorole)
    let chx = db.get(`welcomec_${member.guild.id}`);
    let contador = member.guild.memberCount;
    let servidor = member.guild.name;
    if (!chx) return;
  
    let embedwelcome = new Discord.MessageEmbed() // welcome msg
      .setDescription(`**Boas amigão ${member.user.tag} sê bem-vindo ao ${servidor}**\n`)
      .setFooter(`${member.guild.name}`,member.guild.iconURL({ dynamic: true }))
      .setColor("#00008b")
    client.channels.cache.get(chx).send(embedwelcome)
  });

  
  client.on('messageDelete', async (message, oldMessage, newMessage) => {
       
    if(message.author.bot) return;

       const embed = new Discord.MessageEmbed()
       .setTitle('<:msgdeleted:887629647049785344> | Mensagem apagada')
       .setDescription(`**Autor:** ${message.author}\n**Canal:** ${message.channel}\n<:lapiss:887629612232884234> **Mensagem**\n> ${message.content}`)    
        .setColor('RANDOM')  
        let chx = db.get(`config_msg_${message.guild.id}`);
       if (!chx) return;
       client.channels.cache.get(chx).send(embed)
   })
  
  client.on('messageUpdate', async (message, oldMessage, newMessage) => {
         
    if(message.author.bot) return;
    let chx = db.get(`config_msg_${message.guild.id}`);
       const embed = new Discord.MessageEmbed()
       .setTitle('<:msgupdate:887629629706338334> | Mensagem editada')
       .setDescription(`**Autor:** ${message.author}\n**Canal:** ${message.channel}\n<:lapiss:887629612232884234> **Mensagem antiga**\n> ${message.content || 'Anexo'}\n<:links:880800811549077604> **Nova mensagem**\n> ${oldMessage.content || 'Anexo'}\n`)    
       .setColor('RANDOM')
       if (!chx) return;
 client.channels.cache.get(chx).send(embed)
   })

   

  client.on('guildCreate', async (guild, message) => {
    const moment = require("moment")
    moment.locale('pt-br')
      const canaldelog = client.channels.cache.get('927572540933693490')
    
      const embedlog = new Discord.MessageEmbed()
      .addFields(
        {name: 'Informações do servidor:', value: `> **Nome:** \`${guild.name}\`\n> **Id:** \`${guild.id}\`\n> **Total de membros:** \`${guild.memberCount}\`\n> **Criado em:** \`${moment(guild.createdAt).format("L")} (${moment(guild.createdAt).startOf("day").fromNow()})\`\n> **Dono:** \`${guild.owner.user.tag} (${guild.owner.id})\``}
    )  .setDescription(`**<a:ajuda:832259977791537232> | ${client.user.tag}(Bot da Delta77:tm:) Foi adicionado em Mais um server** ! \n **Contacta o [Inure](https://steamcommunity.com/id/auto-kill/) para adquirir o seu !**`)
        .setColor('000000')
        .setFooter(`Estou em ${client.guilds.cache.size} servers !`, "https://cdn.discordapp.com/emojis/874325041272205374.png?size=96" ,)
        .setTimestamp()
      .setThumbnail(guild.iconURL({ dynamic: true }))
      canaldelog.send(embedlog)
    });
    

client.login(process.env.TOKEN)
