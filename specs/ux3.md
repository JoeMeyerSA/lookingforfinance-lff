# ux3 — Businesses Pathway Specification (LFF) v2.0

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


## Document control

1. **File ID + Title:** UX3 — Businesses Pathway Specification (LFF)
2. **Version:** v2.0
3. **Status:** Active
4. **Applies to:** LookingForFinance.co.za — Business pathway selector + Business eligibility forms (BIZ‑A to BIZ‑H)
5. **Owner:** LookingForFinance (LFF)
6. **Last updated:** 2026-01-08
7. **Precedence note:** If this conflicts with **UX0** or **SOL‑01**, **UX0 / SOL‑01** win.
8. **References:** UX0, SOL‑01, PX‑01, DATA‑01

## Change log

- **v2.0 (2026-01-08):** Split working capital into secured and unsecured options. Added explicit bridging finance option with dedicated Form BIZ-H. Enhanced guidance for unsecured business finance (merchant/vendor criteria) and bridging finance (property requirements). Added conditional fields to Form BIZ-A for secured/unsecured differentiation.

- **v1.2 (2026-01-08):** Replaced “bureau checks” wording with “bureau checks”.

## Conformance stamp (universal)

This UX specification conforms to **UX0 — Selector‑to‑Enquiry Interaction Pathway (v1.0)** and must apply its universal rules throughout, including:

1. **Guidance trigger rules:** Guidance may change only on pathway change, option change, form open, field focus, or submit validation errors (no timed rotation).
2. **Validation priority rule:** After a submit attempt with errors, guidance focuses on the **first invalid field** until corrected or focus changes.
3. **Guidance structure:** Use the same four-block structure — **You’re doing / Why we ask / What to enter / What happens next**.
4. **Fees microcopy:** Where fees are shown in guidance, use the canonical copy stored in **UX0** (verbatim — do not rewrite).
5. **Copy governance:** No implied certainty; outcomes depend on assessment and the final decision by the relevant funder.
6. **Protection options:** Optional, opt‑in only; use the locked UX0 microcopy (verbatim).

---

# 1. Scope and intent

1.1. **What this document defines**

1. Defines the Businesses pathway selector behaviour.
2. Defines the dedicated eligibility enquiry forms that start a structured lender‑match request for Business users.
3. Defines guidance content rules that educate while the user selects options.

1.2. **Hard boundary (truth line)**

1. This is **not approval**.
2. This starts a structured lender‑match request and consultant follow‑up.
3. All outcomes remain subject to assessment and the final decision by the relevant funder.

1.3. **Solar boundary (locked)**

1. No Solar / Backup Power options may appear inside the Business pathway.
2. Solar must be routed only via the Solar / Backup Power pathway.

---

# 2. Intended user experience

2.1. The user experience should feel like:

1. “I choose what I need.”
2. “I understand what it means before I commit.”
3. “I submit a short eligibility enquiry without admin overload.”
4. “I get a clear follow‑up without false promises.”

---

# 3. Page structure and responsive behaviour

3.1. **Desktop layout (two‑module view)**

1. **Guidance module (left panel):** capacity selector (Business active) + dynamic guidance.
2. **Action module (right panel):** Business options + dynamic Primary CTA.

3.2. **Mobile layout (stacked)**

1. Guidance may collapse into a drawer/accordion.
2. After Business is selected, the UI must guide the user to the option tiles.
3. “Start over” returns the user to the neutral top view.

---

# 4. State model (what changes when)

4.1. **State A — Business selected, no option selected**

1. Action module: options list visible.
2. Primary CTA: disabled.
3. Primary CTA label (disabled): **“Select an option to check eligibility”**.
4. Guidance module: Business orientation guidance.

4.2. **State B — A specific Business option selected**

1. Action module: selected option highlighted.
2. Primary CTA: enabled.
3. Primary CTA label (enabled): **“Check eligibility for {Selected option}”** (updates immediately on selection change).
4. Guidance module: option‑specific guidance (including fees expectations copied verbatim from UX0).

