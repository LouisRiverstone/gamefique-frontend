<template>
    <div
        class="row d-flex justify-content-center align-items-center"
        id="whyPlataform"
    >
        <div
            class="d-flex flex-column justify-content-center align-items-center"
        >
            <h1>Porque usar a plataforma?</h1>
        </div>
        <div class="col-md-2 m-5">
            <div
                class="
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                "
            >
                <img src="@/assets/landing-page/4.png" class="thumbnail" />
                <p class="mt-3">
                    Você poderá ter acesso a planos de aula que envolvam Jogos
                    Digitais, Gamificação e Desenvolvimento de Jogos para
                    utilizar em suas aulas.
                </p>
            </div>
        </div>
        <div class="col-md-2 m-5">
            <div
                class="
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                "
            >
                <img src="@/assets/landing-page/5.png" class="thumbnail" />
                <p class="mt-3">
                    A plataforma viabilizará a comunicação entre docentes que
                    estejam buscando integrar seus conteudos com os Jogos
                    Digitais
                </p>
            </div>
        </div>
        <div class="col-md-2 m-5">
            <div
                class="
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                "
            >
                <img src="@/assets/landing-page/6.png" class="thumbnail" />
                <p class="mt-3">
                    Poderá também contrubuir com seus próprios planos de aula,
                    códigos e comentários. Assim ajudando a comunidade de
                    docentes.
                </p>
            </div>
        </div>

        <div class="col-md-6 m-5 bigTXT">
            <p>A plataforma é 100% gratuita</p>
        </div>
    </div>
</template>

<style>
.thumbnail {
    border-radius: 300px;
}

.bigTXT {
    background-color: #108445;
    padding-top: 5px;
    border-radius: 15px;
}

.bigTXT p {
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
}
#whyPlataform {
    margin-top: 70px;
    color: #2c3e50;
}
.red {
    color: #eb1a5a;
}
@media (max-width: 600px) {
    #howitworks p {
        width: 100%;
        text-align: center;
    }
}
</style>