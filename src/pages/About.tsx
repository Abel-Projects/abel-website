import Header from "@/components/Header";
import Footer from "@/components/Footer";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-6xl lg:text-8xl font-bold text-heading mb-12 tracking-tighter">
            About
          </h1>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl font-bold text-heading">
              Born in Denver, bred for hustle
            </h2>
            <div className="space-y-4 text-lg text-body-text leading-relaxed">
              <p>
                Since college, I've had the privilege of leveling up the brands of top-level companies, celebrities, and CEOs. My journey has been defined by a relentless pursuit of excellence in content creation and brand storytelling.
              </p>
              <p>I specialize in driving social media growth, producing content that resonates with audiences in an authentic way. My experience spans across writing engaging social posts, SEO ranking blogs, email campaigns and more.</p>
              <p>
                My approach combines creative vision with data-driven strategy, ensuring every piece of content serves a purpose and tells a compelling story.
              </p>
            </div>
          </div>

          <div className="blob-animate animate-fade-up relative h-[500px] overflow-hidden border border-card-border" style={{
          animationDelay: '0.2s'
        }}>
            <img src="/src/assets/abel-intro.jpg" alt="Abel Mesfin" className="absolute inset-0 w-full h-full object-cover scale-125" style={{
            objectPosition: '70% center'
          }} />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-32 animate-fade-up">
          <h2 className="text-4xl font-bold text-heading mb-12">
            Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[{
            title: "Partnership Development",
            skills: ["Brand Partnerships", "Sponsorship Management", "Partnership Outreach", "Strategic Collaborations"]
          }, {
            title: "Campaign Strategy",
            skills: ["Campaign Ideation", "Branded Activations", "Custom Curriculum", "Creative Execution"]
          }, {
            title: "Content & Marketing",
            skills: ["Social Media Content", "Digital Marketing", "Celebrity Brand Building", "Audience Engagement"]
          }, {
            title: "Operations Management",
            skills: ["Contract Negotiation", "Client Relations", "Logistics Coordination", "Event Management"]
          }, {
            title: "CRM & Sales",
            skills: ["Salesforce CRM", "Sales Process Management", "Data-Driven Decisions", "Lead Generation"]
          }, {
            title: "Brand Building",
            skills: ["Celebrity Brands", "Brand Positioning", "Media Strategy", "Reputation Management"]
          }].map((skill, index) => <div key={skill.title} className="p-6 bg-card/50 rounded-2xl border border-card-border hover:bg-card transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h3 className="text-xl font-bold text-heading mb-3">
                  {skill.title}
                </h3>
                <ul className="space-y-1">
                  {skill.skills.map((item, idx) => <li key={idx} className="text-body-text flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-up">
          <h2 className="text-4xl font-bold text-heading mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {[{
            company: "The Shark Group",
            role: "Strategic Partnership Coordinator",
            period: "January 2023 - Present",
            location: "New York, NY",
            highlights: ["Collaborate closely with Daymond John from the multi-Emmy® Award-winning Business TV Show, Shark Tank.", "Manage and assist strategic partnerships using John's NIL for brand activations, investment deals, barters and exclusive partnerships.", "Managed 10+ high-value partnership deals generating ~$2.5M in new revenue", "Curate, develop, and produce social media content for John's and the Black Entrepreneur's Day social platforms growing Instagram reach by 143.6% in less than three months.", "Effectively manage the 4th and 5th annual Black Entrepreneur's Day giving away $250,000 in grants and featuring the likes of Shaq, Kelly Rowland, Kevin Hart, Spike Lee, Venus Williams, and many more.", "Launch a new entity, CEOAccess, in elevating the brand and presence of CEOs of Billion-Dollar companies", "Fine-tune the Salesforce and sales process for partnership opportunities, web leads, and data cleanup.", "Team management of projects for partnership deliverables, CEO consulting, and social media content.", "Spearhead one-off projects ranging from web development, brand positioning, media decks, legal, contract negotiations, and more."]
          }, {
            company: "Vital Learning, LLC",
            role: "Marketing Coordinator",
            period: "June 2022 - Present",
            location: "Denver, CO",
            highlights: ["Create blog content written to drive SEO related to Leadership Development and other related topics.", "Generate reports based on blog performance and reach.", "Operated within CRM (Hubspot) for constructing email campaigns, blog subscriber content, and tidiness.", "Create mock posts for social media and track analytics."]
          }, {
            company: "Dune7",
            role: "Business & Partnership Development Intern",
            period: "June 2022 - August 2022",
            location: "New York, NY - Remote",
            highlights: ["Execute biz dev outreach strategy through new business prospecting, utilizing all available channels (LinkedIn, email, telephone, events).", "Set a framework for approaching new prospects - obtain a deep understanding of the company and key contacts.", "Maintain CRM (Hubspot) with a keen focus on data hygiene.", "Secure new prospect calls with clients in the travel space.", "Attend new business conference calls, compiling detailed notes for follow-up.", "Participate in link-building outreach for existing travel client projects."]
          }].map((job, index) => <div key={job.company} className="p-8 bg-card/30 rounded-2xl border border-card-border" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-heading">
                      {job.role}
                    </h3>
                    <div className="text-lg font-semibold text-primary mt-1">
                      {job.company}
                    </div>
                  </div>
                  <div className="text-sm text-muted-text font-semibold mt-2 md:mt-0 text-right">
                    <div>{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.highlights.map((highlight, idx) => <li key={idx} className="text-body-text flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default About;