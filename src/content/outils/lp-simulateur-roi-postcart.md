---
title: "Simulateur ROI postcart : calculez votre CA récupérable en temps réel"
description: "Simulateur interactif : entrez votre CA, taux d'abandon et panier moyen — obtenez instantanément 3 scénarios de ROI postcart avec délai de rentabilisation. Gratuit, sans inscription."
date: 2026-05-08
category: "Preuves & ROI"
categorySlug: "preuves-roi"
image: "/images/simulateur-roi-postcart-hero.jpg"
readingTime: "Outil interactif"
---

Votre boutique abandonne chaque mois un CA que vous avez déjà payé pour générer. Ce simulateur calcule en temps réel, selon vos chiffres réels, combien postcart peut vous en rendre — et à quel coût.

Bougez les curseurs. Les résultats s'actualisent instantanément.

<style>
.sim-wrap {
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 860px;
  margin: 32px auto;
}
.sim-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px;
  margin-bottom: 24px;
}
.sim-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 6px;
}
.sim-subtitle {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0 0 28px;
}
.sim-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 600px) {
  .sim-grid { grid-template-columns: 1fr; }
}
.sim-field label {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 8px;
}
.sim-field label span {
  font-weight: 700;
  color: #6366f1;
}
.sim-field input[type=range] {
  width: 100%;
  accent-color: #6366f1;
  margin-bottom: 4px;
  cursor: pointer;
}
.sim-field .range-bounds {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #94a3b8;
}
.sim-loss {
  background: #1e293b;
  border-radius: 12px;
  padding: 24px 28px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.sim-loss-label {
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.sim-loss-value {
  font-size: 2.4rem;
  font-weight: 900;
  color: #f8fafc;
  line-height: 1;
}
.sim-loss-right {
  text-align: right;
}
.sim-loss-paniers {
  font-size: 0.85rem;
  color: #94a3b8;
}
.sim-scenarios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 640px) {
  .sim-scenarios { grid-template-columns: 1fr; }
}
.sim-scenario {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  transition: border-color 0.2s;
}
.sim-scenario.featured {
  border-color: #6366f1;
  background: #f5f3ff;
}
.sim-scenario-badge {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  background: #6366f1;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 12px;
  border-radius: 20px;
  white-space: nowrap;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.sim-scenario-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}
.sim-scenario-rate {
  font-size: 0.78rem;
  color: #94a3b8;
  margin-bottom: 16px;
}
.sim-scenario-metric {
  margin-bottom: 12px;
}
.sim-scenario-metric-label {
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 2px;
}
.sim-scenario-metric-value {
  font-size: 1.35rem;
  font-weight: 800;
  color: #1e293b;
}
.sim-scenario.featured .sim-scenario-metric-value {
  color: #4338ca;
}
.sim-scenario-roi {
  font-size: 1.05rem;
  font-weight: 700;
  padding: 8px 0 0;
  border-top: 1px solid #e2e8f0;
  color: #1e293b;
}
.sim-scenario.featured .sim-scenario-roi {
  color: #4338ca;
}
.sim-scenario-breakeven {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 4px;
}
.sim-annual {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 12px;
  padding: 24px 28px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
@media (max-width: 560px) {
  .sim-annual { grid-template-columns: 1fr; }
}
.sim-annual-item {}
.sim-annual-label {
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}
.sim-annual-value {
  font-size: 1.6rem;
  font-weight: 900;
  color: #f8fafc;
}
.sim-annual-value.accent {
  color: #818cf8;
}
.sim-note {
  font-size: 0.75rem;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 20px;
}
.sim-cta {
  text-align: center;
  padding: 28px;
  background: #f5f3ff;
  border-radius: 12px;
  border: 2px solid #c7d2fe;
}
.sim-cta p {
  margin: 0 0 16px;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
}
.sim-cta a {
  display: inline-block;
  background: #6366f1;
  color: #fff;
  padding: 14px 40px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
}
.sim-cta a:hover {
  background: #4f46e5;
}
.sim-cta small {
  display: block;
  margin-top: 10px;
  font-size: 0.78rem;
  color: #6366f1;
}
/* ── EMAIL GATE — Projection annuelle ── */
.sim-email-gate {
  background: #1e293b;
  border-radius: 12px;
  padding: 22px 28px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.sim-email-gate-left { flex: 1; min-width: 160px; }
.sim-email-gate-icon { font-size: 1.6rem; margin-bottom: 4px; }
.sim-email-gate-title { font-size: 0.95rem; font-weight: 700; color: #f8fafc; }
.sim-email-gate-desc { font-size: 0.78rem; color: #64748b; margin-top: 3px; }
.sim-email-gate-form {
  flex: 2; display: flex; gap: 10px;
  align-items: flex-start; flex-wrap: wrap; min-width: 240px;
}
.sim-email-gate-form input[type=email] {
  flex: 1; padding: 11px 14px;
  border: 2px solid #334155; background: #0f172a; color: #f8fafc;
  border-radius: 8px; font-size: 0.9rem; font-family: inherit; min-width: 180px;
}
.sim-email-gate-form input[type=email]::placeholder { color: #475569; }
.sim-email-gate-form input[type=email]:focus { outline: none; border-color: #6366f1; }
.sim-email-gate-form button {
  background: #6366f1; color: #fff; border: none;
  padding: 11px 20px; border-radius: 8px;
  font-size: 0.9rem; font-weight: 700; cursor: pointer;
  white-space: nowrap; font-family: inherit;
}
.sim-email-gate-form button:hover { background: #4f46e5; }
.sim-email-gate-form button:disabled { background: #475569; cursor: not-allowed; }
.sim-email-error { font-size: 0.78rem; color: #f87171; width: 100%; }
.sim-email-gate-legal { font-size: 0.68rem; color: #475569; width: 100%; }
</style>

<div class="sim-wrap">

  <div class="sim-card">
    <div class="sim-title">Vos paramètres boutique</div>
    <div class="sim-subtitle">Ajustez les curseurs — les résultats se calculent en temps réel</div>
    <div class="sim-grid">
      <div class="sim-field">
        <label>CA mensuel réalisé <span id="lbl-ca">50 000 €</span></label>
        <input type="range" id="sl-ca" min="5000" max="500000" step="1000" value="50000" oninput="simUpdate()">
        <div class="range-bounds"><span>5 000 €</span><span>500 000 €</span></div>
      </div>
      <div class="sim-field">
        <label>Taux d'abandon de panier <span id="lbl-taux">70 %</span></label>
        <input type="range" id="sl-taux" min="50" max="90" step="1" value="70" oninput="simUpdate()">
        <div class="range-bounds"><span>50 %</span><span>90 %</span></div>
      </div>
      <div class="sim-field">
        <label>Panier moyen <span id="lbl-panier">85 €</span></label>
        <input type="range" id="sl-panier" min="20" max="500" step="5" value="85" oninput="simUpdate()">
        <div class="range-bounds"><span>20 €</span><span>500 €</span></div>
      </div>
      <div class="sim-field">
        <label>Cartes postcart / mois <span id="lbl-cartes">200 cartes</span></label>
        <input type="range" id="sl-cartes" min="50" max="2000" step="50" value="200" oninput="simUpdate()">
        <div class="range-bounds"><span>50</span><span>2 000</span></div>
      </div>
    </div>
  </div>

  <div class="sim-loss" id="block-loss">
    <div>
      <div class="sim-loss-label">Manque à gagner mensuel estimé</div>
      <div class="sim-loss-value" id="val-perte">—</div>
    </div>
    <div class="sim-loss-right">
      <div class="sim-loss-paniers" id="val-paniers">— paniers abandonnés / mois</div>
      <div class="sim-loss-paniers" id="val-cibles">— paniers ciblés par postcart</div>
    </div>
  </div>

  <div class="sim-scenarios">
    <div class="sim-scenario">
      <div class="sim-scenario-label">Conservateur</div>
      <div class="sim-scenario-rate">5 % de récupération</div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">CA récupéré / mois</div>
        <div class="sim-scenario-metric-value" id="sc1-ca">—</div>
      </div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">Coût postcart</div>
        <div class="sim-scenario-metric-value" id="sc1-cout">—</div>
      </div>
      <div class="sim-scenario-roi" id="sc1-roi">ROI : —</div>
      <div class="sim-scenario-breakeven" id="sc1-be"></div>
    </div>
    <div class="sim-scenario featured">
      <div class="sim-scenario-badge">Benchmark Baymard</div>
      <div class="sim-scenario-label">Réaliste</div>
      <div class="sim-scenario-rate">8 % de récupération</div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">CA récupéré / mois</div>
        <div class="sim-scenario-metric-value" id="sc2-ca">—</div>
      </div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">Coût postcart</div>
        <div class="sim-scenario-metric-value" id="sc2-cout">—</div>
      </div>
      <div class="sim-scenario-roi" id="sc2-roi">ROI : —</div>
      <div class="sim-scenario-breakeven" id="sc2-be"></div>
    </div>
    <div class="sim-scenario">
      <div class="sim-scenario-label">Optimiste</div>
      <div class="sim-scenario-rate">11 % de récupération</div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">CA récupéré / mois</div>
        <div class="sim-scenario-metric-value" id="sc3-ca">—</div>
      </div>
      <div class="sim-scenario-metric">
        <div class="sim-scenario-metric-label">Coût postcart</div>
        <div class="sim-scenario-metric-value" id="sc3-cout">—</div>
      </div>
      <div class="sim-scenario-roi" id="sc3-roi">ROI : —</div>
      <div class="sim-scenario-breakeven" id="sc3-be"></div>
    </div>
  </div>

  <!-- ANNUAL GATE -->
  <div class="sim-email-gate" id="sim-email-gate">
    <div class="sim-email-gate-left">
      <div class="sim-email-gate-icon">🔒</div>
      <div class="sim-email-gate-title">Projection annuelle</div>
      <div class="sim-email-gate-desc">CA récupérable / an · Coût total · Bénéfice net</div>
    </div>
    <div class="sim-email-gate-form">
      <input type="email" id="sim-email" placeholder="votre@email.com" autocomplete="email">
      <button id="sim-gate-btn" onclick="simSubmitEmail()">Débloquer →</button>
      <div id="sim-email-error" class="sim-email-error"></div>
      <div class="sim-email-gate-legal">RGPD · Désinscription en 1 clic</div>
    </div>
  </div>

  <!-- ANNUAL RESULTS (débloqués par email) -->
  <div class="sim-annual" id="sim-annual" style="display:none">
    <div class="sim-annual-item">
      <div class="sim-annual-label">CA récupérable / an (réaliste)</div>
      <div class="sim-annual-value accent" id="val-annuel">—</div>
    </div>
    <div class="sim-annual-item">
      <div class="sim-annual-label">Coût postcart / an</div>
      <div class="sim-annual-value" id="val-cout-annuel">—</div>
    </div>
    <div class="sim-annual-item">
      <div class="sim-annual-label">Bénéfice net / an (réaliste)</div>
      <div class="sim-annual-value accent" id="val-benefice">—</div>
    </div>
  </div>

  <p class="sim-note">Hypothèses : 2,20 €/carte tout compris (impression + envoi France). Taux de récupération : benchmark Baymard Institute 2024. ROI = (CA récupéré − coût) / coût × 100. Projections à titre indicatif.</p>

  <div class="sim-cta">
    <p id="cta-msg">Vos projections sont calculées — testez maintenant avec votre vraie boutique</p>
    <a href="https://postcart.app" target="_blank">Démarrer gratuitement — 15 cartes offertes</a>
    <small>Sans carte bancaire · Installation Shopify en 10 minutes</small>
  </div>

</div>

<script>
(function() {
  const fmt = v => new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR', maximumFractionDigits:0}).format(v);
  const fmtPct = v => (v > 0 ? '+' : '') + Math.round(v) + ' %';
  const BREVO_API_KEY = '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';
  const BREVO_LIST_ID = 19;

  const COUT_CARTE = 2.20;
  let _simAnnual = null;

  async function brevoSubscribe(email, attributes) {
    if (!BREVO_API_KEY || BREVO_API_KEY === 'VOTRE_CLE_API_BREVO') return true;
    try {
      const r = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': BREVO_API_KEY },
        body: JSON.stringify({ email, listIds: [BREVO_LIST_ID], updateEnabled: true, attributes })
      });
      return r.ok || r.status === 201 || r.status === 204;
    } catch { return false; }
  }

  async function simSubmitEmail() {
    const emailInput = document.getElementById('sim-email');
    const btn = document.getElementById('sim-gate-btn');
    const errEl = document.getElementById('sim-email-error');
    const email = emailInput.value.trim();

    errEl.style.display = 'none';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = 'Adresse email invalide.';
      errEl.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.textContent = '…';

    await brevoSubscribe(email, {
      SOURCE: 'simulateur-roi-postcart',
      CA_MENSUEL: parseInt(document.getElementById('sl-ca').value),
      TAUX_ABANDON: parseInt(document.getElementById('sl-taux').value),
      PANIER_MOYEN: parseInt(document.getElementById('sl-panier').value)
    });

    if (_simAnnual) {
      document.getElementById('val-annuel').textContent = fmt(_simAnnual.annuel);
      document.getElementById('val-cout-annuel').textContent = fmt(_simAnnual.coutAnnuel);
      document.getElementById('val-benefice').textContent = fmt(_simAnnual.benefice);
    }
    document.getElementById('sim-email-gate').style.display = 'none';
    document.getElementById('sim-annual').style.display = 'grid';
  }

  function calcScenario(paniersCibles, panier, taux, cartes) {
    const cout = cartes * COUT_CARTE;
    const caRec = paniersCibles * taux * panier;
    const roi = cout > 0 ? (caRec - cout) / cout * 100 : 0;
    const breakEven = cout > 0 && panier > 0 ? Math.ceil(cout / (panier * taux)) : 0;
    return { caRec, cout, roi, breakEven };
  }

  function simUpdate() {
    const ca = parseFloat(document.getElementById('sl-ca').value);
    const tauxAbandPct = parseFloat(document.getElementById('sl-taux').value);
    const panier = parseFloat(document.getElementById('sl-panier').value);
    const cartes = parseFloat(document.getElementById('sl-cartes').value);

    document.getElementById('lbl-ca').textContent = fmt(ca);
    document.getElementById('lbl-taux').textContent = tauxAbandPct + ' %';
    document.getElementById('lbl-panier').textContent = fmt(panier);
    document.getElementById('lbl-cartes').textContent = cartes + ' cartes';

    const tauxAband = tauxAbandPct / 100;
    const caTotal = ca / (1 - tauxAband);
    const perte = caTotal * tauxAband;
    const paniersTotaux = Math.round(perte / panier);
    const paniersCibles = Math.min(cartes, paniersTotaux);

    document.getElementById('val-perte').textContent = fmt(perte);
    document.getElementById('val-paniers').textContent = paniersTotaux.toLocaleString('fr-FR') + ' paniers abandonnés / mois';
    document.getElementById('val-cibles').textContent = paniersCibles.toLocaleString('fr-FR') + ' ciblés par postcart';

    const s1 = calcScenario(paniersCibles, panier, 0.05, cartes);
    const s2 = calcScenario(paniersCibles, panier, 0.08, cartes);
    const s3 = calcScenario(paniersCibles, panier, 0.11, cartes);

    function fill(prefix, s) {
      document.getElementById(prefix + '-ca').textContent = fmt(s.caRec);
      document.getElementById(prefix + '-cout').textContent = fmt(s.cout);
      document.getElementById(prefix + '-roi').textContent = 'ROI : ' + fmtPct(s.roi);
      document.getElementById(prefix + '-be').textContent = s.breakEven > 0
        ? 'Break-even : ' + s.breakEven + ' commande' + (s.breakEven > 1 ? 's' : '')
        : '';
    }
    fill('sc1', s1);
    fill('sc2', s2);
    fill('sc3', s3);

    const annuel = s2.caRec * 12;
    const coutAnnuel = s2.cout * 12;
    const benefice = annuel - coutAnnuel;
    _simAnnual = { annuel, coutAnnuel, benefice };

    if (document.getElementById('sim-annual').style.display !== 'none') {
      document.getElementById('val-annuel').textContent = fmt(annuel);
      document.getElementById('val-cout-annuel').textContent = fmt(coutAnnuel);
      document.getElementById('val-benefice').textContent = fmt(benefice);
    }

    if (s2.caRec > 0) {
      document.getElementById('cta-msg').textContent =
        'Au scénario réaliste, votre boutique peut récupérer ' + fmt(annuel) + ' / an. Testez avec vos vrais paniers.';
    }
  }

  window.simUpdate = simUpdate;
  window.simSubmitEmail = simSubmitEmail;
  simUpdate();
})();
</script>

---

## Comment lire vos résultats

### Le manque à gagner mensuel

C'est la valeur des commandes que vos visiteurs avaient initiées mais n'ont pas finalisées. La formule : `CA réalisé / (1 − taux d'abandon) × taux d'abandon`. Ce chiffre n'est pas récupérable en totalité — mais une fraction significative l'est, et c'est ce que les 3 scénarios ci-dessus calculent.

### Les 3 scénarios

**Conservateur (5 %)** — Le plancher réaliste. Des boutiques qui lancent leur première campagne sans optimisation du message ni du timing se situent souvent ici. Même à ce niveau, la majorité des boutiques avec un panier moyen > 50 € sont rentables.

**Réaliste (8 %)** — Le benchmark Baymard Institute, mesuré sur des milliers de boutiques. C'est le scénario de référence : une campagne postcart bien configurée, avec un timing à 48-72h après l'abandon et un message personnalisé. La plupart des boutiques actives se situent entre 7 % et 9 %.

**Optimiste (11 %)** — Atteint par les boutiques avec un panier moyen élevé (> 100 €), un message fort, et souvent un produit où la tangibilité de la carte postale résonne naturellement avec l'univers de marque (cosmétiques, déco, gastronomie, mode premium).

### Le ROI et le break-even

Le ROI indique la multiplication de votre mise. Un ROI de +400 % signifie que chaque euro investi en cartes postales vous rapporte 5 € de CA récupéré. Le **break-even** est le nombre de commandes nécessaires pour couvrir le coût des cartes — en pratique, il est atteint dès les premières semaines d'une campagne de taille moyenne.

### Les projections annuelles

Elles supposent un volume constant sur 12 mois. En pratique, un Black Friday ou une période de soldes peut doubler le volume de paniers abandonnés — et donc le potentiel de récupération.

---

## Ce que le simulateur ne peut pas modéliser

Trois facteurs améliorent les résultats réels au-delà des projections affichées :

**L'effet fidélisation.** Un client récupéré par carte postale a un taux de réachat significativement supérieur à la moyenne — la carte crée un souvenir de marque. Le CA récupéré sous-estime donc la valeur réelle à long terme.

**La saisonnalité.** En période de Black Friday ou de Fêtes, les taux d'abandon augmentent mais les taux de récupération aussi — les acheteurs sont en mode comparaison, pas en mode abandon définitif. Le simulateur utilise des moyennes annualisées.

**Le seuil de panier.** Si vous filtrez vos envois postcart aux paniers > 80 € (recommandé), le taux de récupération effectif sur ces paniers monte — vous ciblez les clients avec le plus fort potentiel de conversion. Le simulateur utilise votre panier moyen global ; la réalité filtrée est meilleure.

Pour aller plus loin sur les chiffres réels, les [études de cas postcart](/blog/etudes-de-cas-postcart-shopify) documentent des résultats mesurés sur des boutiques Shopify réelles, par secteur.
