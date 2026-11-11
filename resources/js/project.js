
/*
  EDITING YOUR PROJECT PAGES
  -------------------------
  Each entry below creates one client page.

  - description: introduction under client name
  - services: your role/services
  - featuredImage: large image at the top
  - work: add/remove project items
  - videoEmbed: YouTube/Vimeo EMBED URL
  - videoSrc: direct MP4 video URL
  - instagramEmbed: Instagram post URL
  - videoType: "vertical" or "landscape"
*/

const projects = {
  "esmo": {
    name: "ESMO",
    category: "Corporate, Science & Healthcare",

    sections: [
        {
            heading: "The Project",
            text: "The European Society for Medical Oncology (ESMO) is dedicated to improving cancer care through education, research and promoting equal access to the latest advances in oncology. Its video content plays an important role in sharing scientific developments, expert knowledge and best practices with the wider medical community."
        },
        {
            heading: "My Role",
            text: "My work involves editing polished, engaging content across a range of video series, including international congress coverage and expert-led discussions. This involves combining interviews, event footage, B-roll and presentation slides with bespoke graphics, animated titles and transitions. A key part of my role is translating complex scientific information into clear, accurate visual content. This requires close attention to detail when designing and animating graphics and presentation slides, ensuring information remains precise without compromising clarity."
        },
        {
            heading: "Case Studies",
            text: "At ESMO Congress Berlin 2025 and Madrid 2026, I edited 18 videos onsite at each event, working to tight deadlines to ensure content was ready for release within a month of each congress. With scientific developments moving quickly, timely delivery was essential. Both projects were completed on schedule, maintaining a consistently high standard across all 36 videos."
        }
    ],

    services: "Video editing, graphics, colour grading",
},

  "dark-horse": {
    name: "Dark Horse",
    category: "Corporate, Science & Healthcare",
    description: "Editing science and healthcare-led films, bringing specialist subjects and stories together into clear, engaging content.",
    services: "Video editing, storytelling, graphics",
    featuredImage: "../../resources/images/work/portfolio/dark-horse.svg",
    work: [
      {
        title: "Science & healthcare films",
        description: "A selection of science and healthcare video projects edited for Dark Horse.",
        image: "../../resources/images/work/portfolio/dark-horse.svg"
      }
    ]
  },

  "be-human-collective": {
    name: "Be Human Collective",
    category: "Corporate, Science & Healthcare",
    description: "Brand films and corporate content shaped around people, stories and the purpose behind an organisation.",
    services: "Video editing, storytelling",
    featuredImage: "../../resources/images/work/portfolio/be-human-collective.jpg",
    work: [
      {
        title: "Brand films",
        description: "A selection of brand and corporate films.",
        image: "../../resources/images/work/portfolio/be-human-collective.jpg"
      }
    ]
  },

  "millfield": {
    name: "Millfield School",
    category: "Brand & Commercial",
    description: "Promotional and sports films showcasing the people, energy and opportunities within the school.",
    services: "Video editing, sports films",
    featuredImage: "../../resources/images/work/portfolio/millfield.jpg",
    work: [
      {
        videoEmbed: "https://www.youtube.com/embed/zsuETTkrM0o?si=jgCMX007nCmQoM1Q",
        videoType: "landscape"
      }
    ]
  },

  "bupa": {
  name: "Bupa",
  category: "Corporate, Science & Healthcare",
  description: "Science and educational films designed to make ideas and discoveries accessible to a wider audience.",
  services: "Video editing, educational content",
  featuredImage: "../../resources/images/work/portfolio/bupa.jpg",
  work: [
    {
      videoEmbed: "https://www.youtube.com/embed/UG6oyeYhJww",
      videoType: "landscape"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/CzwOQn5s2lg/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/C0w4Jb7MqDl/"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/NYVoC5G_O8U",
      videoType: "landscape"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/CvzZWsaMhSL/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/Cttv108sbEw/"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/kqITeCGulOs",
      videoType: "landscape"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/CvulPfVuFpL/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/Cq5vK-dMWQz/"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/WJMQUL_sgF4",
      videoType: "landscape"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/V40yCVFDSA4",
      videoType: "landscape"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/BNnntSr30Rc",
      videoType: "landscape"
    },
  ]
},
  
  "wnu": {
  name: "With Nothing Underneath",
  category: "Brand & Commercial",
  description: "Fashion campaigns and social-first content for a modern womenswear brand.",
  services: "Social editing, campaign cutdowns, captions & graphics",
  featuredImage: "../../resources/images/work/portfolio/wnu.jpg",
  work: [
    {
      videoEmbed: "https://www.youtube.com/embed/0yeQnhUJ5dU",
      videoType: "landscape"
    },
    {
      instagramEmbed: "https://www.instagram.com/p/DB1cjLSs9_v/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/DfjcnloChof/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/DQREOOCAklG/"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/dYuhaw3i5jQ",
      videoType: "vertical"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/ercomuR4ypQ",
      videoType: "vertical"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/pQI3bzU-_I4",
      videoType: "vertical"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/xer41gjVVO8",
      videoType: "vertical"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/wMbqcp17VGg",
      videoType: "vertical"
    },
    {
      videoEmbed: "https://youtube.com/embed/RcjZUL3RhgE",
      videoType: "vertical"
    }
  ]
},

  "dr-david-jack": {
    name: "Dr David Jack",
    category: "Brand & Commercial",
    description: "Brand and product content, edited to communicate the identity and detail of the range.",
    services: "Video editing, product content",
    featuredImage: "../../resources/images/work/portfolio/dr-david-jack.jpg",
    work: [
      {
        instagramEmbed: "https://www.instagram.com/reel/DfAc8USORSn/"
      },
      {
        instagramEmbed: "https://www.instagram.com/reel/DdzFwk_uu0-/"
      }
    ]
  },

  "dialect": {
    name: "Dialect",
    category: "Gaming & Entertainment",
    description: "Game trailers and promotional edits created for video game projects, combining pace, atmosphere and gameplay-led storytelling.",
    services: "Trailer editing, promotional editing",
    featuredImage: "../../resources/images/work/portfolio/dialect.jpg",
    work: [
      {
        videoEmbed: "https://www.youtube.com/embed/8nxzdacwj80",
        videoType: "landscape"
      },
      {
        videoEmbed: "https://www.youtube.com/embed/kcOEd73G58M",
        videoType: "vertical"
      },
      {
        videoEmbed: "https://youtube.com/embed/BIBCIhds7bA",
        videoType: "vertical"
      }
    ]
  }
};


