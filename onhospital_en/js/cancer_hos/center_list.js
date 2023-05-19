const CENT_LIST = [
    [
        {cate_no:0, 
            item_no:1, 
            img_src:'', 
            sub_title:['', ''], 
            icon_src:'medi_icon_15_1',
            name:'Pancreatic and Colorectal Cancer Center',
            sub_context3: ['At ON Hospital, specialists in gastroenterology, oncology, hepatobiliary surgery, radiation oncology, radiology, and pathology with rich clinical experience and expertise collaborate to establish an organic system that is patient-centered from diagnosis to treatment, providing prompt diagnosis and personalized treatment for each patient.'],
            sub_context2: ['Generally, the prognosis for malignant tumors of the biliary tract and pancreas is worse compared to other organ malignancies.','In addition, specialized diagnosis and treatment including diagnosis, surgery, neoadjuvant and adjuvant chemotherapy, and radiation therapy are provided for malignant tumors of the biliary tract and pancreas to improve patient outcomes and quality of life.'],
            sub_context1: ['As various treatment methods for liver and pancreatic cancer have been developed and utilized, good results can be expected when optimal treatment is received.','Furthermore, specialized diagnosis and treatment such as diagnosis, surgery, pre- and post-operative chemotherapy, and radiation therapy are provided for malignant tumors in the bile duct and pancreas, thereby promoting improvement in the patient`s treatment rate and quality.'] },
        {cate_no:0, 
            item_no:2, 
            img_src:['2_1.jpg', '2_2.jpg'], 
            sub_title:['',''], 
            icon_src:'medi_icon_15_1',
            name:'Liver Center',
            num:['051) 607-0350', '051) 607-0745/0257'],
            num_bold:['Liver Center <span class="block"> Outpatient Clinic</span>','(3F)', 'Liver Center Reception/Payment'],
            table_th:['High-frequency ablation therapy', 'Transarterial chemoembolization (TACE)', 'Transarterial chemoinfusion therapy'],
            table_td:['A liver cancer treatment that involves inserting acupuncture needles into early-stage liver cancer of 3cm or less and flowing high-frequency waves, producing a minimum of 50 degrees Celsius or higher, to destroy liver cancer cells', 'A treatment method for malignant liver lesions that aims for complete cure, targeting multiple and giant cancer tumors. This method involves injecting anti-cancer agents slowly through the hepatic artery to the liver', 'A procedure that involves injecting chemotherapy agents and blocking the necessary blood vessels for tumor growth through the hepatic artery. This is a surgical procedure that blocks the necessary blood vessels for the tumor growth with both chemotherapy agents and embolic material'],
            sub_context1: ['Offering a new hope with a treatment success rate of 60% for those suffering from liver cancer!', 'Composed of liver specialists with a university professor background', 'Successfully performed the first thoracoscopic lobectomy in Busan and Gyeongsangnam-do'] },
        {cate_no:0, 
            item_no:3, 
            img_src:'', 
            icon_src:'medi_icon_15_1',
            name:'Infection Control Center',
            sub_title:[ '','Main tasks of the Infection Control Team'], 
            text:'Cooperating with the Infection Control Committee to carry out healthcare-related infection prevention and management activities.',
            li_text:['Establishing and revising infection control regulations', 'Monitoring healthcare-related infections and their management', 'Managing infectious disease outbreaks', 'Managing legal infectious diseases', 'Managing the cleaning, disinfection, and sterilization of medical equipment', 'Providing education and promotion of infection control', 'Managing infections among hospital staff', 'Environmental management','Consultation on infection control', 'Fostering local community networks for infection control activities'],
            sub_context1: ['To provide a safe environment from healthcare-related infections for both patients and visitors, the hospital performs activities to recognize and reduce the risk of infection transmission among all individuals exposed to the hospital environment','Cooperating with the Infection Control Committee to carry out healthcare-related infection prevention and management activities.']  },
        {cate_no:0, 
            item_no:4, 
            img_src:'4_.jpg', 
            sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
            sub_context5: ['fistula, anal fissure, pilonidal disease, anal pain, anal prolapse, anorectal infections','Constipation or bowel dysfunction, irritable bowel syndrome, inflammatory bowel diseases',],
            sub_context4: ['The center provides patients with treatment opportunities through various methods, including minimally invasive surgery.','It also provides specialized treatments through the cooperation of specialized clinical departments.','In particular, the center strives to provide fast and comfortable treatment from colorectal cancer to anorectal diseases that require high-level surgical procedures. It is responsible for linking with the special clinics and providing appropriate treatment for the causes of anorectal diseases, as well as treating anorectal diseases.',],
            sub_context3: ['Additionally, the frequency of various functional anorectal diseases is also rapidly increasing.','In this context, the Colorectal Center at ON Hospital offers the highest level of medical care with top-notch medical equipment and excellent specialists. Even for the same disease, the optimal treatment can vary depending on the patient`s condition and the progression of the disease.',],
            sub_context2: ['As modernization and Westernization continue, the incidence of colorectal diseases is expected to increase. Colorectal cancer has become the most rapidly increasing cancer over the past decade and is the fourth most common cancer in Korea.',],
            sub_context1: ['The Colorectal Center at ON Hospital aims to deliver accurate knowledge and consultation on colorectal diseases, as well as provide optimal treatment for patients.',] },
        {cate_no:0, 
            item_no:5, 
            img_src:'5_.jpg', 
            sub_title:['Attention Deficit Hyperactivity Disorder(ADHD)', 'Learning Disability', 'School phobia - separation anxiety disorder', 'Asperger`s syndrome and bullying'], 
            bold_top:['"Every morning, I don`t want to go to school"', '"I think I`m smart, but my grades are not good"', '"I feel like I`m being bullied by my peers at school."'],
            small_top:['For children who step out of the family fence and enter into another world, school life can be a challenge and an adventure. The Child and Adolescent Mental Health Center specializes in the diagnosis and treatment of common mental health disorders in children and adolescents, such as conduct disorder, learning disabilities, Asperger`s syndrome, and separation anxiety disorder.'],
            sub_context8:['In addition, neurofeedback therapy and psychological testing are conducted, and counseling and treatment for adult mental health are also available, not only for children and adolescents.'],
            sub_context7: ['Despite their high intelligence and unique interests, they often struggle to adapt to family or school life and experience significant disabilities. ', 'However, there have been cases where they later became university professors or artists.'],
            sub_context6: ['People with Aspergers syndrome have sufficient judgment and language skills, but they often fail in social interaction and emotional communication.','There is no fundamental cure for this condition currently, but it is necessary to improve their social adaptation skills and treat depression caused by repeated frustration through special education.'],
            sub_context5: ['If the separation anxiety is severe, it may be a solution to go to school with the child and wait outside the classroom or attend classes together for up to one month, rather than forcing them to go alone. If there is no improvement, it is recommended to seek counseling from a pediatric psychiatrist. Play therapy, art therapy, and parent education can be provided after identifying the cause through psychological tests, and medication therapy can also be applied.'],
            sub_context4: ['School phobia refers to cases where a child repeatedly refuses to go to school and becomes anxious or experiences panic attacks when forced to go.','Rather than fearing school itself, it can be said that the child is afraid of being separated from their mother. They may complain of physical symptoms such as stomach aches or headaches when it`s time for school in the morning or on weekends. If forced to go, they may become anxious, exhibit extreme resistance, or even try to hide or run away. In such cases, it is necessary to make going to school a rule for the child, regardless of what excuses they come up with.',],
            sub_context3: ['Since the causes of learning disabilities are diverse, it is important to identify the difficulties that the child is experiencing and find the underlying cause. Apart from attention deficit hyperactivity disorder, medication is not the primary treatment for learning disabilities. Adequate educational approaches and environmental and emotional support are important.','Occasionally, some parents consider their children to have learning disabilities when they do not. In today`s world, where parents tend to raise one or two children, it is common for parents to rush their children and have high expectations, leading to misconceptions about their children`s learning abilities.'],
            sub_context2: ['A learning disability refers to a situation where an individual has a normal or above-average intelligence quotient but experiences a lower academic performance due to functional abnormalities in the brain and nervous system.','It is a developmental disorder that occurs during the brain and nervous system`s developmental processes. Learning disabilities can appear in areas such as listening, thinking, speaking, reading, spelling, and mathematical calculations. In addition to learning disabilities, there are also "learning delays" that occur in children with an intelligence quotient below 70 or who have organic brain damage, and "learning underachievement" in those who have an intelligence quotient of about 75-85, but suffer from emotional or environmental problems.',],
            sub_context1: ['Attention Deficit Hyperactivity Disorder (ADHD), which has been gaining attention in various media outlets recently, is characterized by frequent talking, lack of stillness, and impulsivity, often resulting in careless mistakes.','It is common for children to show signs of being fussy or highly active from infancy, and ADHD is often detected when they begin group activities in kindergarten or elementary school. It is reported that ADHD is 3-4 times more prevalent in boys than girls. About 70-80% of cases are known to develop before the age of 4.','Experts attribute the causes of ADHD to genetic factors, abnormalities in neurotransmitters due to decreased prefrontal lobe function in the brain, brain injuries during birth, and so on. If symptoms arise, it is not the fault of the child or the parent, and they should not blame themselves. If the problem is not severe, environmental adjustment, parental counseling, and behavior modification methods should be prioritized without medication. However, in severe cases, medication such as central nervous system stimulants and antidepressants should be used.']  },
        {cate_no:0, 
            item_no:6, 
            img_src:'6_.jpg', 
            sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
            sub_context2:[
                'Specializing in gastrointestinal diseases (stomach, esophagus), gastritis, gastric ulcers, and reflux esophagitis', 
                'Specializing in pancreatic and biliary tract diseases, liver diseases', 
                'Upper Gastrointestinal Nerve Center, colonoscopy, endoscopic mucosal resection/ Gastrointestinal Nerve Center clinic'
            ] , 
            sub_context1: [
                'With the reality of Korean eating habits becoming more westernized, there has been an increasing trend in patients with gastrointestinal disorders.',
                'To provide high-quality medical services, ON Hospital has established a Gastrointestinal Nerve Center center based on an organic collaboration system of medical departments related to gastrointestinal diseases, such as gastroenterology, surgery, and radiology.',
                'The Gastrointestinal Nerve Center Center at ON Hospital has state-of-the-art medical staff, advanced medical equipment, and a sophisticated medical system in place to enable patients to receive high-level medical treatment quickly and comfortably.', 
                'In addition, to alleviate the increasing backlog of endoscopic exams due to the rising number of hospital visits by patients with gastrointestinal disorders, specialized medical staff for endoscopic exams have been trained and dispatched, and state-of-the-art medical equipment has been acquired for efficient management of personnel and equipment, ensuring differentiated endoscopic exams.', 
                'Based on the highest level of clinical experience and advanced technology in each field, we strive to provide world-class medical care.',
                'Therefore, the Gastrointestinal Endoscopy Center at the General Hospital will continue to make efforts to make patients more convenient and receive the best treatment.'
            ], 
            },
        {cate_no:0, 
            item_no:7, 
            img_src:'page-img1.jpg', 
            sub_title:['Department of Liver, Biliary and Pancreatic Surgery','Surgery', 'Digestive Endoscopy Center'], 
            black_bold:['Stomach and Colon Endoscopy Clinic', 'Liver and Bile Duct Clinic'],
            small_phone:['051) 607-0707', '051) 607-0230', '051) 607-0244,0257'],
            chk_text:[
                'The top-notch medical facility of university hospital grade with advanced technology is available', 
                'Immediate surgery and hospitalization one-stop service upon detection of a tumor', 
                'Reservations for upper and lower gastrointestinal endoscopies available on desired dates', 
                'Explanation of test results immediately after the examination', 
                'Specialized procedure for liver, biliary and pancreatic ERCP (Endoscopic Retrograde Cholangio-Pancreatography)', 
                'Ultrasonic disinfection of endoscopic equipment'
            ],
            sub_context1: [
                'This department specializes in treating diseases that occur in the most difficult areas of surgery, such as the liver, bile duct system, spleen, pancreas, and other organs', 
                'Professor Park Kwang-min has succeeded in liver, biliary, and pancreatic surgeries more than 10,000 times', 
                'Specialized in the treatment of stomach cancer, colorectal cancer, rectal cancer, and other large intestine diseases', 
                'Equipped with the highest specification and clearest image quality, using the Olympus CV290 equipment'
            ] 
        },
        {cate_no:0, 
            item_no:8, 
            img_src:'8_.jpg', 
            sub_title:['The following are the diseases and symptoms treated at the Neurology Center.', ''], 
            table_td:[
                'The center diagnoses and treats dementia and memory impairment, which have become social problems as society ages.',
                'The center identifies and treats the causes of seizure attacks that exhibit repetitive loss of consciousness and limb convulsions.', 
                'The center treats and prevents hemiplegia and language disorders caused by cerebral infarction and cerebral hemorrhage.', 
                'The center diagnoses and treats movement disorders such as tremors and Parkinson`s disease.', 
                'The center identifies and treats causes such as numbness in hands and feet, muscle weakness, muscle atrophy, facial paralysis, and drooping eyelids.', 
                'Common headaches can be an initial symptom of brain disease. The center distinguishes the causes of headaches and treats them.',
                'The center diagnoses and treats insomnia, sleep attacks, excessive daytime sleepiness, and sleep apnea.',
                'The center identifies and treats the causes of dizziness, which requires sophisticated neurological functions to maintain balance.', 
                'The center diagnoses and treats meningitis and encephalitis accompanied by fever, headache, and vomiting.', 
                'In addition to the above-mentioned diseases, the center diagnoses and treats neuropathic pain, multiple sclerosis, congenital or hereditary neurological disorders, and other related conditions.'
            ],
            table_th:[
                'Dementia', 
                'Epilepsy', 
                'Stroke', 
                'Movement disorders', 
                'Peripheral nerve and muscle disorders', 
                'Headache', 
                'Sleep disorders', 
                'Dizziness', 
                'Neurological inflammation', 
                'Other diseases'
            ],
            sub_context1: [
                'The Neurology Center at the ON Hospital diagnoses and treats diseases that occur in the brain and spinal cord (central nervous system), peripheral nerves, and muscles. The center also investigates the causes of neurological disorders and conducts research for better treatment methods.', 
                'With specialized clinics such as the Multiple Sclerosis Clinic, Epilepsy Clinic, Stroke Clinic, Peripheral Nerve and Muscle Disorders Clinic, as well as neurological psychology testing rooms, electroencephalogram testing rooms, and electromyography testing rooms, the Neurology Center strives to provide more specialized care and treatment.'
            ] 
        },
        {cate_no:0, 
            item_no:9, 
            img_src:'9_.jpg', 
            sub_title:['',''], 
            sub_context9: ['Located in the heart of Busan`s downtown Seomyeon district, On Hospital strives to provide high-quality emergency medical services to patients competing for the golden time through its 24-hour Cardiovascular and.'],
            sub_context8: ['In addition, the center operates with a collaborative system of specialized neurovascular and cardiovascular surgical teams to ensure early detection and systematic management of cerebrovascular diseases.'],
            sub_context7: ['The Cardiovascular and Cerebrovascular Center at On Hospital has introduced the Biplane Angio, a state-of-the-art vascular surgery equipment from Philips, which allows for clear and precise visualization of even the smallest veins through 3D imaging and reduces radiation exposure to patients by shortening examination time. The center provides treatment for various diseases, including vascular diseases of the arms and legs, spinal and spinal cord vessels, and central nervous system and cranial diseases such as spinal tumors.'],
            sub_context6: ['As important as treatment, the management methods for the heart, brain, blood vessels, etc. include regular exercise suitable for oneself, moderating salt and oily foods, refraining from overeating and smoking, and especially avoiding chronic diseases such as hypertension, diabetes, and hyperlipidemia.'],
            sub_context5: ['The Cardiovascular Center actively manages risk factors for strokes such as hypertension, diabetes, and smoking through collaboration with internal medicine, and performs tests such as magnetic resonance imaging (MRI) and magnetic resonance angiography (MRA) to examine the brain blood vessels, and examines the vascular condition very accurately and precisely through cerebral angiography via the femoral artery and treats it through interventional radiology.'],
            sub_context4: ['In addition, stroke refers to a condition where brain cells are damaged because nutrients and oxygen-carrying blood do not flow to the brain due to the brain blood vessels being blocked or ruptured. The Center specializes in preventing and treating strokes caused by damage to the part where the blood vessel that supplies blood to the brain is blocked or ruptured.'],
            sub_context3: ['Myocardial infarction is mainly caused by coronary artery sclerosis and is characterized by chest pain that lasts more than a few minutes. The Cardiovascular Center performs tests such as electrocardiograms, 24-hour electrocardiograms, echocardiography, exercise stress tests, CT scans, and MRI scans for patients complaining of chest pain, and if stenosis vessels are discovered through coronary artery angiography, intervention through coronary artery intervention is possible. In case of acute emergency, prompt intervention such as percutaneous coronary intervention and stent insertion is very important within the golden time (2 hours after vascular occlusion).'],
            sub_context2: ['Representative coronary artery diseases of the cardiovascular system such as myocardial infarction and angina, and cerebrovascular diseases such as stroke account for 80% of premature deaths, caused by complications with chronic diseases such as hypertension, diabetes, and hyperlipidemia or from environmental and occupational risk factors.'],
            sub_context1: ['Among the top 10 causes of death from disease in recent years, 7 are chronic diseases, and among them, cardiovascular diseases have the highest incidence. Aging is causing an increase in incidence rates, but in contrast, the fatality rate is decreasing due to the development of many treatment methods. However, the disability rate due to the aftermath of the disease is also on the rise. Appropriate management and treatment can reduce the incidence of the disease, and prompt early response is important in case of acute onset (such as myocardial infarction and stroke), and appropriate procedures and treatments can reduce disability rates.'] },
        {cate_no:0, 
            item_no:10,
            img_src:'10_.jpg', 
            sub_title:['1. Asthma', '2. Atopic Dermatitis', '3. Allergic Rhinitis'], 
            top_text:[
                'Allergy Center', 
                'is a place that specializes in treating diseases caused by hypersensitive immune reactions to various external substances.', 
                'Allergic reactions include respiratory allergies such as asthma, allergic rhinitis, and chronic cough, as well as skin allergies such as atopic dermatitis, urticaria, and angioedema. It also includes anaphylaxis, eosinophilic disorders, food, drug, bee sting, exercise allergies, and various complex symptoms.'
            ],
            sub_context1: [
                'The airways of asthma patients are sensitive and easily irritated. When irritated, the inside of the airways become swollen and produce mucus, and the muscles surrounding the airways contract, making the airways narrow. This narrowing of the airways can cause symptoms such as coughing, chest tightness, difficulty breathing, and wheezing.', 
                'Risk factors that contribute to asthma exacerbation include dust mites, pets, cockroaches, mold, pollen, respiratory infections such as colds and pneumonia, direct or indirect smoking, and indoor and outdoor air pollution. Symptoms of asthma include coughing or wheezing sounds that do not easily disappear and often recur. In some cases, breathing difficulty or coughing becomes severe during exercise and cannot continue.', 
                'To successfully manage asthma, it is essential to use prescribed medications regularly and accurately. Based on test results, each asthma patient undergoes individualized treatment such as medication and immunotherapy according to the severity and causes and triggering factors.',
                'It is a chronic and recurrent skin inflammation that mainly occurs in infants and children, characterized by itchy and distinctive distribution and appearance of skin lesions.', 
                'You also need to take good care of your environment to avoid the factors of deterioration.',
                'Itching is the most characteristic symptom, which is severe mainly in the early evening or at night, causing the baby to scratch the bedding or bedclothes continuously, resulting in blisters and scabs on the skin, and frequent secondary bacterial infections.',
                'Dry skin, infections, rough clothing, house dust mites, synthetic fibers and wool, and heat can exacerbate the itching of atopic dermatitis.',
                'Bathing is necessary to prevent skin infections and provide adequate skin moisturization, and if necessary, soap with moisturizing effects should be used.',
                'After bathing, apply enough moisturizer, keep your nails short, and make sure your hands do not touch your face. Soft cotton clothes are preferred, and wool should be avoided, and creating an environment without house dust mites can also be helpful.',
                'Suspected foods should be restricted, but random restrictions can lead to severe nutritional deficiencies, so only restrict the foods recommended by the doctor after examination.',
                'After exposure to an allergen, the mucous membrane of the nose undergoes an allergic inflammatory response in the stimulated area, causing allergic rhinitis.',
                'The main symptoms are consecutive sneezing, clear runny nose, nasal congestion, and itching.',
                'Sneezing and runny nose may improve in the afternoon after being severe in the morning. In addition, there may be itching and congestion around the eyes, headache, and decreased sense of smell.',
                'Common allergens include house dust mites, pet hair, food, and medication.',
                'In seasons, tree pollen, such as oak and birch, can be the cause in spring, and weed pollen, such as mugwort and pigweed, in autumn.',
                'Avoiding allergens is the most effective treatment, but it is practically difficult to avoid house dust mites and pollen. Therefore, it is necessary to control symptoms with appropriate medication and consider immunotherapy as a fundamental treatment.'
            ] 
        },
        {cate_no:0, 
            item_no:11,
            sub_title:['',''], 
             img_src:'11_.jpg', },
        {cate_no:0, 
            item_no:12,
             img_src:'12_.jpg', 
             sub_title:['Women`s Cancer Center',''], 
             sub_context2: ['Cervical cancer', 'Abnormal uterine bleeding', 'Menstrual irregularities', 'Cervical cancer vaccination'],
             sub_context1: ['Treatment of uterine fibroids and ovarian diseases', 'Endometriosis treatment', 'Specialized treatment for women`s health issues'] },
        {cate_no:0, 
            item_no:13,
             img_src:'13_.jpg', 
             sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'],
             sub_context4:['Breast Cancer Clinic, Endoscopic Breast Surgery Clinic'], 
             sub_context3:['To maintain our excellent level of care, we consistently conduct educational activities, including breast cancer support groups and nurse meetings.'],
             sub_context2:[
                'The Breast Center at ON Hospital`s most significant feature is its treatment methods that preserve the most beautiful breast after breast cancer surgery.', 
                'We perform minimally invasive surgeries with the highest level of breast conservation and minimal lymph node surgery using sentinel lymph node biopsy, endoscopic breast cancer surgery, and wide or breast resection when necessary. In addition, we perform cosmetic surgeries such as latissimus dorsi flap surgery or prosthetic implant surgery to achieve the best possible aesthetic outcome.'
            ],
             sub_context1: [
                'The Breast Center at ON Hospital specializes in the diagnosis and treatment of breast cancer and other breast diseases, which are the most common cancer among women worldwide and also the most prevalent cancer in women in Korea.', 
                'Breast cancer can be detected early, and if diagnosed early, the cure rate is up to 90%, making early screening crucial.', 
                'Our center is equipped with the latest breast imaging and ultrasound machines, essential for early screening. We also have various tools and equipment for tissue testing without surgery. ', 
                'Additionally, specialized nurses in the Breast Cancer Center provide psychological and rehabilitation education to improve the quality of life for breast cancer patients.'
            ] 
        },
        {cate_no:0, 
            item_no:14,
             img_src:'women_.png', 
             sub_title:['Breast and Thyroid Cancer Center',''], 
             chk_text:['One-stop medical service', 'Top medical staff', 'Treatment with the latest equipment'],
             middle_text:['From screening to reconstruction!', 'Mammotome tissue examination'],
             circle_text:['Surgery', 'Cancer treatment', 'Radiation therapy'],
             blue_text:'Available non-stop',
             sub_context1: ['Mammotome procedure: The latest technology that uses a thick needle to divide and remove various lumps or abnormal areas without causing incisions', '051) 607-0232'] },
        {cate_no:0, 
            item_no:15,
            sub_title:['',''], 
             img_src:'emergency.png' },
        {cate_no:0, 
            item_no:16,
             img_src:'16_.jpg', 
             sub_title:['Newest Hemodialysis Machines with High Satisfaction!',''], 
             phone_num:['Nephrology Department','(2F)', 'Artificial Kidney Surgery','(13F)'],
             phone_text:['051) 607-0209', '051) 607-0128,0020'],
             chk_text: ['The most comfortable hotel-like facilities in Busan!', '60 state-of-the-art dialysis machines!', 'Germany FMC 5008S 4.5V'] },
        {cate_no:0, 
            item_no:17,
             img_src:'17_.jpg', 
             sub_title:['Possible procedures',''], 
             chk_text:[
                'Clinic hours: Mon-Fri (closed on Saturdays)', 
                'Inquiries: 051-607-0281, 0229', 
                'Please note that clinic hours are subject to change, and all procedures require advance reservation. Please call to make an appointment before visiting.'
            ],
             top_text:['Intervention, also known as interventional therapy, is an advanced medical field that uses real-time imaging techniques such as fluoroscopy or ultrasound to create a path to the diseased area using a thin needle or catheter with a diameter of about 1-2mm, and treats the disease through it. Compared to traditional treatment methods, it minimizes patient risks as it does not require general anesthesia or skin incisions.'],
             sub_context1: [
                'Chemotherapy for hepatic artery cancer', 
                'Treatment for peripheral arterial disease', 
                'Vascular reconstruction for hemodialysis arteriovenous fistulas', 
                'Cholecystectomy', 
                'Percutaneous nephrolithotomy, percutaneous renal biopsy', 
                'Central venous catheterization (POCC, anticancer port insertion)', 
                'Tissue biopsy (ultrasound or CT-guided)', 
                'Endometrial ablation for uterine fibroids', 
                'Transurethral resection of the prostate for benign prostatic hyperplasia', 
                'Sclerotherapy for cysts', 
                'Pelvic congestion syndrome', 
                'Varicocele', 
                'Stent insertion for esophageal, gastric, and duodenal stenosis'
            ] 
        },
        {cate_no:0, 
            item_no:18,
             sub_title:['',''], 
             link:['https://bryonsilver.github.io/ON_Hospital/on_hospital/medi_center.html?cen_v=13'],},
        {cate_no:0, 
            item_no:19,
             img_src:'19_.jpg', 
             sub_title:['',''], 
             sub_context4: ['In addition, diagnostic facilities such as electromyography rooms, gait and motion analysis rooms, bio-dex rooms, and nerve conduction study rooms enable accurate diagnosis and treatment. Furthermore, specialized pain treatments such as IMS therapy and taping therapy are also provided.'],
             sub_context3: ['Facilities include exercise therapy rooms, physical therapy rooms, hydrotherapy rooms, occupational therapy rooms, as well as special facilities for specific treatments such as Vojta therapy, Bobath therapy, prosthetics/orthotics clinic, spasticity clinic, and frozen shoulder clinic.'],
             sub_context2: ['Various specialized treatments are provided for specific areas such as stroke, spinal cord injury, traumatic brain injury, pain, prosthetics and orthotics, electrodiagnosis, pediatric rehabilitation, and physical and biomechanical therapy.'],
             sub_context1: ['The Rehabilitation Therapy Center is a specialized treatment center that evaluates and treats individuals with functional impairments to maximize their physical, mental, and social abilities, as well as their potential for hobbies, occupations, and education, enabling them to live as close to a normal life as possible under the given conditions.'] },
        {cate_no:0, 
            item_no:20,
             img_src:'20_.jpg', 
             sub_title:['INTRODUCTION','SPECIALIZED CLINICS'], 
             sub_context3: [
                'Urological Tumor Clinic, Urinary Stone Clinic, Urinary Incontinence Clinic, Pediatric Urology Clinic', 
                'Bladder Surgery, Laparoscopic Surgery, Endoscopic Surgery, Urological Trauma Clinic, Urinary Tract Infection Clinic'
            ],
             sub_context2: ['ON Hospital`s Men`s Center is led by a team of specialized medical professionals, including clinical professors from university hospitals. They operate various specialized clinics and play a leading role in each field, striving to provide international-level medical care.'],
             sub_context1: [
                'The Prostate and Urinary Dysfunction Center at ON Hospital was established to provide specialized diagnosis and treatment for male urinary and reproductive system disorders.',
                'The center deals with diseases such as urological tumors, urinary stones, urinary incontinence, pediatric urology, neurogenic bladder, male medicine, urological trauma, and urinary tract infections.'
            ]  
        },
        {cate_no:0, 
            item_no:21,
             img_src:'21_.jpg', 
             sub_title:['Prostate Cancer Center', 'Led by professors specialized in the field of medicine', 'Holmium YAG laser surgical equipment'], 
             check_box:['Hematuria Center', 'Urinary Incontinence Clinic', 'Prostate Cancer'],
             small_title:'Features',
             special:[
                '① Removal of stones that are difficult to remove with extracorporeal shock wave lithotripsy',
                '② One-time treatment is possible',
                '③ Shorter recovery period after treatment'
            ],
             sub_context1: ['Holmium YAG laser surgical equipment that is safe and effective in removing prostate hypertrophy tissue, a new treatment for prostate hypertrophy called Holmium Laser Enucleation of the Prostate (HoLEP)'] },
        {cate_no:0, 
            item_no:22,
             img_src:'22_.jpg', 
             sub_title:[
                'With cooperation among departments of orthopedics, neurosurgery, rehabilitation medicine, and anesthesia pain medicine, ', 
                'the center provides total care where diagnosis, surgery, and rehabilitation are carried out as one to address ', 
                'the difficulty of patients in choosing the right medical department and provide comprehensive treatment'
            ], 
             circle_num:['01','02','03','04','05','06','07','08','09'],
             circle_text:[
                'Minimally invasive endoscopic microscopic surgery is performed', 
                'Minimally invasive arthroscopic surgery is performed without blood loss', 
                'Short surgery time and fast recovery', 
                'Minimization of post-anesthetic aftereffects through local anesthesia', 
                'Latest spine and joint rehabilitation exercise center', 
                'Scientific exercise prescription program using the latest equipment', 
                'Personalized exercise prescription program with 1:1 expert consultation', 
                'Spine and joint strengthening program', 
                'Post-surgical relapse prevention program'
            ],
             sub_context1: [
                'Arthroscopic surgery is possible with accurate diagnosis and treatment since only 3-4 small holes are created around the joint, allowing direct observation through a miniaturized microscope.', 
                'In addition, it leaves almost no unsightly scars and allows for a quick return to daily life. Not only for partial tears of rotator cuffs, shoulder joint dislocation, calcific tendinitis, joint ligament injuries, but also for severe rotator cuff tears, minimally invasive surgery using arthroscopy is possible.'
            ] },
        {cate_no:0, 
            item_no:23,
             img_src:'23_.jpg', 
             sub_title:['What is ultrasound diagnosis?', 'Advantages of musculoskeletal ultrasound examination'], 
             small_top:[
                'Ultrasound diagnosis is a treatment method that repairs and strengthens ligament damage in the spine or joint areas.',
                'The musculoskeletal system includes muscles, ligaments, cartilage, bones, and related nerves or blood vessels, and ultrasound examinations of these are called musculoskeletal ultrasound. It can quickly and easily confirm inflammation, damage, and degenerative changes in joints, ligaments, and more.'
            ],
             sub_context1: [
                'It is a non-invasive examination that does not require injections or incisions and usually causes little pain.',
                'It can be performed when X-ray or other radiation tests are difficult to confirm and is harmless to the body as there is no need for radiation exposure.',
                'It is considered safe for both pregnant women and fetuses.',
                'It is a helpful examination that assists in procedures such as tissue examinations by providing real-time images.',
                'It can be applied to a wide range of areas, is easy to use, and generally costs less than other tests such as CT or MRI.'
            ] },
        {cate_no:0, 
            item_no:24,
             img_src:'24_.jpg', 
             sub_title:[
                'Increasing Trend in Pancreatic and Biliary Diseases, What are the Causes?',
                'Why is the survival rate for pancreatic and bile duct cancer low?', 
                'Treatment for pancreatic and bile duct diseases', 
                'Pancreatic and Biliary Tract Diseases', 
                'Diagnosis of Pancreatic and Biliary Tract Diseases'
            ], 
             bold_top: [
                'Diagnosis and Treatment of Pancreatic and Biliary Diseases', 
                'Endoscopic Ultrasound (EUS)',
                'Endoscopic Retrograde Cholangiopancreatography (ERCP)'
            ],
             sub_context5: [
                '1. EUS (Endoscopic Ultrasound)- A revolutionary turning point in the early detection of pancreaticobiliary diseases',
                'A technique that uses high-resolution imaging and various techniques to access the closest area of the gallbladder, bile duct, and pancreas through the duodenum using ultrasound attached to the end of the endoscope for early and accurate diagnosis. There is no exposure to radiation, and real-time tissue and cell sampling can be performed during the examination, allowing simultaneous pathological confirmation. It is the most suitable method for the early detection of pancreatic cancer of less than 1 cm and for diagnosing pancreatic duct cancer with revolutionary diagnostic techniques as it allows for both examination and tissue sampling',
                '2. ERCP (Endoscopic Retrograde Cholangiopancreatography)-Simultaneous diagnosis and treatment, high-difficulty endoscopic procedure',
                'A high-difficulty procedure that uses a special endoscope called the duodenoscope to access the duodenal papilla, where the pancreatic duct and bile duct meet, and then captures images of the pancreatic and bile ducts to make an accurate diagnosis. If a lesion is detected, real-time removal of gallstones, bile duct drainage, pancreatic duct stone removal, and pancreatic duct drainage can be performed.'
            ],
             sub_context4: [
                'Both diseases can be cured through surgical removal if detected early. However, with an early diagnosis rate of less than 20%, and even if the patient is a surgical candidate, elderly or those with underlying diseases hesitate to undergo surgery if extensive liver resection or multiple organ removal is required, especially because the recurrence rate after surgery is very high, and the 5-year survival rate is less than 5%, indicating a poor prognosis. Therefore, regular monitoring and testing for pancreatic and biliary diseases are crucial for early diagnosis and lesion detection.',
                'For patients with inoperable gallbladder and bile duct cancer, bile duct drainage and anti-cancer treatment are carried out as bile duct obstruction is a necessary accompanying condition.',
                'In some cases, localized lesions can be eliminated through regional chemotherapy to maintain bile duct drainage for a longer time and improve prognosis with periodic anti-cancer treatment.'],
             sub_context3: [
                'Both diseases can be cured through surgical resection if detected early, but the early detection rate is less than 20%. Even if surgery is indicated, extensive liver resection or multi-organ resection may be necessary, causing elderly or comorbid patients to hesitate to undergo surgery. In particular, the high recurrence rate after surgery results in a poor prognosis with a five-year survival rate of less than 5%. Therefore, regular management is necessary for pancreatic and bile duct examinations and lesion detection for early diagnosis.',
                'In cases where surgery is not possible for gallbladder and bile duct cancer, biliary drainage and chemotherapy are performed concurrently because biliary obstruction is essential. In some patients, the local lesion can be eliminated through wide-field dynamic therapy, which maintains biliary drainage for a longer period and improves the prognosis through periodic chemotherapy.'],
             sub_context2: [
                'The main reason is the difficulty of early detection, which correlates with the difficulty of achieving a cure through surgery. The pancreas and bile ducts are located deep within the body, making it difficult to detect abnormalities early on through common diagnostic techniques such as blood tests and abdominal ultrasounds. Additionally, due to the nature of these organs, symptoms typically do not appear until the disease has progressed significantly, leading many individuals to believe they are healthy until the disease has already advanced considerably. Although the widespread use of diagnostic tools such as CT and MRI has increased diagnostic rates, the early detection rate is still less than 20%, and the five-year survival rate is extremely poor at less than 5%.',
                'Recently, the proliferation of endoscopic ultrasound (EUS) has made it possible to detect small pancreatic tumors less than 1cm in size early on, which is expected to contribute to a revolutionary improvement in the prognosis for pancreatic and bile duct cancer.'],
             sub_context1: [
                'Pancreatic cancer, although ranking 9th in incidence rate in Korea as of 2018, is a relatively common disease ranking within the top 3 in the United States. The incidence of pancreatic cancer is gradually increasing in Korea, and the main causes are excessive intake of fat and protein due to Westernized eating habits, as well as an unexplained increase in pancreatic cysts. Excessive intake of fatty foods can cause damage to pancreatic duct cells and pancreatic enzyme-secreting cells, leading to malignant tumors through genetic mutations.', 
                'Meanwhile, mucinous pancreatic cysts have a high potential for malignancy as time goes by after onset, but if detected early and thoroughly tracked, there is a higher chance of complete recovery even if pancreatic cancer develops. Biliary tract cancer has a high incidence rate, especially in the Busan, Ulsan, and Gyeongsangnam-do regions, due to infection with Clonorchis sinensis, which can lead to biliary tract cancer after an infection acquired by eating raw freshwater fish repeatedly.'] },
        {cate_no:0, 
            item_no:25,
             img_src:'page-img10.jpg', 
             sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
             pro_context5:'Orthodontic extraction, corticotomy for accelerated orthodontics, palate expansion, surgical exposure of impacted teeth, bone augmentation surgery',
             pro_context4:'Cleft lip and palate, craniofacial deformity',
             pro_context3:'Facial fracture, malocclusion after trauma, tooth/jawbone reconstruction surgery after trauma (implants)',
             pro_context2:'Square jaw, protruding mouth surgery, no chin, aristocratic surgery, chin tip surgery',
             pro_context1:['Upper and lower jaw surgery, chin augmentation, facial asymmetry, long face, gum exposure, open bite, no chin (orthodontic correction surgery, minimal correction surgery, presurgical correction surgery, non-correction surgery)'],
             pro_title:[
                'Jaw correction (Maxillofacial correction) Clinic',
                'Facial Contouring Clinic',
                'Maxillofacial Trauma Clinic',
                'Craniofacial Deformity Clinic',
                'Oral and Maxillofacial Surgery'
            ],
             sub_context5:['Unlike the conventional treatment process which consisted of pre-surgical orthodontic treatment (over 1 year), surgery, and post-surgical orthodontic treatment (6 months), the pre-surgical orthodontic treatment can be minimized or avoided by analyzing the teeth and bones accurately to determine if surgical correction is possible. This approach, known as pre-surgical orthodontic treatment, enables surgery to be performed first, followed by post-surgical orthodontic treatment, resulting in a significant reduction of the overall treatment period to approximately 6 months to 1 year, compared to the previous treatment period of around 2 years.'],
             sub_context4:['According to precise analysis of teeth and skeletal structure, patients who are suitable for orthognathic surgery can undergo surgery first or undergo minimal orthodontic correction before surgery, which reduces the discomfort and overall treatment period during pre-surgical orthodontic correction of more than 1 year, surgery, and post-surgical orthodontic correction of 6 months, which was the conventional treatment. The biggest advantage of orthognathic surgery is that the treatment period can be shortened from 2 years to about 6 months to 1 year by performing surgery first and then orthodontic correction after surgery.'],
             sub_context3:['Using state-of-the-art equipment, Facial Contouring Center at ON Hospital performs preoperative analyses (2D cephalometry/3D CT/model analysis) to establish the best surgical plan tailored to each patient.'],
             sub_context2:['The patient-centered center utilizes a one-stop/one-way (outpatient/preoperative preparation/inpatient/surgery) system and offers single and double occupancy rooms for patients undergoing jaw and facial (maxillofacial) surgery, minimizing discomfort by reducing complex processes such as admission/waiting/repeated visits.'],
             sub_context1: ['Facial Contouring Center at ON Hospital is composed of an oral and maxillofacial surgical team, as well as a team of otolaryngologists and anesthesiologists, working together in a systematic approach to provide the highest level of care and deliver precise evaluations, treatments, and surgical outcomes.']},
        {cate_no:0, 
            item_no:26,
             img_src:'26_.jpg', 
             sub_title:['', 'SPECIALTY'], 
             sub_context2: [
                'Surgery for cancer and thoracic endoscopic surgery for lung and chest tumors',
                'Surgical and non-surgical treatment of hyperhidrosis (excessive sweating in the hands, feet, and armpits)',
                'Thoracic wall deformities such as pneumothorax, varicose veins in the lower extremities, and pectus excavatum (sunken chest)'
            ],
             sub_context1: [
                'We diagnose and perform surgeries on important organs that are essential to life, such as the heart, lungs, esophagus, and aorta in Busan and Gyeongnam', 
                'We have succeeded in performing the first thoracoscopic lobectomy surgery in the region'
            ]},
        {cate_no:0, 
            item_no:27,
             img_src:'27_.jpg', 
             sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
             bold:'Cancer Radiation Treatment',
             sub_context5: ['- Comprehensive Hospital Radiation Therapy Guide.pdf', 'Download'],
             sub_context4: [
                'Simply exposing radiation does not constitute radiation therapy.',
                'The radiation dose and treatment period are determined by considering factors such as the size of the tumor, the degree of spread, the shape and differentiation degree of the tumor, and the sensitivity of the tumor to radiation. In addition, the patient`s health status must also be taken into account.',
                'Therefore, for radiation therapy, skilled medical staff, diagnostic equipment, and advanced radiation therapy equipment are essential. Moreover, it is necessary to consider whether various treatment techniques can be performed to choose an appropriate treatment technique for the disease, and advanced technical skills are required to minimize the impact on normal cells.'
            ],
             sub_context3: [
                'With the development of radiation therapy techniques, the amount of radiation that is given to normal tissue around the tumor has been greatly reduced compared to the past, and high doses of radiation can now be applied only to the tumor tissue, greatly increasing the control rate of the tumor while keeping the complications associated with radiation therapy low. ',
                'Radiotherapy plays a major role in cancer treatment, with 60% of all cancer patients receiving radiation therapy in these advanced countries.'
            ],
             sub_context2: [
                'Radiation therapy is a treatment that kills cancer cells by irradiating high-energy radiation through a radiation-emitting device (linac therapy machine) or a radioactive isotope.',
                'The radiation used in radiation therapy has a very short wavelength and high energy, and when it is irradiated into the human body, it causes degeneration of nucleic acids, killing tumor cells. When radiation is focused on cancer cells, it destroys them and prevents them from multiplying any further.',
                'In this case, normal cells surrounding the cancer cells are also affected by radiation, but normal cells have the advantage of recovering faster than tumor cells, and most of the damage can be quickly recovered, minimizing the impact. Radiation is more effective in destroying tissues that grow rapidly, such as cancer cells.'
            ],
             sub_context1: ['Cancer radiation therapy is one of the three major cancer treatments, along with surgery and chemotherapy, which uses radiation to treat patients as a clinical medicine method.']  },
        {cate_no:0, 
            item_no:28,
             img_src:'28_.jpg', 
             sub_title:[
                '"This is how ON Hospital`s hospice palliative care ward operates."',
                'Misconceptions and Truths about Hospice Palliative Care'
            ], 
             top_small:'Hospice palliative care services aim to improve the quality of life for terminally ill cancer patients by actively treating and caring for their physical symptoms, as well as helping with their psychological, social, and spiritual difficulties, rather than giving up on them.',
             top_li:[
                'Designated by the Ministry of Health and Welfare for hospice palliative care ward operations', 
                'Providing medical helpers at a minimum cost of 5% self-payment for maximum efficiency', 
                'Providing medical helpers at a minimum cost of 5% self-payment for maximum efficiency!', 
                'Operating the best facilities and comfortable environments for hospice care'
            ],
             main_title:[
                'Hospice palliative care is about giving up on life and waiting for death?', 
                'There is nothing to do at hospice palliative care facilities?', 
                'Families cannot stay with patients at hospice palliative care facilities?', 
                'Hospice palliative care is expensive?'
            ],
             main_num:['1', '2', '3', '4'],
             main_red_text:'NO! That is not true!',
             sub_context4: [
                'Health insurance is applicable, and cancer patients are only responsible for 5% of the cost.', 
                'However, non-insured items, such as higher room rates or additional fees, may require some additional cost.'
            ] ,
             sub_context3: ['Families can stay together, and can also receive help with their psychological and social difficulties.'] ,
             sub_context2: ['Hospice palliative care specialists manage pain and symptoms related to the patient`s suffering, and offer a variety of programs, such as psychotherapy, massage therapy, music therapy, and art therapy, to help patients lead meaningful lives.'] ,
             sub_context1: [
                'This medical service aims to improve the quality of life by actively treating physical symptoms, such as pain, vomiting, respiratory distress, and other psychological, social, and spiritual difficulties through a team of specialists in each field.', 
                'When the symptoms are controlled, patients can return to their daily lives.'
            ] },
        {cate_no:0, 
            item_no:29,
             img_src:'', 
             sub_title:['#Safe Hospital Treatment &nbsp; #Negative Pressure System &nbsp; #Organic Collaboration System'], 
             circle_border:'Respiratory, Allergy, and Tuberculosis specialist from a professorial background',
             circle_text:['Pneumonia', 'Lung cancer', 'Chronic obstructive pulmonary disease COPD'],
             sub_context3:['The main areas of treatment are chronic obstructive pulmonary disease (COPD), bronchial asthma, lung cancer, pneumonia, pulmonary tuberculosis, chronic cough, bronchiectasis, interstitial lung disease, respiratory failure, pleural diseases (pneumothorax, pleurisy, pleural effusion, empyema), esophageal cancer, mediastinal tumors, bronchiolitis obliterans, flail chest, and airway obstruction. In the case of lung cancer diagnosis, we provide regular and continuous management. All of our respiratory center medical staff promise to do our best to relieve your pain and solve your problems for the benefit of our patients.'],
             sub_context2:[
                'Respiratory centers consist of departments of respiratory medicine and thoracic surgery, enabling accurate diagnosis, treatment, and surgery of diseases in a timely and accurate manner.', 
                'In addition, through collaboration with related DEPARTMENT, specialists from various fields can gather to receive patient-centered care.'
            ],
             sub_context1: [
                'As our society ages, the number of patients with severe respiratory diseases is rapidly increasing.',
                'In response to this trend, respiratory centers are being established and operated to provide efficient medical care.'
            ] 
        },
        {
            cate_no:0, 
            item_no:30,
            number: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
            ],
            title: [
                '< Mailbox 5/4 > - A letter from the guardian',
                '< Birthday Party 4/14 > - On General Hospital Hospice Ward Program',
                '< Meal Gift 3/21 > - On General Hospital Hospice Ward Program',
                '< Tea Ceremony 3/14 > - On General Hospital Hospice Ward Program',
                '< Art Therapy 3/13 > - On General Hospital Hospice Program',
                'On General Hospital Hospice Ward - Preview',
            ],
            writer: [
                'ON Group Medical Foundation ON Hospital',
                'ON Group Medical Foundation ON Hospital',
                'ON Group Medical Foundation ON Hospital',
                'ON Group Medical Foundation ON Hospital',
                'ON Group Medical Foundation ON Hospital',
                'ON Group Medical Foundation ON Hospital',
            ],
            date : [
                '2023.05.05',
                '2023.04.18',
                '2023.04.18',
                '2023.04.12',
                '2023.04.12',
                '2023.04.12',
            ],
        },
    ]
]

const CENT_TITLE = [
    [
        {
            cate_no:0, 
            item_no:1, 
            title:'Hepatobiliary Pancreatic / Gastric / Colorectal Cancer', 
            icon_src:'medi_w_cetner_1', 
            name:'간담췌외과 위 대장암',
            doctors_name:[
                'Park Kwang-min, <span>Professor</span>',
                'Kim Dong-heon, <span>Professor</span>',
                'Lee Sang-yeop, <span>Professor</span>',
                'Moon Ki-myung, <span>Professor</span>',
                'Park Yo-han, <span>Professor</span>',
                'Lee Kangho, <span>Professor</span>',
                'Ko Sang-hwa, <span>Professor</span>',
                'Ju Jae-woo, <span>Director</span>',
            ],
            doctors_link:[
                'cate=2&item=1',
                'cate=19&item=6',
                'cate=2&item=3',
                'cate=2&item=5',
                'cate=19&item=3',
                'cate=20&item=3',
                'cate=19&item=5',
                'cate=19&item=8',
            ],
        },
        {
            cate_no:0, 
            item_no:2, 
            title:'Liver Center', 
            icon_src:'medi_w_cetner_2', 
            name:'간센터',
            doctors_name:[
                'Han Sang-Young, Chief of Liver Center',
                'Choi Jong-cheol, Professor',
            ],
            doctors_link:[
                'cate=3&item=2',
                'cate=18&item=4'
            ],
        },
        {
            cate_no:0, 
            item_no:3, 
            title:'Infection', 
            icon_src:'medi_w_cetner_3', 
            name:'감염센터',
            doctors_name:[
                'O Mu-Young, Director',
                'Im Soo Kwak, Professor',
                'Jong-Ae Son, Head of Dept.',
                'Eun Myoung, Head of Dept.'
            ],
            doctors_link:[
                'cate=10&item=1',
                'cate=14&item=1',
                'cate=23&item=1',
                'cate=3&item=5'
            ],
        },
        {
            cate_no:0, 
            item_no:4, 
            title:'Proctology', 
            icon_src:'medi_w_cetner_4', 
            name:'대장항문센터',
            doctors_name:[
                'Ko Sang-hwa, Head of Dept.',
                'Ju Jae-woo, Head of Dept.'
            ],
            doctors_link:[
                'cate=19&item=5',
                'cate=19&item=8'
            ],
        },
        {
            cate_no:0, 
            item_no:5, 
            title:'Pediatrics & Adolescent Mental Health', 
            icon_src:'medi_w_cetner_5', 
            name:'소아청소년 정신건강센터',
            doctors_name:[
                'Kim Sang-yeop, Director',
                'Lee Soo-jin, Head of Dept.'
            ],
            doctors_link:[
                'cate=21&item=1',
                'cate=21&item=2'
            ],
        },
        {
            cate_no:0, 
            item_no:6, 
            title:'Gastrointestinal <br>Nerve Center', 
            icon_src:'medi_w_cetner_6', 
            name:'소화내시경센터',
            doctors_name:[
                'Eun-Taek Park, Director of Center',
                'Han Sang-Young, Director of Center',
                'Eun Myoung, Head of Dept.',
                'Kim Yeon-woo, Head of Dept.',
                'Park Cheol-woo, Head of Dept.',
                'Kim Dong-heon, Professor',
                'Choi Jong-cheol, Professor',
                'Yoo Heung, Ph.D.',
                'Ko Guihan, Head of Dept.'
            ],
            doctors_link:[
                'cate=24&item=1',
                'cate=3&item=2',
                'cate=3&item=5',
                'cate=3&item=3',
                'cate=3&item=4',
                'cate=19&item=6',
                'cate=18&item=4',
                'cate=3&item=6',
                'cate=0&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:7, 
            title:'Gastrointestinal Cancer Surgery', 
            icon_src:'medi_w_cetner_7', 
            name:'소화기암수술센터',
            doctors_name:[
                'Kim Dong-heon, Professor',
                'Park Kwang-min, Professor',
                'Lee Sang-yeop, Professor',
                'Kim Yeon-woo, Head of Dept.',
                'Park Cheol-woo, Head of Dept.',
                'Eun Myoung, Head of Dept.',
                'Ju Jae-woo, Head of Dept.',
                'Ko Sang-hwa, Head of Dept.',
                'Eun-Taek Park, Director of Center',
                'Han Sang-Young, Director of Center'
            ],
            doctors_link:[
                'cate=19&item=6',
                'cate=2&item=1',
                'cate=2&item=3',
                'cate=3&item=3',
                'cate=3&item=4',
                'cate=3&item=5',
                'cate=19&item=8',
                'cate=19&item=5',
                'cate=24&item=1',
                'cate=3&item=2',
            ],
        },
        {
            cate_no:0, 
            item_no:8, 
            title:'Neurology', 
            icon_src:'medi_w_cetner_8', 
            name:'신경센터',
            doctors_name:[
                'Sohn-gi Roh, Vice Chief of Neurology',
                'Sang-uk Ha, Head of Dept.'
            ],
            doctors_link:[
                'cate=12&item=1',
                'cate=12&item=2'
            ],
        },
        {
            cate_no:0, 
            item_no:9, 
            title:'Cardio Cerebrovascular', 
            icon_src:'medi_w_cetner_9', 
            name:'심뇌혈관센터',
            doctors_name:[
                'Jae-Young Choi, Chief of Neurosurgery Center',
                'Myung-Ki Lee, Head of Dept.',
                'Hyun-Kook Lee, Director of Internal Medicine',
                'Kim Soo-hee, Head of Dept.',
                'Yoon Sung Jo, Head of Dept.',
                'Seung-Ryul Jung, Head of Dept.',
            ],
            doctors_link:[
                'cate=13&item=2',
                'cate=13&item=1',
                'cate=15&item=1',
                'cate=13&item=4',
                'cate=15&item=2',
                'cate=13&item=3',
            ],
        },
        {
            cate_no:0, 
            item_no:10, 
            title:'Allergy', 
            icon_src:'medi_w_cetner_10', 
            name:'알레르기 센터',
        },
        {
            cate_no:0, 
            item_no:11, 
            title:'Cancer Rehab Program', 
            icon_src:'medi_w_cetner_11', 
            name:'암재활프로그램',
            doctors_name:[
                'Kwon Hyuk-chan, Director of the Anti-cancer Center',
                'Eun Myoung, Head of Dept.',
                'Lee Kangho, Head of Dept.',
            ],
            doctors_link:[
                'cate=26&item=2',
                'cate=3&item=5',
                'cate=20&item=3'
            ],
        },
        {
            cate_no:0, 
            item_no:12, 
            title:'Women`s Cancer', 
            icon_src:'medi_w_cetner_12', 
            name:'여성암센터',
            doctors_name:[
                'Kim Ji-yeon, Head of Dept.',
                'Kim Seok-kwon, Director',
                'Han Bong-joo, Head of Dept.'
            ],
            doctors_link:[
                'cate=8&item=1',
                'cate=9&item=1',
                'cate=9&item=2'
            ],
        },
        {
            cate_no:0, 
            item_no:13, 
            title:'Breast/Thyroid Cancer', 
            icon_src:'medi_w_cetner_14', 
            name:'유방 갑상선암 센터',
            doctors_name:[
                'Kim Seok-kwon, Director',
                'Ryu Sung-yeol, Cancer',
                'Kim Mikyung, Head of Dept.',
                'Kim Ji-yeon, Head of Dept.',
                'Jong-Ae Son, Head of Dept.',
                'Choi Ki-bok, Director',
                'Kwon Hyuk-chan, Prof.',
            ],
            doctors_link:[
                'cate=9&item=1',
                'cate=6&item=1',
                'cate=3&item=9',
                'cate=26&item=2',
                'cate=23&item=1',
                'cate=26&item=2'
            ],
        },
        {
            cate_no:0, 
            item_no:14, 
            title:'Breast Cancer', 
            icon_src:'medi_w_cetner_14', 
            name:'유방암센터',
        },
        {
            cate_no:0, 
            item_no:15, 
            title:'Emergency Medical', 
            icon_src:'medi_w_cetner_15', 
            name:'응급의료센터',
        },
        {
            cate_no:0, 
            item_no:16, 
            title:'Bioartificial Kidney', 
            icon_src:'medi_w_cetner_16', 
            name:'인공신장센터',
            doctors_name:[
                'Im Soo Kwak, Professor',
                'Ha Kyung Jeon, Professor'
            ],
            doctors_link:[
                'cate=14&item=1',
                'cate=3&item=8'
            ],
        },
        {
            cate_no:0, 
            item_no:17, 
            title:'Intreventional Surgery', 
            icon_src:'medi_w_cetner_17', 
            name:'인터벤션센터',
            doctors_name:[
                'Choi Ki-bok, Director'
            ],
            doctors_link:[
                'cate=23&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:18, 
            title:'Funeral Home/Mortuary', 
            icon_src:'medi_w_cetner_18', 
            name:'장례식장',
        },
        {
            cate_no:0, 
            item_no:19, 
            title:'Rehabilitation Therapy ', 
            icon_src:'medi_w_cetner_19', 
            name:'재활치료센터',
            doctors_name:[
                'Gu Ja-won, Hospital director',
                'Kim Tae-hee, Head of Dept.',
                'Jae-Young Choi, Director of Center',
                'Myung-Ki Lee, Professor',
                'Sohn-gi Roh, Vice Chief of Neurology',
                'Jung Mi Cho, Head of Dept.',
                'Lee Dae-hee, Team manager',
            ],
            doctors_link:[
                'http://standon.co.kr/board_dUOF52/767',
                'http://standon.co.kr/board_dUOF52/237',
                'cate=13&item=2',
                'cate=13&item=1',
                'cate=12&item=1',
                'cate=30&item=1',
                '#',
            ],
        },
        {
            cate_no:0, 
            item_no:20, 
            title:'Prostate & Dysuria', 
            icon_src:'medi_w_cetner_20', 
            name:'전립선 배뇨장애 센터',
            doctors_name:[
                'Jae-Sik Kim, Head of Dept.'
            ],
            doctors_link:[
                'cate=7&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:21, 
            title:'Prostate Cancer', 
            icon_src:'medi_w_cetner_21', 
            name:'전립선암센터',
        },
        {
            cate_no:0, 
            item_no:22, 
            title:'Spondyloarthropathy', 
            icon_src:'medi_w_cetner_22', 
            name:'척추관절센터',
            doctors_name:[
                'Kim Yoon-joon, Medical Director of Orthopedics Dept.',
                'Kim Dong-jun, Head of Dept.',
                'Yoon Sung-hoon, Vice Chief of Orthopedics Dept.'
            ],
            doctors_link:[
                'cate=22&item=2',
                'cate=22&item=3',
                'cate=22&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:23, 
            title:'Ultrasonic diagnosis', 
            icon_src:'medi_w_cetner_23', 
            name:'초음파진단센터',
            doctors_name:[
                'Choi Ki-bok, Director',
                'Choi Jong-cheol, Head of Dept.',
                'Kim Eun-mi, Head of Dept.',
                'Choi Jeong-hyeon, Head of Dept.',
                'Yoo Heung, PH.D.'
            ],
            doctors_link:[
                'cate=23&item=1',
                'cate=18&item=4',
                'cate=18&item=3',
                'cate=18&item=2',
                'cate=3&item=6',
            ],
        },
        {
            cate_no:0, 
            item_no:24, 
            title:'Pancreatobiliary Cancer', 
            icon_src:'medi_w_cetner_24', 
            name:'췌장담도센터',
            doctors_name:[
                'Eun-Taek Park, Director of Center'
            ],
            doctors_link:[
                'cate=24&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:25, 
            title:'Maxillofacial Surgery', 
            icon_src:'medi_w_cetner_25', 
            name:'턱얼굴수술센터',
            doctors_name:[
                'Eui Jeong Lee, Head of Dept.'
            ],
            doctors_link:[
                'cate=25&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:26, 
            title:'Lung Cancer', 
            icon_src:'medi_w_cetner_26', 
            name:'폐암수술센터',
        },
        {
            cate_no:0, 
            item_no:27, 
            title:'Chemotherapy Radiation', 
            icon_src:'medi_w_cetner_27', 
            name:'항암방사선치료센터',
            doctors_name:[
                'Ryu Sung-yeol, Director',
                'Kwon Hyuk-chan, Director'
            ],
            doctors_link:[
                'cate=9&item=1',
                'cate=26&item=2'
            ],
        },
        {
            cate_no:0, 
            item_no:28, 
            title:'Hospice & Palliative Care', 
            icon_src:'medi_w_cetner_28', 
            name:'호스피스완화의료병동',
            doctors_name:[
                'Kwon Hyuk-chan, Director of the Anti-cancer Center',
                'Song Jeong-yun, Head of Dept.',
                'Jo Gun-je, Prof.',
                'Myung-Ki Lee, Prof.'
            ],
            doctors_link:[
                'cate=26&item=2',
                'cate=10&item=2',
                'cate=26&item=1',
                'cate=13&item=1',
            ],
        },
        {
            cate_no:0, 
            item_no:29, 
            title:'Respiratory', 
            icon_src:'medi_w_cetner_29', 
            name:'호흡기센터',
            doctors_name:[
                'O Mu-Young, Director of Center',
                'Choi Pil-jo, Prof.',
                'Yoo Heung, Director of Center'
            ],
            doctors_link:[
                'cate=10&item=1',
                'cate=28&item=1',
                'cate=3&item=6'
            ],
        },
    ]
]
const HOSPI_TITLE = [
    [
        {cate_no:0, item_no:1, title:'Liver Center'},
        {cate_no:0, item_no:5, title:'Gastrointestinal Cancer Surgery'},
        {cate_no:0, item_no:10, title:'Women`s Cancer'},
        {cate_no:0, item_no:11, title:'Breast/Thyroid Cancer'},
        {cate_no:0, item_no:15, title:'Intreventional Surgery'},
        {cate_no:0, item_no:18, title:'Prostate Cancer'},
        {cate_no:0, item_no:24, title:'Lung Cancer'},
        {cate_no:0, item_no:25, title:'Chemotherapy Radiation'},
    ]
]
const LIST_N = [
    [
        {cate_no:0, item_no:1, name:''},
        {cate_no:0, item_no:1, name:''},
        {cate_no:0, item_no:2, name:'3'},
        {cate_no:0, item_no:3, name:'4'},
        {cate_no:0, item_no:4, name:'5'},
        {cate_no:0, item_no:5, name:'6'},
        {cate_no:0, item_no:6, name:'7'},
        {cate_no:0, item_no:7, name:'8'},
        {cate_no:0, item_no:8, name:'9'},
        {cate_no:0, item_no:9, name:'10'},
        {cate_no:0, item_no:10, name:'11'},
        {cate_no:0, item_no:11, name:'12'},
        {cate_no:0, item_no:12, name:'13'},
        {cate_no:0, item_no:13, name:'14'},
        {cate_no:0, item_no:14, name:'15'},
        {cate_no:0, item_no:15, name:'16'},
        {cate_no:0, item_no:16, name:'17'},
        {cate_no:0, item_no:17, name:'18'},
        {cate_no:0, item_no:18, name:'19'},
        {cate_no:0, item_no:19, name:'20'},
        {cate_no:0, item_no:20, name:'21'},
        {cate_no:0, item_no:21, name:'22'},
        {cate_no:0, item_no:22, name:'23'},
        {cate_no:0, item_no:23, name:'24'},
        {cate_no:0, item_no:24, name:'25'},
        {cate_no:0, item_no:25, name:'26'},
        {cate_no:0, item_no:26, name:'27'},
        {cate_no:0, item_no:27, name:'28'},
        {cate_no:0, item_no:28, name:'29'},
    ]
]



const CENT_BORAD = [
    [
        {
            cate:0,
            item_no:1,
            title : '< Mailbox 5/4 > - A letter from the guardian',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.05.05','23.05.05'],
            text :[
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>I`m back after a long time!!!!! <br> Today`s reminder <span class="bold_text">Doo!!</span></span>',
                '<span><span class="color_purple">A letter from the guardian <br> who arrived at the ward</span><br> I`m trying to show you</span>',
                '<span>I am so grateful to the guardians and <br> have had time to look back once again. <br> I`ll see you soon!!</span>',
                '<span>It was a heartfelt letter with two letters.</span>',
                '<span>It warms my heart~ <br> It was a time for all of us to read and cheer up. <br> Thank you</span>',
            ],
            img_src: [
                '편지함_보호자에게서_온_편지_1.jpg',
                '편지함_보호자에게서_온_편지_2.jpg',
            ],
        },
        {
            cate:0,
            item_no:2,
            title : '< Birthday Party 4/14 > - On General Hospital Hospice Ward Program',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.04.18','23.04.18'],
            text: [
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>Today`s reminder is doo!!</span>',
                '<span>In the hospice ward of On General Hospital <br> <span class="color_purple">birthday party</span> Time.</span>',
                '<span>If the patient`s birthday is celebrated in the hospital room, <br> we prepare and hold a celebration party~~ <br> Shall we see it together??</span>',
                '<span>Decorate the hospital room for your birthday. <br> Hang a banner with the words Happy Birthday written on the wallpaper~~ <br> Blow up balloons yourself and <br> stick them around.(Don`t burst~~)</span>',
                '<span>Prepared cakes, flowers, and <br> delicious sweets and drinks are displayed~~ <br> Happy Birthday~~~~~~ Sing a song</span>',
                '<span>Let`s all get together and take a picture of us~~ <br> Take a selfie too!! <img class="thumbs_img" src="./img/news/ext/thumbs_up.png"> <br> I love the way you smile so brightly~~</span>',
                '<span>You can`t leave out your family members too~~ <br> Take a picture with your family members!! <br> I hope it will remain in your memory for a long time</span>',
                '<span>A cocked hat also goes well with it. <br><br> I sincerely congratulate you on your birthday~~ <br> I hope you have a happy day!!</span>',
                '<span class="bold_text">Birthday party done!! <br><br> What program will come next?? <br> Today`s notification is here!! <span class="color_purple">ON Hospice Alert</span>no see!</span>'
            ],
            img_src: [
                '생일잔치_호스피스_프로그램_1.jpg',
                '생일잔치_호스피스_프로그램_2.jpg',
                '생일잔치_호스피스_프로그램_3.jpg',
                '생일잔치_호스피스_프로그램_4.jpg',
                '생일잔치_호스피스_프로그램_5.jpg',
                '생일잔치_호스피스_프로그램_6.jpg',
            ],
        },
        {
            cate:0,
            item_no:3,
            title : '<Meal Gift 3/21> - On General Hospital Hospice Ward Program',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.04.18','23.04.18'],
            text: [
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>Today`s reminder is doo!!</span>',
                '<span>In the hospice ward of On General Hospital <br> <span class="bold_text">meal gift</span>Time.</span>',
                '<span>n our ward, until now, various foods <br> have been prepared by nursing staff, palliative care workers, and social workers <br> to serve hospitalized patients and their families~~</span>',
                '<span>What is today`s meal gift? <br> doo doo doo doo doo</span>',
                '<span class="bold_text">as soon as!! < <span class="color_purple">new spring</span>welcome <span class="color_dark_purple">pansy flower</span> Sea squirt bibimbap>!!</span>',
                '<span>in the last post <span class="bold_text">Benefits of Pansy</span>I found out about~</span>',
                '<span>then <span class="color_orange">sea ​​squirt</span>Shall we find out the effect of? <br> <span class="color_orange">Sea squirt effect: </span>It contains vanadium, an indispensable trace metal component for the human body, which <br> has the effect of smoothing metabolism and improving diabetes. <br> If you have diabetes, your body becomes drowsy and fatigue comes easily. <br> Sea squirts are a very good food for diabetes with these symptoms </span>',
                '<span><br> good~ good~ <br> Now let`s see how it`s being made step by step~</span>',
                '<span>first!! The more good things, the better. <br> After preparing the ingredients <br> <span class="color_green">vegetable</span> and, <span class="color_dark_purple"> pansy flower </span>, <span class="color_orange"> sea ​​squirt </span>Get ready to clean up!!</span>',
                '<span>If you put it in a bowl in turn!! <br> as soon as <span class="bold_text"> end!!!!!!!!!</span></span>',
                '<span>Shall we bring our inpatients and guardians now? <br> We eat together in the program room~</span>',
                '<span>And even a rocket delivery service to the hospital room!!!!!! <br> it`s possible!!!!</span>',
                '<span>Now that we have eaten, <br> we have to take care of the after-dinner~ <br> Finish up with a cup of tea!!!! perfect~~</span>',
                '<span>This meal gift is complete!!! <br> I hope you can heal your fatigue with a delicious mea~ <br><br>',
                '<span class="bold_text">What program will come nex?? <br> Today`s notification is here!! <br><br>',
                '<span class="color_purple">ON Hospice Alert</span> no see! <br> < It must be delicious ></span></span>'
            ],
            img_src:[
                '식사선물_3_21__1.jpg',
                '식사선물_3_21__2_1.jpg',
                '식사선물_3_21__2_2.jpg',
                '식사선물_3_21__2_3.jpg',
                '식사선물_3_21__2_4.jpg',
                '식사선물_3_21__3.jpg',
                '식사선물_3_21__4_1.jpg',
                '식사선물_3_21__4_2.jpg',
                '식사선물_3_21__5_1.jpg',
                '식사선물_3_21__5_2.jpg',
                '식사선물_3_21__6.jpg',
            ],
        },
        {
            cate:0,
            item_no:4,
            title : '< Tea Ceremony 3/14 > - On General Hospital Hospice Ward Program',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.04.12','23.04.12'],
            text: [
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>Today`s reminder is doo!!</span>',
                '<span>A program implemented in the hospice ward of <br> On General Hospital <span class="bold_text"> It is a tea ceremony.</span></span>',
                '<span>Smell the scent of tea with the participating guardians and <br> encourage peace and stability in the mind.</span>',
                '<span>This tea ceremony <span class="bold_text">Flower tea.</span></span>',
                '<span><span class="color_dark_purple">Pansy Flower Tea Benefits:</span> It is effective for lymphadenitis, jaundice, hepatitis, etc <br> It is good to drink pansy flower tea in winter when it is easy to feel drowsy and depressed. <br> It also has excellent anti-inflammatory action and <br> is said to be good for women and the elderly who have trouble sleeping due to high heat in the heart.</span>',
                '<span>Shall we make pansy flower tea now?</span>',
                '<span>After the flowers are thoroughly washed <br> they are fan-dried with heat. <br> Check the moisture and put it to sleep and store it in a heated glass bottle.</span>',
                '<span>The flowers are purple, but when boiled, they turn blue!!!!</span>',
                '<span>We all ate sweet snacks together with flower tea and <br> shared small chats~ <br> We shared time talking about life in the ward.</span>',
                '<span>What program will come next? <br> Today`s notification is here!! <span class="color_purple">ON Hospice Alert</span> no see!</span>'
            ],
            img_src: [
                '다도요법_3_14__1_1.jpg',
                '다도요법_3_14__1_2.jpg',
                '다도요법_3_14__2_1.jpg',
                '다도요법_3_14__2_2.jpg',
                '다도요법_3_14__3_1.jpg',
                '다도요법_3_14__3_2.jpg',
                '다도요법_3_14__3_3.jpg',
            ],
        },
        {
            cate:0,
            item_no:5,
            title : '< Art Therapy 3/13 > - On General Hospital Hospice Program',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.04.12','23.04.12'],
            text: [
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>Today`s reminder is doo!! <br> Let`s find out about the program <br> implemented in the hospice ward of the On General Hospital~~</span>',
                '<span>First of all <span class="bold_text">art therapy</span>!! no see.</span>',
                '<span>Then! <br> <span class="bold_text">What is Art Therapy?? </span> <br> <span class="bold_text">Art</span>Therapy is a psychological treatment that reduces the emotional stress of the subject by expressing emotions or inner <br> world through art activities so that the subject can relax</span>',
                '<span><span class="bold_text">ward program room</span> at <span class="bold_text">patient</span>and, <span class="bold_text">patient family</span> <br> Residing for people <span class="bold_text">social worker teacher</span>During <br> the program, you can <br> put aside miscellaneous thoughts and <br> gather together and <br> have a fun time talking in order~~</span>',
                '<span>The art therapy conducted this time (2023.3.13) <span class="bold_text"> mini canvas - painting is for drawing</span> <br> You can freely write what you want to draw on the mini canvas and decorate it. <br> If you`re wondering what to draw, here`s an example~</span>',
                '<span>It`s time to spend with the guardians~ <br> Concentrate! You are making your own art</span>',
                '<span>Let`s <br> see the finished product!!</span>',
                '<span>It has become a fun and relaxing time with <br> the guardians by drawing each one on white paper.</span>',
                '<span>What program will come next?? <br> Today`s notification is here!! <span class="color_purple">ON Hospice Alert</span> no see!</span>'
            ],
            img_src: [
                '미술치료_3_13__1.jpg',
                '미술치료_3_13__2.jpg',
                '미술치료_3_13__3_1.jpg',
                '미술치료_3_13__3_2.jpg',
            ],
        },
        {
            cate:0,
            item_no:6,
            title : 'On General Hospital Hospice Ward - Preview',
            writer: 'On Group Medical Foundation On General Hospital',
            date: ['2023.04.12','23.04.12'],
            text: [
                '<span>Hello <br> <span class="color_purple">ON Hospice Alert</span>no see!</span>',
                '<span>Today`s reminder is doo!!</span>',
                '<span>I will tell you about the ward environment that <br> you can see when you come to the 13th ward of the general hospital~~</span>',
                '<span>This is the entrance to the hospital ward~~ <br> It`s where you come out right after you get off the elevator for Units 1 and 2 <br> Goofy friends live together under bright and cheerful lights~ <br> Shall we zoom in??</span>',
                '<span>There are many creatures with guppies <br> You can go close and examine them</span>',
                '<span>Now let`s look at the nurse`s station and the hallways?</span>',
                '<span>This is where the nurse teacher resides and works. <br>  You can receive guidance in situations where you need a nurse teacher, <br> such as questions or inquiries that arise during hospitalization~</span>',
                '<span>Visiting hours are also posted <br> in front of the nurse station <br> <span class="bold_text">weekday afternoon</span>18:00~20:00 PM <br> <span class="bold_text">morning on weekends and holidays</span> 10:00~12:00 PM <span class="bold_text">afternoon</span> 08:00~20:00 PM</span>',
                '<span>And there is a corridor all the way~ <br> You can go to the hospitalization room</span>',
                '<span>There are paintings hanging all over the corridor of the ward <br> You can enjoy them with good words~</span>',
                '<span>Today`s notification is here!! <br> See you on the following topics~~ <br><span class="color_purple">ON Hospice Alert</span> no see!</span>'
            ],
            img_src: [
                '호스피스_병동_미리보기_1.jpg',
                '호스피스_병동_미리보기_2.jpg',
                '호스피스_병동_미리보기_3_1.jpg',
                '호스피스_병동_미리보기_3_2.jpg',
                '호스피스_병동_미리보기_4.jpg',
            ],
        },
    ]
]
