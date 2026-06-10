---
outline: deep
---
# What I learned:

## What is HTML?
It is the raw data from which a page is built. Text, links, cards, lists, and buttons. Examples:
```html
Web Content

<h1>Facebook</h1> <p>Sign Up.It's free and always will be.</p>

Web Images

<img src="facebook.com/logo"

alt="Facebook Logo">

Web Links

<a href="facebook.com/login">Login</a>

<b> - makes text bold
<center> - to make text centered
``` 

The HTML only site will look like this:
![](/html-only.jpg)

---

## Elements and Tags

Tags tell the browser that an HTML element is beginning. They consist of a keyword enclosed in angle brackets <>. For example, the opening tag for a paragraph looks like this: `<p>`.

Closing tags tell the browser where the element ends. The only difference is that they have a forward slash `</p>` before the keyword.

So, A full paragraph element will look like this:
```html
<p>some text content</p>
```


All types of HTML tags: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

- It is important to choose them correctly. 
- Using the correct tags can have a big impact on two aspects of your sites: how they are ranked in search engines; and how accessible they are to users who rely on assistive technologies, like screen readers, to use the internet. 
- Using the correct elements for content is called semantic HTML.

---

### Void Elements

Some HTML elements do not have a closing tag. These elements consist of a single tag, such as `<br> or <img>`. They are called empty elements because they do not contain any content—there is nothing inside them. The absence of a closing tag means that they cannot enclose content the way other tags do.

There are also tags known as self-closing tags. However, these are simply empty elements with a forward slash (/) at the end, such as: `<br /> or <img />`. They exist for historical reasons. Browsers can display them normally, but the latest version of the HTML specification does not recommend their use and considers them invalid.

---

## HTML Boilerplate
We should always name the HTML file that will contain the homepage of our website index.html. This is because web servers will by default look for an `index.html` page when users land on our websites – and not having one will cause big problems.

---

### The DOCTYPE

Every HTML page starts with a doctype declaration. The doctype’s purpose is to tell the browser what version of HTML it should use to render the document. The latest version of HTML is HTML5, and the doctype for that version is `<!DOCTYPE html>.`  
This also tells the browser which file it is reading  
The doctypes for older versions of HTML were a bit more complicated. For example, this is the doctype declaration for HTML4:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

---

### HTML element

After we declare the doctype, we need to provide an `<html>` element. This is what’s known as the root element of the document, meaning that every other element in the document will be a descendant of it.

The `<html>` element should be included on every HTML document.

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

---

### What is the lang attribute?

`lang` specifies the language of the text content in that element. This attribute is primarily used for improving accessibility of the webpage. It allows assistive technologies, for example screen readers, to adapt according to the language and invoke correct pronunciation.

---

### Head element

The `<head>` element is where we put important meta-information about our webpages, and stuff required for our webpages to render correctly in the browser. Inside the `<head>`, we should not use any element that displays content on the webpage.

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

---

### Meta element

We should always have the `<meta>` tag with the charset encoding of the webpage in the `<head>` element: `<meta charset="UTF-8">`.

Setting the encoding is very important because it ensures that the webpage will display special symbols and characters from different languages correctly in the browser.
Title element

Another element we should always include in the head of an HTML document is the `<title>` element:

`<title>My First Webpage</title>`

The `<title>` element is used to give webpages a human-readable title, which is displayed in our webpage’s browser tab.

If we didn’t include a `<title>` element, the webpage’s title would default to its file name.

---

### Body element

The final element needed to complete the HTML boilerplate is the `<body>` element. This is where all the content that will be displayed to users will go - the text, images, lists, links, and so on.

The `<body>` element also goes within the `<html>` element and is always below the `<head>` element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>
```

Now it is completed. 

Also HTML can be checked for errors by using https://validator.w3.org/#validate_by_input

---

## Working with Text
The output of
```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

Would be:  
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

When the browser encounters new lines like this, it will compress them down into one single space. The result of this compression is that all of the text is clumped together into one long line.  
If we want to create paragraphs, we need to use the paragraph element (`<p>`) which will add a new line after each of our paragraphs.

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.</p>
  </body>   
 </html>

