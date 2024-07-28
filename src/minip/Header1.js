import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header1() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [ytLinks, setYtLinks] = useState([]);
  const [gdLinks, setGdLinks] = useState([]);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") {
      setTitle('Welcome to EduChat 📚');
    } else {
      const getTitle = (id) => {
        const subjectMap = {
          1: "WebP-chatroom",
          2: "Design-chatroom",
          3: "Micro-chatroom",
          4: "Theory-chatroom",
          5: "Probability-chatroom",
          6: "Cao -chatroom"
        };

        return subjectMap[id] || '';
      };

      const id = location.pathname.split('/')[2]; // Assuming the subject ID is the third segment of the URL

      const newTitle = getTitle(parseInt(id));

      setTitle(newTitle);

      // Define YouTube and Google Drive links for each subject
      const links = [
        { id: 1, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQYyDARmxnC45eo_W-69D9Vp&si=g7LsUBuxp7tsEvul", gd: "https://drive.google.com/drive/folders/1FH7jbyUbj5k7kmu2v2xkBnXvXWkvA6DD?usp=drive_link" },
        { id: 2, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQYfKg92cRo4WYe9PuER1leB&si=My7ZxN3NDiYtYO69", gd: "https://drive.google.com/drive/folders/15B_jtiDZVOk5OeIgZMIEIe5UUZeKUVLa" },
        { id: 3, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQZJ8GCpbtvbcQti912geYjS&si=CmSKPUZ1irdDBr-E", gd: "https://drive.google.com/drive/folders/1aQxh6o2wt4G8J4C_Ck1en1Oe2CALEvZl" },
        { id: 4, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQYxM97LlBnwIQAY280VYC0K&si=sTaokSl_4m_Yf2i-", gd: "https://drive.google.com/drive/folders/1YLXMR2Cg2idJNvz7v6tf11zC8hDofop1?usp=drive_link" },
        { id: 5, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQZIFyzbBAI4NGIhkXlQZc2v&si=un8tnj5apMj_R4wy", gd: "https://drive.google.com/drive/folders/13a5QlGjJXc3W9GLCDmKzPeHOw84jI3Id?usp=drive_link" },
        { id: 6, yt: "https://youtube.com/playlist?list=PLMwzYA8kiQQYpW_mLdKdY4Pz68euHFYpa&si=WkgnbL4xvZgI4Oww", gd: "https://drive.google.com/drive/folders/1F2ZzW_jAhpaD-K4Me_RRZFY6ljNuYtzn" }
      ];

      // Find the links for the current subject
      const currentLinks = links.find(subject => subject.id === parseInt(id));
      if (currentLinks) {
        setYtLinks(currentLinks.yt);
        setGdLinks(currentLinks.gd);
      }
    }
  }, [location.pathname]);

  return (
    <div className='div1'>
      <header>
        {location.pathname !== "/subject" && <h1>{title}</h1>}
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {location.pathname.startsWith("/subject") && (
            <div className='ytgd'>
              <li><a href={ytLinks} target='_blank' rel="noreferrer">YouTube</a></li>
              <li><a href={gdLinks} target='_blank' rel="noreferrer">Google Drive</a></li>
            </div>
          )}
        </ul>
        {location.pathname === "/" && ( 
          <form>
            <input type='text' placeholder='search'></input>
          </form>
        )}
      </nav>
    </div>
  );
}
