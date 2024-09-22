export const SectionTestimonial = () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Amit Shah",
            title: "Production Head, Shah Engineering",
            quote: "Harshid Engravers’ attention to detail and timely delivery make them our go-to partner for engraving needs."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Mehul Desai",
            title: "Operations Manager, Surya Works",
            quote: "Their expertise and reliability have consistently exceeded our expectations. Harshid Engravers is highly recommended."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Sanjay Verma",
            title: "Senior Engineer, Ratan Engravers",
            quote: "Harshid Engravers has consistently provided excellent service, enhancing the quality of our precision parts."
        },
    ]

    return (
        <section className="bg-slate-100 py-28">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h3 className="text-cyan-700 font-semibold">
                        What Our Clients Say
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Delivering Precision, Quality, and Trust
                    </p>
                    <p className="mt-3 text-gray-600">
                        At Harshid Engravers, we take pride in our craftsmanship and commitment to excellence. Our clients from diverse industries have experienced the difference our expertise brings to their projects.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}