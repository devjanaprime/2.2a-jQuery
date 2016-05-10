// mySite jQuery example
var currentUpdate;
var counter=0;

$(function ()
{
  // after the "#" is the id of the object on which we can click
  $('#clickMeForSomething').click(function(){
    // oncrement counter
    counter++;
    // calculate actual amt
    var amount =  $('#selectFill').val() * $('#selectCapacity').val();
    currentUpdate = $('#containerName').val() + "(id:" + counter + ") is " + $('#selectFill').val() + " full of it's " + $('#selectCapacity').val() + " capacity: " + amount;
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
