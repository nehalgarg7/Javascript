$(document).ready(function () {
    //Your jquery code here...


    console.log($); //$(jQuery)

    // jQuery syntax looks this...
    // $('selector').action()

    //clicks on all the p elements.
    //$('p').click(); //click on p
    $('p').click(function () {
        console.log('you clicked on p', this);
        //$('p').hide(); //hide all the p tag.


        // $('#id').hide();
        // $('.class').hide();

        $(this).hide(); // hide the p tag on which you have clicked particulary.
    }); //do this when we click on p.

    $('#second').click(function () {
        $(this).hide();
    });

    //Events in Jquery.
    // Mouse Events =  click, dblclick, mouseclick, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // document/window events = load, resize, scroll, unload

    // $('h2').hover(function(){
    //     console.log("You double clicked.");

    //     //$(this).hide();
    // }, function(){
    //     console.log("Thnks for coming");
    // })

    // ongoing the on method.

    $('h2').on(

        {
            click: function () {
                console.log("Thnks", this);
            },
            mouseleave: function () {
                console.log("Mouse left");
            }

        })

    // check hidden, show function.

    // toogle function.
    // $('#but').click(function () {
    //     $('.wiki').toggle();
    // })

    //fadein(), fadeout(), fadetoggle(), fadeto() , 
    //slide methods...speed and callback function are optional....slideup(), slideDown(), slideToogle().

    // Animate function in JQuery.

    // $('.wiki').animate({
    //     opacity:0.3,
    //     height:'153px',
    //     width:'45px'
    // },2000)

    //Queue... in execution...
    // $('.wiki').animate({opacity:0.3},4000);
    // $('.wiki').animate({height:'145px'},1000);

    //.stop() is used to stop the animation.

    $('.wiki').text("I am Nehal"); // .html()..return html tags.  ...html('h3');

   // $('.wiki').html('h4');

   // html... val function,, remove (), empty(), 

   // addclass() , removeclass().

   //.css()

   //AJAX ::: $.get() ,$.post()..
})



// there are three main types of selectors in jQuery.

/*
1. Element selector.
2. Class selector.
3. Id selector.

4. Other selectors.
$('*').click() //clicks on all the elements.
$('p.odd').click()
$('p:first').click()....etc..
*/