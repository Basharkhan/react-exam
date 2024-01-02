import React from 'react';
import Heading from '../Heading';
import Container from '../Container';
import Paragraph from '../Paragraph';
import { FaHome } from "react-icons/fa";
import Flex from '../Flex';
import Button from '../Button';
import play from '../../assets/play.png';
import filter from '../../assets/filter.svg';
import Image from '../Image';
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from 'react';

const Banner = () => {
    const dropdown1 = useRef(null);
    const dropdown2 = useRef(null);
    const dropdown3 = useRef(null);
  
    const handleDropdown = (dropdownRef) => {
      if (dropdownRef.current.style.display === "block") {
        dropdownRef.current.style.display = "none";
      } else {
        dropdownRef.current.style.display = "block";
      }
    };

  return (
    <section className="bg-banner-background">
        <Container>
            <div className="">
                <div className="pt-[132px] pb-[190px]">
                    <Flex className="items-center gap-x-1">
                        <FaHome className="text-orange"/>
                        <Paragraph text="Real Estate Agency" className="font-nunito text-base font-normal text-gray-black"/>
                    </Flex>
                    <Heading text="Find Your #Dream# House By Us" className="font-poppins font-bold text-6xl text-black w-[513px] py-2"/>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing" className="font-nunito text-base font-normal text-gray1"/>
                    <Flex className="items-center gap-x-6">
                        <Button text="View Properties" className="bg-orange px-6 py-4 font-poppins text-white text-sm"/>
                        <Image src={play}/>
                    </Flex>
                </div>
            
                <div className="mb-[300px]">
                    <Flex className="items-cenhter bg-white shadow-lg py-[48px] px-[30px] gap-x-[30px]">
                        <div className="relative">
                            <Flex onClick={() => handleDropdown(dropdown1)} className="items-center gap-x-[100px] bg-white border-2 border-orange px-4 py-4 cursor-pointer">
                                <span className="font-nunito font bold text-base text-gray2">Choose Area</span>
                                <IoIosArrowDown className="text-orange"/>
                            </Flex> 

                            <div className="absolute top-full left-0 bg-orange text-white text-base w-full py-2 px-4 mt-2 hidden duration-500" ref={dropdown1}>
                                <ul>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Dhaka</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Khulna</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Sylet</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Rajshahi</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Magura</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="relative">
                            <Flex onClick={() => handleDropdown(dropdown2)} className="items-center gap-x-[100px] bg-white border-2 border-orange px-4 py-4 cursor-pointer">
                                <span className="font-nunito font bold text-base text-gray2 ">Property Status</span>
                                <IoIosArrowDown className="text-orange"/>
                            </Flex>

                            <div className="absolute top-full left-0 bg-orange text-white text-base w-full py-2 px-4 mt-2 hidden" ref={dropdown2}>
                                <ul>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Active</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Inactive</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Expired</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Sold</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Closed</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <Flex onClick={() => handleDropdown(dropdown3)} className="items-center gap-x-[100px] bg-white border-2 border-orange px-4 py-4 cursor-pointer">
                                <span className="font-nunito font bold text-base text-gray2 ">Property Type</span>
                                <IoIosArrowDown className="text-orange"/>
                            </Flex>               
                            <div className="absolute top-full left-0 bg-orange text-white text-base w-full py-2 px-4 mt-2 hidden duration-500" ref={dropdown3}>
                                <ul>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Flat</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Jungle</a></li>
                                    <li className="py-2 hover:pl-2 duration-500"><a href="#">Resort</a></li>                                
                                </ul>
                            </div>
                        </div>
                        <Flex>
                            <Image src={filter}/>
                        </Flex>
                        <Flex>
                            <Button text="FIND NOW" className="bg-orange py-[14px] px-[30px] font-poppins font-medium text-sm text-white"/>
                        </Flex>
                    </Flex>
                </div>            
            </div>
        </Container>
    </section>   
  )
}

export default Banner
