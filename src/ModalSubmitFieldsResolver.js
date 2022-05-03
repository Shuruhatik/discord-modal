const {Collection} = require("discord.js")

class ModalSubmitFieldsResolver {
    constructor(components){
      this.components = components
      this.fields = new Collection()
      this.components.forEach(element => {
        element.components[0].customId = element.components[0].custom_id
        delete element.components[0].custom_id
        this.fields.set(element.components[0].customId,element.components[0])
      });
    }
    getField(customId){
       if(this.fields.has(customId) != true) throw new Error(`I can't find this field`,"ModalSubmitFieldsResolver")
       return this.fields.get(customId)
    }
    getTextInputValue(customId){
     if(this.fields.has(customId) != true) throw new Error(`I can't find this field`,"ModalSubmitFieldsResolver")
       return this.fields.get(customId).value
    }
}
module.exports = ModalSubmitFieldsResolver;
