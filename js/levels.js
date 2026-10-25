/**
 * 30 LEVELS OF "LOGIC HUNT WITH KAPIL"
 * One Level Per Day • Pure Gaming First • Hidden DSA Concept Revealed On Victory!
 */

window.GAME_LEVELS = [
  {
    id: 1,
    day: 1,
    icon: '📦',
    title: 'The Express Conveyor',
    badgeTitle: 'Queue Pioneer',
    dsaConcept: 'Queue (FIFO - First In, First Out)',
    gameType: 'queue_conveyor',
    prompt: 'Customers are waiting! Dispatch packages strictly in the order they arrived on the belt.',
    kapilTip: "Hey coder! Whoever got in line first gets served first! Don't jump the line!",
    gameData: {
      items: [
        { id: 'p1', label: 'Laptop', color: '#00f2fe' },
        { id: 'p2', label: 'Sneakers', color: '#ff007f' },
        { id: 'p3', label: 'Headphones', color: '#ffd700' },
        { id: 'p4', label: 'Smartwatch', color: '#10b981' }
      ]
    },
    lessonReveal: {
      conceptName: 'Queue (First-In, First-Out: FIFO)',
      ahaMoment: 'You just operated a QUEUE! Just like a movie ticket line or printer spooler, the FIRST item pushed into the queue is the FIRST one popped out (`enqueue` & `dequeue`).',
      codeSnippet: `# Python Queue Implementation
from collections import deque
queue = deque(["Laptop", "Sneakers", "Headphones"])
queue.append("Smartwatch") # Enqueue
first_item = queue.popleft() # Dequeue -> 'Laptop'`,
      techUsage: 'Used in printer job buffers, streaming buffers (YouTube/Netflix), web server request handling, and Breadth-First Search (BFS).'
    }
  },
  {
    id: 2,
    day: 2,
    icon: '🚀',
    title: 'Cargo Rocket Stacker',
    badgeTitle: 'Stack Vanguard',
    dsaConcept: 'Stack (LIFO - Last In, First Out)',
    gameType: 'stack_loader',
    prompt: 'Load the rocket silo with power fuel cells, then retrieve them in the correct unload sequence!',
    kapilTip: "The silo only has ONE top opening! You cannot grab the bottom cell without removing the top one first!",
    gameData: {
      cells: [
        { id: 'c1', label: 'Ruby Core', color: '#ef4444' },
        { id: 'c2', label: 'Sapphire Core', color: '#3b82f6' },
        { id: 'c3', label: 'Emerald Core', color: '#10b981' }
      ],
      targetSequence: ['Emerald Core', 'Sapphire Core', 'Ruby Core']
    },
    lessonReveal: {
      conceptName: 'Stack (Last-In, First-Out: LIFO)',
      ahaMoment: 'That silo was a STACK! The LAST element you put on top (`push`) is the FIRST element that comes off (`pop`).',
      codeSnippet: `// JavaScript Stack
const stack = [];
stack.push("Ruby Core");
stack.push("Sapphire Core");
stack.push("Emerald Core");
const topItem = stack.pop(); // Returns "Emerald Core"`,
      techUsage: 'Used in your browser\'s Back Button, Ctrl+Z Undo actions, and function call execution stacks in compilers.'
    }
  },
  {
    id: 3,
    day: 3,
    icon: '🔐',
    title: 'The Vault Number Safe',
    badgeTitle: 'Binary Search Ace',
    dsaConcept: 'Binary Search (O(log N))',
    gameType: 'binary_search_safe',
    prompt: 'The safe passcode is between 1 and 100. Crack it in 7 tries or less using High/Low feedback!',
    kapilTip: "Never guess randomly! If you pick the exact MIDDLE number every time, you eliminate HALF the entire search field in one move!",
    gameData: {
      min: 1,
      max: 100,
      maxTries: 7
    },
    lessonReveal: {
      conceptName: 'Binary Search (Logarithmic Time O(log N))',
      ahaMoment: 'Cutting the search space in half each time allowed you to find the secret in just 7 tries out of 100 numbers (because 2^7 = 128 > 100)!',
      codeSnippet: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1`,
      techUsage: 'Powers Git bisect (finding bug-introducing commits), database B-Tree index lookups, and dictionary word searches.'
    }
  },
  {
    id: 4,
    day: 4,
    icon: '🗝️',
    title: 'Neon Cyber Lockers',
    badgeTitle: 'Hash Map Master',
    dsaConcept: 'Hash Table / Direct Addressing (O(1) Time)',
    gameType: 'hash_map_locker',
    prompt: 'Match employee ID tokens instantly to their assigned locker slots without checking each door one-by-one!',
    kapilTip: "Look at the ID formula! ID % 5 gives the exact door index immediately. That is zero search time!",
    gameData: {
      lockers: [0, 1, 2, 3, 4],
      tokens: [
        { id: 105, name: 'Alice', slot: 0 },
        { id: 211, name: 'Bob', slot: 1 },
        { id: 317, name: 'Charlie', slot: 2 },
        { id: 403, name: 'Diana', slot: 3 },
        { id: 509, name: 'Evan', slot: 4 }
      ]
    },
    lessonReveal: {
      conceptName: 'Hash Table / Map (O(1) Constant Time Lookup)',
      ahaMoment: 'Instead of searching through a list from start to finish, a Hash function computes the exact memory address directly from the key!',
      codeSnippet: `// Hash Map in JavaScript
const userMap = new Map();
userMap.set("user_105", { name: "Alice", locker: 0 });
// Instant O(1) retrieval:
const alice = userMap.get("user_105");`,
      techUsage: 'Powers Python dicts, JavaScript Objects/Maps, Redis in-memory caches, and database indexing.'
    }
  },
  {
    id: 5,
    day: 5,
    icon: '⛸️',
    title: 'Twin Skater Rendezvous',
    badgeTitle: 'Two Pointer Virtuoso',
    dsaConcept: 'Two Pointers Technique',
    gameType: 'two_pointers',
    prompt: 'Slide two skaters from opposite ends of a sorted track so their combined power equals the target gate: 14!',
    kapilTip: "If their current sum is too small, nudge the left skater forward! If too big, move the right skater inward!",
    gameData: {
      track: [2, 3, 5, 7, 9, 11, 14],
      targetSum: 14 // 5 + 9
    },
    lessonReveal: {
      conceptName: 'Two Pointers Technique',
      ahaMoment: 'Instead of nested loops comparing every pair (which takes O(N^2) time), converging pointers on a sorted list solve it in a blazing single pass (O(N))!',
      codeSnippet: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target: return (left, right)
        elif curr_sum < target: left += 1
        else: right -= 1`,
      techUsage: 'Essential for string reversal, container with most water problems, removing duplicates in-place, and 3-Sum algorithms.'
    }
  },
  {
    id: 6,
    day: 6,
    icon: '🚃',
    title: 'The Train Depot Shunter',
    badgeTitle: 'Linked List Conductor',
    dsaConcept: 'Singly Linked List & Pointer Manipulation',
    gameType: 'linked_list_shunter',
    prompt: 'Couple the scattered railcars by setting each car’s NEXT pointer to form an unbroken express train!',
    kapilTip: "Each car only knows who comes AFTER it. Re-link the arrows so Engine connects to Car A -> Car B -> Caboose!",
    gameData: {
      nodes: [
        { id: 'ENG', label: 'Engine', next: null },
        { id: 'CAR_A', label: 'Passenger Car', next: null },
        { id: 'CAR_B', label: 'Dining Car', next: null },
        { id: 'CAB', label: 'Caboose', next: null }
      ],
      correctOrder: ['ENG', 'CAR_A', 'CAR_B', 'CAB']
    },
    lessonReveal: {
      conceptName: 'Singly Linked List',
      ahaMoment: 'You manipulated pointer references! Unlike arrays where elements sit in adjacent memory, linked list nodes can float anywhere in RAM, chained together by "next" pointers.',
      codeSnippet: `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

head = Node("Engine")
head.next = Node("Passenger Car")
head.next.next = Node("Dining Car")`,
      techUsage: 'Used in dynamic memory allocation, music player next/prev playlists, and blockchain transaction chains.'
    }
  },
  {
    id: 7,
    day: 7,
    icon: '🪟',
    title: 'Energy Grid Scanner',
    badgeTitle: 'Sliding Window Scout',
    dsaConcept: 'Sliding Window Algorithm',
    gameType: 'sliding_window',
    prompt: 'Slide a 3-cell sensor frame across the energy grid to capture the maximum power burst!',
    kapilTip: "When you slide the window one step right, don't re-calculate from scratch! Just subtract the element that leaves and add the new one!",
    gameData: {
      cells: [2, 1, 5, 8, 3, 9, 2],
      windowSize: 3
    },
    lessonReveal: {
      conceptName: 'Sliding Window Technique',
      ahaMoment: 'Instead of recalculating the window sum every step, dropping the old element and adding the new element turns an O(N*K) problem into an ultra-fast O(N) linear scan!',
      codeSnippet: `def max_sub_array_sum(arr, k):
    max_sum = curr_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, curr_sum)
    return max_sum`,
      techUsage: 'Used in TCP network packet throttling, audio signal windowing, and continuous stock market price analytics.'
    }
  },
  {
    id: 8,
    day: 8,
    icon: '🔄',
    title: 'Loop in the Circuit',
    badgeTitle: 'Cycle Sleuth',
    dsaConcept: 'Floyd\'s Cycle Detection (Tortoise & Hare)',
    gameType: 'floyd_cycle',
    prompt: 'One runner moves 1 step per beat, the other moves 2 steps. Find the node where they collide to locate the infinite loop!',
    kapilTip: "If a track has a loop, the faster runner will eventually lap and bump into the slower runner!",
    gameData: {
      nodes: [0, 1, 2, 3, 4, 5],
      loopBack: 2
    },
    lessonReveal: {
      conceptName: 'Floyd’s Tortoise and Hare Cycle Finding',
      ahaMoment: 'Using two pointers moving at different speeds (1x and 2x) detects circular loops in memory with zero extra memory overhead (O(1) Space)!',
      codeSnippet: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True # Loop Detected!
    return False`,
      techUsage: 'Used in detecting infinite loops in distributed microservices, memory graph garbage collection, and cryptographic factorization.'
    }
  },
  {
    id: 9,
    day: 9,
    icon: '⚖️',
    title: 'Counterfeit Gem Scale',
    badgeTitle: 'Divide & Conquer Strategist',
    dsaConcept: 'Divide and Conquer Algorithm',
    gameType: 'balance_scale',
    prompt: 'One of the 9 gems is heavier than the rest. Find the fake gem using the balance scale in at most 2 weighings!',
    kapilTip: "Divide the 9 gems into three equal piles of 3! Weigh two piles against each other to instantly know which pile has the fake!",
    gameData: {
      gemCount: 9,
      heavyIndex: 6,
      maxWeighs: 2
    },
    lessonReveal: {
      conceptName: 'Divide and Conquer',
      ahaMoment: 'By breaking the problem into three equal subproblems, you eliminated 2/3 of the possibilities with a single measurement!',
      codeSnippet: `# Divide and conquer breaks problem into smaller subproblems:
# 1. Divide: Split data into chunks
# 2. Conquer: Recursively solve subproblems
# 3. Combine: Merge results`,
      techUsage: 'Foundational principle behind MergeSort, Fast Fourier Transform (FFT), and MapReduce big-data distributed processing.'
    }
  },
  {
    id: 10,
    day: 10,
    icon: '🌳',
    title: 'Crystal Root Path',
    badgeTitle: 'BST Navigator',
    dsaConcept: 'Binary Search Tree (BST) Traversal',
    gameType: 'bst_traversal',
    prompt: 'Navigate from root to the target crystal "68": go LEFT if target is smaller, go RIGHT if target is greater!',
    kapilTip: "Binary Search Tree golden rule: All values to the left are smaller, all values to the right are greater!",
    gameData: {
      tree: {
        val: 50,
        left: { val: 25, left: { val: 10 }, right: { val: 35 } },
        right: { val: 75, left: { val: 68 }, right: { val: 90 } }
      },
      target: 68
    },
    lessonReveal: {
      conceptName: 'Binary Search Tree (BST)',
      ahaMoment: 'At each node, comparing your target to the current value lets you discard half the remaining branches, giving O(log N) search speed!',
      codeSnippet: `def search_bst(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return search_bst(root.left, val)
    return search_bst(root.right, val)`,
      techUsage: 'Used in file system hierarchical indexing, auto-sorting database indexes, and 3D computer graphics spatial partitioning.'
    }
  },
  {
    id: 11,
    day: 11,
    icon: '🏥',
    title: 'Spaceport ER Triage',
    badgeTitle: 'Priority Queue Commander',
    dsaConcept: 'Priority Queue & Binary Heap',
    gameType: 'priority_queue',
    prompt: 'Patients arrived with different urgency ranks (1 = Emergency, 5 = Routine). Treat them in priority order regardless of arrival time!',
    kapilTip: "In emergency triage, arrival time doesn't matter — highest urgency gets pushed straight to the front of the heap!",
    gameData: {
      patients: [
        { name: 'Patient Z', urgency: 3, label: 'Sprained Wrist' },
        { name: 'Patient X', urgency: 1, label: 'Oxygen Failure' },
        { name: 'Patient W', urgency: 5, label: 'Mild Headache' },
        { name: 'Patient Y', urgency: 2, label: 'Laser Burn' }
      ]
    },
    lessonReveal: {
      conceptName: 'Priority Queue / Min-Heap',
      ahaMoment: 'A standard queue serves first-come-first-served, but a Priority Queue dynamically bubbles the highest priority item to the top in O(log N) time!',
      codeSnippet: `import heapq
# Min-heap in Python
pq = []
heapq.heappush(pq, (1, "Oxygen Failure"))
heapq.heappush(pq, (3, "Sprained Wrist"))
next_patient = heapq.heappop(pq) # Yields (1, 'Oxygen Failure')`,
      techUsage: 'Used in Dijkstra\'s shortest path algorithm, OS process task schedulers, and network router bandwidth packet shaping.'
    }
  },
  {
    id: 12,
    day: 12,
    icon: '🌊',
    title: 'Flood Wave Island Rescue',
    badgeTitle: 'BFS Pathfinder',
    dsaConcept: 'Breadth-First Search (BFS) / Shortest Path',
    gameType: 'bfs_grid',
    prompt: 'Guide the rescue drone to the survivor on the grid. Expand your radar ring by ring to guarantee the shortest path!',
    kapilTip: "Expand outwards like ripples on water! Exploring all 1-step neighbors before 2-step neighbors guarantees the fastest route!",
    gameData: {
      gridSize: 5,
      start: [0, 0],
      goal: [4, 4],
      walls: [[1, 2], [2, 2], [3, 2], [2, 3]]
    },
    lessonReveal: {
      conceptName: 'Breadth-First Search (BFS)',
      ahaMoment: 'By visiting all nodes at distance 1, then distance 2, and so on using a Queue, BFS is guaranteed to discover the shortest path in unweighted graphs!',
      codeSnippet: `def bfs_shortest_path(graph, start, goal):
    queue = deque([[start]])
    visited = {start}
    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == goal: return path
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])`,
      techUsage: 'Used by GPS navigation systems, social network degree of separation calculators (LinkedIn 1st/2nd/3rd connections), and web crawlers.'
    }
  },
  {
    id: 13,
    day: 13,
    icon: '🔦',
    title: 'Neon Cavern Explorer',
    badgeTitle: 'DFS Wayfarer',
    dsaConcept: 'Depth-First Search (DFS) & Backtracking',
    gameType: 'dfs_maze',
    prompt: 'Explore the neon labyrinth! Dive as deep as possible into each tunnel, and backtrack when you hit a dead end.',
    kapilTip: "Keep walking forward along one corridor until you can't. When blocked, step back to the last fork and try the next branch!",
    gameData: {
      branches: [
        { path: 'Left -> Left', deadEnd: true },
        { path: 'Left -> Right', deadEnd: true },
        { path: 'Right -> Left -> Crystal', deadEnd: false },
        { path: 'Right -> Right', deadEnd: true }
      ]
    },
    lessonReveal: {
      conceptName: 'Depth-First Search (DFS) & Backtracking',
      ahaMoment: 'DFS goes deep down one single path until it hits a dead end, then backtracks up the recursion stack to explore untried alternatives!',
      codeSnippet: `def dfs(node, visited=set()):
    if node in visited: return
    visited.add(node)
    for neighbor in node.neighbors:
        dfs(neighbor, visited)`,
      techUsage: 'Powers Sudoku solvers, chess AI move evaluation trees, maze generation, and topological dependency analyzers.'
    }
  },
  {
    id: 14,
    day: 14,
    icon: '🃏',
    title: 'Card Shelf Organizer',
    badgeTitle: 'Sorting Tactician',
    dsaConcept: 'Bubble / Insertion Sort',
    gameType: 'bubble_sort',
    prompt: 'Sort the scrambled numbered cards into ascending order by swapping only adjacent neighboring cards!',
    kapilTip: "Compare neighbors! If the left card is bigger than the right card, swap them. Big values naturally bubble to the right!",
    gameData: {
      initialCards: [8, 3, 5, 1]
    },
    lessonReveal: {
      conceptName: 'Adjacent Comparison Sorting (Bubble / Insertion)',
      ahaMoment: 'By repeatedly swapping adjacent out-of-order elements, each complete pass guarantees the largest unsorted element settles into its final home.',
      codeSnippet: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
      techUsage: 'Great for nearly-sorted data streams, embedded hardware with low memory, and teaching the fundamentals of algorithmic order.'
    }
  },
  {
    id: 15,
    day: 15,
    icon: '⚡',
    title: 'Pivot Laser Splitter',
    badgeTitle: 'QuickSort Specialist',
    dsaConcept: 'QuickSort (Lomuto Partitioning)',
    gameType: 'quicksort_pivot',
    prompt: 'Choose the Pivot card (5) and partition the remaining cards: all smaller cards to the left, larger cards to the right!',
    kapilTip: "Everything strictly less than 5 belongs in the left bin; everything greater belongs in the right bin!",
    gameData: {
      pivot: 5,
      numbers: [2, 9, 1, 7, 4, 8, 3]
    },
    lessonReveal: {
      conceptName: 'QuickSort Partitioning (O(N log N))',
      ahaMoment: 'Once the pivot is placed with all smaller numbers on its left and larger on its right, that pivot NEVER has to move again! Repeat recursively on both halves!',
      codeSnippet: `def quicksort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`,
      techUsage: 'The standard sorting engine inside C++ `std::sort`, Java Dual-Pivot Quicksort, and V8 JavaScript engine.'
    }
  },
  {
    id: 16,
    day: 16,
    icon: '🌊',
    title: 'Dual River Confluence',
    badgeTitle: 'Merge Sort Maestro',
    dsaConcept: 'Merge Sort (Two-Way Merge)',
    gameType: 'merge_sort',
    prompt: 'Two conveyor belts are already sorted. Merge their items into a single final master belt in perfect ascending order!',
    kapilTip: "Look at the front item of BOTH conveyors. Pick the smaller one, send it through, and repeat!",
    gameData: {
      streamA: [2, 5, 9],
      streamB: [3, 6, 8]
    },
    lessonReveal: {
      conceptName: 'Merge Sort (Two-Way Merge)',
      ahaMoment: 'Merging two lists that are ALREADY sorted requires just a single pointer comparison at the front of each list, running in guaranteed O(N log N) time in all cases!',
      codeSnippet: `def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]`,
      techUsage: 'Used in external sorting when dataset exceeds RAM (tape/disk drives), Python\'s Timsort (`list.sort`), and Git branch merges.'
    }
  },
  {
    id: 17,
    day: 17,
    icon: '🪜',
    title: 'Stairway Energy Leap',
    badgeTitle: 'DP Architect',
    dsaConcept: 'Dynamic Programming (Memoization)',
    gameType: 'dp_stairs',
    prompt: 'You can leap 1 or 2 stairs at a time. Calculate the total unique ways to reach Step 5 without re-calculating previous steps!',
    kapilTip: "Ways to reach Step 5 = (Ways to reach Step 4) + (Ways to reach Step 3)! Write down past answers so you never solve the same step twice!",
    gameData: {
      targetStep: 5
    },
    lessonReveal: {
      conceptName: 'Dynamic Programming (Memoization & Overlapping Subproblems)',
      ahaMoment: 'Instead of re-computing the same sub-problems millions of times (exponential time), storing previous results in a memo table solves it in linear O(N) time!',
      codeSnippet: `# Memoized Fibonacci / Stair Climbing
memo = {}
def climb_stairs(n):
    if n <= 2: return n
    if n not in memo:
        memo[n] = climb_stairs(n - 1) + climb_stairs(n - 2)
    return memo[n]`,
      techUsage: 'Powers genomic sequence alignment (BLAST / Needleman-Wunsch), spellcheck suggestion distance, and Google Maps routing.'
    }
  },
  {
    id: 18,
    day: 18,
    icon: '🎒',
    title: 'Cyber Vault Knapsack',
    badgeTitle: 'Knapsack Optimizer',
    dsaConcept: '0/1 Knapsack Problem',
    gameType: 'knapsack',
    prompt: 'Your backpack capacity is strictly 7 kg. Choose the combination of tech artifacts that yields the MAXIMUM total value!',
    kapilTip: "Don't just pick the heaviest or the most expensive item! Optimize the value-to-weight ratio to maximize total gain!",
    gameData: {
      capacity: 7,
      items: [
        { id: 1, name: 'Microchip', weight: 2, value: 40 },
        { id: 2, name: 'Laser Core', weight: 3, value: 50 },
        { id: 3, name: 'Quantum Key', weight: 4, value: 70 },
        { id: 4, name: 'Battery', weight: 5, value: 80 }
      ]
    },
    lessonReveal: {
      conceptName: '0/1 Knapsack Optimization',
      ahaMoment: 'A greedy choice doesn\'t always give the global optimum! Dynamic Programming explores the decision matrix (take or skip) to guarantee the highest value within capacity.',
      codeSnippet: `def knapsack(W, weights, values, n):
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(W + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]`,
      techUsage: 'Used in cargo flight payload optimization, cloud compute resource scheduling, and financial portfolio asset allocation.'
    }
  },
  {
    id: 19,
    day: 19,
    icon: '🪞',
    title: 'Mirror Rune Symmetry',
    badgeTitle: 'Symmetry Sentinel',
    dsaConcept: 'Palindrome Validation & Invariance',
    gameType: 'palindrome',
    prompt: 'Check if the rune phrase reads identically backwards and forwards by validating outer pairs inwards!',
    kapilTip: "Compare first letter with last letter! If they match, step inwards. If they ever mismatch, the symmetry is broken!",
    gameData: {
      runes: ['R', 'A', 'D', 'A', 'R']
    },
    lessonReveal: {
      conceptName: 'Palindrome & Symmetric Invariant',
      ahaMoment: 'Checking mirrored pointers converging towards the center achieves O(N) verification in O(1) space with early-exit efficiency!',
      codeSnippet: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]: return False
        left += 1; right -= 1
    return True`,
      techUsage: 'Used in bioinformatics to detect DNA restriction enzyme cleavage sites, compiler string optimization, and data transmission parity checks.'
    }
  },
  {
    id: 20,
    day: 20,
    icon: '⚡',
    title: 'Power Grid Connect',
    badgeTitle: 'Spanning Tree Weaver',
    dsaConcept: 'Minimum Spanning Tree (Kruskal\'s Algorithm)',
    gameType: 'mst_connect',
    prompt: 'Connect all 4 power stations using the cheapest transmission cables without creating any redundant closed loops!',
    kapilTip: "Pick the lowest-cost cable available. If it connects two stations that aren't already connected, keep it!",
    gameData: {
      nodes: ['A', 'B', 'C', 'D'],
      edges: [
        { u: 'A', v: 'B', cost: 1 },
        { u: 'B', v: 'C', cost: 2 },
        { u: 'C', v: 'D', cost: 3 },
        { u: 'A', v: 'D', cost: 8 },
        { u: 'B', v: 'D', cost: 5 }
      ]
    },
    lessonReveal: {
      conceptName: 'Minimum Spanning Tree (Kruskal / Prim)',
      ahaMoment: 'By sorting cables by cost and using Disjoint-Set (Union-Find) to reject cycle-causing edges, you connected all nodes with the minimum possible total wire length!',
      codeSnippet: `# Kruskal's MST algorithm:
# 1. Sort all edges in non-decreasing order of weight
# 2. Pick the smallest edge. If it forms a cycle, discard it.
# 3. Repeat until there are (V - 1) edges in the spanning tree.`,
      techUsage: 'Used in optical fiber telecommunications layout, civil water piping design, and circuit board copper trace routing.'
    }
  },
  {
    id: 21,
    day: 21,
    icon: '🚁',
    title: 'Hyperlane Delivery Drone',
    badgeTitle: 'Dijkstra Navigator',
    dsaConcept: 'Dijkstra\'s Shortest Path Algorithm',
    gameType: 'dijkstra_path',
    prompt: 'Route the package drone through weighted aerial sectors to reach Sector D with the lowest total battery burn!',
    kapilTip: "Greedily visit the unvisited sector with the smallest known battery cost, then update its neighbors' distances!",
    gameData: {
      start: 'A',
      end: 'D',
      routes: [
        { path: 'A -> B -> D', cost: 2 + 5 },
        { path: 'A -> C -> D', cost: 4 + 1 }, // Best: 5!
        { path: 'A -> D direct', cost: 9 }
      ]
    },
    lessonReveal: {
      conceptName: 'Dijkstra\'s Shortest Path Algorithm',
      ahaMoment: 'Dijkstra maintains a priority queue of tentative distances, guaranteeing the lowest-cost path is locked in order for non-negative weighted graphs!',
      codeSnippet: `import heapq
def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]: continue
        for v, weight in graph[u].items():
            if curr_dist + weight < distances[v]:
                distances[v] = curr_dist + weight
                heapq.heappush(pq, (distances[v], v))
    return distances`,
      techUsage: 'The backbone of Google Maps / Apple Maps turn-by-turn navigation, airline flight connection routing, and OSPF internet routers.'
    }
  },
  {
    id: 22,
    day: 22,
    icon: '🏝️',
    title: 'Alien Island Census',
    badgeTitle: 'Matrix Explorer',
    dsaConcept: 'Connected Components & Matrix Traversal',
    gameType: 'matrix_islands',
    prompt: 'How many distinct isolated land masses exist in this ocean matrix? Count by sinking each island as you survey it!',
    kapilTip: "When you touch land (1), sink it and all connected neighbors to water (0) using Flood Fill, then increment your island count!",
    gameData: {
      matrix: [
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 0, 0, 0]
      ],
      correctCount: 2
    },
    lessonReveal: {
      conceptName: 'Connected Components (Number of Islands)',
      ahaMoment: 'Whenever you find an unvisited land cell, triggering a BFS/DFS flood-fill visits and marks all connected cells, grouping them into a single connected component.',
      codeSnippet: `def num_islands(grid):
    if not grid: return 0
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 1:
                dfs_sink(grid, r, c)
                count += 1
    return count`,
      techUsage: 'Used in medical imaging tumor boundary detection, image segmentation in computer vision, and social network friend cluster discovery.'
    }
  },
  {
    id: 23,
    day: 23,
    icon: '⚛️',
    title: 'Quantum Reactor Assembly',
    badgeTitle: 'Topology Craftsman',
    dsaConcept: 'Topological Sort & DAG Dependency Resolution',
    gameType: 'topological_sort',
    prompt: 'Arrange the assembly tasks in an order where every prerequisite component is installed BEFORE the components that depend on it!',
    kapilTip: "Find the task that has ZERO incoming requirements and install it first, then unlock tasks that depended on it!",
    gameData: {
      tasks: [
        { id: 'CORE', label: '1. Build Core', req: [] },
        { id: 'COOLING', label: '2. Attach Cooling', req: ['CORE'] },
        { id: 'SHIELD', label: '3. Mount Shield', req: ['COOLING'] },
        { id: 'IGNITION', label: '4. Prime Ignition', req: ['SHIELD'] }
      ]
    },
    lessonReveal: {
      conceptName: 'Topological Sort (Directed Acyclic Graph)',
      ahaMoment: 'Topological sorting linearizes dependencies so that for every directed edge U -> V, vertex U always appears before V in the execution order.',
      codeSnippet: `# Kahn's Algorithm (In-degree based)
# 1. Compute in-degree for every vertex
# 2. Add all vertices with in-degree 0 to queue
# 3. Process node, reduce neighbors' in-degree by 1
# 4. If neighbor in-degree reaches 0, add to queue`,
      techUsage: 'Used in `npm install` and `pip` package dependency resolvers, Makefile compilation order, and CI/CD pipeline task staging.'
    }
  },
  {
    id: 24,
    day: 24,
    icon: '💾',
    title: 'Memory Eviction Vault',
    badgeTitle: 'Cache Guardian',
    dsaConcept: 'LRU Cache (Least Recently Used)',
    gameType: 'lru_cache',
    prompt: 'RAM only holds 3 items! When new data arrives, evict the LEAST RECENTLY ACCESSED item to make room!',
    kapilTip: "Whenever an item is read or written, move it to the very front (Most Recent). The one left at the very back gets kicked out!",
    gameData: {
      capacity: 3,
      stream: ['A', 'B', 'C', 'A', 'D']
    },
    lessonReveal: {
      conceptName: 'LRU Cache (Least Recently Used)',
      ahaMoment: 'Combining a Hash Map (for O(1) key lookups) with a Doubly Linked List (for O(1) node repositioning) creates the legendary LRU Cache!',
      codeSnippet: `from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()
    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]`,
      techUsage: 'Powers CPU L1/L2 caches, Redis cache eviction policies, web browser image caching, and OS virtual memory paging.'
    }
  },
  {
    id: 25,
    day: 25,
    icon: '🛡️',
    title: 'Shield Forcefield Syntax',
    badgeTitle: 'Syntax Validator',
    dsaConcept: 'Balanced Parentheses & Stack Parsing',
    gameType: 'balanced_brackets',
    prompt: 'Energy shields fail if harmonics are unclosed! Verify if the bracket harmonic sequence `{[()]}` is properly balanced!',
    kapilTip: "Push opening brackets into your stack. When a closing bracket appears, check if it matches the top of the stack!",
    gameData: {
      expression: '{ [ ( ) ] }',
      isValid: true
    },
    lessonReveal: {
      conceptName: 'Balanced Parentheses / Stack Syntax Parsing',
      ahaMoment: 'Every nested opening tag or bracket must find its corresponding closure in reverse chronological order — the quintessential job for a Stack!',
      codeSnippet: `def is_valid_brackets(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top: return False
        else:
            stack.append(char)
    return not stack`,
      techUsage: 'Used in code editor syntax highlighters (VS Code/IDE), HTML/XML DOM parsers, and mathematical equation calculators.'
    }
  },
  {
    id: 26,
    day: 26,
    icon: '👾',
    title: 'Secret Binary Gate',
    badgeTitle: 'Bitwise Magician',
    dsaConcept: 'Bit Manipulation & XOR Trick',
    gameType: 'bitwise_xor',
    prompt: 'Every crystal in the array has an identical twin EXCEPT for one unique solitary crystal. Find the unique one!',
    kapilTip: "Remember: X ^ X = 0, and X ^ 0 = X! If you XOR all numbers together, all duplicate twins cancel each other out to zero!",
    gameData: {
      numbers: [4, 7, 2, 4, 7],
      unique: 2
    },
    lessonReveal: {
      conceptName: 'Bit Manipulation (XOR Magic)',
      ahaMoment: 'Because XOR is commutative, associative, and self-inverting (A ^ A = 0), XOR-ing the entire array cancels out pairs, leaving the lone survivor in O(N) time and O(1) space!',
      codeSnippet: `def find_single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`,
      techUsage: 'Used in cryptography, low-level graphics shaders, raid disk array parity recovery, and embedded system register masks.'
    }
  },
  {
    id: 27,
    day: 27,
    icon: '🌧️',
    title: 'Cyber Canyon Reservoir',
    badgeTitle: 'Water Trapper',
    dsaConcept: 'Trapping Rain Water (Two Pointers)',
    gameType: 'trapping_rain',
    prompt: 'Columns of heights `[3, 0, 2, 0, 4]` form a canyon. Calculate how many units of water can be trapped between them!',
    kapilTip: "The water level above any slot is dictated by the MINIMUM of the tallest wall to its left and the tallest wall to its right!",
    gameData: {
      heights: [3, 0, 2, 0, 4],
      answer: 7 // (3-0) + (3-2) + (3-0) = 3 + 1 + 3 = 7
    },
    lessonReveal: {
      conceptName: 'Trapping Rain Water (Two Pointers / Monotonic Stack)',
      ahaMoment: 'Water cannot rise higher than the shorter bounding wall. Advancing the pointer from the shorter wall inward lets you calculate trapped volume on the fly in O(N) time!',
      codeSnippet: `def trap_rain_water(heights):
    left, right = 0, len(heights) - 1
    left_max = right_max = water = 0
    while left < right:
        if heights[left] < heights[right]:
            if heights[left] >= left_max: left_max = heights[left]
            else: water += left_max - heights[left]
            left += 1
        else:
            if heights[right] >= right_max: right_max = heights[right]
            else: water += right_max - heights[right]
            right -= 1
    return water`,
      techUsage: 'Prominently featured in FAANG coding interviews, elevation terrain rendering, and civil engineering hydraulic drainage models.'
    }
  },
  {
    id: 28,
    day: 28,
    icon: '📖',
    title: 'Spell Book Autocomplete',
    badgeTitle: 'Trie Architect',
    dsaConcept: 'Trie (Prefix Tree)',
    gameType: 'trie_prefix',
    prompt: 'You typed prefix "CA". Follow the Trie tree branches to reveal all spells that begin with "CA"!',
    kapilTip: "Each node in a Trie represents a single character. Shared prefixes share the same parent path!",
    gameData: {
      prefix: 'CA',
      words: ['CATAPULT', 'CASTLE', 'CANOPY', 'DRAGON', 'SHIELD'],
      matching: ['CATAPULT', 'CASTLE', 'CANOPY']
    },
    lessonReveal: {
      conceptName: 'Trie (Prefix Tree)',
      ahaMoment: 'Instead of comparing against thousands of whole strings, a Trie traverses letter-by-letter in O(Length of Prefix) time, regardless of how many millions of words exist!',
      codeSnippet: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True`,
      techUsage: 'The engine behind Google Search autocomplete, smartphone keyboard predictive text, and spell checkers.'
    }
  },
  {
    id: 29,
    day: 29,
    icon: '🧭',
    title: 'Asteroid Field Navigation',
    badgeTitle: 'Heuristic Pioneer',
    dsaConcept: 'A* Search Algorithm (Heuristic + Cost)',
    gameType: 'a_star',
    prompt: 'Navigate through drifting space debris towards the beacon. Use distance heuristic f(n) = g(n) + h(n) to prioritize choices!',
    kapilTip: "Don't search blindly in circles! Combine the distance already traveled with the straight-line estimated distance to the target!",
    gameData: {
      start: 'Alpha',
      goal: 'Omega',
      paths: [
        { label: 'Detour North', g: 4, h: 6, f: 10 },
        { label: 'Direct Corridor', g: 2, h: 3, f: 5 }, // Optimal
        { label: 'South Drift', g: 5, h: 4, f: 9 }
      ]
    },
    lessonReveal: {
      conceptName: 'A* Search Algorithm',
      ahaMoment: 'By factoring in an admissible heuristic estimate h(n) to the goal, A* focuses its search beam straight towards the objective, dramatically outperforming blind BFS!',
      codeSnippet: `# A* evaluation function:
# f(n) = g(n) + h(n)
# g(n): Actual cost from start to current node n
# h(n): Estimated heuristic cost from n to goal`,
      techUsage: 'Used in video game NPC pathfinding (Unreal/Unity engines), robotics navigation (Mars Rovers), and automated guided vehicles (AGVs).'
    }
  },
  {
    id: 30,
    day: 30,
    icon: '👑',
    title: 'The Algorithmic Singularity',
    badgeTitle: 'Grandmaster Algorist',
    dsaConcept: 'Algorithmic Synthesis & Mastery',
    gameType: 'grandmaster_finale',
    prompt: 'The final master test! Solve the tripartite logic lock combining Queues, Binary Decisions, and Hash Mapping to claim the Crown!',
    kapilTip: "You have walked 30 days of logic with me. Trust your intuition, connect the structures, and finish your journey!",
    gameData: {
      stages: ['fifo_unlock', 'binary_choice', 'hash_seal']
    },
    lessonReveal: {
      conceptName: 'Grandmaster Algorithmic Mastery',
      ahaMoment: 'You have conquered the foundational principles of Computer Science! Data structures are not abstract textbook theory — they are the cognitive building blocks of how computational worlds are constructed!',
      codeSnippet: `"""
SYM PRODUCTIONS PRESENTS: LOGIC HUNT WITH KAPIL
30-DAY JOURNEY COMPLETE!
You are now an Algorithmic Thinker.
"""
print("Congratulations! Download your Official Grandmaster Certificate below!")`,
      techUsage: 'Ready for real-world software engineering, algorithmic competitions, FAANG technical interviews, and architecting scalable systems.'
    }
  }
];
