import DOMPurify from "dompurify";

/**
 * Sanitiza HTML eliminando scripts y atributos peligrosos
 */
export function sanitizeHTML(html: string): string {
  // Eliminar script tags
  let cleaned = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  
  // Eliminar atributos on* (onclick, onerror, etc.)
  cleaned = cleaned.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "");
  cleaned = cleaned.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, "");
  
  // Usar DOMPurify para sanitización adicional
  return DOMPurify.sanitize(cleaned, {
    ALLOWED_TAGS: [
      "html", "head", "body", "title", "meta", "link", "style",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr", "pre", "blockquote",
      "ul", "ol", "li", "dl", "dt", "dd",
      "a", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "span", "div",
      "table", "caption", "colgroup", "col", "tbody", "thead", "tfoot", "tr", "td", "th",
      "form", "fieldset", "legend", "label", "input", "button", "select", "datalist", "optgroup", "option", "textarea", "output", "progress", "meter",
      "details", "summary", "menu", "menuitem",
      "img", "iframe", "embed", "object", "param", "video", "audio", "source", "track", "canvas", "map", "area",
      "svg", "math",
      "article", "aside", "nav", "section", "header", "footer", "main", "address",
    ],
    ALLOWED_ATTR: [
      "id", "class", "style", "title", "lang", "dir",
      "href", "target", "rel", "type", "media",
      "src", "alt", "width", "height", "loading",
      "for", "name", "value", "placeholder", "required", "disabled", "readonly", "checked", "selected",
      "colspan", "rowspan", "scope", "headers",
      "role", "aria-*",
    ],
    FORBID_TAGS: ["script", "iframe"],
    FORBID_ATTR: ["onerror", "onclick", "onload", "onmouseover"],
  });
}
