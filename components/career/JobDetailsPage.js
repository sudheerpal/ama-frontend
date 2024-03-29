/* eslint-disable react/no-unescaped-entities */
import CustomContainer from "../ui/CustomContainer";
import SectionTitle from "../ui/SectionTitle";
import JobApplictionForm from "./component/JobApplictionForm";

const JobDetailsPage = () => {
  const { id, title, jobDescription, aboutCompany, vacancy } = {
    id: 2,
    title: "Software Engineer",
    vacancy: 3,
    postedAt: "2024-02-10",
    jobDescription: (
      <>
        <div>
          <p>
            We're searching for a JavaScript Developer who's not just looking
            for a job, but a journey into the heart of innovation and challenge
            at FrontM. Here, coding isn't just about lines of code; it's about
            making a meaningful impact that echoes through our projects.
          </p>

          <h3>Why Join FrontM?</h3>
          <ul>
            <li>
              Work on pioneering technology solutions in the maritime industry.
            </li>
            <li>
              Be part of a vibrant and innovative team that values creativity
              and collaboration.
            </li>
            <li>
              Competitive salary and benefits package, including remote work
              options.
            </li>
            <li>Opportunities for professional growth and development.</li>
          </ul>

          <h3>Skills and Qualifications:</h3>
          <ul>
            <li>
              <strong>Strong Technical Proficiency:</strong> Very good
              understanding of core JavaScript concepts and hands-on experience
              with the JavaScript language. Proficiency with frameworks like
              Node.js and Express.js is essential.
            </li>
            <li>
              <strong>Development Lifecycle Knowledge:</strong> Good
              understanding of the software development lifecycle, including
              planning, development, testing, deployment, and maintenance.
              Ability to adapt to agile methodologies is preferred.
            </li>
            <li>
              <strong>Cloud and Database Experience:</strong> Basic
              understanding, preferably with some working experience, of cloud
              services and solutions, especially AWS Lambda and AWS S3.
              Experience with MongoDB is highly valued, demonstrating capability
              in handling database design and management.
            </li>
            <li>
              <strong>System Design Understanding:</strong> Basic understanding
              of system design principles. Ability to contribute to discussions
              and decisions regarding overall system architecture, particularly
              in scalable, high-availability environments.
            </li>
            <li>
              <strong>Problem-Solving Skills:</strong> Strong analytical and
              problem-solving skills, with the ability to troubleshoot and
              resolve complex software issues. Experience in optimizing
              applications for maximum speed and scalability.
            </li>
            <li>
              <strong>Collaborative Spirit:</strong> Excellent communication and
              teamwork skills. Must be able to work effectively in a
              collaborative team environment, including interfacing with
              front-end developers, designers, and project managers.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Eagerness to learn and adapt
              to new technologies and frameworks that can improve the product
              and development process. Interest in staying updated with the
              latest industry trends, particularly in the maritime and IT
              sectors.
            </li>
          </ul>

          <h3>Key Responsibilities:</h3>
          <ul>
            <li>
              Develop and maintain web and mobile applications using Node.js,
              Express.js, and other relevant technologies.
            </li>
            <li>
              Collaborate with front-end developers to integrate user-facing
              elements with server-side logic.
            </li>
            <li>
              Build reusable code and libraries for future use, ensuring the
              scalability and efficiency of our applications.
            </li>
            <li>
              Implement secure applications to protect against common security
              threats.
            </li>
            <li>
              Participate in code reviews, unit testing, and integration testing
              to ensure high-quality software development.
            </li>
            <li>
              Work closely with the product team to understand requirements and
              contribute to the application design process.
            </li>
            <li>
              Stay updated with emerging technologies and apply them to
              operational and developmental processes.
            </li>
          </ul>

          <p>
            Join us at FrontM, where we’re not just shaping the future of
            maritime digitalisation; we’re creating a better quality of life for
            millions around the globe. Apply now to be at the forefront of this
            exciting journey.
          </p>
        </div>
      </>
    ),
    aboutCompany:
      "Our company is a leading provider of innovative software solutions, specializing in [specific industry or technology]. We have a dynamic and collaborative work environment, where employees are encouraged to innovate and grow.",
  };
  return (
    <div className="pb-10">
      <CustomContainer>
        <SectionTitle classNames="lg:pt-0">Job Description</SectionTitle>
        <section className="relative gap-5 space-y-3 md:flex lg:gap-8 md:space-y-0">
          <div className="lg:w-2/3">
            <div>
              <h3 className="text-lg font-bold md:text-2xl text-primary">
                {title}
              </h3>
              <div className="flex gap-5 text-sm">
                <p>
                  Vacancy: <span className="font-bold">{vacancy}</span>
                </p>
                <p>
                  Posted: <span className="font-bold">3 days ago</span>
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p>{jobDescription}</p>
            </div>
            <div className="mt-3">
              <h1 className="mb-2 text-xl font-bold">About our company</h1>
              <p>
                Consulting WP is a global consulting powerhouse. We began our
                operations a few decades ago and have grown due to excellent
                relationships with our clients. We started out small, with just
                a few people and a small office, but today we have offices in
                multiple countries with hundreds of people working inside them.{" "}
                <br />
                We achieved our success because of how successfully we integrate
                with our clients. One compl- aint many people have about
                consultants is that they can be disruptive. Employees fear
                outside consultants coming in and destroying the workflow. Our
                clients face no such issues.
              </p>
            </div>
          </div>
          <div className="sticky top-0 h-full lg:w-1/3">
            <h1 className="mb-4 text-xl font-bold">Apply for this job</h1>
            <JobApplictionForm />
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default JobDetailsPage;
