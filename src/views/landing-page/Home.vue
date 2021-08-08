<template>
    <div id="app" class="container-fluid">
        <div class="hero row">
            <Navbar />
            <h1 class="title col-md-6 offset-md-3">
                Use jogos digitais <br />
                na <span class="color-blue">Sua Aula!</span>
            </h1>
            <div class="lead col-md-6 offset-md-3">
                Aqui você encontra uma plataforma que tem o intuito
                <br id="bline" />
                de ajudar você docente a incrementar suas aulas!
            </div>
            <div class="col-md-6 offset-md-3 video">
                <iframe
                    width="600"
                    height="355"
                    src="https://www.youtube.com/embed/5JKuhqa1yvY?controls=0&showinfo=0&modestbranding=1"
                    frameborder="0"
                    controls="0"
                    showinfo="0"
                    modestbranding="1"
                    rel="0"
                    allow="clipboard-write; encrypted-media; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <p class="col-md-6 offset-md-3 lead">
                <a
                    class="btn btn-outline-info btn-lg text-white"
                    href="#"
                    role="button"
                    @click="$router.push('Register')"
                    >Quero criar uma conta agora!</a
                >
            </p>
        </div>
        <GamesAdvantages />
        <Plataform />
        <PlataformAdvantages />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/landing-page/Navbar";
import GamesAdvantages from "@/components/landing-page/GamesAdvantages";
import PlataformAdvantages from "@/components/landing-page/PlataformAdvantages";
import Plataform from "@/components/landing-page/Plataform";
import Footer from "@/components/landing-page/Footer";

export default {
    components: {
        Navbar,
        GamesAdvantages,
        PlataformAdvantages,
        Plataform,
        Footer,
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
.color-blue {
    color: #0ccaf0;
}
.hero {
    top: 0px;
    left: 0px;
    min-height: 900px;
    height: 100vh;
    background: transparent url("~@/assets/landing-page/background.png") 0% 0%
        no-repeat padding-box;
    background-position: center;
    background-color: #000;
    opacity: 1;
    color: #fff;
}
.hero .title {
    text-align: center;
    position: relative;
    top: 0px;
    text-align: center;
    letter-spacing: 0px;
    text-shadow: 0px 2px 3px #00000085;
    font-size: 45px;
}
.hero .lead {
    position: relative;
    text-align: center;
    letter-spacing: 0px;
    text-shadow: 0px 2px 3px #00000085;
    font-size: 16px;
    top: -20px;
    font-weight: 400;
}
.hero .video {
    display: flex;
    align-items: center;
    justify-content: center;
    top: -20px;
    position: relative;
}
.hero .btn-yellow {
    display: flex;
    position: relative;
    top: 35px;
    width: 50%;
    left: 25%;
    background: #d8902a 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 15px #00000033;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 600px) {
    #bline {
        display: none;
    }
    .hero .btn-yellow {
        width: 100%;
        margin: 0;
        left: 0;
    }
}
</style>
