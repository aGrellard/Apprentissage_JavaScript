let notes = [16, 18, 19];
        
console.log(notes.reduce((acc, val, _, array)=> acc + val / array.length, 0))
console.log(Math.fround(notes.reduce((acc, val, _, array)=> acc = (acc+val))/notes.length).toFixed(2))
console.log(Math.floor(notes.reduce((acc, val, _, array)=> acc = (acc+val))/notes.length))
console.log(Math.round(notes.reduce((acc, val, _, array)=> acc = (acc+val))/notes.length))