<template>
    <div class="row" id="plataform">
        <div class="col-md-6">
            <img src="@/assets/landing-page/big.png" class="image" />
        </div>
        <div class="col-md-6">
            <h3>Porque uma plataforma?</h3>
            <div class="d-flex justify-content-center">
                <p>
                    Os jogos digitais têm crescido de forma generalizada nos
                    últimos anos. De forma geral, são caracterizados como um
                    meio de entretenimento e diversão, e podem ser uma
                    ferramenta poderosa para auxiliar o ensino, pois estimulam a
                    criatividade, a memória e despertam a curiosidade.
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    Esta plataforma visa demonstrar como os jogos digitais podem
                    auxiliar você docente no aprendizado de seus estudantes. E
                    principalmente se propõe a criar uma comunidade online só de
                    docentes que queiram usar jogos digitais em suas aulas.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image {
    width: 100%;
}
#plataform {
    background-color: #e4e3e3;
    padding-top: 70px;
}
#plataform h3 {
    color: #191919;
}
#plataform p {
    width: 60%;
    margin-top: 30px;
}
@media (max-width: 600px) {
    #plataform p,
    #plataform h3 {
        margin-top: 20px;
        text-align: center;
        width: 100%;
    }
    #plataform img {
        position: relative;
    }
}
</style>