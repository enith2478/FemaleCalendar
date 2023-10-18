document.addEventListener("DOMContentLoaded", function () {
    const dateList = document.getElementById("dateList");
    const addAllButton = document.getElementById("addAllButton");

    // An array of important dates related to women's reproductive health
    const importantDates = [
        { date: "2023-09-04", description: "International Women's Health and Fitness Day" },
        { date: "2023-10-01", description: "Breast Cancer Awareness Month" },
        { date: "2023-11-17", description: "World Prematurity Day" },
        { date: "2023-11-25", description: "International Day for the Elimination of Violence Against Women" },
        { date: "2023-12-01", description: "World AIDS Day" },
        { date: "2024-01-01", description: "Cervical Health Awareness Month" },
        { date: "2024-02-06", description: "International Day of Zero Tolerance for Female Genital Mutilation" },
        { date: "2024-03-01", description: "Endometriosis Awareness Month" },
        { date: "2024-03-08", description: "International Women's Day" },
        { date: "2024-03-24", description: "World Tuberculosis Day" },
        { date: "2024-04-01", description: "National Infertility Awareness Week" },
        { date: "2024-05-05", description: "International Day of the Midwife" },
        { date: "2024-05-08", description: "World Ovarian Cancer Day" },
        { date: "2024-05-28", description: "Menstrual Hygiene Day" },
        { date: "2024-05-28", description: "International Day of Action for Women's Health" },
        { date: "2024-08-01", description: "World Breastfeeding Week" },
        { date: "2024-09-01", description: "Polycystic Ovary Syndrome (PCOS) Awareness Month" },
        // Add more dates with descriptions as needed
    ];
     // Function to add a single date as a button to the list
    function addDateToCalendar(dateInfo) {
        const dateButton = document.createElement("button");
        dateButton.className = "date-button";
        dateButton.innerText = dateInfo.description;

        dateButton.addEventListener("click", function () {
            // Open Google Calendar link when the button is clicked
            const startDate = new Date(dateInfo.date).toISOString().replace(/-|:|\.\d+/g, "");
            const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${dateInfo.description}&dates=${startDate}/${startDate}`;
            window.open(googleCalendarLink, "_blank");
        });

        dateList.appendChild(dateButton);
    }

    // Add all dates to the list
    importantDates.forEach((dateInfo) => {
        addDateToCalendar(dateInfo);
    });
});