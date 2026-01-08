# data-01 — Form Data Dictionary (LFF)

## Document control

1. File ID + Title: DATA-01 — Form Data Dictionary (LFF)  
2. Version: v2.0  
3. Last updated: 2026-01-08  
4. Status: Canonical truth source for form field keys, enums, and eligibility payload structure across UX1–UX5.


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

This file defines the **exact data** collected by all “Check eligibility” forms across LookingForFinance (LFF). It is used to:

1. Keep Base44 + Pocket Business form builds consistent.
2. Ensure every selection can be routed correctly (by `option_key`).
3. Maintain stable keys for CRM mapping and reporting.

## 2. Submission model

Every eligibility submission should contain:

1. `pathway` (individual / farmer / business / developer / solar)
2. `option_key` (stable identifier — see Section 5)
3. Contact fields (minimum for follow-up)
4. `eligibility_payload` (option-specific fields)

## 3. Capture rules (non-negotiables)

1. **No mixed-type controls**
   1. Do not mix radio/select options with free text in the same response.
   2. Use:
      1. An enum field with an **Other** option, plus
      2. A separate text field named `other_details` (only shown when Other is selected).
2. **Conversion-first defaults**
   1. Prefer bands (value bands, deposit bands, timeframes) over exact numbers, unless the number is essential.
3. **Stable keys**
   1. Do not rename keys once live — version the spec instead.
4. **Minimal identity data**
   1. Capture only what is needed for follow-up and routing.
5. **Entity clarification is submission-only**
   1. Entity type selectors belong inside Business and Farmer forms (not in solutions-level copy).

## 4. Canonical enums

### 4.1 yes_no_not_sure
- yes
- no
- not_sure

### 4.2 timeframe
- asap
- m1_3
- m3_6
- m6_plus

### 4.3 deposit_band
- pct_0
- pct_1_10
- pct_11_20
- pct_21_plus
- not_sure

### 4.4 asset_condition
- new
- used
- not_sure

### 4.5 sa_province
- eastern_cape
- free_state
- gauteng
- kwazulu_natal
- limpopo
- mpumalanga
- northern_cape
- north_west
- western_cape

### 4.6 owner_or_rental_occupied
- owner_occupied
- rental_occupied
- not_sure

### 4.7 Individuals (UX1)

#### 4.7.1 ind_res_goal
- buy_existing_home
- build_from_scratch
- buy_vacant_land

#### 4.7.2 ind_employment_type
- salaried
- self_employed
- not_sure

#### 4.7.3 ind_res_property_type
- standard_residential
- smallholding_upto_28ha
- other
- not_sure

#### 4.7.4 ind_veh_deal_type
- purchase
- refinance_raise_capital
- replace_upgrade
- not_sure

#### 4.7.5 ind_veh_category
- motor_vehicle
- leisure_asset
- other

#### 4.7.6 ind_purchase_source
- registered_dealer
- private_sale
- not_sure

#### 4.7.7 value_band_residential
- under_500k
- band_500k_1m
- band_1m_2m
- band_2m_5m
- band_5m_plus
- not_sure

#### 4.7.8 value_band_vehicle
- under_100k
- band_100k_250k
- band_250k_500k
- band_500k_1m
- band_1m_plus
- not_sure

#### 4.7.9 value_band_asset
- under_25k
- band_25k_100k
- band_100k_250k
- band_250k_plus
- not_sure

#### 4.7.10 term_vehicle_months
- m36
- m48
- m60
- m72
- m84
- not_sure

#### 4.7.11 term_asset_months
- m6
- m12
- m24
- m36
- m48
- m60
- not_sure

#### 4.7.12 ind_debt_need
- consolidate_debts
- home_rescue
- reduce_repayments
- not_sure

#### 4.7.13 ind_debt_equity
- yes
- no
- not_sure
- not_applicable

#### 4.7.14 ind_debt_status
- under_debt_review
- handed_over_to_legal
- neither
- not_sure

#### 4.7.15 value_band_monthly_debt
- under_5000
- band_5000_10000
- band_10001_20000
- band_20001_plus

#### 4.7.16 ind_asset_category
- electronics_appliances
- furniture
- equipment_tools
- other

### 4.8 Business (UX3)

