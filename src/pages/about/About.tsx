import "./about.css";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <h3>About</h3>
        <div className='aboutContent'>
          <div className='aboutContentBody'>
            <img src='images/example.webp' alt='' />
            <div className='aboutInfo'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus quas sint praesentium, eveniet necessitatibus natus
                omnis nihil enim officiis eligendi unde cupiditate quia nobis,
                sit, eos nulla? Explicabo accusamus quis delectus error labore
                vero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique voluptas beatae quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur animi incidunt quos totam illum exercitationem saepe
                inventore dolorum modi dignissimos aliquid excepturi soluta iure
                cum esse voluptas facilis, laborum, expedita, earum natus sequi
                quibusdam. Ex labore voluptas omnis enim nostrum?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, quis. Exercitationem commodi non quasi sint vero
                veritatis? Rem, magni dolore!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                modi accusantium qui ab ducimus earum ullam commodi eos nostrum!
                Voluptatibus sunt ut officiis optio, doloremque qui blanditiis
                consectetur itaque maiores saepe laboriosam voluptates odit
                numquam voluptatem similique ab dolore consequatur. Nihil
                mollitia perspiciatis blanditiis dolores cumque delectus odit
                eaque? Neque adipisci dolorem dolor dignissimos recusandae odio
                amet aperiam maiores reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
