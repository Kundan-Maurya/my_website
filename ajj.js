 let isOpen = false;

        function transformBoxes() {
            let boxes = document.querySelectorAll(".box");
            let btn = document.querySelector(".click-btn");
            let angleStep = 360 / boxes.length;
            let radius = 170;

            if (!isOpen) {
                boxes.forEach((box, index) => {
                    let angle = angleStep * index;
                    let x = radius * Math.cos(angle * Math.PI / 180);
                    let y = radius * Math.sin(angle * Math.PI / 180);
                    setTimeout(() => {
                        box.style.transform = `translate(${x}px, ${y}px)`;
                    }, index * 50);
                });

                btn.style.backgroundColor = "black";
                btn.style.color = "white";
               
            } else {
                boxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.style.transform = `translate(0, 0)`;
                    }, index * 50);
                });

                btn.style.backgroundColor = "rgb(0, 255, 221)";
                btn.style.color = "black";
       
            }

            isOpen = !isOpen;
        }

        function searchSong() {
            let input = document.getElementById("searchBox").value.trim();
            let songs = document.querySelectorAll(".box");

            songs.forEach(song => {
                song.classList.remove("highlight", "popup-effect");
            });

            if (input === "") return;

            let year = parseInt(input);
            if (isNaN(year)) return;

            songs.forEach(song => {
                let rangeText = song.getAttribute("data-range");
                let [start, end] = rangeText.split("-").map(Number);

                if (year >= start && year <= end) {
                    song.classList.add("highlight", "popup-effect");
                    setTimeout(() => {
                        song.classList.remove("popup-effect");
                    }, 1000);
                }
            });
        }
