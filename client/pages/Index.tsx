import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ParticleBackground } from "@/components/ui/particle-background";
import { MobileNav } from "@/components/ui/mobile-nav";
import { SimplifiedHero } from "@/components/ui/simplified-hero";
import { CustomCursor, useSupportsCursor } from "@/components/ui/custom-cursor";
import { SimpleNavbar } from "@/components/ui/simple-navbar";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Download,
  Code2,
  Rocket,
  Sparkles,
  ArrowDown,
  Send,
  Copy,
  CheckCircle,
  Brain,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Bot,
} from "lucide-react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const supportsCursor = useSupportsCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "React",
      level: 95,
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node.js",
      level: 90,
      icon: Database,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TypeScript",
      level: 88,
      icon: Code2,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Python",
      level: 85,
      icon: Brain,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Blockchain",
      level: 80,
      icon: Globe,
      color: "from-purple-500 to-violet-500",
    },
    { name: "AI/ML", level: 85, icon: Bot, color: "from-pink-500 to-rose-500" },
    {
      name: "MongoDB",
      level: 82,
      icon: Database,
      color: "from-green-600 to-green-800",
    },
    {
      name: "AWS",
      level: 78,
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
  ];

  const projects = [
    {
      title: "AI-Powered Portfolio",
      description:
        "Modern portfolio website with AI integration, real-time animations, and responsive design built with React and TailwindCSS.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-600 via-purple-600 to-blue-800",
    },
    {
      title: "DeFi Trading Platform",
      description:
        "Decentralized finance platform for cryptocurrency trading with real-time market data and advanced analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Solidity", "Web3", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-600 via-teal-600 to-green-800",
    },
    {
      title: "Smart Contract Auditor",
      description:
        "AI-powered smart contract analysis tool that identifies vulnerabilities and suggests optimizations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "Solidity", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-600 via-pink-600 to-purple-800",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "4+", icon: Rocket },
    { label: "Projects Completed", value: "50+", icon: Code2 },
    { label: "Happy Clients", value: "25+", icon: Sparkles },
    { label: "Technologies", value: "20+", icon: Globe },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Create mailto link
    const subject = `Project Inquiry from ${name}`;
    const body = `Hi Shubham,\n\nI'm interested in discussing a project with you.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;
    const mailtoLink = `mailto:shubhamdev9128@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Simple Navigation */}
      <SimpleNavbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        scrollYProgress={scrollYProgress}
      />

      {/* Simplified Hero Section */}
      <SimplifiedHero scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Code2 className="h-24 w-24 text-cyan-400" />
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I'm <span className="text-cyan-400">Shubham</span> 👋
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with a deep interest in{" "}
                <span className="text-purple-400 font-semibold">
                  Blockchain
                </span>
                , <span className="text-cyan-400 font-semibold">AI</span>, and
                immersive{" "}
                <span className="text-pink-400 font-semibold">
                  3D web experiences
                </span>
                . I build clean, scalable applications and love exploring how
                technology can solve real-world problems.
              </p>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-6 w-6 text-cyan-400" />
                  <p className="text-lg font-semibold text-white">Philosophy</p>
                </div>
                <p className="text-gray-300 italic">
                  "I combine{" "}
                  <span className="text-cyan-400 font-semibold">Web3</span>,{" "}
                  <span className="text-purple-400 font-semibold">AI</span>, and{" "}
                  <span className="text-pink-400 font-semibold">UI/UX</span> to
                  build smart and beautiful solutions."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    India
                  </div>
                  <div className="text-sm text-gray-400">Based in</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    Remote
                  </div>
                  <div className="text-sm text-gray-400">Work Style</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Proficiency
                        </span>
                        <motion.span
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Progress
                          value={skill.level}
                          className="h-2 group-hover:h-3 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and passion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced Responsive */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Email Card */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 break-all">
                      shubhamdev9128@gmail.com
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="self-start sm:self-auto border-white/20 text-white hover:bg-white/10 shrink-0"
                    onClick={() => copyToClipboard("shubhamdev9128@gmail.com")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {/* Phone Card */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Phone
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      +91 9128364783
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="self-start sm:self-auto border-white/20 text-white hover:bg-white/10 shrink-0"
                    onClick={() => copyToClipboard("+91 9128364783")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {/* Location Card */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Location
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      India • Remote Worldwide
                    </p>
                  </div>
                </div>

                {/* Status Card */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Status
                    </h3>
                    <p className="text-sm sm:text-base text-green-400">
                      Available for new projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 flex-1">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="text-sm sm:text-base">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 flex-1"
                >
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0"
            >
              <Card className="bg-white/5 border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                    Send me a message
                  </h3>
                  <form
                    className="space-y-4 sm:space-y-6"
                    onSubmit={handleContactSubmit}
                  >
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Project discussion"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all duration-300 text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 py-2 sm:py-3"
                    >
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Shubham. Built with ❤️ using React, TypeScript & TailwindCSS
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Custom Cursor */}
      {supportsCursor && <CustomCursor />}
    </div>
  );
}
