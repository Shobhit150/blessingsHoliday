import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaYoutube,
    FaXTwitter,
} from 'react-icons/fa6' // Or 'react-icons/fa' for classic icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-12 mt-10 pt-20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


                {/* Company Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Career With us</li>
                        <li>Our Blogs</li>
                        <li>Forums</li>
                    </ul>
                </div>

                {/* Destinations Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Weekend Trips</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Chopta Tungnath</li>
                        <li>Manali Sissu</li>
                        <li>Manali Sissu Kasol</li>
                        <li>Jibhi & Tirthan Valley</li>
                        <li>Kasol Kheerganga</li>
                        <li>Mcleodganj Triund</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Socials</h3>
                    <ul className="space-y-3 text-sm text-gray-300 mb-4">
                        <li className="flex items-center gap-2">
                            <FaInstagram />
                            <a href="https://instagram.com/go4explore" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaFacebookF />
                            <a href="https://facebook.com/go4explore" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaWhatsapp />
                            <a href="https://wa.me/919140772033" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                WhatsApp
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaYoutube />
                            <a href="https://youtube.com/@go4explore" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                YouTube
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaXTwitter />
                            <a href="https://twitter.com/go4explore" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>


                {/* International + Links */}
                {/* <div>
                    <h3 className="text-lg font-semibold mb-4">International</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li>Vietnam</li>
                        <li>Thailand</li>
                        <li>Kazakhstan</li>
                        <li>Bali</li>
                        <li>Dubai</li>
                        <li>Bhutan</li>
                    </ul>

                </div> */}

                {/* Trips + Contact */}
                {/* <div>
                    <h3 className="text-lg font-semibold mb-4">Backpacking Trips</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li>Spiti Valley</li>
                        <li>Leh & Ladakh</li>
                        <li>Himachal Backpacking</li>
                        <li>Meghalaya</li>
                    </ul>
                </div> */}
                {/* <div>
                    <h3 className="text-lg font-semibold mb-2">Domestic</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li>Himachal</li>
                        <li>Kashmir</li>
                        <li>Kerala</li>
                        <li>Rajasthan</li>
                        <li>Uttarakhand</li>
                    </ul>
                </div> */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm text-gray-300">
                        401-402, Fourth-Floor,<br />
                        C-23, Block C, Sector 63,<br />
                        Noida, Uttar Pradesh - 201301
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                        +91 9140772033 <br />
                        contact@go4explore.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
