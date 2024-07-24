<template>
    <div class="container">
        <div class="header-logo">
            <a href="../index.html"><img src="../assets/img/filmify.png" alt="filmfy"></a>
        </div>
        <div class="detailItems">
            <div class="detailBox">
                <div class="cardImage">
                    <img src="https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_SX300.jpg"
                        alt="">
                </div>
    
                <div class="cardInfo">
                    <div class="movieName">
                        <h2 id="nameMovie">movie name</h2>
                    </div>
                    <div class="movieYear">
                        <span id="yearMovie">2012</span>
                    </div>
                </div>
    
                <div class="detailInfo">
                    <div class="info">
                        <span class="detailTitle">Filmin Adı:</span>
                        <span>movie</span>
                    </div>
                    <div class="info">
                        <span class="detailTitle">Çıkış Yılı:</span>
                        <span>movie</span>
                    </div>
                    <div class="info">
                        <span class="detailTitle">Filmin Türü:</span>
                        <span>movie</span>
                    </div>
                </div>
    
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    padding: 0 120px;
    width: 100%;
  }
.header-logo{
    width: 100%;
    height: 60px;
    margin: 40px 0 28px 0;
}
.header-logo img{
    width: auto;
    height: 100%;
}
.detailItems{
    display: flex;
    align-items: center;
    justify-content: center;
}
.detailBox {
    width: 60%;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #2B2B2B;
    border-radius: 12px;
    padding: 30px;
    gap: 40px;
    margin: 10px 0;
}
.cardInfo {
    width: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 16px 0;
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
.movieName{
    height: auto;
}

@media (max-width: 1000px) {
    .detailBox {
        width: 100%;
    }
}
@media (max-width: 850px) {
    .container{
      padding: 0 60px;
    }
}
@media (max-width: 620px) {
  .container{
    padding: 0 20px;
  }
}
@media (max-width: 400px) {
    .detailInfo span{
        font-size: 14px;
    }
  }
</style>