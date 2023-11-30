import mansit from "../assets/images/mansit.png";
import walk from "../assets/images/walk.png";
import walk2 from "../assets/images/walk2.png";

export default function Register() {
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
          <div className="lg:grid lg:grid-cols-2 mt-6">
            <div className="lg:col-span-1 mb-6 lg:mb-0">
                <label htmlFor="">Team name</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Enter the name of your group"
              />
            </div>
            <div className="lg:col-span-1 mb-6 lg:mb-0">
            <label htmlFor="">Phone</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Enter your phone number"
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
              />
            </div>
            <div className="lg:col-span-1 mb-6 lg:mb-0">
            <label htmlFor="">Project Topic</label>
            <input
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="What is your group project topic"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-5 mt-3">
            <div className="lg:col-span-1 col-span-3">
                <label htmlFor="">Category</label>
            
              <select name="" className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded" placeholder="Category" id="">
                <option disabled selected value="">Select Category</option>
                
                <option value="">
                    Beginner
                </option>
                <option value="">
                    Intermediate
                </option>
                <option value="">
                    Advanced
                </option>

              </select>
            </div>
            <div className="lg:col-span-1 col-span-2">
            <label htmlFor="">Group</label>
            <select
                type="text"
                className="mt-2 w-[95%] bg-secondary-500 py-2 px-3 text-white border rounded"
                placeholder="Select"
              >
              <option disabled selected value="select">Size</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              </select>
              
              
            </div>
            
          </div>
          <p className=" text-secondary-300 italic mt-3">Please review your registration details before submitting</p>
          <div class="flex items-center mt-3">
  <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-green-500 align-top"/>
  <label for="checkbox" class="ml-2">I agreed with the event terms and conditions
  and privacy policy</label>
  
</div>
<p className="mt-6 text-center"><a href="" className="px-16 py-3  primarys text-sm rounded-sm  mt-7">
              Register
            </a></p> 
        </div>
      </div>
    </div>
  );
}
