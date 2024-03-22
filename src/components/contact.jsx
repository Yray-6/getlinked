import linkden from "../assets/images/ri_linkedin-fill.png";
import instagram from "../assets/images/mdi_instagram.png";
import facebook from "../assets/images/Vector (2).png";
import x from "../assets/images/Vector (1).png";
import purple from "../assets/images/Purple-Lens-Flare-PNG.png";
import starsmall from "../assets/images/sata gra.png";
import starsmaller from "../assets/images/star pu.png";
import star from "../assets/images/star.png";
import { useState } from "react";
import axios from 'axios';


export default function Contact() {

    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try{

      const requestBody = {
          "email":email,
          "phone_number":phoneNumber,
          "first_name": firstName,
          "message": message
      }

      const headers = {
        'Content-Type':'application/json'
      }

      const baseUrl = 'https://backend.getlinked.ai';

      const response = await axios.post(`${baseUrl}/hackathon/contact-form`,requestBody,{headers});

        if(response.status==200){
          setEmail('');
          setFirstName('');
          setPhoneNumber('');
          setMessage('');

          alert('form submitted successfully');
        }
        else{
          console.error('Error submitting form:', response.statusText);
          alert('An error occurred while submitting the form. Please try again later.');
        }
      }
      catch(error){
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      }
    }

  return (
    <>
      <div className="lg:grid grid-cols-12 text-white hidden pt-32 px-48">
        <div className="col-span-5 mt-28 relative">
          <p className="text-2xl text-secondary-300 font-bold mb-5">
            Get in touch
          </p>
          <p className="leading-5 text-lg mb-4">
            contact <br /> information
          </p>
          <p className="leading-5 text-lg mb-4">
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p className="text-lg mb-4">Call Us : 07067981819</p>
          <p className="mb-4 text-lg">
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>
          <p className=" text-secondary-300 text-lg mb-2">Share on</p>
          <div className="flex">
            <div className="h-5 mx-2">
              <img src={instagram} alt="" />
            </div>
            <div className="h-5  mx-2 mt-1">
              <img src={x} alt="" />
            </div>
            <div className="h-5  mx-2">
              <img src={facebook} alt="" />
            </div>
            <div className="h-5">
              <img src={linkden} alt="" />
            </div>
          </div>
          <img
            src={purple}
            alt=""
            className="absolute top-[-50%] left-[-70%] -z-10 blur-xl"
          />
          <img src={starsmall} alt="" className="absolute top-[-15%]" />
        </div>

        <div className="col-span-7 relative mt-12">
          <div className=" bg-secondary-400 shadow-xl py-16 px-16 rounded-lg">
            <p className=" text-secondary-300 text-lg font-bold ">
              Questions or need assistance? <br /> Let us know about it!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="mt-5 w-[100%] bg-secondary-500 py-2 px-3 text-white border "
                placeholder="First Name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="mt-9 w-[100%] bg-secondary-500 py-2 px-3 text-white border "
                placeholder="Mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                type="text"
                className="mt-9 w-[100%] bg-secondary-500 py-2 px-3 text-white border "
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
              <textarea
                type="text"
                className="mt-9 w-[100%] bg-secondary-500 py-1 h-28 px-3 text-white border "
                placeholder="Message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <p className="text-center">
                <button type="submit" className=" px-12 font-semibold py-3 primarys text-sm mt-8 rounded-sm">
                  Submit
                </button>
              </p>
              <img
                src={purple}
                alt=""
                className="absolute top-[40%] right-[-30%] -z-10 blur-3xl"
              />
              <img
                src={star}
                alt=""
                className="absolute top-[96%] right-[-10%]"
              />
              <img
                src={star}
                alt=""
                className=" brightness-50 absolute top-[-10%] right-[0%]"
              />
              <img
                src={starsmaller}
                alt=""
                className="absolute top-[70%] w-6 left-[-2%]"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="lg:hidden pt-32 relative px-7 md:px-16 text-white ">
        <p className=" text-secondary-300 text-lg font-bold ">
          Questions or need <br /> assistance? <br /> Let us know about it!
        </p>
        <p className="font-semibold mt-5">
          Email us below to any question related <br /> to our event
        </p>
        <img
          src={star}
          alt=""
          className=" brightness-50 absolute top-[20%] w-4 right-[30%]"
        />
        <img
          src={starsmaller}
          alt=""
          className="absolute top-[12%] w-4 left-[45%]"
        />

        <img
          src={purple}
          alt=""
          className="absolute top-[5%] left-[-40%] -z-10 blur-3xl"
        />

        <input
          type="text"
          className="mt-9 w-[100%] rounded-md bg-secondary-500 py-2 px-3 outline-none placeholder:text-white text-white border-white border "
          placeholder="Team's name"
        />
        <input
          type="text"
          className="mt-9 w-[100%] rounded-md bg-secondary-500 outline-none placeholder:text-white py-2 px-3 text-white border "
          placeholder="First Name"
        />
        <input
          type="text"
          className="mt-9 w-[100%] rounded-md bg-secondary-500 outline-none placeholder:text-white py-2 px-3 text-white border "
          placeholder="Mail"
        />

        <textarea
          type="text"
          className="mt-9 w-[100%] rounded-md bg-secondary-500 outline-none placeholder:text-white py-1 h-28 px-3 text-white border "
          placeholder="Message"
        />
        <p className="text-center">
          <button className=" px-12 font-semibold py-3 primarys text-sm mt-8 rounded-sm">
            Submit
          </button>
        </p>

        <p className=" text-secondary-300 text-center mt-5 text-lg mb-2">
          Share on
        </p>
        <div className="flex justify-center">
          <div className="h-5 mx-2">
            <img src={instagram} alt="" />
          </div>
          <div className="h-5  mx-2 mt-1">
            <img src={x} alt="" />
          </div>
          <div className="h-5  mx-2">
            <img src={facebook} alt="" />
          </div>
          <div className="h-5">
            <img src={linkden} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
