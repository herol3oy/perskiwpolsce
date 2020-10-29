import React from "react"
import { Helmet } from "react-helmet"
import '../styles/layout.scss'
// import FemaleRockersScreenshot from ''

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hamed Sedighi :: Full stack developer (MERN)</title>
      </Helmet>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <main className='px-5'>
            <h1>
              Hello!
            <span role='img' aria-label='hello'>👋</span>
            </h1>
            <h2 className='my-5'>
              I'm
            <span className='font-weight-bold'>
                {` `}<kbd>Hamed Sedighi</kbd>
              </span>
            , a full stack developer
            focused on building minimal and beautiful web apps
            {` `}<span role='img' aria-label='hello'>👨‍💻</span>
            </h2>
            <h3>
              Get in touch
              {` `}
              <span role='img' aria-label='hello'>👉</span>
              {` `}
              <a href='mailto:hamedsedighi@gmail.com' className='text-muted'>
                <u>
                  hamedsedighi@gmail.com
              </u>
              </a>
            </h3>
            <section className='mt-5'>

              <h6 className='mt-5'>
                Currently based in <span className='font-weight-bold'>Warsaw</span>
                <span className='h4' role='img' aria-label='hello'>🧜‍♀️</span>
              </h6>
            </section>
          </main>
        </div>
        <div className='row'>
          <h1 className='px-5 mb-5'>
            Projects
          {` `}
            <span role='img' aria-label='hello'>🛠️</span>
          </h1>
        </div>
        <div className='row'>
          <section className='col-lg-4'>
            <img src={'/femalerockers.png'} alt="Female Rockers" />
          </section>
          <article className='col-lg-8'>
            <h3 className='font-weight-bold'>
              FemaleRockers
              <span role='img' aria-label='hello'>👩‍🎤</span>
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
            <a href="https://femalerockers.com">https://femalerockers.com</a>
            <h5 className='mt-5'>Github:</h5>
            <a href="https://github.com/herol3oy/female-rockers">https://github.com/herol3oy/female-rockers</a>
          </article>
        </div>
        <div className='row mt-5'>
          <section className='col-lg-4'>
            <img src={'/elit.png'} alt="Female Rockers" />
          </section>
          <article className='col-lg-8'>
            <h3 className='font-weight-bold'>
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
            <a href="https://github.com/herol3oy/elit">https://github.com/herol3oy/elit</a>
          </article>
        </div>
      </div>
      <div className='about container-fluid text-dark'>
        <div className='row d-flex justify-content-center align-items-center'>
          <section className='col-lg-4 justify-content-end d-flex'>
            <img src={'/hamed-sedighi.png'} className='avatar' alt="Hamed Sedighi" />
          </section>
          <section className='col-lg-5 text-left'>
            <h3 className=' my-5 text-left'>
              Graduated as a Software Engineer from CodeWorks (Oct 2020),
              a three-month intensive course to learn and build complex apps,
              with an advanced understanding of JavaScript.
            </h3>
            <a className='text-dark' href='https://github.com/herol3oy/'>
              <i className="fab fa-github-square h1"></i>
            </a>
            <a className='text-dark mx-2' href='https://github.com/herol3oy/'>
              <i className="fab fa-linkedin h1"></i>
            </a>
            <a className='text-dark' href='https://www.instagram.com/perskiiiwpolsce/'>
              <i className="fab fa-instagram-square h1"></i>
            </a>
          </section>
        </div>
      </div>
    </>
  )
}
