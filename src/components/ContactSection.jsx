import { Linkedin, Mail, Map, MapPin, Phone, PhoneCall, Send, Twitter } from "lucide-react"
import { ToastContainer, toast } from "react-toastify"
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactSection = () => {
  const form = useRef()
  const [isSending, setIsSending] = useState(false);
  const [storedTheme , setStoredTheme] = useState(localStorage.getItem('theme'));

  useEffect(()=> {
    setStoredTheme(localStorage.getItem('theme'))
  },[]);
  
  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    console.log(form.current)
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      toast.success('Message sent successfully!')
      form.current.reset()
    })
    .catch((error) => {
      toast.error('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    })
    .finally(() => {
      setIsSending(false)
    })
  }

  return (
    <section id="contact" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let’s Build Something  <span className="text-primary">Together!</span></h2> 
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Do you have a project in mind or want to collaborate? I’d love to hear from you! Whether it’s a new opportunity, a technical challenge, or just a creative brainstorm, I’m always open to discussions. Reach out—let’s turn ideas into reality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:mikevulloa@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mikevulloa@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telephone</h4>
                  <a href="tel:+524773735530"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +52(477)3735530
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Guanajuato, Mexico
                  </a>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="font-medium mb-4">
                  My social Networks
                </h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/miguel-vazquez-dev/">
                    <Linkedin />
                  </a>
                  <a href="https://bsky.app/profile/scarecr0w99.bsky.social">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  name="from_name" 
                  required  
                  placeholder="Your name here..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email"
                  id="email"
                  name="from_email" 
                  required  
                  placeholder="email@email.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required  
                  placeholder="Let's talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  rows="5"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                  isSending ? 'opacity-70 cursor-not-allowed' : ''
                )}
              >
                {isSending ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16}/> Send Message
                  </>
                )}
              </button>
              <ToastContainer theme={storedTheme}/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}