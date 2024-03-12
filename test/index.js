//----------
// Includes
//----------
// const color = require('../code/color.js')
const g     = require('../code/index.js')

//--------------
// Instructions
//--------------


// //------------------
// // Graceful Exiting
// //------------------
// process.on('SIGINT', function() {
//     g.disconnect()
//     process.exit()
// })

//-----------
// Variables
//-----------
// const options = {
//     debug: false
// }

//---------
// Connect
//---------
const options = {
    autocenter: false,
    debug: false,
    range: 270
  }
  
  g.connect(options, function(err) {
    console.log('Ready')
  })

g.on('all',function(val) {
        val.timestamp = new Date().toISOString();
    console.debug(val);
})


// {
//     wheel: {
//       turn: 50.19,
//       shift_left: 0,
//       shift_right: 0,
//       dpad: 2,
//       button_x: 0,
//       button_square: 0,
//       button_triangle: 0,
//       button_circle: 0,
//       button_l2: 1,
//       button_r2: 0,
//       button_l3: 0,
//       button_r3: 0,
//       button_plus: 0,
//       button_minus: 0,
//       spinner: 0,
//       button_spinner: 0,
//       button_share: 0,
//       button_option: 0,
//       button_playstation: 0
//     },
//     shifter: { gear: 0 },
//     pedals: { gas: 0, brake: 0, clutch: 0 }
//   }
  