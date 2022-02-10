const {WebhookClient} = require("discord.js")

class Interaction {
    constructor(client, data) {
      this.client = client;
      this.clientAPI = client.api;
      this.customId = data.data.custom_id;
      this.version = data.version;
      this.token = data.token;
      this.id = data.id;
      this.webhook = new WebhookClient({id:data.application_id, token:data.token},client.options)
      this.applicationId = data.application_id;
      this.guild = data.guild_id ? client.guilds.cache.get(data.guild_id) : undefined;
      this.channel = client.channels.cache.get(data.channel_id);
      this.data = data
      this.guildId = data.guild_id
      this.member = this.guild ? this.guild.members.resolve(data.member.user.id) : undefined,
      this.user = this.client.users.resolve(data.guild_id ? data.member.user.id : data.user.id)
      let elements = []
      data.data.components.forEach(element => {
        elements.push(element.components[0])
      });
      this.fields = elements
    }
    async editReply(ctx){
        let data = {}
        let options;
        if(ctx.content) data.content = ctx.content;
        if(ctx.embeds) data.embeds = ctx.embeds;
        if(ctx.files) data.files = ctx.files;
        if(ctx.ephemeral && ctx.ephemeral == true) data.flags = 1 << 6
        if(!ctx.content && !ctx.embeds) data.content = ctx;
        if (ctx.components === null && ctx.components !== undefined) options = { components: null };

        return await this.webhook.editMessage('@original', data, options);
    }
    async deferReply(ctc){
        let data = {}
        if(ctc && ctc.ephemeral && ctc.ephemeral == true) data.flags = 1 << 6
        this.clientAPI.interactions(this.id)[this.token].callback.post({
            data: {
              data,
              type: 5,
            },
          })
    }
    async fetchReply(){
        try{
           return this.webhook.fetchMessage('@original').then((d) => this.client.actions.MessageCreate.handle(d).message);;
        }catch(e){
            throw new Error(e.message,"interactionTextInput")
        }
    }
    async deleteReply(){
        try{
         return await this.webhook.deleteMessage('@original');   
        }catch(e){
         throw new Error(e.message,"interactionTextInput")
        }
    }
    async reply(ctx){
        try{
            let data = {}
            if(ctx.content) data.content = ctx.content;
            if(ctx.embeds) data.embeds = ctx.embeds;
            if(ctx.files) data.files = ctx.files;
            if(ctx.ephemeral && ctx.ephemeral == true) data.flags = 1 << 6
            if(ctx.components) data.components = ctx.components;
            if(!ctx.content && !ctx.embeds) data.content = ctx;
            this.clientAPI.interactions(this.id)[this.token].callback.post({
                data: {
                    type: 4,
                    data,
                }
            })
     }catch(e){
        throw new Error(e.message,"interactionTextInput")
     }
    }
  }
  
  module.exports = Interaction;