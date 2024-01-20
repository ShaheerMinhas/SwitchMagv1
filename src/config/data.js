

const projectContent1 = `**Key Takeaways:**  The project, "Landmarks Detection and Correction for Pakistan Sign Language (PSL) Recognition," stands at the forefront of technological innovation aimed at bridging communication gaps for the Deaf community. It focuses on enhancing the accuracy and effectiveness of PSL recognition systems by employing advanced techniques for detecting and correcting landmarks in sign language gestures. This project is significant as it addresses a crucial need for more inclusive communication tools, catering to the unique challenges presented by PSL. By improving the precision of gesture recognition, it opens new avenues for seamless interaction and accessibility for PSL users, marking a step forward in assistive technology and inclusive communication.

**Background of the Team** The project was primarily driven by students of batch 2019: Syed Roha Shariq, Sukhan Amir and Sajdah Shoaib; who were responsible for the research, development, and implementation of the AI models and methodologies. These students worked under the guidance of their academic supervisor Dr. Aamir Wali, who provided expert oversight, critical insights, and valuable feedback throughout the project's progression. 

**Background and Need** The importance of sign language recognition, particularly for Pakistani Sign Language (PSL), is underscored by the challenges faced by the hearing-impaired community. Globally, a significant percentage of individuals with hearing disabilities rely on sign language for daily communication, with PSL being vital for Pakistan's hearing-impaired population. However, PSL has not been as extensively researched or developed in recognition systems compared to other sign languages. This project addresses the critical need for efficient and accurate PSL recognition, tackling challenges such as the complexity of hand poses and gestures, and the computational demands of recognition models. It aims to refine the accuracy of PSL recognition by focusing on landmarks detection and correction, a key aspect often hampered by anomalies in landmark identification. The project's methodology involves using renowned algorithms like MediaPipe and OpenPose for landmark detection, correcting any misidentified landmarks, and integrating these into a recognition system, potentially revolutionizing PSL recognition and aiding millions in effective communication.

**Project Objectives** The project "Landmarks Detection and Correction for PSL Recognition" is fundamentally aimed at elevating the accuracy and efficiency of Pakistani Sign Language (PSL) recognition using cutting-edge artificial intelligence techniques. This initiative directly addresses the communication hurdles identified in the background section, particularly for Pakistan's Deaf community. The project's core goals involve an innovative approach to identifying and correcting hand landmarks in PSL, moving beyond traditional methods that rely on alphabets or sentences. This strategic focus is expected to significantly enhance the natural interpretation and understanding of PSL, thereby creating a more robust and effective recognition system.
By refining this aspect of sign language recognition, the project seeks to provide a more seamless and accurate communication tool for PSL users, effectively bridging the gap in existing technologies. The expected outcome is a substantial improvement in recognition accuracy, anticipated to rise from about 40% to nearly 70%. This leap in performance is crucial for facilitating clearer, more reliable communication for the Deaf community in Pakistan. In essence, the project's objectives are aligned with the broader vision of making PSL recognition more accessible and functional, thereby supporting the communication needs of the Deaf community and fostering greater inclusivity in society.

**Methodology Employed** The project's methodology revolves around an innovative, algorithm-based approach using an LSTM classifier, focusing on enhancing Pakistani Sign Language (PSL) recognition.

**Algorithms Utilized:**

1. MediaPipe
2. Open Pose
3. Blaze Palm

These algorithms are integral for the initial stages of the project.

**Data Collection and Frame Processing:** The process begins with collecting a dataset comprising PSL videos. This dataset undergoes a two-step processing
    
1 Frame Extraction  Individual frames are extracted from each video to capture specific sign language gestures

2 Pre-Processing: These frames are then pre-processed to remove background noise, facilitating clearer landmark detection


**Landmark Detection and Classification:** The selected landmark detection algorithm is applied to the processed frames to identify key hand points, which are essential for tracking hand movements.

1. Frame Storage: The frames with detected landmarks are stored for further analysis.

2. Classification with LSTM: These frames are classified using an LSTM classifier, which involves a two-phase process of testing (with known labels) and training (using the testing dataset) to evaluate the model's accuracy.


**Accuracy Enhancement and Correction:** The project places significant emphasis on improving recognition accuracy.

1. Manual Correction: Identified landmarks are manually reviewed and corrected for any misidentifications caused by the initial algorithms.

2. Re-evaluation: Post-correction, the model is re-trained and tested. This phase involves comparing the accuracies pre- and post-correction to gauge improvements.


**Real-Time Application Development:** As a final step, the project aims to extend the refined model for real-time sign language recognition, making it applicable on devices equipped with webcams. This extension is pivotal for practical, real-world applications, enhancing the accessibility and utility of the developed system.

**Challenges and Solutions** The project faced significant challenges, particularly in the accuracy of landmark detection. The primary algorithms used, MediaPipe and OpenPose, occasionally misidentified hand landmarks due to factors like rapid movement, background interference, or poor video quality. MediaPipe sometimes misplaced landmarks when the fingers were not clearly visible or moving quickly, leading to incorrect interpretations of hand gestures. Similarly, OpenPose's performance was hindered by 
its computational intensity, especially with high-resolution videos, and its setup process was complex and not well-documented, posing difficulties for efficient implementation.

To overcome these obstacles, the team employed a meticulous process of manual correction. This involved closely examining each frame to identify and rectify any inaccuracies in landmark detection. By combining the computational power of the algorithms with human precision, the project significantly enhanced the accuracy of PSL recognition. This dual approach of leveraging advanced technology alongside detailed manual review proved crucial in addressing the challenges, ultimately leading to a more reliable and effective recognition system.

**Results and Analysis** The project's primary achievement was a substantial improvement in the accuracy of the landmark detection model for Pakistani Sign Language (PSL). Initially, the model's accuracy was around 40%, but after implementing the landmark correction process, a significant jump to approximately 70% was observed. This marked improvement highlighted the effectiveness of the correction process. 

An interesting discovery during the project was the impact of omitting the 'z' landmark from consideration. By focusing solely on the 'x' and 'y' coordinates, the model's accuracy further improved, demonstrating that certain landmarks had more influence on the overall performance.

However, the results varied when employing different algorithms. For instance, the OpenPose algorithm showed only minimal improvement after the correction process. This was attributed to its relative newness in the field of landmark detection and its tendency to detect broader pose keypoints, which made it less efficient for the specific task of hand landmark detection in sign language.

These findings underscore the project's success in enhancing the accuracy of PSL recognition. Looking ahead, the team envisions applying this landmark correction methodology to other datasets and algorithms, expanding the scope and impact of the project in the field of sign language recognition.


**Impact and Applications** The project's enhancement of Pakistani Sign Language (PSL) recognition accuracy from around 40% to 70% through landmark correction signifies a major stride in assistive technology. This leap in accuracy, particularly by focusing on 'x' and 'y' landmarks, showcases the project's potential in real-world applications. It paves the way for more inclusive and effective communication tools for the Deaf community. Additionally, the adaptability of this landmark correction approach with other algorithms like MediaPipe offers broad implications for future research in sign language recognition, indicating its potential for diverse applications and further advancements in the field.


**Future Work and Improvements** Future work for the "Landmarks Detection and Correction for PSL Recognition" project includes expanding the scope of research to incorporate a wider range of datasets for model training. This expansion can provide a more comprehensive understanding of the model's effectiveness across diverse scenarios. Additionally, experimenting with different landmark detection algorithms in conjunction with Pakistani Sign Language will offer comparative insights into accuracy and efficiency. The landmark correction algorithm developed in this project, initially tailored for MediaPipe, holds potential for adaptation with other algorithms. Such adaptability could significantly contribute to advancing the field of sign language recognition, opening new avenues for research and development.


**Inference** The "Landmarks Detection and Correction for PSL Recognition" project successfully enhanced the accuracy of sign language recognition from around 40% to 70%, a significant improvement demonstrating the effectiveness of the landmark correction process. The project's innovation lies in its focus on refining key points of Pakistani Sign Language (PSL), a less explored area in sign language recognition. The removal of the 'z' landmark, focusing on 'x' and 'y' coordinates, further improved accuracy, highlighting the project's meticulous approach to optimization. This project paves the way for future advancements in sign language recognition, potentially benefiting millions of Deaf individuals by providing more accessible and accurate communication tools. This work, therefore, stands as a notable contribution to the field of assistive technology and inclusive communication.
`

