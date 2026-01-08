# ux0 — Selector-to-Enquiry Interaction Pathway (LFF) v1.7
## Change log

### v1.0 (initial release)

1. **Terminology alignment:** Use **Pathway** (user-facing term) and keep category labels consistent.
2. **Copy governance:** Standardise UI language on **“Eligibility check”** (avoid “pre-check” in UI labels).
3. **Form-only entity context:** “Legal entity” selection is **submission-form-only** (packaging context), not a solutions-level concept.
4. **PV-01 standard:** One four-step process shown consistently across the experience.
5. **Locked microcopy blocks:** Fees and protection-options microcopy provided as copy/paste-ready, verbatim blocks.

### v1.1

1. Added fees microcopy row for **UX3 — Residential property finance (via business/trust)**.
2. Corrected UX3 fees microcopy label: **Business rescue** (removed incorrect “developer” label).
- **v1.7 (2026-01-08):** Split Business funding/working capital fees microcopy into three entries: Working capital (secured), Working capital (unsecured), and Bridging finance. Aligned with UX3 v2.0 and DATA-01 v2.0 option key changes.
3. Aligned UX3 fees microcopy labels to UX3 option names.


### v1.2

1. Updated UX4 Developer fees microcopy to match the locked five-option Developer set (Property Development, Industrial Property, Commercial Property, Refurbishments & Conversions, Bridging finance).
2. Removed “Short-term funding (deal-linked)” from UX4 fees microcopy.


---


### v1.3

1. Removed **Farm solar / irrigation solar finance** from **UX2 — Farmers** fees microcopy (Solar / Backup Power is handled only under **UX5**).

### v1.4

1. Rephrased “registered credit providers” to “registered finance providers” to avoid implying consumer credit offerings.
2. Reworded assurance examples to “loan protection cover (credit life)”.


## 0. Navigation contract — Five gates only (non-negotiable)

1. The website is organised only by these five gates: **Individual**, **Business**, **Farmer**, **Developer**, **Solar / Backup Power**.
2. Users must enter through one gate and remain inside it; do not present any alternative slicing (no cross-gate “solutions catalogue”, “browse all solutions”, or industry-based menus).
3. Any choices shown after entering a gate exist only to route the user to the correct **dedicated Pocket Business eligibility form** (or are captured as intent inside that form).

## 0.1 Eligibility flow contract — dedicated PB forms + form-specific outcome message (non-negotiable)

1. After selecting a gate and then a need within that gate, the only next step is the **Check eligibility** CTA.
2. Clicking **Check eligibility** opens **one dedicated Pocket Business enquiry form** in the Action panel (right) with guidance on the left. The form is **1:1 mapped** to that specific gate + need.
3. Website forms collect only minimum viable identity + consent + routing + selection-specific qualifiers; do **not** ask early underwriting inputs (e.g., income bands, time-in-role/time trading) and do **not** request document uploads.
4. Any legal entity selector appears only inside the relevant **Business / Farmer / Solar** forms (packaging-only), never for Individuals and never as a solutions-level concept.
5. On submit, the payload is sent to Pocket Business to trigger follow-up automations. The post-submit screen is a **confirmation/outcome message defined per PB form** (not a generic site-wide message) and must avoid “approval” language.



## 1. Purpose and scope

### 1.1. What this document defines

This document defines the universal interaction pathway from:
1. **Pathway selection** (Individual / Business / Farmer / Developer / Solar & Backup Power)
2. **Option selection** (specific finance purpose)
3. **Eligibility check** (a guided enquiry that routes the user to the right funding route)
4. **Submit** (handoff to consultant-led follow-up)

### 1.2. Experience intent

The experience is designed to:
1. Reduce user stress and hesitation.
2. Provide calm, practical guidance while the user chooses.
3. Collect only the information needed to route the case properly.
4. Improve completion rates by removing uncertainty and admin friction.

### 1.3. Important clarity (non-negotiable)

1. **This is not approval.** It starts a structured lender-match request and follow-up.
2. **Credibility is not the job of the experience space.** The selector + enquiry flow is for guidance + action. (Marketing pages carry the heavier proof/credibility load.)
3. **We do not chase documents upfront.** We educate on what may be needed, and only move to documents once the route is clear and worth pursuing.

