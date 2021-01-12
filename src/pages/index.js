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
            , a front end developer
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
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react" height="40"></img>
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
            <img alt="Sass" height="48" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"></img>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
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
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react" height="40"></img>
            <img alt="Sass" height="48" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"></img>
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
