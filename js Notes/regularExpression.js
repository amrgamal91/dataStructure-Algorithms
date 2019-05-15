// We can create a new regular expression using this
var re = /ar/;
var re = new RegExp("ar"); // This too works
// The above regular expression is an expression that matches with the given set of strings.Once a regex is defined,
//  we can try to fit and see the matching string. we can match strings using exec function.

re.exec("car"); // returns ["ar", index: 1, input: "car"]
re.exec("cab"); // returns null

// There are few special character classes which allow us to write complex regular expressions.
// There are many types of elements in RegEx. Some of them are:
//      Characters Ex: \w — Alphanumeric, \d — Decimal Any digit from 0 to 9., \D — Non decimal Matches non-digit characters. Everything except 0 to 9.
//      Character classes Ex: [x-y] in range x to y, [^x] not x
//      Quantifiers Ex: +, ?, * (greedy and lazy matchers)
//      Boundaries Ex: ^(beginning of input), $(end of input)
//      Using the above things, let us illustrate few examples.
// https://code.tutsplus.com/tutorials/a-simple-regex-cheat-sheet--cms-31278
//  \w — Matches all the words characters. Word characters are alphanumeric (a-z, A-Z characters, and underscore).
//  \W — Matches non-word characters. Everything except alphanumeric

/* Character class */
var re1 = /[AEIOU]/;
re1.exec("Oval"); // returns ["O", index: 0, input: "Oval"]
re1.exec("2456"); // null
var re2 = /[1-9]/;
re2.exec("mp4"); // returns ["4", index: 2, input: "mp4"]
/* Characters */
var re4 = /\d\D\w/;
re4.exec("1232W2sdf"); // returns ["2W2", index: 3, input: "1232W2sdf"]
re4.exec("W3q"); // returns null
/* Boundaries */
var re5 = /^\d\D\w/;
re5.exec("2W34"); // returns ["2W3", index: 0, input: "2W34"]
re5.exec("W34567"); // returns null
var re6 = /^[0-9]{5}-[0-9]{5}-[0-9]{5}$/;
re6.exec("23451-45242-99078"); // returns ["23451-45242-99078", index: 0, input: "23451-45242-99078"]
re6.exec("23451-abcd-efgh-ijkl"); // returns null
/* Quantifiers */
var re7 = /\d+\D+$/;
re7.exec("2abcd"); // returns ["2abcd", index: 0, input: "2abcd"]
re7.exec("23"); // returns null
re7.exec("2abcd3"); // returns null
var re8 = /<([\w]+).*>(.*?)<\/\1>/;
re8.exec("<p>Hello JS developer</p>"); //returns  ["<p>Hello JS developer</p>", "p", "Hello JS developer", index: 0, input: "<p>Hello JS developer</p>"]

// Along with exec, there are other functions namely match, search and, replace are available for finding a string in another using regular expressions.
//  But these functions should be used on the string itself.

"2345-678r9".match(/[a-z A-Z]/); // returns ["r", index: 8, input: "2345-678r9"]
"2345-678r9".replace(/[a-z A-Z]/, ""); // returns 2345-6789