---

## 2. Key definitions (single source of meaning)

### 2.1. Core journey definitions

1. **Pathway:** the user’s broad route selection (e.g., Individual, Business).
2. **Option:** the specific finance purpose selected within a pathway (e.g., Residential property finance).
3. **Eligibility check:** a guided enquiry that establishes fit and routing inputs (not approval).
4. **Dedicated enquiry form:** the form that collects the minimum viable details for a structured lender-match request and follow-up.
5. **Guidance module (Guidance Panel):** the information area that explains what a selection means, why questions are asked, and what happens next.
   1. Desktop: typically presented as a side panel.
   2. Mobile: may appear as a drawer, accordion, or collapsible section.
6. **Action module (Action Panel):** the selection area (States A–C) or the dedicated enquiry form (State D).
7. **Protection options:** optional, opt-in insurance/assurance discussions and referrals (see IA-01).

### 2.2. Outcomes and expectations

1. The user should always understand:
   1. Where they are in the journey.
   2. What the next step is.
   3. What will happen after they submit.
2. The system should never imply:
   1. Guaranteed outcomes.
   2. Instant decisions.
   3. Approval certainty.

---

## 3. System states (universal)

### 3.1. State A — Pathway page loaded (no option selected)

1. Guidance module shows **static guidance** for the selected pathway.
2. Action module shows available options.

### 3.2. State B — Hover/focus on options (optional)

1. Optional micro-guidance may appear, but must remain short.
2. No additional claims, no new promises.

### 3.3. State C — Option selected

1. Guidance module updates to **option-specific guidance**.
2. Action module confirms selection and enables the **“Check eligibility”** CTA.

### 3.4. State D — Dedicated enquiry form open

1. Guidance module provides:
   1. What we’re checking.
   2. Why we ask the key questions.
   3. What happens next.
2. Action module shows the form steps.

### 3.5. State E — Submission confirmation

1. Restates the process (PV-01).
2. Confirms what was received.
3. Sets follow-up expectations.
4. Restates truth-lines (not approval).

---

## 4. Universal process visualisation (PV-01)

### 4.1. PV-01 must appear consistently

Use the same four-step structure anywhere PV-01 appears (selector flows, solution detail pages, confirmation screens):

1. **We listen then structure**
2. **Matched to the right funders**
3. **Funder-ready packaging**
4. **Driven follow-through**

### 4.2. PV-01 writing constraints

1. Do not imply instant results.
2. Keep it calm and practical.
3. Avoid jargon.
4. Use plain, human language.

---

## 5. Universal trust layer (TL-01)

### 5.1. TL-01 purpose

TL-01 reduces anxiety by stating the truth plainly and consistently.

### 5.2. TL-01 must include (minimum)

1. **Not approval:** “This starts a structured lender-match request and consultant follow-up — it is not approval.”
2. **Assessment reality:** “All outcomes are subject to assessment and the final decision by the relevant funder.”

### 5.3. Optional additions (only if maintained)

1. “We work with banks and a network of registered finance providers and investors. Options depend on fit and assessment.”
2. If partner credentials are displayed anywhere, they must be verified and governed by one controlled source.

---

## 6. Form model (universal)

### 6.1. Form step pattern

1. **Step 1:** Context + eligibility qualifiers.
2. **Step 2:** Personal (or representative) details + contact.
3. **Step 3:** Consent + review + submit.

### 6.2. Universal submission CTA

Use: **“Continue with eligibility”**

### 6.3. Non-negotiable truth-lines on forms

Always include, visibly:
1. “This enquiry starts a structured lender-match request and consultant follow-up — it is not approval.”
2. “All outcomes are subject to assessment and the final decision by the relevant funder.”

---

## 7. Guidance module content model (Guidance Panel)

### 7.1. Static guidance (applies to the selected pathway)

Recommended blocks (short, scannable):
1. Calm orientation (“Choose an option on the right to see what fits”).
2. One sentence on what the pathway is for.
3. One sentence on what we do (route-first, not paperwork-first).
4. One sentence on what happens next (PV-01 shorthand).
5. Truth-line (TL-01).
6. One rotating perspective nugget (see 7.4).

