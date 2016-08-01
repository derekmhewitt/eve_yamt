//constructor function

var eveItemsArray = [];

var EveItem = function(firstString, secondString) {
  this.idNum = firstString;
  this.itemName = secondString;
  eveItemsArray.push(this);
};
//pull in the data
var data = $.get('typeid.txt');

var processData = function(data) {
  //select 1 line of text at a time
  var dataArray = data.split(/\r\n|\r|\n/);
  console.log(dataArray);

};
//slice on the first space
//(\w+)\s+
//assign first word, which should be the id #s, to this.idNum
//assign the rest to this.itemName

//push the result into the firebase database as a json object