(() => {

  const id = new URLSearchParams(window.location.search).get("id");
  const project = projects[id];

  const title = document.getElementById("project-title");
  const description = document.getElementById("project-description");
  const eyebrow = document.getElementById("project-eyebrow");
  const meta = document.getElementById("project-meta");
  const featured = document.getElementById("project-featured");
  const workGrid = document.getElementById("project-work-grid");

  if (!project) {
    document.title = "Project not found | Jack Williams Creative";
    eyebrow.textContent = "Portfolio";
    title.textContent = "Project not found";
    description.textContent = "Sorry, this project page could not be found. Head back to the Work page to browse the portfolio.";
    meta.remove();
    featured.remove();
    workGrid.remove();
    return;
  }

  
document.title = `${project.name} | Selected Work`;
eyebrow.textContent = project.category;
title.textContent = project.name;

// DISPLAY PROJECT DESCRIPTION / SECTIONS
description.replaceChildren();

if (project.sections && project.sections.length) {

    project.sections.forEach((section) => {

        const sectionWrapper = document.createElement("div");
        sectionWrapper.className = "project-description-section";

        const heading = document.createElement("h3");
        heading.textContent = section.heading;

        const paragraph = document.createElement("p");
        paragraph.textContent = section.text;

        sectionWrapper.append(heading, paragraph);
        description.appendChild(sectionWrapper);

    });

} else if (project.description) {

    // Keep existing project pages working as before.
    const paragraph = document.createElement("p");
    paragraph.textContent = project.description;
    description.appendChild(paragraph);

}


  meta.innerHTML = `<div><strong>Services</strong>${escapeHTML(project.services)}</div>`;

  if (project.featuredImage) {
    const img = document.createElement("img");
    img.src = project.featuredImage;
    img.alt = `${project.name} selected work`;
    img.loading = "lazy";
    featured.appendChild(img);
  }

  if (!project.work || !project.work.length) {

    // Hide the entire Selected Work section when there is no content.
    document.getElementById("project-work-heading").parentElement.parentElement.remove();

} else {

    project.work.forEach((item) => {

      const article = document.createElement("article");
      article.className = "project-work-item";

      // Keep vertical videos and Instagram posts in the normal grid.
      // Make landscape videos span the full width.
      if (item.instagramEmbed || item.videoType === "vertical") {
        article.classList.add("vertical-work-item");
        } else if (item.videoType === "landscape") {
        article.classList.add("landscape-work-item");
      }
      const media = document.createElement("div");
      media.className = "project-work-media";


      // INSTAGRAM EMBED
      if (item.instagramEmbed) {

        media.classList.add("instagram-embed");

        const blockquote = document.createElement("blockquote");
        blockquote.className = "instagram-media";
        blockquote.dataset.instgrmPermalink = item.instagramEmbed;
        blockquote.dataset.instgrmVersion = "14";

        media.appendChild(blockquote);
        

      // SELF-HOSTED VIDEO
      } else if (item.videoSrc) {

        media.classList.add(
          item.videoType === "vertical" ? "vertical-video" : "landscape-video"
        );

        const video = document.createElement("video");
        video.src = item.videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        if (item.videoPoster) {
          video.poster = item.videoPoster;
        }

        media.appendChild(video);


      // YOUTUBE / VIMEO EMBED
      } else if (item.videoEmbed) {

        media.classList.add(
          item.videoType === "vertical" ? "vertical-video" : "landscape-video"
        );

        const iframe = document.createElement("iframe");
        iframe.src = item.videoEmbed + "?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1";
        iframe.title = `${item.title || project.name} video`;
        iframe.loading = "lazy";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        media.appendChild(iframe);


      // IMAGE
      } else if (item.image) {

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title || project.name;
        img.loading = "lazy";

        media.appendChild(img);

      } else {

        media.classList.add("project-page-empty");
        media.textContent = "Add an image or video embed in resources/js/project.js";

      }

      const heading = document.createElement("h3");
      heading.textContent = item.title || "";

      const copy = document.createElement("p");
      copy.textContent = item.description || "";

      article.append(media, heading, copy);
      workGrid.appendChild(article);

    });

  }


  // LOAD INSTAGRAM SCRIPT ONLY WHEN NEEDED
  function loadInstagramEmbeds() {

    if (!workGrid.querySelector(".instagram-media")) return;

    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        window.instgrm?.Embeds?.process();
      }, { once: true });

      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.instgrm?.Embeds?.process();
    };

    document.body.appendChild(script);
  }

  loadInstagramEmbeds();


  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

})();
