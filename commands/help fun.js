const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'help-fun',
  execute(client, message, args, Discord, cmd) {  

    const Embed = new Discord.MessageEmbed()
    .setColor('#735BC1')
    .setTitle('Help Menu')
    .setDescription('These are all my fun commands <a:bongocat:853223037636837386> \n ')
    .addField('π±  8ball',  '`These are a Random 8ball command lol its true wtf π±`', true)
    .addField('<a:bongocat:853223037636837386>  bongo-cat',  '`These are a command for the Bongo Cat area QwQ π±`', true)
    .addField('π§  cute',  '`These are a command for the animals area awww π§`', true)
    .addField('π³οΈβπ  howgay',  '`These are a command for the random number area ΓΆhm π³οΈβπ`', true)
    .addField('π’  tictactoe',  '`These are a command for the games area Good Game π’`', true)
    .addField('βοΈ  weather', '`These are a command for the weather area lol βοΈ`', true)
    .addField('πΈ  meme', '`These are a command for the memes area xDD wtf πΈ`', true)
    .addField('πΌοΈ  image', '`These are a command for the media area haha whats that πΌοΈ`', true)
    .addField('π§   iq', '`These are a command for the random number area lol π§ `', true)
    .setImage('https://cdn.discordapp.com/attachments/842859273834463233/853727605382840360/bongo-cat-banner.png');
    message.channel.send(Embed)
}};