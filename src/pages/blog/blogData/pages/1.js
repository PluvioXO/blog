import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './IndividualPost.css';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import TableOfContents from '../components/TableOfContents';
import MobileSidebar from '../components/MobileSidebar';
import Plot from 'react-plotly.js';

export default function one() {
  // Define sections for table of contents
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      isSection: true,
    },
    {
      id: 'global-landscape',
      title: 'Global Tax Landscape',
      parent: 'introduction',
    },
    {
      id: 'government-incompetence',
      title: 'Government Competence and Effectiveness',
      isSection: true,
    },
    {
      id: 'fiscal-metrics',
      title: 'Fiscal Performance Metrics',
      parent: 'government-incompetence',
    },
    {
      id: 'illegal-financial-flows',
      title: 'Inhibiting Illegal Financial Flows',
      isSection: true,
    },
    {
      id: 'aml-measures',
      title: 'Anti-Money Laundering Measures',
      parent: 'illegal-financial-flows',
    },
    {
      id: 'information-exchange',
      title: 'Information Exchange Systems',
      parent: 'illegal-financial-flows',
    },
    {
      id: 'taxation-force-good',
      title: 'Taxation as a Force for Good',
      isSection: true,
    },
    {
      id: 'progressive-taxation',
      title: 'Progressive Taxation',
      parent: 'taxation-force-good',
    },
    {
      id: 'targeted-incentives',
      title: 'Targeted Incentives',
      parent: 'taxation-force-good',
    },
    {
      id: 'case-studies',
      title: 'Case Studies in Effective Tax Policy',
      parent: 'taxation-force-good',
    },
    {
      id: 'moving-forward',
      title: 'Moving Forward',
      isSection: true,
    },
    {
      id: 'implementation-challenges',
      title: 'Implementation Challenges',
      parent: 'moving-forward',
    },
    {
      id: 'references',
      title: 'References',
      isSection: true,
    }
  ];

  // Data for tax-to-GDP ratio visualization
  const taxToGDPData = {
    countries: ['France', 'Denmark', 'Austria', 'Italy', 'Sweden', 'Belgium', 'Finland', 'OECD Avg', 'UK', 'Canada', 'US', 'Switzerland', 'Mexico'],
    ratios: [45.8, 43.4, 43.2, 42.8, 42.5, 42.4, 42.4, 34.0, 35.4, 33.8, 27.6, 26.9, 16.8]
  };

  // Data for tax structure visualization
  const taxStructureData = {
    categories: ['Personal Income', 'Corporate Income', 'Social Security', 'Property', 'Consumption', 'Other'],
    highTax: [30.2, 8.5, 30.7, 5.7, 23.4, 1.5], // Average of high-tax countries
    lowTax: [44.0, 7.4, 21.9, 10.4, 16.3, 0.1], // US figures as example of low-tax country
    labels: ['High-Tax Countries', 'United States']
  };

  // Data for public satisfaction with government services
  const publicSatisfactionData = {
    countries: ['Denmark', 'Finland', 'Norway', 'Sweden', 'Germany', 'France', 'OECD Avg', 'UK', 'US'],
    satisfaction: [75, 71, 70, 68, 60, 51, 48, 42, 35]
  };

  // Create correlation data between tax rates and satisfaction
  const correlationData = {
    countries: ['Denmark', 'Finland', 'Sweden', 'Germany', 'France', 'OECD Avg', 'UK', 'US'],
    taxRates: [43.4, 42.4, 42.5, 38.2, 45.8, 34.0, 35.4, 27.6],
    satisfaction: [75, 71, 68, 60, 51, 48, 42, 35],
    gdpPerCapita: [61063, 49041, 51430, 45723, 40494, 45342, 42330, 63416]
  };

  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <MobileSidebar sections={sections} />
    <Row justify="center">
      <Col xs={22} sm={16} md={14} lg={13} xl={14} className='blog-text-content'>
        <p id="introduction" className='section-title'>Tax Policy as a Methodology for Doing Good</p>
        <p className="blog-subtitle">Harnessing fiscal policy to build equitable and sustainable societies</p>
        
        <div>
          Tax rates and implementation vary significantly across countries, with some nations having more positive views on taxation than others. However, when implemented correctly, taxation can be an incredible force for good: a powerful instrument for social welfare, promoting equality, fostering sustainable development, and even combating illegal financial flows.
          
          This article examines why paying taxes should be viewed positively, and why tax avoidance through tax havens or aggressive accounting practices undermines collective social benefits. By understanding taxation as a methodology for positive change rather than merely a burden, we can better appreciate its role in building fair and prosperous societies.
        </div>
        
        <p id="global-landscape" className='subsection-title'>Global Tax Landscape</p>
        <div>
          The global tax landscape shows significant variation in both tax-to-GDP ratios and tax structures across different countries. According to the latest OECD data, tax-to-GDP ratios range from below 20% in some nations to nearly 46% in others, reflecting different approaches to the role of government and social organization.
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: taxToGDPData.countries,
                  y: taxToGDPData.ratios,
                  type: 'bar',
                  marker: {
                    color: taxToGDPData.ratios.map(value => 
                      value > 40 ? '#557A95' : 
                      value > 35 ? '#7395AE' : 
                      value > 30 ? '#A5C4D4' : 
                      value > 25 ? '#B1A296' : '#5D5C61'
                    )
                  }
                }
              ]}
              layout={{
                title: 'Tax-to-GDP Ratio Across Selected OECD Countries (2022)',
                xaxis: {
                  title: 'Country',
                  tickangle: -45
                },
                yaxis: {
                  title: 'Tax as % of GDP',
                  range: [0, 50]
                },
                margin: {
                  l: 50,
                  r: 50,
                  b: 100,
                  t: 80
                },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: {
                  family: 'Arial, sans-serif',
                  color: 'var(--text-color)'
                }
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          
          Recent years have also seen important developments in international tax cooperation, such as the OECD-led Base Erosion and Profit Shifting (BEPS) initiative, with over 135 countries agreeing to a minimum corporate tax rate of 15%. This historic agreement signals a growing recognition that tax policy must transcend national boundaries to be effective in our increasingly globalized economy.
          
          Meanwhile, global wealth inequality continues to rise, with the richest 1% now owning approximately 45% of the world's wealth, according to research by Zucman (2019). This concentration presents both a challenge and an opportunity for tax policy as a potential corrective mechanism.
        </div>
        
        <p id="government-incompetence" className='section-title'>Government Competence and Effectiveness</p>
        <div>
          Any positive discussion about taxation must address a critical concern: will tax money be used effectively? Government inefficiency is a key argument against higher taxation. If taxpayers discover their contributions are being misused or wasted rather than promoting collective well-being, faith in the system understandably erodes.
          
          For this analysis, we'll assume a reasonably competent government without bloated agencies, one that uses tax revenue effectively to deliver services and infrastructure that benefit citizens. While no government is perfect, many democracies demonstrate that public funds can be managed efficiently when proper accountability mechanisms are in place.
          
          Several countries with higher tax rates, particularly in Northern Europe, consistently rank among the happiest, most prosperous nations globally, suggesting that competent governments can effectively translate tax revenue into social benefits. These nations generally feature:
          
          <ul>
            <li>Transparent budgeting processes</li>
            <li>Strong oversight mechanisms</li>
            <li>Performance metrics for government programs</li>
            <li>Active citizen engagement in fiscal policy</li>
          </ul>
          
          The question becomes not whether government should collect taxes, but how to ensure those revenues are deployed effectively to maximize social welfare.
        </div>
        
        <p id="fiscal-metrics" className='subsection-title'>Fiscal Performance Metrics</p>
        <div>
          Citizen satisfaction with public services often correlates with the effectiveness of tax expenditure. Countries with higher tax rates frequently show higher levels of citizen satisfaction with government services, suggesting these nations are effectively converting tax revenue into public value.
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: publicSatisfactionData.countries,
                  y: publicSatisfactionData.satisfaction,
                  type: 'bar',
                  marker: {
                    color: publicSatisfactionData.satisfaction.map(value => 
                      value > 65 ? '#557A95' : 
                      value > 50 ? '#7395AE' : 
                      value > 40 ? '#A5C4D4' : '#B1A296'
                    )
                  }
                }
              ]}
              layout={{
                title: 'Public Satisfaction with Government Services (%)',
                xaxis: {
                  title: 'Country',
                  tickangle: -45
                },
                yaxis: {
                  title: 'Satisfaction Level (%)',
                  range: [0, 100]
                },
                margin: {
                  l: 50,
                  r: 50,
                  b: 100,
                  t: 80
                },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: {
                  family: 'Arial, sans-serif',
                  color: 'var(--text-color)'
                },
                annotations: [
                  {
                    x: 1,
                    y: -0.15,
                    xref: 'paper',
                    yref: 'paper',
                    text: 'Source: OECD Better Life Index (2022)',
                    showarrow: false,
                    font: {
                      size: 10,
                      color: 'gray'
                    }
                  }
                ]
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: correlationData.taxRates,
                  y: correlationData.satisfaction,
                  type: 'scatter',
                  mode: 'markers+text',
                  text: correlationData.countries,
                  textposition: 'top center',
                  marker: {
                    size: correlationData.gdpPerCapita.map(gdp => gdp/4000),
                    color: correlationData.satisfaction.map(value => 
                      value > 65 ? '#557A95' : 
                      value > 50 ? '#7395AE' : 
                      value > 40 ? '#A5C4D4' : '#B1A296'
                    ),
                    opacity: 0.8,
                    line: {
                      width: 1,
                      color: '#333'
                    }
                  }
                }
              ]}
              layout={{
                title: 'Correlation: Tax-to-GDP Ratio vs. Public Satisfaction',
                xaxis: {
                  title: 'Tax-to-GDP Ratio (%)',
                  range: [25, 50]
                },
                yaxis: {
                  title: 'Public Satisfaction (%)',
                  range: [30, 80]
                },
                margin: {
                  l: 50,
                  r: 50,
                  b: 80,
                  t: 80
                },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: {
                  family: 'Arial, sans-serif',
                  color: 'var(--text-color)'
                },
                annotations: [
                  {
                    x: 1,
                    y: -0.15,
                    xref: 'paper',
                    yref: 'paper',
                    text: 'Sources: OECD Revenue Statistics (2022), OECD Better Life Index (2022)',
                    showarrow: false,
                    font: {
                      size: 10,
                      color: 'gray'
                    }
                  },
                  {
                    x: 0.5,
                    y: 1.05,
                    xref: 'paper',
                    yref: 'paper',
                    text: 'Bubble size represents GDP per capita (USD)',
                    showarrow: false,
                    font: {
                      size: 10,
                      color: 'gray'
                    }
                  }
                ]
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: true }}
            />
          </div>
          
          Government performance metrics increasingly focus on outcomes rather than inputs. Modern public finance management emphasizes:
          
          <ul>
            <li>Value for money assessments</li>
            <li>Cost-benefit analyses of programs</li>
            <li>Digital tracking systems for real-time expenditure monitoring</li>
            <li>Citizen feedback mechanisms</li>
          </ul>
          
          Research by Hendren and Sprung-Keyser (2020) demonstrates that many government programs provide significant returns on investment. For example, public health initiatives like vaccination programs typically show returns of $16 for every $1 invested, while early childhood education programs generate approximately $7 for every $1 invested over the long term.
        </div>
        
        <p id="illegal-financial-flows" className='section-title'>Inhibiting Illegal Financial Flows</p>
        <div>
          A common misunderstanding about taxation is that its purpose is purely to redistribute wealth. However, tax systems serve another critical function: preventing illegal financial flows, which are estimated to amount to trillions of dollars annually. Effective tax systems create transparency that makes illicit financial activity significantly more difficult.
        </div>
        
        <p id="aml-measures" className='subsection-title'>Anti-Money Laundering Measures</p>
        <div>
          Most tax departments and systemically important financial institutions implement robust Anti-Money Laundering (AML) measures. These systems interconnect with government tax authorities to track and prevent illegal financial flows, making it more challenging for criminals to integrate illicit gains into the legitimate economy.
          
          For businesses operating in jurisdictions with strong tax systems, greater transparency is required. This includes:
          
          <ul>
            <li>Disclosure of detailed financial statements</li>
            <li>Documentation of assets and significant transactions</li>
            <li>Compliance with regulatory reporting requirements</li>
            <li>Regular audits by independent third parties</li>
          </ul>
          
          Studies consistently show that audits yield significant returns. For every $1 spent on tax enforcement, approximately $3-5 in additional revenue is recovered—revenue that would otherwise be lost to evasion or fraud.
        </div>
        
        <p id="information-exchange" className='subsection-title'>Information Exchange Systems</p>
        <div>
          Most developed nations have implemented information exchange systems that allow them to share financial data on individuals and businesses. These arrangements make it increasingly difficult for wealthy individuals to hide funds in offshore accounts.
          
          International cooperation through initiatives like the OECD's Common Reporting Standard has dramatically reduced the viability of tax havens. Since 2017, more than 100 jurisdictions have exchanged information on millions of financial accounts, recovering billions in previously evaded taxes.
          
          Research by Johannesen et al. (2018) found that information exchange agreements reduced bank deposits in tax havens by approximately 25%, demonstrating their effectiveness in combating offshore tax evasion. The study also found significant repatriation of funds to countries of origin following the implementation of these agreements.
          
          Stringent penalties for tax evasion further serve as powerful deterrents. The legal consequences discourage individuals and businesses from engaging in non-compliant financial activities, increasing overall compliance with tax codes and laws.
        </div>
        
        <p id="taxation-force-good" className='section-title'>Taxation as a Force for Good</p>
        
        <p id="progressive-taxation" className='subsection-title'>Progressive Taxation</p>
        <div>
          Progressive taxation is a cornerstone of equitable societies, allowing individuals with higher incomes to contribute proportionally more. This redistribution enables people at the lower end of the economic spectrum to access better quality of life through public services like education, healthcare, and infrastructure.
          
          Research suggests that societies with more progressive tax systems tend to have:
          
          <ul>
            <li>Higher social mobility</li>
            <li>Lower wealth inequality</li>
            <li>Better public health outcomes</li>
            <li>More stable economic growth patterns</li>
          </ul>
          
          A study by Cingano (2014) for the OECD found that income inequality has a negative and statistically significant impact on economic growth. The study concluded that policies to reduce inequality through tax and transfer systems could not only advance social justice but also support long-term economic growth.
          
          By moderating extreme inequality, progressive taxation helps maintain consumer spending capacity across economic cycles and prevents the concentration of political power that can distort democratic processes.
        </div>
        
        <p id="targeted-incentives" className='subsection-title'>Targeted Incentives</p>
        <div>
          Tax systems can be designed not just to raise revenue but to encourage beneficial behaviors and discourage harmful ones. Governments can use tax policy to nudge the economy in positive directions by incentivizing work on promising solutions to global challenges.
          
          Green energy tax credits provide an excellent example of this approach. By offering tax advantages to companies developing renewable energy technologies, governments can accelerate the transition to sustainable energy systems while creating new economic opportunities.
          
          Other examples of effective tax incentives include:
          
          <ul>
            <li>Research and development credits to stimulate innovation</li>
            <li>Affordable housing incentives to address housing shortages</li>
            <li>Small business investment incentives to promote entrepreneurship</li>
            <li>Carbon taxes to reduce greenhouse gas emissions</li>
          </ul>
          
          These targeted approaches allow governments to influence market outcomes without heavy-handed regulation or direct control of economic activity.
        </div>

        <p id="case-studies" className='subsection-title'>Case Studies in Effective Tax Policy</p>
        <div>
          Several countries provide compelling examples of tax policy as a force for good:
          
          <ul>
            <li><strong>Norway's Sovereign Wealth Fund:</strong> Funded primarily through oil taxation, Norway has built the world's largest sovereign wealth fund (over $1.3 trillion) while maintaining one of the world's most equitable societies. The fund ensures that finite resource wealth benefits both current and future generations.</li>
            
            <li><strong>Singapore's Property Tax System:</strong> Singapore uses targeted property taxes to discourage speculation while keeping housing affordable. Foreign buyers face additional stamp duties of up to 30%, helping moderate price increases driven by external capital.</li>
            
            <li><strong>Estonia's Digital Tax Administration:</strong> Estonia has pioneered digital tax filing systems that reduce compliance costs to just 0.3% of GDP, compared to approximately 1.5% in the United States. This efficiency benefits both taxpayers and the government.</li>
          </ul>
          
          <div className="data-visualization">
            <Plot
              data={[
                {
                  x: taxStructureData.categories,
                  y: taxStructureData.highTax,
                  type: 'bar',
                  name: taxStructureData.labels[0],
                  marker: { color: '#557A95' }
                },
                {
                  x: taxStructureData.categories,
                  y: taxStructureData.lowTax,
                  type: 'bar',
                  name: taxStructureData.labels[1],
                  marker: { color: '#7395AE' }
                }
              ]}
              layout={{
                title: 'Tax Structure Comparison: High-Tax vs. Low-Tax Countries',
                xaxis: { title: 'Tax Category' },
                yaxis: {
                  title: '% of Total Tax Revenue',
                  range: [0, 50]
                },
                barmode: 'group',
                legend: { orientation: 'h', y: -0.2 },
                margin: {
                  l: 50,
                  r: 50,
                  b: 100,
                  t: 80
                },
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                font: {
                  family: 'Arial, sans-serif',
                  color: 'var(--text-color)'
                }
              }}
              style={{ width: '100%', height: 450 }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
          
          These diverse examples demonstrate that effective tax policy must be tailored to specific contexts and objectives, rather than following ideological prescriptions. Each country has developed approaches that address their unique economic and social circumstances.
        </div>
        
        <p id="moving-forward" className='section-title'>Moving Forward</p>
        <div>
          While tax policy remains a powerful tool for shaping a more just and equitable world, implementing the ideas discussed here represents a significant challenge. The difficulty lies not primarily in determining what constitutes good policy, but in overcoming political obstacles to implementation.
          
          Powerful lobbying by vested interests and negative public perceptions of government create continuous struggles for tax reform advocates. Overcoming these challenges requires:
          
          <ul>
            <li>Greater transparency in how tax money is spent</li>
            <li>Better public education about the benefits of effective taxation</li>
            <li>Stronger accountability mechanisms for government agencies</li>
            <li>International cooperation to prevent tax avoidance</li>
          </ul>
          
          As we strive to build better societies for present and future generations, we need methodologies that can motivate collective action and empower individuals. Tax policy represents one such methodology, capable of reducing illegal activities while creating pathways for socioeconomic mobility.
          
          By reframing taxation as an investment in our collective future rather than merely a cost to be minimized, we can begin to harness its full potential as a force for good.
        </div>
        
        <p id="implementation-challenges" className='subsection-title'>Implementation Challenges</p>
        <div>
          Implementing optimal tax policy faces significant political challenges. Concentrated interests that benefit from current arrangements often have disproportionate influence on policy outcomes. In the United States, for example, the financial services industry spent over $500 million on lobbying in 2020 alone, much of it directed at tax issues.
          
          These political dynamics help explain why many tax systems contain provisions that benefit narrow interests at the expense of broader social welfare. For instance, the carried interest loophole in the U.S. tax code allows investment fund managers to pay lower capital gains rates on income that is effectively compensation for services.
          
          Research by Gilens and Page (2014) found that economic elites and organized groups representing business interests have substantial independent impacts on U.S. government policy, while average citizens and mass-based interest groups have little or no independent influence. This suggests that overcoming political obstacles to tax reform requires mobilizing broad public support and implementing campaign finance reforms.
          
          Public attitudes toward taxation are heavily influenced by framing and education. Studies show that support for progressive taxation increases when citizens understand how tax revenue is used and when the connections between taxation and valued public services are made explicit.
        </div>
        
        <p id="references" className='section-title'>References</p>
        <div className="indented-block references">
          <p>[1] OECD. (2023). Revenue Statistics 2023: The Initial Impact of COVID-19 on OECD Tax Revenues. <a href="https://www.oecd.org/tax/revenue-statistics-2522770x.htm" target="_blank" rel="noopener noreferrer">OECD Publishing, Paris</a>.</p>
          
          <p>[2] Zucman, G. (2019). Global Wealth Inequality. <a href="https://www.nber.org/papers/w25462" target="_blank" rel="noopener noreferrer">National Bureau of Economic Research Working Paper 25462</a>.</p>
          
          <p>[3] Alstadsæter, A., Johannesen, N., & Zucman, G. (2019). Tax Evasion and Inequality. <a href="https://doi.org/10.1257/aer.20172043" target="_blank" rel="noopener noreferrer">American Economic Review, 109(6), 2073-2103</a>.</p>
          
          <p>[4] Piketty, T., Saez, E., & Zucman, G. (2018). Distributional National Accounts: Methods and Estimates for the United States. <a href="https://doi.org/10.1093/qje/qjx043" target="_blank" rel="noopener noreferrer">The Quarterly Journal of Economics, 133(2), 553-609</a>.</p>
          
          <p>[5] Hendren, N., & Sprung-Keyser, B. (2020). A Unified Welfare Analysis of Government Policies. <a href="https://doi.org/10.1093/qje/qjaa006" target="_blank" rel="noopener noreferrer">The Quarterly Journal of Economics, 135(3), 1209-1318</a>.</p>
          
          <p>[6] Cingano, F. (2014). Trends in Income Inequality and its Impact on Economic Growth. <a href="https://doi.org/10.1787/5jxrjncwxv6j-en" target="_blank" rel="noopener noreferrer">OECD Social, Employment and Migration Working Papers, No. 163</a>.</p>
          
          <p>[7] Johannesen, N., Langetieg, P., Reck, D., Risch, M., & Slemrod, J. (2018). Taxing Hidden Wealth: The Consequences of U.S. Enforcement Initiatives on Evasive Foreign Accounts. <a href="https://www.nber.org/papers/w24366" target="_blank" rel="noopener noreferrer">National Bureau of Economic Research Working Paper 24366</a>.</p>
          
          <p>[8] Gilens, M., & Page, B. I. (2014). Testing Theories of American Politics: Elites, Interest Groups, and Average Citizens. <a href="https://doi.org/10.1017/S1537592714001595" target="_blank" rel="noopener noreferrer">Perspectives on Politics, 12(3), 564-581</a>.</p>
          
          <p>[9] Helliwell, J. F., Layard, R., Sachs, J., & De Neve, J. E. (2023). World Happiness Report 2023. <a href="https://worldhappiness.report/ed/2023/" target="_blank" rel="noopener noreferrer">Sustainable Development Solutions Network</a>.</p>
          
          <p>[10] OECD. (2021). International community continues making progress against offshore tax evasion. <a href="https://www.oecd.org/tax/transparency/documents/international-community-continues-making-progress-against-offshore-tax-evasion.htm" target="_blank" rel="noopener noreferrer">OECD Publishing, Paris</a>.</p>
          
          <p>[11] Saez, E., & Zucman, G. (2019). The Triumph of Injustice: How the Rich Dodge Taxes and How to Make Them Pay. <a href="https://wwnorton.com/books/9781324002727" target="_blank" rel="noopener noreferrer">W.W. Norton & Company</a>.</p>
          
          <p>[12] Norges Bank Investment Management. (2023). Government Pension Fund Global Annual Report 2022. <a href="https://www.nbim.no/en/publications/" target="_blank" rel="noopener noreferrer">Government Pension Fund Global</a>.</p>
          
          <p>[13] e-Estonia. (2023). Taxation. <a href="https://e-estonia.com/solutions/business-and-finance/taxation/" target="_blank" rel="noopener noreferrer">e-Estonia Briefing Centre</a>.</p>
          
          <p>[14] IMF. (2023). Fiscal Monitor: Achieving More with Less. <a href="https://www.imf.org/en/Publications/FM" target="_blank" rel="noopener noreferrer">International Monetary Fund</a>.</p>
          
          <p>[15] World Bank. (2022). State and Trends of Carbon Pricing 2022. <a href="https://openknowledge.worldbank.org/handle/10986/37455" target="_blank" rel="noopener noreferrer">World Bank, Washington, DC</a>.</p>
        </div>
      </Col>
      <Col xs={0} sm={0} md={5} lg={5} xl={5} className="desktop-toc">
        <TableOfContents sections={sections} />
      </Col>
    </Row>
  </motion.div>
);
}