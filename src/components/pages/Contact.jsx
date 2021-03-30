import React from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll'
import mailIcon from '../../images/MailIcon.png';
import copyIcon from '../../images/copy.png';
import './Contact.scss'

const Contact = () => {
  const email = "mark@thegreatrainbowpianosingalong.com";

  const onCopy = () => {
    navigator.clipboard.writeText(email)
  }

  return(
      <Element name="contact" id="Contact" className="section container-fluid">
        <h1>CONTACT</h1>
          <TextArea>
            <img src={mailIcon} id="mailIcon" alt="mail icon"/>
            <span className='email'> 
              <span id='contactEmail'>{email}</span>
              <button className='copyButton' onClick={onCopy}>
                <img src={copyIcon} alt="copy to clipboard" />
              </button>
            </span>
          </TextArea> 
          <Quote>I didn’t realise I was alive before now</Quote>
      </Element>
  );
}

export default Contact;