/**
 * SOUND ENGINE FOR LOGIC HUNT WITH KAPIL
 * Uses HTML5 Web Audio API for zero-latency, 100% offline retro-synth arcade sounds.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playTone(freq, type, duration, startVol = 0.15, endVol = 0.001) {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(startVol, now);
      gain.gain.exponentialRampToValueAtTime(endVol, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Audio playback failed silently
    }
  }

  playClick() {
    this.playTone(800, 'sine', 0.04, 0.1, 0.01);
  }

  playMove() {
    this.playTone(420, 'triangle', 0.06, 0.12, 0.01);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.12, 0.18, 0.01);
      }, idx * 70);
    });
  }

  playError() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    this.playTone(180, 'sawtooth', 0.18, 0.2, 0.01);
    setTimeout(() => {
      this.playTone(130, 'sawtooth', 0.25, 0.22, 0.01);
    }, 120);
  }

  playWinFanfare() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    // Victory fanfare melody
    const melody = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.50, d: 0.25 }, // C6
      { f: 880.00, d: 0.15 }, // A5
      { f: 1046.50, d: 0.45 } // C6 (long hold)
    ];

    let delay = 0;
    melody.forEach((note) => {
      setTimeout(() => {
        this.playTone(note.f, 'triangle', note.d, 0.22, 0.01);
      }, delay);
      delay += note.d * 1000 + 40;
    });
  }

  playBadgeEarned() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    const chords = [659.25, 830.61, 987.77, 1318.51]; // E major cosmic shimmer
    chords.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.4, 0.15, 0.005);
      }, i * 80);
    });
  }
}

window.soundEngine = new SoundEngine();
