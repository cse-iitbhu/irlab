import React, { useEffect, useState } from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdContentCopy, MdPersonOutline } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineLink } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import copy from "copy-to-clipboard";
import { Link } from 'react-router-dom';

const data = [
{
  authors: "Krishna Tewari and Sukomal Pal",
  year: "2025",
  category: "Conference",
  desc: "Advancing Vision and Language in GI Diagnosis: Florence2 for Question Answering and Stable Diffusion for Image Synthesis",
  name: "Working Notes of the Conference and Labs of the Evaluation Forum (CLEF 2025)",
  link: "https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_207.pdf",
  bibtex: "@inproceedings{Tewari2025GI_VisionLanguage,\n" +
  "  author = {Krishna Tewari and Sukomal Pal},\n" +
  "  title = {Advancing Vision and Language in GI Diagnosis: Florence2 for Question Answering and Stable Diffusion for Image Synthesis},\n" +
  "  booktitle = {Working Notes of CLEF 2025 – Conference and Labs of the Evaluation Forum},\n" +
  "  year = {2025},\n" +
  "  publisher = {CEUR Workshop Proceedings},\n" +
  "  address = {Madrid, Spain},\n" +
  "  url = {https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_207.pdf},\n" +
  "  abstract = {Recent advances in medical AI have underscored the importance of Visual Question Answering (VQA) and medical image generation. VQA systems enable automated reasoning over medical images using natural language queries, enhancing clinical interpretability. Meanwhile, generative models synthesize realistic medical images from textual descriptions, supporting data augmentation, simulation training, and rare case generation; particularly valuable in low-resource domains. In the ImageCLEFmed-MEDVQA-GI 2025 challenge, we address both subtasks: (1) closed-domain VQA and (2) medical image generation in the gastrointestinal (GI) domain. For VQA, we fine-tuned Florence2 on the Kvasir-VQA dataset. For image generation, we fine-tuned Stable Diffusion with LoRA using synthetic captions. Our results demonstrate high quality synthesis and strong VQA performance, showing promise for clinical image interpretation and dataset enrichment in low-resource GI healthcare.},\n" +
  "}"
},
{
  authors: "Supriya Chanda, Krishna Tewari, Arjun Mukherjee and Sukomal Pal",
  year: "2024",
  category: "Conference",
  desc: "Leveraging ChatGPT and XLM-RoBERTa for Sarcasm Detection in Dravidian Code-Mixed Languages",
  name: "Forum of Information Retrieval and Evaluation FIRE-2024",
  link: "https://ceur-ws.org/Vol-4054/T4-14.pdf",
  bibtex: "@inproceedings{Chanda2024SarcasmDravidian,\n" +
  "  author = {Supriya Chanda and Krishna Tewari and Arjun Mukherjee and Sukomal Pal},\n" +
  "  title = {Leveraging ChatGPT and XLM-RoBERTa for Sarcasm Detection in Dravidian Code-Mixed Languages},\n" +
  "  booktitle = {Working Notes of the Forum for Information Retrieval Evaluation (FIRE) 2024},\n" +
  "  year = {2024},\n" +
  "  publisher = {CEUR Workshop Proceedings},\n" +
  "  address = {Gandhinagar, India},\n" +
  "  url = {https://ceur-ws.org/Vol-4054/T4-14.pdf},\n" +
  "  abstract = {Sarcasm refers to a form of irony where what is meant is actually said in an opposite manner usually in a mocking or humorous form. We very often come across multiple sarcastic comments which are code-mixed in various social-media platforms. In order to obtain insights from the textual data available or encountered upon, we would need a system to identify the sentiments behind the text and detect sarcasm. In this paper, we present a solution submitted for the shared task titled ‘Sarcasm Identification of Dravidian Languages Tamil and Malayalam, which was organized by Dravidian CodeMix 2024 at the Forum for Information Retrieval Evaluation (FIRE) 2024. This paper explores an approach to sarcasm detection, leveraging the BERT (Bidirectional Encoder Representations from Transformers) and a supplementary layer of neural networks for precise classification into two distinct classes: sarcastic and non-sarcastic comments. It also uses ChatGPT for the same and performs a comparative study between GPT and BERT-based models. Our experiment demonstrates that our model effectively detects sarcastic comments, achieving an F1-score of 0.74 for both the Tamil-English and Malayalam-English code-mixed datasets, in contrast to GPT which achieved an F1-score of 0.64 for the above mentioned datasets. This score reflects a reasonable overall performance and places us at the third position in the ranking for Malayalam-English language pairs and at the first position in the ranking for Tamil-English language pairs.},\n" +
  "}"
},
{
  authors: "Krishna Tewari, Abhyudaya Verma and Sukomal Pal",
  year: "2025",
  category: "Conference",
  desc: "IReL, IIT (BHU) at MEDIQA-MAGIC 2025: Tackling Multimodal Dermatology with CLIPSeg-Based Segmentation and BERT-Swin Question Answering",
  name: "Working Notes of the Conference and Labs of the Evaluation Forum (CLEF 2025)",
  link: "https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_208.pdf",
  bibtex: "@inproceedings{Tewari2025CLEF208,\n" +
  "  author = {Krishna Tewari and Abhyudaya Verma and Sukomal Pal},\n" +
  "  title = {IReL, IIT(BHU) at MEDIQA-MAGIC 2025: Tackling Multimodal Dermatology with CLIPSeg-Based Segmentation and BERT-Swin Question Answering},\n" +
  "  booktitle = {Working Notes of CLEF 2025 — Conference and Labs of the Evaluation Forum},\n" +
  "  year = {2025},\n" +
  "  publisher = {CEUR Workshop Proceedings},\n" +
  "  address = {Madrid, Spain},\n" +
  "  url = {https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_208.pdf},\n" +
  "  abstract = {Advances in multimodal learning have the potential to significantly improve automated analysis of dermatological images by integrating visual and textual clinical information. In this work, we present IReL, IIT(BHU)’s system developed for the MEDIQA-MAGIC 2025 challenge, addressing two tasks: lesion segmentation and CVQA. For segmentation, we propose a CLIPSeg-based framework that combines clinical images with contextual prompts formed by consumer questions and clinician responses. Using frozen CLIP encoders and a fine-tuned transformer decoder, our system produces detailed lesion masks being among top performing team by achieving a Dice score of 0.741 and a Jaccard score of 0.588. These results demonstrate the effectiveness of prompt-guided vision-language models in generating clinically meaningful segmentation outputs. In the VQA task, we integrate Bio_ClinicalBERT and a Swin Transformer to encode textual and visual inputs, respectively. While the model underperformed (accuracy 0.1731), likely due to sub-optimal input alignment, it establishes a foundation for future enhancements. Our findings underscore the strength of vision-language fusion for dermatological segmentation and indicate that targeted improvements in multimodal alignment and input formatting could substantially improve VQA performance. Overall, this work highlights the promise of multimodal architectures in advancing intelligent clinical decision support.},\n" +
  "}"
},
{
  authors: "Saumay Gupta and Sukomal Pal",
  year: "2025",
  category: "Journal",
  desc: "Advancing Hindi Text Summarization: Named Entity Recognition and Content Augmentation Strategies",
  name: "ACM Transactions on Asian and Low-Resource Language Information Processing",
  link: "https://dl.acm.org/doi/abs/10.1145/3770073",
  bibtex: "@article{10.1145/3770073,\n" +
  "  author = {Saumay Gupta and Sukomal Pal},\n" +
  "  title = {Advancing Hindi Text Summarization: Named Entity Recognition and Content Augmentation Strategies},\n" +
  "  journal = {ACM Transactions on Asian and Low-Resource Language Information Processing},\n" +
  "  year = {2025},\n" +
  "  month = {November},\n" +
  "  publisher = {Association for Computing Machinery},\n" +
  "  address = {New York, NY, USA},\n" +
  "  issn = {2375-4699},\n" +
  "  doi = {10.1145/3770073},\n" +
  "  url = {https://doi.org/10.1145/3770073},\n" +
  "  note = {Just Accepted},\n" +
  "  keywords = {Hindi abstractive summarization, Focused Web Crawler, Named entity recognition},\n" +
  "  abstract = {We explore advancements in Hindi text summarization, a critical area in natural language processing that aids in managing information overload. Despite a growing corpus of Hindi data, there’s a significant gap in practical summarization tools due to intricate linguistic features and limited resources compared to English. Previous works focused on extractive methods, but recent shifts towards abstractive approaches promise more natural and coherent summaries by understanding and paraphrasing content. Our research introduces novel methodologies, Named Entity-Aware Abstractive Text Summarization (NEA-ATS) and Query-Driven Content Augmentation for Summarization (QDCAS), aimed at enhancing accuracy and richness of Hindi summaries. NEA-ATS integrates Named Entity Recognition to prioritize crucial information, improving language model attention to critical details but occasionally disrupting context. While NEA-ATS shows some improvements, it occasionally disrupts text’s context, leading to only marginal gains in summary quality. Meanwhile, QDCAS addresses extrinsic hallucinations—common in state-of-the-art models—by augmenting source documents with relevant content through focused web crawling—a technique to selectively gather topic-specific web pages—broadening contextual understanding and refining outputs. Empirical results demonstrate effectiveness of QDCAS, showing marginal improvements in ROUGE and BERTScores over traditional language models. This work advances Hindi text summarization and explores content-rich strategies, potentially expanding to other languages and domains.}\n" +
  "}"
},
{
  authors: "Rahul Jambulkar, Aditya and Sukomal Pal",
  year: "2025",
  category: "Conference",
  desc: "Arcturus at CheckThat! 2025: DeBERTa-v3-Base for Multilingual Subjectivity Detection in News Articles",
  name: "Working Notes of the Conference and Labs of the Evaluation Forum (CLEF 2025)",
  link: "https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_77.pdf",
  bibtex: "@inproceedings{jambulkar2025arcturus,\n" +
  "  author = {Rahul Jambulkar and Aditya Aditya and Sukomal Pal},\n" +
  "  title = {Arcturus at CheckThat! 2025: DeBERTa-v3-Base for Multilingual Subjectivity Detection in News Articles},\n" +
  "  booktitle = {Working Notes of CLEF 2025 -- Conference and Labs of the Evaluation Forum},\n" +
  "  year = {2025},\n" +
  "  publisher = {CEUR Workshop Proceedings},\n" +
  "  address = {Padua, Italy},\n" +
  "  url = {https://www.dei.unipd.it/~faggioli/temp/clef2025/paper_77.pdf},\n" +
  "  abstract = {This paper presents the Arcturus system submitted to the CheckThat! 2025 Lab task on Multilingual Subjectivity Detection in News Articles. We explore the use of DeBERTa-v3-Base transformer model fine-tuned for multilingual text classification. The system effectively distinguishes between subjective and objective news content across multiple languages. Our approach demonstrates strong performance with competitive F1-scores across test datasets, highlighting the robustness of DeBERTa-based architectures for multilingual subjectivity detection.}\n" +
  "}"
},
{
  authors: "Supriya Chanda and Sukomal Pal",
  year: "2024",
  category: "Conference",
  desc: "Overview of the shared task on code-mixed information retrieval from social media data",
  name: "Proceedings of the 16th Annual Meeting of the Forum for Information Retrieval Evaluation",
  link: "https://dl.acm.org/doi/full/10.1145/3734947.3735670",
  bibtex: "@inproceedings{10.1145/3734947.3735670,\n" +
  "  author = {Supriya Chanda and Sukomal Pal},\n" +
  "  title = {Overview of the shared task on code-mixed information retrieval from social media data},\n" +
  "  booktitle = {Proceedings of the 16th Annual Meeting of the Forum for Information Retrieval Evaluation},\n" +
  "  year = {2025},\n" +
  "  pages = {29--31},\n" +
  "  numpages = {3},\n" +
  "  publisher = {Association for Computing Machinery},\n" +
  "  address = {New York, NY, USA},\n" +
  "  isbn = {9798400713187},\n" +
  "  series = {FIRE '24},\n" +
  "  url = {https://doi.org/10.1145/3734947.3735670},\n" +
  "  doi = {10.1145/3734947.3735670},\n" +
  "  keywords = {Code-Mixed, Bengali, English, Information Retrieval, Social Media},\n" +
  "  abstract = {The rise of multilingual communication on social media platforms such as Facebook, Twitter, and WhatsApp presents a compelling challenge for information retrieval in code-mixed contexts within natural language processing. This paper provides an overview of the Code-Mixed Information Retrieval Shared Task, which is part of the FIRE-2024 conference. The main focus of this experiment was the evaluation of how relevant documents code-mixed from a corpus of Bengali-English comments were to be given for a set of code-mixed queries. Six teams showed interest in participating in the shared task; two teams provided their runs. This article describes the models used by the competing teams and their performance evaluated on the Mean Average Precision (MAP), a significant metric used for information retrieval tasks.}\n" +
  "}"
},
{
  authors: "Yamini Jha, Krishna Tewari and Sukomal Pal",
  year: "2025",
  category: "Conference",
  desc: "HiDePCC: A Novel Dual-Pronged Untargeted Attack on Federated Recommendation via Gradient Perturbation and Cluster Crafting",
  name: "Proceedings of the Nineteenth ACM Conference on Recommender Systems",
  link: "https://dl.acm.org/doi/full/10.1145/3705328.3748041",
  bibtex: "@inproceedings{10.1145/3705328.3748041,\n" +
  "  author = {Yamini Jha and Krishna Tewari and Sukomal Pal},\n" +
  "  title = {HiDePCC: A Novel Dual-Pronged Untargeted Attack on Federated Recommendation via Gradient Perturbation and Cluster Crafting},\n" +
  "  booktitle = {Proceedings of the Nineteenth ACM Conference on Recommender Systems},\n" +
  "  year = {2025},\n" +
  "  pages = {610--614},\n" +
  "  numpages = {5},\n" +
  "  publisher = {Association for Computing Machinery},\n" +
  "  address = {New York, NY, USA},\n" +
  "  isbn = {9798400713644},\n" +
  "  series = {RecSys '25},\n" +
  "  url = {https://doi.org/10.1145/3705328.3748041},\n" +
  "  doi = {10.1145/3705328.3748041},\n" +
  "  keywords = {Federated Recommendation Systems, Federated Learning, Untargeted Attacks, Gradient perturbation, Hierarchical Clustering, Matrix Factorization, Security And Privacy},\n" +
  "  abstract = {Federated recommender systems offer privacy benefits by decentralizing user data and preventing direct data sharing among clients. Although this architecture limits the effectiveness of traditional attack strategies, it remains susceptible to subtle adversarial attacks that can significantly degrade the accuracy of recommendations. To expose these vulnerabilities, we propose a novel untargeted attack (HiDePCC) that degrades overall system performance through a dual-pronged strategy combining adaptive gradient perturbation and hierarchical cluster-based embedding manipulation. We apply adaptive perturbations to item gradients during training and employ hierarchical clustering using several linkage methods to form coherent item clusters. Within these clusters, we converge item embeddings and manipulate boundary points to induce item misclassification. This causes the system to assign similar scores to clustered items and misrank them. We evaluated our attack on two benchmark datasets, MovieLens (with 0.5% and 1% malicious users) and Gowalla (1%), using Matrix Factorization as the base recommendation model and assessing the impact in various robust aggregation techniques. We also examined several permutations of configurations using hierarchical clustering, adaptive gradient perturbation and boundary points misclassification. Our results show that the complete setup outperforms existing state-of-the-art untargeted attacks, with performance drops for HR@5 ranging from 13.93% to 68.02% on MovieLens and ranging from 40.02% and 99.76% on Gowalla dataset. These findings reveal important vulnerabilities in federated recommendation systems.}\n" +
  "}"
},
{
  authors: "Supriya Chanda and Sukomal Pal",
  year: "2025",
  category: "Journal",
  desc: "Word Level Language Identification from Social Media Code-Mixed Data Leveraging Transformer-Based Models",
  name: "SN Computer Science",
  link: "https://link.springer.com/article/10.1007/s42979-025-04377-4",
  bibtex: "@article{Chanda2025,\n" +
  "  author = {Supriya Chanda and Sukomal Pal},\n" +
  "  title = {Word Level Language Identification from Social Media Code-Mixed Data Leveraging Transformer-Based Models},\n" +
  "  journal = {SN Computer Science},\n" +
  "  volume = {6},\n" +
  "  number = {7},\n" +
  "  pages = {844},\n" +
  "  year = {2025},\n" +
  "  doi = {10.1007/s42979-025-04377-4},\n" +
  "  url = {https://doi.org/10.1007/s42979-025-04377-4},\n" +
  "  issn = {2661-8907},\n" +
  "  abstract = {Code-mixing is mixing of two or more languages in a statement or a conversation. Multilingual communities all over the world often use this on a regular basis, especially during communication in social media. People mix their mother tongue with other national and international languages, like English. While code-mixing in verbal communication is a serious problem, it is not either easy for written communication as well. In informal written communication, people use multiple languages without changing the script, i.e. words from two or more languages occur next to each other using a single script. For an intelligent system, automatic language identification in such scenarios is an essential task. Language identification is considered here as a token classification problem. Every word in a sentence receives a linguistic tag in a supervised setup. For this task, we leverage pre-trained Bidirectional Encoder Representations of Transformers (BERT) to obtain the contextual representations of sentences. We evaluate several combinations of deep learning models and input representations. Characters, sub-words, and their combination embeddings are primarily considered for CNN and LSTM-based models. Later, BERT with LSTM model is used. Through three different datasets: ICON_POS, ICON_SAIL, and LinCE, we conduct language identification (LID) task in Bengali-English (BN-EN), Hindi-English (HI-EN), and Spanish-English (ES-EN) code-mixed sentences. Our proposed method of the Bi-LSTM model on top of BERT neural representations of code-mixed data outperforms the existing state-of-the-art techniques in terms of F1-scores. For two datasets of Bengali-English language pairs, ICON_POS and ICON_SAIL, we observe performance gains of 8.12% and 4.23%, respectively. We demonstrate performance gains of 6.41%, 0.68%, and 7.83% for three datasets of Hindi-English language pairs ICON_POS, ICON_SAIL, and LinCE, respectively. We also show an improvement of 6.08% in language identification for the Spanish-English language pair in the LinCE dataset.}\n" +
  "}"
},
{
  authors: "Shraddha Jain, Rajeev Srivastava and Sukomal Pal",
  year: "2025",
  category: "Journal",
  desc: "Automatic and Efficient Micro Univariate Convolutional Neural Network Framework for Multiple Neurological Disorders From EEG Signals",
  name: "Smart Health",
  link: "https://www.sciencedirect.com/science/article/pii/S2352648325000789",
  bibtex: "@article{JAIN2025100617,\n" +
  "  title = {Automatic and efficient micro univariate convolutional neural network framework for multiple neurological disorders from EEG signals},\n" +
  "  author = {Shraddha Jain and Rajeev Srivastava and Sukomal Pal},\n" +
  "  journal = {Smart Health},\n" +
  "  volume = {38},\n" +
  "  pages = {100617},\n" +
  "  year = {2025},\n" +
  "  issn = {2352-6483},\n" +
  "  doi = {https://doi.org/10.1016/j.smhl.2025.100617},\n" +
  "  url = {https://www.sciencedirect.com/science/article/pii/S2352648325000789},\n" +
  "  keywords = {Alzheimer's disease, Classification, CNN, EEG signal, Epilepsy, Neurological disorders, Parkinson's disease},\n" +
  "  abstract = {Objective: Neurological disorders affect millions globally, contributing to significant morbidity and mortality. This study proposes the μCNN framework for enhanced EEG data analysis to improve diagnosis and classification of multiple neurological disorders. Methods: The μCNN framework utilizes a unique 6-channel EEG spectrogram representation to extract key features from frequency and correlation components. The model uses convolutional layers, max-pooling, and batch normalization to classify disorders such as schizophrenia, Parkinson's, Alzheimer's, epilepsy, and stroke. Results: On a dataset of 15,600 EEG spectrograms, the μCNN achieved 98.42% accuracy, 98.4% sensitivity, and 99.61% specificity, outperforming ResNet50 and AlexNet in classification tasks. Conclusions: The μCNN framework accurately categorizes neurological disorders with superior diagnostic accuracy and system performance. Significance: This work advances EEG signal processing using deep learning, offering significant improvements in real-time diagnostic accuracy for a wide range of neurological disorders.}\n" +
  "}"
},
{
  authors: "Narendra Kumar, Arjun Mukherjee, Sukomal Pal and Thomas Mandl",
  year: "2025",
  category: "Conference",
  desc: "IITUH18 at Fairweb-2: Investigating the Effect of the Query Modification on Fairness",
  name: "Proceedings of NTCIR-18",
  link: "https://research.nii.ac.jp/ntcir/workshop/OnlineProceedings18/pdf/ntcir/04-NTCIR18-FAIRWEB-KumarN.pdf",
  bibtex: "@inproceedings{kumar2025iitu,\n" +
          "  author = {Narendra Kumar and Arjun Mukherjee and Sukomal Pal and Thomas Mandl},\n" +
          "  title = {IITUH18 at Fairweb-2: Investigating the Effect of the Query Modification on Fairness},\n" +
          "  booktitle = {Proceedings of NTCIR-18},\n" +
          "  year = {2025},\n" +
          "  publisher = {National Institute of Informatics},\n" +
          "  address = {Tokyo, Japan}\n" +
          "}"
},
  {
    authors: "Supriya Chanda and Sukomal Pal",
    year: "2025",
    category: "Book Chapters",
    desc: "Hate Content Identification in Code-mixed Social Media Data",
    name: "Text and Social Media Analytics for Fake News and Hate Speech Detection",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003409519-13/hate-content-identification-code-mixed-social-media-data-supriya-chanda-sukomal-pal",
    bibtex: "@incollection{incollection,\nauthor = {Supriya Chanda and \nSukomal Pal},\nyear = {2024},\nmonth = {07},\npages = {225-247},\ntitle = {Hate Content Identification in Code-mixed Social Media Data},\nbooktitle = {Text and Social Media Analytics for Fake News and Hate Speech Detection},\npublisher = {Taylor \\& Francis},\ndoi = {10.1201/9781003409519-13}\n}"
  },
  {
    authors: "Supriya Chanda, Anshika Mishra and Sukomal Pal",
    year: "2024",
    category: "Journal",
    desc: "Sentiment analysis of code-mixed Dravidian languages leveraging pretrained model and word-level language tag",
    name: "Natural Language Processing",
    link: "https://www.cambridge.org/core/journals/natural-language-processing/article/sentiment-analysis-of-code-mixed-dravidian-languages-leveraging-pretrained-model-and-word-level-language-tag/024F7BA5EE3F5F29CDB20EC9AD79CCE5",
    bibtex: "@article{chanda2024sentiment,\n" +
            "  author = {Supriya Chanda and Anshika Mishra and Sukomal Pal},\n" +
            "  title = {Sentiment analysis of code-mixed Dravidian languages leveraging pretrained model and word-level language tag},\n" +
            "  journal = {Natural Language Processing},\n" +
            "  year = {2024},\n" +
            "  volume = {31},\n" +
            "  number = {2},\n" +
            "  pages = {477–499},\n" +
            "  doi = {10.1017/nlp.2024.30},\n" +
            "  month = {Sep}\n" +
            "}"
  },
  {
    authors: "Siba Sankar Sahu and Sukomal Pal",
    year: "2025",
    category: "Journal",
    desc: "A case study on decompounding in Indian language IR",
    name: "Natural Language Processing",
    link: "https://www.cambridge.org/core/journals/natural-language-processing/article/a-case-study-on-decompounding-in-indian-language-ir/XXXX", // replace XXXX with actual article ID
    bibtex: "@article{sahu2025decompounding,\n" +
            "  author = {Siba Sankar Sahu and Sukomal Pal},\n" +
            "  title = {A case study on decompounding in Indian language IR},\n" +
            "  journal = {Natural Language Processing},\n" +
            "  year = {2025},\n" +
            "  volume = {31},\n" +
            "  number = {2},\n" +
            "  pages = {575--605},\n" +
            "  doi = {10.1017/nlp.2025.xx},\n" + // replace with correct DOI
            "  month = {Feb}\n" +
            "}"
  },
  {
    authors: "Sushil Kulkarni and Sukomal Pal",
    year: "2024",
    category: "Journal",
    desc: "A Review on Language-Independent Search on Speech and its Applications",
    name: "IEEE Access",
    link: "https://www.researchgate.net/publication/387241766_A_Review_on_Language-Independent_Search_on_Speech_and_its_Applications",
    bibtex: "@article{article,\nauthor = {Sushil Kulkarni and \nSukomal Pal},\nyear = {2024},\nmonth = {01},\npages = {1-1},\ntitle = {A Review on Language-Independent Search on Speech and its Applications},\nvolume = {PP},\njournal = {IEEE Access},\ndoi = {10.1109/ACCESS.2024.3520394}\n}"
  },
    {
    authors: "Debasis Jana, Suprakash Gupta, Deepak Kumar and Sukomal Pal",
    year: "2024",
    category: "Journal",
    desc: "Machine learning approach for studying the influencing factors affecting the operational reliability and remaining useful life",
    name: "International Journal of Quality & Reliability Management",
    link: "https://www.emerald.com/insight/content/doi/10.1108/ijqrm-11-2023-0345/full/html",
    bibtex: "@article{jana2024machine,\n" +
            "  author = {Debasis Jana and Suprakash Gupta and Deepak Kumar and Sukomal Pal},\n" +
            "  title = {Machine learning approach for studying the influencing factors affecting the operational reliability and remaining useful life},\n" +
            "  journal = {International Journal of Quality & Reliability Management},\n" +
            "  year = {2024},\n" +
            "  volume = {42},\n" +
            "  number = {2},\n" +
            "  pages = {734--751},\n" +
            "  doi = {10.1108/ijqrm-11-2023-0345}\n" +
            "}"
  },
  {
    name: "Websci Companion '24: Companion Publication of the 16th ACM Web Science Conference",
    desc: "Towards Safer Online Spaces: Deep Learning for Hate Speech Detection in Code-Mixed Social Media Conversations",
    category: "Conference",
    authors: "Supriya Chanda, Abhishek Dhaka and Sukomal Pal",
    year: "2024",
    link: "https://dl.acm.org/doi/pdf/10.1145/3630744.3663610",
    bibtex: "@inproceedings{DBLP:conf/websci/ChandaDP24,\nauthor       = {Supriya Chanda and                  \nAbhishek Dhaka and                  \nSukomal Pal},\ntitle        = {Towards Safer Online Spaces: Deep Learning for Hate Speech Detection in Code-Mixed Social Media Conversations},\nbooktitle    = {Companion Publication of the 16th {ACM} Web Science Conference, WebSci Companion 2024, Stuttgart, Germany, May 21-24, 2024},\npages        = {103--109},\npublisher    = {{ACM}},\nyear         = {2024},\nurl          = {https://doi.org/10.1145/3630744.3663610},\ndoi          = {10.1145/3630744.3663610},\ntimestamp    = {Tue, 18 Jun 2024 09:24:11 +0200},\nbiburl       = {https://dblp.org/rec/conf/websci/ChandaDP24.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
  },
  {
    name: "Multimedia Tools and Applications",
    desc: "Water chicken swarm optimization-based deep segmental neural network for spoken term detection using bayesian filtering  ",
    category: "Journal",
    authors: "Sushil Venkatesh Kulkarni, Sukomal Pal",
    year: "2024",
    link: "https://link.springer.com/article/10.1007/s11042-023-18047-1",
    bibtex: "@article{DBLP:journals/mta/KulkarniP24,\nauthor       = {Sushil Venkatesh Kulkarni and\n                Sukomal Pal},\ntitle        = {Water chicken swarm optimization-based deep segmental neural network for spoken term detection using bayesian filtering},\njournal      = {Multim. Tools Appl.},\nvolume       = {83},\nnumber       = {30},\npages        = {74711--74737},\nyear         = {2024},\nurl          = {https://doi.org/10.1007/s11042-023-18047-1},\ndoi          = {10.1007/S11042-023-18047-1},\ntimestamp    = {Tue, 10 Sep 2024 15:24:52 +0200},\nbiburl       = {https://dblp.org/rec/journals/mta/KulkarniP24.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
  },
  {
    name: "Multimedia Tools and Applications",
    desc: "Ensemble-based domain adaptation on social media posts for irony detection  ",
    category: "Journal",
    authors: "Anita Saroj, Sukomal Pal",
    year: "2024",
    link: "https://link.springer.com/article/10.1007/s11042-023-16180-5",
    bibtex: "@article{DBLP:journals/mta/SarojP24,\nauthor       = {Anita Saroj and\n                  Sukomal Pal},\ntitle        = {Ensemble-based domain adaptation on social media posts for irony detection},\njournal      = {Multim. Tools Appl.},\nvolume       = {83},\nnumber       = {8},\npages        = {23249--23268},\nyear         = {2024},\nurl          = {https://doi.org/10.1007/s11042-023-16180-5},\ndoi          = {10.1007/S11042-023-16180-5},\ntimestamp    = {Fri, 01 Mar 2024 15:53:55 +0100},\nbiburl       = {https://dblp.org/rec/journals/mta/SarojP24.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
  },
  {
    name: "ACM Transactions on Asian and Low-Resource Language Information Processing.",
    desc: "A Study on Corpus-based Stopword Lists in Indian Language IR",
    category: "Journal",
    authors: "Siba Sankar Sahu, Sukomal Pal",
    year: "2023",
    link: "https://dl.acm.org/doi/full/10.1145/3606262",
    bibtex: "@article{DBLP:journals/talip/SahuP23,\nauthor       = {Siba Sankar Sahu and\n                  Sukomal Pal},\ntitle        = {A Study on Corpus-based Stopword Lists in Indian Language {IR}},\njournal      = {{ACM} Trans. Asian Low Resour. Lang. Inf. Process.},\nvolume       = {22},\nnumber       = {7},\npages        = {202:1--202:22},\nyear         = {2023},\nurl          = {https://doi.org/10.1145/3606262},\ndoi          = {10.1145/3606262},\ntimestamp    = {Fri, 18 Aug 2023 08:46:35 +0200},\nbiburl       = {https://dblp.org/rec/journals/talip/SahuP23.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: " 2024",

  },
  {
  authors: "N Yadav, S Pal and AK Singh",
  year: "2024",
  category: "Journal",
  desc: "Diversified recommendation using implicit content node embedding in heterogeneous information network",
  name: "Multimedia Tools and Applications",
  link: "https://link.springer.com/article/10.1007/s11042-023-16135-w",
  bibtex: "@article{yadav2024diversified,\n" +
          "  author = {Naina Yadav and Sukomal Pal and Anil Kumar Singh},\n" +
          "  title = {Diversified recommendation using implicit content node embedding in heterogeneous information network},\n" +
          "  journal = {Multimedia Tools and Applications},\n" +
          "  year = {2024},\n" +
          "  volume = {83},\n" +
          "  number = {7},\n" +
          "  pages = {20605--20635},\n" +
          "  doi = {10.1007/s11042-023-16135-w}\n" +
          "}"
},
  {
    name: "TREC 2023 ",
    desc: "Facts Summarization at the TREC 2023: IIT(BHU) in CrisisFACTs Track",
    category: "Conference",
    authors: "Amit Yadav, Sukomal Pal",
    year: "2023",
    link: "https://trec.nist.gov/pubs/trec32/papers/IRLAB_IIT_BHU.F.pdf",
    bibtex: "",
    // code: "",
    shortform: " FSTCFT 2023",
  },
  {
     name: "A beginner level easy, short and fun-filled trip to learn Operating Systems - meant for UG CS students. With lot of MCQs for GATE and other competitive examinations and links for further in-depth study.",
     desc: "Operating Systems ",
     category: "Books",
     authors: "Dr. Sukomal Pal",
     year: "2023",
     link: "/os-book",
     bibtex: "",
     // code: "",
     shortform: "EG 2023",
        
  },
   {
  name: " Sentiment analysis of such interactions can help us analyze the general public psychology during the pandemic.",
  desc: "   Sentiment analysis on Hindi tweets during COVID-19 pandemic",
  category: "Journal",
  authors: "Anita Saroj, Akash Thakur, Sukomal Pal",
  year: "2023",
  link: " http://doi.org/10.1111/coin.12622",
  bibtex: "@article{DBLP:journals/ci/SarojTP24,\nauthor       = {Anita Saroj and\n                  Akash Thakur and\n                  Sukomal Pal},\ntitle        = {Sentiment analysis on Hindi tweets during {COVID-19} pandemic},\njournal      = {Comput. Intell.},\nvolume       = {40},\nnumber       = {1},\nyear         = {2024},\nurl          = {https://doi.org/10.1111/coin.12622},\ndoi          = {10.1111/COIN.12622},\ntimestamp    = {Mon, 18 Mar 2024 21:25:14 +0100},\nbiburl       = {https://dblp.org/rec/journals/ci/SarojTP24.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
  // code: "",
  shortform: "EG 2023",
     
},
{
  name: "Springer Nature Computer Science ",
  desc: " The effect of stopword removal on Information Retrieval for Code-Mixed data obtained via social media  ",
  category: "Journal",
  authors: "Supriya Chanda, Sukomal Pal",
  year: "2023",
  link: " https://link.springer.com/article/10.1007/s42979-023-01942-7",
  bibtex: "@article{DBLP:journals/sncs/ChandaP23,\nauthor       = {Supriya Chanda and\n                  Sukomal Pal},\ntitle        = {The Effect of Stopword Removal on Information Retrieval for Code-Mixed Data Obtained Via Social Media},\njournal      = {{SN} Comput. Sci.},\nvolume       = {4},\nnumber       = {5},\npages        = {494},\nyear         = {2023},\nurl          = {https://doi.org/10.1007/s42979-023-01942-7},\ndoi          = {10.1007/S42979-023-01942-7},\ntimestamp    = {Sun, 24 Sep 2023 15:45:25 +0200},\nbiburl       = {https://dblp.org/rec/journals/sncs/ChandaP23.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
  // code: "",
  shortform: "SNCS 2023",
     
},

{
  name: "Springer Nature Computer Science ",
  desc: " Effect of stopwords and stemming techniques in Urdu IR ",
  category: "Journal",
  authors: "Siba Sankar Sahu, Debrup Dutta, Sukomal Pal and Imran Rasheed",
  year: "2023",
  link: " https://link.springer.com/article/10.1007/s12046-021-01731-z",
  bibtex: "@article{DBLP:journals/sncs/SahuDPR23,\nauthor       = {Siba Sankar Sahu and\n                  Debrup Dutta and\n                  Sukomal Pal and\n                  Imran Rasheed},\ntitle        = {Effect of Stopwords and Stemming Techniques in Urdu {IR}},\njournal      = {{SN} Comput. Sci.},\nvolume       = {4},\nnumber       = {5},\npages        = {547},\nyear         = {2023},\nurl          = {https://doi.org/10.1007/s42979-023-01953-4},\ndoi          = {10.1007/S42979-023-01953-4},\ntimestamp    = {Sun, 24 Sep 2023 15:45:25 +0200},\nbiburl       = {https://dblp.org/rec/journals/sncs/SahuDPR23.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
  // code: "",
  shortform: "SNCS 2023",
     
},
  {
    name: "Computer Speech & Language 2023",
    desc: "Building a text retrieval system for the Sanskrit language: Exploring indexing, stemming, and searching issues",
    category: "Journal",
    authors: "Siba Sankar Sahu, Sukomal Pal",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S0885230823000372?casa_token=KVwHxQqYom4AAAAA:sWwIkxA_1FURxhTeh9PTNIMaiCs3cLM2wJFKfR8EFhpcg9iz7-6uTdWHEX6uRArYOdYnwiiPZZhW",
    bibtex: "@article{DBLP:journals/csl/SahuP23,\nauthor       = {Siba Sankar Sahu and\n                  Sukomal Pal},\ntitle        = {Building a text retrieval system for the Sanskrit language: Exploringindexing, stemming, and searching issues},\njournal      = {Comput. Speech Lang.},\nvolume       = {81},\npages        = {101518},\nyear         = {2023},\nurl          = {https://doi.org/10.1016/j.csl.2023.101518},\ndoi          = {10.1016/J.CSL.2023.101518},\ntimestamp    = {Fri, 07 Jul 2023 23:31:55 +0200},\nbiburl       = {https://dblp.org/rec/journals/csl/SahuP23.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "CSL 2023",

  },
  {
    name: "Electronic Government 2023",
    desc: "E-Governance through social media: An Analysis on the use of Facebook and Twitter by Indian Government ",
    category: "Journal",
    authors: "Anita Saroj, Sukomal Pal",
    year: "2023",
    link: "https://www.inderscienceonline.com/doi/abs/10.1504/EG.2023.130585?journalCode=eg",
    bibtex: "@article{DBLP:journals/eg/SarojP23,\nauthor = {Anita Saroj and Sukomal Pal},\ntitle = {E-governance through social media: an analysis on the use of Facebook and Twitter by Indian Government},\njournal      = {Electron. Gov. an Int. J.},\nvolume       = {19},\nnumber       = {3},\npages        = {304--331},\nyear         = {2023},\nurl          = {https://doi.org/10.1504/EG.2023.10042460},\ndoi          = {10.1504/EG.2023.10042460},\ntimestamp    = {Fri, 19 May 2023 11:20:38 +0200},\nbiburl       = {https://dblp.org/rec/journals/eg/SarojP23.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "EG 2023",
    
  },
  {
    name: "Forum for Information Retrieval Evaluation (Working Notes)(FIRE)",
    desc: "Coarse and Fine-Grained Conversational Hate Speech and Offensive Content Identification in Code-Mixed Languages using Fine-Tuned Multilingual Embedding",
    category: "Workshop",
    authors: "Supriya Chanda, Sacchit Sheth, Sukomal Pal ",
    year: "2022",
    link: "https://ceur-ws.org/Vol-3395/T7-3.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/ChandaSP22,\nauthor       = {Supriya Chanda and Sacchit D. Sheth and Sukomal Pal},\neditor       = {Kripabandhu Ghosh and Thomas Mandl and Prasenjit Majumder and Mandar Mitra},\ntitle        = {Coarse and Fine-Grained Conversational Hate Speech and Offensive Content Identification in Code-Mixed Languages using Fine-Tuned Multilingual Embedding},\nbooktitle    = {Working Notes of {FIRE} 2022 - Forum for Information Retrieval Evaluation,Kolkata, India, December 9-13, 2022},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {3395},\npages        = {502--512},\npublisher    = {CEUR-WS.org},\nyear         = {2022},\nurl          = {https://ceur-ws.org/Vol-3395/T7-3.pdf},\ntimestamp    = {Thu, 20 Jul 2023 16:45:52 +0200},\nbiburl       = {https://dblp.org/rec/conf/fire/ChandaSP22.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",

  },
  {
    name: "Working Notes of FIRE 2022-Forum for Information Retrieval Evaluation (Hybrid)",
    desc: "Sentiment Analysis and Homophobia detection of Code-Mixed Dravidian Languages leveraging pre-trained model and word-level language tag",
    category: "Workshop",
    authors: "Supriya Chanda, Anshika Mishra, Sukomal Pal  ",
    year: "2022",
    link: "https://ceur-ws.org/Vol-3395/T2-12.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/ChandaMP22,\nauthor       = {Supriya Chanda and Anshika Mishra and Sukomal Pal},\neditor       = {Kripabandhu Ghosh and Thomas Mandl and Prasenjit Majumder and Mandar Mitra},\ntitle        = {Sentiment Analysis and Homophobia detection of Code-Mixed Dravidian Languages leveraging pre-trained model and word-level language tag},\nbooktitle    = {Working Notes of {FIRE} 2022 - Forum for Information Retrieval Evaluation, Kolkata, India, December 9-13, 2022},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {3395},\npages        = {184--195},\npublisher    = {CEUR-WS.org},\nyear         = {2022},\nurl          = {https://ceur-ws.org/Vol-3395/T2-12.pdf},\ntimestamp    = {Thu, 20 Jul 2023 16:45:52 +0200},\nbiburl       = {https://dblp.org/rec/conf/fire/ChandaMP22.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",

  },
  {
    name: "Applied Soft Computing 2022",
    desc: "An approach for extractive text summarization using fuzzy evolutionary and clustering algorithms",
    category: "Journal",
    authors: "Pradeepika Verma, Anshul Verma, Sukomal Pal",
    year: "2022",
    link: "https://www.sciencedirect.com/science/article/pii/S1568494622001454",
    bibtex: "@article{DBLP:journals/asc/VermaVP22,\n author       = {Pradeepika Verma and Anshul Verma and Sukomal Pal},\n title        = {An approach for extractive text summarization using fuzzy evolutionary and clustering algorithms},\n journal      = {Appl. Soft Comput.},\n volume       = {120},\n pages        = {108670},\n year         = {2022},\n url          = {https://doi.org/10.1016/j.asoc.2022.108670},\n doi          = {10.1016/j.asoc.2022.108670},\n timestamp    = {Wed, 18 May 2022 10:20:18 +0200},\n biburl       = {https://dblp.org/rec/journals/asc/VermaVP22.bib},\n bibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "ASC 2022",
  },
  {
    name: "Expert Systems 2022",
    desc: "A fusion of variants of sentence scoring methods and collaborative word rankings for document summarization",
    category: "Journal",
    authors: "Pradeepika Verma, Anshul Verma, Sukomal Pal",
    year: "2022",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/exsy.12960",
    bibtex: "@article{DBLP:journals/es/VermaVP22,\n author = {Pradeepika Verma and Anshul Verma and Sukomal Pal},\n title  = {A fusion of variants of sentence scoring methods and collaborative word rankings for document summarization},\n journal = {Expert Syst. J. Knowl. Eng.},\n volume = {39},\n number = {6},\n year = {2022},\n url = {https://doi.org/10.1111/exsy.12960},\n doi = {10.1111/exsy.12960},\n timestamp = {Mon, 25 Jul 2022 08:40:04 +0200},\n biburl  = {https://dblp.org/rec/journals/es/VermaVP22.bib},\n bibsource = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "ES 2022",
  },
  {
    name: "Sādhanā 2022",
    desc: "Effect of stopwords in Indian language IR",
    category: "Journal",
    authors: "Siba Sankar Sahu and Sukomal Pal",
    year: "2022",
    link: "https://link.springer.com/article/10.1007/s12046-021-01731-z",
    bibtex: "@article{Sahu2022,\nauthor={Sahu, Siba Sankar and Pal, Sukomal},\ntitle={Effect of stopwords in Indian language IR},\njournal={S{\={a}}dhan{\={a}}},\nyear={2022},\nmonth={Jan},\nday={10},\nvolume={47},\nnumber={1},\npages={17},\nabstract={We explore and evaluate the effect of stopwords in retrieval performance of different Indian languages such as Marathi, Bengali, Gujarati and Sanskrit. The issue was investigated from three viewpoints. Is there any impact of non-corpus-based stopword removal on chosen Indian languages (if yes, to what extent)? Can we recommend, based on experiment, a number of stopwords for chosen Indian languages that are good enough from retrieval point of view? Is there any relationship of stopwords with average document length from retrieval perspective? It is observed that the stopword removal generally improves mean average precision (MAP) significantly compared with the case when it is not done. For each language, different lengths of the stopword list are explored and evaluated that lead to suggesting its optimal length. We also study the effect of stopwords on retrieval performance over document length. The effect of stopwords is generally found to be quite low in short documents compared with their long counterparts across the four Indian languages.},\nissn={0973-7677},\ndoi={10.1007/s12046-021-01731-z},\nurl={https://doi.org/10.1007/s12046-021-01731-z}\n}",
    // code: "",
    shortform: "Sādhanā 2022",
  },
  {
    name: "SN Computer Science 2022",
    desc: "A Multi-stage Classification Framework for Disaster-Specific Tweets",
    category: "Journal",
    authors: "Harshit Mehrotra, Akanksha Mishra and Sukomal Pal",
    year: "2022",
    link: "https://link.springer.com/article/10.1007/s42979-021-00930-z",
    bibtex: "@article{DBLP:journals/sncs/MehrotraMP22,\nauthor       = {Harshit Mehrotra and Akanksha Mishra and Sukomal Pal},\ntitle        = {A Multi-stage Classification Framework for Disaster-Specific Tweets},\njournal      = {{SN} Comput. Sci.},\nvolume       = {3},\nnumber       = {1},\npages        = {24},\nyear         = {2022},\nurl          = {https://doi.org/10.1007/s42979-021-00930-z},\ndoi          = {10.1007/s42979-021-00930-z},\ntimestamp    = {Sun, 02 Oct 2022 15:49:15 +0200},\nbiburl       = {https://dblp.org/rec/journals/sncs/MehrotraMP22.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "SNCS 2022",
  },
  {
  authors: "A Kanapala, S Pal, S Dara and S Jannu",
  year: "2022",
  category: "Journal",
  desc: "Applying an Information Retrieval Approach to Retrieve Relevant Articles in the Legal Domain",
  name: "Annals of Data Science",
  link: "https://doi.org/10.1007/s40745-022-00442-4",
  bibtex: "@article{kanapala2022ir_legal_domain,\n" +
          "  author = {Ambedkar Kanapala and Sukomal Pal and Suresh Dara and Srikanth Jannu},\n" +
          "  title = {Applying an Information Retrieval Approach to Retrieve Relevant Articles in the Legal Domain},\n" +
          "  journal = {Annals of Data Science},\n" +
          "  year = {2022},\n" +
          "  volume = {11},\n" +
          "  number = {5},\n" +
          "  pages = {1563--1580},\n" +
          "  doi = {10.1007/s40745-022-00442-4},\n" +
          "  month = {Oct}\n" +
          "}"
},
{
  authors: "N Yadav, S Pal, AK Singh and K Singh",
  year: "2022",
  category: "Journal",
  desc: "Clus-DR: Cluster-based pretrained model for diverse recommendation generation",
  name: "Journal of King Saud University – Computer and Information Sciences",
  link: "https://doi.org/10.1016/j.jksuci.2022.02.010",
  bibtex: "@article{yadav2022clusdr,\n" +
          "  author = {Naina Yadav and Sukomal Pal and Anil Kumar Singh and Kartikey Singh},\n" +
          "  title = {Clus-DR: Cluster-based pretrained model for diverse recommendation generation},\n" +
          "  journal = {Journal of King Saud University – Computer and Information Sciences},\n" +
          "  year = {2022},\n" +
          "  volume = {34},\n" +
          "  number = {8},\n" +
          "  pages = {6385--6399},\n" +
          "  doi = {10.1016/j.jksuci.2022.02.010}\n" +
          "}"
},
{
  authors: "N Yadav, A Kumar Singh and S Pal",
  year: "2022",
  category: "Journal",
  desc: "Improved self-attentive Musical Instrument Digital Interface content-based music recommendation system",
  name: "Computational Intelligence",
  link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/coin.12501",
  bibtex: "@article{yadav2022musical_midi_recommendation,\n" +
          "  author = {Naina Yadav and Anil Kumar Singh and Sukomal Pal},\n" +
          "  title = {Improved self-attentive Musical Instrument Digital Interface content-based music recommendation system},\n" +
          "  journal = {Computational Intelligence},\n" +
          "  year = {2022},\n" +
          "  volume = {38},\n" +
          "  number = {4},\n" +
          "  pages = {—},\n" +
          "  doi = {10.1111/coin.12501}\n" +
          "}"
},
  {
    name: "Forum for Information Retrieval Evaluation (Working Notes)(FIRE), CEUR-WS. org",
    desc: "Is Meta Embedding better than pre-trained word embedding to perform Sentiment Analysis for Dravidian Languages in Code-Mixed Text?",
    category: "Workshop",
    authors: "Supriya Chanda, Rajat Pratap Singh, Sukomal Pal  ",
    year: "2021",
    link: "https://ceur-ws.org/Vol-3159/T6-20.pdf",
    bibtex: "",

  },
  {
    name: "Forum for Information Retrieval Evaluation (Working Notes)(FIRE), CEUR-WS. org",
    desc: "Fine-tuning Pre-Trained Transformer based model for Hate Speech and Offensive Content Identification in English, Indo-Aryan and Code-Mixed (English-Hindi) languages",
    category: "Workshop",
    authors: "Supriya Chanda, S Ujjwal, Shayak Das, Sukomal Pal",
    year: "2021",
    link: "https://ceur-ws.org/Vol-3159/T1-44.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/ChandaUDP21,\nauthor       = {Supriya Chanda and S. Ujjwal and Shayak Das and Sukomal Pal},\neditor       = {Parth Mehta and Thomas Mandl and Prasenjit Majumder and Mandar Mitra},\ntitle        = {Fine-tuning Pre-Trained Transformer based model for Hate Speech and Offensive Content Identification in English Indo-Aryan and Code-Mixed (English-Hindi) languages},\nbooktitle    = {Working Notes of {FIRE} 2021 - Forum for Information Retrieval Evaluation,Gandhinagar, India, December 13-17, 2021},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {3159},\npages        = {446--458},\npublisher    = {CEUR-WS.org},\nyear         = {2021},\nurl          = {https://ceur-ws.org/Vol-3159/T1-44.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:30 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/ChandaUDP21.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",

  },
  {
    name: "Information Sciences 2021",
    desc: "CLAVER: An integrated framework of Convolutional layer, bidirectional LSTM with Attention mechanism based scholarly VEnue Recommendation",
    category: "Journal",
    authors: "Tribikram Pradhan, Prashant Kumar and Sukomal Pal",
    year: "2021",
    link: "https://www.sciencedirect.com/science/article/pii/S0020025520311890",
    bibtex: "@article{DBLP:journals/isci/PradhanKP21,\nauthor       = {Tribikram Pradhan and Prashant Kumar and Sukomal Pal},\ntitle        = {{CLAVER:} An integrated framework of convolutional layer, bidirectional{LSTM} with attention mechanism based scholarly venue recommendation},\njournal      = {Inf. Sci.},\nvolume       = {559},\npages        = {212--235},\nyear         = {2021},\nurl          = {https://doi.org/10.1016/j.ins.2020.12.024},\ndoi          = {10.1016/j.ins.2020.12.024},\ntimestamp    = {Thu, 14 Oct 2021 09:08:23 +0200},\nbiburl       = {https://dblp.org/rec/journals/isci/PradhanKP21.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "IS 2021",
  },
  {
    name: "Transactions on Asian and Low-Resource Language Information Processing",
    desc: "Query Expansion for Tansliterated Text Retrieval",
    category: "Journal",
    authors: "Dinesh Kumar Prabhakar, Sukomal Pal and Chiranjeev Kumar",
    year: "2021",
    link: "https://dl.acm.org/doi/abs/10.1145/3447649",
    bibtex: "@article{DBLP:journals/talip/PrabhakarPK21,\nauthor       = {Dinesh Kumar Prabhakar and Sukomal Pal and Chiranjeev Kumar},\ntitle        = {Query Expansion for Transliterated Text Retrieval},\njournal      = {{ACM} Trans. Asian Low Resour. Lang. Inf. Process.},\nvolume       = {20},\nnumber       = {4},\npages        = {64:1--64:34},\nyear         = {2021},\nurl          = {https://doi.org/10.1145/3447649},\ndoi          = {10.1145/3447649},\ntimestamp    = {Wed, 15 Dec 2021 10:32:28 +0100},\nbiburl       = {https://dblp.org/rec/journals/talip/PrabhakarPK21.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "TALLIP 2021",
  },
  {
    name: "Expert Systems with Applications 2020",
    desc: "A proactive decision support system for reviewer recommendation in academia",
    category: "Journal",
    authors: "Tribikram Pradhan, Suchit Sahoo, Utkarsh Singh and Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0957417420310216",
    bibtex: "@article{DBLP:journals/eswa/PradhanSSP21,\nauthor       = {Tribikram Pradhan and Suchit Sahoo and Utkarsh Singh and Sukomal Pal},\ntitle        = {A proactive decision support system for reviewer recommendation in academia},\njournal      = {Expert Syst. Appl.},\nvolume       = {169},\npages        = {114331},\nyear         = {2021},\nurl          = {https://doi.org/10.1016/j.eswa.2020.114331},\ndoi          = {10.1016/j.eswa.2020.114331},\ntimestamp    = {Thu, 14 Oct 2021 08:46:31 +0200},\nbiburl       = {https://dblp.org/rec/journals/eswa/PradhanSSP21.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "ESA 2020",
  },
    {
      name: "FIRE (Working Notes)",
      desc: "IRLab@ IITBHU@ Dravidian-CodeMix-FIRE2020: Sentiment Analysis for Dravidian Languages in Code-Mixed Text.",
      category: "Workshop",
      authors: "Supriya Chanda, Sacchit Sheth, Sukomal Pal ",
      year: "2020",
      link: "https://www.researchgate.net/profile/Supriya-Chanda/publication/350312817_IRLabIITBHUDravidian-CodeMix-FIRE2020_Sentiment_Analysis_for_Dravidian_Languages_in_Code-Mixed_Text/links/6059899d299bf1736760a88e/IRLabIITBHUDravidian-CodeMix-FIRE2020-Sentiment-Analysis-for-Dravidian-Languages-in-Code-Mixed-Text.pdf",
      bibtex: "",
  
    },
  {
    name: "Proceedings of the Fourteenth Workshop on Semantic Evaluation(SemEval) 2020",
    desc: "IRlab@IITV at SemEval-2020 Task 12: Multilingual Offensive Language Identification in Social Media Using SVM",
    category: "Workshop",
    authors: "Anita Saroj, Supriya Chanda and Sukomal Pal",
    year: "2020",
    link: "https://aclanthology.org/2020.semeval-1.265/",
    bibtex: `@inproceedings{saroj-etal-2020-irlab,\ntitle = "{IR}lab@{IITV} at {S}em{E}val-2020 Task 12: Multilingual Offensive Language Identification in Social Media Using {SVM}",\nauthor = "Saroj, Anita  and Chanda, Supriya  and Pal, Sukomal",\nbooktitle = "Proceedings of the Fourteenth Workshop on Semantic Evaluation",\nmonth = dec,\nyear = "2020",\naddress = "Barcelona (online)",\npublisher = "International Committee for Computational Linguistics",\nurl = "https://aclanthology.org/2020.semeval-1.265",\ndoi = "10.18653/v1/2020.semeval-1.265",\npages = "2012--2016",\nabstract = "This paper describes the IRlab@IIT-BHU system for the OffensEval 2020. We take the SVM with TF-IDF features to identify and categorize hate speech and offensive language in social media for two languages. In subtask A, we used a linear SVM classifier to detect abusive content in tweets, achieving a macro $F_1$ score of 0.779 and 0.718 for Arabic and Greek, respectively.",\n}`,
    // code: "",
    shortform: "SemEval 2020",
  },
  {
    name: "Neurocomputing 2020",
    desc: "A Deep Neural Architecture based Meta-review Generation and Final Decision Proseiction of a Scholarly Article",
    category: "Journal",
    authors: "Tribikram Pradhan, Chaitanya Bhatia, Prashant Kumar and Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0925231220317318",
    bibtex: "@article{PRADHAN2021218,\ntitle = {A deep neural architecture based meta-review generation and final decision prediction of a scholarly article},\njournal = {Neurocomputing},\nvolume = {428},\npages = {218-238},\nyear = {2021},\nissn = {0925-2312},\ndoi = {https://doi.org/10.1016/j.neucom.2020.11.004},\nurl = {https://www.sciencedirect.com/science/article/pii/S0925231220317318},\nauthor = {Tribikram Pradhan and Chaitanya Bhatia and Prashant Kumar and Sukomal Pal},\nkeywords = {Deep learning, Multi-document summarization, Coherence analysis, Coreference resolution, Classification, Random walk with restart (RWR)},\nabstract = {Peer reviews form an essential part of scientific communications. Research papers and proposals are reviewed by several peers before they are finally accepted or rejected for publication and funding, respectively. With the steady increase in the number of research domains, scholarly venues (journal and/or conference), researchers, and papers, managing the peer review process is becoming a daunting task. Application of recommender systems to assist peer reviewing is, therefore, being explored and becoming an emerging research area. In this paper, we present a deep learning network based Meta-Review Generation considering peer review prediction of the scholarly article (MRGen). MRGen is able to provide solutions for: (i) Peer review prediction (Task 1) and (ii) Meta-review generation (Task 2). First, the system takes the peer reviews as input and produces a draft meta-review. Then it employs an integrated framework of convolution layer, long short-term memory (LSTM) model, Bi-LSTM model, and attention mechanism to predict the final decision (accept/reject) of the scholarly article. Based on the final decision, the proposed model MRGen incorporates Pointer Generator Network-based abstractive summarization to generate the final meta-review. The focus of our approach is to give a concise meta-review that maximizes information coverage, coherence, readability and also reduces redundancy. Extensive experiments conducted on the PeerRead dataset demonstrate good consistency between the recommended decisions and original decisions. We also compare the performance of MRGen with some of the existing state-of-the-art multi-document summarization methods. The system also outperforms a few existing models based on accuracy, Rouge scores, readability, non-redundancy, and cohesion.}\n}",
    // code: "",
    shortform: "Neuro 2020",
  },
  {
    name: "Knowledge-Based Systems 2020",
    desc: " HASVRec: A modularized Hierarchical Attention-based Scholarly Venue Recommender system",
    category: "Journal",
    authors: "Tribikram Pradhan, Abhinav Gupta and Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0950705120304135",
    bibtex: "@article{DBLP:journals/kbs/PradhanGP20,\nauthor       = {Tribikram Pradhan and Abhinav Gupta and Sukomal Pal},\ntitle        = {HASVRec: {A} modularized Hierarchical Attention-based Scholarly Venue Recommender system},\njournal      = {Knowl. Based Syst.},\nvolume       = {204},\npages        = {106181},\nyear         = {2020},\nurl          = {https://doi.org/10.1016/j.knosys.2020.106181},\ndoi          = {10.1016/j.knosys.2020.106181},\ntimestamp    = {Thu, 14 Oct 2021 09:10:43 +0200},\nbiburl       = {https://dblp.org/rec/journals/kbs/PradhanGP20.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "KBS 2020",
  },
  {
    name: "Proceedings of the Sixth Workshop on Noisy User-generated Text (W-NUT 2020)",
    desc: "IRLab@ IITBHU at WNUT-2020 Task 2: Identification of informative COVID-19 English Tweets using BERT",
    category: "Workshop",
    authors: "Supriya Chanda, Eshita Nandy and Sukomal Pal",
    year: "2020",
    link: "https://aclanthology.org/2020.wnut-1.56/",
    bibtex: `@inproceedings{chanda-etal-2020-irlab,\ntitle = "{IRL}ab@{IITBHU} at {WNUT}-2020 Task 2: Identification of informative {COVID}-19 {E}nglish Tweets using {BERT}",\nauthor = "Chanda, Supriya  and Nandy, Eshita  and Pal, Sukomal",\nbooktitle = "Proceedings of the Sixth Workshop on Noisy User-generated Text (W-NUT 2020)",\nmonth = nov,\nyear = "2020",\naddress = "Online",\npublisher = "Association for Computational Linguistics",\nurl = "https://aclanthology.org/2020.wnut-1.56",\ndoi = "10.18653/v1/2020.wnut-1.56",\npages = "399--403",\nabstract = "This paper reports our submission to the shared Task 2: Identification of informative COVID-19 English tweets at W-NUT 2020. We attempted a few techniques, and we briefly explain here two models that showed promising results in tweet classification tasks: DistilBERT and FastText. DistilBERT achieves a F1 score of 0.7508 on the test set, which is the best of our submissions.",\n}`,
    // code: "",
    shortform: "W-NUT 2020",
  },

  {
    name: "SIGIR 2020 ",
    desc: "MetaGen: An academic meta-review generation system",
    category: "Conference",
    authors: "Chaitanya Bhatia, Tribikram Pradhan and Sukomal Pal",
    year: "2020",
    link: "https://dl.acm.org/doi/abs/10.1145/3397271.3401190",
    bibtex: "@inproceedings{DBLP:conf/sigir/BhatiaPP20,\nauthor       = {Chaitanya Bhatia and Tribikram Pradhan and Sukomal Pal},\neditor       = {Jimmy X. Huang and Yi Chang and Xueqi Cheng and Jaap Kamps and Vanessa Murdock and Ji{-}Rong Wen and Yiqun Liu},\ntitle        = {MetaGen: An academic Meta-review Generation system},\nbooktitle    = {Proceedings of the 43rd International {ACM} {SIGIR} conference on research and development in Information Retrieval, {SIGIR} 2020, Virtual Event, China, July 25-30, 2020},\npages        = {1653--1656},\npublisher    = {{ACM}},\nyear         = {2020},\nurl          = {https://doi.org/10.1145/3397271.3401190},\ndoi          = {10.1145/3397271.3401190},\ntimestamp    = {Sun, 02 Oct 2022 16:15:14 +0200},\nbiburl       = {https://dblp.org/rec/conf/sigir/BhatiaPP20.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "SIGIR 2020",
  },
  {
    name: "An Indian Language Social Media Collection for Hate and Offensive Speech",
    desc: "pages: 2-8, Proceedings of the Workshop on Resources and Techniques for User and Author Profiling in Abusive Language",
    category: "Conference",
    authors: "Anita Saroj, Sukomal Pal",
    year: "2020",
    // link: "",
    // bibtex: "",
    // code: "",
    shortform: "LREC 2020",
  },
  {
    name: "International Journal of Disaster Risk roseuction 2020",
    desc: "Use of social media in crisis management: A survey",
    category: "Journal",
    authors: "Anita Saroj, Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S221242091931684X",
    bibtex: "@article{SAROJ2020101584,\ntitle = {Use of social media in crisis management: A survey},\njournal = {International Journal of Disaster Risk Reduction},\nvolume = {48},\npages = {101584},\nyear = {2020},\nissn = {2212-4209},\ndoi = {https://doi.org/10.1016/j.ijdrr.2020.101584},\nurl = {https://www.sciencedirect.com/science/article/pii/S221242091931684X},\nauthor = {Anita Saroj and Sukomal Pal},\nkeywords = {Social media, Government, Microblog, Disaster, Emergency situations, Twitter, Facebook},\nabstract = {Emergency situations arising out of natural disasters like tsunami, earthquakes, floods, hurricanes or man-made ones like terror strikes, riots, accidents, etc. cause tremendous social and economic loss and badly affect the poor in low-income economies, in particular. In this paper, we attempt to see and analyze the relationship between emergencies and online social media, especially Twitter, Facebook, and Youtube. Specifically, we look at three important issues. First, we try to see the effect of occurrence of emergencies on social media. Second, when there is a sudden surge of posts in social media due to the occurrence, how that deluge of data can be effectively extracted and processed to create situational awareness and minimize the damage due to the disaster. Third, how different social media posts can help different government and other agencies to get prepared and to take necessary steps to manage emergencies in order to minimize the loss. In this survey, the papers centered around emergencies and its effect on social media and different organizations related to crisis management are considered that are published in the past decade.}\n}",
    // code: "",
    shortform: "IJDRR 2020",
  },
  {
    name: "Knowldege-Based Systems 2020",
    desc: "A multi-level fusion based decision support system for academic collaborator recommendation",
    category: "Journal",
    authors: "Tribikram Pradhan, Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0950705120301817",
    bibtex: "@article{DBLP:journals/kbs/PradhanP20a,\nauthor       = {Tribikram Pradhan and  Sukomal Pal},\ntitle        = {A multi-level fusion based decision support system for academic collaborator  recommendation},\njournal      = {Knowl. Based Syst.},\nvolume       = {197},\npages        = {105784},\nyear         = {2020},\nurl          = {https://doi.org/10.1016/j.knosys.2020.105784},\ndoi          = {10.1016/j.knosys.2020.105784},\ntimestamp    = {Thu, 14 Oct 2021 09:10:41 +0200},\nbiburl       = {https://dblp.org/rec/journals/kbs/PradhanP20a.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "KBS 2020",
  },
  {
    name: "Knowledge-Based Systems 2020",
    desc: "CNAVER: A Content and Network-based Academic VEnue Recommender system",
    category: "Journal",
    authors: "Tribikram Pradhan, Sukomal Pal",
    year: "2020",
    link: "https://www.sciencedirect.com/science/article/pii/S0950705119304691",
    bibtex: "@article{DBLP:journals/kbs/PradhanP20,\nauthor       = {Tribikram Pradhan and Sukomal Pal},\ntitle        = {{CNAVER:} {A} Content and Network-based Academic VEnue Recommender system},\njournal      = {Knowl. Based Syst.},\nvolume       = {189},\nyear         = {2020},\nurl          = {https://doi.org/10.1016/j.knosys.2019.105092},\ndoi          = {10.1016/j.knosys.2019.105092},\ntimestamp    = {Thu, 14 Oct 2021 09:10:45 +0200},\nbiburl       = {https://dblp.org/rec/journals/kbs/PradhanP20.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "KBS 2020",
  },
  {
    name: "Future Generation Computer Systems 2019",
    desc: "A hybrid personalized scholarly venue recommender system integrating social network analysis and contextual similarity",
    category: "Journal",
    authors: "Tribikram Pradhan, Sukomal Pal",
    year: "2019",
    link: "https://www.sciencedirect.com/science/article/pii/S0167739X19307101",
    bibtex: "@article{DBLP:journals/fgcs/PradhanP20,\nauthor       = {Tribikram Pradhan and Sukomal Pal},\ntitle        = {A hybrid personalized scholarly venue recommender system integrating social network analysis and contextual similarity},\njournal      = {Future Gener. Comput. Syst.},\nvolume       = {110},\npages        = {1139--1166},\nyear         = {2020},\nurl          = {https://doi.org/10.1016/j.future.2019.11.017},\ndoi          = {10.1016/j.future.2019.11.017},\ntimestamp    = {Thu, 14 Oct 2021 08:49:37 +0200},\nbiburl       = {https://dblp.org/rec/journals/fgcs/PradhanP20.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FGCS 2019",
  },
  {
    name: "ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP) 2019",
    desc: "A comparative analysis on hindi and english extractive text summarization",
    category: "Journal",
    authors: "Pradeepika Verma, Sukomal Pal, Hari Om",
    year: "2019",
    link: "https://dl.acm.org/doi/abs/10.1145/3308754",
    bibtex: "@article{DBLP:journals/air/KanapalaPP19,\nauthor       = {Ambedkar Kanapala and\n                Sukomal Pal and\n                Rajendra Pamula},\ntitle        = {Text summarization from legal documents: a survey},\njournal      = {Artif. Intell. Rev.},\nvolume       = {51},\nnumber       = {3},\npages        = {371--402},\nyear         = {2019},\nurl          = {https://doi.org/10.1007/s10462-017-9566-2},\ndoi          = {10.1007/s10462-017-9566-2},\ntimestamp    = {Sun, 02 Oct 2022 15:27:02 +0200},\nbiburl       = {https://dblp.org/rec/journals/air/KanapalaPP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "TALLIP 2019",
  },
  {
    name: "Artificial Intelligence Review 2019",
    desc: "Text summarization from legal documents: a survey",
    category: "Journal",
    authors: "Ambedkar Kanapala, Sukomal Pal, Rajendra Pamula",
    year: "2019",
    link: "https://link.springer.com/article/10.1007/s10462-017-9566-2",
    bibtex: "@article{DBLP:journals/air/KanapalaPP19,\nauthor       = {Ambedkar Kanapala and\n                Sukomal Pal and\n                Rajendra Pamula},\ntitle        = {Text summarization from legal documents: a survey},\njournal      = {Artif. Intell. Rev.},\nvolume       = {51},\nnumber       = {3},\npages        = {371--402},\nyear         = {2019},\nurl          = {https://doi.org/10.1007/s10462-017-9566-2},\ndoi          = {10.1007/s10462-017-9566-2},\ntimestamp    = {Sun, 02 Oct 2022 15:27:02 +0200},\nbiburl       = {https://dblp.org/rec/journals/air/KanapalaPP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "AIR 2019",
  },
  {
    name: "TREC 2019",
    desc: "IIT BHU at TREC 2019 Incident Streams Track",
    category: "Workshop",
    authors: "Akanksha Mishra, Sukomal Pal",
    year: "2019",
    link: "https://trec.nist.gov/pubs/trec28/papers/IIT_BHU.IS.pdf",
    bibtex: "@inproceedings{DBLP:conf/trec/MishraP19,\nauthor       = {Akanksha Mishra and\n                Sukomal Pal},\neditor       = {Ellen M. Voorhees and\n                Angela Ellis},\ntitle        = {{IIT} {BHU} at {TREC} 2019 Incident Streams Track},\nbooktitle    = {Proceedings of the Twenty-Eighth Text REtrieval Conference, {TREC}\n                2019, Gaithersburg, Maryland, USA, November 13-15, 2019},\nseries       = {{NIST} Special Publication},\nvolume       = {1250},\npublisher    = {National Institute of Standards and Technology {(NIST)}},\nyear         = {2019},\nurl          = {https://trec.nist.gov/pubs/trec28/papers/IIT\_BHU.IS.pdf},\ntimestamp    = {Wed, 03 Feb 2021 08:31:25 +0100},\nbiburl       = {https://dblp.org/rec/conf/trec/MishraP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "TREC 2019",
  },
  {
    name: "FIRE (Working Notes) 2019",
    desc: "IIT Varanasi at HASOC 2019: Hate Speech and Offensive Content Identification in Indo-European Languages",
    category: "Workshop",
    authors: "Akanksha Mishra, Sukomal Pal",
    year: "2019",
    link: "https://ceur-ws.org/Vol-2517/T3-22.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/MishraP19,\nauthor       = {Akanksha Mishra and Sukomal Pal},\neditor       = {Parth Mehta and Paolo Rosso and Prasenjit Majumder and Mandar Mitra},\ntitle        = {{IIT} Varanasi at {HASOC} 2019: Hate Speech and Offensive Content\n                Identification in Indo-European Languages},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {344--351},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T3-22.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:30 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MishraP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FIRE 2019",
  },
  {
    name: "FIRE (Working Notes) 2019",
    desc: "IIT-BHU at CIQ 2019: Classification of Insincere Questions",
    category: "Workshop",
    authors: "Akanksha Mishra, Sukomal Pal",
    year: "2019",
    link: "https://ceur-ws.org/Vol-2517/T5-4.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/MishraP19a,\nauthor       = {Akanksha Mishra and Sukomal Pal},\neditor       = {Parth Mehta and Paolo Rosso and Prasenjit Majumder and Mandar Mitra},\ntitle        = {{IIT-BHU} at {CIQ} 2019: Classification of Insincere Questions},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {468--472},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T5-4.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:30 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MishraP19a.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FIRE 2019",
  },
  {
    name: "FIRE (Working Notes) 2019",
    desc: "IRLab@ IITBHU at HASOC 2019: Traditional Machine Learning for Hate Speech and Offensive Content Identification",
    category: "Workshop",
    authors: "Anita Saroj, Rajesh Kumar Mundotiya, Sukomal Pal",
    year: "2019",
    link: "https://ceur-ws.org/Vol-2517/T3-17.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/SarojMP19,\nauthor       = {Anita Saroj and Rajesh Kumar Mundotiya and Sukomal Pal},\neditor       = {Parth Mehta and Paolo Rosso and Prasenjit Majumder and Mandar Mitra},\ntitle        = {IRLab@IITBHU at {HASOC} 2019: Traditional Machine Learning for Hate\n                Speech and Offensive Content Identification},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {308--314},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T3-17.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:29 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/SarojMP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FIRE 2019",
  },
  {
    name: "Sādhanā 2018",
    desc: "Machine transliteration and transliterated text retrieval: a survey",
    category: "Journal",
    authors: "Dinesh Kumar Prabhakar, Sukomal Pal",
    year: "2018",
    link: "https://link.springer.com/article/10.1007/s12046-018-0828-8",
    // bibtex: "",
    // code: "",
    shortform: "Sādhanā 2018",
  },
  {
    name: "Companion Proceedings of the The Web Conference 2018",
    desc: "Gold standard creation for microblog retrieval: Challenges of completeness in irmidis 2017",
    category: "Conference",
    authors: "Ribhav Soni, Sukomal Pal",
    year: "2018",
    link: "https://dl.acm.org/doi/abs/10.1145/3184558.3191622",
    bibtex: "@inproceedings{DBLP:conf/www/SoniP18,\nauthor       = {Ribhav Soni and Sukomal Pal},\neditor       = {Pierre{-}Antoine Champin and Fabien Gandon and Mounia Lalmas and Panagiotis G. Ipeirotis},\ntitle        = {Gold Standard Creation for Microblog Retrieval: Challenges of Completeness\n                in IRMiDis 2017},\nbooktitle    = {Companion of the The Web Conference 2018 on The Web Conference 2018,\n                {WWW} 2018, Lyon , France, April 23-27, 2018},\npages        = {1639--1642},\npublisher    = {{ACM}},\nyear         = {2018},\nurl          = {https://doi.org/10.1145/3184558.3191622},\ndoi          = {10.1145/3184558.3191622},\ntimestamp    = {Fri, 16 Apr 2021 10:04:12 +0200},\nbiburl       = {https://dblp.org/rec/conf/www/SoniP18.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "WWW 2018",
  },
  {
    name: "TREC 2018",
    desc: "IIT-BHU In TREC 2018 Incidents Stream Track",
    category: "Workshop",
    authors: "Harshit Mehrotra, Sukomal Pal",
    year: "2018",
    link: "https://web.archive.org/web/20200320123013id_/https://trec.nist.gov/pubs/trec27/papers/IIT-BHU-IS.pdf",
    bibtex: "@inproceedings{DBLP:conf/trec/MehrotraP18,\nauthor       = {Harshit Mehrotra and\n                Sukomal Pal},\neditor       = {Ellen M. Voorhees and\n                Angela Ellis},\ntitle        = {{IIT-BHU} In {TREC} 2018 Incidents Stream Track},\nbooktitle    = {Proceedings of the Twenty-Seventh Text REtrieval Conference, {TREC}\n                2018, Gaithersburg, Maryland, USA, November 14-16, 2018},\nseries       = {{NIST} Special Publication},\nvolume       = {500-331},\npublisher    = {National Institute of Standards and Technology {(NIST)}},\nyear         = {2018},\nurl          = {https://trec.nist.gov/pubs/trec27/papers/IIT-BHU-IS.pdf},\ntimestamp    = {Wed, 03 Feb 2021 08:31:25 +0100},\nbiburl       = {https://dblp.org/rec/conf/trec/MehrotraP18.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "TREC 2018",
  },
  {
    name: "FIRE (Working Notes) 2018",
    desc: "IIT BHU at FIRE 2018 IRMiDis Track-Obtaining actual Tweets during Natural Disasters",
    category: "Workshop",
    authors: "Harshit Mehrotra, Sukomal Pal",
    year: "2018",
    link: "https://ceur-ws.org/Vol-2266/T1-5.pdf",
    bibtex: "@inproceedings{DBLP:conf/fire/MehrotraP18,\nauthor       = {Harshit Mehrotra and Sukomal Pal},\neditor       = {Parth Mehta and Paolo Rosso and Prasenjit Majumder and Mandar Mitra},\ntitle        = {{IIT} {BHU} at {FIRE} 2018 IRMiDis Track - Obtaining Factual Tweets during Natural Disasters},\nbooktitle    = {Working Notes of {FIRE} 2018 - Forum for Information Retrieval Evaluation,\n                Gandhinagar, India, December 6-9, 2018},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2266},\npages        = {24--27},\npublisher    = {CEUR-WS.org},\nyear         = {2018},\nurl          = {https://ceur-ws.org/Vol-2266/T1-5.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:29 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MehrotraP18.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FIRE 2018",
  },
      {
     name: "Sub-document level Information Retrieval",
     desc: "Sub-document level Information Retrieval: Retrieval and Evaluation",
     category: "Books",
     authors: "Sukomal Pal",
     year: "2016",
     link: "https://www.amazon.in/-/hi/Sukomal-Pal/dp/3659949698",
     bibtex: "",
     // code: "",
     shortform: "EG 2016",
        
  },
  {
    authors: "Manajit Chakraborty, Sukomal Pal, Rahul Pramanik and Ravindranath Chowdhary",
    year: "2016",
    category: "Journal",
    desc: "Recent Developments in Social Spam Detection and Combating Techniques: A Survey",
    name: "Information Processing & Management",
    link: "https://www.sciencedirect.com/science/article/pii/S0306457316300966",
    bibtex: "@article{chakraborty2016social,\n" +
            "  author = {Manajit Chakraborty and Sukomal Pal and Rahul Pramanik and Ravindranath Chowdhary},\n" +
            "  title = {Recent Developments in Social Spam Detection and Combating Techniques: A Survey},\n" +
            "  journal = {Information Processing & Management},\n" +
            "  volume = {52},\n" +
            "  number = {6},\n" +
            "  pages = {10531073},\n" +
            "  year = {2016},\n" +
            "  publisher = {Elsevier},\n" +
            "  note = {Awarded IP\\&M Best Paper - Honorable Mention 2016; Cited by 106 (Google Scholar)}\n" +
            "}"
  },
  {
  authors: "Sukomal Pal and Mandar Mitra",
  year: "2011",
  category: "Book Chapters",
  desc: "XML Retrieval: A Survey",
  name: "Internet Policies and Issues. Volume 8",
  link: "https://d1wqtxts1xzle7.cloudfront.net/50461503/XML_Retrieval_A_Survey20161121-28479-14utytk-libre.pdf?1479755688=&response-content-disposition=inline%3B+filename%3DXML_Retrieval_A_Survey.pdf&Expires=1755085051&Signature=bC~A2kiLLonWFmAoGSNpJMikCUS3oRZQqusZiTcbLsTd8Og5zp4syPQhiBh0ONQCymYc4g~Ea755O~n9cLy8IWNYL4-DjUCXbE6m-n3I96zwhVPqso8tl7GYoAwlShJjpPTfvfTkQwgE0YHFQKIHS43FBWrNglOqiWzES6NYW~LJc~MB84ufwgmHyRTSknhDEPCJFxlyGeuyoL4FsXVqnGglc0zYzu4-O0mU8PTxQ5Hx8aLCAj2X02C3CnxTEASPFMbai0jSJfHhPCjrPLvQ3XU27jPADkpu3nTL1ac8TAbpjf5Dw4aqxUePoBl~fYLIXJFbSDiGMOf3Z-nE2aI6ag__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
  bibtex: "@incollection{pal2011xml,\nauthor = {Sukomal Pal and \nMandar Mitra},\nyear = {2011},\ntitle = {XML Retrieval: A Survey},\nbooktitle = {Internet Policies and Issues, Volume 8},\npublisher = {Nova Science Publishers},\npages = {85-118}\n}"
},
  {
    authors: "Sukomal Pal, Mandar Mitra and Jaap Kamps",
    year: "2011",
    category: "Journal",
    desc: "Evaluation effort, reliability and reusability in XML retrieval",
    name: "Journal of the American Society for Information Science and Technology",
    link: "https://doi.org/10.1002/asi.21403",
    bibtex: "@article{pal2011xml,\n" +
            "  author = {Sukomal Pal and Mandar Mitra and Jaap Kamps},\n" +
            "  title = {Evaluation effort, reliability and reusability in XML retrieval},\n" +
            "  journal = {Journal of the American Society for Information Science and Technology},\n" +
            "  volume = {62},\n" +
            "  number = {2},\n" +
            "  pages = {375--394},\n" +
            "  year = {2011},\n" +
            "  note = {Awarded the Best JASIST Paper Award 2012; Cited by 20 (Google Scholar)}\n" +
            "}"
  },
  {
    authors: "P. Majumder, M. Mitra, D. Pal, A. Bandyopadhyay, S. Maiti, S. Pal, D. Modak and S. Sanyal",
    year: "2010",
    category: "Journal",
    desc: "The FIRE 2008 Evaluation Exercise",
    name: "ACM Transactions on Asian Language Information Processing",
    link: "https://doi.org/10.1145/1838745.1838747]",
    bibtex: "@article{majumder2010fire,\n" +
            "  author = {Prasenjit Majumder and Mandar Mitra and Dipasree Pal and Ayan Bandyopadhyay and Samaresh Maiti and Sukomal Pal and Deboshree Modak and Sucharita Sanyal},\n" +
            "  title = {The FIRE 2008 Evaluation Exercise},\n" +
            "  journal = {ACM Transactions on Asian Language Information Processing},\n" +
            "  volume = {9},\n" +
            "  number = {3},\n" +
            "  articleno = {10},\n" +
            "  year = {2010},\n" +
            "  month = {Sep},\n" +
            "  note = {Cited by 25 (Google Scholar)}\n" +
            "}"
  },
  {
    authors: "Sukomal Pal and Aditya Bagchi",
    year: "2005",
    category: "Journal",
    desc: "Association against Dissociation: Some Pragmatic Considerations for Frequent Itemset Generation under Fixed and Variable Thresholds",
    name: "ACM SIGKDD Explorations",
    link: "https://doi.org/10.1145/1117454.1117479",
    bibtex: "@article{pal2005association,\n" +
            "  author = {Sukomal Pal and Aditya Bagchi},\n" +
            "  title = {Association against Dissociation: Some Pragmatic Considerations for Frequent Itemset Generation under Fixed and Variable Thresholds},\n" +
            "  journal = {ACM SIGKDD Explorations},\n" +
            "  volume = {7},\n" +
            "  number = {2},\n" +
            "  pages = {151--159},\n" +
            "  year = {2005},\n" +
            "  month = {Dec},\n" +
            "  note = {Cited by 21 (Google Scholar)}\n" +
            "}"
  }

]