4.3. **State C — Dedicated enquiry form open (BIZ‑A…BIZ‑E)**

1. Guidance module: form‑level guidance + field micro‑guides on focus/errors.
2. Action module: the dedicated form.
3. Submit button label (locked): **“Continue with eligibility”**.

4.4. **State D — Submission confirmation**

1. Confirmation headline: “Eligibility request received.”
2. Restate truth lines (not approval) + what happens next.

---

# 5. Navigation and reset behaviour

5.1. **Change pathway (global behaviour)**

1. Selecting a different pathway clears the selected Business option.
2. Any open Business form is closed.
3. Primary CTA returns to the disabled state.

5.2. **Start over (global behaviour)**

1. Clears pathway + option selections.
2. Closes any open form.
3. Returns to neutral view (mobile scrolls back to top).

5.3. **Change option (within Business)**

1. Switching options updates guidance immediately.
2. If a form is already open and changing option will lose entered data:
   1. Warn the user.
   2. Confirm intent.

---

# 6. Guidance module rules (left panel)

6.1. **Purpose**

1. Reduce uncertainty by explaining what each option means.
2. Improve data quality by explaining what matters for first‑pass routing.
3. Increase completion by giving permission to estimate where exact numbers are hard to know.

6.2. **Trigger rules (locked; UX0)**

Guidance may change only on:

1. Pathway change.
2. Option change.
3. Form open.
4. Field focus.
5. Submit validation errors.

6.3. **Universal four‑block format (locked)**

1. You’re doing
2. Why we ask
3. What to enter
4. What happens next

6.4. **Allowed additions (must stay short)**

1. “Most delays happen when…” (1–2 lines)
2. “What helps / speeds this up…” (1–2 lines)
3. “Documents (when you’re ready)” (education only — no uploads)

6.5. **Fees microcopy (verbatim; do not rewrite)**

1. When an option is selected (State B), show a short **Fees** block.
2. Copy/paste the exact fees microcopy row from **UX0 → Fees expectations microcopy** for that option.

6.6. **Protection options microcopy (verbatim; do not rewrite)**

1. When an option is selected (State B), show the single optional line:
   1. **“Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”**
2. On forms (State C), show the optional checkbox + disclosure exactly as defined in UX0.

---

# 7. Business options (selector stage)

7.1. **Options catalogue (locked for v2.0)**

1. Working capital (secured)
2. Working capital (unsecured)
3. Bridging finance
4. Residential property finance (via business/trust)
5. Commercial property finance
6. Industrial property finance
7. Vehicle finance (business)
8. Asset finance (business)
9. Business rescue

7.2. **Tile behaviour (single‑select, non‑toggle)**

1. Tiles behave as a single‑select set (radio behaviour).
2. Selecting a tile:
   1. Applies “selected” state to that tile.
   2. Clears “selected” state from any other tile.
   3. Updates guidance to the matching content.
   4. Updates Primary CTA label immediately.
3. Clicking the selected tile again does not de‑select.

7.3. **Selector helper microcopy (under CTA)**

1. When disabled: **“Select an option above to continue.”**
2. When enabled: **“2–3 minutes • No obligation.”**
3. Disclaimer (always visible): **“All outcomes are subject to assessment and the final decision by the relevant funder.”**

7.4. **Routing map (selector → form)**

1. Working capital (secured) → Form **BIZ‑A1** (or BIZ‑A with conditional secured fields)
2. Working capital (unsecured) → Form **BIZ‑A2** (or BIZ‑A with conditional unsecured fields)
3. Bridging finance → Form **BIZ‑H**
4. Residential property finance (via business/trust) → Form **BIZ‑F**
5. Commercial property finance → Form **BIZ‑B**
6. Industrial property finance → Form **BIZ‑C**
7. Vehicle finance (business) → Form **BIZ‑D**
8. Asset finance (business) → Form **BIZ‑G**
9. Business rescue → Form **BIZ‑E**

