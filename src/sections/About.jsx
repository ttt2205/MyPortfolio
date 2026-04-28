import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const hightlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stand the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to deliver exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and approaches.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a software engineer who loves building the **Backend** of
                applications, but I also have a soft spot for **UI/UX design**.
                I believe a great app shouldn't just run smoothly—it should also
                be easy and beautiful to use.
              </p>
              <p>
                Instead of just writing code, I enjoy mixing logic with
                creativity. My goal is to build complete products where the
                technical parts work perfectly with a clean and friendly
                interface.
              </p>
              <p>
                I believe in learning something new every day. I’m always
                working to upgrade my skills and keep up with new technologies
                so I can take on bigger challenges and build better software in
                the future.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I'm a passionate software engineer specializing in backend
                development with a keen eye for building scalable and efficient
                systems.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {hightlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
