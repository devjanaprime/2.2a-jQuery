// mySite jQuery example
$(function ()
{
   // after the "#" is the id of the object on which we can click
   $('#clickMeForSomething').click(function(){
        console.log("Something happened");
    });
});

console.log( "mySite.js loaded" );
