
/*
  EDITING YOUR PROJECT PAGES
  -------------------------
  Each entry below creates one client page.
  - description: the short introduction under the client name
  - services: the role/services you provided
  - featuredImage: large image at the top
  - work: add/remove project items
  - videoEmbed: optional YouTube/Vimeo EMBED URL
  - videoType: use "vertical" for Shorts or "landscape" for standard videos
*/
const projects = {
  "esmo": {
    name: "ESMO", category: "Corporate, Science & Healthcare",
    description: "Video editing for scientific and medical communications, conference content and expert-led discussions.",
    services: "Video editing, graphics, colour grading",
    featuredImage: "../../resources/images/work/portfolio/esmo.svg",
    work: [
      { title: "Conference films & discussions", description: "Editing interviews, expert discussions and event content for a global oncology audience.", image: "../../resources/images/work/portfolio/esmo.svg", videoEmbed: "" }
    ]
  },
  "dark-horse": {
    name: "Dark Horse", category: "Corporate, Science & Healthcare",
    description: "Editing science and healthcare-led films, bringing specialist subjects and stories together into clear, engaging content.",
    services: "Video editing, storytelling, graphics",
    featuredImage: "../../resources/images/work/portfolio/dark-horse.svg",
    work: [
      { title: "Science & healthcare films", description: "A selection of science and healthcare video projects edited for Dark Horse.", image: "../../resources/images/work/portfolio/dark-horse.svg", videoEmbed: "" }
    ]
  },
  "be-human-collective": {
    name: "Be Human Collective", category: "Corporate, Science & Healthcare",
    description: "Brand films and corporate content shaped around people, stories and the purpose behind an organisation.",
    services: "Video editing, storytelling",
    featuredImage: "../../resources/images/work/portfolio/be-human-collective.jpg",
    work: [
      { title: "Brand films", description: "A selection of brand and corporate films.", image: "../../resources/images/work/portfolio/be-human-collective.jpg", videoEmbed: "" }
    ]
  },
  "millfield": {
    name: "Millfield School", category: "Corporate, Science & Healthcare",
    description: "Promotional and sports films showcasing the people, energy and opportunities within the school.",
    services: "Video editing, sports films",
    featuredImage: "../../resources/images/work/portfolio/millfield.jpg",
    work: [
      { title: "School & sports films", description: "Promotional and sports content for Millfield School.", image: "../../resources/images/work/portfolio/millfield.jpg", videoEmbed: "" }
    ]
  },
  "bupa": {
    name: "Bupa", category: "Corporate, Science & Healthcare",
    description: "Science and educational films designed to make ideas and discoveries accessible to a wider audience.",
    services: "Video editing, educational content",
    featuredImage: "../../resources/images/work/portfolio/bupa.jpg",
    work: [
      { title: "Science & educational films", description: "A selection of educational and science-led films.", image: "../../resources/images/work/portfolio/bupa.jpg", videoEmbed: "" }
    ]
  },
  "wnu": {
    name: "With Nothing Underneath", category: "Brand & Commercial",
    description: "Fashion campaigns and social-first content for a modern womenswear brand.",
    services: "Social editing, campaign cutdowns, captions & graphics",
    featuredImage: "../../resources/images/work/portfolio/wnu.jpg",
    work: [
      {
        image: "../../resources/images/work/portfolio/crimson-moon.jpg",
        videoEmbed: "https://www.youtube.com/embed/8nxzdacwj80",
        videoType: "landscape"
      },
    ]
  },
  "dr-david-jack": {
    name: "Dr David Jack", category: "Brand & Commercial",
    description: "Brand and product content, edited to communicate the identity and detail of the range.",
    services: "Video editing, product content",
    featuredImage: "../../resources/images/work/portfolio/dr-david-jack.jpg",
    work: [
      { title: "Brand & product content", description: "A selection of brand and product-led edits.", image: "../../resources/images/work/portfolio/dr-david-jack.jpg", videoEmbed: "" }
    ]
  },
  "farmette": {
    name: "Farmette", category: "Brand & Commercial",
    description: "Fashion, product and lifestyle content with a focus on visual detail and considered pacing.",
    services: "Video editing, fashion & product content",
    featuredImage: "../../resources/images/work/portfolio/farmette.jpg",
    work: [
      { title: "Fashion & lifestyle", description: "A selection of fashion, product and brand content.", image: "../../resources/images/work/portfolio/farmette.jpg", videoEmbed: "" }
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
    meta.remove(); featured.remove(); workGrid.remove();
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

      if (item.videoEmbed) {
        media.classList.add(
          item.videoType === "vertical" ? "vertical-video" : "landscape-video"
        );

        const iframe = document.createElement("iframe");
        iframe.src = item.videoEmbed;
        iframe.title = `${item.title} video`;
        iframe.loading = "lazy";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        media.appendChild(iframe);
      } else if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.loading = "lazy";
        media.appendChild(img);
      } else {
        media.classList.add("project-page-empty");
        media.textContent = "Add an image or video embed in resources/js/project.js";
      }

      const heading = document.createElement("h3");
      heading.textContent = item.title;
      const copy = document.createElement("p");
      copy.textContent = item.description || "";
      article.append(media, heading, copy);
      workGrid.appendChild(article);
    });
  }

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
