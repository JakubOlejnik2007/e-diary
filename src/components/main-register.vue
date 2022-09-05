<template>
  <div id="form" class="form">
    <form>
      <div class="wrapper">
        <div class="input-data">
          <input type="text" required name="name" id="name" />
          <div class="underline"></div>
          <label>Name</label>
        </div>
      </div>
      <div class="wrapper">
        <div class="input-data">
          <input type="email" required name="email" id="email" />
          <div class="underline"></div>
          <label>E-mail</label>
        </div>
      </div>
      <div class="wrapper">
        <div class="input-data">
          <input type="password" required name="password" id="password" />
          <div class="underline"></div>
          <label>Password</label>
        </div>
      </div>
      <div class="wrapper">
        <div class="input-data">
          <input type="password" required />
          <div class="underline"></div>
          <label>Confirm password</label>
        </div>
      </div>
      <input type="checkbox" name="" id="" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form {
  form {
    width: 100%;
  }
  display: flex;
  align-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: auto;
  .wrapper {
    z-index: 1;
    width: 100%;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    border-radius: 15px;
    .input-data {
      height: 40px;
      position: relative;
      .underline {
        position: absolute;
        height: 2px;
        width: 90%;
        bottom: 0;
        &:before {
          z-index: 0;
          position: absolute;
          content: "";
          height: 80%;
          width: 100%;
          background: #4158d0;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }
      }
      input {
        color: black;
        height: 100%;
        width: 90%;
        border: none;
        font-size: 12px;
        border-bottom: 2px solid silver;
        padding-left: 5px;
        &:focus ~ label,
        &:valid ~ label {
          transform: translateY(-32px) translateX(-10px);
          font-size: 15px;
          color: #4158d0;
        }

        &:focus ~ .underline:before,
        &:valid ~ .underline:before {
          transform: scaleX(1);
        }
      }

      label {
        color: $text-background;

        position: absolute;
        bottom: 10px;
        left: 0;
        color: grey;
        pointer-events: none;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
