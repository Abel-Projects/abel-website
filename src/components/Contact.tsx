import { useState, type FormEvent } from "react";
import { Mail, Linkedin, ShieldCheck } from "lucide-react";
import { getEmail } from "@/lib/email";

const newChallenge = () => {
  const a = Math.floor(Math.random() * 9) + 2;
  const b = Math.floor(Math.random() * 9) + 2;
  return { a, b };
};

const Contact = () => {
  const [challenge, setChallenge] = useState(newChallenge);
  const [answer, setAnswer] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!honeypot && Number(answer) === challenge.a + challenge.b) {
      setEmail(getEmail());
      return;
    }
    setError(true);
    setAnswer("");
    setChallenge(newChallenge());
  };

  return (
    <section className="py-32 pt-64 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl lg:text-7xl font-bold text-heading mb-6 tracking-tighter">
            Let's Create Together
          </h2>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-3xl mx-auto">
            Ready to elevate your brand and discuss how we can work together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Email (revealed after a quick human check) */}
          <div
            className="p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-heading">Email</h3>
            </div>
            {email ? (
              <>
                <p className="text-body-text mb-4 text-center">
                  Thanks! Drop me a line and let's start the conversation
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-primary font-semibold hover:underline block text-center py-2 break-all"
                >
                  {email}
                </a>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
                <p className="text-body-text text-center">
                  Quick check to keep the bots out, then my email is yours
                </p>
                <label htmlFor="human-check" className="flex items-center gap-2 text-heading font-semibold">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  What is {challenge.a} + {challenge.b}?
                </label>
                {/* Honeypot: hidden from people, often filled in by bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="flex gap-2 w-full max-w-xs">
                  <input
                    id="human-check"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={answer}
                    onChange={(e) => { setAnswer(e.target.value); setError(false); }}
                    className="flex-1 min-w-0 h-12 px-4 rounded-full bg-background border border-card-border text-heading text-center focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-invalid={error}
                  />
                  <button
                    type="submit"
                    className="h-12 px-5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Show email
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    Not quite. Try this one instead.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* LinkedIn */}
          <div
            className="p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-heading">LinkedIn</h3>
            </div>
            <p className="text-body-text mb-4 text-center">
              Follow my work and connect with me
            </p>
            <a
              href="https://linkedin.com/in/abelgmesfin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline block text-center py-2"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
