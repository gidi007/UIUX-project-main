import { stats } from "../constants";
import styles from "../style";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	const icons = [faGlobe, faUsers, faChartLine];

	return (
		<section
			ref={ref}
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative z-[1]`}
		>
			{stats.map((stat, index) => (
				<div
					key={stat.id}
					className={`flex-1 flex justify-start items-center flex-row m-3 ${
						inView ? "animate-bounce" : ""
					}`}
				>
					<FontAwesomeIcon
						icon={icons[index]}
						className="text-gradient text-[30px] mr-3"
						title={stat.description}
					/>
					<h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
						{stat.value}
					</h4>
					<p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
						{stat.title}
					</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
