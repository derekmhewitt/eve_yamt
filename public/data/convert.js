//this code was used to generate the data that now lives in the firebase realtime database
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

var processData = function(data, destination) {
  dataArray = data.split(/\r\n|\r|\n/);
  dataArray.forEach(function(current, index, array) {
    idNumbers.push(current.match(/\d+/)[0]);
    itemNamesArray.push(current.replace(/\d+\s+/, ''));
  });
  idNumbers.forEach(function(current, index, array) {
    console.log('made it this far', current);
    new EveItem(current, itemNamesArray[index], output_eight);
  });
};

var data;
// var data = $.get('tempSample.txt').done(processData);
// $.get('id_one.txt').done(processData);
// $.get('id_two.txt').done(processData);
// $.get('id_three.txt').done(processData);
// $.get('id_four.txt').done(processData);
// $.get('id_five.txt').done(processData);
// $.get('id_six.txt').done(processData);
// $.get('id_seven.txt').done(processData);
// $.get('id_eight.txt').done(processData);

//This code was used to generate the names array from output.json for the jqueryui autocomplete.

//import and parse output.json
var autocompleteResults = [];
var autocompleteRaw = $.getJSON('output.json', data, workMagic);
//for each it
//for each thing, push the itemName value into an array
var workMagic = function() {
  autocompleteRaw.forEach(function(current, index, array) {
    current.itemName.value.push(autocompleteResults);
  });
};
//copy that array into a new file
