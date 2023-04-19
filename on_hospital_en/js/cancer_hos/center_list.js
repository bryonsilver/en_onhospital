const CENT_LIST = [
    [
        {cate_no:0, 
            item_no:1, 
            img_src:'', 
            sub_title:['', ''], 
            icon_src:'medi_icon_15_1',
            name:'Hepatobiliary Pancreatic / Gastric / Colorectal Cancer',
            sub_context3: ['ON Hospital은 간, 담도계 및 췌장내 악성종야에 대해 풍부한 임상경험과 전문지식을 갖춘 DEPARTMENT OF GASTROENTEROLOGY, 종양내과, Department of Hepatobiliary and Pancreatic Surgery, Radiation Oncology Department, DEPARTMENT OF RADIOLOGY, 병리과 전문의들이 주축이 되어 전문의들이 모여 진단에서부터 치료까지 환자중심의 유기적인 협조체계를 구축하고 상호 협력함으로서 환자의 빠른 진단 및 환자 개개인에 맞는 최장의 치료를 제공 하고 있습니다.'],
            sub_context2: ['일반적으로 담도계 및 췌장내 악성종양의 예후는 타 장기악성종양에 비해 치료 결과가 좋지 않다고 합니다.','그러나 영상진단의 정확도가 증가하고, 수술 술기의 발전으로 절제율이 향상되고 있으며 수술 후 합병증의 발병율이 낮아지고 있습니다. 또한 수술 후에 여러 보조적 치료 약제의 개발과 방사선치료 방법이 향상되어 치료 결과는 느리지만 차츰 향상되고 있습니다.'],
            sub_context1: ['간암에 대한 여러 치료법이 개발되고 활용됨에 따라 최적의 치료를 받게 되면 좋은 결과를 예상할 수 있습니다.','또한 담도계 및 췌장내 악성종양들을 대상으로 진단, 수술, 수술 전후 항암화학요법, 방사선치료 등 전문적인 진단과 치료를 제공하여 환자의 치료율과 질적향상을 도모하고 있습니다.'] },
        {cate_no:0, 
            item_no:2, 
            img_src:['2_1.jpg', '2_2.jpg'], 
            sub_title:['',''], 
            icon_src:'medi_icon_15_1',
            name:'Liver',
            num:['051) 607-0350', '051) 607-0745/0257'],
            num_bold:['Liver Center Outpatient Clinic','(3F)', 'Liver Center Reception/Payment'],
            table_th:['High-frequency ablation therapy', 'Transarterial chemoembolization (TACE)', 'Transarterial chemoinfusion'],
            table_td:['A treatment for liver cancer in which a needle is inserted into the cancerous lesion and high-frequency energy is delivered through the needle. This results in the generation of heat at a temperature of at least 50°C, destroying liver cancer cells', 'A treatment for malignant liver tumors aimed at curing multiple or giant tumors. It involves injecting anticancer drugs slowly through a catheter inserted into the hepatic artery to reach the liver.', 'A procedure that involves delivering anticancer drugs and embolic agents into the artery that supplies the tumor through a catheter, blocking the blood supply to the tumor and destroying it.'],
            sub_context1: ['Offering new hope with a treatment success rate of 60% for those suffering from liver cancer!', 'The medical team is composed of liver specialists with university professor backgrounds', 'Successful thoracoscopic lung lobectomy, the first of its kind in Busan and Gyeongnam'] },
        {cate_no:0, 
            item_no:3, 
            img_src:'', 
            icon_src:'medi_icon_15_1',
            name:'Infection',
            sub_title:[ '','감염관리팀 주요업무'], 
            text:'감염관리팀은 감염관리위원회와 상호 협력하여 의료관련 감염 예방과 관리 활동을 진행한다.',
            li_text:['감연관리 규정 제정 및 개정', '의료관련감염 감시 및 감염관리내용 모니터링', '유행발생 관리', '법정감염병 관리', '의료기구의 세척, 소독, 멸균 관리', '감염관리 교육 및 홍보', '병원직원의 감염관리', '환경관리','감염관리에 대한 지문', '지역사회 네트워크 감염관리활동 참여'],
            sub_context1: ['환자와 방문객 모두에게 의료관련감염으로부터 안전한 환경을 제공하기 위하여 병원환경에 노출된 모든 사람간의 감염 획득 및 전파의 위험을 파악하고 의료관련감염을 감소시키는 활동을 수행하고 있씁니다.','감연관리팀은 감염관리위원회와 상호 협력하여 의료관련 감염 예방과 관리 활동을 진행한다.']  },
        {cate_no:0, 
            item_no:4, 
            img_src:'4_.jpg', 
            sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
            sub_context5: ['치핵, 치열, 치루 및 항문통, 항문소양증, 항문성병','변비나 배변장애, 과민성 대장증후군, 염증성 장질환',],
            sub_context4: ['온 종합병원 Proctology는 최소침습수술을 비롯하여 다양한 방법을 통하여 환자들에게 치료의 기회를 제공하고 있습니다.','또한 전문화된 세부 DEPARTMENT 등의 협진을 통하여 전문적인 치료를 제공하고 있습니다.','특히 고난이도의 수술을 요하는 대장암에서부터 항문질환 등에 이르기까지 빠르고 편안한 진료가 될 수 있도록 노력하고 있습니다. 해당 특수 클리닉과 연계, 치료하여 항문질환 뿐 아니라 항문 질환의 원인에 대한 적절한 치료가 이루어질 수 있도록 하는 역할을 담당하고 있습니다.',],
            sub_context3: ['또한 여러 기능적 직장항문질환도 급격히 그 빈도가 증가하고 있습니다.','이런 상황에서 온 종합병원 Proctology는 우수한 대장항문 전문 의료진을 모시고 최첨단 의료장비를 활용하여 최고 수준의 진료를 제공합니다. 같은 질병이라도 환자의 상태에 따라서, 또 같은 환자에게라도 질병의 진행에 따라서 최적의 진료가 다를 수 있습니다.',],
            sub_context2: ['현대화와 서구화가 계속 될수록 대장항문 질환은 늘어 갈 것으로 예상됩니다. 대장암은 지난 10년간 가장 많이 증가된 암으로 우리나라 발생 암 중 4번째에 해당되고, 앞으로도 지속적으로 증가하고 있습니다.',],
            sub_context1: ['온 종합병원 Proctology는 대장항문질환에 대한 정확한 지식을 전달하고, 상담하며, 환자에 대해서는 최적의 치료를 시행하려고 노력하고 있습니다.',] },
        {cate_no:0, 
            item_no:5, 
            img_src:'5_.jpg', 
            sub_title:['주의력결핍 과일행동장애(ADHD)', '학습장애', '학교공포증-분리불안장애', '따돌림 당하는 아스퍼거장애'], 
            bold_top:['"아침마다 학교에 가기 싫어해요"', '"머리는 좋은 것 같은데 성적이 안 나오네요"', '"학교에서 또래 친구들 사이에서 왕따를 당하는 것 같아요."'],
            small_top:['가족이라는 울타리에서 벗어나 또 다른 세계로 발을 내디딘 아이들에게 학교생활은 도전이고 모험일 수 있다. 과잉행동장애, 학습장애, 아스퍼거 장애, 분리불안장애 등 성장기 아동들에게 나타나는 대표적인 정신건강 질병에 대한 전문적인 치료와 진단을 시행한다.'],
            sub_context8:['이외에도 뉴로피드백 치료와 심리검사 등을 시행하며 소아청소년뿐만 아니라 성인 정신건강 상담 및 치료도 진행된다.'],
            sub_context7: ['높은 지능과 독특한 분야에 흥미를 가진 아동임에도 불구하고 가족 또는 학교생활에 적응하지 못해 상당한 장애를 겪는다. 하지만 나중에 대학교수나 예술가가 되는 경우도 있는 것으로 보고되고 있다. 근본적으로 상태를 완치할 수 있는 방법은 현재로선 없다. ', '다만 특수교육을 통해 사회적응능력을 키워주고 반복적인 좌절로 인한 우울 증세를 치료하는 것이 필요하다.'],
            sub_context6: ['사물의 판단 및 언어구사 능력은 충분함에도 불구하고 사회적 상호작용과 감정교류에 실패하는 사람들이 이에 속한다.','분위기 파악을 제대로 못해 또래 친구들로부터 따돌림을 당하는 ‘왕따’ 현상이 일어난다. 얼굴표정이나 제스처 등을 사용한 의사표현의 장애를 보이며 상황에 맞게 음량 조절을 못하기도 한다.'],
            sub_context5: ['심하게 분리불안이 있을 때에는 강제로 혼자 가게 하는 것보다는 한 달 이내의 기간 동안 아이와 함께 학교에 가서 교실 밖에서 기다리거나 수업시간에 함께 참가하는 것도 해결방법이 될 수 있다. 그래도 호전되지 않으면 소아정신과를 찾아 상담하는 것이 좋다. 소아청소년 DEPARTMENT OF PSYCHIATRY에서 심리검사를 통해 원인을 파악한 후 놀이치료 미술치료 부모교육을 실시하며 약물치료도 할 수 있다.'],
            sub_context4: ['학교공포증은 아이가 반복적으로 학교 가기를 싫어하고 억지로 가도록 하면 불안해지거나 공황상태에 빠지는 경우를 말한다.','학교를 두려워하기보다는 어머니와 헤어지는 것을 두려워하는 것이라 할 수 있다. 아침이나 주말 저녁이 되면 배가 아프다거나 머리가 아프다고 하는 등 신체증상을 호소한다. 억지로 가도록 하면 불안해지거나 과격한 저항행동을 보이기도 하고 숨거나 도망을 가기도 한다. 이럴 경우 아이가 어떤 핑계를 대더라도 꼭 학교에 가는 것을 원칙으로 할 필요가 있다.',],
            sub_context3: ['학습장애는 원인이 다양하기 때문에 실제로 아이가 어떤 어려움을 겪고 있는지 원인을 먼저 찾는 것이 중요하다. 주의력결핍 과잉행동장애를 제외하고는 약물치료는 일차적인 치료가 아니다. 적절한 교육적 접근과 환경·정서적인 지원 등이 중요하다.','간혹 학습장애가 아닌데도 학습장애로 여기는 부모들이 있다. 대개 한두 명의 자녀를 키우는 요즘, 부모들의 기대심리가 커 아이들을 조급하게 몰아세우는 경우도 흔하다는 얘기다.'],
            sub_context2: ['정상 또는 정상보다 높은 지능지수를 가졌으나 뇌와 신경계통의 기능이상으로 학습 성취도가 떨어지는 경우를 말한다.','뇌신경계통의 발달과정에서 생기는 일종의 발달장애다. 학습장애는 듣기, 생각하기, 말하기, 읽기, 철자, 수학적 계산 등에서 나타날 수 있다. 학습문제는 이 외에도 지능지수가 70 이하로 낮거나 기질적인 뇌손상을 가진 어린이에서 학습 성취도가 떨어지는 ‘학습지체’, 지능지수가 75∼85 정도로 신경계의 이상은 없는데 정서적인 문제나 환경적인 문제로 인한 ‘학습부진’ 등도 있다.',],
            sub_context1: ['최근 각종 언론에서 주목하고 있는 주의력결핍 과잉행동장애(ADHD)는 잠시도 가만히 있지 않고 말이 많거나 부주의한 실수가 잦으며 충동성이 강한 특징을 나타낸다.','흔히 생후 초기부터 까다롭다거나 활동이 많은 특징을 보이는 수가 많다. 그러다가 유치원이나 초등학교에 들어가 단체생활을 시작하면서 흔히 발견된다. 여아보다 남아에게서 3~4배가량 더 많이 발병한다고 보고되고 있다. 약 70~80%는 만 4세 이전에 발병되는 것으로 알려져 있다.','전문가들은 ADHD의 원인에 대해 유전적 요인, 뇌의 전두엽 기능 저하로 인한 신경전달물질의 이상, 출산과정에서의 뇌손상 등으로 본다. 증상이 나타날 경우 아이나 부모의 잘못이 아니므로 아이를 나무라거나 부모 스스로 자책해서는 안 된다. 문제가 심각하지 않으면 약물치료 없이 환경조절이나 부모상담, 행동수정방법 등을 우선적으로 시행한다. 그러나 상태가 중한 경우에는 중추신경자극제와 항우울제 등을 이용한 약물치료를 해야 한다.']  },
        {cate_no:0, 
            item_no:6, 
            img_src:'6_.jpg', 
            sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
            sub_context2:[
                'Digestive system diseases (stomach, esophagus), gastritis, gastric ulcers, reflux esophagitis, etc', 
                'Pancreatic and biliary tract diseases, liver diseases', 
                'Gastrointestinal endoscopy, polypectomy, endoscopic submucosal dissection (ESD) clinic'
            ] , 
            sub_context1: [
                'IN LINE WITH THE REALITY OF KOREAN DIETARY HABITS BECOMING MORE WESTERNIZED, THERE IS A TREND OF A RAPID INCREASE IN PATIENTS WITH DIGESTIVE SYSTEM DISEASES.',
                'To provide high-quality medical services, ON Hospital has established a digestive endoscopy center based on an organic collaboration system among medical departments related to digestive system diseases, such as gastroenterology, surgery, and radiology.',
                'The digestive endoscopy center at ON Hospital is equipped with top medical professionals, state-of-the-art medical equipment, and advanced medical systems, so that you can receive high-level treatment quickly and comfortably.', 
                'In addition, to address the increasing backlog of endoscopic examinations that correspond to the increase in hospital visits by patients with digestive system diseases, we have trained and deployed specialized endoscopy medical staff and possess advanced medical equipment. We manage personnel and equipment efficiently to conduct differentiated endoscopic examinations.', 
                'We strive for world-class medical treatment based on the highest level of clinical experience and advanced technology in each field.',
                ' 이에 온 종합병원 소화기내시경센터는 환자들이 좀 더 편리하게 최상의 진료를 받을 수 있도록 끊임없이 노력하겠습니다.'
            ], 
            },
        {cate_no:0, 
            item_no:7, 
            img_src:'page-img1.jpg', 
            sub_title:['Hepatopancreatobiliary Surgery','Surgery', 'Gastroenterology and Endoscopy Center'], 
            black_bold:['Upper and lower gastrointestinal endoscopy clinics', 'HEPATOPANCREATOBILIARY ENDOSCOPY CLINIC'],
            small_phone:['051) 607-0707', '051) 607-0230', '051) 607-0244,0257'],
            chk_text:['TOP-NOTCH MEDICAL AND ADVANCED FACILITIES LIKE UNIVERSITY HOSPITALS', 'ONE-STOP SURGERY AND HOSPITALIZATION SERVICES IMMEDIATELY UPON DISCOVERING THE DISEASE', 'RESERVATIONS FOR UPPER AND LOWER GASTROINTESTINAL ENDOSCOPY AVAILABLE ON DESIRED DATES', ' 검사 즉시 결과 설명', 'SPECIALIZATION IN HEPATOPANCREATOBILIARY ENDOSCOPY (ERCP)', ' ENDOSCOPE EQUIPMENT WITH ULTRASOUND MICRODISINFECTION'],
            sub_context1: ['The most difficult field in the field of surgery, which treats diseases that occur in organs such as the liver, bile duct system, spleen, pancreas, and other organs', 'Professor Park Kwang-min has a success rate of "10,000 surgeries" in hepatopancreatobiliary surgery', 'Specializes in the treatment of gastric cancer, colorectal cancer, rectal cancer, and other intestinal diseases', 'USING THE STATE-OF-THE-ART OLYMPUS CV290 EQUIPMENT, WITH HIGH-RESOLUTION AND CLEAR IMAGE QUALITY'] },
        {cate_no:0, 
            item_no:8, 
            img_src:'8_.jpg', 
            sub_title:['Neurology에서 다루는 질환과 증상은 다음과 같습니다.', ''], 
            table_td:['고령사회로 접어들면서 사회문제가 되고 있는 치매 및 기억장애를 진단하고 치료합니다.','반복되는 의식소실과 사지경련을 보이는 경련발작의 원인을 찾아 치료합니다.', '뇌경색, 뇌출혈에 의한 반신마비, 언어장애를 치료하고 예방합니다.', '손 떨림(수전증), 파킨슨씨병 등 이상운동질환을 진단하고 치료합니다.', '손발 저림, 근력 약화, 근육위축, 안면마비, 눈꺼풀 처짐 등의 원인을 규명하고 치료합니다.', '흔히 경험하는 두통은 뇌질환의 초기증상일 수 있습니다. 두통의 원인을 감별하고 치료합니다.', '불면증, 수면발작, 낮 동안의 과도한 졸음, 수면무호흡증을 진단하고 치료합니다.','균형감각을 유지하기 위해서는 신경계의 정교한 기능이 필수적이며, 어지럼증을 유발하는 원인을 규명하고 치료합니다.', '고열, 두통, 구토를 동반하는 뇌수막뇌염과 뇌염을 진단하고 치료합니다.', '위에 열거한 질환 외에도 신경통, 다발성 경화증, 선천성 혹은 유전성 신경계 질환을 진단하고 치료합니다.'],
            table_th:['치매', '간질', '뇌졸증', '운동장애', '말초신경 및 근육질환', '두통', '수면장애', '어지럼증', '신경계 염증', '기타'],
            sub_context1: ['온 종합병원 Neurology는 뇌와 척수(중추신경), 말초신경 및 근육에 발생하는 질환을 진단하고 치료하며 신경계 질환의 원인을 규명하고 나은 치료방법을 연구하고 있습니다.', '치매클리닉, 간지클리닉, 뇌졸중 클리닉, 말초신경 및 근육질환 클리닉 등 전문 클리닉과 신경심리검사실, 뇌파검사실, 근전도검사실 등 틀수검사실을 운영하여 보다 전문적인 진료와 치료에 최선을 다하고 있습니다.'] },
        {cate_no:0, 
            item_no:9, 
            img_src:'9_.jpg', 
            sub_title:['',''], 
            sub_context9: ['Located in the heart of Busan`s Seomyeon district, ON Hospital strives to provide high-quality emergency medical services to patients competing for the golden time by operating a Heart and Brain Vascular Center that is available 24 hours a day, seven days a week.'],
            sub_context8: ['In addition, to facilitate early detection and systematic management of cerebrovascular diseases, the center operates in collaboration with the best teams of cerebrovascular specialists and cardiovascular surgeons.'],
            sub_context7: ['The Heart and Brain Vascular Center at ON Hospital has introduced the cutting-edge vascular surgery equipment, Philips` Biplane Angio, which can accurately identify even tiny veins through 3D imaging and reduce radiation exposure to patients by shortening examination times. It is capable of treating central nervous system and cranial nerve diseases such as vascular diseases of the arms and legs, spinal and spinal cord vessels, and spinal tumors.'],
            sub_context6: ['Managing important organs such as the heart, brain, and blood vessels is as crucial as treatment, and involves exercising regularly, moderating salt, oily food, and alcohol intake, avoiding overeating and smoking, and always monitoring health parameters, especially in the case of chronic diseases such as hypertension, diabetes, and hyperlipidemia.'],
            sub_context5: ['The Cardiocerebrovascular Center actively manages risk factors for strokes such as hypertension, diabetes, and smoking in cooperation with internal medicine, and conducts tests such as magnetic resonance imaging (MRI) and magnetic resonance angiography (MRA) to accurately and precisely examine the condition of blood vessels through cerebral angiography, which examines brain blood vessels through the femoral artery, and performs interventional radiation treatment.'],
            sub_context4: ['In addition, a stroke refers to a state in which brain cells are damaged because blood carrying nutrients and oxygen does not flow to the brain due to the obstruction or rupture of cerebral blood vessels. The Cardiocerebrovascular Center specializes in preventing and treating strokes caused by the obstruction or rupture of blood vessels that supply blood to the brain.'],
            sub_context3: ['Myocardial infarction is mainly caused by coronary artery sclerosis and is indicated by chest pain that lasts longer than a few minutes. The Cardiocerebrovascular Center conducts various tests such as electrocardiograms, 24-hour electrocardiograms, echocardiograms, exercise stress tests, CT scans, and MRI scans, to investigate complaints of chest pain, and when a narrowed blood vessel is found through coronary artery angiography, an intervention procedure such as coronary artery stenting can be performed. In cases of acute emergencies, it is essential to perform prompt intervention procedures such as percutaneous coronary intervention or stent insertion to open the occluded blood vessels within the golden time (within 2 hours after vessel occlusion).'],
            sub_context2: ['Representative coronary artery diseases of the cardiovascular system, such as myocardial infarction and angina pectoris, and cerebral vascular diseases, such as stroke, account for 80% of early deaths, which are caused by complications with chronic diseases such as hypertension, diabetes, and hyperlipidemia, or are heavily influenced by environmental and occupational risk factors.'],
            sub_context1: ['Of the top 10 causes of death from illness, 7 are chronic diseases, with cerebrovascular diseases being the most frequent. Aging is continuing to increase the incidence rate, but the fatality rate is decreasing in contrast due to the development of various treatments. However, the disability rate caused by the aftermath of the disease is also on the rise. Appropriate management and treatment can lower the incidence rate of the disease, and in cases of acute onset (such as myocardial infarction or stroke), early intervention is crucial, and appropriate procedures and treatments can reduce the disability rate.'] },
        {cate_no:0, 
            item_no:10,
             img_src:'10_.jpg', 
             sub_title:['1. 천식', '2. 아토피 피부염', '3. 알레르기비염'], 
             top_text:['알레르기센터', '는 다양한 외부물질에 대한 과민한 면역반응으로 인해 발생하는 질환들을 전문적으로 진료하는 곳입니다.', '알레르기반응은 기관지 천식, 알레르기 비염, 만성기침 등 호흡기 알레르기질환과 아토피피부염, 두드러기 및 혈관부종 등의 피부 알레르기질환, 다양한 증상들이 복합적으로 나타날 수 있는 아나필락시스, 호산구증다증, 음식물, 약물, 벌독, 운동 알레르기 등을 포함합니다.'],
             sub_context1: ['천식환자의 기도는 예민하여 쉽게 자극을 받으며, 자극을 받으면 기도 안쪽이 붓고 가래가 생기며 기관지를 둘러싼 근육이 수축하여 기도가 좁아지게 됩니다. 기도가 좁아지면 기침이 나고, 가슴이 답답하거나 숨쉬기가 어려워지며 숨쉴떄 썍썍소리(천명)가 나는 등의 증상을 나타낼 수 있습니다.', '천식 악화에 관여하는 위험요인에는 집먼지진드기, 애완동물, 바퀴, 곰팡이, 꽃가루, 곰팡이와 감기, 폐렴 등의 호흡기 감염, 직접 또는 간접 흡연, 그리고 실내 및 실외의 대기오염 등이 있습니다. 기침이나 쌕쌕거리는 숨소리가 나고, 쉽게 없어지지 않으며 자주 반복된다. 감기를 앓고 나서도 기침이 자꾸 난다. 운동 중에 숨이 차거나 기침이 심해 더 이상 계속할 수 없는 경우도 있습니다.', '천식을 성공적으로 관리하려면 처방받은 약물을 규칙적으로 정확하게 사용해야 합니다. 검사 결과에 따라 각각의 천식환자는 중등도와 원인 및 유발인자에 따라 개인별로 약물치료, 면역치료 등을 실시하게 됩니다.','또한 악화인자를 피하기 위해 환경을 잘 관리 해야 합니다.', '유아 및 소아기에 주로 나타나는 만성 재발성의 피부염으로 가려움증과 함께 특징적인 분포와 형태를 보이는 피부 병변을 가지고 있습니다.', '가려움증은 가장 특징적인 증상으로 주로 초저녁이나 한밤중에 심하고, 이로 인해 환아는 침구나 침대면에 얼굴을 쉴새없이 긁게 되어 피부에 수포와 딱지가 생기며, 2차 세균 감염이 잦습니다.','건조한 피부, 감염, 조이는 의복, 집먼지진드기, 화학 섬유와 모직, 더위 등은 아토피 피부염의 가려움증을 악화시킬 수 있습니다.','목욕은 피부의 감염을 예방하고 적절한 피부 보습을 위해 필요하며, 필요한 경우에는 보습 효과가 있는 비누를 사용해야 합니다.','목욕 후에는 보습제를 충분히 발라주도록 하며, 손톱은 짧게 깎도록 하고, 손이 얼굴이 가지 않도록 해 주십시오. 옷은 부드러운 면제품이 좋고 모직물은 피하도록 하며, 집먼지 진드기가 없는 환경을 만들어 주는 것도 큰 도움이 됩니다.','의심되는 식품을 제한해야 하지만 무작위 제한은 심한 영양 실조를 초래할 수 있으므로 검사 후 주치의 선생님이 지시한 음식물만 제한해야 합니다.','알레르기를 일으키는 원인 물질이 코 점막에 노출된 후 자극 부위에 알레르기염증반응이 발생하게 됩니다.','연속적으로 일어나는 발작적인 재채기, 맑은 콧물, 코막힘, 가려움증이 주 증상입니다.','재채기와 콧물은 아침에 심하다가 오후 되면 나아지기도 합니다. 이 외에도 눈 주위가 가렵다거나 충혈, 두통, 후각 감퇴가 동반될 수도 있습니다.','대표적 원인물질은 집먼지진드기, 애완동물의 털, 음식믈, 약물 등이 있습니다.','계절적으로는 봄철에 자작나무,오리나무 꽃가루가, 가을철에는 쑥, 돼지풀 등 잡초 꽃가루가 원인이 될 수 있습니다.','알레르겐을 피하는 것이 가장 효과적인 치료법이지만 집먼지진드기, 꽃가루는 근본적으로 피하는 것은 현실적으로 어렵기 때문에 적절한 약물치료로 증상을 조절하며 근원적 치료인 면역요법이 필요합니다.'] },
        {cate_no:0, 
            item_no:11,
            sub_title:['',''], 
             img_src:'11_.jpg', },
        {cate_no:0, 
            item_no:12,
             img_src:'12_.jpg', 
             sub_title:['여성암 센터',''], 
             sub_context2: ['자궁경부암', '부정출혈', '생리불순', '자궁경부암 접종'],
             sub_context1: ['자궁근종, 자궁난소질환', '자궁내막증', '여성질환 전문 치료'] },
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
                'Our center is equipped with the latest breast imaging and ultrasound machines, essential for early screening. ', 
                'We also have various tools and equipment for tissue testing without surgery. Additionally, specialized nurses in the Breast Cancer Center provide psychological and rehabilitation education to improve the quality of life for breast cancer patients..'
            ] 
        },
        {cate_no:0, 
            item_no:14,
             img_src:'women_.png', 
             sub_title:['유방암&갑상선암센터',''], 
             chk_text:['원스톱 진료', '최고의 의료진', '최신 장비 진료'],
             middle_text:['검진부터 재건까지!', '맘모톰(Mammotome)조직검사'],
             circle_text:['수술', '항암치료', '방사선치료'],
             blue_text:'논스톱으로 가능',
             sub_context1: ['맘모톰 시술 : 각종 덩어리나 이상이 있는 부위를 제거할 떄 상처를 내지 않고 굵은 바늘을 이용해 여러 조각으로 나누어 뽑아내는 최신 기술', '051) 607-0232'] },
        {cate_no:0, 
            item_no:15,
            sub_title:['',''], 
             img_src:'emergency.png' },
        {cate_no:0, 
            item_no:16,
             img_src:'16_.jpg', 
             sub_title:['최신 혈액투석기기 도입! 높은 만족도!',''], 
             phone_num:['NEPHROLOGY','(2F)', '인공신장SURGERY','(13F)'],
             phone_text:['051) 607-0209', '051) 607-0128,0020'],
             chk_text: ['부산 최고 쾌적한 호텔형 시설', '최첨단 투석장비 60대 도입!', '독일 FMC社 5008S 4.5V'] },
        {cate_no:0, 
            item_no:17,
             img_src:'17_.jpg', 
             sub_title:['가능한 시술안내',''], 
             chk_text:['진료 시간 : 월~금(토요일 휴무)', '진료 문의 : 051-607-0281, 0229', '진료 시간은 사정에 따라 변경 될 수 있으며, 모든 시술은 예약제로 하고 있으니, 내원 전 전화 예약하시기 바랍니다.'],
             top_text:['인터벤션(중재시술)이란 투시나 초음파등의 실시간 영상획득 기술을 바탕으로, 영상유도하에서 바늘이나 카테터라고 하는 1~2mm 정도 굵기의 가느다란 관으로 질병부위까지의 경로를 만들고 이를 통하여 질병을 치료하는 첨단 의학 분야입니다. 기존의 치료 방법에 비하여 전신마취나 피부 절개가 필요 없어 환자 위험도를 최소화한 최신 치료방법입니다.'],
             sub_context1: ['간암의 경동맥 화학색전술', '다리동맥 협착병', '혈액투석 동정맥루의 혈관성형술', '담즙 배액술', '경피적 위루술, 결피적 신루술', '중심정맥 카테터(POCC,항암포트삽입)', '조직검사(초음파, CT유도하)', '자궁근종 색전술', '전립선 비대증 색전술', '낭종 경화술', '골반울혈 증후근', '정계 정맥류', '식도, 위, 십이지장 스텐트 삽입술'] },
        {cate_no:0, 
            item_no:18,
             sub_title:['',''], 
             link:['https://bryonsilver.github.io/ON_Hospital/on_hospital/medi_center.html?cen_v=13'],},
        {cate_no:0, 
            item_no:19,
             img_src:'19_.jpg', 
             sub_title:['',''], 
             sub_context4: ['또한 신경근전도실, 보행 및 동작분석실, 바이오덱스실, 연하검사실 등의 검사 시설에서 정확한 진단과 치료가 이루어지고 있다. 뿐만 아니라 IMS 치료, 테이핑 치료 등을 통한 통증 치료도 전문적으로 시행하고 있다.'],
             sub_context3: ['운동치료실, 물리치료실, 수치료실, 작업치료실 등이며, 그 외 보이타치료, 보바스치료, 보조기/의지 클리닉, 경직클리닉, 오십견클리닉 등의 특수 치료를 위한 시설을 갖추고 있다.'],
             sub_context2: ['뇌졸중, 척수 손상, 외상성 뇌손상, 동통, 보조기와 의지, 전기진단학, 소아 재활, 물리 및 생역학 등의 다양한 세부 분야에 걸쳐 전문적인 치료가 이루어진다.'],
             sub_context1: ['Rehabilitation Treatment는 기능의 장애를 가진 사람들을 평가하고 치료하여, 주어진 조건하에서 이들의 신체적, 정신적, 사회적 능력과 취미, 직업, 교육 등의 잠재적 능력을 최대한 발달시켜 정상에 가까운 생활을 할 수 있게 해 주기 위한 전문치료센터입이다.'] },
        {cate_no:0, 
            item_no:20,
             img_src:'20_.jpg', 
             sub_title:['INTRODUCTION','SPECIALIZED CLINICS'], 
             sub_context3: ['요로 종양클리닉, 요로결석클리닉, 배뇨장애클리닉, 소아비뇨기클리닉', '방광수술, 복강경수술, 내시경수술 , 요로손상클리닉, 요로감염클리닉'],
             sub_context2: ['온 종합병원 남성센터는 대학병원 임상교수 출신의 전문 의료진을 주축으로 진료 팀을 구성하여 각종 특수 클리닉을 운영하고 있으며 각 분야에서 선도적인 역할을 하고, 국제수준의 진료를 제공하고자 각 분야에서 선도적인 역할을 하고, 진료를 제공하고자 최선을 다하고 있습니다.'],
             sub_context1: ['온 종합병원의 전립선ㆍ배뇨장애센터는 남성 요로계통과 생식계통의 질환을 전문적으로 진단하고 치료하기 위해 설립되었습니다.','요로 종양, 요로결석, 내비뇨기, 소아비뇨기, 신경비뇨기, 배뇨장애, 남성의학, 요로손상, 요로감염 등의 질환을 다루고 있습니다.']  },
        {cate_no:0, 
            item_no:21,
             img_src:'21_.jpg', 
             sub_title:['Prostate Cancer', '교수출신 전문 의료진', '홀뮴 야그 레이저 수술기'], 
             check_box:['혈뇨센터', '배뇨장애클리닉', '전립선암'],
             small_title:'특징',
             special:['① 체외 충격파 쇄석술로 잘 제거되지 않는 결석 파괴 제거','② 한번의 시술로 치료 가능','③ 시술 후 회복기간 단축'],
             sub_context1: ['전립선 비대증의 새로운 치료법인 홀렙(HoLEP)수술을 위한 첨단장비인 홀뮴야그레이저수술기는 홀렙 시술이 가능한 최신장비로 전립선 비대조직을 제거하는 안전하고 효과적인 장비'] },
        {cate_no:0, 
            item_no:22,
             img_src:'22_.jpg', 
             sub_title:['Collaborative treatment with orthopedics, neurosurgery, rehabilitation medicine, and pain management anesthesia department', 'Total care where surgery and rehabilitation are integrated into one through seamless collaboration between', 'different medical departments to resolve patients’ difficulty in choosing a treatment option'], 
             circle_num:['01','02','03','04','05','06','07','08','09'],
             circle_text:['Minimally invasive endoscopic microscopic surgery', 'Minimally invasive arthroscopic surgery', 'Short surgical time, fast recovery', 'Minimizing post-anesthesia effects through local anesthesia', 'State-of-the-art spine joint rehabilitation center', 'Scientific exercise prescription program using the latest equipment', 'Personalized 1:1 exercise prescription by experts', 'Spine joint strengthening program', 'Post-surgery relapse prevention program'],
             sub_context1: ['Arthroscopic surgery allows for precise diagnosis and treatment by observing the joint through a miniature microscope inserted into only three to four small holes made around the joint.', 'It also leaves almost no visible scarring and enables a rapid return to daily life. It can be used for not only partial tears of the rotator cuff, shoulder joint dislocation, frozen shoulder, calcific tendinitis, and ligament injuries but also for severe rotator cuff tears.'] },
        {cate_no:0, 
            item_no:23,
             img_src:'23_.jpg', 
             sub_title:['초음파 진단이란?', '근골격계 초음파 검사의 장점'], 
             small_top:['척추나 관절 부위에 발생한 인대 손상을 회복시켜주고 강화 시켜주는 치료방법 근골격계는 근육, 인대, 연골, 뼈, 관련 신경이나 혈관 등을 포함하는 것으로 이들에 대한 초음파 검사를 근골격계 초음파라 합니다.','관절이나 인대 등의 염증, 손상, 퇴행성 변화 등을 빠르고 간편하게 확인할 수 있습니다.'],
             sub_context1: ['주사나 절개 등이 필요없는 비침습적인 검사이고 대부분 통증이 없습니다.','X-ray등 방사선 검사로 확인이 어려운 경우에 시행 가능하며, 방사선을 쏘일 필요가 없어 인체에 무해합니다.','임산부와 태아의 검사에도 안전하다고 알려져 있습니다.','실시간 영상을 확인할 수 있기 때문에 조직 검사 등의 시술을 도와주는 검사입니다.','넓은 범위에 적용할 수 있고 쉽게 사용할 수 있으며 CT나 MRI등의 검사에 비해서 일반적으로 비용이 저렴합니다.'] },
        {cate_no:0, 
            item_no:24,
             img_src:'24_.jpg', 
             sub_title:['췌장 및 담도 질환 증가 추세, 그 원인은?','췌장암과 담도암의 생존율이 낮은 이유는?', '췌장 담도 질환의 치료', '췌장 및 담도계 질환', '췌장 및 담도계 질환의 진단 방법'], 
             bold_top: ['췌장·담도질환 진단·치료', '초음파내시경(EUS)','역행성 췌담도 조영술(ERCP)'],
             sub_context5: ['1. EUS(초음파 내시경)-췌담도 질환 조기발견의 획기적 전환점','내시경 끝에 초음파를 장착해 위 십이지장을 통해 담낭 및 담도 그리고 췌장의 가장 근접 부위까지 접근해 높은 해상도와 다양한 기법을 이용하여 조기 진단 및 정확한 진단을 할 수 있는 촬영 기법. 방사선 노출이 전혀 없고 검사 중 실시간으로 필요시 조직 및 세포 체취가 가능해 병리학적 확진을 동시에 할 수 있는 이점 존재. 1cm 미만의 조기 췌장암 발견에 가장 적합한 방법이며 췌장 낭종. 검사 및 조직 체취를 동시에 할 수 있어 췌장 담도암 진단에 획기적인 진단 기법','2. ERCP(내시경적역행담췌관조영술)-진단과 치료가 동시에 가능, 고난이도 내시경 시술','십이지장경이라고 하는 특수 내시경을 이용하여 췌관과 담관이 만나는 십이지장 유두부에 접근한 후 췌관 및 담관을 먼저 촬영하여 정확한 진단을 내리고 동시에 병변 발견 시 실시간으로 담석 제거, 담도 배액술, 췌관 결석 제거 및 췌관 배액술을 시행할 수 있는 고난도의 시술입니다.'],
             sub_context4: ['두 질환 모두 조기 발견 시 수술적인 절제 시 완치가 가능합니다. 하지만 조기 진단율이 20% 미만이고, 수술 대상이더라도 광범위 간 절제나 다장기 절제술이 요구되어 고령 및 기저 질환이 있는 분들은 수술을 주저하며, 특히 수술 후 재발률이 매우 높아 5년 생존율은 5% 미만으로 예후가 좋지 못합니다. 따라서 조기 진단을 위한 췌장 및 담도 검진 및 병변 발견 시 주기적인 관리가 꼭 필요합니다.','수술이 불가능한 담낭 및 담도암의 경우 담도 폐쇄가 필수적으로 동반하므로 담도배액술 및 항암 치료를 병행합니다.','일부 환자에서는 광역동성 치료를 통해 국소 병변을 소멸시켜 담도 배액을 보다 오랫동안 유지시키고 주기적인 항암치료를 하여 예후를 향상시킵니다.'],
             sub_context3: ['두 질환 모두 조기 발견 시 수술적인 절제 시 완치가 가능합니다. 하지만 조기 진단율이 20% 미만이고, 수술 대상이더라도 광범위 간 절제나 다장기 절제술이 요구되어 고령 및 기저 질환이 있는 분들은 수술을 주저하며, 특히 수술 후 재발률이 매우 높아 5년 생존율은 5% 미만으로 예후가 좋지 못합니다. 따라서 조기 진단을 위한 췌장 및 담도 검진 및 병변 발견 시 주기적인 관리가 꼭 필요합니다.','수술이 불가능한 담낭 및 담도암의 경우 담도 폐쇄가 필수적으로 동반하므로 담도배액술 및 항암 치료를 병행합니다. 일부 환자에서는 광역동성 치료를 통해 국소 병변을 소멸시켜 담도 배액을 보다 오랫동안 유지시키고 주기적인 항암치료를 하여 예후를 향상시킵니다.'],
             sub_context2: ['가장 큰 원인으로 조기 발견이 어렵기 때문입니다. 이는 수술을 통해 완치가 어렵다는 말과 일맥상통합니다. 췌장 및 담도는 인체의 가장 깊숙한 곳에 위치하므로 혈액 검사와 복부 초음파와 같은 일반적인 진단 기법으로 조기에 병변을 발견하기 어렵고 두 장기의 특성상 질환 초기에 증상이 거의 나타나지 않기 때문에 대부분 병이 많이 진행될 때까지 건강하다고 믿고 생활합니다. 복부 CT 및 MRI 등의 보급으로 진단율이 올라가고 있으나 여전히 조기 진단율은 20% 미만이며, 5년 생존율도 5% 미만으로 극히 예후가 나쁩니다.','최근 초음파내시경(EUS)의 보급으로 1cm 이하의 작은 췌장 종괴를 조기에 발견할 수 있게 되었고 이는 췌장 및 담도암의 획기적인 예후 향상에 도움을 줄 것으로 생각합니다.'],
             sub_context1: ['췌장암은 2018년 기준 국내 통계상 발생률이 9위이나 미국에서는 3위 이내에 드는 비교적 흔한 질환입니다. 췌장암이 최근 들어 국내에서도 점차 증가하는 추세이며 그 원인은 서구화된 식습관으로 인해 지방 및 단백질의 과도한 섭취가 우선이나 원인 불명의 췌장 낭종 증가도 주요한 원인으로 지목되고 있습니다. 지방식의 과다 섭취는 췌장관 세포 및 췌장효소 분비 세포의 손상을 유발하고 유전적 변이를 거쳐 악성종양으로 발전할 수 있습니다.', '한편 점액 분비성 췌장 낭종은 발병 후 시간이 지남에 따라 악성화 가능성이 높아지나, 조기에 발견하고 철저한 추적을 하면 비록 췌장암이 발병하더라도 완치될 수 있는 기회가 높습니다. 담도암은 특히 부산, 울산, 경남 지역에 높은 발병률을 나타내는데, 그 이유는 반복된 민물고기를 날 것으로 섭취함으로써 간디스토마 감염증이 발생하여 이후 담도암으로 발전하는 것으로 알려져 있습니다.'] },
        {cate_no:0, 
            item_no:25,
             img_src:'page-img10.jpg', 
             sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
             pro_context5:'교정발치, 빠른 교정을 위한 피질골절단술, 구개확장, 매복치의 SURGERY적노출, 골신장술',
             pro_context4:'구순구개열, 안면기형',
             pro_context3:'안면골절, 외상 후 부정교합, 외상 후 치아/치조골 재건술(임플란트)',
             pro_context2:'사각턱, 돌출입수술, 무턱, 귀족수술, 턱끝성형술',
             pro_context1:['양악수술, 하악수술, 주걱턱, 안면비대칭, 긴얼굴, 잇몸노출증, 개교합, 무턱','(술전교정수술, 최소교정수술, 선수술, 무교정수술)'],
             pro_title:['턱교정(악교정)클리닉','얼굴윤곽클리닉','악안면외상클리닉','안면기형클리닉','구강악안면SURGERY'],
             sub_context5:['기존의 술전교정(1년이상)/ 수술/술후 교정(6개월)으로 이루어지던 약 2년의 치료기간이 걸리던 것과 달리 선수술은 수술을 먼저 시행하고 수술 후 교정을 시행하는 것으로 그 치료기간이 6개월에서 1년 정도 단축되는 것이 가장 큰 장점이라 할 수 있습니다.'],
             sub_context4:['정확한 치아와 골격의 분석을 통하여 선수술이 가능한 환자는 수술을 먼저 시행하거나 최소교정 후 수술을 시행하여 술전교정 기간 중 교정으로 인한 불편감과 전체치료기간을 줄였습니다. 기존의 치료가 약 2년의 치료기간(술전교정[1년이상] / 수술 / 술후 교정[6개월])인 것과 달리 선수술은은 수술을 먼저 시행하고 수술 후 교정을 시행하는 것으로 그 치료기간이 6개월에서 1년 정도 단축되는 것이 가장 큰 장점이라 할 수 있습니다.'],
             sub_context3:['ON Hospital 턱ㆍ얼굴(악안면)수술센터는 최신의 장비를 이용하여 수술전 분석(2D cephalometry/3D CT/model 분석)을 시행하여 환자 개인에 맞는 최상의 수술계획을 수립하고 있습니다.'],
             sub_context2:['환자중심의 CENTERS One-stop/ One-way(외래/수술준비/입원/수술)시스템 및 턱ㆍ얼굴(악안면)수술환자을 위한 1인실/2인실 입원시스템 그리고 복잡한 과정(접수/대기/반복내원)을 줄여 불편감을 최소로 하였습니다.'],
             sub_context1: ['ON Hospital MAXILLOFACIAL SURGERY는 최고 수준의 진료를 제공하기 위하여 구강악안면SURGERY 의료진을 중심으로 OTOLARYNGOLOGY 전문의, 마취통증 의학과 전문의 등 체계화된 협진체제로 구성되어 정확한 평가와 치료와 수술 후 최상의 결과를 제공하고 있다.']},
        {cate_no:0, 
            item_no:26,
             img_src:'26_.jpg', 
             sub_title:['', 'SPECIALTY'], 
             sub_context2: ['암수술/폐·흉부종양의 흉강 내시경 수술','다한증(손발겨드랑이 다한증 및 겨드랑이 땀냄새)의 수술 및 비수술적 치료','기흉/하지 정맥류/누두흉(오목가슴)등의 흉벽기형'],
             sub_context1: ['심장, 폐 기관, 식도, 대동맥 등 생명 유지에 기본이 되는 중요 장기의 질환 진단 및 수술', '부산.경남 최초 흉강경이용 폐엽절제술 성공']},
        {cate_no:0, 
            item_no:27,
             img_src:'27_.jpg', 
             sub_title:['INTRODUCTION', 'SPECIALIZED CLINICS'], 
             bold:'항암 방사선 치료',
             sub_context5: ['- ON Hospital 방사선 치료 안내.pdf', '다운로드'],
             sub_context4: ['단순히 방사선을 쬐는 것만으로는 방사선 치료가 이루어지는 것은 아닙니다.','종양의 크기, 퍼진 정도, 형태와 분화도 및 종양의 방사선에 대한 민감도 등을 모두 감안하여 방사선량, 치료기간 등이 결정되며, 여기에 환자의 건강상태 등도 고려되어야 합니다.', '따라서 방사선 치료를 위해서는 숙련된 의료진과 진단장비 및 첨단 방사선치료기기가 필수적이며, 아울러 질환에 적합한 치료 기법을 선택할 수 있도록 다양한 치료기법을 시행 할 수 있는지도 고려 되어져야하고, 정상세포에 대한 영향을 최소화 하기 위해 고도의 기술적 축적이 요구 됩니다.'],
             sub_context3: ['방사선치료기법의 발전으로 인체 암에 대해 방사선을 조사할 때 과거에 비하여 종양주변 정상조직에는 방사선을 크게 줄이고, 종양조직에만 고선량의 방사선을 조사 할 수 있게 되었으며, 이로 인하여 방사선치료와 연관 된 합병증은 낮게 유지하면서 종양에 대한 제어율을 크게 높아졌습니다. ',' 이와 같은 방사선 치료 선진국에서 전체 암 환자의 60%가 방사선치료를 받을 정도로 방사선치료가 암 치료에 지대한 역할을 담당하고 있습니다.'],
             sub_context2: ['방사선 치료는 방사선이 발생되는 장치(라이낙 치료기)혹은 방사선 동위원소를 이용하여 고에너지 방사선을 조사하여 암세포를 죽이는 치료법입니다.','방사선 치료에 사용되는 방사선은 파장이 매우 짧고 높은 에너지를 갖고 있으며, 인체에 조사될 경우 핵산에 변성을 초래하여 종양 세포를 죽이게 되며, 암세포에 집중적으로 방사선을 조사하면 암세포를 파괴하고 더 이상 증식되는 것을 막아줍니다.','이 경우 주변의 정상 세포도 방사선의 영향을 받지만 정상세포는 종양세포보다 빠르게 회복되는 잇점과 대부분의 손상이 빠르게 회복되어 영향을 최소화 할 수 있습니다. 방사선은 암세포처럼 빠르게 증식하는 조직에 대하여 파괴 효과가 높기 때문입니다.'],
             sub_context1: ['항암 방사선 치료센터는 방사선을 이용하여 환자를 치료하는 임상의학의 한 방법으로, 수술, 항암 화학 요법과 더불어 3대 암 치료 중 하나입니다.']  },
        {cate_no:0, 
            item_no:28,
             img_src:'28_.jpg', 
             sub_title:['"ON Hospital 호스피스 완화의료병동은 이렇게 운영 됩니다."', '호스피스 완화의료에 대한 오해와 진실'], 
             top_small:'호스피스 완화의료 서비스는 `포기`가 아닌 적극적인 `치료와 돌봄`으로 말기 암 환자의 신체적 증상을 조절하고 환자와 가족의 심리사회적, 영적 어려움을 도와 삶의 질을 향상시키는 것을 목표로 하는 의료서비스입니다.',
             top_li:['보건복지부 지정 호스피스 완화의료 병동 운영', '말기 암 환자를 대상으로 입원형 호스피스 운영', '본인부담 5%으로 최저비용, 최고효율 효과! 의료도우미 제공!', '최고의 시설, 쾌적한 환경의 임원병동 운영'],
             main_title:['호스피스 완화의료는 삶을 포기하고, 죽음을 기다리는 것이다?', '호스피스 완화의료 기관에서는 아무것도 하는 게 없다?', '호스피스 완화의료 기관에서는 가족과 함께 지낼 수 없다?', '호스피스 완화의료는 비용이 비싸다?'],
             main_num:['1', '2', '3', '4'],
             main_red_text:'NO! 아닙니다!',
             sub_context4: ['건강보험이 적용되어 암환자는 본인 부담 5%만 적용됩니다.', '다만, 상급병실료나 특진비 등 Billing and Insurance 항목은 일부의 비용을 부담할 수 있습니다.'] ,
             sub_context3: ['가족이 함께 지낼 수 있으며, 가족의 심리적, 사회적 어려움에 대해서도 도움을 받으실 수 있습니다.'] ,
             sub_context2: ['환자가 겪고 있는 통증, 섬망 등의 증상에 대해 완화전문 의료진으로 부터 통증관리 및 증상을 조절하고 삶을 의미 있게 보내실 수 있도록 심리치료, 마사지, 음악요법, 미술요법 등 다양한 프로그램을 제공하고 있습니다.'] ,
             sub_context1: ['통증, 구토, 호흡곤란, 복수 등의 신체적 증상을 적극적으로 치료하고 심리적, 사회적, 영적인 어려움을 도와드리기 위해 각 분야의 전문가가 팀을 이루어 삶의 질 향상을 목표로 하는 의료서비스입니다.', '증상조절이 되면 퇴원 후 일상생활을 할 수 있습니다.'] },
        {cate_no:0, 
            item_no:29,
             img_src:'', 
             sub_title:['#안전한 병원치료#음압시스템#유기적인 협진시스템'], 
             circle_border:'교수출신 호흡기·알레르기·결핵',
             circle_text:['폐렴', '폐암', '만성 폐쇄성 폐질환 COPD'],
             sub_context3:['주요 진료 분야는 만성 폐쇄성 폐질환, 기관지 천식, 폐암, 폐렴, 폐결핵, 만성기침, 기관지 확장증, 간질성 폐 질환, 호흡부전, 흉막 질환(기흉, 흉막염, 흉수, 농흉), 식도암, 종격동 종양, 다한증, 오목가슴, 기관 협착 등이며 폐암 진단 시 정기적이고 지속적인 관리를 해드립니다. 저희 Respiratory 의료진 모두는 환자분들 편에 서서 여러분의 고통을 해결해 드리기 위해 최선을 다할 것으로 약속드립니다.'],
             sub_context2:['Respiratory는 DEPARTMENT OF <SPAN>RESPIRATORY MEDICINE</SPAN>와 THORACIC SURGERY로 구서오디어 있어 질병의 정확한 진단, 치료 및 수술까지 빠르고 정확하게 진료할 수 있습니다.', '또한 관련 DEPARTMENT와 협진을 통해 여러 분야의 전문의들이 모여 환자 중심의 진료를 받을 수 있습니다.'],
             sub_context1: ['우리 사회의 고령화 추세가 높아지면서 호흡기계 중증 질환자의 수가 급격하게 증가하고 있습니다.','이처럼 호흡기계 질환자의 증가에 따라 효율적인 진료를 위해 Respiratory를 개설, 운영하고 있습니다.'] },
    ]
]

