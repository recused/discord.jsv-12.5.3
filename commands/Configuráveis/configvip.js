const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
        name: "configvip",
        run: async (client, message, args, guild) => {
            message.delete()

    

if (!message.member.hasPermission("MANAGE_SERVER")) {
    const embederro1 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Não tem permissão para usar esse comando. \n Permissões necessárias \`MANAGE_SERVER\`")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro1)
}

if(!message.guild.me.hasPermission("MANAGE_SERVER")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas eu não tenho permissão para isso. \n Set em mim a permissão de \`MANAGE_SERVER\`**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))

const embed = new Discord.MessageEmbed()
.setAuthor(`🌙 Painel de configuração Vip Moony`, message.author.displayAvatarURL({dynamic: true}))
.setImage(message.guild.iconURL({dynamic : true}))
.setDescription(` <a:1shine:880367796687609877> **Categoria Vip:** **${config.prefix}configvip categoria <#id da categoria>**
<a:2shine:880367811904548894> **Cargo de Vip:** **${config.prefix}configvip cargo @cargo de booster**
<:checkrosa:874325041272205374> **Reset:** **${config.prefix}reset para resetar a configvip do servidor**`)
.setColor("#993399")
if(!args[0]) return message.channel.send(embed).then((mensagem) => mensagem.delete({ timeout: 200000}))

if (args[0] === 'categoria') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro5 = new Discord.MessageEmbed()
    .setDescription(`> <a:err_shine:838541524974305290> ** Comando mal escrito** \n **Como deve escrever ${config.prefix}configvip categoria <#id da categoria>**`)
    .setColor("#ff0000")
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro5).then(embederro5 => embederro5.delete({timeout: 10000}))
    }
    db.set(`CategoriaVip_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`CategoriaVip_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} Categoria para as calls vips serem criadas foi setado em <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
}

if (args[0] === 'cargo') {
    let cargo_registrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
    if(!cargo_registrado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever: ${config.prefix}configvip cargo @cargo booster`);

    db.set(`Vip_${message.guild.id}`, cargo_registrado.id);

    let cargo_registrado_config = db.get(`Vip_${message.guild.id}`, cargo_registrado.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author.tag} cargo vip setado para <@&${cargo_registrado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))

 if (args[0] === 'reset') {
			  db.delete(`Vip_${message.guild.id}`, cargo_registrado.id);
        db.delete(`CategoriaVip_${message.guild.id}`, cargo_logs.id);

        message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author.tag} configvip resetado com sucesso `)
}
}}}