### 7.2. Dynamic guidance (changes when an option is selected)

When an option is selected, guidance should:
1. Explain what the option covers.
2. Explain what makes it viable/non-viable in plain terms.
3. Mention what information will be checked (no jargon).
4. Include fees expectations microcopy (7.10) where relevant.
5. Keep it short.

### 7.3. Documents language (reduce admin burden)

Use this pattern wherever documents are mentioned:
1. **Heading:** “Documents (when you’re ready)”
2. **Body:** “If you have it, great. If not, submit anyway — we’ll confirm what’s needed during follow-up.”

### 7.4. Perspective nuggets (rotate, one line)

A “perspective nugget” is a single line that reduces anxiety and improves decision quality.

Examples:
1. “Route first, paperwork second — that’s how you save weeks.”
2. “If you’re unsure about a figure, estimate it — we’ll confirm it during follow-up.”
3. “A good submission is not more paperwork — it’s the right paperwork.”

### 7.5. Guidance module change rules (locked)

The guidance module may update only when one of these events occurs:
1. Pathway selected.
2. Option selected.
3. Form opened.
4. Submission confirmed.
5. Validation errors returned.

### 7.6. Guidance content format (universal pattern)

For any state where guidance is shown (States A–D), keep the structure:
1. Where you are / what this selection means.
2. What we’re checking (in plain terms).
3. What we need from you (minimum viable inputs).
4. What happens next / what you should do next (one line).

Allowed additions (optional, must stay short and truthful):
1. One trust line if TL-01 is not visible elsewhere.
2. One rotating perspective nugget.

### 7.7. Form-level guidance (State D)

Form-level guidance should:
1. Explain the most confusing field(s) in that pathway.
2. Provide “how to answer” hints (not “what we want to hear”).
3. Reduce fear around imperfect information (“estimate if unsure”).

### 7.8. Perspective nuggets — rotation rule (clarification)

Allowed moments to swap the single nugget line:
1. Pathway selected.
2. Option selected.
3. Form opened.
4. Page reload.

### 7.9. Enriching education when options are selected (State C)

When an option is selected, the guidance may include one short educational block:
1. “What typically causes delays” (1–2 lines).
2. “What improves outcomes” (1–2 lines).

### 7.10. Fees expectations microcopy (State C) — locked

#### 7.10.1. Purpose
Set expectations without scaring users or making unverified promises.

#### 7.10.2. When to show
Show the relevant fees microcopy when:
1. The user selects an option (State C), and/or
2. The user opens the form (State D).

#### 7.10.3. Writing rules
1. Keep to **2–3 short sentences**.
2. Lead with “free to start” if that is true.
3. If any client-paid fee may apply:
   1. Frame it as **case-dependent**.
   2. State it is **disclosed and agreed before work proceeds**.
4. Do not quote amounts publicly unless formally approved in one controlled place.

#### 7.10.4. Fees microcopy by pathway + option (use verbatim; do not rewrite)

1. **UX1 — Individuals**
   1. **Residential property finance**
      - “Good news: in many residential matters there’s no upfront service fee — we’re often remunerated by the lender once finance is successfully registered (subject to lender arrangements). If any client-paid fee applies, it will be disclosed and agreed before work proceeds.”
   2. **Vehicle finance**
      - “Your eligibility check is free to start, so you can understand your options first. If any fees apply later, we will disclose and agree them before work proceeds.”
   3. **Asset finance**
      - “Your eligibility check is free to start, so you can understand feasibility quickly. If any client-paid fee applies, it will be disclosed and agreed before work proceeds.”
   3. **Debt help / debt review**
      - “Your initial assessment is free to start so we can route you to the most suitable option. If any client-paid fee applies, it will be disclosed and agreed before work proceeds.”

