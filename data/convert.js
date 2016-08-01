//constructor function

var eveItemsArray = [];
var dataArray = [];

var idNumbers = [];
var itemNamesArray = [];

var EveItem = function(firstString, secondString) {
  this.idNum = firstString;
  this.itemName = secondString;
  eveItemsArray.push(this);
};

//pull in the data
var processData = function(data) {
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
    new EveItem(current, itemNamesArray[index]);
  });
};

var data = $.get('id_one.txt').done(processData);
var data = $.get('id_two.txt').done(processData);
var data = $.get('id_three.txt').done(processData);
var data = $.get('id_four.txt').done(processData);
var data = $.get('id_five.txt').done(processData);
var data = $.get('id_six.txt').done(processData);
var data = $.get('id_seven.txt').done(processData);
var data = $.get('id_eight.txt').done(processData);

//next we push the result into the firebase database as a json object
