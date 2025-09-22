import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './IndividualPost.css';
import TableOfContents from '../components/TableOfContents';
import MobileSidebar from '../components/MobileSidebar';
import Plot from 'react-plotly.js';

// Post 0 — Taxation 101: a short, practical primer (no math models or plots)
export default function one() {
  const sections = [
    { id: 'introduction', title: 'Introduction', isSection: true },
    { id: 'what-taxes-pay-for', title: 'What taxes pay for', parent: 'introduction' },
    { id: 'types-of-taxes', title: 'Common types of taxes', isSection: true },
    { id: 'how-rates-work', title: 'How tax rates actually work', isSection: true },
    { id: 'tradeoffs', title: 'Common policy trade-offs', isSection: true },
    { id: 'principles', title: 'Principles of good tax design', isSection: true },
    { id: 'administration', title: 'How tax systems are administered', isSection: true },
    { id: 'international', title: 'International cooperation', isSection: true },
    { id: 'misconceptions', title: 'Common misconceptions', isSection: true },
    { id: 'practical-tips', title: 'Practical tips: individuals & small businesses', isSection: true },
    { id: 'glossary', title: 'Glossary (plain language)', isSection: true },
    { id: 'references', title: 'References', isSection: true },
  ];

  return (
    <motion.div
      className="blog-post-container"
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MobileSidebar sections={sections} />
      <Row justify="center">
        <Col xs={22} sm={16} md={14} lg={13} xl={14} className="blog-text-content">
          <p id="introduction" className="section-title">Taxation 101: A short primer</p>
          <div className="indented-block">
            <strong>TL;DR:</strong> Taxes fund essential services and infrastructure. Good tax systems are fair, efficient, simple, transparent, and stable. They balance equity (progressivity) with economic growth, using digital tools for easy compliance and international cooperation to prevent evasion.
          </div>
          <div className="indented-block" style={{ borderLeft: '4px solid var(--accent-color, #7395AE)', background: 'rgba(115,149,174,0.08)', padding: '12px 14px', margin: '14px 0' }}>
            <strong>Myths vs Facts</strong>
            <ul style={{ marginTop: 8 }}>
              <li><strong>Myth:</strong> “If the top rate rises, all my income is taxed more.” <strong>Fact:</strong> Only the slice above the threshold faces the higher <em>marginal</em> rate; your average rate changes much less.</li>
              <li><strong>Myth:</strong> “Corporate tax pays for most public services.” <strong>Fact:</strong> On average, corporate taxes are a minority share; labour‑related and consumption taxes do the heavy lifting. [OECD Revenue Statistics 2023]</li>
              <li><strong>Myth:</strong> “VAT is always regressive.” <strong>Fact:</strong> Exemptions/credits and the <em>overall</em> tax‑and‑benefit system can offset burdens for low‑income households.</li>
              <li><strong>Myth:</strong> “Compliance is mainly audits.” <strong>Fact:</strong> Modern administration relies on withholding, third‑party reporting, pre‑filled returns, and risk‑based checks.</li>
            </ul>
          </div>
          <div>
            Taxes are how communities pool resources to pay for things we use together: schools, healthcare, transport, safety, courts, and basic administration. A good tax system raises the revenue a country needs in a way that is fair, predictable, and doesn’t impose unnecessary costs on people or businesses.
          </div>
          <div className="indented-block">
            This primer keeps things practical: what taxes fund, the main types, how rates really work, and the trade‑offs policymakers face. Numbers differ by country and year; the figures below show OECD-wide averages to give a sense of scale, not to prescribe a target.
          </div>

          <div className="indented-block" id="what-taxes-pay-for">
            <p className="subsection-title">What taxes pay for</p>
            <ul>
              <li>Essential services: education, healthcare, public safety, courts</li>
              <li>Infrastructure: roads, transit, digital networks, water</li>
              <li>Social protection: pensions, unemployment insurance, targeted support</li>
              <li>Shared public goods: environmental protection, research, national defense</li>
            </ul>
          </div>

          <p id="types-of-taxes" className="section-title">Common types of taxes</p>
          <div className="indented-block">
            <ul>
              <li><strong>Personal income tax:</strong> Paid on wages and other income. Often progressive (higher rates on higher incomes).</li>
              <li><strong>Payroll/social contributions:</strong> Fund social insurance (e.g., pensions, health).</li>
              <li><strong>Consumption taxes:</strong> VAT or sales tax collected on most purchases.</li>
              <li><strong>Corporate income tax:</strong> Levied on business profits.</li>
              <li><strong>Property and land taxes:</strong> Based on assessed property values and transactions.</li>
              <li><strong>Excise duties:</strong> Targeted taxes on specific goods (e.g., fuel, alcohol, tobacco).</li>
            </ul>
            <div className="source-attribution">For broad comparisons, see OECD Revenue Statistics for tax-to-GDP ratios and mixes across countries.</div>
            <div style={{ marginTop: 10 }}>
              How these work in practice:
              <ul>
                <li><strong>Who collects:</strong> Central or sub‑national governments (and social security funds) collect different taxes depending on each country’s constitution and assignments.</li>
                <li><strong>How you pay:</strong> Often through <em>withholding</em> (taken from paychecks) and <em>pre‑filled returns</em> (data reported by employers/banks). Businesses remit VAT monthly or quarterly and claim credits for VAT they paid on inputs.</li>
                <li><strong>What’s tricky:</strong> Getting the <em>tax base</em> right (what is taxed), setting thresholds for small businesses, and limiting loopholes and complex exemptions that raise compliance costs.</li>
              </ul>
            </div>
            <div className="indented-block" style={{ borderLeft: '4px solid var(--accent-color, #7395AE)', background: 'rgba(115,149,174,0.08)', padding: '10px 12px', marginTop: 12 }}>
              <strong>Who does what: federal vs unitary</strong>
              <div style={{ marginTop: 6 }}>
                In federal systems (e.g., Canada, United States), states/provinces often levy their own income or sales taxes alongside the central government. In unitary systems (e.g., France), more revenue is typically collected centrally, with local governments relying more on property and service charges. Many countries use local property taxes to fund municipalities.
              </div>
              <div className="source-attribution" style={{ marginTop: 6 }}>
                Source: OECD Revenue Statistics 2023 (taxes by level of government).
                <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
              </div>
            </div>
          </div>

          <p id="how-rates-work" className="section-title">How tax rates actually work</p>
          <div className="indented-block">
            Two useful ideas:
            <ul>
              <li><strong>Marginal rate:</strong> The rate on your <em>next</em> dollar of income. Only the portion of income inside each bracket is taxed at that bracket’s rate.</li>
              <li><strong>Average (effective) rate:</strong> Total tax divided by total income. This is usually lower than the top marginal rate for most people.</li>
            </ul>
            <div className="callout" style={{ marginTop: 8 }}>
              Example (illustrative): If brackets are 10% on the first 10,000; 20% on the next 10,000; and 30% above 20,000—then someone earning 30,000 pays 1,000 + 2,000 + 3,000 = 6,000 total (an average rate of 20%). Only the income above 20,000 faces the 30% marginal rate.
            </div>
            <div style={{ marginTop: 8 }}>
              Why this matters: Raising the top marginal rate affects only incomes above the threshold; broad base‑broadly shared changes (like a VAT change) affect more people but can be implemented uniformly and are harder to avoid.
            </div>
          </div>

            {/* Figure 1: OECD average tax structure (2021) */}
            <div className="data-visualization">
              <Plot
                data={[
                  {
                    type: 'pie',
                    labels: [
                      'Social security contributions',
                      'Personal income tax',
                      'VAT',
                      'Other consumption taxes',
                      'Corporate income tax',
                      'Property taxes',
                      'Other'
                    ],
                    values: [25.6, 23.7, 20.7, 11.2, 10.2, 5.6, 3.0],
                    hole: 0.45,
                    textinfo: 'label+percent',
                    hovertemplate: '%{label}: %{value:.1f}%<extra></extra>',
                  }
                ]}
                layout={{
                  title: 'OECD Average Tax Structure (2021)',
                  paper_bgcolor: 'transparent',
                  plot_bgcolor: 'transparent',
                  font: { color: 'var(--text-color)' },
                  legend: { orientation: 'h', y: -0.15 },
                }}
                style={{ width: '100%', height: 420 }}
                config={{ responsive: true, displayModeBar: false }}
              />
              <div className="source-attribution">
                Source: OECD Revenue Statistics 2023 (Executive summary, "Tax structures in 2021").
                <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
              </div>
              <div className="indented-block" style={{ marginTop: 8 }}>
                <em>Narrative:</em> Corporate income tax is typically around 10% of total revenues on average—most public revenue comes from personal taxes, social contributions, and consumption taxes. This helps explain why debates that focus only on corporate tax miss most of the revenue picture.
              </div>
            </div>

          <p id="principles" className="section-title">Principles of good tax design</p>
          <div className="indented-block">
            A practical tax system tries to balance a few simple ideas:
            <ul>
              <li><strong>Equity:</strong> Treat similar people similarly (horizontal equity) and ask more from those with greater ability to pay (vertical equity).</li>
              <li><strong>Efficiency:</strong> Raise revenue with minimal distortions to work, saving, and investment decisions.</li>
              <li><strong>Simplicity:</strong> Keep rules understandable and compliance costs reasonable.</li>
              <li><strong>Transparency and predictability:</strong> Clear rules that don’t change unpredictably.</li>
              <li><strong>Stability with flexibility:</strong> Stable overall design, but room to respond to shocks.</li>
            </ul>
            Putting these into practice often means: broad tax bases with fewer special exemptions, moderate rates, and targeted support delivered simply (e.g., credits or transfers) rather than complex carve‑outs in the tax code.
          </div>

          <p id="tradeoffs" className="section-title">Common policy trade-offs</p>
          <div className="indented-block">
            Policymakers usually balance the following:
            <ul>
              <li><strong>Base vs rate:</strong> A broad base with fewer exemptions allows lower rates for the same revenue.</li>
              <li><strong>Income vs consumption taxation:</strong> Shifting toward consumption can support saving and investment but may require measures (exemptions, credits) to protect low‑income households.</li>
              <li><strong>Corporate tax and coordination:</strong> High statutory rates on mobile profits can encourage shifting; international coordination reduces a “race to the bottom.”</li>
              <li><strong>Property and land taxes:</strong> Efficient for local finance but politically sensitive; good cadastres and phased‑in reforms help.</li>
              <li><strong>Environmental taxes:</strong> Align prices with social costs (e.g., carbon) and can fund reductions in other taxes (“tax shifting”).</li>
              <li><strong>Tax expenditures vs direct spending:</strong> Delivering goals via the tax code can hide costs and add complexity; simple, direct programs are often clearer.</li>
            </ul>
          </div>

          <p id="administration" className="section-title">How tax systems are administered</p>
          <div className="indented-block">
            Most revenue is collected through systems that make compliance easy and verification reliable:
            <ul>
              <li><strong>Withholding and reporting:</strong> Employers, banks, and platforms report income and often withhold taxes at source.</li>
              <li><strong>Digital services:</strong> Pre-filled returns, online accounts, and real‑time payments reduce effort and errors.</li>
              <li><strong>Risk-based enforcement:</strong> Data matching and audits focus on outliers while keeping burdens low for compliant taxpayers.</li>
            </ul>
            <div className="source-attribution">OECD’s “Tax Administration 3.0” describes how digital design lowers burdens and improves compliance.</div>
            <div style={{ marginTop: 10 }}>
              The typical compliance journey:
              <ol>
                <li><strong>Register</strong> (individual ID, business tax/VAT number).</li>
                <li><strong>Report</strong> income or sales (often pre‑filled; businesses file VAT with input credits).</li>
                <li><strong>Pay</strong> any balance due; refunds issued when credits exceed liabilities.</li>
              </ol>
              Good administration also emphasises service (clear guidance, reminders), dispute resolution, and data security.
            </div>
          </div>

          <p id="international" className="section-title">International cooperation</p>
          <div className="indented-block">
            In a global economy, countries coordinate to reduce tax evasion and avoidance and to create fairer competition:
            <ul>
              <li>Information exchange between tax authorities makes offshore evasion harder.</li>
              <li>Common rules (e.g., the OECD/G20 minimum tax for large multinationals) aim to reduce profit shifting.</li>
              <li>Targeted measures (like stamp duties in some housing markets) can cool speculative inflows. For example, Singapore raised the Additional Buyer’s Stamp Duty for foreign buyers to 60% in April 2023.</li>
            </ul>
            <div style={{ marginTop: 8 }}>
              For cross‑border digital services, many countries require foreign platforms to register and collect VAT where the customer is located—levelling the field with domestic sellers and simplifying compliance.
            </div>
            <div className="indented-block" style={{ borderLeft: '4px solid var(--accent-color, #7395AE)', background: 'rgba(115,149,174,0.08)', padding: '10px 12px', marginTop: 10 }}>
              <strong>Policy example: Singapore housing</strong>
              <div style={{ marginTop: 6 }}>
                Singapore increased the Additional Buyer’s Stamp Duty (ABSD) for foreign buyers to 60% in April 2023 to cool speculative demand and support housing affordability.
              </div>
              <div className="source-attribution" style={{ marginTop: 6 }}>
                Source: Singapore Government (MOF/MND/MAS) press release, Apr 2023.
                <a href="https://www.mnd.gov.sg/newsroom/press-releases/view/further-measures-to-promote-a-sustainable-property-market" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Press release</a>
              </div>
            </div>
          </div>

            {/* Figure 2: Tax-to-GDP range and average (2022) */}
            <div className="data-visualization">
              <Plot
                data={[
                  {
                    type: 'bar',
                    orientation: 'h',
                    x: [16.9, 34.0, 46.1],
                    y: ['Mexico', 'OECD average', 'France'],
                    marker: {
                      color: ['#A5C4D4', '#557A95', '#7395AE']
                    },
                    hovertemplate: '%{y}: %{x:.1f}% of GDP<extra></extra>'
                  }
                ]}
                layout={{
                  title: 'Tax-to-GDP ratio (selected, 2022)',
                  xaxis: { title: '% of GDP', range: [0, 50], gridcolor: '#333' },
                  yaxis: { automargin: true },
                  paper_bgcolor: 'transparent',
                  plot_bgcolor: 'transparent',
                  font: { color: 'var(--text-color)' },
                  margin: { l: 90, r: 20, t: 60, b: 40 },
                }}
                style={{ width: '100%', height: 320 }}
                config={{ responsive: true, displayModeBar: false }}
              />
              <div className="source-attribution">
                Source: OECD Revenue Statistics 2023 (Executive summary, "Tax levels in 2022").
                <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
              </div>
              <div className="indented-block" style={{ marginTop: 8 }}>
                <em>Narrative:</em> Tax-to-GDP levels vary widely across the OECD—from around 17% in Mexico to about 46% in France—with an OECD average near 34%. Effective systems match revenue needs and social preferences while supporting sustainable growth.
              </div>
              <div className="indented-block" style={{ borderLeft: '4px solid var(--accent-color, #7395AE)', background: 'rgba(115,149,174,0.08)', padding: '10px 12px', marginTop: 10 }}>
                <strong>Country snapshot</strong>
                <ul style={{ marginTop: 6 }}>
                  <li><strong>Mexico:</strong> 16.9% of GDP (2022) – among the lowest in the OECD.</li>
                  <li><strong>France:</strong> 46.1% of GDP (2022) – among the highest.</li>
                </ul>
                <div className="source-attribution" style={{ marginTop: 6 }}>
                  Source: OECD Revenue Statistics 2023 ("Tax levels in 2022").
                  <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
                </div>
              </div>
            </div>

            {/* Figure 2b: OECD average tax-to-GDP over time (selected years) */}
            <div className="data-visualization">
              <Plot
                data={[
                  {
                    type: 'scatter',
                    mode: 'lines+markers',
                    x: [2010, 2019, 2020, 2021, 2022],
                    y: [32.7, 33.9, 33.6, 34.1, 34.0],
                    line: { color: '#88A2AA', width: 3 },
                    marker: { size: 6 },
                    hovertemplate: '%{x}: %{y:.1f}% of GDP<extra></extra>'
                  }
                ]}
                layout={{
                  title: 'OECD average tax-to-GDP (selected years)',
                  xaxis: { title: 'Year', dtick: 1, gridcolor: '#333' },
                  yaxis: { title: '% of GDP', range: [30, 36], gridcolor: '#333' },
                  paper_bgcolor: 'transparent',
                  plot_bgcolor: 'transparent',
                  font: { color: 'var(--text-color)' },
                  margin: { l: 70, r: 20, t: 60, b: 40 },
                }}
                style={{ width: '100%', height: 320 }}
                config={{ responsive: true, displayModeBar: false }}
              />
              <div className="source-attribution">
                Source: OECD Revenue Statistics 2023 (Executive summary, "Tax levels in 2022"). Values shown are the OECD average.
                <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
              </div>
              <div className="indented-block" style={{ marginTop: 8 }}>
                <em>Narrative:</em> The OECD average has hovered around the mid‑30s percent of GDP in recent years, with a small dip in 2020 and recovery thereafter.
              </div>
            </div>

            {/* Figure 3: OECD average revenue composition (2021) */}
            <div className="data-visualization">
              <Plot
                data={[
                  {
                    type: 'bar',
                    orientation: 'h',
                    name: 'Labour-related (PIT + SSC)',
                    x: [49.3], // 23.7 (PIT) + 25.6 (SSC)
                    y: ['OECD average (2021)'],
                    marker: { color: '#6AACAF' },
                    hovertemplate: '%{x:.1f}%<extra></extra>'
                  },
                  {
                    type: 'bar',
                    orientation: 'h',
                    name: 'Consumption (VAT + other)',
                    x: [31.9], // 20.7 (VAT) + 11.2 (other consumption)
                    y: ['OECD average (2021)'],
                    marker: { color: '#A4C8E1' },
                    hovertemplate: '%{x:.1f}%<extra></extra>'
                  },
                  {
                    type: 'bar',
                    orientation: 'h',
                    name: 'Other (CIT, property, other)',
                    x: [18.8], // 10.2 (CIT) + 5.6 (property) + 3.0 (other)
                    y: ['OECD average (2021)'],
                    marker: { color: '#D1E3F0' },
                    hovertemplate: '%{x:.1f}%<extra></extra>'
                  }
                ]}
                layout={{
                  title: 'Where revenue comes from: broad buckets',
                  barmode: 'stack',
                  xaxis: { title: '% of total revenue', range: [0, 100], gridcolor: '#333' },
                  yaxis: { automargin: true },
                  paper_bgcolor: 'transparent',
                  plot_bgcolor: 'transparent',
                  font: { color: 'var(--text-color)' },
                  legend: { orientation: 'h', y: -0.2 },
                  margin: { l: 150, r: 20, t: 60, b: 60 },
                }}
                style={{ width: '100%', height: 320 }}
                config={{ responsive: true, displayModeBar: false }}
              />
              <div className="source-attribution">
                Source: OECD Revenue Statistics 2023 (Executive summary, "Tax structures in 2021"). Calculations aggregate shares shown in Figure 1.
                <a href="https://www.oecd.org/en/publications/revenue-statistics-2023_9d0453d5-en/full-report.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Report</a>
              </div>
              <div className="indented-block" style={{ marginTop: 8 }}>
                <em>Narrative:</em> On average, roughly half of revenues come from labour-related taxes (personal income tax and social security), around one‑third from consumption, and under one‑fifth from everything else. This framing helps keep debates focused on the big levers.
              </div>
            </div>

          <p id="misconceptions" className="section-title">Common misconceptions</p>
          <div className="indented-block">
            <ul>
              <li><strong>“High taxes always kill growth”:</strong> Growth depends on many factors. Countries with strong public services and trust can sustain both relatively high revenues and competitive, innovative economies.</li>
              <li><strong>“Corporate tax is the main revenue source”:</strong> In many countries, most revenue comes from personal income, social contributions, and consumption taxes, not corporate tax.</li>
              <li><strong>“Taxes are only redistribution”:</strong> Much spending is on shared services and infrastructure that support productivity and opportunity.</li>
              <li><strong>“VAT is always regressive”:</strong> Basic needs can be zero‑rated or credited; what matters is the full tax‑and‑benefit system and how it supports low‑income households.</li>
              <li><strong>“A higher top rate taxes all my income more”:</strong> Only the income above the threshold is taxed at the higher marginal rate; your average rate changes by much less.</li>
            </ul>
          </div>

          <p id="practical-tips" className="section-title">Practical tips: individuals & small businesses</p>
          <div className="indented-block">
            <ul>
              <li><strong>Keep records:</strong> Pay slips, invoices, expense receipts, and bank statements—digital copies are fine.</li>
              <li><strong>Check pre‑filled returns:</strong> Make sure employer and bank data match your own; correct promptly if needed.</li>
              <li><strong>Set reminders:</strong> Filing dates, instalments, and VAT cycles; many administrations offer email/SMS alerts.</li>
              <li><strong>For VAT‑registered businesses:</strong> Number invoices, capture VAT paid on inputs, and reconcile regularly; mind registration thresholds and simplified schemes.</li>
              <li><strong>Ask early:</strong> If unsure, use official guidance or helplines; it’s easier to get it right than to fix it later.</li>
            </ul>
          </div>

          <p id="glossary" className="section-title">Glossary (plain language)</p>
          <div className="indented-block">
            <ul>
              <li><strong>Tax base:</strong> What is being taxed (income, profits, property value, sales).</li>
              <li><strong>Marginal rate:</strong> The rate on the next dollar of income.</li>
              <li><strong>Average (effective) rate:</strong> Total tax divided by total income.</li>
              <li><strong>Withholding:</strong> Tax taken from pay before you receive it.</li>
              <li><strong>VAT (value‑added tax):</strong> A sales tax collected at each stage of production, with credits for tax paid on inputs.</li>
              <li><strong>Social security contributions:</strong> Earmarked taxes for pensions, health, or other insurance schemes.</li>
              <li><strong>Excise duty:</strong> A specific tax on certain goods (fuel, tobacco, alcohol) often for health or environmental reasons.</li>
              <li><strong>Tax expenditure:</strong> A tax break (deduction, exemption, credit) used instead of direct spending to achieve a policy goal.</li>
              <li><strong>Tax incidence:</strong> Who ultimately bears the cost of a tax after prices and wages adjust—not always the same as who writes the cheque.</li>
            </ul>
          </div>

          <p id="references" className="section-title">References</p>
          <div className="indented-block references">
            <p>[1] OECD. (2023). Revenue Statistics 2023. <a href="https://doi.org/10.1787/19963726" target="_blank" rel="noopener noreferrer">OECD Publishing</a>. Tax levels and structures across member countries.</p>
            <p>[2] Mirrlees, J. et al. (2011). Tax by Design (The Mirrlees Review). <a href="https://ifs.org.uk/publications/tax-design-mirrlees-review" target="_blank" rel="noopener noreferrer">Institute for Fiscal Studies</a>. Principles for modern tax systems.</p>
            <p>[3] Diamond, P., & Saez, E. (2011). The Case for a Progressive Tax. <a href="https://doi.org/10.1257/jep.25.4.165" target="_blank" rel="noopener noreferrer">Journal of Economic Perspectives</a>. Accessible overview of optimal progressivity.</p>
            <p>[4] Stiglitz, J. E., & Rosengard, J. (2015). Economics of the Public Sector (4th ed.). <a href="https://global.oup.com/academic/product/economics-of-the-public-sector-9780393937091" target="_blank" rel="noopener noreferrer">W.W. Norton</a>. Introductory public finance text.</p>
            <p>[5] OECD. (2020–2025). Tax Administration 3.0. <a href="https://www.oecd.org/tax/forum-on-tax-administration/publications-and-products/tax-administration-3-0.htm" target="_blank" rel="noopener noreferrer">OECD FTA</a>. Digital transformation of tax administration.</p>
            <p>[6] Singapore Government (MOF/MND/MAS). (2023). Further Measures to Promote a Sustainable Property Market. <a href="https://www.mnd.gov.sg/newsroom/press-releases/view/further-measures-to-promote-a-sustainable-property-market" target="_blank" rel="noopener noreferrer">Press release</a>. ABSD for foreign buyers set at 60%.</p>
            <p>[7] OECD. (Annual). Tax Policy Reforms. <a href="https://www.oecd.org/tax/tax-policy-reforms.htm" target="_blank" rel="noopener noreferrer">Series</a>. Recent country reforms and themes.</p>
          </div>
        </Col>
        <Col xs={0} sm={0} md={5} lg={5} xl={5} className="desktop-toc">
          <TableOfContents sections={sections} />
        </Col>
      </Row>
    </motion.div>
  );
}