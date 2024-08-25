        function toggleContent(card) {
            const moreContent = card.querySelector('.more-content');

            if (moreContent.style.display === "block") {
                moreContent.style.display = "none";
            } else {
                moreContent.style.display = "block";
            }
        }
    