const CENT_TITLE = [
    [
        {cate_no:0, item_no:1, title:'Hepatobiliary Pancreatic / Gastric / Colorectal Cancer', icon_src:'medi_w_cetner_1',},
        {cate_no:0, item_no:2, title:'Liver', icon_src:'medi_w_cetner_2',},
        {cate_no:0, item_no:3, title:'Infection', icon_src:'medi_w_cetner_3',},
        {cate_no:0, item_no:4, title:'Proctology', icon_src:'medi_w_cetner_4',},
        {cate_no:0, item_no:5, title:'Pediatrics & Adolescent Mental Health', icon_src:'medi_w_cetner_5',},
        {cate_no:0, item_no:6, title:'소화기내Neurology', icon_src:'medi_w_cetner_6',},
        {cate_no:0, item_no:7, title:'Gastrointestinal Cancer Surgery', icon_src:'medi_w_cetner_7',},
        {cate_no:0, item_no:8, title:'Neurology', icon_src:'medi_w_cetner_8',},
        {cate_no:0, item_no:9, title:'Cardiocerebrovascular', icon_src:'medi_w_cetner_9',},
        {cate_no:0, item_no:10, title:'Allergy', icon_src:'medi_w_cetner_10',},
        {cate_no:0, item_no:11, title:'Cancer Rehab Program', icon_src:'medi_w_cetner_11',},
        {cate_no:0, item_no:12, title:'Women`s Cancer', icon_src:'medi_w_cetner_12',},
        {cate_no:0, item_no:13, title:'Breast/Thyroid Cancer', icon_src:'medi_w_cetner_14',},
        {cate_no:0, item_no:14, title:'Breast Cancer', icon_src:'medi_w_cetner_14',},
        {cate_no:0, item_no:15, title:'Emergency Center', icon_src:'medi_w_cetner_15',},
        {cate_no:0, item_no:16, title:'Bioartificial Kidney', icon_src:'medi_w_cetner_16',},
        {cate_no:0, item_no:17, title:'Intreventional Surgery', icon_src:'medi_w_cetner_17',},
        {cate_no:0, item_no:18, title:'Funeral Home/Mortuary', icon_src:'medi_w_cetner_18',},
        {cate_no:0, item_no:19, title:'Rehabilitation Treatment', icon_src:'medi_w_cetner_19',},
        {cate_no:0, item_no:20, title:'Prostate & Dysuria', icon_src:'medi_w_cetner_20',},
        {cate_no:0, item_no:21, title:'Prostate Cancer', icon_src:'medi_w_cetner_21',},
        {cate_no:0, item_no:22, title:'Spondyloarthropathy', icon_src:'medi_w_cetner_22',},
        {cate_no:0, item_no:23, title:'Ultrasonic diagnosis', icon_src:'medi_w_cetner_23',},
        {cate_no:0, item_no:24, title:'Pancreatobiliary Cancer', icon_src:'medi_w_cetner_24',},
        {cate_no:0, item_no:25, title:'Maxillofacial Surgery', icon_src:'medi_w_cetner_25',},
        {cate_no:0, item_no:26, title:'Lung Cancer', icon_src:'medi_w_cetner_26',},
        {cate_no:0, item_no:27, title:'Chemotherapy Radiation', icon_src:'medi_w_cetner_27',},
        {cate_no:0, item_no:28, title:'Hospice & Palliative Care', icon_src:'medi_w_cetner_28',},
        {cate_no:0, item_no:29, title:'Respiratory', icon_src:'medi_w_cetner_29',},
    ]
]
const HOSPI_TITLE = [
    [
        {cate_no:0, item_no:1, title:'Liver'},
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


const CENT_BANNER = [
    [{}]
]



// 수정한 거
// const CENT_LIST = [
//     [
//         {cate_no:0, 
//             item_no:1, 
//             img_src:'', 
//             sub_title:[
//              '', 
//             ''
//         ], 
//             sub_context1: [
//                 'ON Hospital은 간, 담도계 및 췌장내 악성종야에 대해 풍부한 임상경험과 전문지식을 갖춘 DEPARTMENT OF GASTROENTEROLOGY, 종양내과, Department of Hepatobiliary and Pancreatic Surgery, Radiation Oncology Department, DEPARTMENT OF RADIOLOGY, 병리과 전문의들이 주축이 되어 전문의들이 모여 진단에서부터 치료까지 환자중심의 유기적인 협조체계를 구축하고 상호 협력함으로서 환자의 빠른 진단 및 환자 개개인에 맞는 최장의 치료를 제공 하고 있습니다.',
//                 '일반적으로 담도계 및 췌장내 악성종양의 예후는 타 장기악성종양에 비해 치료 결과가 좋지 않다고 합니다.',
//                 '그러나 영상진단의 정확도가 증가하고, 수술 술기의 발전으로 절제율이 향상되고 있으며 수술 후 합병증의 발병율이 낮아지고 있습니다. 또한 수술 후에 여러 보조적 치료 약제의 개발과 방사선치료 방법이 향상되어 치료 결과는 느리지만 차츰 향상되고 있습니다.',
//                 '간암에 대한 여러 치료법이 개발되고 활용됨에 따라 최적의 치료를 받게 되면 좋은 결과를 예상할 수 있습니다.',
//                 '또한 담도계 및 췌장내 악성종양들을 대상으로 진단, 수술, 수술 전후 항암화학요법, 방사선치료 등 전문적인 진단과 치료를 제공하여 환자의 치료율과 질적향상을 도모하고 있습니다.'
            
//             ] },
//         {cate_no:0, 
//             item_no:2, 
//             img_src:[
//              '2_1.jpg', 
//             '2_2.jpg'
//         ], 
//             sub_title:[
//              '',
//             ''
//         ], 
//             num:[
//              '051)607-0350', 
//             '051)607-0745/0257'
//         ],
//             num_bold:[
//              'Liver Center Outpatient Clinic',
//             '(3F)', 
//             'Liver Center Reception/Payment'
//         ],
//             table_th:[
//              'High-frequency ablation therapy', 
//             'Transarterial chemoembolization (TACE)', 
//             'Transarterial chemoinfusion'
//         ],
//             table_td:[
//                 'A treatment for liver cancer in which a needle is inserted into the cancerous lesion and high-frequency energy is delivered through the needle. This results in the generation of heat at a temperature of at least 50°C, destroying liver cancer cells', 
//                 'A treatment for malignant liver tumors aimed at curing multiple or giant tumors. It involves injecting anticancer drugs slowly through a catheter inserted into the hepatic artery to reach the liver.', 
//                 'A procedure that involves delivering anticancer drugs and embolic agents into the artery that supplies the tumor through a catheter, blocking the blood supply to the tumor and destroying it.'
//             ],
//             sub_context1: [
//                 'Offering new hope with a treatment success rate of 60% for those suffering from liver cancer!', 
//                 'The medical team is composed of liver specialists with university professor backgrounds', 
//                 'Successful thoracoscopic lung lobectomy, the first of its kind in Busan and Gyeongnam'
            
//             ] },
//         {cate_no:0, 
//             item_no:3, 
//             img_src:'', 
//             sub_title:[ '',
//             '감염관리팀 주요업무'
//         ], 
//             text:'감염관리팀은 감염관리위원회와 상호 협력하여 의료관련 감염 예방과 관리 활동을 진행한다.',
//             li_text:[
//                 '감연관리 규정 제정 및 개정', 
//                 '의료관련감염 감시 및 감염관리내용 모니터링', 
//                 '유행발생 관리', 
//                 '법정감염병 관리', 
//                 '의료기구의 세척, 소독, 멸균 관리', 
//                 '감염관리 교육 및 홍보', 
//                 '병원직원의 감염관리', 
//                 '환경관리',
//                 '감염관리에 대한 지문',
//                 '지역사회 네트워크 감염관리활동 참여'
//             ],
//             sub_context1: [
//                 '환자와 방문객 모두에게 의료관련감염으로부터 안전한 환경을 제공하기 위하여 병원환경에 노출된 모든 사람간의 감염 획득 및 전파의 위험을 파악하고 의료관련감염을 감소시키는 활동을 수행하고 있씁니다.',
//                 '감연관리팀은 감염관리위원회와 상호 협력하여 의료관련 감염 예방과 관리 활동을 진행한다.'
//             ]  },
//         {cate_no:0, 
//             item_no:4, 
//             img_src:'4_.jpg', 
//             sub_title:[
//              'INTRODUCTION', 
//             'SPECIALIZED CLINICS'
//         ], 
//             sub_context1: [
//                 '치핵, 치열, 치루 및 항문통, 항문소양증, 항문성병',
//                 '변비나 배변장애, 과민성 대장증후군, 염증성 장질환',
//                 '온 종합병원 Proctology는 최소침습수술을 비롯하여 다양한 방법을 통하여 환자들에게 치료의 기회를 제공하고 있습니다.',
//                 '또한 전문화된 세부 DEPARTMENT 등의 협진을 통하여 전문적인 치료를 제공하고 있습니다.',
//                 '특히 고난이도의 수술을 요하는 대장암에서부터 항문질환 등에 이르기까지 빠르고 편안한 진료가 될 수 있도록 노력하고 있습니다. 해당 특수 클리닉과 연계, 치료하여 항문질환 뿐 아니라 항문 질환의 원인에 대한 적절한 치료가 이루어질 수 있도록 하는 역할을 담당하고 있습니다.',
//                 '또한 여러 기능적 직장항문질환도 급격히 그 빈도가 증가하고 있습니다.',
//                 '이런 상황에서 온 종합병원 Proctology는 우수한 대장항문 전문 의료진을 모시고 최첨단 의료장비를 활용하여 최고 수준의 진료를 제공합니다. 같은 질병이라도 환자의 상태에 따라서, 또 같은 환자에게라도 질병의 진행에 따라서 최적의 진료가 다를 수 있습니다.',
//                 '현대화와 서구화가 계속 될수록 대장항문 질환은 늘어 갈 것으로 예상됩니다. 대장암은 지난 10년간 가장 많이 증가된 암으로 우리나라 발생 암 중 4번째에 해당되고, 앞으로도 지속적으로 증가하고 있습니다.',
//                 '온 종합병원 Proctology는 대장항문질환에 대한 정확한 지식을 전달하고, 상담하며, 환자에 대해서는 최적의 치료를 시행하려고 노력하고 있습니다.',
            
//             ] },
//         {cate_no:0, 
//             item_no:5, 
//             img_src:'5_.jpg', 
//             sub_title:[
//                 '주의력결핍 과일행동장애(ADHD)', 
//                 '학습장애', 
//                 '학교공포증-분리불안장애', 
//                 '따돌림 당하는 아스퍼거장애'
//             ], 
//             bold_top:[
//                 '"아침마다 학교에 가기 싫어해요"', 
//                 '"머리는 좋은 것 같은데 성적이 안 나오네요"', 
//                 '"학교에서 또래 친구들 사이에서 왕따를 당하는 것 같아요."'
//             ],
//             small_top:[
//                 '가족이라는 울타리에서 벗어나 또 다른 세계로 발을 내디딘 아이들에게 학교생활은 도전이고 모험일 수 있다. 과잉행동장애, 학습장애, 아스퍼거 장애, 분리불안장애 등 성장기 아동들에게 나타나는 대표적인 정신건강 질병에 대한 전문적인 치료와 진단을 시행한다.'
//             ],
//             sub_context1:[
//                 '이외에도 뉴로피드백 치료와 심리검사 등을 시행하며 소아청소년뿐만 아니라 성인 정신건강 상담 및 치료도 진행된다.',
//                 '높은 지능과 독특한 분야에 흥미를 가진 아동임에도 불구하고 가족 또는 학교생활에 적응하지 못해 상당한 장애를 겪는다. 하지만 나중에 대학교수나 예술가가 되는 경우도 있는 것으로 보고되고 있다. 근본적으로 상태를 완치할 수 있는 방법은 현재로선 없다. ', 
//                 '다만 특수교육을 통해 사회적응능력을 키워주고 반복적인 좌절로 인한 우울 증세를 치료하는 것이 필요하다.',
//                 '사물의 판단 및 언어구사 능력은 충분함에도 불구하고 사회적 상호작용과 감정교류에 실패하는 사람들이 이에 속한다.',
//                 '분위기 파악을 제대로 못해 또래 친구들로부터 따돌림을 당하는 ‘왕따’ 현상이 일어난다. 얼굴표정이나 제스처 등을 사용한 의사표현의 장애를 보이며 상황에 맞게 음량 조절을 못하기도 한다.',
//                 '심하게 분리불안이 있을 때에는 강제로 혼자 가게 하는 것보다는 한 달 이내의 기간 동안 아이와 함께 학교에 가서 교실 밖에서 기다리거나 수업시간에 함께 참가하는 것도 해결방법이 될 수 있다. 그래도 호전되지 않으면 소아정신과를 찾아 상담하는 것이 좋다. 소아청소년 DEPARTMENT OF PSYCHIATRY에서 심리검사를 통해 원인을 파악한 후 놀이치료 미술치료 부모교육을 실시하며 약물치료도 할 수 있다.',
//                 '학교공포증은 아이가 반복적으로 학교 가기를 싫어하고 억지로 가도록 하면 불안해지거나 공황상태에 빠지는 경우를 말한다.',
//                 '학교를 두려워하기보다는 어머니와 헤어지는 것을 두려워하는 것이라 할 수 있다. 아침이나 주말 저녁이 되면 배가 아프다거나 머리가 아프다고 하는 등 신체증상을 호소한다. 억지로 가도록 하면 불안해지거나 과격한 저항행동을 보이기도 하고 숨거나 도망을 가기도 한다. 이럴 경우 아이가 어떤 핑계를 대더라도 꼭 학교에 가는 것을 원칙으로 할 필요가 있다.',
//                 '학습장애는 원인이 다양하기 때문에 실제로 아이가 어떤 어려움을 겪고 있는지 원인을 먼저 찾는 것이 중요하다. 주의력결핍 과잉행동장애를 제외하고는 약물치료는 일차적인 치료가 아니다. 적절한 교육적 접근과 환경·정서적인 지원 등이 중요하다.',
//                 '간혹 학습장애가 아닌데도 학습장애로 여기는 부모들이 있다. 대개 한두 명의 자녀를 키우는 요즘, 부모들의 기대심리가 커 아이들을 조급하게 몰아세우는 경우도 흔하다는 얘기다.',
//                 '정상 또는 정상보다 높은 지능지수를 가졌으나 뇌와 신경계통의 기능이상으로 학습 성취도가 떨어지는 경우를 말한다.',
//                 '뇌신경계통의 발달과정에서 생기는 일종의 발달장애다. 학습장애는 듣기, 생각하기, 말하기, 읽기, 철자, 수학적 계산 등에서 나타날 수 있다. 학습문제는 이 외에도 지능지수가 70 이하로 낮거나 기질적인 뇌손상을 가진 어린이에서 학습 성취도가 떨어지는 ‘학습지체’, 지능지수가 75∼85 정도로 신경계의 이상은 없는데 정서적인 문제나 환경적인 문제로 인한 ‘학습부진’ 등도 있다.',
//                 '최근 각종 언론에서 주목하고 있는 주의력결핍 과잉행동장애(ADHD)는 잠시도 가만히 있지 않고 말이 많거나 부주의한 실수가 잦으며 충동성이 강한 특징을 나타낸다.',
//                 '흔히 생후 초기부터 까다롭다거나 활동이 많은 특징을 보이는 수가 많다. 그러다가 유치원이나 초등학교에 들어가 단체생활을 시작하면서 흔히 발견된다. 여아보다 남아에게서 3~4배가량 더 많이 발병한다고 보고되고 있다. 약 70~80%는 만 4세 이전에 발병되는 것으로 알려져 있다.',
//                 '전문가들은 ADHD의 원인에 대해 유전적 요인, 뇌의 전두엽 기능 저하로 인한 신경전달물질의 이상, 출산과정에서의 뇌손상 등으로 본다. 증상이 나타날 경우 아이나 부모의 잘못이 아니므로 아이를 나무라거나 부모 스스로 자책해서는 안 된다. 문제가 심각하지 않으면 약물치료 없이 환경조절이나 부모상담, 행동수정방법 등을 우선적으로 시행한다. 그러나 상태가 중한 경우에는 중추신경자극제와 항우울제 등을 이용한 약물치료를 해야 한다.'
//             ]  },
//         {cate_no:0, 
//             item_no:6, 
//             img_src:'6_.jpg', 
//             sub_title:[
//              'INTRODUCTION', 
//             'SPECIALIZED CLINICS'
//         ], 
//             sub_context2:[
//                 '소화기질환(위,식도), 위염, 위궤양, 역류성식도염 등', 
//                 '췌ㆍ담도질환, 간질환 전문', 
//                 '위, 대자애시경.용종절제술/소화기 내시경 클리닉'
//             ] , 
//             sub_context1: [
//                 'IN LINE WITH THE REALITY OF KOREAN DIETARY HABITS BECOMING MORE WESTERNIZED, THERE IS A TREND OF A RAPID INCREASE IN PATIENTS WITH DIGESTIVE SYSTEM DISEASES.',
//                 '이에 온 종합병원에서는 보다 질 높은 의료서비스를 제공하기 위하여 DEPARTMENT OF GASTROENTEROLOGY, SURGERY, DEPARTMENT OF RADIOLOGY 등 소화기질환 관련 진료 과들의 유기적인 협진 시스템을 바탕으로 소화기내시경센터를 개설하였습니다.',
//                 '온 종합병원의 소화기내시경센터는 높은 수준의 진료를 신속하고 편안하게 받으실 수 있도록 최고의 의료진, 첨단 의료장비, 선진 진료체계를 갖추고 있습니다.', 
//                 '또한, 소화기질환 환자의 병원 방문의 증가에 비례하여 증가하는 내시경검사의 적체를 해소하기 위하여 내시경 검사 전담 의료진을 육성 배치하고 첨단 의료장비를 다수 보유, 인원 및 장비의 효율적 관리를 통하여 차별화된 내시경 검사가 이루어지도록 하였습니다.', 
//                 '각 분야 초괴 수준의 임상 경험 및 선진 기술을 바탕으로 세계적인 수준의 진료를 지향하고 있습니다.',
//                 ' 이에 온 종합병원 소화기내시경센터는 환자들이 좀 더 편리하게 최상의 진료를 받을 수 있도록 끊임없이 노력하겠습니다.'
//             ], },
//         {cate_no:0, 
//             item_no:7, 
//             img_src:'page-img1.jpg', 
//             sub_title:[
//              'Hepatopancreatobiliary Surgery',
//             'SURGERY', 
//             'Gastroenterology and Endoscopy Center'
//         ], 
//             black_bold:[
//              'Upper and lower gastrointestinal endoscopy clinics', 
//             'HEPATOPANCREATOBILIARY ENDOSCOPY CLINIC'
//         ],
//             small_phone:[
//              '051)607-0707', 
//             '051)607-0230', 
//             '051)607-0244,0257'
//         ],
//             chk_text:[
//                 'TOP-NOTCH MEDICAL AND ADVANCED FACILITIES LIKE UNIVERSITY HOSPITALS', 
//                 'ONE-STOP SURGERY AND HOSPITALIZATION SERVICES IMMEDIATELY UPON DISCOVERING THE DISEASE', 
//                 'RESERVATIONS FOR UPPER AND LOWER GASTROINTESTINAL ENDOSCOPY AVAILABLE ON DESIRED DATES', 
//                 ' 검사 즉시 결과 설명', 
//                 'SPECIALIZATION IN HEPATOPANCREATOBILIARY ENDOSCOPY (ERCP)', 
//                 ' ENDOSCOPE EQUIPMENT WITH ULTRASOUND MICRODISINFECTION'
//             ],
//             sub_context1: [
//                 'The most difficult field in the field of surgery, which treats diseases that occur in organs such as the liver, bile duct system, spleen, pancreas, and other organs', 
//                 'Professor Park Kwang-min has a success rate of "10,000 surgeries" in hepatopancreatobiliary surgery', 
//                 'Specializes in the treatment of gastric cancer, colorectal cancer, rectal cancer, and other intestinal diseases', 
//                 'USING THE STATE-OF-THE-ART OLYMPUS CV290 EQUIPMENT, WITH HIGH-RESOLUTION AND CLEAR IMAGE QUALITY'
            
//             ] },
//         {cate_no:0, 
//             item_no:8, 
//             img_src:'8_.jpg', 
//             sub_title:[
//              'Neurology에서 다루는 질환과 증상은 다음과 같습니다.', 
//             ''
//         ], 
//             table_td:[
//                 '고령사회로 접어들면서 사회문제가 되고 있는 치매 및 기억장애를 진단하고 치료합니다.',
//                 '반복되는 의식소실과 사지경련을 보이는 경련발작의 원인을 찾아 치료합니다.', 
//                 '뇌경색, 뇌출혈에 의한 반신마비, 언어장애를 치료하고 예방합니다.', 
//                 '손 떨림(수전증), 파킨슨씨병 등 이상운동질환을 진단하고 치료합니다.', 
//                 '손발 저림, 근력 약화, 근육위축, 안면마비, 눈꺼풀 처짐 등의 원인을 규명하고 치료합니다.', 
//                 '흔히 경험하는 두통은 뇌질환의 초기증상일 수 있습니다. 두통의 원인을 감별하고 치료합니다.', 
//                 '불면증, 수면발작, 낮 동안의 과도한 졸음, 수면무호흡증을 진단하고 치료합니다.',
//                 '균형감각을 유지하기 위해서는 신경계의 정교한 기능이 필수적이며, 어지럼증을 유발하는 원인을 규명하고 치료합니다.', 
//                 '고열, 두통, 구토를 동반하는 뇌수막뇌염과 뇌염을 진단하고 치료합니다.', 
//                 '위에 열거한 질환 외에도 신경통, 다발성 경화증, 선천성 혹은 유전성 신경계 질환을 진단하고 치료합니다.'
//             ],
//             table_th:[
//                 '치매', 
//                 '간질', 
//                 '뇌졸증', 
//                 '운동장애', 
//                 '말초신경 및 근육질환', 
//                 '두통', 
//                 '수면장애', 
//                 '어지럼증', 
//                 '신경계 염증', 
//                 '기타'
//             ],
//             sub_context1: [
//                 '온 종합병원 Neurology는 뇌와 척수(중추신경), 말초신경 및 근육에 발생하는 질환을 진단하고 치료하며 신경계 질환의 원인을 규명하고 나은 치료방법을 연구하고 있습니다.', 
//                 '치매클리닉, 간지클리닉, 뇌졸중 클리닉, 말초신경 및 근육질환 클리닉 등 전문 클리닉과 신경심리검사실, 뇌파검사실, 근전도검사실 등 틀수검사실을 운영하여 보다 전문적인 진료와 치료에 최선을 다하고 있습니다.'
//             ] },
//         {cate_no:0, 
//             item_no:9, 
//             img_src:'9_.jpg', 
//             sub_title:[
//              '',
//             ''
//         ], 
//             sub_context1: [
//             '부산 최대 도심 서면에 위치한 ON Hospital은 24시간 대기하는 Cardiocerebrovascular 운영을 통해 골든타임을 다투는 응급환자를 신속하고 편리하게 양질의 응급의료 서비스를 제공하도록 노력하겠습니다.',
//             '또한, 뇌혈관 질환 조기 발견과 체계적인 관리를 위해 뇌혈관시술 전문의와 심장혈관전문의 최고의 전문수술팀의 협진체제를 구성하여 함께 센터를 운영하고 있습니다.',
//             'ON Hospital Cardiocerebrovascular는 미래형 최첨단 혈관수술장비인 필립스사의 바이플랜 안지오(Biplane Angio)를 도입하여 3차원 영상을 통해 미세한 정맥 혈관까지 선명하게 파악할 수 있으며, 검사시간이 짧아 환자에게 투여되는 방사선량도 줄여준다. 팔다리 혈관, 척추 및 척수 혈관 질환, 척추 종양 같은 중추신경계와 두부경 질환까지 치료가 가능합니다.',
//             '치료 못지않게 중요한 심장 및 뇌, 혈관 등의 관리방법은 본인에게 맞는 꾸준한 운동을 하고, 짜고, 기름진 음식 등은 조절하시고 과음 및 금연을 삼가하며, 특히 고혈압, 당뇨병, 고지혈증 등의 만성질환이 있는 경우 항상 건강수치를 체크하는 것을 생활화 하는 것이 가장 중요합니다.',
//             'Cardiocerebrovascular에서는 내과와 협진을 통해 고혈압, 당뇨병, 흡연 등 뇌졸중의 위험인자를 적극적으로 관리하고, 자기공명영상(MRI)와 자기공명뇌혈관촬영(MRA)등 검사가 이루어지며, 대퇴동맥을 통해 뇌혈관을 검사하는 뇌혈관조영술로 혈관상태를 아주 정확하고 정밀하게 검사하고 중재적 방사선 시술을 통해 치료합니다.',
//             '또한, 뇌졸중은 뇌혈관이 막히거나 터져서 영양분과 산소를 공급하는 피가 뇌에 통하지 않아 뇌세포가 망가진 상태를 말하며, 뇌에 혈액을 공급하고 있는 혈관이 막히거나 터짐으로써 그 부분이 손상되어 나타나는 뇌졸중(중풍)을 전문적으로 예방하고 치료합니다.',
//             '심근경색은 주로 죽상동맥경화가 원인이며 가슴의 흉통으로 시작되고 수분이상 지속 경우가 해당됩니다. Cardiocerebrovascular는 흉통을 호소하는 경위는 심전도, 24시간 심전도, 심장초음파, 운동부하검사, CT, MRI 검사 등이 이루어지고 있으며, 관상동맥조영술을 통해 협착 혈관이 발견되면 관상동맥 중재술로 시술이 가능합니다. 급성 응급상황에서는 골든타임(혈관 막힘 후 2시간)내에 막힌 혈관을 뚫는 심혈관성형술, 스텐트삽입술 등 중재술의 빠른 시행이 매우 중요합니다.',
//             '심뇌혈관의 대표적 관상동맥질환의 심근경색, 협심증, 뇌혈관질환의 뇌졸중 등은 조기 사망의 80%는 고혈압, 당뇨병, 고지혈증 등의 만성질환과의 합병증으로 인한 발병 또는 환경적, 직업적 위험인자로부터도 직·간접 영향을 많이 받습니다.',
//             '최근 질환 사망원인 상위 10위 중 7개가 만성질환이며, 그 중에서도 심뇌혈관질환이 발생 빈도가 가장 높습니다. 고령화는 발생률이 계속 증가되고 있으며, 치료술의 많은 발달로 대조적으로 치명률은 감소되고 있습니다. 하지만 질환 후유로 인한 장애율 또한 증가 추세입니다. 적절한 관리와 치료는 질환 발생률을 낮추며 급성(심근경색, 뇌졸중 등) 발병 경우 빠른 조기대응이 중요하며 적절한 시술과 치료는 장애율을 낮출 수 있습니다.'
//         ] },
//         {cate_no:0, 
//             item_no:10,
//              img_src:'10_.jpg', 
//              sub_title:[
//              '1. 천식', 
//              '2. 아토피 피부염', 
//              '3. 알레르기비염'
//             ], 
//              top_text:[
//              '알레르기센터', 
//              '는 다양한 외부물질에 대한 과민한 면역반응으로 인해 발생하는 질환들을 전문적으로 진료하는 곳입니다.', 
//              '알레르기반응은 기관지 천식, 알레르기 비염, 만성기침 등 호흡기 알레르기질환과 아토피피부염, 두드러기 및 혈관부종 등의 피부 알레르기질환, 다양한 증상들이 복합적으로 나타날 수 있는 아나필락시스, 호산구증다증, 음식물, 약물, 벌독, 운동 알레르기 등을 포함합니다.'
//             ],
//              sub_context1: [
//              '천식환자의 기도는 예민하여 쉽게 자극을 받으며, 자극을 받으면 기도 안쪽이 붓고 가래가 생기며 기관지를 둘러싼 근육이 수축하여 기도가 좁아지게 됩니다. 기도가 좁아지면 기침이 나고, 가슴이 답답하거나 숨쉬기가 어려워지며 숨쉴떄 썍썍소리(천명)가 나는 등의 증상을 나타낼 수 있습니다.', 
//              '천식 악화에 관여하는 위험요인에는 집먼지진드기, 애완동물, 바퀴, 곰팡이, 꽃가루, 곰팡이와 감기, 폐렴 등의 호흡기 감염, 직접 또는 간접 흡연, 그리고 실내 및 실외의 대기오염 등이 있습니다. 기침이나 쌕쌕거리는 숨소리가 나고, 쉽게 없어지지 않으며 자주 반복된다. 감기를 앓고 나서도 기침이 자꾸 난다. 운동 중에 숨이 차거나 기침이 심해 더 이상 계속할 수 없는 경우도 있습니다.', 
//              '천식을 성공적으로 관리하려면 처방받은 약물을 규칙적으로 정확하게 사용해야 합니다. 검사 결과에 따라 각각의 천식환자는 중등도와 원인 및 유발인자에 따라 개인별로 약물치료, 면역치료 등을 실시하게 됩니다.',
//              '또한 악화인자를 피하기 위해 환경을 잘 관리 해야 합니다.', 
//              '유아 및 소아기에 주로 나타나는 만성 재발성의 피부염으로 가려움증과 함께 특징적인 분포와 형태를 보이는 피부 병변을 가지고 있습니다.', 
//              '가려움증은 가장 특징적인 증상으로 주로 초저녁이나 한밤중에 심하고, 이로 인해 환아는 침구나 침대면에 얼굴을 쉴새없이 긁게 되어 피부에 수포와 딱지가 생기며, 2차 세균 감염이 잦습니다.',
//              '건조한 피부, 감염, 조이는 의복, 집먼지진드기, 화학 섬유와 모직, 더위 등은 아토피 피부염의 가려움증을 악화시킬 수 있습니다.',
//              '목욕은 피부의 감염을 예방하고 적절한 피부 보습을 위해 필요하며, 필요한 경우에는 보습 효과가 있는 비누를 사용해야 합니다.',
//              '목욕 후에는 보습제를 충분히 발라주도록 하며, 손톱은 짧게 깎도록 하고, 손이 얼굴이 가지 않도록 해 주십시오. 옷은 부드러운 면제품이 좋고 모직물은 피하도록 하며, 집먼지 진드기가 없는 환경을 만들어 주는 것도 큰 도움이 됩니다.',
//              '의심되는 식품을 제한해야 하지만 무작위 제한은 심한 영양 실조를 초래할 수 있으므로 검사 후 주치의 선생님이 지시한 음식물만 제한해야 합니다.',
//              '알레르기를 일으키는 원인 물질이 코 점막에 노출된 후 자극 부위에 알레르기염증반응이 발생하게 됩니다.',
//              '연속적으로 일어나는 발작적인 재채기, 맑은 콧물, 코막힘, 가려움증이 주 증상입니다.',
//              '재채기와 콧물은 아침에 심하다가 오후 되면 나아지기도 합니다. 이 외에도 눈 주위가 가렵다거나 충혈, 두통, 후각 감퇴가 동반될 수도 있습니다.',
//              '대표적 원인물질은 집먼지진드기, 애완동물의 털, 음식믈, 약물 등이 있습니다.',
//              '계절적으로는 봄철에 자작나무,오리나무 꽃가루가, 가을철에는 쑥, 돼지풀 등 잡초 꽃가루가 원인이 될 수 있습니다.',
//              '알레르겐을 피하는 것이 가장 효과적인 치료법이지만 집먼지진드기, 꽃가루는 근본적으로 피하는 것은 현실적으로 어렵기 때문에 적절한 약물치료로 증상을 조절하며 근원적 치료인 면역요법이 필요합니다.'
//             ] },
//         {cate_no:0, 
//             item_no:11,
//             sub_title:[
//              '',
//             ''
//         ], 
//              img_src:'11_.jpg', },
//         {cate_no:0, 
//             item_no:12,
//              img_src:'12_.jpg', 
//              sub_title:[
//              '여성암 센터',
//              ''
//             ], 
//              sub_context2: [
//              '자궁경부암', 
//              '부정출혈', 
//              '생리불순', 
//              '자궁경부암 접종'
//             ],
//              sub_context1: [
//              '자궁근종, 자궁난소질환', 
//              '자궁내막증', 
//              '여성질환 전문 치료'
//             ] },
//         {cate_no:0, 
//             item_no:13,
//              img_src:'13_.jpg', 
//              sub_title:[
//              'INTRODUCTION', 
//              'SPECIALIZED CLINICS'
//             ],
//              sub_context1:[
//              '유방암, 유방내시경수술 클리닉',
//              '이와 같은 우수한 진료 수준을 유기하기 위해 유방암 집단회, 간호사 집단회 등을 통한 꾸준한 교육활동에도 만전을 기하고 있습니다.',
//              '온 종합병원 유방센터의 가장 큰 특징은 유방암수술 후 가장 아름다운 유방을 보존하는 치료법들입니다.', 
//              '최고 수준의 유방보존률과 최소침습적 수술로서 감시림프절 생검을 통한 불필요한 액와림프절 청소술의 예발, 최소의 절개만으로 시행하는 내시경 유방암수술을 비롯하여 광범위절제나 유방절제가 불가피한경우에도 최선의 미용적 결과를 위해 광배근 피판술이나 인조 보형물 시술을 시행하고 있습니다.',
//              '온 종합병원의 유방센터는 전 세계 여성에서는 가장 흔한 암이며, 우리나라 여성에서도 가장 많이 발생하는 유방암과 기타 유방질환을 전담하는 곳입니다.', 
//              '유방암은 조기 발견이 가능하며, 조기에 진단되면 완치율이 90%에 육박하여, 무엇보다도 조기검진이 중요합니다.', 
//              '우리 센터는 센터 내 에 조기검진에 필수적인 최신의 유방촬영기와 초음파기를 갖추고 있으며, SURGERY적 수술 없이도 손쉽게 조직검사를 할 수 있는 여러 기구 및 장비를 보유하고 있습니다.', 
//              '뿐만 아니라 Breast Cancer 전문 간호사가 유방암 환자의 심리 교육 및 재활 교육을 통해 유방암 환자의 삶의 질 향상을 돕고 있습니다.'
//             ] },
//         {cate_no:0, 
//             item_no:14,
//              img_src:'women_.png', 
//              sub_title:[
//                 '유방암&갑상선암센터',
//              ''
//             ], 
//              chk_text:[
//                 '원스톱 진료', 
//              '최고의 의료진', 
//              '최신 장비 진료'
//             ],
//              middle_text:[
//                 '검진부터 재건까지!', 
//              '맘모톰(Mammotome)조직검사'
//             ],
//              circle_text:[
//                 '수술', 
//              '항암치료', 
//              '방사선치료'
//             ],
//              blue_text:'논스톱으로 가능',
//              sub_context1: [
//                 '맘모톰 시술 : 각종 덩어리나 이상이 있는 부위를 제거할 떄 상처를 내지 않고 굵은 바늘을 이용해 여러 조각으로 나누어 뽑아내는 최신 기술', 
//              '051)607-0232'
//             ] },
//         {cate_no:0, 
//             item_no:15,
//             sub_title:[
//              '',
//             ''
//         ], 
//              img_src:'emergency.png' },
//         {cate_no:0, 
//             item_no:16,
//              img_src:'16_.jpg', 
//              sub_title:[
//              '최신 혈액투석기기 도입! 높은 만족도!',
//              ''
//             ], 
//              phone_num:[
//              'NEPHROLOGY',
//              '(2F)', 
//              '인공신장SURGERY',
//              '(13F)'
//             ],
//              phone_text:[
//              '051)607-0209', 
//              '051)607-0128,0020'
//             ],
//              chk_text: [
//              '부산 최고 쾌적한 호텔형 시설', 
//              '최첨단 투석장비 60대 도입!', 
//              '독일 FMC社 5008S 4.5V'
//             ] },
//         {cate_no:0, 
//             item_no:17,
//              img_src:'17_.jpg', 
//              sub_title:[
//              '※ 가능한 시술안내',
//              ''
//             ], 
//              chk_text:[
//              '진료 시간 : 월~금(토요일 휴무)', 
//              '진료 문의 : 051-607-0281, 0229', 
//              '진료 시간은 사정에 따라 변경 될 수 있으며, 모든 시술은 예약제로 하고 있으니, 내원 전 전화 예약하시기 바랍니다.'
//             ],
//              top_text:[
//              '인터벤션(중재시술)이란 투시나 초음파등의 실시간 영상획득 기술을 바탕으로, 영상유도하에서 바늘이나 카테터라고 하는 1~2mm 정도 굵기의 가느다란 관으로 질병부위까지의 경로를 만들고 이를 통하여 질병을 치료하는 첨단 의학 분야입니다. 기존의 치료 방법에 비하여 전신마취나 피부 절개가 필요 없어 환자 위험도를 최소화한 최신 치료방법입니다.'
//             ],
//              sub_context1: [
//              '간암의 경동맥 화학색전술', 
//              '다리동맥 협착병', 
//              '혈액투석 동정맥루의 혈관성형술', 
//              '담즙 배액술', 
//              '경피적 위루술, 결피적 신루술', 
//              '중심정맥 카테터(POCC,항암포트삽입)', 
//              '조직검사(초음파, CT유도하)', 
//              '자궁근종 색전술', 
//              '전립선 비대증 색전술', 
//              '낭종 경화술', 
//              '골반울혈 증후근', 
//              '정계 정맥류', 
//              '식도, 위, 십이지장 스텐트 삽입술'
//             ] },
//         {cate_no:0, 
//             item_no:18,
//              sub_title:[
//              '',
//              ''
//             ], 
//              link:[
//              'https://bryonsilver.github.io/ON_Hospital/on_hospital/medi_center.html?cen_v=13'
//             ],},
//         {cate_no:0, 
//             item_no:19,
//              img_src:'19_.jpg', 
//              sub_title:[
//              '',
//              ''
//             ], 
//              sub_context1: [
//              '또한 신경근전도실, 보행 및 동작분석실, 바이오덱스실, 연하검사실 등의 검사 시설에서 정확한 진단과 치료가 이루어지고 있다. 뿐만 아니라 IMS 치료, 테이핑 치료 등을 통한 통증 치료도 전문적으로 시행하고 있다.',
//              '운동치료실, 물리치료실, 수치료실, 작업치료실 등이며, 그 외 보이타치료, 보바스치료, 보조기/의지 클리닉, 경직클리닉, 오십견클리닉 등의 특수 치료를 위한 시설을 갖추고 있다.',
//              '뇌졸중, 척수 손상, 외상성 뇌손상, 동통, 보조기와 의지, 전기진단학, 소아 재활, 물리 및 생역학 등의 다양한 세부 분야에 걸쳐 전문적인 치료가 이루어진다.',
//              'Rehabilitation Treatment는 기능의 장애를 가진 사람들을 평가하고 치료하여, 주어진 조건하에서 이들의 신체적, 정신적, 사회적 능력과 취미, 직업, 교육 등의 잠재적 능력을 최대한 발달시켜 정상에 가까운 생활을 할 수 있게 해 주기 위한 전문치료센터입이다.'
//             ] },
//         {cate_no:0, 
//             item_no:20,
//              img_src:'20_.jpg', 
//              sub_title:[
//              'INTRODUCTION',
//              'SPECIALIZED CLINICS'
//             ], 
//              sub_context1: [
//              '요로 종양클리닉, 요로결석클리닉, 배뇨장애클리닉, 소아비뇨기클리닉', 
//              '방광수술, 복강경수술, 내시경수술 , 요로손상클리닉, 요로감염클리닉',
//              '온 종합병원 남성센터는 대학병원 임상교수 출신의 전문 의료진을 주축으로 진료 팀을 구성하여 각종 특수 클리닉을 운영하고 있으며 각 분야에서 선도적인 역할을 하고, 국제수준의 진료를 제공하고자 각 분야에서 선도적인 역할을 하고, 진료를 제공하고자 최선을 다하고 있습니다.',
//              '온 종합병원의 전립선ㆍ배뇨장애센터는 남성 요로계통과 생식계통의 질환을 전문적으로 진단하고 치료하기 위해 설립되었습니다.',
//              '요로 종양, 요로결석, 내비뇨기, 소아비뇨기, 신경비뇨기, 배뇨장애, 남성의학, 요로손상, 요로감염 등의 질환을 다루고 있습니다.']  },
//         {cate_no:0, 
//             item_no:21,
//              img_src:'21_.jpg', 
//              sub_title:[
//              'Prostate Cancer', 
//              '교수출신 전문 의료진', 
//              '홀뮴 야그 레이저 수술기'
//             ], 
//              check_box:[
//              '혈뇨센터', 
//              '배뇨장애클리닉', 
//              '전립선암'
//             ],
//              small_title:'특징',
//              special:[
//              '① 체외 충격파 쇄석술로 잘 제거되지 않는 결석 파괴 제거',
//              '② 한번의 시술로 치료 가능',
//              '③ 시술 후 회복기간 단축'
//             ],
//              sub_context1: [
//              '전립선 비대증의 새로운 치료법인 홀렙(HoLEP)수술을 위한 첨단장비인 홀뮴야그레이저수술기는 홀렙 시술이 가능한 최신장비로 전립선 비대조직을 제거하는 안전하고 효과적인 장비'
//             ] },
//         {cate_no:0, 
//             item_no:22,
//              img_src:'22_.jpg', 
//              sub_title:[
//              'Collaborative treatment with orthopedics, neurosurgery, rehabilitation medicine, and pain management anesthesia department', 
//              'Total care where surgery and rehabilitation are integrated into one through seamless collaboration between', 
//              'different medical departments to resolve patients’ difficulty in choosing a treatment option'
//             ], 
//              circle_num:[
//              '01',
//              '02',
//              '03',
//              '04',
//              '05',
//              '06',
//              '07',
//              '08',
//              '09'
//             ],
//              circle_text:[
//              'Minimally invasive endoscopic microscopic surgery', 
//              'Minimally invasive arthroscopic surgery', 
//              'Short surgical time, fast recovery', 
//              'Minimizing post-anesthesia effects through local anesthesia', 
//              'State-of-the-art spine joint rehabilitation center', 
//              'Scientific exercise prescription program using the latest equipment', 
//              'Personalized 1:1 exercise prescription by experts', 
//              'Spine joint strengthening program', 
//              'Post-surgery relapse prevention program'
//             ],
//              sub_context1: [
//              'Arthroscopic surgery allows for precise diagnosis and treatment by observing the joint through a miniature microscope inserted into only three to four small holes made around the joint.', 
//              'It also leaves almost no visible scarring and enables a rapid return to daily life. It can be used for not only partial tears of the rotator cuff, shoulder joint dislocation, frozen shoulder, calcific tendinitis, and ligament injuries but also for severe rotator cuff tears.'
//             ] },
//         {cate_no:0, 
//             item_no:23,
//              img_src:'23_.jpg', 
//              sub_title:[
//              '초음파 진단이란?', 
//              '근골격계 초음파 검사의 장점'
//             ], 
//              small_top:[
//              '척추나 관절 부위에 발생한 인대 손상을 회복시켜주고 강화 시켜주는 치료방법 근골격계는 근육, 인대, 연골, 뼈, 관련 신경이나 혈관 등을 포함하는 것으로 이들에 대한 초음파 검사를 근골격계 초음파라 합니다.',
//              '관절이나 인대 등의 염증, 손상, 퇴행성 변화 등을 빠르고 간편하게 확인할 수 있습니다.'
//             ],
//              sub_context1: [
//              '주사나 절개 등이 필요없는 비침습적인 검사이고 대부분 통증이 없습니다.',
//              'X-ray등 방사선 검사로 확인이 어려운 경우에 시행 가능하며, 방사선을 쏘일 필요가 없어 인체에 무해합니다.',
//              '임산부와 태아의 검사에도 안전하다고 알려져 있습니다.',
//              '실시간 영상을 확인할 수 있기 때문에 조직 검사 등의 시술을 도와주는 검사입니다.',
//              '넓은 범위에 적용할 수 있고 쉽게 사용할 수 있으며 CT나 MRI등의 검사에 비해서 일반적으로 비용이 저렴합니다.'
//             ] },
//         {cate_no:0, 
//             item_no:24,
//              img_src:'24_.jpg', 
//              sub_title:[
//              '췌장 및 담도 질환 증가 추세, 그 원인은?',
//              '췌장암과 담도암의 생존율이 낮은 이유는?', 
//              '췌장 담도 질환의 치료', 
//              '췌장 및 담도계 질환', 
//              '췌장 및 담도계 질환의 진단 방법'
//             ], 
//              bold_top: [
//              '췌장·담도질환 진단·치료', 
//              '초음파내시경(EUS)',
//              '역행성 췌담도 조영술(ERCP)'
//             ],
//             sub_context1: [
//              '1. EUS(초음파 내시경)-췌담도 질환 조기발견의 획기적 전환점',
//              '내시경 끝에 초음파를 장착해 위 십이지장을 통해 담낭 및 담도 그리고 췌장의 가장 근접 부위까지 접근해 높은 해상도와 다양한 기법을 이용하여 조기 진단 및 정확한 진단을 할 수 있는 촬영 기법. 방사선 노출이 전혀 없고 검사 중 실시간으로 필요시 조직 및 세포 체취가 가능해 병리학적 확진을 동시에 할 수 있는 이점 존재. 1cm 미만의 조기 췌장암 발견에 가장 적합한 방법이며 췌장 낭종. 검사 및 조직 체취를 동시에 할 수 있어 췌장 담도암 진단에 획기적인 진단 기법',
//              '2. ERCP(내시경적역행담췌관조영술)-진단과 치료가 동시에 가능, 고난이도 내시경 시술',
//              '십이지장경이라고 하는 특수 내시경을 이용하여 췌관과 담관이 만나는 십이지장 유두부에 접근한 후 췌관 및 담관을 먼저 촬영하여 정확한 진단을 내리고 동시에 병변 발견 시 실시간으로 담석 제거, 담도 배액술, 췌관 결석 제거 및 췌관 배액술을 시행할 수 있는 고난도의 시술입니다.',
//              '두 질환 모두 조기 발견 시 수술적인 절제 시 완치가 가능합니다. 하지만 조기 진단율이 20% 미만이고, 수술 대상이더라도 광범위 간 절제나 다장기 절제술이 요구되어 고령 및 기저 질환이 있는 분들은 수술을 주저하며, 특히 수술 후 재발률이 매우 높아 5년 생존율은 5% 미만으로 예후가 좋지 못합니다. 따라서 조기 진단을 위한 췌장 및 담도 검진 및 병변 발견 시 주기적인 관리가 꼭 필요합니다.',
//              '수술이 불가능한 담낭 및 담도암의 경우 담도 폐쇄가 필수적으로 동반하므로 담도배액술 및 항암 치료를 병행합니다.',
//              '일부 환자에서는 광역동성 치료를 통해 국소 병변을 소멸시켜 담도 배액을 보다 오랫동안 유지시키고 주기적인 항암치료를 하여 예후를 향상시킵니다.',
//              '두 질환 모두 조기 발견 시 수술적인 절제 시 완치가 가능합니다. 하지만 조기 진단율이 20% 미만이고, 수술 대상이더라도 광범위 간 절제나 다장기 절제술이 요구되어 고령 및 기저 질환이 있는 분들은 수술을 주저하며, 특히 수술 후 재발률이 매우 높아 5년 생존율은 5% 미만으로 예후가 좋지 못합니다. 따라서 조기 진단을 위한 췌장 및 담도 검진 및 병변 발견 시 주기적인 관리가 꼭 필요합니다.',
//              '수술이 불가능한 담낭 및 담도암의 경우 담도 폐쇄가 필수적으로 동반하므로 담도배액술 및 항암 치료를 병행합니다. 일부 환자에서는 광역동성 치료를 통해 국소 병변을 소멸시켜 담도 배액을 보다 오랫동안 유지시키고 주기적인 항암치료를 하여 예후를 향상시킵니다.',
//              '가장 큰 원인으로 조기 발견이 어렵기 때문입니다. 이는 수술을 통해 완치가 어렵다는 말과 일맥상통합니다. 췌장 및 담도는 인체의 가장 깊숙한 곳에 위치하므로 혈액 검사와 복부 초음파와 같은 일반적인 진단 기법으로 조기에 병변을 발견하기 어렵고 두 장기의 특성상 질환 초기에 증상이 거의 나타나지 않기 때문에 대부분 병이 많이 진행될 때까지 건강하다고 믿고 생활합니다. 복부 CT 및 MRI 등의 보급으로 진단율이 올라가고 있으나 여전히 조기 진단율은 20% 미만이며, 5년 생존율도 5% 미만으로 극히 예후가 나쁩니다.',
//              '최근 초음파내시경(EUS)의 보급으로 1cm 이하의 작은 췌장 종괴를 조기에 발견할 수 있게 되었고 이는 췌장 및 담도암의 획기적인 예후 향상에 도움을 줄 것으로 생각합니다.',
//              '췌장암은 2018년 기준 국내 통계상 발생률이 9위이나 미국에서는 3위 이내에 드는 비교적 흔한 질환입니다. 췌장암이 최근 들어 국내에서도 점차 증가하는 추세이며 그 원인은 서구화된 식습관으로 인해 지방 및 단백질의 과도한 섭취가 우선이나 원인 불명의 췌장 낭종 증가도 주요한 원인으로 지목되고 있습니다. 지방식의 과다 섭취는 췌장관 세포 및 췌장효소 분비 세포의 손상을 유발하고 유전적 변이를 거쳐 악성종양으로 발전할 수 있습니다.', 
//              '한편 점액 분비성 췌장 낭종은 발병 후 시간이 지남에 따라 악성화 가능성이 높아지나, 조기에 발견하고 철저한 추적을 하면 비록 췌장암이 발병하더라도 완치될 수 있는 기회가 높습니다. 담도암은 특히 부산, 울산, 경남 지역에 높은 발병률을 나타내는데, 그 이유는 반복된 민물고기를 날 것으로 섭취함으로써 간디스토마 감염증이 발생하여 이후 담도암으로 발전하는 것으로 알려져 있습니다.'
//             ] },
//         {cate_no:0, 
//             item_no:25,
//              img_src:'page-img10.jpg', 
//              sub_title:[
//              'INTRODUCTION', 
//              'SPECIALIZED CLINICS'
//             ], 
//             pro_context1:[
//              '교정발치, 빠른 교정을 위한 피질골절단술, 구개확장, 매복치의 SURGERY적노출, 골신장술',
//              '구순구개열, 안면기형',
//              '안면골절, 외상 후 부정교합, 외상 후 치아/치조골 재건술(임플란트)',
//              '사각턱, 돌출입수술, 무턱, 귀족수술, 턱끝성형술',
//              '양악수술, 하악수술, 주걱턱, 안면비대칭, 긴얼굴, 잇몸노출증, 개교합, 무턱',
//              '(술전교정수술, 최소교정수술, 선수술, 무교정수술)'
//             ],
//              pro_title:[
//              '턱교정(악교정)클리닉',
//              '얼굴윤곽클리닉',
//              '악안면외상클리닉',
//              '안면기형클리닉',
//              '구강악안면SURGERY'
//             ],
//             sub_context1:[
//              '기존의 술전교정(1년이상)/ 수술/술후 교정(6개월)으로 이루어지던 약 2년의 치료기간이 걸리던 것과 달리 선수술은 수술을 먼저 시행하고 수술 후 교정을 시행하는 것으로 그 치료기간이 6개월에서 1년 정도 단축되는 것이 가장 큰 장점이라 할 수 있습니다.',
//              '정확한 치아와 골격의 분석을 통하여 선수술이 가능한 환자는 수술을 먼저 시행하거나 최소교정 후 수술을 시행하여 술전교정 기간 중 교정으로 인한 불편감과 전체치료기간을 줄였습니다. 기존의 치료가 약 2년의 치료기간(술전교정[1년이상] / 수술 / 술후 교정[6개월])인 것과 달리 선수술은은 수술을 먼저 시행하고 수술 후 교정을 시행하는 것으로 그 치료기간이 6개월에서 1년 정도 단축되는 것이 가장 큰 장점이라 할 수 있습니다.',
//              'ON Hospital 턱ㆍ얼굴(악안면)수술센터는 최신의 장비를 이용하여 수술전 분석(2D cephalometry/3D CT/model 분석)을 시행하여 환자 개인에 맞는 최상의 수술계획을 수립하고 있습니다.',
//              '환자중심의 CENTERS One-stop/ One-way(외래/수술준비/입원/수술)시스템 및 턱ㆍ얼굴(악안면)수술환자을 위한 1인실/2인실 입원시스템 그리고 복잡한 과정(접수/대기/반복내원)을 줄여 불편감을 최소로 하였습니다.',
//              'ON Hospital MAXILLOFACIAL SURGERY는 최고 수준의 진료를 제공하기 위하여 구강악안면SURGERY 의료진을 중심으로 OTOLARYNGOLOGY 전문의, 마취통증 의학과 전문의 등 체계화된 협진체제로 구성되어 정확한 평가와 치료와 수술 후 최상의 결과를 제공하고 있다.',
//             ]},
//         {cate_no:0, 
//             item_no:26,
//              img_src:'26_.jpg', 
//              sub_title:[
//              '', 
//              'SPECIALTY'
//             ], 
//             sub_context1: [
//              '암수술/폐·흉부종양의 흉강 내시경 수술',
//              '다한증(손발겨드랑이 다한증 및 겨드랑이 땀냄새)의 수술 및 비수술적 치료',
//              '기흉/하지 정맥류/누두흉(오목가슴)등의 흉벽기형',
//              '심장, 폐 기관, 식도, 대동맥 등 생명 유지에 기본이 되는 중요 장기의 질환 진단 및 수술', 
//              '부산.경남 최초 흉강경이용 폐엽절제술 성공']},
//         {cate_no:0, 
//             item_no:27,
//              img_src:'27_.jpg', 
//              sub_title:[
//              'INTRODUCTION', 
//              'SPECIALIZED CLINICS'
//             ], 
//              bold:'항암 방사선 치료',
//              sub_context5: [
//              '- ON Hospital 방사선 치료 안내.pdf', 
//              '다운로드'
//             ],
//             sub_context1: [
//              '단순히 방사선을 쬐는 것만으로는 방사선 치료가 이루어지는 것은 아닙니다.',
//              '종양의 크기, 퍼진 정도, 형태와 분화도 및 종양의 방사선에 대한 민감도 등을 모두 감안하여 방사선량, 치료기간 등이 결정되며, 여기에 환자의 건강상태 등도 고려되어야 합니다.', 
//              '따라서 방사선 치료를 위해서는 숙련된 의료진과 진단장비 및 첨단 방사선치료기기가 필수적이며, 아울러 질환에 적합한 치료 기법을 선택할 수 있도록 다양한 치료기법을 시행 할 수 있는지도 고려 되어져야하고, 정상세포에 대한 영향을 최소화 하기 위해 고도의 기술적 축적이 요구 됩니다.',
//              '방사선치료기법의 발전으로 인체 암에 대해 방사선을 조사할 때 과거에 비하여 종양주변 정상조직에는 방사선을 크게 줄이고, 종양조직에만 고선량의 방사선을 조사 할 수 있게 되었으며, 이로 인하여 방사선치료와 연관 된 합병증은 낮게 유지하면서 종양에 대한 제어율을 크게 높아졌습니다. ',
//              ' 이와 같은 방사선 치료 선진국에서 전체 암 환자의 60%가 방사선치료를 받을 정도로 방사선치료가 암 치료에 지대한 역할을 담당하고 있습니다.',
//              '방사선 치료는 방사선이 발생되는 장치(라이낙 치료기)혹은 방사선 동위원소를 이용하여 고에너지 방사선을 조사하여 암세포를 죽이는 치료법입니다.',
//              '방사선 치료에 사용되는 방사선은 파장이 매우 짧고 높은 에너지를 갖고 있으며, 인체에 조사될 경우 핵산에 변성을 초래하여 종양 세포를 죽이게 되며, 암세포에 집중적으로 방사선을 조사하면 암세포를 파괴하고 더 이상 증식되는 것을 막아줍니다.',
//              '이 경우 주변의 정상 세포도 방사선의 영향을 받지만 정상세포는 종양세포보다 빠르게 회복되는 잇점과 대부분의 손상이 빠르게 회복되어 영향을 최소화 할 수 있습니다. 방사선은 암세포처럼 빠르게 증식하는 조직에 대하여 파괴 효과가 높기 때문입니다.',
//              '항암 방사선 치료센터는 방사선을 이용하여 환자를 치료하는 임상의학의 한 방법으로, 수술, 항암 화학 요법과 더불어 3대 암 치료 중 하나입니다.']  },
//         {cate_no:0, 
//             item_no:28,
//              img_src:'28_.jpg', 
//              sub_title:[
//              '"ON Hospital 호스피스 완화의료병동은 이렇게 운영 됩니다."', 
//              '호스피스 완화의료에 대한 오해와 진실'
//             ], 
//              top_small:'호스피스 완화의료 서비스는 `포기`가 아닌 적극적인 `치료와 돌봄`으로 말기 암 환자의 신체적 증상을 조절하고 환자와 가족의 심리사회적, 영적 어려움을 도와 삶의 질을 향상시키는 것을 목표로 하는 의료서비스입니다.',
//              top_li:[
//              '보건복지부 지정 호스피스 완화의료 병동 운영', 
//              '말기 암 환자를 대상으로 입원형 호스피스 운영', 
//              '본인부담 5%으로 최저비용, 최고효율 효과! 의료도우미 제공!', 
//              '최고의 시설, 쾌적한 환경의 임원병동 운영'
//             ],
//              main_title:[
//              '호스피스 완화의료는 삶을 포기하고, 죽음을 기다리는 것이다?', 
//              '호스피스 완화의료 기관에서는 아무것도 하는 게 없다?', 
//              '호스피스 완화의료 기관에서는 가족과 함께 지낼 수 없다?', 
//              '호스피스 완화의료는 비용이 비싸다?'
//             ],
//              main_num:[
//              '1', 
//              '2', 
//              '3', 
//              '4'
//             ],
//              main_red_text:'NO! 아닙니다!',
//              sub_context1: [
//              '건강보험이 적용되어 암환자는 본인 부담 5%만 적용됩니다.', 
//              '다만, 상급병실료나 특진비 등 Billing and Insurance 항목은 일부의 비용을 부담할 수 있습니다.',
//              '가족이 함께 지낼 수 있으며, 가족의 심리적, 사회적 어려움에 대해서도 도움을 받으실 수 있습니다.',
//              '환자가 겪고 있는 통증, 섬망 등의 증상에 대해 완화전문 의료진으로 부터 통증관리 및 증상을 조절하고 삶을 의미 있게 보내실 수 있도록 심리치료, 마사지, 음악요법, 미술요법 등 다양한 프로그램을 제공하고 있습니다.',
//              '통증, 구토, 호흡곤란, 복수 등의 신체적 증상을 적극적으로 치료하고 심리적, 사회적, 영적인 어려움을 도와드리기 위해 각 분야의 전문가가 팀을 이루어 삶의 질 향상을 목표로 하는 의료서비스입니다.', 
//              '증상조절이 되면 퇴원 후 일상생활을 할 수 있습니다.'
//             ] },
//         {cate_no:0, 
//             item_no:29,
//              img_src:'', 
//              sub_title:[
//              '#안전한 병원치료#음압시스템#유기적인 협진시스템'
//             ], 
//              circle_border:'교수출신 호흡기·알레르기·결핵',
//              circle_text:[
//              '폐렴', 
//              '폐암', 
//              '만성 폐쇄성 폐질환 COPD'
//             ],
//             sub_context1:[
//              '주요 진료 분야는 만성 폐쇄성 폐질환, 기관지 천식, 폐암, 폐렴, 폐결핵, 만성기침, 기관지 확장증, 간질성 폐 질환, 호흡부전, 흉막 질환(기흉, 흉막염, 흉수, 농흉), 식도암, 종격동 종양, 다한증, 오목가슴, 기관 협착 등이며 폐암 진단 시 정기적이고 지속적인 관리를 해드립니다. 저희 Respiratory 의료진 모두는 환자분들 편에 서서 여러분의 고통을 해결해 드리기 위해 최선을 다할 것으로 약속드립니다.',
//              'Respiratory는 DEPARTMENT OF <SPAN>RESPIRATORY MEDICINE</SPAN>와 THORACIC SURGERY로 구서오디어 있어 질병의 정확한 진단, 치료 및 수술까지 빠르고 정확하게 진료할 수 있습니다.', 
//              '또한 관련 DEPARTMENT와 협진을 통해 여러 분야의 전문의들이 모여 환자 중심의 진료를 받을 수 있습니다.',
//              '우리 사회의 고령화 추세가 높아지면서 호흡기계 중증 질환자의 수가 급격하게 증가하고 있습니다.',
//              '이처럼 호흡기계 질환자의 증가에 따라 효율적인 진료를 위해 Respiratory를 개설, 운영하고 있습니다.'
//             ] },
//     ]
// ]

// const CENT_TITLE = [
//     [
//         {cate_no:0, item_no:1, title:'Hepatobiliary Pancreatic / Gastric / Colorectal Cancer'},
//         {cate_no:0, item_no:2, title:'Liver'},
//         {cate_no:0, item_no:3, title:'Infection'},
//         {cate_no:0, item_no:4, title:'Proctology'},
//         {cate_no:0, item_no:5, title:'Pediatrics & Adolescent Mental Health'},
//         {cate_no:0, item_no:6, title:'소화기내Neurology'},
//         {cate_no:0, item_no:7, title:'Gastrointestinal Cancer Surgery'},
//         {cate_no:0, item_no:8, title:'Neurology'},
//         {cate_no:0, item_no:9, title:'Cardiocerebrovascular'},
//         {cate_no:0, item_no:10, title:'Allergy'},
//         {cate_no:0, item_no:11, title:'Cancer Rehab Program'},
//         {cate_no:0, item_no:12, title:'Women's Cancer'},
//         {cate_no:0, item_no:13, title:'Breast/Thyroid Cancer'},
//         {cate_no:0, item_no:14, title:'Breast Cancer'},
//         {cate_no:0, item_no:15, title:'Emergency Center'},
//         {cate_no:0, item_no:16, title:'Bioartificial Kidney'},
//         {cate_no:0, item_no:17, title:'Intreventional Surgery'},
//         {cate_no:0, item_no:18, title:'Funeral Home/Mortuary'},
//         {cate_no:0, item_no:19, title:'Rehabilitation Treatment'},
//         {cate_no:0, item_no:20, title:'Prostate & Dysuria'},
//         {cate_no:0, item_no:21, title:'Prostate Cancer'},
//         {cate_no:0, item_no:22, title:'Spondyloarthropathy'},
//         {cate_no:0, item_no:23, title:'Ultrasonic diagnosis'},
//         {cate_no:0, item_no:24, title:'Pancreatobiliary Cancer'},
//         {cate_no:0, item_no:25, title:'Maxillofacial Surgery'},
//         {cate_no:0, item_no:26, title:'Lung Cancer'},
//         {cate_no:0, item_no:27, title:'Chemotherapy Radiation'},
//         {cate_no:0, item_no:28, title:'Hospice & Palliative Care'},
//         {cate_no:0, item_no:29, title:'Respiratory'},
//     ]
// ]
// const HOSPI_TITLE = [
//     [
//         {cate_no:0, item_no:1, title:'Liver'},
//         {cate_no:0, item_no:5, title:'Gastrointestinal Cancer Surgery'},
//         {cate_no:0, item_no:10, title:'Women's Cancer'},
//         {cate_no:0, item_no:11, title:'Breast/Thyroid Cancer'},
//         {cate_no:0, item_no:15, title:'Intreventional Surgery'},
//         {cate_no:0, item_no:18, title:'Prostate Cancer'},
//         {cate_no:0, item_no:24, title:'Lung Cancer'},
//         {cate_no:0, item_no:25, title:'Chemotherapy Radiation'},
//     ]
// ]
// const LIST_N = [
//     [
//         {cate_no:0, item_no:1, name:''},
//         {cate_no:0, item_no:1, name:''},
//         {cate_no:0, item_no:2, name:'3'},
//         {cate_no:0, item_no:3, name:'4'},
//         {cate_no:0, item_no:4, name:'5'},
//         {cate_no:0, item_no:5, name:'6'},
//         {cate_no:0, item_no:6, name:'7'},
//         {cate_no:0, item_no:7, name:'8'},
//         {cate_no:0, item_no:8, name:'9'},
//         {cate_no:0, item_no:9, name:'10'},
//         {cate_no:0, item_no:10, name:'11'},
//         {cate_no:0, item_no:11, name:'12'},
//         {cate_no:0, item_no:12, name:'13'},
//         {cate_no:0, item_no:13, name:'14'},
//         {cate_no:0, item_no:14, name:'15'},
//         {cate_no:0, item_no:15, name:'16'},
//         {cate_no:0, item_no:16, name:'17'},
//         {cate_no:0, item_no:17, name:'18'},
//         {cate_no:0, item_no:18, name:'19'},
//         {cate_no:0, item_no:19, name:'20'},
//         {cate_no:0, item_no:20, name:'21'},
//         {cate_no:0, item_no:21, name:'22'},
//         {cate_no:0, item_no:22, name:'23'},
//         {cate_no:0, item_no:23, name:'24'},
//         {cate_no:0, item_no:24, name:'25'},
//         {cate_no:0, item_no:25, name:'26'},
//         {cate_no:0, item_no:26, name:'27'},
//         {cate_no:0, item_no:27, name:'28'},
//         {cate_no:0, item_no:28, name:'29'},
//     ]
// ]