#### 4.8.1 bus_entity_type
- pty_ltd
- trust
- cc

#### 4.8.2 bus_contact_role
- owner_director
- financial_manager
- operations_manager
- admin
- other

#### 4.8.3 bus_funding_type
- working_capital
- bridging_finance
- equipment_asset_purchase
- invoice_finance
- other

#### 4.8.4 bus_property_request_type
- purchase
- refinance
- build
- not_sure

#### 4.8.5 bus_property_type
- office
- retail
- mixed_use
- hospitality
- other

#### 4.8.6 bus_industrial_request_type
- purchase
- refinance
- build
- not_sure

#### 4.8.7 bus_industrial_property_type
- warehouse
- factory
- logistics_yard
- other

#### 4.8.8 bus_vehicle_category
- motor_vehicle
- boat
- caravan
- aircraft
- other

#### 4.8.9 bus_asset_category
- equipment
- machinery
- tools
- fitout
- other

#### 4.8.10 bus_rescue_pressure_level
- manageable
- urgent
- critical
- not_sure

#### 4.8.11 arrears_band
- under_50k
- band_50k_250k
- band_250k_1m
- band_1m_plus
- not_sure

#### 4.8.12 bus_funding_structure
- secured
- unsecured

#### 4.8.13 bus_security_type
- property
- asset
- debtors
- stock
- other

#### 4.8.14 bus_property_status
- unencumbered
- bonded
- not_sure

#### 4.8.15 bus_bridging_repayment_trigger
- property_sale
- refinance
- other

### 4.9 Farmers (UX2)  *(enums stay as per UX2; minimal list here)*
- far_entity_type: natural_person / business / trust
- far_farm_type: crops / livestock / mixed / other / not_sure
- far_asset_type: tractor / harvester / implement / bakkie_truck / other / not_sure
- far_debt_status: current / behind / handed_over / under_debt_review / not_sure
- far_solar_system_type: solar_only / solar_backup / backup_only / not_sure

### 4.10 Developers (UX4) *(enums stay as per UX4; minimal list here)*
- dev_project_type: property_development / industrial_property / commercial_property / refurbishments_conversions / bridging_finance
- dev_project_stage: concept / land_secured / approvals_in_progress / ready_to_build / in_construction / not_sure

### 4.11 Solar / Backup power (UX5) *(enums stay as per UX5; minimal list here)*
- solar options: residential / business / agriculture / battery_inverter_upgrade
- common enums: yes_no_not_sure, timeframe, asset_condition

## 5. Option keys (stable identifiers)

### 5.1 Individuals (UX1)
- ind_residential_property_finance
- ind_vehicle_finance
- ind_asset_finance
- ind_debt_help

### 5.2 Farmers (UX2)
- far_operating_capital
- far_residential_property_finance
- far_agri_property_finance
- far_equipment_finance
- far_vehicle_finance
- far_irrigation_finance
- far_livestock_finance
- far_solar_backup_power_finance
- far_business_rescue

### 5.3 Businesses (UX3)
- bus_working_capital_secured
- bus_working_capital_unsecured
- bus_bridging_finance
- bus_residential_property_finance
- bus_commercial_property_finance
- bus_industrial_property_finance
- bus_vehicle_finance
- bus_asset_finance
- bus_business_rescue

### 5.4 Developers (UX4)
- dev_property_development
- dev_industrial_property
- dev_commercial_property
- dev_refurbishments_conversions
- dev_bridging_finance

### 5.5 Solar / Backup Power (UX5)
- sol_residential_solar_finance
- sol_business_solar_finance
- sol_agriculture_solar_backup_power_finance
- sol_battery_inverter_upgrade

## 6. eligibility_payload dictionaries (core)

### 6.1 Individuals (UX1)

#### 6.1.1 Baseline (all Individual forms)
- eligibility_payload.ind_first_name (text; required)
- eligibility_payload.ind_last_name (text; required)
- eligibility_payload.ind_mobile (text; required)
- eligibility_payload.ind_email (text; optional)
- eligibility_payload.ind_province (enum: sa_province; required)
- eligibility_payload.ind_notes (text; optional)

