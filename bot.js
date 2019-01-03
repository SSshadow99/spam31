const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




var prefix = "1";

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

}); 


client.on('ready', async() => {
var server = "500388394849927179"; 
var channel = "528151522710781952";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
