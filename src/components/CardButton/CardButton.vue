<template>
  <div class="card-button">
    <p class="button-text">{{buttonText}}</p>
  </div>
</template>

<script>
  export default {
    name: "CardButton",
    props: {
      buttonText: {
        type: String,
        default: "Button"
      }
    }
  }
</script>

<style scoped>
  .card-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 35px;
    border: 1px solid #c4c4c4;
  }

  .card-button.active {
    border: 1px solid #2196f3;
    background-color: #2196f3;
  }

  .button-text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    line-height: 1;
    text-align: center;
    color: #2b2b2b;
    transition: color .5s ease 0s, background-color .5s ease 0s;
  }

  .card-button.active .button-text {
    color: #fff;
  }
</style>
