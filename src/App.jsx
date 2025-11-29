import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const arr = [
   
  {
    companyName: "Microsoft",
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    datePosted: "2 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payout: "$120/hr",
    location: "Bengaluru, India"
  },
  {
    companyName: "Google",
    brandLogo: "https://logo.clearbit.com/google.com",
    datePosted: "5 days ago",
    post: "Frontend Developer (React)",
    tag1: "Full-time",
    tag2: "Mid Level",
    payout: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    companyName: "Amazon",
    brandLogo: "https://logo.clearbit.com/amazon.com",
    datePosted: "1 week ago",
    post: "SDE-II (Backend)",
    tag1: "Remote",
    tag2: "Senior Level",
    payout: "$150/hr",
    location: "Mumbai, India"
  },
  {
    companyName: "Netflix",
    brandLogo: "https://logo.clearbit.com/netflix.com",
    datePosted: "Just now",
    post: "Product Designer",
    tag1: "Contract",
    tag2: "Expert Level",
    payout: "$180/hr",
    location: "Gurugram, India"
  },
  {
    companyName: "Apple",
    brandLogo: "https://logo.clearbit.com/apple.com",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payout: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    companyName: "Adobe",
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.v99lh6NmtZtPq0eIKhgSowAAAA?pid=Api&P=0&h=180",
    datePosted: "2 weeks ago",
    post: "Graphic Designer",
    tag1: "Part-time",
    tag2: "Entry Level",
    payout: "$45/hr",
    location: "Noida, India"
  },
  {
    companyName: "Meta",
    brandLogo: "https://logo.clearbit.com/meta.com",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Mid Level",
    payout: "$110/hr",
    location: "Pune, India"
  },
  {
    companyName: "Spotify",
    brandLogo: "https://logo.clearbit.com/spotify.com",
    datePosted: "6 hours ago",
    post: "Mobile Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    payout: "$85/hr",
    location: "Mumbai, India"
  }
];



  return (
    <div id='parent'>
             {arr.map((elem, index) => (
              <Card 
              key={index}
              img={elem.brandLogo}  
              position={elem.post}
              date={elem.datePosted}
              type={elem.tag1}
              level={elem.tag2}
              price={elem.payout}
              location={elem.location}
              name={elem.companyName}
            />
          ))}
              
    </div>
    )
  
}

export default App