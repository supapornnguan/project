const functions = require("firebase-functions");
// const express = require("express")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true,  credentials: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: '2020shopaholic@gmail.com',
        pass: 'shopaholic1234'
    },
    debug: true,
});


exports.corsEnabledFunction = (req, res) => {
    // Set CORS headers for preflight requests
    // Allows GETs from any origin with the Content-Type header
    // and caches preflight response for 3600s
  
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
      res.set('Access-Control-Allow-Headers','Content-Type, Option, Authorization');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      res.send('Hello World!');
    }
  };


//order at store
exports.orderAtStore = functions.https.onRequest((req, res) => {
   return cors(req, res, () => {
      
        // getting dest email by query string
        const email_customer = req.body.email;
        const order_id = req.body.order_id
       

        const mailOptions = {
            from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
            to: email_customer,
            subject: 'Your order ' + order_id + ' Has arrived at the location', 
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body> 
            <h1 style=" text-align: center;">SHOPAHOLIC</h1>
            <br/> 
            <hr style="width:300px">
            <br>
            <img src="https://azuradisc.com/wp-content/uploads/2019/10/Locak-Pickup-Icon-2.jpg" style="margin-left:480px; width:70px" alt="">
            <div style="text-align:center; margin-top:40px; width:300px; margin-left:350px">
                <p>Your order <strong>${req.body.order_id}</strong> <br> has arrived at the ${req.body.name_branch}</p>
                <p><strong>To Do : </strong> <br>Pick up your order within 14 days <br> Show this order id to the staff to collect your order</p>
                <br>
                <p>If the order has not been picked up during ${req.body.startDate} - ${req.body.endDate}, we will return it to the seller.</p>
                <br>
                <p><strong>Opening time:</strong> <br> ${req.body.hours}</p>
                <br>
                <p><strong>Where: </strong> <br>${req.body.name_branch}</p>
            </div>
            <body/> 
            </html>
            ` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

//ordered
exports.ordered = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        res.set('Access-Control-Allow-Origin', "*")
        res.set('Access-Control-Allow-Methods', 'GET, POST')

        // getting dest email by query string
        const email_customer = req.body.email;
        const order_id = req.body.order_id;
        // const product_des = req.body.product
        // const j = 0 

        // '<img src="'+urls[i]+'">'

        var n;
        var arrayItems = "";
        var totalPrice =0
        for(n in req.body.product){
            var product_image = req.body.product[n].product_image;
            var product_name = req.body.product[n].product_name;
            var price = req.body.product[n].product_unit_price;
            var quantity = req.body.product[n].quantity;
            arrayItems += '   <img src=' + product_image + ' style="width:180px">  <p style="color:gray">'+ product_name +'</p>  <p style="font-weight:600">Unit Price: '+ price+'</p>   <p style="font-weight:600">QTY:  '+ quantity+'</p>   ' 
            totalPrice += (price * quantity)
        }

        const mailOptions = {
            from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
            to: email_customer,
            subject: 'Your order ' + order_id + ' Confirmation ' ,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body> 

            <h1 style=" text-align: center;">SHOPAHOLIC</h1>
            <br/> 
            <hr style="width:300px">
            <p style="text-align:center; font-size:20px; margin-top:50px">Order Confirmation</p>
            
            <p style="text-align:center">Thank you for your order! We hope you enjoyed shopping with us.</p>
            <br>
            <br>
            <p style="text-align:center"> <strong>ORDER AND PICKKING UP INFO</strong></p>
            <hr style="width:500px;  border: 1px solid black;">

            <div style="margin-top:50px">
            <div style="margin-bottom:40px; margin-left:270px">
                <p style="font-weight:600"> ORDER NO. : </p> 
                <div style="width:400px; text-align: left;">
                    <p style="display:inline;">${req.body.order_id}</p>
                </div>
            </div>
            
            <div style="margin-bottom:40px; margin-left:270px">
                <p style="font-weight:600">SHIPPING ADDRESS : </p>
                <div style="width:400px; text-align: left;">
                    <p style="display:inline;">${req.body.address}</p>
                </div>
            </div>

            <div style="margin-bottom:40px; margin-left:270px">
                <p style="font-weight:600">HOURS :</p>
                <div style="width:400px; text-align: left;">
                    <p style="display:inline;">${req.body.hours}</p>
                </div>
            </div>

            <div style="margin-bottom:40px; margin-left:270px">
                <p style="font-weight:600">TELL :</p>
                <div style="width:400px; text-align: left;">
                    <p style="display:inline;">${req.body.tell}</p>
                </div>
            </div>

        </div>
            
            <p style="text-align:center; margin-top:50px"> <strong>WHAT TO KNOW FOR PICKING UP</strong></p>
            <hr style="width:500px;  border: 1px solid black;">

            
                <ul style="margin-left:250px; margin-top:30px; width:450px">
                    <li>WE WILL SEND YOU ANOTHER EMAIL WHEN YOUR PACKAGE ARRIVES AT THE STORE PICKUP. TO COLLECT YOUR PACKAGE, YOU MUST SHOW THAT EMAIL AT THE REGISTER. THIS EMAIL WILL NOT BE ACCEPTED FOR PICK UP.</li>
                    <br>
                    <li>ONCE YOUR ORDER ARRIVES AT THE STORE, YOU'LL HAVE 14 DAYS TO PICK IT UP. IF YOU DO NOT, YOUR ORDER WILL BE CANCELLED AND SEND BACK TO SELLER.</li>
                    <br>
                    <li>YOU CAN RETURN YOUR ORDER AT THE STORE IMMEDIATELY AFTER PICK UP.</li>
                </ul>

                <p style="text-align:center; margin-top:50px"> <strong>PRODUCTS</strong></p>
            <hr style="width:500px;  border: 1px solid black;"> 
            <div style="margin-left:270px">
            ${arrayItems}
            </div>
            <hr style="width:500px;  border: 1px solid gray;"> 
            <p style="font-weight:600; margin-left:600px" >TOTAL PRICE : ${totalPrice} THB</p>

           
            <body/>
            <html/>
            ` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

//verify selelr
// exports.verifySeller = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
      
//         // getting dest email by query string
//         // const email_customer = req.body.email;
//         // const order_id = req.body.order_id
       

//         const mailOptions = {
//             from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
//             to: email_customer,
//             subject: 'l', 
//             html: `
//             <!DOCTYPE html>
//             <html lang="en">
//             <body> 
//             <h1 style=" text-align: center;">SHOPAHOLIC</h1>
//             <br/> 
//             <hr style="width:300px">
//             <br>
//             <img src="https://azuradisc.com/wp-content/uploads/2019/10/Locak-Pickup-Icon-2.jpg" style="margin-left:480px; width:70px" alt="">
//             <div style="text-align:center; margin-top:40px; width:300px; margin-left:350px">
                
//             </div>
//             <body/> 
//             </html>
//             ` 
//         };
  
//         // returning result
//         return transporter.sendMail(mailOptions, (erro, info) => {
//             if(erro){
//                 return res.send(erro.toString());
//             }
//             return res.send('Sended');
//         });
//     });    
// });


//order by shipping
exports.orderedShipping = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const email_customer = req.body.email;
        const order_id = req.body.order_id


        var n;
        var arrayItems = "";
        var totalPrice =0
        for(n in req.body.product){
            var product_image = req.body.product[n].product_image;
            var product_name = req.body.product[n].product_name;
            var price = req.body.product[n].product_unit_price;
            var quantity = req.body.product[n].quantity;
            arrayItems += '   <img src=' + product_image + ' style="width:180px">  <p style="color:gray">'+ product_name +'</p>  <p style="font-weight:600">Unit Price: '+ price+'</p>   <p style="font-weight:600">QTY:  '+ quantity+'</p>   ' 
            totalPrice += (price * quantity)
        }
       

        const mailOptions = {
            from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
            to: email_customer,
            subject: 'Your order ' + order_id + ' confirmation', 
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body> 
            <h1 style=" text-align: center;">SHOPAHOLIC</h1>
            <br/> 
            <hr style="width:300px">
            <br>
            <div style="text-align:center; margin-top:40px">
                <h4 style="font-weight:600">YOUR ORDER HAS BEEN PLACED <br> BUT NOT PAID YET!</h4>
                <br>
                <br>
                <p>Thank you for shopping with us. Your order has been placed and needs to be paid for.</p>
                <br>
                <br>
                
            </div>
            <p style="text-align:center"> <strong>ORDER AND SHIPPING INFO</strong></p>
            <hr style="width:500px;  border: 1px solid black;">
            <div style="margin-top:50px">
                <div style="margin-bottom:40px; margin-left:270px">
                    <p style="font-weight:600"> ORDER NO. : </p> 
                    <div style="width:400px; text-align: left;">
                        <p style="display:inline;">${req.body.order_id}</p>
                    </div>
                </div>

                <div style="margin-bottom:40px; margin-left:270px">
                <p style="font-weight:600">SHIPPING ADDRESS : </p>
                <div style="width:400px; text-align: left;">
                    <p style="display:inline;">${req.body.address_customer}</p>
                </div>
            </div>
            </div>
            <p style="text-align:center; margin-top:50px"> <strong>WHAT TO KNOW FOR SHIPPING</strong></p>
            <hr style="width:500px;  border: 1px solid black;">

            
                <ul style="margin-left:250px; margin-top:30px; width:450px">
                    <li>WE WILL RESERVE YOUR ORDER IN THE NEXT 24 HOURS. IN CASE YOUR PAYMENT IS NOT MADE BY THEN, YOUR ORDER WILL BE AUTOMATICALLY CANCELLED</li>
                </ul>

            <p style="text-align:center; margin-top:50px"> <strong>PRODUCTS</strong></p>
            <hr style="width:500px;  border: 1px solid black;"> 
            <div style="margin-left:270px">
            ${arrayItems}
            </div>
            <hr style="width:500px;  border: 1px solid gray;"> 
            <p style="font-weight:600; margin-left:600px" >TOTAL PRICE : ${totalPrice} THB</p>


            <body/> 
            </html>
            ` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});


//delivered
exports.orderdelivered = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const email_customer = req.body.email;
        const order_id = req.body.order_id
       
        const mailOptions = {
            from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
            to: email_customer,
            subject: 'SHOPAHOLIC Order Delivered Notification ' +'(#'+ order_id + ')' , 
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body> 
            <h1 style=" text-align: center;">SHOPAHOLIC</h1>
            <br/> 
            <hr style="width:300px">
            <br>
            <div style="text-align:center; margin-top:40px">
                <h4 style="font-weight:600">Your order has been delivered</h4>
                <br>
                <br>
                <p>Thank you for shopping with us. We are glad to in form you that your order ${order_id} has been delivered.
                <br>
                Your tracking number is ${req.body.tracking_no} . We hope you enjoy your purchase on SHOPAHOLIC.
                </p>
                <br>
                <br>
            </div>
            <body/> 
            </html>
            ` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});



//verify seller
exports.verifySeller = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const email_customer = req.body.email;    

        const mailOptions = {
            from: 'SHOPAHOLIC <yourgmailaccount@gmail.com>', 
            to: email_customer,
            subject: 'VERIFICATION' , 
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body> 
            <h1 style=" text-align: center;">SHOPAHOLIC</h1>
            <br/> 
            <hr style="width:300px">
            <br>
            <img src="https://cashu.b-cdn.net/images/global/externalImages/en/registration/complated.png" style="margin-left:440px; width:70px" alt="">
            <div style="text-align:center; margin-top:40px">

                <h4 style="font-weight:600">VERIFICATION SUCCESSFULL</h4>
                <br>
                <br>
                <p>Hello ${req.body.firstname} ${req.body.lastname}</p>
                <br>
                <p>Thank you, your email has been verified. Your account is now active.<br>Please use the link below to login to your account.</p>
                <br>
                <a href="http://localhost:8080/sellerLogin">LOGIN TO YOUR ACCOUNT</a>
                
            </div>
         

            <body/> 
            </html>
            ` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

