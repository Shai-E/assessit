function toggelSearchModal() {
    if(document.getElementById("searchModal").style.display != "none"){
        document.getElementById("searchModal").style.display = "none";
        document.getElementById("searchKeyword").value = "";
    document.getElementById("searchResults").innerHTML = "";

        return;
    }
    document.getElementById("searchModal").style.display = "flex";
    closeNavBar();
}

function closeSearchModal() {
    document.getElementById("searchModal").style.display = "none";
}

let data = [
    {
        id: "opc-1",
        content: `אומדן שווי שוק למגוון נכסים ושימושים כגון מגורים, מסחר, תעשיה, משרדים ועוד...                                     שווי שוק מוגדר כתמורה הכספית או שווה ערך, שבה תבוצע עסקת מקרקעין בין מוכר מרצון לקונה מרצון, בתנאי שוק חופשי, כאשר לצדדים לעיסקה יש את כל המידע הנדרש לביצוע העיסקה והחשיפה של הנכס בשוק הייתה לאורך תקופה מספיקה, בהתאם לסוג הנכס, כאשר הצדדים נוהגים בזהירות הראויה, מתוך מודעות וללא לחץ. במציאות הגדרה זו אינה מתקיימת במלואה. המידע אינו שלם לשני הצדדים בעיסקה, קיימת מערכת לחצים הפועלת על הצדדים, תקופת הזמן לעיתים אינה מספיקה, לכל צד יש את הערכותיו הסוביקטיביות. כתוצאה מכך בעסקאות של נכסים בעלי מאפיינים דומים עשוי להתקבל פיזור מחירים בטווח ממוצע שבין 5%-10%, בהתאם למורכבות הנכס ואף למעלה מזה בנכסים עם מאפיינים מיוחדים. הערך הסביר לנכס הינו בטווח פיזור מחירים.`,
        keywords: ""
    },
    {
        id: "opc-2",
        content: `הפחתות היטל השבחה - לפי תיקון 84 לחוק                                             חשוב לדעת – היטל השבחה אינו גזירה משמיים וניתן לערער עליו. 
        יש לזכור כי בהתאם להוראות החוק ניתן לערר על החיוב בהיטל השבחה עד 45 מיום קבלת שומת הועדה מטעם הועדה המקומית. 
        לאחר תום תקופה זו לא ניתן יהיה לערער והשומה תהא חלוטה. 
        משרדנו בעל ניסיון רב בעריכת שומות נגדיות וייצוג לקוחות בדיונים מקצועיים, הן בועדות ערר והן מול שמאים מכריעים.
        במהלך השנים הפחית המשרד סכום מצטבר שנאמד במליוני שקלים בתשלומי היטל השבחה ללקוחות המשרד. 
        אז מהו בכלל היטל השבחה?
        היטל ההשבחה הינו, למעשה, סוג של מס המשולם לועדה המקומית לתכנון ולבניה, כלומר לעירייה/ למועצה (מס מוניציפאלי). 
        בהתאם להוראות סעיף 196 א' לחוק התכנון והבניה, היטל ההשבחה מוטל בגין עליית שווי מקרקעין עקב אישור תכנית, בקשה להיתר בניה, מתן הקלה או התרת שימוש חורג. 
        בעברית פשוטה – בקרות אחד המקרים המתוארים לעיל (מכירת הנכס או בקשה להיתר) הוועדה המקומית מוציאה חוות דעת שנערכה ע"י שמאי מוסמך מטעמה, הבוחנת את כל התכניות ו/או ההקלות שאושרו ע"י הועדה המקומית מהיום שבו נרכש הנכס ועד היום בו מבוקש המימוש (מכירה או בקשה להיתר). 
        במידה ונמצאה השבחה שנבעה מאישור תכנית כלשהי, ישולם מס בשיעור של 50% מגובה ההשבחה שנקבעה בשומת הוועדה, למועד אישור התכנית למתן תוקף. 
        לדוגמא:
        בשנת 2000 רכש ישראל ישראלי מגרש בשטח 500 מ"ר לבניית בית מגורים חד קומתי בשטח מירבי של 100 מ"ר.
        בשנת 2005 אישרה הועדה המקומית לתכנון ולבניה תכנית המאפשרת בניית קומה נוספת ובכך הגדילה את השטח הבית לשטח מירבי של 200 מ"ר.
        בשנת 2010 אישרה הועדה המקומית לתכנון ולבניה תכנית נוספת, המאפשרת בניית עליית גג ובריכת שחייה.
        בשנת 2019 מכר מר ישראלי את המגרש, כשהוא ריק ופנוי.
        היטל ההשבחה שיקבע במקרה הזה יורכב מהשבחה של 2 תכניות, כדלהלן: 
        השבחה ראשונה בגין הרחבת הזכויות לקומה נוספת, לפי הערכים שהיו בשנת 2005.
        ההשבחה השנייה הינה בגין הרחבת הזכויות לעליית גג ובריכה פרטית, לפי הערכים שהיו נהוגים 2010.
        ההשבחה מכל תכנית ותכנית תוצמד למדד המחירים לצרכן או למדד תשומות הבניה, לפי הנמוך מביניהם, עד למועד תשלום ההיטל.
        בהתאם להוראות תיקון 84 לחוק התכנון ובניה, ניתן לערער על קביעת שומת הוועדה בשני הליכים אפשריים, כדלהלן:
        בקשה למינוי שמאי מכריע והגשת שומה נגדית ("שומה אחרת").
        בקשה זו מוגשת במקרה ויש השגה על גובה ההשבחה, מטענות מקצועיות – שמאיות.
        ערעור לועדת ערר, במקרה של השגה על עצם החיוב בהיטל השבחה.
        `,
        keywords: ""
    },
    {
        id: "opc-3",
        content: `אומדן והפחתת מיסוי מקרקעין
        מיסוי מקרקעין משולם לרשות המיסים (להבדיל מהיטל השבחה המשולם לעירייה) וניתן להפרידו לשני מיסים עיקריים: 
        מס שבח – בהתאם להוראות החוק, מס השבח חל על המוכר בעת מכירת הנכס. 
        החבות במס תחול על השבח שנוצר מיום רכישת הנכס ועד מכירתו. 
        שיעור המס תלוי בגורמים רבים ובינהים שנת הרכישה, זכאות לפטורים מסויימים ומהות הנכס. 
        חשוב לדעת כי במקרים מסויימים ניתן להשיג על דרישת התשלום. 
        למשרדנו ניסיון רב בעריכת חוות דעת להפחתת מס שבח ובייצוג בדיונים מול פקידי שומה. 
        מס רכישה – בהתאם להוראות החוק, מס הרכישה חל על רוכש זכויות במקרקעין, בהתאם למדרגות המס ולסוג המקרקעין.
        `,
        keywords: ""
    },
    {
        id: "opc-4",
        content: `חוות דעת לבטוחות בנקאיות
        חוות דעת לבטוחה בנקאית נכתבת בהתאם לתקן 19 לתקינה השמאית, שהינו תקן שמרני, שמטרתו שיקוף ערך הנכס למטרת בטוחה. 
        אז מה זה בעצם "ערך למטרת בטוחה"?
        על מנת שהבנק הממן יאשר את הלוואה, הוא רוצה לדעת מה יהיה שווי הנכס במימוש מיידי, בניכוי כל המיסים הצפויים ובהתעלם מחריגות בניה ו/או פוטנציאל, ככל ואלו קיימים בנכס. 
        במילים פשוטות – כדי שהבנק יתן לכם את הכסף, הוא רוצה לדעת כמה ישאר לו ביד אם חלילה יגיע למצב שלא תצליחו להחזיר את התשלומים החודשיים והוא יצטרך לעקל את הנכס. 
        האם יכול להיות ש"שווי שוק" לא זהה ל"ערך למטרת בטוחה"? 
        התשובה היא כן. בשוק החופשי, השוק לקוח בחשבון גם חריגות בניה. למשל, אם בבית מסויים נבנה מרתף בחריגת בנייה, השוק יהיה מוכן לשלם על המרתף הזה (אולי לא את אותו הסכום אילו היה המרתף מאושר אבל כן היה מוכן לשלם משהו). בהתאם להוראות התקינה השמאית, ערך למטרת בטוחה לא מביא בחשבון בנייה שבוצעה ללא היתר בניה. במקרה הנ"ל הערך למטרת בטוחה יהיה נמוך משווי הנכס בשוק החופשי. 
        
        `,
        keywords: ""
    },
    {
        id: "opc-5",
        content: `שווי זכויות בנכסים המוחזקים ע"י דייר מוגן
        במדינת ישראל ישנם מס' רב של נכסים המוחזקים ע"י דייר מוגן, בהתאם לחוק הגנת הדייר נוסח משולב תשל"ב – 1972. 
        החוק חל על דיירים המחזיקים בדירות מגורים או בתי עסק שנרכשו תמורת דמי מפתח. רכישה בדמי מפתח היא, למעשה, מעין הכלאה בין רכישת הנכס לשכירותו. בעסקה זו הדייר משלם מחיר נמוך משווי השוק של אותו הנכס, ובתמורה מקבל הדייר חזקה על הנכס עד יום מותו, כאשר הוא ממשיך לשלם דמי שכירות נמוכים באופן משמעותי מדמי השכירות הנהוגים בשוק. 
        בישראל, מרבית הנכסים המוחזקים ע"י דיירים מוגנים הינם בבעלות מדינת ישראל (ע"י רשות הפתוח וחברת עמידר), ובכל זאת ישנם עוד מס' לא מועט של נכסים בבעלות פרטית, המוחזקים בדיירות מוגנת. 
        כיום, עסקאות בדמי מפתח כמעט ואינן מתבצעות, בשל חוסר כדאיות כלכלית. 
        מדינת ישראל מצידה מנסה להיפטר מנכסים אלו ומוכרת אותם או לדיירים עצמם או לצד ג' במכרזים חופשיים. 
        אומדן שווי נכס המוחזק בדיירות הינו סוגיה מורכבת מאוד המחייבת הכרה של החוק ושל מערכת היחסים המשפטית בין הבעלים לדייר המוגן. 
        למשרדנו ניסיון רב באומדן שווי נכסים המוחזקים בדיירות מוגנת ואומדן שווי זכויות הדייר בנכסים אלו, לרבות קביעת עלויות פינוי הדייר במקרים בהם הבעלים מפנה את הדייר מהנכס.  

        `,
        keywords: ""
    },
    {
        id: "opc-6",
        content: `דו"ח אפס
        דו"ח אפס (0) הינו חוות דעת שמאית – כלכלית המשקף את ההיתכנות הכלכלית בפרויקט נדל"ן עבור היזם. 
        כאשר יזם מעוניין לבנות בניין, הוא צריך להכין תכנית כלכלית מקצועית שתשקף את כל הליכי הפרויקט, החל מרכישת הקרקע, כלה בכל עלויות הבניה להקמת הבניין, לרבות מימון ומיסוי, הכנסות הפרויקט ממכירת הדירות / היחידות בפרויקט, וזאת לצורך קביעת השורה התחתונה, החשובה ביותר שהינה הרווח היזמי הצפוי. 
        למעשה, בדו"ח האפס השמאי מפרק את הפרויקט לגורמים כמו שווי הקרקע, עלויות הבניה, צפי המכירות, מיסוי, עלויות מימון, תקופת בניית הפרויקט עד למסירת הדירות וע"י כך מאפשר חיזוי מקצועי של רווחיות הפרויקט. 
        יזם אשר תולה את מימוש הפרויקט במימון בנקאי, יהא מחוייב להציג לבנק המלווה את התכנית הכלכלית עליה הוא מסתמך ואת הרווח היזמי הצפוי לו. 
        יוחאי אהרונוב הינו שמאי מקרקעין מוסמך ובוגר הקורס לדו"חות אפס של מרכז הנדל"ן. 

        `,
        keywords: ""
    },
    {
        id: "opc-7",
        content: `תביעות לירידות ערך לפי סעיף 197
        סעיף 197 לחוק התכנון והבניה מאפשר תביעת פיצויים על פגיעה במקרקעין בגין אישור תכנית, שלא בדרך הפקעה. 
        האפשרות לתבוע שמורה לבעלי זכויות במקרקעין המצויין בתחום התכנית או גובלים עימה. 
        ניתן להגיש את התביעה עד 3 שנים מיום אישור התכנית, בצירוף חוות דעת שמאית המוכיחה את ירידת ערך המקרקעין. 
        `,
        keywords: ""
    },
    {
        id: "ex-1",
        content: `אתר משרד המשפטים - הזמנת נסח טאבו
        לחץ כאן להזמנת נסח טאבו
        נסח טאבו הינו שטר בעלות בנכס. בעזרת הנסח הנ"ל ניתן לקבל את כל המידע הנחוץ אודות הנכס, ההצמדות השייכות לו, הבעלים בנכס, הערות אזהרה, עיקולים על הנכס וכל פרט רלוונטי אחר. <br/>
        על מנת לאתר את נסח הטאבו שלכם, הזינו באתר זה את פרטי הגוש, חלקה ותת חלקה (לא תמיד יש תת חלקה) והזמינו את הנסח. הזמנת הנסח לוקחת דקות אחדות וכרוכה בתשלום המשולם למשרד המשפטים. 
        `,
        keywords: ""
    },
    {
        id: "ex-2",
        content: `אתר משרד המשפטים - איתור תיק בית משותף
        לחץ כאן לאיתור תיק בית משותף
        תיק בית משותף הינו תיק רישום מקרקעין הכולל מסמכים בדבר רישום בניין או קובץ בניינים כ"בית משותף", 
        כך שכל דירה ו/או יחידה קניינית כלשהי בבניין נרשמת כ"תת חלקה".
        בין יתר המסמכים המצויים בתיק הבית המשותף, מצוי תשריט המאפשר לזהות את מיקום הדירה בבניין
        ואת ההצמדות השייכות לאותה דירה בבניין.
        זיהוי הנכס בפועל מתאפשר תוך בחינת נסח הטאבו ותיק הבית הבית המשותף.
        על מנת לאתר את תיק הבית המשותף שלכם, הזינו באתר זה את פרטי הגוש והחלקה והזמינו את התיק.
        הזמנת התיק לוקחת כמה שעות ועד כמה ימים, וכרוכה בתשלום המשולם למשרד המשפטים. 
        `,
        keywords: ""
    },
    {
        id: "links-container",
        content: `אתר רשות מקרקעי ישראל
        `,
        keywords: ""
    }
]


