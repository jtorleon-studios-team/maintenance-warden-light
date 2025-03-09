; (() => {
  async function visiteLink(href, target) {
    console.log("loading", href)
    try {
      const result = await fetch(href);
      if (result.ok) {
        const text = await result.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        target.innerHTML = "";

        const nodes = doc.querySelectorAll("div.col-content > *");
        if (nodes && nodes.length > 0) {
          nodes.forEach(v => target.appendChild(v));
          console.log("replaced", href);
        } else {
          // window.location.href = href;
          console.error("error nodes.length", nodes.length);
        }
      } else {
        // window.location.href = href;
        console.error("error result.ok", result.ok, result);
      }
    } catch (error) {
      // window.location.href = href;
      console.error("error fetch content", error);
    }
  }

  function applyLinks() {
    const links = document.querySelectorAll("a");
    const content = document.querySelectorAll("div.col-content");
 

    if (content && content.length === 1 && links.length > 0) {
      for (const v of links) {
        if (!v.href.startsWith(window.location.origin)) {
          v.target = "_blank";
          continue;
        }

        if (v.hasAttribute("attr_href")) {
          continue;
        }
        const href = v.href;
        v.setAttribute("attr_href", href);
        v.href = "javascript:void(0)";


        v.onclick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          visiteLink(href, content[0]);
          document.querySelectorAll("a.current").forEach(v => v.classList.remove("current"));
          v.classList.add("current");
        };
      }
    } else {
      console.error({ flag: content.length === 1 && links.length > 0 }, content.length, links.length)
    }
  }

  const observer = new MutationObserver(() => applyLinks()).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
