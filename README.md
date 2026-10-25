# 🎮 SYM PRODUCTIONS PRESENTS: LOGIC HUNT WITH KAPIL
> **An animated, game-first logic building application revealing hidden Data Structures & Algorithms (DSA) concepts!**

---

## 🌟 Overview & Philosophy
**Logic Hunt with Kapil** flips traditional computer science education on its head:
- **Less Text, More Gaming:** Learners don't memorize boring textbook definitions first. Instead, they interact with tactile visual puzzles, conveyor docks, rocket silos, lock dials, skater tracks, and crystal trees.
- **Lesson Reveals After Winning:** Only after the learner intuitively solves the problem does **Kapil** celebrate with victory fanfares and reveal the secret algorithmic superpower they just mastered (Queue FIFO, Stack LIFO, Binary Search O(log N), Two Pointers, BFS, Memoization, etc.).
- **One Level a Day (30-Day Journey):** Designed as a progressive daily quest. Includes an **Explorer Mode** toggle to unlock all 30 levels for testing and review.
- **PNG Badges & Official Certificates:** Learners enter their name at the start, and can instantly download high-resolution **PNG Badges** for every cleared level and an official **Certificate of Algorithmic Mastery** stamped with SYM Productions' verified seal and Kapil's signature.
- **Offline & Zero Dependencies:** Built with pure HTML5, CSS3, ES6 JavaScript, and the Web Audio API for arcade sound synthesis. Zero npm installs needed!

---

## 🗺️ The 30 Levels & Hidden DSA Concepts

| Day | Level Name | Intuitive Game Mechanic | Hidden DSA Concept Revealed |
|:---:|:---|:---|:---|
| **01** | The Express Conveyor | Ship items strictly by arrival sequence | **Queue (FIFO - First In, First Out)** |
| **02** | Cargo Rocket Stacker | Load fuel cells into silo and pop from top | **Stack (LIFO - Last In, First Out)** |
| **03** | The Vault Number Safe | Crack 1-100 passcode using High/Low feedback | **Binary Search (O(log N))** |
| **04** | Neon Cyber Lockers | Direct locker mapping via ID % 5 | **Hash Map / Direct Addressing (O(1))** |
| **05** | Twin Skater Rendezvous | Converging opposite skaters to hit target sum | **Two Pointers Technique** |
| **06** | Train Depot Shunter | Re-link carriage pointers in express sequence | **Singly Linked List** |
| **07** | Energy Grid Scanner | Slide 3-cell window to find peak power sum | **Sliding Window Technique (O(N))** |
| **08** | Loop in the Circuit | Fast (2x) and Slow (1x) runners track | **Floyd's Cycle Finding (Tortoise & Hare)** |
| **09** | Counterfeit Gem Scale | 3-way partition weighings to isolate fake gem | **Divide & Conquer Algorithm** |
| **10** | Crystal Root Path | Branch Left if smaller, Right if greater | **Binary Search Tree (BST)** |
| **11** | Spaceport ER Triage | Treat critical patients before minor injuries | **Priority Queue / Min-Heap** |
| **12** | Flood Wave Island Rescue | Expand search ripples ring by ring | **Breadth-First Search (BFS)** |
| **13** | Neon Cavern Explorer | Dive down deep tunnel; backtrack on dead end | **Depth-First Search (DFS) & Backtracking** |
| **14** | Card Shelf Organizer | Swap adjacent out-of-order cards | **Bubble / Insertion Sort** |
| **15** | Pivot Laser Splitter | Partition cards smaller or larger than pivot | **QuickSort (Lomuto Partitioning)** |
| **16** | Dual River Confluence | Compare lead items of 2 sorted conveyors | **Merge Sort (Two-Way Merge)** |
| **17** | Stairway Energy Leap | Fill memo table: Ways(N) = Ways(N-1) + Ways(N-2) | **Dynamic Programming (Memoization)** |
| **18** | Cyber Vault Knapsack | Optimize item value within strict 7kg capacity | **0/1 Knapsack Optimization** |
| **19** | Mirror Rune Symmetry | Match outermost runes inward to verify mirror | **Palindrome & Symmetric Invariant** |
| **20** | Power Grid Connect | Pick 3 cheapest cables without forming loops | **Minimum Spanning Tree (Kruskal/Prim)** |
| **21** | Hyperlane Delivery Drone | Pick lowest battery-cost path through sectors | **Dijkstra's Shortest Path Algorithm** |
| **22** | Alien Island Census | Flood-fill to sink connected land clusters | **Connected Components / Flood Fill** |
| **23** | Quantum Reactor Assembly | Arrange components obeying prerequisite graph | **Topological Sort (DAG)** |
| **24** | Memory Eviction Vault | Cache overflows: evict least recently used | **LRU Cache (Least Recently Used)** |
| **25** | Shield Forcefield Syntax | Verify nested `{ [ ( ) ] }` harmonics | **Balanced Parentheses (Stack Parser)** |
| **26** | Secret Binary Gate | Cancel twin crystal pairs with XOR | **Bit Manipulation (XOR Magic)** |
| **27** | Cyber Canyon Reservoir | Calculate trapped water between peaks | **Trapping Rain Water (Two Pointers)** |
| **28** | Spell Book Autocomplete | Branch letter by letter from root "CA" | **Trie (Prefix Tree)** |
| **29** | Asteroid Field Navigation | Evaluate f(n) = g(n) + h(n) heuristic | **A* Search Algorithm** |
| **30** | The Algorithmic Singularity | Tripartite Grandmaster synthesis | **Algorithmic Mastery & Synthesis** |

---

## 🚀 How to Run the App

### Option 1: Direct Double Click (Zero Setup)
Simply open `index.html` in **Google Chrome**, **Microsoft Edge**, **Firefox**, or **Safari**!

### Option 2: Python Local Server
Run in PowerShell / Terminal:
```bash
python server.py
```
This automatically boots a local HTTP server and opens your browser at `http://localhost:8080`.

### Option 3: Node.js / npx
```bash
npx serve .
```

---

## 🎨 Features & Technologies Used
1. **Web Audio Synthesizer (`js/sound.js`):** Pure procedural retro sound effects without external audio files.
2. **Kapil Controller (`js/kapil.js`):** Animated vector character with responsive moods (happy, thinking, hyped, puzzled).
3. **Canvas PNG Generator (`js/certificate.js`):** Crisp 600x600 Level Badges and 1200x800 Official Certificates with custom names and signatures.
4. **Local Persistence:** Progress and learner name auto-saved in `localStorage`.
5. **Explorer Mode:** A toggle inside the 30-Day Map allowing educators, testers, and reviewers to jump to any level.

---
*Created for SYM PRODUCTIONS • Produced by Kapil*
