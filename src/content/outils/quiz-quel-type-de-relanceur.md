---
title: "Quiz : quel type de relanceur de panier êtes-vous ?"
description: "6 questions pour identifier votre profil de relance panier et obtenir une recommandation postcart personnalisée. Résultat immédiat, sans inscription."
date: 2026-05-08
category: "Stratégie"
categorySlug: "strategie"
image: "/images/quiz-quel-type-de-relanceur-hero.jpg"
readingTime: "Quiz — 2 minutes"
---

Chaque boutique Shopify abandonne du CA différemment — et récupère différemment. Ce quiz identifie votre profil de relanceur en 6 questions et vous donne une recommandation concrète adaptée à votre situation.

<style>
.qz-wrap {
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 720px;
  margin: 32px auto;
}
.qz-progress-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 28px;
  overflow: hidden;
}
.qz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #818cf8);
  border-radius: 4px;
  transition: width 0.4s ease;
  width: 0%;
}
.qz-step {
  display: none;
}
.qz-step.active {
  display: block;
}
.qz-step-counter {
  font-size: 0.75rem;
  font-weight: 700;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
}
.qz-question {
  font-size: 1.45rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.3;
  margin-bottom: 28px;
}
.qz-answers {
  display: grid;
  gap: 12px;
}
.qz-answer {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #334155;
  text-align: left;
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
  font-family: inherit;
  width: 100%;
  line-height: 1.4;
}
.qz-answer:hover {
  border-color: #6366f1;
  background: #f5f3ff;
  transform: translateX(4px);
}
.qz-answer.selected {
  border-color: #6366f1;
  background: #ede9fe;
  color: #4338ca;
  font-weight: 600;
}
.qz-answer .qz-answer-letter {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  margin-right: 10px;
  color: #64748b;
  flex-shrink: 0;
}
.qz-answer.selected .qz-answer-letter {
  background: #6366f1;
  color: #fff;
}
.qz-answer-inner {
  display: flex;
  align-items: center;
}
.qz-btn-next {
  margin-top: 20px;
  background: #6366f1;
  color: #fff;
  border: none;
  padding: 13px 36px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: none;
  font-family: inherit;
  transition: background 0.15s;
}
.qz-btn-next:hover { background: #4f46e5; }
.qz-btn-next.visible { display: inline-block; }

/* Results */
.qz-result {
  display: none;
}
.qz-result.active {
  display: block;
}
.qz-profile-header {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 16px;
  padding: 36px;
  margin-bottom: 24px;
  color: #f8fafc;
}
.qz-profile-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}
.qz-profile-badge {
  display: inline-block;
  background: #6366f1;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}
.qz-profile-name {
  font-size: 2rem;
  font-weight: 900;
  color: #f8fafc;
  margin-bottom: 12px;
  line-height: 1.2;
}
.qz-profile-desc {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.65;
}
.qz-profile-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 560px) {
  .qz-profile-sections { grid-template-columns: 1fr; }
}
.qz-profile-section {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}
.qz-profile-section.highlight {
  border-color: #6366f1;
  background: #f5f3ff;
}
.qz-section-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
.qz-section-text {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.5;
}
.qz-reco {
  background: #1e293b;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;
}
.qz-reco-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.qz-reco-text {
  font-size: 1rem;
  color: #f8fafc;
  line-height: 1.6;
}
.qz-reco-text strong {
  color: #818cf8;
}
.qz-cta {
  text-align: center;
  padding: 28px;
  background: #f5f3ff;
  border-radius: 12px;
  border: 2px solid #c7d2fe;
  margin-bottom: 20px;
}
.qz-cta p {
  margin: 0 0 16px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
}
.qz-cta a.main-cta {
  display: inline-block;
  background: #6366f1;
  color: #fff;
  padding: 14px 40px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 12px;
}
.qz-cta a.main-cta:hover { background: #4f46e5; }
.qz-cta small {
  display: block;
  font-size: 0.78rem;
  color: #6366f1;
}
.qz-restart {
  text-align: center;
}
.qz-restart button {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.82rem;
  cursor: pointer;
  text-decoration: underline;
  font-family: inherit;
}
.qz-restart button:hover { color: #475569; }
.qz-share {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.qz-share-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-decoration: none;
}
.qz-share-li { background: #0077b5; color: #fff; }
.qz-share-tw { background: #1da1f2; color: #fff; }
.qz-share-cp { background: #e2e8f0; color: #334155; }
/* ── EMAIL GATE ── */
.qz-gate-preview {
  background: #1e293b;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  margin-bottom: 20px;
}
.qz-gate-icon { font-size: 2.5rem; margin-bottom: 8px; }
.qz-gate-name { font-size: 1.3rem; font-weight: 800; color: #f8fafc; margin-bottom: 10px; }
.qz-gate-lock { font-size: 0.85rem; color: #818cf8; font-weight: 600; }
.qz-gate-form { display: grid; gap: 12px; }
.qz-gate-form input[type=email] {
  width: 100%; padding: 13px 16px; border: 2px solid #e2e8f0;
  border-radius: 10px; font-size: 1rem; box-sizing: border-box; font-family: inherit;
}
.qz-gate-form input[type=email]:focus { outline: none; border-color: #6366f1; }
.qz-gate-form button {
  background: #6366f1; color: #fff; border: none; padding: 13px;
  border-radius: 10px; font-size: 1rem; font-weight: 700; cursor: pointer; font-family: inherit;
}
.qz-gate-form button:hover { background: #4f46e5; }
.qz-gate-form button:disabled { background: #94a3b8; cursor: not-allowed; }
.qz-gate-error { font-size: 0.82rem; color: #ef4444; min-height: 20px; }
.qz-gate-legal { font-size: 0.72rem; color: #94a3b8; text-align: center; }
</style>

<div class="qz-wrap">

  <div class="qz-progress-bar">
    <div class="qz-progress-fill" id="qz-progress"></div>
  </div>

  <!-- Q1 -->
  <div class="qz-step active" id="qz-step-1">
    <div class="qz-step-counter">Question 1 / 6</div>
    <div class="qz-question">Votre boutique Shopify génère combien de CA mensuel ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(1,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Moins de 10 000 € / mois — je commence à avoir du volume</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(1,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>Entre 10 000 et 50 000 € / mois</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(1,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Entre 50 000 et 150 000 € / mois</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(1,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>Plus de 150 000 € / mois</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-1" onclick="qzNext(1)">Question suivante →</button>
  </div>

  <!-- Q2 -->
  <div class="qz-step" id="qz-step-2">
    <div class="qz-step-counter">Question 2 / 6</div>
    <div class="qz-question">Comment gérez-vous vos paniers abandonnés aujourd'hui ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(2,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Je ne fais rien de spécial — ou presque</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(2,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>L'email automatique Shopify, c'est tout</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(2,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Une séquence email avec Klaviyo ou Omnisend</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(2,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>Email + SMS + au moins un autre canal</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-2" onclick="qzNext(2)">Question suivante →</button>
  </div>

  <!-- Q3 -->
  <div class="qz-step" id="qz-step-3">
    <div class="qz-step-counter">Question 3 / 6</div>
    <div class="qz-question">Quel est votre panier moyen sur Shopify ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(3,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Moins de 50 €</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(3,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>Entre 50 et 90 €</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(3,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Entre 90 et 200 €</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(3,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>Plus de 200 €</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-3" onclick="qzNext(3)">Question suivante →</button>
  </div>

  <!-- Q4 -->
  <div class="qz-step" id="qz-step-4">
    <div class="qz-step-counter">Question 4 / 6</div>
    <div class="qz-question">Quel est votre plus grand défi avec les paniers abandonnés ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(4,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Je n'arrive même pas à mesurer précisément mon taux d'abandon</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(4,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>Mes emails de relance sont de plus en plus ignorés</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(4,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Je veux tester un nouveau canal mais je ne sais pas par où commencer</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(4,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>J'optimise en continu — je cherche le canal qui me manque pour passer au niveau supérieur</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-4" onclick="qzNext(4)">Question suivante →</button>
  </div>

  <!-- Q5 -->
  <div class="qz-step" id="qz-step-5">
    <div class="qz-step-counter">Question 5 / 6</div>
    <div class="qz-question">Que savez-vous sur le marketing postal et le RGPD ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(5,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Rien — je ne savais même pas que c'était une option</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(5,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>Je sais que c'est légal, mais ça me semble complexe à mettre en place</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(5,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Je connais le principe de l'intérêt légitime — j'ai évalué l'option</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(5,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>J'ai déjà utilisé des canaux physiques dans ma stratégie marketing</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-5" onclick="qzNext(5)">Question suivante →</button>
  </div>

  <!-- Q6 -->
  <div class="qz-step" id="qz-step-6">
    <div class="qz-step-counter">Question 6 / 6</div>
    <div class="qz-question">Si vous doubliez votre taux de récupération de paniers, ça changerait quoi pour vous ?</div>
    <div class="qz-answers">
      <button class="qz-answer" onclick="qzAnswer(6,'A')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">A</span>Je ne sais pas exactement — je n'ai pas de chiffres précis sur ma récupération actuelle</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(6,'B')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">B</span>Ce serait bien, mais l'email reste mon canal principal — je ne cherche pas à tout réinventer</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(6,'C')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">C</span>Ce serait transformationnel — c'est exactement pour ça que je cherche une solution</div>
      </button>
      <button class="qz-answer" onclick="qzAnswer(6,'D')">
        <div class="qz-answer-inner"><span class="qz-answer-letter">D</span>C'est mon objectif mesurable pour ce trimestre — j'ai déjà les KPIs en place</div>
      </button>
    </div>
    <button class="qz-btn-next" id="qz-next-6" onclick="qzShowResult()">Voir mon profil →</button>
  </div>

  <!-- EMAIL GATE -->
  <div class="qz-step" id="qz-gate">
    <div class="qz-step-counter">Votre profil est prêt ✓</div>
    <div class="qz-question">Un email pour débloquer votre recommandation personnalisée</div>
    <div class="qz-gate-preview">
      <div class="qz-gate-icon" id="gate-icon"></div>
      <div class="qz-gate-name" id="gate-name"></div>
      <div class="qz-gate-lock">🔒 Recommandation personnalisée — débloquée après confirmation</div>
    </div>
    <div class="qz-gate-form">
      <input type="email" id="gate-email" placeholder="votre@email.com" autocomplete="email">
      <button id="gate-submit-btn" onclick="qzSubmitEmail()">Débloquer mon profil →</button>
      <div id="gate-error" class="qz-gate-error"></div>
      <div class="qz-gate-legal">Aucun spam. Données traitées selon le RGPD. Désinscription en 1 clic.</div>
    </div>
  </div>

  <!-- RESULTS -->
  <div class="qz-result" id="qz-result">
    <div class="qz-profile-header">
      <div class="qz-profile-icon" id="res-icon"></div>
      <div class="qz-profile-badge" id="res-badge"></div>
      <div class="qz-profile-name" id="res-name"></div>
      <div class="qz-profile-desc" id="res-desc"></div>
    </div>

    <div class="qz-profile-sections">
      <div class="qz-profile-section">
        <div class="qz-section-label">Votre point fort</div>
        <div class="qz-section-text" id="res-strength"></div>
      </div>
      <div class="qz-profile-section highlight">
        <div class="qz-section-label">Votre angle mort</div>
        <div class="qz-section-text" id="res-weakness"></div>
      </div>
    </div>

    <div class="qz-reco">
      <div class="qz-reco-label">Recommandation postcart pour votre profil</div>
      <div class="qz-reco-text" id="res-reco"></div>
    </div>

    <div class="qz-share">
      <a class="qz-share-btn qz-share-li" id="share-li" href="#" target="_blank">LinkedIn</a>
      <a class="qz-share-btn qz-share-tw" id="share-tw" href="#" target="_blank">Twitter / X</a>
      <button class="qz-share-btn qz-share-cp" onclick="qzCopyResult()">Copier mon résultat</button>
    </div>

    <div class="qz-cta">
      <p id="res-cta-msg"></p>
      <a class="main-cta" href="https://postcart.app" target="_blank">Essayer postcart gratuitement</a>
      <small>15 cartes offertes · Installation Shopify en 10 min · Sans carte bancaire</small>
    </div>

    <div class="qz-restart">
      <button onclick="qzRestart()">Recommencer le quiz</button>
    </div>
  </div>

</div>

<script>
(function() {
  const answers = {};

  const scoring = {
    1: {
      A: { debutant: 3 },
      B: { emailonly: 2, curieux: 1 },
      C: { multicanal: 2, expert: 1 },
      D: { expert: 3 }
    },
    2: {
      A: { debutant: 3 },
      B: { debutant: 1, emailonly: 2 },
      C: { emailonly: 3 },
      D: { multicanal: 2, expert: 1 }
    },
    3: {
      A: { debutant: 2 },
      B: { curieux: 2 },
      C: { multicanal: 2 },
      D: { expert: 2 }
    },
    4: {
      A: { debutant: 3 },
      B: { emailonly: 3 },
      C: { curieux: 3 },
      D: { multicanal: 2, expert: 1 }
    },
    5: {
      A: { debutant: 2 },
      B: { curieux: 2 },
      C: { multicanal: 2 },
      D: { expert: 3 }
    },
    6: {
      A: { debutant: 2 },
      B: { emailonly: 2 },
      C: { curieux: 3 },
      D: { multicanal: 1, expert: 2 }
    }
  };

  const profiles = {
    debutant: {
      icon: '🧭',
      badge: 'Profil 1/5 — Le Débutant Chaotique',
      name: 'Le Débutant Chaotique',
      desc: 'Votre boutique génère du CA, mais vos paniers abandonnés partent dans le vide sans être travaillés. Ce n\'est pas un manque de volonté — c\'est un manque de système. La bonne nouvelle : les premières mises en place ont l\'impact le plus spectaculaire, parce que vous partez de zéro.',
      strength: 'Vous avez tout à gagner. Chaque action de relance que vous mettez en place aujourd\'hui aura un impact direct et immédiatement mesurable.',
      weakness: 'Vous perdez chaque mois un CA que vous avez déjà payé pour générer — trafic, ads, SEO. Sans relance, cet argent part définitivement.',
      reco: 'Commencez simple : <strong>une seule carte postale automatique à J+5 après l\'abandon</strong>, déclenchée sur les paniers > 50 €. Pas besoin de Klaviyo, pas besoin de séquence complexe. L\'installation postcart sur Shopify prend 10 minutes. Vous aurez vos premiers résultats avant la fin du mois.',
      cta: 'Votre première relance peut être opérationnelle aujourd\'hui.',
    },
    emailonly: {
      icon: '📧',
      badge: 'Profil 2/5 — L\'Email Addict',
      name: 'L\'Email Addict',
      desc: 'Vous avez bien fait vos devoirs côté email — séquence en place, Klaviyo configuré, objets optimisés. Sauf que vos taux d\'ouverture plafonnent, iOS 18 grignote vos données, et la saturation des boîtes mail s\'aggrave chaque trimestre. Votre canal principal se dégrade, et vous le savez.',
      strength: 'Votre infrastructure email est un actif. Vous savez segmenter, automatiser, analyser. Ajouter un canal ne demande pas de repartir de zéro.',
      weakness: 'Vous dépendez à 100% d\'un canal dont le reach réel baisse année après année. Un seul point de défaillance dans votre récupération.',
      reco: 'La carte postale n\'est pas un concurrent de votre email — c\'est le <strong>3e touch qui récupère les 60% de destinataires que vos emails ne touchent jamais</strong>. Configurez postcart comme flow complémentaire dans Klaviyo : email J+1, email J+3, carte J+7. Le taux d\'ouverture de la carte : 90%. C\'est le contact que vos emails ne peuvent plus assurer.',
      cta: 'Ajoutez le canal que vos emails ne peuvent pas remplacer.',
    },
    curieux: {
      icon: '🔍',
      badge: 'Profil 3/5 — Le Curieux Prêt à Sauter',
      name: 'Le Curieux Prêt à Sauter',
      desc: 'Vous avez fait vos recherches. Vous savez que les autres canaux existent, vous comprenez l\'intérêt de diversifier, vous avez peut-être même calculé votre manque à gagner. Ce qui vous manque : franchir le pas. Le frein n\'est pas intellectuel — c\'est l\'inertie du premier test.',
      strength: 'Vous comprenez le problème dans sa globalité. Vous ne serez pas surpris par les résultats — vous les anticipez correctement.',
      weakness: 'Chaque mois sans action, c\'est un mois de paniers qui partent sans relance. La compréhension sans exécution ne récupère aucun panier.',
      reco: '<strong>Lancez un test à 100 cartes ce mois-ci.</strong> 220 € de budget. Si le taux de récupération atteint 8% sur un panier moyen de 80 €, vous récupérez 640 € — soit un ROI de +190% dès le premier test. Le risque est asymétrique en votre faveur. Postcart vous offre 15 cartes gratuites pour tester avant même d\'engager un budget.',
      cta: 'Le premier test coûte 0 € — 15 cartes sont offertes.',
    },
    multicanal: {
      icon: '⚙️',
      badge: 'Profil 4/5 — Le Multicanal en Construction',
      name: 'Le Multicanal en Construction',
      desc: 'Vous avez déjà plusieurs canaux actifs et vous orchestrez votre récupération avec méthode. Email, SMS, peut-être du retargeting. Votre approche est solide — mais il manque une pièce dans votre séquence : le canal qui atteint les 40% de prospects que vos canaux digitaux ne touchent jamais.',
      strength: 'Votre mindset est le bon : diversification, mesure, optimisation. Ajouter un canal supplémentaire s\'intègre naturellement dans votre système existant.',
      weakness: 'iOS 18, cookieless, saturation SMS : vos canaux digitaux perdent en précision. Votre exposition au risque de reach augmente si vous ne diversifiez pas vers le physique.',
      reco: 'Intégrez postcart comme <strong>dernier touch de votre séquence</strong> — après vos emails et SMS, sur les paniers non récupérés à J+7. C\'est le segment le plus qualifié (ils ont résisté à 2-3 relances digitales) et souvent le plus réceptif à un contact différent. Configurez un trigger Klaviyo sur "non-converti après séquence email+SMS" → carte postcart à J+7.',
      cta: 'Bouchez le dernier trou de votre séquence multicanale.',
    },
    expert: {
      icon: '📊',
      badge: 'Profil 5/5 — L\'Optimiseur ROI',
      name: 'L\'Optimiseur ROI',
      desc: 'Vous pilotez votre récupération avec des KPIs, vous segmentez par valeur panier, vous A/B testez vos messages. Votre boutique est dans le top 5% des e-commerçants Shopify en matière de récupération. Ce qui vous intéresse : les preuves, les chiffres, le comparatif canal par canal.',
      strength: 'Votre rigueur analytique est un avantage compétitif direct. Vous saurez mesurer, optimiser et scaler précisément ce qui fonctionne.',
      weakness: 'Même les meilleures séquences digitales plafonnent autour de 10-12% de récupération. Au-delà, il faut ajouter un nouveau vecteur — pas optimiser davantage les existants.',
      reco: 'Le canal postal est le seul qui <strong>bypasse tous les filtres digitaux</strong> (iOS, cookieless, spam) tout en ayant un taux d\'ouverture de 90%. Pour votre profil, démarrez par un A/B test contrôlé : 50% de vos paniers abandonnés > 100 € reçoivent votre séquence standard, 50% reçoivent la séquence + carte postale à J+7. Mesurez le delta de récupération sur 60 jours. Les données DMA UK indiquent un ROI moyen de 400-600% sur le marketing postal ciblé.',
      cta: 'Lancez votre A/B test canal physique vs digital pur.',
    }
  };

  function qzAnswer(q, letter) {
    answers[q] = letter;
    const steps = document.querySelectorAll(`#qz-step-${q} .qz-answer`);
    steps.forEach(btn => btn.classList.remove('selected'));
    const letters = ['A','B','C','D'];
    const idx = letters.indexOf(letter);
    if (steps[idx]) steps[idx].classList.add('selected');
    const nextBtn = document.getElementById(`qz-next-${q}`);
    if (nextBtn) nextBtn.classList.add('visible');
  }

  function qzNext(q) {
    if (!answers[q]) return;
    document.getElementById(`qz-step-${q}`).classList.remove('active');
    const nextQ = q + 1;
    const nextStep = document.getElementById(`qz-step-${nextQ}`);
    if (nextStep) nextStep.classList.add('active');
    const pct = (nextQ - 1) / 6 * 100;
    document.getElementById('qz-progress').style.width = pct + '%';
  }

  const BREVO_API_KEY = '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';
  const BREVO_LIST_ID = 17;

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

  let _pendingWinner = null;

  function qzCalcWinner() {
    const scores = { debutant: 0, emailonly: 0, curieux: 0, multicanal: 0, expert: 0 };
    for (let q = 1; q <= 6; q++) {
      const ans = answers[q];
      if (ans && scoring[q][ans]) {
        for (const [profile, pts] of Object.entries(scoring[q][ans])) {
          scores[profile] += pts;
        }
      }
    }
    return Object.entries(scores).sort((a,b) => b[1] - a[1])[0][0];
  }

  function qzShowResult() {
    if (!answers[6]) return;
    document.getElementById('qz-step-6').classList.remove('active');
    document.getElementById('qz-progress').style.width = '100%';

    _pendingWinner = qzCalcWinner();
    const p = profiles[_pendingWinner];

    document.getElementById('gate-icon').textContent = p.icon;
    document.getElementById('gate-name').textContent = p.name;
    document.getElementById('gate-error').style.display = 'none';
    const btn = document.getElementById('gate-submit-btn');
    btn.disabled = false;
    btn.textContent = 'Débloquer mon profil →';
    document.getElementById('qz-gate').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function qzSubmitEmail() {
    const emailInput = document.getElementById('gate-email');
    const btn = document.getElementById('gate-submit-btn');
    const errEl = document.getElementById('gate-error');
    const email = emailInput.value.trim();

    errEl.style.display = 'none';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = 'Adresse email invalide.';
      errEl.style.display = 'block';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Enregistrement…';

    const p = profiles[_pendingWinner];
    await brevoSubscribe(email, {
      SOURCE: 'quiz-relanceur-postcart',
      PROFIL_QUIZ: p.name,
      BADGE_QUIZ: p.badge
    });

    document.getElementById('qz-gate').classList.remove('active');

    document.getElementById('res-icon').textContent = p.icon;
    document.getElementById('res-badge').textContent = p.badge;
    document.getElementById('res-name').textContent = p.name;
    document.getElementById('res-desc').textContent = p.desc;
    document.getElementById('res-strength').textContent = p.strength;
    document.getElementById('res-weakness').textContent = p.weakness;
    document.getElementById('res-reco').innerHTML = p.reco;
    document.getElementById('res-cta-msg').textContent = p.cta;

    const shareText = encodeURIComponent(`Mon profil relance panier : "${p.name}" — ${p.cta} #ecommerce #shopify`);
    const shareUrl = encodeURIComponent('https://postcart.app/outils/quiz-quel-type-de-relanceur');
    document.getElementById('share-li').href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    document.getElementById('share-tw').href = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

    document.getElementById('qz-result').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function qzCopyResult() {
    const scores = { debutant: 0, emailonly: 0, curieux: 0, multicanal: 0, expert: 0 };
    for (let q = 1; q <= 6; q++) {
      const ans = answers[q];
      if (ans && scoring[q] && scoring[q][ans]) {
        for (const [profile, pts] of Object.entries(scoring[q][ans])) {
          scores[profile] += pts;
        }
      }
    }
    const winner = Object.entries(scores).sort((a,b) => b[1] - a[1])[0][0];
    const p = profiles[winner];
    const text = `Mon profil relance panier : "${p.name}"\n${p.cta}\nDécouvrez votre profil : https://postcart.app/outils/quiz-quel-type-de-relanceur`;
    navigator.clipboard.writeText(text).catch(() => {});
  }

  function qzRestart() {
    for (let k in answers) delete answers[k];
    _pendingWinner = null;
    document.querySelectorAll('.qz-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.qz-answer').forEach(a => a.classList.remove('selected'));
    document.querySelectorAll('.qz-btn-next').forEach(b => b.classList.remove('visible'));
    document.getElementById('qz-result').classList.remove('active');
    document.getElementById('qz-step-1').classList.add('active');
    document.getElementById('qz-progress').style.width = '0%';
    const emailInput = document.getElementById('gate-email');
    if (emailInput) emailInput.value = '';
    const submitBtn = document.getElementById('gate-submit-btn');
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Débloquer mon profil →'; }
  }

  window.qzAnswer = qzAnswer;
  window.qzNext = qzNext;
  window.qzShowResult = qzShowResult;
  window.qzSubmitEmail = qzSubmitEmail;
  window.qzCopyResult = qzCopyResult;
  window.qzRestart = qzRestart;
})();
</script>

---

## Les 5 profils du cocon — à qui ressemblez-vous ?

Les profils ci-dessus ne sont pas des jugements — ils décrivent des étapes naturelles dans la maturité e-commerce d'une boutique. La plupart des marchands passent par plusieurs profils en 12-24 mois.

**Le Débutant Chaotique** représente environ 40% des boutiques Shopify actives. L'outil de relance le plus simple — un seul email automatique — est déjà absent chez une boutique sur deux en France.

**L'Email Addict** est le profil le plus répandu parmi les boutiques structurées (30-50K€/mois). L'email reste dominant, mais le plafond approche — et les signaux s'accumulent (ouvertures iOS approximatives, taux d'ouverture en baisse, concurrence accrue dans les boîtes mail).

**Le Curieux Prêt à Sauter** est souvent un marchand qui a déjà fait les calculs. Il sait que postcart peut fonctionner. Ce qui le bloque : l'inertie et la peur de mal configurer. Les [15 cartes offertes](https://postcart.app) éliminent ce frein.

**Le Multicanal en Construction** a la bonne méthode, mais une pièce manque dans sa séquence. La carte postale est la seule à atteindre les 40% de prospects que les canaux digitaux ne touchent jamais — ceux qui n'ouvrent pas les emails, n'ont pas donné leur consentement SMS, bloquent les pubs.

**L'Optimiseur ROI** pilote avec des données. Ce qu'il cherche : les preuves. Les études de cas postcart et le comparatif taux d'ouverture par canal sont les ressources les plus adaptées à son profil.

---

Quel que soit votre profil, une chose est constante : chaque mois sans relance active représente un CA perdu que vous avez déjà payé pour générer. [Essayez postcart gratuitement](https://postcart.app) — 15 cartes offertes, sans carte bancaire.
