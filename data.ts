
import { InjuryProtocol } from './types';

export const INJURY_DATA: InjuryProtocol[] = [
  {
    id: "gym-sprain",
    category: "lower",
    title: { english: "GymSprain Fix (Lateral Ankle)", arabic: "علاج التواء الكاحل الجانبي" },
    description: {
      english: "Clinical management for inversion sprains affecting the ATFL/CFL ligaments. Focuses on restoring stability and proprioception.",
      arabic: "الإدارة السريرية لالتواءات الانقلاب التي تؤثر على أربطة ATFL/CFL. يركز على استعادة الاستقرار والحس العميق."
    },
    management_plan: {
      general: {
        english: "Rule out fractures using 'Ottawa Ankle Rules' (inability to bear weight for 4 steps, tenderness at malleolus/5th metatarsal). If negative, proceed with functional rehab. Grade 1 (micro-tear) takes 1-2 weeks, Grade 3 (rupture) takes 6-12 weeks.",
        arabic: "استبعد الكسور باستخدام 'قواعد أوتاوا للكاحل' (عدم القدرة على تحمل الوزن لـ 4 خطوات، ألم عند الكعب/المشط الخامس). إذا كانت سلبية، تابع التأهيل الوظيفي. الدرجة 1 (تمزق دقيق) تستغرق 1-2 أسابيع، الدرجة 3 (تمزق كامل) تستغرق 6-12 أسبوعاً."
      },
      immediate_care: {
        english: [
          "P.O.L.I.C.E Protocol: Protection, Optimal Loading, Ice, Compression, Elevation.",
          "Protection: Use a stirrup brace or walking boot for Grade 2/3 to prevent inversion.",
          "Optimal Loading: Weight bear as tolerated to stimulate collagen orientation. Avoid complete immobilization if possible.",
          "Compression: Tubigrip or figure-8 wrap to manage intra-articular edema."
        ],
        arabic: [
          "بروتوكول P.O.L.I.C.E: الحماية، التحميل الأمثل، الثلج، الضغط، الرفع.",
          "الحماية: استخدم دعامة ركاب أو حذاء مشي للدرجة 2/3 لمنع الانقلاب.",
          "التحميل الأمثل: تحمل الوزن قدر المستطاع لتحفيز توجيه الكولاجين. تجنب التثبيت الكامل إن أمكن.",
          "الضغط: رباط ضاغط أو لف شكل 8 لإدارة الوذمة داخل المفصل."
        ]
      },
      short_term_care: {
        english: [
          "Dorsiflexion Restoration: Tight calves limit ankle ROM, increasing re-injury risk. Mobilize the talocrural joint.",
          "Contrast Hydrotherapy: 3 min hot / 1 min cold x 4 cycles to create a vascular pumping effect.",
          "Isometrics: Eversion strength is critical to prevent the ankle rolling outward again.",
          "Gait Training: Focus on heel-to-toe pattern to avoid antalgic (limping) gait habituation."
        ],
        arabic: [
          "استعادة الثني الظهري: السمانة المشدودة تحد من حركة الكاحل، مما يزيد خطر الإصابة. حرك المفصل الكاحلي الساقي.",
          "العلاج المائي المتباين: 3 دقائق ساخن / 1 دقيقة بارد × 4 دورات لخلق تأثير ضخ وعائي.",
          "متساوي القياس: قوة القلب للخارج حاسمة لمنع التواء الكاحل للخارج مرة أخرى.",
          "تدريب المشي: ركز على نمط الكعب-أصابع القدم لتجنب اعتياد مشية العرج."
        ]
      },
      long_term_care: {
        english: [
          "Proprioceptive Retraining: 10-20% of mechanoreceptors are damaged in a sprain. Retrain balance (Star Excursion Balance Test).",
          "Dynamic Stability: Hop tests (single leg hop for distance) should be >90% of uninjured side before return to sport.",
          "Peroneal Reaction Time: Plyometrics improve how fast stabilizing muscles fire during a slip.",
          "Prophylaxis: Continue bracing for 6-12 months during high-risk sports."
        ],
        arabic: [
          "إعادة تدريب الحس العميق: 10-20% من المستقبلات الميكانيكية تتضرر في الالتواء. أعد تدريب التوازن (اختبار توازن النجمة).",
          "الاستقرار الديناميكي: اختبارات القفز (قفزة ساق واحدة للمسافة) يجب أن تكون >90% من الجانب السليم قبل العودة للرياضة.",
          "وقت رد فعل الشظوية: البليومترية تحسن سرعة انطلاق العضلات المثبتة أثناء الانزلاق.",
          "الوقاية: استمر في استخدام الدعامات لمدة 6-12 شهراً أثناء الرياضات عالية المخاطر."
        ]
      }
    },
    supplements: [
      {
        name: { english: "Curcumin (Meriva)", arabic: "الكركمين (ميريفا)" },
        dose: { english: "1g daily (500mg BID)", arabic: "1 جم يومياً (500 مجم مرتين)" },
        administration: { english: "Inhibits COX-2 pathway (inflammation) without hindering healing.", arabic: "يثبط مسار COX-2 (الالتهاب) دون إعاقة الشفاء." }
      },
      {
        name: { english: "Cissus Quadrangularis", arabic: "سيسوس" },
        dose: { english: "800mg daily", arabic: "800 مجم يومياً" },
        administration: { english: "Accelerates connective tissue matrix regeneration.", arabic: "يسرع تجديد مصفوفة الأنسجة الضامة." }
      },
      {
        name: { english: "Vitamin C + Gelatin", arabic: "فيتامين سي + جيلاتين" },
        dose: { english: "50mg Vit C + 15g Gelatin", arabic: "50 مجم فيتامين سي + 15 جم جيلاتين" },
        administration: { english: "1 hour before rehab loading exercises.", arabic: "ساعة واحدة قبل تمارين التحميل التأهيلية." }
      }
    ],
    medications: [
      {
        name: { english: "Diclofenac Gel 1%", arabic: "جيل ديكلوفيناك 1%" },
        dose: { english: "4g q.i.d (4 times daily)", arabic: "4 جرام 4 مرات يومياً" },
        administration: { english: "Topical NSAIDs provide analgesia with lower systemic risk than oral.", arabic: "مضادات الالتهاب الموضعية توفر تسكيناً مع مخاطر جهازية أقل من الفموية." }
      }
    ],
    plants_and_herbs: [
      {
        name: { english: "Horse Chestnut", arabic: "كستناء الحصان" },
        benefits: { english: "Reduces edema via aescin content.", arabic: "يقلل الوذمة عن طريق محتوى الآيسين." },
        usage: { english: "Topical cream or standardized extract.", arabic: "كريم موضعي أو مستخلص معياري." }
      }
    ],
    recipes: [
      {
        name: { english: "Anti-Edema Poultice", arabic: "كمادة مضادة للوذمة" },
        ingredients: { english: "Comfrey root powder, colloidal silver, clay.", arabic: "مسحوق جذر السنفيتون، فضة غروية، طين." },
        preparation: { english: "Mix to paste, apply 2 hours (avoid broken skin).", arabic: "اخلط لعجينة، ضع ساعتين (تجنب الجلد المجروح)." }
      }
    ],
    gym_tips: {
      english: [
        "Tripod Foot: Maintain contact with heel, 1st metatarsal, and 5th metatarsal bases during squats.", 
        "Avoid Supination: Don't let weight roll to the outside of the foot during calf raises.", 
        "Unstable Surfaces: Introduce Bosu ball/foam pad ONLY after static single-leg balance is perfect (30s+).", 
        "Landings: Focus on 'quiet landings' (toe-ball-heel) to dampen ground reaction forces.",
        "Hip Stability: Weak glute medius causes ankle instability. Train hips!"
      ],
      arabic: [
        "قدم ثلاثية القوائم: حافظ على التلامس مع الكعب، ومشط القدم الأول، ومشط القدم الخامس أثناء القرفصاء.", 
        "تجنب الاستلقاء: لا تدع الوزن يتدحرج إلى خارج القدم أثناء رفع السمانة.", 
        "أسطح غير مستقرة: أدخل كرة بوسو/وسادة فوم فقط بعد أن يصبح توازن الساق الواحدة الثابت مثالياً (30 ثانية+).", 
        "الهبوط: ركز على 'الهبوط الهادئ' (أصابع-كرة-كعب) لتخفيف قوى رد فعل الأرض.",
        "استقرار الورك: ضعف الألوية المتوسطة يسبب عدم استقرار الكاحل. درب الوركين!"
      ]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Protection)",
        focus: { english: "Isometric Eversion", arabic: "قلب للخارج متساوي القياس" },
        exercises: [
          { id: "gs-m1-1", name: { english: "Iso Eversion Wall Push", arabic: "دفع الجدار للخارج متساوي القياس" }, sets: "3", reps: "10s x 10", notes: {english: "Push outside of foot against wall.", arabic: "ادفع خارج القدم ضد الجدار."} },
          { id: "gs-m1-2", name: { english: "Towel Curls", arabic: "تجعيد المنشفة" }, sets: "3", reps: "15", notes: {english: "Activate intrinsics.", arabic: "نشط العضلات الداخلية."} },
          { id: "gs-m1-3", name: { english: "Seated Calf Raise", arabic: "رفع سمانة جالس" }, sets: "3", reps: "20", notes: {english: "Low load flow.", arabic: "تدفق حمل منخفض."} }
        ]
      },
      {
        month: "Phase 2 (Loading)",
        focus: { english: "Eccentric Control", arabic: "تحكم لامركزي" },
        exercises: [
          { id: "gs-m2-1", name: { english: "Eccentric Heel Drop", arabic: "هبوط كعب لامركزي" }, sets: "3", reps: "15", notes: {english: "Up two, down one.", arabic: "اصعد باثنين، انزل بواحدة."} },
          { id: "gs-m2-2", name: { english: "Single Leg Stance", arabic: "وقوف ساق واحدة" }, sets: "4", reps: "45s", notes: {english: "Eyes closed progression.", arabic: "تقدم بإغلاق العينين."} },
          { id: "gs-m2-3", name: { english: "Banded Clamshells", arabic: "صدفة بالحزام" }, sets: "3", reps: "15", notes: {english: "Proximal hip stability.", arabic: "استقرار الورك القريب."} }
        ]
      },
      {
        month: "Phase 3 (Return)",
        focus: { english: "Plyometrics", arabic: "بليومترية" },
        exercises: [
          { id: "gs-m3-1", name: { english: "Depth Drops", arabic: "هبوط العمق" }, sets: "3", reps: "8", notes: {english: "Stick the landing.", arabic: "ثبت الهبوط."} },
          { id: "gs-m3-2", name: { english: "Lateral Hops", arabic: "قفزات جانبية" }, sets: "3", reps: "12", notes: {english: "Speed and stability.", arabic: "سرعة واستقرار."} },
          { id: "gs-m3-3", name: { english: "Y-Balance Reach", arabic: "توازن Y" }, sets: "3", reps: "5 rounds", notes: {english: "Dynamic control.", arabic: "تحكم ديناميكي."} }
        ]
      }
    ],
    recovery_exercises: [
       { id: "gs-rec-1", name: {english: "Talus Mobilization", arabic: "تحريك الكاحل"}, description: {english: "Band distraction stretch.", arabic: "تمدد تشتيت بالحزام."}},
       { id: "gs-rec-2", name: {english: "Gastroc Stretch", arabic: "تمدد الساق"}, description: {english: "Knee straight.", arabic: "ركبة مستقيمة."}},
       { id: "gs-rec-3", name: {english: "Soleus Stretch", arabic: "تمدد النعلية"}, description: {english: "Knee bent.", arabic: "ركبة مثنية."}}
    ],
    rehabilitation_strategies: {
        english: ["Graded Exposure", "Neuromuscular Training", "External Cues"],
        arabic: ["التعرض المتدرج", "التدريب العصبي العضلي", "الإشارات الخارجية"]
    },
    references: [],
    disclaimer: {
        english: "Ottawa Rules negative? If not, X-ray needed.",
        arabic: "قواعد أوتاوا سلبية؟ إذا لا، يلزم أشعة سينية."
    }
  },
  {
    id: "acl-rehab",
    category: "lower",
    title: { english: "SportsACL Rehab", arabic: "تأهيل الرباط الصليبي الرياضي" },
    description: {
      english: "Post-surgical protocol for ACL reconstruction. Focuses on graft biology, restoring extension, and neuromuscular control.",
      arabic: "بروتوكول ما بعد الجراحة لإعادة بناء الرباط الصليبي. يركز على بيولوجيا الطعم، استعادة التمدد، والتحكم العصبي العضلي."
    },
    management_plan: {
      general: {
        english: "Respect the 'Ligamentization' phase (weeks 6-12) where the graft is weakest as it converts from tendon to ligament-like tissue. Avoid open kinetic chain leg extensions (45-0 degrees) early on.",
        arabic: "احترم مرحلة 'التحول لرباط' (الأسابيع 6-12) حيث يكون الطعم أضعف ما يمكن أثناء تحوله من وتر إلى نسيج يشبه الرباط. تجنب تمديدات الساق ذات السلسلة الحركية المفتوحة (45-0 درجة) مبكراً."
      },
      immediate_care: {
        english: [
          "Extension: Maintain full passive extension (towel under heel) to prevent Cyclops Lesion.",
          "Quad Activation: Combat Arthrogenic Muscle Inhibition (AMI) with NMES (Russian Stim) + Isometrics.",
          "Edema Control: Cryocuff or ice 20 mins every 2h. Swelling inhibits quad firing.",
          "Patella Mobility: Grade I-II mobilizations to prevent infrapatellar contracture."
        ],
        arabic: [
          "التمدد: حافظ على تمدد سلبي كامل (منشفة تحت الكعب) لمنع آفة سايكلوبس.",
          "تفعيل الرباعية: حارب تثبيط العضلات المفصلي (AMI) بالتحفيز الكهربائي + متساوي القياس.",
          "السيطرة على الوذمة: كفة باردة أو ثلج 20 دقيقة كل ساعتين. التورم يمنع انقباض الرباعية.",
          "حركة الرضفة: تحريكات درجة 1-2 لمنع تقلص ما تحت الرضفة."
        ]
      },
      short_term_care: {
        english: [
          "Gait: Wean off crutches only when gait is non-antalgic (no limp) and quad control is sufficient.",
          "ROM: Flexion should progress gradually; 90 deg by week 2, 120 deg by week 4.",
          "CKC Exercises: Start Closed Kinetic Chain (squats/leg press) exercises early as they are safer for the graft than Open Chain."
        ],
        arabic: [
          "المشية: توقف عن العكازات فقط عندما تكون المشية غير مؤلمة (بدون عرج) والتحكم بالرباعية كافٍ.",
          "نطاق الحركة: يجب أن يتقدم الانثناء تدريجياً؛ 90 درجة بحلول الأسبوع 2، 120 درجة بحلول الأسبوع 4.",
          "تمارين CKC: ابدأ تمارين السلسلة الحركية المغلقة (قرفصاء/ضغط ساق) مبكراً لأنها أكثر أماناً للطعم من السلسلة المفتوحة."
        ]
      },
      long_term_care: {
        english: [
          "Return to Sport Criteria: Limb Symmetry Index (LSI) > 90% in strength and hop tests.",
          "Psychological Readiness: ACL-RSI scale score should be high to reduce re-injury fear.",
          "Hamstring/Quad Ratio: For hamstring grafts, ensure hamstring strength is restored to >60% of quad strength."
        ],
        arabic: [
          "معايير العودة للرياضة: مؤشر تناظر الأطراف (LSI) > 90% في اختبارات القوة والقفز.",
          "الاستعداد النفسي: يجب أن تكون درجة مقياس ACL-RSI عالية لتقليل الخوف من إعادة الإصابة.",
          "نسبة الفخذ/الرباعية: لطعوم الفخذ، تأكد من استعادة قوة الفخذ لأكثر من 60% من قوة الرباعية."
        ]
      }
    },
    supplements: [
      {
        name: { english: "Hydrolyzed Collagen Type I", arabic: "كولاجين متحلل نوع 1" },
        dose: { english: "15g + 50mg Vit C", arabic: "15 جم + 50 مجم فيتامين سي" },
        administration: { english: "1 hour pre-loading session.", arabic: "ساعة واحدة قبل جلسة التحميل." }
      },
      {
        name: { english: "HMB (Beta-Hydroxy)", arabic: "HMB" },
        dose: { english: "3g daily", arabic: "3 جم يومياً" },
        administration: { english: "Prevents muscle catabolism.", arabic: "يمنع تكسر العضلات." }
      },
      {
        name: { english: "Creatine Monohydrate", arabic: "كرياتين" },
        dose: { english: "5g daily", arabic: "5 جم يومياً" },
        administration: { english: "Maintains muscle mass during atrophy phase.", arabic: "يحافظ على كتلة العضلات أثناء مرحلة الضمور." }
      }
    ],
    medications: [
       { name: { english: "Aspirin", arabic: "أسبرين" }, dose: { english: "DVT Prophylaxis (Rx)", arabic: "وقاية من التجلط (وصفة)" } }
    ],
    plants_and_herbs: [
       { name: { english: "Cissus Quadrangularis", arabic: "سيسوس" }, benefits: { english: "Bone-tendon interface healing.", arabic: "شفاء واجهة العظم والوتر." } }
    ],
    recipes: [
        {
            name: {english: "Tendon Repair Jelly", arabic: "جيلي إصلاح الأوتار"},
            ingredients: {english: "Gelatin, orange juice (Vit C), honey.", arabic: "جيلاتين، عصير برتقال (فيتامين سي)، عسل."},
            preparation: {english: "Bloom gelatin in juice, heat, set.", arabic: "نقع الجيلاتين في العصير، سخن، دعها تجمد."}
        }
    ],
    gym_tips: {
      english: [
        "No Open Chain Extensions: Avoid the leg extension machine from 0-45 degrees flexion for the first 12 weeks.", 
        "Watch for Valgus: Knees caving in during squats/landings is the #1 mechanism of non-contact ACL tear.", 
        "Train the Good Leg: Cross-education phenomenon increases strength in the injured limb by up to 10-15%.", 
        "Landing Mechanics: Land softly, toes -> heels, knees bent, chest over knees."
      ],
      arabic: [
        "لا تمديدات سلسلة مفتوحة: تجنب جهاز تمديد الساق من 0-45 درجة انثناء لأول 12 أسبوعاً.", 
        "احذر من الفحج: انحناء الركبتين للداخل أثناء القرفصاء/الهبوط هو الآلية رقم 1 لتمزق الرباط غير التلامسي.", 
        "درب الساق السليمة: ظاهرة التعليم المتبادل تزيد القوة في الطرف المصاب بنسبة تصل إلى 10-15%.", 
        "ميكانيكا الهبوط: اهبط برفق، أصابع -> كعب، ركبتين مثنيتين، الصدر فوق الركبتين."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Weeks 0-4 (Control)",
        focus: { english: "Extension & Quad Firing", arabic: "التمدد وانطلاق الرباعية" },
        exercises: [
          { id: "acl-m1-1", name: { english: "Prone Hangs", arabic: "تعليق منكب" }, sets: "3", reps: "3 min", notes: {english: "For extension.", arabic: "للتمديد."} },
          { id: "acl-m1-2", name: { english: "Quad Sets w/ NMES", arabic: "مجموعات رباعية مع تحفيز" }, sets: "3", reps: "10s hold", notes: {english: "Max effort squeeze.", arabic: "أقصى جهد عصر."} },
          { id: "acl-m1-3", name: { english: "4-Way SLR", arabic: "رفع ساق مستقيمة 4 اتجاهات" }, sets: "3", reps: "10", notes: {english: "Brace locked in extension.", arabic: "دعامة مقفلة في التمديد."} }
        ]
      },
      {
        month: "Weeks 4-12 (Strength)",
        focus: { english: "Closed Chain Load", arabic: "تحميل سلسلة مغلقة" },
        exercises: [
          { id: "acl-m2-1", name: { english: "Leg Press (Double)", arabic: "ضغط ساق (مزدوج)" }, sets: "3", reps: "12", notes: {english: "70-90 deg flexion.", arabic: "70-90 درجة انثناء."} },
          { id: "acl-m2-2", name: { english: "RDLs", arabic: "رفعة ميتة رومانية" }, sets: "3", reps: "10", notes: {english: "Hamstring focus.", arabic: "تركيز فخذ."} },
          { id: "acl-m2-3", name: { english: "Wall Sits", arabic: "جلوس حائط" }, sets: "3", reps: "45s" }
        ]
      },
      {
        month: "Months 3-6 (Power)",
        focus: { english: "Unilateral & Landing", arabic: "أحادي وهبوط" },
        exercises: [
          { id: "acl-m3-1", name: { english: "Bulgarian Split Squat", arabic: "قرفصاء بلغارية" }, sets: "3", reps: "8", notes: {english: "Load bearing.", arabic: "تحمل الحمل."} },
          { id: "acl-m3-2", name: { english: "Drop Jumps", arabic: "قفزات هبوط" }, sets: "4", reps: "6", notes: {english: "Focus on landing.", arabic: "ركز على الهبوط."} },
          { id: "acl-m3-3", name: { english: "Single Leg Press", arabic: "ضغط ساق واحدة" }, sets: "3", reps: "8" }
        ]
      }
    ],
    recovery_exercises: [
       { id: "acl-rec-1", name: {english: "Bike (Rocking)", arabic: "دراجة (تأرجح)"}, description: {english: "For ROM.", arabic: "لنطاق الحركة."}},
       { id: "acl-rec-2", name: {english: "Patella Mobs", arabic: "تحريك الرضفة"}, description: {english: "All directions.", arabic: "كل الاتجاهات."}},
       { id: "acl-rec-3", name: {english: "Wall Slides", arabic: "انزلاق حائط"}, description: {english: "Gravity assist flexion.", arabic: "ثني بمساعدة الجاذبية."}}
    ],
    rehabilitation_strategies: {
        english: ["Criteria-based progression", "Blood Flow Restriction (BFR)", "External Focus Cues"],
        arabic: ["تقدم قائم على المعايير", "تقييد تدفق الدم (BFR)", "إشارات التركيز الخارجي"]
    },
    references: [],
    disclaimer: { english: "Follow surgeon protocol strictly.", arabic: "اتبع بروتوكول الجراح بدقة." }
  },
  {
    id: "desk-neck",
    category: "spine",
    title: { english: "DeskNeck Relief", arabic: "تخفيف رقبة المكتب" },
    description: {
      english: "Correction of Upper Crossed Syndrome: inhibited deep neck flexors/rhomboids and facilitated upper trapezius/pectorals.",
      arabic: "تصحيح متلازمة التقاطع العلوي: تثبيط مثنيات الرقبة العميقة/المعينات وتسهيل شبه المنحرف العلوي/الصدريات."
    },
    management_plan: {
      general: {
        english: "The head weighs ~12lbs. For every inch of forward posture, the load on the cervical spine doubles. Goal is to retract the head over shoulders and open the thoracic spine.",
        arabic: "يزن الرأس ~12 رطلاً. لكل بوصة من الوضعية الأمامية، يتضاعف الحمل على العمود الفقري العنقي. الهدف هو إرجاع الرأس فوق الكتفين وفتح العمود الفقري الصدري."
      },
      immediate_care: {
        english: [
          "Micro-breaks: Every 20 mins, look at 20 ft away for 20s (20-20-20 rule) to relax eye strain which drives head-forward posture.",
          "Chin Tucks: Perform 10 retractions every hour to reset cervical alignment.",
          "Heat: Apply heat to upper traps to vasodilate ischemic (tight) tissues."
        ],
        arabic: [
          "فترات راحة صغيرة: كل 20 دقيقة، انظر لـ 20 قدماً لـ 20 ثانية (قاعدة 20-20-20) لإرخاء إجهاد العين الذي يدفع الرأس للأمام.",
          "سحب الذقن: قم بـ 10 سحبات كل ساعة لإعادة ضبط المحاذاة العنقية.",
          "الحرارة: ضع حرارة على أعلى الظهر لتوسيع الأوعية الدموية في الأنسجة الإقفارية (المشدودة)."
        ]
      },
      short_term_care: {
        english: [
          "Thoracic Extension: Use a foam roller on mid-back (T-Spine) to reverse kyphosis.",
          "Pec Stretching: Tight pecs pull shoulders forward; stretch them in a doorway.",
          "Ergonomics: Monitor top at eye level. Elbows 90 degrees. Feet flat."
        ],
        arabic: [
          "تمديد الصدر: استخدم فوم رولر على منتصف الظهر (العمود الفقري الصدري) لعكس الحدب.",
          "تمديد الصدر: الصدريات المشدودة تسحب الكتفين للأمام؛ مددها في مدخل الباب.",
          "بيئة العمل: قمة الشاشة بمستوى العين. الأكواع 90 درجة. القدمين مسطحتين."
        ]
      }
    },
    supplements: [
      {
        name: { english: "Magnesium Glycinate", arabic: "جليسينات المغنيسيوم" },
        dose: { english: "400mg at night", arabic: "400 مجم ليلاً" },
        administration: { english: "High absorption form for muscle relaxation.", arabic: "شكل عالي الامتصاص لاسترخاء العضلات." }
      },
      {
        name: { english: "Topical Menthol/Camphor", arabic: "منثول/كافور موضعي" },
        dose: { english: "As needed", arabic: "عند الحاجة" },
        administration: { english: "Gate control theory for pain relief.", arabic: "نظرية التحكم في البوابة لتخفيف الألم." }
      }
    ],
    medications: [
      { name: { english: "Muscle Relaxants", arabic: "مرخيات العضلات" }, dose: {english: "Prescription only (acute)", arabic: "وصفة فقط (حاد)"} }
    ],
    plants_and_herbs: [
      {
        name: { english: "Valerian Root", arabic: "جذر الناردين" },
        benefits: { english: "Natural skeletal muscle relaxant.", arabic: "مرخي طبيعي للعضلات الهيكلية." }
      }
    ],
    recipes: [],
    gym_tips: {
      english: [
        "Face Pulls: The antidote to desk posture. Do them every upper body workout. Focus on external rotation.", 
        "Stop Shrugging: Upper traps are already tight. Avoid shrugs; focus on depressions (pulling shoulders down).", 
        "Neck Neutral: During deadlifts/rows, look at the floor 3ft ahead, not the mirror.",
        "Ratio: Perform 2 pulling movements for every 1 pushing movement."
      ],
      arabic: [
        "سحب الوجه: الترياق لوضعية المكتب. قم بها في كل تمرين للجزء العلوي. ركز على الدوران الخارجي.", 
        "توقف عن الهز: أعلى الظهر مشدود بالفعل. تجنب الهز؛ ركز على الخفض (سحب الكتفين لأسفل).", 
        "الرقبة محايدة: أثناء الرفعات الميتة/الصفوف، انظر للأرض 3 أقدام للأمام، ليس للمرآة.",
        "النسبة: قم بحركتي سحب لكل حركة دفع."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Mobility)",
        focus: { english: "T-Spine & Pecs", arabic: "العمود الصدري والصدر" },
        exercises: [
          { id: "dn-m1-1", name: { english: "Foam Roll T-Spine", arabic: "فوم رول عمود صدري" }, sets: "1", reps: "2 min", notes: {english: "Extension/Flexion.", arabic: "تمديد/ثني."} },
          { id: "dn-m1-2", name: { english: "Doorway Stretch", arabic: "تمديد الباب" }, sets: "3", reps: "30s", notes: {english: "Arms at 90 deg.", arabic: "الذراعين عند 90 درجة."} },
          { id: "dn-m1-3", name: { english: "Supine Chin Tucks", arabic: "سحب ذقن مستلق" }, sets: "3", reps: "10", notes: {english: "Head on floor.", arabic: "الرأس على الأرض."} }
        ]
      },
      {
        month: "Phase 2 (Stability)",
        focus: { english: "Deep Flexors & Rhomboids", arabic: "المثنيات العميقة والمعينات" },
        exercises: [
          { id: "dn-m2-1", name: { english: "Band Pull-Aparts", arabic: "فصل الشريط" }, sets: "3", reps: "20", notes: {english: "Palms up (supinated).", arabic: "راحة اليد لأعلى."} },
          { id: "dn-m2-2", name: { english: "Wall Angels", arabic: "ملائكة الحائط" }, sets: "3", reps: "10", notes: {english: "Keep lower back flat.", arabic: "ابق أسفل الظهر مسطحاً."} },
          { id: "dn-m2-3", name: { english: "Prone Cobra", arabic: "كوبرا مستلقية" }, sets: "3", reps: "30s hold" }
        ]
      },
      {
        month: "Phase 3 (Strength)",
        focus: { english: "Posterior Chain", arabic: "السلسلة الخلفية" },
        exercises: [
          { id: "dn-m3-1", name: { english: "Face Pulls", arabic: "سحب الوجه" }, sets: "4", reps: "15", notes: {english: "High rep, control.", arabic: "تكرار عالي، تحكم."} },
          { id: "dn-m3-2", name: { english: "DB Y-Raises", arabic: "رفعات Y دمبل" }, sets: "3", reps: "12", notes: {english: "Incline bench.", arabic: "بنش مائل."} },
          { id: "dn-m3-3", name: { english: "Farmer Carry", arabic: "حمل المزارع" }, sets: "3", reps: "45s", notes: {english: "Shoulders packed down.", arabic: "الكتفين مضغوطة لأسفل."} }
        ]
      }
    ],
    recovery_exercises: [
        { id: "dn-rec-1", name: {english: "Upper Trap Stretch", arabic: "تمديد شبه منحرف"}, description: {english: "Hand behind back, tilt head.", arabic: "يد خلف الظهر، أمل الرأس."}},
        { id: "dn-rec-2", name: {english: "Levator Scap Stretch", arabic: "تمديد رافعة اللوح"}, description: {english: "Nose to armpit.", arabic: "الأنف للإبط."}}
    ],
    rehabilitation_strategies: {
        english: ["Postural Awareness", "Ergonomic Assessment", "Stress Management"],
        arabic: ["الوعي الوضعي", "التقييم المريح", "إدارة التوتر"]
    },
    references: [],
    disclaimer: { english: "Exclude cervical radiculopathy.", arabic: "استبعد الاعتلال الجذري العنقي." }
  },
  {
    id: "wrist-save",
    category: "upper",
    title: { english: "FemaleWrist Save", arabic: "حماية رسغ المرأة" },
    description: {
      english: "Management of Carpal Tunnel Syndrome (Median Nerve) and De Quervain's Tenosynovitis. Women are more predisposed due to smaller carpal tunnel anatomy.",
      arabic: "إدارة متلازمة نفق الرسغ (العصب المتوسط) والتهاب غمد الوتر دي كيرفان. النساء أكثر عرضة بسبب تشريح نفق الرسغ الأصغر."
    },
    management_plan: {
      general: {
        english: "Carpal Tunnel is caused by compression of the median nerve. De Quervain's affects thumb tendons. Both are overuse driven. Neutral wrist position is key.",
        arabic: "نفق الرسغ سببه ضغط العصب المتوسط. دي كيرفان يؤثر على أوتار الإبهام. كلاهما ناتج عن الإفراط في الاستخدام. وضع الرسغ المحايد هو المفتاح."
      },
      immediate_care: {
        english: [
          "Night Splinting: Wear a rigid wrist brace at night to prevent sleep flexion which spikes canal pressure.",
          "Ice Massage: Freeze water in a cup and massage the wrist flexor retinaculum for 5 mins.",
          "Activity Mod: Switch to a vertical mouse to keep forearm in neutral pronation."
        ],
        arabic: [
          "التجبير الليلي: ارتد دعامة رسغ صلبة ليلاً لمنع انثناء النوم الذي يرفع ضغط القناة.",
          "تدليك الثلج: جمد الماء في كوب ودلك قيد مثنيات الرسغ لمدة 5 دقائق.",
          "تعديل النشاط: انتقل إلى ماوس عمودي للحفاظ على الساعد في كب محايد."
        ]
      },
      short_term_care: {
        english: [
          "Nerve Glides: 'Flossing' the median nerve prevents adhesions. Do not stretch to pain.",
          "Contrast Baths: Alternating hot/cold water helps pump edema out of the tight tunnel.",
          "Tendon Glides: Essential exercises to lubricate the superficial and deep flexor tendons."
        ],
        arabic: [
          "انزلاق العصب: 'خيط' العصب المتوسط يمنع الالتصاقات. لا تمدد للألم.",
          "حمامات التباين: الماء الساخن/البارد المتناوب يساعد في ضخ الوذمة خارج النفق الضيق.",
          "انزلاق الوتر: تمارين ضرورية لتزييت أوتار الثني السطحية والعميقة."
        ]
      }
    },
    supplements: [
      {
        name: { english: "Vitamin B6 (P-5-P)", arabic: "فيتامين ب6 (P-5-P)" },
        dose: { english: "50mg daily", arabic: "50 مجم يومياً" },
        administration: { english: "Active form P5P preferred. Reduces nerve edema.", arabic: "الشكل النشط P5P مفضل. يقلل وذمة العصب." }
      },
      {
        name: { english: "Alpha Lipoic Acid", arabic: "حمض ألفا ليبويك" },
        dose: { english: "600mg daily", arabic: "600 مجم يومياً" },
        administration: { english: "Antioxidant for nerve health.", arabic: "مضاد أكسدة لصحة الأعصاب." }
      }
    ],
    medications: [
      { name: { english: "Corticosteroid Injection", arabic: "حقن كورتيكوستيرويد" }, dose: {english: "If conservative fails", arabic: "إذا فشل المحافظ"} }
    ],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: [
        "Neutral Wrists: In bench press/overhead press, knuckles should face ceiling, not bent back.", 
        "Push-up Bars: Use handles for push-ups to keep wrists straight.", 
        "Strap Up: Use lifting straps for heavy pulls to offload the flexor tendons.",
        "Thick Grips: Use Fat Gripz or towel to increase handle diameter, reducing grip force requirement."
      ],
      arabic: [
        "رسغ محايد: في ضغط البنش/فوق الرأس، يجب أن تواجه المفاصل السقف، غير مثنية للخلف.", 
        "قضبان الضغط: استخدم مقابض للضغط للحفاظ على استقامة الرسغ.", 
        "اربط: استخدم أشرطة الرفع للسحب الثقيل لتخفيف الحمل عن أوتار الثني.",
        "قابض سميك: استخدم Fat Gripz أو منشفة لزيادة قطر المقبض، مما يقلل متطلبات قوة القبضة."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Glide)",
        focus: { english: "Nerve & Tendon Mobility", arabic: "حركة العصب والوتر" },
        exercises: [
          { id: "ws-m1-1", name: { english: "Median Nerve Glide", arabic: "انزلاق عصب متوسط" }, sets: "3", reps: "10", notes: {english: "Head tilt away.", arabic: "ميل الرأس بعيداً."} },
          { id: "ws-m1-2", name: { english: "Tendon Glides A-B-C", arabic: "انزلاق وتر A-B-C" }, sets: "3", reps: "10", notes: {english: "Hook, Fist, Tabletop.", arabic: "خطاف، قبضة، سطح طاولة."} },
          { id: "ws-m1-3", name: { english: "Prayer Stretch", arabic: "تمديد الصلاة" }, sets: "3", reps: "30s" }
        ]
      },
      {
        month: "Phase 2 (Isometrics)",
        focus: { english: "Wrist Stability", arabic: "استقرار الرسغ" },
        exercises: [
          { id: "ws-m2-1", name: { english: "Rubber Band Extension", arabic: "تمديد شريط مطاطي" }, sets: "3", reps: "15", notes: {english: "Around fingers.", arabic: "حول الأصابع."} },
          { id: "ws-m2-2", name: { english: "Isometric Extension", arabic: "تمديد متساوي القياس" }, sets: "3", reps: "10s hold", notes: {english: "Resist other hand.", arabic: "قاوم اليد الأخرى."} },
          { id: "ws-m2-3", name: { english: "Farmers Carry", arabic: "حمل المزارع" }, sets: "3", reps: "30s", notes: {english: "Neutral wrist.", arabic: "رسغ محايد."} }
        ]
      }
    ],
    recovery_exercises: [
        { id: "ws-rec-1", name: {english: "Rice Bucket", arabic: "دلو الأرز"}, description: {english: "Digging motions.", arabic: "حركات حفر."}}
    ],
    rehabilitation_strategies: {
        english: ["Ergonomics", "Night Splinting", "Grip Modification"],
        arabic: ["بيئة العمل", "تجبير ليلي", "تعديل القبضة"]
    },
    references: [],
    disclaimer: { english: "Check for pregnancy (edema).", arabic: "افحصي للحمل (وذمة)." }
  },
  {
    id: "lower-back",
    category: "spine",
    title: { english: "MaleLower-Back Fix", arabic: "إصلاح ألم الظهر للرجال" },
    description: {
      english: "Mechanical Lower Back Pain (LBP) management utilizing the McGill Method. Focus on core stiffness and spine hygiene.",
      arabic: "إدارة آلام أسفل الظهر الميكانيكية (LBP) باستخدام طريقة ماكجيل. التركيز على صلابة الجذع ونظافة العمود الفقري."
    },
    management_plan: {
      general: {
        english: "Most LBP is 'nonspecific mechanical'. Identify triggers: Flexion Intolerant (pain with sitting/tying shoes) vs Extension Intolerant (pain with standing/walking). Avoid 'stretching' pain away.",
        arabic: "معظم آلام أسفل الظهر 'ميكانيكية غير محددة'. حدد المحفزات: غير متحمل للانثناء (ألم مع الجلوس/ربط الحذاء) مقابل غير متحمل للتمديد (ألم مع الوقوف/المشي). تجنب 'تمديد' الألم بعيداً."
      },
      immediate_care: {
        english: [
          "Decompression: 90/90 position (lying on floor, legs on chair) to deload psoas and discs.",
          "Walking: Fast walking with swinging arms reduces spinal load compared to slow walking.",
          "Avoid Flexion: Especially in the morning (discs are hydrated and swollen); no bending for 1h after waking.",
          "Hip Hinge: Learn to move from hips, not spine, for all daily tasks (brushing teeth, picking up objects)."
        ],
        arabic: [
          "تخفيف الضغط: وضع 90/90 (الاستلقاء على الأرض، الساقين على كرسي) لتخفيف الحمل عن القطنية والأقراص.",
          "المشي: المشي السريع مع تأرجح الذراعين يقلل حمل العمود الفقري مقارنة بالمشي البطيء.",
          "تجنب الانثناء: خاصة في الصباح (الأقراص رطبة ومنتفاخة)؛ لا انحناء لساعة بعد الاستيقاظ.",
          "مفصل الورك: تعلم التحرك من الوركين، ليس العمود الفقري، لجميع المهام اليومية (تنظيف الأسنان، التقاط الأشياء)."
        ]
      }
    },
    supplements: [],
    medications: [
       { name: {english: "Muscle Relaxants", arabic: "مرخيات العضلات"}, dose: {english: "Acute spasm only", arabic: "تشنج حاد فقط"} }
    ],
    plants_and_herbs: [
      {
        name: { english: "Capsaicin Patch", arabic: "لصقة كابسيسين" },
        benefits: { english: "Depletes substance P.", arabic: "يستنفد المادة P." },
        usage: { english: "Topical application.", arabic: "تطبيق موضعي." }
      }
    ],
    recipes: [],
    gym_tips: {
      english: [
        "McGill Big 3: The non-negotiable core routine (Curl Up, Side Plank, Bird Dog) performed daily.", 
        "No Sit-Ups: They place 3300N of compression on the spine. Replace with planks.", 
        "Bracing: Create a 'shield' with abs (stiffening), don't suck in (hollowing).", 
        "Glute Amnesia: Inactive glutes force the lower back to extend. Wake up glutes with bridges before squats."
      ],
      arabic: [
        "ماكجيل الثلاثة الكبار: روتين الجذع غير القابل للتفاوض (الكرنش، اللوح الجانبي، الكلب الطائر) يؤدى يومياً.", 
        "لا تمارين بطن: تضع 3300 نيوتن من الضغط على العمود الفقري. استبدلها بالألواح.", 
        "الشد: اصنع 'درعاً' بعضلات البطن (تصلب)، لا تشفط للداخل (تجوّف).", 
        "فقدان ذاكرة الأرداف: الأرداف غير النشطة تجبر أسفل الظهر على التمدد. أيقظ الأرداف بالجسور قبل القرفصاء."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Hygiene)",
        focus: { english: "McGill Big 3", arabic: "ماكجيل الثلاثة الكبار" },
        exercises: [
          { id: "lb-m1-1", name: { english: "McGill Curl Up", arabic: "تمرين ماكجيل" }, sets: "5-3-1", reps: "10s hold", notes: {english: "Descending pyramid.", arabic: "هرم تنازلي."} },
          { id: "lb-m1-2", name: { english: "Side Plank (Knees)", arabic: "لوح جانبي (ركبتين)" }, sets: "3", reps: "20s", notes: {english: "Spine neutral.", arabic: "عمود فقري محايد."} },
          { id: "lb-m1-3", name: { english: "Bird-Dog", arabic: "الكلب الطائر" }, sets: "3", reps: "8", notes: {english: "Don't arch back.", arabic: "لا تقوس الظهر."} }
        ]
      },
      {
        month: "Phase 2 (Endurance)",
        focus: { english: "Anti-Motion Core", arabic: "جذع مضاد للحركة" },
        exercises: [
          { id: "lb-m2-1", name: { english: "Pallof Press", arabic: "ضغط بالوف" }, sets: "3", reps: "12", notes: {english: "Anti-rotation.", arabic: "مضاد للدوران."} },
          { id: "lb-m2-2", name: { english: "Suitcase Carry", arabic: "حمل الحقيبة" }, sets: "3", reps: "40s", notes: {english: "Anti-lateral flexion.", arabic: "مضاد للثني الجانبي."} },
          { id: "lb-m2-3", name: { english: "Stir the Pot", arabic: "حرك الوعاء" }, sets: "3", reps: "10", notes: {english: "Plank on stability ball.", arabic: "لوح على كرة ثبات."} }
        ]
      }
    ],
    recovery_exercises: [
        { id: "lb-rec-1", name: {english: "Cat-Camel", arabic: "قطة-جمل"}, description: {english: "Motion not stretch. 8 reps.", arabic: "حركة وليس تمدد. 8 تكرارات."}},
        { id: "lb-rec-2", name: {english: "Hip Flexor Stretch", arabic: "تمديد مثني الورك"}, description: {english: "Lunge position, squeeze glute.", arabic: "وضع اندفاع، اعصر الأرداف."}}
    ],
    rehabilitation_strategies: {
        english: ["Spine Sparing", "Hip Hinge", "Virtual Surgery (Rest)"],
        arabic: ["حفظ العمود الفقري", "مفصل الورك", "جراحة افتراضية (راحة)"]
    },
    references: [],
    disclaimer: { english: "Red flags (bladder issues) -> ER.", arabic: "علامات حمراء (مشاكل مثانة) -> طوارئ." }
  },
  {
    id: "recovery-perf",
    category: "fitness",
    title: { english: "Recovery & Performance", arabic: "التعافي والأداء" },
    description: {
      english: "Systemic recovery protocols focusing on CNS (Central Nervous System) restoration, sleep architecture, and nutrient timing.",
      arabic: "بروتوكولات التعافي الجهازي مع التركيز على استعادة الجهاز العصبي المركزي (CNS)، هندسة النوم، وتوقيت المغذيات."
    },
    management_plan: {
      general: {
        english: "Recovery is the limiting factor in performance. You don't grow in the gym; you grow in sleep. Balance Sympathetic (Fight/Flight) with Parasympathetic (Rest/Digest) tone.",
        arabic: "التعافي هو العامل المحدد في الأداء. أنت لا تنمو في الجيم؛ أنت تنمو في النوم. وازن بين النغمة الودية (قتال/هروب) ونظير الودية (راحة/هضم)."
      },
      immediate_care: {
        english: [
          "The 'Anabolic Window': Consuming protein (20-40g) within hours post-workout maximizes muscle protein synthesis (MPS).",
          "Glycogen Replenishment: Carb intake post-workout replenishes fuel stores and spikes insulin to drive nutrients into cells.",
          "Down-Regulation: Box breathing (4s in, 4s hold, 4s out, 4s hold) for 5 mins post-workout to lower cortisol."
        ],
        arabic: [
          "النافذة البنائية: استهلاك البروتين (20-40 جم) في غضون ساعات بعد التمرين يزيد تخليق بروتين العضلات (MPS).",
          "تجديد الجليكوجين: تناول الكربوهيدرات بعد التمرين يجدد مخازن الوقود ويرفع الأنسولين لدفع المغذيات إلى الخلايا.",
          "التنظيم السفلي: تنفس الصندوق (4ث دخول، 4ث حبس، 4ث خروج، 4ث حبس) لمدة 5 دقائق بعد التمرين لخفض الكورتيزول."
        ]
      }
    },
    supplements: [
      {
        name: { english: "Creatine Monohydrate", arabic: "كرياتين أحادي الهيدرات" },
        dose: { english: "5g daily", arabic: "5 جم يومياً" },
        administration: { english: "Increases ATP stores. Most researched supplement.", arabic: "يزيد مخازن ATP. المكمل الأكثر بحثاً." }
      },
      {
        name: { english: "Magnesium Bisglycinate", arabic: "بيسجليسينات المغنيسيوم" },
        dose: { english: "400mg pre-bed", arabic: "400 مجم قبل النوم" },
        administration: { english: "Crucial for CNS recovery and sleep quality.", arabic: "حاسم لتعافي الجهاز العصبي المركزي وجودة النوم." }
      },
      {
        name: { english: "Zinc Picolinate", arabic: "بيكولينات الزنك" },
        dose: { english: "30mg", arabic: "30 مجم" },
        administration: { english: "Supports testosterone and immune function.", arabic: "يدعم التستوستيرون ووظيفة المناعة." }
      }
    ],
    medications: [],
    plants_and_herbs: [
      {
        name: { english: "Ashwagandha (KSM-66)", arabic: "أشواغاندا" },
        benefits: { english: "Adaptogen, lowers cortisol.", arabic: "مكيف، يخفض الكورتيزول." },
        usage: { english: "300-600mg.", arabic: "300-600 مجم." }
      },
      {
        name: { english: "Tart Cherry Juice", arabic: "عصير الكرز الحامض" },
        benefits: { english: "Natural melatonin source + anti-inflammatory.", arabic: "مصدر طبيعي للميلاتونين + مضاد للالتهاب." }
      }
    ],
    recipes: [
        {
            name: {english: "Bedtime Recovery Elixir", arabic: "إكسير التعافي قبل النوم"},
            ingredients: {english: "Tart cherry juice, magnesium powder, glycine.", arabic: "عصير كرز حامض، مسحوق مغنيسيوم، جلايسين."},
            preparation: {english: "Mix and drink 1 hour before bed.", arabic: "اخلط واشرب قبل النوم بساعة."}
        }
    ],
    gym_tips: {
      english: [
        "Sleep Hygiene: Pitch black room, 18-20°C. Blue light blockers 2h before bed.", 
        "Deload Weeks: Every 4-6 weeks, reduce volume by 50% but keep intensity high to dissipate fatigue while maintaining adaptation.", 
        "Active Recovery: Walking (Zone 1 cardio) flushes lactate better than sitting.", 
        "HRV Monitoring: If Heart Rate Variability drops significantly, reduce training load that day."
      ],
      arabic: [
        "نظافة النوم: غرفة مظلمة تماماً، 18-20 درجة مئوية. حاجبات الضوء الأزرق قبل النوم بساعتين.", 
        "أسابيع تخفيف الحمل: كل 4-6 أسابيع، قلل الحجم بنسبة 50% ولكن حافظ على الشدة عالية لتبديد التعب مع الحفاظ على التكيف.", 
        "التعافي النشط: المشي (كارديو المنطقة 1) يطرد اللاكتات أفضل من الجلوس.", 
        "مراقبة HRV: إذا انخفض تقلب معدل ضربات القلب بشكل كبير، قلل حمل التدريب في ذلك اليوم."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Routine",
        focus: { english: "Active Recovery", arabic: "تعافي نشط" },
        exercises: [
          { id: "rp-m1-1", name: { english: "LISS Cardio", arabic: "كارديو منخفض الشدة" }, sets: "1", reps: "30 min", notes: {english: "HR < 130bpm.", arabic: "نبض < 130."} },
          { id: "rp-m1-2", name: { english: "Contrast Shower", arabic: "دش تباين" }, sets: "3", reps: "cycles", notes: {english: "30s cold / 2m hot.", arabic: "30 ثانية بارد / 2 دقيقة ساخن."} }
        ]
      }
    ],
    recovery_exercises: [],
    rehabilitation_strategies: { english: ["Sleep", "Nutrition", "Hydration"], arabic: ["نوم", "تغذية", "ترطيب"] },
    references: [],
    disclaimer: { english: "Consult nutritionist.", arabic: "استشر خبير تغذية." }
  },
  {
    id: "runner-knee",
    category: "lower",
    title: { english: "Runner's Knee Reset", arabic: "إعادة ضبط ركبة العداء" },
    description: {
      english: "Patellofemoral Pain Syndrome (PFPS). Pain around/behind kneecap due to tracking issues caused by weak hips and tight lateral structures.",
      arabic: "متلازمة ألم الفخذ الرضفي (PFPS). ألم حول/خلف الرضفة بسبب مشاكل المسار الناتجة عن ضعف الوركين وشد الهياكل الجانبية."
    },
    management_plan: {
      general: {
        english: "The knee is a 'slave' joint caught between the hip and foot. PFPS is often a hip stability issue (weak glute medius) causing femoral internal rotation.",
        arabic: "الركبة مفصل 'عبد' عالق بين الورك والقدم. PFPS غالباً ما تكون مشكلة استقرار الورك (ضعف الألوية المتوسطة) مما يسبب دوران الفخذ الداخلي."
      },
      immediate_care: {
        english: [
          "Load Management: Reduce running volume by 50% or until pain-free.",
          "Cadence: Increase running cadence by 5-10%. Shorter steps reduce load on the patellofemoral joint.",
          "McConnell Taping: Can provide immediate pain relief by correcting patellar tilt temporarily."
        ],
        arabic: [
          "إدارة الحمل: قلل حجم الجري بنسبة 50% أو حتى يزول الألم.",
          "الإيقاع: زد إيقاع الجري بنسبة 5-10%. الخطوات الأقصر تقلل الحمل على المفصل الفخذي الرضفي.",
          "شريط ماكونيل: يمكن أن يوفر راحة فورية من الألم عن طريق تصحيح ميل الرضفة مؤقتاً."
        ]
      }
    },
    supplements: [
      { name: { english: "Glucosamine Sulfate", arabic: "كبريتات الجلوكوزامين" }, dose: { english: "1500mg daily", arabic: "1500 مجم يومياً" } }
    ],
    medications: [],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: [
        "Strengthen Hips: Glute Medius prevents the knee from caving in (valgus).", 
        "VMO Myth: You can't isolate the VMO (inner quad), but you can ensure general quad strength is adequate.", 
        "Uphill Running: Safer than downhill running (less eccentric load on knees)."
      ],
      arabic: [
        "قو الوركين: الألوية المتوسطة تمنع الركبة من الانهيار للداخل (فحج).", 
        "خرافة VMO: لا يمكنك عزل VMO (الرباعية الداخلية)، لكن يمكنك التأكد من كفاية قوة الرباعية العامة.", 
        "الجري صعوداً: أكثر أماناً من الجري نزولاً (حمل لامركزي أقل على الركبتين)."
      ]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Hips)",
        focus: { english: "Glute Medius", arabic: "الألوية المتوسطة" },
        exercises: [
          { id: "rk-m1-1", name: { english: "Side Lying Clamshell", arabic: "صدفة جانبية" }, sets: "3", reps: "15", notes: {english: "Band above knees.", arabic: "حزام فوق الركبتين."} },
          { id: "rk-m1-2", name: { english: "Side Plank Leg Lift", arabic: "رفع ساق لوح جانبي" }, sets: "3", reps: "10" },
          { id: "rk-m1-3", name: { english: "Monster Walks", arabic: "مشي الوحش" }, sets: "3", reps: "20 steps" }
        ]
      },
      {
        month: "Phase 2 (Quads)",
        focus: { english: "Quad Loading", arabic: "تحميل الرباعية" },
        exercises: [
          { id: "rk-m2-1", name: { english: "Peterson Step Up", arabic: "خطوات بيترسون" }, sets: "3", reps: "12", notes: {english: "Heel elevated.", arabic: "كعب مرفوع."} },
          { id: "rk-m2-2", name: { english: "Spanish Squat", arabic: "قرفصاء إسبانية" }, sets: "3", reps: "45s hold", notes: {english: "Band behind knees.", arabic: "حزام خلف الركبتين."} }
        ]
      }
    ],
    recovery_exercises: [
      { id: "rk-rec-1", name: { english: "Foam Roll IT Band", arabic: "فوم رول شريط IT" }, description: { english: "Roll outer thigh, not bone.", arabic: "دحرج الفخذ الخارجي، ليس العظم." } },
      { id: "rk-rec-2", name: { english: "Couch Stretch", arabic: "تمديد الأريكة" }, description: { english: "Hip flexor/quad stretch.", arabic: "تمديد مثني الورك/الرباعية." } }
    ],
    rehabilitation_strategies: { english: ["Cadence Retraining", "Hip Strength"], arabic: ["إعادة تدريب الإيقاع", "قوة الورك"] },
    references: [],
    disclaimer: { english: "Rule out meniscus tear.", arabic: "استبعد تمزق الغضروف المفصلي." }
  },
  {
    id: "tennis-elbow",
    category: "upper",
    title: { english: "Tennis Elbow Fix", arabic: "إصلاح مرفق التنس" },
    description: {
      english: "Lateral Epicondylitis (Extensor Tendinopathy). Pain on the outside of the elbow caused by repetitive wrist extension or gripping.",
      arabic: "التهاب اللقيمة الجانبي (اعتلال وتر الباسطة). ألم في الجزء الخارجي من المرفق ناتج عن تمديد المعصم المتكرر أو القبض."
    },
    management_plan: {
      general: {
        english: "It is a degenerative condition (tendinosis), not just inflammatory. Requires load management and collagen synthesis. Avoid palm-down lifting.",
        arabic: "إنها حالة تنكسية (تنكس الوتر)، وليست مجرد التهاب. تتطلب إدارة الحمل وتخليق الكولاجين. تجنب الرفع وراحة اليد لأسفل."
      },
      immediate_care: {
        english: [
          "Activity Mod: Pick up objects with palm UP (supinated) to offload extensors.",
          "Counterforce Brace: Wear a strap just below the elbow to distribute force.",
          "Ice Massage: 5-10 mins directly on the tender spot."
        ],
        arabic: [
          "تعديل النشاط: التقط الأشياء وراحة اليد لأعلى (مستلقية) لتخفيف الحمل عن الباسطات.",
          "دعامة القوة المضادة: ارتد حزاماً أسفل المرفق مباشرة لتوزيع القوة.",
          "تدليك الثلج: 5-10 دقائق مباشرة على النقطة المؤلمة."
        ]
      }
    },
    supplements: [
      { name: { english: "Collagen Peptides", arabic: "ببتيدات الكولاجين" }, dose: { english: "10g pre-rehab", arabic: "10 جم قبل التأهيل" } }
    ],
    medications: [],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: ["Tyler Twist: The gold standard rehab exercise using a FlexBar.", "Grip: Use lifting straps for deadlifts to rest grip.", "Dumbbells: Better than barbells to allow wrist rotation."],
      arabic: ["تمرين تايلر: التمرين المعياري الذهبي لإعادة التأهيل باستخدام فليكسبار.", "القبضة: استخدم أشرطة الرفع للرفعات الميتة لإراحة القبضة.", "الدمبل: أفضل من البار للسماح بدوران المعصم."]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Iso)",
        focus: { english: "Isometrics", arabic: "متساوي القياس" },
        exercises: [
          { id: "te-m1-1", name: { english: "Wrist Ext. Hold", arabic: "ثبات تمديد معصم" }, sets: "5", reps: "45s", notes: {english: "Wrist neutral, slight weight.", arabic: "رسغ محايد، وزن خفيف."} }
        ]
      },
      {
        month: "Phase 2 (Eccentric)",
        focus: { english: "Eccentric Loading", arabic: "تحميل لامركزي" },
        exercises: [
          { id: "te-m2-1", name: { english: "Tyler Twist", arabic: "تمرين تايلر" }, sets: "3", reps: "15", notes: {english: "Red Theraband Flexbar.", arabic: "فليكسبار أحمر."} },
          { id: "te-m2-2", name: { english: "Eccentric Wrist Ext", arabic: "تمديد معصم لامركزي" }, sets: "3", reps: "15", notes: {english: "Up with 2 hands, down with 1.", arabic: "اصعد بيدين، انزل بواحدة."} }
        ]
      }
    ],
    recovery_exercises: [
      { id: "te-rec-1", name: { english: "Wrist Flexor Stretch", arabic: "تمديد باسطات المعصم" }, description: { english: "Elbow straight, pull hand back.", arabic: "كوع مستقيم، اسحب اليد للخلف." } }
    ],
    rehabilitation_strategies: { english: ["Eccentric Loading", "Bracing"], arabic: ["تحميل لامركزي", "تجبير"] },
    references: [],
    disclaimer: { english: "Rule out Radial Tunnel Syndrome.", arabic: "استبعد متلازمة النفق الكعبري." }
  },
  {
    id: "plantar-fasciitis",
    category: "lower",
    title: { english: "Plantar Fasciitis Fix", arabic: "علاج التهاب اللفافة الأخمصية" },
    description: {
      english: "Management of 'Start-up Pain' (morning heel pain). Caused by degradation of the plantar fascia collagen.",
      arabic: "إدارة 'ألم البدء' (ألم الكعب الصباحي). ناتج عن تدهور كولاجين اللفافة الأخمصية."
    },
    management_plan: {
      general: {
        english: "Tight calves and weak foot intrinsics overload the fascia. High load strength training (Rathleff Protocol) is more effective than just stretching.",
        arabic: "السمانة المشدودة وعضلات القدم الداخلية الضعيفة تحمل اللفافة فوق طاقتها. تدريب القوة عالي الحمل (بروتوكول راثليف) أكثر فعالية من مجرد التمدد."
      },
      immediate_care: {
        english: [
          "Morning Routine: Before first step, massage arch and stretch calf with towel to warm up tissue.",
          "Shoes: Wear supportive shoes immediately (no barefoot walking on hard floors).",
          "Frozen Bottle: Roll foot over frozen water bottle for pain relief."
        ],
        arabic: [
          "روتين الصباح: قبل الخطوة الأولى، دلك القوس ومدد السمانة بمنشفة لتدفئة الأنسجة.",
          "الأحذية: ارتد أحذية داعمة فوراً (ممنوع المشي حافياً على أرضيات صلبة).",
          "زجاجة مجمدة: دحرج القدم فوق زجاجة ماء مجمدة لتخفيف الألم."
        ]
      }
    },
    supplements: [],
    medications: [],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: ["Rathleff Protocol: Calf raises with a towel under toes to engage the Windlass Mechanism.", "Avoid Plyometrics until pain-free.", "Stretch Calves: Gastroc (straight leg) and Soleus (bent knee)."],
      arabic: ["بروتوكول راثليف: رفع السمانة مع منشفة تحت الأصابع لتشغيل آلية الرافعة.", "تجنب البليومترية حتى يزول الألم.", "مدد السمانة: التوأمية (ساق مستقيمة) والنعلية (ركبة مثنية)."]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Stretch)",
        focus: { english: "Tissue Length", arabic: "طول الأنسجة" },
        exercises: [
          { id: "pf-m1-1", name: { english: "Wall Calf Stretch", arabic: "تمديد سمانة حائط" }, sets: "3", reps: "30s", notes: {english: "Straight & Bent knee.", arabic: "ركبة مستقيمة ومثنية."} },
          { id: "pf-m1-2", name: { english: "Plantar Massage", arabic: "تدليك أخمصي" }, sets: "2", reps: "2 min", notes: {english: "Ball rolling.", arabic: "دحرجة كرة."} }
        ]
      },
      {
        month: "Phase 2 (Load)",
        focus: { english: "Rathleff Protocol", arabic: "بروتوكول راثليف" },
        exercises: [
          { id: "pf-m2-1", name: { english: "High Load Calf Raise", arabic: "رفع سمانة حمل عالي" }, sets: "3", reps: "12 (3s up, 3s down)", notes: {english: "Towel under toes.", arabic: "منشفة تحت الأصابع."} },
          { id: "pf-m2-2", name: { english: "Towel Grabs", arabic: "التقاط منشفة" }, sets: "3", reps: "10", notes: {english: "With toes.", arabic: "بالأصابع."} }
        ]
      }
    ],
    recovery_exercises: [
      { id: "pf-rec-1", name: { english: "Big Toe Stretch", arabic: "تمديد إبهام القدم" }, description: { english: "Pull big toe back.", arabic: "اسحب الإبهام للخلف." } }
    ],
    rehabilitation_strategies: { english: ["Rathleff Protocol", "Windlass Mechanism"], arabic: ["بروتوكول راثليف", "آلية الرافعة"] },
    references: [],
    disclaimer: { english: "Rule out heel spur fracture.", arabic: "استبعد كسر نتوء الكعب." }
  },
  {
    id: "rotator-cuff",
    category: "upper",
    title: { english: "Rotator Cuff Restore", arabic: "استعادة الكفة المدورة" },
    description: {
      english: "Management of Subacromial Impingement and Rotator Cuff Tendinopathy. Focus on scapular stability and creating joint space.",
      arabic: "إدارة الانحشار تحت الأخرمي واعتلال وتر الكفة المدورة. التركيز على استقرار لوح الكتف وخلق مساحة في المفصل."
    },
    management_plan: {
      general: {
        english: "The rotator cuff centers the arm in the socket. Weakness causes the arm to ride up and pinch tendons. Scapular stabilizers (lower trap/serratus) must be strong to tilt the scapula and create room.",
        arabic: "الكفة المدورة تمركز الذراع في التجويف. الضعف يسبب ارتفاع الذراع وضغط الأوتار. مثبتات اللوح (شبه المنحرف السفلي/المنشارية) يجب أن تكون قوية لإمالة اللوح وخلق مساحة."
      }
    },
    supplements: [],
    medications: [],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: ["Scaption: Perform raises in the 'Scapular Plane' (30 degrees forward) not straight side, to protect the shoulder.", "Thumb Up: Keep thumb up during raises to clear the acromion.", "No Upright Rows: They cause internal rotation + elevation = Impingement."],
      arabic: ["مستوى اللوح: قم بالرفعات في 'مستوى اللوح' (30 درجة للأمام) ليس الجانب المستقيم، لحماية الكتف.", "الإبهام لأعلى: ابق الإبهام لأعلى أثناء الرفعات لتجاوز الأخرم.", "لا صفوف عمودية: تسبب دوراناً داخلياً + رفعاً = انحشار."]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Stability)",
        focus: { english: "Scapular Control", arabic: "تحكم لوح الكتف" },
        exercises: [
          { id: "rc-m1-1", name: { english: "Scapular Pushups", arabic: "ضغط لوح الكتف" }, sets: "3", reps: "15", notes: {english: "Elbows locked.", arabic: "أكواع مقفلة."} },
          { id: "rc-m1-2", name: { english: "Side Lying Ext Rotation", arabic: "دوران خارجي جانبي" }, sets: "3", reps: "15", notes: {english: "Towel under arm.", arabic: "منشفة تحت الذراع."} }
        ]
      },
      {
        month: "Phase 2 (Strength)",
        focus: { english: "Cuff Strength", arabic: "قوة الكفة" },
        exercises: [
          { id: "rc-m2-1", name: { english: "Full Can Scaption", arabic: "رفع العلبة الممتلئة" }, sets: "3", reps: "12", notes: {english: "Thumbs up, Y shape.", arabic: "إبهام لأعلى، شكل Y."} },
          { id: "rc-m2-2", name: { english: "Face Pulls", arabic: "سحب الوجه" }, sets: "4", reps: "15", notes: {english: "External rotation focus.", arabic: "تركيز دوران خارجي."} }
        ]
      }
    ],
    recovery_exercises: [
      { id: "rc-rec-1", name: { english: "Pendulums", arabic: "بندول" }, description: { english: "Passive swing.", arabic: "تأرجح سلبي." } },
      { id: "rc-rec-2", name: { english: "Sleeper Stretch", arabic: "تمديد النائم" }, description: { english: "Gentle internal rotation.", arabic: "دوران داخلي لطيف." } }
    ],
    rehabilitation_strategies: { english: ["Scapulohumeral Rhythm", "Posterior Capsule Stretch"], arabic: ["إيقاع كتفي عضدي", "تمديد الكبسولة الخلفية"] },
    references: [],
    disclaimer: { english: "Rule out tear via MRI.", arabic: "استبعد التمزق بالرنين المغناطيسي." }
  },
  {
    id: "shin-splints",
    category: "lower",
    title: { english: "Shin Splint Soothe", arabic: "تهدئة جبائر الساق" },
    description: {
      english: "Medial Tibial Stress Syndrome (MTSS). Overload of the tibia periosteum due to traction from soleus/tibialis posterior.",
      arabic: "متلازمة إجهاد قصبة الساق الإنسي (MTSS). حمل زائد على سمحاق الظنبوب بسبب شد من النعلية/الظنبوبية الخلفية."
    },
    management_plan: {
      general: {
        english: "Bone overload injury. Stop running if pain is present. Diffuse pain = Shin Splints. Pinpoint pain = Stress Fracture (Red Flag). Increase Vitamin D + Calcium.",
        arabic: "إصابة حمل زائد على العظم. توقف عن الجري إذا وجد ألم. ألم منتشر = جبائر الساق. ألم محدد = كسر إجهاد (علامة حمراء). زد فيتامين د + كالسيوم."
      }
    },
    supplements: [
        { name: { english: "Calcium Citrate", arabic: "سيترات الكالسيوم" }, dose: { english: "1000mg", arabic: "1000 مجم" } },
        { name: { english: "Vitamin D3", arabic: "فيتامين د3" }, dose: { english: "5000 IU", arabic: "5000 وحدة" } }
    ],
    medications: [],
    plants_and_herbs: [],
    recipes: [],
    gym_tips: {
      english: ["Shoes: Replace every 300-500 miles.", "Surface: Avoid concrete; run on rubber track or grass.", "Gait: Increase cadence to decrease stride length and impact forces."],
      arabic: ["الأحذية: استبدلها كل 300-500 ميل.", "السطح: تجنب الخرسانة؛ اجر على مضمار مطاطي أو عشب.", "المشية: زد الإيقاع لتقليل طول الخطوة وقوى التأثير."]
    },
    monthly_workout_plan: [
      {
        month: "Phase 1 (Unload)",
        focus: { english: "Low Impact", arabic: "تأثير منخفض" },
        exercises: [
          { id: "ss-m1-1", name: { english: "Toe Taps", arabic: "نقر الأصابع" }, sets: "3", reps: "30s", notes: {english: "Strengthen Tibialis Ant.", arabic: "قو الظنبوبية الأمامية."} },
          { id: "ss-m1-2", name: { english: "Calf Stretching", arabic: "تمديد السمانة" }, sets: "3", reps: "30s", notes: {english: "Reduce traction.", arabic: "قلل الشد."} }
        ]
      },
      {
        month: "Phase 2 (Load)",
        focus: { english: "Calf Strength", arabic: "قوة السمانة" },
        exercises: [
          { id: "ss-m2-1", name: { english: "Soleus Raises", arabic: "رفع النعلية" }, sets: "3", reps: "15", notes: {english: "Seated (knees bent).", arabic: "جالس (ركبتين مثنيتين)."} },
          { id: "ss-m2-2", name: { english: "Heel Walks", arabic: "مشي الكعب" }, sets: "3", reps: "20m" }
        ]
      }
    ],
    recovery_exercises: [
      { id: "ss-rec-1", name: { english: "Ice Massage", arabic: "تدليك بالثلج" }, description: { english: "Directly on shin bone.", arabic: "مباشرة على عظم الساق." } }
    ],
    rehabilitation_strategies: { english: ["Load Management", "Gait Retraining"], arabic: ["إدارة الحمل", "إعادة تدريب المشية"] },
    references: [],
    disclaimer: { english: "Hop Test pain = See MD.", arabic: "ألم اختبار القفز = راجع طبيباً." }
  }
];
