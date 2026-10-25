/**
 * CORE APPLICATION CONTROLLER FOR LOGIC HUNT WITH KAPIL
 * Handles user profile, daily level progression, lesson reveal popups, badges, reset and logoff.
 */

class AppController {
  constructor() {
    this.userName = '';
    this.currentLevelId = 1;
    this.unlockedLevels = [1];
    this.completedLevels = [];
    this.soundEnabled = true;
    this.devUnlockAll = false;
  }

  init() {
    this.loadState();
    window.soundEngine.init();
    window.kapilController.init('kapilAvatarContainer', 'kapilSpeechBubble');

    this.bindEvents();
    this.checkUserOnboarding();
  }

  loadState() {
    try {
      const savedName = localStorage.getItem('lhk_username');
      if (savedName) this.userName = savedName;

      const savedUnlocked = localStorage.getItem('lhk_unlocked');
      if (savedUnlocked) this.unlockedLevels = JSON.parse(savedUnlocked);

      const savedCompleted = localStorage.getItem('lhk_completed');
      if (savedCompleted) this.completedLevels = JSON.parse(savedCompleted);

      const savedLevel = localStorage.getItem('lhk_current_level');
      if (savedLevel) this.currentLevelId = parseInt(savedLevel);
    } catch (e) {
      console.warn('Could not read localStorage:', e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('lhk_username', this.userName);
      localStorage.setItem('lhk_unlocked', JSON.stringify(this.unlockedLevels));
      localStorage.setItem('lhk_completed', JSON.stringify(this.completedLevels));
      localStorage.setItem('lhk_current_level', this.currentLevelId.toString());
    } catch (e) {
      console.warn('Could not write localStorage:', e);
    }
  }

  checkUserOnboarding() {
    const onboardingModal = document.getElementById('onboardingModal');
    if (!this.userName) {
      onboardingModal.classList.add('modal-active');
    } else {
      onboardingModal.classList.remove('modal-active');
      this.updateHud();
      this.startLevel(this.currentLevelId);
    }
  }

  bindEvents() {
    // Onboarding Form Submit
    const btnStart = document.getElementById('btnStartJourney');
    const nameInput = document.getElementById('learnerNameInput');

    if (btnStart && nameInput) {
      btnStart.onclick = () => {
        const val = nameInput.value.trim();
        if (val.length < 2) {
          nameInput.classList.add('shake-anim');
          setTimeout(() => nameInput.classList.remove('shake-anim'), 400);
          return;
        }
        this.userName = val;
        this.saveState();
        document.getElementById('onboardingModal').classList.remove('modal-active');
        window.soundEngine.playCorrect();
        this.updateHud();
        window.kapilController.speak(`Welcome aboard, ${this.userName}! I am Kapil. Let's conquer Day 1!`, 'hyped', 8000);
        this.startLevel(1);
      };

      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btnStart.click();
      });
    }

    // Sound toggle
    const soundBtn = document.getElementById('btnToggleSound');
    if (soundBtn) {
      soundBtn.onclick = () => {
        const muted = window.soundEngine.toggleMute();
        soundBtn.innerHTML = muted ? '🔇 Sound Off' : '🔊 Sound On';
      };
    }

    // Map Button
    const mapBtn = document.getElementById('btnOpenMap');
    const mapModal = document.getElementById('levelMapModal');
    const closeMapBtn = document.getElementById('btnCloseMap');

    if (mapBtn && mapModal) {
      mapBtn.onclick = () => {
        this.renderLevelMap();
        mapModal.classList.add('modal-active');
        window.soundEngine.playClick();
      };
    }

    if (closeMapBtn && mapModal) {
      closeMapBtn.onclick = () => {
        mapModal.classList.remove('modal-active');
        window.soundEngine.playClick();
      };
    }

    // Certificate Button
    const certBtn = document.getElementById('btnOpenCert');
    const certModal = document.getElementById('certModal');
    const closeCertBtn = document.getElementById('btnCloseCert');
    const downloadCertBtn = document.getElementById('btnDownloadCert');

    if (certBtn && certModal) {
      certBtn.onclick = () => {
        this.updateCertModalView();
        certModal.classList.add('modal-active');
        window.soundEngine.playClick();
      };
    }

    if (closeCertBtn && certModal) {
      closeCertBtn.onclick = () => {
        certModal.classList.remove('modal-active');
        window.soundEngine.playClick();
      };
    }

