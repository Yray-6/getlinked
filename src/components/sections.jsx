import countdown from "../assets/images/Countdown time.png";
import manglass from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import chain from "../assets/images/chain-9365116-7621444.png";
import bomb from "../assets/images/1f4a5.png";
import creative from "../assets/images/Creative 1.png";
import metrix from "../assets/images/metrix 1.png";
import starss from "../assets/images/Image 1.png";
import purple from "../assets/images/Purple-Lens-Flare-PNG.png";
import curve from "../assets/images/Vector 4.png";
import star from "../assets/images/star.png";
import bigidea from "../assets/images/the big idea 1.png";
import starsmall from "../assets/images/sata gra.png";
import starsmaller from "../assets/images/star pu.png";
import arrow from "../assets/images/arrow.png";
import crossleg from "../assets/images/7450159 1.png";
import book from "../assets/images/8046554 1.png";
import eclipse from "../assets/images/Ellipse 2.png";
import think from "../assets/images/cwok_casual_21 1.png";
import trophy from "../assets//images/9486889 1.png";
import silver from "../assets/images/silver_medal 1.png";
import gold from "../assets/images/gold_medal 1.png";
import bronze from "../assets/images/bronze_medal 1.png";
import liberty from "../assets/images/Liberty company logo white colour.png";
import liberty2 from "../assets/images/liberty2.png";
import whisper from "../assets/images/wisper logo white.png";
import winwise from "../assets/images/Winwise logo White colour 1.png";
import paybox from "../assets/images/Paybox.png";
import visualplus from "../assets/images/Vizual Plus.png";
import tick from "../assets/images/list terms.png";
import lock from "../assets/images/lock.png";
import manlock from "../assets/images/08 1.png";
import linkden from "../assets/images/ri_linkedin-fill.png";
import instagram from "../assets/images/mdi_instagram.png";
import facebook from "../assets/images/Vector (2).png";
import x from "../assets/images/Vector (1).png";
import location from "../assets/images/Vector (3).png";
import call from "../assets/images/Group.png";
import question from "../assets/images/_.png";
import plus from "../assets/images/+.png";
import { useState } from "react";

