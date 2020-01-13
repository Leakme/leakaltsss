const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")

module.exports.run = async (client , message ,args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("LEAK ALTS | Help Menu")
    .setColor("#8300ff")
    .addField("GEN Commands" , "Look DMs to see the Help Menu");

    message.channel.send(helpembed);
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        let genembed = new Discord.RichEmbed()
        .setTitle("LEAK ALTS")
        .setColor("#8300ff")
        .addField("GEN COMMANDS" , "Spotify , Uplay , Minecraft , NordVPN")
       
        

        try{
            await message.author.send(genembed);

        }catch(e){
            message.reply("Your DMs are locked , I cannot send the Help Menu -.-")
        }
    }


}