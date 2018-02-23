const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("**Busta!** Straight **Busta!**");
});

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Shiet you look **jacked** up!");
});

client.on("message", message => {
  if (message.author.id === "416418286184431636") message.reply("Watch the road, **motherfucker**, the road!");
});

client.login(process.env.BOT_TOKEN);
