const functionApi = "/api/GetAzureResumeCounter";

window.addEventListener("DOMContentLoaded", () => {
  // Get the last known count from localStorage (default to "Loading..." if not found)
  const lastCount = localStorage.getItem("visitCount") || "Loading...";
  const counterElement = document.getElementById("#counter");
  if (counterElement) {
    counterElement.innerText = lastCount;
  }

  // Fetch the latest count from the Azure Function
  getVisitCount();
});

const getVisitCount = () => {
  fetch(functionApi)
    .then((response) => response.json()) // Fetch response as JSON
    .then((data) => {
      const count = data.count || 0; // Adjust this to match your API response
      console.log("Fetched count:", count);

      const counterElement = document.getElementById("counter");
      if (counterElement) {
        counterElement.innerText = count;
      }

      // Store the latest count in localStorage
      localStorage.setItem("visitCount", count);
    })
    .catch((error) => {
      console.error("Error occurred while fetching visit count:", error);
    });
};
