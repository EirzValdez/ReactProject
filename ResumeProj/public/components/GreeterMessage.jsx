var React = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    var add = this.props.add;
    var obj = this.props.obj;
    var tit1 = this.props.tit1;
    return(
      <div>
      <h1>{name}</h1>
      <h2>{message}</h2>
      <p>{obj}</p>
      <h2>{tit1}</h2>
      <p>{add}</p>
      <h2>Personal Information</h2>
      <p>Gender:		Male<br />
Date of Birth:	 	October 23, 1996<br />
Age: 			22<br />
Civil Status:		Single<br />
Religion:		Roman Catholic<br />
Nationality:		Filipino<br />
</p>
      <h2>Schools</h2>
      <p>
      Tertiary:        San Beda College					2012-2016
                       Bachelor of Science in Information and
           Communications Technology
		Mendiola, Manila
<br />
Secondary:   1st year to 4th year					2008-2012
Lorenzo Ruiz de Manila School
		Vista Verde Executive Village, Cainta, Rizal
<br />
Primary:        Grade 3 to Grade 6					2003-2008
                       Lorenzo Ruiz de Manila School
Vista Verde Executive Village, Cainta, Rizal
<br />
Grade 1-2						2002-2003
		Divine Light Christian School
		Pasig Greenpark Vill., Pasig City
</p>
<h2>Skills and Abilities</h2>
<p>
<br />	Knowledgeable of using MS Word, MS PowerPoint, MS Excel, MS Access
<br />	Knowledgeable in creating/generating reports for daily progress and opportunities
<br />	Knowledgeable in handling a class and group of people/agents
<br />	Knowledgeable in creating learning materials that can help agents  engage themselves to the topic
<br />	Can manage a large group of class
<br />	Can handle pressure with reports in a given timeframe
<br />	Can report through internal meetings and client facing meetings
<br />	Has experience in BPO with an LOB of Voice, Email, Chat, Back Office, TSR
<br />	Basic knowledge of flash and Photoshop
<br />	Basic knowledge about Visual Basic, C++ and Java programming language
<br />	Knowledgeable of using the Internet and troubleshooting
<br />	Attributes of a good leader and good personality
<br />	Learned and practiced being a System Analyst/Leader in regards to our course systems analysis and design (Thesis)
<br />	Basic knowledge of Php, HTML, RUBY and MySQL Programming language
<br />	Public Speaker
<br />	Has an experience in the BPO industry for 2 years

</p>

<h2> AWARDS </h2>
<p>
•	Dean’s Lister
San Beda College Manila
2013-2014 2nd Semester
<br />
•	Dean’s Lister
San Beda College Manila
2015-2016 2nd Semester
<br />
•	Certificate of Attendance
3rd PSITE-NCR IT Student Congress
January 29, 2015
<br />
•	Certificate of Participation
MS Project Seminar
February 4, 2015
<br />
•	Certificate of Completion (OJT)
Teradata Philippines
July 2015
<br />
•	Certificate of Recognition
Bedan Computer Information Society Membership and Officer
2015-2016
<br />
•	Certificate of Attendance
International I.T. Summit 2016 (Emcee)
Seoul, Korea
February 25-28, 2016
<br />
•	Certificate of Commendation
(Technical Executive Assistant)
PAEPI International Convention
July 20 -22, 2015
<br />
•	Certificate of Training Completion
Android Development Crash Course
February 2015
<br />
•	Certificate of Training Completion
Java 7 Development Crash Course
February 2015
<br />
•	Certificate of Membership
Bedan Computer Information Society (Academic Affairs)
2015-2016
<br />
•	Best in CSAT (Rank 1)
Convergys Megamall
2016

</p>

<h2>Job Experiences</h2>
<h3>
Convergys Megamall
</h3>
<p>
<br />Time Warner Cable/ Charter Spectrum Account
<br />(Technical Account)
<br />Technical Support Representative for Internet
<br />2016
</p>
<h3>
TeleTech
</h3>
<p>Qantas Airlines Account under:
<br />-	Voice/Calls
<br />-	Email Specialist
<br />-	Chat Support
<br />-	Back Office
<br />Training resource (Trainer) :
<br />-	Voice agents
<br />-	Non-Voice
<br />Team Lead POC (Back Office Non-Voice)
<br />Created a “Bible” for one LOB (Only bible in the history of the company)
<br />Feb 2017 - Sep 2018

</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