2. **UX3 — Businesses**
   1. **Working capital (secured)**
      - "The eligibility check is free to start - we first confirm fit and the best lender pathway. If any client-paid fee may apply, it's always disclosed and agreed before work proceeds."
   2. **Working capital (unsecured)**
      - "The eligibility check is free to start. If any client-paid fee may apply, it's always disclosed and agreed before work proceeds."
   3. **Bridging finance**
      - "The eligibility check is free to start. If specialist structuring is required, any client-paid fee is disclosed and agreed before work proceeds."
   2. **Residential property finance (via business/trust)**
      - “We start with a no-cost suitability check so you can confirm whether a residential property route via a business or trust is viable. If any client‑paid fee may apply (case‑dependent), it’s always disclosed and agreed before work proceeds.”
   3. **Commercial property finance**
      - “We begin with a no-cost suitability check to confirm fit and route. If any client‑paid sourcing/processing fee is disclosed and agreed before work proceeds.”
   4. **Industrial property finance**
      - “Start with a free suitability check so you’re not wasting time on the wrong route. Any client‑paid processing fee is disclosed and agreed before work proceeds.”
   5. **Asset & vehicle finance (business)**
      - “We start with a free fit-check to confirm the best route and lender type. Any client‑paid fee is disclosed and agreed before work proceeds.”
   6. **Business rescue**
      - “We begin with a free triage to understand urgency and fit. If any client‑paid fee may apply, it’s always disclosed and agreed before work proceeds.”


3. **UX2 — Farmers**
   1. **Agricultural property finance**
      - “Your initial suitability check is free to start, so we can confirm the best route before you collect paperwork. If specialist packaging is required, any client-paid fee is disclosed and agreed before work proceeds.”
   2. **Equipment / vehicle finance**
      - “Start with a free fit-check to confirm the best lender route for your asset and trading profile. If specialist packaging is required, any client-paid fee is disclosed and agreed before work proceeds.”
   3. **Working capital / seasonal funding**
      - “We begin with a free suitability check to confirm fit and timing. If specialist structuring is required, any client-paid fee is disclosed and agreed before work proceeds.”
4. **UX4 — Developers**
   1. **Property Development**
      - “We start with a no-cost suitability check to confirm fit and timing. If any client-paid fee applies for packaging or processing, it will be disclosed and agreed before work proceeds.”
   2. **Industrial Property**
      - “Your suitability check is free to start, so you can confirm fit before investing time in documents. If any client-paid fee applies for packaging or processing, it will be disclosed and agreed before work proceeds.”
   3. **Commercial Property**
      - “Begin with a free fit-check to confirm lender appetite and route. If any client-paid fee applies for packaging or processing, it will be disclosed and agreed before work proceeds.”
   4. **Refurbishments & Conversions**
      - “We start with a free suitability check based on scope, cost, and timeframe. If any client-paid fee applies for packaging or processing, it will be disclosed and agreed before work proceeds.”
   5. **Bridging finance**
      - “Your initial suitability check is free to start, so you can confirm viability before doing heavy paperwork. If any client-paid fee applies for packaging or processing, it will be disclosed and agreed before work proceeds.”

5. **UX5 — Solar / Backup Power**
   1. **Residential solar / backup power finance**
      - “Your solar eligibility check is free to start, so you can see what’s feasible before doing extra paperwork. If specialist structuring is needed, any processing fee is disclosed and agreed before work proceeds.”
   2. **Business solar / backup power finance**
      - “Start with a free fit-check to confirm lender appetite and likely terms. If additional packaging is required, any processing fee is disclosed and agreed before work proceeds.”
   3. **Agriculture solar / backup power finance**
      - “We begin with a free eligibility check based on your usage profile and project scope. If specialist structuring is needed, any processing fee is disclosed and agreed before work proceeds.”
   4. **Battery & inverter upgrade**
      - “The first check is free — we confirm the best route for your upgrade goals. If specialist structuring is needed, any fee is disclosed and agreed before work proceeds.”

### 7.11. Protection options microcopy (Insurance & Assurance) — locked

#### 7.11.1. Purpose
Offer protection discussions as an optional add-on without implying underwriting or outcomes.

#### 7.11.2. When to show
1. State C: show as an optional note (single line).
2. State D: show as an optional checkbox with disclosure.

#### 7.11.3. Verbatim microcopy (do not rewrite)

