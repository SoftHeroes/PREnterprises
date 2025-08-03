function connectFormSubmit() {

    var name = $('#name').val();
    var msg = $('#msg').val();
    var email = $('#email').val();

    if (name.trim() == '') {
        alert('Please enter your name.👻');
        return;
    }
    if (msg.trim() == '') {
        alert('Please enter your message.👻');
        return;
    }
    if (email.trim() == '') {
        alert('Please enter your email.👻');
        return;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("invalid email ID");
        return;
    }

    $('body').waitMe({
        effect: 'timer',
        text: 'Sending',
        bg: '#00000052',
        color: '#006eff',
        maxSize: '',
        waitTime: -1,
        textPos: 'vertical',
        fontSize: '',
        source: '',
        onClose: function () { }
    });
    $("body *").prop('disabled', true);


    // sending mail code
    var data = {
        service_id: 'MyGmail',
        template_id: 'connect',
        user_id: 'user_4DCykVQ9Rqg021NgIWqWE',
        template_params: {
            'email': $('#email').val(),
            'name': $('#name').val(),
            'msg': $('#msg').val()
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $("body *").prop('disabled', false);
        $('body').waitMe("hide");

        alert('Message sent successfully! ✌');
        location.reload();
        return;
    }).fail(function (error) {
        $("body *").prop('disabled', false);
        $('body').waitMe("hide");

        alert('message not sent due to technical issue. 😖');
        return;
    });
    // sending mail code
}