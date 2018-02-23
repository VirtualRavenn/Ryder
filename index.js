const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("**Busta!** Straight **Busta!**");
});

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("**Fool** you aren't suppose to be in here.");
});

client.login(process.env.BOT_TOKEN);
