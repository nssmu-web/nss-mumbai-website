if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    // Force scroll to top regardless of hash
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
    setTimeout(() => window.scrollTo(0, 0), 50);
    
    // Remove hash if it's causing unwanted jumps to main content
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }
});

const appHeader = `
<a href="#main-content" class="skip-to-content">Skip to main content</a>
<div class="top-bar d-none d-md-block" style="background-color: #fdfdfd; border-bottom: 1px solid #eaeaea;">
    <div class="container d-flex justify-content-between align-items-stretch py-1">
        <div class="d-flex align-items-center">
            <div class="text-end pe-3 border-end border-secondary border-opacity-25" style="line-height: 1.1;">
                <div style="font-size: 0.8rem; font-weight: 600; color: #444;">मुंबई विद्यापीठ</div>
                <div style="font-size: 0.75rem; font-weight: 600; color: #444; letter-spacing: 0.5px;">UNIVERSITY OF MUMBAI</div>
            </div>
            <div class="ps-3 text-start" style="line-height: 1.1;">
                <div style="font-size: 0.8rem; font-weight: 600; color: #444;">राष्ट्रीय सेवा योजना</div>
                <div style="font-size: 0.75rem; font-weight: 600; color: #444; letter-spacing: 0.5px;">NATIONAL SERVICE SCHEME</div>
            </div>
        </div>
        
        <div class="d-flex align-items-stretch position-relative">
            <div class="d-flex align-items-center gap-1 pe-4">
                <a href="#" class="d-flex align-items-center justify-content-center rounded-1" style="width: 22px; height: 22px; background-color: #5572aa; color: white; text-decoration: none;"><i class="bi bi-facebook" style="font-size: 0.8rem;"></i></a>
                <a href="#" class="d-flex align-items-center justify-content-center rounded-1" style="width: 22px; height: 22px; background-color: #000000; color: white; text-decoration: none;"><i class="bi bi-twitter-x" style="font-size: 0.8rem;"></i></a>
                <a href="#" class="d-flex align-items-center justify-content-center rounded-1" style="width: 22px; height: 22px; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); color: white; text-decoration: none;"><i class="bi bi-instagram" style="font-size: 0.8rem;"></i></a>
                <a href="#" class="d-flex align-items-center justify-content-center rounded-1" style="width: 22px; height: 22px; background-color: #cd201f; color: white; text-decoration: none;"><i class="bi bi-youtube" style="font-size: 0.8rem;"></i></a>
            </div>
            
            <div class="border-start border-secondary border-opacity-25 ps-4 d-flex align-items-center gap-2" id="action-icons-container">
                <a href="#main-content" title="Skip to Main Content" class="rounded-circle bg-secondary bg-opacity-25 text-secondary d-flex justify-content-center align-items-center" style="width: 26px; height: 26px; text-decoration: none;"><i class="bi bi-arrow-return-right" style="font-size: 0.9rem;"></i></a>
                
                <div class="dropdown">
                    <a href="#" title="Accessibility Dropdown" class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center" style="width: 26px; height: 26px; text-decoration: none;" id="accessibilityDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <i class="bi bi-person-wheelchair" style="font-size: 0.9rem;"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end shadow-sm p-2 text-center border-0" aria-labelledby="accessibilityDropdown" style="min-width: 140px; box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;">
                        <div class="d-flex justify-content-center gap-1 mb-2">
                            <button id="btn-decrease-font" class="btn btn-sm btn-light border px-2 py-0 fw-bold" style="font-size: 14px;">A-</button>
                            <button id="btn-normal-font" class="btn btn-sm btn-light border px-2 py-0 fw-bold" style="font-size: 14px;">A</button>
                            <button id="btn-increase-font" class="btn btn-sm btn-light border px-2 py-0 fw-bold" style="font-size: 14px;">A+</button>
                        </div>
                        <div class="d-flex justify-content-center gap-1">
                            <button id="btn-theme-light" class="btn btn-sm border fw-bold d-flex align-items-center justify-content-center" style="background: white; color: black; width: 28px; height: 28px; font-size: 14px;">A</button>
                            <button id="btn-theme-dark" class="btn btn-sm border fw-bold d-flex align-items-center justify-content-center" style="background: black; color: white; width: 28px; height: 28px; font-size: 14px;">A</button>
                        </div>
                    </div>
                </div>

                <a href="#" title="Site Search" id="btn-toggle-search" class="rounded-circle bg-secondary bg-opacity-25 text-secondary d-flex justify-content-center align-items-center" style="width: 26px; height: 26px; text-decoration: none;"><i class="bi bi-search" style="font-size: 0.9rem;"></i></a>
                <a href="sitemap.html" title="Sitemap" class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center" style="width: 26px; height: 26px; text-decoration: none;"><i class="bi bi-diagram-3-fill" style="font-size: 0.9rem;"></i></a>
            </div>

            <div id="search-bar-container" class="d-none align-items-center position-absolute bg-white" style="right: 0; top: 50%; transform: translateY(-50%); z-index: 10;">
                <div class="input-group input-group-sm" style="width: 180px;">
                    <input type="text" id="site-search-input" class="form-control border-secondary" placeholder="GOI SEARCH" style="font-size: 0.8rem; box-shadow: none;">
                    <button id="btn-execute-search" class="btn btn-outline-secondary text-dark" type="button"><i class="bi bi-search"></i></button>
                    <button id="btn-close-search" class="btn btn-outline-secondary border-start-0 text-danger" type="button" style="font-size: 1.1rem; line-height: 1; padding: 0 8px;">&times;</button>
                </div>
            </div>
        </div>
    </div>
</div>

<header class="main-header bg-white py-3">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-md-7 d-flex align-items-center">
                <div class="header-logos me-4">
                    <img src="images/nsslogo.png" alt="NSS Logo" class="img-fluid" style="height: 150px; width: auto; object-fit: contain; flex-shrink: 0;" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/NSS_Logo.png/600px-NSS_Logo.png'">
                </div>
                <div class="header-text text-start" style="line-height: 1.2;">
                    <div style="color: #2b3990; font-size: 1.25rem; font-weight: 600;">राष्ट्रीय सेवा योजना</div>
                    <div style="color: #2b3990; font-size: 1.4rem; font-weight: 700;">National Service Scheme</div>
                    <div style="color: #333; font-size: 0.95rem; font-weight: 600; margin-top: 2px;">युवा कार्यक्रम और खेल मंत्रालय</div>
                    <div style="color: #333; font-size: 1rem; font-weight: 700;">Ministry of Youth Affairs and Sports</div>
                    <div style="color: #333; font-size: 0.95rem; font-weight: 600;">भारत सरकार</div>
                    <div style="color: #333; font-size: 1rem; font-weight: 700;">Government of India</div>
                </div>
            </div>
            <div class="col-md-5 d-none d-md-flex justify-content-end align-items-center gap-4">
                 <img src="images/khelo-india.png" alt="Khelo India" class="img-fluid" style="height: 60px; width: auto; object-fit: contain;" onerror="this.style.display='none'">
                 <img src="images/swach-bharat-mission-logo.png" alt="Swachh Bharat" class="img-fluid" style="height: 160px; width: auto; object-fit: contain;">
            </div>
        </div>
    </div>
</header>

<nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
    <div class="container">
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nssNavbar" aria-controls="nssNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nssNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" data-nav-target="home" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdown" id="org-dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Organisation
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="about-nss.html">About Us</a></li>
                        <li><a class="dropdown-item" href="about-nss.html#objectives">Objectives</a></li>
                        <li><a class="dropdown-item" href="nss-mumbai-university.html">NSS Directory (MU)</a></li>
                        <li><a class="dropdown-item" href="programmes-and-activities.html">Regular Activities</a></li>
                        <li><a class="dropdown-item" href="programmes-and-activities.html#special-camps">Special Camping Programme</a></li>
                        <li><a class="dropdown-item" href="programmes-and-activities.html#awards">Awards & Awardees</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" data-nav-target="resources" href="resources.html">Resources & Forms</a></li>
                <li class="nav-item"><a class="nav-link" data-nav-target="circulars" href="circulars.html">Circulars</a></li>
                <li class="nav-item"><a class="nav-link" data-nav-target="gallery" href="gallery.html">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" data-nav-target="nss-volunteers" href="#">NSS Volunteers</a></li>
                <li class="nav-item"><a class="nav-link" data-nav-target="newsletter" href="#">Newsletter</a></li>
                <li class="nav-item"><a class="nav-link" data-nav-target="contact" href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>
`;

const appFooter = `<footer class="pt-0">
    <div class="similar-orgs-container bg-white border-top">
        <div class="container-fluid px-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-md-12 text-center mb-2">
                    <h5 class="fw-bold mb-4" style="color: #2b3990; font-size: 1.5rem;">SIMILAR ORGANISATIONS</h5>
                    <div class="d-flex justify-content-between align-items-center flex-wrap w-100 py-3 gap-3">
                        <div class="text-center p-2" style="flex: 1; min-width: 120px;"><img src="images/moefnew.png" alt="MOEF" class="img-fluid org-logo-img" onerror="this.style.display='none'"></div>
                        <div class="text-center p-2" style="flex: 1; min-width: 120px;"><img src="images/bharat scouts and guides.png" alt="Bharat Scouts and Guides" class="img-fluid org-logo-img" onerror="this.style.display='none'"></div>
                        <div class="text-center p-2" style="flex: 1; min-width: 120px;"><img src="images/ncc_logo.png" alt="NCC" class="img-fluid org-logo-img" onerror="this.style.display='none'"></div>
                        <div class="text-center p-2" style="flex: 1; min-width: 120px;"><img src="images/IndianRedCrossSociety.png" alt="Indian Red Cross Society" class="img-fluid org-logo-img" onerror="this.style.display='none'"></div>
                        <div class="text-center p-2" style="flex: 1; min-width: 120px;"><img src="images/hindustan_scouts_and_guides.jpg" alt="Hindustan Scouts and Guides" class="img-fluid org-logo-img" onerror="this.style.display='none'"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center footer-links mb-3">
                <a href="disclaimer.html" class="mx-3">Website Policies</a> |
                <a href="sitemap.html" class="mx-3">Site Map</a> |
                <a href="#" class="mx-3">Feedback</a> |
                <a href="contact.html" class="mx-3">Contact Us</a> |
                <a href="credits.html" class="mx-3">Credits</a>
            </div>
            <div class="text-center text-secondary">
                <p class="mb-1">Website Content Managed by National Service Scheme Cell, University of Mumbai.</p>
                <p class="mb-0">Designed & Developed by Student Volunteers. (Student Built Resource)</p>
            </div>
        </div>
    </div>
</footer>
`;

const pageData = {
    'about-nss': {
        title: 'Introduction to NSS',
        breadcrumb: ['Organisation', 'About Us'],
        content: `
            <p>The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes. The primary objective of developing the personality and character of the student youth through voluntary community service. 'Education through Service' is the purpose of the NSS.</p>
            <p>The NSS was launched in 1969, the birth centenary year of Mahatma Gandhi, in 37 universities involving 40,000 students. It has now grown to over 3.9 million volunteers.</p>

            <h2 id="objectives">Objectives</h2>
            <ul>
                <li>Understand the community in which they work.</li>
                <li>Understand themselves in relation to their community.</li>
                <li>Identify the needs and problems of the community and involve them in problem-solving.</li>
                <li>Develop among themselves a sense of social and civic responsibility.</li>
                <li>Utilise their knowledge in finding practical solutions to individual and community problems.</li>
                <li>Develop competence required for group-living and sharing of responsibilities.</li>
                <li>Gain skills in mobilising community participation.</li>
                <li>Acquire leadership qualities and democratic attitudes.</li>
                <li>Develop capacity to meet emergencies and natural disasters.</li>
                <li>Practise national integration and social harmony.</li>
            </ul>

            <h2>Motto</h2>
            <p>The Motto of NSS is <strong>"Not Me But You"</strong>, reflecting the essence of democratic living and upholds the need for self-less service. It shows that the welfare of an individual is ultimately dependent on the welfare of society on the whole.</p>

            <h2>Symbol</h2>
            <p>The symbol for the NSS has been based on the giant Rath Wheel of the world famous Konark Sun Temple (The Black Pagoda) situated in Orissa, India. The wheel portrays the cycle of creation, preservation and release and signifies the movement in life across time and space. The symbol thus stands for continuity as well as change and implies the continuous striving of NSS for social change. The eight bars in the wheel represents 24 hours of a day. The red colour indicates that the volunteer is full of young blood that is lively, active, energetic and full of high spirit. The navy blue colour indicates the cosmos of which the NSS is a tiny part, ready to contribute its share for the welfare of the mankind.</p>
        `
    },
    'nss-mu': {
        title: 'NSS Directory (Mumbai University)',
        breadcrumb: ['Organisation', 'NSS Directory'],
        content: `
            <p>The NSS Cell at the University of Mumbai coordinates the activities of NSS units across hundreds of affiliated colleges from Mumbai, Thane, Raigad, Ratnagiri, Palghar, and Sindhudurg districts. It acts as the nodal center for implementing national directives and guiding college-level Programme Officers.</p>
            
            <h2>Who's Who (University Admin)</h2>
            <div class="table-responsive mt-3 mb-5">
                <table class="table table-bordered align-middle table-hover">
                    <thead class="table-light text-dark">
                        <tr>
                            <th width="30%">Designation</th>
                            <th width="40%">Name</th>
                            <th width="30%">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bold">Hon'ble Vice-Chancellor</td>
                            <td>Prof. (Dr.) Ravindra D. Kulkarni</td>
                            <td>vcoffice@mu.ac.in</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Hon'ble Pro-Vice Chancellor</td>
                            <td>Dr. Ajay Bhamare</td>
                            <td>provc@mu.ac.in</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">OSD, NSS</td>
                            <td>Mr. Sushil Shinde</td>
                            <td>nss@mu.ac.in</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>District & Area Coordinators</h2>
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>List of District Coordinators across Mumbai City, Suburban, Thane, Palghar, Raigad, Ratnagiri, and Sindhudurg is currently being updated.</em>
            </div>
            
            <h2>Affiliated Colleges & Units</h2>
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>Detailed directory of the 800+ affiliated colleges and their approved NSS unit capacities coming soon.</em>
            </div>
        `
    },
    'activities': {
        title: 'Regular Activities',
        breadcrumb: ['Organisation', 'Regular Activities'],
        content: `
            <p>NSS volunteers undertake various activities in adopted villages, college campuses, and urban slums during weekends or after college hours. A volunteer is expected to devote 120 hours per year to regular activities. These activities include:</p>
            <ul>
                <li><strong>Blood Donation Drives:</strong> Organized regularly across Churchgate, Kalina campuses, and affiliated colleges in coordination with government blood banks.</li>
                <li><strong>Swachh Bharat Abhiyan:</strong> Cleanliness drives at local railway stations, beaches (e.g., Juhu, Girgaon), and college premises.</li>
                <li><strong>Tree Plantation:</strong> Environmental protection campaigns, usually conducted during the monsoon season.</li>
                <li><strong>Disaster Management:</strong> Training volunteers to assist civil authorities during urban floods and other emergencies.</li>
                <li><strong>Awareness Campaigns:</strong> Road safety rallies, anti-drug abuse campaigns, and gender sensitization programs.</li>
            </ul>

            <h2 id="special-camps" class="mt-5">Special Camping Programme</h2>
            <p>Special Camps are organized generally on various developmental issues of national importance. Each camp is of 7 days duration and organized in an adopted village or urban slum. The University of Mumbai NSS cell emphasizes rural reconstruction and shramdaan during these residential camps.</p>

            <h2 id="awards" class="mt-5">Awards & Awardees</h2>
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>Details regarding University-level Best NSS Unit, Best Programme Officer, and Best Volunteer awards coming soon.</em>
            </div>
        `
    },
    'resources': {
        title: 'Resources & Downloads',
        breadcrumb: ['Resources'],
        content: `
            <h2>NSS Manual</h2>
            <p>The NSS Manual provides comprehensive guidelines on the philosophy, administration, and implementation of NSS activities. Applicable nationwide.</p>
            <p><a href="#" class="btn btn-primary"><i class="bi bi-file-earmark-pdf me-2"></i> Download NSS Manual</a></p>

            <h2 class="mt-5">University Formats & Reporting</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead class="table-light">
                        <tr>
                            <th>Document Name</th>
                            <th width="150">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Proforma for Regular Activities Report</td>
                            <td><button class="btn btn-sm btn-outline-primary" disabled>Coming Soon</button></td>
                        </tr>
                        <tr>
                            <td>Proforma for Special Camp Proposal</td>
                            <td><button class="btn btn-sm btn-outline-primary" disabled>Coming Soon</button></td>
                        </tr>
                        <tr>
                            <td>Volunteer Enrollment Form Template</td>
                            <td><button class="btn btn-sm btn-outline-primary" disabled>Coming Soon</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="mt-5">Guidelines for Self-Financing Units</h2>
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>MU guidelines for self-funded units coming soon.</em>
            </div>
        `
    },
    'sitemap': {
        title: 'Site Map',
        breadcrumb: ['Site Map'],
        content: `
            <ul class="sitemap-list">
                <li><a href="index.html">Home</a></li>
                <li><span>Organisation</span>
                    <ul>
                        <li><a href="about-nss.html">About Us</a></li>
                        <li><a href="#">Objectives</a></li>
                        <li><a href="#">Who's Who</a></li>
                        <li><a href="nss-mumbai-university.html">NSS Directory</a></li>
                        <li><a href="#">NSS Fund Flow Schematic</a></li>
                        <li><a href="programmes-and-activities.html">Regular Activities</a></li>
                        <li><a href="#">Special Camping Programme</a></li>
                        <li><a href="#">Awards & Awardees</a></li>
                    </ul>
                </li>
                <li><a href="#">Tenders</a></li>
                <li><a href="#">Suggestions</a></li>
                <li><span>RTI</span>
                    <ul>
                        <li><a href="#">Appellate Authority</a></li>
                        <li><a href="#">Lodge your complaint</a></li>
                        <li><a href="#">Submit your second appeal</a></li>
                        <li><a href="#">RTI Disclosure</a></li>
                    </ul>
                </li>
                <li><a href="#">MYAS</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">NSS Volunteers</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Success Stories/Best Practices</a></li>
                <li><span>ICC</span>
                    <ul>
                        <li><a href="#">ICC Composition</a></li>
                        <li><a href="#">Drop Box</a></li>
                    </ul>
                </li>
                <li><a href="#">Website Policies</a></li>
                <li><a href="sitemap.html">Site Map</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">WebSpeech Voices Demo</a></li>
                <li><a href="#">Awards & Awardees</a></li>
                <li><a href="#">NPYAD</a></li>
                <li><a href="gallery.html">Photo Gallery</a></li>
                <li><a href="#">Video Gallery</a></li>
                <li><a href="#">Viksit Bharat Young Leaders Dialogue (VBYLD) 2026</a></li>
                <li><a href="disclaimer.html">Disclaimer</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">NSS RD Parade Camp</a></li>
                <li><a href="#">Self Financing Unit</a></li>
                <li><a href="sitemap.html">Site Map</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">NSS Alumni</a></li>
            </ul>
        `
    },
    'circulars': {
        title: 'Notices & Circulars',
        breadcrumb: ['Circulars'],
        content: `
            <p>Official circulars and notifications issued by the NSS Cell, University of Mumbai for affiliated colleges and Programme Officers.</p>
            <div class="table-responsive mt-4">
                <table class="table table-bordered table-hover">
                    <thead class="table-light text-dark">
                        <tr>
                            <th width="15%">Date</th>
                            <th width="65%">Subject</th>
                            <th width="20%">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12-Aug-2025</td>
                            <td><a href="#" class="text-decoration-none">Guidelines for University Level Awards (Best NSS Unit, PO, Volunteer) for Year 2024-25</a></td>
                            <td><a href="#" class="btn btn-sm btn-outline-danger rounded-0"><i class="bi bi-file-earmark-pdf"></i> PDF</a></td>
                        </tr>
                        <tr>
                            <td>25-Jul-2025</td>
                            <td><a href="#" class="text-decoration-none">Notification for Pre-SRD (State Republic Day) Parade Selection Camp at Vidyapeeth Vidyarthi Bhavan</a></td>
                            <td><a href="#" class="btn btn-sm btn-outline-danger rounded-0"><i class="bi bi-file-earmark-pdf"></i> PDF</a></td>
                        </tr>
                        <tr>
                            <td>10-Jul-2025</td>
                            <td><a href="#" class="text-decoration-none">Instructions regarding Swachh Bharat Abhiyan Activities in Affiliated Colleges</a></td>
                            <td><a href="#" class="btn btn-sm btn-outline-danger rounded-0"><i class="bi bi-file-earmark-pdf"></i> PDF</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    'gallery': {
        title: 'Photo Gallery',
        breadcrumb: ['Gallery'],
        content: `
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>Photo gallery archiving university-level events (SRD/NRD selection camps, University level camps, etc.) coming soon.</em>
            </div>
            
            <h2 class="mt-5">Video Gallery</h2>
            <div class="alert alert-secondary mt-3">
                <i class="bi bi-info-circle-fill me-2"></i> <em>Video archives coming soon.</em>
            </div>
        `
    },
    'contact': {
        title: 'Contact Us',
        breadcrumb: ['Contact Us'],
        content: `
            <div class="alert alert-warning shadow-sm mb-4 border-0">
                <strong><i class="bi bi-exclamation-triangle-fill me-2"></i> Disclaimer:</strong> This is a student-built project for the NSS-MU Cell, pending official adoption. Official correspondence should be directed to the university's official channels.
            </div>

            <div class="row mt-4">
                <div class="col-md-6 mb-4">
                    <div class="card h-100 rounded-0 border">
                        <div class="card-header bg-light fw-bold text-dark border-bottom">
                            Head Office (Churchgate)
                        </div>
                        <div class="card-body">
                            <p class="mb-2"><i class="bi bi-geo-alt-fill text-primary me-2"></i> <strong>Address:</strong></p>
                            <p class="ms-4 text-muted">NSS Cell, Vidyapeeth Vidyarthi Bhavan,<br>'B' Road, Churchgate,<br>Mumbai - 400 020, Maharashtra.</p>
                            
                            <p class="mb-2 mt-4"><i class="bi bi-telephone-fill text-primary me-2"></i> <strong>Phone:</strong></p>
                            <p class="ms-4 text-muted">022-2204 2859</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 mb-4">
                    <div class="card h-100 rounded-0 border">
                        <div class="card-header bg-light fw-bold text-dark border-bottom">
                            Digital Communication
                        </div>
                        <div class="card-body">
                            <p class="mb-2"><i class="bi bi-envelope-fill text-primary me-2"></i> <strong>Email:</strong></p>
                            <p class="ms-4 text-muted"><a href="mailto:nss@mu.ac.in" class="text-decoration-none">nss@mu.ac.in</a></p>
                            
                            <p class="mb-2 mt-4"><i class="bi bi-globe2 text-primary me-2"></i> <strong>Official MU Portal:</strong></p>
                            <p class="ms-4"><a href="https://mu.ac.in" target="_blank" class="text-decoration-none">mu.ac.in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'disclaimer': {
        title: 'Website Policies',
        breadcrumb: ['Policies'],
        content: `
            <p>This website is a student-built resource intended for the National Service Scheme (NSS) Cell at the University of Mumbai. It has been developed as an academic/community project and is currently pending official adoption by the university administration.</p>
            <p>The contact details, specific names, and event dates marked as placeholders do not represent official university information until verified and updated by the respective authorities.</p>
            <p>For official information, please refer to the University of Mumbai's official portal or the NSS National Portal.</p>
        `
    },
    'credits': {
        title: 'Developers / Credits',
        breadcrumb: ['Policies', 'Credits'],
        content: `
            <p>This static website was designed and developed by students as a dedicated resource for the University of Mumbai NSS Cell.</p>
            <p><strong>Design System:</strong> Based on the authentic structure and color palette of the national NSS web portal (nss.gov.in), tailored for a single university architecture.</p>
            <p><strong>Technologies used:</strong> HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.</p>
        `
    }
};

// 1. Inject Global Header Immediately to prevent layout shift
const headerPlaceholder = document.getElementById('app-header');
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = appHeader;
}

// 2. Inject Global Footer Immediately
const footerPlaceholder = document.getElementById('app-footer');
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = appFooter;
}

document.addEventListener("DOMContentLoaded", () => {
    // 3. Highlight Active Navigation Link (Includes Dropdown Logic)
    const currentPage = document.body.getAttribute('data-page') || 'home';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Check if the current page belongs to the Organisation dropdown
    const orgPages = ['about-nss', 'nss-mu', 'activities'];
    if (orgPages.includes(currentPage)) {
        const orgDropdown = document.getElementById('org-dropdown');
        if (orgDropdown) {
            orgDropdown.classList.add('active');
        }
    } else {
        navLinks.forEach(link => {
            if (link.getAttribute('data-nav-target') === currentPage) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // 4. Inject Dynamic Sidebar Content for Inner Pages
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent) {
        const pageId = dynamicContent.getAttribute('data-content-id');
        const data = pageData[pageId];
        
        if (data) {
            dynamicContent.innerHTML = `
                <!-- Breadcrumb Bar -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                ${data.breadcrumb.map((crumb, idx) => 
                                    idx === data.breadcrumb.length - 1 
                                    ? `<li class="breadcrumb-item active" aria-current="page">>> ${crumb}</li>`
                                    : `<li class="breadcrumb-item">>> ${crumb}</li>`
                                ).join('')}
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="container my-4 pb-5" id="main-content">
                    <div class="row">
                        <!-- Left Sidebar (Govt Style) -->
                        <div class="col-md-3 mb-4">
                            <div class="sidebar-wrapper shadow-sm">
                                <div class="list-group sidebar-menu">
                                    <a href="about-nss.html" class="list-group-item list-group-item-action ${pageId === 'about-nss' ? 'active' : ''}">Introduction</a>
                                    <a href="about-nss.html#objectives" class="list-group-item list-group-item-action">Objectives</a>
                                    <a href="nss-mumbai-university.html" class="list-group-item list-group-item-action ${pageId === 'nss-mu' ? 'active' : ''}">Who's Who</a>
                                    <a href="nss-mumbai-university.html" class="list-group-item list-group-item-action">NSS Directory</a>
                                    <a href="programmes-and-activities.html" class="list-group-item list-group-item-action ${pageId === 'activities' ? 'active' : ''}">Regular Activities</a>
                                    <a href="programmes-and-activities.html#special-camps" class="list-group-item list-group-item-action">Special Camping Programme</a>
                                    <a href="programmes-and-activities.html#awards" class="list-group-item list-group-item-action">Awards & Awardees</a>
                                    <a href="resources.html" class="list-group-item list-group-item-action ${pageId === 'resources' ? 'active' : ''}">Resources & Forms</a>
                                    <a href="circulars.html" class="list-group-item list-group-item-action ${pageId === 'circulars' ? 'active' : ''}">Circulars</a>
                                    <a href="gallery.html" class="list-group-item list-group-item-action ${pageId === 'gallery' ? 'active' : ''}">Photo Gallery</a>
                                    <a href="#" class="list-group-item list-group-item-action ${pageId === 'nss-volunteers' ? 'active' : ''}">NSS Volunteers</a>
                                    <a href="#" class="list-group-item list-group-item-action ${pageId === 'newsletter' ? 'active' : ''}">Newsletter</a>
                                    <a href="sitemap.html" class="list-group-item list-group-item-action ${pageId === 'sitemap' ? 'active' : ''}">Site Map</a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Main Content Right Side -->
                        <div class="col-md-9">
                            <h1 class="page-title">${data.title}</h1>
                            <div class="page-body">
                                ${data.content}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // 5. Accessibility Controls & UI
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnNormalFont = document.getElementById('btn-normal-font');
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    
    // Theme toggle
    const btnThemeLight = document.getElementById('btn-theme-light');
    const btnThemeDark = document.getElementById('btn-theme-dark');
    
    // Search toggle
    const btnToggleSearch = document.getElementById('btn-toggle-search');
    const btnCloseSearch = document.getElementById('btn-close-search');
    const searchBarContainer = document.getElementById('search-bar-container');
    const actionIconsContainer = document.getElementById('action-icons-container');
    
    let currentFontSize = 100;

    if (btnDecreaseFont) {
        btnDecreaseFont.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (currentFontSize > 80) {
                currentFontSize -= 10;
                document.documentElement.style.fontSize = currentFontSize + '%';
            }
        });
    }

    if (btnNormalFont) {
        btnNormalFont.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentFontSize = 100;
            document.documentElement.style.fontSize = currentFontSize + '%';
        });
    }

    if (btnIncreaseFont) {
        btnIncreaseFont.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (currentFontSize < 130) {
                currentFontSize += 10;
                document.documentElement.style.fontSize = currentFontSize + '%';
            }
        });
    }
    
    if (btnThemeLight) {
        btnThemeLight.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.body.classList.remove('high-contrast');
        });
    }

    if (btnThemeDark) {
        btnThemeDark.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.body.classList.add('high-contrast');
        });
    }

    if (btnToggleSearch) {
        btnToggleSearch.addEventListener('click', (e) => {
            e.preventDefault();
            actionIconsContainer.style.visibility = 'hidden'; // hide icons but keep space
            searchBarContainer.classList.remove('d-none');
            searchBarContainer.classList.add('d-flex');
        });
    }
    
    if (btnCloseSearch) {
        btnCloseSearch.addEventListener('click', (e) => {
            e.preventDefault();
            searchBarContainer.classList.add('d-none');
            searchBarContainer.classList.remove('d-flex');
            actionIconsContainer.style.visibility = 'visible';
        });
    }
    
});
