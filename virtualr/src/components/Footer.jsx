import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className='text-md font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-2'>
                        {resourcesLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-neutral-300 hover:text-white'>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {platformLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-neutral-300 hover:text-white'>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2'>
                        {communityLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-neutral-300 hover:text-white'>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer