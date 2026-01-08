# sol-01 — Solutions Offered & Scope (LFF) v1.3
LookingForFinance (LFF) — Solutions Offered, Scope Boundaries, and Cross-Cutting Rules

## 0. Change log
0.1. v1.0
- Established the canonical scope boundary and solution taxonomy for LFF.
- Locked Solar / Backup Power as a standalone pathway.
- Locked naming rules to prevent category drift (especially Residential property finance).
- Included IA-01 (Insurance & Assurance) as the single cross-cutting reference.

-

0.2. v1.1
- Added explicit exclusion: no personal loans / unsecured consumer credit.
- Reworded “credit life” insurance examples to “loan protection (credit life)”.
- Aligned Developer options with locked UX4 set (Property Development, Commercial, Industrial, Refurb/Conversions, Bridging).

0.3. v1.3
- Split working capital taxonomy into secured and unsecured variants.
- Added bridging finance as explicit Business option (previously implicit).
- Enhanced bridging finance criteria documentation (unencumbered property, R500k+, 40-60% equity).
- Clarified unsecured business finance ≠ personal loans (business-only, merchant/vendor criteria).

---


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



## 1. Purpose
1.1. This document defines:
   1) What solutions LFF may present to users.
   2) How solutions are grouped under the five gates (pathways).
   3) What LFF does and does not do (scope boundary).
   4) The “Subject to lender appetite” rule (when listing non-standard items).
   5) The specialist support lane (FAIS advice and accounting/tax support).
   6) IA-01 (Insurance & Assurance) as a cross-cutting, opt-in capability.

1.2. This document contains no design, layout, or styling instructions.

---

## 2. Core boundary (non-negotiable truth)
2.1. LFF facilitates introductions and structured submissions to suitable funders.
2.2. LFF is not a lender.
2.3. No guarantees: all outcomes remain subject to assessment, supporting information, affordability checks (where applicable), and final approval by the relevant funder.

---

## 3. Capacity labels (routing categories)
3.1. Capacity labels are routing categories only:
   1) Individual
   2) Farmer
   3) Business
   4) Developer
   5) Solar / Backup Power

---

## 4. Scope guardrails (must-follow)
4.1. Solutions we may list (responsible “solution universe”)
   1) LFF lists solutions that are within the at360Fin / at360 Finance franchise scope and/or confirmed in the franchise product manual and lender panel.

4.2. If a solution is common in South Africa, but not confirmed
   A solution may be included only if all are true:
   1) It is clearly labelled: “Subject to lender appetite”.
   2) It is treated as a secondary / deeper option (not a headline tile).
   3) It is routed into the most appropriate existing Capacity label and triaged manually.

4.3. Language boundary (always)
   1) Use “facilitate”, “introduce”, “structure”, “submit”, “match”.
   2) Avoid wording that implies approval, underwriting, guaranteed rates, guaranteed terms, or certainty.

---

## 5. Naming standards (avoid category drift)
5.1. Residential property category rule (PF-01 alignment)
   1) The taxonomy label must remain: “Residential property finance”.
   2) Supporting copy may use plain-language phrases such as:
      - home loan / bond / mortgage
      - buy a home/house/flat
      - refinance my bond/home loan
      - equity release / access equity
   3) Do not invent categories such as “home finance”, “home loans” (as a category label), or “flat finance”.

5.2. Commercial property naming rule
   1) Use “Commercial property finance” as the umbrella label (e.g., retail, office, mixed-use, hospitality).
   2) Do not create “shopping mall finance” as a separate category.

5.3. Industrial property naming rule
   1) Use “Industrial property finance” for (e.g., warehouses, factories, industrial yards, logistics facilities).

---

## 6. Solar / Backup Power rule (locked)
6.1. Standalone pathway rule
   1) Solar / Backup Power is always handled via the Solar / Backup Power pathway.
   2) Do not list Solar as an option inside Individual / Farmer / Business / Developer.

6.2. Practical implementation
   1) If the user wants solar funding, route them to Solar / Backup Power.
   2) Solar may be referenced elsewhere only as a pointer: “For Solar / Backup Power funding, use the Solar / Backup Power pathway.”

---

## 7. Headline solutions by Capacity label (what users see first)

### 7.1. Individual — headline solutions
1) Residential property finance
   - Purchase, refinance, improvements, bridging (as applicable).
2) Vehicle / personal asset finance
   - Personal motor vehicles and personal assets (where supported).
3) Debt help
   - Debt review / debt assistance / restructuring support (as routed).

### 7.2. Business — headline solutions
1) Working capital (secured)
   - Asset or property-backed revolving/operational funding.
2) Working capital (unsecured)
   - Sales performance-backed funding for merchants/vendors with proven turnover.
3) Bridging finance
   - Property-backed short-term funding (repaid from sale proceeds or refinance).
4) Commercial property finance
   - Owner-occupied or investment.
5) Industrial property finance
   - Owner-occupied or investment.
6) Residential property finance (via business or trust)
   - Residential property purchased/held in a legal entity (documentation and assessment differ from an Individual application).
