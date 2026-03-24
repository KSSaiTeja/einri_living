import React from 'react';

const teamData = [
  {
    name: "Prodipta G",
    role: "The Mastermind",
    image: "/home1/assets/img/team/team1.jpg"
  },
  {
    name: "Swati",
    role: "The Design Alchemist",
    image: "/home1/assets/img/team/team2.jpg"
  },
  {
    name: "Debadri G",
    role: "The Expert Executor",
    image: "/home1/assets/img/team/team4.jpg"
  }
];

function Team() {
  return (
    <section className="tc-team-style1">
      <div className="container">
        <div className="title mb-80 text-center">
          <h3 className="fsz-45 fw-600 mb-30 wow">Meet Our Team</h3>
        </div>
        <div className="members">
          <div className="team-grid">
            {teamData.map((member, i) => (
              <div key={i} className="team-member-card wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                <div className="member-img">
                  <img src={member.image} alt={member.name} className="img-cover" />
                </div>
                <div className="member-info">
                  <h5 className="member-name">{member.name}</h5>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="numbers">
          <div className="row gx-5">
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="perc">2+</h3>
                <p>
                  Years of <br /> Experience
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="perc">50+</h3>
                <p>
                  Projects Completed <br /> Across Cities
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="perc">3</h3>
                <p>
                  Expert Designers & <br /> Project Managers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