function Sections() {
  const [open, setOpen] = useState([false, false, false, false, false, false]);

  const toggleMenu = (index) => {
    const updatedOpenState = [...open];
    updatedOpenState[index] = !updatedOpenState[index];
    setOpen(updatedOpenState);
  };

  return (
    <>
      <div
        id="overview"
        className="lg:pl-28 lg:pr-0 px-7 pt-52  border-b border-gray-800  lg:pb-[80px] relative text overflow-x-clip"
      >
        <p className="text-white lg:text-3xl text-[1.0rem] md:text-[1.5rem] italic absolute font-bold lg:top-[18%] md:top-[-470px] top-[10%] right-[2%]">
          Igniting a Revolution in HR Innovation
        </p>
        <img
          src={curve}
          alt=""
          className="absolute lg:top-[23%] top-[12.5%] md:top-[-435px] right-[3%] lg:w-72 md:w-32  w-28"
        />
        <div className="text-white lg:grid lg:grid-cols-2">
          <div className=" lg:col-span-1 text-center lg:text-left">
            <p className="lg:text-6xl text-3xl  md:max-w-none lg:max-w-none font-bold text-center lg:pr-0 pr-9 md:pr-0 lg:text-left lg:mt-24  relative leading-tight">
              getlinked Tech <br /> Hackathon{" "}
              <span className="text-secondary-300 pr-12">1.0</span>
              <img
                src={chain}
                alt=""
                className="absolute lg:top-[3.6rem] top-[50%] lg:w-[3.7rem] w-9 lg:left-[410px] right-[15%] md:right-[30%]"
              />
              <img
                src={bomb}
                alt=""
                className="absolute lg:top-[3.6rem] top-[50%] w-8 lg:w-[3.7rem] right-[7%] md:right-[25%] lg:left-[460px]"
              />
              <img
                src={creative}
                alt=""
                className="absolute lg:-top-[39px] lg:w-10 w-5 top-[-20%] lg:left-[350px] right-[23%] md:right-[35%]"
              />
              <img
                src={star}
                alt=""
                className="absolute lg:top-[-100%] lg:left-[10%] top-[-20%] left-[22%] w-3 lg:w-5"
              />
              <img
                src={star}
                alt=""
                className="absolute lg:hidden top-[-15%] right-[15%] lg:right-auto w-2 brightness-50"
              />
              <img
                src={star}
                alt=""
                className="absolute lg:hidden top-[230%] right-[20%] w-3 brightness-50"
              />
            </p>
            <p className=" lg:w-96 text-base lg:text-left  text-center mt-6  leading-normal">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className=" px-12 font-semibold py-3 primarys text-sm mt-8 rounded-sm">
              Register
            </button>

            <img
              src={countdown}
              alt=""
              className=" lg:w-60 w-56 mt-12 ml-[15%] md:mb-12 md:ml-[35%] lg:ml-0"
            />
            <img
              src={purple}
              alt=""
              className=" absolute -z-10 blur-3xl -top-10  h-100 lg:-left-[190px] left-[-170px]  w-[800px]"
            />
          </div>
          <div className=" lg:col-span-1 mt-10 lg:mt-0 relative">
            <img
              src={manglass}
              alt=""
              className=" grayscale lg:mt-5  lg:w-[828px] md:w-[600px] right-[1%] lg:absolute -z-20"
            />
            <img
              src={starss}
              alt=""
              className="absolute right-[4%] lg:top-[1%] top-[-15%] w-[630px] lg:w-[550px]"
            />
            <img
              src={purple}
              alt=""
              className="absolute -z-10 w-[900px] right-0 -top-[10px] blur-xl"
            />

            <img
              src={star}
              alt=""
              className="absolute lg:top-[220px] lg:right-[620px] hidden lg:block -z-30 w-6"
            />
            <img
              src={star}
              alt=""
              className="absolute lg:top-[620px] lg:left-[500px] hidden lg:block left-[21%] top-[-130%] lg:w-6 w-4"
            />
          </div>
        </div>
      </div>
      <div className="lg:grid overflow-x-clip lg:grid-cols-2 mt-16 lg:px-28 px-7 text-white pb-16 border-b border-gray-700">
        <div className=" col-span-1 relative">
          <img
            src={bigidea}
            alt=""
            className="w-[530px]  lg:pl-16 md:ml-20 lg:ml-0 px-8"
          />
          {/* <p className=" lg:text-2xl text-lg  font-bold text-center absolute z-10 lg:top-52 top-[45%] left-[39%] md:left-[42%] md:text-2xl lg:left-[43%]">
            The Big <br /> idea!
          </p> */}
          <img
            src={arrow}
            alt=""
            className="absolute lg:top-[400px] w-12 lg:w-20 top-[110%] left-[43%] lg:left-[500px]"
          />
          <img
            src={starsmall}
            alt=""
            className="absolute lg:top-[150px] top-[31%] lg:w-5 w-3 left-[5%] lg:left-[20px]"
          />
        </div>
        <div className="col-span-1 text-center lg:text-left lg:pl-16 relative">
          <p className="lg:text-3xl text-[1.3rem] font-extrabold lg:w-96 mt-32 mb-5">
            {" "}
            Introduction to getlinked <br />{" "}
            <span className="text-secondary-300">tech Hackathon 1.0</span>{" "}
          </p>
          <p className="text-sm leading-7 px-5 lg:px-0">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src={starsmaller}
            alt=""
            className="absolute lg:top-[150px] top-[10%] lg:w-6 w-3 right-[5%] lg:right-[20px]"
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:px-28 px-7 lg:text-left text-center  relative border-b overflow-x-clip  border-gray-700">
        <div className="col-span-1 text-white lg:pl-16 lg:pr-6 mb-16 lg:mb-0">
          <p className="lg:text-3xl text-[1.3rem] font-extrabold lg:w-52 lg:mt-36 mt-9 mb-5">
            Rules and <br />
            <span className=" text-secondary-300">Guidelines</span>
          </p>
          <p className="text-sm leading-7 px-5 lg:px-0">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src={purple}
            alt=""
            className="absolute  w-[800px] top-[-50px] lg:left-[-100px] left-[-150px] -z-30 blur-xl"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[400px] lg:left-[650px] top-[95%] left-[40%] w-3  lg:w-5"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[120px] top-[56%] right-[10%]  brightness-50 lg:left-[430px] -z-40 w-3 lg:w-5"
          />
        </div>
        <div className="lg:col-span-1">
          <img src={crossleg} alt="" className="" />
          <img
            src={purple}
            alt=""
            className="absolute -z-10 lg:right-[-400px] right-[-200px] top-[150px] w-[800px] blur-3xl"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:hidden left-[5%] top-[22%]  w-3"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:px-28 px-7 lg:pt-16 pb-32 text-white lg:text-left text-center relative border-b border-gray-700 overflow-x-clip">
        <div className="col-span-1 mt-28  lg:mt-36">
          <img src={book} alt="" className="w-[100%]" />
          <img
            src={starsmaller}
            alt=""
            className="absolute lg:top-[80px] top-[20px]  w-3 lg:w-5 left-[50%] lg:left-[220px]"
          />
          <img
            src={eclipse}
            alt=""
            className="absolute lg:top-[160px] top-[7%] left-[19%] lg:left-[173px] -z-10 lg:w-32 w-16"
          />
          <img
            src={purple}
            alt=""
            className="absolute -z-10 lg:top-[230px] lg:left-[-200px] left-[-190px] top-[7%] blur-3xl w-[700px]"
          />
          <img
            src={star}
            alt=""
            className="w-5 -z-30  absolute top-[430px] left-[420px]"
          />
          <img
            src={star}
            alt=""
            className="w-5 -z-30  absolute top-[670px] left-[620px]"
          />
        </div>
        <div className=" col-span-1 lg:ml-10 px-7">
          <p className="lg:text-3xl text-[1.3rem] font-extrabold  mb-5">
            Judging Criteria
            <br />
            <span className=" text-secondary-300">Key attributes</span>
          </p>
          <p className="leading-6 mb-4 text-sm">
            <span className="text-primary font-bold">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="leading-6 mb-4 text-sm">
            <span className="text-primary font-bold">Functionality:</span>{" "}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="leading-6 mb-4 text-sm">
            <span className="text-primary font-bold">
              Impact and Relevance:{" "}
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="leading-6 mb-4 text-sm">
            <span className="text-primary font-bold">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="leading-6 mb-4 text-sm">
            <span className="text-primary font-bold">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <button className=" px-12 font-semibold py-3 primarys text-sm mt-8 rounded-sm">
            Read More
          </button>
          <img
            src={purple}
            alt=""
            className="absolute lg:top-[450px] top-[70%] -z-10 blur-3xl w-[700px] right-[-200px] lg:right-[-100px]"
          />
        </div>
      </div>
      <div
        id="faqs"
        className="grid overflow-x-clip lg:grid-cols-10 lg:px-28 px-7 lg:pt-24 relative text-white border-b border-gray-700 pb-16"
      >
        <div className="col-span-4 lg:pl-16 mt-20">
          <p className="lg:text-3xl text-[1.3rem] font-extrabold text-center lg:text-left  mb-5">
            Frequently Ask
            <br />
            <span className=" text-secondary-300">Question</span>
          </p>
          <p className="text-sm leading-6 text-center lg:text-left mb-10">
            We got answers to the questions that you might <br /> want to ask
            about getlinked Hackathon 1.0
          </p>

          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(0)} className="text-sm  mb-1 flex ">
              <span>
                {" "}
                Can I work on a project I started before the hackathon?
              </span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[0] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[0] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>I dont think i'll do that .. Y-Ray doesnt cheat</p>
            </div>{" "}
          </div>
          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(1)} className="text-sm  mb-1 flex ">
              <span> What happens if I need help during the hackathon?</span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[1] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[1] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>Yray na Idan .. I work alone!!</p>
            </div>{" "}
          </div>
          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(2)} className="text-sm  mb-1 flex ">
              <span> What happens if I don't have an idea for a project?</span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[2] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[2] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>lol.. are we playing here? Yray is an idea bank</p>
            </div>{" "}
          </div>
          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(3)} className="text-sm  mb-1 flex ">
              <span> Can I join a team or do I have to come with one?</span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[3] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[3] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>
                Any team will be priviledged to have me . but i'll work alone
              </p>
            </div>{" "}
          </div>
          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(4)} className="text-sm  mb-1 flex ">
              <span> What happens after the hackathon ends</span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[4] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[4] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>I go home with my trophy and do my victory dance</p>
            </div>{" "}
          </div>
          <div className="border-b relative border-secondary-300 py-4 overflow-hidden">
            <p onClick={() => toggleMenu(5)} className="text-sm  mb-1 flex ">
              <span>
                {" "}
                Can I work on a project I started before the hackathon?
              </span>
              <img
                src={plus}
                alt=""
                className={`w-3 h-3 ml-5 right-0 absolute mt-1 transform ${
                  open[5] ? "rotate-45" : "rotate-0"
                } transition-transform duration-100 ease-in-out`}
              />{" "}
            </p>
            <div
              className={`${
                open[5] ? "h-auto py-3" : "h-0 overflow-hidden"
              } transition-max-height duration-100 ease-out`}
            >
              <p>this is an accordion lets test it!!!!!</p>
            </div>{" "}
          </div>
          <img
            src={starsmaller}
            alt=""
            className="absolute lg:top-[120px] lg:left-[150px] top-[5%] left-[10%] w-4"
          />
        </div>
        <div className="lg:col-span-6 relative pl-10 mt-10 lg:mt-0  lg:ml-5">
          <img src={think} alt="" className="lg:w-[90%] w-[100%] mt-16" />
          <img
            src={starsmall}
            alt=""
            className="absolute lg:top-[25px] lg:right-[370px] top-[9%] w-3 lg:w-6 right-[45%]"
          />
          <img
            src={starsmall}
            alt=""
            className="absolute lg:top-[180px] lg:right-[530px] top-[45%] w-3 lg:w-6 left-[25%]"
          />
          <img
            src={star}
            alt=""
            className=" brightness-50 absolute lg:top-[380px] lg:right-[610px] w-3 right-[85%]   top-[60%] lg:w-5"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[630px] lg:right-[200px] w-4 lg:w-6 top-[95%] right-[20%]"
          />
          <img
            src={question}
            alt=""
            className="absolute lg:top-[5%] lg:right-[44%] lg:w-10 w-8 top-[20px] right-[50%]"
          />
          <img
            src={question}
            alt=""
            className="absolute lg:top-[-5%] top-[60px] lg:w-16 w-6 -z-10 lg:right-[58%] right-[30%]"
          />
          <img
            src={question}
            alt=""
            className="absolute lg:top-[5%] top-[60px]  lg:w-10 w-6 lg:right-[75%] right-[75%]"
          />
        </div>
      </div>
      <div
        id="timeline"
        className="text-white overflow-x-hidden lg:px-44 px-7 lg:py-20 "
      >
        <div className="mb-20 text-center">
          <p className="lg:text-3xl font-extrabold text-[1.3rem] mt-16 lg:mt-0  mb-5">
            Timeline
          </p>
          <p className="leading-6 text-sm">
            Here is the breakdown of the time we anticipate <br />
            using for the upcoming event.
          </p>
        </div>
        <div className=" lg:grid hidden grid-cols-10 relative">
          <div className="col-span-4 text-right ">
            <div className="mb-20">
              <p className="text-secondary-300 mt-24 mb-2 text-xl font-bold">
                Hackathon Announcement
              </p>
              <p className="text-sm leading-6">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300 mt-24  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300  mb-2  text-xl font-bold">
                Teams Registration ends
              </p>
              <p className="text-sm leading-6 pl-20">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300  mb-2 text-xl font-bold">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="text-sm leading-6 pl-20">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="mb-7">
              <p className="text-secondary-300  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="col-span-2 text-center ">
            <div className="h-32 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              1
            </div>
            <div className="h-20 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              2
            </div>
            <div className="h-20 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              3
            </div>
            <div className="h-20 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              4
            </div>
            <div className="h-24 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              5
            </div>
            <div className="h-16 w-5 ml-24 border-l-4 border-secondary-300"></div>
            <div className="primarys rounded-full w-10 ml-20 p-2 font-bold my-2">
              6
            </div>
          </div>
          <div className="col-span-4">
            <div className="mb-20">
              <p className="text-secondary-300 mt-32  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300 mb-2  text-xl font-bold">
                Teams Registration begins
              </p>
              <p className="text-sm leading-6 ">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300 mb-2 pr-10  text-xl font-bold">
                Announcement of the accepted teams and ideas
              </p>
              <p className="text-sm leading-6">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300  text-xl font-bold">
                November 18, 2023
              </p>
            </div>
            <div className="mb-20">
              <p className="text-secondary-300 mb-3  text-xl font-bold">
                Demo Day
              </p>
              <p className="text-sm leading-6 ">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
          <img src={starsmaller} alt="" className="absolute left-[170px] w-6" />
          <img
            src={star}
            alt=""
            className="absolute right-[120px] top-[390px] w-5"
          />
          <img
            src={star}
            alt=""
            className="absolute  top-[820px] brightness-50 w-5"
          />
        </div>
        <div className=" relative pb-9 lg:hidden px-3">
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                1
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300  mb-2 text-base font-bold">
                Hackathon Announcement
              </p>
              <p className="text-sm leading-6 md:text-base mb-2 md:mb-10">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <p className="text-secondary-300 md:mb-8  text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                2
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300  mb-2 text-base font-bold">
                Teams Registration begins
              </p>
              <p className="text-sm leading-6 md:text-base mb-2 md:mb-12">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <p className="text-secondary-300   text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 mb-2">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                3
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300  mb-2 text-base font-bold">
                Teams Registration ends
              </p>
              <p className="text-sm leading-6 md:text-base mb-6 md:mb-16">
                Interested Participants are no longer Allowed to register
              </p>
              <p className="text-secondary-300   text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                4
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300   text-base font-bold">
                Announcement of the accepted teams and ideas
              </p>
              <p className="text-sm md:text-base leading-6 mb-1 md:mb-12">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <p className="text-secondary-300   text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                5
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300  mb-1 text-base font-bold">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="text-sm md:text-base leading-6 mb-3 md:mb-16">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <p className="text-secondary-300   text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <div className="h-28 w-5 ml-4  border-l-4 border-secondary-300"></div>
              <div className="primarys rounded-full w-8  pl-3 p-1 font-bold my-2">
                6
              </div>
            </div>
            <div className="mb-8 pl-4 col-span-9">
              <p className="text-secondary-300   text-base font-bold">
                Demo Day
              </p>
              <p className="text-sm md:text-base leading-6 md:mb-12 mb-1">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <p className="text-secondary-300   text-base font-bold">
                November 18, 2023
              </p>
            </div>
          </div>

          <img
            src={starsmaller}
            alt=""
            className="absolute left-[70px] top-[-5%] w-4"
          />
          <img
            src={star}
            alt=""
            className="absolute right-[70px] top-[320px] w-4"
          />
          <img
            src={star}
            alt=""
            className="absolute  top-[1080px] brightness-50 w-5"
          />
        </div>
      </div>
      <div className="text-white lg:px-28 px-7 bg-secondary-50 text-center lg:text-left pb-40 pt-28 md:pt-16 overflow-x-clip">
        <div className="lg:grid lg:grid-cols-2 text-white ">
          <div className="col-span 1"></div>
          <div className="col-span-1">
            <p className="lg:text-3xl text-[1.3rem] font-extrabold  mb-5">
              Prizes and
              <br />
              <span className=" text-secondary-300">Rewards</span>
            </p>
            <p className="text-sm leading-6">
              Highlight of the prizes or rewards for winners and <br /> for
              participants.
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-5 mt-20">
          <div className="col-span-2 lg:pr-3 relative">
            <img
              src={trophy}
              alt=""
              className="w-[100%] z-20 px-5 md:px-16 relative"
            />
            <img
              src={star}
              alt=""
              className="absolute lg:top-[430px] w-4 top-[250px] left-[40px] lg:left-[180px]"
            />
            <img
              src={star}
              alt=""
              className="absolute lg:top-[300px] top-[350px] w-4 left-[300px] lg:left-[360px]"
            />
            <img
              src={starsmaller}
              alt=""
              className="absolute lg:top-[-280px] top-[-250px] left-[50px] lg:left-[150px] w-3 lg:w-5"
            />
            <img
              src={purple}
              alt=""
              className="absolute lg:top-[-40px] lg:left-[-50px] top-[-70%] left-[-40%] blur-3xl "
            />
          </div>
          <div className="col-span-3 grid grid-cols-3 lg:mb-0 mt-40 md:mt-72 px-4 lg:px-8 mb-10  lg:mt-40 lg:pl-2">
            <div className="col-span-1 relative">
              <div className="mr-2 md:mx-auto md:w-[80%]">
                <img
                  src={silver}
                  alt=""
                  className="absolute z-10 w-[90%] md:w-[75%] md:top-[-35%] mx-auto  top-[-30%]"
                />
                <div className="px-[5%] pt-[50%] pb-[30%] rounded-lg text-center border border-secondary-300 bg-secondary-400">
                  <p className="lg:text-3xl text-sm md:text-2xl font-semibold ">2nd</p>
                  <p className="lg:text-xl text-sm font-semibold md:text-2xl mb-2">Runner</p>
                  <p className="text-secondary-300 lg:text-2xl md:text-2xl text-xs font-bold">
                    N300,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative">
              <div className="mx-auto">
                <img src={gold} alt="" className="absolute z-10 max-w-[130%] md:max-w-[120%] lg:w-[100%] md:left-[-10%] md:top-[-60%] lg:top-[-50%] lg:left-0 left-[-15%] top-[-45%]" />
                <div className=" px-[15%] pt-[50%] pb-[20%] lg:px-[5%] rounded-lg text-center border border-secondary-200 bg-secondary-500">
                  <p className="lg:text-3xl text-sm mt-2 md:text-2xl font-semibold">1st</p>
                  <p className="lg:text-xl text-sm md:text-2xl font-semibold mb-6">Runner</p>
                  <p className="text-secondary-200 text-sm md:text-2xl lg:text-2xl font-bold">
                    N400,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative">
              <div className="ml-2 md:mx-auto md:w-[80%]">
                <img
                  src={bronze}
                  alt=""
                  className="absolute z-10 w-[90%] md:w-[75%] md:top-[-35%] mx-auto top-[-30%]"
                />
                <div className=" px-[22%] pt-[50%] pb-[30%] rounded text-center border border-secondary-300 bg-secondary-400">
                  <p className="lg:text-3xl text-sm md:text-2xl font-bold">3rd</p>
                  <p className="lg:text-xl text-sm md:text-2xl font-bold mb-2">Runner</p>
                  <p className="text-secondary-300 md:text-2xl lg:text-2xl text-xs font-bold">
                    N150,000
                  </p>
                </div>
              </div>
            </div>

            <img
              src={star}
              alt=""
              className="w-5 absolute hidden lg:block top-[3%] left-[35px]"
            />
            <img
              src={star}
              alt=""
              className="w-5 absolute hidden lg:block right-[80px] top-[100px]"
            />
            <img
              src={star}
              alt=""
              className="w-5 brightness-50 lg:right-[280px] right-[100px] lg:top-[450px] top-[290px] absolute"
            />
            {/* <img
              src={purple}
              alt=""
              className="blur-xl absolute right-[-350px]"
            /> */}
          </div>
        </div>
      </div>
      <div className="text-white pt-24 pb-40 overflow-x-clip border-b border-gray-700 px-6 lg:px-28 relative">
        <div className="text-center">
          <p className="lg:text-3xl text-[1.3rem] font-extrabold mb-3  lg:mb-5">
            Partners and Sponsors
          </p>
          <p className="text-sm  leading-6 mb-12">
            Getlinked Hackathon 1.0 is honored to have the following major{" "}
            <br />
            companies as its partners and sponsors
          </p>
        </div>
        <div className=" border-secondary-300 border mt-20 rounded md:mx-5 py-10 px-10 lg:px-44 lg:py-28 relative">
          <div className="grid grid-cols-11 ">
            <div className="col-span-3">
              <div className="lg:border-b-4 border-b-2 border-secondary-300 h-12 md:h-[4.7rem] lg:h-40 px-5 md:px-[3.5em]  lg:pl-9 pb-10 lg:py-5">
                <img src={liberty} alt="" />
              </div>
              <div className="lg:pt-12 pt-5 lg:pl-9 lg:pr-0 px-5 md:px-[3.5em] lg:h-40">
                <img src={whisper} alt="" />
              </div>
              <div></div>
            </div>

            <div className="col-span-1 lg:pl-8 pl-3 md:pl-6">
              <div className="lg:border-l-4 border-l-2 border-secondary-300 lg:h-32 md:h-16 h-10 lg:mb-16 mb-5"></div>
              <div className="lg:border-l-4 border-l-2 border-secondary-300 lg:h-32 md:h-16 h-10"></div>
            </div>

            <div className="col-span-3 justify-center">
              <div className="lg:border-b-4 border-b-2 md:px-[2em] md:pt-[0.5rem]  border-secondary-300 md:h-[4.7rem]  h-12 lg:h-40  pb-1 lg:pt-16 pt-2">
                <img src={liberty2} alt="" />
              </div>
              <div className="lg:pt-12 pt-5 lg:pl-9 pl-4 md:px-[2rem] lg:h-40">
                <img src={paybox} alt="" />
              </div>
            </div>

            <div className="col-span-1 lg:pl-8 pl-3">
              <div className="lg:border-l-4 border-l-2 border-secondary-300 h-10 md:h-16 lg:h-32 lg:mb-16 mb-5"></div>
              <div className="lg:border-l-4 border-l-2 border-secondary-300 h-10 md:h-16 lg:h-32"></div>
            </div>
            <div className="col-span-3">
              <div className="lg:border-b-4 border-b-2 border-secondary-300 md:px-[3.2rem] lg:pl-9 md:h-[4.7rem] px-4 lg:pr-0 h-12 lg:h-40  pb-1 lg:pt-4 pt-0">
                <img src={winwise} alt="" />
              </div>
              <div className="lg:pt-12 pt-5 lg:pl-9 md:px-[2rem] px-2 lg:pr-0 md:h-[4.7rem] lg:h-40">
                <img src={visualplus} alt="" />
              </div>
            </div>
          </div>
          <img
            src={starsmall}
            alt=""
            className="absolute top-[50px] left-[650px] w-5"
          />
          <img
            src={starsmaller}
            alt=""
            className="absolute lg:top-[-40px] top-[0px] left-[50px] lg:w-6 w-3"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[450px] left-[630px] w-5"
          />
        </div>
        <img
          src={purple}
          alt=""
          className="absolute lg:left-[-550px] lg:top-[-100px] left-[-200px] top-[-80px] -z-10 blur-3xl"
        />
        <img
          src={purple}
          alt=""
          className="absolute lg:right-[-300px] lg:top-[200px] right-[-70px] -z-10 blur-3xl"
        />
      </div>
      <div className="grid lg:grid-cols-2 relative lg:my-0 text-center lg:text-left overflow-x-clip text-white lg:px-36 px-7 pt-24 pb-44 lg:pb-32">
        <div className="col-span-1 lg:mt-16 mt-6">
          <div className="">
            <p className="lg:text-3xl text-[1.3rem] font-extrabold   mb-5">
              Privacy Policy and <br />{" "}
              <span className="text-secondary-300">Terms</span>
            </p>
            <p className="text-sm mb-5">Last updated on September 12, 2023</p>
            <p className="text-sm leading-6 lg:mb-8 mb-12">
              Below are our privacy & policy, which outline a lot of goodies.{" "}
              <br />
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="border border-secondary-300 relative z-10 lg:px-16 px-6 mx-2 lg:mx-0 pt-16 pb-8 md:mb-[10%] rounded bg-secondary-400">
            <p className="text-sm leading-6 mb-4">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className="text-lg text-secondary-300 font-bold mb-3">
              Licensing Policy
            </p>
            <p className="font-bold">Here are terms of our Standard License:</p>
            <div className=" align-top text-left flex mt-5 ">
              <div className="w-[50px]">
                {" "}
                <img src={tick} alt="" className="mt-1" />
              </div>

              <p className="text-sm leading-6">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>

            <div className=" align-top text-left flex mt-5">
              <div className="w-[50px]">
                {" "}
                <img src={tick} alt="" className="mt-1" />
              </div>

              <p className="text-sm leading-6">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="text-center ">
              <button className="px-12 font-semibold py-3 primarys text-sm mt-10 rounded-sm ">
                Read More
              </button>
            </div>
          </div>
          <img
            src={star}
            alt=""
            className="absolute brightness-50 lg:w-5 w-4 lg:left-[32%] lg:top-[16%] left-[70%] top-[5%]"
          />
          <img
            src={starsmaller}
            alt=""
            className="absolute w-4 lg:left-[50%] left-[80%] lg:top-[26%] top-[21%]"
          />
          <img
            src={starsmaller}
            alt=""
            className="absolute w-5 lg:left-[5%] left-[0%] lg:top-[79%] top-[51%]"
          />
          <img
            src={purple}
            alt=""
            className="absolute left-[-390px] blur-3xl w-[700px]  top-[50%]"
          />
        </div>
        <div className="col-span-1 relative px-5">
          <img src={lock} alt="" className="lg:w-[80%] md:w-[60%]  lg:ml-[15%] mt-10" />
          <img
            src={manlock}
            alt=""
            className="absolute lg:top-[26%] top-[40%] w-[80%] md:w-[60%] left-[10%]"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[22%] lg:right-[22%] top-[40%] right-[20%] w-4"
          />
          <img
            src={starsmall}
            alt=""
            className="absolute lg:top-[65%] lg:right-[62%] top-[35%] left-[-4%] w-4 lg:w-3"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[72%] lg:right-[74%] top-[110%] right-[70%] w-3"
          />
          <img
            src={star}
            alt=""
            className="absolute lg:top-[79%] lg:right-[5%] top-[120%] right-[5%] w-4 brightness-50"
          />
        </div>
      </div>
      <div className="text-white pt-24 pb-10 bg-secondary-50 px-9 md:mt-40 lg:mt-0 lg:px-36">
        <div className="lg:grid lg:grid-cols-10 ">
          <div className="col-span-5 lg:w-[80%] mb-6 lg:mb-0">
            <p className="lg:text-3xl text-xl font-bold mb-3">
              get<span className="text-secondary-300">linked</span>
            </p>
            <p className="text-sm leading-6 lg:mb-16 mb-7">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex">
              <p className="border-r-2 text-sm border-secondary-300 pr-5">
                Terms of Use
              </p>
              <p className="ml-5 text-sm">Privacy Policy</p>
            </div>
          </div>
          <div className="col-span-3 lg:pl-10 mb-6 lg:mb-0">
            <p className="text-secondary-300 mb-4">Useful Links </p>
            <p className="mb-4 text-sm">Overview</p>
            <p className="mb-4 text-sm">Timeline</p>
            <p className="mb-4 text-sm">FAQs</p>
            <p className="mb-4 text-sm">Register</p>
            <div className="flex">
              <p className="text-secondary-300 text-sm">Follow us</p>

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
          <div className="col-span-2 lg:pl-10 mb-6 lg:mb-0">
            <p className="text-secondary-300 mb-4">Useful Links </p>
            <div className="flex">
              <div className="mr-2">
                <img src={call} alt="" className="mt-1" />
              </div>

              <p className="mb-4 text-sm">+234 8130954077</p>
            </div>
            <div className="flex">
              <div className="mr-2">
                <img src={location} alt="" className="mt-1" />
              </div>
              <p className="mb-4 text-sm">
                27,Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-sm">All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </>
  );
}

export default Sections;