    if (downloadCertBtn) {
      downloadCertBtn.onclick = () => {
        downloadCertBtn.disabled = true;
        downloadCertBtn.innerHTML = 'Generating PNG...';
        window.soundEngine.playBadgeEarned();
        window.certificateGenerator.generateCertificate(
          this.userName,
          {
            completedLevels: this.completedLevels.length,
            unlockedLevels: this.unlockedLevels.length,
            score: this.completedLevels.length * 150
          },
          () => {
            downloadCertBtn.disabled = false;
            downloadCertBtn.innerHTML = '📥 Download Official Certificate (PNG)';
          }
        );
      };
    }

    // Reset Progress Button & Modal Handlers
    const resetBtn = document.getElementById('btnResetProgress');
    const resetModal = document.getElementById('resetConfirmModal');
    const confirmResetBtn = document.getElementById('btnConfirmReset');
    const cancelResetBtn = document.getElementById('btnCancelReset');

    if (resetBtn && resetModal) {
      resetBtn.onclick = () => {
        resetModal.classList.add('modal-active');
        window.soundEngine.playClick();
      };
    }

    if (cancelResetBtn && resetModal) {
      cancelResetBtn.onclick = () => {
        resetModal.classList.remove('modal-active');
        window.soundEngine.playClick();
      };
    }

    if (confirmResetBtn && resetModal) {
      confirmResetBtn.onclick = () => {
        resetModal.classList.remove('modal-active');
        this.resetProgress();
      };
    }

    // Log Off Button Handler
    const logoffBtn = document.getElementById('btnLogoff');
    if (logoffBtn) {
      logoffBtn.onclick = () => {
        this.logoff();
      };
    }

    // Dev unlock all toggle
    const devToggle = document.getElementById('devUnlockToggle');
    if (devToggle) {
      devToggle.onchange = (e) => {
        this.devUnlockAll = e.target.checked;
        this.renderLevelMap();
        window.kapilController.speak(
          this.devUnlockAll 
            ? "Explorer Mode Active! All 30 levels are unlocked for inspection!" 
            : "Daily Mode Active! One level at a time!",
          'hyped'
        );
      };
    }

    // Initialize Game Engine Callback
    window.gameEngine.init('gameArena', (level) => {
      this.handleLevelWin(level);
    });

    // Close Lesson Reveal Modal
    const btnNextLevel = document.getElementById('btnNextLevel');
    const btnDownloadBadge = document.getElementById('btnDownloadBadge');
    const lessonModal = document.getElementById('lessonRevealModal');

    if (btnNextLevel) {
      btnNextLevel.onclick = () => {
        lessonModal.classList.remove('modal-active');
        const nextId = this.currentLevelId + 1;
        if (nextId <= 30) {
          this.startLevel(nextId);
        } else {
          // Completed all 30 levels!
          certModal.classList.add('modal-active');
        }
      };
    }

