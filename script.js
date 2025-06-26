// Drag Functionality
function makeDraggable(target, handle = target) {
    handle.onmousedown = function (e) {
      const shiftX = e.clientX - target.getBoundingClientRect().left;
      const shiftY = e.clientY - target.getBoundingClientRect().top;
  
      function moveAt(pageX, pageY) {
        target.style.left = pageX - shiftX + 'px';
        target.style.top = pageY - shiftY + 'px';
      }
  
      moveAt(e.pageX, e.pageY);
  
      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }
  
      document.addEventListener('mousemove', onMouseMove);
  
      document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      };
    };
  
    handle.ondragstart = function () {
      return false;
    };
  }
  
  // Make all draggable icons movable
  document.querySelectorAll('.draggable').forEach(el => {
    makeDraggable(el);
  });
  
  // Make modal window draggable by its header
  const modal = document.getElementById('window-modal');
  const modalHeader = modal.querySelector('.mac-header');
  makeDraggable(modal, modalHeader);
  
// Open Window Modal with Dynamic Content
function openWindow(title = "Info") {
    const modal = document.getElementById('window-modal');
    const contentBox = document.getElementById('modal-content');
    modal.classList.remove('d-none');
    modal.querySelector('.title').textContent = title;
  
    let content = `<p>Content for <strong>${title}</strong></p>`;
  
    if (title === 'Contact') {
      content = `
        <h5>Let's Connect!</h5>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Phone Number:</strong> +91 9345863631</li>
          <li><strong>Email:</strong> <a href="mailto:kumaresansoundappansss@gmail.com">kumaresansoundappansss@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/kumaresan-s-2146ab269" target="_blank">linkedin.com/in/kumaresan-s-2146ab269</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/KUMARESAN2024" target="_blank">github.com/KUMARESAN2024</a></li>
        </ul>
      `;
    }
  
    else if (title === 'About Me') {
      content = `
        <h5>About Me</h5>
        <p>I'm a passionate Computer Science student with a strong foundation in programming, web development, and AI-based 
        productivity tools. I specialize in building interactive, real-world applications.</p>
        <p>I'm eager to join a dynamic team where I can contribute ideas, learn continuously, and build impactful solutions. I adapt
        quickly to challenges and strive to grow both technically and professionally in the tech industry</p>
      `;
    }

    else if (title === 'Trash') {
  content = `
    <h5>Education</h5>
    <ul>
      <li>
        <strong>2022 – Present:</strong> Bachelor of Engineering (B.E.) in Computer Science<br/>
        K.S.R. College of Engineering, Tiruchengode<br/>
        CGPA: 8.39 (up to 5th semester)
      </li>
      <li>
        <strong>2021 – 2022:</strong> Higher Secondary Certificate (HSC)<br/>
        Swamy Vivekanandar Matric Hr. Sec School, Kanchamalayur<br/>
        Percentage: 82.2%
      </li>
      <li>
        <strong>2019 – 2020:</strong> Secondary School Leaving Certificate (SSLC)<br/>
        Swamy Vivekanandar Matric Hr. Sec School, Kanchamalayur<br/>
        Percentage: 80.2%
      </li>
    </ul>
  `;
}
  
    else if (title === 'Project') {
      content = `
        <h5>Select a Project:</h5>
        <ul style="padding-left: 0; list-style: none; font-size: 14px;">
          <li><a href="#" onclick="openWindow('Project 01')">📁 Project 01: E-Commerce Website for Sarees</a></li>
          <li><a href="#" onclick="openWindow('Project 02')">📁 Project 02: Task Manager & Notes Calendar</a></li>
          <li><a href="#" onclick="openWindow('Project 03')">📁 Project 03: AI Notes Generator</a></li>
        </ul>
      `;
    }
  
    else if (title === 'Project 01') {
      content = `
        <h5>Project 01: E-Commerce Website for Sarees</h5>
        <p>A fully functional and responsive saree shopping website with a user-friendly design.</br>
        <strong>Key Features:</strong></br>User login, wishlist, and discount coupons.</br>Mobile & desktop responsive layout.</br>
        <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Bootstrap, Local Storage</p>
        <p><a href="https://kumaresan2024.github.io/SilkBoutique/" target="_blank">Explore</a> |
        <a href="https://github.com/KUMARESAN2024/SilkBoutique" target="_blank">GitHub</a></p>
      `;
    }
  
    else if (title === 'Project 02') {
      content = `
        <h5>Project 02: Task Manager & Notes Calendar</h5>
        <p>A productivity-focused web app for managing tasks and scheduling with an integrated calendar.</br>
        <strong>Key Features:</strong></br>Add tasks with due dates, priorities, and progress tracking</br>Edit and manage tasks using an interactive calendar view</br>
        <strong>Tech Stack:</strong> React.js, Bootstrap, Local Storage, React DatePicker, React Big Calendar.</p>
        <p><a href="https://todo-app-flame-alpha-57.vercel.app/" target="_blank">Explore</a> |
        <a href="https://github.com/KUMARESAN2024/todo-app" target="_blank">GitHub</a></p>
      `;
    }
  
    else if (title === 'Project 03') {
      content = `
        <h5>Project 03: AI-Powered Note Summarizer</h5>
        <p>A full-stack web app that allows users to input or upload notes and get AI-generated summaries for quick understanding.</br>
        <strong>Key Features:</strong></br>
        Upload or type notes (text/PDF), generate AI summaries, save & manage notes, text-to-speech output, and PDF export.</br>
        <strong>Tech Stack:</strong> React.js, Node.js, Express, OpenAI API, MongoDB, Bootstrap</p>
        <p><a href="https://your-live-link.vercel.app" target="_blank">Explore</a> | 
        <a href="https://github.com/yourusername/ai-note-summarizer" target="_blank">GitHub</a></p>
      `;
    }
  
    else if (title === 'Resume') {
      content = `
        <h5>Resume</h5>
        <p><a href="assets/Resume.pdf" download>Download Resume PDF</a></p>
        <iframe src="assets/Resume.pdf" width="100%" height="300px" style="border: none;"></iframe>
      `;
    }

    else if (title === 'Skills') {
        content = `
          <h5>💼 My Skill Set</h5>
          <ul style="list-style: none; padding-left: 0; font-size: 14px; line-height: 1.8;">
            <li>🖥️ <strong>Front-End</strong>: HTML, CSS, JavaScript, React.js, Bootstrap</li>
            <li>🛠️ <strong>Back-End</strong>: Node.js, Express.js</li>
            <li>🗄️ <strong>Database</strong>: MongoDB</li>
            <li>🔄 <strong>Version Control</strong>: Git, GitHub</li>
            <li>💻 <strong>Languages</strong>: Java, Python</li>
          </ul>
        `;
      }      

      else if (title === 'Calendar') {
        const now = new Date();
        const currentDay = now.getDate();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
      
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
      
        let calendarHTML = `<table class="calendar"><thead><tr>
          <th>Su</th><th>Mo</th><th>Tu</th><th>We</th>
          <th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr>`;
      
        for (let i = 0; i < firstDay; i++) calendarHTML += `<td></td>`;
      
        for (let day = 1; day <= totalDays; day++) {
          const isToday = (day === currentDay);
          if ((firstDay + day - 1) % 7 === 0 && day !== 1) calendarHTML += `</tr><tr>`;
          calendarHTML += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
        }
      
        calendarHTML += `</tr></tbody></table>`;
      
        content = `
          <h5>📅 ${monthNames[currentMonth]} ${currentYear}</h5>
          ${calendarHTML}
        `;
      }
      
      
      else if (title === 'Clock') {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
        content = `
          <h5>⏰ Clock</h5>
          <p>Current Time:</p>
          <div id="live-clock" style="font-size: 22px; font-weight: bold;">${timeStr}</div>
        `;
      }      

      else if (title === 'Terminal') {
  content = `
    <div id="mac-terminal" style="background: black; color: #00ff00; font-family: monospace; height: 250px; overflow-y: auto; padding: 10px; border-radius: 5px;" onclick="focusTerminalInput()">
      <div class="line"><span class="prompt">➜ ~ %</span> <span contenteditable="true" class="cmd-input" onkeydown="handleTerminalInput(event, this)"></span></div>
    </div>
  `;

  // Focus input after rendering
  setTimeout(() => {
    focusTerminalInput();
  }, 100);
}
function focusTerminalInput() {
  const inputs = document.querySelectorAll('.cmd-input');
  const last = inputs[inputs.length - 1];
  last.focus();
  placeCaretAtEnd(last);
}

function placeCaretAtEnd(el) {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}
    contentBox.innerHTML = content;
  }
  
