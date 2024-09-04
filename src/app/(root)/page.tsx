import React from "react";
import Theme from "@/components/custom/Theme";
export default function page() {
  return (
    <div className="container max-w-3xl py-10 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-semibold text-blue-500">Aavnya</h1>
        <p className="text-muted-foreground">
          Innovating the Future. Empowering Entrepreneurs.
        </p>
        <Theme />
      </header>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-blue-500">About Us</h3>
        <span className="text-muted-foreground">
          Welcome to Aavnya Club! We are an NGO dedicated to promoting
          innovation, technology, and entrepreneurship among students. Our
          mission is to provide resources, host events like hackathons, connect
          students with industry experts, and help them raise funds for their
          startups. We also encourage students to experiment with new projects
          and offer incubation opportunities.
        </span>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-blue-500">Our Activities</h3>
        <div className="grid gap-3 ms-4">
          {[
            "Hackathons and Ideathons",
            "Workshops and Seminars",
            "Networking Events",
            "Mentorship Programs",
            "Startup Funding Assistance",
            "Incubation Support",
          ].map((item, index) => (
            <div key={index} className=" text-base text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <h3 className="text-2xl font-semibold text-blue-500">
          Membership Options
        </h3>
        <span className="text-muted-foreground">
          Join Aavnya Club and become a part of a vibrant community of
          innovators and entrepreneurs. Our membership options are:
        </span>
        <div className="grid gap-2 ms-6 py-2">
          {["1-Year Membership: ₹2,000", "5-Year Membership: ₹5,000"].map(
            (item, index) => (
              <div key={index} className=" text-base text-muted-foreground">
                {item}
              </div>
            )
          )}
        </div>
        <span className="text-muted-foreground">
          As a member, you'll gain access to exclusive events, resources, and a
          network of like-minded individuals.
        </span>
      </section>

      <section aria-label="contact">
        <div className="w-full bg-white dark:text-black flex flex-col justify-center items-center gap-2 rounded-lg p-5">
          <span className="text-3xl text-blue-500 font-semibold">
            Contact Us
          </span>
          <span>For more information, feel free to reach out to us at:</span>
          <div className="grid gap-2 text-center">
            <span>
              <strong>Email:</strong> info@aavnyaclub.org
            </span>
            <span>
              <strong>Phone:</strong> +91 1234567890
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
