const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
        name: "removevip",
        aliases: ["removevipc"],
        run: async (client, message, args, guild) => {
            message.delete()

const Usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!Usuario){
  const embed77 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`**> | <a:err_shine:838541524974305290> Você não mencionou um usuario ! **`)
  .setFooter(`Comando requisitado por ${message.author.username}`)
  message.channel.send(embed77).then(msg => msg.delete({timeout: 5000}))
}

const setarcargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
if (!message.guild.members.cache.get(Usuario.id).roles.cache.has(setarcargo.id)){
  const embederro = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription(`** <a:err_shine:838541524974305290> | O ${Usuario} não possui o seu vip**`)
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
return message.channel.send(embederro).then(msg => msg.delete({timeout: 5000}))
}

message.guild.members.cache.get(Usuario.id).roles.remove(setarcargo.id)
  
db.delete(`UsuarioVip_${message.guild.id}_${message.author.id}`, Usuario.id)


let UserAdicionado = new Discord.MessageEmbed()
.setColor("#1dff22")
.setDescription(`** <a:certo_shine:838541503194071041> | O vip ${setarcargo} foi removido com sucesso ao ${Usuario}**`)
.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
message.channel.send(UserAdicionado).then(UserAdicionado => UserAdicionado.delete({timeout: 15000}))}}