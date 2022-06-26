
const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
        
        name: "vip",
        aliases: ["painelvip"],
        run: async (client, message, args, guild) => {
            
		let vip = db.get(`Vip_${message.guild.id}_${message.author.id}`) 
        let categoria = db.get(`CategoriaVip_${message.guild.id}`)

        let Categoria0 = await message.guild.channels.cache.get(db.get(`CategoriaVip_${message.guild.id}`))
        let Call0 = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
        let Cargo0 = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))

        
        let cargoativo = Cargo0 || "Nenhum cargo criado!"
        let callativa = Call0 || "Nenhuma call criada!"

        let CallEmbed = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
        if(CallEmbed == null) CallEmbed = "Criar Call";
        if(CallEmbed >= 1) CallEmbed = "Editar Call";

        let CargoEmbed = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
        if(CargoEmbed == null) CargoEmbed = "Criar Cargo";
        if(CargoEmbed >= 1) CargoEmbed = "Editar Cargo";


        let avisonvip = new Discord.MessageEmbed()
        .setColor("#993399")
        .setAuthor(`🌙 Sistema Vip Moony`, message.guild.iconURL({ dynamic: true}))
        .setDescription(`Olá ${message.author} Você não é um usuario vip!`)
        if(!vip) return message.channel.send(avisonvip).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));

        let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
        if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
        if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

        let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
        if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
        if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";

        const painel = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** Booster\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${cargoativo}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${callativa}`)
        .addFields(
            {
                name: "Opções Disponíveis:",
                value: ` <:1shine:887629525205254194> | ${CargoEmbedEdit} 
                <:2shine:887629543551152138> | ${CallEmbedEdit} 
                <:3shine:887629557992149002> | Adicionar vip em um usuário
                <:4shine:887629574601580565> | Remover vip de um usuário
                <:5shine:887629595157860392> | Mudar a cor do Cargo
                <a:err_shine:838541524974305290> | Resetar `
            }
        )
        message.channel.send(painel).then(msg => {
            msg.react('887629525205254194').then(r => {
              msg.react('887629543551152138').then(r => {
                msg.react('887629557992149002').then(r => {
                  msg.react('887629574601580565').then(r => {
                    msg.react('887629595157860392').then(r => {
                      msg.react('838541524974305290').then(r => {
                          })
                        })
                      })
                    })
                  })
                })
                const CriarCargoFilter = (reaction, user) => reaction.emoji.id === '887629525205254194' && user.id === message.author.id;//ok
                const CriarCallFilter = (reaction, user) => reaction.emoji.id  === '887629543551152138' && user.id === message.author.id;//ok
                const AddUserFilter = (reaction, user) => reaction.emoji.id  === '887629557992149002' && user.id === message.author.id;//ok
                const RemoveUserFilter = (reaction, user) => reaction.emoji.id  === '887629574601580565' && user.id === message.author.id;//ok
                const MudarCorFilter = (reaction, user) => reaction.emoji.id  === '887629595157860392' && user.id === message.author.id;//ok
            	const ResetarFilter = (reaction, user) => reaction.emoji.id  === '838541524974305290' && user.id === message.author.id;//ok
                
                const CriarCargo = msg.createReactionCollector(CriarCargoFilter);//ok
                const CriarCall = msg.createReactionCollector(CriarCallFilter);//ok
                const AddUser = msg.createReactionCollector(AddUserFilter);//ok
                const MudarCor = msg.createReactionCollector(MudarCorFilter);//ok
            	const Resetar = msg.createReactionCollector(ResetarFilter);//ok
                const RemoveUser = msg.createReactionCollector(RemoveUserFilter);//ok
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
                //Criar Cargo
                CriarCargo.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "887629525205254194":

                let Cargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                if (Cargo){
                    //message.channel.send("Você já possui um cargo de vip criado, por isso eu não irei criar outro!")
                    message.channel.send({embed: {
                        description: '<:canall:887629849852772403> ** Digite um novo nome para o seu cargo**\n <:setaamarela:874314219259052042> ** Limite de caracteres: 50**',
                        color: "#FFFF00",
                        setFooter: (`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    }}).then(m => {
                    message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                    .on("collect", async message => {
                    let CargoEdit = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    let editarnome = message.content
                    message.delete(m)
                    CargoEdit.setName(editarnome);
                    let CallEditada = new Discord.MessageEmbed()
                    .setColor("#1dff22")
                .setDescription(`** <a:certo_shine:838541503194071041> | Cargo Vip editado com sucesso**`)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(CallEditada).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));

                    let CallEdit2 = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                    let CargoEdit2 = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    let editarmsg3 = CargoEdit2 || "Nenhum cargo criado!"
                    let editarmsg4 = CallEdit2 || "Nenhuma call criada!"

                    let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
                    if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
                    if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

                    let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
                    if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
                    if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";
                    const paineledit = new Discord.MessageEmbed()
                    
        .setColor("#FFFF00")
        .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** <@&859401597389897738>\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${editarmsg3}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${editarmsg4}`)
        .addFields(
            {
                name: "Opções Disponíveis:",
                value: `<:1shine:887629525205254194> | ${CargoEmbedEdit} 
                <:2shine:887629543551152138> | ${CallEmbedEdit} 
                <:3shine:887629557992149002> | Adicionar vip em um usuário
                <:4shine:887629574601580565> | Remover vip de um usuário
                <:5shine:887629595157860392> | Mudar a cor do Cargo
                <a:err_shine:838541524974305290> | Resetar`
            }
                    )
                    msg.edit(paineledit)
                    return;
                    })
                    }) 
                }
                else
                {

                message.channel.send({embed: {
                    description: '<:canall:887629849852772403> ** Digite um nome para o seu cargo**\n <:setaamarela:874314219259052042> ** Limite de caracteres: 50** ',
                    color: "FFFF00",
                    setFooter: (`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                }}).then(m => {

                message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                .on("collect", async (message, user) => {
                    
                const util = require('util');
                    
                const setTimeoutPromise = util.promisify(setTimeout);
                
                const uservip = message.author
                let nomecargo = message.content

                const role = await message.guild.roles.create({
                    data: {
                      name: `${nomecargo}`,
                    },
                    reason: `O vip de ${message.author.username} solicitou a criação!`,
                  })

                if (message.guild.members.cache.get(uservip.id).roles.cache.has(role.id)) return message.channel.send(`${message.author} Você já possui esse cargo!`).then(msg => msg.delete({timeout: 5000}))
                message.guild.members.cache.get(uservip.id).roles.add(role.id).catch(e => message.channel.send(e)).then(e => e.delete({timeout: 5000}))
                //uservip.roles.add([role.id])
                db.set(`CargoVip_${message.guild.id}_${message.author.id}`, role.id)
                //message.channel.send(`Cargo: ${role}`)
                    
                let CargoCriado = new Discord.MessageEmbed()
                .setColor("#1dff22")
                .setDescription(`** <a:certo_shine:838541503194071041> | Cargo Vip criado com sucesso** `)
                .setFooter(`Requisitado por: ${message.author.username}`)
                message.channel.send(CargoCriado).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));
                
                let CallEdit = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                let CargoEdit = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                let editarmsg = CargoEdit || "Nenhum cargo criado!"
                let editarmsg2 = CallEdit || "Nenhuma call criada!"

                let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
                if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
                if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

                let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
                if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
                if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";
                const paineledit = new Discord.MessageEmbed()
               .setColor("#FFFF00")
        .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** <@&859401597389897738>\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${editarmsg}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${editarmsg2}`)
        .addFields(
            {
                name: "Opções Disponíveis:",
                value: `<:1shine:887629525205254194> | ${CargoEmbedEdit} 
                <:2shine:887629543551152138> | ${CallEmbedEdit} 
                <:3shine:887629557992149002> | Adicionar vip em um usuário
                <:4shine:887629574601580565> | Remover vip de um usuário
                <:5shine:887629595157860392> | Mudar a cor do Cargo
                <a:err_shine:838541524974305290> | Resetar`
            }
                )
                msg.edit(paineledit)
                })
                //break;
            
                })
                }
                }
                })
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
                //Criar Call
                CriarCall.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "887629543551152138":

                let Call = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                if (Call){
                    //message.channel.send("Você já possui uma call de vip criada, por isso eu não irei criar outra!")
                    message.channel.send({embed: {
                        description: '<:canall:887629849852772403> ** Digite um nome para o seu canal**\n <:setaamarela:874314219259052042> ** Limite de caracteres: 30**',
                        color: "#FFFF00",
                        setFooter: (`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    }}).then(m => {
                    message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                    .on("collect", async message => {
                    let CallEdit = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                    let editarnome = message.content

                    CallEdit.setName(editarnome);
                    let CallEditada = new Discord.MessageEmbed()
                .setColor("#1dff22")
                .setDescription(`**<a:certo_shine:838541503194071041> | Cargo Vip criado com sucesso**`)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(CallEditada).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));

                    let CallEditt = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                    let CargoEdit = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    let editarmsg = CargoEdit || "Nenhum cargo criado!"
                    let editarmsg2 = CallEditt || "Nenhuma call criada!"
                    let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
                    if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
                    if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

                    let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
                    if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
                    if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";
                    const paineledit = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
        .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** <@&859401597389897738>\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${editarmsg}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${editarmsg2}`)
        .addFields(
            {
                name: "Opções Disponíveis:",
                value: `<:1shine:887629525205254194> | ${CargoEmbedEdit} 
                <:2shine:887629543551152138> | ${CallEmbedEdit} 
                <:3shine:887629557992149002> | Adicionar vip em um usuário
                <:4shine:887629574601580565> | Remover vip de um usuário
                <:5shine:887629595157860392> | Mudar a cor do Cargo
                <a:err_shine:838541524974305290> | Resetar`
            }
                    )
                    msg.edit(paineledit)
                    return;
                    })
                    })
                }
                else
                {
                    
                if(!Categoria0){
                    message.channel.send(`> <a:err_shine:838541524974305290> ${message.author} Não foi setada uma categoria vip nesse servidor!`).then(msg => msg.delete({timeout: 5000}))
				}

                let cargo = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)

                if(!cargo){
                    message.channel.send(`> <a:err_shine:838541524974305290> ${message.author} Desculpe, mas você não possui um cargo Vip, crie um primeiro!`).then(msg => msg.delete({timeout: 5000}))
                }
                if(cargo){
                message.channel.send({embed: {
                    description: '**<:canall:887629849852772403> | Qual será o novo nome da sua call ?**',
                    color: "#FFFF00",
                    setFooter: (`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                }}).then(m => {

                message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                .on("collect", async message => {
                let nomecall = message.content

                const channel = await message.guild.channels.create(nomecall, {
                    type: 'voice',
                    permissionOverwrites: [
                        {
                            id: user.id,
                            allow: ["MOVE_MEMBERS", "CONNECT", "MUTE_MEMBERS"]
                        },
                        {
                            id: message.guild.roles.cache.find(role => role.id == cargo),
                            allow: ["CONNECT"],
                        },
                        {
                            id: message.channel.guild.roles.everyone,
                            deny: ["CONNECT"]
                        }
                    ],
                    reason: `O Vip ${message.author.username} solicitou a criação!`,
                });
                channel.setParent(Categoria0, { lockPermissions: false })

                let CallCriada = new Discord.MessageEmbed()
                .setColor("#1dff22")
                .setDescription(`** <a:certo_shine:838541503194071041> | Cargo Vip criado com sucesso**`)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(CallCriada).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));
                db.set(`CallVip_${message.guild.id}_${message.author.id}`, channel.id)   
                
                let CallEdittt = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                let CargoEdit = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                let editarmsg = CargoEdit || "Nenhum cargo criado!"
                let editarmsg2 = CallEdittt || "Nenhuma call criada!"

                let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
                if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
                if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

                let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
                if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
                if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";

                const paineledit = new Discord.MessageEmbed()
                .setColor("#FFFF00")
                .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** <@&859401597389897738>\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${editarmsg}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${editarmsg2}`)
                .addFields(
                    {
                        name: "Opções Disponíveis:",
                        value: `<:1shine:887629525205254194> | ${CargoEmbedEdit} 
                        <:2shine:887629543551152138> | ${CallEmbedEdit} 
                        <:3shine:887629557992149002> | Adicionar vip em um usuário
                        <:4shine:887629574601580565> | Remover vip de um usuário
                        <:5shine:887629595157860392> | Mudar a cor do Cargo
                        <a:err_shine:838541524974305290> | Resetar`
                    }
                )
                msg.edit(paineledit)
                })
                })
                break;
                }
                }
                }
                })
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
                //Adicionar Usuario
                AddUser.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "887629557992149002":

                let Cargo = await message.guild.channels.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    message.channel.send({embed: {
                        description: '<:checkrosa:874325041272205374> Quem você deseja adicionar seu cargo?',
                        color: "#FFB6C1"
                    }}).then(msg => {

                    message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                    .on("collect", async message => {

                    const Usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

                    if(!Usuario){
                        message.channel.send(`<:checkrosa:874325041272205374> ${message.author} Você não mencionou um usuario!`).then(msg => msg.delete({timeout: 5000}))
                    }
                    
                    if(Usuario.user.bot){
                        message.channel.send(`<:checkrosa:874325041272205374> ${message.author} Você não pode adicionar um Bot!`).then(msg => msg.delete({timeout: 5000}))
                    }

                    const setarcargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    
                    if (message.guild.members.cache.get(Usuario.id).roles.cache.has(setarcargo.id)) return message.channel.send(`${Usuario} já possui esse cargo!`).then(msg => msg.delete({timeout: 5000}))
                	message.guild.members.cache.get(Usuario.id).roles.add(setarcargo.id)
                      
                    db.set(`UsuarioVip_${message.guild.id}_${message.author.id}`, Usuario.id)
					
                    
                    let UserAdicionado = new Discord.MessageEmbed()
                    .setTitle("Gerenciamento de VIP | Moony™️")
                    .addField(`<:setashine:842466115493691413> **Usuário**`, `${Usuario}`, true)
                    .addField(`<:setashine:842466115493691413> **Represetante:**`, `${message.author}`, true)
                    .setColor(`#993399`)
                   .setFooter(`Sistema de VIPS - Moony™️`, client.user.avatarURL())
                    message.channel.send(UserAdicionado).then(msg => msg.delete({ timeout: 10000 }).catch(err => { }));
                })
                })
                break;
                }
                })

                //Remover Usuario
                RemoveUser.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "887629574601580565":

                let Cargo = await message.guild.channels.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    message.channel.send({embed: {
                        description: '> <:review:873126947541094430> Quem você deseja remover seu cargo?',
                        color: "#FFB6C1"
                    }}).then(msg => {

                    message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                    .on("collect", async message => {

                    const Usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

                    if(!Usuario){
                        message.channel.send(`> <a:err_shine:838541524974305290> ${message.author} Você não mencionou um usuario!`).then(msg => msg.delete({timeout: 5000}))
                    }

                    const setarcargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    if (!message.guild.members.cache.get(Usuario.id).roles.cache.has(setarcargo.id)) return message.channel.send(`${Usuario} não possui seu cargo!`).then(msg => msg.delete({timeout: 5000}))
                	message.guild.members.cache.get(Usuario.id).roles.remove(setarcargo.id)
                      
                    db.delete(`UsuarioVip_${message.guild.id}_${message.author.id}`, Usuario.id)
					
                    
                    let UserAdicionado = new Discord.MessageEmbed()
                    .setColor("#1dff22")
                .setDescription(`** <a:certo_shine:838541503194071041> | O usuário ${Usuario} foi removido com sucesso**`)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(UserAdicionado).then(UserAdicionado => UserAdicionado.delete({timeout: 15000}))
                })
                })
                break;
                }
                })

                //Resetar
                Resetar.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "838541524974305290":
                    const apagarcargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`)) 
                    if(apagarcargo){
                    db.delete(`CargoVip_${message.guild.id}_${message.author.id}`)
                    apagarcargo.delete(`<:checkrosa:874325041272205374> O Vip ${message.author} solicitou a exclusão do seu cargo!`)
                    }

                    const apagarcall = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                    if(apagarcall){
                    db.delete(`CallVip_${message.guild.id}_${message.author.id}`)
                    apagarcall.delete(`<:checkrosa:874325041272205374> O Vip ${message.author} solicitou a exclusão da sua call!`).then(msg => msg.delete({timeout: 5000}))
                    }

                    const usuariosapagar = db.get(`UsuarioVip_${message.guild.id}_${message.author.id}`)
                    if(usuariosapagar){
                    db.delete(`UsuarioVip_${message.guild.id}_${message.author.id}`)
                    }

                    let resetado = new Discord.MessageEmbed()
                    .setColor("#1dff22")
                .setDescription(`** <a:certo_shine:838541503194071041> | Painel resetado com sucesso**`)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(resetado)

                    let CallEditttt = await message.guild.channels.cache.get(db.get(`CallVip_${message.guild.id}_${message.author.id}`))
                    let CargoEdit = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
                    let editarmsg = CargoEdit || "Nenhum cargo criado!"
                    let editarmsg2 = CallEditttt || "Nenhuma call criada!"

                    let CallEmbedEdit = db.get(`CallVip_${message.guild.id}_${message.author.id}`)
                    if(CallEmbedEdit == null) CallEmbedEdit = "Criar Call";
                    if(CallEmbedEdit >= 1) CallEmbedEdit = "Editar Call";

                    let CargoEmbedEdit = db.get(`CargoVip_${message.guild.id}_${message.author.id}`)
                    if(CargoEmbedEdit == null) CargoEmbedEdit = "Criar Cargo";
                    if(CargoEmbedEdit >= 1) CargoEmbedEdit = "Editar Cargo";
                    const paineledit = new Discord.MessageEmbed()
                      .setColor("#FFFF00")
        .setFooter(`Gerenciamento de VIPS`, client.user.avatarURL())
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`<:setaamarela:874314219259052042> **VIP Atual:** <@&859401597389897738>\n<:setaamarela:874314219259052042> **Cargo Vinculado:** ${editarmsg}\n<:setaamarela:874314219259052042> **Canal Vinculado:** ${editarmsg2}`)
        .addFields(
            {
                name: "Opções Disponíveis:",
                value: `<:1shine:887629525205254194> | ${CargoEmbedEdit} 
                <:2shine:887629543551152138> | ${CallEmbedEdit} 
                <:3shine:887629557992149002> | Adicionar vip em um usuário
                <:4shine:887629574601580565> | Remover vip de um usuário
                <:5shine:887629595157860392> | Mudar a cor do Cargo
                <a:err_shine:838541524974305290> | Resetar`
            }
                    )
                    msg.edit(paineledit)
                break;
                }
                });
                
                //Mudar Cor
                MudarCor.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "887629595157860392":
                    const cargocor = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`)) 
                    if(!cargocor){
                        message.channel.send(`> <a:err_shine:838541524974305290> Você precisa criar um cargo primeiro!`).then(msg => msg.delete({timeout: 5000}))
                    }

                    message.channel.send({embed: {
                        description: '** <:canall:887629849852772403>  |  Digite a cor para seu cargo **',
                        color: "#FFFF00",
                        setFooter: (`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    }}).then(m => {
                    message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
                    .on("collect", async (message, user) => {

                    const regex = /(#)/gi;  
                    const cor = message.content

                    if(!regex.exec(message.content)){
                        message.channel.send("> <a:err_shine:838541524974305290> Você precisa me enviar uma **Hex Color** para poder selecionar a cor! \n Pesquise sua HEXCOLOR EM https://encycolorpedia.pt/").then(msg => msg.delete({timeout: 5000}))
                    }

                    cargocor.setColor(cor)

                    let cormudada = new Discord.MessageEmbed()
                    .setColor("#1dff22")
                    .setDescription(`** <a:certo_shine:838541503194071041> | Cor alterada com sucesso!**`)
                    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(cormudada).then(cormudada => cormudada.delete({timeout: 7500}))
                
                })
                })
                }
                });
    });
        
    }
}