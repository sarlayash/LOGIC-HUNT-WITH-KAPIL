/**
 * GAME PLAY ENGINE FOR LOGIC HUNT WITH KAPIL
 * Handles gameplay logic, interactive animations, and win conditions.
 */

class GameEngine {
  constructor() {
    this.currentLevel = null;
    this.container = null;
    this.gameState = {};
    this.onWinCallback = null;
  }

  init(containerId, onWin) {
    this.container = document.getElementById(containerId);
    this.onWinCallback = onWin;
  }

  loadLevel(level) {
    this.currentLevel = level;
    this.gameState = {};
    if (!this.container) return;

    window.soundEngine.playMove();
    window.kapilController.speak(level.kapilTip, 'happy', 7000);

    // Dispatch to appropriate mini-game renderer
    switch (level.gameType) {
      case 'queue_conveyor':
        this.renderQueueConveyor(level);
        break;
      case 'stack_loader':
        this.renderStackLoader(level);
        break;
      case 'binary_search_safe':
        this.renderBinarySearchSafe(level);
        break;
      case 'hash_map_locker':
        this.renderHashMapLocker(level);
        break;
      case 'two_pointers':
        this.renderTwoPointers(level);
        break;
      case 'linked_list_shunter':
        this.renderLinkedListShunter(level);
        break;
      case 'sliding_window':
        this.renderSlidingWindow(level);
        break;
      case 'floyd_cycle':
        this.renderFloydCycle(level);
        break;
      case 'balance_scale':
        this.renderBalanceScale(level);
        break;
      case 'bst_traversal':
        this.renderBstTraversal(level);
        break;
      case 'priority_queue':
        this.renderPriorityQueue(level);
        break;
      case 'bfs_grid':
        this.renderBfsGrid(level);
        break;
      case 'dfs_maze':
        this.renderDfsMaze(level);
        break;
      case 'bubble_sort':
        this.renderBubbleSort(level);
        break;
      case 'quicksort_pivot':
        this.renderQuickSort(level);
        break;
      case 'merge_sort':
        this.renderMergeSort(level);
        break;
      case 'dp_stairs':
        this.renderDpStairs(level);
        break;
      case 'knapsack':
        this.renderKnapsack(level);
        break;
      case 'palindrome':
        this.renderPalindrome(level);
        break;
      case 'mst_connect':
        this.renderMstConnect(level);
        break;
      case 'dijkstra_path':
        this.renderDijkstraPath(level);
        break;
      case 'matrix_islands':
        this.renderMatrixIslands(level);
        break;
      case 'topological_sort':
        this.renderTopologicalSort(level);
        break;
      case 'lru_cache':
        this.renderLruCache(level);
        break;
      case 'balanced_brackets':
        this.renderBalancedBrackets(level);
        break;
      case 'bitwise_xor':
        this.renderBitwiseXor(level);
        break;
      case 'trapping_rain':
        this.renderTrappingRain(level);
        break;
      case 'trie_prefix':
        this.renderTriePrefix(level);
        break;
      case 'a_star':
        this.renderAStar(level);
        break;
      case 'grandmaster_finale':
        this.renderGrandmasterFinale(level);
        break;
      default:
        this.renderGenericPuzzle(level);
    }
  }

  triggerWin() {
    window.soundEngine.playWinFanfare();
    window.kapilController.setMood('celebrating');
    if (this.onWinCallback) {
      this.onWinCallback(this.currentLevel);
    }
  }

