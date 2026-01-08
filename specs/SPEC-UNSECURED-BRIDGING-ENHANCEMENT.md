# SPEC-UNSECURED-BRIDGING-ENHANCEMENT.md

## Document Control

1. **File ID + Title:** SPEC — Unsecured Business Finance & Bridging Finance Enhancement (LFF)
2. **Version:** v1.0
3. **Status:** Proposed Enhancement Specification
4. **Date:** 2026-01-08
5. **Owner:** LookingForFinance (LFF)
6. **Purpose:** Define changes required to add explicit unsecured business finance option and strengthen bridging finance guidance across pathways
7. **Scope:** Updates to sol-01.md, ux3.md, data-01.md, and associated guidance content

---

## 1. Executive Summary

### 1.1 What This Spec Achieves

1. **Splits Business working capital** into two explicit options:
   - Working capital (secured) — asset/property-backed
   - Working capital (unsecured) — sales performance-backed for merchants/vendors
2. **Strengthens bridging finance guidance** across Individual, Business, Farmer, and Developer pathways
3. **Improves lead quality** through better pre-qualification and clearer routing
4. **Maintains compliance** with existing scope boundaries (no personal loans)

### 1.2 Problem Being Solved

**Current state:**
- "Business funding / working capital" is a single generic option in ux3.md
- Users cannot distinguish secured vs unsecured funding upfront
- Bridging finance appears as an option but lacks critical viability guidance (property requirements, equity thresholds)
- Risk of misrouting: merchants seeking unsecured funding mixed with traditional working capital enquiries

**Desired state:**
- Clear separation between secured and unsecured business working capital
- Users self-qualify before submission (reducing unqualified leads)
- Bridging finance guidance sets realistic expectations (property-backed, equity requirements)

---

## 2. Scope Boundaries (Non-Negotiables)

### 2.1 What This Spec Does NOT Change

1. **Personal loans remain excluded** — unsecured business finance is strictly for registered businesses with proven turnover (NOT consumer credit)
2. **Solar remains standalone** — no changes to Solar / Backup Power pathway separation
3. **Two-stage model remains intact** — selector → eligibility check → consultant follow-up
4. **Fee model unchanged** — eligibility check remains free; fees disclosed only after suitability confirmed
5. **Entity selection remains submission-only** — entity type captured on forms, not during selection

### 2.2 Compliance Confirmation

**Unsecured business finance eligibility criteria** (from source documents):
- **Merchants**: 6+ months operational, R30k+ monthly turnover (card-based, POS device required)
- **Vendors**: 12+ months operational, R60k+ monthly turnover (card-based)
- **Security**: Future sales/cash flow (not physical collateral); may require 10% cash deposit in ceded account
- **NOT personal loans**: Cannot be used for personal consumption; business credit profile only

**Bridging finance criteria** (from source documents):
- **Security**: Unencumbered residential or commercial property required
- **Minimum property value**: Often R500k+
- **Loan amount**: Typically 40-60% of property equity
- **Repayment trigger**: Expected property sale proceeds or refinance

---

## 3. Files Requiring Updates

### 3.1 Primary Changes

| File | Change Type | Priority |
|------|-------------|----------|
| **sol-01.md** | Add unsecured business finance to taxonomy | HIGH |
| **ux3.md** | Split working capital option; add bridging guidance | HIGH |
| **data-01.md** | Add option keys, enums, payload fields | HIGH |

### 3.2 Secondary Changes

| File | Change Type | Priority |
|------|-------------|----------|
| **ux0.md** | Add fees microcopy row for unsecured business finance | MEDIUM |
| **ux1.md** | Strengthen bridging finance guidance (Individuals) | MEDIUM |
| **ux2.md** | Strengthen bridging finance guidance (Farmers) | MEDIUM |
| **ux4.md** | Strengthen bridging finance guidance (Developers) | MEDIUM |

---

## 4. Detailed Change Specifications

---

### 4.1 SOL-01.md Changes

#### 4.1.1 Section 8.1 — Business finance sub-categories (UPDATE)

**Current text:**
```
8.1 Business finance — sub-categories (examples)
1) Working capital (revolving / operational)
2) Short- and medium-term loans
3) Restructuring / consolidation (where appropriate)
4) Debtors finance
   - Anchor term: Factoring / Debtors Finance
   - Supporting term: Invoice discounting (closely related)
```

**Replace with:**
```
8.1 Business finance — sub-categories (examples)
1) Working capital (secured) — asset or property-backed revolving/operational funding
2) Working capital (unsecured) — sales performance-backed funding for merchants/vendors
3) Short- and medium-term loans
4) Restructuring / consolidation (where appropriate)
5) Debtors finance
   - Anchor term: Factoring / Debtors Finance
   - Supporting term: Invoice discounting (closely related)
```

#### 4.1.2 Section 8.2 — Property finance sub-categories (ADD GUIDANCE)

**Current text:**
```
8.2 Property finance — sub-categories (examples)
1) Residential property finance (purchase, refinance, improvements, bridging)
2) Commercial property finance (owner-occupied and investment)
3) Industrial property finance (owner-occupied and investment)
4) Specialist sub-classes (e.g., student accommodation) only where supported
```

**Add after item 1:**
```
   Note: Bridging finance requires unencumbered property as security. 
   Minimum property value typically R500k+, loan amount 40-60% of equity. 
   Repaid from expected property sale proceeds or refinance.
```

---

### 4.2 UX3.md Changes (Business Pathway)

#### 4.2.1 Section 7.1 — Options Catalogue (UPDATE)

**Current options:**
1. Business funding / working capital
2. Residential property finance (via business/trust)
3. Commercial property finance
4. Industrial property finance
5. Vehicle finance (business)
6. Asset finance (business)
7. Business rescue

**Replace with:**
1. **Working capital (secured)** ← NEW
2. **Working capital (unsecured)** ← NEW
3. Residential property finance (via business/trust)
4. Commercial property finance
5. Industrial property finance
6. Vehicle finance (business)
7. Asset finance (business)
8. **Bridging finance** ← NEW (moved from implicit to explicit)
9. Business rescue

**Rationale**: Splits generic "working capital" into two distinct routes; makes bridging finance an explicit top-level option

#### 4.2.2 Section 7.4 — Routing Map (UPDATE)

**Add:**
- Working capital (secured) → Form **BIZ-A1** (new)
- Working capital (unsecured) → Form **BIZ-A2** (new)
- Bridging finance → Form **BIZ-H** (new)

**Or (simpler implementation):**
- Working capital (secured) → Form **BIZ-A** (existing, add conditional fields)
- Working capital (unsecured) → Form **BIZ-A** (existing, add conditional fields)
- Bridging finance → Form **BIZ-H** (new dedicated form)

**Recommendation**: Use conditional fields in BIZ-A for secured/unsecured split; create dedicated BIZ-H for bridging (cleaner separation)

#### 4.2.3 Section 8.2 — Guidance Content (ADD NEW BLOCKS)

**Insert after Section 8.2.1 (current "Business funding / working capital"):**

##### **8.2.1A — Working capital (secured)**

1. **You're doing:** Starting a lender-match request for secured working capital (asset or property-backed).
2. **Why we ask:** Funders assess affordability, stability, and the asset/property being used as security.
3. **What to enter:** Amount needed, timing, security available, and a plain-English note on what the funds are for.
4. **What happens next:** We confirm fit and the most sensible route, then only request supporting documents if it's worth pursuing.
5. **Most delays happen when:** The security asset/property value is unclear or existing facilities are not mentioned.
6. **What helps / speeds this up:** A clear use-case, realistic amount, security details, and honest timeframe.
7. **Fees (verbatim; UX0):**
   - "The eligibility check is free to start — we first confirm fit and the best lender pathway. For cases needing deeper structuring, a modest raising/processing fee may apply; it's always disclosed and agreed before work proceeds."
8. **Protection options (verbatim; UX0):**
   - "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."

##### **8.2.1B — Working capital (unsecured)**

1. **You're doing:** Starting a lender-match request for unsecured working capital based on trading performance.
2. **Why we ask:** Unsecured funding depends on proven sales history, turnover consistency, and card-based processing.
3. **What to enter:** Amount needed, timing, monthly turnover, and whether you use POS/card processing.
4. **What happens next:** We confirm whether you meet merchant/vendor criteria, then structure the best route.
5. **Most delays happen when:** Turnover or card-processing details are vague, or operational history is too short.
6. **What helps / speeds this up:** Clear monthly turnover (card-based), operational history (6-12 months), and realistic timing.
7. **Typical criteria (guidance note):**
   - Merchants: 6+ months operational, R30k+ monthly turnover (card-based, POS required)
   - Vendors: 12+ months operational, R60k+ monthly turnover (card-based)
8. **Fees (verbatim; UX0):**
   - "The eligibility check is free to start. For cases needing specialist structuring, any processing fee is disclosed and agreed before work proceeds."
9. **Protection options (verbatim; UX0):**
   - "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."

##### **8.2.1C — Bridging finance**

1. **You're doing:** Starting a lender-match request for property-backed bridging finance.
2. **Why we ask:** Bridging finance requires unencumbered property as security and depends on timing/repayment trigger.
3. **What to enter:** Property value, equity available, expected sale/refinance date, and amount needed.
4. **What happens next:** We confirm property eligibility (value, unencumbered status) and structure the safest route.
5. **Most delays happen when:** Property equity or sale timing is unclear, or the property is already bonded.
6. **What helps / speeds this up:** Clear property value (typically R500k+ minimum), unencumbered status, and realistic sale/refinance date.
7. **Typical criteria (guidance note):**
   - Property must be unencumbered (no existing bond)
   - Minimum property value often R500k+
   - Loan amount typically 40-60% of property equity
   - Repaid from property sale proceeds or refinance
8. **Fees (verbatim; UX0):**
   - "The eligibility check is free to start. For bridging structuring, any processing fee is disclosed and agreed before work proceeds."
9. **Protection options (verbatim; UX0):**
   - "Optional: if you'd like, we can also discuss protection options (insurance/assurance) once the finance route is clear."

#### 4.2.4 Section 10 — Form-Specific Fields (UPDATE)

**Current Form BIZ-A structure:**
1. Funding type (single-select): Working capital / Term loan / Debtors finance (factoring) / Bridging finance / Other
2. Amount required (currency, R) (required)
3. Timeframe to proceed (required)
4. What will the funds be used for? (short free text) (required)
5. Any existing business debt/facilities? (short free text) (optional)

**Recommended changes:**

##### **Option 1: Conditional Fields in BIZ-A (Simpler)**

Keep single BIZ-A form, add conditional fields based on secured/unsecured selection:

**New structure:**
1. **Funding structure** (single-select, required):
   - Secured (asset/property-backed)
   - Unsecured (sales performance-backed)
2. **If Secured selected:**
   - Security available (single-select): Property / Asset / Debtors / Stock / Other
   - Estimated security value (currency, R) (optional)
3. **If Unsecured selected:**
   - Monthly card-based turnover (currency, R) (required)
   - Months operational (number) (required)
   - POS/card processing used? (Yes / No / Not sure) (required)
4. Amount required (currency, R) (required)
5. Timeframe to proceed (required)
6. What will the funds be used for? (short free text) (required)
7. Any existing business debt/facilities? (short free text) (optional)

##### **Option 2: Separate Forms (Cleaner)**

- **BIZ-A1** (Working capital — secured): Fields 1-7 above, "Secured" pre-selected, hide unsecured fields
- **BIZ-A2** (Working capital — unsecured): Fields 1-7 above, "Unsecured" pre-selected, hide secured fields
- **BIZ-H** (Bridging finance): Dedicated form with property-specific fields (see Section 4.2.5)

**Recommendation**: Use **Option 1** (conditional fields) for secured/unsecured split; create **BIZ-H** for bridging (dedicated form)

#### 4.2.5 New Form BIZ-H — Bridging Finance (CREATE)

**Section 4 — Eligibility Details:**

1. **Property type** (single-select, required):
   - Residential
   - Commercial
   - Industrial
   - Agricultural
   - Other

2. **Property status** (single-select, required):
   - Unencumbered (no bond)
   - Bonded (existing bond)
   - Not sure

3. **Estimated property value** (currency, R) (required)

4. **Existing bond amount (if bonded)** (currency, R) (optional)

5. **Amount required** (currency, R) (required)

6. **Repayment trigger** (single-select, required):
   - Property sale (expected date below)
   - Refinance to longer-term facility
   - Other (specify)

7. **Expected sale/refinance date** (date picker or free text) (optional)

8. **Timeframe to proceed** (single-select, required):
   - ASAP / 1-3 months / 3-6 months / 6+ months

9. **Notes** (textarea, optional)

**Validation rules:**
- If "Bonded" selected, calculate available equity: Property value - Bond amount
- If available equity < 40% of property value, show warning (not blocker): "Bridging finance typically requires 40-60% available equity. We'll confirm viability during follow-up."

---

### 4.3 UX0.md Changes (Global Rules)

#### 4.3.1 Section 7.10.4 — Fees Microcopy (ADD ROWS)

**Add after existing "Business funding / working capital" row:**