7) Asset & vehicle finance
   - Commercial vehicles, machinery, equipment.
8) Business solutions
   - Practical operational / management solutions (as routed).
9) Business rescue (triage)
   - Routed to the safest structured pathway.

### 7.3. Farmer — headline solutions
1) Agricultural property finance
2) Agricultural equipment / implements finance
3) Seasonal / production funding (short-term)
4) Farm debt help (restructure / refinance)

### 7.4. Developer — headline solutions
1) Property development finance
   - Residential / commercial / industrial developments.
2) Short-term lending linked to development timelines
   - Only where supported by lender appetite and scope.

### 7.5. Solar / Backup Power — headline solutions
1) Solar / backup power solution finance across:
   - Residential contexts
   - Business/commercial contexts
   - Agricultural/irrigation contexts
   - Development contexts

---

## 8. Deep-dive solution taxonomy (internal; not all items must be headline)
8.1. Business finance — sub-categories (examples)
1) Working capital (secured) — asset or property-backed revolving/operational funding
2) Working capital (unsecured) — sales performance-backed funding for merchants/vendors  
   Note: Merchants require 6+ months operational, R30k+ monthly card-based turnover, POS device. Vendors require 12+ months operational, R60k+ monthly card-based turnover. NOT personal loans - business credit profile only.
3) Short- and medium-term loans
4) Restructuring / consolidation (where appropriate)
5) Debtors finance
   - Anchor term: Factoring / Debtors Finance
   - Supporting term: Invoice discounting (closely related)

8.2. Property finance — sub-categories (examples)
1) Residential property finance (purchase, refinance, improvements, bridging)  
   Note: Bridging finance requires unencumbered property as security. Minimum property value typically R500k+, loan amount 40-60% of equity. Repaid from expected property sale proceeds or refinance.
2) Commercial property finance (owner-occupied and investment)
3) Industrial property finance (owner-occupied and investment)
4) Specialist sub-classes (e.g., student accommodation) only where supported

8.3. Agricultural finance — sub-categories (examples)
1) Agricultural property
2) Agricultural equipment / infrastructure
3) Seasonal / production funding
4) Farm debt restructure / refinance

8.4. Asset & vehicle finance — sub-categories (examples)
1) Personal vehicles (Individual)
2) Commercial vehicles, fleets, machinery, equipment (Business / Farmer / Developer)

8.5. Developer finance — sub-categories (examples)
1) Property development finance (core)
2) Bridging / short-term lending aligned to build timelines (where supported)

8.6. Solar / Backup Power — sub-categories (examples)
1) Residential solar
2) Business solar
3) Agriculture solar / backup power
4) Battery & inverter upgrades

---

## 9. “Subject to lender appetite” rule set (when and how)
9.1. When to use it
Use “Subject to lender appetite” only when:
1) A solution is plausible but not confirmed as a standard panel product, or
2) The solution is highly scenario-dependent.

9.2. How to display it
1) Use it as a short suffix label (not a disclaimer paragraph).
2) Keep it out of headline solutions unless confirmed.

9.3. Operational rule
If “Subject to lender appetite” is used:
1) Route the enquiry to manual triage.
2) Do not treat it as an automatic-fit option.

---

## 10. Specialist support lane (clarity, trust, compliance)
10.1. This is not a separate Capacity label.
It is a behind-the-scenes rule to protect clients and LFF.

10.2. FAIS-licensed advice (FSCA-authorised FSP)
Where licensed financial advice under FAIS is required:
1) Refer the client to an FSCA-authorised Financial Services Provider (FSP) for that advice.

10.3. Accounting and tax support
Where accounting/tax clean-up, validation, or compliant financials are required:
1) Refer the client to a specialist accounting practice.

10.4. Consent rule
Any introduction to specialist partners must be consented as part of the broader POPIA-aligned process.

---

## 11. Compliance language (baseline)
11.1. No guarantees
LFF facilitates introductions and structured submissions; outcomes are always subject to assessment and final approval by the relevant funder.

11.2. POPIA boundary (purpose limitation)
Personal information is collected only for:
1) assessing eligibility,
2) facilitating finance placement,
3) permitted follow-up,
4) and (where consented) facilitating introductions to specialist partners.

11.3. Boundary restated
LFF is not a lender and does not provide guaranteed outcomes.

---

## 12. IA-01 — Insurance & Assurance Specification (cross-cutting)
12.1. Why IA-01 exists in the scope document
Insurance and assurance are not “extra products to sell”.
They can:
1) protect assets and third parties,
2) reduce late-stage friction when funders request proof of cover,
3) support continuity planning (death/disability outcomes),
4) allow protection to be handled in a structured, opt-in manner.

12.2. Scope: what is meant by “insurance packages” and “assurance”
12.2.1. Insurance packages (short-term cover examples)
1) Home-owners’ insurance (property cover)
2) Public liability cover
3) Harvest insurance (where applicable)
4) Insurance for vehicles, equipment and systems

