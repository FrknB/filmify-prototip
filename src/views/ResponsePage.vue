<template>
  <div class="container">
    <div class="header-logo">
      <router-link :to="{path: '/'}">
        <img src="../assets/img/filmify.png" alt="filmfy"/>
      </router-link>
    </div>

    <div class="header">
      <search-bar />
    </div>

    <div class="content">

        <div class="cardItems">
            <div class="cardImage">
                <img src="../assets/img/AdobeStock_498804501.png" alt="filmifyCricket">
            </div>
            <div class="cardInfo">
                <div class="movieName">
                    <h2 id="nameMovie">Movie Header</h2>
                </div>
                <div class="movieYear">
                    <span id="yearMovie">2012</span>
                </div>
            </div>
    </div>
        <div class="cardItems">
            <div class="cardImage">
                <img src="../assets/img/AdobeStock_498804501.png" alt="filmifyCricket">
            </div>
            <div class="cardInfo">
                <div class="movieName">
                    <h2 id="nameMovie">Movie Header</h2>
                </div>
                <div class="movieYear">
                    <span id="yearMovie">2012</span>
                </div>
            </div>
        </div>
        <div class="cardItems">
          <div class="cardImage">
              <img src="../assets/img/AdobeStock_498804501.png" alt="filmifyCricket">
          </div>
          <div class="cardInfo">
              <div class="movieName">
                  <h2 id="nameMovie">Movie Header</h2>
              </div>
              <div class="movieYear">
                  <span id="yearMovie">2012</span>
              </div>
          </div>
        </div>
                <div class="cardItems">
          <div class="cardImage">
              <img src="../assets/img/AdobeStock_498804501.png" alt="filmifyCricket">
          </div>
          <div class="cardInfo">
              <div class="movieName">
                  <h2 id="nameMovie">Movie Header</h2>
              </div>
              <div class="movieYear">
                  <span id="yearMovie">2012</span>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import searchbar from "@/components/SearchData.vue";
  import boxDetail from  '@/components/BoxDetail.vue';

  
  export default {
    components: {
      "search-bar": searchbar,
      "detail-box": boxDetail,
    },
    
  };
  </script>

<style scoped>
.container {
  padding: 0 120px;
  width: 100%;
}

.buttonBox {
  display: flex;
  gap: 16px;
}
button {
  padding: 16px 20px;
  border-radius: 12px;
  background-color: #3c3c3c;
  color: #ffffff;
  outline: none;
  border: none;
  transition: 0.3s ease all;
  cursor: pointer;
}
button:hover {
  background-color: #707070;
}
.header-logo {
  width: 100%;
  height: 40px;
  margin: 40px 0 28px 0;
}
.header-logo img {
  width: auto;
  height: 100%;
}
.response {
  width: 100%;
  padding: 30px 148px;
  display: flex;
  gap: 0 24px;
}
.content{
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 56px;
  padding: 20px 0;
}
.cardItems {
  flex: 2;
  flex-basis: 400px;
  width: 40%;
  height: auto; /* düzenleme */
  display: flex;
  justify-content: flex-start;
  background-color: #3C3C3C;
  padding: 30px;
  gap: 0 24px;
  cursor: pointer;
  border-radius: 12px;
  margin: 12px 0;
  flex-wrap: wrap;
}

.cardItems:focus {
  background-color: #3C3C3C;
}

.cardImage img {
  width: 162px;
  height: 240px;
  border-radius: 10px;
}

.cardInfo {
  width: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 16px 0;
}

.movieName {
  height: auto;
  font-size: 22px;
  font-weight: bold;
  color: #D8B63E;
}

.movieYear {
  color: #707070;
  font-size: 24px;
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
  .cardItems {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 40px;
  }
  .movieName {
    font-size: 20px;
  }
}
</style>