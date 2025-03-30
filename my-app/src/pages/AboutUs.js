import React from "react";
import { motion } from "framer-motion";
import bgPhoto from "../assets/bgPhoto.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="text-center mt-5">
        {/* About Us Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start"
        >
          <div className="text-left bg-[#e8a087] w-80 rounded-r-2xl pl-8 p-4 text-2xl text-white font-bold">
            ABOUT US
          </div>
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <div className="text-white bg-[#336274] px-4 py-2 rounded-md inline-block text-2xl font-bold scale-125 ">
            Mission Statement
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="my-10 mx-auto text-2xl max-w-[800px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </motion.div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-[#adced5]  py-4"
        >
          <div className="pt-2">
            <div className="text-white bg-[#336274] px-4 py-2 rounded-md inline-block text-2xl font-bold scale-125 ">
              Our Team
            </div>
          </div>

          {/* Executives Section */}
          <div className="bg-[#336274]/40   pb-3">
            <div className="flex justify-start mt-8 mx-5">
              <div className="text-white bg-[#e1855a] px-4 py-2 rounded-md my-10 mx-16 text-2xl font-bold shadow scale-150">
                Executives
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-between my-8 relative ml-16">
              {/* Executive Member 1 */}
              <div className="flex items-center space-x-4 w-[45%] scale-120 group">
                <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                  <img
                    src="/myPhoto.jpg"
                    alt="Executive 1"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                    Name
                    {/* Hover Popup */}
                    <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vitae justo non velit facilisis pharetra. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Proin
                      vitae justo non velit facilisis pharetra. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Proin vitae
                      justo non velit facilisis pharetra.
                    </span>
                  </p>
                  <p className="text-xl text-gray-600">Role</p>
                </div>
              </div>
              {/* Executive Member 2 */}
              <div className="flex items-center space-x-4 w-[40%] group">
                <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                  Image
                </div>
                <div>
                  <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                    Name
                    {/* Hover Popup */}
                    <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vitae justo non velit facilisis pharetra. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Proin
                      vitae justo non velit facilisis pharetra. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Proin vitae
                      justo non velit facilisis pharetra.
                    </span>
                  </p>
                  <p className="text-xl text-gray-600">Role</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-between mt-20 mb-3 ml-16">
              {/* Executive Member 3 */}
              <div className="flex items-center space-x-4 w-[45%] group">
                <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                  Image
                </div>
                <div>
                  <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                    Name
                    {/* Hover Popup */}
                    <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vitae justo non velit facilisis pharetra. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Proin
                      vitae justo non velit facilisis pharetra. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Proin vitae
                      justo non velit facilisis pharetra.
                    </span>
                  </p>
                  <p className="text-xl text-gray-600">Role</p>
                </div>
              </div>
              {/* Executive Member 4 */}
              <div className="flex items-center space-x-4 w-[40%] group">
                <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                  Image
                </div>
                <div>
                  <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                    Name
                    {/* Hover Popup */}
                    <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vitae justo non velit facilisis pharetra. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Proin
                      vitae justo non velit facilisis pharetra. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Proin vitae
                      justo non velit facilisis pharetra.
                    </span>
                  </p>
                  <p className="text-xl text-gray-600">Role</p>
                </div>
              </div>
            </div>
          </div>
          {/* Officer section */}
          <div className="flex justify-start mt-8 mx-5">
            <div className="text-white bg-[#e1855a] px-4 py-2 rounded-md inline-block my-4  mx-16 text-xl font-bold shadow scale-150">
              Officers
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-between mt-10  ml-16">
            {/* Officer Member 1 */}
            <div className="flex items-center space-x-4 w-[45%] group">
              <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                Image
              </div>
              <div>
                <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                  Name
                  {/* Hover Popup */}
                  <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vitae justo non velit facilisis pharetra. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin vitae
                    justo non velit facilisis pharetra. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin vitae justo non
                    velit facilisis pharetra.
                  </span>
                </p>
                <p className="text-xl text-gray-600">Role</p>
              </div>
            </div>
            {/* Officer Member 2 */}
            <div className="flex items-center space-x-4 w-[40%] group">
              <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                Image
              </div>
              <div>
                <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                  Name
                  {/* Hover Popup */}
                  <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vitae justo non velit facilisis pharetra. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin vitae
                    justo non velit facilisis pharetra. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin vitae justo non
                    velit facilisis pharetra.
                  </span>
                </p>
                <p className="text-xl text-gray-600">Role</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-between mt-20  ml-16">
            {/* Officer Member 3 */}
            <div className="flex items-center space-x-4 w-[45%] group">
              <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                Image
              </div>
              <div>
                <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                  Name
                  {/* Hover Popup */}
                  <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vitae justo non velit facilisis pharetra. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin vitae
                    justo non velit facilisis pharetra. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin vitae justo non
                    velit facilisis pharetra.
                  </span>
                </p>
                <p className="text-xl text-gray-600">Role</p>
              </div>
            </div>
            {/* Officer Member 4 */}
            <div className="flex items-center space-x-4 w-[40%] group">
              <div className="w-[240px] h-[240px] bg-[#d9d9d9] rounded-full shadow flex items-center justify-center">
                Image
              </div>
              <div>
                <p className="text-4xl font-semibold relative cursor-pointer group-hover:text-[#336274]">
                  Name
                  {/* Hover Popup */}
                  <span className="absolute left-0 top-full mt-2 w-64 bg-[#336274] text-white text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 ease-in-out shadow-lg z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vitae justo non velit facilisis pharetra. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Proin vitae
                    justo non velit facilisis pharetra. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin vitae justo non
                    velit facilisis pharetra.
                  </span>
                </p>
                <p className="text-xl text-gray-600">Role</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div class="text-center">
          <div className="text-white bg-[#336274] px-4 py-2 rounded-md inline-block text-2xl font-bold my-10 scale-125">
            Our Journey
          </div>
          <div className="flex justify-center items-center my-8 mx-auto max-w-[900px]">
            {/* Past Section */}
            <div className="text-center mr-8 max-w-[400px]">
              <div className="font-semibold text-3xl">Past</div>
              <p className="text-gray-500 text-2xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.{" "}
              </p>
            </div>
            {/* Arrow Symbol */}
            <div className="text-4xl mx-4 ">â†’</div>{" "}
            {/* You can replace this with an SVG if needed */}
            {/* Goals Section */}
            <div className="text-center ml-8 max-w-[400px]">
              <div className="font-semibold text-3xl">Goals</div>
              <p className="text-gray-500 text-2xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
