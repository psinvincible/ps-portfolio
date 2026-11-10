import { motion } from "motion/react";

const experienceData = [
  {
    id: 1,
    role: "Content Moderator",
    company: "Concentrix",
    employmentType: "Full-Time",
    startDate: "June 2026",
    endDate: "October 2026",
    location: "Gurugram, India",
    processName: "Twitter(X) - Buzz Process",
    responsibilities: [
      "Reviewed online content and evaluated it against company guidelines.",
      "Took appropriate action on content/profile according to company policies.",
      "Applied content standards consistently while reviewing reported materials.",
    ],
    technologies: [],
    toolsUsed: [],
  },
];

const Experience = ({ isDarkMode }) => {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] opacity-60">
          Career Journey
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Experience</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 opacity-70 sm:text-base">
          My professional journey, responsibilities, and the experience I bring
          to work.
        </p>
      </motion.div>

      <div className="relative mx-auto mx-w-3xl ">
        <div
          aria-hidden="ture"
          className="absolute bottom-5 left-[9px] top-2 w-px bg-current opacity-20 sm:left-[11px]"
        />

        <div className="space-y-8 ">
          {experienceData.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
        
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 h-5 w-5 rounded-full border-[5px] border-current bg-theme sm:h-[23px] sm:w-[23px]"
              />

              <div className="experience-card rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-base font-medium opacity-80">
                      {job.company}
                    </p>

                    <p className="mt-2 text-sm opacity-60">
                      {job.location} · {job.employmentType}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium opacity-80">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold">
                    Responsibilities
                  </h4>

                  <ul className="space-y-3">
                    {job.responsibilities.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-sm leading-6 opacity-75 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
