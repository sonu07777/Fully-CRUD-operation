import React from "react";
import HomeLayout from "../../Layout/HomeLayout.jsx";
// import imgs from "../assets/Images/apj.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"
import apj from "../assets/Images/apj.png"
import einstein from "../assets/Images/einstein.png"
import steveJobs from "../assets/Images/steveJobs.png"
import billGates from "../assets/Images/billGates.png"

const teamMembers = [
  {
    name: "APJ Abdul Kalam",
    role: "Founder & CEO",
    description:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    image: apj // Replace with actual image URL
  },
  {
    name: "Nelson Mandela",
    role: "Engineering Manager",
    description: "Education is the most powerful tool you can use to change the world.",
    image: nelsonMandela,
  },
  {
    name: "Albert Einstein",
    role: "Product Manager",
    description:
      "A person who never made a mistake never tried anything new.",
    image: einstein,
  },
  {
    name: "Steve Jobs",
    role: "Backend Developer",
    description: "We don't get a chance to do that many things, and every one should be really excellent.",
    image:steveJobs,
  },
  {
    name: "Bill Gates",
    role: "Full Stack Developer",
    description: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    image:billGates,
  }
  // Add more team members as needed
];

const TeamSection = () => {
  return (
    <HomeLayout>
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 italic">
            Meet our fully remote team
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            To be the company our customers want us to be, it takes an eclectic
            group of passionate operators from all around the world. Get to know
            the people leading the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer text-center">
              <img
                src= {member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-300"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </HomeLayout>
  );
};

export default TeamSection;
