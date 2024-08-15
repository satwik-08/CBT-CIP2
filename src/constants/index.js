import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import certification1 from "../assets/certifications/certification-1.png";
import certification2 from "../assets/certifications/certification-2.png";
import certification3 from "../assets/certifications/certification-3.png";
import certification4 from "../assets/certifications/certification-4.png";



export const HOME_CONTENT = `A driven student with strong academic credentials and a keen enthusiasm for continuous learning. Actively engaged as a student peer mentor, I am eager to leverage theoretical knowledge into practical experience and make meaningful contributions to the IT industry. Passionate about tackling complex problems and exploring new technologies, I am committed to applying my skills in real-world settings and driving innovation.`;
export const ABOUT_TEXT = `I am a enthusiastic and ambitious full stack developer currently in my final year at KL University. With a strong foundation in React, Node.js, MongoDB, and MySQL, I am passionate about creating efficient and user-friendly web applications. My academic journey has been driven by a deep curiosity for technology and a desire to solve complex problems. I thrive in collaborative environments and am eager to apply my skills in real-world projects. Outside of my studies, I enjoy exploring new technologies and working on full stack projects to further develop my expertise and stay engaged with the latest advancements in the field.`;

export const CERTIFICATIONS = [
    {
      title: "Amazon Cloud Practitioner",
      link:"https://www.credly.com/badges/06c0a010-49f5-4a81-9860-a8f3ac5a0a5b/public_url",
      image: certification1,
      description:"The Amazon Cloud Practitioner certification validates foundational knowledge of AWS cloud services, including core AWS services, security, and compliance. It is designed for individuals who are new to the cloud and want to build a strong foundation for further AWS certifications.",
      technologies: ["AWS Core Services","Cloud Security","Billing and Pricing Models","AWS Global Infrastructure"],
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      link:"https://www.credly.com/badges/a57c4faf-7ad4-4aeb-9efd-16ecf6b77662/public_url",
      image: certification2,
      description:"The Red Hat Certified Enterprise Application Developer (RHCED) certification demonstrates proficiency in designing, developing, and deploying enterprise-ready applications using Red Hat technologies. It covers topics such as API management, persistence with JPA, CDI, and REST services.",
        technologies: ["Red Hat Enterprise Linux", "Java EE", "Hibernate/JPA", "RESTful Services"],
      },
    {
      title: "Oracle Certified Associate",
      link:"https://drive.google.com/file/d/1lqkXqn1icW_Ukxlhl__teXOfiQaBXYq_/view",
      image: certification3,
      description:"The Oracle Certified Associate (OCA) certification provides foundational knowledge of Oracle database management. It covers SQL fundamentals, data modeling, and essential database administration tasks. This certification is a stepping stone for more advanced Oracle certifications.",
            technologies: ["Oracle Database", "SQL", "Data Modeling"],
    },
  
    {
      title: "Google Cloud Skills",
      link:"https://www.cloudskillsboost.google/public_profiles/62952348-083f-4107-b659-72ada842b220",
      image: certification4,
      description:"The Google Cloud Skills certification showcases your ability to work with Google Cloud Platform (GCP) services. It covers cloud infrastructure, security, data management, and machine learning models on GCP. This certification is designed for those seeking to enhance their cloud expertise with Google’s cloud services.",
            technologies: ["Google Cloud Platform (GCP)", "Compute Engine", "Cloud Storage","Google Kubernetes Engine"],
    },
  ];
  
  

export const PROJECTS = [
  {
    title: "Food Delivery App",
    link:"https://quickeats-food-delivery-app.onrender.com/",
    image: project1,
    description:
      "Developed a full-stack food delivery website using the MERN stack, featuring user and admin modules. Users can browse, sort, and purchase food items with real-time order status updates, while admins manage products and order status. Showcases expertise in React and Node.js integration.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "College ERP",
    link:"https://github.com/satwik-08/College-ERP",
    image: project2,
    description:
      "Proficient in developing an Attendance System with MongoDB for streamlined data management. Skilled in creating user-friendly interfaces using React.js and Node.js for seamless faculty attendance tracking. Experienced in integrating feedback features to facilitate student insights and enhance course effectiveness",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
  {
    title: "Astrological Prediction System",
    link:"https://github.com/satwik-08/Astrology-Prediction-System",
    image: project3,
    description:
      " Developed robust signup and login pages with comprehensive user data display using the Django framework in Python for full-stack web development. Implemented external page functionality for accessing astrology predictions, ensuring seamless interaction with external websites",
    technologies: ["HTML", "CSS", "Django", "MYSQL"],
  },

  {
    title: "Portfolio",
    link:"/",
    image: project4,
    description:"Designed and developed a personal portfolio to showcase my skills, projects, and certifications. This portfolio serves as a comprehensive introduction to my professional background and abilities as a full stack developer. The site features a clean, modern design with sections for my resume, contact information, and detailed descriptions of my key projects. The portfolio leverages advanced web technologies and frameworks to provide a seamless user experience and demonstrate my proficiency in both front-end and back-end development.",
        technologies: ["HTML", "CSS", "TailWind","Framer Motion"],
  },
];


  export const CONTACT = {
    phoneNo: "+91 8008297122",
    email: "satu.mandalemula@gmail.com",
  };



