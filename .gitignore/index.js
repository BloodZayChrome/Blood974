const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!b")

bot.on('ready', function() {
    bot.user.setGame("Command: b!help");
    console.log("Connectedç");
});

bot.login("NTU0OTIyMDk0MjI0MjExOTc4.D2jrJQ.xet08d9-CkQbhosfjZ-duNEpzBE");


bot.on('message',message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des Commandes : \n -b!help");
    }

    if (message.content === "Salut"){
        message.reply("bien le bonjour? :)");
        console.log("Commande Salut effectué");
    }
});
