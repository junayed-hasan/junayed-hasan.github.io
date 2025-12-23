// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications and manuscripts under review.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Portfolio of industry, research, and open-source projects in AI/ML, healthcare analytics, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Mentoring the next generation of AI researchers and engineers through hands-on learning and research collaboration.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Collaborators, mentors, and students who have shaped my research journey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-service",
          title: "service",
          description: "Contributing to the research community through peer review, mentorship, and open science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-paper-on-deployable-deep-learning-for-plant-disease-detection-accepted-at-ieee-access-achieving-99-compression-while-maintaining-97-46-accuracy-for-edge-deployment",
          title: 'Paper on Deployable Deep Learning for Plant Disease Detection accepted at IEEE Access!...',
          description: "",
          section: "News",},{id: "news-cq-cnn-paper-accepted-in-plos-one-a-lightweight-hybrid-classical-quantum-cnn-for-alzheimer-s-disease-detection-using-3d-structural-brain-mri",
          title: 'CQ-CNN paper accepted in PLOS ONE! 🧠 A lightweight hybrid classical-quantum CNN for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-women-in-machine-learning-workshop-neurips-2025-leveraging-ml-and-llms-for-enhanced-occupational-stress-detection",
          title: 'Paper accepted at Women in Machine Learning Workshop @ NeurIPS 2025! 🎉 “Leveraging...',
          description: "",
          section: "News",},{id: "news-presented-hadasmilenet-at-ieee-icdm-2025-oral-poster-hadamard-fusion-of-handcrafted-and-deep-learning-features-for-enhancing-facial-emotion-recognition-of-genuine-smiles",
          title: 'Presented HadaSmileNet at IEEE ICDM 2025 (Oral + Poster)! 🎤 “Hadamard fusion of...',
          description: "",
          section: "News",},{id: "news-paper-on-ncd-detection-via-prompt-engineering-and-domain-knowledge-integration-published-in-alexandria-engineering-journal",
          title: 'Paper on NCD detection via prompt engineering and domain knowledge integration published in...',
          description: "",
          section: "News",},{id: "news-quantummedkd-paper-published-online-in-alexandria-engineering-journal-vol-134c-pp-49-68-a-hybrid-quantum-classical-knowledge-distillation-framework-for-medical-image-analysis-doi",
          title: 'QuantumMedKD paper published online in Alexandria Engineering Journal (Vol. 134C, pp. 49-68)! 🎉...',
          description: "",
          section: "News",},{id: "news-reached-50-citations-on-google-scholar-grateful-for-the-research-community-s-engagement-with-my-work",
          title: 'Reached 50+ citations on Google Scholar! 🎉 Grateful for the research community’s engagement...',
          description: "",
          section: "News",},{id: "news-graduated-from-johns-hopkins-university-with-an-m-s-e-in-computer-science-achieving-a-cgpa-of-3-9-4-0-grateful-for-an-incredible-journey-in-research-and-learning",
          title: '🎓 Graduated from Johns Hopkins University with an M.S.E. in Computer Science, achieving...',
          description: "",
          section: "News",},{id: "projects-adult-income-prediction",
          title: 'Adult Income Prediction',
          description: "Machine learning analysis of census data to predict individual income levels with comprehensive preprocessing and visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adult_income_prediction/";
            },},{id: "projects-alzheimer-39-s-disease-detection",
          title: 'Alzheimer&amp;#39;s Disease Detection',
          description: "Deep learning ensemble approach for multi-class Alzheimer&#39;s classification from MRI scans",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alzheimers_detection/";
            },},{id: "projects-bengali-clinical-machine-translation",
          title: 'Bengali Clinical Machine Translation',
          description: "Extrinsic evaluation of machine translation quality for low-resource Bengali clinical texts via downstream tasks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bengali_clinical_mt/";
            },},{id: "projects-blood-horizon-predictor",
          title: 'Blood Horizon Predictor',
          description: "Predictive blood utilization management system for enhanced transfusion medicine operations at Mayo Clinic",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blood_horizon_predictor/";
            },},{id: "projects-bridging-quantum-classical-ml",
          title: 'Bridging Quantum-Classical ML',
          description: "Knowledge transfer from classical to quantum neural networks via knowledge distillation (IEEE TQE - Under Review, 12 preprint citations)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bridging_quantum_classical/";
            },},{id: "projects-crazycrawler",
          title: 'CrazyCrawler',
          description: "Web search engine with scraping and crawling capabilities built with Django, MySQL, and Android app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crazycrawler/";
            },},{id: "projects-deep-learning-with-pytorch",
          title: 'Deep Learning with PyTorch',
          description: "Comprehensive Jupyter notebooks showcasing PyTorch for image classification, object detection, NLP, and advanced techniques",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deep_learning_pytorch/";
            },},{id: "projects-deepmarkernet",
          title: 'DeepMarkerNet',
          description: "Multi-task transformer framework for spontaneous smile recognition using Duchenne Marker supervision (PRL 2024)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepmarkernet/";
            },},{id: "projects-disability-care",
          title: 'Disability Care',
          description: "Web application connecting people with disabilities to healthcare services through an accessible interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disability_care/";
            },},{id: "projects-hadasmilenet",
          title: 'HadaSmileNet',
          description: "Hadamard fusion of handcrafted and deep-learning features for genuine smile recognition (IEEE ICDM 2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hadasmilenet/";
            },},{id: "projects-help-the-needy",
          title: 'Help The Needy',
          description: "Online donation and volunteer coordination platform for social welfare in Bangladesh",
          section: "Projects",handler: () => {
              window.location.href = "/projects/help_the_needy/";
            },},{id: "projects-her2-domain-adaptation",
          title: 'HER2 Domain Adaptation',
          description: "Extending HER2 biomarker detection from breast cancer to 7 cancer types using domain adaptation and transfer learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/her2_domain_adaptation/";
            },},{id: "projects-lifeembedding",
          title: 'LifeEmbedding',
          description: "Cloud-native system to model human life trajectories as embeddings with retrieval-augmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/life_embedding/";
            },},{id: "projects-life-satisfaction-prediction",
          title: 'Life Satisfaction Prediction',
          description: "Predicting life satisfaction using machine learning, explainable AI, and novel tabular-to-text NLP algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/life_satisfaction_prediction/";
            },},{id: "projects-llendify",
          title: 'LLendify',
          description: "AI-powered loan eligibility system using LLMs to analyze bank statements and provide instant recommendations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llendify/";
            },},{id: "projects-ncd-detection-framework",
          title: 'NCD Detection Framework',
          description: "Novel framework for noncommunicable disease detection via prompt engineering and domain knowledge integration (AEJ 2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ncd_detection/";
            },},{id: "projects-occupational-stress-detection",
          title: 'Occupational Stress Detection',
          description: "Early detection of occupational stress using machine learning and large language models with ~90% accuracy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/occupational_stress_detection/";
            },},{id: "projects-optimclm",
          title: 'OptimCLM',
          description: "Optimizing clinical language models via knowledge distillation, pruning, and quantization (IJMI 2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optimclm/";
            },},{id: "projects-paracycle",
          title: 'ParaCycle',
          description: "Reinforcement learning framework for reference-free machine translation using bidirectional paraphrase consensus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paracycle_mt/";
            },},{id: "projects-plant-leaf-disease-detection",
          title: 'Plant Leaf Disease Detection',
          description: "Deployable deep learning for cross-domain plant disease detection via ensemble learning, knowledge distillation, and quantization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plant_disease_detection/";
            },},{id: "projects-quantum-machine-learning",
          title: 'Quantum Machine Learning',
          description: "Comprehensive tutorials and hybrid quantum-classical models using Qiskit and PyTorch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum_ml_qiskit/";
            },},{id: "projects-shadow-loss",
          title: 'Shadow Loss',
          description: "Memory-linear deep metric learning reducing complexity from O(N²) to O(N) (CVPR 2026 - Under Review)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shadow_loss/";
            },},{id: "projects-valentines-blossoming-flower",
          title: 'Valentines Blossoming Flower',
          description: "Interactive single-page web application with animated UI elements and audio-visual effects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/valentines_flower/";
            },},{id: "projects-word-alignment-techniques-in-machine-translation",
          title: 'Word Alignment Techniques in Machine Translation',
          description: "Implementation and comparison of statistical word alignment models for machine translation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/word_alignment_mt/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6E%61%79%65%64%68%61%73%61%6E%31%30%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/junayed-hasan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mjhasan21", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QwIfzvgAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-3451-0267", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Mohammad-Junayed-Hasan/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
