
const footerColumns = [
  {
    title: "Support",
    links: ["Contact", "FAQs", "Pricing Plans", "Sitemap"],
  },
  {
    title: "Quick Links",
    links: ["Jobs", "Courses", "Paid Training", "Blog"],
  },
  {
    title: "Category",
    links: ["Graphics", "Programming", "eCommerce", "Freelancing"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2235] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">M</div>
            <h1 className="text-2xl font-semibold">My Site</h1>
          </div>
          <p className="text-sm itali mt-2c">Karachi, Pakistan</p>
          <p className="text-sm italic mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm italic mt-2">Mail: mysite@mysite.com</p>
        </div>

        {footerColumns.map((col, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-4">{col.title}</h2>
            <ul className="space-y-2">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-600 pt-6 flex  md:flex-row items-center justify-center">
        <p className="text-sm">Developed by <span className="text-white font-medium">Aimal Asim</span></p>

      </div>

      <div className="fixed bottom-6 right-6">
      </div>
    </footer>
  );
}