#### 6.1.2 Residential property finance (ind_residential_property_finance)
- eligibility_payload.ind_res_goal (enum: ind_res_goal; required)
- eligibility_payload.ind_res_first_time_buyer (enum: yes_no_not_sure; required)
- eligibility_payload.ind_res_employment_type (enum: ind_employment_type; required)
- eligibility_payload.ind_res_property_type (enum: ind_res_property_type; required)
- eligibility_payload.ind_res_property_type_other_details (text; optional; shown when property_type=other)
- eligibility_payload.ind_res_value_band (enum: value_band_residential; required)
- eligibility_payload.ind_res_deposit_band (enum: deposit_band; required)
- eligibility_payload.ind_res_timeframe (enum: timeframe; required)
- eligibility_payload.ind_res_has_existing_bond (enum: yes_no_not_sure; required)

#### 6.1.3 Vehicle finance (ind_vehicle_finance)
- eligibility_payload.ind_veh_deal_type (enum: ind_veh_deal_type; required)
- eligibility_payload.ind_veh_category (enum: ind_veh_category; required)
- eligibility_payload.ind_veh_category_other_details (text; optional; shown when category=other)
- eligibility_payload.ind_veh_purchase_source (enum: ind_purchase_source; required)
- eligibility_payload.ind_veh_condition (enum: asset_condition; required)
- eligibility_payload.ind_veh_value_band (enum: value_band_vehicle; required)
- eligibility_payload.ind_veh_deposit_band (enum: deposit_band; required)
- eligibility_payload.ind_veh_term (enum: term_vehicle_months; required)
- eligibility_payload.ind_veh_balloon_required (enum: yes_no_not_sure; required)
- eligibility_payload.ind_veh_timeframe (enum: timeframe; required)

#### 6.1.4 Debt help / debt review (ind_debt_help)
- eligibility_payload.ind_debt_need (enum: ind_debt_need; required)
- eligibility_payload.ind_debt_legal_notice (enum: yes_no_not_sure; required)
- eligibility_payload.ind_debt_equity (enum: ind_debt_equity; required)
- eligibility_payload.ind_debt_status (enum: ind_debt_status; required)
- eligibility_payload.ind_debt_monthly_repayments (enum: value_band_monthly_debt; required)
- eligibility_payload.ind_debt_notes (text; optional)

#### 6.1.5 Asset finance (ind_asset_finance)
- eligibility_payload.ind_asset_category (enum: ind_asset_category; required)
- eligibility_payload.ind_asset_other_details (text; optional; shown when category=other)
- eligibility_payload.ind_asset_value_band (enum: value_band_asset; required)
- eligibility_payload.ind_asset_deposit_band (enum: deposit_band; required)
- eligibility_payload.ind_asset_term (enum: term_asset_months; required)
- eligibility_payload.ind_asset_quote_available (enum: yes_no_not_sure; required)
- eligibility_payload.ind_asset_timeframe (enum: timeframe; required)
- eligibility_payload.ind_asset_notes (text; optional)

### 6.2 Businesses (UX3)

#### 6.2.1 Baseline (all Business forms)
- eligibility_payload.bus_contact_first_name (text; required)
- eligibility_payload.bus_contact_last_name (text; required)
- eligibility_payload.bus_contact_mobile (text; required)
- eligibility_payload.bus_contact_email (text; optional)
- eligibility_payload.bus_contact_role (enum: bus_contact_role; required)
- eligibility_payload.bus_entity_type (enum: bus_entity_type; required)
- eligibility_payload.bus_registered_name (text; required)
- eligibility_payload.bus_registration_number (text; optional)
- eligibility_payload.bus_trading_name (text; optional)
- eligibility_payload.bus_province (enum: sa_province; required)
- eligibility_payload.bus_notes (text; optional)

#### 6.2.2 Business funding / working capital (bus_working_capital)
- eligibility_payload.bus_funding_type (enum: bus_funding_type; required)
- eligibility_payload.bus_amount_needed (currency; required)
- eligibility_payload.bus_timeframe (enum: timeframe; required)
- eligibility_payload.bus_funds_use (text; optional)
- eligibility_payload.bus_existing_facilities (enum: yes_no_not_sure; optional)