---

# 8. Left panel guidance content library (selector stage)

## 8.1 State A — Business selected, no option selected (orientation)

1. **You’re doing:** You’re exploring business finance options.
2. **Why we ask:** We match the right route first, before paperwork — so you don’t waste weeks on the wrong option.
3. **What to enter:** Select the option that best matches what you need. Rough estimates are fine.
4. **What happens next:** Once you submit, a consultant reviews your request and follows up. We only move to documents once the route is clear and worth pursuing.

## 8.2 State B — Option selected (use the block for the selected option)

### 8.2.1A Working capital (secured)

1. **You're doing:** Starting a lender-match request for asset or property-backed working capital.
2. **Why we ask:** Secured lending depends on security type, value, and business serviceability.
3. **What to enter:** Amount needed, security type (property/asset/debtors/stock), timing, and what the funds are for.
4. **What happens next:** We confirm fit and security position, then only request supporting documents if it's worth pursuing.
5. **Most delays happen when:** Security position is unclear or existing encumbrances aren't disclosed.
6. **What helps / speeds this up:** Clear security details, realistic valuation, and honest existing facility disclosure.
7. **Fees (verbatim; UX0):**
   1. "The eligibility check is free to start - we first confirm fit and the best lender pathway. If any client-paid fee may apply, it's always disclosed and agreed before work proceeds."
8. **Protection options (verbatim; UX0):**
   1. "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."

### 8.2.1B Working capital (unsecured)

1. **You're doing:** Starting a lender-match request for sales performance-backed working capital (merchants/vendors only).
2. **Why we ask:** Unsecured business funding requires proven card-based turnover and stable trading history. This is NOT personal lending - it's business credit.
3. **What to enter:** Monthly card turnover estimate, months trading, and funding purpose.
4. **What happens next:** We confirm merchant/vendor eligibility criteria, then structure the safest route.
5. **Most delays happen when:** Turnover expectations don't match reality or trading history is too short.
6. **What helps / speeds this up:** Honest monthly card turnover (R30k+ merchants, R60k+ vendors), accurate trading months (6+ merchants, 12+ vendors), and POS device confirmation.
7. **Eligibility note:** Merchants require 6+ months operational and R30k+ monthly card turnover. Vendors require 12+ months operational and R60k+ monthly card turnover. Business registration required - personal loans are NOT offered.
8. **Fees (verbatim; UX0):**
   1. "The eligibility check is free to start. If any client-paid fee may apply, it's always disclosed and agreed before work proceeds."
9. **Protection options (verbatim; UX0):**
   1. "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."

### 8.2.1C Bridging finance

1. **You're doing:** Starting a lender-match request for property-backed short-term bridging finance.
2. **Why we ask:** Bridging finance requires unencumbered property as security, clear repayment trigger, and sufficient equity.
3. **What to enter:** Property value estimate, loan amount required, property status (unencumbered/bonded), and repayment trigger (sale/refinance/other).
4. **What happens next:** We confirm property position and equity adequacy, then structure the bridging route.
5. **Most delays happen when:** Property isn't unencumbered, equity is insufficient (<40%), or repayment trigger is vague.
6. **What helps / speeds this up:** Confirmed unencumbered property, realistic value (typically R500k+ minimum), equity position (40-60% of value), and clear repayment event with timing.
7. **Eligibility note:** Property must be unencumbered (no existing bond) or have sufficient equity for a second position. Minimum property value typically R500k+. Loan amount usually 40-60% of equity/value.
8. **Fees (verbatim; UX0):**
   1. "The eligibility check is free to start. If specialist structuring is required, any client-paid fee is disclosed and agreed before work proceeds."
9. **Protection options (verbatim; UX0):**
   1. "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."
### 8.2.2 Commercial property finance

