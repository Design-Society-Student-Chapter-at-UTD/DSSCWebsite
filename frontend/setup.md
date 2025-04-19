# DSSC Website Setup
A guide on how to update the website with DSSC Information (Officers Only).


## Home Page
View by using the following URL: http://localhost:3000/

Go to the following file:
```
src/pages/Home.jsx
```

### Edit Hero Image
Edit the following div within the file:
```
<img
  src={Hero}
  alt="Hero"
  className="w-full h-auto object-cover block"
/>
```

Edit specifically line 11 within the Home.jsx where it says:
```
src={Hero}
```

## About Us Page
View by using the following URL: http://localhost:3000/AboutUs

Go to the following file:
```
src/pages/AboutUs.jsx
```

### Edit Mission Statement
Edit the following motion.div within the file, where "{Here}" is where you edit:
```
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="my-10 mx-auto text-2xl max-w-[800px]"
>
  {Here}
</motion.div>
```

### Edit Executives' Images
Edit the following div within the file:
```
<img
  src="/myPhoto.jpg"
  alt={`Executive ${index + 1}`}
  className="w-full h-full object-cover rounded-full"
/>
```

Edit specifically line 78 within the AboutUs.jsx where it says:
```
src="/myPhoto.jpg"
```

### Edit Officers' Images
Edit the following div within the file:
```
<img
  src="/myPhoto.jpg"
  alt={`Executive ${index + 1}`}
  className="w-full h-full object-cover rounded-full"
/>
```

Edit specifically line 119 within the AboutUs.jsx where it says:
```
src="/myPhoto.jpg"
```

### Edit Our Journey Section
Edit the following p div within the file, where "{Here}" is where you edit:
```
<p className="text-gray-500 text-2xl ">
  {Here}
</p>
```

Edit specifically line 150 for the "Past" and line 164 for the 
"Goals."


## Gallery Page
View by using the following URL: http://localhost:3000/Gallery
Go to the following file:
```
src/pages/Gallery.jsx
```

### Edit Design Challenge Winners
Edit the following array within the file:
```
const designChallengeWinners = [
    {
      title: "Work 1",
      studentName: "Alice Johnson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      year: 2022,
    },
  ];
```
- Be sure to edit "title", "studentName", "description", and "year" for each winner.
- Add more objects within the designChallengeWinners array to add multiple projects/works. 

### Edit Student Work Showcase
Edit the following array within the file:
```
  const studentWorkProjects = [
    {
      projectName: "Project Title 1",
      designer: "Student Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];
```
- Be sure to edit "projectName", "designer", and "description" for each winner.
- Add more objects within the studentWorkProjects array to add multiple projects/works. 
