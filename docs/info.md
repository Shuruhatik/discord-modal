<div align="center">
  <img src="https://imgur.com/LGZmQM6.png" alt="Discord Modals" />
  <p align="center">
 <a href="https://dsc.gg/shuruhatik">
    <img src="https://img.shields.io/discord/766364402763956254?color=03B5E1&label=Discord Server&style=flat-square" alt="ST Server" />
    <img src="https://img.shields.io/npm/dt/discord-modal?color=%23BB2E3E&label=Downloads&style=flat-square" alt="npm downloads" />
    <img src="https://img.shields.io/npm/v/discord-modal?label=Release&style=flat-square" alt="npm Release" />
  </a>
</p>
</div>

# 🗺️Scheme 
- [General](#general)
- [Classes](#classes)
   - [ModalBuilder](#modalbuilder)
   - [ModalField](#modalfield)
   - [ModalSubmitFieldsResolver](#modalsubmitfieldsresolver)
- [Events](#events)
   - [ModalSubmitInteraction](#modalsubmitinteraction)
 - [Example](#example)

# ✨ General

### Methods
#### Incorporate to discord.js
```js
DiscordModal(client)//This is an important step so that you can open Modal Submit
```
| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Client*  |[Client](https://discord.js.org/#/docs/discord.js/stable/class/Client)| Get the Client class |
#### To open Modal submit

Shows a modal component
```js
client.modal.open(interaction, ModalData)
```
  
| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  `Modal`  |[ModalBuilder](#modalbuilder) or [JSONModal](https://discord.com/developers/docs/interactions/message-components#text-inputs)| The Modal to show. |
|  `interaction`  |[Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction)| The Interaction to show the Modal. 

# 📦Classes
## ModalBuilder
- Represents a modal builder.
```js
new ModalBuilder()
```
|Properties|Methods|
|--|--|
|`tilte`|`setTitle`|
|`custom_id`|`setCustomId`|
|`components`|`addComponents`|
| |`toJSON`|
| |`from`|
### Properties
#### .title 
The title of the modal
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
#### .customId
The custom id of the modal
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .components
The components within this modal
> Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [TextInputComponent]


### Methods
#### setTitle ⤵️
```js
.setTitle("Submit a support rank")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `title`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| the title of the popup modal |


 #### addComponents ⤵️
 Adds the Components of the Modal.
```js
.addComponents(...ModalField)
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `ModalField`  |[ModalField](#textinputcomponent)| The Text Input Component to add in the Modal. |

 #### from ⤵️
Creates a new modal builder from JSON data
```js
.from(other)
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `other`  |[JSONEncodable](https://discord.js.org/#/docs/builders/main/typedef/JSONEncodable) <APIModalComponent>APIModalComponent|The other data|
Returns:
[ModalBuilder](#modalbuilder)

#### setCustomId ⤵️
Sets the Custom Id of the Modal. (Max. 100 characters)
```js
.setCustomId("submit_a_support_rank")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `custom_id`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| a developer-defined identifier for the input, max 100 characters |

#### toJSON ⤵️
Converts a modal to a regular object 
```js
.toJSON()
```
> Returns: [APIModalInteractionResponseCallbackData](https://discord.com/developers/docs/interactions/message-components#text-inputs)

## ModalField
```js
new ModalField()
```
|Properties|Methods|
|--|--|
|`components`|`setLabel`|
||`setCustomId`|
||`setPlaceholder`|
||`setStyle`|
||`setMax`|
||`setMin`|
| |`setRequired`|
| |`toJSON`|

### Properties
#### .components
Returns:
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) < [Components](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure) >
Default:  `[]`
### Methods
#### setLabel ⤵️
Sets the label for this text input
```js
.setLabel("What is your favorite identity?")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `label`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| the label for this component |

#### setPlaceholder ⤵️
Sets the placeholder of this text input
```js
.setPlaceholder("Enter your real name here")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `placeholder`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| custom placeholder text if the input is empty, max 100 characters |

#### setCustomId ⤵️
Add a custom id to the field
```js
.setCustomId("Enter your real name here")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `custom_id`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| Add a custom id to the field|

#### setStyle ⤵️
Sets the style for this text input
```js
.setStyle("short")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `style` |<"short","paragraph"> or <1,2>|the [Text Input Style](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles) |

#### setDefaultValue ⤵️
Sets the value of this text input
```js
.setDefaultValue("setDefaultValue")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `value`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |a pre-filled value for this component, max 4000 characters |
 
#### setRequired ⤵️
Sets whether this text input is required or not
```js
.setRequired(true)
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `required`  |[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)|whether this component is required to be filled, default false |

#### setMin ⤵️
Sets the minimum length of text for this text input
```js
.setMin(10)
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `min_length`  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)|the minimum input length for a text input, min 0, max 4000|

#### setMax  ⤵️
Sets the maximum length of text for this text input
```js
.setMax(100)
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `max_length`  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)|the maximum input length for a text input, min 1, max 4000 |

#### toJSON ⤵️
Converts a modal field to a regular object 
```js
.toJSON()
```
> Returns: [APIModalActionRowComponent<APITextInputComponent>](https://discord.com/developers/docs/interactions/message-components#text-inputs)
## ModalSubmitFieldsResolver
```js
new ModalSubmitFieldsResolver(ComponentsModalSubmit)
```
|Properties|Methods|
|--|--|
|`fields`|`getTextInputValue()`|
|`components`|`getField()`|
## Properties

[](https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/structures/ModalSubmitFieldsResolver.js#L16)

### .components
The components within the modal
> Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[ModalBuilder](#modalbuilder)<[ModalFieldData](https://discord.js.org/#/docs/discord.js/main/typedef/ModalFieldData)>>[](https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/structures/ModalSubmitFieldsResolver.js#L2
>)

#### .fields
The extracted fields from the modal
> Returns: [Collection](https://discord.js.org/#/docs/collection/main/class/Collection) <[string"customId"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) , [ModalFieldData](https://discord.js.org/#/docs/discord.js/main/typedef/ModalFieldData)>

### Methods
#### getField⤵️
Gets a field given a custom id from a component
```js
.getField("name")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The custom id of the component|
> Returns: [ModalFieldData](https://discord.js.org/#/docs/discord.js/main/typedef/ModalFieldData)

#### getTextInputValue⤵️
Gets the value of a text input component given a custom id
```js
.getTextInputValue("name")
```
##### Parameters:
| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The custom id of the text input component|
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


# 📑Events
## ModalSubmitInteraction
Represents a Modal Submit Interaction.
```js
<Client>.on("modalSubmitInteraction",async(interaction)=>{/*Callback function*/})
```
| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  |`inCachedGuild()` |
|  `.components`  | `.fetchReply()`|
|  `.fields`  | `.deferReply()` |
|  `.id`  | `.reply()` |
|  `.applicationId`  | `.fetchReply()` |
|  `.channelId`  | `.editReply()` |
|  `.guildId`  | `.deleteReply()` |
|  `.user`  | `.followUp()` |
|  `.member`  | `.update()` |
|  `.token`  | `.isFromMessage()` |
|  `.replied`  | `.inRawGuild()` |
|  `.deferred`  |`transformComponent`|
|  `.ephemeral`  |  |  
|  `.message`  |  |  
|  `.version`  |  | 
|  `.webhook`  |  | 
|  `.channel`  |  | 
|  `.guild`  |  | 
|  `.type`  |  |
### Properties
#### .fields
> Returns: [ModalSubmitFieldsResolver](#modalsubmitfieldsresolver)

#### .components
> Returns: [APIModalActionRowComponent<APITextInputComponent>](https://discord.com/developers/docs/interactions/message-components#text-inputs)

#### .customId
The custom id of the modal.
> Type: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .user
The user who submitted this typical submit interaction.
> Returns: [User](https://discord.js.org/#/docs/discord.js/stable/class/User)

#### .member
If this typical send interaction is sent in a guild, then the member who sent it.
> Returns: [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember)

#### .id
The Id of the Modal Submit Interaction.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .applicationId
The application's id.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .channelId
The Id of the Channel this Modal Submit Interaction was sent in.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .guildId
The Id of the Guild this Modal Submit Interaction was sent in.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)
  
#### .version
The Discord API Version.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .webhook
An associated Interaction Webhook, can be used to further interact with this Interaction.
> Returns: [InteractionWebhook](https://discord.js.org/#/docs/discord.js/stable/class/InteractionWebhook)

#### .message
The message associated with this interaction
> Returns: ?[Message](https://discord.js.org/#/docs/discord.js/main/class/Message) or ?[APIMessage](https://discord.com/developers/docs/resources/channel#message-object)


#### .channel
The channel this interaction was sent in
> Returns: ?[TextBasedChannels](https://discord.js.org/#/docs/discord.js/stable/typedef/TextBasedChannels)

#### .guild
The guild this interaction was sent in
> Returns: ?[Guild](https://discord.js.org/#/docs/discord.js/stable/class/Guild)

## Methods
-   [deferReply](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=deferReply)
-   [deferUpdate](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=deferUpdate)
-   [deleteReply](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=deleteReply)
-   [editReply](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=editReply)
-   [fetchReply](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=fetchReply)
-   [followUp](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=followUp)
-   [isFromMessage](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=isFromMessage)
-   [reply](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=reply)
-   [transformComponent](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=s-transformComponent)
-   [update](https://discord.js.org/#/docs/discord.js/main/class/ModalSubmitInteraction?scrollTo=update)


# Example
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
  
## 🔗 Useful Links
- [ST Studio](https://dsc.gg/shuruhatik) is the best place to get support.
- [The NPM package webpage](https://npmjs.com/package/discord-modal) is, well, the webpage for the NPM package.
<br><a  href="https://dsc.gg/shuruhatik"><img  src="https://discord.com/api/guilds/766364402763956254/widget.png?style=banner3"></a>

## 👋 If you have a problem or have a suggestion,
- Contact With Me Discord: [`Shuruhatik#2443`](https://github.com/shuruhatik)
- [Github](https://github.com/shuruhatik) | [Youtube](https://www.youtube.com/channel/UCXSrBk2f9wzB-fugmRR4wsg)

## ☑️ License
Refer to the [LICENSE](LICENSE) file.
