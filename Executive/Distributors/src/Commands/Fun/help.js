const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionsBitField, ButtonBuilder, ButtonStyle } = require("discord.js");
const conf = require("../../../../src/configs/sunucuayar.json")
const emoji = require("../../../../src/configs/emojis.json")
const { green, red } = require("../../../../src/configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["help", "y", "help","yardım","komutlar"],
    name: "yardım",
  },
 
  run: async (client, message, args, embed, prefix) => {
    let kanallar = ["bot-commands","bot-command"];    
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator) && !kanallar.includes(message.channel.name)) return message.reply({ content: `${kanallar.map(x => `${client.channels.cache.find(chan => chan.name == x)}`)} kanallarında kullanabilirsiniz.`}).then((e) => setTimeout(() => { e.delete(); }, 10000)); 
    
    let command = args[0]
    if (client.commands.has(command)) {
    command = client.commands.get(command)
    message.reply({ embeds: [embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})) .setDescription(`
    ${green} Belirttiğin komuta ait bilgiler aşağıda verilmiştir!
    
    \`Komut Adı\`**:** ${command.conf.name}
    \`Komut Açıklaması:\`**:** ${command.conf.description}
    \`Komut Kullanımı:\`**:** ${command.conf.help}
    \`Komut Alternatifleri:\`**:** ${command.conf.aliases[0] ? command.conf.aliases.join(', ') : `Alternatif bulunmuyor!`}`)]})
      return;
    }

    const row = new ActionRowBuilder()
    .addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('yardım')
        .setPlaceholder('Yardım kategorisini listeden seçin!')
        .addOptions([
          {
            label: 'Kullanıcı Komutları',
            description: 'Kullanıcı Komutlar',
            value: 'kullanıcı',
            emoji: '1218571346141909105',
          },					
          {
            label: 'Kayıt Komutları',
            description: 'Kayıt Komutlar',
            value: 'reg',
            emoji: '1218539593243037766',
          },
          {
            label: 'Cezalandırma Komutları',
            description: 'Cezalandırma Komutlar',
            value: 'ceza',
            emoji: '⚠️',
          },
          {
            label: 'Stat Komutları',
            description: 'Stat Komutlar',
            value: 'stats',
            emoji: '1218571782538399875',
          },
          {
            label: 'Yetkili Komutları',
            description: 'Yetkili Komutlar',
            value: 'yt',
            emoji: '1218573072517300448',
          },
          {
            label: 'Kurucu Komutları',
            description: 'Kurucu Komutlar',
            value: 'owner',
            emoji: '1218572758728835094',
          },
          {
            label: 'Sahip Komutları',
            description: 'Sahip Komutlar',
            value: 'botsahip',
            emoji: '1218573232597237891',
          },
        ]),
    );

    let butttonRow = new ActionRowBuilder()
    .addComponents(
         new ButtonBuilder()
        .setCustomId("merdor")
        .setStyle(ButtonStyle.Danger)
        .setLabel("Aydocs 💔 DevCode")
        .setDisabled(true)
    )

let msg = await message.channel.send({ embeds: [embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`
> Aşağıda Oluştan Menüden **${message.guild.name}** Sunucusunun Bot Komutlarını İncelemek İçin Menüye Tıklayabilirsin!

> Açılan Menüyü Aşağıya Kaydırarak Detaylı Komutlara Ulaşabilirsin.`)], components: [row, butttonRow] })

var filter = (menu) => menu.user.id === message.author.id;
const collector = msg.createMessageComponentCollector({ filter, time: 30000 })

collector.on("collect", async (menu) => {
    if(menu.values[0] === "kullanıcı") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "kullanıcı").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "market") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "market").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "reg") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "kayıt").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "ceza") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "cezalandırma").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "stats") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "stat").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "yt") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "yetkili").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "owner") {
      await menu.deferUpdate();

      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "yönetim").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
    if(menu.values[0] === "botsahip") {
      await menu.deferUpdate();
      const embeds = new EmbedBuilder()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
      .setThumbnail(message.author.avatarURL({dynamic: true, size: 2048}))
      .setDescription(`${client.commands.filter(x => x.conf.category !== "-" && x.conf.category == "sahip").map(x => `\` ${prefix}${x.conf.help} \``).join('\n')}`)
      
            msg.edit({
              embeds: [embeds],
              components : [row]
            })
          }
})
} 
}