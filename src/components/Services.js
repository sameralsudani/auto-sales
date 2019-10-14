import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import { MdDriveEta, MdBuild, MdRingVolume } from 'react-icons/md';

import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdRingVolume />,
        title: 'Service Director',
        info: ` John Doe
           Service Director
          (555) 555-555
          Email me at: john.doe@gmailcom.
          
          Have a Honda service question? Email me or call us!  Honda Service Advisors will be happy to answer your question. `
      },
      {
        icon: <MdBuild />,
        title: 'Schedule Service Online',
        info: `We understand you're busy and that's why  Honda allows you to schedule your service appointment online.  Honda offer Express Service with no appointment necessary from 7:00am to 5:30pm. `
      },
      {
        icon: <MdDriveEta />,
        title: 'Honda Service',
        info: `Whether your Honda is due for warranty service or requires maintenance repairs, you can always count on superior automotive service at Goudy Honda in Alhambra, CA. `
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
