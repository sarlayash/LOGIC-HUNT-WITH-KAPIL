/**
 * HIGH-RESOLUTION CANVAS BADGE & CERTIFICATE PNG GENERATOR
 * Renders and exports crisp PNGs for Level Badges and Official Certificates.
 */

class CertificateGenerator {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Generates a 600x600 PNG Badge for a specific completed level
   */
  generateBadge(learnerName, level, callback) {
    const width = 600;
    const height = 600;
    this.canvas.width = width;
    this.canvas.height = height;
    const ctx = this.ctx;

    // Background Cyber Shield Gradient
    const bgGrad = ctx.createRadialGradient(300, 300, 50, 300, 300, 300);
    bgGrad.addColorStop(0, '#1a103c');
    bgGrad.addColorStop(0.7, '#0b081d');
    bgGrad.addColorStop(1, '#05020c');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Glowing Outer Hexagonal Shield
    ctx.save();
    ctx.translate(300, 300);
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 24;

    this.drawPolygon(ctx, 0, 0, 240, 8);
    ctx.stroke();

    // Inner Ring
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 12;
    this.drawPolygon(ctx, 0, 0, 215, 8);
    ctx.stroke();
    ctx.restore();

    // SYM Productions Header Pill
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 15;
    this.roundRect(ctx, 160, 48, 280, 34, 17, true, false);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '3px';
    ctx.fillText('★ SYM PRODUCTIONS ★', 300, 70);

    // Badge Icon / Glyph
    ctx.font = '72px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(level.icon || '⚡', 300, 210);

    // Level Title & Tag
    ctx.fillStyle = '#00f2fe';
    ctx.font = '900 24px "Segoe UI", Roboto, sans-serif';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 10;
    ctx.fillText(`LEVEL ${level.id}: ${level.badgeTitle || level.title}`.toUpperCase(), 300, 275);
    ctx.shadowBlur = 0;

    // DSA Concept Tag
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.fillText(`[ MASTERY: ${level.dsaConcept} ]`, 300, 310);

    // Divider Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 340);
    ctx.lineTo(450, 340);
    ctx.stroke();

    // Learner Name
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px "Segoe UI", sans-serif';
    ctx.fillText('AWARDED TO PRO CODER', 300, 375);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px "Segoe UI", Roboto, sans-serif';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 8;
    ctx.fillText((learnerName || 'PIONEER').toUpperCase(), 300, 420);
    ctx.shadowBlur = 0;

    // Footer info
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px "Segoe UI", sans-serif';
    ctx.fillText('LOGIC HUNT WITH KAPIL', 300, 485);

    ctx.fillStyle = '#64748b';
    ctx.font = '12px "Courier New", monospace';
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    ctx.fillText(`VERIFIED ON: ${dateStr} • SYM-BADGE-${level.id}`, 300, 520);

    // Trigger download
    const filename = `${learnerName.replace(/\s+/g, '_')}_Badge_Level_${level.id}.png`;
    this.downloadCanvas(filename, callback);
  }

  /**
   * Generates a 1200x800 Official Landscape Certificate of Algorithmic Mastery
   */
  generateCertificate(learnerName, stats, callback) {
    const width = 1200;
    const height = 800;
    this.canvas.width = width;
    this.canvas.height = height;
    const ctx = this.ctx;

    // Dark luxury cyber background
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#0a091a');
    bgGrad.addColorStop(0.5, '#120f2e');
    bgGrad.addColorStop(1, '#080514');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Elaborate Gold Borders
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(42, 42, width - 84, height - 84);

    // Corner Accents
    this.drawCornerDecor(ctx, 30, 30);
    this.drawCornerDecor(ctx, width - 30, 30, true);
    this.drawCornerDecor(ctx, 30, height - 30, false, true);
    this.drawCornerDecor(ctx, width - 30, height - 30, true, true);

    // Top Brand Banner
    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '6px';
    ctx.fillText('★ SYM PRODUCTIONS PRESENTS ★', width / 2, 95);

    // Main Certificate Header
    ctx.fillStyle = '#ffd700';
    ctx.font = '900 48px "Segoe UI", Georgia, serif';
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 18;
    ctx.fillText('CERTIFICATE OF LOGIC MASTERY', width / 2, 165);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('LOGIC HUNT WITH KAPIL • 30-DAY ALGORITHMIC JOURNEY', width / 2, 210);

    // "This certifies that"
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 18px Georgia, serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('This prestigious certification is awarded to', width / 2, 280);

    // Learner Name
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 54px "Segoe UI", Roboto, sans-serif';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 15;
    ctx.fillText((learnerName || 'MASTER ALGORIST').toUpperCase(), width / 2, 360);
    ctx.shadowBlur = 0;

    // Underline for Name
    const nameWidth = ctx.measureText((learnerName || 'MASTER ALGORIST').toUpperCase()).width;
    const underlineGrad = ctx.createLinearGradient(width / 2 - nameWidth / 2 - 40, 0, width / 2 + nameWidth / 2 + 40, 0);
    underlineGrad.addColorStop(0, 'rgba(0, 242, 254, 0)');
    underlineGrad.addColorStop(0.5, '#ffd700');
    underlineGrad.addColorStop(1, 'rgba(0, 242, 254, 0)');
    ctx.strokeStyle = underlineGrad;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - nameWidth / 2 - 50, 385);
    ctx.lineTo(width / 2 + nameWidth / 2 + 50, 385);
    ctx.stroke();

