const colors = ["black", "#B9B28A", "gray", "#7886C7", "#f4a261","white"];
        let index = 0;

        document.getElementById("toggleButton").addEventListener("click", function() {
            index = (index + 1) % colors.length;
            document.body.style.backgroundColor = colors[index];

            // Change text color for better readability
            document.body.style.color = (colors[index] === "black") ? "white" : "black";
        });

        