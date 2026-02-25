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

A well-written title and overview might look like:

> Replication package for "Firm Characteristics and the Cross Section of Stock Returns" by Jane Doe and John Smith.

Followed by an overview paragraph such as:

> This replication package contains code and data required to reproduce all tables and figures in the paper. The workflow consists of (i) downloading and cleaning raw data from public sources, (ii) constructing the final analysis dataset, and (iii) running estimation routines that generate the results. All steps can be executed by running the main script `main.do`. Total runtime is approximately 2 hours.

Or, when licensed data cannot be shared:

> This replication package contains code and pseudo-data that allow users to run the full workflow and reproduce the analysis pipeline. The original licensed data used in the paper cannot be redistributed. The workflow consists of (i) loading pseudo-data with the same structure and key variable definitions as the original raw data, (ii) constructing the analysis data, and (iii) running the estimation routines that produce the tables and figures. All steps can be executed by running the main script `main.do`. Total runtime is approximately 10 minutes.

---

## 2. Data Availability and Provenance

**Questions to check:**
- Does the README clearly state whether external (non-simulated) data are used?
- Is there an explicit data rights statement?
- Do the authors state whether they have the legal right to use and/or redistribute the data?
- Is the data license specified where relevant?
- Is the overall public availability status of the data clearly categorized?

**Red flags to note:**
- Vague statements like "data are available upon request"
- Missing or inconsistent rights statements
- No distinction between public, restricted, and proprietary data

**Best-practice examples for each sub-item:**

*External data statement:*

> This paper analyzes external data.

or

> This paper does not involve analyzing external data; all data are simulated within the provided code.

or

> All data are publicly available and downloaded automatically by the replication code.

*Rights statement:*

> I certify that the author(s) of the manuscript have legitimate access to and permission to use the data used in this manuscript.

or

> I certify that the author(s) of the manuscript have documented permission to redistribute/publish the data contained within this replication package.

*Legal rights confirmation:*

> The authors have legitimate access to all data used in this manuscript.

or

> The authors have permission to redistribute the data included in this replication package.

*Data license:*

> The data are distributed under a Creative Commons Attribution 4.0 (CC-BY 4.0) license. See `LICENSE.txt` for details.

*Public availability status:*

> All data are publicly available.

or

> Some data cannot be made publicly available due to confidentiality / licensing restrictions.

or

> All data are included in the replication package.

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
- For confidential data, do the authors commit to preserving it for a specified period?

**Best-practice examples:**

*Public data source (auto-downloaded):*

> The unemployment rate data is downloaded from the Federal Reserve Economic Data (FRED) database maintained by the Federal Reserve Bank of St. Louis.
>
> - Data source: Federal Reserve Bank of St. Louis, FRED
> - Series ID: UNRATE
> - URL: <https://fred.stlouisfed.org/series/UNRATE>
> - Access: Public use, no registration required
> - Format: CSV
> - License: Public domain (U.S. government data)
> - Download method: The code automatically downloads the data via the URL
> - Provided: Yes

*Subscription-based source (not redistributable):*

> The mutual fund data are obtained from the Morningstar Mutual Fund Database maintained by Morningstar, Inc.
>
> - Data source: Morningstar, Inc.
> - Database: Morningstar Mutual Fund Database (Morningstar Direct)
> - URL: <https://www.morningstar.com/products/direct>
> - Access: Subscription-based; requires institutional or individual license
> - Format: Proprietary database export (CSV/Excel)
> - License: Proprietary; redistribution not permitted under standard licensing terms
> - Download method: Data are manually downloaded via the Morningstar Direct platform
> - Provided: No (licensed data cannot be redistributed)

*WRDS/CRSP source:*

> The stock return data are obtained from the CRSP Monthly Stock File maintained by the Center for Research in Security Prices (CRSP) and distributed through Wharton Research Data Services (WRDS).
>
> - Data source: Center for Research in Security Prices (CRSP)
> - Database: CRSP Monthly Stock File (via WRDS)
> - URL: <https://wrds-www.wharton.upenn.edu/pages/about/data-vendors/center-for-research-in-security-prices-crsp/>
> - Access: Subscription-based; requires institutional WRDS license
> - Format: Proprietary database export (CSV)
> - License: Proprietary; redistribution not permitted under standard licensing terms
> - Download method: Data are downloaded via the WRDS web interface
> - Provided: No (licensed data cannot be redistributed)

*Summary table:*

> | Data file | Source | Notes | Provided |
> |---|---|---|---|
> | `data/raw/unrate.dta` | FRED | Unemployment rate | Yes |
> | `data/raw/cpi.dta` | FRED | CPI index | Yes |
> | `data/analysis/main.dta` | Derived | Final analysis dataset | Yes |

*Data dictionary:*

> Variable labels are included in the `pseudo-data.dta` files.

or

> A full codebook that describes each variable and table is provided in `codebook.xlsx`.

*Proprietary data removed:*

> The replication package does not violate license agreements.

*Pseudo-data:*

> The replication package includes pseudo-data when the raw data cannot be shared. We have verified that the pseudo-data allows the replication code to execute without errors.

*Data preservation:*

> The authors preserve all confidential data for five years after publication.

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

**Best-practice examples:**

*Software and packages:*

> The code was last run using Stata 18 MP. The required user-written packages are `estout` and `reghdfe`. All packages are included in the `ado` directory.

*Setup script:*

> The replication package includes `setup.do`, which installs all required packages and creates the necessary directory structure.

or

> Various Python packages recorded in the `pyproject.toml` and `uv.lock`. By running `uv sync`, the required packages and their versions are installed.

*Random number generation:*

> Random seed is set at line 12 of the program `programs/config.do`.

or

> The analysis relies on random number generation, but setting a seed is not possible.

or

> No pseudo-random number generator is used in the analysis.

*Runtime:*

> Approximate time needed to reproduce the analyses on a standard (2026) desktop machine: 10–60 minutes.

or

> Approximate time needed to reproduce the analyses on a scientific computing cluster with 200 cores: 4 days. In particular, `programs/monte_carlo.py` takes 90% of the computing time.

*Disk space:*

> Approximate storage space needed: 25 MB – 250 MB.

*Machine description:*

> The code was last run on a 4-core laptop running macOS 14 with 16 GB RAM and approximately 50 GB of free disk space.

*File paths:*

> All programs consistently use forward slashes (`/`) for file paths to ensure compatibility across different operating systems.

> All file paths are defined relative to the project root, minimizing the need for manual path adjustments and improving portability.

---

## 5. Description of Programs

**Questions to check:**
- Is there a clear main entry point for replication?
- Is the role of `main.do`, `main.py`, `main.R`, or equivalent clearly explained?
- Are path assumptions explained?
- Are ordering dependencies clearly described?
- Are there directories whose scripts must be run sequentially?
- Is the code license explicitly stated?

**Best-practice examples:**

*Main entry point:*

> Opening `main.do` automatically identifies the project root and running it executes all steps in the correct sequence.

or

> Set the path in `programs/main.do` to the root of the project directory. Executing the script will then run all steps in the correct sequence.

*Ordering dependencies:*

> Programs in `02_analysis` must be run sequentially, as later scripts depend on outputs from earlier ones.

*Code license:*

> The code is licensed under the MIT License. See `LICENSE.txt` for details.

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
- "Run the code" without specifics
- Missing environment assumptions

**Best-practice examples:**

*Step-by-step instructions:*

> 1. Ensure you have Python 3.13 installed
> 2. Ensure you have `uv` installed
> 3. Run `uv sync` to install dependencies
> 4. Ensure you have an active internet connection
> 5. Run `uv run python main.py`

*Manual steps:*

> No manual steps are required; all procedures are fully automated.

or

> Figure 1 must be generated manually using Excel by following the instructions below.

*Verification:*

> The authors verified that the instructions ran successfully in a clean environment on their local machine before submission, and the data editors independently verified them again.

---

## 7. List of Tables and Programs

**Questions to check:**
- Does the README list which tables and figures are reproduced?
- Does it cover the main paper and appendices (if applicable)?
- Is there a mapping from each table/figure to:
  - Script name
  - Output file
  - Notes or dependencies?

**Best-practice examples:**

*Scope:*

> All tables and figures in the main paper.

or

> All tables and figures in the paper and the online appendix.

*Mapping table:*

> | Figure/Table | Program | Output file | Notes |
> |---|---|---|---|
> | Table 1 | `02_analysis/table1.do` | `table1.csv` | Summary statistics |
> | Figure 2 | `02_analysis/fig2.do` | `figure2.png` | Baseline results |

---

## 8. References

**Questions to check:**
- Are **all datasets cited**, including proprietary and confidential ones?
- Are CRSP, Compustat, Morningstar, etc., properly referenced?
- Are URLs or persistent identifiers provided where appropriate?

**Best-practice examples:**

> Standard and Poor's (S&P). 2024. *Compustat-Capital IQ*. Wharton Research Data Services. <https://wrds-www.wharton.upenn.edu/pages/about/data-vendors/sp-global-market-intelligence/>

> Center for Research in Security Prices (CRSP). 2026. *CRSP Stock File*. Wharton Research Data Services. <https://wrds-www.wharton.upenn.edu/pages/about/data-vendors/center-for-research-in-security-prices-crsp/>

---

## 9. Acknowledgements

**Questions to check:**
- Are reused templates, text, or materials acknowledged?
- Are permissions or sources for templates explicitly stated?

**Best-practice example:**

> This README template was adapted from the Social Science Data Editors' README template, available at <https://social-science-data-editors.github.io/template_README/>

---

## Final Assessment

Conclude with:
- A **summary verdict** (Ready for submission / Needs minor revision / Needs major revision)
- A **prioritized list of fixes**, starting with issues that would block acceptance by data editors
- Any **general best-practice suggestions** to improve clarity or robustness

Be precise, constructive, and explicit. Avoid vague feedback.