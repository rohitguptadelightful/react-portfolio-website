import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Social Media Advertising</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Landing Page analysis & Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setup Campaign Goals as per your business objective</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create a Detailed Buyer Persona for your business</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Target Audience Research & Competitor Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A/B testing across the campaigns</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Install Facebook Pixel & Google Tags</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setup Ad group and Ad set</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Remarketing & Create a lookalike audience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Campaign Optimization & Reporting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setup YT Ads</p>
            </li>
          </ul>
        </article>
        {/* END OF Social Media Advertiser */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface using REACT as Front End.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Secure Server using Node (Express) as Back End.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MongoDB as Database.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Restful API.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tons of other frameworks (Next/Gatsby ETC).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>No template, unique web app built from SCRATCH.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services