1. **You’re doing:** Starting a lender‑match request to buy or refinance owner‑occupied or income‑producing commercial premises.
2. **Why we ask:** Property purpose, deposit and affordability (trading or rental) shape viability.
3. **What to enter:** Property value / purchase price, deposit estimate, and whether it’s owner‑occupied or investment.
4. **What happens next:** We confirm the best lender route, then request supporting documents only once the route is clear.
5. **Most delays happen when:** Owner‑occupied vs investment isn’t clear, or rental expectations are unrealistic.
6. **What helps / speeds this up:** A realistic value range, deposit estimate, and occupancy intent.
7. **Fees (verbatim; UX0):**
   1. “We begin with a no-cost suitability check to confirm funder appetite and likely terms. If specialist packaging is required, any raising/processing fee is disclosed and agreed before work proceeds.”
8. **Protection options (verbatim; UX0):**
   1. “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”

### 8.2.3 Industrial property finance

1. **You’re doing:** Starting a lender‑match request for an industrial property (warehouse, factory, yard, etc.).
2. **Why we ask:** Industrial deals can be lender‑specific and depend heavily on intended use and risk.
3. **What to enter:** Property value / purchase price, deposit estimate, and intended use.
4. **What happens next:** We confirm lender appetite and information requirements, then request documents only once the route is clear.
5. **Most delays happen when:** Intended use is vague or zoning/use isn’t aligned.
6. **What helps / speeds this up:** A clear use description and realistic deposit estimate.
7. **Fees (verbatim; UX0):**
   1. “Start with a free suitability check so you’re not guessing. If specialist packaging is required, any processing fee is disclosed and agreed before work proceeds.”
8. **Protection options (verbatim; UX0):**
   1. “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”

### 8.2.4 Vehicle finance (business)

- **Primary CTA label:** “Continue with vehicle finance”
- **Guidance (left panel):**
  - “Vehicle finance needs a few specifics (new vs used, dealer vs private, term, balloon) so we can structure the right route first.”
  - “Your eligibility check is free to start. Paperwork only comes later if the route is worth pursuing.”
  - “If you’re not sure, choose ‘Not sure’ — we’ll clarify on follow‑up.”

### 8.2.5 Asset finance (business)

- **Primary CTA label:** “Continue with asset finance”
- **Guidance (left panel):**
  - “Asset finance covers equipment, machinery, tools and business fit‑outs — the data we need differs from vehicle finance.”
  - “Your eligibility check is free to start. Paperwork only comes later if the route is worth pursuing.”
  - “If you’re not sure, choose ‘Not sure’ — we’ll clarify on follow‑up.”

### 8.2.6 Business rescue

1. **You’re doing:** Requesting an urgent triage to determine the safest route (rescue, restructure, refinance, or negotiated settlement).
2. **Why we ask:** Time sensitivity and creditor pressure determine what is realistically possible.
3. **What to enter:** A short summary, urgency, and the biggest pressure point.
4. **What happens next:** We confirm the best immediate path and route you to the safest specialist and lender/partner process.
5. **Most delays happen when:** Urgency is understated or creditor actions are not disclosed.
6. **What helps / speeds this up:** Honest urgency and a clear list of the main pressure points.
7. **Fees (verbatim; UX0):**
   1. “We begin with a free triage to understand urgency and options. If specialist work is required, any client-paid fee is disclosed and agreed before work proceeds.”
8. **Protection options (verbatim; UX0):**
   1. “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”

---
### 8.2.7 Residential property finance (via business/trust)

