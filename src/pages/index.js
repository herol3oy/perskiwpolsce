import React from "react"
import { Helmet } from "react-helmet"
import '../styles/layout.scss'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hamed Sedighi :: Front stack developer (MERN)</title>
      </Helmet>
      <div className='container'>
        <div className='hero row d-flex align-items-center'>
          <main className='col-lg-auto'>
            <h1 className='font-weight-bold'>
              Cześć!
            <span role='img' aria-label='hello'>👋</span>
            </h1>
            <h2 className='my-5'>
              I'm
            <span className='font-weight-bold'>
                {` `}
                <kbd>Hamed Sedighi</kbd>
              </span>
            , a front stack developer

            focused on building minimal and beautiful web apps
            {` `}<span role='img' aria-label='hello'>👨‍💻</span>
            </h2>
            <section className='mt-5'>
              <h6 className='mt-5'>
                Currently based in <span className='font-weight-bold'>Warsaw</span>
                <span className='h4' role='img' aria-label='hello'>🧜‍♀️</span>
              </h6>
            </section>
          </main>
          <div className='col-lg-3 d-none d-lg-block d-xl-block'>
            <img className='img-fluid' src={'./alexey-topolyanskiy-6uSyRALz1Yw-unsplash.jpg'} alt="warsaw"/>
          </div>
        </div>
        <div className='row justify-content-lg-start justify-content-center mb-5 mb-lg-0'>
          <h1 className='font-weight-bold mb-lg-5'>
            Projects
            <span role='img' aria-label='projects'>🛠️</span>
          </h1>
        </div>
        <div className='row justify-content-center'>
          <section className='col-lg-4 col-6'>
            <img src={'/femalerockers.png'} className='img-fluid' alt="Female Rockers" />
          </section>
          <article className='col-lg-8 text-lg-left text-center'>
            <h3 className='font-weight-bold mt-lg-0 mt-3'>
              FemaleRockers
              <span role='img' aria-label='female rocker'>👩‍🎤</span>
            </h3>
            <p>
              FemaleRockers interviews future sensations in rock music.
              Our mission is to spread the word for talented musicians and give them a
              stance where they can professionally present their portfolio.
            </p>
            <h5 className='mt-5'>Technologies:</h5>
            <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
            <img src="https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
            <img src="https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" width="40" height="40" />
            <h5 className='mt-5'>Website:</h5>
            <a href="https://femalerockers.com" target="_blank" rel="noreferrer" >https://femalerockers.com</a>
            <h5 className='mt-5'>Github:</h5>
            <a href="https://github.com/herol3oy/female-rockers" target="_blank" rel="noreferrer" >https://github.com/herol3oy/female-rockers</a>
          </article>
        </div>
        <div className='row justify-content-center my-5'>
          <section className='col-lg-4 col-6'>
            <img src={'/elit.png'} className='img-fluid' alt="elit" />
          </section>
          <article className='col-lg-8 text-lg-left text-center'>
            <h3 className='font-weight-bold mt-lg-0 mt-3'>
              ELIT
            </h3>
            <p>
              Elit connect developers across the globe.
              Our mission is to provide a platform for developers to connect to each others.
              Here you can find people to collaborate on your project or join others to help them.
            </p>
            <h5 className='mt-5'>Technologies:</h5>
            <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
            <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40" />
            <img src="https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
            <img src="https://material-ui.com/static/logo_raw.svg" alt="material ui" width="40" height="40" />
            <h5 className='mt-5'>Github:</h5>
            <a href="https://github.com/herol3oy/elit" target="_blank" rel="noreferrer" >https://github.com/herol3oy/elit</a>
          </article>
        </div>
      </div>
      <div className='container-fluid text-dark about'>
        <div className='row p-5'>
          <div className='col-lg-6'>
            <h6 className='font-weight-bold border-bottom pb-1'>ABOUT</h6>
            <small className=''>
              Graduated as a Software Engineer from CodeWorks (Oct 2020),
              a three-month intensive course to learn and build complex apps,
              with an advanced understanding of JavaScript.
            </small>
            <p>
              <small>
                &copy;{new Date().getFullYear()}
              </small>
            </p>
          </div>
          <div className='col-lg-3 my-lg-0 my-5'>
            <h6 className='font-weight-bold border-bottom pb-1'>CONTACT</h6>
            <h6>
              {` `}
              <span role='img' aria-label='hello'>👉</span>
              {` `}
              <a href='mailto:hamedsedighi@gmail.com' className='text-muted'>
                <u>
                  hamedsedighi@gmail.com
              </u>
              </a>
            </h6>
          </div>
          <div className='social-icons col-lg-3'>
            <h6 className='font-weight-bold border-bottom pb-1'>CONNECT</h6>
            <a className='text-dark' href='https://github.com/herol3oy/' target="_blank" rel="noreferrer" >
              <i className="fab fa-github h3"></i>
            </a>
            <a className='text-dark mx-2' href='https://www.linkedin.com/in/hamed-sedighi/' target="_blank" rel="noreferrer" >
              <i className="fab fa-linkedin-in h3"></i>
            </a>
            <a className='text-dark' href='https://www.instagram.com/perskiiiwpolsce/' target="_blank" rel="noreferrer" >
              <i className="fab fa-instagram h3"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
