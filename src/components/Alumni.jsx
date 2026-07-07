import React, { useState } from 'react';


const alumni = [
  {
    name: "Dr. Pradeepika Verma",
    desg: "Post Doctoral Fellow",
    year: "2022",
    thesis: "Abstractive and Extractive Document Summmarization",
    profileUrl: "https://www.linkedin.com/in/pradeepika-verma-b2295529/" 
  },
  {
    name: "Mr. Akhilesh Yadav",
    desg: "Project Staff",
    year: "2026",
    Project :"Development of a Disaster Response System for Collecting and Disseminating Information through Social Media Text Processing"

  },
  {
    name: "Dr. Supriya Chanda",
    year: "2024",
    desg: "Research Scholar",
    thesis: "Text Processing on Code-Mixed Social Media Data",
    profileUrl: "https://supriyachanda.github.io/",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/608610" 
  },
  {
    name: "Mr. Sushil Kulkarni",
    year: "2026",
    desg: "Research Scholar",
    thesis: "A Study on Spoken Term Detection Using Text and Audio Based Deep Learning Techniques",
    profileUrl: "",
    thesisUrl: "" 
  },
  {
    name: "Dr. Siba Sankar Sahu",
    year: "2024",
    desg: "Research Scholar",
    thesis: "Pre-processing tasks for Indian Language Information Retrieval",
    profileUrl: "https://www.linkedin.com/in/siba-sankar-sahu-488449a7/",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/609791" 
  },
  {
    name: "Dr. Naina Yadav",
    year: "2024",
    desg: "Research Scholar",
    thesis: "Design and Development of Some Approaches for Accurate and Diverse Music Recommender System",
    profileUrl: "https://www.linkedin.com/in/dr-naina-yadav-9625b346/",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/539107" 
  },
  {
    name: "Dr. Anita Saroj",
    year: "2023",
    desg: "Research Scholar",
    thesis: "The Impact of Social Media Text: A study on e-Governance, Election and Disaster Management",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/531861",
    profileUrl: "https://www.linkedin.com/in/dr-anita-saroj-27316697/" 
  },
    {
    name: "Dr. Dinesh Prabhakar",
    desg: "Research Scholar",
    year: "2022",
    thesis: "Informal Information Retrieval: Techniques and Evaluation"
  },
  {
    name: "Dr. Tribikram Pradhan",
    desg: "Research Scholar",
    year: "2020",
    thesis: "Multi objective Academic Recommender System",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/435807",
    profileUrl: "https://www.linkedin.com/in/tribikram-pradhan-39a67290/" 
  },
  {
    name: "Dr. Ambedkar Kanapala",
    desg: "Research Scholar",
    year: "2020",
    thesis: "Legal Information Retrieval: Techniques and Evaluation",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/585585",
  },
  {
    name: "Mr. Abhyudaya",
    desg: "IDD",
    profileUrl: "",
    year: "2026",
    thesis: "Long-Context Text Adaptation in CLIPSeg for Dermatological Image Segmentation"
  },
   {
    name: "Mr. Manas Jayaswal",
    desg: "IDD",
    profileUrl: "",
    year: "2026",
    thesis: "Automated Verification of Numerical Claims in Textual Statements Using Evidence Reranking and Parameter-Efficient Fine-Tuning of Large Language Models"
  },
   
    {
    name: "Mr. Abhijeet Panihar",
    desg: "IDD",
    profileUrl: "https://www.linkedin.com/in/abhijeet-panihar-046792284/",
    year: "2025",
    thesis: "Improving Explainable Knowledge-Graph Recommendations through Path Generalization and Relation-Aware Pruning"
  },
  {
    name: "Mr. K Abhinay Paul",
    desg: "IDD",
    profileUrl: "https://www.linkedin.com/in/abhinay-paul-316a13203/",
    year: "2025",
    thesis: "Sentiment Analysis and Sarcasm Detection in Dravidian Code-Mixed Data"
  },
  {
    name: "Mr. Narendra Kumar",
    desg: "IDD",
    profileUrl: "https://www.linkedin.com/in/narendra-kumar-3b30791a7/",
    year: "2025",
    thesis: "Fairness in Textual Information Retrieval Using Query Modification"
  },
  {
    name: "Mr. Pranav Ajith",
    desg: "IDD",
    profileUrl: "",
    year: "2026",
    thesis: "Interview-Audio Based Mental Health Classification: An In-Depth Analysis"
  },
  {
    name: "Ms. Yamini Jha",
    desg: "IDD",
    profileUrl: "https://www.linkedin.com/in/yamini-jha-968078248/",
    year: "2025",
    thesis: "Adversarial Attacks on Federated Recommendation: An Untargeted Perspective"
  },
  {
    name: "Mr. Arvind Agrawal",
    desg: "IDD",
    year: "2024",
    thesis: "Medical Visual Question Answering: Generation and Classification",
    profileUrl: "https://www.linkedin.com/in/arvind-agrawal-2717411a7/" 
  },
  {
    name: "Mr. Saumay Gupta",
    desg: "IDD",
    year: "2024",
    thesis: "Advancing Hindi Text Summarization: Named Entity Recognition and Content Augmentation Strategies",
    profileUrl: "https://www.linkedin.com/in/100maygupta/" 
  },
  {
    name: "Mr. Pranav Nair",
    desg: "IDD",
    year: "2023",
    thesis: "Domain Generalization in Abstractive Summarization",
    profileUrl: "https://www.linkedin.com/in/pranav-nair-222506172/" 
  },
  {
    name: "Mr. Manish Regar",
    desg: "IDD",
    year: "2023",
    thesis: "A Study on Stemming Techniques in Indian Languages IR",
    profileUrl: "https://www.linkedin.com/in/manish-regar-906057217/" 
  },
  {
    name: "Mr. Dhruv Mahajan",
    desg: "IDD",
    year: "2022",
    thesis: "A study on Commercial Recommender Systems" 
  },
  {
    name: "Mr. Raghav Kabra",
    desg: "IDD",
    year: "2021",
    thesis: "A Recommender System for online marketplace",
    profileUrl: "https://www.linkedin.com/in/raghavkabra27/" 
  },
  {
    name: "Mr. Chaitanya Bhatia",
    desg: "IDD",
    year: "2020",
    thesis: "Design of Decision Support System for Peer Reviewed Conference/ Journal",
    profileUrl: "https://www.linkedin.com/in/chaitanya-bhatia-b782a8118/" 
  },
  {
    name: "Mr. Vinayaka Batwara",
    desg: "IDD",
    year: "2020",
    thesis: "Consistency of Information Retrieval Systems in presence of Query Variations",
    profileUrl: "https://www.linkedin.com/in/pranav-nair-222506172/" 
  },
  {
    name: "Mr. Ribhav Soni",
    desg: "IDD",
    year: "2018",
    thesis: "Microblog Retrieval for Disaster Relief: Creating a Robust Gold Standard",
    profileUrl: "https://www.linkedin.com/in/ribhavsoni/" 
  },
   {
    name: "Mr. Swapnil Khatuji Dupare",
    desg: "M.Tech",
    year: "2026",
    thesis: "Transformer-Based Depression Detection from Clinical Conversation: Evaluation on Benchmark Dataset and Low-Resource Hindi Dataset Development",
    profileUrl: "" 
  },
  {
    name: "Mr. Amit Yadav",
    desg: "M.Tech",
    year: "2024",
    thesis: "Role of Social Media in Disaster Management",
    profileUrl: "https://www.linkedin.com/in/amit-yadav-a1173b136/" 
  },
  {
    name: "Mr. Shivam Solanki",
    desg: "M.Tech",
    year: "2023",
    thesis: "Product Recommendation System",
    profileUrl: "https://www.linkedin.com/in/shivam-solanki-1b8696209/" 
  },
  {
    name: "Ms. Sudha Sankar Prasad",
    desg: "M.Tech",
    year: "2016",
    thesis: "Sentiment Classification: An Approach for Indian Language Tweets"
  },
  {
    name: "Mr. Jitendra Prasad",
    desg: "M.Tech",
    year: "2016",
    thesis: "An Approach for Temporal Query Intent Classification"
  },
  {
    name: "Ms. Sushmita Annie",
    desg: "M.Tech",
    year: "2016",
    thesis: "Legal Information Retrieval"
  },
  {
    name: "Mr. Deep Biswas",
    desg: "M.Tech",
    year: "2016",
    thesis: "Site Based Prediction of Hidden Attributes of Social Network Profiles"
  },
  {
    name: "Mr. Shantanu Dubey",
    desg: "M.Tech",
    year: "2015",
    thesis: "NER from Transliterated Text"
  },
    {
    name: "Ms. Bharti Goel",
    desg: "M.Tech",
    year: "2015",
    thesis: "Sentiment Detection"
  },
    {
    name: "Ms. Akanchha Choubey",
    desg: "M.Tech",
    year: "2015",
    thesis: "Social Spam Detection"
  },
    {
    name: "Mr. Manajit Chakrabarty",
    desg: "M.Tech",
    year: "2014",
    thesis: "Social Spam Detection"
  },
    {
    name: "Mr. Rahul Pramanik",
    desg: "M.Tech",
    year: "2014",
    thesis: "Effect of Negative Information on IR"
  },
    {
    name: "Mr. Gopashree Panda",
    desg: "M.Tech",
    year: "2014",
    thesis: "A Study on Named Entity Recognition"
  },
    {
    name: "Mr. Robins Yadav",
    desg: "M.Tech",
    year: "2013",
    thesis: "Enhancement of ISMStemmer"
  },
    {
    name: "Mr. Avinash Yadav",
    desg: "M.Tech",
    year: "2013",
    thesis: "Social Book Search" 
  },
    {
    name: "Mr. Raktim Banerjee",
    desg: "M.Tech",
    year: "2012",
    thesis: "Development of ISMStemmer"
  },
    {
    name: "Ms. Preeti Tamrakar",
    desg: "M.Tech",
    year: "2012",
    thesis: "On Snippet Retrieval" 
  }
];


