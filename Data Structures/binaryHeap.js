/**
 * A binary heap is another type of tree data structure. Every node has at most two children.
 * Also, it is a complete tree. This means that all levels are completely filled until the last level
 * and the last level is filled from left to right.
 *
 * A binary heap can be either a min heap or a max heap:
 * In a max heap, the keys of parent nodes are always greater than or equal to those of the children.
 * In a min heap, the keys of parent nodes are less than or equal to those of the children.
 *
 * The order between levels is important but the order of nodes on the same level is not important
 *
    *   ╔═══════════╦══════════╦════════════╗
        ║ Algorithm ║ Average  ║ Worst Case ║
        ╠═══════════╬══════════╬════════════╣
        ║ Space     ║ O(n)     ║ O(n)       ║
        ║ Search    ║ O(n)     ║ O(n)       ║
        ║ Insert    ║ O(1)     ║ O(log n)   ║
        ║ Delete    ║ O(log n) ║ O(log n)   ║
        ║ Peek      ║ O(1)     ║ O(1)       ║
        ╚═══════════╩══════════╩════════════╝

        https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b
 */
/* Heaps */
// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

class MinHeap {
  constructor() {
    let heap = [null];
  }
  insert(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
  sort() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  }
}

class MaxHeap {
  constructor() {
    let heap = [null]; //array contains one element (null)
  }
  print = () => heap;
  insert(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}
