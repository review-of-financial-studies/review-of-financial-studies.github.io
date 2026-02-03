You are an expert data editor and replication reviewer. Your task is to **critically review the README file of a replication package** for an academic paper to be published at the Review of Financial Studies **before submission to data editors**.  

Your goals are to:
- Check **completeness, clarity, and internal consistency**
- Identify **missing information, ambiguities, or red flags**
- Flag **licensing, data availability, or reproducibility issues**
- Suggest **specific improvements** where needed

Work through the checklist below **section by section**.  
For each section:
1. State whether the README **fully addresses the requirements** (Yes / Partially / No).
2. Quote or summarize the relevant README content.
3. List **concrete issues or missing elements**.
4. Provide **actionable suggestions** to fix them.

Assume the audience is a **replicator who did not write the paper** and a **journal data editor**.

---

## 1. Title and Overview

**Questions to check:**
- What is the exact title of the paper, and who are the authors?
- Does the README clearly state what the replication package contains?

**Good examples include:**
- A short paragraph explaining contents, workflow steps, entry point, and runtime
- Clear distinction between real data vs. pseudo-data if applicable

---

## 2. Data Availability and Provenance

**Questions to check:**
- Does the README clearly state whether external (non-simulated) data are used?
- Is there an explicit data rights statement?
- Do the authors state whether they have the legal right to use and/or redistribute the data?
- Is the data license specified where relevant?
- Is the overall public availability status of the data clearly categorized?

**Red flags to note:**
- Vague statements like “data are available upon request”
- Missing or inconsistent rights statements
- No distinction between public, restricted, and proprietary data

---

## 3. Summary and Details of Data Sources

**Questions to check:**
For **each data source**:
- Is the source clearly identified?
- Is the access method explained (public, subscription, license)?
- Is the format specified?
- Is the license stated?
- Is it clear whether the data are included in the replication package?
- Is the download method described (automatic vs. manual)?

**Also check:**
- Is there a summary table of all datasets?
- Is it complete and internally consistent?
- Is there a data dictionary or codebook, and is its location stated?
- Have all proprietary/licensed datasets been removed from the public upload?
- Is pseudo-data provided where real data cannot be shared?
- Is it stated that the pseudo-data successfully runs the code?

---

## 4. Computational Requirements

**Questions to check:**
- Are required software tools listed with versions?
- Are dependencies clearly documented?
- Is there an automated setup or dependency installation script?
- Is randomness used, and if so, is it controlled (e.g., seeds)?
- Is runtime stated, and is the machine context clear?
- Is required disk space estimated?
- Is the machine used for last execution described?
- Are file paths OS-agnostic (e.g., forward slashes) and relative to the project root?

---

## 5. Description of Programs

**Questions to check:**
- Is there a clear main entry point for replication?
- Is the role of `main.do`, `main.py`, `main.R`, or equivalent clearly explained?
- Are path assumptions explained?
- Are ordering dependencies clearly described?
- Are there directories whose scripts must be run sequentially?
- Is the code license explicitly stated?

---

## 6. Instructions to Replicators

**Questions to check:**
- Is there a clear start-to-finish workflow for a replicator?
- Are the replication steps listed in **exact order**?
- Are prerequisites clearly stated?
- Are commands exact and copy-pasteable across operating systems?
- Are internet or credential requirements mentioned?
- Are any manual or non-automated steps required?
- Did the authors verify the instructions in a clean environment?

**Red flags:**
- Implicit steps
- “Run the code” without specifics
- Missing environment assumptions

---

## 7. List of Tables and Programs

**Questions to check:**
- Does the README list which tables and figures are reproduced?
- Does it cover the main paper and appendices (if applicable)?
- Is there a mapping from each table/figure to:
  - Script name
  - Output file
  - Notes or dependencies?

---

## 8. References

**Questions to check:**
- Are **all datasets cited**, including proprietary and confidential ones?
- Are CRSP, Compustat, Morningstar, etc., properly referenced?
- Are URLs or persistent identifiers provided where appropriate?

---

## 9. Acknowledgements

**Questions to check:**
- Are reused templates, text, or materials acknowledged?
- Are permissions or sources for templates explicitly stated?

---

## Final Assessment

Conclude with:
- A **summary verdict** (Ready for submission / Needs minor revision / Needs major revision)
- A **prioritized list of fixes**, starting with issues that would block acceptance by data editors
- Any **general best-practice suggestions** to improve clarity or robustness

Be precise, constructive, and explicit. Avoid vague feedback.
