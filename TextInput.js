(function() {
    "use strict";
    class TextInput {
        setTitle(title){
          if(typeof title != "string") throw new Error("The title must be string","TextInput")
          this.tilte = title
          return this
        }
        setCustomId(custom_id){
            if(custom_id.length > 100) throw new Error("custom_id max 100 characters","TextInput")
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

    module.exports = TextInput;
}).call(this);