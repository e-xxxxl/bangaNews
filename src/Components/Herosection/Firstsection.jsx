// import React from 'react';
// import working from '../../assets/vdmm.jpeg';
// import color from '../../assets/color.png';
// import outlook from '../../assets/outlook.png';
// import tinubu from '../../assets/tinubu.jpeg';
// import eagles from '../../assets/eagles.jpeg';

// const Firstsection = () => {
//     const captions = [
//         {
//             category: 'Voices',
//             timestamp: '48 minutes ago',
//             headline: '“I was struggling to speak”: Nigerians who stutter on navigating life',
//             description:
//                 'Entry into the 200-level archaeology department at the Ahmadu Bello University, Zaria, was to give a presentation tied to his grades in data collection and handling in archaeology.',
//             image: working,
//         },
//         {
//             category: 'Art & Culture',
//             timestamp: '2 hours ago',
//             headline: 'Exploring the vibrant colors of traditional art in Nigeria',
//             description:
//                 'A deep dive into how colors have shaped the perception and cultural representation of Nigerian art.',
//             image: color,
//         },
//         {
//             category: 'Tech',
//             timestamp: '1 day ago',
//             headline: 'Outlook: The future of AI in shaping human productivity',
//             description:
//                 'A comprehensive analysis of how artificial intelligence will impact productivity in the coming decade.',
//             image: outlook,
//         },
//         {
//             category: 'Politics',
//             timestamp: '3 days ago',
//             headline: 'Nigerian political landscape: Key highlights from this week',
//             description:
//                 'A detailed overview of the latest happenings in the Nigerian political scene.',
//             image: tinubu,
//         },
//         {
//             category: 'Sports',
//             timestamp: '5 days ago',
//             headline: 'Super Eagles: The journey to the next AFCON',
//             description:
//                 'An in-depth look at the preparations and challenges faced by the Nigerian Super Eagles.',
//             image: eagles,
//         },
//     ];

//     return (
//         <div className="container py-5">
//             <h2 className="headline pb-3 border-bottom">Headlines</h2>
//             {/* Carousel Section */}
//             <div className="carousel-container flex-shrink-0">
//                 <div
//                     id="carouselExampleAutoplaying"
//                     className="carousel slide"
//                     data-bs-ride="carousel"
//                 >
//                     <div className="carousel-inner">
//                         {captions.map((caption, index) => (
//                             <div
//                                 className={`carousel-item ${index === 0 ? 'active' : ''}`}
//                                 key={index}
//                             >
//                                 <img
//                                     src={caption.image}
//                                     className="d-block w-100 carousel-image"
//                                     alt={caption.headline}
//                                 />
//                                 <div className="carousel-caption d-block">
//                                     <h5>{caption.headline}</h5>
//                                     <p>{caption.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="d-flex flex-wrap">
//                 {/* Left News Column */}
//                 <div className="news-column flex-grow-1">
//                     <h5 className="section-title">Latest News</h5>
//                     <div className="news-list">
//                         {captions.map((news, index) => (
//                             <div className="news-card d-flex align-items-center" key={index}>
//                                 <img src={news.image} alt={news.headline} className="news-thumbnail" />
//                                 <div className="news-info">
//                                     <h6 className="news-category">{news.category}</h6>
//                                     <p className="news-headline">{news.headline}</p>
//                                     <span className="news-timestamp">{news.timestamp}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right News Column */}
//                 <div className="news-column flex-grow-1">
//                     <h5 className="section-title">Trending</h5>
//                     <div className="news-list">
//                         {captions
//                             .slice(0)
//                             .reverse()
//                             .map((news, index) => (
//                                 <div className="news-card d-flex align-items-center" key={index}>
//                                     <img src={news.image} alt={news.headline} className="news-thumbnail" />
//                                     <div className="news-info">
//                                         <h6 className="news-category">{news.category}</h6>
//                                         <p className="news-headline">{news.headline}</p>
//                                         <span className="news-timestamp">{news.timestamp}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             </div>

//             {/* CSS Styling */}
//             <style>
//                 {
//                 `.headline {
//                     font-size: 28px;
//                     font-weight: bold;
//                     margin-bottom: 20px;
//                 }

//                 .d-flex {
//                     display: flex;
//                     gap: 20px;
//                 }

