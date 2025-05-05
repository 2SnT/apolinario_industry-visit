import { useState, useRef } from "react"
import Footer from "../components/Footer"
import BlogCard from "../components/BlogCard"
import BlogPost from "../components/BlogPost"
import "./Blog.css"
import { LuChevronDown } from "react-icons/lu";


//images
import day1cover from "../assets/ManilaTour.jpg"
import day1img1 from "../assets/RizalPark1.jpg"
import day1img2 from "../assets/RizalPark2.jpg"
import day1img3 from "../assets/Fort1.jpg"
import day1img4 from "../assets/Fort2.jpg"

import day2cover from "../assets/SubicBay.jpg"
import day2img1 from "../assets/Subic1.jpg"
import day2img2 from "../assets/Subic2.jpg"
import day2img3 from "../assets/Subic3.jpg"
import day2img4 from "../assets/Subic4.jpg"
import day2img5 from "../assets/Subic5.jpg"
import day2img6 from "../assets/Subic6.jpg"
import day2img7 from "../assets/Subic7.jpg"
import day2img8 from "../assets/Subic8.jpg"

import day3cover from "../assets/Museum.jpg"
import day3img1 from "../assets/Museum1.jpg"
import day3img2 from "../assets/Museum2.jpg"
import day3img3 from "../assets/Museum3.jpg"
import day3img4 from "../assets/Museum4.jpg"
import day3img5 from "../assets/Museum5.jpg"
import day3img6 from "../assets/Museum6.jpg"

import day4cover from "../assets/Hytec.jpg"
import day4img1 from "../assets/BSP.jpg"
import day4img2 from "../assets/Hytec1.jpg"
import day4img3 from "../assets/Hytec2.jpg"

import day5cover from "../assets/LRT.jpg"
import day5img1 from "../assets/LRT1.jpg"
import day5img2 from "../assets/LRT2.jpg"
import day5img3 from "../assets/LRT3.jpg"
import day5img4 from "../assets/LRT4.jpg"
import day5img5 from "../assets/MMDA1.jpg"
import day5img6 from "../assets/MMDA2.jpg"

import day6cover from "../assets/Farm.jpg"
import day6img1 from "../assets/Farm1.jpg"
import day6img2 from "../assets/Farm2.jpg"
import day6img3 from "../assets/BellChurch.jpg"
import day6img4 from "../assets/PMA1.jpg"
import day6img5 from "../assets/PMA2.jpg"
import day6img6 from "../assets/Mansion.jpg"
import day6img7 from "../assets/View1.jpg"
import day6img8 from "../assets/View.jpg"

import day7cover from "../assets/EndTour.jpg"
import day7img1 from "../assets/Shop1.jpg"
import day7img2 from "../assets/Shop2.jpg"

import day8cover from "../assets/NAIA.jpg"
import day8img1 from "../assets/NAIA1.jpg"
import day8img2 from "../assets/ZAM.jpg"

const Blog = () => {
  // Blog data
  const blogData = [
    {
      id: 1,
      title: "Day 1: MANILA TOUR",
      date: "April 7, 2025",
      coverImage: day1cover,
      shortDescription:
        "Exploring the historical and cultural sites of Manila including Rizal Park and Fort Santiago.",
      description:
        "Our educational tour began with an exciting day exploring the historical and cultural landmarks of Manila. We visited several iconic sites that showcase the rich heritage of the Philippines' capital city.",
      places: [
        {
          name: "Rizal Park",
          description:
            "Also known as Luneta Park, this historical urban park is one of the largest in Asia. We visited the monument of José Rizal and witnessed the ceremonial changing of guards. The park serves as a reminder of the Philippine's struggle for independence and national identity.",
          images: [day1img1, day1img2],
        },
        {
          name: "Fort Santiago",
          description:
            "A citadel built by Spanish conquistador Miguel López de Legazpi, Fort Santiago served as the defense fortress of Intramuros. We visited the Rizal Shrine where national hero José Rizal was imprisoned before his execution, and walked through the well-preserved grounds that tell the story of Manila's military history.",
          images: [day1img3, day1img4],
        },
      ],
    },
    {
      id: 2,
      title: "Day 2: SUBIC BAY",
      date: "April 8, 2025",
      coverImage: day2cover,
      shortDescription:
        "Visiting Subic Bay Exhibition and Convention Center, SBMA Seaport Department (Vessel Traffic Management System), SBMA Law Enforcement Department - Communication Branch, and Duty Free Shopping.",
      description:
        "Our second day took us to Subic Bay, a former US Naval Base transformed into a Freeport Zone. We had the opportunity to learn about maritime operations and security systems.",
      places: [
        {
          name: "Subic Bay Exhibition and Convention Center",
          description:
            "At the Subic Bay Exhibition and Convention Center, we explored various exhibits showcasing the area's development and its role in the Freeport Zone. The center serves as a venue for international events and conventions that contribute to Subic Bay's growing business and tourism sector.",
          images: [day2img1, day2img2],
        },
        {
          name: "SBMA Seaport Department",
          description:
            "At the SBMA Seaport Department, we visited the Vessel Traffic Management System (VTMS), which plays a crucial role in monitoring and managing maritime traffic within Subic Bay. We learned about the advanced radar and communication technologies that ensure the safe and efficient movement of vessels in the port, reducing risks of maritime accidents.",
          images: [day2img3, day2img4],
        },
        {
          name: "SBMA Law Enforcement Department",
          description:
            "We observed the operations of the SBMA Law Enforcement Department, particularly their Communication Branch, which coordinates security efforts across the Subic Freeport Zone. The department demonstrated how they manage emergency response and use communication systems to maintain safety within the region, a key factor in the area's secure environment.",
          images: [day2img5, day2img6],
        },
        {
          name: "Duty Free Shopping",
          description:
            "We wrapped up the day with a visit to Subic's popular duty-free shopping outlets. Here, we found a wide range of imported goods sold at tax-free prices, giving us a glimpse into the economic benefits of Subic Bay's Freeport Zone and how it supports international trade.",
          images: [day2img7, day2img8],
        },
      ],
    },
    {
      id: 3,
      title: "Day 3: MUSEUM",
      date: "April 9, 2025",
      coverImage: day3cover,
      shortDescription:
        "Exploring Museo ni Manuel Quezon, National Museum of Natural History, and the Presidential Car Museum to learn about Philippine history and natural heritage.",
      description:
        "Our third day was dedicated to exploring museums that showcase the Philippines' rich cultural and natural heritage. We visited three significant museums that provided us with deeper insights into the country's history, biodiversity, and the political legacy of its past leaders.",
      places: [
        {
          name: "National Museum of Natural History",
          description:
            "At the National Museum of Natural History, we gained a deeper understanding of the Philippines' incredible biodiversity. We explored exhibits on the country's various ecosystems, including coral reefs, rainforests, and more. A highlight of the museum was the Tree of Life, which beautifully represents the interconnectedness of all living things and underscores the importance of environmental conservation.",
          images: [day3img1, day3img2],
        },
        {
          name: "Museo ni Manuel Quezon",
          description:
            "The Museo ni Manuel Quezon offered a glimpse into the life of the second President of the Philippines. The museum displayed a collection of personal artifacts, photographs, and documents that showcased Quezon's pivotal role in Philippine history, particularly his leadership during the Commonwealth era and his efforts toward Philippine independence and governance.",
          images: [day3img3, day3img4],
        },
        {
          name: "Presidential Car Museum",
          description:
            "Our visit to the Presidential Car Museum took us through a fascinating collection of historic vehicles used by past Philippine presidents. The museum offers a rare look at the luxurious cars and their historical significance in the political and cultural landscape of the Philippines.",
          images: [day3img5, day3img6],
        },
      ],
    },
    {
      id: 4,
      title: "Day 4: BSP and Hytec",
      date: "April 10, 2025",
      coverImage: day4cover,
      shortDescription:
        "Visiting Bangko Sentral ng Pilipinas and Hytec Power Inc. to learn about financial systems and industrial-educational solutions.",
      description:
        "Our fourth day focused on understanding the Philippines' financial system and the integration of industrial and educational solutions. We visited two key institutions that play significant roles in the country's economic and workforce development.",
      places: [
        {
          name: "Bangko Sentral ng Pilipinas",
          description:
            "At the Bangko Sentral ng Pilipinas (BSP), the country's central bank, we learned about monetary policy, currency production, and financial regulation. One of the highlights was witnessing the actual process of how money is made—from design and printing to security features. We also toured the Money Museum where we saw the evolution of Philippine currency and learned about anti-counterfeiting measures. The BSP staff explained how the central bank maintains price stability and promotes sustainable economic growth.",
          images: [day4img1],
        },
        {
          name: "Hytec Power Inc.",
          description:
            "In Novaliches, we visited Hytec Power Inc., a leading industrial and educational solutions provider in the Philippines. Established in 1994, Hytec Power offers innovative products and services that bridge the gap between academia and industry. Their commitment to addressing job-skills mismatch is evident through their provision of equipment, after-sales training, and support to both educational institutions and industrial sectors. During our visit, we observed their operations and learned about various technologies used in industrial applications.",
          images: [day4img2, day4img3],
        },
      ],
    },
    {
      id: 5,
      title: "Day 5: LRT and MMDA",
      date: "April 11, 2025",
      coverImage: day5cover,
      shortDescription:
        "Exploring Light Rail Transit Authority-Line 2 and the MMDA Traffic Engineering Center to understand Metro Manila's urban transportation systems.",
      description:
        "Our fifth day was dedicated to exploring urban transportation in Metro Manila. From mass transit systems to traffic management, we gained valuable insights into how authorities address mobility challenges in a highly congested urban setting.",
      places: [
        {
          name: "Light Rail Transit Authority-Line 2",
          description:
            "We visited the Light Rail Transit Authority (LRTA) Line 2, also known as the Purple Line, which spans from Recto to Antipolo. During our tour of the operations and maintenance center, LRTA officials introduced us to the train system's core infrastructure, safety protocols, and automation technology. We saw firsthand how this railway helps reduce traffic congestion and provides efficient daily transport to thousands of commuters across Metro Manila.",
          images: [day5img1, day5img2, day5img3, day5img4],
        },
        {
          name: "MMDA (Metropolitan Manila Development Authority)",
          description:
            "Our next stop was the MMDA Traffic Engineering Center, where we explored how the agency manages the flow of vehicles throughout the metro. Through real-time CCTV surveillance, computerized traffic signal systems, and traffic simulations, engineers showcased how they monitor and control congestion hotspots. We also discussed the importance of urban planning and the use of smart technologies to improve overall traffic conditions in Metro Manila.",
          images: [day5img5, day5img6],
        },
      ],
    },
    {
      id: 6,
      title: "Day 6: BAGUIO CITY TOUR",
      date: "April 12, 2025",
      coverImage: day6cover,
      shortDescription:
        "Exploring Baguio City's attractions including Strawberry Farm, Chinese Bell Church, Philippine Military Academy, Mines View Park, Wright Park, Mansion House, and Burnham Park.",
      description:
        "Our sixth day took us to the summer capital of the Philippines, Baguio City. Known for its cool climate and beautiful landscapes, we explored various tourist attractions that showcase the city's natural beauty, cultural heritage, and historical significance.",
      places: [
        {
          name: "Strawberry Farm",
          description:
            "We visited the famous La Trinidad Strawberry Farm where we had the unique experience of picking fresh strawberries. We learned about strawberry cultivation techniques adapted to the cool climate of the Cordillera region and how this agricultural activity contributes to the local economy.",
          images: [day6img1, day6img2],
        },
        {
          name: "Chinese Bell Church",
          description:
            "The Chinese Bell Church offered us insights into the Chinese cultural influence in the Philippines. We admired the traditional Chinese architecture and learned about the fusion of Buddhist and Taoist practices observed by the Chinese community in Baguio.",
          images: [day6img3],
        },
        {
          name: "Philippine Military Academy",
          description:
            "At the Philippine Military Academy (PMA), we explored the academy grounds and observed the impressive views of the campus and its iconic buildings. We saw aircraft on display and learned about the history and significance of the academy, but we did not witness cadets in training during our visit.",
          images: [day6img4, day6img5],
        },
        {
          name: "Mansion",
          description:
            "We stopped by the Mansion, where we admired its grand exterior and learned about its historical significance as the official summer residence of the Philippine president. Though we couldn’t go inside, the outside view gave us a sense of the mansion's architectural grandeur.",
          images: [day6img6],
        },
        {
          name: "Mines View Park",
          description:
            "Mines View Park offered breathtaking panoramic views of the Cordillera mountains and the abandoned mining town of Itogon. We learned about Baguio's mining history and how it shaped the development of the city.",
          images: [day6img7, day6img8],
        },
      ],
    },
    {
      id: 7,
      title: "Day 7: End of Baguio Tour",
      date: "April 13, 2025",
      coverImage: day7cover,
      shortDescription: "Shopping for pasalubong (souvenirs) to bring home.",
      description:
        "Our seventh day marked the end of our Baguio City tour. We dedicated this day to shopping for pasalubong (souvenirs) to bring back home to our loved ones, exploring the local markets and shopping centers that offer a variety of Baguio specialties, from handcrafted goods to local treats.",
      places: [
        {
          name: "Shopping",
          description:
            "We visited Maharlika Shopping Center, a local market known for affordable Baguio souvenirs and products. We browsed through stalls selling woven items, wood carvings, silver jewelry, and other handicrafts made by local artisans from the Cordillera region. The market provided us with insights into the indigenous crafts and traditions of the mountain provinces, and we picked up a variety of unique and meaningful souvenirs to take home.",
          images: [day7img1, day7img2],
        },
      ],
    },
    {
      id: 8,
      title: "Day 8: Flight back to Zamboanga City",
      date: "April 14, 2025",
      coverImage: day8cover,
      shortDescription:
        "Concluding our educational tour with a flight back to Zamboanga City, reflecting on the experiences and knowledge gained.",
      description:
        "Our eighth and final day of the educational tour was dedicated to our journey back to Zamboanga City. As we prepared for our flight, we took time to reflect on the valuable experiences and knowledge we gained throughout our tour of various industries and cultural sites in Luzon. The journey home offered a chance to consolidate everything we had learned and look forward to applying it in our academic and professional lives.",
      places: [
        {
          name: "Flight to Zamboanga",
          description:
            "Our flight back to Zamboanga City gave us time for personal reflection and to organize our notes and photographs from the tour. As we flew over the Philippine archipelago, we appreciated the diverse geography of our country and how it influences regional development and industries. Landing in Zamboanga City marked the end of our educational journey but the beginning of applying our enriched understanding to our studies and future careers.",
          images: [day8img1, day8img2],
        },
      ],
    },
  ]

  const [selectedPost, setSelectedPost] = useState(null)
  const blogSectionRef = useRef(null)

  const handlePostClick = (postId) => {
    const post = blogData.find((post) => post.id === postId)
    setSelectedPost(post)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // const handleBackClick = () => {
  //   setSelectedPost(null)
  // }

  const handleBackClick = () => {
    setSelectedPost(null);

    // Delay scroll until after state updates (and blog list is back in DOM)
    setTimeout(() => {
      if (blogSectionRef.current) {
        blogSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50); // Slight delay to ensure rendering
  };


  const scrollToBlog = () => {
    blogSectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="blog-page">
      {selectedPost ? (
        <div className="blog-post-wrapper">
          <BlogPost post={selectedPost} onBack={handleBackClick} />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section id="home" className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to My Educational Tour</h1>
              <p className="hero-description">
                Join me on an 8-day journey exploring industries and cultural sites across the Philippines
              </p>
              <button onClick={scrollToBlog} className="explore-button">
                Explore My Blog
              </button>
            </div>

            {/* <div className="scroll-indicator">
              <button onClick={scrollToBlog} className="scroll-button">
                <span>Scroll Down</span>
                <LuChevronDown size={24} />
              </button>
            </div> */}
          </section>

          {/* Blog Posts Section */}
          <section id="blog" ref={blogSectionRef} className="blog-section">
            <div className="blog-section-container">
              <h2 className="blog-section-title">Educational Tour Blog</h2>
              <p className="blog-section-description">
                Follow my 8-day journey through various industries and cultural sites in the Philippines
              </p>

              <div className="blog-grid">
                {blogData.map((post) => (
                  <BlogCard key={post.id} post={post} onClick={handlePostClick} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  )
}

export default Blog
