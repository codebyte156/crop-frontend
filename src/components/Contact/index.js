import { useEffect, useState } from 'react'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimateLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_9yavxl6', 'template_eft9mo6', form.current, 'Tlhj6YlHBbiSjtD_y')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className = "s">
            <AnimatedLetters className= "x"
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'U', 's']}
              idx={15}
            />
          </h1>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="to_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_name"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="reply_to"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact