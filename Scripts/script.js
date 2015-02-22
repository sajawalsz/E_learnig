  $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        }); 
        $('.carousel').carousel('cycle');
    
   $('#top-nav').onePageNav({
                 currentClass: 'active',
                 changeHash: true,
                 scrollSpeed: 500
            });

       alert("hi");
       $('#b1').click(function () {
           var userName = $('#UserName').val();
           alert('Hi');
           $.getJSON("/Account/CheckUserName?UserName=" + userName, function (data) {
               if (!data) {
                   $('#result').text("User already exists in database");
               }
               else {
                   $('#result').text("User Name is available");
               }
           });
       });

});

  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });

  });