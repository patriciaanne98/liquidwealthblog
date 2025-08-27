// Blog posts data
const blogPosts = {
    'compound-interest': {
        category: 'FINANCE',
        title: 'How Compound Interest Turns Pennies into Fortunes',
        author: 'Patricia Frogoso',
        date: 'August 27, 2025',
        content: `
            <p>Compound interest is often called the eighth wonder of the world, and for good reason. It's the financial principle that can transform small, consistent investments into substantial wealth over time. Understanding how compound interest works is crucial for anyone looking to build long-term financial security.</p>

            <p>Unlike simple interest, which only earns returns on your initial investment, compound interest earns returns on both your principal and the interest that accumulates over time. This creates a snowball effect that accelerates your wealth growth exponentially.</p>

            <p>Consider this example: If you invest $1,000 at a 7% annual return, after 10 years you'd have $1,967. But if you consistently add just $100 monthly to that investment, you'd have $18,294 after the same period. The magic lies not just in the compounding, but in the consistency of contributions.</p>

            <p>The key factors that maximize compound interest are time, consistency, and rate of return. Starting early gives your money more time to grow, regular contributions feed the compounding machine, and finding investments with reasonable returns amplifies the effect.</p>

            <p>Don't let the complexity of financial markets intimidate you. Start small, be consistent, and let time work in your favor. Even modest amounts invested regularly can grow into substantial sums over decades, proving that patience and persistence are often more valuable than large initial investments.</p>
        `
    },
    'retirement-27': {
        category: 'PERSONAL FINANCE',
        title: 'Retirement Planning at 27: When Your Parents Haven\'t Saved',
        author: 'Patricia Frogoso',
        date: 'August 25, 2025',
        content: `
            <p>At 27, I'm watching my parents struggle with retirement planning while trying to figure out my own financial future. It's a sobering reality that many first-generation Americans face: breaking generational cycles of financial insecurity while learning everything from scratch.</p>

            <p>The statistics are stark. According to recent surveys, nearly 40% of Americans have less than $1,000 saved for retirement. When your parents are in this category, it creates a dual pressure: you need to secure your own future while potentially supporting them in their later years.</p>

            <p>Here's what I've learned about retirement planning in your twenties when you don't have family financial wisdom to rely on. First, start with whatever you can afford, even if it's just $25 per month. The power of compound growth means that starting at 27 instead of 37 can literally double your retirement savings.</p>

            <p>Take advantage of employer matching if available - it's free money. If your employer matches up to 3% of your salary in your 401(k), contribute at least that much. It's an immediate 100% return on your investment, something you'll never find in the stock market.</p>

            <p>Consider opening a Roth IRA alongside your 401(k). Since you're likely in a lower tax bracket now than you will be in retirement, paying taxes upfront can save you thousands later. The current contribution limit is $7,000 annually, or about $583 per month.</p>

            <p>Most importantly, don't let your parents' situation discourage you. Use it as motivation. You have something they didn't: time and access to information. Every dollar you save now is working harder for your future than you might realize.</p>
        `
    },
    'ai-revolution': {
        category: 'TECHNOLOGY',
        title: 'AI Revolution: How Technology is Reshaping Finance',
        author: 'Patricia Frogoso',
        date: 'August 22, 2025',
        content: `
            <p>Artificial Intelligence isn't just changing technology—it's revolutionizing how we manage, invest, and think about money. From robo-advisors to fraud detection, AI is making financial services more accessible and efficient than ever before.</p>

            <p>Robo-advisors like Betterment and Wealthfront have democratized investment management. These platforms use algorithms to create and rebalance portfolios automatically, providing professional-level investment strategies at a fraction of traditional advisory fees. For someone like me, who didn't grow up with investment knowledge, these tools level the playing field.</p>

            <p>AI-powered budgeting apps are getting scary good at predicting spending patterns and identifying opportunities to save. Apps like Mint and YNAB use machine learning to categorize expenses, flag unusual spending, and even negotiate bills on your behalf. It's like having a financial advisor in your pocket.</p>

            <p>The lending industry has been transformed by AI credit scoring. Traditional credit scores miss a lot of nuances about financial behavior. Companies like Upstart and ZestFinance use alternative data points to assess creditworthiness, helping people with thin credit files access better rates.</p>

            <p>However, this AI revolution comes with risks. Algorithmic trading can amplify market volatility. There are concerns about bias in AI lending decisions. And the speed of AI-driven markets can create flash crashes that traditional regulations aren't equipped to handle.</p>

            <p>As consumers, we need to understand these tools without being intimidated by them. AI can help us make better financial decisions, but it's not a replacement for financial literacy. The key is learning to work with AI, not depend on it blindly.</p>
        `
    },
    'global-economics': {
        category: 'ECONOMICS',
        title: 'Understanding Global Economics in Simple Terms',
        author: 'Patricia Frogoso',
        date: 'August 20, 2025',
        content: `
            <p>Global economics can feel overwhelming, but understanding the basics helps you make better personal financial decisions. From inflation to trade wars, global economic trends affect everything from your grocery bill to your investment returns.</p>

            <p>Let's start with inflation. When the Federal Reserve prints money or keeps interest rates low, it can lead to inflation—meaning your dollar buys less over time. This is why keeping all your money in a savings account earning 0.5% interest is actually losing money when inflation runs at 3%.</p>

            <p>Supply chain disruptions, like we saw during the pandemic, show how interconnected the global economy is. When factories shut down in Asia, it affected car prices in America. Understanding these connections helps you anticipate market movements and adjust your spending and investing accordingly.</p>

            <p>Currency exchange rates might seem abstract, but they affect you more than you think. When the dollar is strong, foreign goods are cheaper, making it a good time to travel or buy imported products. When it's weak, domestic companies become more competitive, potentially boosting your U.S. stock investments.</p>

            <p>Trade policies and tariffs directly impact consumer prices. The trade tensions with China led to higher prices on everything from electronics to appliances. Following trade news helps you time major purchases and understand why certain sectors perform better or worse.</p>

            <p>The key is not to predict global economics perfectly—even experts get it wrong. Instead, understand the basic forces so you can adapt your financial strategy as conditions change. Diversification across asset classes and geographic regions becomes your best protection against global economic uncertainty.</p>
        `
    },
    'health-wealth': {
        category: 'GLOBAL HEALTH',
        title: 'Global Health and Economic Impact',
        author: 'Patricia Frogoso',
        date: 'August 18, 2025',
        content: `
            <p>The COVID-19 pandemic showed us how deeply connected global health and economics really are. Health crises don't just affect healthcare systems—they reshape entire economies and personal financial planning strategies.</p>

            <p>Healthcare costs are one of the biggest financial risks facing individuals and families. In the U.S., medical bankruptcy affects hundreds of thousands of people annually. This makes health insurance and emergency funds more critical than ever. I aim to keep at least six months of expenses saved, with extra cushion for potential medical costs.</p>

            <p>Global health trends create investment opportunities and risks. The aging population in developed countries drives growth in healthcare technology and pharmaceuticals. Climate change is creating new health challenges, spurring innovation in clean technology and sustainable healthcare solutions.</p>

            <p>Mental health is becoming recognized as equally important as physical health, with significant economic implications. Companies are investing more in employee mental health benefits, creating opportunities in mental health technology and services. The stigma reduction around mental health care is also opening up new markets.</p>

            <p>Preventive health measures have huge economic impacts. Countries with better preventive care systems have lower long-term healthcare costs and more productive economies. On a personal level, investing in your health through good nutrition, exercise, and preventive care is one of the best financial decisions you can make.</p>

            <p>The pandemic also accelerated telemedicine adoption, creating new efficiencies in healthcare delivery. This technological shift is reducing costs while improving access, particularly benefiting rural and underserved communities. Understanding these trends helps inform both personal health decisions and investment strategies.</p>
        `
    }
};

