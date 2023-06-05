import React, { useEffect, useState } from 'react'
import back from "../assets/backg-logo.jpg"
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

const data = [
  {
    name: "Computer Speech & Language 2023",
    desc: "Building a text retrieval system for the Sanskrit language: Exploring indexing, stemming, and searching issues",
    category: "Journal",
    authors: "Siba Sankar Sahu, Sukomal Pal",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S0885230823000372?casa_token=KVwHxQqYom4AAAAA:sWwIkxA_1FURxhTeh9PTNIMaiCs3cLM2wJFKfR8EFhpcg9iz7-6uTdWHEX6uRArYOdYnwiiPZZhW",
    bibtex: "@article{SAHU2023101518,\ntitle = {Building a text retrieval system for the Sanskrit language: Exploring indexing, stemming, and searching issues},\njournal = {Computer Speech & Language},\nvolume = {81},\npages = {101518},\nyear = {2023},\nissn = {0885-2308},\ndoi = {https://doi.org/10.1016/j.csl.2023.101518},\nurl = {https://www.sciencedirect.com/science/article/pii/S0885230823000372},\nauthor = {Siba Sankar Sahu and Sukomal Pal},\nkeywords = {Sanskrit language, Text collection construction, Stemming, Evaluation},\nabstract = {Stemming is an important pre-processing step in the text analysis domains such as text mining, text summarization and information retrieval (IR). In this study, we build a Sanskrit text collection and explore different indexing, stemming and searching strategies in Sanskrit. We also propose two stemmers: a ‘light’ and an ‘aggressive’ and evaluate their effectiveness in the text analysis task. The performance of the stemmers is evaluated in two ways: a direct and an indirect IR-based evaluation. In direct evaluation, we found that the stemmers are effective. In indirect evaluation, we apply different retrieval models such as BM25, TF–IDF, Divergence from Randomness (DFR) based and language models. The proposed stemmers are compared with GRAS stemmer, language-independent indexing (trunc-n) and no stemming approach. Among different stemming methods, aggressive stemmers provide the best performance. Hiemstra language model outperforms other retrieval models we experimented with. In statistical analysis, we found that the proposed stemming approaches produce significantly better results than the no-stemming approach.}\n}",
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
    bibtex: "",

  },
  {
    name: "Working Notes of FIRE 2022-Forum for Information Retrieval Evaluation (Hybrid)",
    desc: "Sentiment Analysis and Homophobia detection of Code-Mixed Dravidian Languages leveraging pre-trained model and word-level language tag",
    category: "Workshop",
    authors: "Supriya Chanda, Anshika Mishra, Sukomal Pal  ",
    year: "2022",
    link: "https://ceur-ws.org/Vol-3395/T2-12.pdf",
    bibtex: "",

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
    // bibtex: "",
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
    bibtex: "",

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
    name: "FIRE (Working Notes)",
    desc: "IRLab@ IITBHU@ Dravidian-CodeMix-FIRE2020: Sentiment Analysis for Dravidian Languages in Code-Mixed Text.",
    category: "Conference",
    authors: "Supriya Chanda, Sukomal Pal",
    year: "2020",
    link: "https://www.researchgate.net/profile/Supriya-Chanda/publication/350312817_IRLabIITBHUDravidian-CodeMix-FIRE2020_Sentiment_Analysis_for_Dravidian_Languages_in_Code-Mixed_Text/links/6059899d299bf1736760a88e/IRLabIITBHUDravidian-CodeMix-FIRE2020-Sentiment-Analysis-for-Dravidian-Languages-in-Code-Mixed-Text.pdf",
    bibtex: "",

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
    bibtex: "@inproceedings{DBLP:conf/fire/MishraP19,\nauthor       = {Akanksha Mishra and\n                Sukomal Pal},\neditor       = {Parth Mehta and\n                Paolo Rosso and\n                Prasenjit Majumder and\n                Mandar Mitra},\ntitle        = {{IIT} Varanasi at {HASOC} 2019: Hate Speech and Offensive Content\n                Identification in Indo-European Languages},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {344--351},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T3-22.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:30 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MishraP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
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
    bibtex: "@inproceedings{DBLP:conf/fire/MishraP19a,\nauthor       = {Akanksha Mishra and\n                Sukomal Pal},\neditor       = {Parth Mehta and\n                Paolo Rosso and\n                Prasenjit Majumder and\n                Mandar Mitra},\ntitle        = {{IIT-BHU} at {CIQ} 2019: Classification of Insincere Questions},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {468--472},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T5-4.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:30 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MishraP19a.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
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
    bibtex: "@inproceedings{DBLP:conf/fire/SarojMP19,\nauthor       = {Anita Saroj and\n                Rajesh Kumar Mundotiya and\n                Sukomal Pal},\neditor       = {Parth Mehta and\n                Paolo Rosso and\n                Prasenjit Majumder and\n                Mandar Mitra},\ntitle        = {IRLab@IITBHU at {HASOC} 2019: Traditional Machine Learning for Hate\n                Speech and Offensive Content Identification},\nbooktitle    = {Working Notes of {FIRE} 2019 - Forum for Information Retrieval Evaluation,\n                Kolkata, India, December 12-15, 2019},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2517},\npages        = {308--314},\npublisher    = {CEUR-WS.org},\nyear         = {2019},\nurl          = {https://ceur-ws.org/Vol-2517/T3-17.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:29 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/SarojMP19.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
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
    bibtex: "@inproceedings{DBLP:conf/www/SoniP18,\nauthor       = {Ribhav Soni and\n                Sukomal Pal},\neditor       = {Pierre{-}Antoine Champin and\n                Fabien Gandon and\n                Mounia Lalmas and\n                Panagiotis G. Ipeirotis},\ntitle        = {Gold Standard Creation for Microblog Retrieval: Challenges of Completeness\n                in IRMiDis 2017},\nbooktitle    = {Companion of the The Web Conference 2018 on The Web Conference 2018,\n                {WWW} 2018, Lyon , France, April 23-27, 2018},\npages        = {1639--1642},\npublisher    = {{ACM}},\nyear         = {2018},\nurl          = {https://doi.org/10.1145/3184558.3191622},\ndoi          = {10.1145/3184558.3191622},\ntimestamp    = {Fri, 16 Apr 2021 10:04:12 +0200},\nbiburl       = {https://dblp.org/rec/conf/www/SoniP18.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
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
    bibtex: "@inproceedings{DBLP:conf/fire/MehrotraP18,\nauthor       = {Harshit Mehrotra and\n                Sukomal Pal},\neditor       = {Parth Mehta and\n                Paolo Rosso and\n                Prasenjit Majumder and\n                Mandar Mitra},\ntitle        = {{IIT} {BHU} at {FIRE} 2018 IRMiDis Track - Obtaining Factual Tweets\n                during Natural Disasters},\nbooktitle    = {Working Notes of {FIRE} 2018 - Forum for Information Retrieval Evaluation,\n                Gandhinagar, India, December 6-9, 2018},\nseries       = {{CEUR} Workshop Proceedings},\nvolume       = {2266},\npages        = {24--27},\npublisher    = {CEUR-WS.org},\nyear         = {2018},\nurl          = {https://ceur-ws.org/Vol-2266/T1-5.pdf},\ntimestamp    = {Fri, 10 Mar 2023 16:22:29 +0100},\nbiburl       = {https://dblp.org/rec/conf/fire/MehrotraP18.bib},\nbibsource    = {dblp computer science bibliography, https://dblp.org}\n}",
    // code: "",
    shortform: "FIRE 2018",
  },
]

export const Publications = () => {
  const [filter, setFilter] = useState(data)

  const handleFilter = (c) => {
    const updatedData = data.filter(x => x.category === c)
    setFilter(updatedData)
  }

  useEffect(() => {
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
                <div key={item.id} data-aos="fade-up" data-aos-duration="1000" className={`publ-card rounded-2xl flex justify-start my-[1.5%] py-[1%]  tracking-wide ${item.category === 'Journal' && 'bg-rose-100'}  ${item.category === 'Conference' && 'bg-amber-100'}  ${item.category === 'Workshop' && 'bg-cyan-100'} `}>
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
                          <div className='publ-auth  text-[120%]'>
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
                            <a href={item.link} target='__blank' className='flex  space-x-1 publ-year justify-start items-center  transition ease-in-out hover:scale-110 '>
                              <div>
                                <AiOutlineLink className='mem-icon' size={"1.25rem"} />
                              </div>
                              <div className='pl-[2%] '>
                                Link
                              </div>
                            </a>
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