export const Publications = () => {
  const [filter, setFilter] = useState(data)

  const handleFilter = (c) => {
    const updatedData = data.filter(x => x.category === c)
    setFilter(updatedData)
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    AOS.init()
  }, [])

  return (
    <div className='font-serif text-[#666666]' >
      <div className='my-[01%] py-[1%] mx-[8%] flex flex-col'>
        <div className='flex justify-between w-full pb-[2%] border-b-2'>
          <button onClick={() => setFilter(data)} className='publ-heading  w-1/5 text-[145%] font-bold tracking-wider font-serif rounded-xl py-[1%]'>
            All Publications
          </button>
          <div className='w-1/5 hover:animate-pulse flex justify-center items-center'>
            {/* <div className='category mr-1 bg-green-900 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
            <div>
              <button onClick={() => handleFilter("Books")} className='publ-heading border-2 border-green-700  text-[145%] font-bold  font-serif    text-green-700 rounded-xl hover:text-white hover:bg-green-700 justify-center items-center px-[10%] py-[2%]'>
                Books
              </button>
            </div>
          </div>
          <div className='w-1/5 hover:animate-pulse flex justify-center items-center'>
            {/* <div className='category mr-1 bg-green-900 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
          <div className='w-1/5 flex hover:animate-pulse justify-center items-center'>
            {/* <div className='category mr-[2px] bg-cyan-500 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
            <div>
              <button onClick={() => handleFilter("Book Chapters")} className='publ-heading border-2 border-violet-500 text-[145%] font-bold tracking-wider font-serif  hover:animate-pulse  text-violet-500 hover:text-white hover:bg-violet-500 rounded-xl whitespace-nowrap flex justify-center items-center px-[5%] py-[2%]'>
                Book Chapters
              </button>
            </div>
          </div>
          </div>
          <div className='w-1/5 hover:animate-pulse flex justify-center items-center'>
            {/* <div className='category mr-1 bg-rose-900 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
            <div>
              <button onClick={() => handleFilter("Journal")} className='publ-heading border-2 border-rose-700  text-[145%] font-bold  font-serif    text-rose-700 rounded-xl hover:text-white hover:bg-rose-700 justify-center items-center px-[10%] py-[2%]'>
                Journals
              </button>
            </div>
          </div>
          <div className='w-1/5 flex hover:animate-pulse justify-center items-center'>
            {/* <div className='category mr-[2px] bg-amber-500 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
            <div>
              <button onClick={() => handleFilter("Conference")} className='publ-heading border-2 border-amber-500 text-[145%] font-bold  font-serif  hover:animate-pulse  text-amber-500 rounded-xl hover:text-white hover:bg-amber-500 justify-center items-center px-[5%] py-[2%]'>
                Conferences
              </button>
            </div>
          </div>
          <div className='w-1/5 flex hover:animate-pulse justify-center items-center'>
            {/* <div className='category mr-[2px] bg-cyan-500 flex-shrink-0 rounded-full w-4 h-4'>
            </div> */}
            <div>
              <button onClick={() => handleFilter("Workshop")} className='publ-heading border-2 border-cyan-500 text-[145%] font-bold tracking-wider font-serif  hover:animate-pulse  text-cyan-500 hover:text-white hover:bg-cyan-500 rounded-xl justify-center items-center px-[5%] py-[2%]'>
                Workshops
              </button>
            </div>
          </div>
        </div>
        <div>
          {
            filter.map((item) => {
              return (
                <div key={item.id} data-aos="fade-up" data-aos-duration="1000" className={`publ-card rounded-2xl flex justify-start my-[1.5%] py-[1%]  tracking-wide ${item.category === 'Books' && 'bg-green-100'} ${item.category === 'Book Chapters' && 'bg-violet-100'} ${item.category === 'Journal' && 'bg-rose-100'}  ${item.category === 'Conference' && 'bg-amber-100'}  ${item.category === 'Workshop' && 'bg-cyan-100'} `}>
                  <div className='px-[2%]'>
                    <div>
                      <div className='publ-desc text-[130%] font-sans my-[1%] font-bold text-black '>
                        {item.desc}
                      </div>
                      <div className='publ-name my-[1%] font-sans text-[110%]'>
                        {item.name}
                      </div>
                      <div className='flex publ-div  mt-[6px] items-center  space-x-1'>
                        <div className='publ-border flex justify-center items-center border-r-2 pr-[1%] border-[#666666]'>
                          <span className=''>
                            <MdPersonOutline className='mem-icon' size={"1.25rem"} />
                          </span>
                          <div className='publ-auth text-[120%]' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.authors}
                          </div>
                        </div>
                        <div className='publ-last flex space-x-3 items-center pl-[1%]'>
                          <div className='flex publ-year justify-start items-center  space-x-1 transition ease-in-out hover:scale-110'>
                            <div>
                              <BsCalendar2Date className='mem-icon' size={"1.25rem"} />
                            </div>
                            <div className='pl-[2%] publ-icons'>
                              {item.year}
                            </div>
                          </div>
                          {item.link &&
  (item.link.startsWith('http') ? 
    <a href={item.link} target='_blank' className='flex  space-x-1 publ-year justify-start items-center  transition ease-in-out hover:scale-110 '>
      <div>
        <AiOutlineLink className='mem-icon' size={"1.25rem"} />
      </div>
      <div className='pl-[2%] '>
        Link
      </div>
    </a>
    :
    <Link to={item.link} className='flex  space-x-1 publ-year justify-start items-center  transition ease-in-out hover:scale-110 '>
      <div>
        <AiOutlineLink className='mem-icon' size={"1.25rem"} />
      </div>
      <div className='pl-[2%] '>
        Link
      </div>
    </Link>
  )
}

                          {item.bibtex &&
                            <div className=''>
                              <Popup className='pop' trigger={
                                <div className=' publ-year flex justify-center space-x-1 items-center transition ease-in-out hover:scale-110'>
                                  <div><RiDoubleQuotesR className='mem-icon' size={"1.25rem"} /> </div>
                                  <button className=''>Cite
                                  </button>
                                </div>
                              } modal nested>{
                                  close => (
                                    <div className='modal break-words' >
                                      <pre className='content my-[3%] mx-[3%] break-words'>
                                        {item.bibtex}
                                      </pre>
                                      <div className='flex w-full justify-evenly my-[1%] items-center '>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 tracking-wider hover:scale-110 tranistion ease-in-out text-[#666666]'>
                                          <button className='    flex items-center justify-center w-full ' onClick={() => {
                                            copy(item.bibtex)
                                            alert("Copied to clipboard!")
                                          }}>
                                            <MdContentCopy className='mem-icon m-[2%]' size={'1.25rem'} />
                                          </button>
                                        </div>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 hover:scale-110 tranistion ease-in-out tracking-wider  text-[#666666]'>
                                          <button className=' flex items-center justify-center w-full ' onClick={() => close()}><IoMdClose className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }

                              </Popup>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
