/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
 import { v4 as uuid } from "uuid";


 export const videos = [
  {
    _id: "5fa918f7-9bd8-4f92-af95-cab81b171d73",
    title: "Its Not Just a Star ",
    description:
      "The James Webb Space Telescope (Webb) has recently captured its most detailed image yet, less than three months after its launch in late December. NASA has confirmed that they have reached a new milestone in their efforts to set up the state-of-the-art telescope's optical system as it prepares for its first scientific observations in the summer. The new image shows a single, bright star against a backdrop of other, dimmer stars and galaxies in the far distance.",
    creator: "Soham Shah",
    video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585182/Video-library/It_s_Not_Just_a_Star_The_Latest_James_Webb_Space_Telescope_Image_Explained_4K_j8tjhu.mp4",
    thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg"
  },
  {
    _id: "65eacb68-b89e-4299-898f-ed93619e11d8",
    title: "The_Planets_Beyond_Neptune",
    creator: "Sentdex",
    description:
      "At the edge of the solar system, far beyond Neptune, a mysterious collection of worlds can be found, worlds that have only been discovered in the last few decades or so. These are the solar system's small wonders, the distant and icy dwarf planets as seen by the Hubble space telescope and other ground-based telescopes.",
      video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585252/Video-library/The_Planets_Beyond_Neptune__Explore_the_Edge_of_the_Solar_System_4K_p6umvg.mp4",
      thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843742/Video-library/maxresdefault_nyijk3.jpg"
    },
  {
    _id: "70eabc95-abc3-4153-b9c8-6e83033ceab6",
    title: "Whats Inside the Voyager Spacecraft Time Capsules",
    creator: "Sentdex",
    description:
      "In 1977, a journey unlike any other began when NASA's Voyager One and Voyager Two set off on a grand tour of the solar system. Each probe was on a path that would ultimately lead them out of the solar system and into the interstellar medium, the region in between the stars. Aboard each of the Voyager probes is a special golden record containing information about us, our world and our solar system, a kind of time capsule intended to communicate the story of our existence to any extraterrestrials that might come across the probes at some point in the far future. So what do the golden records contain? Natural sounds, Classic music, greetings in over fifty-five languages and 116 images that represent us and our planet.",
      video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585279/Video-library/What_s_Inside_the_Voyager_Spacecraft_Time_Capsules__4K_UHD_d9kkvb.mp4",
      thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843614/Video-library/maxresdefault_tj78rx.jpg"
    },
  {
    _id: "c8b0020c-6ab1-4865-96b0-e098fcbdaeb0",
    title: "Journey to the Center of the Milky Way Galaxy",
    creator: "Sentdex",
    description:
      "Come with me on an epic journey through time and space, from Earth to the center of the Milky Way galaxy. In this experience, you will fly faster than the speed of light out of the solar system, past the billions of stars that make up the Milky Way galaxy and into the galactic core, where a cosmic giant, a supermassive black hole, will be waiting for you.",
      video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585297/Video-library/Journey_to_the_Center_of_the_Milky_Way_Galaxy_Like_Never_Before_4K_a6guwk.mp4",
      thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843504/Video-library/maxresdefault_lsvcdb.jpg"
    },
    {
      _id: "912abedf-1e6d-48f8-a684-f018b3d8d780",
      title: "Its Not Just a Star ",
      description:
        "The James Webb Space Telescope (Webb) has recently captured its most detailed image yet, less than three months after its launch in late December. NASA has confirmed that they have reached a new milestone in their efforts to set up the state-of-the-art telescope's optical system as it prepares for its first scientific observations in the summer. The new image shows a single, bright star against a backdrop of other, dimmer stars and galaxies in the far distance.",
      creator: "Soham Shah",
      video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585182/Video-library/It_s_Not_Just_a_Star_The_Latest_James_Webb_Space_Telescope_Image_Explained_4K_j8tjhu.mp4",
      thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647841199/Video-library/maxresdefault_n3cjhc.jpg"
    },
    {
      _id: "3385b9cd-90e3-4914-8a93-f3f19177cd6f",
      title: "The_Planets_Beyond_Neptune",
      creator: "Sentdex",
      description:
        "At the edge of the solar system, far beyond Neptune, a mysterious collection of worlds can be found, worlds that have only been discovered in the last few decades or so. These are the solar system's small wonders, the distant and icy dwarf planets as seen by the Hubble space telescope and other ground-based telescopes.",
        video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585252/Video-library/The_Planets_Beyond_Neptune__Explore_the_Edge_of_the_Solar_System_4K_p6umvg.mp4",
        thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843742/Video-library/maxresdefault_nyijk3.jpg"
      },
    {
      _id: "cb556bdd-976c-4fd6-a0bf-0a265260f8cf",
      title: "Whats Inside the Voyager Spacecraft Time Capsules",
      creator: "Sentdex",
      description:
        "In 1977, a journey unlike any other began when NASA's Voyager One and Voyager Two set off on a grand tour of the solar system. Each probe was on a path that would ultimately lead them out of the solar system and into the interstellar medium, the region in between the stars. Aboard each of the Voyager probes is a special golden record containing information about us, our world and our solar system, a kind of time capsule intended to communicate the story of our existence to any extraterrestrials that might come across the probes at some point in the far future. So what do the golden records contain? Natural sounds, Classic music, greetings in over fifty-five languages and 116 images that represent us and our planet.",
        video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585279/Video-library/What_s_Inside_the_Voyager_Spacecraft_Time_Capsules__4K_UHD_d9kkvb.mp4",
        thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843614/Video-library/maxresdefault_tj78rx.jpg"
      },
    {
      _id: "c0465e16-80cb-4327-9a40-086bc53a5fd0",
      title: "Journey to the Center of the Milky Way Galaxy",
      creator: "Sentdex",
      description:
        "Come with me on an epic journey through time and space, from Earth to the center of the Milky Way galaxy. In this experience, you will fly faster than the speed of light out of the solar system, past the billions of stars that make up the Milky Way galaxy and into the galactic core, where a cosmic giant, a supermassive black hole, will be waiting for you.",
        video:"https://res.cloudinary.com/ramlinga/video/upload/v1647585297/Video-library/Journey_to_the_Center_of_the_Milky_Way_Galaxy_Like_Never_Before_4K_a6guwk.mp4",
        thumbnail:"https://res.cloudinary.com/ramlinga/image/upload/v1647843504/Video-library/maxresdefault_lsvcdb.jpg"
      }
];
