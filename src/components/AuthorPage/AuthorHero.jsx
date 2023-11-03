import React from 'react'

import rita from '../../assets/me.jpeg'

const Hero = () => {
  return (
    <section className="min-h-screen min-w-screen flex justify-center items-center relative">
        <img
            src={rita}
            alt='Rita Ariana Sobral'
            className='w-52 h-64 rounded-lg shadow-lg object-cover'
        >
        </img>
        <div>
            <h1 className='head_text'>
                Hey there, I'm <br className='max-md:hidden' />
                <span className='orange_gradient'>Rita Ariana Sobral</span>
            </h1>
            <p className='desc'>
                I'm a Software Engineer with a passion for learning and sharing my knowledge with others.
            </p>
        </div>
    </section>
  )
}

export default Hero