// Close Modal
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('window-modal').classList.add('d-none');
});

// Live Date + Time
function updateMenuDateTime() {
  const now = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById('menu-datetime').textContent = `${date} · ${time}`;
}
setInterval(updateMenuDateTime, 1000);
updateMenuDateTime();

// Dock Animation
document.querySelectorAll('#dock img').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('bounce');
    setTimeout(() => icon.classList.remove('bounce'), 600);
  });
});

// Spotlight Search Toggle
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const modal = document.getElementById('spotlight-modal');
    const input = document.getElementById('spotlight-input');
    modal.classList.toggle('d-none');
    if (!modal.classList.contains('d-none')) {
      input.value = '';
      input.focus();
    }
  } else if (e.key === 'Escape') {
    document.getElementById('spotlight-modal').classList.add('d-none');
  }
});

// Search command logic
document.getElementById('spotlight-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const term = e.target.value.trim().toLowerCase();
    const knownWindows = ['About Me', 'Skills', 'Project 01', 'Project 02', 'Project 03', 'Resume', 'Contact', 'Calendar', 'Clock', 'Terminal'];

    const match = knownWindows.find(w => w.toLowerCase().includes(term));
    if (match) {
      openWindow(match);
    } else {
      alert('No match found');
    }
    document.getElementById('spotlight-modal').classList.add('d-none');
  }
});

