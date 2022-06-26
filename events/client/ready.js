const config = require("../../config.json")

module.exports = (client) => {
	console.log(`Bot logado como ${client.user.tag}`)

      let activities = [
        `Utilize ${config.prefix}help para obter ajuda`,
        `${client.guilds.cache.size} servidores!`,
        `${client.channels.cache.size} canais!`,
        `${client.users.cache.size} usuários!`,
        `bot desenvolvido por inure`
        ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "PLAYING"
        }), 5000); 
    client.user
        .setStatus("online")
        .catch(console.error);
} 