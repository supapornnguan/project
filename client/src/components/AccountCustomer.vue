<template>
<div>
  <sui-form>
    <sui-form-field inline>
      <img id="picturesave" src="../assets/cat.jpg" width="170px" height="170px" />
      <input type="file" placeholder="CHOOSE PICTURE"  />
    </sui-form-field>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">USERNAME </label>
        <input id="centerbox" type="text" placeholder="Username" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">FIRSTNAME</label>
        <input id="centerbox" type="text" placeholder="First name" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">LASTNAME</label>
        <input id="centerbox" type="text" placeholder="Last name" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">E-MAIL</label>
        <input id="centerbox" type="text" placeholder="E-Mail" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">PHONE NUMBER</label>
        <input id="centerbox" type="text" placeholder="Phone Number" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">ADDRESS</label>
        <input id="centerbox" type="text" placeholder="Address" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">DISTRICT</label>
        <input id="centerbox" type="text" placeholder="District" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">PROVINCE</label>
        <input id="centerbox" type="text" placeholder="Province" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">COUNTRY</label>
        <input id="centerbox" type="text" placeholder="Country" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">ZIP CODE</label>
        <input id="centerbox" type="text" placeholder="Zip Code" />
      </sui-form-field >
    </sui-form-fields>
  </sui-form>
      <sui-button basic color="black" id="centersave">SAVE</sui-button>
</div>
</template>

<style>
.infomation{
  margin-top: 50px;
}

.ChoosePicture{
  margin-left: 5px;
}

#centersave{
  width: 200px;
  margin-top: 50px;
  margin-left: 400px;
}

#centertext{
  margin-left: 100px;
}

#centerbox{
  margin-left: 50px;
}

#textfit{
  width: 150px;
}

#picturesave{
  margin-left: 100px;
}
</style>