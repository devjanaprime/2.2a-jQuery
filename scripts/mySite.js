// mySite jQuery example
$(function ()
{
   // after the "#" is the id of the object on which we can click
   $('#clickMeForSomething').click(function(){
     currentUpdate = $('#containerName').val() + " is " + $('#selectFill').val() + " full of it's " + $('#selectCapacity').val() + " capacity.";
     console.log( currentUpdate );
    });

  $('#selectCapacity').change(function(){
    console.log( "selectCapacity: " + $('#selectCapacity').val() );
  });

  $('#selectFill').change(function(){
    console.log( "selectFill: " + $('#selectFill').val() );
  });

});

console.log( "mySite.js loaded" );
