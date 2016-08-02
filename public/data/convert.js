//constructor function

var eveItemsArray = [];
var dataArray = [];

var idNumbers = [];
var itemNamesArray = [];

var output_one = [];
var output_two = [];
var output_three = [];
var output_four = [];
var output_five = [];
var output_six = [];
var output_seven = [];
var output_eight = [];

var EveItem = function(firstString, secondString, destination) {
  this.idNum = firstString;
  this.itemName = secondString;
  destination.push(this);
};

//pull in the data
var processData = function(data, destination) {
  // console.log(data);
  dataArray = data.split(/\r\n|\r|\n/);
  //select 1 line of text at a time
  dataArray.forEach(function(current, index, array) {
    idNumbers.push(current.match(/\d+/)[0]);
    //delete item # and leading white space
    itemNamesArray.push(current.replace(/\d+\s+/, ''));
  });
  idNumbers.forEach(function(current, index, array) {
    console.log('made it this far', current);
    new EveItem(current, itemNamesArray[index], output_eight);
  });
};

// var data = $.get('tempSample.txt').done(processData);
var data;

// $.get('id_one.txt').done(processData);
// $.get('id_two.txt').done(processData);
// $.get('id_three.txt').done(processData);
// $.get('id_four.txt').done(processData);
// $.get('id_five.txt').done(processData);
// $.get('id_six.txt').done(processData);
// $.get('id_seven.txt').done(processData);
$.get('id_eight.txt').done(processData);

//next we push the result into the firebase database as a json object
// $('convertButton').on(firebase.database().setValue(eveItemsArray));

// function setDataInDatabase() {
//   firebase.database('eve-yamt').setValue(eveItemsArray);
// };
// setDataInDatabase();

// var post = function(filename) {
//   $.ajax({
//     type: 'POST',
//     url: '' + filename + '',
//     data: eveItemsArray,
//   });
// };