12.2.2. Assurance (risk / long-term cover examples)
1) Loan protection cover (credit life) linked to a loan (disability/death event protection of principal debt)
2) Whole life assurance and estate planning assessment through registered financial advisers

12.3. Positioning rules (how to talk about insurance & assurance)
1) Optional, never forced: offered as opt-in, not a gate.
2) Separate processes: finance placement and underwriting are separate.
3) Facilitation wording only: “arrange”, “introduce”, “facilitate”, “assessment”.
4) No promises: never promise acceptance, premiums, cover amounts, or claims outcomes.

12.4. Where insurance & assurance appears in the LFF experience
12.4.1. Listing rule
1) Do not list insurance/assurance as a headline finance solution tile.
2) Treat it as a cross-cutting optional add-on that can be requested once the finance route is clear.

12.4.2. Forms (eligibility enquiry stage)
1) Capture interest only at this stage.
2) No detailed underwriting data is collected on the website.

12.5. Data capture specification (minimum viable)
12.5.1. Core fields
1) Protection interest (Yes/No) — default No
2) Protection categories wanted (multi-select)
3) Do you already have cover? (Yes / No / Not sure)
4) Existing insurer / broker (optional)
5) Best contact time (optional)

12.5.2. Must NOT be collected at eligibility enquiry stage
1) Medical information
2) Detailed asset schedules
3) Claims histories
4) Payment or card details
If additional information is needed, it must be collected later through the relevant insurer/broker/adviser process.

12.6. Relevance mapping (protection categories by Capacity)
12.6.1. Individual
1) Home-owners’ insurance
2) Loan protection cover (credit life)
3) Whole life assurance + estate planning assessment

12.6.2. Business
1) Public liability cover
2) Insurance for vehicles, equipment and systems
3) Home-owners’ insurance (where applicable)
4) Loan protection cover (credit life) (where applicable)
5) Whole life assurance + estate planning assessment

12.6.3. Farmer
1) Harvest insurance (where applicable)
2) Insurance for vehicles, equipment and systems
3) Public liability cover (where applicable)
4) Whole life assurance + estate planning assessment

12.6.4. Developer
1) Public liability cover
2) Insurance for vehicles, equipment and systems
3) Whole life assurance + estate planning assessment

12.6.5. Solar / Backup Power
1) Insurance for vehicles, equipment and systems (equipment/system cover)

12.7. Consent and sharing rules (POPIA alignment)
1) No referral or sharing may occur without explicit opt-in.
2) If opted in, information may be shared only for the agreed purpose of arranging a discussion/assessment with relevant associated business partners and/or registered advisers.
3) Users may withdraw consent at any time.

12.8. Implementation-ready microcopy (plain English)
1) One-line note (post-selection):
   “Optional: if you’d like, we can also discuss protection options (insurance/assurance) once the finance route is clear.”
2) Checkbox label:
   “Also discuss protection options (optional)”
3) Disclosure (below checkbox):
   “Protection options are handled through the relevant insurer/broker or registered adviser process. Quotes and outcomes are subject to their assessment and underwriting.”

---

## 13. Governance note (how other docs must use SOL-01)
13.1. UX0 and UX1–UX5 must comply with:
1) Capacity labels,
2) Headline solutions per Capacity,
3) Naming standards,
4) Solar standalone pathway,
5) Subject to lender appetite rule,
6) IA-01 rules (opt-in; no underwriting detail at eligibility stage).

13.2. Entity selection (submission-only rule)
13.2.1. Do not ask for legal entity type during browsing, selection, or left-panel guidance. Entity clarification is captured only when a check-eligibility form is submitted (most notably Business and Farmer, where packaging differs).
13.2.2. Individuals
   1) Individuals are always natural persons.
   2) No entity selector on Individual forms.
13.2.3. Farmers
   1) Farmers may be natural persons, businesses, or trusts.
   2) Every Farmer form includes: “Legal entity submitting this application” (Natural person / Business / Trust).
   3) Keep it simple: no extra explanatory paragraphs, no conditional naming, no “context choice” language.
13.2.4. Businesses
   1) Businesses may be a business or a trust.
   2) Business forms include a legal entity selector where relevant (Business / Trust).
13.2.5. Developers
   1) Developers are assumed to be businesses.
   2) No entity selector on Developer forms (business-by-definition).
13.2.6. Solar / Backup Power
   1) Solar can be any (natural person / business / trust).
   2) Solar forms may include: “Legal entity submitting this application” (Natural person / Business / Trust) at submission stage only.

13.3. REF documents may support messaging but must not override SOL-01.


---

## 8.5. Developer — finance options (aligned to UX4)

1. **Property Development Finance** (incl. development vs vacant land only)
2. **Industrial Property Finance** (owner-occupied vs rental-occupied)
3. **Commercial Property Finance** (owner-occupied vs rental-occupied)
4. **Refurbishments & Conversions**
5. **Bridging finance** (free-text scenario details)

**Boundary:** No Solar options inside Developer. Solar / Backup Power is handled only under **ux5**.
