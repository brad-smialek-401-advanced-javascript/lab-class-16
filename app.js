'use strict';


// emit is what boroadcast in app or index

const fs = require('fs');
// const event = require('./event.js');
require('./logger.js');

// event.emit('readFile', file);
// event.emit('writeFile', file);

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();

//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { event.emit('err', "error detected"); }
      
//       console.log(`${file} saved`);
      
//     });
//   });
// };

// let file = process.argv.slice(2).shift();

// alterFile(file);



const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    console.log(data);

    if(err) { throw err; }
    let text = data.toString().toUpperCase();

    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

// gets argv slices first two elements and shift returns file out of array
let file = process.argv.slice(2).shift();


alterFile(file);
