export function generateTOC() {
  const headings = [...document.querySelectorAll("h2, h3")];
  console.log(headings);
  const parsedHeadings = headings.map((heading) => {
    return {
      title: heading.innerText,
      depth: heading.nodeName.replace(/\D/g, ""),
      id: heading.getAttribute("id"),
    };
  });
  const htmlMarkup = parsedHeadings.map(
    (heading) => `
  <li class="${heading.depth > 2 ? "toc__sub" : "toc"}"><a href="#${
      heading.id
    }">${heading.title}</a></li>`
  );

  const finalMarkup = `<h4>Table of contents</h4><ul>${htmlMarkup.join(
    ""
  )}</ul>`;
  if (document.querySelector("aside") == null) {
    return;
  } else {
    const aside = document.querySelector("aside");
    aside.innerHTML = finalMarkup;
  }
}
