<template>
  <div class="searchBox">
      <input
        type="text"
        v-model="searchInput"
        id="searchMovie"
        placeholder="Search Movie"
      />  
      <router-link :to="{name: 'responsepage'}">
            <i class="bi bi-search" id="searchBtn" @click="Search"></i>
      </router-link>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
data() {
  return {};
},
setup() {
  const searchInput = ref("");
  

    return { searchInput};
  }
}
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
color: white;
font-weight: bold;
font-size: 16px;
-webkit-text-fill-color: #ffffff;
-webkit-box-shadow: 0 0 0 30px #2c2c2c inset !important;
-webkit-text-fill-color: #fff !important;
}

.searchBox {
width: 600px;
border: 1px solid #3c3c3c;
padding: 16px 20px;
border-radius: 12px;
display: flex;
justify-content: space-between;
gap: 20px;
transition: .3s ease all;
}
.searchBox:hover {
border: 1px solid white;
}
.searchBox i {
font-size: 20px;
color: #707070;
transition: .1s ease all;
}
.searchBox i:hover {
color: #fff;
}
input {
width: 100%;
font-size: 16px;
outline: none;
border: none;
background: none;
color: #ffffff;
}
@media (max-width: 960px) {
  .searchBox{
      width: 100%;
  }
  .sideBox{
      padding: 0;
  }
}
@media (max-width: 570px) {
  .searchBox{
      width: 100%;
  }
  .sideBox{
      padding: 0;
  }
}
</style>