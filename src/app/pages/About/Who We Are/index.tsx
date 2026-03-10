import React from "react";
import Image from "next/image";
import HistoryTimeline from "../History Timeline";
import StaffProfile from "./StaffProfile";

const OUR_TEAM = [
  {
    name: "Iwalola Akin-Jimoh",
    role: "Executive Secretary",
    imageSrc: "/assets/images/staff/iwalola.png",
    profile: "",
  },
  {
    name: "Bukola Favour Akingbohungbe",
    role: "Senior Program Officer",
    imageSrc: "/assets/images/staff/bukola.png",
    profile: (
      <div>
        <p>
          Bukola Favour Akingbohungbe earned her first degree in English
          Education from Adeyemi College of Education and further advanced her
          academic pursuits at the University of Ibadan, where she undertook
          postgraduate studies in Educational Psychology and School Counselling
          in the Department of Counselling and Human Development Studies. She
          earned her doctorate degree in Educational Psychology.
        </p>
        <p>
          With a strong passion for youth development and personal
          transformation, Bukola specializes in adolescent development, school
          safety, and mentoring. She has published articles in international
          counselling journals, reflecting her dedication to research-driven
          practice and sustainable impact.
        </p>
        <p>
          As a Senior Programme Officer of Youth Empowerment Foundation (YEF)
          and head of Ibadan office, she provides strategic and operational
          leadership, overseeing programme implementation and ensuring the
          effective coordination of organisational activities. Her role involves
          managing initiatives, strengthening partnerships, and reporting to the
          various stakeholders to ensure accountability and excellence.
        </p>
        <p>
          Bukola’s work is centered on creating safe learning environments,
          equipping young people with life skills, and fostering mentoring
          structures that promote resilience and responsible decision-making.
          Through her leadership, YEF continues to impact lives and empower
          adolescents to reach their full potential.
        </p>
        <p>
          Her vision is to contribute meaningfully to the counselling profession
          while supporting the growth of YEF as a globally recognized
          organization committed to saving lives and transforming communities.
        </p>
      </div>
    ),
  },
  {
    name: "Olufunmilayo Alabi",
    role: "Finance and Admin Manager",
    imageSrc: "/assets/images/staff/funmi.png",
    profile: (
      <div>
        <p>
          Olufunmilayo Longe is the Finance and Administration Manager at the
          Youth Empowerment Foundation (YEF) with over 20 years of experience in
          Finance and Administration. She holds a Higher National Diploma in
          Business Administration and Certificate in Medical and Psychiatry
          Social work from Lagos University Teaching Hospital (LUTH). She is
          currently pursuing a Post Graduate Diploma in Business Administration
          from National Open University Nigeria (NOUN).
        </p>
        <p>
          Her role encompasses recruitment, administrative coordination and
          operations. ensuring smooth operations among YEF’s staff and programs.
          Professionalism, Accountability, Planning and Organizational skills
          are some of the strengths that Funmi brings to the YEF team,
          particularly in the context of NGO’s operations. She consistently
          drives efficiency and productivity.
        </p>
        <p>
          Olufunmilayo has a Certificate in Management from the Management
          Development Institute of GIMPA, Accra, Ghana and Johnson &amp;
          Johnson. Beyond her professional life, she enjoys adventures
          reflecting her curiosity and openness to new experiences.
        </p>
      </div>
    ),
  },
  {
    name: "Osita Oliver Ugwuoke ",
    role: "Monitoring and Evaluation Officer",
    imageSrc: "/assets/images/staff/osita.png",
    profile: (
      <div>
        <p>
          Osita Oliver Ugwuoke is an experienced Monitoring and Evaluation
          (M&amp;E) professional at YEF with over 13 years of distinguished
          service in program coordination, implementation, and performance
          tracking across communities and schools in Nigeria. He is a graduate
          of the Enugu State University of Science and Technology, where he
          earned a degree in Political Science with a specialization in Policy
          Development and International Relations.
        </p>
        <p>
          Throughout his career, Osita has demonstrated exceptional commitment
          to youth development, mentoring young people and supporting
          initiatives that equip unemployed youths with sustainable livelihood
          skills. His work has significantly contributed to improving the
          socio-economic outcomes of beneficiaries and strengthening community-
          based interventions.
        </p>
        <p>
          In his role as M&amp;E Officer, Osita leads indicator tracking,
          coordinates field-level data collection and supports data analysis to
          ensure programs are delivered efficiently, on schedule, and in
          alignment with stated objectives. His meticulous attention to detail
          and results-driven approach ensures accountability, learning, and
          continuous improvement across projects.
        </p>
        <p>
          Osita is a dependable team player, he consistently delivers quality
          results while maintaining positive working relationships with
          colleagues and stakeholders. Beyond his professional commitments, he
          enjoys watching sports, reading, and engaging others with a vibrant
          sense of humor.
        </p>
      </div>
    ),
  },
  {
    name: "Tony Eleme",
    role: "Senior Program Officer",
    imageSrc: "/assets/images/staff/tony.png",
    profile: (
      <div>
        <p>
          Tony Eleme is a seasoned social development professional with over 10
          years of experience designing and implementing high-impact programmes
          in health, education, Gender Based Violence (GBV), SRHR, WASH, and
          gender equality across Africa, with a strong focus on Nigeria. He
          holds a master’s degree in Sociology from the University of Lagos. He
          has led and managed initiatives funded by leading global partners,
          including USAID, World Bank, UNICEF, International Organization for
          Migration, Women Win, Norwegian Refugee Council, Danish Refugee
          Council, and Essilor Optical Ltd. He previously served as Program
          Manager at Nikki Udeze Foundation (NUF ) and Nigeria Country Lead with
          Centum Learning Ltd.
        </p>
        <p>
          Tony has worked extensively with civil society organizations,
          government ministries, and community stakeholders across Nigeria,
          Kenya, Rwanda, and Uganda, delivering strong programme implementation,
          strategic partnerships, and robust monitoring systems that generate
          measurable results. Most recently, he coordinated menstrual health and
          GBV- focused interventions in Lagos secondary schools and communities,
          reaching over 2,500 adolescents (including boys) and young women with
          practical skills in menstrual hygiene management, reusable pad
          production, and prevention of GBV linked to menstrual stigma.
        </p>
        <p>
          A certified project specialist, Tony represents YEF on the Lagos State
          Adolescents and Young Persons Technical Working Group. He was
          nominated by the Federal Government, alongside nine partners, to
          review Nigeria’s first Menstrual Health Policy. He was also part of
          the team that designed the Lagos State SBCC materials on menstrual
          health and contributed to the review of the Lagos State School-Based
          Health Law. Tony remains deeply committed to advancing gender equity,
          adolescent health, and sustainable community development across
          Africa.
        </p>
      </div>
    ),
  },
  {
    name: "Tolulope Osoba",
    role: "Senior Program Manager",
    imageSrc: "/assets/images/staff/tolulope.png",
    profile: (
      <div>
        <p>
          Tolulope Osoba is an experienced Social Worker with more than 25 years
          of development and social impact experience. She is the Senior Program
          Manager for Youth Empowerment Foundation. Her first degree is in
          Psychology, and she has a master’s in social work. Tolulope has a
          postgraduate certification in Medical &amp; Psychiatric Social Work
          from the Lagos University Teaching Hospital (LUTH). Her career is
          evidence of a longstanding dedication to bringing positive change in
          various communities through evidence-based, and people centred
          programs. Currently, Tolulope works with the Youth Empowerment
          Foundation (YEF), where she manages project implementation with
          hands-on interdisciplinary teams to empower young people with life
          skills, entrepreneurial competencies and sports for development
          opportunities. Her role at YEF ensures safeguarding standards,
          confidentiality, and ethics are maintained in service delivery.
        </p>
        <p>
          She loves mentoring, building people&#39;s skills, and community
          service- volunteering. Thus, she volunteers at several organizations
          and shelters that help both young people and the elderly. She is a
          Master Trainer of Counsellors, a Fellow of the Women in Sports
          Leadership Academy (WSLA) and the Sexuality Leadership Development
          Fellowship (SLDF). She has also worked on international exchange
          programs. She is a member of the National Association of Social
          Workers, Females in WASH(FEMinWASH) and the Child Protection Network.
        </p>
      </div>
    ),
  },
  {
    name: "Festus Adegbaju",
    role: "Finance and Administrative Officer",
    imageSrc: "/assets/images/staff/festus.png",
    profile: (
      <div>
        <p>
          Festus Kehinde Adegbaju is a dedicated Finance and Administrative
          Officer with professional experience in financial operations, lease
          processing, procurement, and regulatory compliance. He holds a
          National Diploma in Accountancy from The Polytechnic, Ibadan, and a
          Higher National Diploma in Accountancy from The Oke- Ogun Polytechnic,
          Saki.
        </p>
        <p>
          He completed his Industrial Training at the Finance Department of the
          University College Hospital (UCH), Ibadan, where he gained practical
          exposure to institutional financial management. He also worked with
          Appleface International, a finance leasing company in Ibadan, further
          strengthening his expertise in financial administration and lease
          processing. After completing his National Youth Service Corps (NYSC),
          he joined the Youth Empowerment Foundation (YEF) as Finance and
          Administrative Assistant.
        </p>
        <p>
          Festus has contributed to several impactful projects, where he has
          supported financial accountability and operational efficiency. He has
          extensive experience in financial reporting ensuring donor compliance.
          Through his contributions, he has helped enhance YEF’s capacity to
          positively impact over 30,000 young people through sports, education,
          health, and life-skills development programs.
        </p>
      </div>
    ),
  },
  {
    name: "John Jadesola Mofeoluwa",
    role: "Program Officer",
    imageSrc: "/assets/images/staff/mofe.png",
    profile: (
      <div>
        <p>
          John Jadesola Mofeoluwa is a Program Officer based in Abuja with a
          strong academic background in health and development. She holds a
          Bachelor of Science (BSc) in Health Education and a Master of Science
          (MSc) in Public Health. Her professional expertise centers on
          designing and implementing community-based interventions that improve
          the health and socio-economic outcomes of vulnerable populations,
          particularly adolescent girls and young women.
        </p>
        <p>
          Jadesola has extensive experience working with in-school and
          out-of-school girls, delivering life skills, reproductive health
          education, mentorship, and empowerment programs aimed at improving
          confidence, decision-making, and health-seeking behaviours. She is
          passionate about advancing gender equity and expanding access to
          essential health services in underserved communities.
        </p>
        <p>
          She has contributed significantly to several impactful projects. Under
          the FARM Project (Female Act to Reduce Maternal Mortality and HIV
          Infection), she mobilized over 300 community members for HIV Testing
          Services (HTS) and coordinated specialized trainings and review
          meetings for women across two communities. Jadesola has extensive
          experience working with adolescent girls at the school and community
          levels on life skills financial literacy, sports for development,
          entrepreneurship and personal development. She supports the
          recruitment, engagement and placement of beneficiaries, strengthening
          pathways to economic empowerment. Her work consistently reflects
          strategic coordination, grassroots mobilization, and measurable
          community impact.
        </p>
      </div>
    ),
  },
  {
    name: "Adeola Akintola",
    role: "Programs Assistant",
    imageSrc: "/assets/images/staff/adeola.png",
    profile: (
      <div>
        <p>
          Adeola Akintola is a Program Assistant with a strong passion for
          community development, capacity building, and administrative
          excellence. She currently supports program coordination, stakeholder
          engagement, and training facilitation, ensuring the smooth
          implementation of organizational activities and impactful service
          delivery.
        </p>
        <p>
          Adeola is a graduate of Abraham Adesanya Polytechnic, where she
          developed a solid academic foundation that strengthened her
          communication, organizational, and analytical skills. Over the years,
          she has gained valuable experience in program support, training
          coordination, documentation, and participant engagement. Her
          professional journey reflects a commitment to efficiency, teamwork,
          and continuous improvement.
        </p>
        <p>
          She has contributed to several training and development projects,
          playing key roles in coordinating logistics, supporting facilitators,
          managing participant records, and ensuring timely reporting. Her
          contributions have enhanced program effectiveness, improved
          participant experience, and strengthened operational processes. Adeola
          is reliable and pays attention to details.
        </p>
      </div>
    ),
  },
];

