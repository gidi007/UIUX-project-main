import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => {
	return (
		<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
			<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex items-center py-2 px-4 bg-discount-gradient rounded-lg mb-4">
					<img src={discount} alt="Discount Icon" className="w-8 h-8" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white font-bold">20% Discount</span> For{" "}
						<span className="text-white font-bold">1 Month</span> Account
					</p>
				</div>

				<div className="flex justify-between items-center w-full">
					<h1 className="flex-1 font-poppins font-semibold text-white leading-tight text-[52px] ss:text-[72px]">
						The Next <br className="sm:block hidden" />{" "}
						<span className="text-gradient">Generation</span>
					</h1>
					<div className="ss:flex hidden md:mr-4">
						<GetStarted />
					</div>
				</div>

				<h1 className="font-poppins font-semibold text-white text-[52px] ss:text-[68px] ss:leading-[100px] leading-tight">
					Payment Method
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards, and saving money. Discover the
					best options tailored for you.
				</p>
			</div>

			<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
				<img src={robot} alt="Billing Illustration" className="w-full h-full relative z-10" />
				<div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient animate-pulse opacity-90" />
				<div className="absolute z-1 w-[80%] h-[80%] bottom-40 white__gradient rounded-full animate-spin-slow opacity-80" />
				<div className="absolute z-0 w-[50%] h-[50%] right-20 top-20 blue__gradient animate-pulse opacity-90" />
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
