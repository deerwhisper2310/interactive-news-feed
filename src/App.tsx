import React, { useState, FormEvent, ChangeEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const fbsSchools = [
    "Air Force Falcons", "Akron Zips", "Alabama Crimson Tide", "Appalachian State Mountaineers",
    "Arizona State Sun Devils", "Arizona Wildcats", "Arkansas Razorbacks", "Arkansas State Red Wolves",
    "Army Black Knights", "Auburn Tigers", "Ball State Cardinals", "Baylor Bears",
    "Boise State Broncos", "Boston College Eagles", "Bowling Green Falcons", "Buffalo Bulls",
    "BYU Cougars", "California Bears", "Central Michigan Chippewas", "Charlotte 49ers",
    "Cincinnati Bearcats", "Clemson Tigers", "Coastal Carolina Chanticleers", "Colorado Buffaloes",
    "Colorado State Rams", "Delaware Blue Hens", "Duke Blue Devils", "East Carolina Pirates",
    "Eastern Michigan Eagles", "Florida Atlantic Owls", "Florida Gators", "Florida International Panthers",
    "Florida State Seminoles", "Fresno State Bulldogs", "Georgia Bulldogs", "Georgia Southern Eagles",
    "Georgia State Panthers", "Georgia Tech Yellow Jackets", "Hawaii Rainbow Warriors", "Houston Cougars",
    "Illinois Fighting Illini", "Indiana Hoosiers", "Iowa Hawkeyes", "Iowa State Cyclones",
    "Jacksonville State Gamecocks", "James Madison Dukes", "Kansas Jayhawks", "Kansas State Wildcats",
    "Kennesaw State Owls", "Kent State Golden Flashes", "Kentucky Wildcats", "Liberty Flames",
    "Louisiana Ragin' Cajuns", "Louisiana Tech Bulldogs", "Louisville Cardinals", "LSU Tigers",
    "Marshall Thundering Herd", "Maryland Terrapins", "Massachusetts Minutemen", "Memphis Tigers",
    "Miami (FL) Hurricanes", "Miami (OH) RedHawks", "Michigan State Spartans", "Michigan Wolverines",
    "Middle Tennessee State Blue Raiders", "Minnesota Golden Gophers", "Mississippi State Bulldogs",
    "Missouri State Bears", "Missouri Tigers", "Navy Midshipmen", "NC State Wolfpack",
    "Nebraska Cornhuskers", "Nevada Wolf Pack", "New Mexico Lobos", "New Mexico State Aggies",
    "North Carolina Tar Heels", "North Texas Mean Green", "Northern Illinois Huskies", "Northwestern Wildcats",
    "Notre Dame Fighting Irish", "Ohio Bobcats", "Ohio State Buckeyes", "Oklahoma Sooners",
    "Oklahoma State Cowboys", "Old Dominion Monarchs", "Ole Miss Rebels", "Oregon Ducks",
    "Oregon State Beavers", "Penn State Nittany Lions", "Pittsburgh Panthers", "Purdue Boilermakers",
    "Rice Owls", "Rutgers Scarlet Knights", "Sam Houston Bearkats", "San Diego State Aztecs",
    "San Jose State Spartans", "SMU Mustangs", "South Alabama Jaguars", "South Carolina Gamecocks",
    "South Florida Bulls", "Southern Miss Golden Eagles", "Stanford Cardinal", "Syracuse Orange",
    "TCU Horned Frogs", "Temple Owls", "Tennessee Volunteers", "Texas A&M Aggies",
    "Texas Longhorns", "Texas State Bobcats", "Texas Tech Red Raiders", "Toledo Rockets",
    "Troy Trojans", "Tulane Green Wave", "Tulsa Golden Hurricane", "UAB Blazers",
    "UCF Knights", "UConn Huskies", "UL Monroe Warhawks", "UNLV Rebels",
    "USC Trojans", "Utah State Aggies", "Utah Utes", "UTEP Miners",
    "UTSA Roadrunners", "Vanderbilt Commodores", "Virginia Cavaliers", "Virginia Tech Hokies",
    "Wake Forest Demon Deacons", "Washington Huskies", "Washington State Cougars", "West Virginia Mountaineers",
    "Western Kentucky Hilltoppers", "Western Michigan Broncos", "Wisconsin Badgers", "Wyoming Cowboys",
    "Eastern Washington Eagles", "Campbell Fighting Camels", "North Dakota Fighting Hawks", "Western Illinois Leathernecks", "Fordham Rams"
  ];

  const ranks = ["NR", ...Array.from({ length: 25 }, (_, i) => (i + 1).toString())];

  const [formData, setFormData] = useState({
    teamName: '',
    teamRank: '',
    teamRecord: '',
    opponentName: '',
    opponentRank: '',
    opponentRecord: '',
    outcome: '',
    finalScore: '',
    teamTotalYards: '',
    teamPassingYards: '',
    teamRushingYards: '',
    teamCompletionPercentage: '',
    teamYardsPerCompletion: '',
    teamYardsPerCarry: '',
    teamThirdDownConversions: '',
    teamRedZoneEfficiency: '',
    teamTurnovers: '',
    teamSacks: '',
    teamFieldGoals: '',
    teamTimeOfPossession: '',
    teamPenalties: '',
    opponentTotalYards: '',
    opponentPassingYards: '',
    opponentRushingYards: '',
    opponentCompletionPercentage: '',
    opponentYardsPerCompletion: '',
    opponentYardsPerCarry: '',
    opponentThirdDownConversions: '',
    opponentRedZoneEfficiency: '',
    opponentTurnovers: '',
    opponentSacks: '',
    opponentFieldGoals: '',
    opponentTimeOfPossession: '',
    opponentPenalties: '',
    coachNotes: '',
    coachName: '',
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const prompt = `
**Roleplay Prompt for AI Chatbot**

**Your Role:** You are a group of diverse sports journalists at a post-game press conference. For each question, you will adopt one of the personas listed below. Do not state which persona you are embodying; simply ask the question from that perspective. Cycle through different personas for each question to create a dynamic and realistic press conference experience.

**Your Task:** Your goal is to engage in a realistic press conference with me, the head coach. I will provide my responses, and you will ask insightful follow-up questions based on my answers and the game data provided. The press conference should last for a total of 4 to 5 questions. Start with an opening question, and then continue the conversation naturally.

**Reporter Personas:**

*   **Beat Reporter:** Knows the team inside and out. Focuses on injury updates, lineup decisions, and the season's narrative.
*   **Local Broadcast Reporter:** Wants succinct, headline-driven quotes for TV/radio.
*   **National Correspondent:** Focuses on big-picture storylines, playoff implications, and star players.
*   **Radio Talk-Show Host/Podcaster:** Opinion-driven, conversational, and presses for colorful quotes.
*   **Social-Media Reporter:** Quick-fire, headline-oriented questions for generating shareable content.
*   **Feature Writer:** Focuses on human-interest angles, coaching philosophies, and long-term vision.
*   **Statistical/Analytics Reporter:** Asks about metrics, trends, and how data shaped the outcome.

**Game Context & Data:**

*   **My Team:** ${formData.teamName || 'N/A'} (Rank: ${formData.teamRank || 'N/A'}, Record: ${formData.teamRecord || 'N/A'})
*   **Opponent:** ${formData.opponentName || 'N/A'} (Rank: ${formData.opponentRank || 'N/A'}, Record: ${formData.opponentRecord || 'N/A'})
*   **Outcome:** ${formData.outcome || 'N/A'} (Final Score: ${formData.finalScore || 'N/A'})

**Key Statistics:**

*   **My Team:**
    *   Total Yards: ${formData.teamTotalYards || 'N/A'}
    *   Passing Yards: ${formData.teamPassingYards || 'N/A'}
    *   Completion Percentage: ${formData.teamCompletionPercentage || 'N/A'}
    *   Yards Per Completion (YPC): ${formData.teamYardsPerCompletion || 'N/A'}
    *   Rushing Yards: ${formData.teamRushingYards || 'N/A'}
    *   Yards Per Carry (YPC): ${formData.teamYardsPerCarry || 'N/A'}
    *   Third-Down Conversions: ${formData.teamThirdDownConversions || 'N/A'}
    *   Red-Zone Efficiency: ${formData.teamRedZoneEfficiency || 'N/A'}
    *   Turnovers: ${formData.teamTurnovers || 'N/A'}
    *   Sacks: ${formData.teamSacks || 'N/A'}
    *   Field Goals (Made/Attempted): ${formData.teamFieldGoals || 'N/A'}
    *   Time of Possession: ${formData.teamTimeOfPossession || 'N/A'}
    *   Penalties (Count & Yards): ${formData.teamPenalties || 'N/A'}
*   **Opponent:**
    *   Total Yards: ${formData.opponentTotalYards || 'N/A'}
    *   Passing Yards: ${formData.opponentPassingYards || 'N/A'}
    *   Completion Percentage: ${formData.opponentCompletionPercentage || 'N/A'}
    *   Yards Per Completion (YPC): ${formData.opponentYardsPerCompletion || 'N/A'}
    *   Rushing Yards: ${formData.opponentRushingYards || 'N/A'}
    *   Yards Per Carry (YPC): ${formData.opponentYardsPerCarry || 'N/A'}
    *   Third-Down Conversions: ${formData.opponentThirdDownConversions || 'N/A'}
    *   Red-Zone Efficiency: ${formData.opponentRedZoneEfficiency || 'N/A'}
    *   Turnovers: ${formData.opponentTurnovers || 'N/A'}
    *   Sacks: ${formData.opponentSacks || 'N/A'}
    *   Field Goals (Made/Attempted): ${formData.opponentFieldGoals || 'N/A'}
    *   Time of Possession: ${formData.opponentTimeOfPossession || 'N/A'}
    *   Penalties (Count & Yards): ${formData.opponentPenalties || 'N/A'}

**Coach's Notes (Key Themes for Your Questions):**

${formData.coachNotes || 'No specific notes provided.'}

**How to Begin:**

1.  Acknowledge me as "Coach ${formData.coachName || ''}" (or just "Coach" if no name is provided).
2.  Ask your first question from the perspective of one of the reporter personas.
3.  Wait for my response before asking your next question.

Ready? Let's begin the press conference.

**After the press conference (4-5 questions) is over, ask the user if they would like a full transcript of the conference or an article about the game with snippets pulled from the media session.**
`;
    setGeneratedPrompt(prompt);
  };

  if (generatedPrompt) {
    return (
      <div className="App">
        <h1>Press Conference Prompt</h1>
        <div className="prompt-container">
          <textarea readOnly value={generatedPrompt} />
          <button onClick={() => navigator.clipboard.writeText(generatedPrompt)}>Copy to Clipboard</button>
        </div>
        <button className="back-button" onClick={() => setGeneratedPrompt('')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Post-Game Press Conference</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Game Details</h2>
          <div className="form-grid">
            <select name="teamName" value={formData.teamName} onChange={handleChange}>
              <option value="">Select Your Team</option>
              {fbsSchools.map(school => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <select name="teamRank" value={formData.teamRank} onChange={handleChange}>
              <option value="">Select Rank</option>
              {ranks.map(rank => (
                <option key={rank} value={rank}>{rank}</option>
              ))}
            </select>
            <input name="teamRecord" placeholder="Your Team Record (W-L)" value={formData.teamRecord} onChange={handleChange} />
            <select name="opponentName" value={formData.opponentName} onChange={handleChange}>
              <option value="">Select Opponent</option>
              {fbsSchools.map(school => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <select name="opponentRank" value={formData.opponentRank} onChange={handleChange}>
              <option value="">Select Rank</option>
              {ranks.map(rank => (
                <option key={rank} value={rank}>{rank}</option>
              ))}
            </select>
            <input name="opponentRecord" placeholder="Opponent Record (W-L)" value={formData.opponentRecord} onChange={handleChange} />
            <select name="outcome" value={formData.outcome} onChange={handleChange}>
              <option value="">Select Outcome</option>
              <option value="Win">Win</option>
              <option value="Loss">Loss</option>
            </select>
            <input name="finalScore" placeholder="Final Score (e.g., 28-24)" value={formData.finalScore} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <h2>Team Statistics</h2>
          <div className="form-grid">
            <input name="teamTotalYards" placeholder="Total Yards" value={formData.teamTotalYards} onChange={handleChange} />
            <input name="teamPassingYards" placeholder="Passing Yards" value={formData.teamPassingYards} onChange={handleChange} />
            <input name="teamCompletionPercentage" placeholder="Completion Percentage" value={formData.teamCompletionPercentage} onChange={handleChange} />
            <input name="teamYardsPerCompletion" placeholder="Yards Per Completion (YPC)" value={formData.teamYardsPerCompletion} onChange={handleChange} />
            <input name="teamRushingYards" placeholder="Rushing Yards" value={formData.teamRushingYards} onChange={handleChange} />
            <input name="teamYardsPerCarry" placeholder="Yards Per Carry (YPC)" value={formData.teamYardsPerCarry} onChange={handleChange} />
            <input name="teamThirdDownConversions" placeholder="Third-Down Conversions (e.g., 5/12)" value={formData.teamThirdDownConversions} onChange={handleChange} />
            <input name="teamRedZoneEfficiency" placeholder="Red-Zone Efficiency (e.g., 3/4)" value={formData.teamRedZoneEfficiency} onChange={handleChange} />
            <input name="teamTurnovers" placeholder="Giveaways" value={formData.teamTurnovers} onChange={handleChange} />
            <input name="teamSacks" placeholder="Sacks Forced" value={formData.teamSacks} onChange={handleChange} />
            <input name="teamFieldGoals" placeholder="Field Goals (Made/Attempted)" value={formData.teamFieldGoals} onChange={handleChange} />
            <input name="teamTimeOfPossession" placeholder="Time of Possession (e.g., 32:15)" value={formData.teamTimeOfPossession} onChange={handleChange} />
            <input name="teamPenalties" placeholder="Penalties (Count-Yards)" value={formData.teamPenalties} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <h2>Opponent Statistics</h2>
          <div className="form-grid">
            <input name="opponentTotalYards" placeholder="Total Yards" value={formData.opponentTotalYards} onChange={handleChange} />
            <input name="opponentPassingYards" placeholder="Passing Yards" value={formData.opponentPassingYards} onChange={handleChange} />
            <input name="opponentCompletionPercentage" placeholder="Completion Percentage" value={formData.opponentCompletionPercentage} onChange={handleChange} />
            <input name="opponentYardsPerCompletion" placeholder="Yards Per Completion (YPC)" value={formData.opponentYardsPerCompletion} onChange={handleChange} />
            <input name="opponentRushingYards" placeholder="Rushing Yards" value={formData.opponentRushingYards} onChange={handleChange} />
            <input name="opponentYardsPerCarry" placeholder="Yards Per Carry (YPC)" value={formData.opponentYardsPerCarry} onChange={handleChange} />
            <input name="opponentThirdDownConversions" placeholder="Third-Down Conversions (e.g., 5/12)" value={formData.opponentThirdDownConversions} onChange={handleChange} />
            <input name="opponentRedZoneEfficiency" placeholder="Red-Zone Efficiency (e.g., 3/4)" value={formData.opponentRedZoneEfficiency} onChange={handleChange} />
            <input name="opponentTurnovers" placeholder="Giveaways" value={formData.opponentTurnovers} onChange={handleChange} />
            <input name="opponentSacks" placeholder="Sacks Forced" value={formData.opponentSacks} onChange={handleChange} />
            <input name="opponentFieldGoals" placeholder="Field Goals (Made/Attempted)" value={formData.opponentFieldGoals} onChange={handleChange} />
            <input name="opponentTimeOfPossession" placeholder="Time of Possession (e.g., 32:15)" value={formData.opponentTimeOfPossession} onChange={handleChange} />
            <input name="opponentPenalties" placeholder="Penalties (Count-Yards)" value={formData.opponentPenalties} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <h2>Coach's Notes</h2>
          <textarea
            name="coachNotes"
            placeholder="Key players, moments, or other notes for the media..."
            value={formData.coachNotes}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <h2>Coach Details</h2>
          <input name="coachName" placeholder="Coach's Name" value={formData.coachName} onChange={handleChange} />
        </div>
        <button type="submit">Generate Press Conference Prompt</button>
      </form>
    </div>
  );
};

export default App;