
const template = document.querySelector("#template");

const generatecolumn = () =>{
	const column = document.createElement('div');
	column.classList.add('column');
	return column;

}

const generateRow =(str)=>{ 
	const node = template.content.cloneNode(true)
	const div =	node.querySelector("div");			
	div.textContent = str;
	return div;

	};

const abs =()=> {
	const container = document.querySelector('.container');
	const fragment = document.createDocumentFragment();
	for (let i = 1; i<=10; i++) {
		const column = generatecolumn ();
	console.log(`===columb${i}`);
		for (let j=1; j<=10; j++)
			{column.appendChild(generateRow(`${i} x ${j} = ${i*j}`));
		}
		fragment.appendChild(column);
	}

		container.appendChild(fragment);
};

abs();

 
let text  = 'Привет!';
let text12 = `${text}Я строка`;
console.log(text12);