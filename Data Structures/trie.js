/**
 * The trie (pronounced ‘try’), or prefix tree, is a kind of search tree.
 * A trie stores data in steps where each step is a node in the trie.
 * Tries are often used to store words for quick lookup, such as a word auto-complete feature.
 *
 * Each node in a language trie contains one letter of a word. You follow the branches of a trie to spell a word,
 *  one letter at a time. The steps begin to branch off when the order of the letters diverge from the other words in the trie,
 * or when a word ends. Each node contains a letter (data) and a boolean that indicates whether the node is the last node in a word.
   
 */

/* Trie Data Structure */
class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  }
  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   *
   * @param {data to be inserted in node} input
   * @param {node to insert on it} node
   * 1- if input len is 0 then set end and return
   * 2- if head node has no keys like the input one then  add key , call add for the second cahr
   * 3- else there is a key with this char then call add for the second cahr
   */
  add(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  /**
   *
   * @param {set of chars to check if it is a word} word
   * - loop on chars , first check if node has key of this char
   * - after the end of loop , word contain last char
   * - check if this last char exist & is end char if so then it is word else it is not
   */
  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  }

  /**
   *
   */
  printWords() {
    let words = new Array();
    this.searchForWord(this.root, new String());
    return words.length > 0 ? words : mo;
  }

  /**
   *
   * @param {node from which start searching} node
   * @param {string to check if it a word } str
   * if the node has keys then loop on all keys
   * for each key get its node , and check if value of this node + value of one of its keys collect a word or not
   * here the recursive stopping condition is that when node is end node
   * if end node then push this string as a word in array of words
   */
  searchForWord(node, str) {
    if (node.keys.size != 0) {
      for (let letter of node.keys.keys()) {
        searchForWord(node.keys.get(letter), str.concat(letter));
      }
      if (node.isEnd()) {
        words.push(str);
      }
    } else {
      //??
      str.length > 0 ? words.push(str) : undefined;
      return;
    }
  }
}

myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("dorf"));
console.log(myTrie.printWords());
