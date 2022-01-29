<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    id="footer"
  >
    <div class="row">
      <div
        class="
          col-md-12
          d-flex
          flex-column
          justify-content-center
          align-items-center
          mb-5
        "
      >
        <span>© 2021 Gamefique!</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestiae fugiat reprehenderit voluptatibus, beatae tempora.
          <br />
          Todas as bases imagens dessa landing page foram retiradas de Unsplash
        </p>
        <div class="terms col-md-12 d-flex flex-row justify-content-center">
          <div>
            <a href="#" target="_blank"
              >Termo de Uso & Politica de Privacidade.</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footer {
  background-color: #0ccaf0;
  margin-top: 70px;
  padding-top: 50px;
}
#footer .form-container {
  padding: 20px;
  background-color: #ffffff;
  padding-top: 40px;
}
#footer .form-container p {
  width: 70%;
  margin-top: 30px;
  font-weight: 200;
}
#footer .form-container .input {
  width: 70%;
  margin-right: 30px;
  margin-top: 10px;
}
#footer .form-container button {
  background-color: #3a79f9;
  color: #ffffff;
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 30px;
  padding-left: 30px;
  padding-right: 30px;
}
#footer p,
#footer span {
  display: flex;
  text-align: center;
  color: #ffffff;
  font-size: 13px;
}
#footer a,
#footer a span {
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 13px;
}
@media (max-width: 600px) {
  .terms {
    flex-direction: column !important;
  }
}
</style>