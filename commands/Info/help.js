const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "help",
    aliases: ["hp"],
run: async(client, message, args) => { 
message.delete()

    let embed = new Discord.MessageEmbed()
    .setTitle(`**<:copiar:872077404384931870> Moony:tm: | Painel de comandos**`)
    .setThumbnail(message.author.displayAvatarURL())
    .setColor("PURPLE")
    .setDescription(`**<:links:880800811549077604> Links Importantes: **\n **<:Purple_DireitaCDL:880368049461538846> [Server de Suporte](https://discord.gg/5vzrzZfk4e)** \n **<:Purple_DireitaCDL:880368049461538846> [Adicione-me no server](https://discord.com/oauth2/authorize?client_id=878750467574865962&scope=bot&permissions=8)**`)
    .addFields({
        name: "⠀",
        value: `\n**<a:1shine:880367796687609877> | Utilidade - Configuráveis && Owner Options **\n**<a:2shine:880367811904548894> | Gerenciamento - Moderação && Info **\n**<a:3shine:880367825481515018> | Interação && Diversão** \n**<a:4shine:880367840169971732> | Economia**\n**<a:5shine:880800720067104799> | Vip**`,
        inline: false
    })
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))  
    message.channel.send(embed).then(msg => {
        msg.react('880367328829796382').then(r => {
          msg.react('880367796687609877').then(r => {
            msg.react('880367811904548894').then(r => {
              msg.react('880367825481515018').then(r => {
                msg.react('880367840169971732').then(r => {
                  msg.react('880800720067104799').then(r => {
                      })
                    })
                  })
                })
              })
            })

            const filtro0 = (reaction, user) => reaction.emoji.id === '880367328829796382' && user.id === message.author.id;//ok
            const filtro1 = (reaction, user) => reaction.emoji.id  === '880367796687609877' && user.id === message.author.id;//ok
            const filtro2 = (reaction, user) => reaction.emoji.id  === '880367811904548894' && user.id === message.author.id;//ok
            const filtro3 = (reaction, user) => reaction.emoji.id  === '880367825481515018' && user.id === message.author.id;//ok
            const filtro4 = (reaction, user) => reaction.emoji.id  === '880367840169971732' && user.id === message.author.id;//ok
            const filtro5 = (reaction, user) => reaction.emoji.id  === '880800720067104799' && user.id === message.author.id;//ok
            
            const CriarCargo = msg.createReactionCollector(filtro0);//ok
            const CriarCall = msg.createReactionCollector(filtro1);//ok
            const AddUser = msg.createReactionCollector(filtro2);//ok
            const MudarCor = msg.createReactionCollector(filtro3);//ok
            const Resetar = msg.createReactionCollector(filtro4);//ok
            const RemoveUser = msg.createReactionCollector(filtro5);//ok

            CriarCargo.on("collect", async (reaction, user) => {
                switch (reaction.emoji.id) {
                case "880367328829796382":
        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setColor("PURPLE")
      .setDescription(`**Veja meus comandos:

\n**<a:1shine:880367796687609877> Utilidade - Configuráveis && Owner Options **\n**<a:2shine:880367811904548894> Gerenciamento - Moderação && Info **\n**<a:3shine:880367825481515018> Interação && Diversão** \n**<a:4shine:880367840169971732> Economia**\n**<a:5shine:880800720067104799> Vip**`)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))  
        
     
        msg.edit(ferinha)
      }})


      CriarCall.on("collect", async (reaction, user) => {
        switch (reaction.emoji.id) {
        case "880367796687609877":

        let fera1 = new Discord.MessageEmbed()
        .setTitle(`<a:1shine:880367796687609877> Utilidade - Configuráveis && Owner Options`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
        .setColor("PURPLE")
        .addFields({
            name: "⠀",
            value: `**\`1:\` ${config.prefix}Configvip** \n ** \`2:\` ${config.prefix}Logav** \n **\`3:\` ${config.prefix}Logboost** \n **\`4:\` ${config.prefix}Setlog** \n **\`5:\` ${config.prefix}Setwelcome**`,
            inline: false
        }, 
        {
           name: "⠀",
           value: `**\`1:\` ${config.prefix}entrar** \n ** \`2:\` ${config.prefix}leave** \n **\`3:\` ${config.prefix}moonyavatar** \n **\`4:\` ${config.prefix}moonyname** \n **\`5:\` ${config.prefix}moonystatus**`,
           inline: false
        })
    

        msg.edit(fera1)
      }})

      AddUser.on("collect", async (reaction, user) => {
        switch (reaction.emoji.id) {
        case "880367811904548894":

        let fera = new Discord.MessageEmbed()
        .setTitle(`<a:2shine:880367811904548894> Gerenciamento - Moderação && Info`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
        .setColor("PURPLE")
        .addFields({
            name: "⠀",
            value: `**\`1:\` ${config.prefix}addemoji** \n **\`2:\` ${config.prefix}addrole** \n **\`3:\` ${config.prefix}afk **\n**\`4:\` ${config.prefix}ban **\n **\`5:\` ${config.prefix}clear** \n **\`6:\` ${config.prefix}embed** \n **\`7:\` ${config.prefix}listban** \n **\`8:\` ${config.prefix}lock** \n **\`9:\` ${config.prefix}tempmute** \n**\`10:\` ${config.prefix}unban** \n**\`11:\` ${config.prefix}unlock** \n**\`12:\` ${config.prefix}unmute** \n \`13:\` **${config.prefix}warn**`,
            inline: false
        }, 
        {
            name: "⠀",
            value: `**\`1:\` ${config.prefix}convite** \n **\`2:\` ${config.prefix}divs** \n **\`3:\` ${config.prefix}help **\n**\`4:\` ${config.prefix}ping**`,
            inline: false
        })
        

        msg.edit(fera)
      }})

      MudarCor.on("collect", async (reaction, user) => {
        switch (reaction.emoji.id) {
        case "880367825481515018":

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`<a:3shine:880367825481515018> Interação && Diversão`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
        .setColor("PURPLE")
        .addFields({
            name: "⠀",
            value: `**\`1:\` ${config.prefix}abraço** \n **\`2:\` ${config.prefix}kiss** \n **\`3:\` ${config.prefix}pet** \n**\`4:\` ${config.prefix}chamego** \n**\`5:\` ${config.prefix}cócegas** \n**\`6:\` ${config.prefix}face** \n**\`7:\` ${config.prefix}tapa**`,
            inline: false
        })
      

        msg.edit(ferinha)
      }})

      Resetar.on("collect", async (reaction, user) => {
        switch (reaction.emoji.id) {
        case "880367840169971732":

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`<a:4shine:880367840169971732> Economia`)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor("PURPLE")
        .addFields({
            name: "⠀",
            value: `**\`1:\` ${config.prefix}balance** \n **\`2:\` ${config.prefix}buy ** \n **\`3:\` ${config.prefix}daily** \n **\`4:\` ${config.prefix}depositar** \n **\`5:\` ${config.prefix}implorar** \n ** \`6:\` ${config.prefix}pay** \n** \`7:\` ${config.prefix}profile** \n**\`8:\` ${config.prefix}rank **\n**\`9:\` ${config.prefix}removemoney** \n **\`10:\` ${config.prefix}roleta** \n **\`11:\` ${config.prefix}roubar** \n**\`12:\` ${config.prefix}slots** \n**\`13:\` ${config.prefix}store** \n **\`14:\` ${config.prefix}storeinfo** \n**\`15:\` ${config.prefix}trabalhar** \n**\`16:\` ${config.prefix}vender** \n**\`17:\` ${config.prefix}withdraw **\n**\`18:\` ${config.prefix}work**`,
            inline: false
        })
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
        msg.edit(ferauwu)
      }})

      RemoveUser.on("collect", async (reaction, user) => {
        switch (reaction.emoji.id) {
            case "880800720067104799":

       let feraa = new Discord.MessageEmbed()
       .setTitle(`<a:5shine:880800720067104799> Vip`)
       .setColor("#993399")
       .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({format: 'png'}))
       .setThumbnail(message.author.displayAvatarURL())
       .addFields({
        name: "⠀",
        value: `**\`1:\` ${config.prefix}addvip **\n **\`2:\` ${config.prefix}removevip **\n **\`3:\` ${config.prefix}setvip** \n**\`4:\` ${config.prefix}vip**\n`,
        inline: false
    })
    msg.edit(feraa)
      }})
    })
  }
}