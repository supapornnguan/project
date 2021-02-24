<template>
    <div>
        <button @click="send">dens</button>
        
    </div>
</template>
<script>

export default {
    methods: {
        send(){
            const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'supapronnguan@hotmail.com', // your email
    pass: 'Numwan14477'              // your password
  }
});

const mailOptions = {
  from: 'shopngnguan@hotmail.com',              // sender
  to: 'supapronnguan@hotmail.com',              // list of receivers
  subject: 'Hello from sender',            // Mail subject
  html: '<b>Do you receive this mail?</b>' // HTML body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});


        }
    },
    
}
</script>
<style scoped>
    
</style>