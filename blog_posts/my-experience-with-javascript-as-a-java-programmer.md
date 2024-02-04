---
id: "my-experience-with-javascript-as-a-java-programmer"
title: "My experience with JavaScript as a Java programmer"
date: "2022-06-22"
tags: ["JavaScript", "Java", "Programming", "Web Development"]
description: "In this blog, I would like to talk about the things that I like about JavaScript and what I don't as a Java programmer"
---

My programming journey started with **Java**. It's a great language to learn about core programming and **OOP** concepts.

A few months ago, I started learning **JavaScript** as a part of my **Full Stack Web Developer** goal. JavaScript is immensely popular and it has a great ecosystem. There are tons of JavaScript libraries and framework out there like React, Vue, Angular etc.

![JavaScript JavaScript everywhere meme](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vmbmomxaujdfhs0n5yzp.jpeg)

Because of my familiarity with Java, learning JavaScript has been very comfortable for me.

So, in this blog, I would like to talk about the things that I like about JavaScript and what I don't as a Java programmer

---

## What I like about JavaScript

### 1: No boilerplate code

**No more `public static void main(String[] args)`**.
With JavaScript, I don't have to write unnecessary boilerplate code just because I want to run a small piece of code. No need to define a class and a main method for everything. I know that they have their significance in Java and what they are important but sometimes it is frustrating.

### 2: Higher Order functions and Callback

I really love being able to create functions that can be passed different functionality according to my need. I don't have to define a whole new function just because there is some slight difference in functionality.

They allow us to compose different operations.

H.O.F functions like `map()`, `filter()`, `reduce()` are extremely helpful when I want to perform some operation on a collection of items.

Java also has support for Higher order functions with Lambdas and the Functional interface, but I never used them as frequently as I use in JavaScript.

### 3: Objects

**Objects are the bread and butter of JavaScript.**

Objects are probably my favourite part of JS. I love how easy it is to create and use objects in JavaScript. No need to always define a class whenever I want to group together related pieces of information, I can just create an object for it.

With ES6, it is easier than ever to use objects. Object destructuring makes it so easy to extract and use values from objects.

```js
// before ES6
let person = {
	name: "Utkarsh",
	username: "utkarsh1311",
};

let name = person.name;
let username = person.username;

.log(name, username); // Utkarsh utkarsh1311

// after ES6
let person = {
	name: "Utkarsh",
	username: "utkarsh1311",
};

let { person, username } = person;

console.log(person, username); // Utkarsh utkarsh1311
```

### 4: The JavaScript Ecosystem

JavaScript was developed to make the frontend of web along with HTML and CSS. There are so many frontend libraries and frameworks based on JavaScript like React, Vue, Angular, Next.js and many many more.

JavaScript now also has the abiltity to run outside browsers thanks to technologies like Node.js.

This huge ecosystem allows us to build almost anything with the help of JavaScript.
You can develop web app with React or Vue, desktop apps with Electron.js, mobile app with React Native, Xamarin.
The possibilities are endless.

I never felt this freedom with Java. I know Java has it's own use cases where it shines but I really enjoy JavaScript more due to being able to build stuff.

## What I don't like about JavaScript

### 1: Object Oriented Programming

I know, I know, I said that I love using objects in JS. So why now I am saying I don't like OOP in JS.

Well, It is true that I love to use JS objects, I simply can't wrap my head around the way OOP is implemented in JavaScript.
JavaScript uses something called **Prototype based OOP**. That means there is no concept of classes in JavaScript. And maybe because I have a Java background, I have a very clear mental model of traditional class based OOP.

With ES6, JS has introduced a class based syntax which makes it easier to write Object oriented code, but it is just syntactical sugar and under the hood, it still uses the Prototype based OOP.

After watching [JavaScript-The Hard parts by Will Sentance](https://frontendmasters.com/courses/javascript-hard-parts-v2/), my understanding of OOP in JS has definitely improved, but I still don't like it.

### 2: Asynchronous JavaScript

Asynchronous means things that happen independent of the main program flow.
Asynchronous programming is the backbone of modern web development. It is a very important aspect of JS to learn if you wish to be a successful web developer.
When I started writing code which involved some sort of async operation, I made a lot of mistakes because I didn't have any idea about how asynchronous programminga actually works in JS.
I struggled a lot with Promises, then, catch, async, await etc. I still do. There are still certain concepts in Asynchronous JS which is hard for me wrap my head around.

## Summary

This was all about my experience with JavaScript as a Java programmer.
Overall, I am really enjoying coding in JavaScript and I think I am starting to like it more than Java (_Sorry Java..._).  
Let me know what you think...😊
