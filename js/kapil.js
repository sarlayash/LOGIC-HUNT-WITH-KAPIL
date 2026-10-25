/**
 * KAPIL CHARACTER CONTROLLER & SVG ANIMATIONS
 * Mentors, guides, cheers, and reveals algorithmic secrets!
 */

class KapilController {
  constructor() {
    this.name = "Kapil";
    this.currentMood = 'happy';
    this.container = null;
    this.speechEl = null;
    this.avatarEl = null;
  }

  init(containerId, speechBubbleId) {
    this.container = document.getElementById(containerId);
    this.speechEl = document.getElementById(speechBubbleId);
    this.renderAvatar();
  }

  renderAvatar() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="kapil-character ${this.currentMood}" id="kapilSvgWrap">
        <svg viewBox="0 0 160 160" class="kapil-svg">
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fbd38d"/>
              <stop offset="100%" stop-color="#ed8936"/>
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6b46c1"/>
              <stop offset="100%" stop-color="#805ad5"/>
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1a202c"/>
              <stop offset="100%" stop-color="#2d3748"/>
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#00f2fe" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- Floating Aura Glow -->
          <circle cx="80" cy="80" r="74" fill="none" stroke="rgba(0,242,254,0.3)" stroke-width="2" stroke-dasharray="8 6" class="aura-spin"/>

          <!-- Body / Gamer Tech Hoodie -->
          <path d="M 40 148 C 42 118, 55 106, 80 106 C 105 106, 118 118, 120 148 Z" fill="url(#hoodieGrad)" />
          <path d="M 70 106 L 80 128 L 90 106" fill="none" stroke="#00f2fe" stroke-width="3" stroke-linecap="round"/>
          <!-- SYM Badge on Hoodie -->
          <rect x="73" y="132" width="14" height="8" rx="2" fill="#000" opacity="0.6"/>
          <text x="80" y="138" font-size="5" fill="#00f2fe" font-weight="900" text-anchor="middle" font-family="'Courier New', monospace">SYM</text>

          <!-- Head -->
          <circle cx="80" cy="74" r="34" fill="url(#skinGrad)" filter="url(#neonGlow)"/>

          <!-- Trendy Modern Hair -->
          <path d="M 46 72 C 45 44, 62 30, 82 30 C 102 30, 116 42, 114 68 C 108 50, 96 46, 80 46 C 64 46, 52 54, 46 72 Z" fill="url(#hairGrad)" />
          <path d="M 44 65 Q 48 48 60 42 Q 52 56 50 68" fill="#2d3748" />

          <!-- Dynamic Face Features based on Mood -->
          <g id="kapilFaceFeatures">
            ${this.getFaceSvg(this.currentMood)}
          </g>

          <!-- Cool Gamer Headset -->
          <path d="M 42 70 A 38 38 0 0 1 118 70" fill="none" stroke="#2d3748" stroke-width="6" stroke-linecap="round"/>
          <rect x="36" y="64" width="10" height="20" rx="4" fill="#00f2fe" filter="drop-shadow(0 0 4px #00f2fe)"/>
          <rect x="114" y="64" width="10" height="20" rx="4" fill="#00f2fe" filter="drop-shadow(0 0 4px #00f2fe)"/>
          <!-- Mic -->
          <path d="M 42 78 Q 42 96 60 96" fill="none" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
          <circle cx="62" cy="96" r="3" fill="#ff007f"/>
        </svg>
      </div>
    `;
  }

  getFaceSvg(mood) {
    switch (mood) {
      case 'thinking':
        return `
          <!-- Eyebrows raised/thinking -->
          <line x1="60" y1="62" x2="72" y2="60" stroke="#2d3748" stroke-width="3" stroke-linecap="round"/>
          <line x1="88" y1="58" x2="100" y2="62" stroke="#2d3748" stroke-width="3" stroke-linecap="round"/>
          <!-- Eyes looking sideways/up -->
          <circle cx="68" cy="72" r="3.5" fill="#1a202c"/>
          <circle cx="94" cy="70" r="3.5" fill="#1a202c"/>
          <!-- Puzzled small mouth -->
          <path d="M 74 88 Q 80 84 86 87" fill="none" stroke="#742a2a" stroke-width="3" stroke-linecap="round"/>
        `;
      case 'hyped':
      case 'celebrating':
        return `
          <!-- Happy arched eyes -->
          <path d="M 60 72 Q 67 65 74 72" fill="none" stroke="#1a202c" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M 86 72 Q 93 65 100 72" fill="none" stroke="#1a202c" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Big cheerful grin with teeth -->
          <path d="M 68 82 Q 80 98 92 82 Z" fill="#e53e3e"/>
          <path d="M 70 82 Q 80 88 90 82" fill="#fff"/>
          <!-- Blushing cheeks -->
          <circle cx="58" cy="80" r="5" fill="#ff7675" opacity="0.6"/>
          <circle cx="102" cy="80" r="5" fill="#ff7675" opacity="0.6"/>
        `;
      case 'puzzled':
        return `
          <line x1="60" y1="58" x2="72" y2="64" stroke="#2d3748" stroke-width="3" stroke-linecap="round"/>
          <line x1="88" y1="62" x2="100" y2="60" stroke="#2d3748" stroke-width="3" stroke-linecap="round"/>
          <circle cx="66" cy="72" r="3.5" fill="#1a202c"/>
          <circle cx="94" cy="72" r="3.5" fill="#1a202c"/>
          <path d="M 74 88 Q 78 92 86 86" fill="none" stroke="#742a2a" stroke-width="3" stroke-linecap="round"/>
        `;
      default: // 'happy'
        return `
          <!-- Friendly open eyes -->
          <circle cx="66" cy="72" r="4" fill="#1a202c"/>
          <circle cx="68" cy="70" r="1.5" fill="#ffffff"/>
          <circle cx="94" cy="72" r="4" fill="#1a202c"/>
          <circle cx="96" cy="70" r="1.5" fill="#ffffff"/>
          <!-- Eyebrows -->
          <line x1="60" y1="63" x2="72" y2="63" stroke="#2d3748" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="88" y1="63" x2="100" y2="63" stroke="#2d3748" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Smile -->
          <path d="M 72 84 Q 80 92 88 84" fill="none" stroke="#742a2a" stroke-width="3.5" stroke-linecap="round"/>
        `;
    }
  }

  setMood(mood) {
    this.currentMood = mood;
    const faceFeatures = document.getElementById('kapilFaceFeatures');
    const wrap = document.getElementById('kapilSvgWrap');
    if (faceFeatures) {
      faceFeatures.innerHTML = this.getFaceSvg(mood);
    }
    if (wrap) {
      wrap.className = `kapil-character ${mood}`;
    }
  }

  speak(text, mood = 'happy', autoRevert = 5000) {
    if (!this.speechEl) return;
    this.setMood(mood);
    this.speechEl.innerHTML = text;
    this.speechEl.classList.remove('bubble-pop');
    void this.speechEl.offsetWidth; // trigger reflow
    this.speechEl.classList.add('bubble-pop');

    if (autoRevert > 0) {
      clearTimeout(this._revertTimeout);
      this._revertTimeout = setTimeout(() => {
        if (this.currentMood !== 'happy') {
          this.setMood('happy');
        }
      }, autoRevert);
    }
  }
}

window.kapilController = new KapilController();