```

---

### Headings
It is like `<p>`, but we can change the text size  
There are 6 different levels of headings starting from `<h1`> to `<h6>`. The largest - h1, the tiniest - h6  
An h1 heading should always be used for the heading of the overall page, and the lower level headings should be used as the headings for content in smaller sections of the page.  

--- 

### Strong element

The `<strong>` element makes text bold. It also semantically marks text as important; this affects tools, like screen readers, that users with visual impairments will rely on to use your website. The tone of voice on some screen readers will change to communicate the importance of the text within a strong element. It's best not to use `<b>`, since it's just a visual element and doesn't convey the word's importance or context.

---

### Em element

The `<em>` element makes text italic. It also semantically places emphasis on the text, which again may affect things like screen readers. Similarly, it’s best not to use `<i>`.

---

### Nesting and indentation

Indentation within elements located inside other elements is called element nesting.  
When we nest elements within one another, a "parent-child" relationship is established between them. The nested elements are the child, and the element in which they are nested is the parent.  
Here is the body element is the parent and the paragraph is the child:
```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
 ```
Just as in human relationships, HTML parent elements can have many children. Elements at the same level of nesting are considered to be siblings.  
The two paragraphs in the following code are siblings, since they are both children of the body element and are at the same level of nesting as each other:
```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
 ```
 
 ---
 
 ### HTML comments

To write a comment, we just enclose the comment with `<!-- and -->` tags:
```html
<h1> View the html to see the hidden comments </h1>

<!-- I am an html comment -->

<p>Some paragraph text</p>

<!-- I am another html comment -->
```
![](/comments.jpg)

---

## Lists

### Unordered

When the order doesn't matter.  
Unordered lists are created using the `<ul>` element, and each item within the list is created using the list item element `<li>`.
Each list item in an unordered list begins with a "•" symbol:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
![](/unordered-lists.jpg)

---

### Ordered
For step by step instructions, or a top list.
Ordered lists are created using the `<ol>` element. Each individual item in them is again created using the list item element `<li>`. However, each list item in an ordered list begins with a number instead:
```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```
![](/ordered-lists.jpg)

---

## Links and Images
They allow us to link to other HTML pages on the web. This is why it’s called the web.

---

### Anchor elements
To create a link in HTML, we need to use the anchor element. An anchor element is defined by wrapping the text or another HTML element we want to be a link with an `<a>` tag.
```html
<a>Example</a>
```
To finish, we need to add HTML attribute.  
An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value. In our case, we need to add an href (hypertext reference) attribute to the opening anchor tag. The value of the href attribute is the destination we want our link to go to.
```html
<a href="https://www.theodinproject.com/about">About The Odin Project</a>
```
By default, any text wrapped with an anchor tag without an href attribute will look like plain text. If the href attribute is present, the browser will give the text a blue color and underline it to signify it is a link.

---

### Opening links in a new tab
The method shown above opens links in the same tab as the webpage containing them. This is the default behavior of most browsers and it can be changed relatively easily. All we need is another attribute: the target attribute.
While href specifies the destination link, target specifies where the linked resource will be opened. If it is not present, then, by default, it will take on the `_self` value which opens the link in the current tab. To open the link in a new tab or window (depends on browser settings) wee need to set it to `_blank` as follows:
```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">About The Odin Project</a>
```
The 'rel' attribute is used to describe the relation between the current page and the linked document and can take multiple values. The most relevant ones to discuss right now are:
- noopener: Prevents the new tab from accessing the original page, which would have opened the possibility of phishing attacks like tabnabbing. Modern browsers all set this automatically for any links that have target="_blank". But we often still can see this manually set for historic browser compatibility.
- noreferrer: The same as noopener but also prevents certain details about the original page from being passed to the new page; referrer information is not always desirable to share.

---

### Absolute and relative links
Generally, there are two kinds of links we will create:
- Links to pages on other websites on the internet.
- Links to pages located on our own websites.

----

### Absolute links
Links to pages on other websites on the internet are called absolute links. A typical absolute link will be made up of the following parts: `scheme://domain/path`. An absolute link will always contain the scheme and domain of the destination.

---

### Relative links
Links to other pages within our own website are called relative links. Relative links do not include the domain name, since it is another page on the same site, it assumes the domain name will be the same as the page we created the link on.  
Relative links only include the file path to the other page, relative to the page you are creating the link on.  
Example:
```html
<a href="Journal-CSS">Journal CSS</a>
```
<a href="Journal-CSS">Journal CSS</a>

---

### Images
To display an image in HTML we use the `<img>` element. And this is a void element. As a reminder, void elements do not need a closing tag because they are naturally empty and do not contain any content.  
Instead of wrapping content with an opening and closing tag, it embeds an image into the page using a src attribute which tells the browser where the image file is located. The src attribute works much like the href attribute for anchor tags. It can embed an image using both absolute and relative paths.  
Example:  
```html
<img src="https://www.theodinproject.com/mstile-310x310.png">
```
<img src="https://www.theodinproject.com/mstile-310x310.png">

---

### Alt attribute
Besides the src attribute, every image element should also have an alt (alternative text) attribute.  
The alt attribute is used to describe an image. It will be used in place of the image if it cannot be loaded. It is also used with screen readers to describe what the image is to visually impaired users.
```html
<img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo">
```

---

### Image size attributes
It is a good habit to always specify these attributes on every image, even when the image is the correct size or you are using CSS to modify it. This is to prevent content jumping as images load.
```html
<img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo" height="310" width="310">
```
<img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo" height="310" width="310">