    // Body Text
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '19px "Segoe UI", sans-serif';
    ctx.fillText('for exceptional problem-solving, critical algorithmic thinking, and mastering foundational', width / 2, 435);
    ctx.fillText('Data Structures & Algorithms concepts through interactive simulation and gaming logic.', width / 2, 470);

    // Achievement Stats Bar
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    this.roundRect(ctx, width / 2 - 320, 505, 640, 60, 10, true, false);
    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 16px "Courier New", monospace';
    const levelsCompleted = stats.completedLevels || stats.unlockedLevels || 1;
    ctx.fillText(`LEVELS CLEARED: ${levelsCompleted}/30  •  LOGIC SCORE: ${stats.score || (levelsCompleted * 100)}  •  BADGES: ${levelsCompleted}`, width / 2, 542);

    // Gold Seal on the left
    this.drawGoldSeal(ctx, 220, 660);

    // Kapil's Signature on the right
    this.drawKapilSignature(ctx, 980, 660);

    // Footer Verification
    ctx.fillStyle = '#64748b';
    ctx.font = '12px "Courier New", monospace';
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const certCode = 'SYM-LHK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    ctx.fillText(`ISSUED ON: ${dateStr}   |   SERIAL ID: ${certCode}   |   OFFICIAL SYM PRODUCTIONS RELEASE`, width / 2, 755);

    // Trigger download
    const filename = `${learnerName.replace(/\s+/g, '_')}_Official_Logic_Hunt_Certificate.png`;
    this.downloadCanvas(filename, callback);
  }

  drawPolygon(ctx, x, y, radius, sides) {
    if (sides < 3) return;
    ctx.beginPath();
    const a = (Math.PI * 2) / sides;
    ctx.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));
    for (let i = 1; i < sides; i++) {
      ctx.lineTo(x + radius * Math.cos(a * i), y + radius * Math.sin(a * i));
    }
    ctx.closePath();
  }

  drawCornerDecor(ctx, x, y, flipX = false, flipY = false) {
    ctx.save();
    ctx.translate(x, y);
    if (flipX) ctx.scale(-1, 1);
    if (flipY) ctx.scale(1, -1);
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(0, 0, 30, 4);
    ctx.fillRect(0, 0, 4, 30);
    ctx.fillRect(8, 8, 16, 2);
    ctx.fillRect(8, 8, 2, 16);
    ctx.restore();
  }

  drawGoldSeal(ctx, cx, cy) {
    ctx.save();
    // Starburst Seal
    ctx.translate(cx, cy);
    ctx.fillStyle = '#d4af37';
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 12;

    const points = 24;
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? 55 : 46;
      const angle = (i * Math.PI) / points;
      ctx.lineTo(r * Math.cos(angle), r * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // Inner Circle
    ctx.fillStyle = '#0f0c29';
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 9px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SYM SEAL', 0, -12);
    ctx.font = '900 13px sans-serif';
    ctx.fillText('VERIFIED', 0, 4);
    ctx.font = 'bold 8px "Courier New", monospace';
    ctx.fillText('MASTER', 0, 18);
    ctx.restore();
  }

  drawKapilSignature(ctx, cx, cy) {
    ctx.save();
    ctx.translate(cx, cy);

    // Calligraphic Signature simulation
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-70, -10);
    ctx.bezierCurveTo(-50, -40, -40, 15, -20, -15);
    ctx.bezierCurveTo(-10, -35, 10, -5, 30, -25);
    ctx.bezierCurveTo(40, -10, 60, -30, 75, -5);
    ctx.stroke();

    // Line under signature
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-80, 10);
    ctx.lineTo(80, 10);
    ctx.stroke();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 15px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Kapil', 0, 28);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '12px "Courier New", monospace';
    ctx.fillText('DIRECTOR & MENTOR', 0, 45);
    ctx.fillText('SYM PRODUCTIONS', 0, 60);

    ctx.restore();
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  downloadCanvas(filename, callback) {
    try {
      this.canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        if (callback) callback(true);
      }, 'image/png');
    } catch (e) {
      console.error('Canvas export error:', e);
      if (callback) callback(false, e);
    }
  }
}

window.certificateGenerator = new CertificateGenerator();
