let chess_box = Array(8).fill(Array(8).fill(0));

function draw() {
	let out = '';
	let box_count = 0;
	for (let i = 0; i < chess_box.length; i++) {
		let arr = chess_box[i];
		for (let k = 0; k < arr.length; k++) {
			if (box_count%2 == 0) {
				out += `<div class="chess_block" data-x="${k}" data-y="${i}"></div>`;
			}
			else {
				out += `<div class="chess_block black_box" data-x="${k}" data-y="${i}"></div>`;
			}
			box_count ++;
		}
		box_count ++;
		document.querySelector('#field').innerHTML = out;
	}


}

	draw();

		let count = 0;
		let current_x = Math.floor(Math.random()*8);
		let current_y = Math.floor(Math.random()*8);

		function horse() {

			document.querySelector(`.chess_block[data-x="${+current_x}"][data-y="${+current_y}"]`).classList.add("active");


			let step = [document.querySelector(`.chess_block[data-x="${+current_x + 2}"][data-y="${+current_y + 1}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x - 2}"][data-y="${+current_y + 1}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x + 2}"][data-y="${+current_y - 1}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x + 1}"][data-y="${+current_y + 2}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x - 1}"][data-y="${+current_y - 2}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x + 1}"][data-y="${+current_y - 2}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x - 1}"][data-y="${+current_y + 2}"]`),
						document.querySelector(`.chess_block[data-x="${+current_x - 2}"][data-y="${+current_y - 1}"]`)];


			for (let i = step.length - 1; i >= 0; i--) {
				if (!step[i] || step[i].classList.contains("active")) {
					step.splice(i, 1);
				}

			}

			let nextArr = [];

			function two_step() {

				for (let i = 0; i < step.length; i++) {
					let next_x = step[i].getAttribute('data-x');
					let next_y = step[i].getAttribute('data-y');
					let step_two = [document.querySelector(`.chess_block[data-x="${+next_x + 2}"][data-y="${+next_y + 1}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x - 2}"][data-y="${+next_y + 1}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x + 2}"][data-y="${+next_y - 1}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x + 1}"][data-y="${+next_y + 2}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x - 1}"][data-y="${+next_y - 2}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x + 1}"][data-y="${+next_y - 2}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x - 1}"][data-y="${+next_y + 2}"]`),
						document.querySelector(`.chess_block[data-x="${+next_x - 2}"][data-y="${+next_y - 1}"]`)
					];
					for (let i = step_two.length - 1; i >= 0; i--) {
						if (!step_two[i] || step_two[i].classList.contains("active")) {
							step_two.splice(i, 1);
						}

					}

					nextArr.push(step_two.length);
				}
				return nextArr;
			}

			nextArr = two_step();

			let k = nextArr.length;
			let index = 0;
			let min = nextArr[0];
			while (k--) {
				if (nextArr[k] < min) {
					min = nextArr[k];
					index = k;
				}
			}

			count ++
			current_x = step[index].getAttribute("data-x");
			current_y = step[index].getAttribute("data-y");
			step[index].classList.add("active");
			console.log(count);
			if (count >= 63) {
				clearInterval(interval);
				setTimeout(() => {
					alert('Я смог обойти все поле');
					document.location.reload(true);
				},100)
			}

		}

			let interval = setInterval(() => {
				horse();
			},200);