function focusTerminalInput() {
  const inputs = document.querySelectorAll('.cmd-input');
  if (inputs.length > 0) {
    const last = inputs[inputs.length - 1];
    last.focus();
    placeCaretAtEnd(last);
  }
}

function placeCaretAtEnd(el) {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

function handleTerminalInput(e, el) {
  if (e.key === "Enter") {
    e.preventDefault();
    const cmd = el.innerText.trim().toLowerCase();
    const terminal = document.getElementById("mac-terminal");

    let response = '';
    switch (cmd) {
      case 'help':
        response = "Commands: about me, skills, projects, contact, clear";
        break;
      case 'about me':
        response = "I'm Kumaresan, a developer passionate about web and AI.";
        break;
      case 'skills':
        response = "HTML, CSS, JS, React, Node, MongoDB, Java, Python";
        break;
      case 'projects':
        response = "1. Saree E-Commerce\n2. Task Manager\n3. AI Notes Generator";
        break;
      case 'contact':
        response = "Email: kumaresansoundappansss@gmail.com\nGitHub: github.com/KUMARESAN2024\nLinkedIn: linkedin.com/in/kumaresan-s-2146ab269";
        break;
      case 'clear':
        terminal.innerHTML = '';
        newPrompt(terminal);
        return;
      default:
        response = `zsh: command not found: ${cmd}`;
    }

    // Lock the current input
    el.setAttribute('contenteditable', 'false');

    // Print response
    const responseHTML = `<div class="output">${response.replace(/\n/g, '<br>')}</div>`;
    terminal.innerHTML += responseHTML;

    // Add new prompt
    newPrompt(terminal);
    terminal.scrollTop = terminal.scrollHeight;
  }
}

function newPrompt(terminal) {
  terminal.innerHTML += `<div class="line"><span class="prompt">➜ ~ %</span><span contenteditable="true" class="cmd-input" onkeydown="handleTerminalInput(event, this)"></span></div>`;
  focusTerminalInput();
}