1. **Short note (State C):**
   - “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”
2. **Form checkbox label:**
   - “Also discuss protection options (optional)”
3. **Short disclosure (below checkbox):**
   - “Protection options are handled through the relevant associated business partners and/or registered advisers, and outcomes are subject to their assessment and underwriting.”

---

## 8. Lender Network Proof Layer (LN-01) — optional but powerful

### 8.1. If used, LN-01 must be maintained

1. Do not list lenders unless a maintained source-of-truth list exists.
2. Do not imply any lender endorsement.
3. Always include: “Panel may vary by product and applicant profile.”

---

## 9. Submission confirmation (universal)

Confirmation must:
1. Re-state PV-01.
2. Confirm what we received.
3. State what happens next.
4. Set follow-up expectation (truthful; no unguaranteed turnaround promises).
5. Re-state TL-01 truth-lines.

---

## 10. Error handling (universal)

1. Tone: calm, specific, non-blaming.
2. Display rule:
   1. Highlight the field.
   2. Provide one clear fix instruction.
   3. Keep guidance focused on the first error until resolved.

---

## 11. Data minimisation (POPIA-aligned)

1. Collect only what is needed for the lender-match request and follow-up.
2. Avoid sensitive fields unless absolutely required for routing.
3. Do not collect underwriting detail at the eligibility enquiry stage.

---

## 12. Routing tags (internal)

Each submission must include:
1. **pathway** (e.g., Individual, Business, Farmer, Developer, Solar & Backup Power)
2. **option** (the selected purpose)
3. **legal_entity_context** (form-only; only where required for packaging)
4. **product_category** (taxonomy label, where relevant)
5. **protection_interest** (Yes/No, if captured)

---

## 13. Content consistency rules

1. UX1–UX5 must follow this document.
2. If any UX1–UX5 content conflicts with this document, **UX0 wins**.

---

## 14. Compliance and disclosure

1. Do not imply approval.
2. Always include: outcomes subject to funder assessment and final decision.
3. Protection options are opt-in only and follow separate assessment/underwriting processes.

---

## 15. Copy governance (non-negotiable)

### 15.1. Truthfulness rules

1. Keep copy truthful and calm; do not imply instant results.
2. Avoid approval language:
   1. “guaranteed”, “approved”, “pre-approved”, “instant approval”, “automatic approval”.
3. **UI terminology standard:** Use **“Eligibility check”** (avoid “pre-check” in UI labels).

### 15.2. Regulatory number rules

1. Do not display FAIS/FSP/NCR numbers unless verified and published in one controlled place.
2. Any verification links must point to official registers.

### 15.3. Lender panel rules

1. Do not list lenders unless you have a maintained source-of-truth list.
2. Do not imply endorsement.
3. Always include: “Panel may vary by product and applicant profile.”

### 15.4. SLA / turnaround promise rules

1. Any turnaround promise must be operationally guaranteed.
2. If operations cannot support a promise, remove it everywhere and replace it with a truthful alternative.

### 15.5. Conflict rule

If any page copy conflicts with this document’s locked copy patterns, this document wins.

### 15.6. Fee disclosure rules

1. Allowed “free to start” claims:
   1. “Free to start” means no upfront service fee for the initial routing/suitability check.
   2. It does not remove third-party costs (if any) or specialist work that may be agreed later.
2. Residential phrasing rule:
   1. On residential matters, prefer “often remunerated by the lender once finance is successfully registered (subject to lender arrangements)”.
3. When a fee may apply:
   1. For complex, commercial, or specialist packaging work.
   2. Frame it as supporting proper packaging and a stronger submission.
4. Upfront agreement (mandatory):
   1. Any client-paid fee must be disclosed and agreed before work proceeds.
5. Avoid numbers in public microcopy:
   1. Do not quote amounts publicly unless formally approved and governed by one controlled source.

### 15.7. Insurance/assurance disclosure rules (IA-01 alignment)

1. Protection options must be presented as optional (opt-in only).
2. Never imply underwriting, acceptance, premium outcomes, or claims outcomes.
3. Keep finance placement and protection underwriting as separate processes.
4. Do not collect underwriting detail at the eligibility enquiry stage.

