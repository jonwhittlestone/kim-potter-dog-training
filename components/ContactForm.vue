<template>
      <div id='contact-form'>

        <article v-for="msg in messages"
          :key="msg.text"
          class="message"
          :class="msg.type === 'success' ? 'is-success' : 'is-danger'">
          <div class="message-body">
            {{msg.text}}
          </div>
        </article>

        <form>
          <div class='grouped-contact-details'>
            <div class="row">
              <label for="input-name">Name</label>
              <input type="text" name="input-name" id="input-name" v-model="contactName">
            </div> 
            <div class="row">
              <label for="input-email">Email</label>
              <input type="text" name="input-email" id="input-email" v-model="contactEmail">
            </div> 
            <div class="row">
              <label for="input-phone">Phone</label>
              <input type="text" name="input-phone" id="input-phone">
            </div>
          </div> <!-- /.grouped-contact-details -->
          <div class="row">
            <label for="input-message">Message</label>
            <textarea id='input-message' v-model="contactMessage"></textarea>
          </div>
          <div class="row text-center">
            <button class="primary w-3/4" @click="sendMessage">Send</button>
          </div>
        </form>
        <div id="contact-review-box" class="hidden">
          <dl class="list text-xs p-6">
            <dt class="inline">Average Rating:</dt>
            <dd class="inline mr-4 font-bold">N/A</dd>

            <dt class="inline">Total Number of Reviews:</dt>
            <dd class="inline font-bold">0</dd>
          </dl>
        </div>
      </div>
</template>

<script>
export default {

      data () {
        return {
          messages: [],
          contactName: '',
          contactEmail: '',
          contactMessage: ''
        }
      },

      methods: {
        sendMessage () {
          this.messages = []
          this.triggerSendMessageFunction()
        },
        cancelMessage () {},
        resetForm () {
          this.messages = []
          this.contactName = ''
          this.contactEmail = ''
          this.contactMessage = ''
        },
        async triggerSendMessageFunction () {
          try {
            const response = await this.$axios.$post('/.netlify/functions/send-contact-email', {
              contactName: this.contactName,
              contactEmail: this.contactEmail,
              message: this.contactMessage
            })
            this.resetForm()
            this.messages.push({ type: 'success', text: response })
          } catch (error) {
            this.messages.push({ type: 'error', text: error.response.data })
          }
        }
      }
}
</script>

<style>

article.message {
  @apply border mx-8
}

article.message.is-error {
  @apply bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded relative
}

article.message.is-success {
  @apply bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative
}

#contact-form {
  @apply p-6 bg-grey-200 text-black
}
#contact-form .row {
  @apply mb-4 block text-black
}

#contact-form .row label {
  @apply mb-3 text-xs
}

#contact-form .row input[type=text], #contact-form textarea {
  @apply w-full border-blue-200 border p-1 block
}

#contact-form textarea {
  @apply h-48
}

div#contact-form div {
  @apply bg-grey-100
}

</style>