//                 .news-column {
//                     width: 25%;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 15px;
//                 }

//                 .news-list {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 10px;
//                 }

//                 .news-card {
//                     padding: 10px;
//                     border-radius: 8px;
//                     background: #f9f9f9;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     transition: transform 0.2s ease, box-shadow 0.2s ease;
//                     cursor: pointer;
//                     display: flex;
//                     gap: 10px;
//                 }

//                 .news-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//                 }

//                 .news-thumbnail {
//                     width: 60px;
//                     height: 60px;
//                     object-fit: cover;
//                     border-radius: 8px;
//                     flex-shrink: 0;
//                 }

//                 .news-info {
//                     flex-grow: 1;
//                 }

//                 .news-category {
//                     font-size: 12px;
//                     font-weight: bold;
//                     text-transform: uppercase;
//                     color: #0047AB;
//                     margin-bottom: 5px;
//                 }

//                 .news-headline {
//                     font-size: 14px;
//                     font-weight: 500;
//                     margin: 0 0 8px;
//                 }

//                 .news-timestamp {
//                     font-size: 12px;
//                     color: #777;
//                 }

//                 .carousel-container {
//                     width: 50%;
//                 }

//                 .carousel-image {
//                     border-radius: 8px;
//                     height: 350px;
//                     object-fit: cover;
//                 }

//                 .carousel-caption {
//                     background: rgba(0, 0, 0, 0.6);
//                     color: white;
//                     padding: 10px 15px;
//                     border-radius: 8px;
//                     max-width: 80%;
//                     margin: auto;
//                     bottom: 20px;
//                 }

//                 .section-title {
//                     font-size: 16px;
//                     font-weight: bold;
//                     color: #333;
//                     margin-bottom: 10px;
//                     border-bottom: 2px solid #0047AB;
//                     display: inline-block;
//                 }

//                 @media (max-width: 768px) {
//                     .d-flex {
//                         flex-direction: column;
//                     }
//                     .news-column,
//                     .carousel-container {
//                         width: 100%;
//                     }
//                 }
//                 @media (max-width: 768px) {
//                     .d-flex {
//                         flex-direction: column;
//                         align-items: flex-start; /* Ensure content aligns to the left */
//                         gap: 10px;
//                     }
//                     .news-column {
//                         width: 100%;
//                     }
//                     .carousel-container {
//                         width: 100%;
//                     }
//                     .news-card {
//                         flex-direction: row; /* Ensure horizontal alignment */
//                         align-items: flex-start; /* Align content to the top */
//                     }
//                     .carousel-caption {
//                         text-align: left; /* Align text to the left */
//                         padding: 10px;
//                     }
//                     .news-thumbnail {
//                         margin-right: 10px; /* Add spacing between image and text */
//                     }
//                     .headline {
//                         text-align: left; /* Align headline text to the left */
//                     }
//                 }
//                 `}
//             </style>
//         </div>
//     );
// };

// export default Firstsection;


import React, { useState, useEffect } from 'react';
import working from '../../assets/vdmm.jpeg';
import color from '../../assets/color.png';
import outlook from '../../assets/outlook.png';
import tinubu from '../../assets/tinubu.jpg';
import eagles from '../../assets/eagless.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Firstsection = () => {
    const captions = [
        {
            category: 'Voices',
            timestamp: '48 minutes ago',
            headline: '“I was struggling to speak”: Nigerians who stutter on navigating life',
            description: 'Entry into the 200-level archaeology department at the Ahmadu Bello University, Zaria, was to give a presentation tied to his grades in data collection and handling in archaeology.',
            image: working,
        },
        {
            category: 'Art & Culture',
            timestamp: '2 hours ago',
            headline: 'Exploring the vibrant colors of traditional art in Nigeria',
            description: 'A deep dive into how colors have shaped the perception and cultural representation of Nigerian art.',
            image: color,
        },
        {
            category: 'Tech',
            timestamp: '1 day ago',
            headline: 'Outlook: The future of AI in shaping human productivity',
            description: 'A comprehensive analysis of how artificial intelligence will impact productivity in the coming decade.',
            image: outlook,
        },
        {
            category: 'Politics',
            timestamp: '3 days ago',
            headline: 'Nigerian political landscape: Key highlights from this week',
            description: 'A detailed overview of the latest happenings in the Nigerian political scene.',
            image: tinubu,
        },
        {
            category: 'Sports',
            timestamp: '5 days ago',
            headline: 'Super Eagles: The journey to the next AFCON',
            description: 'An in-depth look at the preparations and challenges faced by the Nigerian Super Eagles.',
            image: eagles ,
        },
    ];

    const [quote, setQuote] = useState('');

    useEffect(() => {
        const quotes = [
            "The best way to predict the future is to invent it.",
            "Success is not the key to happiness. Happiness is the key to success.",
            "Don't watch the clock; do what it does. Keep going.",
            "The only limit to our realization of tomorrow is our doubts of today.",
            "Creativity is intelligence having fun."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <div className="container py-5">
        <h2 className="headline pb-3 border-bottom">Headlines</h2>
        <div className="d-flex">
            {/* Carousel Section */}
            <div className="carousel-container flex-shrink-0">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        {captions.map((caption, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <img src={caption.image} className="d-block w-100 carousel-image" alt={caption.headline} />
                                <div className="carousel-caption d-block">
                                    <h5>{caption.headline}</h5>
                                    <p>{caption.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Quote of the Day Section */}
            <div className="quote-container flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="quote-content text-center p-4" style={{ background: '#f0f8ff', borderRadius: '8px' }}>
                    <h5 className="section-title">Quote of the Day</h5>
                    <p className="quote-text" style={{ fontStyle: 'italic', fontSize: '24px', color: '#333' }}>{quote}</p>
                </div>
            </div>
        </div>

        <div className="d-flex flex-wrap mt-4">
            {/* Left News Column */}
            <div className="news-column flex-grow-1">
                <h5 className="section-title">Latest News</h5>
                <div className="news-list">
                    {captions.map((news, index) => (
                        <div className="news-card d-flex align-items-center" key={index}>
                            <img src={news.image} alt={news.headline} className="news-thumbnail" />
                            <div className="news-info">
                                <h6 className="news-category">{news.category}</h6>
                                <p className="news-headline">{news.headline}</p>
                                <span className="news-timestamp">{news.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right News Column */}
            <div className="news-column flex-grow-1">
                <h5 className="section-title">Trending</h5>
                <div className="news-list">
                    {captions.slice(0).reverse().map((news, index) => (
                        <div className="news-card d-flex align-items-center" key={index}>
                            <img src={news.image} alt={news.headline} className="news-thumbnail" />
                            <div className="news-info">
                                <h6 className="news-category">{news.category}</h6>
                                <p className="news-headline">{news.headline}</p>
                                <span className="news-timestamp">{news.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* CSS Styling */}
        <style>
            {`
            .headline {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .d-flex {
                display: flex;
                gap: 20px;
            }

            .carousel-container {
                width: 60%;
            }

            .carousel-image {
                border-radius: 8px;
                height: 350px;
                object-fit: cover;
            }

            .carousel-caption {
                background: rgba(0, 0, 0, 0.6);
                color: white;
                padding: 10px 15px;
                border-radius: 8px;
                max-width: 80%;
                margin: auto;
                bottom: 20px;
            }

            .quote-container {
                width: 35%;
            }

            .quote-content {
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .quote-content:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }

            .section-title {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin-bottom: 10px;
                border-bottom: 2px solid #0047AB;
                display: inline-block;
            }

            .news-column {
                width: 48%;
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            .news-list {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .news-card {
                padding: 10px;
                border-radius: 8px;
                background: #f9f9f9;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                cursor: pointer;
                display: flex;
                gap: 10px;
            }

            .news-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }

            .news-thumbnail {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 8px;
                flex-shrink: 0;
            }

            .news-info {
                flex-grow: 1;
            }

            .news-category {
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
                color: #0047AB;
                margin-bottom: 5px;
            }

            .news-headline {
                font-size: 14px;
                font-weight: 500;
                margin: 0 0 8px;
            }

            .news-timestamp {
                font-size: 12px;
                color: #777;
            }

            @media (max-width: 768px) {
                .d-flex {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .carousel-container,
                .quote-container,
                .news-column {
                    width: 100%;
                }
                .news-card {
                    flex-direction: row;
                    align-items: flex-start;
                }
                .quote-text {
                    font-size: 18px;
                }
            }
            `}
        </style>
    </div>
    );
};

export default Firstsection;
