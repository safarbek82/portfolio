import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, Download, Sun, Moon } from "lucide-react";
import profilePic from "./assets/photo_2026-03-04_06-37-57.jpg";
import project1 from "./assets/Screenshot From 2026-03-04 19-37-21.png";
import project2 from "./assets/Screenshot From 2026-03-04 19-35-04.png";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}>
            {/* Toggle button */}
            <div className="fixed top-5 right-5 z-50">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            {/* Background blur */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
                <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full bottom-[-200px] right-[-200px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">
                {/* HERO */}
                <section className="text-center space-y-6">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={profilePic}
                        alt="Sapar"
                        className="w-36 h-36 mx-auto rounded-full border-4 border-green-500 shadow-2xl"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold"
                    >
                        Saparbek Kodirov
                    </motion.h1>
                    <p className="text-xl text-gray-400">Full Stack Developer • PHP • Symfony • React • Vue</p>

                    <div className="flex justify-center gap-6 flex-wrap pt-6">
                        <a
                            href="/cv.pdf"
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl transition"
                        >
                            <Download size={18} /> Download CV
                        </a>
                        <a
                            href="mailto:coderovsfr@gmail.com"
                            className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
                        >
                            <Mail size={18} /> Contact
                        </a>
                        <a
                            href="https://github.com/safarbek82"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
                        >
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </section>

                {/* ABOUT ME */}
                <section className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="text-gray-400 leading-relaxed">
                        I build scalable and modern web applications from idea to deployment.
                        My core stack includes PHP & Symfony for backend and Vue / React for frontend.
                        I focus on clean architecture, performance, and great user experience.
                    </p>
                </section>

                {/* SKILLS */}
                <section className="space-y-14">
                    <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <TechCard
                            title="Backend"
                            skills={[
                                { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                                { name: "Symfony", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
                                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                            ]}
                        />
                        <TechCard
                            title="Frontend"
                            skills={[
                                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                                { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                                { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
                                { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                            ]}
                        />
                        <TechCard
                            title="Tools"
                            skills={[
                                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                                { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
                                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                            ]}
                        />
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="space-y-14">
                    <h2 className="text-3xl font-bold text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <ProjectCard
                            title="Dorinzhstroydostor.ru"
                            description="Production-ready construction website with full backend logic."
                            image={project1}
                            link="https://dorinzhstroydostor.ru"
                        />
                        <ProjectCard
                            title="Finance Up"
                            description="Financial web app with business logic and responsive design."
                            image={project2}
                            link="#"
                        />
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center text-gray-500 pt-10">
                    © {new Date().getFullYear()} Saparbek Kodirov
                </footer>
            </div>
        </div>
    );
}

function TechCard({ title, skills }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-gray-900 dark:bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg"
        >
            <h3 className="text-xl font-semibold mb-6">{title}</h3>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                        <span className="text-gray-400 dark:text-gray-200">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function ProjectCard({ title, description, image, link }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 dark:text-gray-200">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                >
                    View Project <ExternalLink size={16} />
                </a>
            </div>
        </motion.div>
    );
}


