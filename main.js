//Project: Secret Message 

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); 

console.log(secretMessage); 

var length = secretMessage.length;

console.log(length); 

secretMessage.push('to', 'Program'); 

console.log(secretMessage); 

secretMessage.splice(7, 1, 'right'); 

console.log(secretMessage); 

secretMessage.shift(); 

secretMessage.unshift('Programming')

console.log(secretMessage); 

secretMessage.splice(6, 5, 'know'); 

console.log(secretMessage); 

console.log(secretMessage.join(' ')); 
