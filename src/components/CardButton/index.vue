<template>
  <div class="card-button">
    <p class="card-button__text">{{buttonText}}</p>
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
    min-width: 60px;
    min-height: 35px;
    border: 1px solid #c4c4c4;
    background-color: #ffffff;
    transition: background-color .5s ease 0s,
                border .5s ease 0s;
    padding: 10px 20px;
  }

  .card-button_active,
  .card-button:active {
    border: 1px solid #2196f3;
    background-color: #2196f3;
  }

  .card-button__text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    line-height: 1;
    text-align: center;
    color: #2b2b2b;
    transition: color .1s ease 0s,
                background-color .1s ease 0s;
  }

  .card-button_active .card-button__text,
  .card-button:active .card-button__text {
    color: #fff;
  }
</style>
