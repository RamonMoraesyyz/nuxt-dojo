<template>
    <div>
        <h2>About</h2>
        <p>Bem-vindo ao Nuxt-Dojo, o seu destino online para uma experiência de compras única e envolvente! Em nosso dojo virtual, combinamos a sofisticação moderna do Nuxt.js com a arte tradicional do comércio eletrônico, 
        criando um espaço onde a facilidade de navegação se encontra com a elegância do design. </p>

        <p> Explore nosso vasto catálogo de produtos com a agilidade e a velocidade do Nuxt.js, que proporcionam uma navegação suave e eficiente. 
        Cada clique é uma jornada pelo mundo de oportunidades de compra, onde a estética contemporânea encontra produtos de qualidade. </p>

        <p>No Nuxt-Dojo, não é apenas sobre comprar; é sobre a jornada de descoberta. Nossas páginas são construídas para contar uma história, guiando você através de um
         caminho virtual que revela não apenas o que está à venda, mas a essência de cada produto. Desfrute da harmonia entre a funcionalidade robusta do Nuxt.js e a arte da apresentação cuidadosa. </p>

        <p>Estamos comprometidos com a simplicidade e a eficiência, assim como um artista marcial domina sua técnica. Navegue com confiança, sabendo que cada transação é segura e cada interação 
        é projetada para aprimorar sua experiência. No Nuxt-Dojo, a satisfação do cliente é nossa maior conquista. </p>
            
        <p></p>
            <div>{{ data }}</div>
    </div>

</template>

<script setup>
    const {data} = await useFetch('/api/currency/GBP')

</script>

<style scoped>
 h2 {
    margin-bottom: 20px;
    font-size: 36px;
 }

 p {
    margin: 20px 0;
 }


</style>
    