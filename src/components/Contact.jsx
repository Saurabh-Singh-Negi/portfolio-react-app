import React from 'react'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form action="https://getform.io/f/1e129963-b85a-47fa-a61d-96ef4115c2b9" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF5858] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - saurabhnegi0007@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#FF5858] hover:border-[#FF5858] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact