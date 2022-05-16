import { useEffect } from "react";
import "./Home.css";

function Home() {
    let offsets = [];
    useEffect(() => {
        window.addEventListener("load", onWindowLoaded);
        window.addEventListener("scroll", onWindowScroll);
    }, []);

    const onWindowLoaded = () => {
        const ids = [
            "intro",
            "interests",
            "education",
            "awards",
            "teaching",
            "projects",
            "work",
            "certificates",
            "skills",
            "activities",
            "ref",
            "contact",
            "download",
        ];
        const topMargin =
            parseInt(getComputedStyle(window.document.body).fontSize) * 6;
        offsets = ids.map((id) => {
            const offset =
                document.getElementById("section-title-" + id)?.offsetTop -
                topMargin -
                15;
            return {
                id,
                offset,
                endOffset:
                    offset + document.getElementById(`section-${id}`).offsetHeight - 20,
            };
        });
    };

    const activeMenuItem = (id) => {
        document.querySelector(".side-menu li.active")?.classList?.remove("active");
        document.getElementById(id).classList.add("active");
    };

    const activeSection = (id) => {
        document
            .querySelector(".home-content section.active")
            ?.classList?.remove("active");
        document.getElementById(`section-${id}`).classList.add("active");
    };

    const onWindowScroll = (e) => {
        e.preventDefault();
        const currentPosition = window.pageYOffset;
        for (let index = 0; index < offsets.length; index++) {
            const section = offsets[index];
            if (
                section.offset <= currentPosition &&
                section.endOffset > currentPosition
            ) {
                activeMenuItem(section.id);
                activeSection(section.id);
                break;
            }
        }
    };

    return (
        <div className="home-content">
            <section id="section-intro">
                <span id="section-title-intro" className="section-title">
                    About me
                </span>
                <div className="section-body">
                    Curious and dedicated computer engineering student (3.75 GPA)
                    currently attending Amirkabir University of Technology (AUT),
                    voracious desire to learn more about Artificial intelligence and
                    Machine Learning.
                </div>
            </section>
            <section id="section-interests">
                <span id="section-title-interests" className="section-title">
                    RESEARCH INTERESTS
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>Computer Vision</li>
                        <li>
                            Natural Language Processing (NLP) In Artificial Intelligence
                        </li>
                        <li>Reinforcement Learning</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </section>
            <section id="section-education">
                <span id="section-title-education" className="section-title">
                    EDUCATION
                </span>
                <div className="section-body">
                    <span className="section-date">SEP 2018 - PRESENT</span>
                    <p>
                        BACHELOR’S DEGREE, AMIRKABIR UNIVERSITY OF TECHNOLOGY (AUT) B.Sc. of
                        Computer Engineering, IT (7th Semester) | Tehran, Iran
                    </p>
                    <ul className="section-list">
                        <li>Major GPA: 3.75/4.00</li>
                        <li>Major: Artificial intelligence and Machine learning</li>
                        <li>Minor: Software</li>
                        <li>Took most optional courses in network field.</li>
                    </ul>
                </div>
            </section>
            <section id="section-awards">
                <span id="section-title-awards" className="section-title">
                    HONORS & AWARDS
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>
                            Among top ranked undergraduates, Amirkabir University of
                            Technology, Spring 2022
                        </li>
                        <li>
                            Achieved top 2% place among all applicants of the Nationwide
                            University Entrance Exam for B.Sc. in Mathematics and Engineering
                            (Approximately 150000 applicants), Iran, 2018
                        </li>
                        <li>Advanced degree in English, Iran language Institute, 2016</li>
                        <li>
                            Top 3 Among all students in each Semester in High School, Alavi
                            Highschool
                        </li>
                    </ul>
                </div>
            </section>
            <section id="section-teaching">
                <span id="section-title-teaching" className="section-title">
                    TEACHING EXPERIENCES
                </span>
                <div className="section-body">
                    <div className="teaching-item">
                        <span className="section-date">FEB 2022 – PRESENT</span>
                        <span className="fw-bold">TEACHING ASSISTANT</span>, PRINCIPLES OF
                        COMPUTIONAL INTELLIGENCE
                        <ul className="section-list">
                            <li>Work in a team</li>
                            <li>Developing homework for students</li>
                            <li>Developing projects</li>
                            <li>Answering students’ questions</li>
                            <li>Evaluating homework scores</li>
                        </ul>
                        Professor:{" "}
                        <span className="fst-italic">Mohammad Mehdi Ebadzadeh</span>
                    </div>

                    <div className="teaching-item">
                        <span className="section-date">FEB 2022 – PRESENT</span>
                        <span className="fw-bold">TEACHING ASSISTANT</span>, PRINCIPLES OF
                        ARTIFICIAL INTELIGENCE
                        <ul className="section-list">
                            <li>Work in a team</li>
                            <li>Translating and designing educating slides</li>
                        </ul>
                        Professor:{" "}
                        <span className="fst-italic">Mahdi Javanmardi</span>
                    </div>
                    <div className="teaching-item">
                        <span className="section-date">SEP 2021 – DEC 2021</span>
                        <span className="fw-bold">TEACHING ASSISTANT</span>, SOFTWARE
                        ENGINEERING I
                        <ul className="section-list">
                            <li>Work in a team</li>
                            <li>Preparing tutor pdfs regarding the homework</li>
                        </ul>
                        Professor:{" "}
                        <span className="fst-italic">Amir Kalbasi</span>
                    </div>
                </div>
                <div className="teaching-item">
                    <span className="section-date">SEP 2020 – DEC 2020</span>
                    <span className="fw-bold">TEACHING ASSISTANT</span>, ADVANCED
                    PROGRAMMING, JAVA LANGUAGE
                    <ul className="section-list">
                        <li>Work in a team</li>
                        <li>Developing homework for students</li>
                        <li>Developing projects</li>
                        <li>Answering students’ questions</li>
                        <li>Evaluating homework scores</li>
                    </ul>
                    Professor:{" "}
                    <span className="fst-italic">Ehsan Edalat</span>
                </div>
            </section>
            <section id="section-projects">
                <span id="section-title-projects" className="section-title">
                    ACADEMIC PROJECTS
                </span>
                <div className="section-body">
                    <div className="project-item">
                        <span className="section-date">SPRING 2022 – PRESENT</span>
                        <h5>
                            DATA MINING AND NEURAL NETWORK
                        </h5>
                        <span className="small d-block w-100">
                            This project is based on creating a model with <i>keras</i> and <i>tenserflow</i> libraries to cluster the given dataset by their label. The evaluation of the model is checked by graphs and calculated accuracy.
                            After creating an accurate model with an acceptable accuracy, the model used for a bigger dataset.
                        </span>
                        <p>
                            Given tasks are:
                            <ul className="section-list">
                                <li>Finding the best number of nodes in a layer</li>
                                <li>Finding the best number of hidden </li>layers
                                <li>Add the suitable activation function</li>
                                <li>Learn how to work with TenserFlowand Keras</li>
                                <li>Change the learning rate</li>
                                <li>Add the suitable loss function</li>
                            </ul>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Libraries used in this project:{" "}
                            <span className="text-decoration-underline">
                                Pandas
                            </span>,{" "}
                            <span className="text-decoration-underline">
                                Numpy</span>,{" "}
                            <span className="text-decoration-underline">
                                Matplotlib</span>,{" "}
                            <span className="text-decoration-underline">
                                Sklearn</span>,{" "}
                            <span className="text-decoration-underline">TenserFlow</span>{" and "}
                            <span className="text-decoration-underline">
                                Keras
                            </span>
                        </p>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Data-Mining-HW2"
                            >
                                https://github.com/DelaramRajaei/Data-Mining-HW2
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2022</span>
                        <h5>SEMI-GLOBAL-ALIGNMENT</h5>
                        <span className="small">
                            A <i>bioinformatic</i> project. Two protein sequences are given and they ought to be aligned using dynamic programming method in a way to get the best possible score.
                        </span>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Semi-Global-alignment"
                            >
                                https://github.com/DelaramRajaei/Semi-Global-alignment
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2022</span>
                        <h5>DATA MINING DATASETS</h5>
                        <span className="small">
                            Working with datasets and learn how to use <i>pandas</i> library by simple practical tasks such as deleting noisy data and detecting outliers.
                        </span>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Libraries used in this project:{" "}
                            <span className="text-decoration-underline">
                                Pandas
                            </span>,{" "}
                            <span className="text-decoration-underline">
                                Numpy</span>{" and "}
                            <span className="text-decoration-underline">
                                Matplotlib</span>
                        </p>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Data-Mining-HW1"
                            >
                                https://github.com/DelaramRajaei/Data-Mining-HW1
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2022 – PRESENT</span>
                        <h5>
                            THESIS: PEDESTRIAN AND VEHICLE DETECTION IN AUTONOMOUS VEHICLE
                            PERCEPTION SYSTEMS
                        </h5>
                        <span className="small">
                            Developing a model to recognize and classify vehicles and pedestrians. Neural network is going to be used in this project to locate and classify the object whether it is another vehicle or a pedestrian crossing the street. Root Mean Square (RMS), Average Percentage Error (MAPE) and F1-score are going to be used for evaluating the system. Currently the proposal is accepted and ready.
                        </span>
                        <p>
                            Libraries used in this project:{" "}
                            <span className="text-decoration-underline">
                                OpenCV
                            </span>,{" "}
                            <span className="text-decoration-underline">
                                PyTorch</span>{" and "}
                            <span className="text-decoration-underline">
                                Matplotlib</span>{" and "}
                            <span className="text-decoration-underline">
                                TenserFlow</span>
                        </p>
                        <p>
                            Professor: <span className="fst-italic">Mohammad Rahmati</span>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">WINTER 2022</span>
                        <h5>SPRINKLE</h5>
                        <span className="small">
                            Estimating the time duration of watering soil.
                        </span>
                        <p>
                            Used{" "}
                            <span className="text-decoration-underline">fuzzy logic</span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Sprinkle"
                            >
                                https://github.com/DelaramRajaei/Sprinkle
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">WINTER 2022</span>
                        <h5>SNAILJUMPER-MASTER</h5>
                        <span className="small">
                            Developed a game that can be played both manually or by a
                            neuroevolution algorithm. In this game, there is an animal that
                            tries to avoid obstacles and gain scores.
                        </span>
                        <p>
                            Used{" "}
                            <span className="text-decoration-underline">
                                neuroevolution algorithm
                            </span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/SnailJumper-master"
                            >
                                https://github.com/DelaramRajaei/SnailJumper-master
                            </a>
                        </p>
                    </div>

                    <div className="project-item">
                        <span className="section-date">WINTER 2022</span>
                        <h5>INVERTED PENDULUM</h5>
                        <span className="small">
                            Created a pendulum fixed on top of the cart in reverse. The cart
                            can move either left or right at a different speed in order to
                            keep the pendulum stable.
                        </span>
                        <p>
                            Used{" "}
                            <span className="text-decoration-underline">fuzzy logic</span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Inverted-pendulum"
                            >
                                https://github.com/DelaramRajaei/Inverted-pendulum
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">WINTER 2022</span>
                        <h5>FRUITS CLASSIFICATION</h5>
                        <span className="small">
                            Implemented a deep learning model that recognizes and
                            distinguishes three different types of fruits
                        </span>
                        <p>
                            Used{" "}
                            <span className="text-decoration-underline">neural network</span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Fruits-Classification"
                            >
                                https://github.com/DelaramRajaei/Fruits-Classification
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2021</span>
                        <h5>BINARY PUZZLE</h5>
                        <span className="small">
                            Filling a Binary puzzle according to some specific rules. Given N
                            x N puzzle like sudoku but with binary numbers. There are some
                            rules that should be applied before solving each puzzle. The
                            machine can also recognize unsolvable puzzles.
                        </span>
                        <p>
                            Two different heuristics: MRV: Choose the variable with the fewest
                            possible values. LCV: Tries to avoid failure by assigning values
                            that leave maximal flexibility for the remaining variables.
                        </p>
                        <p>
                            Constraint propagation: Forward Checking: Maintains
                            arc-consistency on constraints with exactly one uninstantiated
                            variable MAC: Performs full arc-consistency after each domain
                            value is rejected
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/delaramrajaei/binary-puzzle"
                            >
                                https://github.com/delaramrajaei/binary-puzzle
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2021</span>
                        <h5>BRINGING BUTTER</h5>
                        <span className="small">
                            Developed a robot choosing the optimal way in order to deliver
                            butter to a person on a table. There is a table full of obstacles,
                            n number of butter slices (at least one), and a corresponding
                            number of people who are waiting around the table to be served by
                            the butter piece(s). The robot has the responsibility to give the
                            butter to a person with fewer possible moves. It can move in 4
                            ways: up, down, left, and right.
                        </span>
                        <p>
                            Implemented
                            <span className="text-decoration-underline">
                                iterative deepening depth-first search (IDS) algorithm
                            </span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Java</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/IDS"
                            >
                                https://github.com/DelaramRajaei/IDS
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2021</span>
                        <h5>SENTIMENT ANALYSIS</h5>
                        <span className="small">
                            Deciding if a comment is negative or positive.
                        </span>
                        <p>
                            <span className="text-decoration-underline">
                                Natural language processing (NLP)
                            </span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/hedzd/sentiment-analysis"
                            >
                                https://github.com/hedzd/sentiment-analysis
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2021</span>
                        <h5>INFORMATION-RETRIEVAL</h5>
                        <span className="small">
                            Created a search engine. Used multiple news to create an inverted
                            index which client can search any word(s) through them.
                        </span>
                        <p>
                            Used{" "}
                            <span className="text-decoration-underline">
                                inverted index (positional and non-positional)
                            </span>
                            ,<span className="text-decoration-underline">tf-idf</span> and{" "}
                            <span className="text-decoration-underline">
                                max heap in three sections
                            </span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Java</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/delaramrajaei/information-retrieval"
                            >
                                https://github.com/delaramrajaei/information-retrieval
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SPRING 2021</span>
                        <h5>MAZE NAVIGATION</h5>
                        <span className="small">
                            The task consists in designing a reactive controller that can let
                            your robot navigating safely and effectively in a maze-like
                            environment using basic sensor data.
                        </span>
                        <p>Design a PI controller for the robot.</p>
                        <p>
                            Used <span className="text-decoration-underline">ROS</span> and{" "}
                            <span className="text-decoration-underline">Gazebo</span>
                        </p>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Python</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Maze_Navigation"
                            >
                                https://github.com/DelaramRajaei/Maze_Navigation
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SUMMER 2020</span>
                        <h5>THEORY OF MACHINES AND LANGUAGES</h5>
                        <span className="small">
                            Deciding whether the given state is accepted by DFA or NDFA
                            algorithm. Deciding whether the given state is accepted by DFA or
                            NDFA algorithm
                        </span>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Java</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Theory-Of-Machines-and-Languages"
                            >
                                https://github.com/DelaramRajaei/Theory-Of-Machines-and-Languages
                            </a>
                        </p>
                    </div>
                    <div className="project-item">
                        <span className="section-date">SUMMER 2019</span>
                        <h5>JPOTIFY</h5>
                        <span className="small">
                            Implemented Spotify. Developed an application for listening to
                            music and can share songs with your friends
                        </span>
                        Tech stack:
                        <ul className="section-list">
                            <li>Programming language: Java</li>
                        </ul>
                        <p>
                            Link:{" "}
                            <a
                                className="external-link"
                                target="_blank"
                                href="https://github.com/DelaramRajaei/Jpotify"
                            >
                                https://github.com/DelaramRajaei/Jpotify
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section id="section-work">
                <span id="section-title-work" className="section-title">
                    WORK EXPERIENCES
                </span>
                <div className="section-body">
                    <div className="work-item">
                        <span className="section-date">AUG 2021 – DEC 2021</span>
                        <span className="fw-bold">JUNIOR BACKEND DEVELOPER</span>, SOCIAL
                        SPORT STARTUP
                        <p>
                            Software engineer and backend developer. Developing a sport
                            application using typescript and in NodeJS.
                        </p>
                    </div>
                    <div className="work-item">
                        <span className="section-date">JUL 2021 – AUG 2021</span>
                        <span className="fw-bold">INTERNSHIP</span>, HENGAM TECHNOLOGY
                        DEVELOPMENT CO.
                        <p>
                            Software engineer and backend developer. Learned NodeJS and
                            typescript. Learned how to containerize applications using Docker
                            and got familiar with pipelines of Bitbucket as CI/CD.
                        </p>
                    </div>
                </div>
            </section>
            <section id="section-certificates">
                <span id="section-title-certificates" className="section-title">
                    CERTIFICATES
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>
                            Dive Into Deep Learning, Adventures with Artificial Intelligence |
                            Amirkabir Artificial Intelligence Summer Summit Of 2020’s Workshop
                        </li>
                        <li>Udemy The Complete NodeJS Developer Course 3rd Edition</li>
                        <li>HTML Tutorial and Advanced | W3school</li>
                        <li>CSS Tutorial and Advanced | W3school</li>
                        <li>Python Tutorial | W3school</li>
                    </ul>
                </div>
            </section>
            <section id="section-skills">
                <span id="section-title-skills" className="section-title">
                    SKILLS
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>Programming Languages</li>
                        <ul>
                            <li>Java - Java Swing</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Racket</li>
                        </ul>
                        <li>Databases</li>
                        <ul>
                            <li>SQL based: MySQL</li>
                            <li>NoSQL: MongoDB</li>
                        </ul>
                        <li>Web development</li>
                        <ul>
                            <li>HTML5, CSS2 (frameworks: Bootstrap), Javascript</li>
                            <li>NodeJS</li>
                            <li>Typescript</li>
                        </ul>
                        <li>Operating systems</li>
                        <ul>
                            <li>Windows</li>
                            <li>Linux (Ubuntu)</li>
                        </ul>
                        <li>Languages</li>
                        <ul>
                            <li>English (IELTS score 7)</li>
                            <li>Persian (Native)</li>
                        </ul>
                        <li>Miscellaneous</li>
                        <ul>
                            <li>VHDL</li>
                            <li>Verilog</li>
                            <li>Boson NetSim</li>
                            <li>Wireshark</li>
                            <li>Adobe Photoshop</li>
                            <li>Office: Word, Excel</li>
                            <li>SPSS</li>
                            <li>Postman</li>
                            <li>Docker</li>
                            <li>Source control: Git</li>
                            <li>
                                Project management, collaboration tools and prototyping tool:
                                Jira, Pumble, Figma
                            </li>
                        </ul>
                    </ul>
                </div>
            </section>
            <section id="section-activities">
                <span id="section-title-activities" className="section-title">
                    OTHER ACTIVITIES
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>Helped on making posters, Students Scientific Chapter (SSC)</li>
                        <li>
                            Participated in Linux Festival, Amirkabir University of
                            Technology, Winter 2020
                        </li>
                        <li>
                            Participated in ACM ICPC, Department of Computer Engineering
                            Amirkabir University of Technology, Fall 2018
                        </li>
                    </ul>
                </div>
            </section>
            <section id="section-ref">
                <span id="section-title-ref" className="section-title">
                    REFERENCES
                </span>
                <div className="section-body d-flex direction-row justify-content-between">
                    <div className="reference">
                        <span className="ref-name fs-5">AMIR KALBASI</span>
                        <span className="text-muted fs-6 fst-italic">
                            ASSISTANT PROFESSOR
                        </span>
                        Computer Engineering and IT Department, Amirkabir University of
                        Technology Email:{" "}
                        <a href="mailto:kalbasi@aut.ac.ir" className="email-link">
                            kalbasi@aut.ac.ir
                        </a>
                    </div>
                    <div className="reference">
                        <span className="ref-name fs-5">MOHAMMAD MEHDI EBADZADEH</span>
                        <span className="text-muted fs-6 fst-italic">PROFESSOR</span>
                        Computer Engineering and IT Department, Amirkabir University of
                        Technology Email:{" "}
                        <a href="mailto:ebadzadeh@aut.ac.ir" className="email-link">
                            ebadzadeh@aut.ac.ir
                        </a>
                    </div>
                    <div className="reference">
                        <span className="ref-name fs-5">HAMED FARBEH</span>
                        <span className="text-muted fs-6 fst-italic">
                            ASSISTANT PROFESSOR
                        </span>
                        Computer Engineering and IT Department, Amirkabir University of
                        Technology Email:{" "}
                        <a href="mailto:farbeh@aut.ac.ir" className="email-link">
                            ebadzadehaut.ac.ir
                        </a>
                    </div>
                </div>
            </section>
            <section id="section-contact">
                <span id="section-title-contact" className="section-title">
                    Contact
                </span>
                <div className="section-body">
                    <ul className="section-list">
                        <li>phone +98 9199070925</li>
                        <li>
                            <a className="email-link" href="mailto:rajaied@aut.ac.ir">
                                rajaied@aut.ac.ir
                            </a>
                        </li>
                        <li>
                            <a className="email-link" href="mailto:rajaiedelaram@gmail.com">
                                rajaiedelaram@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                className="external-link"
                                href="https://linkedin.com/in/delaram-rajaei"
                                target="_blank"
                            >
                                linkedin.com/in/delaram-rajaei
                            </a>
                        </li>
                        <li>
                            <a
                                className="external-link"
                                href="https://github.com/DelaramRajaei"
                                target="_blank"
                            >
                                github.com/DelaramRajaei
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="section-download">
                <span id="section-title-download" className="section-title">
                    Download CV
                </span>
                <div className="section-body">
                    <a
                        className="btn btn-outline-primary btn-lg"
                        target="_blank"
                        href="/Delaram_Rajaei_CV.pdf"
                    >
                        <i class="bi bi-filetype-pdf pe-3"></i>Download
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
