import{r as e,j as t}from"./react-DMV8Ud2p.js";import{c as a}from"./react-dom-DEfrrizA.js";import{m as i}from"./react-scroll-CyzKW_P8.js";import{m as s,A as r}from"./framer-motion-D5wsPhma.js";import{F as n,a as l,b as o,c,d,e as m,f as h,g as p,h as x,i as u,j as g,k as j,l as v,m as y,n as b,o as f}from"./@heroicons-CeBES6XX.js";import{m as N}from"./react-type-animation-C80-O6_z.js";import{u as w}from"./react-intersection-observer-01Hpv5PL.js";import"./lodash.throttle-Dibn5afV.js";import"./scheduler-BFk34ZWe.js";import"./prop-types-Bx5UHif0.js";import"./motion-dom-DOIgyLwK.js";import"./motion-utils-Cn7fW4KM.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k=e.createContext(),S=({children:a})=>{const[i,s]=e.useState((()=>{const e=localStorage.getItem("theme");return e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}));e.useEffect((()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(i),localStorage.setItem("theme",i)}),[i]);
return t.jsx(k.Provider,{value:{theme:i,toggleTheme:()=>{s((e=>"light"===e?"dark":"light"))}},children:a})},L=()=>{const[a,d]=e.useState(!1),[m,h]=e.useState(!1),{theme:p,toggleTheme:x}=(()=>{const t=e.useContext(k);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t})(),u=[{name:"Home",to:"home"},{name:"About",to:"about"},{name:"Skills",to:"skills"},{name:"Education",to:"education"},{name:"Projects",to:"projects"},{name:"Contact",to:"contact"}];e.useEffect((()=>{const e=()=>{h(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const g=()=>{const e=document.createElement("a");e.href="/RAMYA_RANJAN_NAIK-Resume.pdf",e.download="RAMYA_RANJAN_NAIK-Resume.pdf",e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"),document.body.appendChild(e),e.click(),document.body.removeChild(e)};
return t.jsx(s.nav,{initial:"hidden",animate:"visible",variants:{hidden:{y:-100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}},className:`fixed w-full z-50 transition-all duration-300 ${m?"bg-white/80 backdrop-blur-md shadow-lg":"bg-transparent"} ${"dark"===p?"dark:bg-dark/80":"bg-light/80"}`,children:t.jsxs("div",{className:"container py-4",children:[
t.jsxs("div",{className:"flex items-center justify-between",children:[
t.jsx(s.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"text-2xl font-bold gradient-text",children:"Portfolio"}),
t.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[u.map(((e,a)=>t.jsx(s.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*a},children:t.jsx(i.Link,{to:e.to,spy:!0,smooth:!0,offset:-100,duration:500,className:"nav-link cursor-pointer",children:e.name})},e.to))),
t.jsx(s.button,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*u.length},onClick:g,className:"px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors",children:"Download Resume"}),
t.jsx(s.button,{onClick:x,className:"p-2 rounded-full bg-dark/5 dark:bg-light/5 hover:bg-dark/10 dark:hover:bg-light/10 transition-colors",whileHover:{scale:1.05},whileTap:{scale:.95},children:"dark"===p?t.jsx(n,{className:"w-5 h-5 text-yellow-500"}):t.jsx(l,{className:"w-5 h-5 text-slate-700"})})]}),
t.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[
t.jsx(s.button,{onClick:x,className:"p-2 rounded-full bg-dark/5 dark:bg-light/5 hover:bg-dark/10 dark:hover:bg-light/10 transition-colors",whileHover:{scale:1.05},whileTap:{scale:.95},children:"dark"===p?t.jsx(n,{className:"w-5 h-5 text-yellow-500"}):t.jsx(l,{className:"w-5 h-5 text-slate-700"})}),
t.jsx(s.button,{whileTap:{scale:.9},onClick:()=>d(!a),className:"md:hidden",children:a?t.jsx(o,{className:"h-6 w-6"}):t.jsx(c,{className:"h-6 w-6"})})]})]}),
t.jsx(r,{children:a&&t.jsxs(s.div,{initial:"closed",animate:"open",exit:"closed",variants:{closed:{opacity:0,scale:.95,transition:{duration:.2}},open:{opacity:1,scale:1,transition:{duration:.2}}},className:"md:hidden py-4",children:[u.map(((e,a)=>t.jsx(s.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*a},children:t.jsx(i.Link,{to:e.to,spy:!0,smooth:!0,offset:-100,duration:500,className:"block py-2 nav-link cursor-pointer",onClick:()=>d(!1),children:e.name})},e.to))),
t.jsx(s.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*u.length},onClick:g,className:"w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors",children:"Download Resume"})]})})]})})},T=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};
return t.jsxs("section",{id:"home",className:"min-h-screen flex items-center relative overflow-hidden",children:[
t.jsxs("div",{className:"absolute inset-0 -z-10",children:[
t.jsx(s.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-30"}),
t.jsx(s.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-secondary/20 to-transparent opacity-30"})]}),
t.jsx("div",{className:"container",children:t.jsxs(s.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},initial:"hidden",animate:"visible",className:"max-w-4xl mx-auto text-center",children:[
t.jsx(s.h2,{variants:e,className:"text-xl md:text-2xl text-primary font-medium mb-4",children:"Welcome to my portfolio"}),
t.jsxs(s.h1,{variants:e,className:"text-4xl md:text-6xl lg:text-7xl font-bold mb-6",children:["Hi, I'm"," ",
t.jsx("span",{className:"gradient-text",children:t.jsx(N,{sequence:["Ramya Ranjan Naik",2e3,"a Full-Stack Developer",2e3],wrapper:"span",repeat:1/0})})]}),
t.jsx(s.p,{variants:e,className:"text-lg md:text-xl text-dark-content/80 mb-8 max-w-2xl mx-auto",children:"I create beautiful and functional websites with modern technologies and best practices."}),
t.jsxs(s.div,{variants:e,className:"flex flex-wrap justify-center gap-4",children:[
t.jsx(s.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:t.jsx(i.Link,{to:"contact",smooth:!0,duration:500,offset:-100,children:t.jsx("button",{className:"btn-primary",children:"Get in Touch"})})}),
t.jsx(s.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:t.jsx(i.Link,{to:"projects",smooth:!0,duration:500,offset:-100,children:t.jsx("button",{className:"btn-outline",children:"View Projects"})})})]}),
t.jsx(s.div,{variants:e,animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-10 left-1/2 -translate-x-1/2",children:t.jsx(i.Link,{to:"about",smooth:!0,duration:500,offset:-100,children:t.jsx(d,{className:"w-6 h-6 text-primary cursor-pointer"})})})]})})]})},A=()=>{const[e,a]=w({threshold:.3,triggerOnce:!0}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};
return t.jsxs("section",{id:"about",className:"section-padding bg-secondary/5 relative overflow-hidden",children:[
t.jsx(s.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"}),
t.jsx(s.div,{animate:{rotate:-360},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"}),
t.jsx("div",{className:"container",children:t.jsxs(s.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:a?"visible":"hidden",className:"max-w-6xl mx-auto",children:[
t.jsx(s.h2,{variants:i,className:"section-title text-center",children:"About Me"}),
t.jsx(s.p,{variants:i,className:"section-subtitle text-center",children:"Get to know me and my journey in web development"}),
t.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center mt-12",children:[
t.jsxs(s.div,{variants:i,className:"relative",children:[
t.jsx(s.div,{whileHover:{scale:1.02},className:"rounded-2xl overflow-hidden",children:t.jsx("img",{src:"/profile-photo.jpg",alt:"Profile",className:"w-full h-auto"})}),
t.jsx(s.div,{animate:{y:[-10,10,-10]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-10"})]}),
t.jsxs(s.div,{variants:i,className:"space-y-6",children:[
t.jsx("h3",{className:"text-2xl font-bold",children:"Full Stack Developer with expertise in React.js & Node.js"}),
t.jsx("p",{className:"text-dark-content/80",children:"Currently working as a Web Developer at SOUL Limited, I specialize in building robust web applications using React.js, Node.js, and modern web technologies. With over 4 years of experience, I've successfully delivered multiple high-impact projects that have significantly improved business efficiency."}),
t.jsx("p",{className:"text-dark-content/80",children:"My experience includes developing park reservation systems, bus terminal management platforms, and RFID-based alert systems. I'm passionate about creating efficient, user-friendly solutions that solve real-world problems and enhance operational processes."}),
t.jsx("div",{className:"grid grid-cols-2 gap-4 pt-6",children:[{number:"4+",text:"Years Experience"},{number:"5+",text:"Projects Completed"}].map(((e,a)=>t.jsxs(s.div,{variants:i,whileHover:{scale:1.05},className:"text-center p-4 rounded-lg bg-white dark:bg-dark-darker shadow-lg",children:[
t.jsx("h4",{className:"text-2xl font-bold text-primary",children:e.number}),
t.jsx("p",{className:"text-sm text-dark-content/60",children:e.text})]},a)))})]})]})]})})]})},C=()=>{const[e,a]=w({threshold:.2,triggerOnce:!0}),i=[{category:"Frontend",icon:t.jsx(m,{className:"w-6 h-6"}),skills:[{name:"React.js"},{name:"Redux"},{name:"HTML/CSS"},{name:"JavaScript"},{name:"Tailwind CSS"},{name:"jQuery"}]},{category:"Backend",icon:t.jsx(h,{className:"w-6 h-6"}),skills:[{name:"Node.js"},{name:"Express.js"}]},{category:"Database",icon:t.jsx(p,{className:"w-6 h-6"}),skills:[{name:"PostgreSQL"},{name:"MySQL"},{name:"SQL Server"}]},{category:"Tools & Others",icon:t.jsx(x,{className:"w-6 h-6"}),skills:[{name:"Git"},{name:"JWT"},{name:"Vite"},{name:"REST APIs"}]}],r={hidden:{opacity:0,x:20},visible:{opacity:1,x:0,transition:{duration:.5}}};
return t.jsxs("section",{id:"skills",className:"section-padding relative overflow-hidden",children:[
t.jsx("div",{className:"absolute inset-0 -z-10",children:t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"})}),
t.jsx("div",{className:"container",children:t.jsxs(s.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:a?"visible":"hidden",className:"max-w-6xl mx-auto",children:[
t.jsx(s.h2,{variants:r,className:"section-title text-center",children:"Technical Skills"}),
t.jsx(s.p,{variants:r,className:"section-subtitle text-center",children:"Technologies and tools I work with"}),
t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16",children:i.map(((e,i)=>t.jsx(s.div,{variants:r,className:"relative",children:t.jsxs("div",{className:"card h-full",children:[
t.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[
t.jsx("div",{className:"p-2 bg-primary/10 rounded-lg text-primary",children:e.icon}),
t.jsx("h3",{className:"text-xl font-bold",children:e.category})]}),
t.jsx("div",{className:"space-y-4",children:e.skills.map(((e,r)=>t.jsxs(s.div,{initial:{opacity:0,x:20},animate:a?{opacity:1,x:0}:{opacity:0,x:20},transition:{duration:.5,delay:.2*i+.1*r},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 transition-colors group",children:[
t.jsx("span",{className:"text-dark-content dark:text-light-content",children:e.name}),
t.jsx(s.div,{className:"absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity",animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"}})]},e.name)))})]})},e.category)))})]})})]})},I=()=>{const[e,a]=w({threshold:.2,triggerOnce:!0}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};
return t.jsx("section",{id:"projects",className:"section-padding",children:t.jsx("div",{className:"container",children:t.jsxs(s.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:a?"visible":"hidden",className:"max-w-6xl mx-auto",children:[
t.jsx(s.h2,{variants:i,className:"section-title text-center",children:"Featured Projects"}),
t.jsx(s.p,{variants:i,className:"section-subtitle text-center",children:"Some of my recent works that showcase my skills"}),
t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",children:[{title:"E-Commerce Platform",description:"A full-stack e-commerce platform with features like user authentication, product management, and payment integration.",image:"/project1.jpg",technologies:["React","Node.js","MongoDB","Stripe"],liveLink:"#",githubLink:"#"},{title:"Task Management App",description:"Real-time task management application with team collaboration features and progress tracking.",image:"/project2.jpg",technologies:["Next.js","Socket.io","PostgreSQL","TailwindCSS"],liveLink:"#",githubLink:"#"},{title:"AI Content Generator",description:"An AI-powered application that generates various types of content using OpenAI's GPT-3 API.",image:"/project3.jpg",technologies:["React","OpenAI API","Node.js","Express"],liveLink:"#",githubLink:"#"}].map(((e,a)=>t.jsxs(s.div,{variants:i,whileHover:{y:-10},className:"card overflow-hidden group",children:[
t.jsxs("div",{className:"relative overflow-hidden aspect-video",children:[
t.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),
t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:t.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-end space-x-2",children:[
t.jsx(s.a,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors duration-300",children:t.jsx(u,{className:"w-5 h-5"})}),
t.jsx(s.a,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors duration-300",children:t.jsx(g,{className:"w-5 h-5"})})]})})]}),
t.jsxs("div",{className:"p-6",children:[
t.jsx("h3",{className:"text-xl font-bold mb-2",children:e.title}),
t.jsx("p",{className:"text-dark-content/70 mb-4",children:e.description}),
t.jsx("div",{className:"flex flex-wrap gap-2",children:e.technologies.map(((e,a)=>t.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-sm",children:e},a)))})]})]},a)))})]})})})},R=()=>{const[e,a]=w({threshold:.3,triggerOnce:!0}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},r=[{icon:t.jsx(v,{className:"w-6 h-6"}),title:"Email",content:"ramyagopa@gmail.com",link:"mailto:ramyagopa@gmail.com"},{icon:t.jsx(y,{className:"w-6 h-6"}),title:"Phone",content:"+91-8984428026",link:"tel:+918984428026"},{icon:t.jsx(b,{className:"w-6 h-6"}),title:"Location",content:"Bhubaneswar, Odisha, India",link:"#"}];
return t.jsxs("section",{id:"contact",className:"section-padding relative overflow-hidden bg-secondary/5",children:[
t.jsx("div",{className:"absolute inset-0 -z-10",children:t.jsx(s.div,{animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:20,repeat:1/0,repeatType:"reverse"},className:"absolute inset-0 opacity-30",style:{background:"radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",backgroundSize:"100% 100%"}})}),
t.jsx("div",{className:"container",children:t.jsxs(s.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:a?"visible":"hidden",className:"max-w-6xl mx-auto",children:[
t.jsx(s.h2,{variants:i,className:"section-title text-center",children:"Get in Touch"}),
t.jsx(s.p,{variants:i,className:"section-subtitle text-center",children:"Let's discuss your project or just say hello"}),
t.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 mt-12",children:[
t.jsxs(s.div,{variants:i,className:"space-y-6",children:[
t.jsx("h3",{className:"text-2xl font-bold",children:"Let's talk about everything!"}),
t.jsx("p",{className:"text-dark-content/70",children:"Feel free to reach out if you want to collaborate with me, or simply have a chat."}),
t.jsx("div",{className:"space-y-4 mt-8",children:r.map(((e,a)=>t.jsxs(s.a,{href:e.link,whileHover:{x:10},className:"flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300",children:[
t.jsx("div",{className:"p-3 bg-primary/10 text-primary rounded-lg",children:e.icon}),
t.jsxs("div",{children:[
t.jsx("h4",{className:"font-medium",children:e.title}),
t.jsx("p",{className:"text-dark-content/70",children:e.content})]})]},a)))})]}),
t.jsx(s.div,{variants:i,children:t.jsxs("form",{onSubmit:e=>{e.preventDefault()},className:"space-y-6",children:[
t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[
t.jsxs(s.div,{whileTap:{scale:.98},children:[
t.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Name"}),
t.jsx("input",{type:"text",id:"name",className:"input-field",required:!0})]}),
t.jsxs(s.div,{whileTap:{scale:.98},children:[
t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),
t.jsx("input",{type:"email",id:"email",className:"input-field",required:!0})]})]}),
t.jsxs(s.div,{whileTap:{scale:.98},children:[
t.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Subject"}),
t.jsx("input",{type:"text",id:"subject",className:"input-field",required:!0})]}),
t.jsxs(s.div,{whileTap:{scale:.98},children:[
t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Message"}),
t.jsx("textarea",{id:"message",rows:"5",className:"input-field resize-none",required:!0})]}),
t.jsxs(s.button,{whileHover:{scale:1.02},whileTap:{scale:.98},type:"submit",className:"btn-primary w-full flex items-center justify-center group",children:["Send Message",
t.jsx(j,{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"})]})]})})]})]})})]})},E=()=>{const[e,a]=w({threshold:.2,triggerOnce:!0}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};
return t.jsx("section",{id:"education",className:"section-padding bg-secondary/5",children:t.jsx("div",{className:"container",children:t.jsxs(s.div,{ref:e,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:a?"visible":"hidden",className:"max-w-4xl mx-auto",children:[
t.jsx(s.h2,{variants:i,className:"section-title text-center",children:"Education"}),
t.jsx(s.p,{variants:i,className:"section-subtitle text-center",children:"Academic Background & Achievements"}),
t.jsx("div",{className:"mt-16 space-y-8",children:[{school:"National Institute Of Technology, Rourkela",degree:"B.Tech in Computer Science",period:"2016 - 2020",achievements:["Completed Bachelor's degree in Computer Science","Participated in various technical competitions and hackathons"]},{school:"Adyant +2 Science College, Bhubaneswar",degree:"Intermediate in Science",period:"2014 - 2016",achievements:["Ranked within top 15,000 students in Odisha's 12th Board Examination","Awarded laptop from Government of Odisha for outstanding performance"]},{school:"Ordnance Factory School, Badmal",degree:"Secondary School Certificate",period:"2014",achievements:["Qualified for National Level NTSE, ranking among top 138 students from Odisha","Secured 1st place in multiple inter-school quiz competitions"]}].map(((e,a)=>t.jsxs(s.div,{variants:i,className:"card relative overflow-hidden",children:[
t.jsxs("div",{className:"flex items-start gap-4",children:[
t.jsx("div",{className:"p-2 bg-primary/10 rounded-lg text-primary mt-1",children:t.jsx(f,{className:"w-6 h-6"})}),
t.jsxs("div",{className:"space-y-2",children:[
t.jsx("h3",{className:"text-xl font-bold",children:e.school}),
t.jsxs("div",{className:"flex flex-wrap gap-2 text-dark-content/60 dark:text-light-content/60",children:[
t.jsx("span",{children:e.degree}),
t.jsx("span",{children:"•"}),
t.jsx("span",{children:e.period})]}),
t.jsx("ul",{className:"list-disc list-inside space-y-1 text-dark-content/80 dark:text-light-content/80",children:e.achievements.map(((e,a)=>t.jsx("li",{children:e},a)))})]})]}),
t.jsx(s.div,{className:"absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity",animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"}})]},a)))})]})})})};function P(){
return t.jsx(S,{children:t.jsx(r,{children:t.jsxs("div",{className:"antialiased bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300",children:[
t.jsx(L,{}),
t.jsxs(s.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[
t.jsx(T,{}),
t.jsx(A,{}),
t.jsx(C,{}),
t.jsx(E,{}),
t.jsx(I,{}),
t.jsx(R,{})]}),
t.jsx("footer",{className:"py-8 bg-dark dark:bg-darker text-white/80",children:t.jsx("div",{className:"container text-center",children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[
t.jsxs(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[
(new Date).getFullYear()," Ramya Ranjan Naik. All rights reserved."]}),
t.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"flex space-x-6 mt-4 md:mt-0",children:[
t.jsx("a",{href:"https://www.linkedin.com/in/rrnaik29/",className:"hover:text-primary transition-colors",children:"LinkedIn"}),
t.jsx("a",{href:"https://github.com/rexster29",className:"hover:text-primary transition-colors",children:"GitHub"})]})]})})})]})})})}a.createRoot(document.getElementById("root")).render(
t.jsx(e.StrictMode,{children:t.jsx(P,{})}));
