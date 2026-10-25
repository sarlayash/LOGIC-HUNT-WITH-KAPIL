/**
 * FORTUNE 500 STANDARDS CANVAS BADGE & CERTIFICATE PNG GENERATOR
 * Ultra-high-resolution, perfectly-proportioned digital credentials.
 * Mathematical zero-spillover auto-fitting, luxury square design, and guilloche accents.
 */

class CertificateGenerator {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Helper: Fits and renders text within a strict maxWidth boundary.
   * Decrements font size smoothly if text exceeds maxWidth.
   */
  drawFittedText(ctx, text, x, y, maxWidth, baseSize, weight, fontFam, color) {
    let size = baseSize;
    ctx.font = `${weight} ${size}px ${fontFam}`;
    let measured = ctx.measureText(text).width;

    while (measured > maxWidth && size > 11) {
      size -= 1;
      ctx.font = `${weight} ${size}px ${fontFam}`;
      measured = ctx.measureText(text).width;
    }

    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    return size;
  }

  /**
   * Formats long DSA concept strings into concise, prestigious badge tags.
   */
  formatConceptTag(concept) {
    if (!concept) return 'Algorithmic Logic';
    // If concept contains parenthesis like "Stack (LIFO - Last In, First Out)", keep "Stack (LIFO)"
    const match = concept.match(/^([^(]+)\(([^)-]+)/);
    if (match) {
      return `${match[1].trim()} (${match[2].trim()})`;
    }
    // Cut off if too long
    if (concept.length > 32) {
      return concept.substring(0, 30) + '...';
    }
    return concept;
  }

  /**
   * Generates a Fortune 500-standard 800x800 SQUARE PNG Digital Badge
   */
  generateBadge(learnerName, level, callback) {
    const width = 800;
    const height = 800;
    this.canvas.width = width;
    this.canvas.height = height;
    const ctx = this.ctx;
    const cx = 400;
    const cy = 400;

    // 1. Deep Obsidian / Titanium Royal Background
    const bgGrad = ctx.createRadialGradient(cx, cy, 60, cx, cy, 460);
    bgGrad.addColorStop(0, '#130f2e');
    bgGrad.addColorStop(0.5, '#0a081a');
    bgGrad.addColorStop(1, '#05030e');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Micro Security Ticks along Square Perimeter
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.12)';
    ctx.lineWidth = 1;
    // Top and bottom ticks
    for (let x = 70; x <= 730; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 50);
      ctx.lineTo(x, 58);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, 742);
      ctx.lineTo(x, 750);
      ctx.stroke();
    }
    // Left and right ticks
    for (let y = 70; y <= 730; y += 16) {
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.lineTo(58, y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(742, y);
      ctx.lineTo(750, y);
      ctx.stroke();
    }
    ctx.restore();

    // 3. SQUARE SHAPE BADGE: Outer Glowing Border (Squircle with 36px radius)
    ctx.save();
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 5;
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 24;
    this.roundRect(ctx, 42, 42, 716, 716, 36, false, true);

    // Inner Polished Gold Frame (radius 28px)
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 10;
    this.roundRect(ctx, 58, 58, 684, 684, 28, false, true);

    // Secondary subtle hairline frame
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.shadowBlur = 0;
    this.roundRect(ctx, 68, 68, 664, 664, 24, false, true);

    // 4. Square Corner Accents (Gold Guilloche Brackets)
    this.drawSquareCorner(ctx, 74, 74, 1, 1);
    this.drawSquareCorner(ctx, 726, 74, -1, 1);
    this.drawSquareCorner(ctx, 74, 726, 1, -1);
    this.drawSquareCorner(ctx, 726, 726, -1, -1);
    ctx.restore();

    // 5. SYM Productions Luxury Header Ribbon
    ctx.save();
    const ribbonY = 106;
    const ribbonW = 300;
    const ribbonH = 34;
    const ribbonGrad = ctx.createLinearGradient(cx - ribbonW / 2, 0, cx + ribbonW / 2, 0);
    ribbonGrad.addColorStop(0, '#ff007f');
    ribbonGrad.addColorStop(0.5, '#805ad5');
    ribbonGrad.addColorStop(1, '#ff007f');

    ctx.fillStyle = ribbonGrad;
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 16;
    this.roundRect(ctx, cx - ribbonW / 2, ribbonY - ribbonH / 2, ribbonW, ribbonH, 17, true, false);

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, cx - ribbonW / 2, ribbonY - ribbonH / 2, ribbonW, ribbonH, 17, false, true);

    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '3px';
    ctx.fillText('★ SYM PRODUCTIONS ★', cx, ribbonY);
    ctx.restore();

    // 6. Central Holographic Medallion Circle (Icon Bezel)
    const orbY = 216;
    const orbRadius = 60;

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, orbY, orbRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#151136';
    ctx.fill();
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 16;
    ctx.stroke();

    // Inner gold hairline
    ctx.beginPath();
    ctx.arc(cx, orbY, orbRadius - 6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 0;
    ctx.stroke();

    // Level Icon Glyph
    ctx.font = '54px "Segoe UI Emoji", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(level.icon || '⚡', cx, orbY + 2);
    ctx.restore();

    // 7. Category Micro-Track
    const stageStr = `STAGE ${level.id < 10 ? '0' + level.id : level.id} • ALGORITHMIC MASTERY`;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 11px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2.5px';
    ctx.fillText(stageStr, cx, 308);

    // 8. Badge Title (Wide, Generous Square Geometry)
    const badgeTitleText = (level.badgeTitle || level.title || `Level ${level.id}`).toUpperCase();
    ctx.save();
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 10;
    this.drawFittedText(
      ctx,
      badgeTitleText,
      cx,
      350,
      560, // square shape gives generous 560px width!
      28,
      '900',
      '"Segoe UI", Roboto, sans-serif',
      '#ffffff'
    );
    ctx.restore();

    // 9. Concept Pill Box (Neat & Centered)
    const cleanConcept = this.formatConceptTag(level.dsaConcept);
    const conceptText = `MASTERY: ${cleanConcept}`;
    ctx.font = 'bold 13px "Courier New", monospace';
    const conceptWidth = Math.min(ctx.measureText(conceptText).width + 36, 520);
    const pillY = 396;

    ctx.save();
    ctx.fillStyle = 'rgba(0, 242, 254, 0.08)';
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, cx - conceptWidth / 2, pillY - 14, conceptWidth, 28, 14, true, true);

    this.drawFittedText(
      ctx,
      conceptText,
      cx,
      pillY,
      conceptWidth - 16,
      13,
      'bold',
      '"Courier New", monospace',
      '#ffd700'
    );
    ctx.restore();

    // 10. Luxury Ornamental Divider (Hairline with Diamond)
    ctx.save();
    const dividerY = 440;
    const dividerGrad = ctx.createLinearGradient(cx - 200, 0, cx + 200, 0);
    dividerGrad.addColorStop(0, 'rgba(255, 215, 0, 0)');
    dividerGrad.addColorStop(0.5, '#ffd700');
    dividerGrad.addColorStop(1, 'rgba(255, 215, 0, 0)');

    ctx.strokeStyle = dividerGrad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - 180, dividerY);
    ctx.lineTo(cx - 16, dividerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + 16, dividerY);
    ctx.lineTo(cx + 180, dividerY);
    ctx.stroke();

    // Diamond Accent
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(cx, dividerY - 5);
    ctx.lineTo(cx + 6, dividerY);
    ctx.lineTo(cx, dividerY + 5);
    ctx.lineTo(cx - 6, dividerY);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 11. Recipient Label
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2.5px';
    ctx.fillText('CONFERRED UPON CANDIDATE', cx, 474);

    // 12. Recipient Name (Auto-Fitted, Never Spills)
    const recipientName = (learnerName || 'PIONEER').toUpperCase();
    ctx.save();
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 12;
    this.drawFittedText(
      ctx,
      recipientName,
      cx,
      520,
      540, // generous square width
      36,
      '900',
      '"Segoe UI", Roboto, sans-serif',
      '#ffffff'
    );
    ctx.restore();

    // 13. Program Identifier
    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 13px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText('LOGIC HUNT WITH KAPIL', cx, 568);

    // 14. Security Verification Capsule
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const footerText = `VERIFIED CREDENTIAL • ID: SYM-LHK-${level.id < 10 ? '0' + level.id : level.id} • ${dateStr}`;
    const footBoxW = 460;
    const footBoxH = 26;
    const footY = 614;

    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, cx - footBoxW / 2, footY - footBoxH / 2, footBoxW, footBoxH, 13, true, true);

    this.drawFittedText(
      ctx,
      footerText,
      cx,
      footY,
      footBoxW - 20,
      10.5,
      'bold',
      '"Courier New", monospace',
      '#94a3b8'
    );
    ctx.restore();

    // Trigger high-res PNG download
    const filename = `${learnerName.replace(/\s+/g, '_')}_Badge_Level_${level.id}.png`;
    this.downloadCanvas(filename, callback);
  }

  drawSquareCorner(ctx, x, y, scaleX, scaleY) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scaleX, scaleY);
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(0, 0, 18, 3);
    ctx.fillRect(0, 0, 3, 18);
    ctx.restore();
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
    const cx = width / 2;

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
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '6px';
    ctx.fillText('★ SYM PRODUCTIONS PRESENTS ★', cx, 95);

    // Main Certificate Header
    ctx.fillStyle = '#ffd700';
    ctx.font = '900 46px "Segoe UI", Georgia, serif';
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 18;
    ctx.fillText('CERTIFICATE OF LOGIC MASTERY', cx, 165);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 19px "Segoe UI", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('LOGIC HUNT WITH KAPIL • 30-DAY ALGORITHMIC JOURNEY', cx, 210);

    // "This certifies that"
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 18px Georgia, serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('This prestigious certification is awarded to', cx, 275);

    // Learner Name (Auto-fitted, never spills over)
    const studentName = (learnerName || 'MASTER ALGORIST').toUpperCase();
    ctx.save();
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 16;
    this.drawFittedText(ctx, studentName, cx, 355, 880, 52, '900', '"Segoe UI", Roboto, sans-serif', '#ffffff');
    ctx.restore();

    // Underline for Name
    ctx.font = '900 48px "Segoe UI", sans-serif';
    const nameWidth = Math.min(ctx.measureText(studentName).width, 880);
    const underlineGrad = ctx.createLinearGradient(cx - nameWidth / 2 - 40, 0, cx + nameWidth / 2 + 40, 0);
    underlineGrad.addColorStop(0, 'rgba(0, 242, 254, 0)');
    underlineGrad.addColorStop(0.5, '#ffd700');
    underlineGrad.addColorStop(1, 'rgba(0, 242, 254, 0)');
    ctx.strokeStyle = underlineGrad;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - nameWidth / 2 - 40, 385);
    ctx.lineTo(cx + nameWidth / 2 + 40, 385);
    ctx.stroke();

    // Body Text
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '18px "Segoe UI", sans-serif';
    ctx.fillText('for exceptional problem-solving, critical algorithmic thinking, and mastering foundational', cx, 435);
    ctx.fillText('Data Structures & Algorithms concepts through interactive simulation and gaming logic.', cx, 468);

    // Achievement Stats Bar
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    this.roundRect(ctx, cx - 320, 505, 640, 56, 10, true, false);
    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 15px "Courier New", monospace';
    const levelsCompleted = stats.completedLevels || stats.unlockedLevels || 1;
    ctx.fillText(`LEVELS CLEARED: ${levelsCompleted}/30  •  LOGIC SCORE: ${stats.score || (levelsCompleted * 100)}  •  BADGES: ${levelsCompleted}`, cx, 533);

    // Gold Seal on the left
    this.drawGoldSeal(ctx, 220, 660);

    // Kapil's Signature on the right
    this.drawKapilSignature(ctx, 980, 660);

    // Footer Verification
    ctx.fillStyle = '#64748b';
    ctx.font = '12px "Courier New", monospace';
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const certCode = 'SYM-LHK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    ctx.fillText(`ISSUED ON: ${dateStr}   |   SERIAL ID: ${certCode}   |   OFFICIAL SYM PRODUCTIONS RELEASE`, cx, 755);

    // Trigger download
    const filename = `${learnerName.replace(/\s+/g, '_')}_Official_Logic_Hunt_Certificate.png`;
    this.downloadCanvas(filename, callback);
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
    ctx.textBaseline = 'middle';
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

    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-70, -10);
    ctx.bezierCurveTo(-50, -40, -40, 15, -20, -15);
    ctx.bezierCurveTo(-10, -35, 10, -5, 30, -25);
    ctx.bezierCurveTo(40, -10, 60, -30, 75, -5);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-80, 10);
    ctx.lineTo(80, 10);
    ctx.stroke();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 15px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
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
