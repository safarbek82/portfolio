import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";
import profilePic from './assets/photo_2026-03-04_06-37-57.jpg'; // сенин сүрөтүң

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">

                {/* HERO */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <img src={profilePic} alt="Sapar" className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 shadow-lg" />
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Saparbek Kodirov
                    </h1>
                    <p className="text-xl text-gray-300">
                        Full Stack Developer (Junior / Middle)
                    </p>
                    <p className="text-sm text-gray-400">coderovsfr.ru</p>

                    <div className="flex justify-center gap-6 pt-6">
                        <a
                            href="mailto:coderovsfr@gmail.com"
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl transition transform hover:scale-110 shadow-lg"
                        >
                            <Mail size={18} /> Contact
                        </a>

                        <a
                            href="https://github.com/coderovsfr"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-2xl hover:bg-gray-700 transition transform hover:scale-110"
                        >
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </motion.section>

                {/* ABOUT */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center space-y-6"
                >
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I build scalable and modern web applications from idea to deployment.
                        My core stack includes PHP & Symfony for backend and Vue / React for frontend.
                        I focus on clean architecture, performance, and great user experience.
                    </p>
                </motion.section>

                {/* SKILLS */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-center">Tech Stack</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <TechCard title="Backend" skills={[
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", name: "Symfony" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
                        ]} />

                        <TechCard title="Frontend" skills={[
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", name: "Vite" },
                            { logo: "https://pinia.vuejs.org/logo.svg", name: "Pinia" },
                            { logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", name: "Tailwind CSS" },
                        ]} />

                        <TechCard title="Tools" skills={[
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", name: "GitLab" },
                            { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
                            { logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png", name: "Telegram Bot" },
                        ]} />
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-center">Projects</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <ProjectCard
                            title="Dorinzhstroydostor.ru"
                            description="Construction company website built from scratch and deployed to production."
                        />

                        <ProjectCard
                            title="Finance Up"
                            description="Modern financial web application with backend logic and responsive UI."
                        />
                    </div>
                </section>

                <footer className="text-center text-gray-500 pt-16">
                    © {new Date().getFullYear()} Sapar. Built with React & Tailwind.
                </footer>
            </div>
        </div>
    );
}

function TechCard({ title, skills }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-3xl shadow-xl space-y-5 border border-gray-700"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                    <span className="text-gray-300">{skill.name}</span>
                </div>
            ))}
        </motion.div>
    );
}

function ProjectCard({ title, description }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700 space-y-4"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition">
                View Project <ExternalLink size={16} />
            </button>
        </motion.div>
    );
}


