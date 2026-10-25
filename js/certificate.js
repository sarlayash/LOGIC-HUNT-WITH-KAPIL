/**
 * FORTUNE 500 STANDARDS CANVAS BADGE & CERTIFICATE PNG GENERATOR
 * Ultra-high-resolution, perfectly-proportioned digital credentials.
 * Square shape badges and elegant white certificates with colorful ribbons and borders.
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
    const match = concept.match(/^([^(]+)\(([^)-]+)/);
    if (match) {
      return `${match[1].trim()} (${match[2].trim()})`;
    }
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

    ctx.beginPath();
    ctx.arc(cx, orbY, orbRadius - 6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 0;
    ctx.stroke();

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

    // 8. Badge Title
    const badgeTitleText = (level.badgeTitle || level.title || `Level ${level.id}`).toUpperCase();
    ctx.save();
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 10;
    this.drawFittedText(
      ctx,
      badgeTitleText,
      cx,
      350,
      560,
      28,
      '900',
      '"Segoe UI", Roboto, sans-serif',
      '#ffffff'
    );
    ctx.restore();

    // 9. Concept Pill Box
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

    // 10. Luxury Ornamental Divider
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

    // 12. Recipient Name
    const recipientName = (learnerName || 'PIONEER').toUpperCase();
    ctx.save();
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 12;
    this.drawFittedText(
      ctx,
      recipientName,
      cx,
      520,
      540,
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
   * Generates a 1200x800 Official Landscape Certificate with PURE WHITE BACKGROUND,
   * COLORFUL TEXT, COLORFUL IRIDESCENT BORDERS & COLORFUL SILK ROSETTE RIBBONS.
   */
  generateCertificate(learnerName, stats, callback) {
    const width = 1200;
    const height = 800;
    this.canvas.width = width;
    this.canvas.height = height;
    const ctx = this.ctx;
    const cx = width / 2;

    // 1. PURE LUMINOUS WHITE CANVAS WITH DELICATE IVORY RADIAL GLOW
    const bgGrad = ctx.createRadialGradient(cx, height / 2, 100, cx, height / 2, 700);
    bgGrad.addColorStop(0, '#ffffff');
    bgGrad.addColorStop(0.7, '#fdfdff');
    bgGrad.addColorStop(1, '#f8faff');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle guilloche security concentric arcs in background
    ctx.save();
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)';
    ctx.lineWidth = 1;
    for (let r = 100; r < 600; r += 40) {
      ctx.beginPath();
      ctx.arc(cx, 400, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // 2. VIBRANT MULTI-COLOR IRIDESCENT OUTER BORDER (Indigo -> Cyan -> Emerald -> Amber -> Rose)
    const borderGrad = ctx.createLinearGradient(30, 30, width - 30, height - 30);
    borderGrad.addColorStop(0, '#4f46e5');
    borderGrad.addColorStop(0.25, '#06b6d4');
    borderGrad.addColorStop(0.5, '#10b981');
    borderGrad.addColorStop(0.75, '#f59e0b');
    borderGrad.addColorStop(1, '#ec4899');

    ctx.save();
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 8;
    this.roundRect(ctx, 28, 28, width - 56, height - 56, 16, false, true);

    // Inner Polished Gold Hairline Frame
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    this.roundRect(ctx, 42, 42, width - 84, height - 84, 12, false, true);

    // Third Delicate Sapphire Inset Hairline
    ctx.strokeStyle = 'rgba(37, 99, 235, 0.25)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, 48, 48, width - 96, height - 96, 10, false, true);

    // Ornate Colorful Corner Ornaments
    this.drawCertCornerOrnament(ctx, 42, 42, 1, 1);
    this.drawCertCornerOrnament(ctx, width - 42, 42, -1, 1);
    this.drawCertCornerOrnament(ctx, 42, height - 42, 1, -1);
    this.drawCertCornerOrnament(ctx, width - 42, height - 42, -1, -1);
    ctx.restore();

    // 3. COLORFUL TOP HEADER RIBBON (Ruby-Rose Ceremonial Silk Banner)
    const ribbonW = 380;
    const ribbonH = 40;
    const ribbonY = 94;

    ctx.save();
    // Ribbon shadow
    ctx.shadowColor = 'rgba(225, 29, 72, 0.3)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 4;

    // Pleated Ribbon Tails (Left & Right)
    ctx.fillStyle = '#9f1239';
    // Left tail
    ctx.beginPath();
    ctx.moveTo(cx - ribbonW / 2 - 14, ribbonY - 14);
    ctx.lineTo(cx - ribbonW / 2 + 10, ribbonY - 14);
    ctx.lineTo(cx - ribbonW / 2 + 10, ribbonY + 22);
    ctx.lineTo(cx - ribbonW / 2 - 24, ribbonY + 22);
    ctx.lineTo(cx - ribbonW / 2 - 14, ribbonY + 4);
    ctx.closePath();
    ctx.fill();

    // Right tail
    ctx.beginPath();
    ctx.moveTo(cx + ribbonW / 2 + 14, ribbonY - 14);
    ctx.lineTo(cx + ribbonW / 2 - 10, ribbonY - 14);
    ctx.lineTo(cx + ribbonW / 2 - 10, ribbonY + 22);
    ctx.lineTo(cx + ribbonW / 2 + 24, ribbonY + 22);
    ctx.lineTo(cx + ribbonW / 2 + 14, ribbonY + 4);
    ctx.closePath();
    ctx.fill();

    // Main Silk Ribbon Body
    const silkGrad = ctx.createLinearGradient(cx - ribbonW / 2, 0, cx + ribbonW / 2, 0);
    silkGrad.addColorStop(0, '#e11d48');
    silkGrad.addColorStop(0.5, '#f43f5e');
    silkGrad.addColorStop(1, '#e11d48');
    ctx.fillStyle = silkGrad;
    this.roundRect(ctx, cx - ribbonW / 2, ribbonY - ribbonH / 2, ribbonW, ribbonH, 10, true, false);

    // Stitched Gold Border on Ribbon
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    this.roundRect(ctx, cx - ribbonW / 2 + 3, ribbonY - ribbonH / 2 + 3, ribbonW - 6, ribbonH - 6, 8, false, true);
    ctx.setLineDash([]);

    // Ribbon Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '5px';
    ctx.fillText('★ SYM PRODUCTIONS PRESENTS ★', cx, ribbonY);
    ctx.restore();

    // 4. COLORFUL TITLE: "CERTIFICATE OF LOGIC MASTERY"
    ctx.save();
    const titleGrad = ctx.createLinearGradient(cx - 300, 0, cx + 300, 0);
    titleGrad.addColorStop(0, '#1e1b4b');
    titleGrad.addColorStop(0.5, '#4338ca');
    titleGrad.addColorStop(1, '#1e1b4b');

    ctx.fillStyle = titleGrad;
    ctx.font = '900 46px "Segoe UI", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('CERTIFICATE OF LOGIC MASTERY', cx, 172);

    // Colorful Subtitle (Electric Sapphire Blue)
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.letterSpacing = '2.5px';
    ctx.fillText('LOGIC HUNT WITH KAPIL • 30-DAY ALGORITHMIC JOURNEY', cx, 218);
    ctx.restore();

    // 5. "This prestigious certification is awarded to"
    ctx.fillStyle = '#64748b';
    ctx.font = 'italic 18px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '0.5px';
    ctx.fillText('This prestigious certification is proudly presented to', cx, 280);

    // 6. CANDIDATE NAME IN MAJESTIC ROYAL INDIGO
    const studentName = (learnerName || 'MASTER ALGORIST').toUpperCase();
    ctx.save();
    this.drawFittedText(
      ctx,
      studentName,
      cx,
      355,
      860,
      50,
      '900',
      '"Segoe UI", Roboto, Georgia, sans-serif',
      '#0f172a'
    );

    // Multi-color decorative underline
    ctx.font = '900 50px "Segoe UI", sans-serif';
    const nameWidth = Math.min(ctx.measureText(studentName).width + 60, 880);
    const lineGrad = ctx.createLinearGradient(cx - nameWidth / 2, 0, cx + nameWidth / 2, 0);
    lineGrad.addColorStop(0, 'rgba(37, 99, 235, 0)');
    lineGrad.addColorStop(0.3, '#3b82f6');
    lineGrad.addColorStop(0.5, '#d4af37');
    lineGrad.addColorStop(0.7, '#ec4899');
    lineGrad.addColorStop(1, 'rgba(236, 72, 153, 0)');

    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(cx - nameWidth / 2, 388);
    ctx.lineTo(cx + nameWidth / 2, 388);
    ctx.stroke();
    ctx.restore();

    // 7. BODY TEXT (High-legibility executive slate)
    ctx.fillStyle = '#334155';
    ctx.font = '18px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('for exceptional problem-solving, critical algorithmic thinking, and mastering foundational', cx, 436);
    ctx.fillText('Data Structures & Algorithms concepts through interactive simulation and gaming logic.', cx, 468);

    // 8. COLORFUL ACHIEVEMENT STATS BADGE BAR
    const statsW = 660;
    const statsH = 54;
    const statsY = 530;
    ctx.save();
    ctx.fillStyle = '#f8faff';
    ctx.strokeStyle = '#c7d2fe';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, cx - statsW / 2, statsY - statsH / 2, statsW, statsH, 12, true, true);

    const levelsCompleted = stats.completedLevels || stats.unlockedLevels || 1;
    ctx.font = 'bold 15px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Segmented colorful metrics
    const statsText = `LEVELS CLEARED: ${levelsCompleted}/30   •   LOGIC SCORE: ${stats.score || (levelsCompleted * 100)} PTS   •   BADGES: ${levelsCompleted}`;
    this.drawFittedText(ctx, statsText, cx, statsY, statsW - 20, 14.5, 'bold', '"Courier New", monospace', '#4338ca');
    ctx.restore();

    // 9. COLORFUL AWARD ROSETTE RIBBON SEAL (Bottom-Left)
    this.drawColorfulRosetteSeal(ctx, 230, 650);

    // 10. KAPIL'S OFFICIAL SIGNATURE IN DEEP INDIGO (Bottom-Right)
    this.drawKapilSignatureLight(ctx, 970, 650);

    // 11. FOOTER VERIFICATION (Serial & Issuance)
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11.5px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const certCode = 'SYM-LHK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    ctx.fillText(`ISSUED ON: ${dateStr}   |   SERIAL ID: ${certCode}   |   OFFICIAL SYM PRODUCTIONS RELEASE`, cx, 755);

    // Trigger PNG Download
    const filename = `${learnerName.replace(/\s+/g, '_')}_Official_Logic_Hunt_Certificate.png`;
    this.downloadCanvas(filename, callback);
  }

  /**
   * Colorful Corner Guilloche Ornaments
   */
  drawCertCornerOrnament(ctx, x, y, scaleX, scaleY) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scaleX, scaleY);

    // Gold outer angle
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 36);
    ctx.lineTo(0, 0);
    ctx.lineTo(36, 0);
    ctx.stroke();

    // Indigo inner angle
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(8, 28);
    ctx.lineTo(8, 8);
    ctx.lineTo(28, 8);
    ctx.stroke();

    // Small jewel dot
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(14, 14, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /**
   * 24-Point Gold Rosette Seal with Dual Colorful Hanging Silk Ribbons
   */
  drawColorfulRosetteSeal(ctx, cx, cy) {
    ctx.save();

    // Draped Silk Ribbon Tails (Blue & Emerald)
    // Left Ribbon Tail (Royal Blue)
    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.moveTo(cx - 24, cy + 20);
    ctx.lineTo(cx - 36, cy + 76);
    ctx.lineTo(cx - 20, cy + 64); // swallowtail notch
    ctx.lineTo(cx - 4, cy + 76);
    ctx.lineTo(cx - 4, cy + 20);
    ctx.closePath();
    ctx.fill();

    // Right Ribbon Tail (Emerald Green)
    ctx.fillStyle = '#059669';
    ctx.beginPath();
    ctx.moveTo(cx + 4, cy + 20);
    ctx.lineTo(cx + 4, cy + 76);
    ctx.lineTo(cx + 20, cy + 64); // swallowtail notch
    ctx.lineTo(cx + 36, cy + 76);
    ctx.lineTo(cx + 24, cy + 20);
    ctx.closePath();
    ctx.fill();

    // 24-Point Gold Starburst Medallion
    ctx.translate(cx, cy);
    ctx.fillStyle = '#d4af37';
    ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
    ctx.shadowBlur = 12;

    const points = 24;
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? 52 : 44;
      const angle = (i * Math.PI) / points;
      ctx.lineTo(r * Math.cos(angle), r * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // Inner Radiant Ring
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, 38, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(79, 70, 229, 0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Seal Typography
    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 8.5px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SYM SEAL', 0, -12);

    ctx.fillStyle = '#1e1b4b';
    ctx.font = '900 12px "Segoe UI", sans-serif';
    ctx.fillText('VERIFIED', 0, 2);

    ctx.fillStyle = '#047857';
    ctx.font = 'bold 8px "Courier New", monospace';
    ctx.fillText('EXCELLENCE', 0, 15);

    ctx.restore();
  }

  /**
   * Kapil Signature in Royal Indigo for Light/White Canvas
   */
  drawKapilSignatureLight(ctx, cx, cy) {
    ctx.save();
    ctx.translate(cx, cy);

    // Calligraphic Signature in Royal Indigo
    ctx.strokeStyle = '#312e81';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-70, -10);
    ctx.bezierCurveTo(-50, -42, -40, 15, -20, -15);
    ctx.bezierCurveTo(-10, -35, 10, -5, 30, -25);
    ctx.bezierCurveTo(40, -10, 60, -30, 75, -5);
    ctx.stroke();

    // Baseline ruler
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-85, 10);
    ctx.lineTo(85, 10);
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 15px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Kapil', 0, 26);

    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 11px "Courier New", monospace';
    ctx.fillText('LEAD MENTOR & CREATOR', 0, 44);

    ctx.fillStyle = '#e11d48';
    ctx.font = 'bold 10px "Courier New", monospace';
    ctx.fillText('SYM PRODUCTIONS', 0, 58);

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
