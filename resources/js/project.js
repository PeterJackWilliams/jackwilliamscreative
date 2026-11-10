
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
    description: "Video editing for scientific and medical communications, conference content and expert-led discussions.",
    services: "Video editing, graphics, colour grading",
    featuredImage: "../../resources/images/work/portfolio/esmo.svg",
    work: [
      {
        title: "Conference films & discussions",
        description: "Editing interviews, expert discussions and event content for a global oncology audience.",
        image: "../../resources/images/work/portfolio/esmo.svg"
      }
    ]
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
    category: "Corporate, Science & Healthcare",
    description: "Promotional and sports films showcasing the people, energy and opportunities within the school.",
    services: "Video editing, sports films",
    featuredImage: "../../resources/images/work/portfolio/millfield.jpg",
    work: [
      {
        videoEmbed: "https://youtu.be/zsuETTkrM0o?si=jgCMX007nCmQoM1Q",
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
      videoEmbed: "https://www.youtube.com/embed/NYVoC5G_O8U",
      videoType: "landscape"
    },
    {
      videoEmbed: "https://www.youtube.com/embed/kqITeCGulOs",
      videoType: "landscape"
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
    {
      instagramEmbed: "https://www.instagram.com/reel/CzwOQn5s2lg/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/C0w4Jb7MqDl/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/CvzZWsaMhSL/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/Cttv108sbEw/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/CvulPfVuFpL/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/Cq5vK-dMWQz/"
    }
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
      instagramEmbed: "https://www.instagram.com/p/DB1cjLSs9_v/"
    },
    {
      instagramEmbed: "https://www.instagram.com/reel/DfjcnloChof/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
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
      videoEmbed: "https://www.youtube.com/embed/DPxffhnVses",
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
        title: "Brand & product content",
        description: "A selection of brand and product-led edits.",
        image: "../../resources/images/work/portfolio/dr-david-jack.jpg"
      }
    ]
  },

  "farmette": {
    name: "Farmette",
    category: "Brand & Commercial",
    description: "Fashion, product and lifestyle content with a focus on visual detail and considered pacing.",
    services: "Video editing, fashion & product content",
    featuredImage: "../../resources/images/work/portfolio/farmette.jpg",
    work: [
      {
        title: "Fashion & lifestyle",
        description: "A selection of fashion, product and brand content.",
        image: "../../resources/images/work/portfolio/farmette.jpg"
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
  description.textContent = project.description;

  meta.innerHTML = `<div><strong>Services</strong>${escapeHTML(project.services)}</div>`;

  if (project.featuredImage) {
    const img = document.createElement("img");
    img.src = project.featuredImage;
    img.alt = `${project.name} selected work`;
    img.loading = "lazy";
    featured.appendChild(img);
  }

  if (!project.work || !project.work.length) {

    workGrid.innerHTML = '<p class="project-page-empty">Selected work will be added here soon.</p>';

  } else {

    project.work.forEach((item) => {

      const article = document.createElement("article");
      article.className = "project-work-item";

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
