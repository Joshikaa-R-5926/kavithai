"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather, FileEdit, Settings, FileText, Music, Palette, Mail, Phone, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";

const FrontPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Feather,
      title: "Kavithai Creation",
      description: "Craft beautiful poems and express your creativity with our intuitive editor.",
    },
    {
      icon: FileEdit,
      title: "Content Management",
      description: "Easily write, edit, and organize your articles, posts, and other content.",
    },
    {
      icon: Settings,
      title: "Personalized Settings",
      description: "Customize your profile and preferences for a tailored app experience.",
    },
  ];

  const categories = [
    {
      icon: Feather,
      title: "Kavithai",
      description: "Dive into the world of poetry. Create, share, and read beautiful Kavithai.",
      link: "/dashboard/kavithai",
    },
    {
      icon: FileText,
      title: "Articles & Posts",
      description: "Write and manage your articles, blog posts, or any other long-form content.",
      link: "/dashboard/editor",
    },
    {
      icon: Music,
      title: "Song Lyrics",
      description: "Add and organize the lyrics for your favorite songs or your own compositions.",
      link: "/dashboard/song-adding",
    },
    {
      icon: Palette,
      title: "Custom Backgrounds",
      description: "Personalize your workspace by changing the background color or image.",
      link: "/dashboard/background",
    },
  ];

  const scrollToAbout = () => {
    document.getElementById("about-us-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact-us-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCategories = () => {
    document.getElementById("categories-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Your message has been sent!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-sky-400 to-blue-500">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-4">
          <Logo className="text-white" />
          <div>
            <Button
              variant="ghost"
              onClick={scrollToCategories}
              className="text-white hover:bg-white/20 text-sm px-3 py-2"
            >
              Explore
            </Button>
            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="text-white hover:bg-white/20 text-sm px-3 py-2 ml-2"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={scrollToContact}
              className="text-white hover:bg-white/20 text-sm px-3 py-2 ml-2"
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-white hover:bg-white/20 text-sm px-3 py-2 ml-2"
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* Main Hero Section */}
        <section className="w-full max-w-5xl mx-auto py-20 text-white px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight opacity-0 animate-fade-in-down">
                Unleash Your Inner Poet
              </h1>
              <p className="text-lg md:text-xl text-white/90 opacity-0 animate-fade-in-down" style={{ animationDelay: '200ms' }}>
                Your creative hub for Kavithai and content management. Craft beautiful poems, manage your articles, and bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '400ms' }}>
                <Button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-gray-200 transition-colors duration-200"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button
                variant="outline"
                className="h-auto w-full p-8 bg-white/10 text-white rounded-lg shadow-2xl backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-left"
                onClick={() => showSuccess("A touch of inspiration!")}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mb-4">Creative Space</h3>
                  <blockquote className="border-l-4 border-white/50 pl-4 italic">
                    <p>"The poet's pen, a feathered key,</p>
                    <p>Unlocks the soul for all to see.</p>
                    <p>With words as wings, on ink they fly,</p>
                    <p>And paint the canvas of the sky."</p>
                  </blockquote>
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-4xl text-center py-12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 opacity-0 animate-fade-in-up">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-center text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories-section" className="w-full max-w-5xl text-center py-12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 opacity-0 animate-fade-in-up">Explore Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                <category.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{category.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {category.description}
                </CardDescription>
                <Button onClick={() => navigate(category.link)} variant="outline" className="mt-auto">
                  Explore
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full max-w-4xl text-center py-16 mx-auto px-4">
          <Card className="bg-white/90 dark:bg-gray-800/90 shadow-xl p-8 md:p-12 rounded-lg backdrop-blur-sm opacity-0 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-4xl font-extrabold text-gray-900 dark:text-gray-50">
                Ready to Unleash Your Creativity?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                Join our community of creators today and start bringing your ideas to life. It's free to get started!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                <Button
                  onClick={() => navigate("/login")}
                  className="px-10 py-6 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105 duration-300"
                >
                  Sign Up Now
                </Button>
                <Button
                  onClick={() => navigate("/dashboard")}
                  variant="outline"
                  className="px-10 py-6 text-xl font-bold transition-transform transform hover:scale-105 duration-300"
                >
                  Explore Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Us Section */}
        <section id="about-us-section" className="w-full max-w-4xl text-center py-12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 opacity-0 animate-fade-in-up">About Us</h2>
          <Card className="w-full shadow-lg bg-white dark:bg-gray-800 opacity-0 animate-fade-in-up">
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50">About My App</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Learn more about what we do.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              <p>
                Welcome to My App, your dedicated platform for creative expression and content management. We believe in empowering users to craft beautiful Kavithai (poems) and manage their digital content with ease.
              </p>
              <p>
                Our mission is to provide a seamless and intuitive experience for writers, creators, and anyone looking to organize their thoughts and projects. With a focus on simplicity and functionality, My App helps you bring your ideas to life.
              </p>
              <p>
                Thank you for being a part of our community!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us-section" className="w-full max-w-4xl text-center py-12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 opacity-0 animate-fade-in-up">Contact Us</h2>
          <Card className="w-full shadow-lg bg-white dark:bg-gray-800 text-left opacity-0 animate-fade-in-up">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50">Get in Touch</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                We'd love to hear from you! Send us a message or use our contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 p-6">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Contact Information</h3>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@kavithai.app" className="text-gray-600 dark:text-gray-300 hover:underline">
                      contact@kavithai.app
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Creative Lane, Poem City, PC 45678
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." required className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Mission */}
          <div className="px-4">
            <Logo className="text-white mb-4 justify-center md:justify-start" />
            <p className="text-sm">
              Your creative hub for Kavithai and content management. Empowering creators to bring their ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="px-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-us-section" onClick={(e) => { e.preventDefault(); scrollToAbout(); }} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact-us-section" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/dashboard" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="hover:text-white transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="px-4">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Kavithai. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;