// Load a specific blog post
function loadPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;
    
    // Update category tag
    const categoryTag = document.querySelector('.category-tag');
    categoryTag.textContent = post.category;
    
    // Update title
    const title = document.querySelector('.article-title');
    title.textContent = post.title;
    
    // Update meta information
    const meta = document.querySelector('.article-meta');
    meta.textContent = `Published by ${post.author} on ${post.date}`;
    
    // Update content
    const content = document.querySelector('.article-content');
    content.innerHTML = post.content;
    
    // Update active state in sidebar
    document.querySelectorAll('.recent-posts a').forEach(link => {
        link.style.fontWeight = '500';
        link.style.color = '#2c3e50';
    });
    
    const activeLink = document.querySelector(`[onclick="loadPost('${postId}')"]`);
    if (activeLink) {
        activeLink.style.fontWeight = 'bold';
        activeLink.style.color = '#9b59b6';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box').value.toLowerCase();
    if (searchTerm.trim()) {
        searchPosts(searchTerm);
    }
});

// Search on Enter key
document.querySelector('.search-box').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.toLowerCase();
        if (searchTerm.trim()) {
            searchPosts(searchTerm);
        }
    }
});

// Search through blog posts
function searchPosts(searchTerm) {
    const results = [];
    
    Object.keys(blogPosts).forEach(postId => {
        const post = blogPosts[postId];
        const searchContent = `${post.title} ${post.category} ${post.content}`.toLowerCase();
        
        if (searchContent.includes(searchTerm)) {
            results.push({
                id: postId,
                title: post.title,
                category: post.category,
                date: post.date
            });
        }
    });
    
    if (results.length > 0) {
        let resultText = `Found ${results.length} result(s) for "${searchTerm}":\n\n`;
        results.forEach(result => {
            resultText += `• ${result.title} (${result.category})\n`;
        });
        alert(resultText);
        
        // Load the first result
        if (results.length > 0) {
            loadPost(results[0].id);
        }
    } else {
        alert(`No results found for "${searchTerm}"`);
    }
}