const extractYear = (yearStr) => {
  const match = yearStr.match(/\d{4}/); 
  return match ? parseInt(match[0], 10) : 0; 
};

// Categorize and sort alumni by designation and year
const categorizedAlumni = {
  "Postdoctoral Researchers": alumni.filter(item =>
    item.desg.toLowerCase().includes("post")
  ).sort((a, b) => extractYear(b.year) - extractYear(a.year)),

  "PhD Researchers": alumni.filter(item =>
    item.desg.toLowerCase().includes("research scholar") ||
    item.year.includes("PhD")
  ).sort((a, b) => extractYear(b.year) - extractYear(a.year)),

  "Project Staff": alumni.filter(item =>
    item.desg.toLowerCase().includes("project staff")
  ).sort((a, b) => extractYear(b.year) - extractYear(a.year)),

  "IDD Graduates": alumni.filter(item =>
    item.desg.toLowerCase().includes("idd")
  ).sort((a, b) => extractYear(b.year) - extractYear(a.year)),

  "M.Tech Graduates": alumni.filter(item =>
    item.desg.toLowerCase().includes("m.tech")
  ).sort((a, b) => extractYear(b.year) - extractYear(a.year))
};
export const Alumni = () => {
  const [openSection, setOpenSection] = useState(null);
  const isDark = document.documentElement.classList.contains("dark");

return (
  <div
    style={{
      width: "100%",
      padding: "2% 10%",
      boxSizing: "border-box",
      color: isDark ? "#f3f4f6" : "#111827",
    }}
  >
    {Object.entries(categorizedAlumni).map(([title, members]) => (
      <div key={title} style={{ marginBottom: "20px" }}>
        <div
          onClick={() =>
            setOpenSection(openSection === title ? null : title)
          }
          style={{
            background: isDark ? "#374151" : "#eaf3f9",
            padding: "20px",
            borderRadius: "15px",
            cursor: "pointer",
            boxShadow: isDark
              ? "0 4px 12px rgba(0,0,0,0.4)"
              : "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: isDark ? "#FFFFFF" : "#03254c",
            }}
          >
            {title} ({members.length})
          </h2>

          <span>{openSection === title ? "▲" : "▼"}</span>
        </div>

        {openSection === title && (
          <div style={{ marginTop: "15px" }}>
            {members.map((item, index) => (
              <div
                key={item.name}
                style={{
                  background: isDark ? "#1f2937" : "white",
                  padding: "18px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  boxShadow: isDark
                    ? "0 2px 8px rgba(0,0,0,0.4)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
                  borderLeft: isDark
                    ? "5px solid #60a5fa"
                    : "5px solid #03254c",
                }}
              >
                <h3
                  style={{
                    color: isDark ? "#f9fafb" : "#111827",
                  }}
                >
                  {members.length - index}.{" "}
                  {item.profileUrl ? (
                    <a
                      href={item.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "inherit";
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                  {item.year && ` (${item.year})`}
                </h3>

                {item.thesis && (
                  <p
                    style={{
                      marginTop: "10px",
                      lineHeight: "1.6",
                      color: isDark ? "#d1d5db" : "#444",
                    }}
                  >
                    <strong>Thesis:</strong>{" "}
                    {item.thesisUrl ? (
                     <a
  href={item.thesisUrl}
  target="_blank"
  rel="noreferrer"
  style={{
    color: "inherit", 
    textDecoration: "none",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#2563eb"; 
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "inherit"; 
  }}
>
  {item.thesis}
</a>
                    ) : (
                      item.thesis
                    )}
                  </p>
                )}

                {item.Project && (
                  <p
                    style={{
                      marginTop: "10px",
                      lineHeight: "1.6",
                      color: isDark ? "#d1d5db" : "#444",
                    }}
                  >
                    <strong>Project:</strong>{" "}
                    {item.thesisUrl ? (
                      <a
  href={item.thesisUrl}
  target="_blank"
  rel="noreferrer"
  style={{
    color: "inherit", 
    textDecoration: "none",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#2563eb"; 
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "inherit";
  }}
>
  {item.Project}
</a>
                    ) : (
                      item.Project
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);
}