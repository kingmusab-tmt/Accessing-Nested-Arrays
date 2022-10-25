// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
console.log(recordCollection[5439].hasOwnProperty("albumTitle"))
// Only change code below this line
function updateRecords(records, id, prop, value) {
  console.log(records);
  for(let key in records){
    if(prop !=="tracks" && value !== ""){
    records[key][prop] = value;
    } else if (prop == "tracks" && records[key].hasOwnProperty("tracks")== false){
    records[key][prop] = [];
    records[key][prop].push(value);
    } else if (prop == "tracks" && value !== ""){
    records[key][prop].push(value);
    } else if (value == ""){
    delete records[key][prop]
    }
    // console.log(key)
  }
  console.log(records);
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');