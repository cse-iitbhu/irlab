import React from 'react';

// Alumni data with profileUrl field for linking names
const alumni = [
  {
    name: "Dr. Pradeepika Verma",
    desg: "Post Doctoral Fellow",
    year: "2022",
    thesis: "Abstractive and Extractive Document Summmarization",
    profileUrl: "https://www.linkedin.com/in/pradeepika-verma-b2295529/" 
  },
  {
    name: "Dr. Supriya Chanda",
    year: "2024",
    desg: "Research Scholar",
    thesis: "Text Processing on Code-Mixed Social Media Data",
    profileUrl: "https://www.linkedin.com/in/supriyachandacs/" 
  },
  {
    name: "Dr. Siba Sankar Sahu",
    year: "2024",
    desg: "Research Scholar",
    thesis: "Pre-processing tasks for Indian Language Information Retrieval",
    profileUrl: "https://www.linkedin.com/in/siba-sankar-sahu-488449a7/" 
  },
  {
    name: "Dr. Anita Saroj",
    year: "2022",
    desg: "Research Scholar",
    thesis: "The Impact of Social Media Text: A study on e-Governance, Election and Disaster Management",
    thesisUrl: "https://shodhganga.inflibnet.ac.in/handle/10603/531861",
    profileUrl: "https://www.linkedin.com/in/dr-anita-saroj-27316697/" 
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
    thesis: "",
    profileUrl: "https://www.linkedin.com/in/pranav-nair-222506172/" 
  },
  {
    name: "Mr. Ribhav Soni",
    desg: "IDD",
    year: "2018",
    thesis: "",
    profileUrl: "https://www.linkedin.com/in/ribhavsoni/" 
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
  }
];


const extractYear = (yearStr) => {
  const match = yearStr.match(/\d{4}/); 
  return match ? parseInt(match[0], 10) : 0; 
};

// Categorize and sort alumni by designation and year
const categorizedAlumni = {
  "Postdoctoral Researchers": alumni.filter(item => item.desg.toLowerCase().includes("post")).sort((a, b) => extractYear(b.year) - extractYear(a.year)),
  "PhD Researchers": alumni.filter(item => item.desg.toLowerCase().includes("research scholar") || item.year.includes("PhD")).sort((a, b) => extractYear(b.year) - extractYear(a.year)),
  "IDD Graduates": alumni.filter(item => item.desg.toLowerCase().includes("idd")).sort((a, b) => extractYear(b.year) - extractYear(a.year)),
  "M.Tech Graduates": alumni.filter(item => item.desg.toLowerCase().includes("m.tech")).sort((a, b) => extractYear(b.year) - extractYear(a.year))
};

export const Alumni = () => {
  return (
    <div style={{ width: '100%', padding: '2% 10%', boxSizing: 'border-box' }}>
      {/* Postdoctoral Researchers */}
      <div style={{
        backgroundColor: 'rgba(211, 211, 211, 0.4)', 
        padding: '12px 20px',
        borderRadius: '8px',
        marginBottom: '15px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: '#03254c',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          margin: 0
        }}>Postdoctoral Researchers</h2>
      </div>
      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {categorizedAlumni["Postdoctoral Researchers"].map((item, index) => (
          <li key={item.name} style={{
            marginBottom: '8px',
            fontSize: '1rem',
          }}>
            <span>{index + 1}. </span>
            {item.profileUrl 
              ? <a href={item.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
                  onMouseOut={e => e.target.style.color = 'black'}>
                  <strong>{item.name}</strong>
                </a> 
              : <strong>{item.name}</strong>} 
            ({item.year}) - 
            {item.thesisUrl ? <a href={item.thesisUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} 
            onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
            onMouseOut={e => e.target.style.color = 'black'}>{item.thesis}</a> : item.thesis}
          </li>
        ))}
      </ul>

      {/* PhD Researchers */}
      <div style={{
        backgroundColor: 'rgba(211, 211, 211, 0.4)', // Soft green with slight transparency
        padding: '12px 20px',
        borderRadius: '8px',
        marginBottom: '15px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: '#03254c',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          margin: 0
        }}>PhD Researchers</h2>
      </div>
      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {categorizedAlumni["PhD Researchers"].map((item, index) => (
          <li key={item.name} style={{
            marginBottom: '8px',
            fontSize: '1rem',
          }}>
            <span>{index + 1}. </span>
            {item.profileUrl 
              ? <a href={item.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
                  onMouseOut={e => e.target.style.color = 'black'}>
                  <strong>{item.name}</strong>
                </a> 
              : <strong>{item.name}</strong>} 
            ({item.year}) - 
            {item.thesisUrl ? <a href={item.thesisUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} 
            onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
            onMouseOut={e => e.target.style.color = 'black'}>{item.thesis}</a> : item.thesis}
          </li>
        ))}
      </ul>

      {/* IDD Graduates */}
      <div style={{
        backgroundColor: 'rgba(211, 211, 211, 0.4)', // Soft green with slight transparency
        padding: '12px 20px',
        borderRadius: '8px',
        marginBottom: '15px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: '#03254c',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          margin: 0
        }}>IDD Graduates</h2>
      </div>
      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {categorizedAlumni["IDD Graduates"].map((item, index) => (
          <li key={item.name} style={{
            marginBottom: '8px',
            fontSize: '1rem',
          }}>
            <span>{index + 1}. </span>
            {item.profileUrl 
              ? <a href={item.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
                  onMouseOut={e => e.target.style.color = 'black'}>
                  <strong>{item.name}</strong>
                </a> 
              : <strong>{item.name}</strong>} 
            ({item.year}) - 
            {item.thesisUrl ? <a href={item.thesisUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} 
            onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
            onMouseOut={e => e.target.style.color = 'black'}>{item.thesis}</a> : item.thesis}
          </li>
        ))}
      </ul>

      {/* M.Tech Graduates */}
      <div style={{
        backgroundColor: 'rgba(211, 211, 211, 0.4)', // Soft green with slight transparency
        padding: '12px 20px',
        borderRadius: '8px',
        marginBottom: '15px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: '#03254c',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          margin: 0
        }}>M.Tech Graduates</h2>
      </div>
      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {categorizedAlumni["M.Tech Graduates"].map((item, index) => (
          <li key={item.name} style={{
            marginBottom: '8px',
            fontSize: '1rem',
          }}>
            <span>{index + 1}. </span>
            {item.profileUrl 
              ? <a href={item.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
                  onMouseOut={e => e.target.style.color = 'black'}>
                  <strong>{item.name}</strong>
                </a> 
              : <strong>{item.name}</strong>} 
            ({item.year}) - 
            {item.thesisUrl ? <a href={item.thesisUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} 
            onMouseOver={e => e.target.style.color = '#d9534f'} // Hover effect
            onMouseOut={e => e.target.style.color = 'black'}>{item.thesis}</a> : item.thesis}
          </li>
        ))}
      </ul>
    </div>
  );
};
