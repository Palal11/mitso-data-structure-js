import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

export default function removeKFromList(l, k) {
  // Если список пустой, возвращаем null
  if (!l) return null;

  // Удаляем все начальные узлы со значением k
  let current = l;
  while (current && current.value === k) {
    current = current.next;
  }

  // Если весь список состоял из k, возвращаем null
  if (!current) return null;

  // Теперь current указывает на первый узел со значением не равным k
  let head = current;
  let prev = current;
  current = current.next;

  // Проходим по оставшейся части списка
  while (current) {
    if (current.value === k) {
      // Пропускаем узел со значением k
      prev.next = current.next;
    } else {
      // Переходим к следующему узлу
      prev = current;
    }
    current = current.next;
  }

  return head;
}