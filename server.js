var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var transporter;
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});
app.post('/api/booking', function(req, res) {
    var text = '\n\n Name : ' + req.body.car_name + '\n\n From : ' + req.body.car_from + '\n\n To : ' + req.body.car_to + '\n\n Date : ' + req.body.car_date + '\n\n Seat : ' + req.body.car_seat + '\n\n Mobile : ' + req.body.car_mobileNumber + '\n\n Halt : ' + req.body.car_halt;
    var mailOptions = {
        from: 'krunalpawar90@gmail.com', // sender address
        to: 'vishukamble24@gmail.com', // list of receivers vishukamble24@gmail.com
        subject: 'MM Travels booking confirmation', // Subject line
        text: text //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            //  res.json({ yo: 'error' });
        } else {
            console.log('Message sent: ' + info.response);
            // res.json({ yo: info.response });
        };
    });
    res.send('good');
});
var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
    transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'krunalpawar90@gmail.com', // Your email id
            pass: 'lanurk@1990' // Your password
        }
    });

})
