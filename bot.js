const Discord = require("discord.js")
const bot = new Discord.Client()

bot.login('NDc1Mzk1NDY5NzI4NTQ2ODI2.DkeaMQ.Ywy15imWG37sSJoFvMp2Prt61z8')

bot.on("ready", () => {
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n-- Geladen --");
  bot.user.setStatus('dnd', '')
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
      if(newMember.voiceChannel.name == "🌈Support Warteraum"){
        console.log("Im Support");

        //JPM
        bot.users.get("338598154079436810").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Tobias
        bot.users.get("276716821665546240").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Aleks
        bot.users.get("381830151219970049").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Backplex
        bot.users.get("247710053065293826").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Sasuke
        bot.users.get("324631119893102592").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Scharag
        bot.users.get("365865957446385697").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //Sunder
        bot.users.get("442211150445412355").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //totoking
        bot.users.get("377838091437867008").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //totoking2
        bot.users.get("461994882182021130").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //trox
        bot.users.get("370592640330235905").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");
        //me
        bot.users.get("252823336445280257").send("**🚨 " + newMember.user.username + " hat den Warteraum betreten! 🚨**");

      }
  }

})
