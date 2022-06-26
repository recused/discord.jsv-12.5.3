const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
     
        name: "configreg",
        aliases: ["configr"],
        run: async (client, message, args, guild) => {
            message.delete()

            
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`<a:err_shine:838541524974305290> **| ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!**`).then(msg => msg.delete({ timeout: 5000 }))

const embed = new Discord.MessageEmbed()
.setAuthor(`ㅤㅤㅤㅤㅤㅤPainel de configuração registro Moonyㅤㅤㅤㅤㅤㅤ`, message.author.displayAvatarURL({dynamic: true}))
.setImage("https://cdn.discordapp.com/attachments/880121714393112576/887303135230558258/unknown.png")
.setDescription(`
ㅤ
**Como configurar vc vai digitar o comando: \`m!configreg <nome da cartegoria tipo masculino + @cargo ou id do cargo>\`**

ㅤㅤㅤㅤㅤㅤ**Aqui estão as cartegoria:**ㅤㅤㅤㅤㅤㅤ
<:Purple_DireitaCDL:880368049461538846> **Cargo Masculino** = | \`${config.prefix}configreg masculino <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Feminino** =  | \`${config.prefix}configreg feminino <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Não Binario** | \`${config.prefix}configreg naobinario <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **Cargo Mais 18** =  | \`${config.prefix}configreg mais18 <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Menos 18** = | \`${config.prefix}configreg menos18 <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **Cargo Hetero** = | \`${config.prefix}configreg hetero <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo LGBT** =   | \`${config.prefix}configreg lgbt <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **Cargo Namorando** = | \`${config.prefix}configreg namorando <@cargo ou id> \`
<:Purple_DireitaCDL:880368049461538846> **Cargo Solteiro ** = | \`${config.prefix}configreg solteiro <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Enrolado ** = | \`${config.prefix}configreg enrolado <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Casado ** = | \`${config.prefix}configreg casado <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **Cargo Registrado** = | \`${config.prefix}configreg registrado <@cargo ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo Não Registrado** = | \`${config.prefix}configreg naoregistrado <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **Canal de logs** = | \`${config.prefix}configreg logs <#canal ou id>\`
<:Purple_DireitaCDL:880368049461538846> **Cargo de Equipe de Registro** = | \`${config.prefix}configreg equipe <@cargo ou id>\`

<:Purple_DireitaCDL:880368049461538846> **resetar todas as config do registros** = | \`${config.prefix}configreg reset\`
`)
.setColor("#993399")
if(!args[0]) return message.channel.send(embed).then((mensagem) => mensagem.delete({ timeout: 200000}))

        if (args[0] === 'masculino') {

            let cargo_masculino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_masculino) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg masculino @cargo-masculino\`.`);
            db.set(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`, cargo_masculino.id);

            message.channel.send(`<a:certo_shine:838541503194071041> | ${message.author} cargo masculino setado para <@&${cargo_masculino_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'feminino') {

            let cargo_feminino = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_feminino) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg feminino @cargo-feminino\`.`);
            db.set(`registro_feminino_${message.guild.id}`, cargo_feminino.id);

            let cargo_feminino_config = db.get(`registro_feminino_${message.guild.id}`, cargo_feminino.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo feminino setado para <@&${cargo_feminino_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'naobinario') {

            let cargo_naobinario = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naobinario) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg naobinario @cargo-naobinario\`.`);
            db.set(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`, cargo_naobinario.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo naobinario setado para <@&${cargo_naobinario_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'mais18') {

            let cargo_mais18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_mais18) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg mais18 @cargo-mais18\`.`);
            db.set(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`, cargo_mais18.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo mais18 setado para <@&${cargo_mais18_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'menos18') {

            let cargo_menos18 = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_menos18) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg menos18 @cargo-menos18\`.`);
            db.set(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`, cargo_menos18.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo menos18 setado para <@&${cargo_menos18_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'hetero') {

            let cargo_hetero = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_hetero) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg hetero @cargo-hetero\`.`);
            db.set(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`, cargo_hetero.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo hetero setado para <@&${cargo_hetero_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'lgbt') {

            let cargo_lgbt = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_lgbt) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg lgbt @cargo-lgbt\`.`);
            db.set(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`, cargo_lgbt.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo lgbt setado para <@&${cargo_lgbt_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))

        }
        if (args[0] === 'registrado') {

            let cargo_registrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_registrado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg registrado @cargo-registrado\`.`);
            db.set(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`, cargo_registrado.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo registrado setado para <@&${cargo_registrado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'naoregistrado') {

            let cargo_naoregistrado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_naoregistrado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg naoregistrado @cargo-naoregistrado\`.`);
            db.set(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`, cargo_naoregistrado.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo naoregistrado setado para <@&${cargo_naoregistrado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }

        if (args[0] === 'logs') {

            let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
            if(!cargo_logs) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg logs #canal-logs\`.`);
            db.set(`registro_logs_${message.guild.id}`, cargo_logs.id);

            let cargo_logs_config = db.get(`registro_logs_${message.guild.id}`, cargo_logs.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
        if (args[0] === 'equipe') {

            let cargo_equipe = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_equipe) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg equipe @cargo-equipe\`.`);
            db.set(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            let cargo_equipe_config = db.get(`registro_equipe_${message.guild.id}`, cargo_equipe.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo equipe setado para <@&${cargo_equipe_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
                if (args[0] === 'namorando') {

            let cargo_namorando = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_namorando) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg namorando @cargo-namorando\`.`);
            db.set(`registro_namorando_${message.guild.id}`, cargo_namorando.id);

            let cargo_namorando_config = db.get(`registro_namorando_${message.guild.id}`, cargo_namorando.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo namorando setado para <@&${cargo_namorando_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
                        if (args[0] === 'solteiro') {

            let cargo_solteiro = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_solteiro) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg solteiro @cargo-solteiro\`.`);
            db.set(`registro_solteiro_${message.guild.id}`, cargo_solteiro.id);

            let cargo_solteiro_config = db.get(`registro_solteiro_${message.guild.id}`, cargo_solteiro.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo solteiro setado para <@&${cargo_solteiro_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
                        if (args[0] === 'casado') {

            let cargo_casado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_casado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg casado @cargo-casado\`.`);
            db.set(`registro_casado_${message.guild.id}`, cargo_casado.id);

            let cargo_casado_config = db.get(`registro_casado_${message.guild.id}`, cargo_casado.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo equipe setado para <@&${cargo_casado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
                if (args[0] === 'enrolado') {

            let cargo_enrolado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_enrolado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`${config.prefix}configreg enrolado @cargo-enrolado\`.`);
            db.set(`registro_enrolado_${message.guild.id}`, cargo_enrolado.id);

            let cargo_enrolado_config = db.get(`registro_enrolado_${message.guild.id}`, cargo_enrolado.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} cargo enrolado setado para <@&${cargo_enrolado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }

        if (args[0] === 'reset') {
			  db.delete(`registro_masculino_${message.guild.id}`);
        db.delete(`registro_feminino_${message.guild.id}`);
			  db.delete(`registro_naobinario_${message.guild.id}`);
			  db.delete(`registro_mais18_${message.guild.id}`);
			  db.delete(`registro_menos18_${message.guild.id}`);
			  db.delete(`registro_hetero_${message.guild.id}`);
			  db.delete(`registro_lgbt_${message.guild.id}`);
        db.delete(`registro_namorando_${message.guild.id}`);
        db.delete(`registro_solteiro_${message.guild.id}`);
        db.delete(`registro_casado_${message.guild.id}`);
			  db.delete(`registro_equipe_${message.guild.id}`);
			  db.delete(`registro_naoregistrado_${message.guild.id}`);
			  db.delete(`registro_registrado_${message.guild.id}`);
			  
            message.channel.send(`<a:certo:867838833440456734> | ${message.author} reset com sucesso.`)
        }
               }
}