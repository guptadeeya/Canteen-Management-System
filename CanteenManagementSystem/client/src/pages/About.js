import React from "react";

const About = () => {
  return (
    <div class="container">
      <h2 className="mt-4">Welcome to QuickBite!</h2>
      <p>
        We are proud to serve the students, faculty, and staff of our college
        with delicious and nutritious meals.
      </p>
      <h2 className="mt-4">Our Mission</h2>
      <p>
        Our mission is to provide a wide variety of high-quality and affordable
        food options to cater to the diverse tastes and preferences of our
        college community. Our canteen is committed to ensuring a pleasant
        dining experience for everyone. We maintain strict hygiene standards and
        prioritize customer satisfaction.
      </p>

      <h2 className="mt-4">Key Features</h2>
      <ul>
        <li>Effortless Ordering</li>
        <li>Digital Menus</li>
        <li>Payment Integration</li>
        <li>Feedback Mechanism</li>
        <li>Security</li>
      </ul>

      <h2 className="mt-4">Our Commitment to You</h2>
      <p>
        We are dedicated to providing excellent customer support and ongoing
        system improvements...
        <br />
        For inquiries, please contact us at{" "}
        <a href="mailto:dummy@mail.com">dummy@mail.com</a> or{" "}
        <a href="tel:1234567890">9876543210</a>.
      </p>
    </div>
  );
};

export default About;
