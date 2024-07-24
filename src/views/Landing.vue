<template>
    <div class="container">
        <div class="centeredBox">
            <div class="sideBox">
                <div class="logo">
                    <router-link :to="{path: '/'}">
                        <img src="../assets/img/filmify.png" alt="Filmify" title="filmify">
                    </router-link>
                </div>
                <div class="textBox">
                    <search-bar />
                    <div class="buttonBox">
                        <button id="searchBtn" @click="Search">Search in Filmy</button>
                        <button style="display: none;">I feel lucky !</button>
                    </div>
                </div>
            </div>
            <div class="sideBoxRight">
                <img src="../assets/img/AdobeStock_498804501.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import searchbar from '@/components/SearchData.vue'

export default {
    components:{
        "search-bar": searchbar, 
    },
}
</script>

<style scoped>
.centeredBox {
    width: 100%;
    height: 96vh;
    display: flex;
    align-items: center;
    padding: 60px 120px;
    justify-content: space-between;
}
.sideBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.sideBox img{
    width: 308px;
    height: auto;
}
.textBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.searchBox {
    width: 670px;
    border: 1px solid #3C3C3C;
    padding: 16px 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.searchBox:hover{
    border: 1px solid white;
}
.searchBox i {
    font-size: 20px;
    color: #707070;
    
}
.searchBox i:hover{
    color: #fff;
}
input {
    width: 100%;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
    color: #FFFFFF;
}
.buttonBox {
    display: flex;
    gap: 16px;
}
button {
    padding: 16px 20px;
    border-radius: 12px;
    background-color: #3C3C3C;
    color: #FFFFFF;
    outline: none;
    border: none;
    transition: .3s ease all;
    cursor: pointer;
}
button:hover {
    background-color: #707070;
}
.sideBoxRight img {
    width: 531px;
    height: auto;
}

@media (max-width: 1200px) {
    .searchBox{
        width: 480px;
    }
    .sideBoxRight img {
        width: 480px;
    }
}
@media (max-width: 1000px) {
    .sideBox{
        align-items: center;
        padding: 40px;
    }
    .sideBoxRight img {
        display: none;
    }
    .centeredBox{
        padding: 40px;
    }
}
@media (max-width: 570px) {
    .centeredBox{
        padding: 20px;
    }
    .searchBox{
        width: 100%;
    }
    .sideBox{
        padding: 0;
    }
}
@media (max-width: 360px) {
    .logo img{
        width: 100%;
    }
}
</style>