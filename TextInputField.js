(function() {
    "use strict";
    class TextInputField {
        constructor(){
            this.components = [{type:4}]
        }
        setLabel(label){
          if(typeof label != "string") throw new Error("The label must be string","TextInputField")
          this.components[0].label = label
          return this;
        }
        setPlaceholder(placeholder){
            if(typeof placeholder != "string") throw new Error("The placeholder must be string","TextInputField")
            if(placeholder.length > 100) throw new Error("placeholder max 100 characters","TextInputField")
            this.components[0].placeholder = placeholder
            return this;
        }
        setCustomId(custom_id){
            if(custom_id.length > 100) throw new Error("custom_id max 100 characters","TextInputField")
            this.components[0].custom_id = custom_id
            return this;
        }
        setDefaultValue(value){
            if(value.length > 4000) throw new Error("custom_id max 100 characters","TextInputField")
            this.components[0].value = value
            return this;
        }
        setStyle(style){{
            if(typeof style == "number") {
                this.components[0].style = style
                return this;
            } else {
                this.components[0].style = style.toLowerCase() == "short" ? 1 : style.toLowerCase() == "paragraph" ? 2 : 1
            }
            return this;
        }

        }
        setRequired(required){
            if(typeof required != "boolean") throw new Error("The required must be boolean","TextInputField")
            this.components[0].required = required
            return this;
        }
        setMin(length){
            if(typeof length != "number") throw new Error("The length must be number","TextInputField")
            this.components[0].min_length = length
            return this;
        }
        setMax(length){
            if(typeof length != "number") throw new Error("The length must be number","TextInputField")
            this.components[0].max_length = length
            return this;
        }
        toJSON(){
            return {
                type:1,
                components:this.components
            }
        }
    }

    module.exports = TextInputField;
}).call(this);