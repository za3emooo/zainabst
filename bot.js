const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W";
const adminprefix = "$";
const developers = ["523235579278786561"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');//
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//
    message.guild.leave();   //
  } else  
  if (message.content.startsWith(adminprefix + 'sw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//
      message.channel.send(`**✅   ${argresult}**`)//
  } else
  if (message.content.startsWith(adminprefix + 'sl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//
}
});//



client.login(process.env.BOT_TOKEN);// 