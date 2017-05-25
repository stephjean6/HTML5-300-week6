var people =[];

  function makePeopleTableRow( person ) {
      var tr = $('<tr>');
      var td = $('<td>').text( person.name );
      tr.append( td );
      td = $('<td>').text( person.age );
      tr.append( td );
      td = $('<td>').text( person.color );
      tr.append( td );
      return tr;
  }

function populatingTbody ( ) {
  var tbody = $('#peopleData');
  tbody.empty();
  people.forEach( function( p ) {
      var tr = makePeopleTableRow( p );
      tbody.append( tr );
  } );
}

//calling the new item button by looking for elements with 'newPerson' ID
$('#newPerson').on('click', newPersonClicked);
//this function works with clicking the Add New Item button to show form and hide table
function newPersonClicked ( event ) {
  $('#tablePage').hide();
  $('#formPage').show();
}


$('#cancel').on('click', cancelForm);
function cancelForm ( event ) {
  $('#tablePage').show();
  $('#formPage').hide();
}

$('#submit').on('click', submitForm);
function submitForm ( event ) {
  $('#tablePage').show();
  $('#formPage').hide();
  var person = {};
  person.name = $('#name').val();
  person.age = $('#age').val();
  person.color = $('#color').val();
  people.push (person);
  populatingTbody ( );
}

//save to local storage

var SETTINGS_KEY = "LSS_Settings";

var settings = getSettings();

function getSettings() {
  var settingsString = localStorage[ "people" ];
  if (settingsString) {
    return JSON.parse (settingsString);
  }else {
    return{}
  }
}

function saveSettings(){
  localStorage[ "people" ] =JSON.stringify(settings);
}

/*localStorage.setItem("people", JSON.stringify(people));

//...
var storedNames = JSON.parse(localStorage.getItem("people"));*/