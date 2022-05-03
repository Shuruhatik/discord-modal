const {WebhookClient} = require("discord.js")
const ModalSubmitFieldsResolver = require("./ModalSubmitFieldsResolver.js")
class ModalSubmitInteraction {
   #clientAPI;
    constructor(client, data) {
      this.client = client;
      this.#clientAPI = client.api;
      this.customId = data.data.custom_id;
      this.version = data.version;
      this.token = data.token;
      this.id = data.id;
      this.webhook = new WebhookClient({id:data.application_id, token:data.token},client.options)
      this.applicationId = data.application_id;
      this.guild = data.guild_id ? client.guilds.cache.get(data.guild_id) : undefined;
      this.channel = client.channels.cache.get(data.channel_id);
      this.channelId = data.channel_id
      this.data = data
      this.guildId = data.guild_id
      this.deferred = false;
      this.replied = false;
      this.ephemeral = false;
      this.member = this.guild ? this.guild.members.resolve(data.member.user.id) : undefined,
      this.user = this.client.users.resolve(data.guild_id ? data.member.user.id : data.user.id)
      this.components = data.data.components
      this.fields = new ModalSubmitFieldsResolver(data.data.components)
      if (data.message && !this.message && this.message != null) {
        this.message = this.channel?.messages._add(data.message) ?? data.message;
      } else {
        this.message = null;
      }
  
    }
    isFromMessage() {
        return Boolean(this.message);
    }
    inRawGuild() {
        return Boolean(this.guildId && !this.guild && this.member);
    }
    inCachedGuild() {
        return Boolean(this.guild && this.member);
    }
    async editReply(ctx){
        try{
            let data = {}
            let options;
            if(typeof ctx == 'object' && ctx.content) data.content = ctx.content;
            if(typeof ctx == 'object' && ctx.embeds) data.embeds = ctx.embeds;
            if(typeof ctx == 'object' && ctx.files) data.files = ctx.files;
            if(typeof ctx == 'object' && ctx.ephemeral && ctx.ephemeral == true) data.flags = 1 << 6
            if(data.flags ==  1 << 6) this.ephemeral = true
            if(!ctx.content && !ctx.embeds) data.content = ctx;
            if (ctx.components === null && ctx.components !== undefined) options = { components: null };

            return await this.webhook.editMessage('@original', data, options);
        }catch(e){
            throw new Error(e.message,"ModalSubmitInteraction")
        }
    }
    async deferReply(ctc){
        try{
            let data = {}
            if(typeof ctc == 'object' && ctc.ephemeral && ctc.ephemeral == true) data.flags = 1 << 6
            if(data.flags ==  1 << 6) this.ephemeral = true

            this.#clientAPI.interactions(this.id)[this.token].callback.post({
                data: {
                  data,
                  type: 5,
                },
            })
            this.deferred = true;
        }catch(e){
            throw new Error(e.message,"ModalSubmitInteraction")
        }

    }
    async deferUpdate(options = {}) {
        if (this.deferred || this.replied) throw new Error('INTERACTION_ALREADY_REPLIED');
        this.#clientAPI.interactions(this.id)[this.token].callback.post({
          body: {
            type: 6,
          },
          auth: false,
        });
        this.deferred = true;
    
        return options.fetchReply ? this.fetchReply() : new InteractionResponse(this, this.message.interaction?.id);
    }
    followUp(options) {
        if (!this.deferred && !this.replied) return Promise.reject(new Error('INTERACTION_NOT_REPLIED'));
        return this.webhook.send(options);
    }
    async fetchReply(){
        try{
           return this.webhook.fetchMessage('@original').then((d) => this.client.actions.MessageCreate.handle(d).message);;
        }catch(e){
            throw new Error(e.message,"ModalSubmitInteraction")
        }
    }
    async update(options) {
        if (this.deferred || this.replied) throw new Error('INTERACTION_ALREADY_REPLIED');    
    
        this.#clientAPI.interactions(this.id)[this.token].callback.post({
          body: {
            type: 7,
            data:options,
          },
          auth: false,
        });
        this.replied = true;
    
        return options.fetchReply ? this.fetchReply() : new InteractionResponse(this, this.message.interaction?.id);
      }
    async deleteReply(options = {}){
        try{
         return await this.webhook.deleteMessage('@original');  
        }catch(e){
         throw new Error(e.message,"ModalSubmitInteraction")
        }
    }
    async reply(ctx){
        try{
            let data = {}
            if(typeof ctx == 'object' && ctx.content) data.content = ctx.content;
            if(typeof ctx == 'object' && ctx.embeds) data.embeds = ctx.embeds;
            if(typeof ctx == 'object' && ctx.files) data.files = ctx.files;
            if(typeof ctx == 'object' && ctx.ephemeral && ctx.ephemeral == true) data.flags = 1 << 6
            if(typeof ctx == 'object' && data.flags ==  1 << 6) this.ephemeral = true
            if(typeof ctx == 'object' && ctx.components) data.components = ctx.components;
            if(!ctx.content && !ctx.embeds) data.content = ctx;
            this.#clientAPI.interactions(this.id)[this.token].callback.post({
                data: {
                    type: 4,
                    data,
                }
            })
            this.replied = true;
            return ctx.fetchReply ? this.fetchReply() : this
     }catch(e){
        throw new Error(e.message,"ModalSubmitInteraction")
     }
    }
    static transformComponent(rawComponent) {
        return {
          value: rawComponent.value,
          type: rawComponent.type,
          customId: rawComponent.custom_id,
        };
      }
  }
  
  module.exports = ModalSubmitInteraction;
