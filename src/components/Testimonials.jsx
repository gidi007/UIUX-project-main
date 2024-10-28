import { FeedbackCard } from "../components";
import { feedback } from "../constants";
import styles from "../style";

const Testimonials = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
	>
		<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

		<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
			<h1 className={`${styles.heading2} text-center`}>
				What people are <br className="sm:block hidden" /> saying about us
			</h1>
			<p className={`${styles.paragraph} text-left max-w-[500px] mt-4 md:mt-0`}>
				With our platform, you'll experience seamless transactions and
				business growth in any corner of the world. See what others have to say!
			</p>
		</div>

		<div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>

		{/* Removed the client logos section */}

		<div className="flex justify-center mt-8">
			<button
				className="py-3 px-6 bg-blue-gradient text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
			>
				Join the Community
			</button>
		</div>
	</section>
);

export default Testimonials;
