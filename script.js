let shareCount = 0;
        function share() {
            shareCount++;
            document.getElementById("progress").innerText = `แชร์แล้ว ${shareCount} / 10`;
            if (shareCount >= 10) {
                window.location.href = "congratulations.html";
            }
        }