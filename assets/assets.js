import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// Company Logos
import usc_isi_logo from '../logos_icons/USC_ISI.jpg';
import samsung_logo from '../logos_icons/Samsung_Electronics.jpeg';
import bosch_logo from '../logos_icons/Bosch.png';

// Technology Icons
import cuda_logo from '../logos_icons/Nvidia_CUDA_Logo.jpg';
import pytorch_logo from '../logos_icons/pytorch.jpeg';
import docker_logo from '../logos_icons/docker.png';
import kubernetes_logo from '../logos_icons/Kubernetes-Logo.png';
import langchain_logo from '../logos_icons/langchain.png';
import langgraph_logo from '../logos_icons/langgraph.png';
import huggingface_logo from '../logos_icons/huggingface.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    
    // Company Logos
    usc_isi_logo,
    samsung_logo,
    bosch_logo,
    
    // Technology Icons
    cuda_logo,
    pytorch_logo,
    docker_logo,
    kubernetes_logo,
    langchain_logo,
    langgraph_logo,
    huggingface_logo
};

export const workData = [
    {
        title: 'Flash Attention v2 GPU Optimized',
        description: 'CUDA/Triton Implementation with memory-efficient attention mechanism',
        bgImage: '/work-1.png',
        category: 'GPU Programming',
        tech: [
            { name: 'CUDA', icon: cuda_logo },
            { name: 'Triton' },
            { name: 'PyTorch', icon: pytorch_logo }
        ],
        github: 'https://github.com/chinmaydk99/Flash_Attention_v2_GPU_Optimized',
        metrics: ['2x Memory Efficiency', '40% Speed Improvement', 'O(N) Memory Complexity']
    },
    {
        title: 'Multi-agent Marketing System',
        description: 'Agentic AI with LangGraph for automated campaign generation',
        bgImage: '/work-2.png',
        category: 'Agentic AI',
        tech: [
            { name: 'LangGraph', icon: langgraph_logo },
            { name: 'LLMs' },
            { name: 'Multi-agent' }
        ],
        github: 'https://github.com/chinmaydk99/Multiagent-Marketing-Campaign-Generator',
        metrics: ['5 Specialized Agents', '80% Automation Rate', 'Real-time Collaboration']
    },
    {
        title: '100 Days of CUDA',
        description: 'Comprehensive GPU Programming Journey with daily implementations',
        bgImage: '/work-3.png',
        category: 'GPU Programming',
        tech: [
            { name: 'CUDA', icon: cuda_logo },
            { name: 'GPU Optimization' },
            { name: 'Parallel Computing' }
        ],
        github: 'https://github.com/chinmaydk99/100-Days-Of-CUDA',
        metrics: ['100+ Implementations', '50+ Optimization Techniques', 'Educational Resource']
    },
    {
        title: 'GPTQ Optimization',
        description: '4-bit LLM Inference with custom Triton kernels',
        bgImage: '/work-4.png',
        category: 'LLM Optimization',
        tech: [
            { name: 'Triton' },
            { name: 'Quantization' },
            { name: 'LLM Inference' }
        ],
        github: 'https://github.com/chinmaydk99/GPTQ',
        metrics: ['4x Memory Reduction', '3x Inference Speed', 'Minimal Accuracy Loss']
    },
    {
        title: 'LLM Clinical Diagnosis (CKD)',
        description: 'Chronic Kidney Disease Prediction using Llama-3.2 fine-tuned on MIMIC-IV dataset with advanced medical reasoning',
        bgImage: '/work-1.png',
        category: 'Machine Learning',
        tech: [
            { name: 'Llama-3.2' },
            { name: 'LoRA Fine-tuning' },
            { name: 'MIMIC-IV' },
            { name: 'Healthcare AI' },
            { name: 'Medical NLP' }
        ],
        github: 'https://github.com/chinmaydk99/LLM_Based_CKD_Prediction',
        metrics: ['85% Accuracy', 'MIMIC-IV Dataset', 'Clinical Validation', 'Medical Reasoning'],
        motivation: 'Addressing the critical need for early CKD detection in clinical settings using AI-powered diagnostic assistance',
        techStack: ['Llama-3.2-3B', 'LoRA (Low-Rank Adaptation)', 'MIMIC-IV Clinical Database', 'PyTorch', 'Transformers', 'Medical Data Processing'],
        briefDescription: 'An advanced LLM-based system for predicting Chronic Kidney Disease using clinical notes and patient data from the MIMIC-IV dataset. The model employs parameter-efficient fine-tuning techniques to adapt Llama-3.2 for medical reasoning tasks.'
    },
    {
        title: 'PipeEdge Pruning',
        description: 'Distributed Edge ML Pipeline with Model Pruning for 43% latency reduction',
        bgImage: '/work-2.png',
        category: 'Machine Learning',
        tech: [
            { name: 'Model Pruning' },
            { name: 'Edge Computing' },
            { name: 'Distributed ML' },
            { name: 'Pipeline Optimization' }
        ],
        github: 'https://github.com/chinmaydk99/PipeEdge/tree/pruning',
        paper: 'https://ieeexplore.ieee.org/document/10096632',
        metrics: ['43% Latency Reduction', 'Edge Deployment', 'IEEE Publication']
    },
    {
        title: 'Open-R1 GRPO Fine-tuning',
        description: 'Group Relative Policy Optimization for fine-tuning Qwen-0.5B reasoning model with advanced mathematical reasoning capabilities',
        bgImage: '/work-3.png',
        category: 'LLM Optimization',
        tech: [
            { name: 'GRPO Algorithm' },
            { name: 'Qwen-0.5B' },
            { name: 'Reasoning Models' },
            { name: 'Policy Optimization' },
            { name: 'Mathematical Reasoning' }
        ],
        github: 'https://github.com/chinmaydk99/open-r1-qwen0.5',
        metrics: ['GRPO Algorithm', 'Reasoning Enhancement', 'Policy Optimization', '30% Improvement in Math Tasks'],
        motivation: 'Enhancing small language models reasoning capabilities through advanced policy optimization techniques for mathematical problem solving',
        techStack: ['Qwen-0.5B Base Model', 'GRPO (Group Relative Policy Optimization)', 'PyTorch', 'Transformers', 'Mathematical Datasets', 'Reinforcement Learning'],
        briefDescription: 'Implementation of Group Relative Policy Optimization (GRPO) for fine-tuning Qwen-0.5B to improve mathematical reasoning. GRPO enables more stable and efficient policy learning compared to traditional RLHF methods.'
    },
    {
        title: 'AI Sales Automation',
        description: 'OpenAI Agents SDK for automated sales pipeline management',
        bgImage: '/work-4.png',
        category: 'Agentic AI',
        tech: [
            { name: 'OpenAI SDK' },
            { name: 'Multi-agent' },
            { name: 'Sales Automation' }
        ],
        github: '#',
        metrics: ['60% Process Automation', 'Multi-agent Workflow', 'CRM Integration']
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Programming', description: 'Python, C++, CUDA, JavaScript, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MS in ML/Data Science (USC), B.Tech ECE (PES)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Specialization', description: 'Agentic AI, LLM Optimization, GPU Programming' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];