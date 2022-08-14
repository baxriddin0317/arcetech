import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// links import
import Link1 from "../public/assets/links/link1.png"
import Link2 from "../public/assets/links/link2.png"
import Link3 from "../public/assets/links/link3.png"
import Link4 from "../public/assets/links/link4.png"
import Link5 from "../public/assets/links/link5.png"
import Link6 from "../public/assets/links/link6.png"
import Link7 from "../public/assets/links/link7.png"
import Link8 from "../public/assets/links/link8.png"
import Link9 from "../public/assets/links/link9.png"

function Links() {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-1.5 my-20'>
        <h3 className='text-headline-sm mb-7 font-semibold text-center'>
        Built by a Team and Advisors Hailing from World-leading Institutions
        </h3>

        <div className='max-w-7.5xl mx-auto flex items-center flex-wrap justify-center gap-10'>
            <Link href="/">
                <Image src={Link1} />
            </Link>
            <Link href="/">
                <Image src={Link2} />
            </Link>
            <Link href="/">
                <Image src={Link3} />
            </Link>
            <Link href="/">
                <Image src={Link4} />
            </Link>
            <Link href="/">
                <Image src={Link5} />
            </Link>
            <Link href="/">
                <Image src={Link6} />
            </Link>
            <Link href="/">
                <Image src={Link7} />
            </Link>
            <Link href="/">
                <Image src={Link8} />
            </Link>
            <Link href="/">
                <Image src={Link9} />
            </Link>
        </div>
    </section>
  )
}

export default Links