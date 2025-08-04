"use client";
import { createContext, useContext, useState } from "react";
import data from "../data.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const translations = {
    en: {
      // Hero Section
      hero: {
        title: {
          line1: data.hero.title.line1,
          line2: data.hero.title.line2,
          line3: data.hero.title.line3
        },
        subtitle: data.hero.subtitle,
        cta: data.hero.cta.text
      },
      // About Section
      about: {
        title: data.about.title,
        subtitle: data.about.subtitle,
        mainStory: {
          intro: data.about.mainStory.intro,
          paragraph1: data.about.mainStory.paragraph1,
          paragraph2: data.about.mainStory.paragraph2
        },
        careerHighlights: data.about.careerHighlights
      },
      // Skills Section
      skills: {
        title: data.skills.title,
        subtitle: data.skills.subtitle
      },
      // Achievements Section
      achievements: {
        title: data.achievements.title,
        subtitle: data.achievements.subtitle
      },
      // Gallery Section
      gallery: {
        title: data.gallery.title,
        subtitle: data.gallery.subtitle,
        cta: data.gallery.cta.text
      },
      // Social Media Section
      socialMedia: {
        title: data.socialMedia.title,
        subtitle: data.socialMedia.subtitle
      },
      // Testimonials Section
      testimonials: {
        title: data.testimonials.title
      },
      // Connect Section
      connect: {
        title: data.connect.title,
        getInTouch: "Get in Touch",
        sendMessage: "Send a Message",
        quickResponse: "Quick Response",
        quickResponseText: "I typically respond within 24 hours for business inquiries and collaboration opportunities."
      },
      // YouTube Section
      youtube: {
        title: data.youtube.title
      },
      // Footer
      footer: {
        brandDescription: "Head of Communications and Media crafting compelling narratives and managing stakeholder relationships.",
        quickLinks: "Quick Links",
        getInTouch: "Get in Touch",
        madeWith: "Made with",
        by: "by",
        team: "Web Services Team",
        forYou: "is for you and by you",
        forYouShort: "for you",
        allRights: "All rights reserved."
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: {
          line1: "संचार और मीडिया के प्रमुख",
          line2: "सार्वजनिक प्रभाव को आकार दे रहे",
          line3: "वास्तविक प्रभाव पैदा कर रहा"
        },
        subtitle: "मैं बिनित किशोर हूं — मोनाडनॉक्स में संचार और मीडिया के प्रमुख, आकर्षक कथाएं बनाते हुए, मीडिया संबंधों का प्रबंधन करते हुए, और यह सुनिश्चित करते हुए कि हमारा संदेश हितधारकों तक प्रभावी ढंग से पहुंचे। मोनाडनॉक्स में कोर टीम।",
        cta: "जुड़ते हैं"
      },
      // About Section
      about: {
        title: "मेरे बारे में",
        subtitle: "रणनीतिक संदेश और हितधारक जुड़ाव से प्रेरित संचार और मीडिया के प्रमुख",
        mainStory: {
          intro: "मैं बिनित किशोर हूं",
          paragraph1: "मोनाडनॉक्स में संचार और मीडिया के प्रमुख के रूप में, मैं हमारी सार्वजनिक छवि को आकार देने और हमारे विभिन्न हितधारकों के साथ प्रभावी संचार सुनिश्चित करने में महत्वपूर्ण भूमिका निभाता हूं। मेरी जिम्मेदारियों में मीडिया संबंधों का प्रबंधन, प्रेस विज्ञप्ति तैयार करना, हमारी सोशल मीडिया उपस्थिति की देखरेख और आंतरिक संचार रणनीतियों का विकास शामिल है।",
          paragraph2: "मैं यह सुनिश्चित करने के लिए काम करता हूं कि मोनाडनॉक्स का संदेश – जिसमें हमारे व्यावसायिक उद्यम और फाउंडेशन पहल दोनों शामिल हैं – लगातार स्पष्ट, सटीक और प्रभावशाली हो। मैं मोनाडनॉक्स की मजबूत और सकारात्मक सार्वजनिक धारणा को बनाए रखने में महत्वपूर्ण योगदान देता हूं।"
        },
        careerHighlights: [
          {
            icon: "📢",
            title: "संचार के प्रमुख",
            description: "मोनाडनॉक्स फाउंडेशन"
          },
          {
            icon: "📰",
            title: "मीडिया संबंध",
            description: "प्रेस विज्ञप्ति और हितधारक संचार"
          },
          {
            icon: "📱",
            title: "सोशल मीडिया देखरेख",
            description: "डिजिटल उपस्थिति और जुड़ाव का प्रबंधन"
          },
          {
            icon: "💬",
            title: "रणनीतिक संचार",
            description: "आंतरिक और बाहरी संदेश रणनीतियां"
          }
        ]
      },
      // Skills Section
      skills: {
        title: "कौशल और विशेषज्ञता",
        subtitle: "रणनीतिक हितधारक जुड़ाव और जनसंपर्क अनुभव के माध्यम से हासिल की गई व्यापक संचार और मीडिया प्रबंधन कौशल।"
      },
      // Achievements Section
      achievements: {
        title: "उपलब्धियां और मील के पत्थर",
        subtitle: "मुख्य उपलब्धियां, पुरस्कार और मील के पत्थर जो संचार और मीडिया प्रबंधन में मेरे प्रभाव को दर्शाते हैं।"
      },
      // Gallery Section
      gallery: {
        title: "पोर्टफोलियो गैलरी",
        subtitle: "मेरे संचार अभियानों, मीडिया संबंध रणनीतियों और हितधारक जुड़ाव परियोजनाओं का अन्वेषण करें जिन्होंने वास्तविक परिणाम प्राप्त किए हैं।",
        cta: "सभी प्रोजेक्ट देखें"
      },
      // Social Media Section
      socialMedia: {
        title: "सोशल मीडिया उपस्थिति",
        subtitle: "कई प्लेटफॉर्मों पर मोनाडनॉक्स की डिजिटल उपस्थिति और हितधारक जुड़ाव का प्रबंधन।"
      },
      // Testimonials Section
      testimonials: {
        title: "प्रशंसापत्र"
      },
      // Connect Section
      connect: {
        title: "जुड़ते हैं",
        getInTouch: "संपर्क करें",
        sendMessage: "संदेश भेजें",
        quickResponse: "त्वरित प्रतिक्रिया",
        quickResponseText: "मैं आमतौर पर व्यावसायिक पूछताछ और सहयोग के अवसरों के लिए 24 घंटों के भीतर जवाब देता हूं।"
      },
      // YouTube Section
      youtube: {
        title: "विशेष वीडियो"
      },
      // Footer
      footer: {
        brandDescription: "संचार और मीडिया के प्रमुख जो आकर्षक कथाएं बनाते हैं और हितधारक संबंधों का प्रबंधन करते हैं।",
        quickLinks: "त्वरित लिंक",
        getInTouch: "संपर्क करें",
        madeWith: "बनाया गया",
        by: "द्वारा",
        team: "वेब सेवाएं टीम",
        forYou: "आपके लिए और आपके द्वारा",
        forYouShort: "आपके लिए",
        allRights: "सर्वाधिकार सुरक्षित।"
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 