  /* ---------------- LEVEL 1: QUEUE CONVEYOR ---------------- */
  renderQueueConveyor(level) {
    const queue = [...level.gameData.items];
    const delivered = [];
    this.gameState = { queue, delivered };

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Click the packages in the EXACT order they arrived at the conveyor dock!</span>
            <span class="badge-tag">Queue: First In, First Out</span>
          </div>

          <div class="conveyor-scene">
            <div class="conveyor-belt">
              <div class="belt-track"></div>
              <div class="items-row">
                ${queue.map((item, idx) => `
                  <div class="conveyor-box ${idx === 0 ? 'pulse-ready' : ''}" 
                       data-idx="${idx}" 
                       style="background: linear-gradient(135deg, ${item.color}, #3730a3)">
                    <span class="box-tag">#${idx + 1} Arrived</span>
                    <span class="box-icon">📦</span>
                    <span class="box-name">${item.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="dock-zone">
              <div class="dock-header">🚚 DISPATCH DOCK (Delivered in Order)</div>
              <div class="delivered-row">
                ${delivered.length === 0 ? '<div class="empty-dock">Waiting for first package...</div>' : ''}
                ${delivered.map(d => `
                  <div class="delivered-box" style="border-color:${d.color}">
                    <span>✓ ${d.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.conveyor-box').forEach(el => {
        el.onclick = () => {
          const idx = parseInt(el.getAttribute('data-idx'));
          if (idx === 0) {
            window.soundEngine.playCorrect();
            const popped = queue.shift();
            delivered.push(popped);
            window.kapilController.speak(`Great! ${popped.label} was first in line!`, 'hyped');
            if (queue.length === 0) {
              setTimeout(() => this.triggerWin(), 600);
            } else {
              render();
            }
          } else {
            window.soundEngine.playError();
            window.kapilController.speak("Wait! In a Queue, you MUST serve the front package first!", 'puzzled');
            el.classList.add('shake-anim');
            setTimeout(() => el.classList.remove('shake-anim'), 400);
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 2: STACK LOADER ---------------- */
  renderStackLoader(level) {
    const rawCells = [...level.gameData.cells];
    const stack = [];
    const unloaded = [];
    this.gameState = { rawCells, stack, unloaded };

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Step 1: PUSH all fuel cells into the rocket silo. Step 2: POP them off from the top!</span>
            <span class="badge-tag">Stack: Last In, First Out</span>
          </div>

          <div class="stack-scene">
            <div class="staging-area">
              <h4>READY TO PUSH INTO SILO:</h4>
              <div class="staging-list">
                ${rawCells.length === 0 ? '<div class="empty-dock">All cells loaded! Now POP them!</div>' : ''}
                ${rawCells.map((c, i) => `
                  <button class="push-btn" data-idx="${i}" style="border-color: ${c.color}">
                    ⬇ Push ${c.label}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="rocket-silo">
              <div class="silo-top-opening">▲ SILO ENTRANCE / EXIT ▲</div>
              <div class="silo-shaft">
                ${stack.map((c, i) => `
                  <div class="silo-item ${i === stack.length - 1 ? 'top-item' : 'blocked-item'}" 
                       data-idx="${i}" style="background: ${c.color}">
                    <span>${c.label}</span>
                    <span class="item-pos">${i === stack.length - 1 ? 'TOP (POP READY)' : 'BLOCKED UNDERNEATH'}</span>
                  </div>
                `).reverse().join('')}
                ${stack.length === 0 ? '<div class="empty-silo">Silo Empty</div>' : ''}
              </div>
              <div class="silo-bottom">CLOSED BASE</div>
            </div>

            <div class="unloaded-area">
              <h4>UNLOADED CELLS:</h4>
              <div class="unloaded-list">
                ${unloaded.map(c => `<div class="unloaded-item" style="color:${c.color}">✓ ${c.label}</div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      // Attach Push buttons
      this.container.querySelectorAll('.push-btn').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-idx'));
          const cell = rawCells.splice(idx, 1)[0];
          stack.push(cell);
          window.soundEngine.playMove();
          window.kapilController.speak(`Pushed ${cell.label} onto top of Stack!`, 'happy');
          render();
        };
      });

      // Attach Pop button or click top item
      this.container.querySelectorAll('.silo-item').forEach(itemEl => {
        itemEl.onclick = () => {
          const idx = parseInt(itemEl.getAttribute('data-idx'));
          if (idx === stack.length - 1) {
            const popped = stack.pop();
            unloaded.push(popped);
            window.soundEngine.playCorrect();
            window.kapilController.speak(`Popped ${popped.label} from the TOP!`, 'hyped');
            if (rawCells.length === 0 && stack.length === 0) {
              setTimeout(() => this.triggerWin(), 600);
            } else {
              render();
            }
          } else {
            window.soundEngine.playError();
            window.kapilController.speak("Physics of a Stack! You cannot take a bottom item while top items rest on it!", 'thinking');
            itemEl.classList.add('shake-anim');
            setTimeout(() => itemEl.classList.remove('shake-anim'), 400);
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 3: BINARY SEARCH SAFE ---------------- */
  renderBinarySearchSafe(level) {
    let low = level.gameData.min;
    let high = level.gameData.max;
    const target = Math.floor(Math.random() * 85) + 10; // e.g. 42
    let triesLeft = level.gameData.maxTries;
    let history = [];

    const render = () => {
      const mid = Math.floor((low + high) / 2);
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Target secret is between ${low} and ${high}. Tries remaining: <b>${triesLeft}</b></span>
            <span class="badge-tag">Binary Search O(log N)</span>
          </div>

          <div class="safe-scene">
            <div class="safe-door">
              <div class="safe-dial-display">
                <div class="dial-range">SEARCH BOUNDS: [${low} ... ${high}]</div>
                <div class="dial-mid">RECOMMENDED MIDPOINT: <b>${mid}</b></div>
              </div>

              <div class="slider-control-box">
                <input type="number" id="safeGuessInput" min="${low}" max="${high}" value="${mid}" class="cyber-num-input" />
                <button id="btnGuess" class="action-btn">CRACK SAFE 🔓</button>
              </div>

              <div class="binary-range-visualizer">
                <div class="range-bar">
                  <div class="active-segment" style="left: ${(low - 1)}%; width: ${(high - low + 1)}%;"></div>
                </div>
              </div>
            </div>

            <div class="safe-log">
              <h4>ATTEMPT LOG:</h4>
              <div class="log-entries">
                ${history.map(h => `<div class="log-entry ${h.type}">${h.msg}</div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      const guessBtn = document.getElementById('btnGuess');
      const input = document.getElementById('safeGuessInput');

      guessBtn.onclick = () => {
        const val = parseInt(input.value);
        if (isNaN(val) || val < low || val > high) return;

        triesLeft--;
        window.soundEngine.playClick();

        if (val === target) {
          history.unshift({ type: 'win', msg: `🎉 BINGO! Code cracked: ${val}!` });
          render();
          setTimeout(() => this.triggerWin(), 700);
          return;
        }

        if (triesLeft <= 0) {
          window.soundEngine.playError();
          history.unshift({ type: 'error', msg: `Tries exhausted! Target was ${target}. Restarting...` });
          window.kapilController.speak("Remember: always pick the exact middle to eliminate half!", 'thinking');
          setTimeout(() => this.loadLevel(level), 2000);
          return;
        }

        if (val < target) {
          window.soundEngine.playMove();
          low = val + 1;
          history.unshift({ type: 'high', msg: `Guess ${val} was TOO LOW! (Target is higher ↗)` });
          window.kapilController.speak(`Higher than ${val}! Half the lower field is eliminated!`, 'happy');
        } else {
          window.soundEngine.playMove();
          high = val - 1;
          history.unshift({ type: 'low', msg: `Guess ${val} was TOO HIGH! (Target is lower ↘)` });
          window.kapilController.speak(`Lower than ${val}! We pruned the whole upper half!`, 'happy');
        }

        render();
      };
    };

    render();
  }

  /* ---------------- LEVEL 4: HASH MAP LOCKERS ---------------- */
  renderHashMapLocker(level) {
    const tokens = [...level.gameData.tokens];
    const placed = {};
    let selectedToken = null;

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Formula: <code>Locker Slot = Employee ID % 5</code>. Select an ID card and tap its designated locker!</span>
            <span class="badge-tag">Hash Map: O(1) Lookup</span>
          </div>

          <div class="hash-scene">
            <div class="tokens-tray">
              <h4>EMPLOYEE KEYS (KEYS):</h4>
              <div class="tray-row">
                ${tokens.filter(t => placed[t.id] === undefined).map(t => `
                  <div class="id-card ${selectedToken && selectedToken.id === t.id ? 'card-selected' : ''}" data-id="${t.id}">
                    <span class="card-id">ID: ${t.id}</span>
                    <span class="card-name">${t.name}</span>
                    <span class="card-hash">Hash: ${t.id} % 5 = <b>${t.id % 5}</b></span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="lockers-grid">
              ${[0, 1, 2, 3, 4].map(slot => {
                const occupant = Object.keys(placed).find(id => placed[id] === slot);
                return `
                  <div class="locker-box ${occupant ? 'locker-locked' : 'locker-open'}" data-slot="${slot}">
                    <div class="locker-number">SLOT #${slot}</div>
                    <div class="locker-status">
                      ${occupant ? `🔒 Occupied by: ID ${occupant}` : '🔓 Tap to Assign'}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.id-card').forEach(cardEl => {
        cardEl.onclick = () => {
          const id = parseInt(cardEl.getAttribute('data-id'));
          selectedToken = tokens.find(t => t.id === id);
          window.soundEngine.playClick();
          render();
        };
      });

      this.container.querySelectorAll('.locker-box').forEach(lockerEl => {
        lockerEl.onclick = () => {
          if (!selectedToken) {
            window.kapilController.speak("First select an Employee Key card!", 'thinking');
            return;
          }
          const slot = parseInt(lockerEl.getAttribute('data-slot'));
          const expectedSlot = selectedToken.id % 5;

          if (slot === expectedSlot) {
            window.soundEngine.playCorrect();
            placed[selectedToken.id] = slot;
            selectedToken = null;
            window.kapilController.speak("Direct O(1) mapping! No looping needed!", 'hyped');
            if (Object.keys(placed).length === tokens.length) {
              setTimeout(() => this.triggerWin(), 600);
            } else {
              render();
            }
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Check the hash! ${selectedToken.id} % 5 is ${expectedSlot}, not ${slot}!`, 'puzzled');
            lockerEl.classList.add('shake-anim');
            setTimeout(() => lockerEl.classList.remove('shake-anim'), 400);
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 5: TWO POINTERS ---------------- */
  renderTwoPointers(level) {
    const track = level.gameData.track;
    let left = 0;
    let right = track.length - 1;
    const target = level.gameData.targetSum;

    const render = () => {
      const currentSum = track[left] + track[right];
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Move Left skater <b>(Index ${left})</b> and Right skater <b>(Index ${right})</b> until Sum = <b>${target}</b>!</span>
            <span class="badge-tag">Two Pointers O(N)</span>
          </div>

          <div class="pointers-scene">
            <div class="skater-hud">
              <div class="hud-box">Left Val: <b>${track[left]}</b></div>
              <div class="hud-box highlight">Current Sum: <b>${currentSum}</b> (Target: ${target})</div>
              <div class="hud-box">Right Val: <b>${track[right]}</b></div>
            </div>

            <div class="track-row">
              ${track.map((val, idx) => `
                <div class="track-node ${idx === left ? 'has-left-skater' : ''} ${idx === right ? 'has-right-skater' : ''}">
                  <span class="node-val">${val}</span>
                  <div class="skater-tags">
                    ${idx === left ? '<span class="skater-tag left-tag">⛸️ L</span>' : ''}
                    ${idx === right ? '<span class="skater-tag right-tag">⛸️ R</span>' : ''}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="pointers-controls">
              <button id="btnMoveLeft" class="cyber-btn" ${left >= right - 1 ? 'disabled' : ''}>
                Move Left Skater Forward ➡️ (Increases Sum)
              </button>
              <button id="btnMoveRight" class="cyber-btn" ${right <= left + 1 ? 'disabled' : ''}>
                ⬅️ Move Right Skater Inward (Decreases Sum)
              </button>
            </div>
          </div>
        </div>
      `;

      if (currentSum === target) {
        setTimeout(() => this.triggerWin(), 700);
        return;
      }

      const leftBtn = document.getElementById('btnMoveLeft');
      const rightBtn = document.getElementById('btnMoveRight');

      if (leftBtn) {
        leftBtn.onclick = () => {
          if (left < right) {
            left++;
            window.soundEngine.playMove();
            render();
          }
        };
      }

      if (rightBtn) {
        rightBtn.onclick = () => {
          if (right > left) {
            right--;
            window.soundEngine.playMove();
            render();
          }
        };
      }
    };

    render();
  }

  /* ---------------- LEVEL 6: LINKED LIST SHUNTER ---------------- */
  renderLinkedListShunter(level) {
    const correct = level.gameData.correctOrder;
    let userOrder = ['ENG']; // starts with Engine

    const render = () => {
      const remaining = correct.filter(c => !userOrder.includes(c));
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Set pointers: Link each train carriage to its NEXT car in the correct express order!</span>
            <span class="badge-tag">Singly Linked List</span>
          </div>

          <div class="shunter-scene">
            <div class="train-chain">
              ${userOrder.map((code, idx) => `
                <div class="train-car">
                  <span class="car-label">${code}</span>
                  <span class="pointer-arrow">${idx === userOrder.length - 1 ? '👉 next: ?' : '➡️'}</span>
                </div>
              `).join('')}
            </div>

            <div class="depot-yard">
              <h4>AVAILABLE CARRIAGES TO LINK:</h4>
              <div class="cars-options">
                ${remaining.map(code => `
                  <button class="link-btn" data-code="${code}">
                    🔗 Link [${code}]
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.link-btn').forEach(btn => {
        btn.onclick = () => {
          const code = btn.getAttribute('data-code');
          const nextExpected = correct[userOrder.length];
          if (code === nextExpected) {
            window.soundEngine.playCorrect();
            userOrder.push(code);
            window.kapilController.speak(`Pointer attached! Now ${code}.next points ahead!`, 'happy');
            if (userOrder.length === correct.length) {
              setTimeout(() => this.triggerWin(), 600);
            } else {
              render();
            }
          } else {
            window.soundEngine.playError();
            window.kapilController.speak("Not that car! Check the logical sequence of an express train!", 'puzzled');
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 7: SLIDING WINDOW ---------------- */
  renderSlidingWindow(level) {
    const cells = level.gameData.cells;
    const k = level.gameData.windowSize;
    let windowStart = 0;

    // Find the theoretical max sum
    let maxFound = -Infinity;
    for (let i = 0; i <= cells.length - k; i++) {
      const s = cells.slice(i, i + k).reduce((a, b) => a + b, 0);
      if (s > maxFound) maxFound = s;
    }

    const render = () => {
      const currentSlice = cells.slice(windowStart, windowStart + k);
      const currentSum = currentSlice.reduce((a, b) => a + b, 0);

      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Slide the 3-cell sensor frame. Find the position with MAX total energy! Current Sum: <b>${currentSum}</b></span>
            <span class="badge-tag">Sliding Window O(N)</span>
          </div>

          <div class="window-scene">
            <div class="cells-grid">
              ${cells.map((val, idx) => {
                const inWindow = idx >= windowStart && idx < windowStart + k;
                return `
                  <div class="energy-cell ${inWindow ? 'in-window' : ''}">
                    <span class="cell-num">${val}</span>
                    <span class="cell-idx">[${idx}]</span>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="window-controls">
              <button id="btnSlideLeft" class="cyber-btn" ${windowStart === 0 ? 'disabled' : ''}>⬅️ Slide Left</button>
              <button id="btnLockWindow" class="action-btn">⚡ LOCK & HARVEST ENERGY</button>
              <button id="btnSlideRight" class="cyber-btn" ${windowStart >= cells.length - k ? 'disabled' : ''}>Slide Right ➡️</button>
            </div>
          </div>
        </div>
      `;

      const leftBtn = document.getElementById('btnSlideLeft');
      const rightBtn = document.getElementById('btnSlideRight');
      const lockBtn = document.getElementById('btnLockWindow');

      if (leftBtn) {
        leftBtn.onclick = () => {
          if (windowStart > 0) {
            windowStart--;
            window.soundEngine.playMove();
            render();
          }
        };
      }

      if (rightBtn) {
        rightBtn.onclick = () => {
          if (windowStart < cells.length - k) {
            windowStart++;
            window.soundEngine.playMove();
            render();
          }
        };
      }

      if (lockBtn) {
        lockBtn.onclick = () => {
          if (currentSum === maxFound) {
            window.soundEngine.playCorrect();
            window.kapilController.speak(`Maximum energy harvested: ${currentSum}! Brilliant!`, 'hyped');
            setTimeout(() => this.triggerWin(), 600);
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`That sum is ${currentSum}. Keep sliding, there is a higher energy pocket!`, 'thinking');
          }
        };
      }
    };

    render();
  }

  /* ---------------- LEVEL 8: FLOYD'S CYCLE ---------------- */
  renderFloydCycle(level) {
    let tortoise = 0;
    let hare = 0;
    // Nodes 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> loops back to 2
    const nextNode = (curr) => {
      if (curr === 5) return 2;
      return curr + 1;
    };

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Tortoise moves 1 step; Hare moves 2 steps. Advance them until both land on the SAME node!</span>
            <span class="badge-tag">Floyd's Tortoise & Hare</span>
          </div>

          <div class="cycle-scene">
            <div class="circuit-track">
              ${[0, 1, 2, 3, 4, 5].map(node => `
                <div class="circuit-node ${node >= 2 ? 'in-loop' : ''}" data-node="${node}">
                  <span class="node-id">Node ${node} ${node === 2 ? '(Loop Start)' : ''}</span>
                  <div class="racers-here">
                    ${tortoise === node ? '<span class="racer-icon">🐢 (1x)</span>' : ''}
                    ${hare === node ? '<span class="racer-icon">🐇 (2x)</span>' : ''}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="cycle-controls">
              <button id="btnStepCycle" class="action-btn">⏩ ADVANCE CLOCK TICK</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('btnStepCycle').onclick = () => {
        tortoise = nextNode(tortoise);
        hare = nextNode(nextNode(hare));
        window.soundEngine.playMove();

        if (tortoise === hare) {
          window.soundEngine.playCorrect();
          window.kapilController.speak(`Collision at Node ${tortoise}! Loop detected with O(1) memory!`, 'hyped');
          render();
          setTimeout(() => this.triggerWin(), 800);
        } else {
          window.kapilController.speak(`Tortoise at Node ${tortoise}, Hare at Node ${hare}...`, 'happy');
          render();
        }
      };
    };

    render();
  }

  /* ---------------- LEVEL 9: BALANCE SCALE ---------------- */
  renderBalanceScale(level) {
    let weighsLeft = level.gameData.maxWeighs;
    let heavyIdx = level.gameData.heavyIndex;
    let leftPan = [];
    let rightPan = [];
    let scaleResult = 'BALANCED';

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Find the 1 heavier gem among 9 in 2 weighings or less! Weighs left: <b>${weighsLeft}</b></span>
            <span class="badge-tag">Divide & Conquer</span>
          </div>

          <div class="scale-scene">
            <div class="scale-apparatus">
              <div class="scale-pan left-pan">
                <h5>LEFT PAN (${leftPan.length} gems)</h5>
                <div class="pan-items">${leftPan.map(g => `<span class="gem-glyph">💎 #${g}</span>`).join('')}</div>
              </div>
              <div class="scale-pivot">
                <span class="pivot-needle">STATUS: ${scaleResult}</span>
              </div>
              <div class="scale-pan right-pan">
                <h5>RIGHT PAN (${rightPan.length} gems)</h5>
                <div class="pan-items">${rightPan.map(g => `<span class="gem-glyph">💎 #${g}</span>`).join('')}</div>
              </div>
            </div>

            <div class="gem-selector-rack">
              <h4>GEMS 0 to 8: (Tap to assign or guess)</h4>
              <div class="gems-row">
                ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(g => `
                  <div class="gem-card">
                    <span>💎 #${g}</span>
                    <button class="pan-add-btn" data-gem="${g}" data-side="left">L</button>
                    <button class="pan-add-btn" data-gem="${g}" data-side="right">R</button>
                    <button class="accuse-btn" data-gem="${g}">Identify</button>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="scale-actions">
              <button id="btnWeigh" class="action-btn" ${weighsLeft <= 0 ? 'disabled' : ''}>⚖️ WEIGH PANS</button>
              <button id="btnClearPans" class="cyber-btn">Clear Pans</button>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.pan-add-btn').forEach(b => {
        b.onclick = () => {
          const g = parseInt(b.getAttribute('data-gem'));
          const side = b.getAttribute('data-side');
          if (side === 'left' && !leftPan.includes(g) && !rightPan.includes(g)) leftPan.push(g);
          if (side === 'right' && !rightPan.includes(g) && !leftPan.includes(g)) rightPan.push(g);
          window.soundEngine.playClick();
          render();
        };
      });

      this.container.querySelectorAll('.accuse-btn').forEach(b => {
        b.onclick = () => {
          const g = parseInt(b.getAttribute('data-gem'));
          if (g === heavyIdx) {
            window.soundEngine.playCorrect();
            window.kapilController.speak(`EXACT! Gem #${g} is the counterfeit!`, 'hyped');
            setTimeout(() => this.triggerWin(), 700);
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Gem #${g} has standard weight! Try analyzing the balance again!`, 'puzzled');
          }
        };
      });

      document.getElementById('btnClearPans').onclick = () => {
        leftPan = [];
        rightPan = [];
        scaleResult = 'BALANCED';
        render();
      };

      document.getElementById('btnWeigh').onclick = () => {
        if (leftPan.length === 0 && rightPan.length === 0) return;
        weighsLeft--;
        window.soundEngine.playMove();

        const leftHasHeavy = leftPan.includes(heavyIdx);
        const rightHasHeavy = rightPan.includes(heavyIdx);

        if (leftHasHeavy) scaleResult = '⬅️ TILTED LEFT (Left is heavier)';
        else if (rightHasHeavy) scaleResult = '➡️ TILTED RIGHT (Right is heavier)';
        else scaleResult = '⚖️ EQUAL WEIGHT';

        window.kapilController.speak(`Result: ${scaleResult}!`, 'happy');
        render();
      };
    };

    render();
  }

  /* ---------------- LEVEL 10: BST TRAVERSAL ---------------- */
  renderBstTraversal(level) {
    let currentNode = level.gameData.tree;
    const target = level.gameData.target;

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Target Crystal is <b>${target}</b>. You are at node <b>${currentNode.val}</b>. Compare and navigate!</span>
            <span class="badge-tag">Binary Search Tree</span>
          </div>

          <div class="bst-scene">
            <div class="bst-node-card">
              <div class="node-val-big">${currentNode.val}</div>
              <div class="node-prompt">
                ${currentNode.val === target 
                  ? '🎯 TARGET CRYSTAL FOUND!' 
                  : `Target ${target} is ${target < currentNode.val ? 'LESS THAN (<)' : 'GREATER THAN (>)'} ${currentNode.val}!`}
              </div>
            </div>

            ${currentNode.val !== target ? `
              <div class="bst-choices">
                <button id="btnGoLeft" class="action-btn" ${!currentNode.left ? 'disabled' : ''}>
                  ⬅️ Go Left (Values < ${currentNode.val})
                </button>
                <button id="btnGoRight" class="action-btn" ${!currentNode.right ? 'disabled' : ''}>
                  Go Right (Values > ${currentNode.val}) ➡️
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;

      if (currentNode.val === target) {
        window.soundEngine.playCorrect();
        setTimeout(() => this.triggerWin(), 700);
        return;
      }

      const leftBtn = document.getElementById('btnGoLeft');
      const rightBtn = document.getElementById('btnGoRight');

      if (leftBtn) {
        leftBtn.onclick = () => {
          if (target < currentNode.val && currentNode.left) {
            currentNode = currentNode.left;
            window.soundEngine.playMove();
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Target ${target} is not less than ${currentNode.val}! Check BST property!`, 'puzzled');
          }
        };
      }

      if (rightBtn) {
        rightBtn.onclick = () => {
          if (target > currentNode.val && currentNode.right) {
            currentNode = currentNode.right;
            window.soundEngine.playMove();
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Target ${target} is not greater than ${currentNode.val}!`, 'puzzled');
          }
        };
      }
    };

    render();
  }

  /* ---------------- LEVEL 11: PRIORITY QUEUE ---------------- */
  renderPriorityQueue(level) {
    let pool = [...level.gameData.patients];
    let treated = [];

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Spaceport ER: Treat patients strictly by Urgency (Priority 1 = Critical, 5 = Routine)!</span>
            <span class="badge-tag">Priority Queue / Min-Heap</span>
          </div>

          <div class="pq-scene">
            <div class="patients-waiting">
              ${pool.map(p => `
                <div class="patient-card" data-name="${p.name}">
                  <span class="urgency-pill urgency-${p.urgency}">Priority #${p.urgency}</span>
                  <span class="patient-name">${p.name}</span>
                  <span class="patient-desc">${p.label}</span>
                  <button class="treat-btn">Treat Patient</button>
                </div>
              `).join('')}
            </div>

            <div class="treated-log">
              <h4>TREATED IN ORDER:</h4>
              ${treated.map(t => `<div class="treated-entry">✓ [P#${t.urgency}] ${t.name} - ${t.label}</div>`).join('')}
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.patient-card').forEach(card => {
        card.querySelector('.treat-btn').onclick = () => {
          const name = card.getAttribute('data-name');
          const chosen = pool.find(p => p.name === name);
          const minUrgency = Math.min(...pool.map(p => p.urgency));

          if (chosen.urgency === minUrgency) {
            window.soundEngine.playCorrect();
            pool = pool.filter(p => p.name !== name);
            treated.push(chosen);
            window.kapilController.speak(`Treated highest priority: ${chosen.name}!`, 'hyped');
            if (pool.length === 0) {
              setTimeout(() => this.triggerWin(), 600);
            } else {
              render();
            }
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Wait! There is a patient with higher urgency (${minUrgency}) waiting!`, 'puzzled');
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 12: BFS GRID ---------------- */
  renderBfsGrid(level) {
    const size = level.gameData.gridSize;
    let pos = [0, 0];
    const goal = level.gameData.goal;
    const walls = level.gameData.walls;

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Guide the rescue drone from [0,0] to Survivor [4,4]! Tap adjacent open tiles.</span>
            <span class="badge-tag">Breadth-First Search (BFS)</span>
          </div>

          <div class="bfs-grid-board">
            ${Array.from({ length: size }).map((_, r) => `
              <div class="grid-row">
                ${Array.from({ length: size }).map((_, c) => {
                  const isCurrent = pos[0] === r && pos[1] === c;
                  const isGoal = goal[0] === r && goal[1] === c;
                  const isWall = walls.some(w => w[0] === r && w[1] === c);
                  return `
                    <div class="grid-tile ${isCurrent ? 'tile-current' : ''} ${isGoal ? 'tile-goal' : ''} ${isWall ? 'tile-wall' : ''}" 
                         data-r="${r}" data-c="${c}">
                      ${isCurrent ? '🚁' : isGoal ? '🏝️' : isWall ? '🧱' : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      `;

      this.container.querySelectorAll('.grid-tile').forEach(tile => {
        tile.onclick = () => {
          const r = parseInt(tile.getAttribute('data-r'));
          const c = parseInt(tile.getAttribute('data-c'));
          const isWall = walls.some(w => w[0] === r && w[1] === c);
          const dist = Math.abs(pos[0] - r) + Math.abs(pos[1] - c);

          if (isWall) {
            window.soundEngine.playError();
            return;
          }

          if (dist === 1) {
            pos = [r, c];
            window.soundEngine.playMove();
            if (pos[0] === goal[0] && pos[1] === goal[1]) {
              window.soundEngine.playCorrect();
              render();
              setTimeout(() => this.triggerWin(), 700);
            } else {
              render();
            }
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 13: DFS MAZE ---------------- */
  renderDfsMaze(level) {
    let currentStep = 'start';

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Dive deep down cavern tunnels. If you hit a dead end, backtrack!</span>
            <span class="badge-tag">Depth-First Search & Backtracking</span>
          </div>

          <div class="dfs-scene">
            <div class="cavern-display">
              ${currentStep === 'start' ? `
                <h4>ENTRANCE FORK: Which tunnel will you explore deep first?</h4>
                <div class="tunnel-buttons">
                  <button class="action-btn" id="btnLeft">Enter Left Cavern</button>
                  <button class="action-btn" id="btnRight">Enter Right Cavern</button>
                </div>
              ` : currentStep === 'left' ? `
                <h4 style="color:#ef4444">💥 DEAD END! The tunnel collapsed.</h4>
                <button class="cyber-btn" id="btnBacktrack">⏪ BACKTRACK TO FORK</button>
              ` : currentStep === 'right' ? `
                <h4>Deep inside Right Cavern. Another split!</h4>
                <div class="tunnel-buttons">
                  <button class="action-btn" id="btnRightLeft">Take Deep Chasm 💎</button>
                  <button class="action-btn" id="btnRightRight">Take Flooded Path</button>
                </div>
              ` : currentStep === 'right_right' ? `
                <h4 style="color:#ef4444">💥 FLOODED WALL! Impassable.</h4>
                <button class="cyber-btn" id="btnBacktrack2">⏪ BACKTRACK</button>
              ` : `
                <h4 style="color:#10b981">💎 GLOWING CRYSTAL CHAMBER REACHED!</h4>
              `}
            </div>
          </div>
        </div>
      `;

      const btnLeft = document.getElementById('btnLeft');
      const btnRight = document.getElementById('btnRight');
      const btnBacktrack = document.getElementById('btnBacktrack');
      const btnRightLeft = document.getElementById('btnRightLeft');
      const btnRightRight = document.getElementById('btnRightRight');
      const btnBacktrack2 = document.getElementById('btnBacktrack2');

      if (btnLeft) btnLeft.onclick = () => { currentStep = 'left'; window.soundEngine.playError(); render(); };
      if (btnRight) btnRight.onclick = () => { currentStep = 'right'; window.soundEngine.playMove(); render(); };
      if (btnBacktrack) btnBacktrack.onclick = () => { currentStep = 'start'; window.soundEngine.playMove(); render(); };
      if (btnRightRight) btnRightRight.onclick = () => { currentStep = 'right_right'; window.soundEngine.playError(); render(); };
      if (btnBacktrack2) btnBacktrack2.onclick = () => { currentStep = 'right'; window.soundEngine.playMove(); render(); };
      if (btnRightLeft) {
        btnRightLeft.onclick = () => {
          currentStep = 'win';
          window.soundEngine.playCorrect();
          render();
          setTimeout(() => this.triggerWin(), 700);
        };
      }
    };

    render();
  }

  /* ---------------- LEVEL 14: BUBBLE SORT ---------------- */
  renderBubbleSort(level) {
    let cards = [...level.gameData.initialCards];

    const isSorted = () => {
      for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i] > cards[i + 1]) return false;
      }
      return true;
    };

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Swap adjacent out-of-order cards until sorted in ascending order!</span>
            <span class="badge-tag">Adjacent Bubble Sort</span>
          </div>

          <div class="bubble-scene">
            <div class="cards-rack">
              ${cards.map((c, i) => `
                <div class="sort-card">
                  <span class="card-val">${c}</span>
                  ${i < cards.length - 1 ? `
                    <button class="swap-btn" data-idx="${i}">⇄ Swap with #${cards[i + 1]}</button>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.swap-btn').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-idx'));
          const temp = cards[idx];
          cards[idx] = cards[idx + 1];
          cards[idx + 1] = temp;
          window.soundEngine.playMove();

          if (isSorted()) {
            window.soundEngine.playCorrect();
            render();
            setTimeout(() => this.triggerWin(), 600);
          } else {
            render();
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 15: QUICKSORT PIVOT ---------------- */
  renderQuickSort(level) {
    const pivot = level.gameData.pivot;
    let pool = [...level.gameData.numbers];
    let leftBin = [];
    let rightBin = [];

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Pivot is <b>${pivot}</b>. Partition numbers: < ${pivot} to LEFT bin, > ${pivot} to RIGHT bin!</span>
            <span class="badge-tag">QuickSort Partition</span>
          </div>

          <div class="partition-scene">
            <div class="partition-bins">
              <div class="bin-column left-bin">
                <h4>LEFT BIN (< ${pivot})</h4>
                <div class="bin-items">${leftBin.map(n => `<span class="bin-item">${n}</span>`).join('')}</div>
              </div>

              <div class="pivot-column">
                <div class="pivot-badge">⚡ PIVOT: ${pivot}</div>
              </div>

              <div class="bin-column right-bin">
                <h4>RIGHT BIN (> ${pivot})</h4>
                <div class="bin-items">${rightBin.map(n => `<span class="bin-item">${n}</span>`).join('')}</div>
              </div>
            </div>

            <div class="numbers-to-sort">
              ${pool.map(num => `
                <div class="partition-card">
                  <span class="val">${num}</span>
                  <div class="card-actions">
                    <button class="to-left-btn" data-num="${num}">⬅️ < ${pivot}</button>
                    <button class="to-right-btn" data-num="${num}"> > ${pivot} ➡️</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.to-left-btn').forEach(btn => {
        btn.onclick = () => {
          const num = parseInt(btn.getAttribute('data-num'));
          if (num < pivot) {
            window.soundEngine.playMove();
            pool = pool.filter(n => n !== num);
            leftBin.push(num);
            this.checkPartitionWin(pool);
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`${num} is greater than ${pivot}! It belongs in the right bin!`, 'puzzled');
          }
        };
      });

      this.container.querySelectorAll('.to-right-btn').forEach(btn => {
        btn.onclick = () => {
          const num = parseInt(btn.getAttribute('data-num'));
          if (num > pivot) {
            window.soundEngine.playMove();
            pool = pool.filter(n => n !== num);
            rightBin.push(num);
            this.checkPartitionWin(pool);
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`${num} is smaller than ${pivot}! It belongs in the left bin!`, 'puzzled');
          }
        };
      });
    };

    render();
  }

  checkPartitionWin(pool) {
    if (pool.length === 0) {
      window.soundEngine.playCorrect();
      setTimeout(() => this.triggerWin(), 700);
    }
  }

  /* ---------------- LEVEL 16: MERGE SORT ---------------- */
  renderMergeSort(level) {
    let streamA = [...level.gameData.streamA];
    let streamB = [...level.gameData.streamB];
    let merged = [];

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Compare the front of Stream A and Stream B. Send the smaller item forward!</span>
            <span class="badge-tag">Merge Sort: Two-Way Merge</span>
          </div>

          <div class="merge-scene">
            <div class="streams-box">
              <div class="stream-line">
                <span class="stream-name">Stream A:</span>
                ${streamA.map((n, i) => `<span class="stream-val ${i === 0 ? 'lead' : ''}">${n}</span>`).join('')}
                ${streamA.length > 0 ? `<button class="pick-stream-btn" id="pickA">Pick ${streamA[0]}</button>` : '<span>(Empty)</span>'}
              </div>

              <div class="stream-line">
                <span class="stream-name">Stream B:</span>
                ${streamB.map((n, i) => `<span class="stream-val ${i === 0 ? 'lead' : ''}">${n}</span>`).join('')}
                ${streamB.length > 0 ? `<button class="pick-stream-btn" id="pickB">Pick ${streamB[0]}</button>` : '<span>(Empty)</span>'}
              </div>
            </div>

            <div class="merged-target">
              <h4>MERGED MASTER STREAM:</h4>
              <div class="merged-row">
                ${merged.map(m => `<span class="merged-item">✓ ${m}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      const pickA = document.getElementById('pickA');
      const pickB = document.getElementById('pickB');

      if (pickA) {
        pickA.onclick = () => {
          if (streamB.length === 0 || streamA[0] <= streamB[0]) {
            merged.push(streamA.shift());
            window.soundEngine.playCorrect();
            if (streamA.length === 0 && streamB.length === 0) setTimeout(() => this.triggerWin(), 600);
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Stream B has a smaller element (${streamB[0]})! Pick that first!`, 'puzzled');
          }
        };
      }

      if (pickB) {
        pickB.onclick = () => {
          if (streamA.length === 0 || streamB[0] <= streamA[0]) {
            merged.push(streamB.shift());
            window.soundEngine.playCorrect();
            if (streamA.length === 0 && streamB.length === 0) setTimeout(() => this.triggerWin(), 600);
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Stream A has a smaller element (${streamA[0]})! Pick that first!`, 'puzzled');
          }
        };
      }
    };

    render();
  }

  /* ---------------- LEVEL 17: DP STAIRS ---------------- */
  renderDpStairs(level) {
    let memo = { 1: 1, 2: 2 };
    let currentStep = 3;

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Memoize! Ways(Step N) = Ways(N-1) + Ways(N-2). Calculate up to Step 5!</span>
            <span class="badge-tag">Dynamic Programming</span>
          </div>

          <div class="dp-stairs-scene">
            <div class="memo-table">
              <div class="memo-cell">Step 1 = <b>1</b> way</div>
              <div class="memo-cell">Step 2 = <b>2</b> ways</div>
              <div class="memo-cell ${memo[3] ? 'filled' : 'current'}">Step 3 = <b>${memo[3] || '?'}</b></div>
              <div class="memo-cell ${memo[4] ? 'filled' : ''}">Step 4 = <b>${memo[4] || '?'}</b></div>
              <div class="memo-cell ${memo[5] ? 'filled' : ''}">Step 5 = <b>${memo[5] || '?'}</b></div>
            </div>

            ${currentStep <= 5 ? `
              <div class="dp-calculation-prompt">
                <h4>What are the total ways to reach Step ${currentStep}? (${memo[currentStep - 1]} + ${memo[currentStep - 2]} = ?)</h4>
                <div class="dp-options">
                  ${[memo[currentStep - 1] + memo[currentStep - 2], memo[currentStep - 1] + 1, memo[currentStep - 1] * 2].sort().map(ans => `
                    <button class="action-btn dp-opt" data-ans="${ans}">${ans}</button>
                  `).join('')}
                </div>
              </div>
            ` : '<div class="win-banner">Step 5 conquered!</div>'}
          </div>
        </div>
      `;

      this.container.querySelectorAll('.dp-opt').forEach(btn => {
        btn.onclick = () => {
          const expected = memo[currentStep - 1] + memo[currentStep - 2];
          const val = parseInt(btn.getAttribute('data-ans'));
          if (val === expected) {
            memo[currentStep] = expected;
            currentStep++;
            window.soundEngine.playCorrect();
            if (currentStep > 5) {
              setTimeout(() => this.triggerWin(), 700);
            }
            render();
          } else {
            window.soundEngine.playError();
            window.kapilController.speak(`Sum the previous two memo results: ${memo[currentStep - 1]} + ${memo[currentStep - 2]}!`, 'thinking');
          }
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 18: KNAPSACK ---------------- */
  renderKnapsack(level) {
    const items = level.gameData.items;
    const capacity = level.gameData.capacity;
    let selected = [];

    const render = () => {
      const currentWeight = selected.reduce((sum, id) => sum + items.find(i => i.id === id).weight, 0);
      const currentValue = selected.reduce((sum, id) => sum + items.find(i => i.id === id).value, 0);

      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Vault capacity: <b>${capacity} kg</b>. Maximize value without exceeding capacity! Current: <b>${currentWeight} kg</b> / Val: <b>$${currentValue}</b></span>
            <span class="badge-tag">0/1 Knapsack Problem</span>
          </div>

          <div class="knapsack-scene">
            <div class="items-shelf">
              ${items.map(item => {
                const isSelected = selected.includes(item.id);
                return `
                  <div class="knapsack-item ${isSelected ? 'selected' : ''}" data-id="${item.id}">
                    <span class="item-name">${item.name}</span>
                    <span class="item-stats">${item.weight} kg • $${item.value}</span>
                    <button class="toggle-btn">${isSelected ? 'Remove' : 'Pack in Bag'}</button>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="knapsack-footer">
              <button id="btnLockKnapsack" class="action-btn">💰 ESCAPE WITH LOOT</button>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.knapsack-item').forEach(el => {
        el.querySelector('.toggle-btn').onclick = () => {
          const id = parseInt(el.getAttribute('data-id'));
          if (selected.includes(id)) {
            selected = selected.filter(i => i !== id);
          } else {
            selected.push(id);
          }
          window.soundEngine.playClick();
          render();
        };
      });

      document.getElementById('btnLockKnapsack').onclick = () => {
        if (currentWeight > capacity) {
          window.soundEngine.playError();
          window.kapilController.speak(`Overweight! ${currentWeight} kg exceeds the ${capacity} kg limit!`, 'puzzled');
        } else if (currentValue === 120 && currentWeight <= capacity) {
          // Items 1, 2, 4 (2+3=5kg? wait: item 2 (3kg, 50) + item 3 (4kg, 70) = 7kg, val 120)
          window.soundEngine.playCorrect();
          setTimeout(() => this.triggerWin(), 600);
        } else {
          window.soundEngine.playMove();
          window.kapilController.speak(`Total $${currentValue} is good, but you can achieve $120 within 7 kg!`, 'thinking');
        }
      };
    };

    render();
  }

  /* ---------------- LEVEL 19: PALINDROME ---------------- */
  renderPalindrome(level) {
    const runes = level.gameData.runes;
    let left = 0;
    let right = runes.length - 1;

    const render = () => {
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Verify mirror symmetry: Compare outermost runes inward!</span>
            <span class="badge-tag">Palindrome Two Pointers</span>
          </div>

          <div class="palindrome-scene">
            <div class="runes-row">
              ${runes.map((r, i) => `
                <div class="rune-card ${i === left || i === right ? 'active-rune' : ''}">
                  <span class="rune-char">${r}</span>
                  <span class="rune-idx">[${i}]</span>
                </div>
              `).join('')}
            </div>

            <div class="palindrome-action">
              <button id="btnVerifyPair" class="action-btn">
                ✨ Verify Pair: Runes[${left}] ('${runes[left]}') == Runes[${right}] ('${runes[right]}')
              </button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('btnVerifyPair').onclick = () => {
        if (runes[left] === runes[right]) {
          window.soundEngine.playCorrect();
          left++;
          right--;
          if (left >= right) {
            window.kapilController.speak("Complete symmetry confirmed! Palindrome verified!", 'hyped');
            setTimeout(() => this.triggerWin(), 700);
          } else {
            render();
          }
        }
      };
    };

    render();
  }

  /* ---------------- LEVEL 20: MST CONNECT ---------------- */
  renderMstConnect(level) {
    const edges = level.gameData.edges;
    let chosenEdges = [];

    const render = () => {
      const totalCost = chosenEdges.reduce((sum, e) => sum + e.cost, 0);
      this.container.innerHTML = `
        <div class="game-board">
          <div class="game-instruction-bar">
            <span>Kruskal's MST: Pick the 3 cheapest cables that connect all stations without forming loops! Current Cost: <b>${totalCost}</b></span>
            <span class="badge-tag">Minimum Spanning Tree</span>
          </div>

          <div class="mst-scene">
            <div class="edges-list">
              ${edges.map((e, i) => {
                const picked = chosenEdges.some(c => c.u === e.u && c.v === e.v);
                return `
                  <button class="edge-btn ${picked ? 'picked' : ''}" data-idx="${i}">
                    Cable [${e.u} ⇄ ${e.v}] • Cost: ${e.cost}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.edge-btn').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-idx'));
          const edge = edges[idx];
          if (chosenEdges.some(c => c.u === edge.u && c.v === edge.v)) {
            chosenEdges = chosenEdges.filter(c => !(c.u === edge.u && c.v === edge.v));
          } else {
            chosenEdges.push(edge);
          }
          window.soundEngine.playClick();

          // Optimal MST cost is 1 + 2 + 3 = 6
          const sum = chosenEdges.reduce((s, e) => s + e.cost, 0);
          if (chosenEdges.length === 3 && sum === 6) {
            window.soundEngine.playCorrect();
            window.kapilController.speak("All stations connected at minimal cost of 6!", 'hyped');
            setTimeout(() => this.triggerWin(), 700);
          }
          render();
        };
      });
    };

    render();
  }

  /* ---------------- LEVEL 21-30: HIGH TIER ALGORITHMIC PUZZLES ---------------- */
  renderDijkstraPath(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Select the delivery corridor with the lowest total battery consumption:',
      [
        { text: 'A -> B -> D (Cost: 2 + 5 = 7)', correct: false },
        { text: 'A -> C -> D (Cost: 4 + 1 = 5) ★ OPTIMAL', correct: true },
        { text: 'A -> D direct (Cost: 9)', correct: false }
      ]
    );
  }

  renderMatrixIslands(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Survey the land matrix: How many separated connected land components exist?',
      [
        { text: '1 Single Continent', correct: false },
        { text: '2 Distinct Islands ★ CORRECT', correct: true },
        { text: '4 Scattered Islands', correct: false }
      ]
    );
  }

  renderTopologicalSort(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Choose the valid build order where prerequisites execute before dependents:',
      [
        { text: '1. Build Core -> 2. Attach Cooling -> 3. Mount Shield -> 4. Prime Ignition ★ VALID DAG', correct: true },
        { text: '1. Prime Ignition -> 2. Attach Cooling -> 3. Mount Shield -> 4. Build Core', correct: false }
      ]
    );
  }

  renderLruCache(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Cache is [A, B, C]. Data stream hits: A, then D. Which item is evicting as LEAST recently used?',
      [
        { text: 'Item B is evicted! ★ CORRECT', correct: true },
        { text: 'Item A is evicted!', correct: false },
        { text: 'Item C is evicted!', correct: false }
      ]
    );
  }

  renderBalancedBrackets(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Syntactic forcefield parser: Is the bracket sequence `{ [ ( ) ] }` balanced?',
      [
        { text: 'YES, perfectly balanced brackets! ★ VALID', correct: true },
        { text: 'NO, contains unmatched closures', correct: false }
      ]
    );
  }

  renderBitwiseXor(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Array is [4, 7, 2, 4, 7]. When all twins cancel via XOR (X ^ X = 0), who survives?',
      [
        { text: 'Surviving Unique Number is 2 ★ CORRECT', correct: true },
        { text: 'Surviving Number is 7', correct: false },
        { text: 'Surviving Number is 4', correct: false }
      ]
    );
  }

  renderTrappingRain(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Elevations: [3, 0, 2, 0, 4]. How many units of water fill the valleys between peaks?',
      [
        { text: '5 Water Units', correct: false },
        { text: '7 Water Units ★ CORRECT (3 + 1 + 3)', correct: true },
        { text: '9 Water Units', correct: false }
      ]
    );
  }

  renderTriePrefix(level) {
    this.renderMultiChoicePuzzle(
      level,
      'In a Trie dictionary, which words branch from prefix root "CA"?',
      [
        { text: 'CATAPULT, CASTLE, CANOPY ★ PREFIX MATCH', correct: true },
        { text: 'DRAGON, SHIELD', correct: false }
      ]
    );
  }

  renderAStar(level) {
    this.renderMultiChoicePuzzle(
      level,
      'Using A* score f(n) = g(n) + h(n), which navigation vector should the ship prioritize?',
      [
        { text: 'Direct Corridor: g=2, h=3 -> f(n) = 5 ★ OPTIMAL HEURISTIC', correct: true },
        { text: 'Detour North: g=4, h=6 -> f(n) = 10', correct: false },
        { text: 'South Drift: g=5, h=4 -> f(n) = 9', correct: false }
      ]
    );
  }

  renderGrandmasterFinale(level) {
    this.renderMultiChoicePuzzle(
      level,
      'GRANDMASTER GATE: You have applied Queue, Stack, Pointers, and Trees across 30 days! Claim your Crown:',
      [
        { text: '👑 UNLOCK ALGORITHMIC SINGULARITY & CLAIM GRANDMASTER STATUS ★', correct: true },
        { text: 'Return to start', correct: false }
      ]
    );
  }

  renderMultiChoicePuzzle(level, question, options) {
    this.container.innerHTML = `
      <div class="game-board">
        <div class="game-instruction-bar">
          <span>${question}</span>
          <span class="badge-tag">${level.dsaConcept}</span>
        </div>

        <div class="mc-scene">
          <div class="options-container">
            ${options.map((opt, i) => `
              <button class="mc-option-btn" data-correct="${opt.correct}">
                <span class="opt-num">${String.fromCharCode(65 + i)}.</span>
                <span class="opt-text">${opt.text}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.mc-option-btn').forEach(btn => {
      btn.onclick = () => {
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          window.soundEngine.playCorrect();
          btn.classList.add('btn-correct');
          window.kapilController.speak("Flawless algorithmic reasoning!", 'hyped');
          setTimeout(() => this.triggerWin(), 700);
        } else {
          window.soundEngine.playError();
          btn.classList.add('shake-anim');
          window.kapilController.speak("Not quite! Re-read the algorithmic properties!", 'puzzled');
          setTimeout(() => btn.classList.remove('shake-anim'), 400);
        }
      };
    });
  }

  renderGenericPuzzle(level) {
    this.renderMultiChoicePuzzle(
      level,
      level.prompt,
      [
        { text: 'Solve Algorithmic Condition ★', correct: true },
        { text: 'Alternative Path', correct: false }
      ]
    );
  }
}

window.gameEngine = new GameEngine();
