// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(array){
    let found = array.find(element => element.result ==='W');
    
    if (found){
        found = found.year;
    }
    return found;
};
console.log(superbowlWin(record));
