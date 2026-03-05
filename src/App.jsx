import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Mail,
    ExternalLink,
    Download,
    Sun,
    Moon,
} from "lucide-react";

import profilePic from "./assets/photo_2026-03-04_06-37-57.jpg";
import project1 from "./assets/Screenshot From 2026-03-04 19-37-21.png";
import project2 from "./assets/Screenshot From 2026-03-04 19-35-04.png";

export default function App() {
    const [dark, setDark] = useState(true);
    const [lang, setLang] = useState("en");
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const t = {
        en: {
            aboutTitle: "About Me",
            aboutText:
                "Full Stack Developer focused on scalable backend systems and modern frontend applications. Experienced in PHP, Symfony, React and Vue. I build production-ready systems from idea to deployment.",
            skills: "Tech Stack",
            projects: "Projects",
            contact: "Contact",
        },
        ru: {
            aboutTitle: "Обо мне",
            aboutText:
                "Full Stack разработчик, создающий масштабируемые backend-системы и современные frontend-приложения. Опыт работы с PHP, Symfony, React и Vue. Разрабатываю проекты от идеи до продакшена.",
            skills: "Технологии",
            projects: "Проекты",
            contact: "Контакт",
        },
    };

    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

                {/* Animated Cursor */}
                <motion.div
                    className="fixed w-6 h-6 bg-green-500 rounded-full pointer-events-none mix-blend-difference z-50"
                    animate={{ x: cursor.x - 12, y: cursor.y - 12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                {/* NAV */}
                <nav className="fixed top-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 z-40">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="font-bold">Sapar</div>

                        <div className="flex gap-6 items-center text-sm">
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>

                            <button onClick={() => setLang(lang === "en" ? "ru" : "en")}>
                                {lang.toUpperCase()}
                            </button>

                            <button onClick={() => setDark(!dark)}>
                                {dark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">

                    {/* HERO */}
                    <section className="text-center space-y-6">
                        <img
                            src={profilePic}
                            alt="Saparbek"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
                        />

                        <h1 className="text-5xl font-extrabold">
                            Saparbek Kodirov
                        </h1>

                        <p className="text-gray-500 dark:text-gray-400">
                            Full Stack Developer • PHP • Symfony • React • Vue
                        </p>

                        <div className="flex justify-center gap-6 pt-4 flex-wrap">
                            <a
                                href="/cv.pdf"
                                className="px-6 py-3 bg-green-500 text-white rounded-xl flex items-center gap-2"
                            >
                                <Download size={18} /> CV
                            </a>

                            <a
                                href="mailto:coderovsfr@gmail.com"
                                className="px-6 py-3 border rounded-xl flex items-center gap-2"
                            >
                                <Mail size={18} /> {t[lang].contact}
                            </a>

                            <a
                                href="https://github.com/safarbek82"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 border rounded-xl flex items-center gap-2"
                            >
                                <Github size={18} /> GitHub
                            </a>
                        </div>
                    </section>

                    {/* ABOUT */}
                    <section id="about" className="text-center max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold">{t[lang].aboutTitle}</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t[lang].aboutText}
                        </p>
                    </section>

                    {/* SKILLS */}
                    <section id="skills" className="space-y-10">
                        <h2 className="text-3xl font-bold text-center">
                            {t[lang].skills}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-10 text-center">
                            {["PHP", "Symfony", "React", "Vue", "MySQL", "Tailwind"].map(
                                (skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="p-6 border rounded-2xl"
                                    >
                                        {skill}
                                    </motion.div>
                                )
                            )}
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section id="projects" className="space-y-10">
                        <h2 className="text-3xl font-bold text-center">
                            {t[lang].projects}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-10">
                            <ProjectCard
                                title="Dorinzhstroydostor.ru"
                                image={project1}
                                link="https://dorinzhstroydostor.ru"
                            />
                            <ProjectCard
                                title="Finance Up"
                                image={project2}
                                link="#"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ title, image, link }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="border rounded-2xl overflow-hidden"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500 flex items-center gap-2"
                >
                    View <ExternalLink size={16} />
                </a>
            </div>
        </motion.div>
    );
}


