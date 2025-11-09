import { NotImplementedError } from "../extensions/index.js";
import { Node } from '../extensions/list-tree.js';

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
export default class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (!this._root) {
      this._root = newNode;
      return;
    }
    
    let current = this._root;
    while (true) {
      if (data === current.data) return; // Дубликаты не добавляем
      
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this._root;
    
    while (current) {
      if (data === current.data) {
        return current;
      }
      
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    
    return null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // Найден узел для удаления
      
      // Случай 1: Узел без потомков или с одним потомком
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      
      // Случай 2: Узел с двумя потомками
      // Находим минимальный узел в правом поддереве
      let minNode = node.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      
      // Заменяем данные текущего узла на данные минимального узла
      node.data = minNode.data;
      
      // Удаляем минимальный узел из правого поддерева
      node.right = this._removeNode(node.right, minNode.data);
      
      return node;
    }
  }

  min() {
    if (!this._root) return null;
    
    let current = this._root;
    while (current.left) {
      current = current.left;
    }
    
    return current.data;
  }

  max() {
    if (!this._root) return null;
    
    let current = this._root;
    while (current.right) {
      current = current.right;
    }
    
    return current.data;
  }
}