const findRemoveSync = require('find-remove')

setInterval(() => {
    var result = findRemoveSync('./files', { age: { seconds: 30 }, extensions: '.ts' });
    console.log(result);
}, 5000);