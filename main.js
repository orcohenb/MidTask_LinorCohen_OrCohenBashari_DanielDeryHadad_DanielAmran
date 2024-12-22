
const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "משחקי בנייה והרכבה",
            "img": "Construction_and_assembly.png",
            "content": "פעילות המאפשרת יצירת מבנים באמצעות בלוקים או קוביות.",
            "link": "https://kidsbest.co.il/product-category/%D7%91%D7%A0%D7%99%D7%99%D7%94-%D7%95%D7%94%D7%A8%D7%9B%D7%91%D7%94/?srsltid=AfmBOoozHu61tzOJRj0hgeIEvR8JAdlsF4fol9QCUFBvaGxJCe9O-EVp",
            "tag": "קל"
        },
        {
            "id": 2,
            "title": "משחקי כדור במעגל",
            "img": "Ball_games_in_circle.png",
            "content": "משחק שיתוף פעולה בקבוצה באמצעות מסירות כדור.",
            "link": "https://he.wikipedia.org/wiki/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%94:%D7%9E%D7%A9%D7%97%D7%A7%D7%99_%D7%9B%D7%93%D7%95%D7%A8",
            "tag": "בינוני"
        },
        {
            "id": 3,
            "title": "מצא את המטמון",
            "img": "Find_the_treasure.png",
            "content": "משחק חיפוש פריטים חבויים בהתאם לרמזים.",
            "link": "https://he.wikipedia.org/wiki/%D7%97%D7%A4%D7%A9_%D7%90%D7%AA_%D7%94%D7%9E%D7%98%D7%9E%D7%95%D7%9F",
            "tag": "בינוני"
        },
        {
            "id": 4,
            "title": "יצירה",
            "img": "Creative_hour.png",
            "content": "הכנת כרטיסי ברכה או שימוש בחומרי יצירה מגוונים.",
            "link": "https://www.pinterest.com/limorday/%D7%99%D7%A6%D7%99%D7%A8%D7%94-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D/",
            "tag": "קל"
        },
        {
            "id": 5,
            "title": "משחק תחנות",
            "img": "Traffic_stations.png",
            "content": "מסלול מכשולים מותאם עם תחנות שונות לתרגילי תנועה.",
            "link": "https://efsharibari.health.gov.il/active-life/exercising/classic-games/",
            "tag": "קשה"
        },
        {
            "id": 6,
            "title": "משחקי דמיון",
            "img": "Imaginative_games.png",
            "content": "הילדים משחקים תפקידים, כמו מסעדה, משטרה או חנות",
            "link": "https://www.novakid.co.il/blog/10-ideas-for-imagination-games-for-children-and-fantasy-games-that-encourage-creativity/",
            "tag": "בינוני"
        },
        {
            "id": 7,
            "title": "משחקי מים",
            "img": "Water_games.png",
            "content": "פעילות חווייתית של התזת מים ומשחק עם דליים וכלי מים.",
            "link": "https://xnet.ynet.co.il/articles/0,7340,L-5732872,00.html",
            "tag": "בינוני"
        },
        {
            "id": 8,
            "title": "פעילות שפים",
            "img": "Preparing_delicacies.png",
            "content": "אפייה ובישול קל כמו הכנת פיצה, עוגיות או שייקים.",
            "link": "https://www.10dakot.co.il/category/%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D//",
            "tag": "בינוני"
        },
        {
            "id": 9,
            "title": "תרגילי רוגע",
            "img": "Relaxation_exercises.png",
            "content": "פעילות הכוללת נשימות, יוגה קלה ומשחקי תחושה נעימים.",
            "link": "https://healthy.walla.co.il/item/3437462",
            "tag": "קל"
        },
        {
            "id": 10,
            "title": "פעילות בטבע",
            "img": "Nature_activity.png",
            "content": "טיול קצר עם משימות כמו איסוף עלים או צפייה בציפורים.",
            "link": "https://www.parks.org.il/peilut/",
            "tag": "קל"
        }

    ]
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
     //document.body.style.backgroundImage = "url('img/background1.png')"; // נתיב התמונה
    // document.body.style.backgroundSize = "cover"; // התאמה למסך
    // document.body.style.backgroundRepeat = "no-repeat"; // ללא חזרה
    // document.body.style.backgroundAttachment = "fixed"; // רקע קבוע בעת גלילה
    // document.body.style.backgroundPosition = "center"; // מיקום מרכזי
    // document.body.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // צבע רקע לבן עם שקיפות
    // document.body.style.backgroundBlendMode = "overlay"; // שילוב בין הרקע לתמונה

    const itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.setAttribute("class", "row"); // מבנה רשת

    // פונקציה להצגת כרטיסיות
    function displayCards(tag) {
        // ניקוי האזור המיועד להצגת הכרטיסים
        itemsContainer.innerHTML = "";

        // סינון הכרטיסיות לפי ה-tag שנבחר
        // אם "all" נבחר, מציגים את כל הכרטיסים, אחרת מציגים רק כרטיסים המתאימים ל-tag הנבחר
        let filteredItems = (tag === "all")
            ? jsonData.generators
            : jsonData.generators.filter(g => g.tag === tag);

        // קריאת הערך מתוך תיבת הטקסט של החיפוש
        const searchValue = document.getElementById("searchInput").value.trim();

        // אם יש ערך לחיפוש (לא ריק), מסננים את הכרטיסים בהתאם למילה שהוקלדה
        if (searchValue !== "") {
            // מסננים את הכרטיסים כך שיישארו רק אלה שכותרתם (title) מכילה את המחרוזת שהוקלדה
            filteredItems = filteredItems.filter(g => g.title.toLowerCase().includes(searchValue.toLowerCase()));
        }

        // מעבר על כל הכרטיסים המסוננים והצגתם
        filteredItems.forEach(g => {
            // יצירת אלמנט עוטף לכל כרטיס (עמודה ברשת של בוטסטראפ)
            const myCard = document.createElement("div");
            myCard.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 mb-4");

            // יצירת אלמנט הכרטיס עצמו
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            // יצירת קישור (לינק) שעוטף את התמונה בכרטיס
            const myLink = document.createElement("a");
            myLink.setAttribute("href", g.link);
            myLink.setAttribute("target", "_blank");

            // יצירת תמונה והצבתה בתוך הקישור
            const myImg = document.createElement("img");
            myImg.setAttribute("class", "card-img-top");
            myImg.setAttribute("style", "width: 100%;");
            myImg.setAttribute("src", `img/${g.img}`);
            myLink.appendChild(myImg);
            card.appendChild(myLink);

            // יצירת כותרת הכרטיס
            const myH5 = document.createElement("h5");
            myH5.setAttribute("class", "card-title");
            myH5.setAttribute("id", `id_${g.id}`);

            // משתנה זמני לכותרת הכרטיס
            let titleText = g.title;

            // אם המשתמש חיפש טקסט מסוים, ננסה לסמן אותו בצהוב בכותרת
            if (searchValue !== "") {
                // המרת המחרוזת המחופשת והמחרוזת של הכותרת ל-lowercase על מנת לאפשר חיפוש ללא תלות באותיות רישיות/קטנות
                const lowerTitle = titleText.toLowerCase();
                const lowerSearch = searchValue.toLowerCase();

                // מציאת המיקום הראשון של מילת החיפוש בכותרת
                const index = lowerTitle.indexOf(lowerSearch);

                // אם המילה נמצאה בכותרת
                if (index !== -1) {
                    // חלק הטקסט שלפני המילה המחופשת
                    const before = titleText.substring(0, index);
                    // המילה המחופשת בכותרת, בדיוק כפי שהופיעה (כולל אותיות רישיות)
                    const match = titleText.substring(index, index + searchValue.length);
                    // חלק הטקסט אחרי המילה המחופשת
                    const after = titleText.substring(index + searchValue.length);

                    // הרכבת הכותרת מחדש עם סימון המילה בצהוב
                    titleText = `${before}<span style="background-color: yellow;">${match}</span>${after}`;
                }
            }

            // הצבת הכותרת המעודכנת (עם הסימון בצהוב אם רלוונטי)
            myH5.innerHTML = titleText;
            // אירוע לחיצה על הכותרת (לא פונקציונאלי כרגע, רק רישום לקונסול)
            myH5.addEventListener("click", MHover);
            card.appendChild(myH5);

            // יצירת אלמנט הטקסט של תוכן הכרטיס
            const myContent = document.createElement("div");
            myContent.setAttribute("class", "card-text");
            myContent.innerHTML = g.content;
            card.appendChild(myContent);

            // הוספת הכרטיס למכולה הראשית
            myCard.appendChild(card);
            itemsContainer.appendChild(myCard);
        });
    }

    function MHover(e) {
        console.log(e.target.id);
    }

    // האזנה ללחיצה על כפתורי הסינון
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function () {
            // הסרת active מכל הכפתורים
            document.querySelectorAll(".filter-btn").forEach(btn => {
                btn.classList.remove("active");
            });

            // הוספת active לכפתור שנלחץ
            this.classList.add("active");

            const tag = this.getAttribute("data-filter");
            displayCards(tag);
        });
    });


    // האזנה ללחיצה על כפתור החיפוש
    const searchButton = document.querySelector('input[type="button"][value="חיפוש"]');
    searchButton.addEventListener("click", function() {
        // קריאה לתצוגת כרטיסים על בסיס הסינון והחיפוש
        displayCards("all");
    });




    // הצגת כרטיסיות ברירת מחדל (למשל 'קל')
    displayCards("all");
});

