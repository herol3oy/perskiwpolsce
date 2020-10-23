import React from "react"
import { Helmet } from "react-helmet"
import '../styles/layout.scss'

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
              <a className='text-dark' href='https://github.com/herol3oy/'>
                <i className="fab fa-github-square h1"></i>
              </a>
              <a className='text-dark mx-2' href='https://github.com/herol3oy/'>
                <i className="fab fa-linkedin h1"></i>
              </a>
              <a className='text-dark' href='https://www.instagram.com/perskiiiwpolsce/'>
                <i className="fab fa-instagram-square h1"></i>
              </a>
              <h6 className='mt-5'>
                Currently based in <span className='font-weight-bold'>Warsaw</span>
                <span className='h4' role='img' aria-label='hello'>🧜‍♀️</span>
              </h6>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
