import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
            <button 
                type='button'
                onClick={() => window.open("https://github.com/RitaAriana")}
                className='black_btn'>
                    GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>Open GPT-4</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with our AI-powered summarizer, 
            an open-source article summarizer that transforms long articles into concise summaries. 
        </h2>

    </header>
  )
}

export default Hero