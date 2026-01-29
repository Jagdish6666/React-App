import React from 'react'
import User from './components/User'
import Card from './components/card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    datePosted: "7 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Mumbai, India",
  },
];

 

  return (
    <div className='parent'>

      <div className="parent">
      {jobs.map(function (elem,idx) {
      return <div Key={idx}> <Card companyName={elem.companyName} post={elem.post} brandLogo={elem.brandLogo} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}/>;
        </div>
      })}
</div>

      
    </div>
  )
}

export default App
