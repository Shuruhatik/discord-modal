Discord Modal [![NPM version](https://img.shields.io/npm/v/discord-modal.svg?style=flat-square&color=informational)](https://npmjs.com/package/discord-modal)
====
- The package helps you to create a modal, which is a new feature of Disocrd, but it is not supported at the moment in djs, so this package will make it easier for you to do it with [discord.js v13](https://discord.js.org/#/docs/discord.js/v13/general/welcome)
- Note: You can use it with any optimist that depends on i[nteractions](https://discord.com/developers/docs/interactions/message-components), such as buttons and menus
![ex1](https://i.imgur.com/3y7ZMh3.png)
![enter image description here](https://i.imgur.com/kire029.png)

Installing
----------
 You can start **install** the package on your project:
```sh-session
npm install discord-modal
yarn add discord-modal
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

Example
-------------
```js
const client = new Discord.Client({ 
  intents: ['GUILDS', 'GUILD_MESSAGES']
});
client.on('ready', () =>  console.log(`Logged in as ${client.user.tag} (${client.user.id})`));

//This action is mandatory in order to be able to connect the bot with the package
DiscordModal(client)

client.on(`interactionCreate`,(interaction)=>{
 if(interaction.isCommand()){
  if(interaction.commandName == "ping"){
     const textinput = new DiscordModal.TextInput()
     .setCustomId("submit_a_support_rank")
     .setTitle("Submit a support rank")
     .addComponents(
       new DiscordModal.TextInputField()
       .setLabel("what is your real name?")
       .setStyle("short")
       .setPlaceholder("Enter your real name here")
       .setCustomId("ask_1")
       .setRequired(true),//Its default value is false,
       new DiscordModal.TextInputField()
       .setLabel("What is your favorite identity?")
       .setStyle("short")
       .setDefaultValue("JavaScript")
       .setMin(10)
       .setMax(55)
       .setCustomId("ask_2"),
       new DiscordModal.TextInputField()
       .setLabel("Write a story from your life")
       .setStyle("paragraph")
       .setCustomId("ask_3")
       .setPlaceholder("write here")
       )
       client.TextInputs.open(interaction, textinput) 
   }
 }
})

client.on("interactionTextInput",async(interaction)=>{
 if(interaction.customId == 'submit_a_support_rank'){
   await interaction.deferReply()
   let embed = new Discord.MessageEmbed()
   .setColor('GREEN')
   .setTitle('Submit a support rank')
   .addField('Your real name', '\`\`\`' + interaction.fields[0].value + '\`\`\`')
   .addField('Your favorite identity', '\`\`\`' + interaction.fields[1].value + '\`\`\`')
   .addField('Story of your life', '\`\`\`' + interaction.fields[2].value+ '\`\`\`') 
    await interaction.editReply({embeds:[embed]})
 }
})

client.login("your bot token")
```
# Events 
### `interactionTextInput`

# Classes
TextInput
------------
### Method - setTitle
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `title`  |String| the title of the popup modal |
#### Ex:
```js
.setTitle("Submit a support rank")
```
### Method - setCustomId
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `custom_id`  |String| a developer-defined identifier for the input, max 100 characters |
#### Ex:
```js
.setCustomId("submit_a_support_rank")
```
### Method - addComponents
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `components`  |[...TextInputField](#textinputfield)| between 1 and 5 (inclusive) components that make up the modal |
#### Ex:
```js
.addComponents(...TextInputField)
```
TextInputField
------------
### Method - setLabel
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `label`  |String| the label for this component |
#### Ex:
```js
.setLabel("What is your favorite identity?")
```
### Method - setPlaceholder
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `placeholder`  |String| custom placeholder text if the input is empty, max 100 characters |
#### Ex:
```js
.setPlaceholder("Enter your real name here")
```
### Method - setCustomId
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `custom_id`  |String| a developer-defined identifier for the input, max 100 characters |
#### Ex:
```js
.setCustomId("Enter your real name here")
```
### Method - setDefaultValue
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `value`  |String|   
a pre-filled value for this component, max 4000 characters |
#### Ex:
```js
.setDefaultValue("setDefaultValue")
```
### Method - setStyle
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `style` |String or Number|the [Text Input Style](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles) |
#### Ex:
```js
.setStyle("setDefaultValue")
```
### Method - setRequired
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `required`  |Boolean|whether this component is required to be filled, default false |
#### Ex:
```js
.setRequired(true)
```
### Method - setMin
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `min_length`  |Number|the minimum input length for a text input, min 0, max 4000|
#### Ex:
```js
.setMin(true)
```
### Method - setMax
#### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `max_length`  |Number|the maximum input length for a text input, min 1, max 4000 |
#### Ex:
```js
.setMax(true)
```

Useful Links
------------
- [ST Studio](https://dsc.gg/shuruhatik) is the best place to get support.
- [The NPM package webpage](https://npmjs.com/package/discord-modal) is, well, the webpage for the NPM package.
<a  href="https://dsc.gg/shuruhatik"><img  src="https://discord.com/api/guilds/766364402763956254/widget.png?style=banner3"></a>

If you have a problem or have a suggestion,
------------
- Contact With Me Discord: [`Shuruhatik#2443`](https://github.com/shuruhatik)
- [Github](https://github.com/shuruhatik) | [Youtube](https://www.youtube.com/channel/UCXSrBk2f9wzB-fugmRR4wsg)

License
-------
Refer to the [LICENSE](LICENSE) file.