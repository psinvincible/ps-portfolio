"use client";

import { User, Code, Target,} from "lucide-react";
import React from "react";

const detailedMe = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Detailed Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* left side */}
          <div className="space-y-6 ">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 ">
              <User className="mb-3 bg-indigo-400" />
              <h3 className="font-semibold text-lg mb-2">Who I Am</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hello there! I am Prince Prajapati. Originally born in Uttar
                Pradesh. Currently Living in New Delhi. I have done Graduation
                from Distance Learning (IGNOU) in Bachelor Of Computer
                Application (BCA). Also I've completed Intermediate (PCM with
                CS) and high school from CBSE.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <Code className="mb-3 text-indigo-400" />
              <h3 className="font-semibold text-lg mb-2 ">What I Do</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I am a Full-Stack WebDeveloper. I build followings:-
                  <li>Admin Dashboards</li>
                  <li>Role base authentication</li>
                  <li>Fee Management System</li>
                  <li>Payment Integration</li>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <Target className="mb-3 text-indigo-400" />
              <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Well to be honest currently I am looking for internship and job. 
                As for part time I build what makes me learn something.

              </p>
            </div>
          </div>

          {/* right side */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/20 backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-4">
              My Journey
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              {/* Write your detailed story here (long paragraph) */}
              Journey will be updated soon. Stay tuned...
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              {/* Continue your journey, projects, real-world systems */}
            </p>

            <p className="text-gray-400 leading-relaxed">
              {/* Your vision and goals */}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default detailedMe;
