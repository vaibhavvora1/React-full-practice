import React from 'react'
import './App.css'



import Card from './components/card'

const jobs = [
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrmxc_2sQrxHofsXRGaKd69L8kuZdZg7KOw&s",
    companyName: "Amazon",
    postedTime: "1 day ago",
    jobTitle: "Software Engineer",
    jobType: "Full Time",
    experienceLevel: "Mid Level",
    rate: "$120k - $150k",
    location: "Seattle, WA"
  },
  {
    companyLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    companyName: "Google",
    postedTime: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: "Full Time",
    experienceLevel: "Junior Level",
    rate: "$90k - $120k",
    location: "Mountain View, CA"
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/006/892/682/non_2x/microsoft-logo-icon-editorial-free-vector.jpg",
    companyName: "Microsoft",
    postedTime: "3 days ago",
    jobTitle: "Backend Developer",
    jobType: "Full Time",
    experienceLevel: "Senior Level",
    rate: "$130k - $170k",
    location: "Redmond, WA"
  },
  {
    companyLogo: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
    companyName: "Netflix",
    postedTime: "5 days ago",
    jobTitle: "Full Stack Developer",
    jobType: "Full Time",
    experienceLevel: "Mid Level",
    rate: "$140k - $180k",
    location: "Los Angeles, CA"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez1McrNMsAAXCEyFxpBq-TMyzkYZ7fe1S-w&s",
    companyName: "Meta",
    postedTime: "1 week ago",
    jobTitle: "React Developer",
    jobType: "Contract",
    experienceLevel: "Mid Level",
    rate: "$100k - $140k",
    location: "Menlo Park, CA"
  },
  {
    companyLogo: "https://pbs.twimg.com/profile_images/1892248257516224513/SzZdRSkx.png",
    companyName: "Apple",
    postedTime: "2 days ago",
    jobTitle: "iOS Developer",
    jobType: "Full Time",
    experienceLevel: "Senior Level",
    rate: "$150k - $200k",
    location: "Cupertino, CA"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVV-gN5AooFeB5fWd3gv93lcOdqiT8mUndA&s",
    companyName: "Tesla",
    postedTime: "4 days ago",
    jobTitle: "Embedded Engineer",
    jobType: "Full Time",
    experienceLevel: "Mid Level",
    rate: "$110k - $150k",
    location: "Austin, TX"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/960px-Spotify_icon.svg.png?_=20220821125323",
    companyName: "Spotify",
    postedTime: "6 days ago",
    jobTitle: "Backend Engineer",
    jobType: "Remote",
    experienceLevel: "Mid Level",
    rate: "$100k - $140k",
    location: "Remote"
  },
  {
    companyLogo: "https://freelogopng.com/images/all_img/1659761297uber-icon.png",
    companyName: "Uber",
    postedTime: "1 day ago",
    jobTitle: "Data Engineer",
    jobType: "Full Time",
    experienceLevel: "Senior Level",
    rate: "$130k - $170k",
    location: "San Francisco, CA"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmR8nSuSzVAalSUh9SpHWv6LMaVsrvbdyMw&s",
    companyName: "Airbnb",
    postedTime: "3 days ago",
    jobTitle: "UI/UX Designer",
    jobType: "Contract",
    experienceLevel: "Junior Level",
    rate: "$80k - $110k",
    location: "New York, NY"
  }
];



function App() {
  return (
    <div className='parent'>

      

      
      
      
      {jobs.map(function(elem, index){
        
        return  <div key={index} >
          <Card 
            companyLogo={elem.companyLogo}
            companyName={elem.companyName}
            postedTime={elem.postedTime}
            jobTitle={elem.jobTitle}
            jobType={elem.jobType}
            experienceLevel={elem.experienceLevel}
            rate={elem.rate}
            location={elem.location}
          />
        </div>
      })}

      

      
      
    </div>
  )
}

export default App

