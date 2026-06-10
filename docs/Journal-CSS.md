---
outline: deep
---
# What I learned:

## What is CSS?
CSS is what gives HTML its style. Position, color, and font. Examples:
```css
/* Font Colors body */
{ color: blue;
}

h1 {
color: green;
}


/* Font Types */
p.normal { 
font-style: normal;
}

p.italic {
font-style: italic;
}

p.oblique { 
font-style: oblique;
}


/* Positioning */

div {
height: 200px;
width: 50%;
background-color: powderblue;
}
```

The website with CSS will look like this:
![](/html-with-css.jpg)

## Basic Syntax
At the most basic level, CSS is made up of various rules. Each rule is made up of a selector and a semicolon-separated list of declarations, with each of those declarations being made up of a property–value pair.
![](/css.jpg)
### Selectors
Selectors refer to the HTML elements to which CSS rules apply; they’re what is actually being “selected” for each rule.

**Universal:**  
The universal selector will select elements of every type (as in the whole document), hence the name “universal”, and the syntax for it is a simple asterisk (*). In the example below, every element would have the color: purple; style applied to it.
```css
* {
  color: purple;
}
```

**Type selectors:**  
A type selector (or element selector) will select all elements of the given element type, and the syntax is just the name of the element:
```css
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```
```css
/* styles.css */

div {
  color: white;
}
```
**Class selectors:**  
Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element. Here’s how you add a class to an HTML tag and select it in CSS:
```css
<!-- index.html -->

<div class="alert-text">Please agree to our terms of service.</div>
```
```css
/* styles.css */

.alert-text {
  color: red;
}
```
::: warning Leading digits and classes
Class selectors won’t work if the class name begins with a number. For example, if you give an element the class name 4lert-text, using .4lert-text as a selector won’t match it.
:::
Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as `class="alert-text severe-alert"`. Since whitespace is used to separate class names like this, we should never use spaces for multi-worded names and should use a hyphen instead.

**ID Selectors:**
ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element. The major difference between classes and IDs is that an element can only have one ID. It cannot be repeated on a single page and should not contain any whitespace:
```css
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```
```css
/* styles.css */

#title {
  background-color: red;
}
```
For IDs, instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute. A common pitfall is people overusing the ID attribute when they don’t necessarily need to, and when classes will suffice. While there are cases where using an ID makes sense or is needed, such as taking advantage of specificity or having links redirect to a section on the current page, you should use IDs **sparingly** (if at all).
::: warning Leading digits and IDs
Just like class selectors, ID selectors can’t start with a number. For example, if we give an element the ID 7itle, the selector #7itle won’t work - it’s not a valid CSS selector.
:::

**The grouping selector**

What if we have two groups of elements that share some of their style declarations?
```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```
Both our `.read` and `.unread` selectors share the `color: white;` and `background-color: black;` declarations, but otherwise have several of their own unique declarations. To cut down on the repetition, we can group these two selectors together as a comma-separated list:
```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

**Chaining selectors**

Another way to use selectors is to chain them as a list without any separation. Let’s say we had the following HTML:
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
We have two elements with the `subsection` class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has `header` as a second class? We could chain both the class selectors together:
```css
.subsection.header {
  color: red;
}
```
What `.subsection.header` does is it selects any element that has both the subsection and header classes. Notice how there isn’t any space between the .subsection and `.header` class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector.

This can also be used to chain a class and an ID, as shown below:
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```
We can take the two elements above and combine them with the following:
```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```
In general, we can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like `div` and `p` would give us the selector `divp`, which wouldn’t work since the selector would try to find a literal `<divp>` element, which doesn’t exist.