**Working capital (secured):**
- "The eligibility check is free to start — we first confirm fit and the best lender pathway. For cases needing deeper structuring, a modest raising/processing fee may apply; it's always disclosed and agreed before work proceeds."

**Working capital (unsecured):**
- "The eligibility check is free to start. For cases needing specialist structuring, any processing fee is disclosed and agreed before work proceeds."

**Bridging finance (Business):**
- "The eligibility check is free to start. For bridging structuring, any processing fee is disclosed and agreed before work proceeds."

**Note**: Also add bridging finance rows for ux1 (Individuals), ux2 (Farmers), ux4 (Developers) if not already present.

---

### 4.4 DATA-01.md Changes (Form Data Dictionary)

#### 4.4.1 Section 5.3 — Business Option Keys (UPDATE)

**Current:**
- bus_working_capital
- bus_residential_property_finance
- bus_commercial_property_finance
- bus_industrial_property_finance
- bus_vehicle_finance
- bus_asset_finance
- bus_business_rescue

**Add:**
- **bus_working_capital_secured** (if using separate forms/options)
- **bus_working_capital_unsecured** (if using separate forms/options)
- **bus_bridging_finance**

**Or (if using conditional fields in single BIZ-A form):**
- Keep `bus_working_capital` as option_key
- Use payload field `bus_funding_structure` (enum: secured / unsecured) to differentiate

**Recommendation**: Add explicit option keys (cleaner routing, better reporting)

#### 4.4.2 Section 4.8 — Business Enums (ADD)

**Add after existing bus_funding_type:**

##### **bus_funding_structure**
- secured
- unsecured

##### **bus_security_type** (if secured selected)
- property
- asset
- debtors
- stock
- other

##### **bus_property_status** (for bridging finance)
- unencumbered
- bonded
- not_sure

##### **bus_bridging_repayment_trigger**
- property_sale
- refinance
- other

#### 4.4.3 Section 6.2 — Business Baseline Payload (UPDATE)

**Current baseline (all Business forms):**
- eligibility_payload.bus_contact_first_name
- eligibility_payload.bus_contact_last_name
- eligibility_payload.bus_contact_mobile
- eligibility_payload.bus_contact_email
- eligibility_payload.bus_contact_role
- eligibility_payload.bus_entity_type
- eligibility_payload.bus_registered_name
- eligibility_payload.bus_registration_number
- eligibility_payload.bus_trading_name
- eligibility_payload.bus_province
- eligibility_payload.bus_notes

**No changes required** (baseline remains the same)

#### 4.4.4 Section 6.2.2 — Working Capital Payload (UPDATE)

**Current:**
- eligibility_payload.bus_funding_type
- eligibility_payload.bus_amount_needed
- eligibility_payload.bus_timeframe
- eligibility_payload.bus_funds_use
- eligibility_payload.bus_existing_facilities

**Add (if using conditional fields):**
- **eligibility_payload.bus_funding_structure** (enum: bus_funding_structure)
- **eligibility_payload.bus_security_type** (enum: bus_security_type; optional; shown if secured)
- **eligibility_payload.bus_security_value** (currency; optional; shown if secured)
- **eligibility_payload.bus_monthly_turnover** (currency; required; shown if unsecured)
- **eligibility_payload.bus_months_operational** (number; required; shown if unsecured)
- **eligibility_payload.bus_pos_card_processing** (enum: yes_no_not_sure; required; shown if unsecured)

#### 4.4.5 New Section 6.2.9 — Bridging Finance Payload (CREATE)

- eligibility_payload.bus_bridging_property_type (enum; required)
- eligibility_payload.bus_bridging_property_status (enum: bus_property_status; required)
- eligibility_payload.bus_bridging_property_value (currency; required)
- eligibility_payload.bus_bridging_bond_amount (currency; optional; shown if bonded)
- eligibility_payload.bus_bridging_amount_needed (currency; required)
- eligibility_payload.bus_bridging_repayment_trigger (enum: bus_bridging_repayment_trigger; required)
- eligibility_payload.bus_bridging_expected_date (date; optional)
- eligibility_payload.bus_timeframe (enum: timeframe; required)
- eligibility_payload.bus_bridging_notes (text; optional)

---

### 4.5 UX1.md, UX2.md, UX4.md Changes (Bridging Guidance)

#### 4.5.1 UX1.md (Individuals) — Section 9.5 (UPDATE)

**Current guidance for Residential property finance includes bridging as a sub-option.**

**Add guidance block for bridging finance** (if "Bridging finance" selected under "What do you want to do?"):