1. **You’re doing:** Starting an eligibility enquiry for **residential property finance** where the buyer/holder is a business or trust.
2. **Why we ask:** Entity structure and affordability are assessed differently to an individual application, so we confirm fit before any paperwork.
3. **What to enter:** Estimated property value, deposit estimate, and a short note on the purpose (e.g., investment/rental, staff accommodation, other).
4. **What happens next:** We confirm the most sensible route first, then only request supporting documents if it’s worth pursuing.
5. **Most delays happen when:** The purpose is unclear or the entity details are incomplete.
6. **What helps / speeds this up:** A clear purpose, realistic numbers, and the correct entity type selected.
7. **Fees (verbatim; UX0):**
   1. “We start with a no-cost suitability check so you can confirm whether a residential property route via a business or trust is viable. If any client‑paid fee may apply (case‑dependent), it’s always disclosed and agreed before work proceeds.”
8. **Protection options (verbatim; UX0):**
   1. “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”

# 9. Businesses eligibility forms (BIZ‑A to BIZ‑F)
## 9.1 Shared form structure (all business forms)

9.1.1 **Form‑open banner (top of form)**

1. Answer roughly — accuracy improves later.
2. If you’re not sure, estimate.
3. We only request documents once the route is clear and worth pursuing.

9.1.2 **Section 1 — Your details (representative)**

1. First name (required)
2. Surname (optional)
3. Role / position in the business (required)
4. Mobile number (required)
5. Email address (required)

9.1.3 **Section 2 — Communication preference**

1. Preferred contact method (WhatsApp / Phone call / Email) (required)
2. Best time to contact (optional)

9.1.4 **Section 3 — Legal entity submitting this application**

1. Legal entity type (Pty Ltd / Trust / Close corporation (CC)) (required)
2. Registered entity name (required)
3. Trading name (optional)
4. Registration / reference number (required)
5. Province (required)
6. Nearest town / city (optional)
7. Business website (optional)
8. What does the business do? (short description) (required)

9.1.5 **Section 4 — Eligibility details (varies by form)**

9.1.6 **Section 5 — Protection options (optional; UX0‑aligned)**

1. Checkbox (verbatim): **“Also discuss protection options (optional)”**
2. Disclosure (verbatim): **“Protection options are handled through the relevant associated business partners and/or registered advisers, and outcomes are subject to their assessment and underwriting.”**
3. If opted in, show:
   1. “Which protection options should we include?” (multi‑select)
   2. “Do you already have cover in place?” (Yes / No / Not sure)
   3. “Existing insurer/broker (optional)”

9.1.7 **Section 6 — POPIA & consent (shared)**

1. Privacy notice text (read‑only)
2. Required acknowledgement checkbox
3. Optional marketing checkbox

9.1.8 **Submit**

1. Submit button label (locked): **“Continue with eligibility”**

## 9.2 POPIA privacy notice (shared wording)

1. **Heading:** Privacy notice (POPIA)
2. **Body:** “We process your personal information to assess this eligibility request, contact you, and (where relevant) share your information with our registered lending partners for assessment. We collect only what is necessary for this purpose and keep it only for as long as needed. You may request access to, correction of, or object to the processing of your personal information, and you may lodge a complaint with the Information Regulator.”
3. **Required checkbox:** “I acknowledge the Privacy Notice and agree to the processing described above.”
4. **Optional marketing checkbox:** “I would like to receive useful updates and guidance about business finance (I can opt out at any time).”

---

# 10. Form‑specific fields (Section 4)

## 10.1 Form BIZ‑A — Business funding / working capital

1. Funding type (single‑select): Working capital / Term loan / Debtors finance (factoring) / Bridging finance / Other
2. Amount required (currency, R) (required)
3. Timeframe to proceed (single‑select): ASAP / 1–3 months / 3–6 months / 6+ months (required)
4. What will the funds be used for? (short free text) (required)
5. Any existing business debt/facilities? (short free text) (optional)

## 10.2 Form BIZ‑B — Commercial property finance

1. Request type (single‑select): Buy / Refinance (required)
2. Owner‑occupied or investment? (single‑select): Owner‑occupied / Investment / Not sure (required)
3. Property value / purchase price (currency, R) (required)
4. Deposit available (currency, R) (required; validation: deposit ≤ value)
5. Property type (single‑select): Office / Retail / Mixed‑use / Other (required)
6. If investment: expected monthly gross rental (currency, R) (optional)
7. Timeframe to proceed (single‑select): ASAP / 1–3 months / 3–6 months / 6+ months (required)
8. Notes (optional)

