$(document).ready(function(){
    //contact form submission
    $(".sbt").click(function(e){
        e.preventDefault();
        $(".form").css("display","none");
        $(".middle").css("display","flex");
        const url= "https://tecvitglitch.herokuapp.com/Sponsor";
        const name=$("#cname").val();
        const mail=$("#cmail").val();
        const number=$("#cnum").val();
        const data ={
            name: name,
            mail: mail,
            number: number
        }
        $.post(url,data,function(){
            $(".middle").css("display","none");
            $(".after").css("display","flex");
            });

    });
});