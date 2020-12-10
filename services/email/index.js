var nodemailer = require("nodemailer");
var config = require("../../configs/config");

var Mailgen = require("mailgen");
// https://medium.com/javascript-in-plain-english/how-to-send-emails-with-node-js-1bb282f334fe
module.exports = {
    sendMail: function (name,email, introduction, subject, policyLink, cb) {
       // console.log("Password......", password)
        // console.log("Link......", policyLink)
        let transporter = nodemailer.createTransport({
            service: "Yahoo",
            secure: true,
            auth: {
                user: config.email.user,
                pass: config.email.pass
            },
        });
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "InVision",
                link: "https://robosoftin.com"
            },
        });
        let response = {
            body: {
                name,
                intro: [ introduction ,'<a href= "' + policyLink + '" >click here </a>'],
            },
        };
        let mail = MailGenerator.generate(response);
        let message = {
            from: config.email.user,
            to: email,
            subject: subject,
            html: mail

        };

        transporter
            .sendMail(message)
            .then(() => {
                console.log("------------message success");
                cb();
                // return res
                //     .status(200)
                //     .json({ msg: "you should receive an email from us" });
            })
            .catch((error) => console.error(error));
        // };

    }
}
