"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Canadian Roofing Co."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Canadian Roofing Co."
      description="Your trusted partner for all residential and commercial roofing needs across Canada. Quality craftsmanship, reliable service, built to last."
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
        {
          text: "View Our Services",
          href: "#services",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-background_1048-17367.jpg",
          imageAlt: "Newly installed asphalt shingle roof on a modern Canadian home",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/skateboard-rink-view_23-2148937902.jpg",
          imageAlt: "Commercial flat roof being repaired by roofing specialists",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-working-roof_23-2149343654.jpg",
          imageAlt: "Close-up of a damaged roof undergoing repair",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/long-shot-man-with-helmet-sitting-roof_23-2149343711.jpg",
          imageAlt: "Construction of a new roof on a residential property",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg",
          imageAlt: "Stylish metal roofing on a contemporary house",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tennis-player-training_23-2147821254.jpg",
          imageAlt: "Skylight being installed on a finished roof",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "residential",
          name: "Residential Roofing",
          price: "Asphalt, Metal, Tile",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-carrying-woman-with-wheelbarrow_23-2149382171.jpg",
          imageAlt: "Residential asphalt shingle roof",
        },
        {
          id: "commercial",
          name: "Commercial Roofing",
          price: "Flat, TPO, PVC",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2187.jpg",
          imageAlt: "Commercial building flat roof",
        },
        {
          id: "repair",
          name: "Roof Repair",
          price: "Leaks, Damage, Emergency",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill-low-view_23-2148748772.jpg",
          imageAlt: "Damaged roof shingles",
        },
        {
          id: "installation",
          name: "New Installations",
          price: "Expert, Efficient, Durable",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-hummer-tools-stairs-house-construction_181624-28855.jpg",
          imageAlt: "New roof construction",
        },
        {
          id: "skylight",
          name: "Skylight Installation",
          price: "Natural Light, Modern Design",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-wooden-house_23-2151264408.jpg",
          imageAlt: "Modern house with skylight",
        },
        {
          id: "eavestrough",
          name: "Eavestrough Services",
          price: "Installation, Repair, Cleaning",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-wooden-roof_181624-2403.jpg",
          imageAlt: "Eavestrough cleaning",
        },
      ]}
      title="Our Expert Roofing Services"
      description="From residential homes to large commercial properties, Canadian Roofing Co. provides a comprehensive range of high-quality roofing solutions designed to protect your investment."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Us"
      title="Built on Trust, Delivered with Quality. Your Roof, Our Priority."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "experience",
          value: "20+",
          title: "Years Experience",
          description: "Two decades of dedicated service in the Canadian roofing industry.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-working-with-weedwacker_329181-20603.jpg",
          imageAlt: "Smiling roofer on a roof",
        },
        {
          id: "customers",
          value: "5000+",
          title: "Satisfied Customers",
          description: "Thousands of happy homeowners and business owners trust our quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-taking-selfies_23-2148903564.jpg",
          imageAlt: "Happy family in front of their home",
        },
        {
          id: "projects",
          value: "10000+",
          title: "Projects Completed",
          description: "Successfully delivered a wide range of residential and commercial projects.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-brick-fence-before-building_23-2148252742.jpg",
          imageAlt: "Blueprint of a roof",
        },
        {
          id: "awards",
          value: "Top Rated",
          title: "Industry Awards",
          description: "Recognized for our exceptional service and quality craftsmanship.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-happy-cute-girl-giving-handshake-with-trophy-with-red-lipstick-office-outfit_140725-161416.jpg",
          imageAlt: "Award trophy",
        },
      ]}
      title="Why Choose Canadian Roofing Co.?"
      description="Our legacy is built on a foundation of extensive experience, unwavering customer satisfaction, a vast portfolio of successful projects, and a consistent track record of industry recognition."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah P.",
          handle: "@HomeownerSarah",
          testimonial: "Canadian Roofing Co. replaced our old roof with incredible efficiency and professionalism. The team was courteous, the site was clean, and the new roof looks fantastic. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/great-beautiful-young-female-shows-thumbs-up-smiling-looking-camera_651396-3868.jpg",
          imageAlt: "Portrait of Sarah P.",
        },
        {
          id: "2",
          name: "Mark L.",
          handle: "@BusinessMark",
          testimonial: "As a commercial property manager, I need reliable contractors. Canadian Roofing Co. handled our large commercial roof repair flawlessly, on time and within budget. Exceptional service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3571.jpg",
          imageAlt: "Portrait of Mark L.",
        },
        {
          id: "3",
          name: "Jessica & Tom R.",
          handle: "@HappyFamilyRoof",
          testimonial: "We were so impressed with the new roof installation on our family home. The quality is outstanding, and the team was a pleasure to work with. Thank you for a beautiful, durable roof!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-multiethnic-couple-stand-surrounded-by-moving-boxes-taking-break-capture-selfie-with_482257-134995.jpg",
          imageAlt: "Portrait of Jessica and Tom R.",
        },
        {
          id: "4",
          name: "David G.",
          handle: "@PropertyMgmt",
          testimonial: "The attention to detail and commitment to safety shown by Canadian Roofing Co. during our industrial project was unparalleled. They delivered beyond expectations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-looking-document_23-2148751962.jpg",
          imageAlt: "Portrait of David G.",
        },
        {
          id: "5",
          name: "Eleanor V.",
          handle: "@TrustedRoof",
          testimonial: "After a storm, my roof needed urgent repairs. Canadian Roofing Co. responded quickly and performed excellent work. I feel safe and secure in my home again.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-354.jpg",
          imageAlt: "Portrait of Eleanor V.",
        },
      ]}
      showRating={true}
      title="What Our Valued Clients Say"
      description="Read testimonials from homeowners and business professionals who trust Canadian Roofing Co. for their roofing solutions."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Building Supply Co.",
        "Community Builders",
        "Roof Tech Innovators",
        "Certified Contractors",
        "Renovate Canada",
        "City Property Group",
        "Green Build Solutions",
      ]}
      title="Our Trusted Partners & Affiliations"
      description="We collaborate with leading suppliers and organizations to ensure we deliver the best materials and uphold industry standards."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What types of roofing do you specialize in?",
          content: "We specialize in a wide range of roofing types including asphalt shingles, metal roofing, flat roofs (TPO, PVC, EPDM), and tile roofs for both residential and commercial properties.",
        },
        {
          id: "2",
          title: "How long does a typical roof replacement take?",
          content: "The duration of a roof replacement varies depending on the size and complexity of the roof, as well as weather conditions. Most residential projects are completed within 1-3 days, while commercial projects may take longer.",
        },
        {
          id: "3",
          title: "Do you offer free estimates?",
          content: "Yes, we offer complimentary, no-obligation estimates for all our roofing services. Contact us today to schedule your assessment.",
        },
        {
          id: "4",
          title: "Are your roofers licensed and insured?",
          content: "Absolutely. All our roofers are fully licensed, insured, and extensively trained to ensure the highest standards of safety and workmanship on every project.",
        },
        {
          id: "5",
          title: "What kind of warranty do you provide?",
          content: "We provide comprehensive warranties on both materials and workmanship, offering you peace of mind. Specific warranty details vary by material and project, which we will discuss during your estimate.",
        },
        {
          id: "6",
          title: "How often should I have my roof inspected?",
          content: "We recommend having your roof inspected at least once every 1-2 years, especially after severe weather events. Regular inspections can identify potential issues early and extend your roof's lifespan.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our roofing services, process, and commitment to quality."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Your Free Roofing Estimate Today"
      description="Ready to start your roofing project or need urgent repairs? Fill out the form below, and our team will get back to you promptly. We're here to help!"
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number (Optional)",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your roofing needs...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-wearing-protection-helmets_23-2149343642.jpg"
      imageAlt="Roofer inspecting residential roof blueprint with a client"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Request Estimate"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Residential Roofing",
              href: "#services",
            },
            {
              label: "Commercial Roofing",
              href: "#services",
            },
            {
              label: "Roof Repair",
              href: "#services",
            },
            {
              label: "New Installations",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Get an Estimate",
              href: "#contact",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Canadian Roofing Co."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
