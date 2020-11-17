<template>
    <div>
        <navbar/>
        <search/>
        <div class="container1">
        <sui-grid :columns="2">
            <sui-grid-row stretched>
                <sui-grid-column>
                        <img src="../assets/nikonAAAA-2.jpg" :width="300"/>
                        <div id="came1">
                            <img src="../assets/nikonAAAA-2.jpg" :width="90" :height="90" id="imgCamera"/>
                            <img src="../assets/nikonAAAA-3.jpg" :width="90" :height="90" id="imgCamera"/>
                            <img src="../assets/nikonAAAA-5.jpg" :width="90" :height="90" id="imgCamera"/>
                            <img src="../assets/nikonAAAA-6.jpg" :width="90" :height="90" id="imgCamera"/>
                        </div>
                </sui-grid-column>
                <sui-grid-column>
                    <h3 class="info">D5600 DX-Format Digital SLR w/AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR</h3>
                    <router-link to="/acSeller" id="linkShop">shopshopeieieiei</router-link>
                    <div id="rate">
                         <sui-rating :rating="value" :max-rating="5" id="ratting"/>
                    </div>
                   
                    <p class="info">brand</p>
                    <p class="info">19,999 THB</p>
                    
                    <div id="addQTY">
                        <p class="info">Quantity</p>
                        <button id="buttonAdd" @click="miniQuantity">-</button>
                        <input type="text" id="inputQTY" v-model="quantity">
                        <button id="buttonAdd" @click="addQuantity">+</button>
                        <p style="margin-left:50px; color:gray;">{{pice_avaliable}} pice available</p>
                    </div>

                    <div>
                        <sui-button basic secondary @click="gotoSummary">BUY NOW</sui-button>
                        <sui-button basic secondary>ADD TO CART</sui-button>
                    </div>

                    <p class="info" style="color:gray">{{customer_purchased}} customers purchased</p>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
        </div>
        <h2 class="H2">Reviews</h2>
        <div >
           <p>Overall: </p> 
           <sui-rating :rating="value" :max-rating="5" id="ratting" /> 
        </div>
        
        <b-progress :value="90" variant="danger" :striped="striped" class="mt-2" id="progressStar"></b-progress> 
        <b-progress :value="40" variant="danger" :striped="striped" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="30" variant="danger" :striped="striped" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="20" variant="danger" :striped="striped" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="10" variant="danger" :striped="striped" class="mt-2" id="progressStar"></b-progress>
        <h2 class="H2">Detail Product</h2>
        <h2 class="H2">Customer Rating and reviews</h2>
    </div>
</template>
<script>
import navbar from "../components/navbar"
import search from "../components/search"
export default {
    data() {
        return {
             value: 1,
             pice_avaliable : 3,
             customer_purchased : 12,
             quantity : '0'
        }
    },
    components : {
        search,
        navbar
    },
    methods: {
        addQuantity(){
            if(this.quantity<this.pice_avaliable)
            return this.quantity++
        },
        miniQuantity(){
            if(this.quantity!=0)
            return this.quantity--
        },
        gotoSummary(){
            this.$router.replace('summary')
        }
    },
}
</script>
<style>
.container1{
    width: 1000px;
    margin-left: 100px;
}
.info{
    text-align: left;
    margin-bottom: 10px;
    margin-right: 35px;
}
.deco{
    direction: none;
}
.H2{
    text-align: left;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    margin-left: 20px;
}
#linkShop{
    text-align: left;
}
#came1{
    display: flex;
}
#imgCamera{
    border: 2px solid 	#F5F5F5;
    margin-right: 5px;
}
#rate{
    width: 20px;
}
#addQTY{
    display: flex;
}
#inputQTY{
    border-radius: 4px;
    border: 1px solid black;
    width: 30px;
    height: 25px;
    margin-top: -5px;
    text-align: center;
}
#buttonAdd{
    border: none;
    background-color: white;
    margin-top: -5px;
    margin-right:5px ;
    margin-left: 5px;
    height: 25px;
}
#progressStar{
    width: 300px;
    margin-left: 20px;
}

</style>