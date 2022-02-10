const { Client } = require('discord.js');
const Interaction = require("./Interaction.js")
module.exports = (client)=>{
  client.TextInputs = {
    open:(interaction,textinput)=>{
      return client.api.interactions(interaction.id)[interaction.token].callback.post({ data: { type: 9, data: textinput.toJSON() } });
    }
  }
  client.ws.on('INTERACTION_CREATE', (data) => {
    if (!data.type) return;
    if(data.type && data.type == 5){
      client.emit('interactionTextInput', new Interaction(client, data));
    }
  });
} 

module.exports.TextInputField = require("./TextInputField.js")
module.exports.TextInput = require("./TextInput.js")