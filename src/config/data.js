

const projectContent = `**Key Takeaways:**  The project, "Landmarks Detection and Correction for Pakistan Sign Language (PSL) Recognition," stands at the forefront of technological innovation aimed at bridging communication gaps for the Deaf community. It focuses on enhancing the accuracy and effectiveness of PSL recognition systems by employing advanced techniques for detecting and correcting landmarks in sign language gestures. This project is significant as it addresses a crucial need for more inclusive communication tools, catering to the unique challenges presented by PSL. By improving the precision of gesture recognition, it opens new avenues for seamless interaction and accessibility for PSL users, marking a step forward in assistive technology and inclusive communication.

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

**Data Collection and Frame Processing:** The process begins with collecting a dataset comprising PSL videos. This dataset undergoes a two-step processing:

    1. Frame Extraction  Individual frames are extracted from each video to capture specific sign language gestures.

    2. Pre-Processing: These frames are then pre-processed to remove background noise, facilitating clearer landmark detection.


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


export const blogList = [
  {
    id: 1,
    title: 'Landmarks Detection and Correction for Pakistan Sign Language (PSL) Recognition',
    category: 'development',
    subCategory: ['frontend', 'ui/ux', 'design'],
    description: projectContent,
    authorName: 'John Doe',
    authorAvatar: '/assets/images/fyp1.png',
    createdAt: 'January 17, 2024',
    cover: '/assets/images/fyp1.png',
  }
];