---

## 16. Insurance & Assurance Specification (IA-01) — single reference

### 16.1. Purpose

Insurance and assurance sit alongside finance to support risk protection and to reduce late-stage friction when proof of cover is required.

### 16.2. Scope (what this covers)

1. **Insurance (examples):**
   1. Home-owners’ insurance (property cover)
   2. Public liability cover
   3. Harvest insurance (where applicable)
   4. Insurance for vehicles, equipment and systems
2. **Assurance (examples):**
   1. Loan protection cover (credit life) (linked to a loan; disability/death event protection of principal debt)
   2. Whole life assurance + estate planning assessment through registered financial advisers

### 16.3. Where IA-01 appears in the journey

1. State C: optional note (7.11.3).
2. State D: optional checkbox + categories (interest-only).

### 16.4. Data capture (minimum viable; interest-only)

Capture interest only:
1. Opt-in checkbox.
2. Category multi-select.
3. Existing cover (Yes/No/Not sure).
4. Existing provider (optional).

### 16.5. Relevance mapping (categories to show by Pathway)

Use this mapping when showing the multi-select list after opt-in:

1. **Individual (residential property contexts)**
   1. Home-owners’ insurance
   2. Loan protection cover (credit life)
   3. Whole life assurance + estate planning assessment
2. **Business (commercial contexts)**
   1. Public liability cover
   2. Insurance for vehicles, equipment and systems
   3. Loan protection cover (credit life) (where applicable)
   4. Whole life assurance + estate planning assessment
3. **Farmer**
   1. Harvest insurance (where applicable)
   2. Insurance for vehicles, equipment and systems
   3. Public liability cover (where applicable)
   4. Whole life assurance + estate planning assessment
4. **Developer**
   1. Public liability cover
   2. Insurance for vehicles, equipment and systems
   3. Whole life assurance + estate planning assessment
5. **Solar / Backup Power**
   1. Insurance for vehicles, equipment and systems (equipment/system cover)

### 16.6. Consent and sharing rules (POPIA alignment)

1. No referral or sharing for insurance/assurance may occur without explicit opt-in.
2. If opted in, information may be shared only for the agreed purpose and with the relevant associated business partners and/or registered advisers.
3. Users may withdraw consent at any time.

### 16.7. Implementation-ready field labels (verbatim)

1. Checkbox: “Also discuss protection options (optional)”
2. Categories (multi-select): “Which protection options should we include?”
3. Existing cover: “Do you already have cover in place?” (Yes / No / Not sure)
4. Existing provider (optional): “Existing insurer/broker (optional)”
5. Disclosure (below checkbox):
   - “Protection options are handled through the relevant associated business partners and/or registered advisers, and outcomes are subject to their assessment and underwriting.”

---

## 17. Property Finance Terminology Standard (PF-01) — locked

### 17.1. Purpose

Prevent category drift (e.g., “home finance” vs “residential property finance”) and keep labels, routing, reporting, and forms consistent.

### 17.2. Locked taxonomy label (system language)

Use **“Residential property finance”** as the official category label wherever it appears (selection cards, headings, form titles, routing tags, CRM fields).Do not invent sub-products such as:
1. “home finance”
2. “home loans” (as a category label)
3. “flat finance”

### 17.3. Allowed plain-language phrases (user language)

In selection cards, guidance copy, FAQs, and SEO support text, it is acceptable to use everyday phrases that mean the same thing (e.g., “buy a home”, “refinance my home”, “mortgage”, “bond”), provided taxonomy and routing remain locked.

### 17.4. Rule: taxonomy vs intent (apply site-wide)

1. **Taxonomy (category):** must remain “Residential property finance”.
2. **Selection cards (intent):** may use intent-first titles such as “Buy a home” or “Refinance my home”, provided the selected option still routes to “Residential property finance”.
3. **Supporting copy:** may use the natural phrases above, but must not create new categories or separate routing paths.

### 17.5. Implementation notes (UI patterns)

1. Use intent-first labels where it reduces friction.
2. Use taxonomy labels where it prevents routing/reporting drift.

---

**End of UX0 v1.0**
