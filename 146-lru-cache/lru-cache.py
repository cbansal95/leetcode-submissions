


class ListNode:
    def __init__(self, key, val, next=None,prev=None):
        self.key = key
        self.val = val
        self.next = next
        self.prev = prev

class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.left = ListNode(0,0)
        self.right = ListNode(0,0)

        self.left.next = self.right
        self.right.prev = self.left
    
    def add(self, node: ListNode):
        nextNode = self.left.next

        self.left.next = node
        node.prev = self.left

        node.next = nextNode
        nextNode.prev = node
    
    def remove(self, node: ListNode):
        nextNode = node.next
        prevNode = node.prev

        prevNode.next = nextNode
        nextNode.prev = prevNode

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.add(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])

        self.cache[key] = ListNode(key, value)
        self.add(self.cache[key])

        if len(self.cache) > self.cap:
            lru = self.right.prev
            self.remove(lru)
            del self.cache[lru.key]
        
        
