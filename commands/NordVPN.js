const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)
    if(!message.member.roles.find(r => r.name === "Gen Buyer")) return message.channel.send(`:no_entry_sign:You dont have Perms to do that xd:no_entry_sign:`).then(m => {
        setTimeout(() => {
            m.delete(m)
        }, 5000)
    }) 
    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 2000); //5 seconds
        })
    } else {
        
        fs.readFile('./nordvpn.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("NORD VPN Alt", `Here is your NORDVPN account: \n${random}`)
            .setThumbnail("https://pbs.twimg.com/profile_images/1008692863364943872/JUF1IBZv_400x400.jpg")
            .setColor(hex)
            message.author.send(embed)
           
            message.reply("Sent you NORDVPN Account!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}