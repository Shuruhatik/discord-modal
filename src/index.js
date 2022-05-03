const Interaction = require("./ModalSubmitInteraction.js")
const DiscordModal = (client)=>{
  client.modal = {
    open:(interaction,modaldata)=>{
      if(modaldata instanceof require("./ModalBuilder.js") && modaldata.toJSON().components && modaldata.toJSON().custom_id  && modaldata.toJSON().title || typeof modaldata == 'object' && modaldata.custom_id && modaldata.components && modaldata.title){
        return client.api.interactions(interaction.id)[interaction.token].callback.post({ data: { type: 9, data: modaldata instanceof require("./ModalBuilder.js") ? modaldata.toJSON() : modaldata } });
      } else {
        throw new Error('INVALID_MODAL');
      }
    }
  }
  client.ws.on('INTERACTION_CREATE', (data) => {
    if (!data.type) return;
    if(data.type && data.type == 5){
      client.emit('modalSubmitInteraction', new Interaction(client, data));
    }
  });
} 
module.exports = DiscordModal
module.exports.DiscordModal = DiscordModal
module.exports.ModalField = require("./ModalField.js")
module.exports.ModalBuilder = require("./ModalBuilder.js")
module.exports.ModalSubmitFieldsResolver = require("./ModalSubmitFieldsResolver")
