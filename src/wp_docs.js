const wp_docs = {
  wordpress: {
    themes: {
      name: "Themes",
      sections: [
        {
          name: "Template Files",
          topics: [
            {
              name: "Template Terminology",
              data: [
                {
                  format: "p",
                  text: "The term “template” is used in different ways when working with WordPress themes:",
                },
                {
                  format: "bullets",
                  text: "Templates files exist within a theme and express how your site is displayed./Page Templates are those that apply only to pages to change their look and feel.  A page template can be applied to a single page, a page section, or a class of pages./Template Tags are built-in WordPress functions you can use inside a template file to retrieve and display data (such as the_title() and the_content())./Template Hierarchy is the logic WordPress uses to decide which theme template file(s) to use, depending on the content being requested.",
                },
              ],
            },
            {
              name: "Template files",
              data: [
                {
                  format: "p",
                  text: "WordPress themes are made up of template files. These are PHP files that contain a mixture of HTML, Template Tags, and PHP code.",
                },
                {
                  format: "p",
                  text: "When you are building your theme, you will use template files to affect the layout and design of different parts of your website. For example, you would use the header.php template to create a header, or the comments.php template to include comments.",
                },
                {
                  format: "p",
                  text: "When someone visits a page on your website, WordPress loads a template based on the request. The type of content that is displayed in by the template file is determined by the Post Type associated with the template file.  The Template Hierarchy describes which template file WordPress will load based on the type of request and whether the template exists in the theme. The server then parses the PHP in the template and returns HTML to the visitor.",
                },
                {
                  format: "p",
                  text: "The most critical template file is index.php, which is the catch-all template if a more-specific template can not be found in the template hierarchy. Although a theme only needs a index.php template, typically themes include numerous templates to display different content types and contexts.",
                },
              ],
            },
            {
              name: "Template partials",
              data: [
                {
                  format: "p",
                  text: "A template partial is a piece of a template that is included as a part of another template, such as a site header. Template partials can be embedded in multiple templates, simplifying theme creation. Common template partials include:",
                },
                {
                  format: "bullets",
                  text: "header.php for generating the site’s header/header.php for generating the site’s header/sidebar.php for generating the sidebar",
                },
                {
                  format: "p",
                  text: "While the above template files are special-case in WordPress and apply to just one portion of a page, you can create any number of template partials and include them in other template files.",
                },
              ],
            },
            {
              name: "Common WordPress template files",
              data: [
                {
                  format: "stack",
                  text: "A template partial is a piece of a template that is included as a part of another template, such as a site header. Template partials can be embedded in multiple templates, simplifying theme creation. Common template partials include:",
                },
                {
                  format: "bullets",
                  text: "header.php for generating the site’s header/header.php for generating the site’s header/sidebar.php for generating the sidebar",
                },
                {
                  format: "p",
                  text: "While the above template files are special-case in WordPress and apply to just one portion of a page, you can create any number of template partials and include them in other template files.",
                },
              ],
            },
          ],
          intro:
            "Template files are used throughout WordPress themes to express how your site is displayed. ",
        },
      ],
    },
    template_tags: {
      name: "Template tags",
      general_tags: {
        name: "General tags",
        implementation:
          "https://core.trac.wordpress.org/browser/trunk/src/wp-includes/general-template.php#L0",
        functions: [
          {
            get_header: {},
          },
        ],
      },
    },
  },
  php: {},
};

export default wp_docs;