function lookForKeywords(){
    
    let keyString = document.getElementById("searchKeyword").value;

    if(keyString === ""){
        document.getElementById("searchResults").innerHTML = "";
        return;
    }


    let keywordsArr =  keyString.split(" ");
    keywordsArr = keywordsArr.filter(word => word!="");

    let searchResults = [];

    for (let i=0;i<data.length;i++){
        if(data[i].content.includes(keyString)){
            let newContent = "&#8226; "+data[i].content.slice((data[i].content.lastIndexOf(keyString)),(data[i].content.lastIndexOf(keyString)+60))+"...";
            let newDataItem = {...data[i]};
            newDataItem.content = newContent;
            searchResults.push(newDataItem);
        }
    }

    let searchItemsToShow = "";
    for (let i=0;i<searchResults.length;i++){
        let itemDiv = '<div class="search-item" onclick="goToSearchItem(\''+searchResults[i].id+'\');">'+searchResults[i].content+'</div>';
        searchItemsToShow = searchItemsToShow + itemDiv;
    }

    document.getElementById("searchResults").innerHTML = searchItemsToShow;




}



function goToSearchItem(id){
    toggelSearchModal();
    document.getElementById(id).click();
    if(id==="ex-1"||id==="ex-2"){
        closeOPCModal();
        if(id==="ex-1"){
            document.getElementById("ex-2").style.display = "none";
        }
        if(id==="ex-2"){
            document.getElementById("ex-1").style.display = "none";
        }
        if(document.getElementById(id).style.display != "flex"){
            document.getElementById(id).style.display = "flex";
        }
    } else {
        document.getElementById("ex-2").style.display = "none";
        document.getElementById("ex-1").style.display = "none";
    }
    document.getElementById(id).focus();
    document.getElementById(id).scrollIntoView();
}