const WhoWeAre = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-20 lg:py-32 sm:mt-20 lg:mt-32">
        <h3 className="text-blue-500 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          We equip the African Youth with skills for a better future.
        </h3>
      </div>
      <div className="container p-6 sm:px-0 space-y-6 sm:space-y-24 lg:space-y-32 mx-auto  grid grid-cols-1 md:grid-cols-2 text-center text-base sm:text-lg font-semibold">
        <div className="bg-blue-100 flex justify-center items-center py-6 pr-6 sm:py-16 lg:py-32 text-blue-500 rounded-xl">
          <p className="text-left text-xl sm:text-3xl -rotate-90">Vision</p>
          <p className="max-w-md mx-auto">
            To see a proactive youth population with skills to facilitate
            positive change in their immediate communities.
          </p>
        </div>
        <div className="bg-blue-500 flex justify-center items-center py-6 pr-6 sm:py-16 lg:py-32 text-white rounded-xl">
          <p className="text-left text-xl sm:text-3xl -rotate-90">Mission</p>
          <p className="max-w-md mx-auto">
            To empower youth through strategic partnership and programs in
            health, sports, education and leadership.
          </p>
        </div>
      </div>
      <div className="space-y-16 sm:space-y-24 lg:space-y-32 mt-16 sm:mt-24 lg:mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <p className="font-bold text-gray-400 md:col-span-2">About Yef</p>
          <p className="md:col-span-7 text-base">
            Youth Empowerment Foundation (YEF) is committed to delivering
            high-quality programmes and services that empower African youth and
            help unlock their full potential.
          </p>
        </div>
        <section className="bg-gray-50" id="history">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 space-y-8">
            <p className="font-bold text-gray-400">Our History</p>
            <HistoryTimeline />
          </div>
        </section>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-6 w-full">
              <p className="font-bold text-gray-400">About YEF</p>
              <p className="text-sm sm:text-base md:max-w-lg">
                At YEF, strive to foster a culture of responsibility and
                challenge the status quo inherent in our young population. Our
                core values reflect our commitment to this.
              </p>
            </div>
            <div className="bg-gray-50 w-full h-56 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl bg-[url(/assets/images/usaid.jpg)] bg-blend-multiply bg-cover bg-center" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 lg:col-span-5 lg:pl-6">
            {[
              "Collaboration",
              "Diversity",
              "Integrity",
              "Passion",
              "Excellence",
            ].map((value, i) => (
              <div
                key={i}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600"
              >
                {value}
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 sm:py-24 lg:py-40 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-cab text-2xl sm:text-3xl lg:text-5xl leading-tight font-semibold text-blue-600">
              Creating a nation where the innate potential of our youth is
              harnessed for positive self-development.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8" id="team">
          <p className="font-bold text-gray-400">Our Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-8 sm:mt-12">
            {OUR_TEAM.map((member, i) => (
              <StaffProfile key={i} staff={member}>
                <div className="w-full space-y-4 cursor-pointer">
                  <div className="relative h-80 lg:h-96 w-full rounded-md bg-blue-500 border-transparent border-8 hover:border-secondary-base overflow-hidden transition-all duration-300 hover:rotate-1 sm:hover:rotate-2">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover object-[15%_25%] lg:object-[50%_30%]"
                    />
                  </div>
                  <p className="border border-secondary-base/30 p-2 w-fit text-xs text-secondary-base rounded">
                    {member.role}
                  </p>
                  <p className="font-cab text-xl sm:text-2xl font-medium">
                    {member.name}
                  </p>
                </div>
              </StaffProfile>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhoWeAre;
