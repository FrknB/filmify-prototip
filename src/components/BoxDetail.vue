<template>
    <div class="contentItems">
        
        
    </div>    
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style>
.contentItems{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 40px;
    align-content: center;
}
.content-item{
    width: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}



.detailBox {
    width: 45%;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #2B2B2B;
    border-radius: 12px;
    padding: 30px;
    gap: 40px;
    margin: 10px 0;
}

.detailBox .cardInfo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.detailBox h2 {
    font-size: 28px;
    font-weight: bold;
    color: #D8B63E;
}

.detailBox span {
    font-size: 20px;
    color: white/* #707070 */;
}
.cardImage{
    display: flex;
    justify-content: center;
}
.detailBox .cardImage img {
    width: 220px;
    height: 300px;
    border-radius: 12px;
    object-fit: cover;
}

.detailInfo {
    display: flex;
    flex-direction: column;
    justify-self: start;
    gap: 20px;
}

.detailInfo span {
    width: auto;
    color: white;
}

.info {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
}

.detailTitle {
    font-size: 18px;
    color: #D8B63E;
    font-weight: bold;
}
@media (max-width: 530px) {
    .cardItems{
        width: auto;
    }
}
@media (max-width: 350px) {
    .contentItems{
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
    .cardItems{
        justify-content: center;
    }
}
</style>