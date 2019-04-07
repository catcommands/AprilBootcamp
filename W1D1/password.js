/*
Question:
Write a program named password.js that takes a single string as a command line argument. 
Within your program, write a function definition for a function named obfuscate
that takes a string as an argument and obfuscates it by applying the following rules.

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
Are these obfuscated passwords any good?
Not really. To truly minimize the risk of our accounts being hacked, 
you should use long passwords and use unique ones for every account. 
Password management software such as 1Password, Lastpass or KeePass can be a big help!

The program should log to the console the final 
obfuscated password returned by your obfuscate function. 
As examples, consider the following few runs of the program and their results.

Result should look like this:

node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y

*/

// From here now, I commented every step how I solved this question. By JaffarShah.
// To solve this question, I used for-loop and if-statement:
//


var args = process.argv;
function obfuscatePassword(args) {
    var password = args [2];
    var result = "";

    for (var i = 0; i < password.length; i++) {
        var aleph = password[i];
        if (aleph == 'a') {
            result += '4';
        } else if (aleph == 'e') {
            result += '3';
          } else if (aleph == 'o') {
            result += '0';
          } else if (aleph == 'l') {
            result += '1';
          } else {
            result += aleph;
          }
        }
    return result;
    }
console.log(obfuscatePassword(args));



// if-statement:

/*
fucntion max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
*/
