import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
              <p>
                From multi-channel content strategies to authentic brand narratives, I've worked with industry leaders to create content that doesn't just look good—it converts, engages, and drives real business results.
              </p>
              <p>
                My approach combines creative vision with data-driven strategy, ensuring every piece of content serves a purpose and tells a compelling story.
              </p>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl h-[500px] border border-card-border" />
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-32 animate-fade-up">
          <h2 className="text-4xl font-bold text-heading mb-12">
            Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Content Strategy",
                description: "Multi-channel content frameworks that drive engagement and conversions"
              },
              {
                title: "Brand Storytelling",
                description: "Authentic narratives that resonate with target audiences"
              },
              {
                title: "Video Production",
                description: "High-quality video content from concept to final delivery"
              },
              {
                title: "Digital Marketing",
                description: "Data-driven campaigns that deliver measurable results"
              },
              {
                title: "Social Media",
                description: "Platform-specific strategies that build communities"
              },
              {
                title: "Creative Direction",
                description: "Leading creative teams to execute bold, innovative ideas"
              }
            ].map((skill, index) => (
              <div 
                key={skill.title}
                className="p-8 bg-card/50 rounded-2xl border border-card-border hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-heading mb-3">
                  {skill.title}
                </h3>
                <p className="text-body-text">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-up">
          <h2 className="text-4xl font-bold text-heading mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                company: "Top Brands",
                role: "Content Creator & Strategist",
                period: "2020 - Present",
                description: "Leading content strategy and production for Fortune 500 companies and high-profile clients"
              },
              {
                company: "Digital Agency",
                role: "Creative Director",
                period: "2018 - 2020",
                description: "Directed creative campaigns for diverse clients across multiple industries"
              },
              {
                company: "Media Company",
                role: "Video Producer",
                period: "2016 - 2018",
                description: "Produced engaging video content for brands and digital platforms"
              }
            ].map((job, index) => (
              <div 
                key={job.company}
                className="p-8 bg-card/30 rounded-2xl border border-card-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-heading">
                    {job.company}
                  </h3>
                  <span className="text-sm text-muted-text font-semibold">
                    {job.period}
                  </span>
                </div>
                <div className="text-lg font-semibold text-primary mb-2">
                  {job.role}
                </div>
                <p className="text-body-text">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
