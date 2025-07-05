'use client'
import React from 'react'
import Image from 'next/image'


const ContactUs = () => {
    return (

        <div id="#ContactUs" className="flex pt-6 pb-2 flex-col md:flex-row max-w-[1100px] m-auto bg-[url('/images/yellow-paper-bg.webp')] bg-cover bg-center rounded-[30px] items-center justify-center">

            {/* Left: Image */}
            <div className="md:w-1/2 flex flex-col items-center justify-center">
                <Image
                    src="/images/question.png" // 👈 replace with your image path
                    alt="Contact Us"
                    width={200} height={200}
                    className="h-[100px] w-[100px] md:h-[20vh] md:w-[20vh]"
                />
                <div className=' text-xl md:text-4xl text-center font-bold mt-4'>
                    Have Doubts? Talk To <br /> Our Travel Experts!
                </div>
                <p className="flex text-sm items-center justify-center md:mt-4 font-semibold">
                    We would
                    <span className="text-red-600 text-3xl mx-2">❤️</span>
                    to craft a trip just for you.
                </p>

            </div>

            {/* Right: Form */}
            <div className="md:w-1/2 w-full px-4 py-2 md:p-8 flex items-center justify-center">

                <form
                    className="w-full text-sm md:text-md max-w-md space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form[0] as HTMLInputElement).value;
                        const phone = (form[1] as HTMLInputElement).value;
                        const email = (form[2] as HTMLInputElement).value;
                        const message = (form[3] as HTMLTextAreaElement).value;

                        const text = encodeURIComponent(
                            `Hi, I'm ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'N/A'}`
                        );

                        const whatsappNumber = '919140772033';
                        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
                    }}
                >

                    <div>

                        <input
                            type="text"
                            placeholder="Full Name*"
                            className="w-full bg-white px-4 py-2 rounded-full"
                            required
                        />
                    </div>

                    <div>

                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="w-full bg-white px-4 py-2 rounded-full"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email Id*"
                            className="w-full bg-white px-4 py-2 rounded-full"
                            required
                        />
                    </div>

                    <div>

                        <textarea
                            rows={2}
                            placeholder="Type your message here..."
                            className="w-full bg-white px-4 py-2 rounded-full"
                        />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button
                            type="submit"
                            className=" min-w-[250px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Request a callback
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactUs
