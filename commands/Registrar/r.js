const Discord = require('discord.js')
const db = require('quick.db')
const config = require("../../config.json")


module.exports = {
            name: "registrar",
            aliases: ['r'],
        run: async (client, message, args, guild) => {
            message.delete()


            db.add(`qtdReg_${message.guild.id}-${message.author}`, 1)
            let qtdReg = await db.get(`qtdReg_${message.guild.id}-${message.author}`) || 0;

            
let chx = db.get(`registro_logs_${message.guild.id}`);
 
    let cargo_masculino_config = db.get(`registro_masculino_${message.guild.id}`);
    let cargo_feminino_config = db.get(`registro_feminino_${message.guild.id}`);
    let cargo_naobinario_config = db.get(`registro_naobinario_${message.guild.id}`);
    let cargo_mais18_config = db.get(`registro_mais18_${message.guild.id}`);
    let cargo_menos18_config = db.get(`registro_menos18_${message.guild.id}`);
    let cargo_hetero_config = db.get(`registro_hetero_${message.guild.id}`);
    let cargo_lgbt_config = db.get(`registro_lgbt_${message.guild.id}`);
    let cargo_namorando_config = db.get(`registro_namorando_${message.guild.id}`);
    let cargo_solteiro_config = db.get(`registro_solteiro_${message.guild.id}`);
    let cargo_casado_config = db.get(`registro_casado_${message.guild.id}`);
    (`registro_enrolado_${message.guild.id}`);
    let cargo_enrolado_config = db.get(`registro_enrolado_${message.guild.id}`);
    let cargo_equiperegistro_config = db.get(`registro_equipe_${message.guild.id}`);
    let cargo_naoregistrado_config = db.get(`registro_naoregistrado_${message.guild.id}`);
    let cargo_registrado_config = db.get(`registro_registrado_${message.guild.id}`);

if(cargo_equiperegistro_config === null) {
  const embed77 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`**<a:err_shine:838541524974305290> | O painel de registro ainda não foi configurado no seu servidor** \n** <:setashinevermelha:842467104846118912> | Por favor faça ${config.prefix}configreg**`)
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  return message.channel.send(embed77).then(msg => msg.delete({timeout: 5000}))
}

  let registro = {
    equiperegistro: cargo_equiperegistro_config,
    naoregistrado: cargo_naoregistrado_config,
    registrado: cargo_registrado_config,
    masculino: cargo_masculino_config,
    feminino: cargo_feminino_config,
    naobinario: cargo_naobinario_config,
    mais18: cargo_mais18_config,
    menos18: cargo_menos18_config,
    hetero: cargo_hetero_config,
    lgbt: cargo_lgbt_config,
    namorando: cargo_namorando_config,
    solteiro: cargo_solteiro_config,
    casado: cargo_casado_config,
    enrolado: cargo_enrolado_config,
  };
 
  let page = 1;
  let pages = new Array();


  if (!message.member.hasPermission("ADMINISTRATOR", registro.equiperegistro)) return message.channel.send(`<a:errado:867839036122988575> ${message.author} Você não é da esquipe de registro, e nem tem permissão adiministrativa!`).then((mensagem) => mensagem.delete({ timeout: 5000})) 
  message.delete();
  let cargos = [];
  let pv = [];
  let masculino = message.guild.roles.cache.get(registro.masculino)
  let feminino = message.guild.roles.cache.get(registro.feminino)
  let naobinario = message.guild.roles.cache.get(registro.naobinario)
  let menos18 = message.guild.roles.cache.get(registro.menos18)
  let mais18 = message.guild.roles.cache.get(registro.mais18)
  let hetero = message.guild.roles.cache.get(registro.hetero)
  let lgbt = message.guild.roles.cache.get(registro.lgbt)
  let namorando = message.guild.roles.cache.get(registro.namorando)
  let solteiro = message.guild.roles.cache.get(registro.solteiro)
  let casado = message.guild.roles.cache.get(registro.casado)
  let enrolado = message.guild.roles.cache.get(registro.enrolado)
  let userReg = message.mentions.members.first() || await message.guild.members.cache.get(args[0])
  let member = message.guild.member(userReg);
  if (!userReg) {
    const embed69 = new Discord.MessageEmbed()
    .setDescription(`**<a:errado:867839036122988575> | ${message.author} Mencione um usuário para ou id registrar!**`)
    return message.channel.send(embed69)
  }

  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual sua sexualidade?**\n<a:1shine:880367796687609877> ${masculino}\n<a:2shine:880367811904548894> ${feminino}\n <a:3shine:880367825481515018>${naobinario}\n\n`,
    cargos: [
      masculino,
      feminino,
      naobinario
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual sua idade?**\n<a:1shine:880367796687609877>${menos18}\n <a:2shine:880367811904548894>${mais18}\n\n`,
    cargos: [
      menos18,
      mais18
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Qual o seu gênero?**\n<a:1shine:880367796687609877>${hetero}\n<a:2shine:880367811904548894>${lgbt}\n\n`,
    cargos: [
      hetero,
      lgbt
    ]
  });
  pages.push({
    description: `**Registrado:** ${userReg}\n**Registrador:** ${message.author}\n\n` +
      `**Estado civil?**\n<a:1shine:880367796687609877> ${namorando}\n<a:2shine:880367811904548894> ${solteiro}\n<a:3shine:880367825481515018> ${casado}\n<a:4shine:880367840169971732> ${enrolado}\n\n`,
    cargos: [
      namorando,
      solteiro,
      casado,
      enrolado
    ]
  });

  const embed = new Discord.MessageEmbed()
  .setColor('#993399')
  .setDescription(pages[page - 1].description)
  .setFooter('');

const embedUser = new Discord.MessageEmbed()
.setTitle(`<a:alertaroxo:887275999266476042> Você foi registrado(a)!`)
.setDescription(`**Registrador:** ${message.author}\n**Servidor:** ${message.guild.name}\n\n` +
`**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
.setThumbnail(message.guild.iconURL({dynamic : true}))
.setColor('#993399')


  message.channel.messages.fetch({ limit: 10 }).then((messages) => {
 const msgs = [];
 messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
 message.channel.bulkDelete(msgs).then();
  });

const embedFinish = new Discord.MessageEmbed()
  .setTitle(`<a:alertaroxo:887275999266476042> Você foi registrado(a)!`)
  .setDescription(`**Registrador:** ${message.author}\n**Servidor:** ${message.guild.name}\n\n` +
  `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv!==''?'nenhum.':pv.join(', ')}`)
  .setThumbnail(message.guild.iconURL({dynamic : true}))
  .setColor('#993399')
  

message.channel.send(embed).then(msg =>
  msg.react('880367796687609877').then(r => {
    msg.react('880367811904548894');
    msg.react('880367825481515018');
    msg.react('880367840169971732');
    msg.react('880368049461538846');
 
      const oneFilter = (reaction, user) => reaction.emoji.id === '880367796687609877' && user.id === message.author.id;
      const twoFilter = (reaction, user) => reaction.emoji.id === '880367811904548894' && user.id === message.author.id;
      const threeFilter = (reaction, user) => reaction.emoji.id === '880367825481515018' && user.id === message.author.id;
      const fourFilter = (reaction, user) => reaction.emoji.id === '880367840169971732' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.id === '880368049461538846' && user.id === message.author.id;
 
      const one = msg.createReactionCollector(oneFilter, { time: 60000 });
      const two = msg.createReactionCollector(twoFilter, { time: 60000 });
      const three = msg.createReactionCollector(threeFilter, { time: 60000 });
      const four = msg.createReactionCollector(fourFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      one.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[0]);
        cargos.push(pages[page - 1].cargos[0]);
        pv.push(pages[page - 1].cargos[0].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Quantidade de Registro:** \`${qtdReg}\`\n**Registrado:** ${userReg}\n**Servidor:** ${message.guild.name}\n\n` +
          `**<:SHicon_add:879075481490714705> Cargos recebidos:**${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish).then((mensagem) => mensagem.delete({ timeout: 5000}))

          embedUser.setDescription(`**Registrador:** ${message.author}\n**Servidor:** **${message.guild.name}**\n\n` +
            `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          message.channel.messages.fetch({ limit: 10 }).then((messages) => {
   const msgs = [];
   messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
   message.channel.bulkDelete(msgs).then();
    });
          client.channels.cache.get(chx).send(embedFinish);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:SHicon_add:879075481490714705>
 Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      two.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[1]);
        cargos.push(pages[page - 1].cargos[1]);
        pv.push(pages[page - 1].cargos[1].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`***Registrador:** ${message.author}\n**Quantidade de Registro:** \`${qtdReg}\` \n**Registrado:** ${userReg}\n**Servidor:** ${message.guild.name}\n\n` +
          `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish).then((mensagem) => mensagem.delete({ timeout: 5000}))
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Servidor:** **${message.guild.name}**\n\n` +
                  `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          message.channel.messages.fetch({ limit: 10 }).then((messages) => {
   const msgs = [];
   messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
   message.channel.bulkDelete(msgs).then();
    });
          client.channels.cache.get(chx).send(embedFinish);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:SHicon_add:879075481490714705>
 Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
      three.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[2]);
        cargos.push(pages[page - 1].cargos[2]);
        pv.push(pages[page - 1].cargos[2].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n**Quantidade de Registro:** \`${qtdReg}\`\n**Registrado:** ${userReg}\n**Servidor:** ${message.guild.name}\n\n` +
          `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish).then((mensagem) => mensagem.delete({ timeout: 5000}))
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Servidor:** **${message.guild.name}**\n\n` +
                  `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          message.channel.messages.fetch({ limit: 10 }).then((messages) => {
   const msgs = [];
   messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
   message.channel.bulkDelete(msgs).then();
    });
          client.channels.cache.get(chx).send(embedFinish);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
    four.on('collect', async (r, user) => {
        member.roles.add(pages[page - 1].cargos[3]);
        cargos.push(pages[page - 1].cargos[3]);
        pv.push(pages[page - 1].cargos[3].name);
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author}\n **Quantidade de Registros:** \`${qtdReg}\`\n**Registrado:** ${userReg}\n
          **Servidor:** ${message.guild.name}\n\n` +
                    `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish).then((mensagem) => mensagem.delete({ timeout: 5000}))
          embedUser.setDescription(`**Registrador:** ${message.author}\n**Servidor:** **${message.guild.name}**\n\n` +
                  `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          message.channel.messages.fetch({ limit: 10 }).then((messages) => {
   const msgs = [];
   messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
   message.channel.bulkDelete(msgs).then();
    });
          client.channels.cache.get(chx).send(embedFinish);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });

      forwards.on('collect', async (r, user) => {
        r.users.remove(user);
        if (page === pages.length) {
          embedFinish.setDescription(`**Registrador:** ${message.author} \`${qtdReg}\` \n**Registrado:** ${userReg.tag}\n
  **Servidor:** ${message.guild.name}\n` +
            `**Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          message.channel.send(embedFinish).then((mensagem) => mensagem.delete({ timeout: 5000}))
          embedUser.setDescription(`**Registrador:** ${message.author} \`${qtdReg}\` \n**Registrado:** ${userReg}\n**Servidor:** ${message.guild.name}\n\n` +
            `**<:SHicon_add:879075481490714705> Cargos recebidos:** ${pv.length===0?'nenhum':pv.join(', ')}`);
          userReg.send(embedUser);
          message.channel.messages.fetch({ limit: 10 }).then((messages) => {
   const msgs = [];
   messages.filter(m => m.author.id === registro.registrado).forEach(msg => msgs.push(msg));
   message.channel.bulkDelete(msgs).then();
    });
          client.channels.cache.get(chx).send(embedFinish);
          member.roles.add(registro.registrado);
          member.roles.remove(registro.naoregistrado);
          db.add(`registros_${message.guild.id}_${message.author}`, 1)
          msg.delete();
          return;
        }
        page++;
        embed.setDescription(pages[page - 1].description +
          `**<:SHicon_add:879075481490714705> Cargos recebidos:**\n${pv.length===0?'nenhum':pv.join(', ')}`);
        msg.edit(embed);
      });
 
    })
  )
              
  }}
