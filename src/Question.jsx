import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, id, info }) => {
	const [showMore, setShowMore] = useState(false);
	return (
		<article key={id} className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setShowMore(!showMore)}>
					{showMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			<p>{showMore && info}</p>
		</article>
	);
};

export default Question;