#### 6.2.3 Residential property finance (via business/trust) (bus_residential_property_finance)
- eligibility_payload.bus_res_property_purpose (enum: ind_res_goal; required)
- eligibility_payload.bus_res_property_value (currency; required)
- eligibility_payload.bus_res_deposit (currency; optional)
- eligibility_payload.bus_timeframe (enum: timeframe; required)

#### 6.2.4 Commercial property finance (bus_commercial_property_finance)
- eligibility_payload.bus_property_request_type (enum: bus_property_request_type; required)
- eligibility_payload.bus_property_type (enum: bus_property_type; required)
- eligibility_payload.bus_property_value (currency; required)
- eligibility_payload.bus_property_deposit (currency; optional)
- eligibility_payload.bus_property_occupancy (enum: owner_or_rental_occupied; required)
- eligibility_payload.bus_property_rental_gross_pm (currency; optional)
- eligibility_payload.bus_timeframe (enum: timeframe; required)

#### 6.2.5 Industrial property finance (bus_industrial_property_finance)
- eligibility_payload.bus_industrial_request_type (enum: bus_industrial_request_type; required)
- eligibility_payload.bus_industrial_property_type (enum: bus_industrial_property_type; required)
- eligibility_payload.bus_industrial_value (currency; required)
- eligibility_payload.bus_industrial_deposit (currency; optional)
- eligibility_payload.bus_industrial_intended_use (enum: owner_or_rental_occupied; required)
- eligibility_payload.bus_timeframe (enum: timeframe; required)

#### 6.2.6 Vehicle finance (business) (bus_vehicle_finance)
- eligibility_payload.bus_vehicle_deal_type (enum: ind_veh_deal_type; required)
- eligibility_payload.bus_vehicle_category (enum: bus_vehicle_category; required)
- eligibility_payload.bus_vehicle_category_other_details (text; optional; shown when category=other)
- eligibility_payload.bus_vehicle_purchase_source (enum: ind_purchase_source; required)
- eligibility_payload.bus_vehicle_condition (enum: asset_condition; required)
- eligibility_payload.bus_vehicle_value (currency; required)
- eligibility_payload.bus_vehicle_deposit_band (enum: deposit_band; required)
- eligibility_payload.bus_vehicle_term (enum: term_vehicle_months; required)
- eligibility_payload.bus_vehicle_balloon_required (enum: yes_no_not_sure; required)
- eligibility_payload.bus_timeframe (enum: timeframe; required)
- eligibility_payload.bus_vehicle_notes (text; optional)

#### 6.2.7 Asset finance (business) (bus_asset_finance)
- eligibility_payload.bus_asset_category (enum: bus_asset_category; required)
- eligibility_payload.bus_asset_category_other_details (text; optional; shown when category=other)
- eligibility_payload.bus_asset_value (currency; required)
- eligibility_payload.bus_asset_deposit_band (enum: deposit_band; required)
- eligibility_payload.bus_asset_condition (enum: asset_condition; required)
- eligibility_payload.bus_timeframe (enum: timeframe; required)
- eligibility_payload.bus_asset_notes (text; optional)

#### 6.2.8 Business rescue (bus_business_rescue)
- eligibility_payload.bus_rescue_pressure_level (enum: bus_rescue_pressure_level; required)
- eligibility_payload.bus_rescue_creditor_actions (enum: yes_no_not_sure; required)
- eligibility_payload.bus_rescue_arrears_band (enum: arrears_band; required)
- eligibility_payload.bus_rescue_notes (text; optional)

## 7. Change log
- v2.0 (2026-01-08)
  - Businesses: split working capital into secured and unsecured variants (bus_working_capital_secured, bus_working_capital_unsecured).
  - Businesses: added explicit bridging finance option (bus_bridging_finance).
  - Added new enums: bus_funding_structure, bus_security_type, bus_property_status, bus_bridging_repayment_trigger.
  - Enhanced business working capital payload fields for secured/unsecured differentiation.
  - Added bridging finance payload dictionary.


- v1.9 (2026-01-08)
  - Individuals: split Vehicle vs Asset finance (removed “Special financing”), renamed Debt relief to Debt help / debt review.
  - Businesses: split Vehicle finance (business) vs Asset finance (business) (removed combined asset/vehicle option).
  - Updated option keys, enums, and payload dictionaries accordingly.
