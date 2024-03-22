function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let rev = reverse(slow);
    while (rev) {
        if (head.val !== rev.val) {
            return false;
        }
        head = head.next;
        rev = rev.next;
    }
    return true;
};