import React from "react";

const academics = [
  // {
  //   title: "High School",
  //   period: "2019-20",
  //   grade: "10th Grade",
  //   description: "Completed secondary education with focus on science and mathematics"
  // },
  // {
  //   title: "Senior Secondary",
  //   period: "2021-22", 
  //   grade: "12th Grade",
  //   description: "Physics, Chemistry, Mathematics - Preparation for engineering entrance"
  // },
  // {
  //   title: "IIT-JEE Preparation",
  //   period: "2020-23",
  //   grade: "Competitive Exam",
  //   description: "Intensive preparation for engineering entrance examinations"
  // },
  {
    title: "Bachelor of Technology",
    period: "2023-27",
    grade: "BTech Computer Science",
    description: "Currently pursuing Computer Science Engineering"
  },
];

const Academics: React.FC = () => (
  <section id="academics" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Education
        </h2>
        <p className="text-lg text-gray-600">
          My academic journey in computer science and technology
        </p>
      </div>

      {/* Education List */}
      <div className="space-y-6">
        {academics.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {item.grade}
                </p>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
              <div className="text-right sm:text-right">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {item.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Academics;