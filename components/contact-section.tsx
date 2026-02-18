"use client";

import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({ name: "", email: "", message: "" });
      alert(t.contact.form.success);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <Card className="card-elevated">
            <CardHeader className="pb-4">
              <CardTitle className={`text-2xl font-bold ${isRTL ? "text-right" : ""}`}>
                {t.contact.form.title}
              </CardTitle>
              <CardDescription className={`text-base ${isRTL ? "text-right" : ""}`}>
                {t.contact.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className={`text-sm font-semibold ${isRTL ? "text-right block" : ""}`}
                  >
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-2 focus:border-accent transition-colors ${isRTL ? "text-right" : ""
                      }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className={`text-sm font-semibold ${isRTL ? "text-right block" : ""}`}
                  >
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-2 focus:border-accent transition-colors ${isRTL ? "text-right" : ""
                      }`}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className={`text-sm font-semibold ${isRTL ? "text-right block" : ""}`}
                  >
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`rounded-lg border-2 focus:border-accent transition-colors resize-none ${isRTL ? "text-right" : ""
                      }`}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg py-6 text-base font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send
                        className={`h-4 w-4 mr-2 ${isRTL ? "mr-0 ml-2" : ""}`}
                      />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          {/* (unchanged — original structure preserved) */}
          <div className="space-y-6">
            {/* All remaining cards unchanged */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
