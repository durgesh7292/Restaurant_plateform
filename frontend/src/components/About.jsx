import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='banner'>
          <div className='top'>
            <h1 className='heading'>ABOUT US</h1>
            <p>The only thing were serious about food.</p>
          </div>
          <p className='mid'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa magnam, debitis numquam, fugit asperiores minus ipsum voluptatum dolore
            officiis eligendi enim molestias maxime? Porro pariatur excepturi autem modi. Quam numquam modi, alias magni unde dolorum dignissimos vel
            tenetur molestias harum ad provident blanditiis distinctio sequi culpa inventore commodi quia nisi!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              {" "}
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className='banner'>
          <img src='/about.png' alt='about' />
        </div>
      </div>
    </section>
  );
};
export default About;