    if (btnDownloadBadge) {
      btnDownloadBadge.onclick = () => {
        const level = window.GAME_LEVELS.find(l => l.id === this.currentLevelId);
        if (!level) return;
        btnDownloadBadge.disabled = true;
        btnDownloadBadge.innerHTML = 'Rendering Badge...';
        window.soundEngine.playBadgeEarned();
        window.certificateGenerator.generateBadge(this.userName, level, () => {
          btnDownloadBadge.disabled = false;
          btnDownloadBadge.innerHTML = '🎖️ Downloaded! Download Again?';
        });
      };
    }
  }

  resetProgress() {
    this.currentLevelId = 1;
    this.unlockedLevels = [1];
    this.completedLevels = [];
    this.saveState();
    this.updateHud();
    window.soundEngine.playMove();
    window.kapilController.speak("Progress reset! We are back at Day 1 with a clean slate!", 'happy', 6000);
    this.startLevel(1);
  }

  logoff() {
    this.userName = '';
    this.currentLevelId = 1;
    this.unlockedLevels = [1];
    this.completedLevels = [];
    try {
      localStorage.removeItem('lhk_username');
      localStorage.removeItem('lhk_unlocked');
      localStorage.removeItem('lhk_completed');
      localStorage.removeItem('lhk_current_level');
    } catch (e) {
      console.warn(e);
    }
    this.updateHud();
    const nameInput = document.getElementById('learnerNameInput');
    if (nameInput) nameInput.value = '';
    document.getElementById('onboardingModal').classList.add('modal-active');
    window.soundEngine.playClick();
    window.kapilController.speak("Logged off! Enter a learner name to begin a new journey!", 'happy', 6000);
  }

  updateHud() {
    const nameEl = document.getElementById('hudLearnerName');
    const levelEl = document.getElementById('hudCurrentLevel');
    const badgesCountEl = document.getElementById('hudBadgesCount');

    if (nameEl) nameEl.textContent = this.userName || 'Pioneer';
    if (levelEl) levelEl.textContent = `DAY ${this.currentLevelId}: LEVEL ${this.currentLevelId}`;
    if (badgesCountEl) badgesCountEl.textContent = `${this.completedLevels.length} Badges`;
  }

  startLevel(levelId) {
    const level = window.GAME_LEVELS.find(l => l.id === levelId);
    if (!level) return;

    this.currentLevelId = levelId;
    this.saveState();
    this.updateHud();

    // Update Header Level Info
    const bannerTitle = document.getElementById('levelBannerTitle');
    const bannerPrompt = document.getElementById('levelBannerPrompt');
    if (bannerTitle) bannerTitle.innerHTML = `<span class="lvl-icon">${level.icon}</span> DAY ${level.day}: ${level.title}`;
    if (bannerPrompt) bannerPrompt.textContent = level.prompt;

    window.gameEngine.loadLevel(level);
  }

  handleLevelWin(level) {
    if (!this.completedLevels.includes(level.id)) {
      this.completedLevels.push(level.id);
    }
    const nextLevelId = level.id + 1;
    if (nextLevelId <= 30 && !this.unlockedLevels.includes(nextLevelId)) {
      this.unlockedLevels.push(nextLevelId);
    }
    this.saveState();
    this.updateHud();

    // Trigger Confetti effect
    this.launchConfetti();

    // Populate Lesson Reveal Modal
    const lessonModal = document.getElementById('lessonRevealModal');
    const revealName = document.getElementById('revealLearnerName');
    const revealConcept = document.getElementById('revealConceptTitle');
    const revealAha = document.getElementById('revealAhaText');
    const revealCode = document.getElementById('revealCodeBlock');
    const revealUsage = document.getElementById('revealTechUsage');

    if (revealName) revealName.textContent = this.userName;
    if (revealConcept) revealConcept.textContent = `HIDDEN CONCEPT: ${level.lessonReveal.conceptName}`;
    if (revealAha) revealAha.textContent = level.lessonReveal.ahaMoment;
    if (revealCode) revealCode.textContent = level.lessonReveal.codeSnippet;
    if (revealUsage) revealUsage.textContent = level.lessonReveal.techUsage;

    lessonModal.classList.add('modal-active');
  }

  launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * 5 + 3,
      size: Math.random() * 8 + 4,
      color: ['#00f2fe', '#ffd700', '#ff007f', '#10b981', '#ffffff'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    }));

    let frames = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frames++;
      if (frames < 120) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    animate();
  }

  renderLevelMap() {
    const mapContainer = document.getElementById('levelMapGrid');
    if (!mapContainer) return;

    mapContainer.innerHTML = window.GAME_LEVELS.map(level => {
      const isCompleted = this.completedLevels.includes(level.id);
      const isUnlocked = this.devUnlockAll || this.unlockedLevels.includes(level.id);
      const isCurrent = this.currentLevelId === level.id;

      let statusClass = 'locked';
      if (isCompleted) statusClass = 'completed';
      else if (isUnlocked) statusClass = 'unlocked';

      return `
        <div class="map-node ${statusClass} ${isCurrent ? 'current' : ''}" data-id="${level.id}">
          <div class="node-day">DAY ${level.day}</div>
          <div class="node-icon">${isUnlocked ? level.icon : '🔒'}</div>
          <div class="node-title">${level.title}</div>
          <div class="node-status-badge">
            ${isCompleted ? '✓ CLEARED' : isUnlocked ? '▶ PLAY' : 'DAY LOCKED'}
          </div>
        </div>
      `;
    }).join('');

    mapContainer.querySelectorAll('.map-node').forEach(node => {
      node.onclick = () => {
        const id = parseInt(node.getAttribute('data-id'));
        const isUnlocked = this.devUnlockAll || this.unlockedLevels.includes(id);
        if (isUnlocked) {
          document.getElementById('levelMapModal').classList.remove('modal-active');
          this.startLevel(id);
        } else {
          window.soundEngine.playError();
          window.kapilController.speak("That day is locked! Concur the previous days first or enable Explorer Mode!", 'puzzled');
        }
      };
    });
  }

  updateCertModalView() {
    const nameEl = document.getElementById('certModalName');
    const statsEl = document.getElementById('certModalStats');
    if (nameEl) nameEl.textContent = this.userName;
    if (statsEl) {
      statsEl.innerHTML = `
        <span>Levels Conquered: <b>${this.completedLevels.length}/30</b></span>
        <span>Badges Earned: <b>${this.completedLevels.length}</b></span>
        <span>Algorithmic Logic Points: <b>${this.completedLevels.length * 150} pts</b></span>
      `;
    }
  }
}

window.appController = new AppController();
window.addEventListener('DOMContentLoaded', () => {
  window.appController.init();
});
