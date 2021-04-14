const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverinfo", 
  alias: ["svinfo"], 

  execute (client, message, args){
    const onlineUsers = {
        online: message.guild.presences.cache.filter(presence => presence.status === "online").size,
        idle: message.guild.presences.cache.filter(presence => presence.status === "idle").size,
        dnd: message.guild.presences.cache.filter(presence => presence.status === "dnd").size,
      };
      const embed = new Discord.MessageEmbed()
      .setColor('#cccc00')
      .setTitle(`${message.guild.name}`)
      .setThumbnail(message.guild.iconURL)
      .addField(`**Online Users**`, `≫ \`${onlineUsers.online}\``, true)
      .addField(`👤 **Usuarios Totales**`,  `≫ \`${message.guild.memberCount}\``, true)
      .addField(`📜 **Roles**`, `≫ \`${message.guild.roles.cache.size}\``, true)
      .addField(`💬 **Canales de texto**`, `≫ \`${message.guild.channels.cache.size}\``, true)
      .addField(`🌍 **Region del servidor**`, `≫ \`${message.guild.region}\``, true)
      .addField(`😎 **Emotes**`, `≫ \`${message.guild.emojis.cache.size}\``, true)
      .setTimestamp()
      .setFooter(`© Lunar Client `,)

    message.channel.send(embed);  
  }
}