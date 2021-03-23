<template>
  <div>
    <button @click="sendEmail" >send</button>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
// init("user_5dyI9G8yYC3Cf29ssQmCL");
export default {
  methods: {
    sendEmail: () => {


    var templateParams = {
    from_name: 'shopaholic',
    to_name: 'seller center',
    reply_to : '2020shopaholic@gmail.com'
    };
    
      emailjs.send('service_zqe19ol', 'template_v4hansp',templateParams, 'user_5dyI9G8yYC3Cf29ssQmCL')
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });


    }
  }
}
</script>