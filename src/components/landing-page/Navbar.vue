<template>
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand col-md-2 offset-md-2" href="#">
                <img src="@/assets/landing-page/logo.png" alt="" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto col-md-10 offset-md-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#whyGames">Motivação</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#whyPlataform">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#prices">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Contato</a>
                    </li>
                    <li class="nav-item nav-button-blue">
                        <a class="nav-link" href="#prices">Veja a Plataforma</a>
                    </li>
                    <li class="nav-item nav-button-green">
                        <a class="nav-link" href="#prices">Registre-se</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-toggler-icon {
    color: white !important;
}
.navbar {
    /* background-color: #04652d; */
    font-size: 13px;
    height: 85px;
}
.nav-link {
    color: #fff !important;
}
.nav-button-blue {
    background-color: #47cbf1;
    border-radius: 5px;
    margin-left: 20px;
    padding-top: 0;
    padding-bottom: 0;
    text-transform: uppercase;
}

.nav-button-green {
    background-color: #377448;
    border-radius: 5px;
    margin-left: 20px;
    padding-top: 0;
    padding-bottom: 0;
    text-transform: uppercase;
}
</style>