<template>
  <section
    :class="['info-modal', { 'info-modal_opened': opened }]"
    :style="`top: ${ scrollY }px`"
  >
    <div class="info-modal_content">
      <p class="info-modal_title">{{infoTitle}}</p>
      <p class="info-modal_confirm-text">{{infoText}}</p>

      <div class="info-modal_actions">
        <button
          class="info-modal_action-button info-modal_action-button_ok"
          @click="hide"
        >
          <span class="info-modal_button-text">OK</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ConfirmModal",
    props: {
      infoTitle: {
        type: String,
        default: 'Info Title'
      },
      infoText: {
        type: String,
        default: 'Info Text'
      },
      opened: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        scrollY: 0,
      }
    },
    methods: {
      hide() {
        this.$emit('update:opened', false);
      }
    },
    watch: {
      opened() {
        this.scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      }
    }
  }
</script>

<style scoped>
  .info-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.46);
    transform: scale(0);
    opacity: 0;
    transition: transform 0.3s, opacity 0.15s;
  }

  .info-modal_opened {
    transform: scale(1);
    opacity: 1;
  }

  .info-modal_content {
    max-width: 290px;
    max-height: 250px;
    width: 100%;
    height: auto;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2),
    0 2px 2px 0 rgba(0, 0, 0, .14),
    0 1px 5px 0 rgba(0, 0, 0, .12);
    background-color: #fff;
    color: rgba(0,0,0,.87);
    border-radius: 4px;
  }

  .info-modal_title,
  .info-modal_confirm-text {
    text-align: left;
  }

  .info-modal_title {
    font-family: Roboto,sans-serif!important;
    line-height: 2rem;
    padding: 16px 24px 10px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .info-modal_confirm-text {
    padding: 0 24px 20px;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
  }

  .info-modal_actions {
    padding: 8px 16px;
    align-items: center;
    display: flex;
  }

  .info-modal_action-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    background: transparent;
    flex: 0 0 auto;
    outline: 0;
    font-weight: 500;
    padding: 0 8px;
    height: 36px;
    min-width: 64px;
    color: #43a047;
    font-size: .875rem;
    transition: background-color 0.1s, color 0.1s;
  }

  .info-modal_action-button:active {
    background-color: rgba(67, 160, 71, .45);
    color: #ffffff;
  }

  .info-modal_action-button:hover {
    background-color: rgba(67, 160, 71, .15);
  }
</style>
