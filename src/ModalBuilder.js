(function() {
    "use strict";
    class ModalBuilder {
        from(json = {}){
         this.title = json.title ? json.title : null
         this.custom_id = json.custom_id ? json.custom_id : null
         this.components = json.components ? json.components: null
         return this;
        }
        setTitle(title){
          if(typeof title != "string") throw new Error("The title must be string","ModalBuilder")
          this.tilte = title
          return this
        }
        setCustomId(custom_id){
            if(custom_id.length > 100) throw new Error("custom_id max 100 characters","ModalBuilder")
            this.custom_id = custom_id
            return this
        }
        addComponents(...components){
            let arr = []
            let componentsArr = [...components]
            componentsArr.forEach(x => arr.push(x.toJSON()))
            this.components = arr
           return this
        }
        toJSON() {
            return {
              title:this.tilte,
              custom_id: this.custom_id,
              components: this.components
            };
          }
    }

    module.exports = ModalBuilder
}).call(this);
