<template>
    <div>
        <h3 style="width:400px; color:black; font-weight:1000;">ADD NEW ADDRESS</h3>
        <div id="formAddress">
            <sui-form>
                <sui-form-field>
                    <label id="labelword">ADDRESS</label>
                    <input placeholder="ADDRESS" style="margin-bottom:10px"/>
                </sui-form-field>
                <sui-form-field>
                    <label id="labelword">PROVINCE</label>
                    <input placeholder="PROVINCE" style="margin-bottom:10px"/>
                </sui-form-field>
                <sui-form-field>
                    <label id="labelword">DISTRICT</label>
                    <input placeholder="DISTRICT" style="margin-bottom:10px"/>
                </sui-form-field> 
                <sui-form-field>
                    <label id="labelword">POSTCODE</label>
                    <input placeholder="POSTCODE" style="margin-bottom:10px"/>
                </sui-form-field> 
                <sui-form-field>
                    <label id="labelword">COUNTRY</label>
                    <input placeholder="COUNTRY" style="margin-bottom:10px"/>
                </sui-form-field> 

                <button id="buttonStyle">SAVE ADDRESS</button>
                <br>
                <button id="buttonStyle">BACK</button>
            </sui-form>
        </div>
    </div>
</template>
<style scoped>
#formAddress{
    width: 400px;
    position: relative;
    left: 500px;
    top: 50px;
}
#labelword{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
}
#buttonStyle{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 5px;
}
    
</style>