// Navigation active state management
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Handle MISSION section
        if (this.textContent === 'MISSION') {
            document.querySelector('.article-section').innerHTML = `
                <div class="category-tag">ABOUT</div>
                <h1 class="article-title">My Mission: Making Finance Flow Like Water</h1>
                <div class="article-meta">Why I started Liquid Wealth Blog</div>
                
                <div class="article-content">
                    <p>Hi, I'm Patricia, and Liquid Wealth began from a place of frustration and determination. As a first-generation Filipino American, I didn't grow up with financial literacy passed down through generations. There were no dinner table conversations about investing, no family wealth to inherit, and definitely no roadmap for navigating the complex world of finance and technology.</p>
                    
                    <p>Instead, I grew up watching my parents work incredibly hard while struggling with financial decisions that seemed mysterious and intimidating. Credit scores, retirement planning, investment portfolios—these weren't part of our family vocabulary. And now, at 27, I'm not just figuring out my own financial future, but also helping my parents catch up on retirement planning they should have started decades ago.</p>
                    
                    <h3>Why "Liquid Wealth"?</h3>
                    <p>I chose the name "Liquid Wealth" because I believe financial knowledge should flow freely, like water. It shouldn't be trapped behind paywalls, complicated jargon, or exclusive networks. When knowledge flows, it reaches everyone who needs it—from the first-generation college student trying to understand student loans, to the parent juggling bills while dreaming of homeownership.</p>
                    
                    <p>Liquid also represents adaptability. In a world where technology is reshaping everything from how we bank to how we invest, our financial strategies need to be flexible. What worked for our parents' generation might not work for ours, and what works today might need adjustment tomorrow.</p>
                    
                    <h3>What You'll Find Here</h3>
                    <p>This isn't just another finance blog with generic advice. Every post comes from real experience—my struggles, my victories, my questions, and what I've learned along the way. I write about:</p>
                    
                    <ul>
                        <li><strong>Personal Finance Reality:</strong> Real talk about managing money when you're starting from zero, dealing with family financial stress, and building wealth without a trust fund</li>
                        <li><strong>Technology & Money:</strong> How AI, apps, and digital tools are changing finance, and which ones actually help (versus which are just hype)</li>
                        <li><strong>Global Perspective:</strong> Understanding how world events, economics, and even health crises affect your personal finances</li>
                        <li><strong>Accessible Education:</strong> Breaking down complex concepts into practical, actionable advice that doesn't require a finance degree</li>
                    </ul>
                    
                    <h3>My Promise to You</h3>
                    <p>I promise to keep learning alongside you. I don't have all the answers—I'm still figuring out many things myself. But I'll share what I discover, admit when I'm uncertain, and always prioritize practical advice over theoretical perfection.</p>
                    
                    <p>I'll never talk down to you or assume you should already know something. We're all at different points in our financial journey, and that's completely okay. Whether you're just starting to budget or you're ready to dive into investment strategies, there's something here for you.</p>
                    
                    <h3>Let's Build Wealth Together</h3>
                    <p>Financial literacy shouldn't be a privilege—it should be accessible to everyone. By sharing knowledge, asking questions, and supporting each other, we can break generational cycles of financial stress and build the secure futures we deserve.</p>
                    
                    <p>Thank you for being here. Thank you for reading. And thank you for being part of a community that believes financial knowledge should flow freely to everyone who needs it.</p>
                    
                    <p style="font-style: italic; color: #666; margin-top: 30px;">— Patricia Frogoso<br>Founder, Liquid Wealth Blog</p>
                </div>
            `;
        }
        
        // Handle NEWS LINKS section
        else if (this.textContent === 'NEWS LINKS') {
            document.querySelector('.article-section').innerHTML = `
                <div class="category-tag">RECOMMENDED READING</div>
                <h1 class="article-title">Top Financial News & Resources</h1>
                <div class="article-meta">Updated regularly with the best financial content from around the web</div>
                
                <div class="article-content">
                    <h3>Daily Financial News</h3>
                    <ul style="margin-bottom: 30px;">
                        <li><a href="https://www.bloomberg.com" target="_blank">Bloomberg</a> - Comprehensive financial news and analysis</li>
                        <li><a href="https://www.wsj.com" target="_blank">Wall Street Journal</a> - Business and financial journalism</li>
                        <li><a href="https://www.ft.com" target="_blank">Financial Times</a> - Global economic news</li>
                        <li><a href="https://www.reuters.com/business/finance" target="_blank">Reuters Finance</a> - Breaking financial news</li>
                    </ul>
                    
                    <h3>Investment Research & Education</h3>
                    <ul style="margin-bottom: 30px;">
                        <li><a href="https://www.morningstar.com" target="_blank">Morningstar</a> - Investment research and analysis</li>
                        <li><a href="https://www.investopedia.com" target="_blank">Investopedia</a> - Financial education and definitions</li>
                        <li><a href="https://www.sec.gov/investor" target="_blank">SEC Investor.gov</a> - Official investment guidance</li>
                        <li><a href="https://www.bogleheads.org" target="_blank">Bogleheads</a> - Long-term investing community</li>
                    </ul>
                    
                    <h3>Economic Data & Analysis</h3>
                    <ul style="margin-bottom: 30px;">
                        <li><a href="https://fred.stlouisfed.org" target="_blank">FRED Economic Data</a> - Federal Reserve economic data</li>
                        <li><a href="https://ourworldindata.org" target="_blank">Our World in Data</a> - Global development data</li>
                        <li><a href="https://www.economist.com" target="_blank">The Economist</a> - Global economic perspective</li>
                    </ul>
                    
                    <h3>Personal Finance Tools</h3>
                    <ul>
                        <li><a href="https://www.mint.com" target="_blank">Mint</a> - Budget tracking and financial management</li>
                        <li><a href="https://www.personalcapital.com" target="_blank">Personal Capital</a> - Wealth management and tracking</li>
                        <li><a href="https://www.creditkarma.com" target="_blank">Credit Karma</a> - Free credit monitoring</li>
                    </ul>
                    
                    <p style="margin-top: 30px; font-style: italic; color: #666;">These resources have been invaluable in my own financial education journey. I check these sites regularly to stay informed about market trends, learn new concepts, and make better financial decisions.</p>
                </div>
            `;
        }
    });
});

