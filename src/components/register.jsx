import { useState } from "react";
import mansit from "../assets/images/mansit.png";
import walk from "../assets/images/walk.png";
import walk2 from "../assets/images/walk2.png";
import axios from 'axios';

export default function Register() {

  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [teamName,setTeamName] = useState('');
  const [groupSize,setGroupSize] = useState('');
  const [projectTopic,setProjectTopic] = useState('');
  const [category,setCategory] = useState('');
  const [privacyPolicy,setPrivacyPolicy] = useState(false);
  


  const handleSubmit = async(e) =>{
        e.preventDefault();
   

      if(privacyPolicy && email && phoneNumber && teamName && groupSize && projectTopic && category){
        try{

          const responseData={
            email,
            "phone_number":phoneNumber,
            "team_name": teamName,
            "group_size": groupSize,
            "project_topic":projectTopic,
            category,
            "privacy_poclicy_accepted": true
          }
    
          const headers ={
          'Content-Type':'application/json'
          }
          
          const baseUrl = 'https://backend.getlinked.ai';
          
          const response = await axios.post(`${baseUrl}/hackathon/registration`,responseData,{headers});

          if(response.status==200){
            setEmail('');
            setPhoneNumber('');
            setGroupSize('');
            setCategory('');
            setTeamName('');
            setPrivacyPolicy(false);
            setProjectTopic('');

            alert('form was submitted succesfully');
          }
          else{
            console.error('error submitting form',response.statusText);
            alert('An error occurred while submitting the form. Please try again later.');
          }
      }
      catch(e){
        console.error('an error occurred',e);
        alert('An error occurred while submitting the form. Please try again later.');
      }
    }
    else{
      alert('please accept our privacy policy')
    }

    
        
  }
  return (
    <div className="pt-20 lg:pt-36 pb-12 lg:grid grid-cols-12 text-white">
      <div className="col-span-5 pl-5">
      <p className=" text-secondary-300 text-xl block lg:hidden font-bold ">Register</p>
        <img src={mansit} alt="" className="lg:w-full w-[70%] mt-10 lg:mt-0 mx-auto"/>
      </div>
      <div className="lg:col-span-7 lg:pr-28">
        <div className="lg:px-16 px-8 py-12 mt-2 lg:bg-secondary-400 shadow-xl rounded-lg">
        <p className=" text-secondary-300 text-xl hidden lg:block font-bold ">Register</p>
          <p className="flex align-bottom pt-8 text-lg"> Be part of this movement <span className=" flex underline"><img src={walk} alt="" /><img src={walk2} alt="" /></span> </p>
          <p className=" text-xl font-medium mt-2">CREATE YOUR ACCOUNT</p>
          <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-2 mt-6">
            <div className="lg:col-span-1 mb-6 lg:mb-0">
                <label htmlFor="">Team name</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Enter the name of your group"
                value={teamName}
                onChange={(e)=>setTeamName(e.target.value)}
              />
            </div>
            <div className="lg:col-span-1 mb-6 lg:mb-0">
            <label htmlFor="">Phone</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 mt-3">
            <div className="lg:col-span-1 mb-6 lg:mb-0">
                <label htmlFor="">Email</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="lg:col-span-1 mb-6 lg:mb-0">
            <label htmlFor="">Project Topic</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="What is your group project topic"
                value={projectTopic}
                onChange={(e)=>setProjectTopic(e.target.value)}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-5 mt-3">
            <div className="lg:col-span-1 col-span-3">
                <label htmlFor="">Category</label>
            
              <select name="" className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded" placeholder="Category" value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                <option disabled  value="">Select Category</option>
                
                <option value="1">
                    1
                </option>
                <option value="2">
                    2
                </option>
                <option value="3">
                    3
                </option>

              </select>
            </div>
            <div className="lg:col-span-1 col-span-2">
            <label htmlFor="">Group</label>
            <select
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Select"
                value={groupSize}
                onChange={(e)=>setGroupSize(e.target.value)}
              >
              <option disabled value="select">Size</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              
              
            </div>
            
          </div>
          <p className=" text-secondary-300 italic mt-3">Please review your registration details before submitting</p>
          <div className="flex items-center mt-3">
  <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-green-500 align-top" checked={privacyPolicy}
                onChange={(e)=>setPrivacyPolicy(e.target.checked)}/>
  <label htmlFor="checkbox" className="ml-2">I agreed with the event terms and conditions
  and privacy policy</label>
  
</div>
<button type="submit" className="mt-6 text-center px-16 py-3  primarys text-sm rounded-sm">
              Register
           </button> 
          </form>
        </div>
      </div>
    </div>
  );
}