## 10.3 Form BIZ‑C — Industrial property finance

1. Request type (single‑select): Buy / Refinance (required)
2. Property type (single‑select): Warehouse / Factory / Yard / Other (required)
3. Property value / purchase price (currency, R) (required)
4. Deposit available (currency, R) (required; validation: deposit ≤ value)
5. Intended use (short free text) (required)
6. Timeframe to proceed (single‑select): ASAP / 1–3 months / 3–6 months / 6+ months (required)
7. Notes (optional)

## 10.4 Form BIZ‑D — Vehicle finance (business)

### 10.4.1 What do you want to do?

- Capture: Single-select
- Options: Purchase / Refinance to raise capital / Replace/upgrade / Not sure
- Validation: Required

### 10.4.2 What are you financing?

- Capture: Single-select
- Options: Motor vehicle / Boat / Caravan / Aircraft / Other
- Validation: Required
- Conditional: If Other, show “Other — what is it?” (text)

### 10.4.3 Purchase source

- Capture: Single-select
- Options: Registered dealer / Private sale / Not sure
- Validation: Required

### 10.4.4 Condition

- Capture: Single-select
- Options: New / Used / Not sure
- Validation: Required

### 10.4.5 Approx. price / value

- Capture: Currency (R)
- Validation: Required

### 10.4.6 Deposit available

- Capture: Single-select
- Options: 0% / 1–10% / 11–20% / 21%+ / Not sure
- Validation: Required

### 10.4.7 Preferred term

- Capture: Single-select
- Options: 36 / 48 / 60 / 72 / 84 months / Not sure
- Validation: Required

### 10.4.8 Balloon / residual required?

- Capture: Single-select
- Options: Yes / No / Not sure
- Validation: Required

### 10.4.9 Optional notes (keep it short)

- Capture: Free-text (max 1,000 chars)
- Validation: Optional

## 10.5 Form BIZ‑G — Asset finance (business)

### 10.5.1 Asset category

- Capture: Single-select
- Options: Equipment / Machinery / Tools / Fit‑out / Other
- Validation: Required
- Conditional: If Other, show “Other — what is it?” (text)

### 10.5.2 Approx. asset value (or amount needed)

- Capture: Currency (R)
- Validation: Required

### 10.5.3 Deposit available

- Capture: Single-select
- Options: 0% / 1–10% / 11–20% / 21%+ / Not sure
- Validation: Required

### 10.5.4 Condition

- Capture: Single-select
- Options: New / Used / Not sure
- Validation: Required

### 10.5.5 Timeframe to proceed

- Capture: Single-select
- Options: ASAP / 1–3 months / 3–6 months / 6+ months
- Validation: Required

### 10.5.6 Optional notes (keep it short)

- Capture: Free-text (max 1,000 chars)
- Validation: Optional

## 10.6 Form BIZ‑E — Business rescue

1. Situation (single‑select): Cashflow distress / In arrears / Restructuring required / Creditor pressure / Other (required)
2. Urgency (single‑select): ASAP / 1–3 months / 3–6 months / 6+ months (required)
3. Biggest pressure point (short free text) (required)
4. Any creditor actions already underway? (short free text) (optional)
5. Notes (optional)

---
## 10.7 Form BIZ‑F — Residential property finance (via business/trust)

1. Property value / purchase price (currency, R) (required)
2. Deposit available (currency, R) (required; validation: deposit ≤ value)
3. Timeframe to proceed (single‑select): ASAP / 1–3 months / 3–6 months / 6+ months (required)
4. Purpose (short free text) (required) — e.g., investment/rental, staff accommodation, other
5. Notes (optional)

