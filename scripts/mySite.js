// mySite jQuery example
var currentUpdate;

$(function ()
{
  // after the "#" is the id of the object on which we can click
  $('#clickMeForSomething').click(function(){
    currentUpdate = $('#containerName').val() + " is " + $('#selectFill').val() + " full of it's " + $('#selectCapacity').val() + " capacity.";
    console.log( currentUpdate );
    $('#outputText').append( '<p>' + currentUpdate + '</p>');
  });

  $('#containerName').keyup(function(){
    console.log( "containerName: " + $('#containerName').val() );
  });

  $('#selectFill').change(function(){
    console.log( "selectFill: " + $('#selectFill').val() );
  });

  $('#selectCapacity').change(function(){
    console.log( "selectCapacity: " + $('#selectCapacity').val() );
  });



});

console.log( "mySite.js loaded" );