**Field micro-guide:**
> **Bridging finance (residential property)**  
> Requires unencumbered residential property as security. Minimum property value typically R500k+, loan amount 40-60% of equity. Repaid from expected property sale proceeds or refinance.

**Or (if creating dedicated form):** Follow BIZ-H structure adapted for Individuals

#### 4.5.2 UX2.md (Farmers) — Bridging Finance Guidance (ADD)

**Current state**: Bridging appears as an option under Agricultural property finance but lacks detailed guidance.

**Add to Section 9A.1 (Agricultural property finance):**

**Field micro-guide (if "Bridging finance" selected):**
> **Bridging finance (agricultural property)**  
> Requires unencumbered farm property as security. Typical criteria: minimum property value R500k+, loan 40-60% of equity, repaid from sale proceeds or refinance. We'll confirm viability during follow-up.

#### 4.5.3 UX4.md (Developers) — Option 5 Guidance (UPDATE)

**Current state**: Bridging finance exists as Option 5 with free-text scenario field.

**Add to Section 6.2.5 (Bridging finance guidance):**

**Update "What this covers":**
> Bridging funding needs where timing and repayment events matter (case-dependent). Typically requires unencumbered property as security (minimum value R500k+, loan 40-60% of equity) or other structured repayment trigger.

---

## 5. Implementation Sequence

### Phase 1: Core Changes (Week 1)
1. Update **sol-01.md** (taxonomy)
2. Update **ux3.md** (split working capital, add bridging)
3. Update **data-01.md** (option keys, enums, payload fields)

### Phase 2: Guidance Content (Week 1-2)
4. Update **ux0.md** (fees microcopy rows)
5. Update **ux3.md** (guidance content library — Sections 8.2.1A, 8.2.1B, 8.2.1C)
6. Update **ux1.md, ux2.md, ux4.md** (bridging finance guidance)

### Phase 3: Form Implementation (Week 2)
7. Update **Form BIZ-A** (add conditional fields for secured/unsecured)
8. Create **Form BIZ-H** (dedicated bridging finance form)
9. Test routing logic (option_key → form → payload validation)

### Phase 4: Quality Assurance (Week 3)
10. Cross-check all files for consistency
11. Validate guidance microcopy against ux0.md verbatim requirements
12. Test user flows: secured WC → unsecured WC → bridging → submission
13. Confirm no conflicts with existing pathways (Individual, Farmer, Developer)

---

## 6. Testing & Validation Checklist

### 6.1 Functional Tests

- [ ] **Secured working capital flow**: User selects "Working capital (secured)" → Form BIZ-A opens → Secured fields shown → Submission successful → option_key = `bus_working_capital_secured`
- [ ] **Unsecured working capital flow**: User selects "Working capital (unsecured)" → Form BIZ-A opens → Unsecured fields shown → Submission successful → option_key = `bus_working_capital_unsecured`
- [ ] **Bridging finance flow**: User selects "Bridging finance" → Form BIZ-H opens → Property fields shown → Submission successful → option_key = `bus_bridging_finance`
- [ ] **Conditional field logic**: If "Secured" selected in BIZ-A, unsecured fields hidden (and vice versa)
- [ ] **Validation**: If "Bonded" property selected in BIZ-H, equity calculation warning displays correctly

### 6.2 Content Consistency Tests

- [ ] **Fees microcopy**: All ux3 guidance blocks use ux0 verbatim copy (no rewrites)
- [ ] **Protection microcopy**: All ux3 guidance blocks use ux0 verbatim copy (no rewrites)
- [ ] **Bridging guidance consistency**: ux1, ux2, ux3, ux4 all mention same criteria (unencumbered, R500k+, 40-60% equity)
- [ ] **Option labels match**: sol-01 taxonomy = ux3 options = data-01 option_keys

### 6.3 Compliance Tests

- [ ] **No personal loan language**: Unsecured business finance guidance never uses "personal loan" or "consumer credit"
- [ ] **Merchant/vendor criteria clear**: Eligibility (6-12 months, R30k-R60k turnover, card-based) mentioned in guidance
- [ ] **Bridging security clear**: Property-backed, unencumbered status, equity requirements mentioned
- [ ] **Fee model consistent**: "Free to start" maintained; fees disclosed after suitability confirmed

---

## 7. Rollback Plan

If issues arise post-deployment:

1. **Revert ux3.md options**: Collapse "Working capital (secured)" and "Working capital (unsecured)" back into single "Business funding / working capital" option
2. **Hide Form BIZ-H**: Remove "Bridging finance" from options catalogue; keep bridging as sub-option under existing forms
3. **Revert data-01.md**: Remove new option_keys (`bus_working_capital_secured`, `bus_working_capital_unsecured`, `bus_bridging_finance`)
4. **Restore baseline guidance**: Use generic working capital guidance (current 8.2.1)

---

## 8. Success Metrics

### 8.1 Lead Quality Improvements (30 days post-deployment)

- **Target**: 20% reduction in unqualified working capital leads (secured applicants routed to unsecured, or vice versa)
- **Measure**: CRM data — % of leads marked "Not suitable" due to wrong funding structure

### 8.2 User Clarity Improvements (30 days post-deployment)

- **Target**: 15% reduction in bridging finance enquiries for bonded properties (should self-qualify as ineligible)
- **Measure**: CRM data — % of bridging leads with "Property status = Bonded"

### 8.3 Conversion Rate Maintenance (30 days post-deployment)

- **Target**: Overall Business pathway conversion rate (selector → submission) remains stable or improves (±5%)
- **Measure**: Analytics — Business pathway completion rate before vs after

---

## 9. Open Questions / Decisions Required

### 9.1 Form Structure Decision

**Question**: Use conditional fields in single BIZ-A form, or create separate BIZ-A1 (secured) / BIZ-A2 (unsecured) forms?

**Recommendation**: **Conditional fields in single BIZ-A** (simpler, fewer forms to maintain)

**Decision**: [ ] Approved / [ ] Needs discussion

---

### 9.2 Bridging Finance Form Decision

**Question**: Create dedicated BIZ-H for bridging, or keep as sub-option in existing forms?

**Recommendation**: **Create dedicated BIZ-H** (cleaner, property-specific fields, easier routing)

**Decision**: [ ] Approved / [ ] Needs discussion

---

### 9.3 Merchant/Vendor Self-Qualification

**Question**: Add hard validation (block submission if turnover/months don't meet criteria), or soft guidance only?

**Recommendation**: **Soft guidance only** — criteria mentioned in guidance; final assessment during consultant follow-up

**Decision**: [ ] Approved / [ ] Needs discussion

---

### 9.4 Bridging Property Status Validation

**Question**: If "Bonded" selected, should we show blocking error ("Bridging requires unencumbered property") or soft warning ("We'll confirm viability")?

**Recommendation**: **Soft warning** — some cases may still be viable (small existing bond, high equity)

**Decision**: [ ] Approved / [ ] Needs discussion

---

## 10. Appendix: Quick Reference Summary

### 10.1 New Business Options (ux3.md)

| Option | Form | Option Key | Security Type |
|--------|------|------------|---------------|
| Working capital (secured) | BIZ-A | bus_working_capital_secured | Asset/property-backed |
| Working capital (unsecured) | BIZ-A | bus_working_capital_unsecured | Sales performance-backed |
| Bridging finance | BIZ-H | bus_bridging_finance | Property-backed |

### 10.2 Key Eligibility Criteria (Guidance Notes)

**Unsecured business finance:**
- Merchants: 6+ months, R30k+ monthly turnover (card-based, POS)
- Vendors: 12+ months, R60k+ monthly turnover (card-based)
- Security: Future sales (not physical collateral)

**Bridging finance:**
- Property: Unencumbered (no existing bond preferred)
- Minimum value: Often R500k+
- Loan amount: 40-60% of property equity
- Repayment: Sale proceeds or refinance

### 10.3 Files Updated (Summary)

| File | Section | Change Type |
|------|---------|-------------|
| sol-01.md | 8.1 | Split working capital taxonomy |
| sol-01.md | 8.2 | Add bridging criteria note |
| ux3.md | 7.1 | Update options catalogue |
| ux3.md | 7.4 | Update routing map |
| ux3.md | 8.2 | Add guidance blocks (8.2.1A, 8.2.1B, 8.2.1C) |
| ux3.md | 10 | Add conditional fields to BIZ-A |
| ux3.md | NEW | Create Form BIZ-H |
| ux0.md | 7.10.4 | Add fees microcopy rows |
| data-01.md | 5.3 | Add option keys |
| data-01.md | 4.8 | Add enums |
| data-01.md | 6.2.2 | Update working capital payload |
| data-01.md | 6.2.9 | Create bridging finance payload |
| ux1.md | 9.5 | Add bridging guidance |
| ux2.md | 9A.1 | Add bridging guidance |
| ux4.md | 6.2.5 | Strengthen bridging guidance |

---

**End of Specification**