# 11. Form lifecycle, errors, and post‑submit behaviour (build rules)

11.1. **Open‑form behaviour**

1. On Primary CTA click, open the dedicated form.
2. Move focus to the first editable field (First name).

11.2. **Submitting state**

1. On submit, disable the submit button and show a “Submitting…” state.
2. Preserve all entered values during submission.

11.3. **Validation and error display**

1. Validation occurs inline where sensible, but the primary trigger is a submit attempt.
2. After a submit attempt with validation errors:
   1. Show inline error messages under each invalid field.
   2. Guidance switches to the **first invalid field** micro‑guide (UX0 priority rule).
   3. Add a single guidance line: “We need this to route you correctly — otherwise we may match you to the wrong option first.”

11.4. **Network / server failure**

1. Do not clear the form.
2. Show: “We couldn’t submit your request just now. Please try again.”
3. Allow retry.

11.5. **Submit success (confirmation)**

On success, show a confirmation message containing:

1. “Eligibility request received.”
2. “A consultant will review and contact you on your preferred channel.”
3. “No bureau checks are performed at this stage.”
4. “All outcomes are subject to assessment and the final decision by the relevant funder.”

Preferred behaviour:

1. Make the form read‑only and show “Back to options”, or
2. Close the form and return to options (keep the selected tile highlighted).

---

# Appendix A — Data dictionary binding (UX3 → DATA‑01)

> This appendix binds UX3 fields to the canonical keys/enums in **DATA‑01**. Implementations must submit using these keys.
## A.1 Required top‑level fields (all Business forms)

1. **contact**
   1. contact.first_name (required)
   2. contact.surname (optional)
   3. contact.mobile (required)
   4. contact.email (required)

2. **enquiry**
   1. enquiry.capacity_path = business (required)
   2. enquiry.option_key (required)
   3. enquiry.option_label (required)
   4. enquiry.preferred_channel (enum: whatsapp / phone_call / email) (required)
   5. enquiry.notes (optional)
   6. enquiry.source (optional)
   7. enquiry.referrer_id (optional)
   8. enquiry.utm_source / utm_medium / utm_campaign / utm_term / utm_content (optional)
   9. enquiry.landing_path (optional)
   10. enquiry.created_at (required)

3. **eligibility_payload** (object; varies by form)

4. **consent**
   1. consent.popia_ack = true (required)
   2. consent.popia_ack_at (required)
   3. consent.marketing_opt_in (optional)

5. **Protection capture (optional; enquiry‑level; if shown)**

1. enquiry.protection_opt_in (boolean)
2. enquiry.protection_categories (array enum)
3. enquiry.protection_existing_cover (enum: yes / no / not_sure)
4. enquiry.protection_existing_provider (text; optional)

## A.2 Option keys (Business)

- Business funding / working capital: `bus_working_capital`
- Commercial property finance: `bus_commercial_property_finance`
- Industrial property finance: `bus_industrial_property_finance`
- Vehicle finance (business): `bus_vehicle_finance`
- Asset finance (business): `bus_asset_finance`
- Business rescue: `bus_business_rescue`
- Residential property finance (via business/trust): `bus_residential_property_finance`


## A.3 eligibility_payload keys (by form)

Keys must match DATA-01 Section 9 exactly.

- BIZ‑A (bus_working_capital): `eligibility_payload.bus_*`
- BIZ‑B (bus_commercial_property_finance): `eligibility_payload.bus_property_*`
- BIZ‑C (bus_industrial_property_finance): `eligibility_payload.bus_industrial_*`
- BIZ‑D (bus_vehicle_finance): `eligibility_payload.bus_vehicle_*`
- BIZ‑G (bus_asset_finance): `eligibility_payload.bus_asset_*`
- BIZ‑E (bus_business_rescue): `eligibility_payload.bus_rescue_*`
- BIZ‑F (bus_residential_property_finance): `eligibility_payload.bus_res_*`