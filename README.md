<div align="center">
  <img src="https://imgur.com/2ifu79Q.png" alt="Discord Modals" />
  <p align="center">
 <a href="https://dsc.gg/shuruhatik">
    <img src="https://img.shields.io/discord/766364402763956254?color=03B5E1&label=Discord Server&style=flat-square" alt="ST Server" />
    <img src="https://img.shields.io/npm/dt/discord-modal?color=%23BB2E3E&label=Downloads&style=flat-square" alt="npm downloads" />
    <img src="https://img.shields.io/npm/v/discord-modal?label=Release&style=flat-square" alt="npm Release" />
  </a>
</p>
</div>

#  Getting Started

## 💡 What is Discord Modal?
- The package helps you to create a modal, which is a new feature of Disocrd, but it is not supported at the moment in dscord.js, so this package will make it easier for you to do it with [discord.js v13](https://discord.js.org/#/docs/discord.js/v13/general/welcome)
- Note: You can use it with any optimist that depends on [interactions](https://discord.com/developers/docs/interactions/message-components), such as slash commands, buttons, select menus and others<br>
![e](https://imgur.com/QKW5dkk.gif)

## 📖 If you want to know all the details of the package
- [You can take a look at the Documentation by clicking here](https://bit.ly/3Fcbl9e)

## 📦 Installation
You can start install the package on your project:
```sh-session
npm install discord-modal
yarn add discord-modal
pnpm adddiscord-modal
```
-   CommonJS
```js
const DiscordModal = require('discord-modal')
```
-   ESM
```js
import DiscordModal from 'discord-modal';
```
- To associate the package with your bot
```js
DiscordModal(client)
```

##  📜 Example
```js
import {DiscordModal,ModalBuilder,ModalField} from 'discord-modal';
const client = new Discord.Client({ 
  intents: ['GUILDS', 'GUILD_MESSAGES']//Set the intentions you want
});
client.on('ready', () =>  console.log(`Logged in as ${client.user.tag} (${client.user.id})`));

//This action is mandatory in order to be able to connect the bot with the package
DiscordModal(client)

client.on(`interactionCreate`,(interaction)=>{
 if(interaction.isCommand()){
  if(interaction.commandName == "ping"){
     const textinput = new ModalBuilder()
     .setCustomId("submit_a_support_rank")
     .setTitle("Submit a support rank")
     .addComponents(
       new ModalField()
       .setLabel("what is your real name?")
       .setStyle("short")
       .setPlaceholder("Enter your real name here")
       .setCustomId("name")
       .setRequired(true),//Its default value is false,
       new ModalField()
       .setLabel("What is your favorite identity?")
       .setStyle("short")
       .setDefaultValue("JavaScript")
       .setMin(10)
       .setMax(55)
       .setCustomId("favorite"),
       new ModalField()
       .setLabel("Write a story from your life")
       .setStyle("paragraph")
       .setCustomId("story")
       .setPlaceholder("write here")
       )
       client.modal.open(interaction, textinput) 
   }
 }
})

client.on("modalSubmitInteraction",async(interaction)=>{
 if(interaction.customId == 'submit_a_support_rank1'){
   await interaction.deferReply()
   let embed = new Discord.MessageEmbed()
   .setColor('GREEN')
   .setTitle('Submit a support rank')
   .addField('Your real name', '\`\`\`' + interaction.fields.getTextInputValue("name") + '\`\`\`')
   .addField('Your favorite identity', '\`\`\`' + interaction.fields.getTextInputValue("favorite") + '\`\`\`')
   .addField('Story of your life', '\`\`\`' +interaction.fields.getTextInputValue("story")+ '\`\`\`')
   await interaction.editReply({embeds:[embed]})
 }
})

client.login("your bot token")
```

### 🖼️ Pictures in the form of the code above this ↓
![ex1](https://i.imgur.com/3y7ZMh3.png)<br>
![enter image description here](https://i.imgur.com/kire029.png)

## 📩 Send Modal

- To send the Modal you need to execute an interaction before and the Modal  to send. The client is automatically assigned a property which will allow you to send the Modal

- Following the previous example where a Modal was created, we would send the Modal as follows:
```js
client.modal.send(interaction, modal_data)
```
## 📑 Documentation
- [Check our documentation](https://bit.ly/3Fcbl9e)
  
## 🔗 Useful Links
- [Documentation](https://bit.ly/3Fcbl9e)
- [ST Studio](https://dsc.gg/shuruhatik) is the best place to get support.
- [The NPM package webpage](https://npmjs.com/package/discord-modal) is, well, the webpage for the NPM package.
<br><a  href="https://dsc.gg/shuruhatik"><img  src="https://discord.com/api/guilds/766364402763956254/widget.png?style=banner3"></a>

## 👋 If you have a problem or have a suggestion,
- Contact With Me Discord: [`Shuruhatik#2443`](https://github.com/shuruhatik)
- [Github](https://github.com/shuruhatik) | [Youtube](https://www.youtube.com/channel/UCXSrBk2f9wzB-fugmRR4wsg)

## ☑️ License
Refer to the [LICENSE](LICENSE) file.