// Load posts for Money page
function loadMoneyPost(postId) {
    window.location.href = `index.html?post=${postId}`;
}

// Load posts for Tech page
function loadTechPost(postId) {
    window.location.href = `index.html?post=${postId}`;
}

// Enhanced search functionality that works across all pages
function searchPosts(searchTerm) {
    const results = [];
    
    Object.keys(blogPosts).forEach(postId => {
        const post = blogPosts[postId];
        const searchContent = `${post.title} ${post.category} ${post.content}`.toLowerCase();
        
        if (searchContent.includes(searchTerm)) {
            results.push({
                id: postId,
                title: post.title,
                category: post.category,
                date: post.date
            });
        }
    });
    
    if (results.length > 0) {
        // Redirect to homepage with search results
        const params = new URLSearchParams();
        params.set('search', searchTerm);
        params.set('post', results[0].id);
        window.location.href = `index.html?${params.toString()}`;
    } else {
        alert(`No results found for "${searchTerm}"`);
    }
}

// Check URL parameters on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');
    const searchTerm = urlParams.get('search');
    
    // If we're on the homepage and have a post parameter, load that post
    if (postId && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        if (blogPosts[postId]) {
            loadPost(postId);
            
            // Show search message if this came from a search
            if (searchTerm) {
                setTimeout(() => {
                    alert(`Search results for "${searchTerm}"`);
                }, 500);
            }
        }
    }
    
    // Set active state for compound interest post by default on homepage
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const activeLink = document.querySelector(`[onclick="loadPost('compound-interest')"]`);
        if (activeLink && !postId) {
            activeLink.style.fontWeight = 'bold';
            activeLink.style.color = '#9b59b6';
        }
    }
});