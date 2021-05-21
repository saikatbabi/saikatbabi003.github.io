$("#projects").click(function(){
    console.log("project openiing");
    $(".content").load("projects.html");
    $(".active").removeClass("active");
    $(".projects").addClass("active");
    $("html, body").animate({scrollTop: 0}, 100);
})
$(".projects").click(function(){
    console.log("project openiing");
    $(".content").load("projects.html");
    $(".active").removeClass("active");
    $(".projects").addClass("active");
    
})

$(".training").click(function(){
    
    $(".content").load("training.html");
    $(".active").removeClass("active");
    $(".training").addClass("active");
})

$("#training").click(function(){
    
    $(".content").load("training.html");
    $(".active").removeClass("active");
    $(".training").addClass("active");
    $("html, body").animate({scrollTop: 0}, 100);
})

$(".contact").click(function(){
    $(".content").load("contact.html");
    $(".active").removeClass("active");
    $(".contact").addClass("active");
    
})

$(".academics").click(function(){
    $(".content").load("academics.html");
    $(".content").css("height","100%");
    $(".active").removeClass("active");
    $(".academics").addClass("active");
})

$(".home").click(function(){
    console.log("Hello");
    $(".content").load("home.html",true);
    $(".active").removeClass("active");
    $(".home").addClass("active");
    
})


$(".about").click(function(){
    
    $(".content").load("about.html",true);
    $(".active").removeClass("active");
    $(".about").addClass("active");
    
})

$("#about").click(function(){
    
    $(".content").load("about.html",true);
    $(".active").removeClass("active");
    $(".about").addClass("active");
    $("html, body").animate({scrollTop: 0}, 100);
    
})