const projectContent2 = `
**Key Takeaways** The "Automatic Ganglion Cell Detection in Hirschsprung's Disease" research project marks a pivotal advancement in medical diagnostics. This study explores the application of AI in identifying ganglion cells in intestinal biopsies, critical for diagnosing Hirschsprung's Disease, a congenital condition marked by the absence of these cells. Utilizing three cutting-edge AI models—YoloV5, EfficientNet, and EfficientNetV2—the research team processed a comprehensive dataset of whole slide images, aiming to overcome the limitations of traditional, manual microscopic examination. This approach not only promises to increase the accuracy and reliability of diagnoses but also expedites the process, potentially improving surgical treatments and patient outcomes. By integrating AI into medical diagnostics, this study opens new avenues for tackling complex congenital diseases, underscoring the growing significance of technology in healthcare innovation.

**Team Association**   The project was primarily driven by students of batch 2019: Maryam Shahid, Moazzan Ishfaq and Muhammad Fahad Khawaja ; who were responsible for the research, development, and implementation of the AI models and methodologies. These students worked under the guidance of their academic supervisors: Dr. Kashif Zafar and Dr. Mehmet Turan; who provided expert oversight, critical insights, and valuable feedback throughout the project's progression. Additionally, the project benefited from the involvement of external supervisors, including pathologists and AI experts, who contributed their specialized knowledge and experience, particularly in the areas of medical imaging and artificial intelligence.


**Significance of the Project1** The background and significance of the project "Automatic Ganglion Cell Detection in Hirschsprung's Disease" are rooted in the critical need for precise medical diagnostics. Hirschsprung's Disease, a congenital disorder, is characterized by the absence of ganglion cells in the intestinal tract, leading to severe digestive complications. The conventional method of diagnosing this condition involves manual microscopic examination of intestinal tissue samples, a process that is not only time-consuming but also subject to variability and human error. This project aims to revolutionize this diagnostic process by introducing an AI-based model for automatic detection of ganglion cells. The significance of this advancement lies in its potential to enhance the accuracy and efficiency of medical diagnoses. By automating the detection process, the AI model could significantly reduce the time required for diagnosis, allowing for quicker and more effective treatment plans. Furthermore, the increased precision offered by AI could lead to a decrease in diagnostic errors, a crucial factor in conditions where accurate detection is vital for successful treatment. The project, therefore, stands at the forefront of integrating advanced technology into healthcare, setting a precedent for future innovations in medical diagnostics. Its success could pave the way for similar AI-based diagnostic tools, transforming the landscape of healthcare and offering new hope for patients with complex medical conditions.

**Methodology Employed** The methodology of the "Automatic Ganglion Cell Detection in Hirschsprung's Disease" project encompasses the development of a binary classification model to identify intestinal ganglion cells in Whole-Slide Images (WSIs). The project involves a two-stage process: data preprocessing and model training.

**Data Preprocessing**

1. **WSI Segmentation** Due to the substantial size of WSIs, averaging around 650MB per image, direct training of a model on these images is not feasible. To manage this, the team uses a segmentation algorithm that breaks down each WSI into smaller, more manageable patches. Each patch measures approximately 10,000 x 10,000 pixels.

2. **Color Normalization** To address inconsistencies in color within these patches, a color normalization algorithm is applied. This process involves adjusting the Hematoxylin and Eosin (H&E) stains in the images to standardized thresholds, thereby reducing discrepancies in color and lighting across the dataset.

**Model Training**
    
1. **Annotations and Data Selection** In collaboration with expert pathologists, 352 images have been annotated to identify regions containing ganglion cells. These annotations are essential for training the classification model. The images are split into training, validation, and testing sets in an 80/10/10 ratio.


2. **Implementation of AI Models** The preprocessed image patches are then processed through the classification models: YOLOv5, EfficientNet, and EfficientNetV2. These models are trained to assess the patches and estimate the likelihood of each containing ganglionic regions. Patches identified as positive are then saved for further examination by pathologists.

This methodological approach demonstrates the project's innovative efforts in integrating AI with medical imaging. By utilizing advanced AI models and addressing the challenges of large-scale biomedical data, the project aims to enhance the accuracy and efficiency of diagnosing Hirschsprung's Disease.

**Challenges Faced AND Problem Solving Strategy** The team faced a formidable challenge when embarking on their research project, delving into the intricacies of Hirschsprung's Disease despite their background in Computer Science. Unfamiliar with concepts such as ganglion cells and lacking foundational knowledge in biology, they took proactive measures to bridge the gap. 
Recognizing the importance of a multidisciplinary approach, the team participated in workshops conducted by pathologists to gain a comprehensive understanding of the biological aspects underlying Hirschsprung's Disease. To further enrich their research, they encountered logistical hurdles in obtaining datasets from Pakistan, prompting them to collaborate with a Turkish hospital to acquire the necessary data for their study. This interdisciplinary effort showcases the team's dedication and adaptability as they navigated unfamiliar terrain, blending their computer science expertise with newfound insights from the field of medicine to contribute meaningfully to the understanding of Hirschsprung's Disease.

**Results and Analysis** The "Automatic Ganglion Cell Detection in Hirschsprung's Disease" project showcased remarkable results from its use of three AI models: EfficientNet, EfficientNetV2, and YOLOv5, each demonstrating their efficacy in classifying ganglion cells in Whole Slide Images (WSIs).
   
1. **EfficientNet Model:** This model excelled in the task, displaying a high accuracy rate of over 97% on test data. The architecture of EfficientNet, specifically designed for complex computer vision tasks, proved highly effective in the accurate classification and segmentation of images, making it a robust tool for medical diagnostics.

2. **EfficientNetV2 Model:** Known for its efficient architecture and scalability,

EfficientNetV2 was adept at handling the large-scale image data typical of WSIs. In this project, it achieved an accuracy of about 92%. This performance, coupled with its ability to efficiently process extensive datasets, illustrates its potential in medical imaging, particularly for tasks requiring high-precision analysis.

3. **YOLOv5 Model:** YOLOv5, utilizing pre-trained weights and a dataset annotated by pathologists, achieved a noteworthy accuracy of 82% on unseen data. More impressively, it significantly reduced the prediction time for each image patch to under one second. This demonstrates not only the model's accuracy but also its efficiency, a crucial factor in processing the detailed and large WSIs.

These results underscore the significant potential of using advanced AI models in medical diagnostics. The high accuracy and efficiency of these models in detecting ganglion cells are crucial for the diagnosis of Hirschsprung's Disease. Their success in this project indicates a major advancement in applying AI technology to histopathology, opening new avenues for enhanced medical diagnosis and treatment.

**Inference**
In conclusion, the "Automatic Ganglion Cell Detection in Hirschsprung's Disease" project demonstrates the tremendous potential of AI in medical diagnostics. The project successfully developed a binary classification model capable of identifying intestinal ganglion cells in Whole-Slide Images (WSIs), a crucial step in diagnosing Hirschsprung's Disease. With the aid of expert pathologists, the team annotated a significant dataset and employed advanced AI models such as YOLOv5, EfficientNet, and EfficientNetV2. These models were instrumental in achieving high accuracy rates, thereby confirming the viability of AI in enhancing diagnostic precision. The project's success in automating the detection of ganglion cells in WSIs is a testament to the power of AI in transforming medical diagnostics, encouraging further research in this domain. It underscores the importance of integrating AI into healthcare, not just for Hirschsprung’s Disease but potentially for a range of medical conditions that require detailed image analysis.

**References and Further Reading**
For further exploration on topics related to "Automatic Ganglion Cell Detection in Hirschsprung's Disease," the following resources and references are suggested:
    • Academic papers and studies on the application of AI in histopathology.
    • Research articles on medical image analysis using AI models such as YOLOv5, EfficientNet, and EfficientNetV2.
    • Studies focused on whole slide imaging techniques in pathology.
    • Publications on normalization techniques for histopathological images.
    • Literature on the diagnosis of diseases like breast cancer using transfer learning in histopathology.
    • Articles about the use of generative adversarial networks for stain normalization in histopathology images.
These resources provide a comprehensive view of the technical and medical background essential for understanding the project's context and are invaluable for anyone interested in delving deeper into this field.
`


export const blogList = [
  {
    id: 1,
    title: 'Landmarks Detection and Correction for Pakistan Sign Language (PSL) Recognition',
    category: 'development',
    subCategory: ['frontend', 'ui/ux', 'design'],
    description: projectContent1,
    authorName: 'John Doe',
    authorAvatar: '/assets/images/fypv1.png',
    createdAt: 'January 17, 2024',
    cover: '/assets/images/fypv1.png',
    
  },
  {
    id: 2,
    title: 'Automatic Ganglion Cell Classification Model for Detection in Hirschsprung’s Disease Patients',
    category: 'development',
    subCategory: ['frontend', 'ui/ux', 'design'],
    description: projectContent2,
    authorName: 'John Doe',
    authorAvatar: '/assets/images/post2.png',
    createdAt: 'January 17, 2024',
    cover: '/assets/images/p21.png',
  }
];
